import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectionsService {
  selected: Array<any> = [];

  constructor() {}
  isPresent(item: any): boolean {
    let temp = this.selected.find((i) => i.id === item.id);
    console.log(temp);
    if (temp === undefined) return false;
    else return true;
  }
}
