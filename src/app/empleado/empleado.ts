//Este es el objeto tipo empleado o bien el modelo
export class Empleado {
    /*public nombre:string;
    public edad:number;

    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad= edad;
    }*/

    //Lo anterior es igual a lo siguiente

    constructor(
        public nombre:string,
        public edad:number,
        public esHombre:boolean,
        public colorOjos:string
    ){}

  }
  