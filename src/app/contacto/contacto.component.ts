import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  providers : [GeneralService]

  /*,styleUrls: ['./fruta.component.css']*/
})
export class ContactoComponent {
  public nombre_componente = 'Esto es el componente de contacto';
  public parametroUrl:any;

  constructor(
    public _router : Router,
    public _activated : ActivatedRoute,
    public _generalService : GeneralService
    ){}


  ngOnInit(){
        this._activated.params.forEach((params: Params)=>{
          this.parametroUrl = params['parametro'];
        });

        console.log(this._generalService.metodo("Contacto"));
  }

  redirigir1(){
        this._router.navigate(['/inicio']);
  }

  redirigir2(){
    this._router.navigate(['/contacto', 'Rubén Hdz']);
  }

}
