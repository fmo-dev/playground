import { Bucket } from './bucket';

import { Game } from './games';
import YahtzeeScoreSheet from '../scoreSheetData/yahtzee-scoreSheet';

export class Yahtzee extends Game {

  constructor(nbPlayer: number) {
    super(YahtzeeScoreSheet, nbPlayer, Bucket, { nbFaces: 6, nbDices: 5, maxRoll: 3 });
  }

  calcScore(line) {
    const player = this.currentPlayer;
    if (player.scoreSheet[line.value] != null) {
      return;
    }
    const dices = player.gameObject.getDices();
    if (dices[0] === undefined) {
      return;
    }
    player.scoreSheet[line.value] = line.calcFunction({ dices, option: line.option });
    this.scoreSheet.forEach(scoreLine => {
      if (!scoreLine.clickable) {
        player.scoreSheet[scoreLine.value] = scoreLine.calcFunction(player.scoreSheet) || null;
      }
    });
    this.endTurn();
  }

  play = () => this.currentPlayer.play();

  endRule() {
    if (this.currentPlayer.number === this.players.length) {
      let allGood = true;
      const checkingScoreSheet = this.scoreSheet.filter(scoreLine => scoreLine.clickable);
      checkingScoreSheet.forEach(scoreLine => {
        if (this.currentPlayer.scoreSheet[scoreLine.value] == null) {
          allGood = false;
        }
      });
      return allGood;
    }
  }

  endTurn() {
    if (this.endRule()) {
      this.endGame();
    }
    else {
      this.currentPlayer.endTurn();
      this.nextTurn();
    }
  }

  endGame() {
    const results: any[] = [];
    this.players.forEach(player => {
      results.push({ player: player.number, score: player.scoreSheet['GRAND TOTAL'] });
    });
    results.sort((a, b) => b.score - a.score);
    super.endGame(results);
  }

}
