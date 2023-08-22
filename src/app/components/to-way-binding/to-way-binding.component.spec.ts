import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToWayBindingComponent } from './to-way-binding.component';

describe('ToWayBindingComponent', () => {
  let component: ToWayBindingComponent;
  let fixture: ComponentFixture<ToWayBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToWayBindingComponent]
    });
    fixture = TestBed.createComponent(ToWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
