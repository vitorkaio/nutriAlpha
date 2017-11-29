import { AuthService } from './shared/services/guards/auth.service';
import { AuthGuardService } from './shared/services/guards/auth.guard.service';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SuiModule} from 'ng2-semantic-ui';
import { BarraComponent } from './components/barra/barra.component';
//import { AuthModule } from './auth/auth.module';
//import { AlimentosModule } from './alimentos/alimentos.module';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    AppRoutingModule,
    //AlimentosModule,
    //AuthModule
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
