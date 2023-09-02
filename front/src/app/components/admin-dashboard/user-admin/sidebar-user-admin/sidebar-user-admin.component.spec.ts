import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarUserAdminComponent } from './sidebar-user-admin.component';

describe('SidebarUserAdminComponent', () => {
  let component: SidebarUserAdminComponent;
  let fixture: ComponentFixture<SidebarUserAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarUserAdminComponent]
    });
    fixture = TestBed.createComponent(SidebarUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
