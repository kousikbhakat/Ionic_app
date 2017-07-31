import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { CardataProvider } from '../../providers/cardata/cardata';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-departure',
  templateUrl: 'departure.html',
})
export class Departure {


	cars: any[] = [];
	datasearched: boolean = false;
	found: boolean = false;
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public alertCtrl: AlertController,
		public cardata: CardataProvider
	) {}

	getcarbyCarno(ev: any){

		let val = ev.target.value;
	    // if the value is an empty string don't filter the items
	    if (val && val.trim() != '') {
	    	this.datasearched = true;
			this.cardata.getcarbyCarno(val).subscribe(cars =>{
				let length = cars.length;
				if (length) {
					this.found = true;
					this.cars = cars;
					for (let i = 0; i< length; i++) {
						this.cars[i].entrytime = moment(cars[i].entrytime).format('MMM Do YY, h:mm a');
					}
				}else{
					this.found = false;
				}
			});
	    }else{
	    	this.datasearched = false;
	    	this.cars = [];
	    }
	}

	deleteCar(i){
		let confirm = this.alertCtrl.create({
			title: 'Remove car',
			message: 'Are you sure you want to parmanently delete this car?',
			buttons: [
				{
				  text: 'No',
				  handler: () => {}
				},
				{
				  text: 'Sure',
				  handler: () => {
					this.cardata.deletecarbyCarid(this.cars[i].$key);
				  }
				}
			]
		});
		confirm.present();
	}

}
