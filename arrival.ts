import { Component , OnInit} from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import { AngularFireDatabase ,FirebaseListObservable} from 'angularfire2/database';
import { CardataProvider } from '../../providers/cardata/cardata';



@IonicPage()
@Component({
  selector: 'page-arrival',
  templateUrl: 'arrival.html',
  providers: [AngularFireDatabase]
})

export class Arrival implements OnInit{


	carno: any;
	slotno: any;
	allotedslots: any[] = [];
	list: FirebaseListObservable<any[]>;
	usernode: any;
	constructor(
		public navCtrl: NavController, 
		public af: AngularFireDatabase,
		public cardata: CardataProvider
	) {}

	ngOnInit(){
		this.cardata.getallCars().subscribe(cars=>{
			let length = cars.length;
			if (length > 0) {
				for (let i = 0; i < length; i++) {
					this.allotedslots[i] = cars[i].slotno;
				}
			}
		});
	}

	addItem(){
		if (!this.carno) {
			alert("Please enter carno");
		}
		else if (!this.slotno) {
			alert("Please select slotno")
		}
		else if ((!this.carno) && (!this.slotno)) {
			alert("Please enter carno and select slotno");
		}
		else {
			if (!this.checkifpresent(this.slotno)) {
				
				let time = Date.now();
				this.af.list('/users/')
					.push({
						carno: this.carno,
						entrytime: time,
						slotno: this.slotno,
					}).then((success)=> {
						this.navCtrl.push('Cardetails',{carno: this.carno});
					},(error)=> alert("Failed to add car detalis"));
			}else{
				alert("Select other slotno.");
			}
		}

	}

	checkifpresent(num){
		let i = 0;
		while(i < this.allotedslots.length){
			if (!(this.allotedslots[i] == num)) {
				i++;
			}else{
				return true;
			}
		}
		if (i == this.allotedslots.length) {
			return false;
		}
	}

}
