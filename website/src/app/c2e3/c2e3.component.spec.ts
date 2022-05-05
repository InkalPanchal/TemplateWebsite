import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2e3Component } from './c2e3.component';

describe('C2e3Component', () => {
  let component: C2e3Component;
  let fixture: ComponentFixture<C2e3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2e3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C2e3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
