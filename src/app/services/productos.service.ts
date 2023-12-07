import { Injectable } from '@angular/core';
import { ValidatorService } from './tools/validator.service';
import { ErrorsService } from './tools/errors.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private validatorService: ValidatorService,
    private errorService: ErrorsService
  ) { }

  public esquemaProducto(){
    return{
      'id': '',
      'nombre_producto': '',
      'precio': '',
      'departamento': ''
    }
  }

  public validarProducto(data: any){
    console.log("Validando user...", data);
    let error: any = [];

    if(!this.validatorService.required(data["id"])){
      error["id"] = this.errorService.required;
    } else if(!this.validatorService.numeric(data["id"])){
      error["id"] = this.errorService.numeric;
      alert("El formato del ID es únicamente numérico.");
    } else if(!this.validatorService.max(data["id"], 10)){
      error["id"] = this.errorService.max(10);
      alert("El valor del ID debe ser de 10 números.");
    } else if(!this.validatorService.min(data["id"], 10)){
      error["id"] = this.errorService.min(10);
      alert("El valor del ID debe ser de 10 números")
    }

    if(!this.validatorService.required(data["nombre_producto"])){
      error["nombre_producto"] = this.errorService.required;
    }else if(!this.validatorService.max(data["nombre_producto"], 20)){
      error["nombre_producto"] = this.errorService.max(20);
      alert("La longitud de caracteres del nombre es mayor. Debe ser menor a 20.");
    }else if(!this.validatorService.min(data["nombre_producto"], 3)){
      error["nombre_producto"] = this.errorService.min(3);
      alert("La longitud de caracteres del nombre es menor. Debe ser mayor a 3.");
    }

    if(!this.validatorService.required(data["precio"])){
      error["precio"] = this.errorService.required;
    }else if(!this.validatorService.numeric(data["precio"])){
      error["precio"] = this.errorService.numeric;
      alert("El formato del precio es únicamente numérico.");
    }

    if(!this.validatorService.required(data["departamento"])){
      error["departamento"] = this.errorService.required;
    }else if(!this.validatorService.max(data["departamento"], 20)){
      error["departamento"] = this.errorService.max(20);
      alert("La longitud de caracteres del departamento es mayor. Debe ser menor a 20.");
    }else if(!this.validatorService.min(data["departamento"], 3)){
      error["departamento"] = this.errorService.min(3);
      alert("La longitud de caracteres del departamento es menor. Debe ser mayor a 3.");
    }

    return error;

  }

}
