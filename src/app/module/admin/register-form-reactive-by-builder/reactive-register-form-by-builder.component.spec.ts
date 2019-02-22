import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveRegisterFormByBuilderComponent } from './reactive-register-form-by-builder.component';

describe('ReactiveRegisterFormByBuilderComponent', () => {
  let component: ReactiveRegisterFormByBuilderComponent;
  let fixture: ComponentFixture<ReactiveRegisterFormByBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveRegisterFormByBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveRegisterFormByBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
