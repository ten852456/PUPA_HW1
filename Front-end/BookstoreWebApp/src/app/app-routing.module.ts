import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookviewComponent } from './bookview/bookview.component'; 
import { BookviewUserComponent } from './bookview-user/bookview-user.component';

const routes: Routes = [
  {path: 'Adminview', component:BookviewComponent},
  {path: '', component:BookviewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
