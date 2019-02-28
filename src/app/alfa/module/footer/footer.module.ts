import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { ImpressumComponent } from './impressum/impressum.component';
import { BootstrapInfoComponent } from './bootstrap-info/bootstrap-info.component'; 
import { from } from 'rxjs';

@NgModule({
  declarations: [ImpressumComponent, BootstrapInfoComponent ],
  imports: [
    CommonModule,
    FooterRoutingModule
  ], 
  exports: [
    ImpressumComponent,
    BootstrapInfoComponent,
  ]
})
export class FooterModule { }
