import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//
import { AdminProductBookRoutingModule } from './admin-product-book-routing.module';
//
import { AdminProductBookComponent } from './admin-product-book.component';

import { from } from 'rxjs';

@NgModule({
  declarations: [ AdminProductBookComponent ],
  imports: [
    CommonModule,
    FormsModule,
    //
    AdminProductBookRoutingModule,
  ]
})
export class AdminProductBookModule { }
