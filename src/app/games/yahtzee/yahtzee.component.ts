import { Component, OnInit, Input, ViewContainerRef, ComponentFactoryResolver, Output, EventEmitter, AfterContentChecked } from '@angular/core';
import { ScoreSheet } from '../../scoreSheetData/scoreSheet.metadata';
import { Yahtzee } from '../../model/yahtzee';
import { Game } from '../game';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-yahtzee',
  templateUrl: './yahtzee.component.html',
  styleUrls: ['./yahtzee.component.scss']
})
export class YahtzeeComponent implements OnInit, Game {

  @Input() public nbPlayers: number;

  public yahtzeeInstance: Yahtzee;
  public onEnd: Subject<any> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.yahtzeeInstance = new Yahtzee(this.nbPlayers);
    this.yahtzeeInstance.hasEnded$.subscribe((results: any) => {
      if (results) {
        this.prepareEnd(results);
      }
    });
  }

  launch() {
    this.yahtzeeInstance.play();
  }

  addScore(line: ScoreSheet) {
    if (this.yahtzeeInstance.currentPlayer.getHasPlayed()) {
      this.yahtzeeInstance.calcScore(line);
    }
  }

  prepareEnd(results: any) {
    this.onEnd.next(results);
  }


}
