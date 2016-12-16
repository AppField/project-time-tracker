var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var TimerowComponent = (function () {
    function TimerowComponent() {
        this.from = { hour: 8, minute: 30 };
        this.to = { hour: 12, minute: 45 };
        this.pause = { hour: 0, minute: 30 };
        this.spent = { hour: 4, minute: 15 };
    }
    TimerowComponent.prototype.ngOnInit = function () {
    };
    TimerowComponent = __decorate([
        Component({
            selector: 'ptt-timerow',
            templateUrl: 'timerow.component.html',
            styleUrls: ['timerow.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TimerowComponent);
    return TimerowComponent;
}());
//# sourceMappingURL=C:/Dev/GitHub/project-time-calculator/src/app/components/timerow/timerow.component.js.map