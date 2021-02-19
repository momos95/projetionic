import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouvellePagePage } from './nouvelle-page.page';

const routes: Routes = [
  {
    path: '',
    component: NouvellePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouvellePagePageRoutingModule {}
