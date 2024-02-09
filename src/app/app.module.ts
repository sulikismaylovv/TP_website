import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './shared/app.component';
import { HomeComponent } from './modules/homepage/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {NgOptimizedImage} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ],
    imports: [
        BrowserModule,
        NgOptimizedImage,
        HttpClientModule,
        TranslocoRootModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
