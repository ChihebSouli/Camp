import { MapService } from './../services/map.service';
import { LivreurService } from './../services/livreur.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
  export class DeliveriesComponent implements OnInit {
    deliveries: any[] = []; 
  authUser: any;
  
    constructor(private router: Router, private MapService: MapService, private LivreurService: LivreurService) {}
    
  showOnMap(address: string): void {
    // Set the selected address in the map service
    this.MapService.setSelectedAddress(address);

    // Navigate to the map component
    this.router.navigate(['/map']);
  }
  
    ngOnInit(): void {
      const authUserJson = sessionStorage.getItem('user');
      this.authUser = authUserJson ? JSON.parse(authUserJson) : null;
      this.fetchData();
    }
  
    fetchData(): void {
      this.LivreurService.getAssignedDeliveries(this.authUser.id).subscribe(
        (data: any[]) => {
          this.deliveries = data;
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
    StateDelivered(assignmentId: number): void {
      this.LivreurService.StateDelivered(assignmentId).subscribe(
        (response) => {
          console.log('Reservation delivered successfully.');
          this.fetchData(); 
        },
        (error) => {
          console.error('Failed to deliver reservation:', error);
        }
      );
    }
  
    StateCanceled(assignmentId: number): void {
      this.LivreurService.StateCanceled(assignmentId).subscribe(
        (response) => {
          console.log('Reservation cancelled successfully.');
          this.fetchData(); 
        },
        (error) => {
          console.error('Failed to cancel reservation:', error);
        }
      );
    }
}
