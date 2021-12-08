import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookviewComponent } from './bookview/bookview.component';
import { ShowComponent } from './bookview/show/show.component';
import { AddEditComponent } from './bookview/add-edit/add-edit.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BookviewUserComponent } from './bookview-user/bookview-user.component';
import { ShowUserComponent } from './bookview-user/show-user/show-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    BookviewComponent,
    ShowComponent,
    AddEditComponent,
    BookviewUserComponent,
    ShowUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
