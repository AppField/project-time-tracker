import {Component, OnInit, HostBinding, HostListener, ElementRef} from '@angular/core';
import {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ptc-dayselect',
  templateUrl: 'dayselect.component.html',
  styleUrls: ['dayselect.component.css'],
  providers: [NgbDatepickerConfig]
})
export class DayselectComponent implements OnInit {
  selectedDay: NgbDateStruct;

  private offsetTop: number;
  @HostBinding('class.fullsize') fullsize = false;
  @HostBinding('class.sticky') sticky = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let windowTop = event.srcElement.scrollingElement.scrollTop;
    this.sticky = windowTop > this.offsetTop;
  }

  constructor(elementRef: ElementRef) {
    this.offsetTop = elementRef.nativeElement.offsetTop;
    let today = new Date();
    this.selectedDay = { day: today.getDate(), month: today.getMonth() +1, year: today.getFullYear() };
  }


  toggleFullsize(): void {
    this.fullsize = !this.fullsize;
    // TODO: replace with angular-way method: hide scrollbars.
    if (this.fullsize) {
      document.getElementsByTagName("body")[0].style.overflow = 'hidden';
    }
    else {
      document.getElementsByTagName("body")[0].style.overflow = 'auto';
    }
  }

  nextDay(): void {
    let newDate = new Date();
    newDate.setMonth(this.selectedDay.month -1);
    newDate.setFullYear(this.selectedDay.year);
    newDate.setDate(this.selectedDay.day + 1);

    this.selectedDay = { day: newDate.getDate(), month: newDate.getMonth() +1, year: newDate.getFullYear() };
  }

  previousDay(): void {
    let newDate = new Date();
    newDate.setMonth(this.selectedDay.month -1);
    newDate.setFullYear(this.selectedDay.year);
    newDate.setDate(this.selectedDay.day -1);

    this.selectedDay = { day: newDate.getDate(), month: newDate.getMonth() +1, year: newDate.getFullYear() };
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
