import { Component, OnInit } from '@angular/core';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ptt-timerow',
  templateUrl: 'timerow.component.html',
  styleUrls: ['timerow.component.css']
})
export class TimerowComponent implements OnInit {
  model;
  from = {hour: 8, minute: 30};
  to= {hour: 12, minute: 45};
  pause= {hour: 0, minute: 30};
  spent= {hour: 4, minute: 15};

  constructor() { }

  ngOnInit() {
  }
}
