import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { IImageLoaderOptions, NgxProgressiveImageLoaderModule } from 'ngx-progressive-image-loader';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { Constants } from './config';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgxProgressiveImageLoaderModule.forRoot({
      rootMargin: Constants.KEYS.rootMargin,
      threshold: Constants.KEYS.threshold,
      // image width / height ratio for image holder
      imageRatio: Constants.KEYS.imageRatio,
    } as IImageLoaderOptions),
  ],
  providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule loaded.');
 }
}
