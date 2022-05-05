import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1e2Component } from './c1e2.component';

describe('C1e2Component', () => {
  let component: C1e2Component;
  let fixture: ComponentFixture<C1e2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1e2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1e2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
