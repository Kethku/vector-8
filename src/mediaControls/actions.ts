import { Function } from "ts-toolbelt";

export enum MediaControlsActionTypes {
  SetPaused = "SetPaused",
  SetRewindAmount = "SetRewindAmount"
}

export function setPaused(isPaused: boolean) { 
  return {
    type: MediaControlsActionTypes.SetPaused as MediaControlsActionTypes.SetPaused,
    isPaused 
  };
}
export type SetPaused = Function.Return<typeof setPaused>;

export function setRewindAmount(rewindAmount: number) {
  return {
    type: MediaControlsActionTypes.SetRewindAmount as MediaControlsActionTypes.SetRewindAmount,
    rewindAmount 
  };
}
export type SetRewindAmount = Function.Return<typeof setRewindAmount>;

export type MediaControlsActions = SetPaused | SetRewindAmount;
