import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogOutComponent } from './admin-log-out.component';

describe('AdminLogOutComponent', () => {
  let component: AdminLogOutComponent;
  let fixture: ComponentFixture<AdminLogOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLogOutComponent]
    });
    fixture = TestBed.createComponent(AdminLogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
