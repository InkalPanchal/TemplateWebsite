import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H2e1Component } from './h2e1.component';

describe('H2e1Component', () => {
  let component: H2e1Component;
  let fixture: ComponentFixture<H2e1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H2e1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H2e1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
