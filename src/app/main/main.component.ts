import { Component, OnInit } from '@angular/core';
import { GameList } from './gameList'

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  selectedGame = { component : GameList[0].component, nbPlayers : 2};

  constructor() { }

  ngOnInit(): void {
    
  }

}
