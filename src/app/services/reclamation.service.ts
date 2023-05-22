import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  reclamationURL:string="http://localhost:3000/reclamations";
  constructor(private http:HttpClient) { }
  addReclamation(obj){
    return this.http.post<{isAdded: boolean}>(this.reclamationURL, obj);
  }
}
