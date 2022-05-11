import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',

})
export class BasicosComponent {
nombreLower : string = 'ezequiel'
nombreUpper : string = 'EZEQUIEL'
nombreCompleto : string = 'EzEqUiel bEnITEZ'
  fecha : Date = new Date ();

}
