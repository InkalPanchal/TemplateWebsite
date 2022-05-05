import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1a1Component } from './c1a1.component';

describe('C1a1Component', () => {
  let component: C1a1Component;
  let fixture: ComponentFixture<C1a1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1a1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1a1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
