import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3a1Component } from './c3a1.component';

describe('C3a1Component', () => {
  let component: C3a1Component;
  let fixture: ComponentFixture<C3a1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3a1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3a1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
