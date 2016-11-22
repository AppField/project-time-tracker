import {Component, OnInit, HostBinding} from '@angular/core';
import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import fullyResolved = webdriver.promise.fullyResolved;


@Component({
  selector: 'ptc-dayselect',
  templateUrl: 'dayselect.component.html',
  styleUrls: ['dayselect.component.css'],
  providers: [NgbDatepickerConfig]
})
export class DayselectComponent implements OnInit  {
  model:  NgbDateStruct;

  @HostBinding('class.fullsize') fullsizeMode = false;

  constructor() {

  }

  enableFullsize() {
    this.fullsizeMode = !this.fullsizeMode;
  }

  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: {month: number}) {
    return date.month !== current.month;
  }
  ngOnInit() {
  }

}
