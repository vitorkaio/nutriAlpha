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


    constructor(public navCtrl: NavController, public events: Events) {
        
    }

    public ionViewWillEnter() {
        console.log('Enter about page!');
        this.events.subscribe('data:created', (data) => {
            console.log(data);
            this.alimentos = data;
        });
    }

}
