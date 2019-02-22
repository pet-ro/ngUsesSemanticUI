import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//
import { ReactiveRegisterFormByBuilderComponent } from './reactive-register-form-by-builder.component'

@NgModule({
  declarations: [ ReactiveRegisterFormByBuilderComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class RegisterFormReactiveByBuilderModule { }
