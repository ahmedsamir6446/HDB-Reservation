(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hdb-reservation';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reserve/reserve.component */ "./src/app/reserve/reserve.component.ts");
/* harmony import */ var _step1_step1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./step1/step1.component */ "./src/app/step1/step1.component.ts");
/* harmony import */ var _step2_step2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./step2/step2.component */ "./src/app/step2/step2.component.ts");
/* harmony import */ var _step3_step3_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./step3/step3.component */ "./src/app/step3/step3.component.ts");
/* harmony import */ var _step4_step4_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./step4/step4.component */ "./src/app/step4/step4.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'reserve', component: _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_9__["ReserveComponent"] },
    { path: 'step1', component: _step1_step1_component__WEBPACK_IMPORTED_MODULE_10__["Step1Component"] },
    { path: 'step2', component: _step2_step2_component__WEBPACK_IMPORTED_MODULE_11__["Step2Component"] },
    { path: 'step3', component: _step3_step3_component__WEBPACK_IMPORTED_MODULE_12__["Step3Component"] },
    { path: 'step4', component: _step4_step4_component__WEBPACK_IMPORTED_MODULE_13__["Step4Component"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_9__["ReserveComponent"],
                _step1_step1_component__WEBPACK_IMPORTED_MODULE_10__["Step1Component"],
                _step2_step2_component__WEBPACK_IMPORTED_MODULE_11__["Step2Component"],
                _step3_step3_component__WEBPACK_IMPORTED_MODULE_12__["Step3Component"],
                _step4_step4_component__WEBPACK_IMPORTED_MODULE_13__["Step4Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_3__["RecaptchaModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(appRoutes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  position: fixed;\n    width: 100%;\n    bottom: 0;\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n    <div class=\"copyright\">\n    <div class=\"container\">\n    <ul class=\"float-right m-0 list-inline mobile-block\">\n    <li><a href=\"/hdb/about/#termscond\">الشروط والأحكام</a></li>\n    <li>•</li>\n    <li><a href=\"/hdb/about/#privacy\">الخصوصية</a></li>\n    </ul>\n\n    <div>© 2018 جميع الحقوق محفوظة لبنك التعمير والإسكان</div>\n\n    </div>\n    </div>\n    </footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul#topMain li a {\n  cursor: pointer;\n}\n#header.fixed {\n  position: fixed;\n  border-bottom: rgba(0,0,0,0.08) 1px solid;\n}\n@media (min-width: 992px){\n.navbar-toggleable-md {\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n}\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <div id=\"header\" class=\"navbar-toggleable-md sticky clearfix\">\n    <div id=\"topNav\">\n      <div class=\"container\">\n        <a class=\"logo float-left col-lg-5 col-md-6 col-sm-4 col-xs-9\">\n          <img class=\"img-fluid\" src=\"../../assets/img/logo.png\" alt=\"\" />\n          <img class=\"img-fluid\" src=\"../../assets/img/logo.png\" alt=\"\" />\n        </a>\n        <a class=\"logo float-right col-lg-5 col-md-6 col-sm-4 col-xs-9\" >\n          <img class=\"img-fluid\" src=\"../../assets/img/UrbanCommunitiesAuthority.png\" alt=\"\" style=\"float: left;\"  />\n          <img class=\"img-fluid\" src=\"../../assets/img/UrbanCommunitiesAuthority.png\" alt=\"\" style=\"float: left;\" />\n        </a>\n\n        <div class=\"navbar-collapse collapse float-left nav-main-collapse submenu-dark\">\n          <nav class=\"nav-main\">\n            <ul *ngIf=\"!auth\" id=\"topMain\" class=\"nav nav-pills nav-main\">\n              <li class=\"active\">\n                <a class=\"fs-15\" >الرئيسية</a>\n              </li>\n              <li class=\"active\">\n                <a class=\"fs-15\" >المشاريع</a>\n              </li>\n              <li class=\"active\">\n                <a class=\"fs-15\">الأسئلة الشائعة</a>\n              </li>\n              <li class=\"active\">\n                <a class=\"fs-15\">عن الموقع</a>\n              </li>\n\n              <li class=\"active\">\n                <a class=\"fs-15\">تسجيل مستخدم جديد</a>\n              </li>\n              <li class=\"active\">\n                <a class=\"fs-15\" routerLink=\"/login\" >دخول مستخدم حالي</a>\n              </li>\n            </ul>\n            <ul *ngIf=\"auth\" id=\"topMain\" class=\"nav nav-pills nav-main\">\n              <li class=\"active\">\n                <a class=\"fs-15\" >الرئيسية</a>\n              </li>\n              <li class=\"active\">\n                <a class=\"fs-15\" >المشاريع</a>\n              </li>\n              <li class=\"active\">\n                <a class=\"fs-15\">الإستعلام</a>\n              </li>\n              <li class=\"active\">\n                <a class=\"fs-15\">استرداد مقدم الدفع</a>\n              </li>\n\n              <li class=\"active\">\n                <a class=\"fs-15\">الاسئله الشائعه</a>\n              </li>\n              <li class=\"active\">\n                <a class=\"fs-15\">عن الموقع</a>\n              </li>\n              <li class=\"active\">\n                <a class=\"fs-15\" (click)=\"logOut()\" >تسجيل الخروج</a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    // logged: boolean;
    function HeaderComponent(router) {
        this.router = router;
        // this.logged = this.auth;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logOut = function () {
        this.auth = false;
        localStorage.clear();
        this.router.navigateByUrl('/home');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "auth", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section .nav-pills {\n  display: inline-block;\n}\n.mb-60 {\n  margin-bottom: 60px !important;\n}\n.nav>li {\n  position: relative;\n}\nsection .nav-pills>li>a {\n  padding: 6px 15px;\n  margin-bottom: 6px;\n}\nsection .nav-pills>li>a, section .nav-pills>li.active>a:hover, section .nav-pills>li.active>a {\n  color: #111;\n}\nimg.calender {\n  width: 4%;\n    margin-left: 14px;\n}\n.open > .dropdown-toggle.btn-primary, .show > .btn-primary.dropdown-toggle, .btn-primary, .btn-primary:active, .btn-primary:focus, .btn-primary:hover.pagination > .active > a, .pagination > .active > a:hover {\n  border-color: rgb(138, 185, 51);\n}\nh3, .h3 {\n  font-size: 1.45rem;\n}\nh4, .h4 {\n  font-size: 1.2rem;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [auth]=\"logged\"></app-header>\n<div>\n  <img class=\"img-fluid\" alt=\"Responsive image\" src=\"../../assets/img/slider.png\" alt=\"\">\n</div>\n<section class=\"page-header page-header-xs\">\n  <div class=\"container\">\n    <h1>المشاريع المتاحة</h1>\n  </div>\n</section>\n\n<section id=\"projects\">\n  <div class=\"container\">\n    <div class=\"portfolio-gutter\">\n      <ul class=\"nav nav-pills mb-60\">\n        <li class=\"active\">\n          <a class=\"pointer\">كل المشاريع</a>\n        </li>\n        <li>\n          <a class=\"pointer\">وحدات سكنية</a>\n        </li>\n        <li>\n          <a class=\"pointer\">أراضي</a>\n        </li>\n      </ul>\n    </div>\n    <div id=\"projectsDiv\" class=\"mix-grid\">\n      <div>\n        <br>\n        <div class=\"row mix mix_all\" style=\"display: block;  opacity: 1;\">\n          <div class=\"col-md-7\">\n            <img src=\"../../assets/img/thumb1.jpeg\" class=\"img-fluid w-100\" alt=\"Responsive image\">\n          </div>\n          <div class=\"col-md-5\">\n            <h2 style=\"margin-bottom: 32px\">\n              <a class=\"pointer\">قطع أراضي الأكثر تمييز</a>\n            </h2>\n            <a class=\"green pointer\">أراضى</a>\n            <div class=\"mt-30\" style=\"margin-top: 32px\">\n              <p>قطع أراضي\" عدد (891) بمدن( القاهرة الجديدة - الشروق - دمياط الجديدة - العبور - أسوان الجديدة - بدر - أكتوبر\n                - الشيخ زايد - بني سويف الجديدة - برج العرب الجديدة - العاشر من رمضان - سوهاج الجديدة - 15 مايو)</p>\n              <ul class=\"portfolio-detail-list list-unstyled m-0 font-weight-lighter\">\n\n                <li>\n                  <img class=\"calender\" src=\"../../assets/img/calender.png\" alt=\"\">\n                  <span class=\"lighter\">تاريخ فتح باب التقدم:</span>\n                  <span class=\"lighter\">07 أبريل 2019</span>\n                </li>\n                <li>\n                  <img class=\"calender\" src=\"../../assets/img/calender.png\" alt=\"\">\n                  <span class=\"lighter\">تاريخ نهاية الحجز :</span>\n                  <span class=\"lighter\">09 مايو 2019</span>\n                </li>\n\n              </ul>\n              <br>\n              <a class=\"btn btn-teal btn-lg fs-17 pointer\" target=\"_bidReq\"> كراسة الشروط</a>\n              <a style=\"margin-right: 20px;\" (click)=\"checkAndGo()\" class=\"btn green-bg white btn-lg fs-17 pointer\">أرغب في التقدم</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <br>\n    <br>\n\n    <div id=\"projectsDiv\" class=\"mix-grid\">\n      <div>\n        <br>\n        <div class=\"row mix mix_all\" style=\"display: block;  opacity: 1;\">\n          <div class=\"col-md-7\">\n            <img src=\"../../assets/img/thumb2.jpeg\" class=\"img-fluid w-100\" alt=\"Responsive image\">\n          </div>\n          <div class=\"col-md-5\">\n            <h2 style=\"margin-bottom: 32px\">\n              <a class=\"pointer\">مشروع الأراضي المتميزة\n              </a>\n            </h2>\n            <a class=\"green pointer\">أراضى</a>\n            <div class=\"mt-30\" style=\"margin-top: 32px\">\n              <p>قطع أراضي إسكان متميزة بعدد(1091) قطعة بمدن (برج العرب/سوهاج الجديدة/السادات/العاشر /أكتوبر الجديدة/اسوان الجديدة/بدر/أسيوط\n                الجديدة/قنا الجديدة/طيبة الجديدة/غرب قنا/غرب أسيوط/الفيوم الجديدة)</p>\n              <ul class=\"portfolio-detail-list list-unstyled m-0 font-weight-lighter\">\n\n                <li>\n                  <img class=\"calender\" src=\"../../assets/img/calender.png\" alt=\"\">\n                  <span class=\"lighter\">تاريخ فتح باب التقدم:</span>\n                  <span class=\"lighter\">07 أبريل 2019</span>\n                </li>\n                <li>\n                  <img class=\"calender\" src=\"../../assets/img/calender.png\" alt=\"\">\n                  <span class=\"lighter\">تاريخ نهاية الحجز :</span>\n                  <span class=\"lighter\">07 مايو 2019</span>\n                </li>\n\n              </ul>\n              <br>\n              <a class=\"btn btn-teal btn-lg fs-17 pointer\" target=\"_bidReq\"> كراسة الشروط</a>\n              <a style=\"margin-right: 20px;\" class=\"btn green-bg white btn-lg fs-17 pointer\">أرغب في التقدم</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<br>\n<div class=\"alert alert-transparent bordered-bottom m-0\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-9 col-sm-12\">\n        <h3>للمزيد من المعلومات،\n          <a style=\"color: #0074d9 !important;\" class=\"text-blue pointer\">شاهد الفيديو التوضيحي</a> أو إتصل بنا على\n          <span>\n            <b>\n              <a class=\"green\">19995</a>\n            </b>\n          </span>\n          وسوف نقوم بالرد عليكم</h3>\n        <h4>بنك التعمير والإسكان....بنك كبير والأول في التعمير</h4>\n      </div>\n    </div>\n  </div>\n</div>\n\n<br>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.logged = false;
        this.logged = JSON.parse(localStorage.getItem('userLoggedIn'));
        console.log(this.logged);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.checkAndGo = function () {
        if (this.logged) {
            this.router.navigateByUrl('/reserve');
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-static {\n  text-align: right;\n  background-color: rgba(0, 0, 0, 0.05);\n  padding: 30px !important;\n  /* border-top: 3px solid transparent; */\n  border-radius: 3px;\n}\n.box-static.box-border-top {\n  border-top: 3px solid #8ab933;\n}\n.fs-20 {\n  font-size: 20px !important;\n}\nh2{\n  margin: 0px 0px 32px;\n}\n.mb-30 {\n  margin-bottom: 30px !important;\n}\n.box-static .box-title {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\nform label {\n  font-weight: normal;\n}\n.form-control {\n  box-shadow: none;\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgb(221, 221, 221);\n  -o-border-image: initial;\n     border-image: initial;\n  border-radius: 3px;\n  height: 40px;\n}\nbutton:disabled,\nbutton[disabled]{\n  border: 1px solid #cccccc;\n  background-color: #cccccc!important;\n  color: #666666!important;\n}\n@media (min-width: 992px) {\n  .offset-md-3 {\n    margin-right: 25%;\n    margin-left: 0px;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [auth]=\"false\"></app-header>\n<section style=\"padding: 20px\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-md-6 offset-md-3\">\n        <div class=\"box-static box-border-top p-30\">\n          <div class=\"box-title mb-30\">\n            <h2 class=\"fs-20\">دخول مستخدم حالي</h2>\n          </div>\n          <div class=\"clearfix\">\n              <div class=\"form-group\">\n                <label class=\"label \">الرقم القومي</label>\n                <input type=\"text\"\n                name=\"userId\"\n                [(ngModel)]=\"userId\"\n                (ngModelChange)=\"getuserId(userId)\"\n                class=\"form-control\"\n                placeholder=\"الرقم القومي\"\n                required >\n                <div class=\"help-block with-errors\" style=\"color :red\"></div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"label \">كلمة المرور</label>\n                <input type=\"password\"\n                name=\"userpw\"\n                [(ngModel)]=\"userpw\"\n                (ngModelChange)=\"getuserpw(userpw)\"\n                class=\"form-control\" placeholder=\"كلمة المرور\" required>\n                <span toggle=\"#password\" class=\"fa fa-fw fa-eye field-icon toggle-password\" style=\"margin-left: 5px;\"></span>\n                <div class=\"help-block with-errors\" style=\"color :red\"></div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-3 col-sm-6 col-xs-6\">\n                  <button (click)=\"onSubmits()\" [disabled]=\"!userId || !userpw\" class=\"btn green-bg white green-border\">الدخول</button>\n                </div>\n                <div class=\"col-md-1 col-sm-6 col-xs-6 text-center\">\n\n                </div>\n                <div class=\"col-md-8 col-sm-6 col-xs-6 text-center\">\n                  <div class=\"form-tip pt-10\">\n                    <a class=\"green\" style=\"font-weight: bold;\">نسيت كلمة المرور / ارسل كلمة مرور جديدة؟</a>\n                  </div>\n                </div>\n              </div>\n              <small *ngIf=\"userIdStatus === false || userpwStatus === false\" class=\"text-danger\">الرقم القومي او كلمة المرور غير صحيحه </small>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users-auth.service */ "./src/app/users-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, usersAuth) {
        this.router = router;
        this.usersAuth = usersAuth;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.idsList = this.usersAuth.idsList;
        this.pwList = this.usersAuth.pwList;
    };
    LoginComponent.prototype.onSubmits = function () {
        var _this = this;
        this.userIdStatus = this.idsList.some(function (x) { return x === _this.userId; });
        this.userpwStatus = this.pwList.some(function (x) { return x === _this.userpw; });
        this.userAuthObjectIndex = this.idsList.indexOf(this.userId);
        // localStorage.setItem('userObjectName', this.userAuthObjectIndex);
        this.userLoggedIn = this.userIdStatus && this.userpwStatus;
        if (this.userLoggedIn) {
            localStorage.setItem('userLoggedIn', 'true');
            this.usersAuth.saveUser(this.userAuthObjectIndex);
            this.router.navigateByUrl('/home');
        }
    };
    LoginComponent.prototype.getuserId = function (userId) {
        this.userId = userId;
    };
    LoginComponent.prototype.getuserpw = function (userpw) {
        this.userpw = userpw;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _users_auth_service__WEBPACK_IMPORTED_MODULE_2__["UsersAuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/reserve/reserve.component.css":
/*!***********************************************!*\
  !*** ./src/app/reserve/reserve.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.heading-title.heading-border {\n  padding-right: 15px;\n  text-align: right;\n  border-left: 0px;\n  border-right: 5px solid rgb(204, 204, 204);\n  padding-left: 15px;\n}\ndiv.heading-title {\n  position: relative;\n  margin-bottom: 40px;\n}\ndiv.heading-title h2 {\n  padding-right: 0px !important;\n    padding-left: 15px !important;\n}\np {\n  margin-bottom: 30px;\n}\ndiv.cond h3 {\n  border: 1px solid rgb(204, 204, 204);\n    margin-top: 30px;\n    padding: 13px 20px;\n    font-size: 15px;\n    color: rgb(51, 51, 51);\n    cursor: pointer;\n    font-size: 16px;\n}\ndiv.cond p {margin-bottom: 0}\nbutton.extract {\n  background-color: #6c6d70;\n    color: #FFF !important;\n    margin-left: 3px;\n}\n"

/***/ }),

/***/ "./src/app/reserve/reserve.component.html":
/*!************************************************!*\
  !*** ./src/app/reserve/reserve.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [auth]=\"true\"></app-header>\n<div class=\"wrapper\">\n  <section class=\"page-header page-header-xs\" id=\"Reg\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <h1>تفاصيل المشروع</h1>\n        <h1>&nbsp;-&nbsp;\n          <span>قطع أراضي الأكثر تمييز</span>\n        </h1>\n      </div>\n\n    </div>\n  </section>\n  <section class=\"mb-5\" style=\"padding: 30px\">\n    <div class=\"container\">\n      <div class=\"row m-0\">\n        <div class=\"col-md-7 col-sm-7\">\n          <div class=\"heading-title heading-border\">\n            <h2>\n              <a>قطع أراضي الأكثر تمييز</a>\n            </h2>\n            <ul class=\"list-inline categories m-0\">\n              <a class=\"green pointer\">أراضى</a>\n            </ul>\n            <div class=\"mt-2\">\n            <button class=\"btn extract\">أستخرج رقم الاستماره</button>\n            <button routerLink=\"/step1\" class=\"btn green-bg white green-border\">احجز الآن</button>\n          </div>\n          </div>\n\n          <p>قطع أراضي\" عدد (891) بمدن( القاهرة الجديدة - الشروق - دمياط الجديدة - العبور - أسوان الجديدة - بدر - أكتوبر - الشيخ\n            زايد - بني سويف الجديدة - برج العرب الجديدة - العاشر من رمضان - سوهاج الجديدة - 15 مايو)</p>\n\n          <br>\n        </div>\n        <div class=\"col-md-5 col-sm-5 pl-0\">\n          <img src=\"../../assets/img/reserve-details.png\" class=\"w-100\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"row m-0\">\n        <div class=\"cond\">\n          <h3>الشروط والأحكام</h3>\n          <p>\n            1. يقر المتقدم للحجز باطلاعه على كراسة الشروط وعلمه بكل ما جاء بها وقبوله لكافة الاشتراطات الموجودة بها.\n          </p>\n          <p>\n            2. يقر المتقدم للحجز باطلاعه على الشروط والاحكام الخاصة بالحجز الإلكتروني وعلمه وقبوله لها.\n          </p>\n          <p>\n            3. يقر المتقدم للحجز بمسئولياته الكاملة على الحفاظ على اسم المستخدم وكلمة السر الخاصة به على الموقع الالكتروني. وكذلك مسئولياته\n            الكاملة على كافة الاحداث التي تتم من خلال اسم المستخدم الممنوح له.\n          </p>\n          <p>\n            4. تعديل بيانات حجز الأراضي مسموح به اثناء الادخال فقط قبل ارسال طلب التسجيل.\n          </p>\n        </div>\n        <div class=\"cond w-100\">\n          <h3 style=\"color :#ff4848\">تنويه </h3>\n          <p>\n            1 - تم تعديل البند رقم (8) فى الأشتراطات العامة بكراسة الشروط لتصبح المهلة لاستخراج التراخيص اللازمة للبناء (5 سنوات) بدلا\n            من (3 سنوات) .\n          </p>\n          <p>\n            2 – المساحة قابلة للعجز أو الزيادة و العبرة بمحضر الاستلام .\n\n          </p>\n        </div>\n        <img src=\"../../assets/img/reserve-img.jpeg\" class=\"img-fluid mt-3\" alt=\"\">\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/reserve/reserve.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reserve/reserve.component.ts ***!
  \**********************************************/
/*! exports provided: ReserveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReserveComponent", function() { return ReserveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReserveComponent = /** @class */ (function () {
    function ReserveComponent() {
    }
    ReserveComponent.prototype.ngOnInit = function () {
    };
    ReserveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reserve',
            template: __webpack_require__(/*! ./reserve.component.html */ "./src/app/reserve/reserve.component.html"),
            styles: [__webpack_require__(/*! ./reserve.component.css */ "./src/app/reserve/reserve.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReserveComponent);
    return ReserveComponent;
}());



/***/ }),

/***/ "./src/app/step1/step1.component.css":
/*!*******************************************!*\
  !*** ./src/app/step1/step1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.stepA {\n  border: 1px solid rgb(204, 204, 204);\n    border-radius: 6px;\n    padding: 20px 0;\n    margin-top: 40px;\n}\nsection.stepB {\n  border: 1px solid rgb(204, 204, 204);\n    border-radius: 6px;\n    padding: 20px 0;\n    margin-top: 40px;\n    padding-top: 0;\n}\n.cell-detail {\n  line-height: 40px;\n    padding-right: 20px;\n    border-radius: 0.25rem;\n    font-size: 16px;\n    background-color: rgba(0, 0, 0, 0.1) !important;\n}\nbutton.nextbtn {\n  margin-bottom: 110px;\n    margin-top: 20px;\n    padding: 6px 25px;\n}\nbutton:disabled,\nbutton[disabled]{\n  border: 1px solid #cccccc;\n  background-color: #cccccc!important;\n  color: #666666!important;\n}\nngb-datepicker {\n  width: 235px!important;\n}\n"

/***/ }),

/***/ "./src/app/step1/step1.component.html":
/*!********************************************!*\
  !*** ./src/app/step1/step1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [auth]=\"true\"></app-header>\n<div class=\"wrapper\">\n  <div class=\"container\">\n    <div class=\"text-center\">\n  <img src=\"../../assets/img/step1.jpg\" alt=\"\">\n</div>\n    <section class=\"stepA\">\n        <div class=\"row m-0\">\n          <div class=\"col-6\">\n            <h3 class=\"font-16\">الرقم القومي</h3>\n            <h4 class=\"cell-detail h-40p\">{{natId}}</h4>\n            <div class=\"form-group mt-3\">\n                <label for=\"app-name\">اسم المتقدم طبقا للرقم القومي*</label>\n                <input type=\"text\"\n                name=\"appName\"\n                 class=\"form-control h-40p\" id=\"app-name\" placeholder=\"{{name}}\">\n              </div>\n              <div class=\"form-group mt-3\">\n                  <label for=\"app-no\">الرقم المطبوع اسفل الصورة بالرقم القومي*</label>\n                  <input type=\"text\" class=\"form-control h-40p\" id=\"app-no\" placeholder=\"{{noPrintedBelowImgInID}}\">\n                </div>\n          </div>\n          <div class=\"col-6\">\n              <h3 class=\"font-16\">تاريخ الميلاد</h3>\n              <h4 class=\"cell-detail h-40p\">- - -</h4>\n              <div class=\"form-group mt-3\">\n                  <label for=\"nIDImg\">ارفاق صورة الرقم القومي</label>\n                  <input type=\"file\" class=\"form-control-file\" id=\"nIDImg\">\n                  <p style=\"font-size: 12px;\" class=\"m-0\">برجاء ارفاق صورة وجهي البطاقه في نفس الملف</p>\n                  <p style=\"font-size: 12px;\" class=\"m-0\">يسمح فقط بالملفات من نوع Jpg, Jpeg, pdf بحد اقصي ٣ ميجا بايت</p>\n                </div>\n                <img src=\"../../assets/img/nID.jpg\" alt=\"\">\n          </div>\n\n        </div>\n      </section>\n\n      <section class=\"stepB\">\n          <h4 class=\"green-bg white py-3 pl-2\"> بيانات سداد جدية الحجز و طريقة السداد</h4>\n          <div class=\"row mt-3 mx-0\">\n\n            <div class=\"col-6\">\n              <div class=\"form-group mt-3\">\n                  <label for=\"resAmount\">مبلغ جدية الحجز*</label>\n                  <input type=\"text\"\n                  name=\"resAmount\"\n                [(ngModel)]=\"resAmount\"\n                (ngModelChange)=\"getResAmount(resAmount)\"\n                  class=\"form-control h-40p\" required placeholder=\"\">\n                  <small>  يرجي التاكد انه نفس القيمه المذكوره في صورة مستند السداد</small>\n                  <br>\n                  <small *ngIf=\"!resAmountTrue\" class=\"text-danger\">م ارقام بحد اقصى 20 </small>\n                </div>\n                <div class=\"form-group mt-3\">\n                    <label for=\"res-date\">تاريخ ايصال السداد *</label>\n\n                    <input class=\"form-control h-40p\" placeholder=\"\"\n                      name=\"dp\" [(ngModel)]=\"model\"\n                      (ngModelChange)=\"getdp($event)\"\n                      (click)=\"d.toggle()\" ngbDatepicker #d=\"ngbDatepicker\">\n\n\n                  </div>\n                  <div class=\"form-group mt-3\">\n                      <label for=\"nIDImg\">ارفاق صورة مستند السداد</label>\n                      <input type=\"file\" class=\"form-control-file\" id=\"nIDImg\">\n                      <p style=\"font-size: 12px;\" class=\"m-0\">يسمح فقط بالملفات من نوع Jpg, Jpeg, pdf بحد اقصي ٣ ميجا بايت</p>\n                    </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group mt-3\">\n                    <label for=\"pay-way\">طريقةالسداد</label>\n                    <select [(ngModel)]=\"payWayOption\"\n                    (change)=\"fireSelection()\" name=\"first\" class=\"form-control\" id=\"pay-way\">\n                      <option *ngFor=\"let payWay of payWayList\">{{payWay.name}}</option>\n                    </select>\n                  </div>\n                <div class=\"form-group mt-3\">\n                    <label for=\"res-num\">رقم مستند السداد *</label>\n                    <input type=\"text\"\n                    name=\"resNum\"\n                [(ngModel)]=\"resNum\"\n                (ngModelChange)=\"getResNum(resNum)\"\n                    class=\"form-control h-40p\" id=\"res-num\" placeholder=\"\">\n                    <small>  يرجي عدم ادخال رموز ما عدا '/' و '-'</small>\n                  </div>\n            </div>\n\n          </div>\n        </section>\n\n        <section class=\"stepB\">\n            <h4 class=\"green-bg white py-3 pl-2\"> بيانات شخصيه</h4>\n            <div class=\"row mt-3 mx-0\">\n              <div class=\"col-6\">\n                  <h3 class=\"font-16\">بلد الجنسيه </h3>\n                  <h4 class=\"cell-detail h-40p\">مصر</h4>\n\n                  <h3 class=\"font-16 mt-4\">رقم التليفون  </h3>\n                  <h4 class=\"cell-detail h-40p\">{{phoneNo}}</h4>\n\n                  <h3 class=\"font-16 mt-4\">محل الاقامه </h3>\n                  <h4 class=\"cell-detail h-40p\">مصر</h4>\n\n                  <h3 class=\"font-16 mt-4\">العنوان  </h3>\n                  <h4 class=\"cell-detail h-40p\" style=\"line-height: 21px;\">{{address}}</h4>\n\n                  <h3 class=\"font-16 mt-4\">اسم الزوج/الزوجه طبقا للرقم القومي  </h3>\n                  <h4 class=\"cell-detail h-40p\">{{partnerName}}</h4>\n\n                  <h3 class=\"font-16 mt-4\">صورة الرقم القومي </h3>\n                  <h4 class=\"cell-detail h-40p\">file.jpg </h4>\n              </div>\n              <div class=\"col-6\">\n                  <h3 class=\"font-16\">رقم المحمول   </h3>\n                  <h4 class=\"cell-detail h-40p\">{{phoneNo}}</h4>\n\n                  <h3 class=\"font-16 mt-4\">عنوان البريد الالكتروني </h3>\n                  <h4 class=\"cell-detail h-40p\">{{mail}}</h4>\n\n                  <h3 class=\"font-16 mt-4\">المحافظة </h3>\n                  <h4 class=\"cell-detail h-40p\">الشرقيه</h4>\n\n                  <h3 class=\"font-16 mt-4\">الحاله الاجتماعيه</h3>\n                  <h4 class=\"cell-detail h-40p\">{{socialStuts}}</h4>\n\n                  <h3 class=\"font-16 mt-4\">الرقم القومي للزوج / الزوجه </h3>\n                  <h4 class=\"cell-detail h-40p\">{{partnerId}}</h4>\n\n                  <h3 class=\"font-16 mt-4\">صورة الرقم القومي للزوج / الزوجه</h3>\n                  <h4 class=\"cell-detail h-40p\">&nbsp;</h4>\n              </div>\n\n            </div>\n          </section>\n\n          <button (click)=\"step1Next()\" [disabled]=\"!payWayOption || !model || !resAmount || !resNum || !resAmountTrue\" class=\"btn green-bg white nextbtn\">التالي</button>\n\n      </div>\n\n    </div>\n\n"

/***/ }),

/***/ "./src/app/step1/step1.component.ts":
/*!******************************************!*\
  !*** ./src/app/step1/step1.component.ts ***!
  \******************************************/
/*! exports provided: Step1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Component", function() { return Step1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Step1Component = /** @class */ (function () {
    function Step1Component(router) {
        this.router = router;
        this.resAmountTrue = true;
        this.payWayList = [
            { name: 'Swift', value: 1 },
            { name: 'ACH', value: 2 },
            { name: 'تحویل داخلى بنك التعمیر والاسكان', value: 3 }
        ];
        this.natId = localStorage.getItem('natID');
        this.phoneNo = localStorage.getItem('phoneNo');
        this.address = localStorage.getItem('address');
        this.partnerName = localStorage.getItem('partnerName');
        this.mail = localStorage.getItem('mail');
        this.socialStuts = localStorage.getItem('socialStuts');
        this.partnerId = localStorage.getItem('partnerId');
        this.noPrintedBelowImgInID = localStorage.getItem('noPrintedBelowImgInID');
        this.name = localStorage.getItem('name');
    }
    Step1Component.prototype.ngOnInit = function () {
    };
    Step1Component.prototype.getResNum = function (resNum) {
        this.resNum = resNum;
        localStorage.setItem('resNum', resNum);
    };
    Step1Component.prototype.getResAmount = function (resAmount) {
        this.resAmount = resAmount;
        this.resAmountTrue = (!isNaN(resAmount)) && (resAmount.toString().length <= 20);
        if (this.resAmountTrue) {
            localStorage.setItem('resAmount', resAmount);
        }
    };
    Step1Component.prototype.step1Next = function () {
        this.router.navigateByUrl('/step2');
    };
    Step1Component.prototype.getdp = function (event) {
        this.payDate = event.year + '-' + event.month + '-' + event.day;
        localStorage.setItem('payDate', this.payDate);
    };
    Step1Component.prototype.fireSelection = function () {
        localStorage.setItem('payWayOption', this.payWayOption);
    };
    Step1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step1',
            template: __webpack_require__(/*! ./step1.component.html */ "./src/app/step1/step1.component.html"),
            styles: [__webpack_require__(/*! ./step1.component.css */ "./src/app/step1/step1.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Step1Component);
    return Step1Component;
}());



/***/ }),

/***/ "./src/app/step2/step2.component.css":
/*!*******************************************!*\
  !*** ./src/app/step2/step2.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.stepA {\n  border: 1px solid rgb(204, 204, 204);\n    border-radius: 6px;\n    padding: 20px 0;\n    margin-top: 40px;\n}\nsection.stepB {\n  border: 1px solid rgb(204, 204, 204);\n    border-radius: 6px;\n    padding: 20px 0;\n    margin-top: 40px;\n    padding-top: 0;\n}\n.cell-detail {\n  line-height: 40px;\n    padding-right: 20px;\n    border-radius: 0.25rem;\n    font-size: 16px;\n    background-color: rgba(0, 0, 0, 0.1) !important;\n}\nbutton.nextbtn {\n  margin-bottom: 110px;\n    margin-top: 20px;\n    padding: 6px 25px;\n}\nbutton:disabled,\nbutton[disabled]{\n  border: 1px solid #cccccc;\n  background-color: #cccccc!important;\n  color: #666666!important;\n}\n"

/***/ }),

/***/ "./src/app/step2/step2.component.html":
/*!********************************************!*\
  !*** ./src/app/step2/step2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [auth]=\"true\"></app-header>\n<div class=\"wrapper\">\n  <div class=\"container\">\n    <div class=\"text-center\">\n      <img src=\"../../assets/img/step2.jpg\" alt=\"\">\n    </div>\n    <section class=\"stepB\">\n      <h4 class=\"green-bg white py-3 pl-2\"> بيانات الوحده السكنيه</h4>\n      <div class=\"row mt-3 mx-0\">\n\n        <div class=\"col-6\">\n          <div class=\"form-group mt-3\">\n            <label for=\"pay-way\">المحافظه *</label>\n            <select [(ngModel)]=\"gov\"\n                    (change)=\"fireSelection()\" name=\"first\" class=\"form-control\" id=\"pay-way\">\n                      <option *ngFor=\"let gov of govList\">{{gov.gov}}</option>\n                    </select>\n          </div>\n\n          <div class=\"form-group mt-3\">\n            <label for=\"pay-way\">المنطقه *</label>\n            <select [(ngModel)]=\"reg\"\n                    (change)=\"fireSelection()\" name=\"first\" class=\"form-control\" id=\"pay-way\">\n                      <option *ngFor=\"let reg of regList\">{{reg.reg}}</option>\n                    </select>\n          </div>\n          <div class=\"form-group mt-3\">\n            <label for=\"pay-way\">المجاوره *</label>\n            <select [(ngModel)]=\"adj\"\n                    (change)=\"fireSelection()\" name=\"first\" class=\"form-control\" id=\"pay-way\">\n                      <option *ngFor=\"let adj of adjList\">{{adj.adj}}</option>\n                    </select>\n          </div>\n\n          <div class=\"form-group mt-3\">\n            <label for=\"pay-way\">المساحه *</label>\n            <select [(ngModel)]=\"area\"\n                    (change)=\"fireSelection()\" name=\"first\" class=\"form-control\" id=\"pay-way\">\n                      <option *ngFor=\"let area of areaList\">{{area.area}}</option>\n                    </select>\n          </div>\n        </div>\n        <div class=\"col-6\">\n          <div class=\"form-group mt-3\">\n            <label for=\"pay-way\">المدينه *</label>\n            <select [(ngModel)]=\"city\"\n                    (change)=\"fireSelection()\" name=\"first\" class=\"form-control\" id=\"pay-way\">\n                      <option *ngFor=\"let city of cityList\">{{city.city}}</option>\n                    </select>\n          </div>\n\n\n          <div class=\"form-group mt-3\">\n            <label for=\"pay-way\">الحي *</label>\n            <select [(ngModel)]=\"neih\"\n                    (change)=\"fireSelection()\" name=\"first\" class=\"form-control\" id=\"pay-way\">\n                      <option *ngFor=\"let neih of neihList\">{{neih.neih}}</option>\n                    </select>\n          </div>\n\n          <div class=\"form-group mt-3\">\n            <label for=\"pay-way\">رقم القطعه *</label>\n            <select [(ngModel)]=\"spaceNo\"\n                    (change)=\"fireSelection()\" name=\"first\" class=\"form-control\" id=\"pay-way\">\n                      <option *ngFor=\"let spaceNo of spaceNoList\">{{spaceNo.spaceNo}}</option>\n                    </select>\n          </div>\n        </div>\n\n      </div>\n    </section>\n    <div class=\"text-center\">\n      <button (click)=\"step2Next()\"\n      [disabled]=\"!gov || !neih || !city || !area || !spaceNo || !adj || !reg\"\n      class=\"btn green-bg white nextbtn\">تاكيد </button>\n      <button class=\"btn green-bg white nextbtn mr-3\">رجوع للتعديل</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/step2/step2.component.ts":
/*!******************************************!*\
  !*** ./src/app/step2/step2.component.ts ***!
  \******************************************/
/*! exports provided: Step2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Component", function() { return Step2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Step2Component = /** @class */ (function () {
    function Step2Component(router) {
        this.router = router;
        this.govList = [
            { gov: 'cairo', value: 1 },
            { gov: 'Sohag', value: 2 },
        ]; // government
        this.areaList = [
            { area: '4995', vlaue: 1 },
            { area: '234', vlaue: 2 },
        ]; // Areas
        this.adjList = [
            { adj: '3', value: 1 },
            { adj: '4', value: 2 },
        ];
        this.regList = [
            { reg: 'الشريط المميز - شرق طريق مطار سوهاج الدولى', value: 1 },
            { reg: ' (ب)-شمال  الحديقه المركزيه', value: 2 },
        ];
        this.cityList = [
            { city: 'سوهاج', value: 1 },
            { city: 'city2', value: 2 },
        ];
        this.neihList = [
            { neih: ' الحى الرابع - مشروع بيت الوطن', value: 1 },
            { neih: ' الحى الرابع - مشروع بيت الوطن', value: 2 },
        ];
        this.spaceNoList = [
            { spaceNo: '177', value: 1 },
            { spaceNo: '19877', value: 2 },
        ];
    }
    Step2Component.prototype.ngOnInit = function () {
    };
    Step2Component.prototype.step2Next = function () {
        this.router.navigateByUrl('/step3');
    };
    Step2Component.prototype.fireSelection = function () {
        if (this.gov && this.neih && this.city && this.area && this.spaceNo && this.adj && this.reg) {
            console.log(this.gov, this.reg, this.neih, this.city, this.area, this.adj);
            localStorage.setItem('gov', this.gov);
            localStorage.setItem('neih', this.neih);
            localStorage.setItem('city', this.city);
            localStorage.setItem('area', this.area);
            localStorage.setItem('spaceNo', this.spaceNo);
            localStorage.setItem('adj', this.adj);
            localStorage.setItem('reg', this.reg);
        }
    };
    Step2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step2',
            template: __webpack_require__(/*! ./step2.component.html */ "./src/app/step2/step2.component.html"),
            styles: [__webpack_require__(/*! ./step2.component.css */ "./src/app/step2/step2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Step2Component);
    return Step2Component;
}());



/***/ }),

/***/ "./src/app/step3/step3.component.css":
/*!*******************************************!*\
  !*** ./src/app/step3/step3.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.stepA {\n  border: 1px solid rgb(204, 204, 204);\n  border-radius: 6px;\n  padding: 20px 0;\n  margin-top: 40px;\n}\nsection.stepB {\n  border: 1px solid rgb(204, 204, 204);\n  border-radius: 6px;\n  padding: 20px 0;\n  margin-top: 40px;\n  padding-top: 0;\n}\n.cell-detail {\n  line-height: 40px;\n  padding-right: 20px;\n  border-radius: 0.25rem;\n  font-size: 16px;\n  background-color: rgba(0, 0, 0, 0.1) !important;\n}\nbutton.nextbtn {\n  margin-bottom: 110px;\n  margin-top: 20px;\n  padding: 6px 25px;\n}\ndiv.promise {\n  background-color: #fdf7dd;\n  margin-top: 19px;\n}\ndiv.promise label {\n  color: #000;\n    margin-right: 12px;\n    padding: 10px;\n}\ndiv.promise input {\n  margin-top: 12px;\n}\nbutton:disabled,\nbutton[disabled]{\n  border: 1px solid #cccccc;\n  background-color: #cccccc!important;\n  color: #666666!important;\n}\n"

/***/ }),

/***/ "./src/app/step3/step3.component.html":
/*!********************************************!*\
  !*** ./src/app/step3/step3.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [auth]=\"true\"></app-header>\n<div class=\"wrapper\">\n  <div class=\"container\">\n    <div class=\"text-center\">\n      <img src=\"../../assets/img/step3.jpg\" alt=\"\">\n    </div>\n    <section class=\"stepA\">\n      <div class=\"row m-0\">\n        <div class=\"col-6\">\n          <h3 class=\"font-16\">الرقم القومي</h3>\n          <h4 class=\"cell-detail h-40p\">{{natId}}</h4>\n          <h3 class=\"font-16\">تاريخ الميلاد</h3>\n          <h4 class=\"cell-detail h-40p\">- - -</h4>\n        </div>\n        <div class=\"col-6\">\n          <h3 class=\"font-16\">اسم المتقدم طبقا للرقم القومي</h3>\n          <h4 class=\"cell-detail h-40p\">{{name}}</h4>\n          <h3 class=\"font-16\">الرقم المطبوع اسفل الصورة بالرقم القومي</h3>\n          <h4 class=\"cell-detail h-40p\">{{noPrintedBelowImgInID}}</h4>\n\n        </div>\n\n      </div>\n    </section>\n\n    <section class=\"stepB\">\n      <h4 class=\"green-bg white py-3 pl-2\"> بيانات سداد جدية الحجز و طريقة السداد</h4>\n      <div class=\"row mt-3 mx-0\">\n\n        <div class=\"col-6\">\n          <h3 class=\"font-16\">مبلغ جدية الحجز</h3>\n          <h4 class=\"cell-detail h-40p\">{{resAmount}}</h4>\n\n          <h3 class=\"font-16\">تاريخ ايصال السداد</h3>\n          <h4 class=\"cell-detail h-40p\">{{payDate}}</h4>\n\n          <h3 class=\"font-16\">صورة مستند السداد</h3>\n          <h4 class=\"cell-detail h-40p\">File.jpg</h4>\n\n        </div>\n        <div class=\"col-6\">\n\n          <h3 class=\"font-16\">طريقةالسداد</h3>\n          <h4 class=\"cell-detail h-40p\">{{payWayOption}}</h4>\n\n          <h3 class=\"font-16\">رقم مستند السداد</h3>\n          <h4 class=\"cell-detail h-40p\">{{resNum}}</h4>\n        </div>\n\n      </div>\n    </section>\n\n    <section class=\"stepB\">\n      <h4 class=\"green-bg white py-3 pl-2\"> بيانات شخصيه</h4>\n      <div class=\"row mt-3 mx-0\">\n        <div class=\"col-6\">\n          <h3 class=\"font-16\">بلد الجنسيه </h3>\n          <h4 class=\"cell-detail h-40p\">مصر</h4>\n\n          <h3 class=\"font-16 mt-4\">رقم التليفون </h3>\n          <h4 class=\"cell-detail h-40p\">{{phoneNo}}</h4>\n\n          <h3 class=\"font-16 mt-4\">محل الاقامه </h3>\n          <h4 class=\"cell-detail h-40p\">مصر</h4>\n\n          <h3 class=\"font-16 mt-4\">العنوان </h3>\n          <h4 class=\"cell-detail h-40p\" style=\"line-height: 21px;\">{{address}}</h4>\n\n          <h3 class=\"font-16 mt-4\">اسم الزوج/الزوجه طبقا للرقم القومي </h3>\n          <h4 class=\"cell-detail h-40p\">{{partnerName}}</h4>\n\n          <h3 class=\"font-16 mt-4\">صورة الرقم القومي </h3>\n          <h4 class=\"cell-detail h-40p\">file.jpg </h4>\n        </div>\n        <div class=\"col-6\">\n          <h3 class=\"font-16\">رقم المحمول </h3>\n          <h4 class=\"cell-detail h-40p\">{{phoneNo}}</h4>\n\n          <h3 class=\"font-16 mt-4\">عنوان البريد الالكتروني </h3>\n          <h4 class=\"cell-detail h-40p\">{{mail}}</h4>\n\n          <h3 class=\"font-16 mt-4\">المحافظة </h3>\n          <h4 class=\"cell-detail h-40p\">الشرقيه</h4>\n\n          <h3 class=\"font-16 mt-4\">الحاله الاجتماعيه</h3>\n          <h4 class=\"cell-detail h-40p\">{{socialStuts}}</h4>\n\n          <h3 class=\"font-16 mt-4\">الرقم القومي للزوج / الزوجه </h3>\n          <h4 class=\"cell-detail h-40p\">{{partnerId}}</h4>\n\n          <h3 class=\"font-16 mt-4\">صورة الرقم القومي للزوج / الزوجه</h3>\n          <h4 class=\"cell-detail h-40p\">File.jpg</h4>\n        </div>\n\n      </div>\n    </section>\n\n    <section class=\"stepB\">\n        <h4 class=\"green-bg white py-3 pl-2\"> بيانات الوحده السكنيه</h4>\n        <div class=\"row mt-3 mx-0\">\n          <div class=\"col-6\">\n            <h3 class=\"font-16\">المحافظه </h3>\n            <h4 class=\"cell-detail h-40p\">مصر</h4>\n\n            <h3 class=\"font-16 mt-4\">المنطقه </h3>\n            <h4 class=\"cell-detail h-40p\">{{reg}}</h4>\n\n            <h3 class=\"font-16 mt-4\">المجاوره </h3>\n            <h4 class=\"cell-detail h-40p\">{{adj}}</h4>\n\n            <h3 class=\"font-16 mt-4\">رقم العماره  </h3>\n            <h4 class=\"cell-detail h-40p\">???</h4>\n\n            <h3 class=\"font-16 mt-4\">مساحة الوحده  </h3>\n            <h4 class=\"cell-detail h-40p\">{{area}}</h4>\n\n            <h3 class=\"font-16 mt-4\">رقم الدور </h3>\n            <h4 class=\"cell-detail h-40p\">??? </h4>\n          </div>\n          <div class=\"col-6\">\n            <h3 class=\"font-16\">المدينه </h3>\n            <h4 class=\"cell-detail h-40p\">{{city}}</h4>\n\n            <h3 class=\"font-16 mt-4\">الحي </h3>\n            <h4 class=\"cell-detail h-40p\">{{neih}}</h4>\n\n            <h3 class=\"font-16 mt-4\">نوع الوحده</h3>\n            <h4 class=\"cell-detail h-40p\">???</h4>\n\n            <h3 class=\"font-16 mt-4\">رقم الوحده السكنيه</h3>\n            <h4 class=\"cell-detail h-40p\">???</h4>\n\n            <h3 class=\"font-16 mt-4\">نموذج الوحده  </h3>\n            <h4 class=\"cell-detail h-40p\">???</h4>\n\n            <h3 class=\"font-16 mt-4\">نوع الدور</h3>\n            <h4 class=\"cell-detail h-40p\">???</h4>\n          </div>\n\n        </div>\n      </section>\n      <div class=\"promise custom-control custom-checkbox\">\n          <input type=\"checkbox\"  id=\"customCheck1\" [(ngModel)]=\"checkboxValue\"\n           (change)=\"toggleEditable()\">\n          <label class=\"custom-control-label\" for=\"customCheck1\">أقر بصحة البيانات و المستندات\n             المقدمه مني و اتحمل كامل المسؤليه المدنيه والجنائيه\n             و في حالة مخالفة هذه البيانات او المستندات للحقيقه  يعتبر\n              الطلب لاغي ولا يعتد به دون ادني مسؤليه علي الجهة الاداريه او بنك التعميد و الاسكان</label>\n      </div>\n      <div class=\"text-center\">\n          <button (click)=\"step3Next()\" [disabled]=\"!checked\" style=\"background-color: #5596da\" class=\"btn white nextbtn\">ارسال الطلب</button>\n          <button style=\"background-color: #565a5b\" class=\"btn white nextbtn mr-3\">رجوع للتعديل</button>\n        </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/step3/step3.component.ts":
/*!******************************************!*\
  !*** ./src/app/step3/step3.component.ts ***!
  \******************************************/
