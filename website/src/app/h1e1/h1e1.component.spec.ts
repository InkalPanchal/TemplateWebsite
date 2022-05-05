import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1e1Component } from './h1e1.component';

describe('H1e1Component', () => {
  let component: H1e1Component;
  let fixture: ComponentFixture<H1e1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1e1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H1e1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
