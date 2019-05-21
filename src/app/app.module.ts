import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OffersPage } from './../pages/offers/offers';
import { OrdersPage } from './../pages/orders/orders';
import { TabsPage } from './../pages/tabs/tabs';
import { NearbyPage } from './../pages/nearby/nearby';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder'
import { GeocoderProvider } from '../providers/geocoder/geocoder';
import { GlobalProvider } from '../providers/global/global';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NearbyPage,
    TabsPage,
    OrdersPage,
    OffersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NearbyPage,
    TabsPage,
     OrdersPage,
    OffersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    GeocoderProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
    
  ]
})
export class AppModule {}
