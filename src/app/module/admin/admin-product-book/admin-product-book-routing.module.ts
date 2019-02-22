import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//             Admin: Product Book entries
import { AdminProductBookComponent }  from './admin-product-book.component';
// 
const routes: Routes = [

  { path: 'admin-book' ,
    component: AdminProductBookComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProductBookRoutingModule { }
