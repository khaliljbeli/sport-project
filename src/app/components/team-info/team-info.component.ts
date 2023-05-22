import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  teams: any;
  id: any;
  team: any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.teams = JSON.parse(localStorage.getItem("teams") || "[]");
    this.id = JSON.parse(localStorage.getItem("teamId"))
  }

}
