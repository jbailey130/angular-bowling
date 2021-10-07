import { Frame } from './frame.model';

export class Game {
  _frames: Array<Frame> = new Array<Frame>();
  _total: number = 0;

  constructor() {}

  get frames() {
    return this.frames;
  }

  set frames(newFrame: Frame) {
    this._frames.push(newFrame);
  }

  set total(gameToal: number) {
    this._total = gameToal;
  }

  get total() {
    return this.total;
  }

  updateFrame(index: number, updatedItem: Frame) {
    this._frames[index] = updatedItem;
  }
}
