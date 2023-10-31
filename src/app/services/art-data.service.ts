import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ArtDataService {


  currentPage=1

  constructor(private artPull:HttpClient) {  }
  getResponse()
  {
    
    return this.artPull.get<any>(`https://api.artic.edu/api/v1/artworks?page=${this.currentPage}`);
  }
  getResponseBySearch(search:string)
  {
    return this.artPull.get<any>(` https://api.artic.edu/api/v1/artworks/search?q=${search}?fields=id,title,artist_display,date_display,main_reference_number,image_id`);
  }

}
