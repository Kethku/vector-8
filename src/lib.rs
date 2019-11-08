extern crate console_error_panic_hook;
extern crate lyon;
extern crate wasm_bindgen;
extern crate web_sys;

use lyon::math::{Point, point, rect, size};
use lyon::tessellation::geometry_builder::{GeometryBuilder, VertexId, GeometryBuilderError};
use lyon::tessellation::{StrokeVertex, FillVertex, StrokeOptions, FillOptions, Count};
use lyon::tessellation::basic_shapes::*;
use std::cell::RefCell;
use std::u32;
use wasm_bindgen::prelude::*;
use web_sys::console::{log_1 as log};

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
  pub indices: Vec<u32>
}

impl Outputs {
  pub fn new() -> Self {
    Outputs {
      positions: Vec::new(),
      colors: Vec::new(),
      indices: Vec::new()
    }
  }
}

struct ToFloatArrayWithColor<'l> {
  color: [f32; 4],
  data: &'l mut Outputs,
  vertex_offset: u32,
  index_offset: u32
}

impl<'l> ToFloatArrayWithColor<'l> {
  pub fn new(color: [f32; 4], data: &'l mut Outputs) -> Self {
    let vertex_offset = data.positions.len() as u32;
    let index_offset = data.indices.len() as u32;
    ToFloatArrayWithColor {
      color,
      data,
      vertex_offset,
      index_offset 
    }
  }
}

impl<'l, Vertex: HasPosition> GeometryBuilder<Vertex> for ToFloatArrayWithColor<'l> {
  fn begin_geometry(&mut self) { 
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
    self.data.colors.push(self.color[0]);
    self.data.colors.push(self.color[1]);
    self.data.colors.push(self.color[2]);
    self.data.colors.push(self.color[3]);
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
  }
}

thread_local!(static OUTPUT: RefCell<Outputs> = RefCell::new(Outputs::new()));

#[wasm_bindgen(js_name = "strokeRectangle")]
pub extern fn js_stroke_rectangle(x: f32, y: f32, width: f32, height: f32) {
  OUTPUT.with(|output_cell| {
    let mut output = output_cell.borrow_mut();
    stroke_rectangle(
      &rect(x, y, width, height),
      &StrokeOptions::DEFAULT,
      &mut ToFloatArrayWithColor::new([1.0, 1.0, 1.0, 1.0], &mut output))
  });
}

#[wasm_bindgen(js_name = "strokeCircle")]
pub extern fn js_stroke_circle(x: f32, y: f32, r: f32) {
  OUTPUT.with(|output_cell| {
    let mut output = output_cell.borrow_mut();
    stroke_circle(
      point(x, y),
      r,
      &StrokeOptions::DEFAULT,
      &mut ToFloatArrayWithColor::new([1.0, 1.0, 1.0, 1.0], &mut output))
  });
}

#[wasm_bindgen(js_name = "fillRectangle")]
pub extern fn js_fill(x: f32, y: f32, width: f32, height: f32) {
  OUTPUT.with(|output_cell| {
    let mut output = output_cell.borrow_mut();
    fill_rectangle(
      &rect(x, y, width, height),
      &FillOptions::DEFAULT,
      &mut ToFloatArrayWithColor::new([1.0, 1.0, 1.0, 1.0], &mut output))
  });
}

#[wasm_bindgen(js_name = "fillCircle")]
pub extern fn js_fill_circle(x: f32, y: f32, r: f32) {
  OUTPUT.with(|output_cell| {
    let mut output = output_cell.borrow_mut();
    fill_circle(
      point(x, y),
      r,
      &FillOptions::tolerance(0.25),
      &mut ToFloatArrayWithColor::new([1.0, 1.0, 1.0, 1.0], &mut output))
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
    output.indices.clear();
  })
}
