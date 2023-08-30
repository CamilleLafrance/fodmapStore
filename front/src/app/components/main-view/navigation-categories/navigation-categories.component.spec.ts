import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationCategoriesComponent } from './navigation-categories.component';

describe('NavigationCategoriesComponent', () => {
  let component: NavigationCategoriesComponent;
  let fixture: ComponentFixture<NavigationCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationCategoriesComponent]
    });
    fixture = TestBed.createComponent(NavigationCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
