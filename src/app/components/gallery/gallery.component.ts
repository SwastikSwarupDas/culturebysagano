import { Component } from '@angular/core';
import { ArtDataService } from 'src/app/services/art-data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  art:any;
  fake:any;
  constructor(private artData:ArtDataService, private fakeData:ArtDataService){
    artData.art().subscribe((data)=>{
      console.log("data",data);
      this.art=data.data;
    });

    fakeData.fake().subscribe((data)=>{
      console.log("data",data);
      this.fake=data;
    })
  }


}
