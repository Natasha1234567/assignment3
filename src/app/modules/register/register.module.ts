import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RouterModule} from '@angular/router';
import { RegisterComponent } from './register.component';
@NgModule({
  declarations: [RegisterComponent],
  imports: [
  RouterModule,
  MaterialModule,
  FormsModule,
  RegisterRoutingModule,
  CommonModule,
  ReactiveFormsModule
  ],
  entryComponents: []
})
export class RegisterModule {
  constructor() {
    console.log('RegisterModule loaded.');
 }
}
