import {Component, OnInit, HostBinding, HostListener, ElementRef, ViewChild} from '@angular/core';
import {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbDatepicker} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker";


@Component({
  selector: 'ptc-dayselect',
  templateUrl: 'dayselect.component.html',
  styleUrls: ['dayselect.component.css'],
  providers: [NgbDatepickerConfig]
})
export class DayselectComponent implements OnInit {
  model: NgbDateStruct;

  private offsetTop: number;
  @HostBinding('class.fullsize') fullsizeMode = false;
  @HostBinding('class.sticky') sticky = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let windowTop = event.srcElement.scrollingElement.scrollTop;
    this.sticky = windowTop > this.offsetTop;
  }

  constructor(elementRef: ElementRef) {
    this.offsetTop = elementRef.nativeElement.offsetTop;
  }

  enableFullsize(): void {
    this.fullsizeMode = !this.fullsizeMode;
    // TODO: replace with angular-way method: hide scrollbars.
    if (this.fullsizeMode) {
      document.getElementsByTagName("body")[0].style.overflow = 'hidden';
    }
    else {
      document.getElementsByTagName("body")[0].style.overflow = 'auto';
    }
  }

  ngOnInit() {
  }

}
