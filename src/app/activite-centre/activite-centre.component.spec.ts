import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteCentreComponent } from './activite-centre.component';

describe('ActiviteCentreComponent', () => {
  let component: ActiviteCentreComponent;
  let fixture: ComponentFixture<ActiviteCentreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiviteCentreComponent]
    });
    fixture = TestBed.createComponent(ActiviteCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