/*! exports provided: Step3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3Component", function() { return Step3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Step3Component = /** @class */ (function () {
    function Step3Component(router) {
        this.router = router;
        this.natId = localStorage.getItem('natID');
        this.phoneNo = localStorage.getItem('phoneNo');
        this.address = localStorage.getItem('address');
        this.partnerName = localStorage.getItem('partnerName');
        this.mail = localStorage.getItem('mail');
        this.socialStuts = localStorage.getItem('socialStuts');
        this.partnerId = localStorage.getItem('partnerId');
        this.noPrintedBelowImgInID = localStorage.getItem('noPrintedBelowImgInID');
        this.name = localStorage.getItem('name');
        this.payDate = localStorage.getItem('payDate');
        this.resNum = localStorage.getItem('resNum');
        this.resAmount = localStorage.getItem('resAmount');
        this.payWayOption = localStorage.getItem('payWayOption');
        this.gov = localStorage.getItem('gov');
        this.neih = localStorage.getItem('neih');
        this.city = localStorage.getItem('city');
        this.area = localStorage.getItem('area');
        this.spaceNo = localStorage.getItem('spaceNo');
        this.adj = localStorage.getItem('adj');
        this.reg = localStorage.getItem('reg');
    }
    Step3Component.prototype.ngOnInit = function () {
    };
    Step3Component.prototype.step3Next = function () {
        this.router.navigateByUrl('/step4');
    };
    Step3Component.prototype.toggleEditable = function () {
        if (this.checkboxValue) {
            this.checked = true;
        }
        else {
            this.checked = false;
        }
    };
    Step3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step3',
            template: __webpack_require__(/*! ./step3.component.html */ "./src/app/step3/step3.component.html"),
            styles: [__webpack_require__(/*! ./step3.component.css */ "./src/app/step3/step3.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Step3Component);
    return Step3Component;
}());



/***/ }),

