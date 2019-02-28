import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFormComponent } from './product-form/product-form.component';
import { ServiceFormComponent } from './service-form/service-form.component';

const routes: Routes = [
    {
      path: 'admin-designs',
      component: ProductFormComponent
    },
    {
      path: 'admin-services',
      component: ServiceFormComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminFormsRoutingModule { }
