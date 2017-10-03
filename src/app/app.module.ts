import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyOwnCustomMaterialModule } from './my-own-custom-material/my-own-custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MyOwnCustomMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
