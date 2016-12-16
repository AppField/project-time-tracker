import {Injectable, OnInit} from '@angular/core';

import {Timerow} from "../models/timerow";


@Injectable()
export class IndexeddbService {
  private db;
  private request;


  constructor() {
    console.log('initiating indexeddb');
    this.request = indexedDB.open('PTT');
    this.request.onerror = (event) => {
      alert("Db wurde nicht erstellt");
    };
    this.request.onsuccess = (event) => {
      this.db = this.request.result;
      console.log('indexeddb initiated');
      this.db.onerror = (event) => {
        alert('Database error: ' + event.target.errorCode);
      }
    };
  }

}
