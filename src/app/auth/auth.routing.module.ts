import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const AUTH_ROUTES: Routes = [
    { path: '', component: AuthComponent },
];

@NgModule({
    imports: [RouterModule.forChild(AUTH_ROUTES)],
    exports: [RouterModule]
})
export class AuthRoutingModule {

}
