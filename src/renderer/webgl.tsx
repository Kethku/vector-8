import * as React from "react";
import { MutableRefObject, useState, useEffect } from 'react';
import * as twgl from "twgl.js";

import { lyonAPI } from "../game/lyonAPI";

import vertex from './shaders/vert.glsl';
import fragment from './shaders/frag.glsl';

interface WebGLProps {
  mouseMoved: (mouseX: number, mouseY: number) => void,
  drawRef: MutableRefObject<() => void>
}

export function WebGL({ mouseMoved, drawRef }: WebGLProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [gl, setGl] = useState<WebGLRenderingContext>(null);
  const [spriteProgram, setSpriteProgram] = useState<twgl.ProgramInfo>(null);
  const [spriteArrays, setSpriteArrays] = useState(null);
  const [bufferInfo, setBufferInfo] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      let newGl = canvasRef.current.getContext("webgl", {alpha: false, preserveDrawingBuffer: true});
      newGl.getExtension('OES_element_index_uint');

      let newSpriteProgram = twgl.createProgramInfo(newGl, [vertex, fragment]);
      newGl.useProgram(newSpriteProgram.program);
      let newSpriteArrays = {
        a_position: {numComponents: 2, data: new Float32Array(0), drawType: newGl.DYNAMIC_DRAW},
        a_color: {numComponents: 1, data: new Float32Array(0), drawType: newGl.DYNAMIC_DRAW},
        indices: {numComponents: 3, data: new Uint32Array(0), drawType: newGl.DYNAMIC_DRAW}
      };
      let newBufferInfo = twgl.createBufferInfoFromArrays(newGl, newSpriteArrays);

      newGl.pixelStorei(newGl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true as any);
      newGl.blendFunc(newGl.SRC_ALPHA, newGl.ONE_MINUS_SRC_ALPHA);

      canvasRef.current.addEventListener('mousemove', e => {
        let canvasRect = canvasRef.current.getBoundingClientRect();
        let mouseX = (e.clientX - canvasRect.left) * 2 / canvasRect.width - 1;
        let mouseY = -(e.clientY - canvasRect.top) * 2 / canvasRect.width + canvasRect.height / canvasRect.width;
        mouseMoved && mouseMoved(mouseX, mouseY);
      });

      twgl.setUniforms(newSpriteProgram, {
        u_color_0: [0.039216, 0.039216, 0.062745],
        u_color_1: [0.094118, 0.105882, 0.133333],
        u_color_2: [0.152941, 0.184314, 0.231373],
        u_color_3: [0.207843, 0.329412, 0.290196],
        u_color_4: [0.458824, 0.498039, 0.333333],
        u_color_5: [0.772549, 0.733333, 0.388235],
        u_color_6: [0.937255, 0.85098, 0.552941],
        u_color_7: [0.976471, 0.878431, 0.737255]
      });

      setGl(newGl);
      setSpriteProgram(newSpriteProgram);
      setSpriteArrays(newSpriteArrays);
      setBufferInfo(newBufferInfo); 
    }
  }, [canvasRef.current]);

  function draw() {
    if (gl && lyonAPI) {
      let devicePixelRatio = window.devicePixelRatio ?? 1;
      let canvas = canvasRef.current;

      if (canvas.width != canvas.clientWidth * devicePixelRatio ||
          canvas.height != canvas.clientHeight * devicePixelRatio) {
        canvas.width = canvas.clientWidth * devicePixelRatio;
        canvas.height = canvas.clientHeight * devicePixelRatio;
      }

      gl.viewport(0, 0, canvas.width, canvas.height);

      twgl.setUniforms(spriteProgram, {
        u_camera_dimensions: [-1, -canvas.height / canvas.width, 2, 2 * canvas.height / canvas.width]
      });
      lyonAPI.setPixelSize(Math.min(2 / canvas.width, 2 / canvas.height));

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

    lyonAPI?.reset();
  }

  drawRef.current = draw;

  return <canvas ref={canvasRef} touch-action="none" style={{
    width: '100%',
    height: '100%',
    display: 'inline-block'
  }}/>;
}
