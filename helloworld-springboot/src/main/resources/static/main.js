(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+NYR":
/*!************************************************!*\
  !*** ./src/app/services/navigation.service.ts ***!
  \************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavigationService {
    constructor() {
        this.page = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.popup = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    setPage(data) {
        this.page.next(data);
    }
    setPopup(data) {
        this.popup.next(data);
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(); };
NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\work\hackthon-app\src\main.ts */"zUnb");


/***/ }),

/***/ "0WvO":
/*!***********************************************!*\
  !*** ./src/app/models/customerProfileData.ts ***!
  \***********************************************/
/*! exports provided: CustomerProfileData, CustomerModel, ErrorCustomerUIModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerProfileData", function() { return CustomerProfileData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModel", function() { return CustomerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCustomerUIModel", function() { return ErrorCustomerUIModel; });
/* harmony import */ var src_app_models_baseResponseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/baseResponseData */ "zuTj");

class CustomerProfileData extends src_app_models_baseResponseData__WEBPACK_IMPORTED_MODULE_0__["BaseResponseData"] {
    static withAPIData(res) {
        let obj = new CustomerProfileData();
        obj.aadharNo = res.aadharNo;
        obj.address = res.address.address;
        obj.cityId = res.address.cityId;
        obj.cityName = res.address.cityName;
        obj.cityNameStateName = res.address.cityNameStateName;
        obj.countryId = res.address.countryId;
        obj.landmark = res.address.landmark;
        obj.pinCode = res.address.pinCode;
        obj.stateId = res.address.stateId;
        obj.stateName = res.address.stateName;
        obj.age = res.age;
        obj.dateOfBirth = res.dateOfBirth;
        obj.ecsCustomerId = res.ecsCustomerId;
        obj.eiaNumber = res.eiaNumber;
        obj.emailId = res.emailId;
        obj.gender = res.gender;
        obj.gstCustomerDetails = res.gstCustomerDetails;
        obj.landLineNum = res.landLineNum;
        obj.maritalStatus = res.maritalStatus;
        obj.name = res.name;
        obj.panCardNo = res.panCardNo;
        obj.passportNo = res.passportNo;
        obj.relationShipId = res.relationShipId;
        obj.relationShipName = res.relationShipName;
        obj.telephoneNo = res.telephoneNo;
        obj.titleName = res.titleName;
        obj.setData(res);
        return obj;
    }
}
//customer model changes
class CustomerModel extends src_app_models_baseResponseData__WEBPACK_IMPORTED_MODULE_0__["BaseResponseData"] {
}
class ErrorCustomerUIModel {
}
//


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 0, vars: 0, template: function HomeComponent_Template(rf, ctx) { }, styles: ["@media(max-width:1360px) {\r\n}\r\n\r\n@media(max-width:1199px) {\r\n}\r\n\r\n@media(max-width:1024px) and (min-width:768px) {\r\n}\r\n\r\n@media(max-width:991px) {\r\n}\r\n\r\n@media(max-width:768px) {\r\n  .apr-popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 8rem 2rem;\r\n  }\r\n\r\n  .ui-popup-card-wrap[_ngcontent-%COMP%]   .card-im-innerblock[_ngcontent-%COMP%]   .card-member-names[_ngcontent-%COMP%] {\r\n    max-width: 65%;\r\n  }\r\n\r\n  .ui-popup-card-wrap[_ngcontent-%COMP%]   .card-im-innerblock[_ngcontent-%COMP%]   .card-member-1more[_ngcontent-%COMP%] {\r\n    max-width: 35%;\r\n  }\r\n\r\n  .ui-popup-card-wrap[_ngcontent-%COMP%]   .card-main-block[_ngcontent-%COMP%]   .card-inner-block[_ngcontent-%COMP%] {\r\n    min-height: initial;\r\n  }\r\n\r\n  .renew-list-scroll[_ngcontent-%COMP%] {\r\n    max-height: 90vh;\r\n  }\r\n\r\n  .apr-popup[_ngcontent-%COMP%]   .thankyou-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin-top: 0rem;\r\n  }\r\n\r\n  .thankyou-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-bottom: 2rem;\r\n  }\r\n\r\n  .card-main-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n@media(max-width:767px) {\r\n  .ui-form-block.pad-top8[_ngcontent-%COMP%] {\r\n    padding-top: 3rem;\r\n  }\r\n\r\n  .apr-section-content-padding[_ngcontent-%COMP%] {\r\n    padding: 2rem 0 12rem 0;\r\n  }\r\n\r\n  .phone-otp-section[_ngcontent-%COMP%]   span.ui-error[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .ui-submit-btn.fixedBtn[_ngcontent-%COMP%]   .apr-submit-btn[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n  }\r\n\r\n  .apr-popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 8rem 2rem;\r\n  }\r\n\r\n  .apr-popup[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\r\n    padding: 0rem 0 6rem 0;\r\n  }\r\n\r\n  .apr-popup[_ngcontent-%COMP%]   .ui-submit-btn[_ngcontent-%COMP%] {\r\n    padding-top: 1rem !important;\r\n    padding-bottom: 3rem !important;\r\n  }\r\n\r\n  .ui-popup-card-wrap[_ngcontent-%COMP%]   .card-main-block[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 0 0rem 2rem 0;\r\n  }\r\n\r\n    .ui-popup-card-wrap[_ngcontent-%COMP%]   .card-main-block[_ngcontent-%COMP%]   .card-inner-block[_ngcontent-%COMP%] {\r\n      padding: 1.5rem 1.5rem;\r\n    }\r\n\r\n  .ui-popup-card-wrap[_ngcontent-%COMP%]   .card-im-innerblock[_ngcontent-%COMP%]   .card-member-names[_ngcontent-%COMP%] {\r\n    max-width: 65%;\r\n  }\r\n\r\n  .ui-popup-card-wrap[_ngcontent-%COMP%]   .card-im-innerblock[_ngcontent-%COMP%]   .card-member-1more[_ngcontent-%COMP%] {\r\n    max-width: 35%;\r\n  }\r\n\r\n  .ui-popup-card-wrap[_ngcontent-%COMP%]   .card-result-block[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  .ui-popup-card-wrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .ui-popup-card-wrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .ui-popup-card-wrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .ui-popup-card-wrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n    font-size: 1.6rem;\r\n  }\r\n\r\n  .ui-popup-card-wrap[_ngcontent-%COMP%]   .card-im-innerblock[_ngcontent-%COMP%], .card-due-renewal-date[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  .apr-popup[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%] {\r\n    height: initial;\r\n  }\r\n\r\n  .mobile-thankyou-height[_ngcontent-%COMP%] {\r\n    height: 80vh;\r\n  }\r\n\r\n  .renew-list-scroll[_ngcontent-%COMP%] {\r\n    max-height: initial;\r\n  }\r\n\r\n  .aprBlock[_ngcontent-%COMP%]   .banner-para[_ngcontent-%COMP%] {\r\n    padding-top: 0;\r\n  }\r\n\r\n    .aprBlock[_ngcontent-%COMP%]   .banner-para[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n\r\n  .aprBlock[_ngcontent-%COMP%]   .banner-para[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .banner-para[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 1.8rem;\r\n    padding-right: 7rem;\r\n  }\r\n\r\n  .aprBlock[_ngcontent-%COMP%]   ul.ui-banner-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    width: 50%;\r\n    display: inline;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  ul.ui-banner-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    margin-right: 1rem !important;\r\n    vertical-align: bottom;\r\n  }\r\n\r\n  .aprBlock[_ngcontent-%COMP%]   .ui-form-block[_ngcontent-%COMP%]   .ui-submit-btn.fixedBtn[_ngcontent-%COMP%] {\r\n    background: #00305b;\r\n    top: initial;\r\n    bottom: 0;\r\n    text-align: center;\r\n  }\r\n\r\n  .thankyou-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n  }\r\n\r\n  .apr-popup[_ngcontent-%COMP%]   .thankyou-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    text-align: center;\r\n  }\r\n\r\n  .apr-popup[_ngcontent-%COMP%]   .thankyou-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .apr-popup[_ngcontent-%COMP%]   .thankyou-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .apr-popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n    line-height: 2rem;\r\n  }\r\n\r\n  .btn-white[_ngcontent-%COMP%] {\r\n    margin-right: 0.5rem;\r\n  }\r\n\r\n  .head-insurance[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    margin-bottom: 3rem !important;\r\n  }\r\n\r\n  .policy-tabs[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n  }\r\n\r\n  .policy-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n    padding: 2.2rem 0 2rem 5rem;\r\n  }\r\n\r\n    .policy-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label.home-owner-raido[_ngcontent-%COMP%]:after, .policy-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label.home-tenant-raido[_ngcontent-%COMP%]:after, .policy-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label.home-owner-raido[_ngcontent-%COMP%]:after, .policy-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label.home-tenant-raido[_ngcontent-%COMP%]:after {\r\n      background-position: 15px 16px;\r\n    }\r\n\r\n    .policy-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label.home-tenant-raido[_ngcontent-%COMP%]:after {\r\n      background-position: 15px 16px;\r\n    }\r\n\r\n  #buying-insurance[_ngcontent-%COMP%]   .input-block[_ngcontent-%COMP%], #buying-insurance-contents[_ngcontent-%COMP%]   .input-block[_ngcontent-%COMP%], #value-structure-field.input-block[_ngcontent-%COMP%], #value-builtarea-field[_ngcontent-%COMP%]   .input-block[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n  }\r\n\r\n  img.whatsapp-img[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    width: auto;\r\n  }\r\n\r\n  ul.ui-banner-list[_ngcontent-%COMP%] {\r\n    padding: 2.5rem 0 0;\r\n  }\r\n\r\n  .head-insurance[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n    .head-insurance[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n\r\n  .why-customer-love[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .why-customer-love[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .why-customer-love[_ngcontent-%COMP%]   .ui-card-wrap[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 6rem;\r\n  }\r\n\r\n    .why-customer-love[_ngcontent-%COMP%]   .ui-card-wrap[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      padding: 0 4rem 1rem;\r\n    }\r\n\r\n  .hi-img-detach[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n\r\n  .hi-para-detach[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }\r\n\r\n  .why-customer-love[_ngcontent-%COMP%] {\r\n    padding: 4rem 0 0rem 0;\r\n  }\r\n\r\n  .why-home-insurance[_ngcontent-%COMP%]   .ui-policy-documents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .why-home-insurance[_ngcontent-%COMP%]   .ui-policy-documents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .what-included-andnot[_ngcontent-%COMP%]   .ui-policy-documents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .what-included-andnot[_ngcontent-%COMP%]   .ui-policy-documents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 0 1rem 0 0;\r\n  }\r\n\r\n  .why-home-insurance[_ngcontent-%COMP%]   .ui-policy-documents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .what-included-andnot[_ngcontent-%COMP%]   .ui-policy-documents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n\r\n    .why-home-insurance[_ngcontent-%COMP%]   .ui-policy-documents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, .what-included-andnot[_ngcontent-%COMP%]   .ui-policy-documents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n      display: none;\r\n    }\r\n\r\n  .why-home-insurance[_ngcontent-%COMP%]   .ui-policy-documents[_ngcontent-%COMP%], .what-included-andnot[_ngcontent-%COMP%]   .ui-policy-documents[_ngcontent-%COMP%] {\r\n    padding: 3rem 0rem 0;\r\n  }\r\n\r\n  .hitab-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    min-width: auto;\r\n  }\r\n\r\n  .hi-ui-check-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: auto;\r\n  }\r\n\r\n  .claim-calmly-section[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .claim-calmly-section[_ngcontent-%COMP%]   .claim-blocks[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n\r\n  .claim-calmly-section[_ngcontent-%COMP%]   .claim-blocks[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 13rem;\r\n    height: 13rem;\r\n    margin-right: 0.5rem;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n\r\n  .ui-claimimg-dth[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    top: 3rem;\r\n  }\r\n\r\n  .get-tab-section[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n    .get-tab-section[_ngcontent-%COMP%]   .hitab-head[_ngcontent-%COMP%] {\r\n      white-space: nowrap;\r\n      display: flex;\r\n      overflow-x: auto;\r\n      overflow-y: hidden;\r\n    }\r\n\r\n      .get-tab-section[_ngcontent-%COMP%]   .hitab-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        min-width: 13.7rem;\r\n      }\r\n\r\n  .get-insurance-blocks[_ngcontent-%COMP%] {\r\n    padding: 0 0.5rem;\r\n  }\r\n\r\n  .ui-reviewsrating-slider[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n    padding: 2rem 2rem;\r\n    border: 1px solid #cbcdce;\r\n    border-radius: 1rem;\r\n    min-height: 30rem;\r\n    margin: 3rem 1rem 2rem;\r\n  }\r\n\r\n  .ui-reviewsrating-slider[_ngcontent-%COMP%]   .rating-topbar[_ngcontent-%COMP%]:after {\r\n    top: 3.1rem;\r\n    right: 3rem;\r\n  }\r\n\r\n  .ui-reviewsrating-slider[_ngcontent-%COMP%]   .rating-topbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    border-right: 0px solid #b2b2b2;\r\n    display: block;\r\n  }\r\n\r\n  .ui-reviewsrating-slider[_ngcontent-%COMP%]   .rating-fl[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .aprBlock[_ngcontent-%COMP%]   ul.ui-banner-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\r\n    margin-right: 0;\r\n  }\r\n}\r\n\r\n@media(max-width:480px) {\r\n}\r\n\r\n@media(max-width:320px) {\r\n  .policy-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    padding: 2.2rem 0 2rem 4.5rem;\r\n  }\r\n\r\n    .policy-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label.home-owner-raido[_ngcontent-%COMP%]:after, .policy-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label.home-tenant-raido[_ngcontent-%COMP%]:after, .policy-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label.home-owner-raido[_ngcontent-%COMP%]:after, .policy-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label.home-tenant-raido[_ngcontent-%COMP%]:after {\r\n      background-position: 12px 16px;\r\n    }\r\n\r\n  .aprBlock[_ngcontent-%COMP%]   ul.ui-banner-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7O0lBRUU7TUFDRSxzQkFBc0I7SUFDeEI7O0VBRUY7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztJQUVFO01BQ0UsYUFBYTtJQUNmOztFQUVGO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osU0FBUztJQUNULGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztJQUVFOzs7O01BSUUsOEJBQThCO0lBQ2hDOztJQUVBO01BQ0UsOEJBQThCO0lBQ2hDOztFQUVGOzs7O0lBSUUsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztJQUVFO01BQ0UsYUFBYTtJQUNmOztFQUVGO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0lBRUU7TUFDRSxvQkFBb0I7SUFDdEI7O0VBRUY7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7O0lBRUUsbUJBQW1CO0VBQ3JCOztFQUVBOztJQUVFLHFCQUFxQjtFQUN2Qjs7SUFFRTs7TUFFRSxhQUFhO0lBQ2Y7O0VBRUY7O0lBRUUsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7SUFFRTtNQUNFLG1CQUFtQjtNQUVuQixhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLGtCQUFrQjtJQUNwQjs7TUFFRTtRQUNFLGtCQUFrQjtNQUNwQjs7RUFFSjtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsNkJBQTZCO0VBQy9COztJQUVFO01BQ0UsOEJBQThCO0lBQ2hDOztFQUVGO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1heC13aWR0aDoxMzYwcHgpIHtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDoxMTk5cHgpIHtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDoxMDI0cHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KSB7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6OTkxcHgpIHtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3NjhweCkge1xyXG4gIC5hcHItcG9wdXAgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogOHJlbSAycmVtO1xyXG4gIH1cclxuXHJcbiAgLnVpLXBvcHVwLWNhcmQtd3JhcCAuY2FyZC1pbS1pbm5lcmJsb2NrIC5jYXJkLW1lbWJlci1uYW1lcyB7XHJcbiAgICBtYXgtd2lkdGg6IDY1JTtcclxuICB9XHJcblxyXG4gIC51aS1wb3B1cC1jYXJkLXdyYXAgLmNhcmQtaW0taW5uZXJibG9jayAuY2FyZC1tZW1iZXItMW1vcmUge1xyXG4gICAgbWF4LXdpZHRoOiAzNSU7XHJcbiAgfVxyXG5cclxuICAudWktcG9wdXAtY2FyZC13cmFwIC5jYXJkLW1haW4tYmxvY2sgLmNhcmQtaW5uZXItYmxvY2sge1xyXG4gICAgbWluLWhlaWdodDogaW5pdGlhbDtcclxuICB9XHJcblxyXG4gIC5yZW5ldy1saXN0LXNjcm9sbCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xyXG4gIH1cclxuXHJcbiAgLmFwci1wb3B1cCAudGhhbmt5b3Utc2VjdGlvbiBoMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xyXG4gIH1cclxuXHJcbiAgLnRoYW5reW91LWNvbnRlbnQgaW1nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1tYWluLWJsb2NrIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3NjdweCkge1xyXG4gIC51aS1mb3JtLWJsb2NrLnBhZC10b3A4IHtcclxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgLmFwci1zZWN0aW9uLWNvbnRlbnQtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDAgMTJyZW0gMDtcclxuICB9XHJcblxyXG4gIC5waG9uZS1vdHAtc2VjdGlvbiBzcGFuLnVpLWVycm9yIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcblxyXG4gIC51aS1zdWJtaXQtYnRuLmZpeGVkQnRuIC5hcHItc3VibWl0LWJ0biB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbiAgLmFwci1wb3B1cCAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA4cmVtIDJyZW07XHJcbiAgfVxyXG5cclxuICAuYXByLXBvcHVwIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMHJlbSAwIDZyZW0gMDtcclxuICB9XHJcblxyXG4gIC5hcHItcG9wdXAgLnVpLXN1Ym1pdC1idG4ge1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudWktcG9wdXAtY2FyZC13cmFwIC5jYXJkLW1haW4tYmxvY2sge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMHJlbSAycmVtIDA7XHJcbiAgfVxyXG5cclxuICAgIC51aS1wb3B1cC1jYXJkLXdyYXAgLmNhcmQtbWFpbi1ibG9jayAuY2FyZC1pbm5lci1ibG9jayB7XHJcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAxLjVyZW07XHJcbiAgICB9XHJcblxyXG4gIC51aS1wb3B1cC1jYXJkLXdyYXAgLmNhcmQtaW0taW5uZXJibG9jayAuY2FyZC1tZW1iZXItbmFtZXMge1xyXG4gICAgbWF4LXdpZHRoOiA2NSU7XHJcbiAgfVxyXG5cclxuICAudWktcG9wdXAtY2FyZC13cmFwIC5jYXJkLWltLWlubmVyYmxvY2sgLmNhcmQtbWVtYmVyLTFtb3JlIHtcclxuICAgIG1heC13aWR0aDogMzUlO1xyXG4gIH1cclxuXHJcbiAgLnVpLXBvcHVwLWNhcmQtd3JhcCAuY2FyZC1yZXN1bHQtYmxvY2sge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgfVxyXG5cclxuICAudWktcG9wdXAtY2FyZC13cmFwIGg0LCAudWktcG9wdXAtY2FyZC13cmFwIGg0IGEsIC51aS1wb3B1cC1jYXJkLXdyYXAgaDQgYTpob3ZlciwgLnVpLXBvcHVwLWNhcmQtd3JhcCBoNCBhOmZvY3VzIHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIH1cclxuXHJcbiAgLnVpLXBvcHVwLWNhcmQtd3JhcCAuY2FyZC1pbS1pbm5lcmJsb2NrLCAuY2FyZC1kdWUtcmVuZXdhbC1kYXRlIGg2IHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIH1cclxuXHJcbiAgLmFwci1wb3B1cCAucG9wdXAge1xyXG4gICAgaGVpZ2h0OiBpbml0aWFsO1xyXG4gIH1cclxuXHJcbiAgLm1vYmlsZS10aGFua3lvdS1oZWlnaHQge1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gIH1cclxuXHJcbiAgLnJlbmV3LWxpc3Qtc2Nyb2xsIHtcclxuICAgIG1heC1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgfVxyXG5cclxuICAuYXByQmxvY2sgLmJhbm5lci1wYXJhIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgICAuYXByQmxvY2sgLmJhbm5lci1wYXJhIGJyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgLmFwckJsb2NrIC5iYW5uZXItcGFyYSB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG5cclxuICAuYmFubmVyLXBhcmEgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDdyZW07XHJcbiAgfVxyXG5cclxuICAuYXByQmxvY2sgdWwudWktYmFubmVyLWxpc3QgbGkge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgdWwudWktYmFubmVyLWxpc3QgbGkgaW1nIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIH1cclxuXHJcbiAgLmFwckJsb2NrIC51aS1mb3JtLWJsb2NrIC51aS1zdWJtaXQtYnRuLmZpeGVkQnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDMwNWI7XHJcbiAgICB0b3A6IGluaXRpYWw7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGhhbmt5b3UtY29udGVudCBpbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuYXByLXBvcHVwIC50aGFua3lvdS1zZWN0aW9uIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFwci1wb3B1cCAudGhhbmt5b3Utc2VjdGlvbiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIH1cclxuXHJcbiAgLmFwci1wb3B1cCAudGhhbmt5b3UtY29udGVudCBwIGEge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLmFwci1wb3B1cCAuY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuYnRuLXdoaXRlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmhlYWQtaW5zdXJhbmNlIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5wb2xpY3ktdGFicyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucG9saWN5LXJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDIuMnJlbSAwIDJyZW0gNXJlbTtcclxuICB9XHJcblxyXG4gICAgLnBvbGljeS1yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbC5ob21lLW93bmVyLXJhaWRvOmFmdGVyLFxyXG4gICAgLnBvbGljeS1yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbC5ob21lLXRlbmFudC1yYWlkbzphZnRlcixcclxuICAgIC5wb2xpY3ktcmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbC5ob21lLW93bmVyLXJhaWRvOmFmdGVyLFxyXG4gICAgLnBvbGljeS1yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsLmhvbWUtdGVuYW50LXJhaWRvOmFmdGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTVweCAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wb2xpY3ktcmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwuaG9tZS10ZW5hbnQtcmFpZG86YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNXB4IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICNidXlpbmctaW5zdXJhbmNlIC5pbnB1dC1ibG9jayxcclxuICAjYnV5aW5nLWluc3VyYW5jZS1jb250ZW50cyAuaW5wdXQtYmxvY2ssXHJcbiAgI3ZhbHVlLXN0cnVjdHVyZS1maWVsZC5pbnB1dC1ibG9jayxcclxuICAjdmFsdWUtYnVpbHRhcmVhLWZpZWxkIC5pbnB1dC1ibG9jayB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBpbWcud2hhdHNhcHAtaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcblxyXG4gIHVsLnVpLWJhbm5lci1saXN0IHtcclxuICAgIHBhZGRpbmc6IDIuNXJlbSAwIDA7XHJcbiAgfVxyXG5cclxuICAuaGVhZC1pbnN1cmFuY2UgaDQge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgICAuaGVhZC1pbnN1cmFuY2UgaDQgaW1nIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgLndoeS1jdXN0b21lci1sb3ZlIGgyLCAud2h5LWN1c3RvbWVyLWxvdmUgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAud2h5LWN1c3RvbWVyLWxvdmUgLnVpLWNhcmQtd3JhcCAuY2FyZC1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnJlbTtcclxuICB9XHJcblxyXG4gICAgLndoeS1jdXN0b21lci1sb3ZlIC51aS1jYXJkLXdyYXAgLmNhcmQtYmxvY2sgc3BhbiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNHJlbSAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAuaGktaW1nLWRldGFjaCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuaGktcGFyYS1kZXRhY2gge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAud2h5LWN1c3RvbWVyLWxvdmUge1xyXG4gICAgcGFkZGluZzogNHJlbSAwIDByZW0gMDtcclxuICB9XHJcblxyXG4gIC53aHktaG9tZS1pbnN1cmFuY2UgLnVpLXBvbGljeS1kb2N1bWVudHMgcCBzcGFuLCAud2h5LWhvbWUtaW5zdXJhbmNlIC51aS1wb2xpY3ktZG9jdW1lbnRzIHAgYSxcclxuICAud2hhdC1pbmNsdWRlZC1hbmRub3QgLnVpLXBvbGljeS1kb2N1bWVudHMgcCBzcGFuLCAud2hhdC1pbmNsdWRlZC1hbmRub3QgLnVpLXBvbGljeS1kb2N1bWVudHMgcCBhIHtcclxuICAgIHBhZGRpbmc6IDAgMXJlbSAwIDA7XHJcbiAgfVxyXG5cclxuICAud2h5LWhvbWUtaW5zdXJhbmNlIC51aS1wb2xpY3ktZG9jdW1lbnRzIHAgYSxcclxuICAud2hhdC1pbmNsdWRlZC1hbmRub3QgLnVpLXBvbGljeS1kb2N1bWVudHMgcCBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gICAgLndoeS1ob21lLWluc3VyYW5jZSAudWktcG9saWN5LWRvY3VtZW50cyBwIGE6YWZ0ZXIsXHJcbiAgICAud2hhdC1pbmNsdWRlZC1hbmRub3QgLnVpLXBvbGljeS1kb2N1bWVudHMgcCBhOmFmdGVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgLndoeS1ob21lLWluc3VyYW5jZSAudWktcG9saWN5LWRvY3VtZW50cyxcclxuICAud2hhdC1pbmNsdWRlZC1hbmRub3QgLnVpLXBvbGljeS1kb2N1bWVudHMge1xyXG4gICAgcGFkZGluZzogM3JlbSAwcmVtIDA7XHJcbiAgfVxyXG5cclxuICAuaGl0YWItaGVhZCBsaSB7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuaGktdWktY2hlY2stbGlzdCBsaSB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jbGFpbS1jYWxtbHktc2VjdGlvbiAuZG90IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY2xhaW0tY2FsbWx5LXNlY3Rpb24gLmNsYWltLWJsb2NrcyBsaSBzcGFuIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAuY2xhaW0tY2FsbWx5LXNlY3Rpb24gLmNsYWltLWJsb2NrcyBsaSB7XHJcbiAgICB3aWR0aDogMTNyZW07XHJcbiAgICBoZWlnaHQ6IDEzcmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAudWktY2xhaW1pbWctZHRoIGltZyB7XHJcbiAgICB0b3A6IDNyZW07XHJcbiAgfVxyXG5cclxuICAuZ2V0LXRhYi1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgICAuZ2V0LXRhYi1zZWN0aW9uIC5oaXRhYi1oZWFkIHtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgICAuZ2V0LXRhYi1zZWN0aW9uIC5oaXRhYi1oZWFkIGxpIHtcclxuICAgICAgICBtaW4td2lkdGg6IDEzLjdyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgLmdldC1pbnN1cmFuY2UtYmxvY2tzIHtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLnVpLXJldmlld3NyYXRpbmctc2xpZGVyIC5pdGVtIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMnJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmNkY2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgbWluLWhlaWdodDogMzByZW07XHJcbiAgICBtYXJnaW46IDNyZW0gMXJlbSAycmVtO1xyXG4gIH1cclxuXHJcbiAgLnVpLXJldmlld3NyYXRpbmctc2xpZGVyIC5yYXRpbmctdG9wYmFyOmFmdGVyIHtcclxuICAgIHRvcDogMy4xcmVtO1xyXG4gICAgcmlnaHQ6IDNyZW07XHJcbiAgfVxyXG5cclxuICAudWktcmV2aWV3c3JhdGluZy1zbGlkZXIgLnJhdGluZy10b3BiYXIgaDMge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgI2IyYjJiMjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnVpLXJldmlld3NyYXRpbmctc2xpZGVyIC5yYXRpbmctZmwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICBoMSwgaDMge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgLmFwckJsb2NrIHVsLnVpLWJhbm5lci1saXN0IGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjQ4MHB4KSB7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MzIwcHgpIHtcclxuICAucG9saWN5LXJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgcGFkZGluZzogMi4ycmVtIDAgMnJlbSA0LjVyZW07XHJcbiAgfVxyXG5cclxuICAgIC5wb2xpY3ktcmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwuaG9tZS1vd25lci1yYWlkbzphZnRlciwgLnBvbGljeS1yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbC5ob21lLXRlbmFudC1yYWlkbzphZnRlciwgLnBvbGljeS1yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsLmhvbWUtb3duZXItcmFpZG86YWZ0ZXIsIC5wb2xpY3ktcmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbC5ob21lLXRlbmFudC1yYWlkbzphZnRlciB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEycHggMTZweDtcclxuICAgIH1cclxuXHJcbiAgLmFwckJsb2NrIHVsLnVpLWJhbm5lci1saXN0IGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "5+sL":
/*!**********************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-details/personal-details.component */ "DuSi");
/* harmony import */ var _my_policies_my_policies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-policies/my-policies.component */ "gKif");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payments/payments.component */ "tlA0");
/* harmony import */ var _saved_quote_saved_quote_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./saved-quote/saved-quote.component */ "IDFh");
/* harmony import */ var _dashboard_main_component_dashboard_main_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-main-component/dashboard-main-component.component */ "ko2Q");
/* harmony import */ var _left_pane_left_pane_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./left-pane/left-pane.component */ "hMtU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        ], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__["PersonalDetailsComponent"],
        _my_policies_my_policies_component__WEBPACK_IMPORTED_MODULE_6__["MyPoliciesComponent"],
        _payments_payments_component__WEBPACK_IMPORTED_MODULE_7__["PaymentsComponent"],
        _saved_quote_saved_quote_component__WEBPACK_IMPORTED_MODULE_8__["SavedQuoteComponent"],
        _dashboard_main_component_dashboard_main_component_component__WEBPACK_IMPORTED_MODULE_9__["DashboardMainComponentComponent"],
        _left_pane_left_pane_component__WEBPACK_IMPORTED_MODULE_10__["LeftPaneComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]], exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]] }); })();


/***/ }),

/***/ "6bp2":
/*!*********************************************!*\
  !*** ./src/app/models/loginResponseData.ts ***!
  \*********************************************/
/*! exports provided: LoginResponseData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginResponseData", function() { return LoginResponseData; });
/* harmony import */ var src_app_models_baseResponseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/baseResponseData */ "zuTj");

class LoginResponseData extends src_app_models_baseResponseData__WEBPACK_IMPORTED_MODULE_0__["BaseResponseData"] {
    static withAPIData(res) {
        let obj = new LoginResponseData();
        obj.userName = res.userName;
        obj.lastLogin = res.lastLogin;
        obj.authToken = res.authToken;
        obj.tokenExpiry = res.tokenExpiry;
        obj.iPartnerUserId = res.iPartnerUserId;
        obj.isGuestUser = res.isGuestUser;
        obj.token = res.token;
        obj.expiry = res.expiry;
        obj.clientId = res.clientId;
        obj.setData(res);
        return obj;
    }
}


/***/ }),

/***/ "AytR":
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
/*
export const environment = {
  production: false,
  deployUrl: '/docs/default-source/apps/login/',
  Login: 'website',
  Password: 'QDa0O4BeHK0KT1NSJWVe2w==',
  LoginType: 'App',
  ClientIPAddress: 'Monocept',
  DeviceId: 'Monocept',
}; */
const environment = {
    production: false,
    deployUrl: '/docs/default-source/apps/login/',
    Login: 'kunal@monocept.com',
    Password: 'ZOQ+oDaHKehjrZHXzRZ83g==',
    LoginType: 'User',
    ClientIPAddress: 'Monocept',
    DeviceId: 'Monocept',
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

/***/ "DuSi":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboard/personal-details/personal-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsComponent", function() { return PersonalDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest.service */ "tnAE");



class PersonalDetailsComponent {
    //disabledFuture: { from: new Date(Date.now() - 6574 * (1000 * 3600 * 24)),to: new Date(Date.now() - 36526 * (1000 * 3600 * 24))};
    //defaultDate: new Date(Date.now() - 6574 * (1000 * 3600 * 24)),
    //timeStamp: new Date().getTime();
    constructor(_fb, _restService) {
        this._fb = _fb;
        this._restService = _restService;
        this.genderSelect = "male";
        this.editInfo = false;
        this.submitted = false;
        this.IsPopUpError = false;
        this.IsProfileUpdate = false;
        this.IsShowloader = false;
        this.IsAutoCompleteShow = false;
        this.myDate = new Date(Date.now() - 6574 * (1000 * 3600 * 24));
    }
    ngOnInit() {
        this.initialize();
    }
    initialize() {
    }
}
PersonalDetailsComponent.ɵfac = function PersonalDetailsComponent_Factory(t) { return new (t || PersonalDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"])); };
PersonalDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalDetailsComponent, selectors: [["app-personal-details"]], decls: 21, vars: 0, consts: [[1, "table"]], template: function PersonalDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nakul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mobile No :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "898989898");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Account No :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "4545451554454");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "email id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "nakul@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25hbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "IDFh":
/*!***************************************************************************!*\
  !*** ./src/app/components/dashboard/saved-quote/saved-quote.component.ts ***!
  \***************************************************************************/
/*! exports provided: SavedQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedQuoteComponent", function() { return SavedQuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/rest.service */ "tnAE");


class SavedQuoteComponent {
    constructor(_restService) {
        this._restService = _restService;
        this.quoteExists = false;
        this.imgPath = "/docs/default-source/assets/images/";
        this.queryString = "";
    }
    ngOnInit() {
    }
}
SavedQuoteComponent.ɵfac = function SavedQuoteComponent_Factory(t) { return new (t || SavedQuoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"])); };
SavedQuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SavedQuoteComponent, selectors: [["app-saved-quote"]], decls: 0, vars: 0, template: function SavedQuoteComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXZlZC1xdW90ZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "NpmQ":
/*!**********************************************!*\
  !*** ./src/app/pipes/error-messages.pipe.ts ***!
  \**********************************************/
/*! exports provided: ConvertTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertTextPipe", function() { return ConvertTextPipe; });
/* harmony import */ var src_app_lang_en_strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/lang/en-strings */ "o0ul");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ConvertTextPipe {
    transform(value) {
        let t = src_app_lang_en_strings__WEBPACK_IMPORTED_MODULE_0__["TextConstants"][value];
        return t == undefined ? value : t;
    }
}
ConvertTextPipe.ɵfac = function ConvertTextPipe_Factory(t) { return new (t || ConvertTextPipe)(); };
ConvertTextPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "convertText", type: ConvertTextPipe, pure: true });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'LoginPage';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\r\nheader .mainNvbg {\r\n  background: #636467;\r\n  background: #e6f4f5 !important;\r\n}\r\n\r\nheader, .logSignbg {\r\n  background: #c13911 url('main-nav-bg.jpg');\r\n  background-repeat: repeat-x;\r\n}\r\n\r\nheader .header .lombardLogo {\r\n    padding: 10px 0;\r\n  }\r\n\r\nheader .header .rightBlog {\r\n    padding: 10px 0;\r\n  }\r\n\r\nheader .header .rightBlog .lombardCall a {\r\n      color: #fff\r\n    }\r\n\r\nheader .header .rightBlog .lombardCall span {\r\n      background: none;\r\n    }\r\n\r\n.lombardLogo a img {\r\n  width: 65%;\r\n}\r\n\r\nheader .header .rightBlog .liveChat a {\r\n  color: #fff;\r\n}\r\n\r\n.loginMainpage .loginheaderBg, .orngS {\r\n  background: #636467;\r\n}\r\n\r\n.orngS {\r\n  background: #e6f4f5;\r\n}\r\n\r\n.loginMainpage .loginheaderBg {\r\n  background: #e6f4f5;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .orngS {\r\n    background: url(/docs/default-source/assets/images/hbg1.jpg) repeat-x;\r\n  }\r\n}\r\n\r\n// fresh login css\r\n/*Loader CSS start*/\r\n.hides {\r\n  display: none;\r\n}\r\n\r\n.loader, .loader_tr {\r\n \r\n  height: 100%;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  background: rgba(255,255,255,0.9);\r\n  z-index: 99999;\r\n}\r\n\r\n.loader .innerT {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    width: 100%;\r\n    transform: translate(-50%,-50%);\r\n    text-align: center;\r\n  }\r\n\r\n.loader p {\r\n    font-size: 15px;\r\n    color: #053c6d;\r\n  }\r\n\r\n.lightBoxHold,\r\n.overLay {\r\n  position: fixed;\r\n  width: 100%;\r\n  display: none;\r\n  left: 0;\r\n}\r\n\r\n.overLay {\r\n  height: 100%;\r\n  top: 0;\r\n  background: #282824;\r\n  opacity: .8;\r\n  z-index: 99999;\r\n}\r\n\r\n.lightBoxHold {\r\n  top: 20%;\r\n  z-index: 999991;\r\n}\r\n\r\n.lightBoxHold.lightBoxHoldmaps {\r\n    position: absolute\r\n  }\r\n\r\n.lightBox {\r\n  margin: 0 auto;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 600px;\r\n  max-height: 550px;\r\n  overflow: auto\r\n}\r\n\r\n.closeBtn {\r\n  float: right;\r\n  margin-bottom: 30px;\r\n  cursor: pointer\r\n}\r\n\r\n.lightBox p {\r\n  clear: both;\r\n  margin: 30px 0;\r\n  font-size: 22px;\r\n  color: #053C6D\r\n}\r\n\r\n.LbBtnHold input,\r\n.LbBtnHold span {\r\n  padding: 5px 20px;\r\n  border-radius: 15px;\r\n  display: inline-block;\r\n  font-size: 20px;\r\n  margin-right: 10px;\r\n  cursor: pointer\r\n}\r\n\r\n.LbBtnHold .yesBtn,\r\n  .LbBtnHold span.yesBtn {\r\n    background: #053C8E;\r\n    color: #f2f2ee\r\n  }\r\n\r\n.LbBtnHold span.noBtn a,\r\n    .LbBtnHold span.yesBtn a {\r\n      color: #fff\r\n    }\r\n\r\n.LbBtnHold .noBtn,\r\n  .LbBtnHold span.noBtn {\r\n    background: #bfbfbf;\r\n    color: #474747\r\n  }\r\n\r\n.overlayN {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  transition: opacity 200ms;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  z-index: 9999;\r\n  display: none;\r\n}\r\n\r\n.overlayN .cancel {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    cursor: default;\r\n  }\r\n\r\n.overlayN:target, .overlayN.showMsg {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n\r\n.popup {\r\n  margin: 75px auto;\r\n  padding: 20px;\r\n  background: #fff;\r\n  border: 1px solid #666;\r\n  width: 90%;\r\n  min-height: 150px;\r\n  max-height: 500px;\r\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);\r\n  position: relative;\r\n  border-radius: 10px;\r\n}\r\n\r\n.popup.light {\r\n    width: 600px;\r\n  }\r\n\r\n.popup h2 {\r\n  margin-top: 0;\r\n  color: #282828;\r\n  font-size: 16px;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 600;\r\n  text-align: center;\r\n}\r\n\r\n.popup h3 {\r\n  margin: 0;\r\n  color: #282828;\r\n  font-size: 14px;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 600;\r\n  text-align: left;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.popup .close {\r\n  position: absolute;\r\n  width: 27px;\r\n  height: 27px;\r\n  top: -52px;\r\n  right: 0;\r\n  opacity: 1;\r\n  transition: all 200ms;\r\n  font-size: 48px;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n.popup .close:hover {\r\n    opacity: 1;\r\n  }\r\n\r\n.popup .content {\r\n  max-height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\n.popup p {\r\n  margin: 0 0 10px;\r\n  font-weight: 400;\r\n  color: #333;\r\n  font-size: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.popup ol {\r\n  padding: 0 15px;\r\n}\r\n\r\n.popup ul {\r\n  padding: 0 18px;\r\n}\r\n\r\n.popup ol li, .popup ul li {\r\n    font-weight: 400;\r\n    color: #333;\r\n    font-size: 13px;\r\n    text-align: justify;\r\n  }\r\n\r\n.popup p:last-child {\r\n  margin: 0;\r\n}\r\n\r\n.popup .mCSB_inside > .mCSB_container {\r\n  margin-right: 0;\r\n}\r\n\r\n.popup .mCSB_scrollTools {\r\n  width: 6px;\r\n  opacity: 1;\r\n}\r\n\r\n.popup .mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {\r\n    width: 6px;\r\n  }\r\n\r\n.popup .mCS-dark.mCSB_scrollTools .mCSB_draggerRail {\r\n  background-color: transparent;\r\n}\r\n\r\n.popup .mCS-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {\r\n  background-color: #063b6d !important;\r\n}\r\n\r\n/*Modal Pop-up styling endsss/*loader css end*/\r\n\r\n/*login signup*/\r\n\r\n/*login signup*/\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.pull-right {\r\n  float: right !important;\r\n}\r\n\r\n//header styles\r\n/*header*/\r\na {\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\na:hover, a:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n/*.bodyWrapper{ padding-top: 132px;}\r\nheader {\r\n    background:#fff;\r\n    height: 138px;\r\n    position: fixed;\r\n    top: 0;\r\n    transition: top 0.5s ease-in-out;\r\n    width: 100%;\r\n    z-index: 9999;\r\n}\r\n\r\n.nav-up {\r\n    top: -138px;\r\n}\r\n\r\n.nav-down {\r\n    top:0px;\r\n}*/\r\n\r\n/*body{overflow-y: hidden;}*/\r\n\r\n.mCSB_inside > .mCSB_container {\r\n  margin-right: 0;\r\n}\r\n\r\n.mCSB_scrollTools {\r\n  width: 10px;\r\n  opacity: 1;\r\n}\r\n\r\n.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {\r\n    width: 10px;\r\n  }\r\n\r\n.mCS-dark.mCSB_scrollTools .mCSB_draggerRail {\r\n  background-color: transparent;\r\n}\r\n\r\n.mCS-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {\r\n  background-color: #063b6d !important;\r\n}\r\n\r\nheader .header {\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n\r\nheader .header .lombardLogo {\r\n    display: inline-block;\r\n    padding: 22px 0;\r\n  }\r\n\r\nheader .header .rightBlog {\r\n    float: right;\r\n    display: inline-block;\r\n    padding: 22px 0;\r\n    line-height: 0;\r\n  }\r\n\r\nheader .header .rightBlog .lombardCall {\r\n      display: inline-block;\r\n      float: left;\r\n      padding-top: 9px;\r\n    }\r\n\r\nheader .header .rightBlog .lombardCall a {\r\n        font-size: 18px;\r\n        font-weight: 700;\r\n      }\r\n\r\nheader .header .rightBlog .lombardCall span {\r\n        font-size: 10px;\r\n        padding: 2px 3px;\r\n        width: 20px;\r\n        height: 20px;\r\n        display: inline-block;\r\n        margin-right: 3px;\r\n        vertical-align: middle;\r\n        background: url(/images/default-source/HomeRevamp/page-sprite-img.png) 0 0 no-repeat;\r\n        background-position: -924px -56px;\r\n      }\r\n\r\nheader .header .rightBlog .liveChat {\r\n      display: inline-block;\r\n      float: left;\r\n      margin-left: 20px;\r\n      padding-top: 13px;\r\n    }\r\n\r\nheader .header .rightBlog .liveChat a {\r\n        color: #243f76;\r\n        font-size: 12px;\r\n        border: 1px solid #e5e5e5;\r\n        border-radius: 50px;\r\n        padding: 10px 12px;\r\n        text-transform: uppercase;\r\n        font-weight: 600;\r\n      }\r\n\r\nheader .header .rightBlog .liveChat a .dotsGreen {\r\n          background: #00a651;\r\n          height: 12px;\r\n          width: 12px;\r\n          display: inline-block;\r\n          border-radius: 50px;\r\n          margin-right: 5px;\r\n          vertical-align: middle;\r\n          margin-top: -1px;\r\n        }\r\n\r\nheader .header .blink {\r\n    animation: blink-animation 1.5s steps(5, start) infinite;\r\n    -webkit-animation: blink-animation 1.5s steps(5, start) infinite;\r\n  }\r\n\r\n@keyframes blink-animation {\r\n  to {\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\nheader .header .rightBlog .logIn {\r\n  display: inline-block;\r\n  float: left;\r\n  margin-left: 30px;\r\n  padding-top: 5px;\r\n}\r\n\r\nheader .header .rightBlog .logIn a {\r\n    color: #063b6d;\r\n    font-size: 15px;\r\n    border: 1px solid #e5e5e5;\r\n    border-radius: 15px;\r\n    padding: 8px 12px;\r\n  }\r\n\r\nheader .header .rightBlog .logIn span {\r\n    margin-right: 8px;\r\n    font-size: 12px;\r\n    color: #eb8e15;\r\n  }\r\n\r\nheader .header .rightBlog .feedBack {\r\n  display: inline-block;\r\n  float: left;\r\n  margin-left: 20px;\r\n  position: relative;\r\n}\r\n\r\nheader .header .rightBlog .feedBack .profIcohide {\r\n    background-image: url(/images/default-source/HomeRevamp/page-sprite-img.png);\r\n    background-position: -631px -516px;\r\n    display: block;\r\n    width: 42px;\r\n    height: 42px;\r\n  }\r\n\r\nheader .header .rightBlog .feedBack .profIcoactive {\r\n    background-image: url(/images/default-source/HomeRevamp/page-sprite-img.png);\r\n    background-position: -725px -514px;\r\n    display: block;\r\n    width: 42px;\r\n    height: 42px;\r\n    display: none;\r\n  }\r\n\r\nheader .header .rightBlog .feedBack a {\r\n    display: inline-block;\r\n  }\r\n\r\nheader .header .rightBlog .feedBack a.active:after {\r\n      content: '';\r\n      width: 0;\r\n      height: 0;\r\n      border-left: 10px solid transparent;\r\n      border-right: 10px solid transparent;\r\n      border-top: 10px solid #063b6d;\r\n      position: absolute;\r\n      top: 29px;\r\n      z-index: 99999;\r\n      left: 0;\r\n      right: 2px;\r\n      margin: 0 auto;\r\n      display: none;\r\n    }\r\n\r\nheader .header .rightBlog .feedBack .profileSec {\r\n    display: none;\r\n    position: absolute;\r\n    top: 45px;\r\n    right: -40px;\r\n    width: 309px;\r\n    background: #f9f9f9;\r\n    border-radius: 10px;\r\n    z-index: 2;\r\n    border-bottom: 7px solid #eb8e15;\r\n    text-align: center;\r\n    padding: 15px 0 30px;\r\n    box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.3);\r\n    -moz-box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.3);\r\n    -o-box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.3);\r\n    -webkit-box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.3);\r\n  }\r\n\r\nheader .header .rightBlog .feedBack .profileSec .welProf .menIco {\r\n      background-image: url(/images/default-source/HomeRevamp/menico.png);\r\n      display: block;\r\n      width: 60px;\r\n      height: 60px;\r\n      text-align: center;\r\n      margin: auto;\r\n    }\r\n\r\nheader .header .rightBlog .feedBack .profileSec .welProf .womIco {\r\n      background-image: url(/images/default-source/HomeRevamp/womico.png);\r\n      display: block;\r\n      width: 60px;\r\n      height: 60px;\r\n      text-align: center;\r\n      margin: auto;\r\n      display: none;\r\n    }\r\n\r\nheader .header .rightBlog .feedBack .profileSec .welProf h4, header .header .rightBlog .feedBack .profileSec .welProf .headingh4 {\r\n      color: #e57200;\r\n      font-size: 15px;\r\n      text-transform: uppercase;\r\n    }\r\n\r\nheader .header .rightBlog .feedBack .profileSec .welProf h3 {\r\n      color: #063b6d;\r\n      font-size: 18px;\r\n      font-weight: bold;\r\n      margin: 0;\r\n      padding: 15px 0 10px;\r\n    }\r\n\r\nheader .header .rightBlog .feedBack .profileSec .welProf .editProf a {\r\n      font-size: 12px;\r\n      color: #282828;\r\n      text-transform: uppercase;\r\n      font-weight: 600;\r\n      border-bottom: 1px solid #c5c5c5;\r\n      line-height: 12px;\r\n    }\r\n\r\nheader .header .rightBlog .feedBack .profileSec .logoutSec {\r\n      border-top: 1px solid #e0e6eb;\r\n      margin: 20px 0 0;\r\n    }\r\n\r\nheader .header .rightBlog .feedBack .profileSec .logoutSec p {\r\n        padding: 15px 0 10px;\r\n      }\r\n\r\nheader .header .rightBlog .feedBack .profileSec .logoutSec a {\r\n        text-transform: uppercase;\r\n        font-size: 14px;\r\n        padding: 6px 16px\r\n      }\r\n\r\n/*header*/\r\n\r\n/*nav*/\r\n\r\nheader .mainNvbg {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  background: #c13911 url(/images/default-source/HomeRevamp/main-nav-bg.jpg);\r\n  background-repeat: repeat-x;\r\n  height: 96px !important;\r\n}\r\n\r\n.mainselectBox label {\r\n  top: 26px;\r\n}\r\n\r\n.mainselectBox .select {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  color: #646565;\r\n  border-bottom: 1px solid #b4c4d3;\r\n  width: 100%;\r\n  padding: 5px 0 9px;\r\n  border-radius: 0;\r\n  font-weight: normal;\r\n  margin-bottom: 14px;\r\n}\r\n\r\n.mainselectBox select {\r\n  visibility: hidden;\r\n}\r\n\r\n.mainselectBox .styledSelect {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: transparent;\r\n  padding: 8px 10px 8px 0;\r\n  color: #063b6d;\r\n  font-size: 15px;\r\n  opacity: 0;\r\n}\r\n\r\n.mainselectBox .options {\r\n  position: absolute;\r\n  top: 100%;\r\n  right: 0px;\r\n  left: 0px;\r\n  z-index: 999;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  list-style: none;\r\n  border: 1px solid rgb(201, 214, 224);\r\n  background-color: #efefef;\r\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;\r\n  display: none;\r\n  font-size: 14px;\r\n}\r\n\r\n.mainselectBox .options li {\r\n    color: #616161;\r\n    border-bottom: 1px solid #e2e2e2;\r\n    display: block;\r\n    background: #fff;\r\n    margin: 0 0;\r\n    padding: 6px 10px;\r\n    transition: all 0.5s ease;\r\n  }\r\n\r\n.mainselectBox .options li:hover {\r\n      background-color: #063b6d;\r\n      color: #fff;\r\n    }\r\n\r\n.mainselectBox .options li:last-child {\r\n      border: none;\r\n    }\r\n\r\n.mainselectBox .glyphicon.glyphicon-menu-down {\r\n  color: #214d7a;\r\n  top: 15px;\r\n  position: absolute;\r\n  right: 0;\r\n  font-size: 16px;\r\n}\r\n\r\n.block .errorN {\r\n  color: #ff0000;\r\n  font-size: 13px;\r\n  position: absolute;\r\n  top: -1px;\r\n  background: #fff;\r\n  width: 100%;\r\n  padding: 0 0 5px;\r\n  display: inline-block;\r\n  z-index: 1;\r\n  /* display: none; */\r\n}\r\n\r\n.valSelt .errorN {\r\n  top: -13px;\r\n}\r\n\r\nheader .mobloginblock .wg-text {\r\n  font-size: 14px;\r\n  color: #063b6d;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  header .mobloginblock .wg-text {\r\n    color: #fff;\r\n    margin: 0 0 7px;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n/*nav*/\r\n\r\n// fresh login\r\n/*Modal Pop-up styling endsss/*loader css end*/\r\n/*login signup*/\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.loginMainpage .loginheaderBg {\r\n  background-image: url(/images/default-source/HomeRevamp/loginheader-bg.jpg);\r\n  background-repeat: repeat-x;\r\n  height: 96px;\r\n}\r\n\r\n.loginMainpage .loginheaderBg .iciciloginLogo {\r\n    padding: 25px 0;\r\n    text-align: center;\r\n    margin: auto;\r\n  }\r\n\r\n.loginMainpage .loginArea {\r\n  margin: 0;\r\n}\r\n\r\n.loginMainpage .loginArea h3 {\r\n    margin: 0;\r\n    color: #043c6d;\r\n    font-size: 20px;\r\n    padding-bottom: 20px;\r\n  }\r\n\r\n.loginMainpage .logDetails {\r\n  background: #fff;\r\n  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);\r\n  -moz-box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);\r\n  -webkit-box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);\r\n  -o-box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);\r\n  -ms-box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);\r\n  padding: 35px 40px 25px;\r\n  border-radius: 10px;\r\n  margin: 0 15%;\r\n  margin-top: -65px;\r\n}\r\n\r\n/*.loginMainpage .logDetails {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  padding: 15px 0;\r\n}\r\n*/\r\n\r\n.signUpdetails {\r\n  /* display: none;*/\r\n}\r\n\r\n.forPassDetails {\r\n  /* display: none;*/\r\n}\r\n\r\n.loginMainpage .emlPass {\r\n  width: 45%;\r\n  display: inline-block;\r\n  margin-right: 15px;\r\n}\r\n\r\n.loginMainpage .emlPass1 {\r\n  width: 45%;\r\n  display: block;\r\n  margin-right: 15px;\r\n  margin: auto;\r\n  padding: 10px 0 50px;\r\n}\r\n\r\n.loginMainpage .signSoc {\r\n  width: 45%;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  padding: 25px 0;\r\n}\r\n\r\n.loginMainpage .block {\r\n  position: relative;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.loginMainpage .block label {\r\n    cursor: auto;\r\n    display: inline-block;\r\n    font-size: 15px;\r\n    color: #adadad;\r\n    font-weight: normal;\r\n    position: absolute;\r\n    top: 26px;\r\n    transition: 0.5s;\r\n  }\r\n\r\n.loginMainpage .block.focus label {\r\n    top: 0px;\r\n    font-size: 13px;\r\n  }\r\n\r\n.loginMainpage .sInput input {\r\n  cursor: auto;\r\n  border: none;\r\n  color: #063b6d;\r\n  border-bottom: 1px solid #b4c4d3;\r\n  font-size: 16px;\r\n  z-index: 12;\r\n  width: 100%;\r\n  height: 30px;\r\n  margin-top: 15px;\r\n  outline: none;\r\n}\r\n\r\n.loginMainpage .sInput:after {\r\n  content: '';\r\n  /*  display: inline-block; */\r\n  width: 0px;\r\n  height: 1px;\r\n  transition: width .4s;\r\n  /*position: relative;*/\r\n  top: -15px;\r\n}\r\n\r\n.loginMainpage .sInput.focus:after {\r\n  width: 100%;\r\n}\r\n\r\n.loginMainpage .sInput.register-name.focus:after {\r\n  width: 75% !important;\r\n  display: none;\r\n}\r\n\r\n.loginMainpage .block label {\r\n  cursor: auto;\r\n  display: inline-block;\r\n  font-size: 15px;\r\n  color: #adadad;\r\n  font-weight: normal;\r\n  position: absolute;\r\n  top: 20px;\r\n  transition: 0.5s;\r\n}\r\n\r\n.loginMainpage .blocks label {\r\n  font-size: 15px;\r\n  color: #adadad;\r\n  font-weight: normal;\r\n}\r\n\r\n.loginMainpage .block.focus label {\r\n  top: 0px;\r\n  font-size: 13px;\r\n}\r\n\r\n.loginMainpage .loginBtn a {\r\n  color: #fff;\r\n  border-radius: 50px;\r\n  background: #063b6d;\r\n  width: 100%;\r\n  display: block;\r\n  padding: 13px 0;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  font-size: 14px;\r\n  margin: 15px 0px;\r\n}\r\n\r\n.loginMainpage .loginBtn a:hover {\r\n    background: #07355f;\r\n    transition: all 0.5s ease;\r\n  }\r\n\r\n.loginMainpage .forgLog {\r\n  padding: 15px 0;\r\n}\r\n\r\n.loginMainpage .forgLog a {\r\n    color: #585858;\r\n    font-size: 13px;\r\n  }\r\n\r\n.loginMainpage .forgLog a:hover {\r\n      text-decoration: underline;\r\n    }\r\n\r\n.loginMainpage .regNow {\r\n  background: #d9e2e9;\r\n  margin: 0 18%;\r\n  padding: 20px 0;\r\n  border-radius: 0 0 15px 15px;\r\n}\r\n\r\n.loginMainpage .regNow a {\r\n    color: #063c6a;\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n  }\r\n\r\n/*.loginMainpage .regNow a:hover{\r\n\ttext-decoration: none;\r\n}*/\r\n\r\n.loginMainpage .grayLine {\r\n  width: 1px;\r\n  background: #e7e9ea;\r\n  height: 160px;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  margin: 25px 20px;\r\n}\r\n\r\n.loginMainpage .clikSign {\r\n  position: relative;\r\n  font-size: 15px;\r\n  color: #666666;\r\n}\r\n\r\n.loginMainpage .clikSign:after {\r\n    content: '';\r\n    width: 50px;\r\n    height: 1px;\r\n    display: block;\r\n    background: #e7e9ea;\r\n    margin-left: 15px;\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 18px;\r\n  }\r\n\r\n.loginMainpage .clikSign:before {\r\n    content: '';\r\n    width: 50px;\r\n    height: 1px;\r\n    display: block;\r\n    background: #e7e9ea;\r\n    margin-left: 15px;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 30px;\r\n  }\r\n\r\n.loginMainpage .signSoc .socIcons {\r\n  text-align: center;\r\n  margin: auto;\r\n}\r\n\r\n.loginMainpage .signSoc .socIcons .googleLog {\r\n    background: #dc4335;\r\n    padding: 15px 22px;\r\n    color: #fff;\r\n    border-radius: 50px;\r\n    font-size: 13px;\r\n    margin-right: 10px;\r\n    border-bottom: 3px solid #dadada;\r\n  }\r\n\r\n.loginMainpage .signSoc .socIcons .fbLog {\r\n    background: #3b5999;\r\n    padding: 15px 32px;\r\n    color: #fff;\r\n    border-radius: 50px;\r\n    font-size: 13px;\r\n    border-bottom: 3px solid #dadada;\r\n  }\r\n\r\n.loginMainpage .signSoc .socIcons .icon-google-plus {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    padding-right: 15px;\r\n  }\r\n\r\n.loginMainpage .signSoc .socIcons .icon-facebook {\r\n    font-size: 22px;\r\n    vertical-align: middle;\r\n    padding-right: 15px;\r\n    line-height: 25px;\r\n  }\r\n\r\n.loginMainpage .signSoc span.orLog {\r\n  text-align: center;\r\n  margin: auto;\r\n  display: block;\r\n  border: 1px solid #e7e9ea;\r\n  border-radius: 50px;\r\n  height: 35px;\r\n  width: 35px;\r\n  line-height: 32px;\r\n  text-transform: uppercase;\r\n  color: #666;\r\n  margin-top: 5px;\r\n  position: relative;\r\n}\r\n\r\n.loginMainpage .signSoc span.orLog:after {\r\n    content: '';\r\n    height: 1px;\r\n    width: 80px;\r\n    display: block;\r\n    background: #e7e9ea;\r\n    position: absolute;\r\n    top: 16px;\r\n    right: 34px;\r\n  }\r\n\r\n.loginMainpage .signSoc span.orLog:before {\r\n    content: '';\r\n    height: 1px;\r\n    width: 80px;\r\n    display: block;\r\n    background: #e7e9ea;\r\n    position: absolute;\r\n    top: 16px;\r\n    left: 34px;\r\n  }\r\n\r\n.loginMainpage .signSoc a.guestLogbtn {\r\n  text-align: center;\r\n  display: block;\r\n  border: 1px solid #053c6d;\r\n  padding: 13px 0;\r\n  margin: 17px 10px 0;\r\n  border-radius: 50px;\r\n  text-transform: uppercase;\r\n  color: #053a6c;\r\n  font-weight: 600;\r\n}\r\n\r\n/*.loginMainpage .signSoc a.guestLogbtn:hover{\r\n\tbackground: #063b6d;\r\n\t    transition: all 0.5s ease;\r\n        color: #fff;\r\n}*/\r\n\r\n.paddNon {\r\n  padding: 0 !important;\r\n}\r\n\r\n.loginMainpage .calendarBox .date .ui-datepicker-trigger {\r\n  float: right;\r\n  margin: 5px 0 0;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 10px;\r\n}\r\n\r\n.signBtn {\r\n  width: 45%;\r\n  margin: 0 auto;\r\n  padding-top: 5px;\r\n}\r\n\r\n.forPassDetails .logDetails h3 {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.lognOtp {\r\n  /*display: none;*/\r\n}\r\n\r\n.logwitPass {\r\n  /*display: none;*/\r\n  text-align: center;\r\n}\r\n\r\n.notActive {\r\n  pointer-events: none;\r\n  cursor: default;\r\n}\r\n\r\n.loginMainpage .notActive a {\r\n  background: #cccccc;\r\n}\r\n\r\nspan.sendOtp {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 0;\r\n}\r\n\r\nspan.sendOtp a {\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    color: #053c6d;\r\n  }\r\n\r\n.resendOtp {\r\n}\r\n\r\n.resOtp {\r\n  font-size: 15px;\r\n  color: #053c6d;\r\n  text-decoration: underline;\r\n}\r\n\r\n.emlOtp {\r\n  font-size: 15px;\r\n  color: #282828;\r\n}\r\n\r\n.logDetails .mainselectBox {\r\n  width: 20%;\r\n  display: inline-block;\r\n  margin: 0 !important;\r\n}\r\n\r\n.logDetails .widSel {\r\n  width: 75%;\r\n  display: inline-block;\r\n  margin-left: 13px;\r\n}\r\n\r\n.logDetails .mainselectBox .styledSelect {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: transparent;\r\n  padding: 8px 10px 8px 0;\r\n  color: #063b6d;\r\n  font-size: 15px;\r\n  opacity: 0;\r\n}\r\n\r\n.logDetails .block.drp label {\r\n  top: 7px;\r\n}\r\n\r\n.logDetails .block label {\r\n  cursor: auto;\r\n  display: inline-block;\r\n  font-size: 15px;\r\n  color: #adadad;\r\n  font-weight: normal;\r\n  position: absolute;\r\n  top: 20px;\r\n  transition: 0.5s;\r\n}\r\n\r\n.mainselectBox .select {\r\n  margin-bottom: 0px !important;\r\n}\r\n\r\n.errorComm, .errorCommFP {\r\n  color: #ff0000;\r\n  font-size: 13px;\r\n  top: -1px;\r\n  background: #fff;\r\n  width: 100%;\r\n  padding: 0 0 5px;\r\n  display: inline-block;\r\n  z-index: 9999;\r\n  text-align: center;\r\n}\r\n\r\n.unstyled span {\r\n  font-size: 15px;\r\n  color: #282828;\r\n  font-weight: 400;\r\n  position: relative;\r\n  top: 5px;\r\n}\r\n\r\n.styled-checkbox {\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n\r\n.styled-checkbox + label {\r\n    position: relative;\r\n    cursor: pointer;\r\n    padding: 0;\r\n  }\r\n\r\n.styled-checkbox + label:before {\r\n      content: '';\r\n      margin-right: 10px;\r\n      display: inline-block;\r\n      vertical-align: text-top;\r\n      width: 25px;\r\n      height: 25px;\r\n      background: #fff;\r\n      border: 1px solid #c5d9e2;\r\n      border-radius: 5px;\r\n    }\r\n\r\n.styled-checkbox:checked + label:before {\r\n    background: #da6a18;\r\n  }\r\n\r\n.styled-checkbox:checked + label:after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 7px;\r\n    top: 13px;\r\n    background: white;\r\n    width: 2px;\r\n    height: 2px;\r\n    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;\r\n    transform: rotate(45deg);\r\n  }\r\n\r\n.unstyled {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style-type: none;\r\n  text-align: left;\r\n}\r\n\r\n.unstyled a {\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    position: relative;\r\n    top: 5px;\r\n  }\r\n\r\n.resetthank {\r\n  text-align: center;\r\n  background: #edfcf4;\r\n  border: 1px solid #77c89e;\r\n  border-radius: 30px;\r\n  width: 75%;\r\n  margin: 65px auto;\r\n}\r\n\r\n.resetthank p {\r\n    color: #096737;\r\n    text-align: left;\r\n    padding: 25px 30px 20px;\r\n  }\r\n\r\n.resetthank span {\r\n    font-weight: bold;\r\n  }\r\n\r\n/*login signup*/\r\n\r\n// responsive styles\r\n@media(min-width:1200px) {\r\n  .container\r\n\r\n{\r\n  width: 1200px !important;\r\n}\r\n\r\n}\r\n\r\n@media(max-width: 1200px) {\r\n  /*latest videos*/\r\n  .videoDetailsbdr .latestVideos ul li {\r\n    width: 25%;\r\n  }\r\n\r\n  .videoDetailsbdr .videosDetails {\r\n    padding: 30px 0 0 0;\r\n  }\r\n  /*latest videos*/\r\n\r\n  /*footer*/\r\n  .footerContainerbg .socialIcons ul li {\r\n    margin-right: 0px;\r\n  }\r\n  /*footer*/\r\n}\r\n\r\n@media(max-width: 1199px) {\r\n  /*insurance banner*/\r\n  .mainbannerBg h1 {\r\n    padding: 20px 0;\r\n    font-size: 20px;\r\n    margin: 0;\r\n  }\r\n\r\n  .mainbannerBg .insuranceBox ul li {\r\n    width: 100%;\r\n    min-height: auto;\r\n    text-align: left;\r\n    margin-right: 0;\r\n    margin-bottom: 5px;\r\n    position: relative;\r\n  }\r\n\r\n    .mainbannerBg .insuranceBox ul li:after {\r\n      content: '';\r\n      border: solid #808080;\r\n      border-width: 0 1px 1px 0;\r\n      display: inline-block;\r\n      padding: 3px;\r\n      transform: rotate(-45deg);\r\n      -webkit-transform: rotate(-45deg);\r\n      float: right;\r\n      height: 20px;\r\n      width: 20px;\r\n      position: absolute;\r\n      right: 0;\r\n      top: 0;\r\n      bottom: 0;\r\n      margin: auto;\r\n      margin-right: 25px;\r\n    }\r\n\r\n    .mainbannerBg .insuranceBox ul li:last-child {\r\n      margin-bottom: 45px;\r\n    }\r\n\r\n    .mainbannerBg .insuranceBox ul li:hover {\r\n      box-shadow: none;\r\n    }\r\n\r\n    .mainbannerBg .insuranceBox ul li .insImg {\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n      padding: 0 40px 0 20px;\r\n    }\r\n\r\n    .mainbannerBg .insuranceBox ul li .institle {\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n    }\r\n\r\n    .mainbannerBg .insuranceBox ul li span.gtBtn {\r\n      display: none;\r\n    }\r\n\r\n    .mainbannerBg .insuranceBox ul li h3 {\r\n      font-size: 20px;\r\n    }\r\n  /*insurance banner*/\r\n\r\n  /*awards blog*/\r\n\r\n  .awardsBlogmain .awardsBlog h2 {\r\n    font-size: 24px;\r\n  }\r\n\r\n  /*awards blog*/\r\n  /*insurance banner*/\r\n  /*\t .mainbannerBg .insuranceBox ul li:after{\r\n\tbottom: 56px;\r\n\r\n}*/\r\n  /*insurance banner*/\r\n}\r\n\r\n@media(min-width: 991px) and (max-width: 1199px) {\r\n  /*footer*/\r\n  .footerContainerbg .socialIcons ul li a {\r\n    font-size: 18px;\r\n    height: 32px;\r\n    width: 32px;\r\n  }\r\n  /*footer*/\r\n\r\n  /*partner section*/\r\n  .partnerSection .networkAll a {\r\n    width: 100%;\r\n  }\r\n\r\n  .partnerSection .networkAll h2 {\r\n    font-size: 24px;\r\n  }\r\n\r\n  .partnerSection .networkAll h4, .partnerSection .networkAll .headingh4 {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .partnerSection .networkAll p {\r\n    min-height: 150px;\r\n  }\r\n  /*partner section*/\r\n\r\n  /*insurance App*/\r\n  .insuranceAppbg .insuareAppdetails .insApp {\r\n    width: 48%;\r\n  }\r\n  /*insurance App*/\r\n\r\n  /*insurance article start*/\r\n  .articleSection .insuranceUpdinfo {\r\n    margin: 13px 0;\r\n  }\r\n  /*insurance article start*/\r\n\r\n  /*login signup*/\r\n  .loginMainpage .loginArea {\r\n    margin: 0 10%;\r\n  }\r\n\r\n  .loginMainpage .signSoc a.guestLogbtn {\r\n    margin: 17px 30px 0;\r\n  }\r\n\r\n  .loginMainpage .logDetails {\r\n    padding: 35px 20px 25px;\r\n    margin: 0;\r\n    margin-top: -65px;\r\n  }\r\n\r\n  .loginMainpage .signSoc .socIcons .fbLog {\r\n    padding: 15px 25px;\r\n  }\r\n\r\n  .loginMainpage .signSoc .socIcons .googleLog {\r\n    padding: 15px 25px;\r\n  }\r\n\r\n  /*login signup*/\r\n\r\n  /*agent login*/\r\n\r\n  .rangeBusline li {\r\n    padding: 10px 40px 25px 0;\r\n  }\r\n\r\n  .rangeBusline .divLine {\r\n    margin: 0 12% 8px 0;\r\n  }\r\n  /*agent login*/\r\n\r\n}\r\n\r\n@media(min-width: 768px) and (max-width: 991px) {\r\n  /*footer*/\r\n  .footerContainerbg .socialIcons ul li {\r\n    margin-bottom: 5px;\r\n  }\r\n  /*footer*/\r\n\r\n  /*health Advisor*/\r\n  .healthAdvisor p {\r\n    padding-bottom: 0;\r\n  }\r\n\r\n  .healthAdvisor .helthAdarea {\r\n    padding: 0;\r\n  }\r\n  /*health Advisor*/\r\n\r\n  /*awards blog*/\r\n  .awardsBlogmain .awardsBlog .riskInv {\r\n    min-height: 222px;\r\n  }\r\n\r\n  .awardsBlogmain .slideshowRisk {\r\n    min-height: 185px;\r\n  }\r\n  /*awards blog*/\r\n\r\n\r\n  /*login signup*/\r\n  .loginMainpage .loginArea {\r\n    margin: 0 8%;\r\n    padding: 35px 25px 15px;\r\n    margin-top: -35px;\r\n  }\r\n\r\n  .loginMainpage .logDetails .emlPass {\r\n    width: 42%;\r\n  }\r\n\r\n  .loginMainpage .logDetails .signSoc {\r\n    width: 42%;\r\n  }\r\n\r\n  .loginMainpage .clikSign:before {\r\n    width: 35px;\r\n    position: absolute;\r\n    right: 5px;\r\n  }\r\n\r\n  .loginMainpage .clikSign:after {\r\n    width: 35px;\r\n    right: 0;\r\n    left: -9px;\r\n  }\r\n\r\n  .loginMainpage .signSoc .socIcons .googleLog {\r\n    padding: 10px 8px;\r\n    font-size: 12px;\r\n    margin-right: 5px;\r\n  }\r\n\r\n  .loginMainpage .signSoc .socIcons .fbLog {\r\n    padding: 10px 8px;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .loginMainpage .signSoc a.guestLogbtn {\r\n    margin: 17px 10px 0;\r\n  }\r\n\r\n  .loginMainpage .logDetails {\r\n    padding: 35px 20px 25px;\r\n    margin: 0;\r\n    margin-top: -65px;\r\n  }\r\n\r\n  /*login signup*/\r\n}\r\n\r\n@media(max-width: 991px) {\r\n\r\n\r\n  .partnerSection .networkAll {\r\n    border-bottom: 1px solid #e6ebf0;\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .articleSection .insuranceArticles {\r\n    box-shadow: none;\r\n  }\r\n\r\n  header {\r\n    height: 100px;\r\n  }\r\n\r\n\r\n  .articleSection .dotsBtn {\r\n    padding: 0 25px 25px;\r\n  }\r\n\r\n  .artDots {\r\n    width: 100%;\r\n  }\r\n\r\n  .awardsBlogmain .mainDots {\r\n    bottom: 0;\r\n  }\r\n\r\n  .insuranceAppbg .insuareAppdetails {\r\n    padding: 25px 0 35px;\r\n  }\r\n  /*latest videos*/\r\n\r\n  .videoDetailsbdr .latestVideos ul li {\r\n    width: 50%;\r\n  }\r\n  /*latest videos*/\r\n\r\n  /*partner section*/\r\n  .partnerSection .networkAll p {\r\n    min-height: auto;\r\n  }\r\n\r\n  .insuranceAppbg .insuareAppdetails {\r\n    text-align: center;\r\n  }\r\n\r\n    .insuranceAppbg .insuareAppdetails .insSpect {\r\n      width: 75%;\r\n      text-align: left;\r\n    }\r\n\r\n  .partnerSection h1 {\r\n    font-size: 28px;\r\n  }\r\n\r\n  .bodyWrapper h1 {\r\n    margin-top: 0;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .bodyWrapper .cusSpeak h1 {\r\n    margin-top: 10px;\r\n    font-size: 24px;\r\n  }\r\n\r\n  /*partner section*/\r\n\r\n  /*insurance App*/\r\n\r\n  .insuranceAppbg .insuareAppdetails .insApp {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-bottom: 45px;\r\n  }\r\n  /*insurance App*/\r\n\r\n  \r\n  /*insurance article start*/\r\n\r\n  /*awards blog*/\r\n  .awardsBlogmain .awardsBlog h3 {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .awardsBlogmain .awardsBlog .riskInv {\r\n    padding: 10px 12px;\r\n    margin-right: 0;\r\n    border: 12px solid #f2f5f8;\r\n  }\r\n\r\n  .awardsBlogmain {\r\n    padding: 20px 0 10px;\r\n  }\r\n\r\n\r\n  /*awards blog*/\r\n\r\n  /*health advisor*/\r\n  .healthAdvisor {\r\n    margin: 50px 0 0;\r\n  }\r\n  /*health advisor*/\r\n\r\n\r\n  .videoDetailsbdr .latestVideos ul li:nth-child(3) {\r\n    display: none;\r\n  }\r\n\r\n  .videoDetailsbdr .latestVideos ul li:nth-child(4) {\r\n    display: none;\r\n  }\r\n\r\n\r\n\r\n  /* Header responsive css start*/\r\n  .mainbannerBg {\r\n    background-position: 23% 0;\r\n  }\r\n\r\n  header .header .lombardLogo {\r\n    display: none;\r\n  }\r\n\r\n  .mobWelBlock {\r\n    background: #e88c2b url(\"/images/default-source/HomeRevamp/mobnavbg.jpg\") 0 bottom repeat-x;\r\n    padding: 10px 0;\r\n    width: 100%;\r\n    height: 100px;\r\n    position: relative;\r\n  }\r\n\r\n  .menuClose {\r\n    position: relative;\r\n    width: 20px;\r\n    height: 20px;\r\n    position: absolute;\r\n    right: 12px;\r\n    top: 30px;\r\n    color: #fff;\r\n    font-size: 20px;\r\n  }\r\n\r\n    .menuClose::before {\r\n      content: '';\r\n      position: absolute;\r\n      left: 0;\r\n      top: 0;\r\n      width: 1.3px;\r\n      height: 35px;\r\n      background: #fff;\r\n      transform: rotate(-45deg);\r\n    }\r\n\r\n    .menuClose::after {\r\n      content: '';\r\n      position: absolute;\r\n      left: 0;\r\n      top: 0;\r\n      width: 1.3px;\r\n      height: 35px;\r\n      background: #fff;\r\n      transform: rotate(45deg);\r\n    }\r\n\r\n\r\n  .mobMenuWrapper {\r\n    overflow: auto;\r\n    background: #fff;\r\n    position: fixed;\r\n    left: -100%;\r\n    top: 0;\r\n    z-index: 999;\r\n    width: 100%;\r\n    height: 100vh;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\n  .mobmenuOpen {\r\n    left: 0;\r\n  }\r\n\r\n  header .nav ul.navBar {\r\n    width: 100%;\r\n  }\r\n\r\n  header ul.calFeedback {\r\n    display: block;\r\n    width: 100%;\r\n    margin-top: -7px;\r\n  }\r\n\r\n    header ul.calFeedback li {\r\n      width: 100%;\r\n    }\r\n\r\n      header ul.calFeedback li.mobhg {\r\n        display: inherit;\r\n        border-bottom: 1px solid #e6ebef;\r\n      }\r\n\r\n  header .logoutSec {\r\n    padding: 15px 16px 30px 16px;\r\n    border: 1px solid #e6ebef;\r\n    float: left;\r\n    width: 100%;\r\n  }\r\n\r\n    header .logoutSec p {\r\n      font-size: 11px;\r\n      margin-top: 18px;\r\n      position: absolute;\r\n      color: #999999;\r\n    }\r\n\r\n    header .logoutSec .linkBtn {\r\n      padding: 0;\r\n      border: 0;\r\n      font-size: 14px;\r\n      text-transform: uppercase;\r\n      color: #e88c2b;\r\n      font-weight: 500;\r\n    }\r\n\r\n      header .logoutSec .linkBtn:hover {\r\n        color: #e88c2b;\r\n        background: transparent;\r\n      }\r\n\r\n      header .logoutSec .linkBtn span {\r\n        display: none;\r\n      }\r\n\r\n  header .nav ul.navBar li {\r\n    display: block;\r\n    width: 100%;\r\n    border-bottom: 1px solid #fff;\r\n    background: #f2f5f8;\r\n    float: left;\r\n  }\r\n\r\n\r\n\r\n    header .nav ul.navBar li a {\r\n      color: #063b6d;\r\n      font-size: 14px;\r\n      display: block;\r\n    }\r\n\r\n  header .nav ul.navBar ul.otherdrMenu li a {\r\n    color: #707070;\r\n  }\r\n\r\n  header .nav ul.navBar li a span.dwnArrow {\r\n    border: solid #6989a7;\r\n    border-width: 0 1.2px 1.2px 0;\r\n    float: right;\r\n    transform: rotate(45deg);\r\n    -webkit-transform: rotate(45deg);\r\n    padding: 4px;\r\n    margin-right: 3px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\n  header .nav ul.navBar li.mobPro a span.dwnArrow {\r\n    border: solid #6989a7;\r\n    border-width: 0 1.2px 1.2px 0;\r\n    float: right;\r\n    transform: rotate(-45deg);\r\n    -webkit-transform: rotate(-45deg);\r\n    padding: 4px;\r\n    margin-right: 3px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\n  header .nav ul.navBar li a.accordActive span.dwnArrow {\r\n    border: solid #063b6d;\r\n    border-width: 0 1.2px 1.2px 0;\r\n    float: right;\r\n    transform: rotate(-135deg);\r\n    -webkit-transform: rotate(-135deg);\r\n    padding: 4px;\r\n    margin-top: 7px;\r\n  }\r\n\r\n  header .nav ul.navBar li a.accordClose {\r\n    background: #f2f5f8;\r\n  }\r\n\r\n  header .nav ul.navBar li a.accordActive {\r\n    background: #dae2e9;\r\n  }\r\n\r\n  header .nav ul.navBar li a.mobProduct {\r\n    background: #f2f5f8;\r\n  }\r\n\r\n\r\n  header .nav ul.navBar li a.mactive {\r\n    background: #f2f5f8;\r\n  }\r\n\r\n  header .nav ul.navBar ul.otherdrMenu li:hover a {\r\n    background: #fff;\r\n    color: #707070;\r\n  }\r\n\r\n  header .nav ul.navBar ul.otherdrMenu li:hover a {\r\n    background: #fff;\r\n    color: #707070;\r\n  }\r\n\r\n\r\n  header .nav .menuBox {\r\n    border-bottom: 0;\r\n    border-radius: none;\r\n    box-shadow: none;\r\n    width: 100%;\r\n  }\r\n\r\n  header .nav ul.navBar .menuBox li, header .nav ul.navBar .menuBox li:nth-child(3) {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n  header ul.calFeedback li a {\r\n    color: #707070;\r\n    font-size: 14px;\r\n    display: block;\r\n  }\r\n\r\n\r\n  header .nav ul.navBar .otherdrMenu {\r\n    width: 100%;\r\n    position: relative;\r\n  }\r\n\r\n  header .nav ul.navBar li:hover a:after {\r\n    display: none;\r\n  }\r\n\r\n  header .nav ul.navBar .otherdrMenu li:first-child {\r\n    padding-top: 0;\r\n  }\r\n\r\n  header .mainNvbg {\r\n    height: 55px;\r\n    position: relative;\r\n  }\r\n\r\n  .mobHumberger {\r\n    width: 25px;\r\n    float: left;\r\n    margin: 20px 3px;\r\n  }\r\n\r\n    .mobHumberger span {\r\n      display: block;\r\n      background: #fff;\r\n      height: 2px;\r\n      width: 100%;\r\n      margin-bottom: 5px;\r\n      border-radius: 20px;\r\n      -webkit-border-radius: 20px;\r\n      -moz-border-radius: 20px;\r\n      -ms-border-radius: 20px;\r\n    }\r\n\r\n  .mobLogo {\r\n    width: 150px;\r\n    padding: 13px 0 0 0;\r\n    /* float: left; */\r\n    text-align: center;\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    display: inline-block;\r\n  }\r\n\r\n  header .nav ul.navBar .menuBox li {\r\n    padding: 0;\r\n  }\r\n\r\n    header .nav ul.navBar .menuBox li h4, header .nav ul.navBar .menuBox li .headingh4 {\r\n      background: #f2f5f8;\r\n      font-weight: 400;\r\n      margin: 0;\r\n      padding: 19px 60px;\r\n      position: relative;\r\n    }\r\n\r\n      header .nav ul.navBar .menuBox li h4.accordActive, header .nav ul.navBar .menuBox li .headingh4.accordActive {\r\n        background: #dae2e9;\r\n      }\r\n\r\n      header .nav ul.navBar .menuBox li h4:after, header .nav ul.navBar .menuBox li .headingh4:after {\r\n        content: '';\r\n        position: absolute;\r\n        right: 20px;\r\n        top: 20px;\r\n        border: solid #6989a7;\r\n        border-width: 0 1.2px 1.2px 0;\r\n        float: right;\r\n        transform: rotate(45deg);\r\n        -webkit-transform: rotate(45deg);\r\n        padding: 4px;\r\n        transition: all 0.3s ease-in-out;\r\n      }\r\n\r\n      header .nav ul.navBar .menuBox li h4.accordActive:after, header .nav ul.navBar .menuBox li .headingh4.accordActive:after {\r\n        top: 25px;\r\n        transform: rotate(-135deg);\r\n        -webkit-transform: rotate(-135deg);\r\n        transition: all 0.3s ease-in-out;\r\n      }\r\n\r\n\r\n  header .nav ul.navBar .menuBox ul.insuranceBlock li {\r\n    margin: 0;\r\n  }\r\n\r\n    header .nav ul.navBar .menuBox ul.insuranceBlock li a {\r\n      background: #fff;\r\n      color: #333333;\r\n    }\r\n\r\n    header .nav ul.navBar .menuBox ul.insuranceBlock li:hover a {\r\n      background: #fff;\r\n      color: #063b6d;\r\n    }\r\n\r\n  header .nav .mobPro .menuBox {\r\n    display: block;\r\n    position: absolute;\r\n    left: -100%;\r\n    transition: all 0.5s ease-in-out;\r\n  }\r\n\r\n  header .nav .mobPro .menuBox {\r\n    display: block;\r\n    top: 0;\r\n  }\r\n\r\n    header .nav .mobPro .menuBox.proOpen {\r\n      display: block;\r\n      left: 0;\r\n      height: 82vh;\r\n    }\r\n\r\n\r\n  header .nav ul.navBar .menuBox li.mobProBack {\r\n    padding-top: 0;\r\n    display: block;\r\n  }\r\n\r\n    header .nav ul.navBar .menuBox li.mobProBack a {\r\n      background: #fff;\r\n      color: #e57200;\r\n    }\r\n\r\n      header .nav ul.navBar .menuBox li.mobProBack a span.dwnArrow {\r\n        border: solid #e57200;\r\n        border-width: 0 1.2px 1.2px 0;\r\n        float: left;\r\n        transform: rotate(135deg);\r\n        -webkit-transform: rotate(135deg);\r\n        padding: 4px;\r\n        transition: all 0.3s ease-in-out;\r\n      }\r\n\r\n  header .callBfeed {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  header ul.calFeedback li a.feedClose {\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 20px;\r\n    padding: 0;\r\n    font-size: 16px;\r\n    color: #000;\r\n    display: inline-block;\r\n  }\r\n\r\n  header ul.calFeedback li a.active {\r\n    background: transparent;\r\n  }\r\n\r\n    header ul.calFeedback li a.active:after {\r\n      display: none;\r\n    }\r\n\r\n  header .header .rightBlog .liveChat {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 43px;\r\n    z-index: 99\r\n  }\r\n\r\n    header .header .rightBlog .liveChat a {\r\n      font-size: 0;\r\n      background: url(/images/default-source/HomeRevamp/page-sprite-img.png);\r\n      background-position: -572px -248px;\r\n      width: 39px;\r\n      height: 40px;\r\n      display: inline-block;\r\n      border: 0;\r\n    }\r\n\r\n      header .header .rightBlog .liveChat a .dotsGreen {\r\n        font-size: 0;\r\n        display: none;\r\n      }\r\n\r\n  header .header .rightBlog .lombardCall {\r\n    float: left !important;\r\n    padding: 0;\r\n    margin-top: 6px;\r\n  }\r\n\r\n    header .header .rightBlog .lombardCall span {\r\n      margin-top: -2px;\r\n    }\r\n\r\n  header .header .rightBlog {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 7px 0 !important;\r\n    overflow: hidden;\r\n  }\r\n\r\n    header .header .rightBlog .feedBack {\r\n      display: none;\r\n    }\r\n\r\n  .mobCallback {\r\n    position: relative;\r\n    display: inline-block;\r\n    float: right;\r\n    border: 1px solid #ebebeb;\r\n    margin-top: 2px;\r\n    border-radius: 50px;\r\n    padding: 6px 12px 6px 33px;\r\n    line-height: 15px;\r\n    color: #073b6b;\r\n    font-size: 13px;\r\n  }\r\n\r\n    .mobCallback::before {\r\n      content: '';\r\n      width: 20px;\r\n      height: 18px;\r\n      position: absolute;\r\n      left: 11px;\r\n      top: 6px;\r\n      background: url(/images/default-source/HomeRevamp/page-sprite-img.png);\r\n      background-position: -791px -256px;\r\n    }\r\n\r\n  header ul.calFeedback li a.callBackhide {\r\n    display: none;\r\n  }\r\n\r\n  header .welProf {\r\n    float: left;\r\n    padding: 5px 16px;\r\n  }\r\n\r\n    header .welProf h4, header .welProf .headingh4 {\r\n      display: none;\r\n    }\r\n\r\n    header .welProf h5 {\r\n      color: #fff;\r\n      margin: 0 0 10px 0;\r\n      font-weight: 300;\r\n    }\r\n\r\n    header .welProf .guestIco {\r\n      background-image: url(/images/default-source/HomeRevamp/guestico.png);\r\n      background-size: cover;\r\n      display: block;\r\n      width: 60px;\r\n      height: 60px;\r\n      text-align: center;\r\n      margin: 5px 5px 0 0;\r\n      float: left;\r\n    }\r\n\r\n    header .welProf .menIco {\r\n      background-image: url(/images/default-source/HomeRevamp/menico.png);\r\n      background-size: cover;\r\n      display: block;\r\n      width: 60px;\r\n      height: 60px;\r\n      text-align: center;\r\n      margin: 5px 5px 0 0;\r\n      float: left;\r\n      display: none;\r\n    }\r\n\r\n    header .welProf .womIco {\r\n      background-image: url(/images/default-source/HomeRevamp/womico.png);\r\n      background-size: cover;\r\n      display: block;\r\n      width: 60px;\r\n      height: 60px;\r\n      text-align: center;\r\n      margin: 5px 5px 0 0;\r\n      float: left;\r\n      display: none;\r\n    }\r\n\r\n  .mobloginblock {\r\n    float: left;\r\n    padding: 10px;\r\n  }\r\n\r\n    .mobloginblock .mobloginBt {\r\n      text-transform: uppercase;\r\n      display: inline-block;\r\n      line-height: 21px;\r\n      padding: 3px 15px;\r\n      border: 0;\r\n      border-radius: 20px;\r\n      font-size: 14px;\r\n      color: #e57200;\r\n      background: #fff;\r\n    }\r\n\r\n  header .welProf .mobAfterlogin {\r\n    display: none;\r\n  }\r\n\r\n  header .welProf .mobBeforelogin {\r\n    display: block;\r\n  }\r\n\r\n  header .welProf .mobAfterlogin h3 {\r\n    margin: 0 0 5px 0;\r\n    color: #fff;\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n  }\r\n\r\n  header .welProf .mobAfterlogin .editProf a {\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  header .nav ul.navBar .menuBox .helthInsico {\r\n    background-position: -423px -523px;\r\n  }\r\n\r\n  header .nav ul.navBar .menuBox .motorInsico {\r\n    background-position: -182px -523px;\r\n  }\r\n\r\n  header .nav ul.navBar .menuBox .otherInsico {\r\n    background-position: -47px -523px;\r\n  }\r\n\r\n  header .nav ul.navBar .menuBox .travelInsico {\r\n    background-position: -297px -525px;\r\n  }\r\n\r\n  header .nav ul.navBar .menuBox .homeInsico {\r\n    background-position: -542px -523px;\r\n  }\r\n\r\n  .mainbannerBg .insuranceBox .insImg .twoWhico, .mainbannerBg .insuranceBox .insImg .carinIco, .mainbannerBg .insuranceBox .insImg .travllinIco, .mainbannerBg .insuranceBox .insImg .healthIncico, .mainbannerBg .insuranceBox .insImg .homeincIco {\r\n    width: 115px;\r\n    height: 110px;\r\n  }\r\n\r\n  .mainbannerBg .insuranceBox .insImg .twoWhico {\r\n    background-position: -28px -351px;\r\n  }\r\n\r\n  .mainbannerBg .insuranceBox .insImg .carinIco {\r\n    background-position: -182px -355px;\r\n  }\r\n\r\n  .mainbannerBg .insuranceBox .insImg .travllinIco {\r\n    background-position: -352px -355px;\r\n  }\r\n\r\n  .mainbannerBg .insuranceBox .insImg .healthIncico {\r\n    background-position: -512px -355px;\r\n  }\r\n\r\n  .mainbannerBg .insuranceBox .insImg .homeincIco {\r\n    background-position: -660px -355px;\r\n  }\r\n\r\n  .mainbannerBg .insuranceBox ul li:after {\r\n    height: 12px;\r\n    width: 12px;\r\n    right: 15px;\r\n  }\r\n\r\n  .mainbannerBg .insuranceBox ul li h3 {\r\n    margin: 0 0 5px 0;\r\n    padding: 0;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .mainbannerBg .insuranceBox ul li h5 {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  .partnerSection .networkAll a {\r\n    width: auto;\r\n  }\r\n\r\n  .partnerSection .networksPartner p {\r\n    line-height: inherit;\r\n  }\r\n  /* Header responsive css end*/\r\n\r\n  /*agenr form*/\r\n\r\n  .loginMainpage .agentAppform {\r\n    margin-top: 25px;\r\n  }\r\n\r\n\r\n  /*agenr form*/\r\n\r\n}\r\n\r\n@media(min-width: 991px) {\r\n  .footerContainerbg .socialIcons ul li {\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .customerSpeakbg .speakBlock {\r\n    padding: 30px 12px 20px;\r\n  }\r\n\r\n  .footerContainerbg .socialIcons ul li {\r\n    margin-bottom: 5px;\r\n  }\r\n}\r\n\r\n@media(max-width: 767px) {\r\n\r\n\r\n\r\n  /*latest videos*/\r\n\r\n  .videoDetailsbdr .latestVideos ul li {\r\n    width: 100%;\r\n  }\r\n\r\n    .videoDetailsbdr .latestVideos ul li:nth-child(2) {\r\n      display: none;\r\n    }\r\n\r\n    .videoDetailsbdr .latestVideos ul li:nth-child(3) {\r\n      display: none;\r\n    }\r\n\r\n    .videoDetailsbdr .latestVideos ul li:nth-child(4) {\r\n      display: none;\r\n    }\r\n\r\n    .videoDetailsbdr .latestVideos ul li a h4 {\r\n      font-size: 14px;\r\n    }\r\n  /*latest videos*/\r\n\r\n  /*footer*/\r\n  .footerContainerbg .footerMenu {\r\n    margin: 0 30px;\r\n  }\r\n\r\n    .footerContainerbg .footerMenu h4 {\r\n      padding: 10px 0 20px;\r\n      border-bottom: 1px solid #dee7ee;\r\n      cursor: pointer;\r\n    }\r\n\r\n  .footerContainerbg h4.listActive {\r\n    border-bottom: none;\r\n    position: relative;\r\n  }\r\n\r\n  .footerContainerbg .footerMenu h4.listActive:after {\r\n    content: \"\\2212\";\r\n    position: relative;\r\n    display: inline-block;\r\n    font-weight: normal;\r\n    font-size: 30px;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    float: right;\r\n    transition: transform .25s linear;\r\n    -webkit-transition: -webkit-transform .25s linear;\r\n  }\r\n\r\n  .footerContainerbg .footerMenu h4.listClose:after {\r\n    content: \"\\002b\";\r\n    float: right;\r\n    font-size: 26px;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    float: right;\r\n    display: inline-block;\r\n    transition: transform .25s linear;\r\n    -webkit-transition: -webkit-transform .25s linear;\r\n  }\r\n\r\n  .footerContainerbg .footerMenu ul {\r\n    display: none;\r\n  }\r\n\r\n    .footerContainerbg .footerMenu ul li {\r\n      padding: 0 25px;\r\n    }\r\n\r\n      .footerContainerbg .footerMenu ul li a {\r\n        line-height: 30px;\r\n      }\r\n\r\n  .footerContainerbg .socialIcons {\r\n    text-align: center;\r\n  }\r\n  /*footer*/\r\n\r\n  /*partner section*/\r\n  .partnerSection .networksPartner p {\r\n    font-size: 16px;\r\n    width: 100%;\r\n    padding: 20px 10px 40px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 24px;\r\n  }\r\n\r\n  h5 {\r\n    font-size: 15px;\r\n  }\r\n  /*partner section*/\r\n\r\n  /*health Advisor*/\r\n  .healthAdvisor img {\r\n    text-align: center;\r\n    margin: auto;\r\n  }\r\n\r\n  .healthAdvisor .helthAdarea {\r\n    text-align: center;\r\n  }\r\n  /*health Advisor*/\r\n\r\n  /*insurance article start*/\r\n  .articleSection .insuranceUpdinfo {\r\n    width: 60%;\r\n    float: none;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  \r\n\r\n  .articleSection .artInoupdates {\r\n    padding: 20px 0 10px;\r\n  }\r\n  /*insurance article start*/\r\n\r\n\r\n  /*awards blog*/\r\n  .awardsBlogmain .awardsBlog h2 {\r\n    text-align: center;\r\n  }\r\n\r\n  .awardsBlogmain .awardsBlog {\r\n    text-align: center;\r\n    margin: auto;\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n    .awardsBlogmain .awardsBlog img {\r\n      text-align: center;\r\n      margin: auto;\r\n      /*awards blog*/\r\n    }\r\n  /*insurance banner*/\r\n  .mainbannerBg .insuranceBox ul li img {\r\n    padding: 0;\r\n  }\r\n\r\n  /*insurance banner*/\r\n\r\n  /*login signup*/\r\n  .loginMainpage .logDetails .emlPass {\r\n    width: 100%;\r\n  }\r\n\r\n  .loginMainpage .grayLine {\r\n    display: none;\r\n  }\r\n\r\n  .loginMainpage .logDetails .signSoc {\r\n    width: 100%;\r\n  }\r\n\r\n  .loginMainpage .loginArea {\r\n    margin: 0;\r\n    margin-top: 0px;\r\n    padding: 35px 5px;\r\n  }\r\n\r\n  .loginMainpage .signSoc a.guestLogbtn {\r\n    margin: 17px 15px 0;\r\n  }\r\n\r\n  .loginMainpage .clikSign:after {\r\n    display: none;\r\n  }\r\n\r\n  .loginMainpage .clikSign:before {\r\n    display: none;\r\n  }\r\n\r\n  .loginMainpage .regNow {\r\n    margin: 0 18% 3%;\r\n  }\r\n\r\n  .signBtn {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .loginMainpage .logDetails {\r\n    padding: 35px 20px 25px;\r\n    border-radius: 10px;\r\n    margin: 0;\r\n    margin-top: -65px;\r\n  }\r\n\r\n  .loginMainpage .signSoc .socIcons .googleLog {\r\n    padding: 15px 20px;\r\n  }\r\n\r\n  .loginMainpage .signSoc .socIcons .fbLog {\r\n    padding: 15px 18px;\r\n  }\r\n\r\n  .loginMainpage .emlPass1 {\r\n    width: 100%;\r\n  }\r\n\r\n  header .header .rightBlog {\r\n    float: none;\r\n    display: block;\r\n    padding: 5px 0 15px;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n  }\r\n\r\n    header .header .rightBlog .lombardCall {\r\n      display: inline-block;\r\n      float: none;\r\n      padding-top: 0;\r\n    }\r\n\r\n  header .header .lombardLogo {\r\n    padding: 22px 0;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    display: block;\r\n  }\r\n  /*login signup*/\r\n\r\n  \r\n\r\n \r\n\r\n  /*agent form*/\r\n\r\n  \r\n\r\n \r\n  /*agent form*/\r\n}\r\n\r\n@media(max-width: 600px) {\r\n\r\n\r\n  \r\n}\r\n\r\n@media(max-width: 480px) {\r\n  /*footer*/\r\n  \r\n  /*footer*/\r\n\r\n  /*insurance banner*/\r\n\r\n\r\n  /*insurance banner*/\r\n\r\n  /*latest videos*/\r\n  \r\n  /*latest videos*/\r\n\r\n  /*insurance App*/\r\n \r\n  /*insurance App*/\r\n\r\n  /*insurance article start*/\r\n  \r\n\r\n  \r\n  /*insurance article start*/\r\n\r\n  /*login signup*/\r\n\r\n  .loginMainpage .regNow {\r\n    margin: 0 5% 5%;\r\n  }\r\n\r\n  /*login signup*/\r\n\r\n \r\n}\r\n\r\n@media(max-width: 320px) {\r\n\r\n \r\n\r\n \r\n  /*footer*/\r\n\r\n\r\n\r\n\r\n  /*login signup*/\r\n\r\n \r\n\r\n  .mainbannerBg .insuranceBox .insImg .twoWhico, .mainbannerBg .insuranceBox .insImg .carinIco, .mainbannerBg .insuranceBox .insImg .travllinIco, .mainbannerBg .insuranceBox .insImg .healthIncico, .mainbannerBg .insuranceBox .insImg .homeincIco {\r\n    width: 100px;\r\n    height: 110px;\r\n  }\r\n}\r\n\r\nbody {\r\n  background: #e6f4f5;\r\n}\r\n\r\n.date-picker-custom{\r\n    width: 100%;\r\n   \r\n}\r\n\r\n.date-picker-custom.mat-form-field-appearance-fill .mat-form-field-flex {\r\n  background: none;\r\n  padding: 0px;\r\n}\r\n\r\n.date-picker-custom.mat-form-field-appearance-fill .mat-form-field-infix input {\r\n    border: none;\r\n    margin: 0px;\r\n    opacity: 0;\r\n  }\r\n\r\n.date-picker-custom.mat-form-field-appearance-fill .mat-form-field-underline::before {\r\n  background: #b4c4d3 !important;\r\n\r\n}\r\n\r\ndate-picker-custom.mat-form-field-appearance-fill .mat-form-field-underline {\r\nopacity: 1;\r\n}\r\n\r\n.date-picker-custom.mat-form-field-appearance-fill.mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: #adadad !important;\r\n}\r\n\r\n.date-picker-custom.mat-form-field-appearance-fill .mat-form-field-underline .mat-form-field-ripple {\r\n  display: none;\r\n}\r\n\r\n.date-picker-custom.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-hide-placeholder .mat-form-field-label-wrapper {\r\n  top: 0;\r\n}\r\n\r\n.date-picker-custom.mat-form-field-appearance-fill.mat-form-field-can-float.mat-focused .mat-form-field-label-wrapper {\r\n top: -18px;\r\n color: #adadad !important;\r\n}\r\n\r\n.date-picker-custom.mat-form-field-appearance-fill.mat-form-field-can-float .mat-form-field-label-wrapper {\r\n  top: -18px;\r\n}\r\n\r\n.date-picker-customfield{\r\n    margin-bottom: 0px !important;\r\n}\r\n\r\n.date-picker-customfield .mat-form-field-wrapper {\r\n    padding-bottom: 4px !important;\r\n  }\r\n\r\n.date-picker-customfield .mat-form-field-underline {\r\n    top: 46px !important;\r\n  }\r\n\r\n/*Huge thanks to @tobiasahlin at http://tobiasahlin.com/spinkit/ */\r\n\r\n.spinner {\r\n  margin: 0px auto 0;\r\n  width: 70px;\r\n  text-align: center;\r\n}\r\n\r\n.spinner > div {\r\n    width: 18px;\r\n    height: 18px;\r\n    background-color: #053c6d;\r\n    \r\n    border-radius: 100%;\r\n    display: inline-block;\r\n    animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n  }\r\n\r\n.spinner .bounce1 {\r\n    animation-delay: -0.32s;\r\n  }\r\n\r\n.spinner .bounce2 {\r\n    animation-delay: -0.16s;\r\n  }\r\n\r\n@keyframes sk-bouncedelay {\r\n  0%, 80%, 100% {\r\n    transform: scale(0);\r\n  }\r\n\r\n  40% {\r\n    transform: scale(1.0);\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .forgot-datepicker {\r\n    max-height: 45px;\r\n  }\r\n\r\n  .log-change-fields {\r\n    margin-top: -20px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n\r\n  .login-btn {\r\n    margin-top: 30px;\r\n  }\r\n\r\n\r\n  .loginSoc {\r\n    margin-top: -30px;\r\n  }\r\n\r\n  .loginMainpage .signSoc a.guestLogbtn {\r\n    margin-top: 30px;\r\n  }\r\n\r\n\r\n  .register-btn {\r\n    margin-top: -15px;\r\n  }\r\n\r\n}\r\n\r\n.dummy-date-field {\r\n  color: #063b6d;\r\n  font-size: 16px;\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 0px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,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O0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7QUFDWCIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5oZWFkZXIgLm1haW5OdmJnIHtcclxuICBiYWNrZ3JvdW5kOiAjNjM2NDY3O1xyXG4gIGJhY2tncm91bmQ6ICNlNmY0ZjUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaGVhZGVyLCAubG9nU2lnbmJnIHtcclxuICBiYWNrZ3JvdW5kOiAjYzEzOTExIHVybCguLi9hc3NldHMvaW1hZ2VzL21haW4tbmF2LWJnLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG59XHJcblxyXG4gIGhlYWRlciAuaGVhZGVyIC5sb21iYXJkTG9nbyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgLmhlYWRlciAucmlnaHRCbG9nIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcblxyXG4gICAgaGVhZGVyIC5oZWFkZXIgLnJpZ2h0QmxvZyAubG9tYmFyZENhbGwgYSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmXHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyIC5oZWFkZXIgLnJpZ2h0QmxvZyAubG9tYmFyZENhbGwgc3BhbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4ubG9tYmFyZExvZ28gYSBpbWcge1xyXG4gIHdpZHRoOiA2NSU7XHJcbn1cclxuXHJcbmhlYWRlciAuaGVhZGVyIC5yaWdodEJsb2cgLmxpdmVDaGF0IGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubG9naW5NYWlucGFnZSAubG9naW5oZWFkZXJCZywgLm9ybmdTIHtcclxuICBiYWNrZ3JvdW5kOiAjNjM2NDY3O1xyXG59XHJcblxyXG4ub3JuZ1Mge1xyXG4gIGJhY2tncm91bmQ6ICNlNmY0ZjU7XHJcbn1cclxuXHJcbi5sb2dpbk1haW5wYWdlIC5sb2dpbmhlYWRlckJnIHtcclxuICBiYWNrZ3JvdW5kOiAjZTZmNGY1O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAub3JuZ1Mge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9kb2NzL2RlZmF1bHQtc291cmNlL2Fzc2V0cy9pbWFnZXMvaGJnMS5qcGcpIHJlcGVhdC14O1xyXG4gIH1cclxufVxyXG5cclxuLy8gZnJlc2ggbG9naW4gY3NzXHJcbi8qTG9hZGVyIENTUyBzdGFydCovXHJcbi5oaWRlcyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmxvYWRlciwgLmxvYWRlcl90ciB7XHJcbiBcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcclxuICB6LWluZGV4OiA5OTk5OTtcclxufVxyXG5cclxuICAubG9hZGVyIC5pbm5lclQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubG9hZGVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwNTNjNmQ7XHJcbiAgfVxyXG5cclxuLmxpZ2h0Qm94SG9sZCxcclxuLm92ZXJMYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5vdmVyTGF5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQ6ICMyODI4MjQ7XHJcbiAgb3BhY2l0eTogLjg7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbn1cclxuXHJcbi5saWdodEJveEhvbGQge1xyXG4gIHRvcDogMjAlO1xyXG4gIHotaW5kZXg6IDk5OTk5MTtcclxufVxyXG5cclxuICAubGlnaHRCb3hIb2xkLmxpZ2h0Qm94SG9sZG1hcHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgfVxyXG5cclxuLmxpZ2h0Qm94IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvXHJcbn1cclxuXHJcbi5jbG9zZUJ0biB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5saWdodEJveCBwIHtcclxuICBjbGVhcjogYm90aDtcclxuICBtYXJnaW46IDMwcHggMDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICMwNTNDNkRcclxufVxyXG5cclxuLkxiQnRuSG9sZCBpbnB1dCxcclxuLkxiQnRuSG9sZCBzcGFuIHtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4gIC5MYkJ0bkhvbGQgLnllc0J0bixcclxuICAuTGJCdG5Ib2xkIHNwYW4ueWVzQnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICMwNTNDOEU7XHJcbiAgICBjb2xvcjogI2YyZjJlZVxyXG4gIH1cclxuXHJcbiAgICAuTGJCdG5Ib2xkIHNwYW4ubm9CdG4gYSxcclxuICAgIC5MYkJ0bkhvbGQgc3Bhbi55ZXNCdG4gYSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmXHJcbiAgICB9XHJcblxyXG4gIC5MYkJ0bkhvbGQgLm5vQnRuLFxyXG4gIC5MYkJ0bkhvbGQgc3Bhbi5ub0J0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG4gICAgY29sb3I6ICM0NzQ3NDdcclxuICB9XHJcblxyXG4ub3ZlcmxheU4ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4gIC5vdmVybGF5TiAuY2FuY2VsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXlOOnRhcmdldCwgLm92ZXJsYXlOLnNob3dNc2cge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuXHJcbi5wb3B1cCB7XHJcbiAgbWFyZ2luOiA3NXB4IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBib3gtc2hhZG93OiAwIDAgNTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiAgLnBvcHVwLmxpZ2h0IHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4ucG9wdXAgaDIge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgY29sb3I6ICMyODI4Mjg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5wb3B1cCBoMyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjMjgyODI4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5wb3B1cCAuY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjdweDtcclxuICBoZWlnaHQ6IDI3cHg7XHJcbiAgdG9wOiAtNTJweDtcclxuICByaWdodDogMDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiAgLnBvcHVwIC5jbG9zZTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbi5wb3B1cCAuY29udGVudCB7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5wb3B1cCBwIHtcclxuICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvcHVwIG9sIHtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbn1cclxuXHJcbi5wb3B1cCB1bCB7XHJcbiAgcGFkZGluZzogMCAxOHB4O1xyXG59XHJcblxyXG4gIC5wb3B1cCBvbCBsaSwgLnBvcHVwIHVsIGxpIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG5cclxuLnBvcHVwIHA6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucG9wdXAgLm1DU0JfaW5zaWRlID4gLm1DU0JfY29udGFpbmVyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5wb3B1cCAubUNTQl9zY3JvbGxUb29scyB7XHJcbiAgd2lkdGg6IDZweDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4gIC5wb3B1cCAubUNTQl9zY3JvbGxUb29scyAubUNTQl9kcmFnZ2VyIC5tQ1NCX2RyYWdnZXJfYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgfVxyXG5cclxuLnBvcHVwIC5tQ1MtZGFyay5tQ1NCX3Njcm9sbFRvb2xzIC5tQ1NCX2RyYWdnZXJSYWlsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnBvcHVwIC5tQ1MtZGFyay5tQ1NCX3Njcm9sbFRvb2xzIC5tQ1NCX2RyYWdnZXIgLm1DU0JfZHJhZ2dlcl9iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjNiNmQgIWltcG9ydGFudDtcclxufVxyXG4vKk1vZGFsIFBvcC11cCBzdHlsaW5nIGVuZHNzcy8qbG9hZGVyIGNzcyBlbmQqL1xyXG4vKmxvZ2luIHNpZ251cCovXHJcblxyXG4vKmxvZ2luIHNpZ251cCovXHJcblxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wdWxsLXJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy9oZWFkZXIgc3R5bGVzXHJcbi8qaGVhZGVyKi9cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYTpob3ZlciwgYTpmb2N1cyB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKi5ib2R5V3JhcHBlcnsgcGFkZGluZy10b3A6IDEzMnB4O31cclxuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIGhlaWdodDogMTM4cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC41cyBlYXNlLWluLW91dDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuLm5hdi11cCB7XHJcbiAgICB0b3A6IC0xMzhweDtcclxufVxyXG5cclxuLm5hdi1kb3duIHtcclxuICAgIHRvcDowcHg7XHJcbn0qL1xyXG4vKmJvZHl7b3ZlcmZsb3cteTogaGlkZGVuO30qL1xyXG4ubUNTQl9pbnNpZGUgPiAubUNTQl9jb250YWluZXIge1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLm1DU0Jfc2Nyb2xsVG9vbHMge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbiAgLm1DU0Jfc2Nyb2xsVG9vbHMgLm1DU0JfZHJhZ2dlciAubUNTQl9kcmFnZ2VyX2JhciB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICB9XHJcblxyXG4ubUNTLWRhcmsubUNTQl9zY3JvbGxUb29scyAubUNTQl9kcmFnZ2VyUmFpbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5tQ1MtZGFyay5tQ1NCX3Njcm9sbFRvb2xzIC5tQ1NCX2RyYWdnZXIgLm1DU0JfZHJhZ2dlcl9iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjNiNmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaGVhZGVyIC5oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuICBoZWFkZXIgLmhlYWRlciAubG9tYmFyZExvZ28ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMjJweCAwO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIC5oZWFkZXIgLnJpZ2h0QmxvZyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyMnB4IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICB9XHJcblxyXG4gICAgaGVhZGVyIC5oZWFkZXIgLnJpZ2h0QmxvZyAubG9tYmFyZENhbGwge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBwYWRkaW5nLXRvcDogOXB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgaGVhZGVyIC5oZWFkZXIgLnJpZ2h0QmxvZyAubG9tYmFyZENhbGwgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGhlYWRlciAuaGVhZGVyIC5yaWdodEJsb2cgLmxvbWJhcmRDYWxsIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAycHggM3B4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL2ltYWdlcy9kZWZhdWx0LXNvdXJjZS9Ib21lUmV2YW1wL3BhZ2Utc3ByaXRlLWltZy5wbmcpIDAgMCBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTkyNHB4IC01NnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgaGVhZGVyIC5oZWFkZXIgLnJpZ2h0QmxvZyAubGl2ZUNoYXQge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgICBoZWFkZXIgLmhlYWRlciAucmlnaHRCbG9nIC5saXZlQ2hhdCBhIHtcclxuICAgICAgICBjb2xvcjogIzI0M2Y3NjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgaGVhZGVyIC5oZWFkZXIgLnJpZ2h0QmxvZyAubGl2ZUNoYXQgYSAuZG90c0dyZWVuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMGE2NTE7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgaGVhZGVyIC5oZWFkZXIgLmJsaW5rIHtcclxuICAgIGFuaW1hdGlvbjogYmxpbmstYW5pbWF0aW9uIDEuNXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rLWFuaW1hdGlvbiAxLjVzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcclxuICB9XHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5rLWFuaW1hdGlvbiB7XHJcbiAgdG8ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rLWFuaW1hdGlvbiB7XHJcbiAgdG8ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuaGVhZGVyIC5oZWFkZXIgLnJpZ2h0QmxvZyAubG9nSW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4gIGhlYWRlciAuaGVhZGVyIC5yaWdodEJsb2cgLmxvZ0luIGEge1xyXG4gICAgY29sb3I6ICMwNjNiNmQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIC5oZWFkZXIgLnJpZ2h0QmxvZyAubG9nSW4gc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjZWI4ZTE1O1xyXG4gIH1cclxuXHJcbmhlYWRlciAuaGVhZGVyIC5yaWdodEJsb2cgLmZlZWRCYWNrIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4gIGhlYWRlciAuaGVhZGVyIC5yaWdodEJsb2cgLmZlZWRCYWNrIC5wcm9mSWNvaGlkZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2ltYWdlcy9kZWZhdWx0LXNvdXJjZS9Ib21lUmV2YW1wL3BhZ2Utc3ByaXRlLWltZy5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTYzMXB4IC01MTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgLmhlYWRlciAucmlnaHRCbG9nIC5mZWVkQmFjayAucHJvZkljb2FjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2ltYWdlcy9kZWZhdWx0LXNvdXJjZS9Ib21lUmV2YW1wL3BhZ2Utc3ByaXRlLWltZy5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTcyNXB4IC01MTRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIC5oZWFkZXIgLnJpZ2h0QmxvZyAuZmVlZEJhY2sgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAgIGhlYWRlciAuaGVhZGVyIC5yaWdodEJsb2cgLmZlZWRCYWNrIGEuYWN0aXZlOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzA2M2I2ZDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDI5cHg7XHJcbiAgICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMnB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgaGVhZGVyIC5oZWFkZXIgLnJpZ2h0QmxvZyAuZmVlZEJhY2sgLnByb2ZpbGVTZWMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDVweDtcclxuICAgIHJpZ2h0OiAtNDBweDtcclxuICAgIHdpZHRoOiAzMDlweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjZWI4ZTE1O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweCAwIDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcblxyXG4gICAgaGVhZGVyIC5oZWFkZXIgLnJpZ2h0QmxvZyAuZmVlZEJhY2sgLnByb2ZpbGVTZWMgLndlbFByb2YgLm1lbkljbyB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaW1hZ2VzL2RlZmF1bHQtc291cmNlL0hvbWVSZXZhbXAvbWVuaWNvLnBuZyk7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIgLmhlYWRlciAucmlnaHRCbG9nIC5mZWVkQmFjayAucHJvZmlsZVNlYyAud2VsUHJvZiAud29tSWNvIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9pbWFnZXMvZGVmYXVsdC1zb3VyY2UvSG9tZVJldmFtcC93b21pY28ucG5nKTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlciAuaGVhZGVyIC5yaWdodEJsb2cgLmZlZWRCYWNrIC5wcm9maWxlU2VjIC53ZWxQcm9mIGg0LCBoZWFkZXIgLmhlYWRlciAucmlnaHRCbG9nIC5mZWVkQmFjayAucHJvZmlsZVNlYyAud2VsUHJvZiAuaGVhZGluZ2g0IHtcclxuICAgICAgY29sb3I6ICNlNTcyMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIgLmhlYWRlciAucmlnaHRCbG9nIC5mZWVkQmFjayAucHJvZmlsZVNlYyAud2VsUHJvZiBoMyB7XHJcbiAgICAgIGNvbG9yOiAjMDYzYjZkO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlciAuaGVhZGVyIC5yaWdodEJsb2cgLmZlZWRCYWNrIC5wcm9maWxlU2VjIC53ZWxQcm9mIC5lZGl0UHJvZiBhIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogIzI4MjgyODtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNWM1YzU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlciAuaGVhZGVyIC5yaWdodEJsb2cgLmZlZWRCYWNrIC5wcm9maWxlU2VjIC5sb2dvdXRTZWMge1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTZlYjtcclxuICAgICAgbWFyZ2luOiAyMHB4IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAgIGhlYWRlciAuaGVhZGVyIC5yaWdodEJsb2cgLmZlZWRCYWNrIC5wcm9maWxlU2VjIC5sb2dvdXRTZWMgcCB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAwIDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGhlYWRlciAuaGVhZGVyIC5yaWdodEJsb2cgLmZlZWRCYWNrIC5wcm9maWxlU2VjIC5sb2dvdXRTZWMgYSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDE2cHhcclxuICAgICAgfVxyXG4vKmhlYWRlciovXHJcblxyXG4vKm5hdiovXHJcbmhlYWRlciAubWFpbk52Ymcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNjMTM5MTEgdXJsKC9pbWFnZXMvZGVmYXVsdC1zb3VyY2UvSG9tZVJldmFtcC9tYWluLW5hdi1iZy5qcGcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICBoZWlnaHQ6IDk2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5tYWluc2VsZWN0Qm94IGxhYmVsIHtcclxuICB0b3A6IDI2cHg7XHJcbn1cclxuXHJcbi5tYWluc2VsZWN0Qm94IC5zZWxlY3Qge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjNjQ2NTY1O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjRjNGQzO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDVweCAwIDlweDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxufVxyXG5cclxuLm1haW5zZWxlY3RCb3ggc2VsZWN0IHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tYWluc2VsZWN0Qm94IC5zdHlsZWRTZWxlY3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogOHB4IDEwcHggOHB4IDA7XHJcbiAgY29sb3I6ICMwNjNiNmQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tYWluc2VsZWN0Qm94IC5vcHRpb25zIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjAxLCAyMTQsIDIyNCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCAycHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbiAgLm1haW5zZWxlY3RCb3ggLm9wdGlvbnMgbGkge1xyXG4gICAgY29sb3I6ICM2MTYxNjE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZTJlMjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgICAubWFpbnNlbGVjdEJveCAub3B0aW9ucyBsaTpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjNiNmQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluc2VsZWN0Qm94IC5vcHRpb25zIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4ubWFpbnNlbGVjdEJveCAuZ2x5cGhpY29uLmdseXBoaWNvbi1tZW51LWRvd24ge1xyXG4gIGNvbG9yOiAjMjE0ZDdhO1xyXG4gIHRvcDogMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYmxvY2sgLmVycm9yTiB7XHJcbiAgY29sb3I6ICNmZjAwMDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDAgNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB6LWluZGV4OiAxO1xyXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbn1cclxuXHJcbi52YWxTZWx0IC5lcnJvck4ge1xyXG4gIHRvcDogLTEzcHg7XHJcbn1cclxuXHJcblxyXG5cclxuaGVhZGVyIC5tb2Jsb2dpbmJsb2NrIC53Zy10ZXh0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMwNjNiNmQ7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICBoZWFkZXIgLm1vYmxvZ2luYmxvY2sgLndnLXRleHQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDAgMCA3cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG4vKm5hdiovXHJcblxyXG4vLyBmcmVzaCBsb2dpblxyXG4vKk1vZGFsIFBvcC11cCBzdHlsaW5nIGVuZHNzcy8qbG9hZGVyIGNzcyBlbmQqL1xyXG4vKmxvZ2luIHNpZ251cCovXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG5cclxuLmxvZ2luTWFpbnBhZ2UgLmxvZ2luaGVhZGVyQmcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaW1hZ2VzL2RlZmF1bHQtc291cmNlL0hvbWVSZXZhbXAvbG9naW5oZWFkZXItYmcuanBnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgaGVpZ2h0OiA5NnB4O1xyXG59XHJcblxyXG4gIC5sb2dpbk1haW5wYWdlIC5sb2dpbmhlYWRlckJnIC5pY2ljaWxvZ2luTG9nbyB7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuLmxvZ2luTWFpbnBhZ2UgLmxvZ2luQXJlYSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4gIC5sb2dpbk1haW5wYWdlIC5sb2dpbkFyZWEgaDMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICMwNDNjNmQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4ubG9naW5NYWlucGFnZSAubG9nRGV0YWlscyB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgLW8tYm94LXNoYWRvdzogMCAwIDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIC1tcy1ib3gtc2hhZG93OiAwIDAgNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogMzVweCA0MHB4IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDAgMTUlO1xyXG4gIG1hcmdpbi10b3A6IC02NXB4O1xyXG59XHJcblxyXG4vKi5sb2dpbk1haW5wYWdlIC5sb2dEZXRhaWxzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbn1cclxuKi9cclxuLnNpZ25VcGRldGFpbHMge1xyXG4gIC8qIGRpc3BsYXk6IG5vbmU7Ki9cclxufVxyXG5cclxuLmZvclBhc3NEZXRhaWxzIHtcclxuICAvKiBkaXNwbGF5OiBub25lOyovXHJcbn1cclxuXHJcbi5sb2dpbk1haW5wYWdlIC5lbWxQYXNzIHtcclxuICB3aWR0aDogNDUlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5sb2dpbk1haW5wYWdlIC5lbWxQYXNzMSB7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMCA1MHB4O1xyXG59XHJcblxyXG4ubG9naW5NYWlucGFnZSAuc2lnblNvYyB7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBwYWRkaW5nOiAyNXB4IDA7XHJcbn1cclxuXHJcbi5sb2dpbk1haW5wYWdlIC5ibG9jayB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbiAgLmxvZ2luTWFpbnBhZ2UgLmJsb2NrIGxhYmVsIHtcclxuICAgIGN1cnNvcjogYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjYWRhZGFkO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjZweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG5cclxuICAubG9naW5NYWlucGFnZSAuYmxvY2suZm9jdXMgbGFiZWwge1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5cclxuLmxvZ2luTWFpbnBhZ2UgLnNJbnB1dCBpbnB1dCB7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzA2M2I2ZDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I0YzRkMztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgei1pbmRleDogMTI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmxvZ2luTWFpbnBhZ2UgLnNJbnB1dDphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgLyogIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICB3aWR0aDogMHB4O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIC40cztcclxuICAvKnBvc2l0aW9uOiByZWxhdGl2ZTsqL1xyXG4gIHRvcDogLTE1cHg7XHJcbn1cclxuXHJcbi5sb2dpbk1haW5wYWdlIC5zSW5wdXQuZm9jdXM6YWZ0ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5sb2dpbk1haW5wYWdlIC5zSW5wdXQucmVnaXN0ZXItbmFtZS5mb2N1czphZnRlciB7XHJcbiAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2dpbk1haW5wYWdlIC5ibG9jayBsYWJlbCB7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICNhZGFkYWQ7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5sb2dpbk1haW5wYWdlIC5ibG9ja3MgbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogI2FkYWRhZDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4ubG9naW5NYWlucGFnZSAuYmxvY2suZm9jdXMgbGFiZWwge1xyXG4gIHRvcDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmxvZ2luTWFpbnBhZ2UgLmxvZ2luQnRuIGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogIzA2M2I2ZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxM3B4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMTVweCAwcHg7XHJcbn1cclxuXHJcbiAgLmxvZ2luTWFpbnBhZ2UgLmxvZ2luQnRuIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA3MzU1ZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgfVxyXG5cclxuLmxvZ2luTWFpbnBhZ2UgLmZvcmdMb2cge1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxufVxyXG5cclxuICAubG9naW5NYWlucGFnZSAuZm9yZ0xvZyBhIHtcclxuICAgIGNvbG9yOiAjNTg1ODU4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuXHJcbiAgICAubG9naW5NYWlucGFnZSAuZm9yZ0xvZyBhOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcblxyXG4ubG9naW5NYWlucGFnZSAucmVnTm93IHtcclxuICBiYWNrZ3JvdW5kOiAjZDllMmU5O1xyXG4gIG1hcmdpbjogMCAxOCU7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XHJcbn1cclxuXHJcbiAgLmxvZ2luTWFpbnBhZ2UgLnJlZ05vdyBhIHtcclxuICAgIGNvbG9yOiAjMDYzYzZhO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbi8qLmxvZ2luTWFpbnBhZ2UgLnJlZ05vdyBhOmhvdmVye1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSovXHJcbi5sb2dpbk1haW5wYWdlIC5ncmF5TGluZSB7XHJcbiAgd2lkdGg6IDFweDtcclxuICBiYWNrZ3JvdW5kOiAjZTdlOWVhO1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbWFyZ2luOiAyNXB4IDIwcHg7XHJcbn1cclxuXHJcbi5sb2dpbk1haW5wYWdlIC5jbGlrU2lnbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzY2NjY2NjtcclxufVxyXG5cclxuICAubG9naW5NYWlucGFnZSAuY2xpa1NpZ246YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTdlOWVhO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luTWFpbnBhZ2UgLmNsaWtTaWduOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICNlN2U5ZWE7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuXHJcbi5sb2dpbk1haW5wYWdlIC5zaWduU29jIC5zb2NJY29ucyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuICAubG9naW5NYWlucGFnZSAuc2lnblNvYyAuc29jSWNvbnMgLmdvb2dsZUxvZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGM0MzM1O1xyXG4gICAgcGFkZGluZzogMTVweCAyMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNkYWRhZGE7XHJcbiAgfVxyXG5cclxuICAubG9naW5NYWlucGFnZSAuc2lnblNvYyAuc29jSWNvbnMgLmZiTG9nIHtcclxuICAgIGJhY2tncm91bmQ6ICMzYjU5OTk7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2RhZGFkYTtcclxuICB9XHJcblxyXG4gIC5sb2dpbk1haW5wYWdlIC5zaWduU29jIC5zb2NJY29ucyAuaWNvbi1nb29nbGUtcGx1cyB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcblxyXG4gIC5sb2dpbk1haW5wYWdlIC5zaWduU29jIC5zb2NJY29ucyAuaWNvbi1mYWNlYm9vayB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxuXHJcbi5sb2dpbk1haW5wYWdlIC5zaWduU29jIHNwYW4ub3JMb2cge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTllYTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICB3aWR0aDogMzVweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiAgLmxvZ2luTWFpbnBhZ2UgLnNpZ25Tb2Mgc3Bhbi5vckxvZzphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICNlN2U5ZWE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE2cHg7XHJcbiAgICByaWdodDogMzRweDtcclxuICB9XHJcblxyXG4gIC5sb2dpbk1haW5wYWdlIC5zaWduU29jIHNwYW4ub3JMb2c6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZTllYTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTZweDtcclxuICAgIGxlZnQ6IDM0cHg7XHJcbiAgfVxyXG5cclxuLmxvZ2luTWFpbnBhZ2UgLnNpZ25Tb2MgYS5ndWVzdExvZ2J0biB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNTNjNmQ7XHJcbiAgcGFkZGluZzogMTNweCAwO1xyXG4gIG1hcmdpbjogMTdweCAxMHB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjMDUzYTZjO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLyoubG9naW5NYWlucGFnZSAuc2lnblNvYyBhLmd1ZXN0TG9nYnRuOmhvdmVye1xyXG5cdGJhY2tncm91bmQ6ICMwNjNiNmQ7XHJcblx0ICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbn0qL1xyXG4ucGFkZE5vbiB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9naW5NYWlucGFnZSAuY2FsZW5kYXJCb3ggLmRhdGUgLnVpLWRhdGVwaWNrZXItdHJpZ2dlciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbjogNXB4IDAgMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnNpZ25CdG4ge1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLmZvclBhc3NEZXRhaWxzIC5sb2dEZXRhaWxzIGgzIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmxvZ25PdHAge1xyXG4gIC8qZGlzcGxheTogbm9uZTsqL1xyXG59XHJcblxyXG4ubG9nd2l0UGFzcyB7XHJcbiAgLypkaXNwbGF5OiBub25lOyovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubm90QWN0aXZlIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5sb2dpbk1haW5wYWdlIC5ub3RBY3RpdmUgYSB7XHJcbiAgYmFja2dyb3VuZDogI2NjY2NjYztcclxufVxyXG5cclxuc3Bhbi5zZW5kT3RwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4gIHNwYW4uc2VuZE90cCBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwNTNjNmQ7XHJcbiAgfVxyXG5cclxuLnJlc2VuZE90cCB7XHJcbn1cclxuXHJcbi5yZXNPdHAge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzA1M2M2ZDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmVtbE90cCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjMjgyODI4O1xyXG59XHJcblxyXG4ubG9nRGV0YWlscyAubWFpbnNlbGVjdEJveCB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2dEZXRhaWxzIC53aWRTZWwge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG59XHJcblxyXG4ubG9nRGV0YWlscyAubWFpbnNlbGVjdEJveCAuc3R5bGVkU2VsZWN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDhweCAxMHB4IDhweCAwO1xyXG4gIGNvbG9yOiAjMDYzYjZkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubG9nRGV0YWlscyAuYmxvY2suZHJwIGxhYmVsIHtcclxuICB0b3A6IDdweDtcclxufVxyXG5cclxuLmxvZ0RldGFpbHMgLmJsb2NrIGxhYmVsIHtcclxuICBjdXJzb3I6IGF1dG87XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogI2FkYWRhZDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLm1haW5zZWxlY3RCb3ggLnNlbGVjdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lcnJvckNvbW0sIC5lcnJvckNvbW1GUCB7XHJcbiAgY29sb3I6ICNmZjAwMDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHRvcDogLTFweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMCA1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udW5zdHlsZWQgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjMjgyODI4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNXB4O1xyXG59XHJcblxyXG4uc3R5bGVkLWNoZWNrYm94IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuICAuc3R5bGVkLWNoZWNrYm94ICsgbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gICAgLnN0eWxlZC1jaGVja2JveCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzVkOWUyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gIC5zdHlsZWQtY2hlY2tib3g6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGE2YTE4O1xyXG4gIH1cclxuXHJcbiAgLnN0eWxlZC1jaGVja2JveDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA3cHg7XHJcbiAgICB0b3A6IDEzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAwIDAgd2hpdGUsIDRweCAwIDAgd2hpdGUsIDRweCAtMnB4IDAgd2hpdGUsIDRweCAtNHB4IDAgd2hpdGUsIDRweCAtNnB4IDAgd2hpdGUsIDRweCAtOHB4IDAgd2hpdGU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcblxyXG4udW5zdHlsZWQge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4gIC51bnN0eWxlZCBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDVweDtcclxuICB9XHJcblxyXG4ucmVzZXR0aGFuayB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNlZGZjZjQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzc3Yzg5ZTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luOiA2NXB4IGF1dG87XHJcbn1cclxuXHJcbiAgLnJlc2V0dGhhbmsgcCB7XHJcbiAgICBjb2xvcjogIzA5NjczNztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDMwcHggMjBweDtcclxuICB9XHJcblxyXG4gIC5yZXNldHRoYW5rIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4vKmxvZ2luIHNpZ251cCovXHJcblxyXG5cclxuLy8gcmVzcG9uc2l2ZSBzdHlsZXNcclxuQG1lZGlhKG1pbi13aWR0aDoxMjAwcHgpIHtcclxuICAuY29udGFpbmVyXHJcblxyXG57XHJcbiAgd2lkdGg6IDEyMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAvKmxhdGVzdCB2aWRlb3MqL1xyXG4gIC52aWRlb0RldGFpbHNiZHIgLmxhdGVzdFZpZGVvcyB1bCBsaSB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLnZpZGVvRGV0YWlsc2JkciAudmlkZW9zRGV0YWlscyB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDAgMCAwO1xyXG4gIH1cclxuICAvKmxhdGVzdCB2aWRlb3MqL1xyXG5cclxuICAvKmZvb3RlciovXHJcbiAgLmZvb3RlckNvbnRhaW5lcmJnIC5zb2NpYWxJY29ucyB1bCBsaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLypmb290ZXIqL1xyXG59XHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgLyppbnN1cmFuY2UgYmFubmVyKi9cclxuICAubWFpbmJhbm5lckJnIGgxIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5tYWluYmFubmVyQmcgLmluc3VyYW5jZUJveCB1bCBsaSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgICAubWFpbmJhbm5lckJnIC5pbnN1cmFuY2VCb3ggdWwgbGk6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgYm9yZGVyOiBzb2xpZCAjODA4MDgwO1xyXG4gICAgICBib3JkZXItd2lkdGg6IDAgMXB4IDFweCAwO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbmJhbm5lckJnIC5pbnN1cmFuY2VCb3ggdWwgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW5iYW5uZXJCZyAuaW5zdXJhbmNlQm94IHVsIGxpOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbmJhbm5lckJnIC5pbnN1cmFuY2VCb3ggdWwgbGkgLmluc0ltZyB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgcGFkZGluZzogMCA0MHB4IDAgMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbmJhbm5lckJnIC5pbnN1cmFuY2VCb3ggdWwgbGkgLmluc3RpdGxlIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluYmFubmVyQmcgLmluc3VyYW5jZUJveCB1bCBsaSBzcGFuLmd0QnRuIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbmJhbm5lckJnIC5pbnN1cmFuY2VCb3ggdWwgbGkgaDMge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgLyppbnN1cmFuY2UgYmFubmVyKi9cclxuXHJcbiAgLyphd2FyZHMgYmxvZyovXHJcblxyXG4gIC5hd2FyZHNCbG9nbWFpbiAuYXdhcmRzQmxvZyBoMiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAvKmF3YXJkcyBibG9nKi9cclxuICAvKmluc3VyYW5jZSBiYW5uZXIqL1xyXG4gIC8qXHQgLm1haW5iYW5uZXJCZyAuaW5zdXJhbmNlQm94IHVsIGxpOmFmdGVye1xyXG5cdGJvdHRvbTogNTZweDtcclxuXHJcbn0qL1xyXG4gIC8qaW5zdXJhbmNlIGJhbm5lciovXHJcbn1cclxuXHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA5OTFweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIC8qZm9vdGVyKi9cclxuICAuZm9vdGVyQ29udGFpbmVyYmcgLnNvY2lhbEljb25zIHVsIGxpIGEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgfVxyXG4gIC8qZm9vdGVyKi9cclxuXHJcbiAgLypwYXJ0bmVyIHNlY3Rpb24qL1xyXG4gIC5wYXJ0bmVyU2VjdGlvbiAubmV0d29ya0FsbCBhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnBhcnRuZXJTZWN0aW9uIC5uZXR3b3JrQWxsIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcblxyXG4gIC5wYXJ0bmVyU2VjdGlvbiAubmV0d29ya0FsbCBoNCwgLnBhcnRuZXJTZWN0aW9uIC5uZXR3b3JrQWxsIC5oZWFkaW5naDQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgLnBhcnRuZXJTZWN0aW9uIC5uZXR3b3JrQWxsIHAge1xyXG4gICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgfVxyXG4gIC8qcGFydG5lciBzZWN0aW9uKi9cclxuXHJcbiAgLyppbnN1cmFuY2UgQXBwKi9cclxuICAuaW5zdXJhbmNlQXBwYmcgLmluc3VhcmVBcHBkZXRhaWxzIC5pbnNBcHAge1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICB9XHJcbiAgLyppbnN1cmFuY2UgQXBwKi9cclxuXHJcbiAgLyppbnN1cmFuY2UgYXJ0aWNsZSBzdGFydCovXHJcbiAgLmFydGljbGVTZWN0aW9uIC5pbnN1cmFuY2VVcGRpbmZvIHtcclxuICAgIG1hcmdpbjogMTNweCAwO1xyXG4gIH1cclxuICAvKmluc3VyYW5jZSBhcnRpY2xlIHN0YXJ0Ki9cclxuXHJcbiAgLypsb2dpbiBzaWdudXAqL1xyXG4gIC5sb2dpbk1haW5wYWdlIC5sb2dpbkFyZWEge1xyXG4gICAgbWFyZ2luOiAwIDEwJTtcclxuICB9XHJcblxyXG4gIC5sb2dpbk1haW5wYWdlIC5zaWduU29jIGEuZ3Vlc3RMb2didG4ge1xyXG4gICAgbWFyZ2luOiAxN3B4IDMwcHggMDtcclxuICB9XHJcblxyXG4gIC5sb2dpbk1haW5wYWdlIC5sb2dEZXRhaWxzIHtcclxuICAgIHBhZGRpbmc6IDM1cHggMjBweCAyNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogLTY1cHg7XHJcbiAgfVxyXG5cclxuICAubG9naW5NYWlucGFnZSAuc2lnblNvYyAuc29jSWNvbnMgLmZiTG9nIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICB9XHJcblxyXG4gIC5sb2dpbk1haW5wYWdlIC5zaWduU29jIC5zb2NJY29ucyAuZ29vZ2xlTG9nIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICB9XHJcblxyXG4gIC8qbG9naW4gc2lnbnVwKi9cclxuXHJcbiAgLyphZ2VudCBsb2dpbiovXHJcblxyXG4gIC5yYW5nZUJ1c2xpbmUgbGkge1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4IDI1cHggMDtcclxuICB9XHJcblxyXG4gIC5yYW5nZUJ1c2xpbmUgLmRpdkxpbmUge1xyXG4gICAgbWFyZ2luOiAwIDEyJSA4cHggMDtcclxuICB9XHJcbiAgLyphZ2VudCBsb2dpbiovXHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC8qZm9vdGVyKi9cclxuICAuZm9vdGVyQ29udGFpbmVyYmcgLnNvY2lhbEljb25zIHVsIGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgLypmb290ZXIqL1xyXG5cclxuICAvKmhlYWx0aCBBZHZpc29yKi9cclxuICAuaGVhbHRoQWR2aXNvciBwIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmhlYWx0aEFkdmlzb3IgLmhlbHRoQWRhcmVhIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC8qaGVhbHRoIEFkdmlzb3IqL1xyXG5cclxuICAvKmF3YXJkcyBibG9nKi9cclxuICAuYXdhcmRzQmxvZ21haW4gLmF3YXJkc0Jsb2cgLnJpc2tJbnYge1xyXG4gICAgbWluLWhlaWdodDogMjIycHg7XHJcbiAgfVxyXG5cclxuICAuYXdhcmRzQmxvZ21haW4gLnNsaWRlc2hvd1Jpc2sge1xyXG4gICAgbWluLWhlaWdodDogMTg1cHg7XHJcbiAgfVxyXG4gIC8qYXdhcmRzIGJsb2cqL1xyXG5cclxuXHJcbiAgLypsb2dpbiBzaWdudXAqL1xyXG4gIC5sb2dpbk1haW5wYWdlIC5sb2dpbkFyZWEge1xyXG4gICAgbWFyZ2luOiAwIDglO1xyXG4gICAgcGFkZGluZzogMzVweCAyNXB4IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzVweDtcclxuICB9XHJcblxyXG4gIC5sb2dpbk1haW5wYWdlIC5sb2dEZXRhaWxzIC5lbWxQYXNzIHtcclxuICAgIHdpZHRoOiA0MiU7XHJcbiAgfVxyXG5cclxuICAubG9naW5NYWlucGFnZSAubG9nRGV0YWlscyAuc2lnblNvYyB7XHJcbiAgICB3aWR0aDogNDIlO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luTWFpbnBhZ2UgLmNsaWtTaWduOmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAubG9naW5NYWlucGFnZSAuY2xpa1NpZ246YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IC05cHg7XHJcbiAgfVxyXG5cclxuICAubG9naW5NYWlucGFnZSAuc2lnblNvYyAuc29jSWNvbnMgLmdvb2dsZUxvZyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luTWFpbnBhZ2UgLnNpZ25Tb2MgLnNvY0ljb25zIC5mYkxvZyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5sb2dpbk1haW5wYWdlIC5zaWduU29jIGEuZ3Vlc3RMb2didG4ge1xyXG4gICAgbWFyZ2luOiAxN3B4IDEwcHggMDtcclxuICB9XHJcblxyXG4gIC5sb2dpbk1haW5wYWdlIC5sb2dEZXRhaWxzIHtcclxuICAgIHBhZGRpbmc6IDM1cHggMjBweCAyNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogLTY1cHg7XHJcbiAgfVxyXG5cclxuICAvKmxvZ2luIHNpZ251cCovXHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogOTkxcHgpIHtcclxuXHJcblxyXG4gIC5wYXJ0bmVyU2VjdGlvbiAubmV0d29ya0FsbCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZWJmMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuYXJ0aWNsZVNlY3Rpb24gLmluc3VyYW5jZUFydGljbGVzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcblxyXG5cclxuICAuYXJ0aWNsZVNlY3Rpb24gLmRvdHNCdG4ge1xyXG4gICAgcGFkZGluZzogMCAyNXB4IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuYXJ0RG90cyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5hd2FyZHNCbG9nbWFpbiAubWFpbkRvdHMge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmluc3VyYW5jZUFwcGJnIC5pbnN1YXJlQXBwZGV0YWlscyB7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDAgMzVweDtcclxuICB9XHJcbiAgLypsYXRlc3QgdmlkZW9zKi9cclxuXHJcbiAgLnZpZGVvRGV0YWlsc2JkciAubGF0ZXN0VmlkZW9zIHVsIGxpIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC8qbGF0ZXN0IHZpZGVvcyovXHJcblxyXG4gIC8qcGFydG5lciBzZWN0aW9uKi9cclxuICAucGFydG5lclNlY3Rpb24gLm5ldHdvcmtBbGwgcCB7XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmluc3VyYW5jZUFwcGJnIC5pbnN1YXJlQXBwZGV0YWlscyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAgIC5pbnN1cmFuY2VBcHBiZyAuaW5zdWFyZUFwcGRldGFpbHMgLmluc1NwZWN0IHtcclxuICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgLnBhcnRuZXJTZWN0aW9uIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcblxyXG4gIC5ib2R5V3JhcHBlciBoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmJvZHlXcmFwcGVyIC5jdXNTcGVhayBoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLypwYXJ0bmVyIHNlY3Rpb24qL1xyXG5cclxuICAvKmluc3VyYW5jZSBBcHAqL1xyXG5cclxuICAuaW5zdXJhbmNlQXBwYmcgLmluc3VhcmVBcHBkZXRhaWxzIC5pbnNBcHAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG4gIH1cclxuICAvKmluc3VyYW5jZSBBcHAqL1xyXG5cclxuICBcclxuICAvKmluc3VyYW5jZSBhcnRpY2xlIHN0YXJ0Ki9cclxuXHJcbiAgLyphd2FyZHMgYmxvZyovXHJcbiAgLmF3YXJkc0Jsb2dtYWluIC5hd2FyZHNCbG9nIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIC5hd2FyZHNCbG9nbWFpbiAuYXdhcmRzQmxvZyAucmlza0ludiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBib3JkZXI6IDEycHggc29saWQgI2YyZjVmODtcclxuICB9XHJcblxyXG4gIC5hd2FyZHNCbG9nbWFpbiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMTBweDtcclxuICB9XHJcblxyXG5cclxuICAvKmF3YXJkcyBibG9nKi9cclxuXHJcbiAgLypoZWFsdGggYWR2aXNvciovXHJcbiAgLmhlYWx0aEFkdmlzb3Ige1xyXG4gICAgbWFyZ2luOiA1MHB4IDAgMDtcclxuICB9XHJcbiAgLypoZWFsdGggYWR2aXNvciovXHJcblxyXG5cclxuICAudmlkZW9EZXRhaWxzYmRyIC5sYXRlc3RWaWRlb3MgdWwgbGk6bnRoLWNoaWxkKDMpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAudmlkZW9EZXRhaWxzYmRyIC5sYXRlc3RWaWRlb3MgdWwgbGk6bnRoLWNoaWxkKDQpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8qIEhlYWRlciByZXNwb25zaXZlIGNzcyBzdGFydCovXHJcbiAgLm1haW5iYW5uZXJCZyB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMyUgMDtcclxuICB9XHJcblxyXG4gIGhlYWRlciAuaGVhZGVyIC5sb21iYXJkTG9nbyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm1vYldlbEJsb2NrIHtcclxuICAgIGJhY2tncm91bmQ6ICNlODhjMmIgdXJsKFwiL2ltYWdlcy9kZWZhdWx0LXNvdXJjZS9Ib21lUmV2YW1wL21vYm5hdmJnLmpwZ1wiKSAwIGJvdHRvbSByZXBlYXQteDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5tZW51Q2xvc2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTJweDtcclxuICAgIHRvcDogMzBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgICAubWVudUNsb3NlOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHdpZHRoOiAxLjNweDtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51Q2xvc2U6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB3aWR0aDogMS4zcHg7XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgLm1vYk1lbnVXcmFwcGVyIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLm1vYm1lbnVPcGVuIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgLm5hdiB1bC5uYXZCYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgdWwuY2FsRmVlZGJhY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgfVxyXG5cclxuICAgIGhlYWRlciB1bC5jYWxGZWVkYmFjayBsaSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICAgaGVhZGVyIHVsLmNhbEZlZWRiYWNrIGxpLm1vYmhnIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlYmVmO1xyXG4gICAgICB9XHJcblxyXG4gIGhlYWRlciAubG9nb3V0U2VjIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMTZweCAzMHB4IDE2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlYmVmO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICAgaGVhZGVyIC5sb2dvdXRTZWMgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIgLmxvZ291dFNlYyAubGlua0J0biB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBjb2xvcjogI2U4OGMyYjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICAgIGhlYWRlciAubG9nb3V0U2VjIC5saW5rQnRuOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2U4OGMyYjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaGVhZGVyIC5sb2dvdXRTZWMgLmxpbmtCdG4gc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICBoZWFkZXIgLm5hdiB1bC5uYXZCYXIgbGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjVmODtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAgIGhlYWRlciAubmF2IHVsLm5hdkJhciBsaSBhIHtcclxuICAgICAgY29sb3I6ICMwNjNiNmQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gIGhlYWRlciAubmF2IHVsLm5hdkJhciB1bC5vdGhlcmRyTWVudSBsaSBhIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIC5uYXYgdWwubmF2QmFyIGxpIGEgc3Bhbi5kd25BcnJvdyB7XHJcbiAgICBib3JkZXI6IHNvbGlkICM2OTg5YTc7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMS4ycHggMS4ycHggMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgLm5hdiB1bC5uYXZCYXIgbGkubW9iUHJvIGEgc3Bhbi5kd25BcnJvdyB7XHJcbiAgICBib3JkZXI6IHNvbGlkICM2OTg5YTc7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMS4ycHggMS4ycHggMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIGhlYWRlciAubmF2IHVsLm5hdkJhciBsaSBhLmFjY29yZEFjdGl2ZSBzcGFuLmR3bkFycm93IHtcclxuICAgIGJvcmRlcjogc29saWQgIzA2M2I2ZDtcclxuICAgIGJvcmRlci13aWR0aDogMCAxLjJweCAxLjJweCAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIC5uYXYgdWwubmF2QmFyIGxpIGEuYWNjb3JkQ2xvc2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjVmODtcclxuICB9XHJcblxyXG4gIGhlYWRlciAubmF2IHVsLm5hdkJhciBsaSBhLmFjY29yZEFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGFlMmU5O1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIC5uYXYgdWwubmF2QmFyIGxpIGEubW9iUHJvZHVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmNWY4O1xyXG4gIH1cclxuXHJcblxyXG4gIGhlYWRlciAubmF2IHVsLm5hdkJhciBsaSBhLm1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjVmODtcclxuICB9XHJcblxyXG4gIGhlYWRlciAubmF2IHVsLm5hdkJhciB1bC5vdGhlcmRyTWVudSBsaTpob3ZlciBhIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICB9XHJcblxyXG4gIGhlYWRlciAubmF2IHVsLm5hdkJhciB1bC5vdGhlcmRyTWVudSBsaTpob3ZlciBhIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICB9XHJcblxyXG5cclxuICBoZWFkZXIgLm5hdiAubWVudUJveCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGhlYWRlciAubmF2IHVsLm5hdkJhciAubWVudUJveCBsaSwgaGVhZGVyIC5uYXYgdWwubmF2QmFyIC5tZW51Qm94IGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5cclxuICBoZWFkZXIgdWwuY2FsRmVlZGJhY2sgbGkgYSB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcblxyXG4gIGhlYWRlciAubmF2IHVsLm5hdkJhciAub3RoZXJkck1lbnUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgLm5hdiB1bC5uYXZCYXIgbGk6aG92ZXIgYTphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIC5uYXYgdWwubmF2QmFyIC5vdGhlcmRyTWVudSBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICB9XHJcblxyXG4gIGhlYWRlciAubWFpbk52Ymcge1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLm1vYkh1bWJlcmdlciB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAyMHB4IDNweDtcclxuICB9XHJcblxyXG4gICAgLm1vYkh1bWJlcmdlciBzcGFuIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gIC5tb2JMb2dvIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDEzcHggMCAwIDA7XHJcbiAgICAvKiBmbG9hdDogbGVmdDsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIGhlYWRlciAubmF2IHVsLm5hdkJhciAubWVudUJveCBsaSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgICBoZWFkZXIgLm5hdiB1bC5uYXZCYXIgLm1lbnVCb3ggbGkgaDQsIGhlYWRlciAubmF2IHVsLm5hdkJhciAubWVudUJveCBsaSAuaGVhZGluZ2g0IHtcclxuICAgICAgYmFja2dyb3VuZDogI2YyZjVmODtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAxOXB4IDYwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAgIGhlYWRlciAubmF2IHVsLm5hdkJhciAubWVudUJveCBsaSBoNC5hY2NvcmRBY3RpdmUsIGhlYWRlciAubmF2IHVsLm5hdkJhciAubWVudUJveCBsaSAuaGVhZGluZ2g0LmFjY29yZEFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2RhZTJlOTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaGVhZGVyIC5uYXYgdWwubmF2QmFyIC5tZW51Qm94IGxpIGg0OmFmdGVyLCBoZWFkZXIgLm5hdiB1bC5uYXZCYXIgLm1lbnVCb3ggbGkgLmhlYWRpbmdoNDphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkICM2OTg5YTc7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDEuMnB4IDEuMnB4IDA7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoZWFkZXIgLm5hdiB1bC5uYXZCYXIgLm1lbnVCb3ggbGkgaDQuYWNjb3JkQWN0aXZlOmFmdGVyLCBoZWFkZXIgLm5hdiB1bC5uYXZCYXIgLm1lbnVCb3ggbGkgLmhlYWRpbmdoNC5hY2NvcmRBY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgIHRvcDogMjVweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgaGVhZGVyIC5uYXYgdWwubmF2QmFyIC5tZW51Qm94IHVsLmluc3VyYW5jZUJsb2NrIGxpIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gICAgaGVhZGVyIC5uYXYgdWwubmF2QmFyIC5tZW51Qm94IHVsLmluc3VyYW5jZUJsb2NrIGxpIGEge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIgLm5hdiB1bC5uYXZCYXIgLm1lbnVCb3ggdWwuaW5zdXJhbmNlQmxvY2sgbGk6aG92ZXIgYSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGNvbG9yOiAjMDYzYjZkO1xyXG4gICAgfVxyXG5cclxuICBoZWFkZXIgLm5hdiAubW9iUHJvIC5tZW51Qm94IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTEwMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgLm5hdiAubW9iUHJvIC5tZW51Qm94IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgICBoZWFkZXIgLm5hdiAubW9iUHJvIC5tZW51Qm94LnByb09wZW4ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgaGVpZ2h0OiA4MnZoO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgaGVhZGVyIC5uYXYgdWwubmF2QmFyIC5tZW51Qm94IGxpLm1vYlByb0JhY2sge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICAgaGVhZGVyIC5uYXYgdWwubmF2QmFyIC5tZW51Qm94IGxpLm1vYlByb0JhY2sgYSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGNvbG9yOiAjZTU3MjAwO1xyXG4gICAgfVxyXG5cclxuICAgICAgaGVhZGVyIC5uYXYgdWwubmF2QmFyIC5tZW51Qm94IGxpLm1vYlByb0JhY2sgYSBzcGFuLmR3bkFycm93IHtcclxuICAgICAgICBib3JkZXI6IHNvbGlkICNlNTcyMDA7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDEuMnB4IDEuMnB4IDA7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuICBoZWFkZXIgLmNhbGxCZmVlZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgdWwuY2FsRmVlZGJhY2sgbGkgYS5mZWVkQ2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgdWwuY2FsRmVlZGJhY2sgbGkgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAgIGhlYWRlciB1bC5jYWxGZWVkYmFjayBsaSBhLmFjdGl2ZTphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gIGhlYWRlciAuaGVhZGVyIC5yaWdodEJsb2cgLmxpdmVDaGF0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiA0M3B4O1xyXG4gICAgei1pbmRleDogOTlcclxuICB9XHJcblxyXG4gICAgaGVhZGVyIC5oZWFkZXIgLnJpZ2h0QmxvZyAubGl2ZUNoYXQgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMDtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKC9pbWFnZXMvZGVmYXVsdC1zb3VyY2UvSG9tZVJldmFtcC9wYWdlLXNwcml0ZS1pbWcucG5nKTtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTU3MnB4IC0yNDhweDtcclxuICAgICAgd2lkdGg6IDM5cHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgICBoZWFkZXIgLmhlYWRlciAucmlnaHRCbG9nIC5saXZlQ2hhdCBhIC5kb3RzR3JlZW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMDtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gIGhlYWRlciAuaGVhZGVyIC5yaWdodEJsb2cgLmxvbWJhcmRDYWxsIHtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIH1cclxuXHJcbiAgICBoZWFkZXIgLmhlYWRlciAucmlnaHRCbG9nIC5sb21iYXJkQ2FsbCBzcGFuIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgIH1cclxuXHJcbiAgaGVhZGVyIC5oZWFkZXIgLnJpZ2h0QmxvZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogN3B4IDAgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAgIGhlYWRlciAuaGVhZGVyIC5yaWdodEJsb2cgLmZlZWRCYWNrIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgLm1vYkNhbGxiYWNrIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDEycHggNnB4IDMzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGNvbG9yOiAjMDczYjZiO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuXHJcbiAgICAubW9iQ2FsbGJhY2s6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDExcHg7XHJcbiAgICAgIHRvcDogNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoL2ltYWdlcy9kZWZhdWx0LXNvdXJjZS9Ib21lUmV2YW1wL3BhZ2Utc3ByaXRlLWltZy5wbmcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzkxcHggLTI1NnB4O1xyXG4gICAgfVxyXG5cclxuICBoZWFkZXIgdWwuY2FsRmVlZGJhY2sgbGkgYS5jYWxsQmFja2hpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIGhlYWRlciAud2VsUHJvZiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDVweCAxNnB4O1xyXG4gIH1cclxuXHJcbiAgICBoZWFkZXIgLndlbFByb2YgaDQsIGhlYWRlciAud2VsUHJvZiAuaGVhZGluZ2g0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIgLndlbFByb2YgaDUge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlciAud2VsUHJvZiAuZ3Vlc3RJY28ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2ltYWdlcy9kZWZhdWx0LXNvdXJjZS9Ib21lUmV2YW1wL2d1ZXN0aWNvLnBuZyk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogNXB4IDVweCAwIDA7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlciAud2VsUHJvZiAubWVuSWNvIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9pbWFnZXMvZGVmYXVsdC1zb3VyY2UvSG9tZVJldmFtcC9tZW5pY28ucG5nKTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiA1cHggNXB4IDAgMDtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyIC53ZWxQcm9mIC53b21JY28ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2ltYWdlcy9kZWZhdWx0LXNvdXJjZS9Ib21lUmV2YW1wL3dvbWljby5wbmcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDVweCA1cHggMCAwO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgLm1vYmxvZ2luYmxvY2sge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgICAubW9ibG9naW5ibG9jayAubW9ibG9naW5CdCB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgIHBhZGRpbmc6IDNweCAxNXB4O1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICNlNTcyMDA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gIGhlYWRlciAud2VsUHJvZiAubW9iQWZ0ZXJsb2dpbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIC53ZWxQcm9mIC5tb2JCZWZvcmVsb2dpbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIGhlYWRlciAud2VsUHJvZiAubW9iQWZ0ZXJsb2dpbiBoMyB7XHJcbiAgICBtYXJnaW46IDAgMCA1cHggMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIGhlYWRlciAud2VsUHJvZiAubW9iQWZ0ZXJsb2dpbiAuZWRpdFByb2YgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcblxyXG4gIGhlYWRlciAubmF2IHVsLm5hdkJhciAubWVudUJveCAuaGVsdGhJbnNpY28ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQyM3B4IC01MjNweDtcclxuICB9XHJcblxyXG4gIGhlYWRlciAubmF2IHVsLm5hdkJhciAubWVudUJveCAubW90b3JJbnNpY28ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE4MnB4IC01MjNweDtcclxuICB9XHJcblxyXG4gIGhlYWRlciAubmF2IHVsLm5hdkJhciAubWVudUJveCAub3RoZXJJbnNpY28ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ3cHggLTUyM3B4O1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIC5uYXYgdWwubmF2QmFyIC5tZW51Qm94IC50cmF2ZWxJbnNpY28ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI5N3B4IC01MjVweDtcclxuICB9XHJcblxyXG4gIGhlYWRlciAubmF2IHVsLm5hdkJhciAubWVudUJveCAuaG9tZUluc2ljbyB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNTQycHggLTUyM3B4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5iYW5uZXJCZyAuaW5zdXJhbmNlQm94IC5pbnNJbWcgLnR3b1doaWNvLCAubWFpbmJhbm5lckJnIC5pbnN1cmFuY2VCb3ggLmluc0ltZyAuY2FyaW5JY28sIC5tYWluYmFubmVyQmcgLmluc3VyYW5jZUJveCAuaW5zSW1nIC50cmF2bGxpbkljbywgLm1haW5iYW5uZXJCZyAuaW5zdXJhbmNlQm94IC5pbnNJbWcgLmhlYWx0aEluY2ljbywgLm1haW5iYW5uZXJCZyAuaW5zdXJhbmNlQm94IC5pbnNJbWcgLmhvbWVpbmNJY28ge1xyXG4gICAgd2lkdGg6IDExNXB4O1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICB9XHJcblxyXG4gIC5tYWluYmFubmVyQmcgLmluc3VyYW5jZUJveCAuaW5zSW1nIC50d29XaGljbyB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjhweCAtMzUxcHg7XHJcbiAgfVxyXG5cclxuICAubWFpbmJhbm5lckJnIC5pbnN1cmFuY2VCb3ggLmluc0ltZyAuY2FyaW5JY28ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE4MnB4IC0zNTVweDtcclxuICB9XHJcblxyXG4gIC5tYWluYmFubmVyQmcgLmluc3VyYW5jZUJveCAuaW5zSW1nIC50cmF2bGxpbkljbyB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzUycHggLTM1NXB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5iYW5uZXJCZyAuaW5zdXJhbmNlQm94IC5pbnNJbWcgLmhlYWx0aEluY2ljbyB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNTEycHggLTM1NXB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5iYW5uZXJCZyAuaW5zdXJhbmNlQm94IC5pbnNJbWcgLmhvbWVpbmNJY28ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY2MHB4IC0zNTVweDtcclxuICB9XHJcblxyXG4gIC5tYWluYmFubmVyQmcgLmluc3VyYW5jZUJveCB1bCBsaTphZnRlciB7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5iYW5uZXJCZyAuaW5zdXJhbmNlQm94IHVsIGxpIGgzIHtcclxuICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5tYWluYmFubmVyQmcgLmluc3VyYW5jZUJveCB1bCBsaSBoNSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLnBhcnRuZXJTZWN0aW9uIC5uZXR3b3JrQWxsIGEge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAucGFydG5lclNlY3Rpb24gLm5ldHdvcmtzUGFydG5lciBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIH1cclxuICAvKiBIZWFkZXIgcmVzcG9uc2l2ZSBjc3MgZW5kKi9cclxuXHJcbiAgLyphZ2VuciBmb3JtKi9cclxuXHJcbiAgLmxvZ2luTWFpbnBhZ2UgLmFnZW50QXBwZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC8qYWdlbnIgZm9ybSovXHJcblxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA5OTFweCkge1xyXG4gIC5mb290ZXJDb250YWluZXJiZyAuc29jaWFsSWNvbnMgdWwgbGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbWVyU3BlYWtiZyAuc3BlYWtCbG9jayB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDEycHggMjBweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJDb250YWluZXJiZyAuc29jaWFsSWNvbnMgdWwgbGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuXHJcblxyXG4gIC8qbGF0ZXN0IHZpZGVvcyovXHJcblxyXG4gIC52aWRlb0RldGFpbHNiZHIgLmxhdGVzdFZpZGVvcyB1bCBsaSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICAgLnZpZGVvRGV0YWlsc2JkciAubGF0ZXN0VmlkZW9zIHVsIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZGVvRGV0YWlsc2JkciAubGF0ZXN0VmlkZW9zIHVsIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZGVvRGV0YWlsc2JkciAubGF0ZXN0VmlkZW9zIHVsIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZGVvRGV0YWlsc2JkciAubGF0ZXN0VmlkZW9zIHVsIGxpIGEgaDQge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgLypsYXRlc3QgdmlkZW9zKi9cclxuXHJcbiAgLypmb290ZXIqL1xyXG4gIC5mb290ZXJDb250YWluZXJiZyAuZm9vdGVyTWVudSB7XHJcbiAgICBtYXJnaW46IDAgMzBweDtcclxuICB9XHJcblxyXG4gICAgLmZvb3RlckNvbnRhaW5lcmJnIC5mb290ZXJNZW51IGg0IHtcclxuICAgICAgcGFkZGluZzogMTBweCAwIDIwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlN2VlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gIC5mb290ZXJDb250YWluZXJiZyBoNC5saXN0QWN0aXZlIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyQ29udGFpbmVyYmcgLmZvb3Rlck1lbnUgaDQubGlzdEFjdGl2ZTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlxcMjIxMlwiO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yNXMgbGluZWFyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMjVzIGxpbmVhcjtcclxuICB9XHJcblxyXG4gIC5mb290ZXJDb250YWluZXJiZyAuZm9vdGVyTWVudSBoNC5saXN0Q2xvc2U6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcXDAwMmJcIjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yNXMgbGluZWFyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMjVzIGxpbmVhcjtcclxuICB9XHJcblxyXG4gIC5mb290ZXJDb250YWluZXJiZyAuZm9vdGVyTWVudSB1bCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgICAuZm9vdGVyQ29udGFpbmVyYmcgLmZvb3Rlck1lbnUgdWwgbGkge1xyXG4gICAgICBwYWRkaW5nOiAwIDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAuZm9vdGVyQ29udGFpbmVyYmcgLmZvb3Rlck1lbnUgdWwgbGkgYSB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgLmZvb3RlckNvbnRhaW5lcmJnIC5zb2NpYWxJY29ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC8qZm9vdGVyKi9cclxuXHJcbiAgLypwYXJ0bmVyIHNlY3Rpb24qL1xyXG4gIC5wYXJ0bmVyU2VjdGlvbiAubmV0d29ya3NQYXJ0bmVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHggNDBweDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLypwYXJ0bmVyIHNlY3Rpb24qL1xyXG5cclxuICAvKmhlYWx0aCBBZHZpc29yKi9cclxuICAuaGVhbHRoQWR2aXNvciBpbWcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmhlYWx0aEFkdmlzb3IgLmhlbHRoQWRhcmVhIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLypoZWFsdGggQWR2aXNvciovXHJcblxyXG4gIC8qaW5zdXJhbmNlIGFydGljbGUgc3RhcnQqL1xyXG4gIC5hcnRpY2xlU2VjdGlvbiAuaW5zdXJhbmNlVXBkaW5mbyB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgLmFydGljbGVTZWN0aW9uIC5hcnRJbm91cGRhdGVzIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAxMHB4O1xyXG4gIH1cclxuICAvKmluc3VyYW5jZSBhcnRpY2xlIHN0YXJ0Ki9cclxuXHJcblxyXG4gIC8qYXdhcmRzIGJsb2cqL1xyXG4gIC5hd2FyZHNCbG9nbWFpbiAuYXdhcmRzQmxvZyBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYXdhcmRzQmxvZ21haW4gLmF3YXJkc0Jsb2cge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcblxyXG4gICAgLmF3YXJkc0Jsb2dtYWluIC5hd2FyZHNCbG9nIGltZyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAvKmF3YXJkcyBibG9nKi9cclxuICAgIH1cclxuICAvKmluc3VyYW5jZSBiYW5uZXIqL1xyXG4gIC5tYWluYmFubmVyQmcgLmluc3VyYW5jZUJveCB1bCBsaSBpbWcge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC8qaW5zdXJhbmNlIGJhbm5lciovXHJcblxyXG4gIC8qbG9naW4gc2lnbnVwKi9cclxuICAubG9naW5NYWlucGFnZSAubG9nRGV0YWlscyAuZW1sUGFzcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5sb2dpbk1haW5wYWdlIC5ncmF5TGluZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luTWFpbnBhZ2UgLmxvZ0RldGFpbHMgLnNpZ25Tb2Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubG9naW5NYWlucGFnZSAubG9naW5BcmVhIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHBhZGRpbmc6IDM1cHggNXB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luTWFpbnBhZ2UgLnNpZ25Tb2MgYS5ndWVzdExvZ2J0biB7XHJcbiAgICBtYXJnaW46IDE3cHggMTVweCAwO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luTWFpbnBhZ2UgLmNsaWtTaWduOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubG9naW5NYWlucGFnZSAuY2xpa1NpZ246YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubG9naW5NYWlucGFnZSAucmVnTm93IHtcclxuICAgIG1hcmdpbjogMCAxOCUgMyU7XHJcbiAgfVxyXG5cclxuICAuc2lnbkJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luTWFpbnBhZ2UgLmxvZ0RldGFpbHMge1xyXG4gICAgcGFkZGluZzogMzVweCAyMHB4IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogLTY1cHg7XHJcbiAgfVxyXG5cclxuICAubG9naW5NYWlucGFnZSAuc2lnblNvYyAuc29jSWNvbnMgLmdvb2dsZUxvZyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubG9naW5NYWlucGFnZSAuc2lnblNvYyAuc29jSWNvbnMgLmZiTG9nIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMThweDtcclxuICB9XHJcblxyXG4gIC5sb2dpbk1haW5wYWdlIC5lbWxQYXNzMSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGhlYWRlciAuaGVhZGVyIC5yaWdodEJsb2cge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDVweCAwIDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gICAgaGVhZGVyIC5oZWFkZXIgLnJpZ2h0QmxvZyAubG9tYmFyZENhbGwge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgaGVhZGVyIC5oZWFkZXIgLmxvbWJhcmRMb2dvIHtcclxuICAgIHBhZGRpbmc6IDIycHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC8qbG9naW4gc2lnbnVwKi9cclxuXHJcbiAgXHJcblxyXG4gXHJcblxyXG4gIC8qYWdlbnQgZm9ybSovXHJcblxyXG4gIFxyXG5cclxuIFxyXG4gIC8qYWdlbnQgZm9ybSovXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblxyXG5cclxuICBcclxufVxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLypmb290ZXIqL1xyXG4gIFxyXG4gIC8qZm9vdGVyKi9cclxuXHJcbiAgLyppbnN1cmFuY2UgYmFubmVyKi9cclxuXHJcblxyXG4gIC8qaW5zdXJhbmNlIGJhbm5lciovXHJcblxyXG4gIC8qbGF0ZXN0IHZpZGVvcyovXHJcbiAgXHJcbiAgLypsYXRlc3QgdmlkZW9zKi9cclxuXHJcbiAgLyppbnN1cmFuY2UgQXBwKi9cclxuIFxyXG4gIC8qaW5zdXJhbmNlIEFwcCovXHJcblxyXG4gIC8qaW5zdXJhbmNlIGFydGljbGUgc3RhcnQqL1xyXG4gIFxyXG5cclxuICBcclxuICAvKmluc3VyYW5jZSBhcnRpY2xlIHN0YXJ0Ki9cclxuXHJcbiAgLypsb2dpbiBzaWdudXAqL1xyXG5cclxuICAubG9naW5NYWlucGFnZSAucmVnTm93IHtcclxuICAgIG1hcmdpbjogMCA1JSA1JTtcclxuICB9XHJcblxyXG4gIC8qbG9naW4gc2lnbnVwKi9cclxuXHJcbiBcclxufVxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDMyMHB4KSB7XHJcblxyXG4gXHJcblxyXG4gXHJcbiAgLypmb290ZXIqL1xyXG5cclxuXHJcblxyXG5cclxuICAvKmxvZ2luIHNpZ251cCovXHJcblxyXG4gXHJcblxyXG4gIC5tYWluYmFubmVyQmcgLmluc3VyYW5jZUJveCAuaW5zSW1nIC50d29XaGljbywgLm1haW5iYW5uZXJCZyAuaW5zdXJhbmNlQm94IC5pbnNJbWcgLmNhcmluSWNvLCAubWFpbmJhbm5lckJnIC5pbnN1cmFuY2VCb3ggLmluc0ltZyAudHJhdmxsaW5JY28sIC5tYWluYmFubmVyQmcgLmluc3VyYW5jZUJveCAuaW5zSW1nIC5oZWFsdGhJbmNpY28sIC5tYWluYmFubmVyQmcgLmluc3VyYW5jZUJveCAuaW5zSW1nIC5ob21laW5jSWNvIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgfVxyXG59XHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICNlNmY0ZjU7XHJcbn1cclxuXHJcblxyXG4uZGF0ZS1waWNrZXItY3VzdG9te1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIFxyXG59XHJcblxyXG5cclxuLmRhdGUtcGlja2VyLWN1c3RvbS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4gIC5kYXRlLXBpY2tlci1jdXN0b20ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1pbmZpeCBpbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuLmRhdGUtcGlja2VyLWN1c3RvbS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjYjRjNGQzICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG5cclxuZGF0ZS1waWNrZXItY3VzdG9tLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxub3BhY2l0eTogMTtcclxufVxyXG5cclxuLmRhdGUtcGlja2VyLWN1c3RvbS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiAjYWRhZGFkICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRhdGUtcGlja2VyLWN1c3RvbS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZGF0ZS1waWNrZXItY3VzdG9tLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtaGlkZS1wbGFjZWhvbGRlciAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XHJcbiAgdG9wOiAwO1xyXG59XHJcbi5kYXRlLXBpY2tlci1jdXN0b20ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XHJcbiB0b3A6IC0xOHB4O1xyXG4gY29sb3I6ICNhZGFkYWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGUtcGlja2VyLWN1c3RvbS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcclxuICB0b3A6IC0xOHB4O1xyXG59XHJcblxyXG5cclxuLmRhdGUtcGlja2VyLWN1c3RvbWZpZWxke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuICAuZGF0ZS1waWNrZXItY3VzdG9tZmllbGQgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmRhdGUtcGlja2VyLWN1c3RvbWZpZWxkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgdG9wOiA0NnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qSHVnZSB0aGFua3MgdG8gQHRvYmlhc2FobGluIGF0IGh0dHA6Ly90b2JpYXNhaGxpbi5jb20vc3BpbmtpdC8gKi9cclxuLnNwaW5uZXIge1xyXG4gIG1hcmdpbjogMHB4IGF1dG8gMDtcclxuICB3aWR0aDogNzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgLnNwaW5uZXIgPiBkaXYge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUzYzZkO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG4gIH1cclxuXHJcbiAgLnNwaW5uZXIgLmJvdW5jZTEge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG4gIH1cclxuXHJcbiAgLnNwaW5uZXIgLmJvdW5jZTIge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xyXG4gIH1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XHJcbiAgMCUsIDgwJSwgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMClcclxuICB9XHJcblxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XHJcbiAgMCUsIDgwJSwgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuXHJcbiAgNDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZvcmdvdC1kYXRlcGlja2VyIHtcclxuICAgIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgfVxyXG5cclxuICAubG9nLWNoYW5nZS1maWVsZHMge1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5sb2dpbi1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG5cclxuICAubG9naW5Tb2Mge1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgfVxyXG5cclxuICAubG9naW5NYWlucGFnZSAuc2lnblNvYyBhLmd1ZXN0TG9nYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnJlZ2lzdGVyLWJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuLmR1bW15LWRhdGUtZmllbGQge1xyXG4gIGNvbG9yOiAjMDYzYjZkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "Ttk1":
/*!**************************************!*\
  !*** ./src/app/models/api.models.ts ***!
  \**************************************/
/*! exports provided: ChangePasswordUIRequestModel, SearchWithPolicyNoRequestModel, SearchWithVehicleRegNoRequestModel, SearchWithLANRequestModel, EmailPaymentLinkUIModel, IpEmailPaymentLinkUIModel, CustomerModel, AddressModel, ErrorCustomerUIModel, NomineeUIModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordUIRequestModel", function() { return ChangePasswordUIRequestModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWithPolicyNoRequestModel", function() { return SearchWithPolicyNoRequestModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWithVehicleRegNoRequestModel", function() { return SearchWithVehicleRegNoRequestModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWithLANRequestModel", function() { return SearchWithLANRequestModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailPaymentLinkUIModel", function() { return EmailPaymentLinkUIModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpEmailPaymentLinkUIModel", function() { return IpEmailPaymentLinkUIModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModel", function() { return CustomerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressModel", function() { return AddressModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCustomerUIModel", function() { return ErrorCustomerUIModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NomineeUIModel", function() { return NomineeUIModel; });
//----------------------dashboard models----------------------------------//
class ChangePasswordUIRequestModel {
}
class SearchWithPolicyNoRequestModel {
}
class SearchWithVehicleRegNoRequestModel {
}
class SearchWithLANRequestModel {
}
class PaymentTransactionRequestUIModel {
}
class EmailPaymentLinkUIModel extends PaymentTransactionRequestUIModel {
}
class IpEmailPaymentLinkUIModel extends PaymentTransactionRequestUIModel {
}
class BaseUIResponseModel {
}
class CustomerModel extends BaseUIResponseModel {
}
class AddressModel {
}
class CustomerGSTInTaxDetail {
    constructor() {
        this.gstiN_UINNo = "";
        this.panNo = "";
        this.constitutionOfBusinessText = "";
        this.customerTypeText = "";
        this.gstRegistrationStatusText = "";
    }
}
class ApplicantModel {
}
class ErrorCustomerUIModel {
}
class NomineeUIModel extends BaseUIResponseModel {
}
class userFamilies {
}


/***/ }),

