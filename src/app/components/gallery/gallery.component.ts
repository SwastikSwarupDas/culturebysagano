import { Component } from '@angular/core';
import { ArtDataService } from 'src/app/services/art-data.service';
import { SharedService } from '../../services/shared.service';
import { SelectionsService } from 'src/app/services/selections.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  pageNoStartingValue=1;
  art: any;
  searchValue:string='';
  addSymbol:string='+';
  addClickFlag:boolean=false;

  constructor(private artDataService: ArtDataService, private sharedService:SharedService, public selectionsService: SelectionsService) {
    this.getData()
  }

  ngOnInit()
  {

    this.sharedService.searchValue$.subscribe((value) => { this.searchValue = value;

      if(value!=="")
      this.artDataService.getResponseBySearch(value).subscribe((response) => {
        this.art = response.data;
      });
      else{
        this.getData();
      }
     })
  }

  getData() {
    this.artDataService.getResponse().subscribe((response) => {
      this.art = response.data;
      console.log(this.art);
      console.log(this.artDataService.currentPage);
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

  addToSelections(item:any){
  
    console.log(item);
    if(!this.selectionsService.isPresent(item))
    this.selectionsService.selected.push(item);
    else
    {
      let index=this.selectionsService.selected.findIndex((i)=>i.id===item.id);
      this.selectionsService.selected.splice(index,1);
    }
    console.log(this.selectionsService.selected);
  }
}
