import { Component, ChangeDetectorRef } from '@angular/core';
import { GameData } from './game.metadata';
import { GameList } from './gameList';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public gameList: GameData[] = GameList;
  public selectedGame: any;

  constructor(private changeDetector: ChangeDetectorRef ) { }

  chooseGame(game: any) {
    this.selectedGame = game;
    this.changeDetector.detectChanges();
  }

  displayMenu() {
    this.selectedGame = null;
  }


}
