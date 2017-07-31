import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { CardataProvider } from '../../providers/cardata/cardata';
import * as moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-cardetails',
  templateUrl: 'cardetails.html',
})
export class Cardetails implements OnInit{


	carno: any;
	car: any;

	mycarno: any;
	mytime: any;
	myslot: any;
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public af: AngularFireDatabase,
		public cardata: CardataProvider
	) {
		this.carno = this.navParams.get("carno");
	}

	ngOnInit(){
		if (this.carno) {			
			this.cardata.getcarbyCarno(this.carno).subscribe((car) =>{
				if (car[0]) {	
					this.mycarno = car[0].carno;
					this.mytime = moment(car[0].entrytime).format('MMM Do YY, h:mm a');
					this.myslot = car[0].slotno;		
				}
			});
		}
		else{
			alert("Something wrong!");
		}
	}
	ngOnDestroy(){}

	gotoHome(){
		this.navCtrl.setRoot('Home');
	}
}
