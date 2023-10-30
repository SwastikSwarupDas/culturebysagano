import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ArtDataService {

  url = 'https://api.artic.edu/api/v1/artworks?page=4&limit=100';
  fakeUrl = 'https://fakestoreapi.com/products';
  constructor(private artPull:HttpClient, private fakePull:HttpClient) {  }

  art(){
    return this.artPull.get<any>(this.url);
  }

  fake(){
    return this.fakePull.get<any>(this.fakeUrl);
  }
}
