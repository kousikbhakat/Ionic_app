import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Allcars } from './allcars';

@NgModule({
  declarations: [
    Allcars,
  ],
  imports: [
    IonicPageModule.forChild(Allcars),
  ],
  exports: [
    Allcars
  ]
})
export class AllcarsModule {}
