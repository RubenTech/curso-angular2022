import { Component } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers : [GeneralService]
  /*,styleUrls: ['./fruta.component.css']*/
})
export class HomeComponent {
  public nombre_componente = 'Esto es el componente de inicio';

  constructor(
    public _generalService : GeneralService
  ){
   
  }

  ngOnInit(){
    console.log(this._generalService.metodo("Home"));
  }
}
