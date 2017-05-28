import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the FormataDadosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FormataDadosProvider {

  constructor() {

  }

  formataEntrada(entry: any[]) {
    let lista: any;

    let formatados: string[] = [];

    for (let contador = 3; contador <= entry.length; contador++) {

      let out: string = entry[contador] + '';
      let s = out.indexOf('.');
      if (s == -1) {
        formatados.push(entry[contador])
        continue;
      }
      else {
        let d = out.substr(0, s);
        formatados.push(d);
      }
    }

    /*let out: string = entry[3] + '';
    let s = out.indexOf('.');*/

    lista = ({ nome: entry[1], kcal: formatados[0], proteina: formatados[2], colesterol: formatados[4] });
    return lista;

  }

}
