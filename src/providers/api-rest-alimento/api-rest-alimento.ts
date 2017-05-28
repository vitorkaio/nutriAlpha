import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the ApiRestAlimentoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiRestAlimentosProvider {

  private apiUrl: string = 'http://localhost:8989/api';
  private data: any;

  constructor(public http: Http) {
  }

  getApiAlimentos() {
  if (this.data) {
    return Promise.resolve(this.data);
  }

  return new Promise(resolve => {
    /*hheaders.append('Accept', 'application/json');
        hheaders.append('Content-Type', 'application/json');
        hheaders.append('Access-Control-Allow-Origin', '*');
        hheaders.append('Access-Control-Allow-Credentials', 'true');
        hheaders.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
        hheaders.append("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token");*/
    this.http.get(this.apiUrl)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
  });
}

}// Fim da classe