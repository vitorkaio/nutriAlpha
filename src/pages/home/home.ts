import { Alimento } from './../../model/alimento.model';
import { FormataDadosProvider } from './../../providers/formata-dados/formata-dados';
import { SobreAlimentoModalPage } from './../sobre-alimento-modal/sobre-alimento-modal';
import { ApiRestAlimentosProvider } from './../../providers/api-rest-alimento/api-rest-alimento';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //    lista = ({nome: entry[1], kcal: formatados[0], proteina: formatados[2], colesterol: formatados[4]});

  private alimentos: Alimento[] = [];
  private alimentosTemp: Alimento[] = [];
  private aux: Alimento[] = [];
  private start: number = 0;
  private load: any;

  private searchTerm: string = '';

  private isOn: boolean = false;

  constructor(public navCtrl: NavController, public apiAlimentos: ApiRestAlimentosProvider, public loadingCtrl: LoadingController,
    public modalCtrl: ModalController, public af: AngularFireDatabase, public format: FormataDadosProvider, ) {

    // Mostra o loading
    this.presentLoadingDefault();
    this.getFireBaseAlimentos();

  }// Fim do construtor

  // Pega todos os dados do banco de dados firebase
  getFireBaseAlimentos() {
    let ref = this.af.database.ref('/dados');
    ref.on("value", ((snapshot) => {
      let dados = snapshot.val();
      dados.forEach((entry) => {
        this.aux.push(this.format.formataEntrada(entry));
        console.log(entry[1]);
      });
      this.aux.sort(function (a, b) { return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0); });
      this.alimentos = this.aux.slice(this.start, 10);
      this.dimissLoadingDefault();
    }), function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }

  // Pega todos os alimentos do banco.
  /*getAlimentos() {
    this.apiAlimentos.getApiAlimentos()
    .then(data => {
      let dados = data;
       dados.forEach((entry)=> {
         let out: string = entry[3] + '';
         let s = out.indexOf('.');
         let kcal: string = out.substr(0, s);
         this.aux.push({nome: entry[1], kcal: kcal});
        });

        this.alimentos = this.aux.slice(this.start, 10);
        
    });
  }*/

  doInfinite(infiniteScroll: any) {
    this.start += 10;
    console.log('doInfinite, start is currently ' + this.start);

    if (this.start > this.alimentos.length) {
      this.start = 0;
      infiniteScroll.complete();
      return;
    }

    else {
      setTimeout(() => {
        this.alimentos = this.alimentos.concat(this.aux.slice(this.start, this.start + 10));
        infiniteScroll.complete();
      }, 1000);
    }

  }

  // Abre o item numa tela de modal:
  sobreAlimentoModalPage(item: Alimento) {
    let myModal = this.modalCtrl.create(SobreAlimentoModalPage, item);
    myModal.present();
  }

  // Cria um loading ao carregar os dados.
  presentLoadingDefault() {
    this.load = this.loadingCtrl.create({
      content: 'Carregando Alimentos...'
    });
    this.load.present();
  }

  dimissLoadingDefault() {
    console.log('Fechar load');
    this.load.dismiss();
  }

  // ********************************* Pesquisa elementos *********************************

  getButtonText(): string {
    return `Switch ${this.isOn ? 'Off' : 'On'}`;
  }
  setState(): void {
    this.isOn = !this.isOn;
  }

  toggleDetails() {
    this.isOn = !this.isOn;
  }

  filterItems(searchTerm) {
    return this.aux.filter((item) => {
      return item.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  ionViewDidLoad() {

    this.setFilteredItems();

  }

  ionViewWillEnter() {
    console.log('Alguém entrou');
    this.searchTerm = '';
  }

  setFilteredItems() {
    console.log('Search: ' + this.searchTerm.length);
    if (this.searchTerm.length == 0) {
      console.log('Restaura Lista');
      this.start = 0;
      this.alimentos = this.aux.slice(this.start, 10);
    }

    else {
      console.log(this.searchTerm);
      this.alimentos = this.filterItems(this.searchTerm);
    }
  }

  // ************************************ Add alguma coisa
  adicionarNovoAlimento() {
    console.log('Add item');
  }

}// Fim da classe
