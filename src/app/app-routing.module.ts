import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SearchComponent } from './components/search/search.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { SearchTeamComponent } from './components/search-team/search-team.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SearchWeatherComponent } from './components/search-weather/search-weather.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';
const routes: Routes = [
  // https://localhost:4200/ => Home Component will be displayed
  { path: "", component: HomeComponent },
  // https://localhost:4200/signin => Login Component will be displayed
  { path: "signin", component: LoginComponent },
  // https://localhost:4200/signup => Signup Component will be displayed
  { path: "signup", component: SignupComponent },
  { path: "addTeam", component: AddTeamComponent },
  { path: "addMatch", component: AddMatchComponent },
  { path: "admin", component: AdminComponent },
  { path: "addPlayer", component: AddPlayerComponent },
  { path: "matches", component: MatchesComponent },
  { path: "players", component: PlayersComponent },
  { path: "matchInfo/:id", component: MatchInfoComponent },
  // :x => param ("editMatch/4", "editMatch/9", .....)
  { path: "editMatch/:x", component: EditMatchComponent },
  { path: "teamInfo/:x", component: TeamInfoComponent },
  { path: "signupAdmin", component: SignupAdminComponent },
  { path: "searchMatch", component: SearchComponent },
  { path: "addStadium", component: AddStadiumComponent },
  { path: "addStore", component: AddStoreComponent },
  { path: "editStore/:id", component: AddStoreComponent },
  { path: "searchTeam", component: SearchTeamComponent },
  { path: "profile/:y", component: ProfileComponent },
  { path: "weather", component: WeatherComponent },
  { path:"searchWeather", component:SearchWeatherComponent},
  { path: "reclamation", component: ReclamationComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
