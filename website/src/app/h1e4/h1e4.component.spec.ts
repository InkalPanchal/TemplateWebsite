import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1e4Component } from './h1e4.component';

describe('H1e4Component', () => {
  let component: H1e4Component;
  let fixture: ComponentFixture<H1e4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1e4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H1e4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
