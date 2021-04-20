import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    const  resultado=[];   

    for(const empleado of value){
      
     if(arg =="" || arg.length < 3) return value;

      if(empleado.nombre.toLowerCase().indexOf(arg.toLowerCase()) >-1){
        resultado.push(empleado);
      };
    };

    return resultado;
  }

}
