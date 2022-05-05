import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2e1Component } from './c2e1.component';

describe('C2e1Component', () => {
  let component: C2e1Component;
  let fixture: ComponentFixture<C2e1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2e1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C2e1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
