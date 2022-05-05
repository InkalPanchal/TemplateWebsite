import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4e1Component } from './c4e1.component';

describe('C4e1Component', () => {
  let component: C4e1Component;
  let fixture: ComponentFixture<C4e1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C4e1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C4e1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
