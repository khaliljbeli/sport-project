import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaduimService } from 'src/app/services/staduim.service';
import { generateId } from 'src/app/shared/generateId';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {

  stadiums: any = [];
  stadium: any = {};
  constructor(private router:Router,
    private stadiumService:StaduimService) { }

  ngOnInit() {

  }

  addStadium() {
  this.stadiumService.addStadium(this.stadium).subscribe(
    (data) => {
      console.log("Here data from BE", data.message)
      this.router.navigate(["admin"])
    });
  }
}
