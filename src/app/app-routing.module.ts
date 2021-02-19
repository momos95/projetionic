import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {

    path: 'loicessai',
    loadChildren: () => import('./pages/loicessai/loicessai.module').then( m => m.LoicessaiPageModule)

    path: 'page-leo',
    loadChildren: () => import('./page-leo/page-leo.module').then( m => m.PageLeoPageModule)

   
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