/***/ "VBSo":
/*!********************************************!*\
  !*** ./src/app/constants/configuration.ts ***!
  \********************************************/
/*! exports provided: eChannelConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eChannelConfig", function() { return eChannelConfig; });
class eChannelConfig {
}
eChannelConfig.BaseUrl = "/eChannelServices/api/"; //Base Url for api call
//public static BaseUrl: string = "http://localhost:5019/api/"; //Base Url for api call
eChannelConfig.BaseUrlforOldUI = "/IpartnerService/core/api/"; //Base Url for api call
//public static BaseUrlforOldUI = "http://localhost:50920/core/api/";
eChannelConfig.BaseUrlforUIUX = "/ipartner_web/api/"; //Base Url for api call
////////////////////////////////////////////Product RedirectionURL///////////////////////////////////////////////////////
eChannelConfig.ViewWellnessUrl = "https://ipartner.icicilombard.com/WebPages/Customers/NWCHISingleSignOn.aspx?PolicyNo=";
//Motor
/// public static LOGIN_URL = "https://www.icicilombard.com/registration-new-ui";
eChannelConfig.LOGIN_URL = eChannelConfig.BaseUrl + "auth/token";
eChannelConfig.REGISTER_URL = eChannelConfig.BaseUrl + "user/register";
eChannelConfig.GETSESSIONVERSION_URL = eChannelConfig.BaseUrl + "Master/GetSessionVersion";
eChannelConfig.CUSTOMERPROFILE_URL = eChannelConfig.BaseUrl + "Customer/Profile/0?nocache=";
eChannelConfig.FORGOTPASSWORD_URL = eChannelConfig.BaseUrl + "user/forgot-password";
eChannelConfig.SENDOTP_URL = eChannelConfig.BaseUrl + "user/otp";
eChannelConfig.OTPLOGIN_URL = eChannelConfig.BaseUrl + "auth/otp";
eChannelConfig.GUEST_LOGIN_URL = eChannelConfig.BaseUrl + "auth/guest";
eChannelConfig.CREATE_PAYMENT_TRANSACTION_URL = "/IPartnerService/core/api/" + "Payment/CreatePaymentTransaction";
eChannelConfig.PAYMENT_TRANSACTION_URL = eChannelConfig.BaseUrl + "Payment/Transaction";
eChannelConfig.GETPAYMENT_URL = eChannelConfig.BaseUrl + "Customer/Payment";
eChannelConfig.GETQUOTE_URL = eChannelConfig.BaseUrl + "Customer/Quote";
eChannelConfig.GETFAMILY_URL = eChannelConfig.BaseUrl + "Customer/Family";
eChannelConfig.GETPOLICY_URL = eChannelConfig.BaseUrl + "Customer/Policy";
eChannelConfig.PROFILE_URL = eChannelConfig.BaseUrl + "Customer/Profile";
eChannelConfig.GETPINCODE_URL = eChannelConfig.BaseUrl + "Master/CityDistrict/PinCode/";
eChannelConfig.ChangeUserPasswordUrl = eChannelConfig.BaseUrl + "User/ChangePassword";
eChannelConfig.TAGPOLICY_URL = eChannelConfig.BaseUrl + "Customer/Account/Policy";
eChannelConfig.GetEmailLinkRequest = eChannelConfig.BaseUrl + "Payment/GetEmailLinkRequest";
eChannelConfig.SendEmailPaymentLink = eChannelConfig.BaseUrl + "Payment/PaymentLink";
eChannelConfig.IpSendEmailPaymentLink = eChannelConfig.BaseUrlforOldUI + "Payment/SendEmailPaymentLink";
eChannelConfig.GetUserProfileUrlRequest = eChannelConfig.BaseUrl + "Customer/Profile";
eChannelConfig.ViewPDFUrl = eChannelConfig.BaseUrl + "Customer/Certificate";
eChannelConfig.EmailPolicyUrl = eChannelConfig.BaseUrl + "Customer/EmailPolicy";
eChannelConfig.DashboardUserProfileUrl = eChannelConfig.BaseUrl + "Customer/DashboardProfile";
eChannelConfig.ProfileImageUrl = "/images/default-source/phoenix/userimage/";
///=======================dashboard==================================//
eChannelConfig.TwoWheelerPlanPageUrl = "/motor-vehicle-insurance-policy/two-wheeler-insurance-online/get-quote/select-plans";
eChannelConfig.TwoWheelerPlanPageUrlNRT = "/motor-vehicle-insurance-policy/two-wheeler-insurance-online/get-quote/select-plans-fresh";
eChannelConfig.PrivateCarPlanPageUrl = "/motor-vehicle-insurance-policy/car-insurance-online/get-quote/select-plans";
eChannelConfig.FWFreshPlanPageUrl = "/motor-vehicle-insurance-policy/car-insurance-online/get-quote/select-plans";
eChannelConfig.FWFreshInsuredPageUrl = "/motor-vehicle-insurance-policy/car-insurance-online/get-quote/insured-details";
eChannelConfig.PPPlanPageUrl = "/health-insurance-plans/personal-accident-insurance-policy/get-quote/select-plans";
eChannelConfig.BoosterPlanPageUrl = "/health-insurance-plans/super-top-up-plan/get-quote/select-hb-plans";
eChannelConfig.ArogyaPlanPageUrl = "/health-insurance-plans/arogya-sanjeevani-policy/get-quote/select-ags-plans";
eChannelConfig.CHIPlanPageUrl = "/health-insurance-plans/health-insurance-policy/get-quote/select-chi-plans";
eChannelConfig.TravelPlanPageUrl = "/travel-insurance-online/get-quote/select-plans";
eChannelConfig.HomePlanPageUrl = "/home-insurance/get-quote/select-plans";
eChannelConfig.MarinePlanPageUrl = "/marine-insurance-policy/marine-select-plan";
eChannelConfig.MerchantPlanPageUrl = "/merchant-insurance/merchant-select-plan";
eChannelConfig.CyberPlanPageUrl = "/cyber-insurance-landing/cyber-insurance-plan";
eChannelConfig.TwoWheelerInsuredPageUrl = "/motor-vehicle-insurance-policy/two-wheeler-insurance-online/get-quote/insured-details";
eChannelConfig.TwoWheelerInsuredPageUrlNRT = "/motor-vehicle-insurance-policy/two-wheeler-insurance-online/get-quote/insured-details-fresh";
eChannelConfig.PrivateCarInsuredPageUrl = "/motor-vehicle-insurance-policy/car-insurance-online/get-quote/insured-details";
eChannelConfig.FWFreshPaymentPageUrl = "/payment-fresh?returl=motor-vehicle-insurance-policy/car-insurance-online/get-quote/insured-details/";
eChannelConfig.PPInsuredPageUrl = "/health-insurance-plans/personal-accident-insurance-policy/get-quote/pp-insured-details";
eChannelConfig.BoosterInsuredPageUrl = "/health-insurance-plans/super-top-up-plan/get-quote/hb-insured-details";
eChannelConfig.BoosterRNPageUrl = "/renew-policy/health/hb-renewal";
eChannelConfig.ArogyaInsuredPageUrl = "/health-insurance-plans/arogya-sanjeevani-policy/get-quote/insured-details-ags";
eChannelConfig.CHIInsuredPageUrl = "/health-insurance-plans/health-insurance-policy/get-quote/insured-details";
eChannelConfig.TravelInsuredPageUrl = "/travel-insurance-online/get-quote/insured-details";
eChannelConfig.HomeInsuredPageUrl = "/home-insurance/get-quote/insured-details";
eChannelConfig.MarineInsuredPageUrl = "/marine-insurance-policy/marine-insured-details";
eChannelConfig.MerchantInsuredPageUrl = "/merchant-insurance/merchant-insured-details";
eChannelConfig.CyberInsuredPageUrl = "/cyber-insurance-landing/cyber-insurance-insured-detail";
eChannelConfig.CyberFreshPaymentPageUrl = "/payment-fresh?returl=cyber-insurance-landing/cyber-insurance-insured-detail";
//===============================================================================//
eChannelConfig.ipartnerApi = "http://localhost:7000/eChannelServices/api/";
eChannelConfig.CryptoKey = "7080808080808083";
eChannelConfig.CryptoIv = "9080808080808083";
eChannelConfig.google_client_id = "724240248368-e9hine274f3kpo98631hstncqta4p361.apps.googleusercontent.com";
eChannelConfig.google_client_secret = "C0hhVjZA2CqOPqPMr2bXUeZ-";
eChannelConfig.ClientId = window.sessionStorage.getItem("clientId") == ( false || undefined) ? 1 : window.sessionStorage.getItem("clientId");
eChannelConfig.AuthToken = window.sessionStorage.getItem("AuthorizationToken") == ( false || undefined) ? "" : window.sessionStorage.getItem("AuthorizationToken");
eChannelConfig.gclId = window.sessionStorage.getItem("gclid") == ( false || undefined) ? "" : window.sessionStorage.getItem("gclid");
eChannelConfig.efId = window.sessionStorage.getItem("ef_id") == ( false || undefined) ? "" : window.sessionStorage.getItem("ef_id");
//DOB configuration
eChannelConfig.DATE_DOB_MAX = new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate());
eChannelConfig.DATE_DOB_MIN = new Date(new Date().getFullYear() - 120, 0, 1);


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.module */ "5+sL");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _modals_skip_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/skip-login.component */ "mE5c");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/pipes.module */ "iTUp");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/rest.service */ "tnAE");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_rest_service__WEBPACK_IMPORTED_MODULE_8__["RestService"],], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _components_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__["DashboardModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
        ], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _modals_skip_login_component__WEBPACK_IMPORTED_MODULE_6__["SkipLoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _components_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__["DashboardModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]], exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]] }); })();


