import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMorningComponent } from './register-morning.component';

describe('RegisterMorningComponent', () => {
  let component: RegisterMorningComponent;
  let fixture: ComponentFixture<RegisterMorningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMorningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMorningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
