import { Component} from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';


@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'

})
export class OrdenarComponent {
 
enMayusculas : boolean = true;
ordenarPor : string = '';
heroes: Heroe[]=[
  {
    nombre:'Superman',
    vuela : true,
    color : Color.azul
  }
  ,
  {
    nombre:'Batman',
    vuela : false,
    color : Color.negro
  },
  {
    nombre:'Robin',
    vuela : false,
    color : Color.rojo
  },
  {
    nombre:'Arrow',
    vuela : false,
    color : Color.verde
  }
]  
toggleMayuscula (){
this.enMayusculas = !(this.enMayusculas)

}

cambiarOrden(value:string){
this.ordenarPor = value; 
console.log(value)
}

}
