import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }  from '@angular/forms';
//
import { AdminReactiveProductBookComponent } from './admin-reactive-product-book.component'

@NgModule({
  declarations: [ AdminReactiveProductBookComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class AdminProductBookReactiveModule { }
