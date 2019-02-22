import { NgModule } from '@angular/core';
//

import { AdminProductBookModule } from './admin-product-book/admin-product-book.module'


import { LoginFromModule } from './login-from/login-from.module';
//
import { AdminRoutingModule} from './admin-routing.module'
//
import { AdminPageComponent} from './admin-page.component'



@NgModule({
  declarations: [ AdminPageComponent ],
  imports: [
    AdminRoutingModule,
    //
    AdminProductBookModule,
    LoginFromModule, 
  ]
})
export class AdminModule { }
