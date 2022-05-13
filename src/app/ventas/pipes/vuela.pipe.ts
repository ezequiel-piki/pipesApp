import { Pipe, PipeTransform } from '@angular/core';


@Pipe ({
    name : 'vuela'
   })

   export class VuelaPipe implements PipeTransform {
       transform(valor:string,vuela:boolean):string {
           return (vuela)
           ? valor= 'vuela'
           : valor= 'no vuela'
               
           }
       }
   