import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlay, FaPause } from "react-icons/fa/";
import Slider from "rc-slider";

import { setPaused, setRewindAmount } from './actions';
import { AppState } from '../reducers';
import 'rc-slider/assets/index.css';
import "./styles";

const granularity = 1000;

function PlayPaused({ paused, onClick }: { paused: boolean, onClick: () => void }) {
  let Icon = paused ? FaPlay : FaPause;
  return <Icon className="media-button" onClick={onClick} />
}

export function MediaControls() {
  const dispatch = useDispatch();
  const paused = useSelector((state: AppState) => state.mediaControls.paused);
  const rewindAmount = useSelector((state: AppState) => state.mediaControls.rewindAmount);

  function onPlayPauseClicked() {
    dispatch(setPaused(!paused));
  }

  function onSliderValueChange(newValue: number) {
    dispatch(setRewindAmount(1 - newValue / granularity));
  }

  return (
    <div className="media-controls">
      <PlayPaused paused={paused} onClick={onPlayPauseClicked} />
      <Slider min={0} max={granularity} defaultValue={granularity} value={(1 - rewindAmount) * granularity} onChange={onSliderValueChange} disabled={!paused}/>
    </div>
  );
}
