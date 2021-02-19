import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JamalPage } from './jamal.page';

const routes: Routes = [
  {
    path: '',
    component: JamalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JamalPageRoutingModule {}
