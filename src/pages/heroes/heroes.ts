import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleHeroPage } from './single-hero/single-hero';
import { Hero } from '../../models/Hero';

@Component({
    selector: 'pages-heroes',
    templateUrl: 'heroes.html'
})

export class HeroesPage{


    heroesList: Hero []= [
        {
            name:'Superman',
            description: [
                'Ne supporte pas la kryptonite',
                'Est copain avec Batman de temps en temps'
            ],
            isInCombat: true,
        },
        {
            name:'The Joker',
            description: [
                'Ennemi de Batman',
                'Meurtrier à Gotham City'
            ],
            isInCombat: true,
        },
        {
            name:'Felix The Cat',
            description: [
                'A 7 vies',
                'Revient à la maison que pour manger'
            ],
            isInCombat: true,
        },

    ]

    constructor(private navCtrl: NavController) {

    }

    onLoadHero(name: string){
        this.navCtrl.push(SingleHeroPage, {heroName: name})

    }

}