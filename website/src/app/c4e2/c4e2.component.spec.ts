import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4e2Component } from './c4e2.component';

describe('C4e2Component', () => {
  let component: C4e2Component;
  let fixture: ComponentFixture<C4e2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C4e2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C4e2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
