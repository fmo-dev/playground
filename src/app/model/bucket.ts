import { GameObject } from './gameObject';
import { Dice } from './dice';

export class Bucket implements GameObject {

    private dices: Dice[] = [];
    public maxRoll: number;
    public currentRoll: number;

    constructor(bucketParam: any, color: string) {
        if (bucketParam.maxRoll) {
            this.maxRoll = bucketParam.maxRoll;
        }
        for (let i = 0; i < bucketParam.nbDices; i++) {
            this.dices.push(new Dice(bucketParam.nbFaces, color));
        }
    }

    play() {
        for (const dice of this.dices) {
            dice.roll();
        }
    }

    getDices = () => this.dices.map(_ => _.currentValue);

    reiniteAll = () => {
        for (const dice of this.dices) {
            dice.reset();
        }
    }

}
