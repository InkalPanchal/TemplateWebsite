import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3e2Component } from './c3e2.component';

describe('C3e2Component', () => {
  let component: C3e2Component;
  let fixture: ComponentFixture<C3e2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3e2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3e2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
