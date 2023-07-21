import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClaimsComponent } from './all-claims.component';

describe('AllClaimsComponent', () => {
  let component: AllClaimsComponent;
  let fixture: ComponentFixture<AllClaimsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllClaimsComponent]
    });
    fixture = TestBed.createComponent(AllClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
