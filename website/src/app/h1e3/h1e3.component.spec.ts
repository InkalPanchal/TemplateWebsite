import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1e3Component } from './h1e3.component';

describe('H1e3Component', () => {
  let component: H1e3Component;
  let fixture: ComponentFixture<H1e3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1e3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H1e3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
