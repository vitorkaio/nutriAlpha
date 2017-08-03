import { Soma } from './../../model/soma.model';
import { Alimento } from './../../model/alimento.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

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
    private quantidade: any;
    private soma: Alimento;
    private sum: Soma;

    constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController,
    public alertCtrl: AlertController) {

        this.quantidade = [];
        for(let i = 0; i < this.cesta.length; i++){
            this.quantidade.push({'quantidade': 100, alimento: this.cesta[i].nome});
        }

        this.somaCesta();
    }

    ionViewDidLoad() {
        //console.log(this.cesta);
    }

    ionViewDidLeave(){
        //console.log("close modal page cesta");
    }

    // Soma as propriedades da cesta
    public somaCesta(){
        //console.log('Soma!');
        this.sum = {};
        this.sum.kcal = 0;
        this.cesta.forEach(element => {
            this.sum.kcal += Number(element.kcal);
            //console.log(this.sum);
        });

    }

    // Reseta a cesta de alimentos.
    public resetaCesta(){
        this.cesta = new Array();
        //console.log(this.cesta);
        this.view.dismiss(true);
    }

    public clicaAlimento(alimento: Alimento){

        let gramas: number = 0;
        for(let i = 0; i < this.quantidade.length; i++){
            console.log('Food: ' + this.quantidade[i]['alimento']);
            if (this.quantidade[i]['alimento'] == alimento.nome)
                gramas = this.quantidade[i]['quantidade'];
        }

        let prompt = this.alertCtrl.create({
            title: 'Quantidade',
            message: "Entre com a quantidade em gramas, atual: " + gramas,
            inputs: [
                {name: 'title', placeholder: 'Title'},
            ],
            buttons: [
                {text: 'Cancel', handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {text: 'Save',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    }

    // Remove um alimento da cesta.
    public removeAlimento(alimento: Alimento){
        for(let i = 0; i < this.cesta.length; i++){
            if (this.cesta[i].nome == alimento.nome){
                this.cesta.splice(i, 1);
                break;
            }
        }

        // Verifica se a cesta está vazia.
        if(this.cesta.length == 0)
            this.resetaCesta();

        // Refaz a soma.
        this.somaCesta();
    }

}// Fim da classe cestaAlimentos
