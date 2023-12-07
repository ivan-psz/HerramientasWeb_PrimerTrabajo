import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var $: any; 

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})
export class RegistroScreenComponent implements OnInit {

  //Variables

  public editar: boolean = false;
  public user: any = {};

  //Para contraseñas

  public hide_1: boolean = false;
  public hide_2: boolean = false;
  public inputType_1: String = 'password';
  public inputType_2: String = 'password';

  //Para detectar errores

  public errors: any = {};

  //Funciones

  constructor(
    private location: Location, 
    private usuariosService: UsuariosService,
  ) { }

  ngOnInit(): void {
    this.user = this.usuariosService.esquemaUser();
    console.log("User: ", this.user);
    
  }

  public regresar(){
    this.location.back();
  }

  //Funciones para password

  public showPassword(){
    if(this.inputType_1 == 'password'){
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else{
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

  public showPwdConfirmar(){
    if(this.inputType_2 == 'password'){
      this.inputType_2 = 'text';
      this.hide_2 = true;
    }
    else{
      this.inputType_2 = 'password';
      this.hide_2 = false;
    }
  }

  public changeFecha(event: any){
    console.log(event);
    console.log(event.value.toISOString());
    
    this.user.fecha_nacimiento = event.value.toISOString().split("T") [0];
    console.log("Fecha: ", this.user.fecha_nacimiento);
    
  }

  public registrar(){

    this.errors = [];

    this.errors = this.usuariosService.validarUsuario(this.user);
    if(!$.isEmptyObject(this.errors)){
      //Pasa la validación
      return false;
    }
      //Valida la contraseña
    if(this.user.password == this.user.confirmar_password){
      //Funcion para registrarse
    }
    else{
      alert("Las contraseñas no coinciden.");
      this.user.password="";
      this.user.confirmar_password="";
    }
  }

  

}
