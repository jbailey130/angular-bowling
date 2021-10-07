import { Component, OnInit } from '@angular/core';
import { BowlingLane } from './models/bowling-lane.model';
import { Game } from './models/game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  bowlingLane: BowlingLane = new BowlingLane();
  game: Game = new Game();

  constructor() {
    this.game = this.bowlingLane.bowl();
  }

  bowl() {
    this.bowlingLane = new BowlingLane();
    this.game = this.bowlingLane.bowl();
  }

  ngOnInit(): void {}
}
