import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3e1Component } from './c3e1.component';

describe('C3e1Component', () => {
  let component: C3e1Component;
  let fixture: ComponentFixture<C3e1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3e1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3e1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
