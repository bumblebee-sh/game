import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import { HomeComponent } from '@app/core/components';
import { AuthGuard } from '@app/services';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'game', canActivate: [AuthGuard], loadChildren: () => import ('./pages/game/game.module').then( mod => mod.GameModule)},
  { path: '**', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
