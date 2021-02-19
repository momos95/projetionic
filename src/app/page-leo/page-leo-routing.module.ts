import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLeoPage } from './page-leo.page';

const routes: Routes = [
  {
    path: '',
    component: PageLeoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageLeoPageRoutingModule {}
