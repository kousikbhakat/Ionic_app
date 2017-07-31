import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardataProvider } from '../../providers/cardata/cardata';
import * as moment from 'moment';



@IonicPage()
@Component({
  selector: 'page-carsearch',
  templateUrl: 'carsearch.html',
})
export class Carsearch {

	cars: any[] = [];
	datasearched: boolean = false;
	found: boolean = false;
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
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
}
