import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { BikeService} from '../../services/bike.service';
import { StationService} from '../../services/station.service';
import { Bike} from 'src/app/models/bike';
import { Station } from 'src/app/models/station';

import { ChangeService } from '../../services/change.service';

declare var M: any;

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css'],
  providers: [BikeService]
})
export class BikesComponent implements OnInit {

  constructor(private bikeService: BikeService, private router: Router, private stationService: StationService) {}

  ngOnInit() {
    //this.changeService.clickedStationId(stationId => this.stationId = stationId)
    this.getOneStation();
    this.unassigned();
  }

  getOneStation() {
    this.stationService.getOneStation(this.stationService.selectedStation._id)
      .subscribe(res => {
        this.bikeService.bike = res["bikes"] as Bike[];
      })
  }

  addBikes(bike) {
    this.bikeService.selectedBike = bike;
    this.bikeService.addBikes(this.stationService.selectedStation._id,bike)
      .subscribe(res=>{
        this.getOneStation();
        this.unassigned();
      })
  }

  deleteBikes(bike) {
    this.bikeService.selectedBike = bike;
    this.bikeService.deleteBikes(this.stationService.selectedStation._id,bike)
      .subscribe(res =>{
        this.getOneStation();
        this.unassigned();
      })
  }

  unassigned(){
    this.bikeService.unassigned()
      .subscribe(res =>{
        this.bikeService.bikesUnassigned = res as Bike[];
      })
  }

}
