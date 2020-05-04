import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScoreSheet } from 'src/app/scoreSheetData/scoreSheet.metadata';
import { Player } from 'src/app/model/player';


@Component({
  selector: 'app-score-sheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.scss']
})
export class ScoreSheetComponent implements OnInit {
  @Output() selectLine: EventEmitter<string> = new EventEmitter();
  @Input() sheet: ScoreSheet[];
  @Input() players: Player[];
  @Input() current: Player;

  constructor() { }

  ngOnInit(): void {

  }

  onSelectLine = (line) => this.selectLine.emit(line);

}
