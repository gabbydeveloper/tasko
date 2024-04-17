import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { canActivateGuard, canMatchGuard } from './auth/guards/auth.guard';
import { publicCanActivateGuard, publicCanMatchGuard } from './auth/guards/public.guard';

//Configuración principal de las rutas de la aplicación
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [publicCanActivateGuard],
    canMatch: [publicCanMatchGuard]
  },
  {
    path: 'main-panel',
    loadChildren: () => import('./main-panel/main-panel.module').then(m => m.MainPanelModule),
    canActivate: [canActivateGuard],
    canMatch: [canMatchGuard]
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'main-panel',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
