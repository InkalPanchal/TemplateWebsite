import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2a1Component } from './c2a1.component';

describe('C2a1Component', () => {
  let component: C2a1Component;
  let fixture: ComponentFixture<C2a1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2a1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C2a1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
