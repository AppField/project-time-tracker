import { Component } from '@angular/core';

import {Timerow} from "./models/timerow";
import {IndexeddbService} from "./indexeddb/indexeddb.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IndexeddbService]
})
export class AppComponent {
  timerows: Timerow[];

  constructor() { }

}
