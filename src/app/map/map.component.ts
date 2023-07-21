// map.component.ts
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '../services/map.service';

// Declare the missing 'language' property in RoutingControlOptions


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  map: L.Map | null = null;
  selectedAddress: string | null = null;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.initMap();

    this.mapService.selectedAddress$.subscribe((address) => {
      this.selectedAddress = address;
      this.showAddressOnMap(address);
    });
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  initMap(): void {
    this.map = L.map(this.mapContainer.nativeElement).setView([0, 0], 13); // Set the initial map center and zoom level

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map!);
  }

  showAddressOnMap(address: string | null): void {
    if (!this.map || !address) return;

    const apiUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          const location = L.latLng(lat, lon);

          // Add a marker for the selected address with a popup
          L.marker(location).addTo(this.map!).bindPopup(address).openPopup();

          // Center the map on the selected address
          this.map!.setView(location, 13);
        }
      })
      .catch((error) => {
        console.error('Error fetching address coordinates:', error);
      });
  }

  showMyLocation(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const location = L.latLng(lat, lon);

          // Center the map on your location
          this.map!.setView(location, 13);

          // Add a marker for your location
          L.marker(location).addTo(this.map!).bindPopup('Your Location').openPopup();
        },
        (error) => {
          console.error('Error fetching geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation not available.');
    }
  }
}
