import { SobreAlimentoModalPage } from './../pages/sobre-alimento-modal/sobre-alimento-modal';
import { ApiRestAlimentosProvider } from './../providers/api-rest-alimento/api-rest-alimento';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormataDadosProvider } from '../providers/formata-dados/formata-dados';
import { FirebaseAcessProvider } from '../providers/firebase-acess/firebase-acess';

export const firebaseConfig = {
  apiKey: "AIzaSyDeTEG9fFJ1WU3pZoQD1vi4h7FfN_iIYzU",
    authDomain: "login-94c17.firebaseapp.com",
    databaseURL: "https://login-94c17.firebaseio.com",
    projectId: "login-94c17",
    storageBucket: "login-94c17.appspot.com",
    messagingSenderId: "3402779701"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SobreAlimentoModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SobreAlimentoModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiRestAlimentosProvider,
    FormataDadosProvider,
    FirebaseAcessProvider,
  ]
})
export class AppModule {}
