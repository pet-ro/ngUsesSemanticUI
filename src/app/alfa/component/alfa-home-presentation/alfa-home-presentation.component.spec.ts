import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfaHomePresentationComponent } from './alfa-home-presentation.component';

describe('AlfaHomePresentationComponent', () => {
  let component: AlfaHomePresentationComponent;
  let fixture: ComponentFixture<AlfaHomePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlfaHomePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlfaHomePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
