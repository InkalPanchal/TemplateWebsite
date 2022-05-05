import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1e8Component } from './h1e8.component';

describe('H1e8Component', () => {
  let component: H1e8Component;
  let fixture: ComponentFixture<H1e8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1e8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H1e8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
