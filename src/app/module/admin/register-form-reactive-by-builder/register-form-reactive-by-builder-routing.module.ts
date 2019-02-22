import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//


//             Admin: Product Book entries
import { ReactiveRegisterFormByBuilderComponent  }  from './reactive-register-form-by-builder.component'
// 
const routes: Routes = [

  { path: 'register-reactive-beta' ,
    component: ReactiveRegisterFormByBuilderComponent

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterFormReactiveByBuilderRoutingModule { }
