import { Component, OnInit, Input } from '@angular/core';
import { Dice } from '../../model/dice'
@Component({
  selector: 'dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent {

  @Input() private diceReference : Dice

    constructor() {}

    select = () =>  this.diceReference.select();

}
