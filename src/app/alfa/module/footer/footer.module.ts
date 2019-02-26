import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
  declarations: [ImpressumComponent],
  imports: [
    CommonModule,
    FooterRoutingModule
  ], 
  exports: [
    ImpressumComponent
  ]
})
export class FooterModule { }
