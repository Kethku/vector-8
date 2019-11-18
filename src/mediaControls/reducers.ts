import { Record, RecordOf } from 'immutable';

import { MediaControlsActionTypes, MediaControlsActions, SetPaused, SetRewindAmount } from './actions';

function handleSetPaused(currentState: MediaControlsState, { isPaused }: SetPaused) {
  return currentState.set('paused', isPaused);
}

function handleSetRewindAmount(currentState: MediaControlsState, { rewindAmount }: SetRewindAmount) {
  return currentState.set('rewindAmount', rewindAmount);
}

const initialState = {
  paused: false,
  rewindAmount: 0,
};

const makeMediaControlsState = Record(initialState);
type MediaControlsState = RecordOf<typeof initialState>;

export function mediaControlsReducer(
  state = makeMediaControlsState(),
  action: MediaControlsActions
): MediaControlsState {
  switch (action.type) {
    case MediaControlsActionTypes.SetPaused: return handleSetPaused(state, action);
    case MediaControlsActionTypes.SetRewindAmount: return handleSetRewindAmount(state, action);
    default: return state;
  }
}
