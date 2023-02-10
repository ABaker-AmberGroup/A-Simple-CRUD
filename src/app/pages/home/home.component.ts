import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/models/items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Items[] = [];


  constructor(private itemsService : ItemsService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems() {
    this.itemsService.getAllItems().subscribe((results : any) => {
      this.items = results;
    })
  }

  deleteItem(id: string) {
    this.itemsService.deleteItem(id).subscribe(() => {
      this.getAllItems();
    })
  }

}
