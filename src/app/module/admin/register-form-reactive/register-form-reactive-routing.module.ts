import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//


//             Admin: Product Book entries
import { ReactiveRegisterFormComponent  }  from './reactive-register-form.component'
// 
const routes: Routes = [

  { path: 'register-reactive' ,
    component: ReactiveRegisterFormComponent 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterFormReactiveRoutingModule  { }
