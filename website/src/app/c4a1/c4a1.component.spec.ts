import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4a1Component } from './c4a1.component';

describe('C4a1Component', () => {
  let component: C4a1Component;
  let fixture: ComponentFixture<C4a1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C4a1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C4a1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
