import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableEventsComponent } from './observable-events.component';

describe('ObservableEventsComponent', () => {
  let component: ObservableEventsComponent;
  let fixture: ComponentFixture<ObservableEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
