import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Alimento } from './../../model/alimento.model';


/*
  Generated class for the FirebaseAcessProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FirebaseAcessProvider {

  private aux: Alimento[] = [];
  private dados: any;

  constructor(public af: AngularFireDatabase) {
    console.log('Hello FirebaseAcessProvider Provider');
  }

  public getAllAlimentos() {

    let ref = this.af.database.ref('/dados');
    return new Promise(resolve => {
      ref.on("value", ((snapshot) => {
        this.dados = snapshot.val();
        this.dados.forEach((entry) => {
          this.aux.push(entry);
        });
        resolve(this.aux);
      }));
    });
  }

}// Fim da classe
