extern crate console_error_panic_hook;
extern crate bincode;
extern crate lyon;
extern crate wasm_bindgen;
extern crate web_sys;

use lyon::math::{Point, point, rect};
use lyon::tessellation::geometry_builder::{GeometryBuilder, VertexId, GeometryBuilderError};
use lyon::tessellation::{StrokeVertex, FillVertex, StrokeOptions, FillOptions, FillTessellator, Count};
use lyon::tessellation::basic_shapes::*;
use std::cell::RefCell;
use std::u32;
use wasm_bindgen::prelude::*;

pub trait HasPosition {
  fn get_position(&self) -> Point;
}

impl HasPosition for FillVertex {
  fn get_position(&self) -> Point {
    self.position
  }
}

impl HasPosition for StrokeVertex {
  fn get_position(&self) -> Point {
    self.position
  }
}

struct Outputs {
  pub positions: Vec<f32>,
  pub colors: Vec<f32>,
  pub ids: Vec<f32>,
  pub indices: Vec<u32>
}

impl Outputs {
  pub fn new() -> Self {
    Outputs {
      positions: Vec::new(),
      colors: Vec::new(),
      ids: Vec::new(),
      indices: Vec::new()
    }
  }
}

struct ToFloatArrayWithColor<'l> {
  color: f32,
  id_r: f32,
  id_g: f32,
  id_b: f32,
  data: &'l mut Outputs,
  vertex_offset: u32,
  index_offset: u32
}

impl<'l> ToFloatArrayWithColor<'l> {
  pub fn new(color: f32, id_r: f32, id_g: f32, id_b: f32, data: &'l mut Outputs) -> Self {
    let vertex_offset = data.positions.len() as u32;
    let index_offset = data.indices.len() as u32;
    ToFloatArrayWithColor {
      color,
      id_r,
      id_g,
      id_b,
      data,
      vertex_offset,
      index_offset 
    }
  }
}

impl<'l, Vertex: HasPosition> GeometryBuilder<Vertex> for ToFloatArrayWithColor<'l> { fn begin_geometry(&mut self) { 
    console_error_panic_hook::set_once();
    self.vertex_offset = self.data.positions.len() as u32;
    self.index_offset = self.data.indices.len() as u32;
  }
  fn end_geometry(&mut self) -> Count {
    Count {
      vertices: self.data.positions.len() as u32 - self.vertex_offset,
      indices: self.data.indices.len() as u32 - self.index_offset
    }
  }

  fn add_vertex(&mut self, vertex: Vertex) -> Result<VertexId, GeometryBuilderError> {
    let position = vertex.get_position();
    self.data.positions.push(position.x);
    self.data.positions.push(position.y);
    self.data.colors.push(self.color);
    self.data.ids.push(self.id_r);
    self.data.ids.push(self.id_g);
    self.data.ids.push(self.id_b);
    if self.data.colors.len() >= u32::MAX as usize {
      return Err(GeometryBuilderError::TooManyVertices);
    }

    let len = self.data.positions.len();
    Ok(VertexId((len as u32) / 2 - 1))
  }

  fn add_triangle(&mut self, a: VertexId, b: VertexId, c: VertexId) {
    self.data.indices.push(a.into());
    self.data.indices.push(b.into());
    self.data.indices.push(c.into());
  }

  fn abort_geometry(&mut self) {
    self.data.positions.truncate(self.vertex_offset as usize);
    self.data.indices.truncate(self.index_offset as usize);
    self.data.colors.truncate(self.vertex_offset as usize / 2);
    self.data.ids.truncate(self.vertex_offset as usize * 3 / 2);
  }
}

thread_local!(static OUTPUT: RefCell<Outputs> = RefCell::new(Outputs::new()));
thread_local!(static STROKE_OPTIONS: RefCell<StrokeOptions> = RefCell::new(StrokeOptions::DEFAULT));
thread_local!(static FILL_OPTIONS: RefCell<FillOptions> = RefCell::new(FillOptions::DEFAULT.assume_no_intersections()));

fn stroke_options() -> StrokeOptions {
  STROKE_OPTIONS.with(|stroke_options| stroke_options.borrow().clone())
}

