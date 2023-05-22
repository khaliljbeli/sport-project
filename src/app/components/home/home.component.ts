import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  obj:any= {teamOne:"EST", teamTwo:"CA", scoreOne:2, scoreTwo:0};
  constructor() { }

  ngOnInit() {
  }

}
