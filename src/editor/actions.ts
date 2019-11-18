import { Function } from "ts-toolbelt";
import { Node } from '../rewrite/callHighlighting';

export enum EditorActionTypes {
  SetCode = "SetCode",
  SetCallUnderMouse = "SetCallUnderMouse"
}

export function setCode(newCode: string) { 
  return {
    type: EditorActionTypes.SetCode as EditorActionTypes.SetCode, 
    newCode 
  };
}
export type SetCode = Function.Return<typeof setCode>;

export function setCallUnderMouse(call: Node) {
  return {
    type: EditorActionTypes.SetCallUnderMouse as EditorActionTypes.SetCallUnderMouse,
    call
  };
}
export type SetCallUnderMouse = Function.Return<typeof setCallUnderMouse>

export type EditorActions = SetCode | SetCallUnderMouse;
