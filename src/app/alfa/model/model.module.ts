import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelRoutingModule } from './model-routing.module';
// Model part
import { TeamsComponent } from './view/teams/teams.component';
import { TeamsProviderService } from './service/teams-provider.service';
// Model part
import { ProductListComponent } from './view/products/product-list/product-list.component';
import { ProductItemProviderService }  from './service/product-item-provider.service';
// import { ProductItemComponent } from './view/products/product-item/product-item.component';
// Model part
import { ServiceListComponent } from './view/services/service-list/service-list.component';
import { ServiceItemProviderService } from "./service/service-item-provider.service";
import { ServiceDetailsComponent } from './view/services/service-details/service-details.component';
import { ProductItemComponent } from './view/products/product-item/product-item.component';
import { ProductDetailsComponent } from './view/products/product-details/product-details.component';


@NgModule({
  declarations: [
    TeamsComponent,
    ProductListComponent,
//    ProductItemComponent,
    ServiceListComponent,
ServiceDetailsComponent,
ProductItemComponent,
ProductDetailsComponent,

  ],
  providers: [
    TeamsProviderService,
    ProductItemProviderService,
    ServiceItemProviderService,
  ], 
  imports: [
    CommonModule,
    ModelRoutingModule,
  ],
  exports: [
    TeamsComponent,
  //  ProductItemComponent,
    ProductListComponent,
    ServiceListComponent,
  ]
})
export class ModelModule { }
