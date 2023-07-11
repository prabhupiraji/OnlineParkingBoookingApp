import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCostperhrComponent } from './user-costperhr.component';

describe('UserCostperhrComponent', () => {
  let component: UserCostperhrComponent;
  let fixture: ComponentFixture<UserCostperhrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCostperhrComponent]
    });
    fixture = TestBed.createComponent(UserCostperhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
