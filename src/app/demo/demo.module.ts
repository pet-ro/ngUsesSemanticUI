import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { PublishSubscribeModule } from './rx/publish-subscribe/publish-subscribe.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    PublishSubscribeModule,
  ]
})
export class DemoModule { }
