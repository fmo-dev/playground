import { Bucket } from './bucket';
import { ScoreSheet } from '../scoreSheetData/scoreSheet.metadata';

export class Player {
  private color: string;
  public scoreSheet: any = {};
  public gameObject: any;
  public number: number;
  public currentRoll: number;
  private hasPlayed: boolean;

  constructor(scoreSheet: ScoreSheet[], GameObject: any, gameObjectParam: any, color: string, playerNumber: number) {
    this.number = playerNumber;
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
    this.hasPlayed = true;
    if (this.gameObject.maxRoll) {
      if (!this.currentRoll) {
        return;
      }
      this.currentRoll--;
    }
    this.gameObject.play();
  }

  initCurrentRoll = () => this.currentRoll = this.gameObject.maxRoll ? this.gameObject.maxRoll : null;

  endTurn() {
    this.hasPlayed = false;
    this.initCurrentRoll();
    this.gameObject.reiniteAll();
  }

  getHasPlayed = () => this.hasPlayed;

}
