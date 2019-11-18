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
