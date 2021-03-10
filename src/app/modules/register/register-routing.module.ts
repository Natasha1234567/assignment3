import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

export const routes: Routes = [
  { path: '', component: RegisterComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
