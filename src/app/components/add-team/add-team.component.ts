import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { generateId } from 'src/app/shared/generateId';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  team: any = {};
  stadiums: any = [];
  teamForm: FormGroup;
  constructor(private router: Router,
    private teamService : TeamService ) { }

  ngOnInit() {
    
  }

  addTeam() {
  this.teamService.addTeam(this.team).subscribe(
    (data) => {
      console.log("Here data from BE", data.message)
    this.router.navigate(["admin"])
    });
  }


}
