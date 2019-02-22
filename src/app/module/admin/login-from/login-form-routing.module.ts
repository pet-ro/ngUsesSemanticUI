import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//


//             Admin: Product Book entries
import { LoginFormComponent  }  from './login-form.component'
// 
const routes: Routes = [

  { path: 'login' ,
    component: LoginFormComponent 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginFormRoutingModule { }
