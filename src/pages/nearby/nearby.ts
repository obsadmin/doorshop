import { GlobalProvider } from './../../providers/global/global';
//import { GeocoderProvider } from './../../providers/geocoder/geocoder';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
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

/**
 * Generated class for the NearbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',
})
export class NearbyPage {
  map1: GoogleMap;
  rs: String;
  title: String;
  geocoder: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation,
    public nativeGeocoder: NativeGeocoder, public platform: Platform, public global: GlobalProvider) {
    this.title = this.global.currentLocation;




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
      this.geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(37.422858, -122.085065);
      this.geocoder.geocode(
        { 'latLng': latlng },
        (results, status) => {
          console.log('hhhhhhh', status)
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              that.rs = results[0].formatted_address;
              let value = that.rs.split(",");
              that.rs = that.rs;
            }
            else {
              return that.rs = "address not found";
            }
          }
          else {
            return that.rs = "Geocoder failed due to: " + status;
          }
        })
      console.log('ionViewDidLoad NearbyPage');

      this.geolocation.getCurrentPosition().then((resp) => {
        let lat = resp.coords.latitude
        let lng = resp.coords.longitude
        console.log("cords", resp.coords.latitude);
        let location = { lat: lat, lng: lng };
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    });

  }
  ionViewDidLoad() {
   // this.loadMap();
  }

}
