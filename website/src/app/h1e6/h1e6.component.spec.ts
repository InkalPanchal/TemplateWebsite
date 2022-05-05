import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1e6Component } from './h1e6.component';

describe('H1e6Component', () => {
  let component: H1e6Component;
  let fixture: ComponentFixture<H1e6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1e6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H1e6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
