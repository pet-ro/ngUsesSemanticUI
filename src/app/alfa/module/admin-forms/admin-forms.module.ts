import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AdminFormsRoutingModule } from './admin-forms-routing.module';

import { ProductFormComponent } from './product-form/product-form.component';
import { ServiceFormComponent } from './service-form/service-form.component';
@NgModule({
  declarations: [
ProductFormComponent,
ServiceFormComponent,
  ],
  imports: [
    // ng modules
    CommonModule,
    FormsModule,
    // project modules
    AdminFormsRoutingModule
  ],
  exports: [
    ProductFormComponent,
    ServiceFormComponent,
  ]
})
export class AdminFormsModule { }