/***/ }),

/***/ "dPqR":
/*!*******************************************!*\
  !*** ./src/app/services/popup.service.ts ***!
  \*******************************************/
/*! exports provided: PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PopupService {
    constructor() {
        //null value to avoid redirection on init in policy handler
        this.skipLoginPopUpOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    openSkipLoginPopUp() {
        this.skipLoginPopUpOpen.next(true);
        this.removeScroll();
    }
    closeSkipLoginPopUp() {
        this.skipLoginPopUpOpen.next(false);
        this.addScroll();
    }
    removeScroll() {
        this.position = window.scrollY;
        window.scrollTo(0, 0);
        document.body.classList.add("over-hidden");
    }
    addScroll() {
        document.body.classList.remove("over-hidden");
        window.scroll(0, this.position);
    }
}
PopupService.ɵfac = function PopupService_Factory(t) { return new (t || PopupService)(); };
PopupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PopupService, factory: PopupService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "gKif":
/*!***************************************************************************!*\
  !*** ./src/app/components/dashboard/my-policies/my-policies.component.ts ***!
  \***************************************************************************/
/*! exports provided: MyPoliciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPoliciesComponent", function() { return MyPoliciesComponent; });
/* harmony import */ var src_app_models_customerProfileData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/customerProfileData */ "0WvO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest.service */ "tnAE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class MyPoliciesComponent {
    constructor(_restService, formBuilder) {
        this._restService = _restService;
        this.formBuilder = formBuilder;
        this.isExpired = true;
        this.policy = '';
        this.email = '';
        this.emailPolicyNo = '';
        this.IsShowloader = false;
        this.IsShowEmailPopUp = false;
        this.submitEmailPolicyResult = false;
        this.dashboardErrorUIModel = new src_app_models_customerProfileData__WEBPACK_IMPORTED_MODULE_0__["ErrorCustomerUIModel"]();
        this.policyListData = [];
        this.policyName = "";
        this.viewPdfUrl = "";
        this.isEmail = false;
        this.submitEmailPolicyValue = '';
        this.imgPath = "/docs/default-source/assets/images/";
        this.rawHTML = "";
        this.renewalStatus = "";
        this.renewalDays = "";
        this.renewalUrl = "";
        this.imgFullPath = "";
        this.pendingStatus = "";
        this.policyNameValue = "";
        this.pendingpolicies = "";
        this.policyStatus = "";
        this.expiredPolicyDataList = [];
        this.pendingPolicyDataList = [];
        this.submit = false;
        this.submitErrorFlag = false;
        this.submitemailErrorMessage = "";
    }
    ngOnInit() {
    }
    userProfile() {
        this._restService.GetUserProfile("0")
            .then((res) => {
        })
            .catch((error) => {
            console.log("Error--> " + error);
        });
    }
}
MyPoliciesComponent.ɵfac = function MyPoliciesComponent_Factory(t) { return new (t || MyPoliciesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
MyPoliciesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyPoliciesComponent, selectors: [["app-my-policies"]], decls: 2, vars: 0, consts: [[3, "click"]], template: function MyPoliciesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyPoliciesComponent_Template_button_click_0_listener() { return ctx.userProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".block[_ngcontent-%COMP%]{\r\n    display: block !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXBvbGljaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoibXktcG9saWNpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9ja3tcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "hMtU":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/left-pane/left-pane.component.ts ***!
  \***********************************************************************/
/*! exports provided: LeftPaneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftPaneComponent", function() { return LeftPaneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/Constants */ "xaeV");
/* harmony import */ var src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/configuration */ "VBSo");
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/navigation.service */ "+NYR");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rest.service */ "tnAE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function (a0) { return { "active": a0 }; };
class LeftPaneComponent {
    constructor(_navigationService, _restService) {
        this._navigationService = _navigationService;
        this._restService = _restService;
        this.onNavSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.flag = false;
    }
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        this.BindUserProfile();
    }
    BindUserProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._restService.GetDashboardUserProfile("0")
                .then((res) => {
                if (res.success) {
                    this.name = res.name;
                    this.mail = res.emailId;
                    const playload = JSON.parse(atob(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_3__["eChannelConfig"].AuthToken.split('.')[1]));
                    this.userId = playload.unique_name;
                    this.userImage = src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_3__["eChannelConfig"].ProfileImageUrl + this.userId + '.jpeg';
                }
            })
                .catch((error) => {
                console.log("Error--> " + error);
            });
        });
    }
    navLink() {
        this.onNavSelect.emit('true');
    }
    openPersonalDetails() {
        this.navLink();
        this._navigationService.setPage(src_app_constants_Constants__WEBPACK_IMPORTED_MODULE_2__["PERSONAL_DETAILS"]);
    }
    openMyPolicies() {
        this.navLink();
        this._navigationService.setPage(src_app_constants_Constants__WEBPACK_IMPORTED_MODULE_2__["MY_POLICIES"]);
    }
    openPayments() {
        this._navigationService.setPage(src_app_constants_Constants__WEBPACK_IMPORTED_MODULE_2__["PAYMENTS"]);
    }
    openSavedQuote() {
        this.navLink();
        this._navigationService.setPage(src_app_constants_Constants__WEBPACK_IMPORTED_MODULE_2__["SAVED_QUOTE"]);
    }
}
LeftPaneComponent.ɵfac = function LeftPaneComponent_Factory(t) { return new (t || LeftPaneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"])); };
LeftPaneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LeftPaneComponent, selectors: [["app-left-pane"]], inputs: { navClass: "navClass" }, outputs: { onNavSelect: "onNavSelect" }, decls: 23, vars: 14, consts: [[1, "sticky"], [1, "user-info"], ["id", "toggleDash2", 1, "dashToggle"], [1, "user-ico"], [1, "profile-dp"], ["src", "this.userImage", 1, "dpChanged"], ["type", "file", "name", "", "id", "upload-dp", "accept", "image/png, image/jpeg, image/jpg, image/gif, image/webp", 1, "hidden"], ["id", "sel-option", 1, "toc-odd", "tab-block", 2, "display", "block"], ["rel", "tab1", 1, "", 2, "cursor", "pointer", 3, "ngClass", "click"], ["rel", "tab2", 2, "cursor", "pointer", 3, "ngClass", "click"], ["rel", "tab3", 2, "cursor", "pointer", 3, "ngClass", "click"], ["rel", "tab5", 2, "cursor", "pointer", 3, "ngClass", "click"]], template: function LeftPaneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftPaneComponent_Template_li_click_15_listener() { return ctx.openPersonalDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Personal Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftPaneComponent_Template_li_click_17_listener() { return ctx.openMyPolicies(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Bills/Loan Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftPaneComponent_Template_li_click_19_listener() { return ctx.openPayments(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Impulsive Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftPaneComponent_Template_li_click_21_listener() { return ctx.openSavedQuote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Assistance for task");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.mail, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.navClass == "personal-details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.navClass == "my-policies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.navClass == "payments"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.navClass == "saved-quote"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".sidenav[_ngcontent-%COMP%] {\r\n  height: 100%; \r\n  width: 0; \r\n  position: fixed; \r\n  z-index: 1; \r\n  top: 0; \r\n  left: 0;\r\n  overflow-x: hidden; \r\n  padding-top: 60px; \r\n  transition: 0.5s; \r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n  }\r\n\r\n.sidenav[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n  }\r\n\r\n#main[_ngcontent-%COMP%] {\r\n  transition: margin-left .5s;\r\n  padding: 20px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n  }\r\n\r\n    .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      font-size: 18px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnQtcGFuZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw2QkFBNkI7QUFDN0I7RUFDRSxZQUFZLEVBQUUscUJBQXFCO0VBQ25DLFFBQVEsRUFBRSwwQ0FBMEM7RUFDcEQsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxVQUFVLEVBQUUsZ0JBQWdCO0VBQzVCLE1BQU0sRUFBRSxvQkFBb0I7RUFDNUIsT0FBTztFQUNQLGtCQUFrQixFQUFFLDhCQUE4QjtFQUNsRCxpQkFBaUIsRUFBRSxvQ0FBb0M7RUFDdkQsZ0JBQWdCLEVBQUUseURBQXlEO0FBQzdFO0FBRUUsOEJBQThCO0FBQzlCO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7QUFFQSwyREFBMkQ7QUFDM0Q7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0FBRUYsc0hBQXNIO0FBQ3RIO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjtBQUVBLGdJQUFnSTtBQUNoSTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztJQUVFO01BQ0UsZUFBZTtJQUNqQjtBQUNKIiwiZmlsZSI6ImxlZnQtcGFuZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIFRoZSBzaWRlIG5hdmlnYXRpb24gbWVudSAqL1xyXG4uc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiAxMDAlIEZ1bGwtaGVpZ2h0ICovXHJcbiAgd2lkdGg6IDA7IC8qIDAgd2lkdGggLSBjaGFuZ2UgdGhpcyB3aXRoIEphdmFTY3JpcHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xyXG4gIHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXHJcbiAgbGVmdDogMDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cclxuICBwYWRkaW5nLXRvcDogNjBweDsgLyogUGxhY2UgY29udGVudCA2MHB4IGZyb20gdGhlIHRvcCAqL1xyXG4gIHRyYW5zaXRpb246IDAuNXM7IC8qIDAuNSBzZWNvbmQgdHJhbnNpdGlvbiBlZmZlY3QgdG8gc2xpZGUgaW4gdGhlIHNpZGVuYXYgKi9cclxufVxyXG5cclxuICAvKiBUaGUgbmF2aWdhdGlvbiBtZW51IGxpbmtzICovXHJcbiAgLnNpZGVuYXYgYSB7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfVxyXG5cclxuICAvKiBQb3NpdGlvbiBhbmQgc3R5bGUgdGhlIGNsb3NlIGJ1dHRvbiAodG9wIHJpZ2h0IGNvcm5lcikgKi9cclxuICAuc2lkZW5hdiAuY2xvc2VidG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICB9XHJcblxyXG4vKiBTdHlsZSBwYWdlIGNvbnRlbnQgLSB1c2UgdGhpcyBpZiB5b3Ugd2FudCB0byBwdXNoIHRoZSBwYWdlIGNvbnRlbnQgdG8gdGhlIHJpZ2h0IHdoZW4geW91IG9wZW4gdGhlIHNpZGUgbmF2aWdhdGlvbiAqL1xyXG4jbWFpbiB7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgLjVzO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi8qIE9uIHNtYWxsZXIgc2NyZWVucywgd2hlcmUgaGVpZ2h0IGlzIGxlc3MgdGhhbiA0NTBweCwgY2hhbmdlIHRoZSBzdHlsZSBvZiB0aGUgc2lkZW5hdiAobGVzcyBwYWRkaW5nIGFuZCBhIHNtYWxsZXIgZm9udCBzaXplKSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAuc2lkZW5hdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB9XHJcblxyXG4gICAgLnNpZGVuYXYgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _error_messages_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-messages.pipe */ "NpmQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_error_messages_pipe__WEBPACK_IMPORTED_MODULE_1__["ConvertTextPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_error_messages_pipe__WEBPACK_IMPORTED_MODULE_1__["ConvertTextPipe"]] }); })();


/***/ }),

/***/ "ko2Q":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-main-component/dashboard-main-component.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DashboardMainComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMainComponentComponent", function() { return DashboardMainComponentComponent; });
/* harmony import */ var src_app_constants_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/Constants */ "xaeV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigation.service */ "+NYR");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest.service */ "tnAE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _left_pane_left_pane_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../left-pane/left-pane.component */ "hMtU");
/* harmony import */ var _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../personal-details/personal-details.component */ "DuSi");
/* harmony import */ var _my_policies_my_policies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../my-policies/my-policies.component */ "gKif");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../payments/payments.component */ "tlA0");
/* harmony import */ var _saved_quote_saved_quote_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../saved-quote/saved-quote.component */ "IDFh");










function DashboardMainComponentComponent_app_personal_details_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-personal-details");
} }
function DashboardMainComponentComponent_app_my_policies_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-my-policies");
} }
function DashboardMainComponentComponent_app_payments_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-payments");
} }
function DashboardMainComponentComponent_app_saved_quote_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-saved-quote");
} }
function DashboardMainComponentComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 19);
} }
const _c0 = function (a0) { return { "close-sidebar": a0 }; };
class DashboardMainComponentComponent {
    constructor(_navigationService, _restService) {
        this._navigationService = _navigationService;
        this._restService = _restService;
        this.navFlag = false;
        this._navigationService.setPage(src_app_constants_Constants__WEBPACK_IMPORTED_MODULE_0__["PERSONAL_DETAILS"]);
        this.subscription = this._navigationService.page.subscribe((value) => {
            this.page = value;
        });
    }
    ngOnInit() {
        this.intialize();
    }
    get isPersonalDetails() {
        return (this.page == src_app_constants_Constants__WEBPACK_IMPORTED_MODULE_0__["PERSONAL_DETAILS"]);
    }
    get isMyPolicy() {
        return (this.page == src_app_constants_Constants__WEBPACK_IMPORTED_MODULE_0__["MY_POLICIES"]);
    }
    get isPayment() {
        return (this.page == src_app_constants_Constants__WEBPACK_IMPORTED_MODULE_0__["PAYMENTS"]);
    }
    get isSavedQuote() {
        return (this.page == src_app_constants_Constants__WEBPACK_IMPORTED_MODULE_0__["SAVED_QUOTE"]);
    }
    intialize() {
    }
    openNav() {
        this.navFlag = !this.navFlag;
    }
    showDetails(value) {
        if (value) {
            this.navFlag = false;
        }
    }
}
DashboardMainComponentComponent.ɵfac = function DashboardMainComponentComponent_Factory(t) { return new (t || DashboardMainComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"])); };
DashboardMainComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardMainComponentComponent, selectors: [["app-dashboard-main-component"]], decls: 25, vars: 9, consts: [["id", "PublicWrapper", 1, "sfPublicWrapper", 2, "background", "#003d59", "overflow-y", "scroll", "overflow-x", "hidden", "height", "650px", 3, "ngClass"], [1, "sf_cols"], [1, "sf_colsOut", "main_body"], [1, "sf_colsIn", "sf_1col_1in_100"], [1, "sfContentBlock"], [1, "mainWrapper", "ip-main", "main-wrap"], [1, "wrapper-content", "dashboard-page", "bg-grey"], [1, "il-container"], [1, "dashboard-block"], ["id", "toggleDash", 1, "dashToggle"], [1, "col-table", "col-row", "mainCol"], [1, "col-xs-3", "col-cell"], ["id", "profileView", 1, "left-tabarea"], [3, "navClass", "onNavSelect"], ["id", "nav-opener", 1, "menuOpener", 3, "click"], [1, "col-xs-9", "col-cell"], [1, "right-tabarea"], [4, "ngIf"], ["class", "menu-overlay", "style", "display: block;", 4, "ngIf"], [1, "menu-overlay", 2, "display", "block"]], template: function DashboardMainComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "app-left-pane", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onNavSelect", function DashboardMainComponentComponent_Template_app_left_pane_onNavSelect_16_listener($event) { return ctx.showDetails($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardMainComponentComponent_Template_div_click_17_listener() { return ctx.openNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DashboardMainComponentComponent_app_personal_details_20_Template, 1, 0, "app-personal-details", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, DashboardMainComponentComponent_app_my_policies_21_Template, 1, 0, "app-my-policies", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, DashboardMainComponentComponent_app_payments_22_Template, 1, 0, "app-payments", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DashboardMainComponentComponent_app_saved_quote_23_Template, 1, 0, "app-saved-quote", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, DashboardMainComponentComponent_div_24_Template, 1, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.navFlag));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("navClass", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPersonalDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMyPolicy);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPayment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSavedQuote);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.navFlag);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _left_pane_left_pane_component__WEBPACK_IMPORTED_MODULE_5__["LeftPaneComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_6__["PersonalDetailsComponent"], _my_policies_my_policies_component__WEBPACK_IMPORTED_MODULE_7__["MyPoliciesComponent"], _payments_payments_component__WEBPACK_IMPORTED_MODULE_8__["PaymentsComponent"], _saved_quote_saved_quote_component__WEBPACK_IMPORTED_MODULE_9__["SavedQuoteComponent"]], styles: ["\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtbWFpbi1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"], encapsulation: 2 });


