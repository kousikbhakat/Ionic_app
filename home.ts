import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	gotoArrival(){
		this.navCtrl.push('Arrival');
	}

	gotoDeparture(){
		this.navCtrl.push('Departure');
	}
	gotopresentCars(){
		this.navCtrl.push('Allcars');
	}
	gotocarSearch(){
		this.navCtrl.push('Carsearch');
	}
}
