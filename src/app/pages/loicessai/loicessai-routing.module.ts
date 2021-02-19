import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoicessaiPage } from './loicessai.page';

const routes: Routes = [
  {
    path: '',
    component: LoicessaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoicessaiPageRoutingModule {}
