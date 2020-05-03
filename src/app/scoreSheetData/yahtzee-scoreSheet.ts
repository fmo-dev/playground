import { ScoreSheet } from './scoreSheet.metadata';

const NumberScoreLineTitle = ["Aces", "Twos", "Threes", "Fours", "Fives", "Sixes" ];
const bonusRequired: number = 63;
const bonusPoints: number = 35;
const fullHousePoints: number = 25;
const suiteIndic: number = 10;
const yahtzeePoints: number = 50;

const initNumberScore = (nb) => { for(let i = 1; i<= nb; i++) YahtzeeScoreSheet.push(getNumberScoreLine(i)) };
const getNumberScoreLine = (i) => ({ value : NumberScoreLineTitle[i-1], calcFunction : calcNumber, option : i, clickable:true, total: false});

const initOfAKindScore = () => { for(let i = 3; i<= 4; i++) YahtzeeScoreSheet.push(getOfAKindScore(i)) };
const getOfAKindScore =(i) => ({ value : i + " of a kind", calcFunction : calcSameNumber, option : i, clickable:true, total: false});

const getFullHouseScore = () =>  YahtzeeScoreSheet.push({ value : "Full House", calcFunction : calcFullHouse, clickable:true, total: false});

const initSuiteScore = () => { for(let i = 4; i <= 5; i++) YahtzeeScoreSheet.push(getSuiteScoreLine(i)) };
const getSuiteScoreLine = (i) => ({ value : (i < 5 ? "Low" : "High") + " Straight" , calcFunction : calcSuite, option : i, clickable:true, total: false});
const getYahtzeeScore = () =>  YahtzeeScoreSheet.push({ value : "Yahtzee", calcFunction : calcYahtzee, clickable:true, total: false});

const calcNumber = (params : any) => {
    let result = 0;
    params.dices.forEach( dice => result += dice == params.option ? params.option : 0);
    return result;
}

const calcSameNumber = (params : any) => {
    for(let i = 0; i <= params.dices.length - params.option; i++) {
        let sameNumber: number = 1;
        for(let j = 0; j < params.dices.length; j++) if(j != i && params.dices[i] == params.dices[j]) sameNumber++;
        if(sameNumber >= params.option) return calcTotalDices(params.dices);
    }
    return 0;
}

const calcFullHouse = (params : any) => {
    let countDown: number = params.dices.length;
    let totals : any[] = [];
    for(let i = 0; i < 2; i++){
        for(let j = 0; j < params.dices.length; j++){
            if(totals[i] && totals[i].number != params.dices[j]) continue;
            else if(!totals[i]) totals[i] = { number : params.dices[j], dices : 1 };
            else totals[i].dices++;
            params.dices.splice(j, 1);
            if(totals[i].dices < 3) j--;
            else break;
        }
    }
    totals.forEach(total => countDown -= total.dices);
    return countDown == 0 ? fullHousePoints : 0;
}

const calcSuite = (params: any) => {
    params.dices.sort( (a, b) => a - b);
    let totalSuite: number = 1;
    for(let i = 0; i < params.dices.length; i++) if(params.dices[i] + 1 == params.dices[i+1]) totalSuite ++;
    return totalSuite >= params.option ? (params.option - 1) * suiteIndic : 0;
}

const calcYahtzee = (params: any) => calcSameNumber({ ...params, option : 5 }) ? yahtzeePoints : 0;

const calcTotalDices = (dices) => {
    let result: number = 0;
    dices.forEach( dice => result += dice);
    return result;
}

const calcTotalNumberScore = (sheet: ScoreSheet) => {
    let result: number = 0;
    for(const line in sheet) {
        if(NumberScoreLineTitle.includes(line)) result += sheet[line];
    }
    return result;
}

const calcBonus = (sheet: ScoreSheet) => sheet['TOTAL'] >= bonusRequired ? bonusPoints : null;

const calcTotalOne = (sheet: ScoreSheet) => sheet['TOTAL'] + sheet['BONUS']

const calcTotalTwo = (sheet: ScoreSheet) => {
    let result: number = 0;
    for(const line of YahtzeeScoreSheet) {
        if(!NumberScoreLineTitle.includes(line.value) && line.clickable) result += sheet[line.value];
    }
    return result;
}


const calcGrandTotal = (sheet: ScoreSheet) => sheet['TOTAL 1'] + sheet['TOTAL 2'];

const totalNumberScore = () => YahtzeeScoreSheet.push({ value : "TOTAL", calcFunction : calcTotalNumberScore, clickable:false, total: true });
const bonusLine = () => YahtzeeScoreSheet.push({ value : "BONUS", calcFunction : calcBonus, clickable:false, total: false });
const totalOne = () => YahtzeeScoreSheet.push({ value : "TOTAL 1", calcFunction : calcTotalOne, clickable:false, total: true });
const totalTwo = () => YahtzeeScoreSheet.push({ value : "TOTAL 2", calcFunction : calcTotalTwo, clickable:false, total: true });
const grandTotal = () => YahtzeeScoreSheet.push({ value : "GRAND TOTAL", calcFunction : calcGrandTotal, clickable:false, total: true });

let YahtzeeScoreSheet: ScoreSheet[] = [];
initNumberScore(1);
// totalNumberScore();
// bonusLine();
// totalOne();
// initOfAKindScore();
// getFullHouseScore();
// initSuiteScore();
// getYahtzeeScore();
// totalTwo();
// grandTotal();
export default YahtzeeScoreSheet;