/***/ }),

/***/ "mE5c":
/*!************************************************!*\
  !*** ./src/app/modals/skip-login.component.ts ***!
  \************************************************/
/*! exports provided: SkipLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipLoginComponent", function() { return SkipLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/popup.service */ "dPqR");


class SkipLoginComponent {
    constructor(_popUpService) {
        this._popUpService = _popUpService;
    }
    ngOnInit() {
    }
    close() {
        this._popUpService.closeSkipLoginPopUp();
    }
}
SkipLoginComponent.ɵfac = function SkipLoginComponent_Factory(t) { return new (t || SkipLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_1__["PopupService"])); };
SkipLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkipLoginComponent, selectors: [["app-skip-login"]], decls: 15, vars: 0, consts: [["id", "invaliduser", "role", "dialog", "aria-hidden", "false", 1, "modal", "fade", "in", 2, "display", "block"], [1, "modal-backdrop", "fade", "in"], [1, "modal-dialog", 2, "z-index", "1050"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "id", "btnvalid", "data-dismiss", "modal", 1, "close", 2, "cursor", "pointer", 3, "click"], [1, "modal-title"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "btnvalid1", "data-dismiss", "modal", 1, "btn", "btn-default", 2, "cursor", "pointer", 3, "click"]], template: function SkipLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkipLoginComponent_Template_button_click_5_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " You are not authorized, please login / register at our website to continue. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkipLoginComponent_Template_button_click_13_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]\r\n{\r\n  color: black;\r\n}\r\n.background[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    display: block;\r\n    overflow: auto;\r\n    height: 100%;\r\n    z-index: 10000\r\n}\r\n.cursor[_ngcontent-%COMP%]{\r\n    cursor:pointer\r\n}\r\n.modal-backdrop[_ngcontent-%COMP%] {\r\n  z-index: 1040 !important;\r\n}\r\n.modal-content[_ngcontent-%COMP%] {\r\n  margin: 2px auto;\r\n  z-index: 1100 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraXAtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1o7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNraXAtbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLGgyLGgzLGg0LGg1LGg2LCBwXHJcbntcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmJhY2tncm91bmQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMTAwMDBcclxufVxyXG4uY3Vyc29ye1xyXG4gICAgY3Vyc29yOnBvaW50ZXJcclxufVxyXG5cclxuLm1vZGFsLWJhY2tkcm9wIHtcclxuICB6LWluZGV4OiAxMDQwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBtYXJnaW46IDJweCBhdXRvO1xyXG4gIHotaW5kZXg6IDExMDAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "o0ul":
/*!************************************!*\
  !*** ./src/app/lang/en-strings.ts ***!
  \************************************/
/*! exports provided: TextConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextConstants", function() { return TextConstants; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TextConstants {
}
//validation messages
TextConstants.NAME_ERROR_MESSAGE = "Please enter your full name";
TextConstants.PHONE_ERROR_MESSAGE = "Please enter your mobile number";
TextConstants.VALID_PHONE_ERROR_MESSAGE = "Please enter valid mobile number";
TextConstants.PASSWORD_ERROR_MESSAGE = "Please enter password";
TextConstants.EMAIL_ERROR_MESSAGE = "Please enter your email id";
TextConstants.DOB_ERROR_MESSAGE = "Please enter your date of birth";
TextConstants.CONFIRM_PASSWORD_ERROR_MESSAGE = "Please enter your correct password";
TextConstants.PASSWORD_DONT_MATCH = "Both password should match";
TextConstants.CORRECT_PASSWORD_MESSAGE = "Please enter password";
TextConstants.VALID_EMAIL_MESSAGE = "Please enter a valid email id";
TextConstants.OTP_ERROR_MESSAGE = "Please enter your correct 6-digit OTP";
TextConstants.TNC_ERROR_MESSAGE = "Please accept terms and conditions";
TextConstants.VALID_PASSWORD_MESSAGE = "Please enter valid format.(e.g. Abc@123)";
TextConstants.MINLENGTH_PASSWORD_MESSAGE = "Password should contain minimum 8 characters";
TextConstants.ɵfac = function TextConstants_Factory(t) { return new (t || TextConstants)(); };
TextConstants.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TextConstants, factory: TextConstants.ɵfac });


/***/ }),

