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

    private alimentos: Alimento[] = this.navParams.get('cesta');
    private basket: any;
    private sum: Soma;

    private qtdPadrao: number = 100;
    private val: number = 0;

    constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController,
    public alertCtrl: AlertController) {

        this.basket = [];
        for(let i = 0; i < this.alimentos.length; i++){
             this.basket.push({'gramas': 100, 'food': this.alimentos[i]});
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
        this.sum = {};
        this.sum.kcal = 0;
        this.basket.forEach(element => {

            // Verifica se a quantidade de gramas é a padrão 100.
            if(element['gramas'] == this.qtdPadrao){
                console.log(element['food'].kcal);
                this.sum.kcal += Number(element['food'].kcal);
            }

            // Se não for faça regra de 3.
            else{
                console.log(element['gramas']);
                let val = (Number(element['food'].kcal) * element['gramas']) / this.qtdPadrao;
                this.sum.kcal += val;
            }

        });

        //     
    }

    // Reseta a cesta de alimentos.
    public resetaCesta(){
        this.alimentos = new Array();
        this.basket = new Array();
        //console.log(this.cesta);
        this.view.dismiss(true);
    }

    public clicaAlimento(alimento: any){
        console.log(alimento);
        let gramas: number = alimento['gramas'];

        let prompt = this.alertCtrl.create({
            title: '' + alimento['food'].nome,
            message: "Entre com a quantidade em gramas, atual: " + gramas + 'g',
            inputs: [
                {name: 'gramas', placeholder: 'Gramas'},
            ],
            buttons: [
                {text: 'Cancel', handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {text: 'Ok',
                    handler: data => {
                        this.basket.forEach((element, key) => {
                            if(element['food'].nome == alimento['food'].nome){
                                this.val = Number(data['gramas']);
                                if(isNaN(this.val) == false){
                                    this.basket[key]['gramas'] = this.val;
                                    this.somaCesta();
                                    return;
                                }
                                else{
                                    return;
                                }
                            }
                        });
                    }
                }
            ]
        });
        prompt.present();
    }

    // Remove um alimento da cesta.
    public removeAlimento(alimento: Alimento){

        this.basket.forEach((element, key) => {
            if(element['food'].nome == alimento.nome){
                this.basket.splice(key, 1);
                this.alimentos.splice(key, 1);
                return;
            }

        });

        // Verifica se a cesta está vazia.
        if(this.basket.length == 0)
            this.resetaCesta();

        // Refaz a soma.
        this.somaCesta();
    }

}// Fim da classe cestaAlimentos
