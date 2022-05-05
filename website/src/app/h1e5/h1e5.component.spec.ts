import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1e5Component } from './h1e5.component';

describe('H1e5Component', () => {
  let component: H1e5Component;
  let fixture: ComponentFixture<H1e5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1e5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H1e5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
