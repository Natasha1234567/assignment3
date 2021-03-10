import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from './../shared/material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import AuthService from './services/auth-service/auth-service.service';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing-module';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './../modules/details/details-page.component';
import { AuthInterceptorService } from '../interceptor/httpInterceptor';

@NgModule({
  declarations: [
    LoginComponent,
    DetailsPageComponent
  ],
  imports: [
    CoreRoutingModule,
    MaterialModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [LoginComponent]
})
export class CoreModule {
  constructor() {
    console.log('CoreModule loaded.');
 }
}
