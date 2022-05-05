import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bp2Component } from './bp2.component';

describe('Bp2Component', () => {
  let component: Bp2Component;
  let fixture: ComponentFixture<Bp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
