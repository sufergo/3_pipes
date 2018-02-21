import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Susana";
  nombre2 = "sUsana ferNanDez gomez";

  array = [1,2,3,4,5,6,7,8,9,0];

  PI = Math.PI;

  myNumber = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "primera",
      numero: 2
    }
  };

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Llego el dato!!'), 3500);
  });

  fecha = new Date();

  video = "mOeSfOJrUIk";

  activar:boolean = true;
}
