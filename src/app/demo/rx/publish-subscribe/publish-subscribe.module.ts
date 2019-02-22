import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { PublisherComponent } from './publisher/publisher.component';
import { SubscriberComponent } from './subscriber/subscriber.component';


@NgModule({
  declarations: [PublisherComponent, SubscriberComponent ],
  imports: [
    CommonModule 
  ]
})
export class PublishSubscribeModule { }
