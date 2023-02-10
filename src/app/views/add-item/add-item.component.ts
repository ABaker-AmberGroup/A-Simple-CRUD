import { Items } from './../../models/items';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemsService } from './../../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  data: any = {
    first_nm: '',
    last_nm: '',
    address: '',
    email: '',
    phone_num: ''
  }

  @Output('close')onClose = new EventEmitter();


  constructor(private ItemsService: ItemsService, private router: Router) { }

  ngOnInit(): void {
    // this.getItems();
  }

  submitForm(form : NgForm) {
    this.ItemsService.createItem(form.value).subscribe(() => {
      window.alert('Successfully Added');
      this.router.navigateByUrl('/');
      // form.reset();
      // this.onClose.emit()
    })
  }

  cancel(){
    this.onClose.emit();
    // this.router.navigateByUrl(this.redirectTo)
  }

}
