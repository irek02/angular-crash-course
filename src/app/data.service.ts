import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getItems() {
    // Use HttpClient to get shopping-cart.json.
    return this.httpClient.get<any>('assets/shopping-cart.json');
  }
}
