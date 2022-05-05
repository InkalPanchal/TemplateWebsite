import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1e1Component } from './c1e1.component';

describe('C1e1Component', () => {
  let component: C1e1Component;
  let fixture: ComponentFixture<C1e1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1e1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1e1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
