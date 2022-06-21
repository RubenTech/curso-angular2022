import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent {
  public nombre_componente = 'esto es el componente de una fruta';
  public listado_frutas = 'manzana, sandia y pera';
}
