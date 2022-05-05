import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H2a1Component } from './h2a1.component';

describe('H2a1Component', () => {
  let component: H2a1Component;
  let fixture: ComponentFixture<H2a1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H2a1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H2a1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
