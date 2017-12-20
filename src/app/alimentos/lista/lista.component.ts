import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AtlasApiService } from '../../shared/services/api/atlas-api.service';
import { PagerService } from './services/pager.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public alimentos: any[] = [];
  public erroServidor: string = ''

  // pager object
  public pager: any = {};

  private pagina: number = -1;
  
  // paged items
  public pagedItems: any[];

  constructor(private rota: Router, private atlasAPI: AtlasApiService, private pagerService: PagerService) { }

  ngOnInit() {
    // initialize to page 1
    this.setPage(1);
  }

  // Retorna as funções que serão executadas no obs.
  private getObsFunctions() {
    let obs = {
        next: (next) => {
          this.alimentos = [];
          next.forEach(element => {
          //console.log(element['_id'], element['nome']);
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
    return obs;
  }

  // Faz requisição no servidor.
  private getItens() {
    this.atlasAPI.getPagina(this.pagina, 'nome', 1).subscribe(this.getObsFunctions());
  }

  // Set a próxima página.
  public setPage(page: number) {
    console.log(page);
    if (page < 1 || page > this.pager.totalPages || page === this.pagina) {
        return;
    }

    this.pagina = page;
    this.getItens();

    //window.scrollTo(0, 0);

    // get pager object from service
    this.pager = this.pagerService.getPager(597, page);

    // get current page of items
    this.pagedItems = this.alimentos.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

 // Faz o logout do sistema.
 public logout() {
  this.rota.navigate(['auth']);
}

}// Fim do componente
