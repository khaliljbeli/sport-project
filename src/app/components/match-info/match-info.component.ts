import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {

  id: any
  match: any = {};
  constructor(private matchService: MatchService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.matchService.getMatchById(this.id).subscribe(
      (data) => {
        console.log("data", data.match);
        
        this.match = data.match;
      }
    )
  }

}
