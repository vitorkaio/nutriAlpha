import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
@Injectable()
export class AtlasApiService {

  private urlAlimento: string = 'http://localhost:8989/alimento/' 
  private urlPag: string = 'http://localhost:8989/alimentos'

  constructor(private http: HttpClient) { }

  // Retorna uma lista alimentos que começam com a string passada.
  public getAlimento(nome: string) {
    return this.http.get(this.urlAlimento + nome);
  }

  // Retorna uma página.
  public getPagina(pag: number, campo: string, sort: number) {
    // Setup log namespace query parameter
    let params = new HttpParams();
    params = params.append('pag', pag.toString());
    params = params.append('campo', campo);
    params = params.append('sort', sort.toString());

    return this.http.get(this.urlPag, {params: params} );
  }

}// Fim do serviço.
