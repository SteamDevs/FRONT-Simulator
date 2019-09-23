import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAfternoonComponent } from './register-afternoon.component';

describe('RegisterAfternoonComponent', () => {
  let component: RegisterAfternoonComponent;
  let fixture: ComponentFixture<RegisterAfternoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAfternoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAfternoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
