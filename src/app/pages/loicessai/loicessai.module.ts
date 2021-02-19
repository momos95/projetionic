import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoicessaiPageRoutingModule } from './loicessai-routing.module';

import { LoicessaiPage } from './loicessai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoicessaiPageRoutingModule
  ],
  declarations: [LoicessaiPage]
})
export class LoicessaiPageModule {}
