import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlsidebarComponent } from './htmlsidebar.component';

describe('HtmlsidebarComponent', () => {
  let component: HtmlsidebarComponent;
  let fixture: ComponentFixture<HtmlsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
