import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() resultInput: any;
  @Output() updatedMatches:EventEmitter<any> = new EventEmitter();
  constructor(private matchService : MatchService) { }

  comment: any = {};
  commentForm:FormGroup
  ngOnInit() {
  }

  scoreColor(s1 :any,s2 : any) {
    if (s1>s2) {
      return "green"
    } else if(s1<s2) {
      return "red"
    } else {
      return "blue"
    }
  }
  addComment() {
    this.comment.matchId = this.resultInput._id
    this.comment.userId = localStorage.getItem("userId")
    this.matchService.addComment(this.comment).subscribe(
      (data) => {
        console.log("Here data after adding Comment", data.isAdded);
        this.matchService.getAllMatchesWithComments().subscribe((data) => {
          console.log("Here data", data.matches);
          this.updatedMatches.emit(data.matches);
        })
      }
    );
  }
}
