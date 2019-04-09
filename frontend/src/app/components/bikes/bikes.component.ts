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

  stationId: string;

  constructor(private bikeService: BikeService, private router: Router, private stationService: StationService, private changeService: ChangeService) {}

  ngOnInit() {
    this.changeService.clickedStationId.subscribe(stationId => this.stationId =stationId)
    console.log("Id del element clickat: "+this.stationId)
    if(this.stationId=="0")
    {
      this.router.navigateByUrl("/");
    }


    this.getOneStation();
    this.unassigned();
  }

  getOneStation() {
    //this.changeService.changeStationId(this.stationId);
    if(this.stationId != "0") {
    this.bikeService.getOneStation(this.stationId)
      .subscribe(res => {
        this.bikeService.bike = res["bikes"] as Bike[];
      })
    }
  }

  addBikes(bike) {
    this.bikeService.selectedBike = bike;
    this.bikeService.addBikes(this.stationId,bike)
      .subscribe(res=>{
        this.getOneStation();
        this.unassigned();
      })
  }

  deleteBikes(bike) {
    this.bikeService.selectedBike = bike;
    this.bikeService.deleteBikes(this.stationId,bike)
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
