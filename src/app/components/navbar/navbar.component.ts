import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  fg: FormGroup;
  search! : string;
  constructor(private fb: FormBuilder, private sharedService:SharedService) {
    this.fg = this.fb.group({ alphaControl: '' });
  }

  oninput() {
    if (this.fg) {
      // let str = this.fg.value.alphaControl;
      // console.log(str);
      this.sharedService.setSearchValue(this.search);
    }
  }

  disabled: boolean = false;
  renderSearch() {
    this.disabled = !this.disabled;
  }
}
