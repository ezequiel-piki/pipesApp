import { Component, OnInit } from '@angular/core';

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

}
