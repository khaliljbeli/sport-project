import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  matches:any=[];
  searchedMatches:any=[];
  match:any={};
  constructor(private matchService : MatchService) { }

  ngOnInit() {
  }

  searchMatchByScores() {
    this.matchService.searchMatchByScores(this.match).subscribe(
      (data) => {
        this.searchedMatches = data.searchTab;
      }
    )
  }
}
