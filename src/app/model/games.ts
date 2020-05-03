import { Player } from './player';
import { ScoreSheet} from '../scoreSheetData/scoreSheet.metadata';
import { BehaviorSubject } from 'rxjs';

export class Game {
  private colorArray: string[];
  protected scoreSheet : ScoreSheet[];
  protected players : Player[] = [];
  public turn : number;
  public currentPlayer: Player;
  public hasEnded$ : BehaviorSubject<any> = new BehaviorSubject(null);
  
  constructor(scoreSheet: ScoreSheet[], nbPlayer: number, GameObject: any, gameObjectParam: any) {
    this.turn = 1;
    this.colorArray = ['yellow', 'red', 'green', 'blue']
    this.scoreSheet = scoreSheet;
    for(let i = 1; i<=nbPlayer; i++) this.players.push( new Player(scoreSheet, GameObject, gameObjectParam, this.getPlayerColor(), i))
    this.currentPlayer = this.players[0];
  }

  getPlayerColor(){
    const colorToReturn = this.colorArray[0];
    this.colorArray.shift()
    return colorToReturn;
  }

  nextTurn(){
    this.currentPlayer = this.players[this.turn++%this.players.length]; 
  }

  endGame(data: any){
    this.hasEnded$.next(data)
  }
}
