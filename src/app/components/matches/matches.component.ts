import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches:any = [];
  constructor(private matchService : MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatchesWithComments().subscribe(
      (data)=>{
        console.log("Here data", data.matches)
        this.matches = data.matches;
      }
    );
  }
  updateMatches(tab:any) {
    this.matches = tab;
  }

}
