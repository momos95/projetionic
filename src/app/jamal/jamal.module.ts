import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JamalPageRoutingModule } from './jamal-routing.module';

import { JamalPage } from './jamal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JamalPageRoutingModule
  ],
  declarations: [JamalPage]
})
export class JamalPageModule {}
