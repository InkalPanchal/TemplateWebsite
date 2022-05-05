import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootsidebarComponent } from './bootsidebar.component';

describe('BootsidebarComponent', () => {
  let component: BootsidebarComponent;
  let fixture: ComponentFixture<BootsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
