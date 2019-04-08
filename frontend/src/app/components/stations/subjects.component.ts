import { Component, OnInit } from '@angular/core';

import { StationService } from '../../services/station.service';
import { NgForm } from '@angular/forms';
import { Station } from 'src/app/models/station';

import {Router} from "@angular/router";

declare var M: any;

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
  providers: [StationService]
})
export class SubjectsComponent implements OnInit {

  constructor(private stationService: StationService, private router: Router) { }

  ngOnInit() {
    this.getSubjects();
  }

  addStudent(form: NgForm) {
    if(form.value._id){
      this.stationService.putBike(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Alumna afegit correctament'});
        this.getSubjects();
      })
    } else{
      this.stationService.postStation(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Assignatura creada correctament'});
        this.getSubjects();
      })
    }
  }

  getSubjects() {
    this.stationService.getStations()
    .subscribe(res =>{
      this.stationService.station = res as Station[];
      console.log(res);
    })
  }

  editSubject(subject: Station) {
    this.stationService.selectedStation = subject;
  }

  resetForm(form?: NgForm) {
    if(form){
      form.reset();
      this.stationService.selectedStation = new Station();
    }
  }

  deleteSubject(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')){
      this.stationService.deleteStation(_id)
        .subscribe(res =>{
          this.getSubjects();
          this.resetForm(form);
          M.toast({html: 'Deleted Successfully'});
        })
    }
  }

  obtenirBikes(){
    this.router.navigateByUrl("/api/bikes");
  }

}
