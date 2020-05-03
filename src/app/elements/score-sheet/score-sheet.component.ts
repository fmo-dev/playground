import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScoreSheet } from 'src/app/scoreSheetData/scoreSheet.metadata' 
import { Player } from 'src/app/model/player';


@Component({
  selector: 'score-sheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.scss']
})
export class ScoreSheetComponent implements OnInit {
  @Output() onSelectLine : EventEmitter<string> = new EventEmitter();
  @Input() sheet: ScoreSheet[];
  @Input() players: Player[];
  @Input() current: Player;

  constructor() { }

  ngOnInit(): void {

  }

  selectLine = (line) => this.onSelectLine.emit(line);

}
