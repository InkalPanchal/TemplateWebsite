import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1a2Component } from './b1a2.component';

describe('B1a2Component', () => {
  let component: B1a2Component;
  let fixture: ComponentFixture<B1a2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1a2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1a2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
