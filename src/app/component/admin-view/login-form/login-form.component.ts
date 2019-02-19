import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bm-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  register(  value: any ){
    console.log(value);
  }

}
