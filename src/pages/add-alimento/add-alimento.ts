import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddAlimentoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-add-alimento',
    templateUrl: 'add-alimento.html',
})
export class AddAlimentoPage {

    private par = this.navParams.get('teste');

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

     // Executa depois que o Dom é carregado.
    public ionViewWillEnter() {
        console.log("Enter page add!");
    }

    public ionViewWillLeave() {
        console.log('Leave page add!');
    }

}
