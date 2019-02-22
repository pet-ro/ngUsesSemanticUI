import { Component } from '@angular/core';

// provide support fro a reactive form
import { FormArray, FormControl, FormGroup} from '@angular/forms'

// support for validator
import { Validators } from '@angular/forms';

@Component({
  selector: 'bm-reactive-register-form',
  templateUrl: './reactive-register-form.component.html',
  styleUrls: ['./reactive-register-form.component.css']
})
export class ReactiveRegisterFormComponent {

  registerUserForm = 
     new FormGroup({
       username:  new FormControl('choose a user name', 
                    [ Validators.required ] ),
       password:  new FormControl('choose a password',
                    [ Validators.required,
                      Validators.minLength(8),
                      Validators.pattern('.*d*')] ),
       fullname:  new FormGroup({
         firstname: new FormControl(
                 'Your first name',
                 [  Validators.required ] ),
         lastname:  new FormControl(
                  'Your last name',
                  [  Validators.required ] ),
       }),
       emailAddresses: new FormArray([
        new FormControl(
               'add one of your email addresses: user@mail-server.org',
               [ Validators.email ] ),
        new FormControl( 
                '', 
               [ Validators.email ] ),
        new FormControl( 
                '',
                [ Validators.email ] ),  
       ])
     });


  registerUser() {
    console.log( this.registerUserForm)
  }   

  reset() {
    this.registerUserForm.reset();
  }

  constructor() { }

}
