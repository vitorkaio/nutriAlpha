import { CestaAlimentoPage } from './../pages/cesta-alimento/cesta-alimento';
import { InfoAlimentoPage } from './../pages/info-alimento/info-alimento';
import { AddAlimentoPage } from './../pages/add-alimento/add-alimento';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AcessAlimentosProvider } from '../providers/acess-alimentos/acess-alimentos';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    AddAlimentoPage,
    InfoAlimentoPage,
    CestaAlimentoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    AddAlimentoPage,
    InfoAlimentoPage,
    CestaAlimentoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AcessAlimentosProvider,
  ]
})
export class AppModule {}
