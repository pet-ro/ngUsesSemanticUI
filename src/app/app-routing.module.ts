import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
//       Product Page related
import { ProductListComponent } from './component/product-view/product-list/product-list.component';
import { ProductDetailsComponent } from './component/product-view/product-details/product-details.component'; 

//       Admin related
import { AdminPageComponent } from './component/admin-page/admin-page.component'
//             Admin: user login and registration        
import { LoginFormComponent } from './component/admin-view/login-form/login-form.component'
import { RegisterFormComponent } from './component/admin-view/register-form/register-form.component'
//             Admin: Product Book entries
import { AdminProductBookComponent}  from './component/admin-view/admin-product-book/admin-product-book.component';
import { from } from 'rxjs';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full'},
   { path: 'home', component: HomeComponent},

   // view Products via ProductPage
   // provide a listing and a detail view
   { path: 'product-page', redirectTo: 'product', pathMatch: 'full' },
   { path: 'product',      component: ProductListComponent},
   { path: 'product/:key', component: ProductDetailsComponent},

   // view  AdminPage
   { path: 'admin', component: AdminPageComponent, pathMatch: 'full' },
   //       The menu on AdminPage gives access to
   { path: 'login', component: AdminProductBookComponent },
   { path: 'register', component: AdminProductBookComponent },
   { path: 'admin-product-book', component: AdminProductBookComponent },
];

@NgModule({
  imports:   [ RouterModule.forRoot(routes) ],
  exports:   [ RouterModule ],
  providers: [ ]
})
export class AppRoutingModule { }
