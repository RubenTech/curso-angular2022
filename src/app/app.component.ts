import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  /*,styleUrls: ['./app.component.css']*/
})
export class AppComponent {
  title = 'curso-angular2022 de Rubén Hdz';
  public componente: boolean;

  constructor(){
    this.componente = true;
  }

  cambiarComponente(valorParametro:boolean){
    this.componente = valorParametro;
  }
}
