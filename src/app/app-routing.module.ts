import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { ProductListComponent } from './component/product-view/product-list/product-list.component';
import { ProductDetailsComponent } from './component/product-view/product-details/product-details.component'; 

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full'},
   { path: 'home', component: HomeComponent},
   { path: 'products', component: ProductListComponent},
   { path: 'product/:key', component: ProductDetailsComponent}
];

@NgModule({
  imports:   [ RouterModule.forRoot(routes) ],
  exports:   [ RouterModule ],
  providers: [ ]
})
export class AppRoutingModule { }
