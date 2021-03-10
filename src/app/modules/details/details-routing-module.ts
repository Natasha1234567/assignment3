import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './details-page.component';

export const routes: Routes = [
  { path: ' ', component: DetailsPageComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsRoutingModule {}
