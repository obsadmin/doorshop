import { OffersPage } from './../offers/offers';
import { OrdersPage } from './../orders/orders';
import { NearbyPage } from './../nearby/nearby';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1:any = HomePage;
  tab2:any = NearbyPage;
  tab3:any = OrdersPage;
  tab4:any = OffersPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

openHomePage(){
   console.log("i am here in tab");
   this.navCtrl.push(HomePage);
}
 /*openDetails(){
   this.navCtrl.push(HomePage);
 }
 */
 

}
