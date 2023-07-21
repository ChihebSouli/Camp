import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DeliveryService } from '../services/delivery.service';

@Component({
  selector: 'app-mydeliveries',
  templateUrl: './mydeliveries.component.html',
  styleUrls: ['./mydeliveries.component.css']
})
export class MydeliveriesComponent implements OnInit {
  
  deliveries: any[] = [];  
  constructor(private deliveryService: DeliveryService) {}

  ngOnInit() {
    this.loadDeliveries();
  }

  loadDeliveries() {
    this.deliveryService.getAllOrders().subscribe(
      (data) => {
        this.deliveries = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  onSubmit() {

    this.deliveryService.assignOrdersToLivreur().subscribe(
      response => {
        // Gérer la réponse du serveur si nécessaire
        console.log('Deliveries assigned', response);
        
      },
      error => {
        // Gérer les erreurs s'il y en a
        console.error('Error creating post:', error);
      }
    );
  }

}
