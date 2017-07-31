import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cardetails } from './cardetails';

@NgModule({
  declarations: [
    Cardetails,
  ],
  imports: [
    IonicPageModule.forChild(Cardetails),
  ],
  exports: [
    Cardetails
  ]
})
export class CardetailsModule {}
