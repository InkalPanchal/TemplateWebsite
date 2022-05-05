import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1e1Component } from './b1e1.component';

describe('B1e1Component', () => {
  let component: B1e1Component;
  let fixture: ComponentFixture<B1e1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1e1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1e1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
