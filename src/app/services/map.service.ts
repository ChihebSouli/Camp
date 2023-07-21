import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private selectedAddressSubject = new BehaviorSubject<string>('');
  selectedAddress$ = this.selectedAddressSubject.asObservable();

  setSelectedAddress(address: string): void {
    this.selectedAddressSubject.next(address);
  }
}