import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesListFormComponent } from './categories-list-form.component';

describe('CategoriesListFormComponent', () => {
  let component: CategoriesListFormComponent;
  let fixture: ComponentFixture<CategoriesListFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesListFormComponent]
    });
    fixture = TestBed.createComponent(CategoriesListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
