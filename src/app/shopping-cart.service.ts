import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private httpClient: HttpClient) { }

  getItems() {
    return this.httpClient.get<any>('assets/shopping-cart.json');
  }
}
