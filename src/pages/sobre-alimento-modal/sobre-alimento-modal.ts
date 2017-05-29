import { Alimento } from './../../model/alimento.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SobreAlimentoModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sobre-alimento-modal',
  templateUrl: 'sobre-alimento-modal.html',
})
export class SobreAlimentoModalPage {

  private alimento: Alimento = {};

  //private cood: {lat: number, lon: number} = {lat: 0, lon: 2};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    let teste = this.navParams.data.nome;
    console.log('Modal: ' + teste);

    this.alimento.nome = this.navParams.data.nome;

    this.alimento.umidade = this.navParams.data.umidade
    this.alimento.kcal = this.navParams.data.kcal;
    this.alimento.kj = this.navParams.data.kj;
    this.alimento.proteina = this.navParams.data.proteina;
    this.alimento.lipideos = this.navParams.data.lipideos;

    this.alimento.colesterol = this.navParams.data.colesterol;
    this.alimento.carboidrato = this.navParams.data.carboidrato;
    this.alimento.fibra = this.navParams.data.fibra;
    this.alimento.cinzas = this.navParams.data.cinzas;
    this.alimento.calcio = this.navParams.data.calcio;

    this.alimento.magnesio = this.navParams.data.magnesio;
    this.alimento.numero = this.navParams.data.numero;
    this.alimento.manganes = this.navParams.data.manganes;
    this.alimento.fosforo = this.navParams.data.fosforo;
    this.alimento.ferro = this.navParams.data.ferro;

    this.alimento.sodio = this.navParams.data.sodio;
    this.alimento.potassio = this.navParams.data.potassio;
    this.alimento.cobre = this.navParams.data.cobre;
    this.alimento.zinco = this.navParams.data.zinco;
    this.alimento.retinol = this.navParams.data.retinol;

    this.alimento.re = this.navParams.data.re;
    this.alimento.rae = this.navParams.data.rae;
    this.alimento.tiamina = this.navParams.data.tiamina;
    this.alimento.riboflavina = this.navParams.data.riboflavina;
    this.alimento.piridoxina = this.navParams.data.piridoxina

    this.alimento.niacina = this.navParams.data.niacina;
    this.alimento.vitaminac = this.navParams.data.vitaminac;

    //console.log(this.navParams.get('nome'));

  }

  public loseModal() {
    this.viewCtrl.dismiss();
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad SampleModalPage');
  }

  public removeAlimento(){
    console.log('Alimento removido');
  }

  public editaAlimento(){
    console.log('Alimento editado');
  }

}
