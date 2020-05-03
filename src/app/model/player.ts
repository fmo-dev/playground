import { Bucket } from './bucket';
import { ScoreSheet } from '../scoreSheetData/scoreSheet.metadata';

export class Player {
  private color: string;
  public scoreSheet: any = {};
  public gameObject: any;
  public number: number;
  public currentRoll: number;

  constructor(scoreSheet: ScoreSheet[], GameObject: any, gameObjectParam: any, color: string, number: number) {
    this.number = number;
    this.color = color;
    this.initScoreSheet(scoreSheet);
    this.initGameObject(GameObject, gameObjectParam);
  }

  initScoreSheet(scoreSheet: ScoreSheet[]) {
    for (const line of scoreSheet) {
      this.scoreSheet[line.value] = null;
    }
  }

  initGameObject(GameObject: any, gameObjectParam) {
    this.gameObject = new GameObject(gameObjectParam, this.color);
    this.initCurrentRoll();
  }

  play() {
    if (this.gameObject.maxRoll) {
      if(!this.currentRoll) return;
      this.currentRoll--;
    } 
    this.gameObject.play();
  }

  initCurrentRoll = () => this.currentRoll = this.gameObject.maxRoll ? this.gameObject.maxRoll : null;

  endTurn(){
    this.initCurrentRoll();
    this.gameObject.reiniteAll();
  }

}
