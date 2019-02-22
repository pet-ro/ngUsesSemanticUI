import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//
import { LoginFormRoutingModule } from './login-form-routing.module';
//
import { LoginFormComponent } from './login-form.component'

@NgModule({
  declarations: [ LoginFormComponent ],
  imports: [
    CommonModule,
    FormsModule,
    //
    LoginFormRoutingModule
  ]
})
export class LoginFromModule { }
