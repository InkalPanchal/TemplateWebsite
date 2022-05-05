import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsssidebarComponent } from './csssidebar.component';

describe('CsssidebarComponent', () => {
  let component: CsssidebarComponent;
  let fixture: ComponentFixture<CsssidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsssidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsssidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
