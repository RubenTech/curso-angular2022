import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})
export class FrutaComponent {
  public nombre_componente = 'esto es el componente de una fruta';
  public listado_frutas = 'manzana, sandia y pera';
  private variablePrivada = "soy privada"; //Esta variable no se puede imprimir en el html

  //Declaración de tipos de datos
  public nombre: string;
  public edad: number = 30;
  public hombre: boolean = true;
  public lenguajes:Array<string> = ['angular', 'c#', 'javascript'];
  public informacionAdicional:Array<any> = ['Tigres', 1992, true];

  constructor(){//Por buena práctica las variables se inicializan en el constructor
    console.log(this.informacionAdicional);//Acceder a una variable de la clase
    this.nombre = "Rubén Hdz";
  }

  ngOnInit(){//Por buena práctica los métodos se mandan llamar en el oninit
    this.holaMundo(this.nombre);

    //Alcance de variables
    var numero:number = 1;

    if(numero === 1){
      let numero = 2;
      console.log("DENTRO DEL IF: " + numero);
    }
    console.log("FUERA DEL IF: " + numero);

  }

  holaMundo(nombre: string){
    alert('Hola mundo soy una app de ' + nombre);
  }
}