fn fill_options() -> FillOptions {
  FILL_OPTIONS.with(|fill_options| fill_options.borrow().clone())
}

fn update_stroke_options<F : FnOnce(&mut StrokeOptions) -> StrokeOptions>(update: F) {
  STROKE_OPTIONS.with(|stroke_options_cell| {
    stroke_options_cell.replace_with(update);
  });
}

fn update_fill_options<F : FnOnce(&mut FillOptions) -> FillOptions>(update: F) {
  FILL_OPTIONS.with(|fill_options_cell| {
    fill_options_cell.replace_with(update);
  });
}

#[wasm_bindgen(js_name = "setPixelSize")]
pub extern fn js_set_pixel_size(pixel_size: f32) {
  let new_tolerance = pixel_size / 5.0;
  update_stroke_options(|&mut stroke_options| {
    stroke_options
      .with_tolerance(new_tolerance)
      .with_line_width(pixel_size * 2.0)
  });
  update_fill_options(|&mut fill_options| fill_options.with_tolerance(new_tolerance));
}

#[wasm_bindgen(js_name = "setLineWidth")]
pub extern fn js_line_width(width: f32) {
  update_stroke_options(|&mut stroke_options| {
    stroke_options.with_line_width(width)
  });
}

#[wasm_bindgen(js_name = "strokeTriangle")]
pub extern fn js_stroke_triangle(x1: f32, y1: f32, x2: f32, y2: f32, x3: f32, y3: f32, color: f32, id_r: f32, id_g: f32, id_b: f32) {
  OUTPUT.with(|output_cell| {
    let mut output = output_cell.borrow_mut();
    stroke_triangle(
      point(x1, y1),
      point(x2, y2),
      point(x3, y3),
      &stroke_options(),
      &mut ToFloatArrayWithColor::new(color, id_r, id_g, id_b, &mut output))
  });
}

#[wasm_bindgen(js_name = "strokeQuad")]
pub extern fn js_stroke_quad(x1: f32, y1: f32, x2: f32, y2: f32, x3: f32, y3: f32, x4: f32, y4: f32, color: f32, id_r: f32, id_g: f32, id_b: f32) {
  OUTPUT.with(|output_cell| {
    let mut output = output_cell.borrow_mut();
    stroke_quad(
      point(x1, y1),
      point(x2, y2),
      point(x3, y3),
      point(x4, y4),
      &stroke_options(),
      &mut ToFloatArrayWithColor::new(color, id_r, id_g, id_b, &mut output))
  });
}


#[wasm_bindgen(js_name = "strokeRectangle")]
pub extern fn js_stroke_rectangle(x: f32, y: f32, width: f32, height: f32, color: f32, id_r: f32, id_g: f32, id_b: f32) {
  OUTPUT.with(|output_cell| {
    let mut output = output_cell.borrow_mut();
    stroke_rectangle(
      &rect(x - width / 2.0, y - height / 2.0, width, height),
      &stroke_options(),
      &mut ToFloatArrayWithColor::new(color, id_r, id_g, id_b, &mut output))
  });
}

#[wasm_bindgen(js_name = "strokePolyLine")]
pub extern fn js_stroke_polyline(points: Vec<f32>, closed: bool, color: f32, id_r: f32, id_g: f32, id_b: f32) {
  OUTPUT.with(|output_cell| {
    let mut output = output_cell.borrow_mut();
    let constructed_points = points.chunks(2).map(|chunk| point(chunk[0], chunk[1]));
    stroke_polyline(
      constructed_points,
      closed,
      &stroke_options(),
      &mut ToFloatArrayWithColor::new(color, id_r, id_g, id_b, &mut output))
  });
}

#[wasm_bindgen(js_name = "strokeCircle")]
pub extern fn js_stroke_circle(x: f32, y: f32, r: f32, color: f32, id_r: f32, id_g: f32, id_b: f32) {
  OUTPUT.with(|output_cell| {
    let mut output = output_cell.borrow_mut();
    stroke_circle(
      point(x, y),
      r,
      &stroke_options(),
      &mut ToFloatArrayWithColor::new(color, id_r, id_g, id_b, &mut output))
  });
}

