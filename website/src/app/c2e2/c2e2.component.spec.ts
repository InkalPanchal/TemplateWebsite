import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2e2Component } from './c2e2.component';

describe('C2e2Component', () => {
  let component: C2e2Component;
  let fixture: ComponentFixture<C2e2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2e2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C2e2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
