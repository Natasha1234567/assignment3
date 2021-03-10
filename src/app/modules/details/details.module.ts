import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule } from './details-routing-module';
import { RouterModule} from '@angular/router';
import { DetailsPageComponent } from './details-page.component';

@NgModule({
  declarations: [DetailsPageComponent],
  imports: [
  RouterModule,
  MaterialModule,
  FormsModule,
  DetailsRoutingModule,
  CommonModule,
  ReactiveFormsModule,
  ],
  entryComponents: []
})
export class DetailsModule {
  constructor() {
    console.log('DetailsModule loaded.');
 }
}
