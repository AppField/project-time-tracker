import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ptt-navheader',
  templateUrl: 'navheader.component.html',
  styleUrls: ['navheader.component.css']
})
export class NavheaderComponent implements OnInit {
  date: Date = new Date();
  menuActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  activateMenu() {
    this.menuActive = !this.menuActive;
  }

}
