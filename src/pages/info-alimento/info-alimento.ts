import { Alimento } from './../../model/Alimento.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

/**
 * Generated class for the InfoAlimentoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-info-alimento',
    templateUrl: 'info-alimento.html',
})
export class InfoAlimentoPage {

    private alimento: Alimento = this.navParams.get('infoAlimento');

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    }

    public ionViewDidLoad() {
        console.log('ionViewDidLoad InfoAlimentoPage');
    }

    public loseModal() {
        console.log('Close modal info');
        this.viewCtrl.dismiss();
    }

    public removeAlimento() {
        console.log('Alimento removido');
    }

    public editaAlimento() {
        console.log('Alimento editado');
    }

}
