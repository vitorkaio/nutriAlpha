import { AlimentosRoutingModule } from './alimentos.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlimentosComponent } from './alimentos.component';
import { CestaComponent } from './cesta/cesta.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule,
    AlimentosRoutingModule
  ],
  declarations: [AlimentosComponent, CestaComponent, ListaComponent]
})
export class AlimentosModule { }
