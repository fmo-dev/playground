import { Component, OnInit, Input ,ViewContainerRef,ComponentFactoryResolver, Output, EventEmitter } from '@angular/core';
import { Yahtzee } from '../../model/yahtzee'
import { Game } from '../game';
import { Subject } from 'rxjs';


@Component({
  selector: 'yahtzee',
  templateUrl: './yahtzee.component.html',
  styleUrls: ['./yahtzee.component.scss']
})
export class YahtzeeComponent implements OnInit, Game {

  @Input() public nbPlayers: number;

  private yahtzeeInstance: Yahtzee;
  public onEnd : Subject<any> = new Subject();
  
  constructor(){}

  ngOnInit(): void {
      this.yahtzeeInstance = new Yahtzee(this.nbPlayers);
      this.yahtzeeInstance.hasEnded$.subscribe((value:boolean) => {if(value) this.prepareEnd()})
  }

  launch(){
    this.yahtzeeInstance.play();
  }

  addScore(line){
    this.yahtzeeInstance.calcScore(line);
  }

  prepareEnd(){
    this.onEnd.next()
  }


}
