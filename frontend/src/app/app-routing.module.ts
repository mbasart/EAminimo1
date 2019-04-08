import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectsComponent } from "./components/stations/subjects.component";
import { BikesComponent } from "./components/bikes/bikes.component";

const routes: Routes = [
  { path: 'api/bikes',component: BikesComponent },
  { path: 'api/stations', component: SubjectsComponent},
  { path: '', redirectTo: 'api/stations', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
