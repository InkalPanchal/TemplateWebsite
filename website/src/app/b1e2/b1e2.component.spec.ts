import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1e2Component } from './b1e2.component';

describe('B1e2Component', () => {
  let component: B1e2Component;
  let fixture: ComponentFixture<B1e2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1e2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1e2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
