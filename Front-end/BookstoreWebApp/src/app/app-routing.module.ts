import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookviewComponent } from './bookview/bookview.component'; 

const routes: Routes = [
  {path: 'bookview', component:BookviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
