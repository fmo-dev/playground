import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, AfterViewInit, ComponentFactory  } from '@angular/core';
import { Game } from '../game'
import { MainComponent } from 'src/app/main/main.component';
import { EventEmitter } from 'events';

@Component({
  selector: 'displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.scss']
})
export class DisplayerComponent implements AfterViewInit, OnInit {
  @ViewChild("game",{read:ViewContainerRef})
  private game:ViewContainerRef;
  private selectedGame : any;

  constructor(private componentFactoryResolver:ComponentFactoryResolver, private main : MainComponent) { }

  ngOnInit(): void {
    this.selectedGame = this.main.selectedGame;  
  }

  onEnd(data: any){
    console.log("Terminé");
    
  }

  ngAfterViewInit(): void {
    let resolver: ComponentFactory<Game> = this.componentFactoryResolver.resolveComponentFactory(this.selectedGame.component);
    let component: ComponentRef<Game> = this.game.createComponent(resolver);
    component.instance.nbPlayers = this.selectedGame.nbPlayers;
    component.instance.onEnd.subscribe( (data) => this.onEnd(data))
  }

}
