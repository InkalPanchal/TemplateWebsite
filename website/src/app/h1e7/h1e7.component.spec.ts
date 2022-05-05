import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1e7Component } from './h1e7.component';

describe('H1e7Component', () => {
  let component: H1e7Component;
  let fixture: ComponentFixture<H1e7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1e7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H1e7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