/***/ "tagY":
/*!**********************************************!*\
  !*** ./src/app/models/sessionVersionData.ts ***!
  \**********************************************/
/*! exports provided: SessionVersionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionVersionData", function() { return SessionVersionData; });
/* harmony import */ var src_app_models_baseResponseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/baseResponseData */ "zuTj");

class SessionVersionData extends src_app_models_baseResponseData__WEBPACK_IMPORTED_MODULE_0__["BaseResponseData"] {
    static withAPIData(res) {
        let obj = new SessionVersionData();
        obj.cityDistrict = res.cityDistrict;
        obj.customerFamilylist = res.customerFamilylist;
        obj.fwMakeAndModel = res.fwMakeAndModel;
        obj.fwRTOLocation = res.fwRTOLocation;
        obj.fwRevisedMakeAndModel = res.fwRevisedMakeAndModel;
        obj.nomineeRelatioship = res.nomineeRelatioship;
        obj.previousInsurer = res.previousInsurer;
        obj.twMakeAndModel = res.twMakeAndModel;
        obj.twRTOLocation = res.twRTOLocation;
        obj.setData(res);
        return obj;
    }
}


/***/ }),

/***/ "tlA0":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/payments/payments.component.ts ***!
  \*********************************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var src_app_models_api_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/api.models */ "Ttk1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest.service */ "tnAE");



class PaymentsComponent {
    constructor(_restService) {
        this._restService = _restService;
        this.paymentExists = false;
        this.showPayment = false;
        this.showProposal = false;
        this.IsPopUpError = false;
        this.isechannelproduct = false;
        this.EmailPaymentModel = new src_app_models_api_models__WEBPACK_IMPORTED_MODULE_0__["EmailPaymentLinkUIModel"]();
        this.IpEmailPaymentModel = new src_app_models_api_models__WEBPACK_IMPORTED_MODULE_0__["IpEmailPaymentLinkUIModel"]();
        this.imgPath = "/docs/default-source/assets/images/";
    }
    ngOnInit() {
    }
}
PaymentsComponent.ɵfac = function PaymentsComponent_Factory(t) { return new (t || PaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"])); };
PaymentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaymentsComponent, selectors: [["app-payments"]], decls: 0, vars: 0, template: function PaymentsComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "tnAE":
/*!******************************************!*\
  !*** ./src/app/services/rest.service.ts ***!
  \******************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/configuration */ "VBSo");
/* harmony import */ var src_app_models_loginResponseData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/loginResponseData */ "6bp2");
/* harmony import */ var src_app_models_baseResponseData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/baseResponseData */ "zuTj");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_customerProfileData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/customerProfileData */ "0WvO");
/* harmony import */ var _models_sessionVersionData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/sessionVersionData */ "tagY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










class RestService {
    constructor(_http, handler) {
        this._http = _http;
        this.handler = handler;
        this.comError = '';
        this.loginComError = '';
    }
    registerNewUiService(data) {
        return this._http.post(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].LOGIN_URL, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => src_app_models_loginResponseData__WEBPACK_IMPORTED_MODULE_3__["LoginResponseData"].withAPIData(response)))
            .toPromise();
    }
    registerService(data) {
        return this._http.post(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].REGISTER_URL, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => src_app_models_loginResponseData__WEBPACK_IMPORTED_MODULE_3__["LoginResponseData"].withAPIData(response)))
            .toPromise();
    }
    getSessionVersionService() {
        // this._token.generateToken;
        //  let headers = new HttpHeaders({
        ///   Authorization: "Bearer " + sessionStorage.getItem("AuthToken")
        /// });
        // let options = { headers: headers };
        return this._http.get(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].GETSESSIONVERSION_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => _models_sessionVersionData__WEBPACK_IMPORTED_MODULE_7__["SessionVersionData"].withAPIData(response)))
            .toPromise();
    }
    getCustomerProfileService() {
        this.date = new Date();
        return this._http.get(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].CUSTOMERPROFILE_URL + this.date.getTime())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => _models_customerProfileData__WEBPACK_IMPORTED_MODULE_6__["CustomerProfileData"].withAPIData(response)))
            .toPromise();
    }
    getGuestUserService() {
        return this._http.post(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].GUEST_LOGIN_URL, {}).toPromise();
    }
    getCreatePaymentService(data) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("AuthorizationToken")),
        });
        let options = { headers: headers };
        return this._http.post(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].CREATE_PAYMENT_TRANSACTION_URL, data, options).toPromise();
    }
    getPaymentTransactionService(data) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("AuthorizationToken")),
        });
        let options = { headers: headers };
        return this._http.post(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].PAYMENT_TRANSACTION_URL, data, options).toPromise();
    }
    ForgotPasswordService(data) {
        return this._http.post(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].FORGOTPASSWORD_URL, data).toPromise();
    }
    sendOTPService(data) {
        // this.makeAuthTokenRequest();
        return this._http.post(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].SENDOTP_URL, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => src_app_models_baseResponseData__WEBPACK_IMPORTED_MODULE_4__["BaseResponseData"].withAPIData(response)))
            .toPromise();
    }
    OTPCallService(data) {
        return this._http.post(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].OTPLOGIN_URL, data).toPromise();
    }
    getPaymentService() {
        return this._http.get(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].GETPAYMENT_URL).toPromise();
    }
    getQuoteService() {
        return this._http.get(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].GETQUOTE_URL).toPromise();
    }
    getFamilyService() {
        return this._http.get(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].GETFAMILY_URL).toPromise();
    }
    getPolicyService() {
        return this._http.get(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].GETPOLICY_URL).toPromise();
    }
    getProfileService(data) {
        // this.makeAuthTokenRequest();
        return this._http.post(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].PROFILE_URL, data).toPromise();
    }
    getPincodeService(data) {
        return this._http.get(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].GETPINCODE_URL + data).toPromise();
    }
    changeUserPassword(data) {
        return this._http.post(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].ChangeUserPasswordUrl, data).toPromise();
    }
    searchPolicy(data) {
        return this._http.post(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].TAGPOLICY_URL, data).toPromise();
    }
    GetEmailLinkRequest(proposalNo, isechannelproduct) {
        return this._http.get(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].GetEmailLinkRequest + "/" + proposalNo + "/" + isechannelproduct).toPromise();
    }
    SendEmailPaymentLink(data) {
        return this._http.post(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].SendEmailPaymentLink, data).toPromise();
    }
    ;
    IpSendEmailPaymentLink(data) {
        return this._http.post(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].IpSendEmailPaymentLink, data).toPromise();
    }
    ;
    GetDashboardUserProfile(ecsCustomerId) {
        return this._http.get(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].DashboardUserProfileUrl + "/" + ecsCustomerId + "?nocache=" + new Date().getTime()).toPromise();
    }
    UpdateUserProfile(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._http.post(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].PROFILE_URL, data).toPromise();
        });
    }
    GetCityDistrictNamePincode(pinCode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._http.get(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].GETPINCODE_URL + "/" + pinCode).toPromise();
        });
    }
    //policy api call
    GetUserProfile(ecsCustomerId) {
        console.log(ecsCustomerId);
        this.date = new Date();
        return this._http.get("http://localhost:4200/#").toPromise();
        // return this._http.get(eChannelConfig.GetUserProfileUrlRequest + "/" + ecsCustomerId + "?nocache=" + this.date.getTime()).toPromise<any>();
    }
    EmailService(data) {
        return this._http.post(src_app_constants_configuration__WEBPACK_IMPORTED_MODULE_2__["eChannelConfig"].EmailPolicyUrl, data).toPromise();
    }
    ViewPolicyPdfUrl(viewPdfUrl) {
        return this._http.get(viewPdfUrl).toPromise();
    }
}
RestService.ɵfac = function RestService_Factory(t) { return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"])); };
RestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: RestService, factory: RestService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_components_dashboard_dashboard_main_component_dashboard_main_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/dashboard/dashboard-main-component/dashboard-main-component.component */ "ko2Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: "dashboard", component: src_app_components_dashboard_dashboard_main_component_dashboard_main_component_component__WEBPACK_IMPORTED_MODULE_1__["DashboardMainComponentComponent"] },
    { path: "", redirectTo: "dashboard", pathMatch: "full" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true, enableTracing: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xaeV":
/*!****************************************!*\
  !*** ./src/app/constants/Constants.ts ***!
  \****************************************/
/*! exports provided: LOGIN_PAGE, FORGOT_PASSWORD_PAGE, REGISTER_PAGE, IS_USE_TEST_DATA, BASE_URL, GENERATE_TOKEN, NAME, DOB, DateOfBirth, PASSWORD, CONFIRM_PASSWORD, EMAIL_ID, MOBILE_NO, OTP, PINCODE, PANCARD, ADDRESS, CITY, LANDMARK, PERSONAL_DETAILS, MY_POLICIES, PAYMENTS, SAVED_QUOTE, CHANGE_PASSWORD, TAG_POLICY, PREVIOUS_PSWD, NEW_PSWD, CONFIRM_PSWD, OPTION1, OPTION2, OPTION3, Motor, Health, Travel, Home, Marine, Merchant, Cyber, PageIdentifier, Gender, PolicyType, REQUEST_URL_VALUE, VALID_URL_ARRAY, MY_DATE_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_PAGE", function() { return LOGIN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORGOT_PASSWORD_PAGE", function() { return FORGOT_PASSWORD_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_PAGE", function() { return REGISTER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_USE_TEST_DATA", function() { return IS_USE_TEST_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERATE_TOKEN", function() { return GENERATE_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOB", function() { return DOB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateOfBirth", function() { return DateOfBirth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD", function() { return PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIRM_PASSWORD", function() { return CONFIRM_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_ID", function() { return EMAIL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOBILE_NO", function() { return MOBILE_NO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTP", function() { return OTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PINCODE", function() { return PINCODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PANCARD", function() { return PANCARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESS", function() { return ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CITY", function() { return CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANDMARK", function() { return LANDMARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERSONAL_DETAILS", function() { return PERSONAL_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_POLICIES", function() { return MY_POLICIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENTS", function() { return PAYMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVED_QUOTE", function() { return SAVED_QUOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PASSWORD", function() { return CHANGE_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAG_POLICY", function() { return TAG_POLICY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREVIOUS_PSWD", function() { return PREVIOUS_PSWD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_PSWD", function() { return NEW_PSWD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIRM_PSWD", function() { return CONFIRM_PSWD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTION1", function() { return OPTION1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTION2", function() { return OPTION2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTION3", function() { return OPTION3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Motor", function() { return Motor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Health", function() { return Health; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Travel", function() { return Travel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marine", function() { return Marine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Merchant", function() { return Merchant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cyber", function() { return Cyber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageIdentifier", function() { return PageIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyType", function() { return PolicyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_URL_VALUE", function() { return REQUEST_URL_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALID_URL_ARRAY", function() { return VALID_URL_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_DATE_FORMATS", function() { return MY_DATE_FORMATS; });
const SUPPORTS_INTL_API = typeof Intl !== "undefined";
//login component pages
var LOGIN_PAGE = 'login';
var FORGOT_PASSWORD_PAGE = 'forgot-password';
var REGISTER_PAGE = 'register';
var IS_USE_TEST_DATA = "IsUseTestData";
var BASE_URL = "/eChannelServices/api";
var GENERATE_TOKEN = BASE_URL + "/Auth/token";
//field vlaue
var NAME = 'name';
var DOB = 'dob';
var DateOfBirth = 'dateofbirth';
var PASSWORD = 'password';
var CONFIRM_PASSWORD = 'confirmPassword';
var EMAIL_ID = 'email';
var MOBILE_NO = 'mobileNo';
var OTP = 'otp';
var PINCODE = 'pincode';
var PANCARD = 'pancard';
var ADDRESS = 'address';
var CITY = 'city';
var LANDMARK = 'landmark';
//dashboard component pages
var PERSONAL_DETAILS = 'personal-details';
var MY_POLICIES = 'my-policies';
var PAYMENTS = 'payments';
var SAVED_QUOTE = 'saved-quote';
var CHANGE_PASSWORD = 'change-password';
var TAG_POLICY = 'tag-policy';
var PREVIOUS_PSWD = 'previousPswd';
var NEW_PSWD = 'newPswd';
var CONFIRM_PSWD = 'confirmPswd';
var OPTION1 = 'PolicyNo';
var OPTION2 = 'VehicleRegistrationNo';
var OPTION3 = 'LoanAccountNo';
var Motor = 1;
var Health = 2;
var Travel = 3;
var Home = 4;
var Marine = 5;
var Merchant = 6;
var Cyber = 8;
var PageIdentifier;
(function (PageIdentifier) {
    PageIdentifier[PageIdentifier["LandingPage"] = 1] = "LandingPage";
    PageIdentifier[PageIdentifier["PlanPage"] = 2] = "PlanPage";
    PageIdentifier[PageIdentifier["CustomizePage"] = 3] = "CustomizePage";
    PageIdentifier[PageIdentifier["InsuredPage"] = 4] = "InsuredPage";
    PageIdentifier[PageIdentifier["DashboardPage"] = 5] = "DashboardPage";
})(PageIdentifier || (PageIdentifier = {}));
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Third"] = "Third";
})(Gender || (Gender = {}));
var PolicyType;
(function (PolicyType) {
    PolicyType[PolicyType["Motor"] = 1] = "Motor";
    PolicyType[PolicyType["Health"] = 2] = "Health";
    PolicyType[PolicyType["Travel"] = 3] = "Travel";
    PolicyType[PolicyType["Home"] = 4] = "Home";
    PolicyType[PolicyType["Marine"] = 5] = "Marine";
    PolicyType[PolicyType["Merchant"] = 6] = "Merchant";
    PolicyType[PolicyType["Cyber"] = 8] = "Cyber";
})(PolicyType || (PolicyType = {}));
//valid url check
var REQUEST_URL_VALUE = "/manage-your-policy/dashboard,/payment-new-duplicate,/travel-insurance/get-quote/insured-details-duplicate,/motor-insurance/car-insurance/get-quote/insured-details-duplicate,/motor-insurance/two-wheeler-insurance/get-quote/insured-details-duplicate,/health-insurance/get-quote/chi-insured-details-duplicate,/health-insurance/get-quote/hb-details-duplicate,/health-insurance/get-quote/personal-protect-insured-details-duplicate,/home-insurance/get-quote/insured-details-duplicate,/payment-new/payment-confirmation-duplicate,/payment-new/ivr-confirmation-duplicate,/payment-new/proposal-confirmation-duplicate,/payment-new/cheque-dd-confirmation-duplicate,/renew-policy/travel/review-confirm-duplicate";
var VALID_URL_ARRAY = REQUEST_URL_VALUE.split(',');
const MY_DATE_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    },
};
// export class DateFormat extends NativeDateAdapter {
//   useUtcForDisplay = true;
//   parse(value: any): Date | null {
//     if (typeof value === "string" && value.indexOf("/") > -1) {
//       const str = value.split("/");
//       const year = Number(str[2]);
//       const month = Number(str[1]) - 1;
//       const date = Number(str[0]);
//       return new Date(year, month, date); 
//     }
//     const timestamp = typeof value === "number" ? value : Date.parse(value);
//     return isNaN(timestamp) ? null : new Date(timestamp);
//   }
// }


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zuTj":
/*!********************************************!*\
  !*** ./src/app/models/baseResponseData.ts ***!
  \********************************************/
/*! exports provided: BaseResponseData, AddressModel, CustomerGSTInTaxDetail, PageIdentifier, ApplicantModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseData", function() { return BaseResponseData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressModel", function() { return AddressModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerGSTInTaxDetail", function() { return CustomerGSTInTaxDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageIdentifier", function() { return PageIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantModel", function() { return ApplicantModel; });
class BaseResponseData {
    setData(res) {
        this.success = res.success;
        this.errorMessage = res.errorMessage;
        this.corelationId = res.corelationId;
        this.technicalErrorMessage = res.technicalErrorMessage;
        this.status = res.status;
    }
    static withAPIData(res) {
        let obj = new BaseResponseData();
        obj.setData(res);
        return obj;
    }
}
//customer profile changes
class AddressModel {
}
class CustomerGSTInTaxDetail {
    constructor() {
        this.gstiN_UINNo = "";
        this.panNo = "";
        this.constitutionOfBusinessText = "";
        this.customerTypeText = "";
        this.gstRegistrationStatusText = "";
    }
}
var PageIdentifier;
(function (PageIdentifier) {
    PageIdentifier[PageIdentifier["LandingPage"] = 1] = "LandingPage";
    PageIdentifier[PageIdentifier["PlanPage"] = 2] = "PlanPage";
    PageIdentifier[PageIdentifier["CustomizePage"] = 3] = "CustomizePage";
    PageIdentifier[PageIdentifier["InsuredPage"] = 4] = "InsuredPage";
})(PageIdentifier || (PageIdentifier = {}));
class ApplicantModel {
}
//


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map