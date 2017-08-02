import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAlimentoPage } from './add-alimento';

@NgModule({
  declarations: [
    AddAlimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAlimentoPage),
  ],
})
export class AddAlimentoPageModule {}
