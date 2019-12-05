import { Component } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre="robert";

  nombre2 = "roBerto muRIllo"

  arr = [1,2,3,4,5,6,7,8,9];

  PI = Math.PI;

  a=0.234;

  salario = 1234.5;

  heroe={
    nombre:"logan",
    clave:"wolverine",
    edad:500,
    direccion:{
      calle: "Avenidad siempre viva" ,
      casa:123
    }
  };

    valorDepromesa = new Promise( (resolve, reject) =>{ //colocar doble parentesis y Promise la "p" en mayuscula
 
       setTimeout( ()=>resolve('llego la data '),3500);

    })

    fecha = new Date();

    video = "kmvAkzO1k5M";

    activar:boolean =true;
    


}


