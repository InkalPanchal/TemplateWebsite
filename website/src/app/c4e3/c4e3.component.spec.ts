import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4e3Component } from './c4e3.component';

describe('C4e3Component', () => {
  let component: C4e3Component;
  let fixture: ComponentFixture<C4e3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C4e3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C4e3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
