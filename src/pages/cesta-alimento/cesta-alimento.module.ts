import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CestaAlimentoPage } from './cesta-alimento';

@NgModule({
  declarations: [
    CestaAlimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(CestaAlimentoPage),
  ],
})
export class CestaAlimentoPageModule {}
