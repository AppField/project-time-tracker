import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ptc-navheader',
  templateUrl: 'navheader.component.html',
  styleUrls: ['navheader.component.css']
})
export class NavheaderComponent implements OnInit {
  date: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}