/***/ "./src/app/step4/step4.component.css":
/*!*******************************************!*\
  !*** ./src/app/step4/step4.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.nextbtn {\n  margin-bottom: 110px;\n    margin-top: 20px;\n    padding: 6px 25px;\n}\ndiv.w-100 {\n  background-color: rgba(0, 128, 0, 0.2);\n  color: green;\n  padding: 24px;\n  margin-top: 21px;\n  border-right: 4px solid rgba(128, 128, 128, 0.3);\n  border-radius: 5px;\n  margin-bottom: 30px;\n}\n"

/***/ }),

/***/ "./src/app/step4/step4.component.html":
/*!********************************************!*\
  !*** ./src/app/step4/step4.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [auth]=\"true\"></app-header>\n<div class=\"wrapper\">\n    <div class=\"container\">\n      <div class=\"text-center\">\n        <img src=\"../../assets/img/step4.jpg\" alt=\"\">\n      </div>\n      <div class=\"col-12\">\n        <div class=\"w-100\">\n          <h3>تمت العمليه بنجاح</h3>\n        </div>\n      </div>\n      <h4 class=\"text-center\">New 101000101</h4>\n      <h4 class=\"text-center mt-3\">برجاء نسخ رقم العمليه لاستخدامه لاحقا في الاستعلام</h4>\n\n\n      <div class=\"text-center\">\n        <button (click)=\"step4Next()\" class=\"btn green pointer nextbtn\">الرجوع للصفحه الرئيسيه  </button>\n        <button (click)=\"print()\" class=\"btn green-bg pointer white nextbtn mr-3\">اطبع الاستماره</button>\n      </div>\n    </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/step4/step4.component.ts":
/*!******************************************!*\
  !*** ./src/app/step4/step4.component.ts ***!
  \******************************************/
