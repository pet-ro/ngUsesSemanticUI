import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductBookComponent } from './admin-product-book.component';

describe('AdminProductBookComponent', () => {
  let component: AdminProductBookComponent;
  let fixture: ComponentFixture<AdminProductBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
