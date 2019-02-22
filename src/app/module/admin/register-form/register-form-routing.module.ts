import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//


//             Admin: Product Book entries
import { RegisterFormComponent  }  from './register-form.component'
// 
const routes: Routes = [

  { path: 'register' ,
    component: RegisterFormComponent 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterFormRoutingModule { }
