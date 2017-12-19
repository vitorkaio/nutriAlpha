import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AtlasApiService } from '../../shared/services/api/atlas-api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public alimentos: any[] = [];
  public erroServidor: string = ''

  constructor(private rota: Router, private atlasAPI: AtlasApiService) { }

  ngOnInit() {

    let obs = {
      next: (next) => {
        next.forEach(element => {
          console.log(element['_id'], element['nome']);
          this.alimentos.push(element);
        });
    },
    error: (err) => {
      console.log('erro: ' + err);
      this.erroServidor = '404 - Erro no servidor!';
    },
    complete: () => {
      console.log('Done');
    }
  }

    this.atlasAPI.getPagina(1, 'nome', 1).subscribe(obs);
  }

  public logout() {
    this.rota.navigate(['auth']);
  }

}
