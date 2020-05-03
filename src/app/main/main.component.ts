import { Component, ChangeDetectorRef } from '@angular/core';
import { GameData } from './game.metadata'
import { GameList } from './gameList'

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public gameList: GameData[] = GameList;
  public selectedGame: any;

  constructor(private changeDetector: ChangeDetectorRef ) { }

  chooseGame(game: GameData) {
    this.selectedGame = { component: game.component, nbPlayers: 1 };
    this.changeDetector.detectChanges();
 
  }


  displayMenu() {
    console.log("Fini");
    
    this.selectedGame = null;

  }


}
