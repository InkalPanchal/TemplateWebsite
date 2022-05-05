import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1e2Component } from './h1e2.component';

describe('H1e2Component', () => {
  let component: H1e2Component;
  let fixture: ComponentFixture<H1e2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1e2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H1e2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
