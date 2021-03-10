import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () =>
  import('./core/core.module').then((m) => m.CoreModule)},

  {path: 'register', loadChildren: () =>
  import('./modules/register/register.module').then((m) => m.RegisterModule)},

  {path: 'details/:id', loadChildren: () =>
  import('./modules/details/details.module').then((m) => m.DetailsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
