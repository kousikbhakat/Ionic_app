import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Departure } from './departure';

@NgModule({
  declarations: [
    Departure,
  ],
  imports: [
    IonicPageModule.forChild(Departure),
  ],
  exports: [
    Departure
  ]
})
export class DepartureModule {}
