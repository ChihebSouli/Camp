import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcentreComponent } from './addcentre.component';

describe('AddcentreComponent', () => {
  let component: AddcentreComponent;
  let fixture: ComponentFixture<AddcentreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcentreComponent]
    });
    fixture = TestBed.createComponent(AddcentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
