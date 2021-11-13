import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NewHereComponent } from './new-here/new-here.component';
import { NextstepComponent } from './nextstep/nextstep.component';
import { RccgComponent } from './rccg/rccg.component';
import { VirtualChurchComponent } from './virtual-church/virtual-church.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { GiveComponent } from './give/give.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewHereComponent,
    NextstepComponent,
    RccgComponent,
    VirtualChurchComponent,
    OurHistoryComponent,
    GiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
