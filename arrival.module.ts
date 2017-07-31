import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Arrival } from './arrival';

@NgModule({
  declarations: [
    Arrival,
  ],
  imports: [
    IonicPageModule.forChild(Arrival),
  ],
  exports: [
    Arrival
  ]
})
export class ArrivalModule {}
