import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { generateId } from 'src/app/shared/generateId';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player: any = {};
  playerForm: FormGroup;
  players:any=[];
  teams:any=[];
  constructor(
    private playerService : PlayerService,
    private router : Router) { }

  ngOnInit() {}

  addPlayer() {
    this.playerService.addPlayer(this.player).subscribe(
      (data) => {
        console.log("Here data from BE", data.message);
      this.router.navigate(["admin"]);
      }
    );
  }

}

