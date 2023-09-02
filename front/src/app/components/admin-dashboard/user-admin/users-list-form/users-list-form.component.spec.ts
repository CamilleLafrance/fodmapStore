import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListFormComponent } from './users-list-form.component';

describe('UsersListFormComponent', () => {
  let component: UsersListFormComponent;
  let fixture: ComponentFixture<UsersListFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListFormComponent]
    });
    fixture = TestBed.createComponent(UsersListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
