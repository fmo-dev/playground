import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameData } from '../../main/game.metadata';

@Component({
  selector: 'app-select-game-button',
  templateUrl: './select-game-button.component.html',
  styleUrls: ['./select-game-button.component.scss']
})
export class SelectGameButtonComponent implements OnInit {
  @Output() gameSelected: EventEmitter<any> = new EventEmitter();
  @Input() game: GameData;
  public displayNbPlayersChoice: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }


  buttonClick() {
    this.displayNbPlayersChoice = !this.displayNbPlayersChoice
  }

  onGameSelected(nbPlayers: number) {
    const gameLauncher = { component: this.game.component, nbPlayers };
    this.gameSelected.emit(gameLauncher)
  }

}
