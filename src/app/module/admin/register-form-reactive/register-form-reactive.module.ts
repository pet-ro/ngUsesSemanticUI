import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//
import { ReactiveRegisterFormComponent } from './reactive-register-form.component'

@NgModule({
  declarations: [ ReactiveRegisterFormComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class RegisterFormReactiveModule { }
