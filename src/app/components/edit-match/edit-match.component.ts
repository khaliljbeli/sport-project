import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  matches:any=[];
  id: any;
  match: any= {};
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private matchService : MatchService
    ) { }

  ngOnInit() {
    //this.id = localStorage.getItem("matchId")
    this.id = this.activatedRoute.snapshot.paramMap.get("x");
    //activatedRoute is an angular model which help us to take param from path
    this.matchService.getMatchById(this.id).subscribe(
      (data) => {
        this.match = data.match;
      }
    )
  }
  editMatch() {
    this.matchService.editMatch(this.match).subscribe(
      (data) => {
        console.log("Here data after edit", data);
        
      }
    )
    this.router.navigate(["admin"]);
  }

}
