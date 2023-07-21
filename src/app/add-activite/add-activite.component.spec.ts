import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActiviteComponent } from './add-activite.component';

describe('AddActiviteComponent', () => {
  let component: AddActiviteComponent;
  let fixture: ComponentFixture<AddActiviteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddActiviteComponent]
    });
    fixture = TestBed.createComponent(AddActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
