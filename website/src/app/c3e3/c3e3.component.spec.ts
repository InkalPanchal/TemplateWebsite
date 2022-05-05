import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3e3Component } from './c3e3.component';

describe('C3e3Component', () => {
  let component: C3e3Component;
  let fixture: ComponentFixture<C3e3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3e3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3e3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
