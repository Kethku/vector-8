import * as React from "react";
import { useRef, useState, useEffect } from 'react';
import * as twgl from "twgl.js";

import { lyonAPI } from "../game/lyonAPI";

import vertex from './shaders/vert.glsl';
import fragment from './shaders/frag.glsl';

import pickingVertex from './shaders/pickingVert.glsl';
import pickingFragment from './shaders/pickingFrag.glsl';

interface WebGLProps {
  mouseEvent: (mouseX: number, mouseY: number, down: boolean) => void,
  onFrame: () => void
}

export function WebGL({ mouseEvent, onFrame }: WebGLProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>();
  const animationRequestRef = useRef<number>();

  const glRef = useRef<WebGLRenderingContext>();
  const spriteProgramRef = useRef<twgl.ProgramInfo>();
  const pickingProgramRef = useRef<twgl.ProgramInfo>();
  const spriteArraysRef = useRef<any>();
  const bufferInfoRef = useRef<any>();

  function onMouseEvent(e: MouseEvent) {
    let canvasRect = canvasRef.current.getBoundingClientRect();
    let mouseX = (e.clientX - canvasRect.left) * 2 / canvasRect.width - 1;
    let mouseY = -(e.clientY - canvasRect.top) * 2 / canvasRect.width + canvasRect.height / canvasRect.width;
    let down = (e.buttons & 1) == 1;

    mouseEvent && mouseEvent(mouseX, mouseY, down);
  }

  useEffect(() => {
    if (canvasRef.current) {
      glRef.current = canvasRef.current.getContext("webgl", {alpha: false, preserveDrawingBuffer: true});
      glRef.current.getExtension('OES_element_index_uint');

      spriteProgramRef.current = twgl.createProgramInfo(glRef.current, [vertex, fragment]);
      pickingProgramRef.current = twgl.createProgramInfo(glRef.current, [pickingVertex, pickingFragment]);
       
      glRef.current.useProgram(spriteProgramRef.current.program);
      spriteArraysRef.current = {
        a_position: {numComponents: 2, data: new Float32Array(0), drawType: glRef.current.DYNAMIC_DRAW},
        a_color: {numComponents: 1, data: new Float32Array(0), drawType: glRef.current.DYNAMIC_DRAW},
        a_pickId: {numComponents: 3, data: new Float32Array(0), drawType: glRef.current.DYNAMIC_DRAW},
        indices: {numComponents: 3, data: new Uint32Array(0), drawType: glRef.current.DYNAMIC_DRAW}
      };
      bufferInfoRef.current = twgl.createBufferInfoFromArrays(glRef.current, spriteArraysRef.current);

      glRef.current.pixelStorei(glRef.current.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true as any);
      glRef.current.blendFunc(glRef.current.SRC_ALPHA, glRef.current.ONE_MINUS_SRC_ALPHA);

      twgl.setUniforms(spriteProgramRef.current, {
        u_color_0: [0.039216, 0.039216, 0.062745],
        u_color_1: [0.094118, 0.105882, 0.133333],
        u_color_2: [0.152941, 0.184314, 0.231373],
        u_color_3: [0.207843, 0.329412, 0.290196],
        u_color_4: [0.458824, 0.498039, 0.333333],
        u_color_5: [0.772549, 0.733333, 0.388235],
        u_color_6: [0.937255, 0.85098, 0.552941],
        u_color_7: [0.976471, 0.878431, 0.737255]
      });

      canvasRef.current.addEventListener('mousemove', onMouseEvent);
      canvasRef.current.addEventListener('mousedown', onMouseEvent);
      canvasRef.current.addEventListener('mouseup', onMouseEvent);
    }
  }, [canvasRef.current]);

  function draw() {
    if (glRef.current && lyonAPI) {
      let devicePixelRatio = window.devicePixelRatio ?? 1;
      let canvas = canvasRef.current;

      if (canvas.width != canvas.clientWidth * devicePixelRatio ||
          canvas.height != canvas.clientHeight * devicePixelRatio) {
        canvas.width = canvas.clientWidth * devicePixelRatio;
        canvas.height = canvas.clientHeight * devicePixelRatio;
      }

      glRef.current.viewport(0, 0, canvas.width, canvas.height);

      twgl.setUniforms(spriteProgramRef.current, {
        u_camera_dimensions: [-1, -canvas.height / canvas.width, 2, 2 * canvas.height / canvas.width]
      });
      lyonAPI.setPixelSize(Math.min(2 / canvas.width, 2 / canvas.height));

      spriteArraysRef.current.a_position.data = lyonAPI.getPositions();
      spriteArraysRef.current.a_color.data = lyonAPI.getColors();
      spriteArraysRef.current.indices.data = lyonAPI.getIndices();

      for (let id in spriteArraysRef.current) {
        if (id != "indices") {
          twgl.setAttribInfoBufferFromArray(glRef.current, bufferInfoRef.current.attribs[id], spriteArraysRef.current[id]);
        } else {
          glRef.current.bindBuffer(glRef.current.ELEMENT_ARRAY_BUFFER, bufferInfoRef.current.indices);
          glRef.current.bufferData(glRef.current.ELEMENT_ARRAY_BUFFER, spriteArraysRef.current[id].data, spriteArraysRef.current[id].drawType);
        }
      }

      twgl.setBuffersAndAttributes(glRef.current, spriteProgramRef.current, bufferInfoRef.current);

      twgl.drawBufferInfo(glRef.current, bufferInfoRef.current, glRef.current.TRIANGLES, spriteArraysRef.current.indices.data.length);
    }

    lyonAPI?.reset();
  }

  function animationLoop() {
    onFrame();
    draw();
    animationRequestRef.current = requestAnimationFrame(animationLoop);
  }

  useEffect(() => {
    animationRequestRef.current = requestAnimationFrame(animationLoop);
    return () => cancelAnimationFrame(animationRequestRef.current);
  }, [])

  return <canvas ref={canvasRef} touch-action="none" style={{
    width: '100%',
    height: '100%',
    display: 'inline-block'
  }}/>;
}
