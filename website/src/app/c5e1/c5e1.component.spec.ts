import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C5e1Component } from './c5e1.component';

describe('C5e1Component', () => {
  let component: C5e1Component;
  let fixture: ComponentFixture<C5e1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C5e1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C5e1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
