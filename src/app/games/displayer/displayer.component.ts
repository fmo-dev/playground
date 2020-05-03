import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  AfterViewInit,
  ComponentFactory,
  Output,
  EventEmitter
} from '@angular/core';

import { Game } from '../game'
import { MainComponent } from 'src/app/main/main.component';

@Component({
  selector: 'displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.scss']
})
export class DisplayerComponent implements AfterViewInit, OnInit {
  @Output() onBackToMenu: EventEmitter<boolean> = new EventEmitter();
  @ViewChild("game", { read: ViewContainerRef })
  private game: ViewContainerRef;
  private selectedGame: any;
  public gameEnded: boolean;
  public finalScores: any;
  private currentGame: ComponentRef<Game>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private main: MainComponent) { }

  ngAfterViewInit(): void {
    this.displayGame()
  }

  ngOnInit(): void {
    this.selectedGame = this.main.selectedGame;
  }

  onEnd(results: any): void {
    this.finalScores = results;
    this.gameEnded = true;
  }

  displayGame(): void {
    let resolver: ComponentFactory<Game> = this.componentFactoryResolver.resolveComponentFactory(this.selectedGame.component);
    this.currentGame = this.game.createComponent(resolver);
    this.currentGame.instance.nbPlayers = this.selectedGame.nbPlayers;
    this.currentGame.instance.onEnd.subscribe((data: any) => this.onEnd(data))
    
  }

  replay() {
    this.gameEnded = false;
    this.currentGame.destroy();
    this.displayGame();
  }

  backToMenu = () => this.onBackToMenu.emit(true)

}
