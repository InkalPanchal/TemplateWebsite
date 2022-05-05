import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CresumeComponent } from './cresume.component';

describe('CresumeComponent', () => {
  let component: CresumeComponent;
  let fixture: ComponentFixture<CresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CresumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
