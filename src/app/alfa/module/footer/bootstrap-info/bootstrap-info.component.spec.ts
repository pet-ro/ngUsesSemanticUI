import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapInfoComponent } from './bootstrap-info.component';

describe('BootstrapInfoComponent', () => {
  let component: BootstrapInfoComponent;
  let fixture: ComponentFixture<BootstrapInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