#[wasm_bindgen(js_name = "fillTriangle")]
pub extern fn js_fill_triangle(x1: f32, y1: f32, x2: f32, y2: f32, x3: f32, y3: f32, color: f32, id_r: f32, id_g: f32, id_b: f32) {
  OUTPUT.with(|output_cell| {
    let mut output = output_cell.borrow_mut();
    fill_triangle(
      point(x1, y1),
      point(x2, y2),
      point(x3, y3),
      &fill_options(),
      &mut ToFloatArrayWithColor::new(color, id_r, id_g, id_b, &mut output))
  });
}

#[wasm_bindgen(js_name = "fillQuad")]
pub extern fn js_fill_quad(x1: f32, y1: f32, x2: f32, y2: f32, x3: f32, y3: f32, x4: f32, y4: f32, color: f32, id_r: f32, id_g: f32, id_b: f32) {
  OUTPUT.with(|output_cell| {
    let mut output = output_cell.borrow_mut();
    fill_quad(
      point(x1, y1),
      point(x2, y2),
      point(x3, y3),
      point(x4, y4),
      &fill_options(),
      &mut ToFloatArrayWithColor::new(color, id_r, id_g, id_b, &mut output))
  });
}

#[wasm_bindgen(js_name = "fillRectangle")]
pub extern fn js_fill_rectangle(x: f32, y: f32, width: f32, height: f32, color: f32, id_r: f32, id_g: f32, id_b: f32) {
  OUTPUT.with(|output_cell| {
    let mut output = output_cell.borrow_mut();
    fill_rectangle(
      &rect(x - width / 2.0, y - height / 2.0, width, height),
      &fill_options(),
      &mut ToFloatArrayWithColor::new(color, id_r, id_g, id_b, &mut output))
  });
}

#[wasm_bindgen(js_name = "fillPolyLine")]
pub extern fn js_fill_polyline(points: Vec<f32>, color: f32, id_r: f32, id_g: f32, id_b: f32) {
  OUTPUT.with(|output_cell| {
    let mut output = output_cell.borrow_mut();
    let constructed_points = points.chunks(2).map(|chunk| point(chunk[0], chunk[1]));
    fill_polyline(
      constructed_points,
      &mut FillTessellator::new(),
      &fill_options(),
      &mut ToFloatArrayWithColor::new(color, id_r, id_g, id_b, &mut output))
  });
}

#[wasm_bindgen(js_name = "fillCircle")]
pub extern fn js_fill_circle(x: f32, y: f32, r: f32, color: f32, id_r: f32, id_g: f32, id_b: f32) {
  OUTPUT.with(|output_cell| {
    let mut output = output_cell.borrow_mut();
    fill_circle(
      point(x, y),
      r,
      &fill_options(),
      &mut ToFloatArrayWithColor::new(color, id_r, id_g, id_b, &mut output))
  });
}

#[wasm_bindgen(js_name = "getPositions")]
pub fn js_get_positions() -> Box<[f32]> {
  OUTPUT.with(|output_cell| {
    output_cell.borrow().positions.clone().into_boxed_slice()
  })
}

#[wasm_bindgen(js_name = "getColors")]
pub fn js_get_colors() -> Box<[f32]> {
  OUTPUT.with(|output_cell| {
    output_cell.borrow().colors.clone().into_boxed_slice()
  })
}

#[wasm_bindgen(js_name = "getId")]
pub fn js_get_ids() -> Box<[f32]> {
  OUTPUT.with(|output_cell| {
    output_cell.borrow().ids.clone().into_boxed_slice()
  })
}

#[wasm_bindgen(js_name = "getIndices")]
pub fn js_get_indices() -> Box<[u32]> {
  OUTPUT.with(|output_cell| {
    output_cell.borrow().indices.clone().into_boxed_slice()
  })
}

#[wasm_bindgen(js_name = "reset")]
pub fn js_reset() {
  OUTPUT.with(|output_cell| {
    let mut output = output_cell.borrow_mut();
    output.positions.clear();
    output.colors.clear();
    output.ids.clear();
    output.indices.clear();
  });
}
