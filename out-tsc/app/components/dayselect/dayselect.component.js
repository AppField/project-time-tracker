var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, HostListener, ElementRef } from '@angular/core';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
export var DayselectComponent = (function () {
    function DayselectComponent(elementRef) {
        this.fullsize = false;
        this.sticky = false;
        this.offsetTop = elementRef.nativeElement.offsetTop;
        var today = new Date();
        this.selectedDay = { day: today.getDate(), month: today.getMonth() + 1, year: today.getFullYear() };
        this.navYear = today.getFullYear();
        this.navMonth = today.getMonth();
    }
    DayselectComponent.prototype.onScroll = function (event) {
        var windowTop = event.srcElement.scrollingElement.scrollTop;
        this.sticky = windowTop > this.offsetTop;
    };
    DayselectComponent.prototype.toggleFullsize = function () {
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
    };
    DayselectComponent.prototype.next = function (datepicker) {
        if (this.fullsize) {
            // next month
            if (this.navMonth == 11) {
                this.navMonth = 0;
                this.navYear++;
            }
            else {
                this.navMonth++;
            }
            datepicker.navigateTo({ year: this.navYear, month: this.navMonth + 1 });
        }
        else {
            // next day
            var newDate = new Date();
            newDate.setMonth(this.navMonth);
            newDate.setFullYear(this.navYear);
            newDate.setDate(this.selectedDay.day + 1);
            if (this.navMonth != newDate.getMonth())
                this.navMonth = newDate.getMonth();
            this.selectedDay = { day: newDate.getDate(), month: this.navMonth + 1, year: newDate.getFullYear() };
            this.navYear = this.selectedDay.year;
        }
    };
    DayselectComponent.prototype.previous = function (datepicker) {
        if (this.fullsize) {
            // previous month
            if (this.navMonth == 0) {
                this.navMonth = 11;
                this.navYear--;
            }
            else {
                this.navMonth--;
            }
            datepicker.navigateTo({ year: this.navYear, month: this.navMonth + 1 });
        }
        else {
            // previous day
            var newDate = new Date();
            newDate.setMonth(this.navMonth);
            newDate.setFullYear(this.selectedDay.year);
            newDate.setDate(this.selectedDay.day - 1);
            if (this.navMonth != newDate.getMonth())
                this.navMonth = newDate.getMonth();
            this.selectedDay = { day: newDate.getDate(), month: this.navMonth + 1, year: newDate.getFullYear() };
            this.navYear = this.selectedDay.year;
        }
    };
    DayselectComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        // contains javascript index month numbers. (0 indexed)
        HostBinding('class.fullsize'), 
        __metadata('design:type', Object)
    ], DayselectComponent.prototype, "fullsize", void 0);
    __decorate([
        HostBinding('class.sticky'), 
        __metadata('design:type', Object)
    ], DayselectComponent.prototype, "sticky", void 0);
    __decorate([
        HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DayselectComponent.prototype, "onScroll", null);
    DayselectComponent = __decorate([
        Component({
            selector: 'ptt-dayselect',
            templateUrl: 'dayselect.component.html',
            styleUrls: ['dayselect.component.css'],
            providers: [NgbDatepickerConfig]
        }), 
        __metadata('design:paramtypes', [ElementRef])
    ], DayselectComponent);
    return DayselectComponent;
}());
//# sourceMappingURL=C:/Dev/GitHub/project-time-calculator/src/app/components/dayselect/dayselect.component.js.map