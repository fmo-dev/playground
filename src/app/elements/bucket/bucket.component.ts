import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss']
})
export class BucketComponent implements OnInit {
  @Input() params: any[]

  constructor() { }

  ngOnInit(): void {

  }

}
