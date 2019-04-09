import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SubjectsComponent } from './components/stations/subjects.component';
import { BikesComponent } from './components/bikes/bikes.component';

import { ChangeService } from './services/change.service';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    BikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ChangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
