import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bike} from '../models/bike';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  selectedBike: Bike;
  bike: Bike[];
  bikesUnassigned: Bike[];
  readonly URL_API = 'http://localhost:3000/api/todos';

  constructor(private http: HttpClient) { 
    this.selectedBike = new Bike();
  }

  addBikes(idStation: string, bike: Bike){
    return this.http.put(this.URL_API + `/stationAdd/${idStation}`,bike);
  }

  deleteBikes(idStation: string, bike: Bike) {
    return this.http.put(this.URL_API + `/stationDelete/${idStation}`, bike);
  }

  unassigned() {
    return this.http.get(this.URL_API + '/unassigned');
  }

  getOneStation(_id: string) {
    return this.http.get(this.URL_API + `/oneStation/${_id}` )
  }
}
