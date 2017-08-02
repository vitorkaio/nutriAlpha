import { Alimento } from './../../model/Alimento.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AcessAlimentosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AcessAlimentosProvider {

    private dados: any;

    constructor(public http: Http) {
    }

    public getAll() {
        return new Promise(resolve => {
            this.http.get('assets/data/alimentos.json').map(resp =>
            resp.json()).subscribe(data => {
                resolve(data);
            });
        });
    }

    public formataEntrada(entry: any[]) {

        // = {} cria uma instância do objeto.
        let alimento: Alimento = {};

        let formatados: string[] = [];

        for (let contador = 2; contador <= entry.length; contador++) {
            let out: string = entry[contador] + '';
            let s = out.indexOf('.');
            if (s == -1) {
                formatados.push(entry[contador])
                continue;
            }
            else {
                let d = out.substr(0, s) + out.substr(s, 3);
                formatados.push(d);
            }
        }

        alimento.nome = entry[1];

        alimento.umidade = formatados[0];
        alimento.kcal = formatados[1];
        alimento.kj = formatados[2];
        alimento.proteina = formatados[3];
        alimento.lipideos = formatados[4];

        alimento.colesterol = formatados[5];
        alimento.carboidrato = formatados[6];
        alimento.fibra = formatados[7];
        alimento.cinzas = formatados[8];
        alimento.calcio = formatados[9];

        alimento.magnesio = formatados[10];
        alimento.numero = formatados[11];
        alimento.manganes = formatados[12];
        alimento.fosforo = formatados[13];
        alimento.ferro = formatados[14];

        alimento.sodio = formatados[15];
        alimento.potassio = formatados[16];
        alimento.cobre = formatados[17];
        alimento.zinco = formatados[18];
        alimento.retinol = formatados[19];

        alimento.re = formatados[20];
        alimento.rae = formatados[21];
        alimento.tiamina = formatados[22];
        alimento.riboflavina = formatados[23];
        alimento.piridoxina = formatados[24];

        alimento.niacina = formatados[25];
        alimento.vitaminac = formatados[26];

        return alimento;

    }

}// Fim da classe AcessAlimentosProvider
