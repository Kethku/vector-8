import { Function } from "ts-toolbelt";

export enum EditorActionTypes {
  SetCode = "SetCode"
}

export function setCode(newCode: string) { 
  return {
    type: EditorActionTypes.SetCode, 
    newCode 
  };
}
export type SetCode = Function.Return<typeof setCode>;

export type EditorActions = SetCode;
