import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos'

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Card[]>(this.apiUrl);
  }

  delete(id:number){
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
