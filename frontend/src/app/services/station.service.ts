import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Station } from '../models/station';
import { Bike} from '../models/bike';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  selectedStation: Station;
  station: Station[];
  bike: Bike[];
  readonly URL_API = 'http://localhost:3000/api/todos';

  constructor(private http: HttpClient) { 
    this.selectedStation = new Station();
  }

  getStations() {
    return this.http.get(this.URL_API + '/stations');
  }

  getOneStation(_id: string) {
    return this.http.get(this.URL_API + `/oneStation/${_id}` )
  }

  postStation(station: Station) {
    return this.http.post(this.URL_API + '/station', station );
  }

  putBike(station: Station) {
    return this.http.put(this.URL_API + `/station/${station._id}`, station);
  }

  deleteStation(_id: string) {
    return this.http.delete(this.URL_API + `/station/${_id}`)
  }
}
