import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { NgForm } from '@angular/forms';
import { OrderRepository } from 'src/app/repository/order.repository';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  public orderSent: boolean = false;
  public submitted: boolean = false;

  constructor(public order: Order, private orderRepo: OrderRepository) { }

  ngOnInit() {
  }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.orderRepo.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }

}
