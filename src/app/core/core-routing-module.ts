import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent},
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class CoreRoutingModule {}
