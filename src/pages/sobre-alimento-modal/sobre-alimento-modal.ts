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
    this.alimento.kcal = this.navParams.data.kcal;
    this.alimento.proteina = this.navParams.data.proteina;
    this.alimento.colesterol = this.navParams.data.colesterol;
    //console.log(this.navParams.get('nome'));
  }

  public loseModal() {
    this.viewCtrl.dismiss();
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad SampleModalPage');
  }

}
