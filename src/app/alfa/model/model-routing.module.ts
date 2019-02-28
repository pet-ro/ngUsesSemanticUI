import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
//
// Views 
import { TeamsComponent } from './view/teams/teams.component';
import { ProductListComponent} from './view/products/product-list/product-list.component';
import { ProductDetailsComponent } from './view/products/product-details/product-details.component'
import { ServiceListComponent } from './view/services/service-list/service-list.component';
import { ServiceDetailsComponent } from './view/services/service-details/service-details.component';

const routes: Routes = [
  { 
    path: 'teams', 
    component: TeamsComponent 
  },
  {
    path: 'designs',
    component: ProductListComponent
  },
  {
    path: 'designs/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'services',
    component: ServiceListComponent
  },
  {
    path: 'services/:id',
    component: ServiceDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelRoutingModule { }
