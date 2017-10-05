import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyOwnCustomMaterialModule } from './my-own-custom-material/my-own-custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { FlexLayoutModule } from "@angular/flex-layout";

import { FormsModule } from '@angular/forms';

import { RestangularModule } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { baseURL } from './shared/baseurl';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MyOwnCustomMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    AppRoutingModule
  ],
  providers: [
  	DishService,
    PromotionService,
    LeaderService,
    {provide: 'BaseURL', useValue: baseURL}
  ],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
