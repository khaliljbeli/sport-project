import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stadium-table',
  templateUrl: './stadium-table.component.html',
  styleUrls: ['./stadium-table.component.css']
})
export class StadiumTableComponent implements OnInit {

  stadiums: any = [];
  constructor() { }

  ngOnInit() {
    this.stadiums = JSON.parse(localStorage.getItem("stadiums") || "[]");
  }

}
