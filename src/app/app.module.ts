import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyHttpInterceptor } from './my-http.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass : MyHttpInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
