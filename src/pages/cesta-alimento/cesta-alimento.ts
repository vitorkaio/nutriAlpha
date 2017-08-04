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

    private alimentos: Alimento[] = new Array();
    private basket = this.navParams.get('cesta');
    private sum: Soma;

    private qtdPadrao: number = 100;
    private val: number = 0;

    constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController,
    public alertCtrl: AlertController) {

        this.basket.forEach(element => {
            this.alimentos.push(element['food']);
        });
        console.log(this.alimentos);
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
        this.sum.proteina = 0;
        this.sum.colesterol = 0;
        //this.sum.umidade = 0;
        this.sum.kj = 0;
        this.sum.lipideos = 0;
        this.sum.carboidrato = 0;
        this.sum.fibra = 0;
        this.sum.cinzas = 0;
        this.sum.calcio = 0;
        this.sum.magnesio = 0;
        this.sum.manganes = 0;
        this.sum.fosforo = 0;
        this.sum.ferro = 0;
        this.sum.sodio = 0;
        this.sum.potassio = 0;
        this.sum.cobre = 0;
        this.sum.zinco = 0;
        this.sum.retinol = 0;
        this.sum.re = 0;
        this.sum.rae = 0;
        this.sum.tiamina = 0;
        this.sum.riboflavina = 0;
        this.sum.piridoxina = 0;
        this.sum.niacina = 0;
        this.sum.vitaminac = 0;

        this.basket.forEach(element => {

            // Verifica se a quantidade de gramas é a padrão 100.
            if(element['gramas'] == this.qtdPadrao){
                //console.log(element['food'].kcal);
                this.sum.kcal += Number(element['food'].kcal);
                this.sum.proteina += Number(element['food'].proteina);
                this.sum.colesterol += Number(element['food'].colesterol);
                 //this.sum.umidade += Number(element['food'].umidade);
                this.sum.kj += Number(element['food'].kj);
                this.sum.lipideos += Number(element['food'].lipideos);
                this.sum.carboidrato += Number(element['food'].carboidrato);
                this.sum.fibra += Number(element['food'].fibra);
                this.sum.cinzas += Number(element['food'].cinzas);
                this.sum.calcio += Number(element['food'].calcio);
                this.sum.magnesio += Number(element['food'].magnesio);
                this.sum.manganes += Number(element['food'].manganes);
                this.sum.fosforo += Number(element['food'].fosforo);
                this.sum.ferro += Number(element['food'].ferro);
                this.sum.sodio += Number(element['food'].sodio);
                this.sum.potassio += Number(element['food'].potassio);
                this.sum.cobre += Number(element['food'].cobre);
                this.sum.zinco += Number(element['food'].zinco);
                this.sum.retinol += Number(element['food'].retinol);
                this.sum.re += Number(element['food'].re);
                this.sum.rae += Number(element['food'].rae);
                this.sum.tiamina += Number(element['food'].tiamina);
                this.sum.riboflavina += Number(element['food'].riboflavina);
                this.sum.piridoxina += Number(element['food'].piridoxina);
                this.sum.niacina += Number(element['food'].niacina);
                this.sum.vitaminac += Number(element['food'].vitaminac);



            }

            // Se não for faça regra de 3.
            else{
                //console.log(element['gramas']);
                let val = (Number(element['food'].kcal) * element['gramas']) / this.qtdPadrao;
                this.sum.kcal += val;

                val = (Number(element['food'].proteina) * element['gramas']) / this.qtdPadrao;
                this.sum.proteina += val;

                val = (Number(element['food'].colesterol) * element['gramas']) / this.qtdPadrao;
                this.sum.colesterol += val;

                /*val = (Number(element['food'].umidade) * element['gramas']) / this.qtdPadrao;
                this.sum.umidade += val;*/

                val = (Number(element['food'].kj) * element['gramas']) / this.qtdPadrao;
                this.sum.kj += val;

                val = (Number(element['food'].lipideos) * element['gramas']) / this.qtdPadrao;
                this.sum.lipideos += val;

                val = (Number(element['food'].carboidrato) * element['gramas']) / this.qtdPadrao;
                this.sum.carboidrato += val;

                val = (Number(element['food'].fibra) * element['gramas']) / this.qtdPadrao;
                this.sum.fibra += val;

                val = (Number(element['food'].cinzas) * element['gramas']) / this.qtdPadrao;
                this.sum.cinzas += val;

                val = (Number(element['food'].calcio) * element['gramas']) / this.qtdPadrao;
                this.sum.calcio += val;

                val = (Number(element['food'].magnesio) * element['gramas']) / this.qtdPadrao;
                this.sum.magnesio += val;

                val = (Number(element['food'].manganes) * element['gramas']) / this.qtdPadrao;
                this.sum.manganes += val;

                val = (Number(element['food'].fosforo) * element['gramas']) / this.qtdPadrao;
                this.sum.fosforo += val;

                val = (Number(element['food'].ferro) * element['gramas']) / this.qtdPadrao;
                this.sum.ferro += val;

                val = (Number(element['food'].sodio) * element['gramas']) / this.qtdPadrao;
                this.sum.sodio += val;

                val = (Number(element['food'].potassio) * element['gramas']) / this.qtdPadrao;
                this.sum.potassio += val;

                val = (Number(element['food'].cobre) * element['gramas']) / this.qtdPadrao;
                this.sum.cobre += val;

                val = (Number(element['food'].zinco) * element['gramas']) / this.qtdPadrao;
                this.sum.zinco += val;

                val = (Number(element['food'].retinol) * element['gramas']) / this.qtdPadrao;
                this.sum.retinol += val;

                val = (Number(element['food'].re) * element['gramas']) / this.qtdPadrao;
                this.sum.re += val;
                
                val = (Number(element['food'].rae) * element['gramas']) / this.qtdPadrao;
                this.sum.rae += val;

                val = (Number(element['food'].tiamina) * element['gramas']) / this.qtdPadrao;
                this.sum.tiamina += val;

                val = (Number(element['food'].riboflavina) * element['gramas']) / this.qtdPadrao;
                this.sum.riboflavina += val;

                val = (Number(element['food'].piridoxina) * element['gramas']) / this.qtdPadrao;
                this.sum.piridoxina += val;

                val = (Number(element['food'].niacina) * element['gramas']) / this.qtdPadrao;
                this.sum.niacina += val;

                val = (Number(element['food'].vitaminac) * element['gramas']) / this.qtdPadrao;
                this.sum.vitaminac += val;



            }

        });

        //     
    }

    // Add alimento na cesta.
    public addCesta(){
        this.view.dismiss(this.basket);
    }

    // Reseta a cesta de alimentos.
    public resetaCesta(){

         let alert = this.alertCtrl.create({
            title: 'Confirmar ação',
            message: 'Tem certeza que deseja esvaziar a cesta?',
            buttons: [{text: 'Cancelar', role: 'Ok',
                handler: () => {
                    console.log('Cancel clicked');
                }
            },
            {
                text: 'Ok',
                handler: () => {
                    this.alimentos = new Array();
                    this.basket = new Array();
                    //console.log(this.cesta);
                    this.view.dismiss(true);
                }
            }
            ]
        });
        alert.present();
    }

    // Reseta alimento
    public resetaAlimento(alimento: Alimento){
        this.basket.forEach((element, key) => {
          if (element['food'].nome == alimento['food'].nome) {
            this.val = this.qtdPadrao;
              this.basket[key]['gramas'] = this.val;
              this.somaCesta();
              return;
            }
        });
    }

    public clicaAlimento(alimento: Alimento){
        //console.log(alimento);
        let gramas: number = alimento['gramas'];

        let prompt = this.alertCtrl.create({
            title: '' + alimento['food'].nome,
            message: "Entre com a quantidade em gramas, atual: " + gramas + 'g',
            inputs: [
                {name: 'gramas', placeholder: 'Gramas'},
            ],
            buttons: [
                {text: 'Cancel', handler: data => {
                        //console.log('Cancel clicked');
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
