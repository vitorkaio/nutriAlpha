import { AuthGuardService } from './shared/services/guards/auth.guard.service';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'alimentos', loadChildren: 'app/alimentos/alimentos.module#AlimentosModule',
    canActivate: [AuthGuardService], canLoad: [AuthGuardService]},
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  // { path: '**', redirectTo: 'auth'}
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
