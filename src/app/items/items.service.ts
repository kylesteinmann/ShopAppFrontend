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



  constructor(private http: HttpClient) { }


  onSubmitItem(Form: NgForm) {
    return this.http.post<Item>('http://localhost:3000/inventories', Form.value).subscribe()
  }
}
