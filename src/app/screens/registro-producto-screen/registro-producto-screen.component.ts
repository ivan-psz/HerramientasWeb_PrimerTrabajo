import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductosService } from 'src/app/services/productos.service';

declare var $: any;

@Component({
  selector: 'app-registro-producto-screen',
  templateUrl: './registro-producto-screen.component.html',
  styleUrls: ['./registro-producto-screen.component.scss']
})
export class RegistroProductoScreenComponent implements OnInit {

  public producto: any = { }
  public errors: any = { }

  constructor(
    private location: Location,
    private productosService: ProductosService
  ) { }

  public regresar(){
    this.location.back();
  }

  ngOnInit(): void {
    
    this.producto = this.productosService.esquemaProducto();
    console.log("Producto: ", this.producto);

  }

  public registrar(){

    this.errors = [];

    this.errors = this.productosService.validarProducto(this.producto);
    if(!$.isEmptyObject(this.errors)){
      return false;
    }
    else{
      alert("Registro exitoso");
    }
  }

}
