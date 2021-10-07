export class Frame {
  firstRoll: number = 0;
  secondRoll: number = 0;
  thirdRoll: number = 0;
  name: string = '';
  id: number = 0;

  constructor() {}

  frameName(name: string) {
    this.name = 'FRAME: ' + name;
  }

  totalScore() {}

  isStrike(): boolean {
    return this.firstRoll == 10;
  }

  isSpare(): boolean {
    return this.firstRoll < 10 && this.firstRoll + this.secondRoll == 10;
  }

  isLastFrame(currentIndex: number, fullIndex: number): boolean {
    return currentIndex == fullIndex;
  }

  score(): number {
    return this.firstRoll + this.secondRoll + this.thirdRoll;
  }
}
