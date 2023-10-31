import { Component } from '@angular/core';
import { ArtDataService } from 'src/app/services/art-data.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  pageNoStartingValue=1;
  art: any;
  searchValue:string='';

  constructor(private artDataService: ArtDataService, private sharedService:SharedService) {
    this.getData()
  }
  ngOnInit()
  {
    this.sharedService.searchValue$.subscribe((value) => { this.searchValue = value;

      this.artDataService.getResponseBySearch(value).subscribe((response) => {
        this.art = response.data;
      });
     })
  }

  getData() {
    this.artDataService.getResponse().subscribe((response) => {
      this.art = response.data;
      console.log(this.art);
    });
  }
  renderNextPageData()
  {
    this.artDataService.currentPage+=1
    this.pageNoStartingValue=this.artDataService.currentPage;
    this.getData()
  }
  renderPreviousPageData()
  {
    if(this.artDataService.currentPage>1)
    {
      this.artDataService.currentPage-=1
      this.pageNoStartingValue=this.artDataService.currentPage;
      this.getData()
    }
  }
  renderPageByPgNo(pg:number)
  {
    this.pageNoStartingValue=pg
    this.artDataService.currentPage=pg;
    this.getData();
  }
}
