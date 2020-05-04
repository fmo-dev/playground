import { Component, OnInit, Input } from '@angular/core';
import { Dice } from '../../model/dice';
@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent {

  @Input() public diceReference: Dice;

    constructor() {}

    select = () =>  this.diceReference.select();

}
