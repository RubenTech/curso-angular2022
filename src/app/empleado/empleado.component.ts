import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html'
  /*,styleUrls: ['./fruta.component.css']*/
})
export class EmpleadoComponent {
  public nombre_componente = 'Esto es el componente de empleado';

    public emp: Empleado;
    public listadoEmpleados: Array<Empleado>;
    public value:number;

  constructor(){
        this.emp = new Empleado("Raul Perez", 22, true, 'black');
        this.listadoEmpleados = [
            new Empleado("Juan", 19, true, 'blue'),
            new Empleado("Panchita", 32, false, 'black')
        ] ;
        this.value = 0;
  }

  ngOnInit(){
      console.log(this.emp);
      console.log(this.listadoEmpleados);
  }
}
