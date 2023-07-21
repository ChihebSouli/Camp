import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailService } from '../services/order-detail.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  orderId!: number;
  orderData: any; // Replace 'any' with the appropriate type for your data

  constructor(private route: ActivatedRoute, private orderDetailService: OrderDetailService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.orderId = +params['orderId']; // Get the order ID from the route parameter
      this.fetchOrderDetails();
    });
  }

  fetchOrderDetails(): void {
    this.orderDetailService.getOrdersById(this.orderId)
  }
}
