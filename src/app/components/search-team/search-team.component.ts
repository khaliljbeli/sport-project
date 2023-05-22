import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.component.html',
  styleUrls: ['./search-team.component.css']
})
export class SearchTeamComponent implements OnInit {

  team: any={};
  teams: any = [];
  stadiums: any = [];
  players: any = [];
  findedTeam: any = {};
  findedPlayers: any = [];
  searchForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.teams = JSON.parse(localStorage.getItem("teams") || "[]")
    this.stadiums = JSON.parse(localStorage.getItem("stadiums") || "[]")
    this.players = JSON.parse(localStorage.getItem("players") || "[]")
  }

  search() {
    this.findedTeam = {};
    let teamName = this.team.name;
    for (let i = 0; i < this.teams.length; i++) {
      if ((this.teams[i].name).toLowerCase() == teamName.toLowerCase()) {
        this.findedTeam = this.teams[i];
        break;
      }
    }
    console.log("findedTeam", this.findedTeam);
    
  }
  searchTeamStadium(sId) {
    return this.stadiums.find((obj) => { return obj.id == sId })
  }
  searchTeamPlayers(tId) {
    //for (let i = 0; i < this.players.length; i++) {
    //if (this.players[i].teamId == tId) {
    //this.findedPlayer.push(this.players[i]);
    //}
    //}
    this.findedPlayers = this.players.filter((obj) => { return obj.teamId = tId })
    return this.findedPlayers;
  }

}
