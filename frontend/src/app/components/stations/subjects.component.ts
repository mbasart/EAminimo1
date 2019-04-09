import { Component, OnInit } from '@angular/core';

import { StationService } from '../../services/station.service';
import { Station } from 'src/app/models/station';

import {Router} from "@angular/router";
import { ChangeService } from '../../services/change.service';

declare var M: any;

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
  providers: [StationService]
})
export class SubjectsComponent implements OnInit {

  stationId: string;

  constructor(private stationService: StationService, private router: Router, private changeService: ChangeService) { }

  ngOnInit() {
    this.changeService.clickedStationId.subscribe(stationId => this.stationId =stationId)

    this.getSubjects();
  }

  getSubjects() {
    this.stationService.getStations()
    .subscribe(res =>{
      this.stationService.station = res as Station[];
      console.log(res);
    })
  }

  obtenirBikes(id){
    this.changeService.changeStationId(id);
    this.router.navigateByUrl("/api/bikes");
  }

}
