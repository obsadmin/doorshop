webpackJsonp([4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = /** @class */ (function () {
    function GlobalProvider(http) {
        this.http = http;
        console.log('Hello GlobalProvider Provider');
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_global_global__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nearby_nearby__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, global, geolocation, nativeGeocoder, platform) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.platform = platform;
        this.banners = [
            { imagePath: "", title: 'Offers' }
        ];
        this.tab1 = __WEBPACK_IMPORTED_MODULE_1__nearby_nearby__["a" /* NearbyPage */];
        this.banners.push({ imagePath: "", title: 'Offers' });
        this.banners.push({ imagePath: "", title: 'Must try' });
        this.loadMap();
    }
    HomePage.prototype.openHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__nearby_nearby__["a" /* NearbyPage */]);
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        var that = this;
        this.platform.ready().then(function () {
            // This code is necessary for browser
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["a" /* Environment */].setEnv({
                'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBDQ3EXLfQ33x-0pJbFg3KyNy-Tm8gyZf4',
                'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBDQ3EXLfQ33x-0pJbFg3KyNy-Tm8gyZf4'
            });
            console.log('ionViewDidLoad NearbyPage');
            var that = _this;
            _this.geolocation.getCurrentPosition().then(function (resp) {
                var lat = resp.coords.latitude;
                var lng = resp.coords.longitude;
                console.log("cords", resp.coords.latitude);
                var location = { lat: lat, lng: lng };
                //geocoding
                that.geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(lat, lng);
                that.geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                    console.log('hhhhhhh', status);
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            console.log(results[0].formatted_address);
                            that.global.currentLocation = results[0].formatted_address;
                            _this.title = that.global.currentLocation;
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
                });
            }).catch(function (error) {
                console.log('Error getting location', error);
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/rkumararya/Documents/mobileApps/dayshop/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title small>{{title}}</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar color="primary">\n    <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)"\n      placeholder="Search for shop, product item">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid no-padding no-margin>\n    <ion-row class="tab-font-size">\n      <ion-col col-4 no-margin no-padding>\n        <button ion-button large full color="white" (click)="openHomePage()">\n         <div>\n           <ion-icon color="primary" name="home"></ion-icon><br>\n         <label> Nearby Shop </label> \n         </div>\n         </button>\n      </ion-col>\n      <ion-col col-4 no-margin no-padding>\n        <button ion-button full large color="white">\n          <div>\n           <ion-icon color="primary" name="list-box"></ion-icon><br>\n         <label> Orders </label> \n         </div>\n       </button>\n      </ion-col>\n      <ion-col col-4 no-margin no-padding>\n        <button ion-button large full color="white">\n          <div>\n           <ion-icon color="primary" name="pricetag"></ion-icon><br>\n         <label> Offers </label> \n         </div>\n       </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n <div class="button-row" style="background:#fff">\n   <div class="fav-shop-title"><label>Favourite Shops</label></div>\n   <div class="row">\n    <!-- <div col-3 class="pad">\n        <div class="thumbnail-img">\n\n\n           <ion-thumbnail>\n            <img mat-card-image src="assets/imgs/logo.png">\n           </ion-thumbnail>\n            <div class="thumbnail-text">\n                <label>Vidhrab Store</label>\n            </div>\n        </div>\n     </div>-->\n\n\n      <div col-4>\n        <div class="thumbnail-img">\n           <ion-thumbnail class="pad-2">\n             <img mat-card-image src="assets/imgs/shop-building-png.png">\n           </ion-thumbnail>\n            <div class="thumbnail-text">\n                <label>Vidhrab Store,Pune</label>\n            </div>\n        </div>\n     </div>\n\n\n      <div col-4>\n        <div class="thumbnail-img">\n           <ion-thumbnail class="pad-2">\n             <img mat-card-image src="assets/imgs/logo.png">\n           </ion-thumbnail>\n            <div class="thumbnail-text">\n                <label>Vidhrab Store</label>\n            </div>\n        </div>\n     </div>\n\n\n     <div col-4>\n        <div class="thumbnail-img">\n           <ion-thumbnail class="pad-2">\n             <img mat-card-image src="assets/imgs/shop-building-png.png">\n           </ion-thumbnail>\n            <div class="thumbnail-text">\n                <label>Vidhrab Store</label>\n            </div>\n        </div>\n     </div>\n\n     \n   </div>\n    \n</div>\n\n <!-- <div class="button-row" style="background:#fff">\n\n\n    <mat-grid-list color="white" cols="3" rowHeight="100px" style="margin-top:5px">\n\n      <mat-grid-tile>\n        <label class="fav-text" padding>Favourite Shop</label>\n      </mat-grid-tile>\n\n\n\n      <mat-grid-tile>\n          <div class="thumbnail-img">\n              <ion-thumbnail padding>\n                <img mat-card-image src="assets/imgs/logo.png">\n              </ion-thumbnail>\n              <div class="thumbnail-text"> \n                   Nine Inch Store\n             </div>\n         </div>\n\n      </mat-grid-tile>\n      <mat-grid-tile>\n\n         <div class="thumbnail-img">\n              <ion-thumbnail padding>\n                <img mat-card-image src="assets/imgs/shop-building-png.png">\n              </ion-thumbnail>\n              <div class="thumbnail-text"> \n                 \n                 Nine Inch, Delhi\n             </div>\n         </div>\n\n      \n\n\n      </mat-grid-tile>\n\n    </mat-grid-list>\n  </div>\n-->\n\n\n  <ion-card *ngFor="let banner of banners">\n    <img src="https://ionicframework.com/dist/preview-app/www/assets/img/nin-live.png" />\n    <ion-card-content>\n      <label>\n        Nine Inch Store\n      </label>\n     <p>\n       Hgsgdhsa ashjdghjsa\n     </p>\n    </ion-card-content>\n  </ion-card>\n\n\n  <div class="button-row" style="background:#fff">\n    <mat-grid-list color="white" cols="1" rowHeight="80px" style="margin-top:10px">\n      <mat-grid-tile>\n\n        <img mat-card-image src="assets/imgs/shop-building-png.png">\n\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n\n\n\n\n\n\n  <div class="button-row" style="background:#fff">\n    <mat-grid-list color="white" cols="3" rowHeight="80px" style="margin-top:10px">\n      <mat-grid-tile>\n        <ion-thumbnail padding>\n          <img mat-card-image src="assets/imgs/logo.png">\n        </ion-thumbnail>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <ion-thumbnail padding>\n          <img mat-card-image src="assets/imgs/logo.png">\n        </ion-thumbnail>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <ion-thumbnail padding>\n          <img mat-card-image src="assets/imgs/shop-building-png.png">\n        </ion-thumbnail>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/rkumararya/Documents/mobileApps/dayshop/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OffersPage = /** @class */ (function () {
    function OffersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OffersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OffersPage');
    };
    OffersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offers',template:/*ion-inline-start:"/Users/rkumararya/Documents/mobileApps/dayshop/src/pages/offers/offers.html"*/'<!--\n  Generated template for the OffersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>offers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rkumararya/Documents/mobileApps/dayshop/src/pages/offers/offers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], OffersPage);
    return OffersPage;
}());

