import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BresumeComponent } from './bresume.component';

describe('BresumeComponent', () => {
  let component: BresumeComponent;
  let fixture: ComponentFixture<BresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BresumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
