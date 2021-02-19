import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageLeoPageRoutingModule } from './page-leo-routing.module';

import { PageLeoPage } from './page-leo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageLeoPageRoutingModule
  ],
  declarations: [PageLeoPage]
})
export class PageLeoPageModule {}
