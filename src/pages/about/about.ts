import { Alimento } from './../../model/Alimento.model';
import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    private par: any;
    private alimentos: Alimento[] = [];
    private food: Alimento;


    constructor(public navCtrl: NavController, public events: Events, public navs: NavParams) {
        console.log('constructor cesta!');
    }

    public ionViewWillEnter() {
        console.log('Carrega cesta!!!');
        this.carregaCesta().then(data => {
            let aux: any;
            aux = data;
            this.alimentos.push(aux);
        }).catch(err => {
            console.log(err);
        });
    }

    public ionViewWillLeave(){
        console.log('Out cesta page!')
    }

    public carregaCesta() {
        return new Promise(resolve => {
            this.events.subscribe('data:created', (data) => {
                console.log(data);
                resolve(data);
            });
        });
    }

}
