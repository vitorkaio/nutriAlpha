import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit() {
  }

  public logout() {
    this.rota.navigate(['auth']);
  }

}
