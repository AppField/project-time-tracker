import {Component, OnInit, HostBinding, HostListener, ElementRef} from '@angular/core';
import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ptc-dayselect',
  templateUrl: 'dayselect.component.html',
  styleUrls: ['dayselect.component.css'],
  providers: [NgbDatepickerConfig]
})
export class DayselectComponent implements OnInit  {
  model:  NgbDateStruct;

  private offsetTop: number;

  @HostBinding('class.fullsize') fullsizeMode = false;
  @HostBinding('class.sticky') sticky = false;
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let windowTop = event.srcElement.scrollingElement.scrollTop;

    this.sticky = windowTop> this.offsetTop;

  }

  constructor(elementRef: ElementRef) {
    this.offsetTop = elementRef.nativeElement.offsetTop;
    console.log(this.offsetTop);
  }

  enableFullsize():void {
    if(!this.sticky) {
      this.fullsizeMode = !this.fullsizeMode;
    }
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
