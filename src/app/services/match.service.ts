import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  //backend server Adress
  matchURL: string = "http://localhost:3000/matches"
//HttpClient : un livreur
  constructor(private httpClient: HttpClient) { }
//Response : Array of objects
  getAllMatches(){
  return this.httpClient.get<{matchesArray: any}>(this.matchURL);
}
//Response : one object
getMatchById(id: any){
  return this.httpClient.get<{match: any}>(`${this.matchURL}/${id}`);
}
//Response : Message/Boolean
deleteMatch(id: any){
  return this.httpClient.delete<{isDeleted: boolean}>(`${this.matchURL}/${id}`);
}
//Response : Message/Boolean
addMatch(matchObj){
  return this.httpClient.post<{message : string}>(this.matchURL, matchObj);
}
editMatch(newMatch){
  return this.httpClient.put<{isUpdated : boolean}>(this.matchURL, newMatch)
}
searchMatchByScores(obj) {
  return this.httpClient.post<{searchTab: any}>(`${this.matchURL}/search`, obj)
}
addComment(obj) {
  return this.httpClient.post<{isAdded: boolean}>(`${this.matchURL}/comment`, obj)
}
getAllMatchesWithComments(){
  return this.httpClient.get<{matches: any}>(`${this.matchURL}/comments/getAll`);
}
}
