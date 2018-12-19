import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeroesPage } from '../heroes/heroes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onLoadHeroes(){
    this.navCtrl.push(HeroesPage);
  }

}
