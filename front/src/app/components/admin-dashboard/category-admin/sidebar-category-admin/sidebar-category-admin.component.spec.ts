import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCategoryAdminComponent } from './sidebar-category-admin.component';

describe('SidebarCategoryAdminComponent', () => {
  let component: SidebarCategoryAdminComponent;
  let fixture: ComponentFixture<SidebarCategoryAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarCategoryAdminComponent]
    });
    fixture = TestBed.createComponent(SidebarCategoryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
