import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SobreAlimentoModalPage } from './sobre-alimento-modal';

@NgModule({
  declarations: [
    SobreAlimentoModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SobreAlimentoModalPage),
  ],
  exports: [
    SobreAlimentoModalPage
  ]
})
export class SobreAlimentoModalPageModule {}
