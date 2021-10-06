import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CakeComponent } from './cake/cake.component';
import { GiftComponent } from './gift/gift.component';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';


@NgModule({
  declarations: [
    AppComponent,
    CakeComponent,
    GiftComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgxJsonLdModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
