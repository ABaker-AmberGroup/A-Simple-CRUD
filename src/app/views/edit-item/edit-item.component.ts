import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  id!: string;
  data: any = {
    first_nm: '',
    last_nm: '',
    email: '',
    phone_num: '',
    address: '',
  }

  constructor(private ItemsService: ItemsService, private location: Location, private route:ActivatedRoute) { }

  // grab the id from the params
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // get the item id
    this.ItemsService.getItemById(this.id).subscribe((res : any) => {
      console.log(res);
      
      this.data = res;
    })
    
  }

  // on form submit, return to the previous page
  handleSubmit() {
    this.ItemsService.updateItem(this.id!, this.data).subscribe(() => {
      this.location.back();
    })
  }

}
