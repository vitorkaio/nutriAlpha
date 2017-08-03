import { Soma } from './../../model/soma.model';
import { Alimento } from './../../model/alimento.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CestaAlimentoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-cesta-alimento',
    templateUrl: 'cesta-alimento.html',
})
export class CestaAlimentoPage {

    private cesta: Alimento[] = this.navParams.get('cesta');
    private soma: Alimento;
    private sum: Soma;

    constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
        this.somaCesta();
    }

    ionViewDidLoad() {
        console.log(this.cesta);
    }

    ionViewDidLeave(){
        console.log("close modal page cesta");
    }

    // Soma as propriedades da cesta
    public somaCesta(){
        console.log('Soma!');
        this.sum = {};
        this.sum.kcal = 0;
        this.cesta.forEach(element => {
            this.sum.kcal += Number(element.kcal);
            console.log(this.sum);
        });

    }

    public resetaCesta(){
        this.cesta = new Array();
        console.log(this.cesta);
        this.view.dismiss(true);
    }

    public clicaAlimento(alimento: Alimento){
        console.log(alimento.nome);
    }

}
