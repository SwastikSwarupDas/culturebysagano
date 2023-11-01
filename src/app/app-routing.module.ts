import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SelectionsComponent } from './components/selections/selections.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'gallery',
    component:GalleryComponent,
  },
  {
    path:'selections',
    component:SelectionsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
