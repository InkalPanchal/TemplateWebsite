import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1a1Component } from './b1a1.component';

describe('B1a1Component', () => {
  let component: B1a1Component;
  let fixture: ComponentFixture<B1a1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1a1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1a1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
