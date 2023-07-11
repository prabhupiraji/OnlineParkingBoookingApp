import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateCostComponent } from './admin-update-cost.component';

describe('AdminUpdateCostComponent', () => {
  let component: AdminUpdateCostComponent;
  let fixture: ComponentFixture<AdminUpdateCostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUpdateCostComponent]
    });
    fixture = TestBed.createComponent(AdminUpdateCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
