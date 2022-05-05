import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4a2Component } from './c4a2.component';

describe('C4a2Component', () => {
  let component: C4a2Component;
  let fixture: ComponentFixture<C4a2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C4a2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C4a2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
