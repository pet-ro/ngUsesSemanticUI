import { Component, OnInit } from '@angular/core';

// support for a reactive FormBuilder
import { FormGroup, FormArray, FormBuilder, FormControl} from '@angular/forms';

// support for validator
import { Validators } from '@angular/forms';




@Component({
  selector: 'bm-reactive-register-form-by-builder',
  templateUrl: './reactive-register-form-by-builder.component.html',
  styleUrls: ['./reactive-register-form-by-builder.component.css']
})
export class ReactiveRegisterFormByBuilderComponent implements OnInit {

  registerUserForm : FormGroup;

  constructor( private formBuilder : FormBuilder ) { }

  ngOnInit() {

    this.registerUserForm = this.formBuilder.group({
      username: 'choose username',
      password: 'choose password',

      fullname: this.formBuilder.group({
        firstname: 'your firstname',
        lastname:  'your lastname'
      }),
      emailAddresses: this.formBuilder.array([
         'add one of your email adresses in the format your.id@mail-server.org',
         '',
         ''
      ])
    });

  }

  register( value: any ) {
    console.log( value )
  }
}


@Component({
  selector: 'bm-reactive-register-form',
  templateUrl: './reactive-register-form-by-builder.component.html',
  styleUrls: ['./reactive-register-form-by-builder.component.css']
})
export class ReactiveRegisterFormComponent implements OnInit {

  registerUserForm : FormGroup; 
 /* 
     new FormGroup({
       username:  new FormControl('choose a user name'),
       password:  new FormControl('choose a password'),
       fullname:  new FormGroup({
         firstname: new FormControl('Your first name'),
         lastname:  new FormControl('Your last name')
       }),
       emailAddresses: new FormArray([
        new FormControl('add one of your email addresses: user@mail-server.org'),
        new FormControl(),
        new FormControl()  
       ])
     });
  */ 

  registerUser() {
    console.log( this.registerUserForm)
  }   

  reset() {
    this.registerUserForm.reset();
  }

  constructor( private formBuilder : FormBuilder ) { }

  ngOnInit() {
    
    this.registerUserForm =
      this.formBuilder.group({
        username: '',
        password: '',
        fullname: this.formBuilder.group({
          firstname: '',
          lastname:  ''
        }),
        email: this.formBuilder.array( ['', '', ''])  
      });
     
  }

}
