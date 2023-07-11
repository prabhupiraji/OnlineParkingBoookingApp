import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookParkingComponent } from './user-book-parking.component';

describe('UserBookParkingComponent', () => {
  let component: UserBookParkingComponent;
  let fixture: ComponentFixture<UserBookParkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBookParkingComponent]
    });
    fixture = TestBed.createComponent(UserBookParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
