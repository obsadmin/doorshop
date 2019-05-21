import { GlobalProvider } from './../../providers/global/global';
import { NearbyPage } from './../nearby/nearby';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
declare var map1;
declare var google: any;
import {
  GoogleMaps,
  GoogleMap,
  Environment,
  GeocoderRequest,
  GoogleMapsEvent,
  GeocoderResult,
  Geocoder,
  Marker,
  ILatLng
} from '@ionic-native/google-maps';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1: any;
  geocoder: any;
  title:any;
  banners = [
    { imagePath: "", title: 'Offers' }
  ];
  constructor(public navCtrl: NavController, public global: GlobalProvider, public geolocation: Geolocation,
    public nativeGeocoder: NativeGeocoder, public platform: Platform) {
    this.tab1 = NearbyPage;
    this.banners.push({ imagePath: "", title: 'Offers' });
    this.banners.push({ imagePath: "", title: 'Must try' });

    this.loadMap();
  }

  openHomePage() {
    this.navCtrl.push(NearbyPage);
  }


  loadMap() {


    let that: any = this;

    this.platform.ready().then(() => {

      // This code is necessary for browser
    /*  Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBDQ3EXLfQ33x-0pJbFg3KyNy-Tm8gyZf4',
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBDQ3EXLfQ33x-0pJbFg3KyNy-Tm8gyZf4'
      });
*/


      console.log('ionViewDidLoad NearbyPage');

      let that = this;

      this.geolocation.getCurrentPosition().then((resp) => {
        let lat = resp.coords.latitude
        let lng = resp.coords.longitude
        console.log("cords", resp.coords.latitude);
        let location = { lat: lat, lng: lng };


        //geocoding
        that.geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(lat, lng);

        that.geocoder.geocode(
          { 'latLng': latlng },
          (results, status) => {
            console.log('hhhhhhh', status)
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[0]) {
                  console.log(results[0].formatted_address);
                  that.global.currentLocation = results[0].formatted_address;
                  this.title = that.global.currentLocation;
                //  that.rs= results[0].formatted_address ;
                //let  value =that.rs.split(",");
                //that.rs = that.rs;
              }
              else {
                // return that.rs = "address not found";
                console.log("not found");
              }
            }
            else {
              //return that.rs = "Geocoder failed due to: " + status;
              console.log("not found");
            }



          })








      }).catch((error) => {
        console.log('Error getting location', error);
      });






    });

  }

}
