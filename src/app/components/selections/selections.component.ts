import { Component } from '@angular/core';
import { ArtDataService } from 'src/app/services/art-data.service';
import { SelectionsService } from 'src/app/services/selections.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-selections',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.scss']
})
export class SelectionsComponent {
  art:any
  constructor(private artDataService: ArtDataService, private sharedService:SharedService, public selectionsService: SelectionsService) {
    this.art=selectionsService.selected;
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
