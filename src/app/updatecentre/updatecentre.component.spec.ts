import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecentreComponent } from './updatecentre.component';

describe('UpdatecentreComponent', () => {
  let component: UpdatecentreComponent;
  let fixture: ComponentFixture<UpdatecentreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecentreComponent]
    });
    fixture = TestBed.createComponent(UpdatecentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
