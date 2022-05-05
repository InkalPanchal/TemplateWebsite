import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bp1Component } from './bp1.component';

describe('Bp1Component', () => {
  let component: Bp1Component;
  let fixture: ComponentFixture<Bp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
