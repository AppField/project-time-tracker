import { Component } from '@angular/core';

import { IndexeddbService } from "./services/indexeddb.service";
import {Timerow} from "./models/timerow";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IndexeddbService]
})
export class AppComponent {
  timerows: Timerow[];

  constructor(private indexeddbService: IndexeddbService) { }

}
