import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderProductService } from './../services/order-product.service';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {
  order_id!: number;
  orderData: any;

  constructor(private route: ActivatedRoute, private orderProductService: OrderProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.order_id = +params['orderId'];
      console.log('Order ID:', this.order_id); 
      this.fetchOrderProductDetails();
    });
  }

  fetchOrderProductDetails(): void {
    this.orderProductService.getProductsByOrderId(this.order_id).subscribe(
      (data: any) => {
        this.orderData = data;
      },
      (error) => {
        console.error('Error fetching order details:', error);
      }
    );
  }

}
