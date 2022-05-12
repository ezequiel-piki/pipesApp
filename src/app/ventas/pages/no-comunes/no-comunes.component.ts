import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',

})
export class NoComunesComponent {

  /* i18nSelect */

  nombre :string = 'Ezequiel '

  genero : string = 'masculino'

invitacionMapa = {
  'masculino':'invitarlo',
  'femenino' :'invitarla'
}

cambiarCliente(){
this.nombre = 'Maria'
this.genero = 'femenino'
}
 
/* i18nPlural */
clientes : string [] = ['Maria','Fernando','Javier','Jorge','Gonzalo']
clientesMapa = {
  '=0': 'no tenemos ningun cliente esperando',
  '=1': 'tenemos un cliente esperando',
  '0=2': 'tenemos dos clientes esperando',
  'other':'tenemos # clientes esperando'

}
borrarCliente(){
  return this.clientes.splice(0,1);
}


/* key value pipe */
persona = {
  nombre : 'Ezequiel',
  edad : 28,
  direccion : 'Berazategui,Argentina'
}


/* JsonPipe */

heroes = [
  {
    nombre: 'Batman',
    vuela:true
  },
  {
    nombre: 'Capitan America',
    vuela:false
  },
  {
    nombre: 'Ironman',
    vuela:true
  }
];
/* Async pipe */
miObservable = interval(5000) /* 0,1,2,3,4,5,6,7 */
valorPromesa = new Promise ((resolve,reject)=>{

  setTimeout(()=>{
    resolve ('Tenemos data de promesa');
  },3500)
})

}

