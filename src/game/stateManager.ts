import { MutableRefObject } from 'react';
import deepCopy from 'fast-copy';

import { updateHighlightFlicker } from './lyonAPI';

const statesToStore = 60;

interface MousePosition {
  x: number, y: number
}

interface FrameInfo {
  state: any;
  mousePosition?: MousePosition;
}

export class StateManager {
  private frames: FrameInfo[] = [];

  constructor (
    private realmRef: MutableRefObject<any>,
    private definedGlobalsRef: MutableRefObject<any>,
    private pausedRef: MutableRefObject<boolean>,
    private mousePositionRef: MutableRefObject<MousePosition>
  ) {}

  private get currentFrameInfo() {
    return this.frames[0];
  }
  public get frameCount() {
    return this.frames.length;
  }

  private updateState(frameInfo: FrameInfo)  {
    let globals = this.realmRef.current.global;
    globals.mouseX = frameInfo.mousePosition.x ?? 0;
    globals.mouseY = frameInfo.mousePosition.y ?? 0;
    return deepCopy(this.definedGlobalsRef.current.update(frameInfo.state));
  }

  private updateCurrent() {
    this.currentFrameInfo.mousePosition = this.mousePositionRef.current;
    let state = this.updateState(this.currentFrameInfo);
    this.frames.unshift({ state, mousePosition: this.mousePositionRef.current })
    if (this.frames.length > statesToStore) {
      this.frames.pop();
    }
  }

  private drawState(frameInfo: FrameInfo) {
    let globals = this.realmRef.current.global;
    globals.mouseX = frameInfo.mousePosition.x ?? 0;
    globals.mouseY = frameInfo.mousePosition.y ?? 0;
    this.definedGlobalsRef.current.draw(frameInfo.state);
  }

  private drawFrame(rewindAmount: number) {
    updateHighlightFlicker();
    this.drawState(this.frames[rewindAmount]);
  }

  public reset(initialState: any) {
    this.frames = [
      {
        state: deepCopy(initialState), 
        mousePosition: this.mousePositionRef.current
      }
    ];
  }

  public recalculateStates() {
    for (let i = this.frames.length - 1; i > 0; i--) {
      this.frames[i - 1].state = this.updateState(this.frames[i]);
    }
  }

  public tick(rewindAmount: number) {
    try {
      if (!this.pausedRef.current) {
        this.updateCurrent();
      }
      this.drawFrame(rewindAmount);
    } catch (error) {
      console.error(error);
    }
  }

  public rewind(amount: number) {
    for (let i = 0; i < amount; i++) {
      this.frames.shift();
    }
  }
}
