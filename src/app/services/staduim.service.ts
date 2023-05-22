import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaduimService {
    //backend server Adress
    stadiumURL: string = "http://localhost:3000/staduims"
    //HttpClient : un livreur
      constructor(private httpClient: HttpClient) { }
    //Response : Array of objects
      getAllStadiums(){
      return this.httpClient.get<{stadiumsArray: any}>(this.stadiumURL);
    }
    //Response : one object
    getStadiumById(id: any){
      return this.httpClient.get<{stadium: any}>(`${this.stadiumURL}/${id}`);
    }
    //Response : Message/Boolean
    deleteStadium(id: any){
      return this.httpClient.delete<{isDeleted: boolean}>(`${this.stadiumURL}/${id}`);
    }
    //Response : Message/Boolean
    addStadium(stadiumObj){
      return this.httpClient.post<{message : string}>(this.stadiumURL, stadiumObj);
    }
    editStadium(newStadium){
      return this.httpClient.put<{isUpdated : boolean}>(this.stadiumURL, newStadium)
    }
    }
    

