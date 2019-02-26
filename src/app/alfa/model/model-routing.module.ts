import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
//
// Views 
import { TeamsComponent } from './view/teams/teams.component'
import { ProductListComponent} from './view/product-list/product-list.component'


const routes: Routes = [
  { path: 'teams', 
    component: TeamsComponent 
  },
  {
    path: 'designs',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelRoutingModule { }
