import { Game } from './game.model';
import { Frame } from './frame.model';

export class BowlingLane {
  isSpare: boolean = false;
  isStrike: boolean = false;
  numberOfFrames: number = 10;
  //frames = Array<{frame: Array<Frame>, total: number}>();
  totalScore: number = 0;
  game: Game = new Game();
  updatePreviousFrame: boolean = false;

  constructor() {}

  bowl(): Game {
    var previousFrame = new Frame();
    for (var i = 0; i < this.numberOfFrames; i++) {
      var newFrame = new Frame();
      newFrame.frameName((i + 1).toString());
      newFrame.firstRoll = this.pinsKnockedDown(10);
      newFrame.secondRoll = this.pinsKnockedDown(
        this.numberOfFrames - newFrame.firstRoll
      );

      /*    
        previous frame = 10 + next two rolls
        subsequent roll backfill the previous frame 2nd (or 3rd) rolls
      */
      if (previousFrame.isStrike()) {
        previousFrame.secondRoll = newFrame.firstRoll;
        previousFrame.thirdRoll = newFrame.secondRoll;
        previousFrame.score();
        this.game.updateFrame(i - 1, previousFrame);
      }

      //    previous frame == 10 + next first roll
      //    just the total of the current rolls
      if (previousFrame.isSpare()) {
        previousFrame.thirdRoll = newFrame.firstRoll;
        previousFrame.score();
        this.game.updateFrame(i - 1, previousFrame);
      }

      //    last frame & strike roll two more
      if (
        newFrame.isLastFrame(i, this.numberOfFrames - 1) &&
        newFrame.isStrike()
      ) {
        newFrame.secondRoll = this.pinsKnockedDown(10);
        newFrame.thirdRoll = this.pinsKnockedDown(
          this.numberOfFrames - newFrame.secondRoll
        );
      }

      this.game._total += newFrame.score();
      previousFrame = newFrame;
      this.game.frames = newFrame;
    }
    console.log('final', this.totalScore);

    for (var i = 0; i < this.numberOfFrames; i++) {
      this.game._total += this.game._frames[i].score();
    }
    //this.game.total = this.totalScore;
    //this.game.frames = this.frames;

    return this.game;
  }

  pinsKnockedDown(previousRoll: number): number {
    if (previousRoll == 0) {
      return 0;
    }
    return Math.floor(Math.random() * previousRoll + 1);
  }
}
