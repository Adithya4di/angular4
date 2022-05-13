import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcComponent } from './abc/abc.component';
import { AbcdComponent } from './abcd/abcd.component';

@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    AbcdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
