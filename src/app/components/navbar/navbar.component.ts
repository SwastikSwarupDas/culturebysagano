import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  fg: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({ alphaControl: '' });
  }
  oninput() {
    if (this.fg) {
      let str = this.fg.value.alphaControl;
      console.log(str);
      
    }
  }

  disabled:boolean=false;
  renderSearch(){
    this.disabled=!this.disabled;
  }
}
