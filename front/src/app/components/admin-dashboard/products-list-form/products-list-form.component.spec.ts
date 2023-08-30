import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListFormComponent } from './products-list-form.component';

describe('ProductsListFormComponent', () => {
  let component: ProductsListFormComponent;
  let fixture: ComponentFixture<ProductsListFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsListFormComponent]
    });
    fixture = TestBed.createComponent(ProductsListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
