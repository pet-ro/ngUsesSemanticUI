import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//


//             Admin: Product Book entries
import { AdminReactiveProductBookComponent }  from './admin-reactive-product-book.component';
// 
const routes: Routes = [

  { path: 'admin-book-reactive' ,
    component: AdminReactiveProductBookComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProductBookRoutingModule { }
