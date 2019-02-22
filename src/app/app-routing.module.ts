import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
//       Product Page related
import { ProductListComponent } from './component/product-view/product-list/product-list.component';
import { ProductDetailsComponent } from './component/product-view/product-details/product-details.component'; 

//       Admin related
import { AdminPageComponent } from './module/admin/admin-page.component';
//             Admin: user login and registration        

import { from } from 'rxjs';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full'},
   { path: 'home', component: HomeComponent},

   // view Products via ProductPage
   // provide a listing and a detail view
   { path: 'product-page', redirectTo: 'product', pathMatch: 'full' },
   { path: 'product',      component: ProductListComponent},
   { path: 'product/:key', component: ProductDetailsComponent},
];

@NgModule({
  imports:   [ RouterModule.forRoot(routes) ],
  exports:   [ RouterModule ],
  providers: [ ]
})
export class AppRoutingModule { }
