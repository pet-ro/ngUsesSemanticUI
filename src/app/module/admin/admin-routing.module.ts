import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//


//             Admin: Product Book entries
import { AdminPageComponent }  from './admin-page.component';
// 
const routes: Routes = [
  { path: 'admin', component: AdminPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
