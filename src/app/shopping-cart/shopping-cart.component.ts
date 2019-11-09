import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  items = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getItems().subscribe(res => {
      this.items = res;
    });
  }

  deleted(deletedItem) {
    this.items = this.items.filter(item => item !== deletedItem);
  }

}
