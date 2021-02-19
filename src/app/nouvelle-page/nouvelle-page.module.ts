import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouvellePagePageRoutingModule } from './nouvelle-page-routing.module';

import { NouvellePagePage } from './nouvelle-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouvellePagePageRoutingModule
  ],
  declarations: [NouvellePagePage]
})
export class NouvellePagePageModule {}
