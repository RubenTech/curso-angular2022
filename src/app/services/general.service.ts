import { Injectable } from '@angular/core';

 @Injectable() // no lleva nada dentro

  export class GeneralService {
    public nombre_componente = '';
   
  
    metodo(componente: any){
        this.nombre_componente = componente;
        return "Llamada al servicio desde "+ this.nombre_componente
    }
  
  
  }