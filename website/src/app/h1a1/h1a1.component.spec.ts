import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1a1Component } from './h1a1.component';

describe('H1a1Component', () => {
  let component: H1a1Component;
  let fixture: ComponentFixture<H1a1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1a1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H1a1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
