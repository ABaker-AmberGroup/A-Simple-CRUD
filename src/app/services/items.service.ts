// ---------------
// Based Veriables
// ---------------
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from '../models/items';
import { Observable } from 'rxjs';
// ---------------

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private API_URL = 'http://localhost:5000/api/v1/items';

  constructor(private http: HttpClient) { }


  // ---------------
  // Get All Items
  // ---------------
  getAllItems() {
    return this.http.get(this.API_URL);
  }
  // ---------------


  // ---------------
  // Get Items by ID
  // ---------------
  getItemById(id: string) {
    // return this.http.get(`${this.API_URL}/${id}`);
    return this.http.get(this.API_URL + '/' + id);
  }
  // ---------------


  // ---------------
  // create new Item
  // ---------------
  createItem(data: Items) {
    return this.http.post(this.API_URL, data);
  }
  // ---------------


  // ---------------
  // update Item
  // ---------------
  updateItem(id: string, data: Items) {
    return this.http.put(this.API_URL + '/' + id, data);
  }
  // ---------------


  // ---------------
  // Delete Item
  // ---------------
  deleteItem(id: string) {
    return this.http.delete(this.API_URL + '/' + id);
  }
  // ---------------


}
