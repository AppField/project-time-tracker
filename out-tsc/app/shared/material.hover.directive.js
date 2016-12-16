var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';
export var MaterialHoverDirective = (function () {
    function MaterialHoverDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    MaterialHoverDirective.prototype.onMouseEnter = function () {
        this.highlight('yellow');
    };
    MaterialHoverDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    MaterialHoverDirective.prototype.highlight = function (color) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    };
    __decorate([
        HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MaterialHoverDirective.prototype, "onMouseEnter", null);
    __decorate([
        HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MaterialHoverDirective.prototype, "onMouseLeave", null);
    MaterialHoverDirective = __decorate([
        Directive({
            selector: '[materialHover]'
        }), 
        __metadata('design:paramtypes', [ElementRef, Renderer])
    ], MaterialHoverDirective);
    return MaterialHoverDirective;
}());
//# sourceMappingURL=C:/Dev/GitHub/project-time-calculator/src/app/shared/material.hover.directive.js.map