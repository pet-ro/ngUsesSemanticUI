import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
//
import { RegisterFormComponent } from './register-form.component';


@NgModule({
  declarations: [ RegisterFormComponent ],
  imports: [
    CommonModule,
    FormsModule, 
  ]
})
export class RegisterFormModule { }
