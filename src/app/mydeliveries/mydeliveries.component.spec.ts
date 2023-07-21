import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydeliveriesComponent } from './mydeliveries.component';

describe('MydeliveriesComponent', () => {
  let component: MydeliveriesComponent;
  let fixture: ComponentFixture<MydeliveriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MydeliveriesComponent]
    });
    fixture = TestBed.createComponent(MydeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
