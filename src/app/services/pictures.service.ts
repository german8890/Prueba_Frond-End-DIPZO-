import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  private url ='https://rickandmortyapi.com/api/character';
  constructor(private http: HttpClient) { }

  getPictures(){
    return this.http.get(this.url);
  }
}
