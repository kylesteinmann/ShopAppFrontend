import { Injectable } from '@angular/core';
import { NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  name = "";
  description = "";
  price = "";
  stock = "";

  items: Item[] = [];
  cart: Item[] = [];

  constructor(private http: HttpClient) {
    this.getItems()
   }


  onSubmitItem(Form: NgForm) {
    return this.http.post<Item>('http://localhost:3000/inventories', Form.value).subscribe(() =>
      this.getItems()


    )

  }

  getItems() {
    return this.http.get<Item[]>('http://localhost:3000/inventories').subscribe(data => this.items=data)

  }

  addToCart(item: Item) {
    this.cart.push(item);
  }

  onCheckout() {
    return this.http.post<Item[]>('http://localhost:3000/carts', this.cart).subscribe()
  }
}