//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdersPage = /** @class */ (function () {
    function OrdersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdersPage');
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"/Users/rkumararya/Documents/mobileApps/dayshop/src/pages/orders/orders.html"*/'<!--\n  Generated template for the OrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>orders</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rkumararya/Documents/mobileApps/dayshop/src/pages/orders/orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 138;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/nearby/nearby.module": [
		332,
		3
	],
	"../pages/offers/offers.module": [
		333,
		2
	],
	"../pages/orders/orders.module": [
		334,
		1
	],
	"../pages/tabs/tabs.module": [
		335,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 182;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/rkumararya/Documents/mobileApps/dayshop/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rkumararya/Documents/mobileApps/dayshop/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__offers_offers__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orders_orders__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nearby_nearby__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_2__nearby_nearby__["a" /* NearbyPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_1__orders_orders__["a" /* OrdersPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_0__offers_offers__["a" /* OffersPage */];
    }
    TabsPage.prototype.openHomePage = function () {
        console.log("i am here in tab");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/rkumararya/Documents/mobileApps/dayshop/src/pages/tabs/tabs.html"*/'\n\n <!--<ion-tabs tabsPlacement="top" color="white">\n    <ion-tab [root]="tab1"  tabTitle="Nearby shop" tabIcon="home" (ionSelect)="openHomePage()"></ion-tab>\n    <ion-tab [root]="tab2" tabTitle="Orders" tabIcon="list-box"></ion-tab>\n    <ion-tab [root]="tab3" tabTitle="Offers" tabIcon="pricetags"></ion-tab>\n  </ion-tabs>\n\n\n -->\n'/*ion-inline-end:"/Users/rkumararya/Documents/mobileApps/dayshop/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(246);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_offers_offers__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_orders_orders__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_nearby_nearby__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_button__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_select__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_card__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_divider__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_list__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_grid_list__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_geocoder__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_geocoder_geocoder__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_global_global__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_nearby_nearby__["a" /* NearbyPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_offers_offers__["a" /* OffersPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/nearby/nearby.module#NearbyPageModule', name: 'NearbyPage', segment: 'nearby', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offers/offers.module#OffersPageModule', name: 'OffersPage', segment: 'offers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_nearby_nearby__["a" /* NearbyPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_offers_offers__["a" /* OffersPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_22__providers_geocoder_geocoder__["a" /* GeocoderProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_global_global__["a" /* GlobalProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/rkumararya/Documents/mobileApps/dayshop/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/rkumararya/Documents/mobileApps/dayshop/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocoderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_geocoder__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GeocoderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GeocoderProvider = /** @class */ (function () {
    function GeocoderProvider(http, _GEOCODE) {
        this.http = http;
        this._GEOCODE = _GEOCODE;
        console.log('Hello GeocoderProvider Provider');
    }
    GeocoderProvider.prototype.reverseGeocode = function (lat, lng) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._GEOCODE.reverseGeocode(lat, lng)
                .then(function (result) {
                console.log(result);
                //let str : string   = `The reverseGeocode address is ${result.street} in ${result.countryCode}`;
                resolve(result);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    GeocoderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], GeocoderProvider);
    return GeocoderProvider;
}());

//# sourceMappingURL=geocoder.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearbyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_global_global__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { GeocoderProvider } from './../../providers/geocoder/geocoder';





/**
 * Generated class for the NearbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NearbyPage = /** @class */ (function () {
    function NearbyPage(navCtrl, navParams, geolocation, nativeGeocoder, platform, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.platform = platform;
        this.global = global;
        this.title = this.global.currentLocation;
    }
    NearbyPage.prototype.loadMap = function () {
        var _this = this;
        var that = this;
        this.platform.ready().then(function () {
            // This code is necessary for browser
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* Environment */].setEnv({
                'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBDQ3EXLfQ33x-0pJbFg3KyNy-Tm8gyZf4',
                'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBDQ3EXLfQ33x-0pJbFg3KyNy-Tm8gyZf4'
            });
            _this.geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(37.422858, -122.085065);
            _this.geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                console.log('hhhhhhh', status);
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        that.rs = results[0].formatted_address;
                        var value = that.rs.split(",");
                        that.rs = that.rs;
                    }
                    else {
                        return that.rs = "address not found";
                    }
                }
                else {
                    return that.rs = "Geocoder failed due to: " + status;
                }
            });
            console.log('ionViewDidLoad NearbyPage');
            _this.geolocation.getCurrentPosition().then(function (resp) {
                var lat = resp.coords.latitude;
                var lng = resp.coords.longitude;
                console.log("cords", resp.coords.latitude);
                var location = { lat: lat, lng: lng };
            }).catch(function (error) {
                console.log('Error getting location', error);
            });
        });
    };
    NearbyPage.prototype.ionViewDidLoad = function () {
        // this.loadMap();
    };
    NearbyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-nearby',template:/*ion-inline-start:"/Users/rkumararya/Documents/mobileApps/dayshop/src/pages/nearby/nearby.html"*/'<!--\n  Generated template for the NearbyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title small>\n     Shops Near By - {{title}}\n      \n      <!--<ion-label>Keshav Nagar Road, Pune</ion-label>-->\n      </ion-title>\n      \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n <!-- <ion-title>nearby</ion-title>-->\n<div id="map_canvas1" style="width:200px;height:200px"></div>\n\n  <div class="button-row" style="background:#fff">\n  \n  <mat-grid-list cols="3" rowHeight="3:3">\n  <mat-grid-tile>1 - {{rs}}</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n  \n</mat-grid-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/rkumararya/Documents/mobileApps/dayshop/src/pages/nearby/nearby.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_global_global__["a" /* GlobalProvider */]) === "function" && _f || Object])
    ], NearbyPage);
    return NearbyPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=nearby.js.map

/***/ })

},[231]);
//# sourceMappingURL=main.js.map