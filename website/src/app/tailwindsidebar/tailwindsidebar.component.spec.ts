import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindsidebarComponent } from './tailwindsidebar.component';

describe('TailwindsidebarComponent', () => {
  let component: TailwindsidebarComponent;
  let fixture: ComponentFixture<TailwindsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailwindsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TailwindsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
