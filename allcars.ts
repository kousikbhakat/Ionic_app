import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardataProvider } from '../../providers/cardata/cardata';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-allcars',
  templateUrl: 'allcars.html',
})
export class Allcars implements OnInit{

	cars: any[] = [];
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public cardata: CardataProvider
	) {}

	ngOnInit(){
		this.cardata.getallCars().subscribe(cars =>{
			if (cars.length > 0) {
				cars.reverse();				
				this.cars = cars;
				for (let i = 0;i < this.cars.length; i++) {
					this.cars[i].entrytime = moment(this.cars[i].entrytime).format('MMM Do YY, h:mm a');
				}
			}
		});
	}
}
