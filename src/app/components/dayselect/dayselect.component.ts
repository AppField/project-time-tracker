import {Component, OnInit, HostBinding, HostListener} from '@angular/core';
import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ptc-dayselect',
  templateUrl: 'dayselect.component.html',
  styleUrls: ['dayselect.component.css'],
  providers: [NgbDatepickerConfig]
})
export class DayselectComponent implements OnInit  {
  model:  NgbDateStruct;

  @HostBinding('class.fullsize') fullsizeMode = false;
  @HostBinding('class.sticky') sticky = false;
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    console.log(event.srcElement.scrollingElement.scrollTop);
  }

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
