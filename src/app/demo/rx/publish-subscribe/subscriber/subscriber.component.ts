import { Component, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { PublisherComponent } from '../publisher/publisher.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bm-subscriber',
  template: '<bm-publisher></bm-publisher>'
})
export class SubscriberComponent
 implements AfterViewInit, OnDestroy {

  constructor() { }

  // Get access to the properties of the component
  // embedded in the template: Use decorator @ViewChild
  @ViewChild(PublisherComponent) publisherComponent : PublisherComponent;

  subscriptionToNumberEvent : Subscription;
 

  ngAfterViewInit() {
    this.subscriptionToNumberEvent = this.publisherComponent
        .numberEventPublisher
        .subscribe( 
           numberData => console.log( `subscriber publishes numberEvent ${numberData}` ));        
  }

  ngOnDestroy() {
    this.subscriptionToNumberEvent.unsubscribe();
  }

}
