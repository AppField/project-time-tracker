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
export var NavheaderComponent = (function () {
    function NavheaderComponent() {
        this.date = new Date();
        this.menuActive = false;
    }
    NavheaderComponent.prototype.ngOnInit = function () {
    };
    NavheaderComponent.prototype.activateMenu = function () {
        this.menuActive = !this.menuActive;
    };
    NavheaderComponent = __decorate([
        Component({
            selector: 'ptt-navheader',
            templateUrl: 'navheader.component.html',
            styleUrls: ['navheader.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NavheaderComponent);
    return NavheaderComponent;
}());
//# sourceMappingURL=C:/Dev/GitHub/project-time-calculator/src/app/components/navheader/navheader.component.js.map