import { AddAlimentoPage } from './../add-alimento/add-alimento';
import { AcessAlimentosProvider } from './../../providers/acess-alimentos/acess-alimentos';
import { Alimento } from './../../model/Alimento.model';
import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, NavParams, Events } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    private alimentos: Alimento[] = [];
    private listaOperacaoes: Alimento[] = [];
    private dados: any = [];

    private acesso: AcessAlimentosProvider;

    private isOn: boolean = true;
    private searchTerm: string = '';

    private load: any;
    private searchControl: FormControl;
    private searching: any = false;

    constructor(public navCtrl: NavController, public ac: AcessAlimentosProvider, public loadingCtrl: LoadingController,
    public navParmas: NavParams, public events: Events, public toats: ToastController) {
        this.acesso = ac;
        this.presentLoadingDefault();
        this.getAlimentos();
        this.searchControl = new FormControl();
    }


    public ionViewDidLoad() {
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
            this.searching = false;
            this.setFilteredItems();
        });
    }

    // Executa depois que o Dom é carregado e antes da página ficar ativa.
    public ionViewWillEnter() {
        console.log("Enter page home!");
        this.searchTerm = '';
        
        if(this.isOn == true)
            this.toggleDetails();
        
        // Verifica se a lista de alimentos foi filtrada, se isso acoteceu e a página foi modificada, então
        // deve ser feita o reset da lista.
        if( this.alimentos.length != this.dados.length){
            this.searchTerm = '';
            this.presentLoadingDefault();
            this.alimentos = this.dados;
            this.dimissLoadingDefault();
        }
    }

    // Executa quando a página já carregou
    //ionViewDidLoad apenas uma vez
    public ionViewDidEnter(){
        console.log("Did Enter!");
    }

    public ionViewDidLeave() {
        console.log('Leave page home!');
        
    }

    /*public ionViewWillLeave() {
        console.log('Leave page home!');
        this.searchTerm = '';
        
    }*/

    // ************************** Cria um loading ao carregar os dados **************************
    public presentLoadingDefault() {
        this.load = this.loadingCtrl.create({
            content: 'Carregando Alimentos...'
        });
        this.load.present();
    }

    public dimissLoadingDefault() {
        this.load.dismiss();
    }

    // ************************** ************************************ **************************

    public getAlimentos() {
        //
        this.acesso.getAll().then(data => {
            let aux: any = [];
            aux = data;

            aux['dados'].forEach(element => {
                this.dados.push(this.acesso.formataEntrada(element));
            });

            this.dados.sort(function (a, b) { return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0); });
            this.alimentos = this.dados;
            this.dimissLoadingDefault();

        }).catch(err => {
            console.log(err);
        });
    }

    // Carrega mais alimentos na lista.
    public loadAlimentos() {
        return new Promise(resolve => {

            //this.start += this.v;
            this.alimentos = this.dados;
            resolve();

        });
    }

    /*doInfinite(infiniteScroll: any) {
        console.log('Begin async operation');

        if (this.start > this.dados.length) {
            console.log('Acabou o doInfinite');
            infiniteScroll.complete();
            this.start = 0;
            return;
        }

        else {
            setTimeout(() => {
                this.loadAlimentos().then(() => {
                    console.log('Async operation has ended');
                    infiniteScroll.complete();
                }).catch(err => {
                    console.log(err);
                });
            }, 1000);

        }
    }*/

    // ********************************** Add lista de operação **********************************
    public addListaOperacoes(alimento: Alimento) {
        let t = this.toats.create({
            message: 'Alimento adicionado: ' + alimento.nome,
            duration: 3000
        });
        t.present();
        
        console.log('Add op!');
        this.listaOperacaoes.push(alimento);
        this.events.publish('data:created', this.listaOperacaoes);
    }

    // Abre a página de adicionar elemento.
    public adicionarPage(): void {
        // Abrindo uma nova página e passando um parâmetro.
        this.navCtrl.push(AddAlimentoPage, {
            'teste': 'Vih'
        });
    }

    // ******************************** Pesquisa ********************************
    public setState(): void {
        this.isOn = !this.isOn;
    }

    public toggleDetails() {
        console.log('-> ' + this.isOn);
        this.isOn = !this.isOn;
    }

    public filterItems(searchTerm) {
        return this.dados.filter((item) => {
            return item.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }

     public onSearchInput(){
        this.searching = true;
    }

    public setFilteredItems() {
        //console.log('Search: ' + this.searchTerm.length);
        if (this.searchTerm.length == 0) {
            this.alimentos = this.dados;
        }

        else {
            //console.log(this.searchTerm);
            this.alimentos = this.filterItems(this.searchTerm);
        }
    }

    // ******************************** ********* ********************************

    public resetLista(){
        console.log('Reset Lista');
        this.searchTerm = '';
        this.presentLoadingDefault();
        this.alimentos = this.dados;
        this.listaOperacaoes = new Array();
        if(this.isOn == true)
            this.toggleDetails();
        this.dimissLoadingDefault();
    }

}// Fim da classe home
