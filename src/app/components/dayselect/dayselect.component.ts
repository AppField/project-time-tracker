import {Component, OnInit, HostBinding, HostListener, ElementRef, ViewChild} from '@angular/core';
import {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbDatepicker} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker";
import {NgbInputDatepicker} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-input";


@Component({
  selector: 'ptt-dayselect',
  templateUrl: 'dayselect.component.html',
  styleUrls: ['dayselect.component.css'],
  providers: [NgbDatepickerConfig]
})
export class DayselectComponent implements OnInit {
  selectedDay: NgbDateStruct;
  navYear: number;

  private offsetTop: number;
  private navMonth: number; // contains javascript index month numbers. (0 indexed)
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
    this.selectedDay = {day: today.getDate(), month: today.getMonth() + 1, year: today.getFullYear()};
    this.navYear = today.getFullYear();
    this.navMonth = today.getMonth();
  }

  toggleFullsize(): void {
    this.fullsize = !this.fullsize;
    // TODO: replace with angular-way method: hide scrollbars.
    if (this.fullsize) {
      document.getElementsByTagName("body")[0].style.overflow = 'hidden';
      this.navYear = this.selectedDay.year;
      this.navMonth = this.selectedDay.month - 1;
    }
    else {
      document.getElementsByTagName("body")[0].style.overflow = 'auto';
    }
  }

  next(datepicker: NgbDatepicker): void {
    if (this.fullsize) {
      // next month
      if (this.navMonth == 11) {
        this.navMonth = 0;
        this.navYear++;
      }
      else {
        this.navMonth++;
      }
      datepicker.navigateTo({year: this.navYear, month: this.navMonth + 1});
    }
    else {
      // next day
      let newDate = new Date();
      newDate.setMonth(this.navMonth);
      newDate.setFullYear(this.navYear);
      newDate.setDate(this.selectedDay.day + 1);

      if (this.navMonth != newDate.getMonth()) this.navMonth = newDate.getMonth();
      this.selectedDay = {day: newDate.getDate(), month: this.navMonth + 1, year: newDate.getFullYear()};
      this.navYear = this.selectedDay.year;
    }
  }

  previous(datepicker: NgbDatepicker): void {
    if (this.fullsize) {
      // previous month
      if (this.navMonth == 0) {
        this.navMonth = 11;
        this.navYear--;
      }
      else {
        this.navMonth--;
      }
      datepicker.navigateTo({year: this.navYear, month: this.navMonth + 1});
    }
    else {
      // previous day
      let newDate = new Date();
      newDate.setMonth(this.navMonth);
      newDate.setFullYear(this.selectedDay.year);
      newDate.setDate(this.selectedDay.day - 1);

      if (this.navMonth != newDate.getMonth()) this.navMonth = newDate.getMonth();
      this.selectedDay = {day: newDate.getDate(), month: this.navMonth + 1, year: newDate.getFullYear()};
      this.navYear = this.selectedDay.year;
    }
  }

  ngOnInit() {
  }

}
