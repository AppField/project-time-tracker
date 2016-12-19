import { Component } from '@angular/core';

import {Timerow} from "./models/timerow";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  timerows: Timerow[];

  constructor() { }

}
