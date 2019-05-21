import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GeocoderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeocoderProvider {

  constructor(public http: HttpClient, private _GEOCODE  : NativeGeocoder) {
    console.log('Hello GeocoderProvider Provider');
    
  }


reverseGeocode(lat : number, lng : number) : Promise<any>
{
   return new Promise((resolve, reject) =>
   {
      this._GEOCODE.reverseGeocode(lat, lng)
      .then((result : NativeGeocoderReverseResult[]) =>
      {
        console.log(result);
         //let str : string   = `The reverseGeocode address is ${result.street} in ${result.countryCode}`;
         resolve(result);
      })
      .catch((error: any) =>
      {
         reject(error);
      });
   });
}

}
