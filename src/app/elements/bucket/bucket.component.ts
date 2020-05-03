import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss']
})
export class BucketComponent{
  @Input() params: any;

  constructor() { }


}
