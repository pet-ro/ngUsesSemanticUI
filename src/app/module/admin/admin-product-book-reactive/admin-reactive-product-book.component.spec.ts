import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReactiveProductBookComponent } from './admin-reactive-product-book.component';

describe('AdminReactiveProductBookComponent', () => {
  let component: AdminReactiveProductBookComponent;
  let fixture: ComponentFixture<AdminReactiveProductBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReactiveProductBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReactiveProductBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