/*! exports provided: Step4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step4Component", function() { return Step4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Step4Component = /** @class */ (function () {
    function Step4Component(router) {
        this.router = router;
    }
    Step4Component.prototype.ngOnInit = function () {
    };
    Step4Component.prototype.step4Next = function () {
        this.router.navigateByUrl('/home');
    };
    Step4Component.prototype.print = function () {
        window.print();
    };
    Step4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step4',
            template: __webpack_require__(/*! ./step4.component.html */ "./src/app/step4/step4.component.html"),
            styles: [__webpack_require__(/*! ./step4.component.css */ "./src/app/step4/step4.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Step4Component);
    return Step4Component;
}());



/***/ }),

/***/ "./src/app/users-auth.service.ts":
/*!***************************************!*\
  !*** ./src/app/users-auth.service.ts ***!
  \***************************************/
/*! exports provided: UsersAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersAuthService", function() { return UsersAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersAuthService = /** @class */ (function () {
    function UsersAuthService() {
        this.users = [
            {
                name: 'امیره حسن محمود حسن ابراھیم',
                noPrintedBelowImgInID: 'HW8629178',
                phoneNo: '01020382605',
                mail: 'Amira__-10@outlook.com',
                address: 'شقة 3 عمارة 15 مجمع عبد المقصود امام البنك العربى الافریقیى￼￼￼￼ الدولى الارنیة العاشر من رمضان',
                socialStuts: 'متزوجة',
                partnerName: 'تامر عزوز احمد عبد الحلیم',
                partnerId: '28206041300437',
                natID: '28702141303201',
                pw: 'ZX62HLUR'
            }, {
                name: 'احمد السید عبد الفتاح عبد الرسول',
                noPrintedBelowImgInID: 'FY5420116',
                phoneNo: '01000709795',
                mail: 'AHMED_-_10@outlook.com',
                address: 'شقة 4 قطعة 508و510و512 مجاورة 12 العاشر من رمضان',
                socialStuts: 'اعزب',
                partnerName: '',
                partnerId: '',
                natID: '28605288800671',
                pw: '553Q6X66'
            }, {
                name: 'علیاء محسن محمد تھامى',
                noPrintedBelowImgInID: 'HI3541729',
                phoneNo: '01010326638',
                mail: 'Aliaa_-10@outlook.com',
                address: 'شقة 4 عمارة 15 مجمع عبد المقصود امام البنك العربى الافریقیى￼￼￼￼ الدولى الارنیة العاشر من رمضان',
                socialStuts: 'انسة',
                partnerName: '',
                partnerId: '',
                natID: '29612081700383',
                pw: 'NHPSZVCB'
            }, {
                name: 'سھیر محمد ابراھیم مرسى',
                noPrintedBelowImgInID: 'HZ3053717',
                phoneNo: '01010326632',
                mail: 'sohair_10@outlook.com',
                address: 'شقة 3 عمارة 15 مجمع عبد المقصود امام السنترال الارنیة العاشر￼￼￼￼ من رمضان',
                socialStuts: 'متزوج',
                partnerName: 'حسام الدین مصطفى السید الشافعى',
                partnerId: '25911210100854',
                natID: '26512061300944',
                pw: 'TKCETTEL'
            }, {
                name: 'سامیھ محمد ابراھیم حتحوت',
                noPrintedBelowImgInID: 'GR2837078',
                phoneNo: '01010326634',
                mail: 'samya_10@outlook.com',
                address: 'شقة 3 عمارة 15 مجمع عبد المقصود امام البنك العربى الافریقیى￼￼￼￼ الدولى الارنیة العاشر من رمضان',
                socialStuts: 'متزوج',
                partnerName: 'السید عبد الفتاح عبد الرسول محمد',
                partnerId: '24705101302151',
                natID: '25702181301421',
                pw: 'BQSLCVFT'
            }, {
                name: 'خالد السید عبد الفتاح عبد الرسول',
                noPrintedBelowImgInID: 'HD2893815',
                phoneNo: '01111651116',
                mail: 'Khaled___10@outlook.com',
                address: 'قطعة 512,510,508 مجاورة 12 العاشر من رمضان',
                socialStuts: 'اعزب',
                partnerName: '',
                partnerId: '',
                natID: '28812168800711',
                pw: 'S8DCK8KE'
            }, {
                name: 'تامر عزوز احمد عبد الحلیم',
                noPrintedBelowImgInID: 'HW8321331',
                phoneNo: '01020382605',
                mail: 'Tamer_-10@outlook.com',
                address: 'شقة 5 قطعة 508و510و512 مجاورة 12 العاشر من رمضان',
                socialStuts: 'متزوج',
                partnerName: 'امیره حسن محمود حسن ابراھیم',
                partnerId: '28702141303201',
                natID: '28206041300437',
                pw: 'VXEKB2VM'
            }, {
                name: 'باسل السید عبد الفتاح عبد الرسول',
                noPrintedBelowImgInID: 'HC6902954',
                phoneNo: '01005256440',
                mail: 'Basel__10@outlook.com',
                address: 'شقة 1 قطعة 508 مجاروة 12 العاشر من رمضان',
                socialStuts: 'اعزب',
                partnerName: '',
                partnerId: '',
                natID: '29408250101978',
                pw: '44QMWWKK'
            }, {
                name: 'السید عبد الفتاح عبد الرسول محمد',
                noPrintedBelowImgInID: 'GP5748959',
                phoneNo: '01066405924',
                mail: 'Elsayed_10@outlook.com',
                address: 'شقة 3 عمارة 15 مجمع عبد المقصود امام البنك العربى الافریقیى￼￼￼￼ الدولى الارنیة العاشر من رمضان',
                socialStuts: 'متزوج',
                partnerName: 'سامیھ محمد ابراھیم حتحوت',
                partnerId: '25702181301421',
                natID: '24705101302151',
                pw: 'JFP2ZVSX'
            }
        ];
        this.idsList = [
            this.users[0].natID, this.users[1].natID, this.users[2].natID,
            this.users[3].natID, this.users[4].natID, this.users[5].natID,
            this.users[6].natID, this.users[7].natID, this.users[8].natID
        ];
        this.pwList = [
            this.users[0].pw, this.users[1].pw, this.users[2].pw,
            this.users[3].pw, this.users[4].pw, this.users[5].pw,
            this.users[6].pw, this.users[7].pw, this.users[8].pw
        ];
    }
    UsersAuthService.prototype.saveUser = function (userIndex) {
        this.userIndex = userIndex;
        localStorage.setItem('natID', this.users[userIndex].natID);
        localStorage.setItem('pw', this.users[userIndex].pw);
        localStorage.setItem('partnerId', this.users[userIndex].partnerId);
        localStorage.setItem('socialStuts', this.users[userIndex].socialStuts);
        localStorage.setItem('address', this.users[userIndex].address);
        localStorage.setItem('mail', this.users[userIndex].mail);
        localStorage.setItem('phoneNo', this.users[userIndex].phoneNo);
        localStorage.setItem('noPrintedBelowImgInID', this.users[userIndex].noPrintedBelowImgInID);
        localStorage.setItem('name', this.users[userIndex].name);
        localStorage.setItem('partnerName', this.users[userIndex].partnerName);
    };
    UsersAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UsersAuthService);
    return UsersAuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ahmedsamir/Downloads/Work/Khaled.col/hdb-reservation/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map