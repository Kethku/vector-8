import * as twgl from "twgl.js";

import { EventManager } from "../eventManager";
import { Vector } from "../math";
import { CanvasMounted } from "./component";

import vertex from './shaders/vert.glsl';
import fragment from './shaders/frag.glsl';

let gl: WebGLRenderingContext = null;
let spriteProgram: twgl.ProgramInfo = null;
let spriteArrays = null;
let bufferInfo: twgl.BufferInfo = null;
let canvas: HTMLCanvasElement = null;

///////////////////////
// Initialize Canvas //
///////////////////////
CanvasMounted.Subscribe(async (newCanvas) => {
  canvas = newCanvas;
  resize();
  gl = newCanvas.getContext("webgl", {alpha: false});
  gl.getExtension('OES_element_index_uint');

  spriteProgram = twgl.createProgramInfo(gl, [vertex, fragment]);
  gl.useProgram(spriteProgram.program);
  spriteArrays = {
    a_position: {numComponents: 2, data: new Float32Array(0), drawType: gl.DYNAMIC_DRAW},
    a_color: {numComponents: 4, data: new Float32Array(0), drawType: gl.DYNAMIC_DRAW},
    indices: {numComponents: 3, data: new Uint32Array(0), drawType: gl.DYNAMIC_DRAW}
  };
  bufferInfo = twgl.createBufferInfoFromArrays(gl, spriteArrays);

  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true as any);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
});

////////////////////
// Setup Resizing //
////////////////////

// TODO: Use resize listener to just trigger resize when canvas size changes
export const Resized = new EventManager<[Vector]>();

function resize() {
  if (canvas != null) {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }

  Resized.Publish(new Vector(canvas.width, canvas.height));
}

window.addEventListener("resize", resize);

////////////////
// Draw Calls //
////////////////
export function draw(lyonAPI: typeof import("../../pkg")) {
  if (gl) {
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(0, 0, canvas.width, canvas.height);

    twgl.setUniforms(spriteProgram, {
      u_camera_dimensions: [-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height],
    });

    spriteArrays.a_position.data = lyonAPI.getPositions();
    spriteArrays.a_color.data = lyonAPI.getColors();
    spriteArrays.indices.data = lyonAPI.getIndices();

    for (let id in spriteArrays) {
      if (id != "indices") {
        twgl.setAttribInfoBufferFromArray(gl, bufferInfo.attribs[id], spriteArrays[id]);
      } else {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferInfo.indices);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, spriteArrays[id].data, spriteArrays[id].drawType);
      }
    }

    twgl.setBuffersAndAttributes(gl, spriteProgram, bufferInfo);

    twgl.drawBufferInfo(gl, bufferInfo, gl.TRIANGLES, spriteArrays.indices.data.length);
  }

  lyonAPI.reset();
}
