import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AlimentosComponent } from './alimentos.component';
import { ListaComponent } from './lista/lista.component';
import { CestaComponent } from './cesta/cesta.component';
import { AuthGuardService } from '../shared/services/guards/auth.guard.service';

const ALIMENTOS_ROUTES: Routes = [
    { path: '', component: AlimentosComponent, children: [
      { path: 'lista', component: ListaComponent },
      { path: 'cesta', component: CestaComponent },
      { path: '', redirectTo: 'lista', pathMatch: 'full' },
    ]
  },
];

@NgModule({
    imports: [RouterModule.forChild(ALIMENTOS_ROUTES)],
    exports: [RouterModule]
})
export class AlimentosRoutingModule {

}
