import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
@Injectable({ providedIn: 'root' })
export class SharedService {
  private searchValue = new BehaviorSubject('');
  searchValue$ = this.searchValue.asObservable();
  setSearchValue(value: string) { this.searchValue.next(value); } 
}

