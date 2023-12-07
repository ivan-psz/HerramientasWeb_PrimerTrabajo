import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-login-screen',
  templateUrl: './nuevo-login-screen.component.html',
  styleUrls: ['./nuevo-login-screen.component.scss']
})
export class NuevoLoginScreenComponent implements OnInit {

  public type: String = "password";
  public username: String = "";
  public password: String = "";
  public errors: any = {};

  constructor(){ }


  ngOnInit(): void{ }

  public login(){
    this.errors = {}
    if(this.username !== ''){
      this.errors.username = "Campo requerido";
    }
    if(this.password !== ''){
      this.errors.password = "Campo requerido";
    }
  }

}

