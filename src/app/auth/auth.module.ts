import { AuthRoutingModule } from './auth.routing.module';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiModule } from 'ng2-semantic-ui';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SuiModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
