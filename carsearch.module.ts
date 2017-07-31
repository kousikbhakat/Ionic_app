import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Carsearch } from './carsearch';

@NgModule({
  declarations: [
    Carsearch,
  ],
  imports: [
    IonicPageModule.forChild(Carsearch),
  ],
  exports: [
    Carsearch
  ]
})
export class CarsearchModule {}
