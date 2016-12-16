var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
export var IndexeddbService = (function () {
    function IndexeddbService() {
        var _this = this;
        console.log('initiating indexeddb');
        this.request = indexedDB.open('PTT');
        this.request.onerror = function (event) {
            alert("Db wurde nicht erstellt");
        };
        this.request.onsuccess = function (event) {
            _this.db = _this.request.result;
            console.log('indexeddb initiated');
            _this.db.onerror = function (event) {
                alert('Database error: ' + event.target.errorCode);
            };
        };
    }
    IndexeddbService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], IndexeddbService);
    return IndexeddbService;
}());
//# sourceMappingURL=C:/Dev/GitHub/project-time-calculator/src/app/services/indexeddb.service.js.map