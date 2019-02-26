import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelRoutingModule } from './model-routing.module';
// Model part
import { TeamsComponent } from './view/teams/teams.component';
import { TeamsProviderService } from './service/teams-provider.service';
// Model part
import { ProductListComponent } from './view/product-list/product-list.component';
import { ProductItemProviderService }  from './service/product-item-provider.service'

@NgModule({
  declarations: [
    TeamsComponent,
    ProductListComponent,
  ],
  providers: [
    TeamsProviderService,
    ProductItemProviderService,
  ], 
  imports: [
    CommonModule,
    ModelRoutingModule,
  ],
  exports: [
    TeamsComponent,
  ]
})
export class ModelModule { }
