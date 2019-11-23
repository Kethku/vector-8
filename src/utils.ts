import { useRef, useEffect, MutableRefObject } from "react";
import { useSelector } from "react-redux";

export type Common<A, B> = {
  [P in keyof A & keyof B]: A[P] | B[P]
};

export function spliceArray(dest: Uint16Array | Float32Array, offset: number, data: number[]) {
  for (let i = 0; i < data.length; i++) {
    dest[offset + i] = data[i];
  }
}

export function spliceData(array: {numComponents: number, data: Float32Array | Uint16Array}, entityIndex: number, data: number[]) {
  let expectedCount = array.numComponents * 4;
  for (let i = 0; i < expectedCount; i += data.length) {
    spliceArray(array.data, entityIndex * expectedCount + i, data);
  }
}

export function unreachable(obj: never) { 
  throw new Error(`${obj} should not exist`) 
}

export function useSelectorRef<R>(selector: (state: any) => R) {
  const ref = useRef<R>();
  const selected = useSelector(selector);

  useEffect(() => {
    ref.current = selected;
  }, [selected]);

  return [selected, ref] as [R, MutableRefObject<R>];
}

export interface RandomConstants {
  a: number, b: number, c: number, d: number
}

export function sfc32(constants?: RandomConstants) {
  constants = constants ?? { a: 0, b: 0, c: 0, d: 0 };
  return function() {
    constants.a >>>= 0; 
    constants.b >>>= 0; 
    constants.c >>>= 0; 
    constants.d >>>= 0; 

    var t = (constants.a + constants.b) | 0;
    constants.a = constants.b ^ constants.b >>> 9;
    constants.b = constants.c + (constants.c << 3) | 0;
    constants.c = (constants.c << 21 | constants.c >>> 11);
    constants.d = constants.d + 1 | 0;
    t = t + constants.d | 0;
    constants.c = constants.c + t | 0;
    return (t >>> 0) / 4294967296;
  }
}
