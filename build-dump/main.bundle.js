webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_views_module__ = __webpack_require__("../../../../../src/app/views/views.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings_module__ = __webpack_require__("../../../../../src/app/settings/settings.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_module__ = __webpack_require__("../../../../../src/app/not-found/not-found.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    {
        path: '',
        redirectTo: '/views',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/page-not-found',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__views_views_module__["a" /* ViewsModule */],
                __WEBPACK_IMPORTED_MODULE_4__settings_settings_module__["a" /* SettingsModule */],
                __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_module__["a" /* NotFoundModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_6_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n\ttext-align: center;\n\tfont-size: 7em;\n\tcolor: #212121;\n}\n\nh4 {\n\ttext-align: center;\n\tfont-size: 3.5em;\n\tcolor: grey;\n}\n\n.links {\n\ttext-align: center;\n\tfont-size: 2em;\n}\n\n/* unvisited link */\na:link, a:visited {\n\tcolor: #00695c;\n}\n\n/* visited link */\na:visited {\n\tcolor: #00695c;\n}\n\n/* mouse over link */\na:hover {\n\tcolor: #9e9e9e;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section no-pad-bot\" id=\"index-banner\">\n\t<div class=\"container\">\n\t\t<br><br>\n\t\t<h1 class=\"header center grey-text\">Error 404</h1>\n\t\t<div class=\"row center\">\n\t\t\t<h5 class=\"header col s12 light\">Woops. Looks like this page doesn't exist.</h5>\n\t\t</div>\n\t\t<div class=\"links\">\n\t\t\t<a href=\"/views\">Go to views page.</a>\n\t\t\t<a href=\"/settings\">Go to settings.</a>\n\t\t</div>\n\t</div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'not-found',
            template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/not-found/not-found.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    {
        path: 'page-not-found',
        component: __WEBPACK_IMPORTED_MODULE_4__not_found_component__["a" /* NotFoundComponent */]
    },
];
var NotFoundModule = (function () {
    function NotFoundModule() {
    }
    NotFoundModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__not_found_component__["a" /* NotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: []
        })
    ], NotFoundModule);
    return NotFoundModule;
}());



/***/ }),

/***/ "../../../../../src/app/settings/excluded-domains/excluded-domains.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" xmlns=\"http://www.w3.org/1999/html\">\n\t<div class=\"col s8  offset-s2\">\n\t\t<div class=\"card center-align\">\n\t\t\t<div class=\"card-content \">\n\t\t\t\t<h5>Choose what domains to exclude from the views</h5>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col s12 offset-s2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"input-field col s6\">\n\t\t\t\t\t\t\t\t<input id=\"name\" #box (keyup.enter)=\"addDomainToList(box.value)\" placeholder =\"Type domains that you don't want to see in the views\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"input-field col s2\">\n\t\t\t\t\t\t\t\t<button class=\"btn waves-effect waves-light\" (click)=\"addDomainToList(box.value)\"\n\t\t\t\t\t\t\t\tname=\"action\">Add</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col s6\">\n\t\t\t\t\t\t\t\t<table class=\"responsive-table\">\n\t\t\t\t\t\t\t\t\t<thead><th><h5>List of excluded domains</h5></th></thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let domain of excludedDomains; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"deleteDomainFromList(domain, i)\" class=\"btn-floating  waves-effect waves-light\"><i class=\"material-icons\">remove</i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><strong>{{domain}}</strong></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings/excluded-domains/excluded-domains.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcludedDomainsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__excluded_domains_service__ = __webpack_require__("../../../../../src/app/settings/excluded-domains/excluded-domains.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExcludedDomainsComponent = (function () {
    function ExcludedDomainsComponent(domainsService) {
        this.domainsService = domainsService;
    }
    ExcludedDomainsComponent.prototype.ngOnInit = function () {
        this.getExcludedDomains();
    };
    ExcludedDomainsComponent.prototype.getExcludedDomains = function () {
        var _this = this;
        this.domainsService.getExcludedDomains()
            .subscribe(function (results) { return _this.excludedDomains = results; });
    };
    ExcludedDomainsComponent.prototype.addDomainToList = function (domainName) {
        this.domainsService.addDomainToList(domainName);
        console.log("ExcludedDomainsComponent: number of excluded domains = "
            + this.excludedDomains.length);
    };
    ExcludedDomainsComponent.prototype.deleteDomainFromList = function (domainName, index) {
        this.domainsService.deleteDomainFromList(domainName, index);
        console.log("ExcludedDomainsComponent: number of excluded domains = "
            + this.excludedDomains.length);
    };
    ExcludedDomainsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'excluded-domains',
            template: __webpack_require__("../../../../../src/app/settings/excluded-domains/excluded-domains.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__excluded_domains_service__["a" /* ExcludedDomainsService */]])
    ], ExcludedDomainsComponent);
    return ExcludedDomainsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/excluded-domains/excluded-domains.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcludedDomainsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ExcludedDomainsService = (function () {
    function ExcludedDomainsService() {
        this.excludedDomains = [];
    }
    ExcludedDomainsService.prototype.getExcludedDomains = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.excludedDomains);
    };
    ExcludedDomainsService.prototype.addDomainToList = function (domainName) {
        var alreadyAdded = this.domainNameInExcludedDomains(domainName);
        domainName = domainName.toLowerCase();
        if (alreadyAdded == false) {
            if (domainName != "" && domainName !== null) {
                this.excludedDomains.push(domainName);
            }
        }
    };
    ExcludedDomainsService.prototype.deleteDomainFromList = function (domainName, index) {
        this.excludedDomains.splice(index, 1);
    };
    ExcludedDomainsService.prototype.domainNameInExcludedDomains = function (domainName) {
        var length = this.excludedDomains.length;
        for (var i = 0; i < length; i++) {
            if (this.excludedDomains[i] === domainName) {
                return true;
            }
        }
        return false;
    };
    ExcludedDomainsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ExcludedDomainsService);
    return ExcludedDomainsService;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col s2 offset-s2\">\n\t\t<h4>Settings</h4>\n\t</div>\n\t<div class=\"col s2 offset-s5\">\n\t\t<a class=\"btn waves-effect waves-light\" style=\"margin-top: 1em\" routerLink=\"/\" routerLinkActive=\"active\">Back\n\t\t</a>\n\t</div>\n</div>\n<excluded-domains></excluded-domains>\n<themes></themes>\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html")
        })
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__excluded_domains_excluded_domains_component__ = __webpack_require__("../../../../../src/app/settings/excluded-domains/excluded-domains.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__themes_themes_component__ = __webpack_require__("../../../../../src/app/settings/themes/themes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__excluded_domains_excluded_domains_service__ = __webpack_require__("../../../../../src/app/settings/excluded-domains/excluded-domains.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_4__settings_component__["a" /* SettingsComponent */]
    },
];
var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__excluded_domains_excluded_domains_component__["a" /* ExcludedDomainsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__themes_themes_component__["a" /* ThemesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__excluded_domains_excluded_domains_service__["a" /* ExcludedDomainsService */]
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "../../../../../src/app/settings/themes/themes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col s8  offset-s2\">\n\t\t<div class=\"card center-align\">\n\t\t\t<div class=\"card-content \">\n\t\t\t\t<span class=\"card-title\">Choose themes</span>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col s4 offset-s2\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-image \" style=\"background-color: #e0e0e0\">\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"'assets/dark.png'\" class=\"responsive-img\" style=\"width:10em; margin:0 auto\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-content center\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-action \">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"grey-text\" href=\"#\">Light theme</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col s4\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-image\" style=\"background-color: #424242\">\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"'assets/dark.png'\" class=\"responsive-img\" style=\"width:10em; margin:0 auto\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-content center\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-action \">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"grey-text\" href=\"#\">Dark theme</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings/themes/themes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThemesComponent = (function () {
    function ThemesComponent() {
    }
    ThemesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'themes',
            template: __webpack_require__("../../../../../src/app/settings/themes/themes.component.html")
        })
    ], ThemesComponent);
    return ThemesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/bar-chart/bar-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div style=\"display: block\">\n\t\t<canvas baseChart\n\t\t[datasets]=\"barChartData\"\n\t\t[labels]=\"barChartLabels\"\n\t\t[options]=\"barChartOptions\"\n\t\t[legend]=\"barChartLegend\"\n\t\t[chartType]=\"barChartType\"\n\t\t(chartHover)=\"chartHovered($event)\"\n\t\t(chartClick)=\"chartClicked($event)\"></canvas>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/bar-chart/bar-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hivi_service__ = __webpack_require__("../../../../../src/app/views/hivi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarChartComponent = (function () {
    function BarChartComponent(hiviService) {
        this.hiviService = hiviService;
    }
    BarChartComponent.prototype.ngOnInit = function () {
        this.hiviService.dumpBookmarks();
        this.barChartLabels = this.hiviService.getBarChartLabels();
        this.barChartData = this.hiviService.getBarChartData();
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartType = 'bar';
        this.barChartLegend = true;
    };
    BarChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    BarChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    BarChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bar-chart',
            template: __webpack_require__("../../../../../src/app/views/bar-chart/bar-chart.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hivi_service__["a" /* HiviService */]])
    ], BarChartComponent);
    return BarChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/date-filter/date-filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".horizontal-filter-group {\n  padding-top: 1em;\n  padding-bottom: 3em;\n}\n\n.horizontal-filter {\n  box-shadow: 1px 4px 4px #888888;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/date-filter/date-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"row col s8 m6 l10 horizontal-filter\">\n\t\t<div class=\"horizontal-filter-group\">\n\t\t\t<div class=\"col s12 m6 l3\">\n\t\t\t\t<input name=\"filter\" checked type=\"radio\" id=\"today\" (click)=\"updateDataFilterValue('TODAY')\">\n\t\t\t\t<label for=\"today\">Today</label>\n\t\t\t</div>\n\t\t\t<div class=\"col s12 m6 l3\">\n\t\t\t\t<input name=\"filter\" type=\"radio\" id=\"last_week\" (click)=\"updateDataFilterValue('LAST_WEEK')\">\n\t\t\t\t<label for=\"last_week\">Last week</label>\n\t\t\t</div>\n\t\t\t<div class=\"col s12 m6 l3\">\n\t\t\t\t<input name=\"filter\" type=\"radio\" id=\"last_month\" (click)=\"updateDataFilterValue('LAST_MONTH')\">\n\t\t\t\t<label for=\"last_month\">Last month</label>\n\t\t\t</div>\n\t\t\t<div class=\"col s12 m6 l3\">\n\t\t\t\t<input name=\"filter\" type=\"radio\" id=\"all_time\" (click)=\"updateDataFilterValue('ALL_TIME')\">\n\t\t\t\t<label for=\"all_time\">All time</label>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/date-filter/date-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateFilterComponent = (function () {
    function DateFilterComponent() {
        /*
        The value can be one of the following strings:
        TODAY, LAST_WEEK, LAST_MONTH, ALL_TIME
        */
        this.selectedFilter = 'TODAY';
        this.notifyThatSelectedFilterChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DateFilterComponent.prototype.updateDataFilterValue = function (value) {
        this.selectedFilter = value;
        this.notifyThatSelectedFilterChanged.emit(this.selectedFilter);
        console.log("Filter value changed to " + this.selectedFilter);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DateFilterComponent.prototype, "notifyThatSelectedFilterChanged", void 0);
    DateFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'date-filter',
            template: __webpack_require__("../../../../../src/app/views/date-filter/date-filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/date-filter/date-filter.component.css")]
        })
    ], DateFilterComponent);
    return DateFilterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/hivi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HiviService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HiviService = (function () {
    function HiviService() {
        this.bookmarksList = new Array();
    }
    HiviService.prototype.dumpBookmarks = function () {
        var _this = this;
        var dummyArray, treeRoot;
        chrome.bookmarks.getTree(function (results) {
            treeRoot = results[0];
            console.log(results);
            var i;
            for (i = 0; i < treeRoot.children.length; i++) {
                var subTree = treeRoot.children[i];
                _this.parseSubtree(subTree);
            }
        });
        // let treeRoot = dummyArray[0];
        // console.log(this.bookmarksList);
    };
    HiviService.prototype.parseSubtree = function (subtree) {
        var i;
        for (i = 0; i < subtree.children.length; i++) {
            if (typeof subtree.children[i].children === "undefined") {
                this.addToBookmarksList(subtree.children[i].url, subtree.children[i].dateAdded);
            }
            else {
                this.parseSubtree(subtree.children[i]);
            }
        }
    };
    HiviService.prototype.spliceToDomain = function (url) {
        var position = this.getPositionOfThirdSlash(url);
        return url.slice(0, position);
    };
    HiviService.prototype.addToBookmarksList = function (url, date) {
        var splicedUrl = this.spliceToDomain(url);
        if (typeof this.bookmarksList.find(function (item) { return item["key"] == splicedUrl; }) === "undefined") {
            var entry = {};
            entry["key"] = splicedUrl;
            entry["value"] = {
                "dateAdded": date,
                "occurrences": 1
            };
            this.bookmarksList.push(entry);
        }
        else {
            this.bookmarksList.find(function (item) { return item["key"] == splicedUrl; }).value.occurrences += 1;
        }
    };
    HiviService.prototype.filterByInterval = function (since, to) {
    };
    HiviService.prototype.getPositionOfThirdSlash = function (string, subString, index) {
        if (subString === void 0) { subString = "/"; }
        if (index === void 0) { index = 3; }
        return string.split(subString, index).join(subString).length;
    };
    HiviService.prototype.compareItems = function (a, b) {
        if (a.value.occurrences < b.value.occurrences) {
            return -1;
        }
        if (a.value.occurrences > b.value.occurrences) {
            return 1;
        }
        // a must be equal to b
        return 0;
    };
    HiviService.prototype.getTopMostBookmarked = function (n) {
        if (n === void 0) { n = 10; }
        var m = -1 * n;
        var orderedItems = this.bookmarksList.sort(this.compareItems);
        return orderedItems.slice(m - 1, -1).reverse();
    };
    // Pie-Chart related methods
    HiviService.prototype.getPieChartsLabels = function () {
        var mostBookmarked = this.getTopMostBookmarked();
        var labels = [];
        var i;
        for (i = 0; i < mostBookmarked.length; i++) {
            labels.push(mostBookmarked[i].key);
        }
        return labels;
    };
    HiviService.prototype.getPieChartData = function () {
        var mostBookmarked = this.getTopMostBookmarked();
        var values = [];
        var i;
        for (i = 0; i < mostBookmarked.length; i++) {
            values.push(mostBookmarked[i].value.occurrences);
        }
        return values;
    };
    // Bar-Chart related methods
    HiviService.prototype.getBarChartLabels = function () {
        var mostBookmarked = this.getTopMostBookmarked(5);
        var labels = [];
        var i;
        for (i = 0; i < mostBookmarked.length; i++) {
            labels.push(mostBookmarked[i].key);
        }
        console.log(labels);
        return labels;
    };
    HiviService.prototype.getBarChartData = function () {
        var mostBookmarked = this.getTopMostBookmarked(5);
        var values = [];
        var i;
        for (i = 0; i < mostBookmarked.length; i++) {
            values.push(mostBookmarked[i].value.occurrences);
        }
        console.log(values);
        return [
            { data: values, label: 'Your most bookmarked sites' }
        ];
    };
    HiviService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], HiviService);
    return HiviService;
}());



/***/ }),

/***/ "../../../../../src/app/views/list-view/list-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"bookmarks-list\">\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/list-view/list-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListViewComponent = (function () {
    function ListViewComponent() {
    }
    ListViewComponent.prototype.onDocumentClick = function (event) {
        this.createTree();
    };
    ListViewComponent.prototype.ngAfterViewInit = function () {
        this.dumpBookmarks();
    };
    ListViewComponent.prototype.createTree = function () {
        jQuery('.collapsible').collapsible();
    };
    ListViewComponent.prototype.dumpBookmarks = function () {
        var dummyData = '[{"children":[{"children":[{"children":[{"children":[{"dateAdded":1439893778280,"id":"189","index":0,"parentId":"16","title":"www.uaic.ro/wp-content/uploads/2013/12/Structur-an-univ-2015-2016.pdf","url":"http://www.uaic.ro/wp-content/uploads/2013/12/Structur-an-univ-2015-2016.pdf"},{"dateAdded":1444402095402,"id":"190","index":1,"parentId":"16","title":"Personal academic | Facultatea de Informatică Iaşi","url":"http://www.info.uaic.ro/bin/Structure/Academic"},{"dateAdded":1450205610294,"id":"191","index":2,"parentId":"16","title":"Proiect la disciplina Introducere în programare - Google Docs","url":"https://docs.google.com/document/d/15F3FFinGBs71CGD91kanU6YjQRYBHuvA09dTR0bdJjA/edit?pref=2&pli=1#"},{"dateAdded":1449997036254,"id":"192","index":3,"parentId":"16","title":"profs.info.uaic.ro/~rbenchea/thesis.pdf","url":"http://profs.info.uaic.ro/~rbenchea/thesis.pdf"},{"children":[{"children":[{"dateAdded":1442086460801,"id":"233","index":0,"parentId":"195","title":"CSS Cheat Sheet","url":"http://lesliefranke.com/files/reference/csscheatsheet.html"},{"dateAdded":1442087049204,"id":"234","index":1,"parentId":"195","title":"Opening the Box Model - Learn to Code HTML & CSS","url":"http://learn.shayhowe.com/html-css/opening-the-box-model/"},{"dateAdded":1451404072430,"id":"235","index":2,"parentId":"195","title":"Learn Introduction to Web Development -- Getting Hired as a Web Developer","url":"http://www.theodinproject.com/introduction-to-web-development/getting-hired-as-a-web-developer?ref=lnav"},{"dateAdded":1440835986255,"id":"236","index":3,"parentId":"195","title":"Tutorialsentutorial - HTML.net","url":"http://html.net/tutorials/"},{"dateAdded":1441862981406,"id":"237","index":4,"parentId":"195","title":"Web Developer Resources - John Morris","url":"http://www.johnmorrisonline.com/web-developer-resources/"},{"dateAdded":1442086574828,"id":"238","index":5,"parentId":"195","title":"Web Design Resources – Enboard.co","url":"http://enboard.co/webdesign/"},{"dateAdded":1442086641436,"id":"239","index":6,"parentId":"195","title":"Useful links for web developer by Sonal Patel","url":"http://antriksh.com/resources/"}],"dateAdded":1492451153764,"dateGroupModified":1492451153764,"id":"195","index":0,"parentId":"194","title":"csx"},{"dateAdded":1435668909034,"id":"196","index":1,"parentId":"194","title":"http://lifehacker.com/top-10-ways-to-teach-yourself-to-code-1684250889 nu este disponibil","url":"http://lifehacker.com/top-10-ways-to-teach-yourself-to-code-1684250889"},{"children":[{"dateAdded":1446668221148,"id":"232","index":0,"parentId":"197","title":"SQL Tutorial for Beginners - Code School","url":"https://www.codeschool.com/courses/try-sql"}],"dateAdded":1492451153764,"dateGroupModified":1492451153764,"id":"197","index":2,"parentId":"194","title":"sql"},{"dateAdded":1451477925513,"id":"198","index":3,"parentId":"194","title":"Get thousands of courses to learn Laravel, PHP, Javascript, and many more for FREE! | Learning Laravel","url":"http://learninglaravel.net/freebies-2"},{"dateAdded":1451403973427,"id":"199","index":4,"parentId":"194","title":"Don’t Believe Anyone Who Tells You Learning To Code Is Easy | TechCrunch","url":"http://techcrunch.com/2014/05/24/dont-believe-anyone-who-tells-you-learning-to-code-is-easy/#.p1pkumm:MlQM"},{"children":[{"dateAdded":1451905419717,"id":"230","index":0,"parentId":"200","title":"Angular: The Big Picture | Pluralsight","url":"https://app.pluralsight.com/library/courses/angular-big-picture/description"},{"dateAdded":1452096234740,"id":"231","index":1,"parentId":"200","title":"AngularJS: Tutorial: 5 - XHRs & Dependency Injection","url":"https://docs.angularjs.org/tutorial/step_05"}],"dateAdded":1492451153764,"dateGroupModified":1492451153764,"id":"200","index":5,"parentId":"194","title":"angular"},{"children":[{"dateAdded":1443877038310,"id":"222","index":0,"parentId":"201","title":"PHP 5 Tutorial","url":"http://www.w3schools.com/php/"},{"dateAdded":1443877069165,"id":"223","index":1,"parentId":"201","title":"Object-Oriented PHP | Codecademy","url":"https://www.codecademy.com/courses/web-beginner-en-bH5s3/0/2"},{"dateAdded":1443877077355,"id":"224","index":2,"parentId":"201","title":"Namespacing in PHP - Tuts+ Code Tutorial","url":"http://code.tutsplus.com/tutorials/namespacing-in-php--net-27203"},{"dateAdded":1443877158559,"id":"225","index":3,"parentId":"201","title":"Introduction to PHP | Codecademy","url":"https://www.codecademy.com/ru/courses/web-beginner-en-StaFQ/0/1?curriculum_id=5124ef4c78d510dd89003eb8"},{"dateAdded":1452261176112,"id":"226","index":4,"parentId":"201","title":"PHP 5 String Functions","url":"http://www.w3schools.com/php/php_ref_string.asp"},{"dateAdded":1444551849275,"id":"227","index":5,"parentId":"201","title":"000webhost.com Members Area","url":"http://members.000webhost.com/cpanel.php?accountID=19565492&login_hash=6AfhlYTY3MAgzX4B"},{"dateAdded":1444552209341,"id":"228","index":6,"parentId":"201","title":"Welcome to cristinanegrutu.comlu.com","url":"http://cristinanegrutu.comlu.com/default.php"},{"dateAdded":1444552566583,"id":"229","index":7,"parentId":"201","title":"What is HTML? What are CSS, JavaScript, PHP and Perl? Do I Need to Learn Them to Create a Website? (thesitewizard.com)","url":"http://www.thesitewizard.com/html-tutorial/what-is-html.shtml"}],"dateAdded":1492451153764,"dateGroupModified":1492451153764,"id":"201","index":6,"parentId":"194","title":"php"},{"children":[{"dateAdded":1451497206867,"id":"215","index":0,"parentId":"202","title":"Program Structure :: Eloquent JavaScript","url":"http://eloquentjavascript.net/02_program_structure.html"},{"children":[{"dateAdded":1451741041378,"id":"218","index":0,"parentId":"216","title":"JavaScript Fundamentals | Pluralsight","url":"https://app.pluralsight.com/library/courses/jscript-fundamentals/transcript"},{"dateAdded":1451741048129,"id":"219","index":1,"parentId":"216","title":"JavaScript Design Patterns | Pluralsight","url":"https://app.pluralsight.com/library/courses/javascript-design-patterns/table-of-contents"},{"dateAdded":1451741052820,"id":"220","index":2,"parentId":"216","title":"Choosing a JavaScript Framework | Pluralsight","url":"https://app.pluralsight.com/library/courses/choosing-javascript-framework/table-of-contents"},{"dateAdded":1451741062519,"id":"221","index":3,"parentId":"216","title":"Basics of Programming with JavaScript | Pluralsight","url":"https://app.pluralsight.com/library/courses/javascript-programming-basics/table-of-contents"}],"dateAdded":1492451153765,"dateGroupModified":1492451153765,"id":"216","index":1,"parentId":"202","title":"de pe pluralsight"},{"dateAdded":1451767632239,"id":"217","index":2,"parentId":"202","title":"JavaScript and the DOM Series: Lesson 1 - Envato Tuts+ Code Tutorial","url":"http://code.tutsplus.com/tutorials/javascript-and-the-dom-series-lesson-1--net-3134"}],"dateAdded":1492451153764,"dateGroupModified":1492451153764,"id":"202","index":7,"parentId":"194","title":"javascript"},{"dateAdded":1451466774992,"id":"203","index":8,"parentId":"194","title":"teach yourself to code","url":"http://teachyourselftocode.com/"},{"children":[{"dateAdded":1430859164031,"id":"209","index":0,"parentId":"204","title":"Origo v1.1","url":"http://www.csstemplatesfree.org/preview/origo/index.html"},{"dateAdded":1430859188460,"id":"210","index":1,"parentId":"204","title":"Zerotype","url":"http://www.csstemplatesfree.org/zerotype.html"},{"dateAdded":1430859201815,"id":"211","index":2,"parentId":"204","title":"Origo","url":"http://www.csstemplatesfree.org/origo.html"},{"dateAdded":1430859214543,"id":"212","index":3,"parentId":"204","title":"Pollena Minima","url":"http://www.csstemplatesfree.org/preview/pollena-minima/index.html"},{"dateAdded":1430859225635,"id":"213","index":4,"parentId":"204","title":"Pollena Minima","url":"http://www.csstemplatesfree.org/pollena-minima.html"},{"dateAdded":1430859231785,"id":"214","index":5,"parentId":"204","title":"Page 19","url":"http://www.csstemplatesfree.org/page/19"}],"dateAdded":1492451153764,"dateGroupModified":1492451153764,"id":"204","index":9,"parentId":"194","title":"template-uri"},{"dateAdded":1459951358512,"id":"205","index":10,"parentId":"194","title":"What are some good interview questions for a DevOps position? - Quora","url":"https://www.quora.com/What-are-some-good-interview-questions-for-a-DevOps-position"},{"dateAdded":1460019946523,"id":"206","index":11,"parentId":"194","title":"AlkOnline","url":"http://stefanmoraru.ro/projects/alkonline/"},{"dateAdded":1460384133895,"id":"207","index":12,"parentId":"194","title":"I want to be a Devops! – brassy.net - Philip Reynolds","url":"http://brassy.net/articles/getting-in-to-devops/"},{"dateAdded":1460448997936,"id":"208","index":13,"parentId":"194","title":"basic-views.html","url":"file:///home/nima/Desktop/fullcalendar-2.6.1/demos/basic-views.html"},{"children":[{"dateAdded":1437392902526,"id":"240","index":0,"parentId":"193","title":"Resurse/Cărţi C şi C++ - Forumul Softpedia","url":"http://forum.softpedia.com/topic/81727-resursecarthi-c-i-c/"},{"dateAdded":1452373893144,"id":"241","index":1,"parentId":"193","title":"Splitting a string into a vector. for C++ Code Example - Runnable","url":"http://code.runnable.com/VHb0hWMZp-ws1gAr/splitting-a-string-into-a-vector-for-c%2B%2B"},{"dateAdded":1437393697147,"id":"242","index":2,"parentId":"193","title":"Preface","url":"http://www.brpreiss.com/books/opus4/html/page3.html"},{"dateAdded":1437741149922,"id":"243","index":3,"parentId":"193","title":"Learn C++","url":"http://www.learncpp.com/"},{"dateAdded":1437762051051,"id":"244","index":4,"parentId":"193","title":"1.5 — A first look at operators « Learn C++","url":"http://www.learncpp.com/cpp-tutorial/15-a-first-look-at-operators/"},{"dateAdded":1368035012448,"id":"245","index":5,"parentId":"193","title":"fii info...","url":"http://infoscience.3x.ro/c++.html"},{"dateAdded":1450810264746,"id":"246","index":6,"parentId":"193","title":"Prelucrarea şirurilor de caractere. Funcţii. Aplicaţii. [CS Open CourseWare]","url":"http://ocw.cs.pub.ro/courses/programare/laboratoare/lab09"},{"children":[{"dateAdded":1437066849391,"id":"248","index":0,"parentId":"247","title":"Dan Pracsiu online","url":"http://www.dponline.ro/articol.php?idarticol=34"},{"dateAdded":1437066905130,"id":"249","index":1,"parentId":"247","title":"Dan Pracsiu online","url":"http://www.dponline.ro/articol.php?idarticol=33"},{"dateAdded":1437066934144,"id":"250","index":2,"parentId":"247","title":"backtracking","url":"http://informaticasite.ro/backtracking.html"},{"dateAdded":1437122078825,"id":"251","index":3,"parentId":"247","title":"web.info.uvt.ro/~iordan/P_I/Programming - Culegere probleme de informatica.pdf","url":"http://web.info.uvt.ro/~iordan/P_I/Programming%20-%20Culegere%20probleme%20de%20informatica.pdf"},{"dateAdded":1437126318604,"id":"252","index":4,"parentId":"247","title":"Metoda Greedy – problema rucsacului | Informatica, pas cu pas","url":"https://mchelariu.wordpress.com/2011/01/15/metoda-greedy-problema-rucsacului/"},{"dateAdded":1368035012448,"id":"253","index":5,"parentId":"247","title":"fii info...","url":"http://infoscience.3x.ro/c++.html"},{"dateAdded":1444549898834,"id":"254","index":6,"parentId":"247","title":"0 Notifications","url":"https://www.facebook.com/cristina.negrutu#"},{"dateAdded":1447858457564,"id":"255","index":7,"parentId":"247","title":"SPOJ.com - Problem PRIME1","url":"http://www.spoj.com/problems/PRIME1/"},{"dateAdded":1447860599527,"id":"256","index":8,"parentId":"247","title":"C++ for Complete Beginners | Cave of Programming","url":"http://courses.caveofprogramming.com/courses/c-beginners"},{"dateAdded":1466950263415,"id":"257","index":9,"parentId":"247","title":"Résumé – Cristina Negrutu","url":"https://www.canva.com/design/DAB3TuXhuYg/8pCWVU0biNxwbv4bYOFuTQ/edit?layouts="},{"dateAdded":1467898497213,"id":"258","index":10,"parentId":"247","title":"Realtime Chat with Node.js | Tutorialzine","url":"http://tutorialzine.com/2014/03/nodejs-private-webchat/"},{"dateAdded":1468924506827,"id":"259","index":11,"parentId":"247","title":"JMSTranslationBundle UI","url":"http://cp.dev/app_dev.php/_trans/?config=app&domain=SmartContractBundle&locale=ro"},{"dateAdded":1471517309037,"id":"260","index":12,"parentId":"247","title":"All IT eBooks - Free IT eBooks Download","url":"http://www.allitebooks.com/"},{"dateAdded":1478354830013,"id":"261","index":13,"parentId":"247","title":"Chitara/Bass :: Chitara :: Acustice :: Ibanez VC50NJP - Pachet chitara acustica cu accesorii","url":"http://www.mcmusic.ro/chitara-bass-ro/chitara-ro-3/acustice-ro-2/ibanez-vc50njp-pachet-chitara-acustica-cu-accesorii"},{"dateAdded":1480966158514,"id":"262","index":14,"parentId":"247","title":"Artificial Intelligence - English Presentation - Google Slides","url":"https://docs.google.com/presentation/d/1feMscAuXawTmm1nqBsfagKdAnnnh7xNihnuCNUhuXQo/edit#slide=id.g19f5328fb8_0_0"},{"dateAdded":1480936750665,"id":"263","index":15,"parentId":"247","title":"10 Documentaries That Actually Changed Things | Mental Floss","url":"http://mentalfloss.com/article/79947/10-documentaries-actually-changed-things"},{"dateAdded":1482503513074,"id":"264","index":16,"parentId":"247","title":"lenu","url":"https://ziar.asii.ro/documente/Decembrie2009.pdf"},{"dateAdded":1487325756786,"id":"265","index":17,"parentId":"247","title":"Testare app carti - Google Docs","url":"https://docs.google.com/document/d/1GyjKaJySLGimbqWJbaEn7OGxJcm077CwOs7NrWu1pbA/edit"},{"dateAdded":1494414400950,"id":"303","index":18,"parentId":"247","title":"Webhooks Overview - SendGrid Documentation | SendGrid","url":"https://sendgrid.com/docs/API_Reference/Webhooks/index.html"}],"dateAdded":1492451153766,"dateGroupModified":1508766805376,"id":"247","index":7,"parentId":"193","title":"prega info"}],"dateAdded":1437392921175,"dateGroupModified":1494351131167,"id":"193","index":14,"parentId":"194","title":"c++"},{"dateAdded":1506594945123,"id":"446","index":15,"parentId":"194","title":"Proiecte propuse / CLIW :: Dezvoltarea aplicaţiilor Web la nivel de client","url":"https://profs.info.uaic.ro/~busaco/teach/courses/cliw/projects/"}],"dateAdded":1492451153764,"dateGroupModified":1506594945123,"id":"194","index":4,"parentId":"16","title":"web dev"}],"dateAdded":1452331382644,"dateGroupModified":1511370447218,"id":"16","index":0,"parentId":"391","title":"faculta"},{"children":[{"dateAdded":1475484176335,"id":"266","index":0,"parentId":"15","title":"Index of /~croitoru/ag","url":"http://profs.info.uaic.ro/~croitoru/ag/"}],"dateAdded":1475484199407,"dateGroupModified":1492451153749,"id":"15","index":1,"parentId":"391","title":"Anul2"},{"children":[{"dateAdded":1487850367482,"id":"82","index":0,"parentId":"20","title":"Tehnologii Web / Dr. Sabin Buraga","url":"http://profs.info.uaic.ro/~busaco/teach/courses/web/"},{"dateAdded":1487850371058,"id":"83","index":1,"parentId":"20","title":"Teaching support","url":"http://profs.info.uaic.ro/~ccm/#!index.md"},{"dateAdded":1487850377611,"id":"84","index":2,"parentId":"20","title":"Ingineria Programarii 2017","url":"http://profs.info.uaic.ro/~adiftene/Scoala/2017/IP/index.htm"},{"dateAdded":1487850375370,"id":"85","index":3,"parentId":"20","title":"Advanced Programming","url":"http://profs.info.uaic.ro/~acf/java/"},{"dateAdded":1487850502738,"id":"86","index":4,"parentId":"20","title":"pf","url":"http://profs.info.uaic.ro/~arusoaie.andrei/lectures/pf/2016/pf.html"},{"dateAdded":1476614965122,"id":"87","index":5,"parentId":"20","title":"BD","url":"http://profs.info.uaic.ro/~bd/wiki/index.php/Pagina_principal%C4%83"},{"dateAdded":1456688630021,"id":"88","index":6,"parentId":"20","title":"Seminarii - Algorithm Design","url":"https://sites.google.com/site/fiicoursepa/seminarii"},{"dateAdded":1487850623754,"id":"89","index":7,"parentId":"20","title":"Introduction to OOP using C++","url":"https://sites.google.com/site/fiicoursepoo/home"}],"dateAdded":1487850327978,"dateGroupModified":1506622557429,"id":"20","index":2,"parentId":"391","title":"sem2 an 2"},{"children":[{"dateAdded":1456155282118,"id":"91","index":0,"parentId":"18","title":"Laboratoare - Introduction to OOP using C++","url":"https://sites.google.com/site/fiicoursepoo/labs"},{"dateAdded":1457160140149,"id":"92","index":1,"parentId":"18","title":"PS: Discrete Probability Theory: Home Page, Olariu E. Florentin","url":"http://profs.info.uaic.ro/~olariu/curent/PS/PS.html"},{"dateAdded":1457160378112,"id":"93","index":2,"parentId":"18","title":"Operating Systems course","url":"http://profs.info.uaic.ro/~vidrascu/SO/index_labs.html"},{"dateAdded":1457160410989,"id":"94","index":3,"parentId":"18","title":"Ferucio Laurentiu Tiplea\'s Home Page","url":"http://profs.info.uaic.ro/~fltiplea/"}],"dateAdded":1456155294784,"dateGroupModified":1509563407880,"id":"18","index":3,"parentId":"391","title":"sem 2"}],"dateAdded":1501075570424,"dateGroupModified":1501075570427,"id":"391","index":0,"parentId":"1","title":"facultate"},{"children":[{"dateAdded":1509479815679,"id":"475","index":0,"parentId":"467","title":"Anca-Maria Nica - IS","url":"http://students.info.uaic.ro/~anca.nica/is.html"},{"dateAdded":1509479840219,"id":"476","index":1,"parentId":"467","title":"Laborator Inteligenta Artificiala","url":"https://profs.info.uaic.ro/~mionita/ia/index.html"},{"dateAdded":1509479862663,"id":"477","index":2,"parentId":"467","title":"teaching.html","url":"https://profs.info.uaic.ro/~ciortuz/teaching.html"},{"dateAdded":1509479884048,"id":"478","index":3,"parentId":"467","title":"Python Programming","url":"https://sites.google.com/site/fiipythonprogramming/"},{"dateAdded":1509479927498,"id":"479","index":4,"parentId":"467","title":"CLIW :: Dezvoltarea aplicaţiilor Web la nivel de client / Dr. Sabin Buraga","url":"https://profs.info.uaic.ro/~busaco/teach/courses/cliw/index.html"},{"dateAdded":1509479969575,"id":"480","index":5,"parentId":"467","title":"Retele Neuronale","url":"https://profs.info.uaic.ro/~rbenchea/rn.html"},{"dateAdded":1509480095653,"id":"481","index":6,"parentId":"467","title":"Course&Laboratory - Computer Networks 2017-2018","url":"https://profs.info.uaic.ro/~computernetworks/cursullaboratorul.php"}],"dateAdded":1508956027877,"dateGroupModified":1512486326913,"id":"467","index":1,"parentId":"1","title":"facultate links"},{"children":[{"dateAdded":1407176702495,"id":"95","index":0,"parentId":"17","title":"ChronoZoom","url":"http://www.chronozoom.com/"},{"dateAdded":1452666545242,"id":"96","index":1,"parentId":"17","title":"HUMAN Extended version VOL.1 - YouTube","url":"https://www.youtube.com/watch?v=vdb4XGVTHkE"},{"dateAdded":1444403659641,"id":"97","index":2,"parentId":"17","title":"Workaway.info the site for free work exchange. Gap year volunteer for food and accommodation whilst travelling abroad.","url":"http://www.workaway.info/"},{"dateAdded":1453153418120,"id":"98","index":3,"parentId":"17","title":"The 5 Weirdest Reasons We Have Sex (According to Science) | Cracked.com","url":"http://www.cracked.com/article_19700_the-5-weirdest-reasons-we-have-sex-according-to-science.html"},{"dateAdded":1440831644878,"id":"99","index":4,"parentId":"17","title":"Google Scholar","url":"https://scholar.google.ro/"},{"dateAdded":1401744036197,"id":"100","index":5,"parentId":"17","title":"O carte veche de 1.000 de ani, păstrată la Budapesta, răstoarnă toate teoriile istorice despre cultura strămoşilor noştri","url":"http://www.paginaromanilor.at/stiri-revista-presei/item/326-o-carte-veche-de-1-000-de-ani-pastrata-la-budapesta-rastoarna-toate-teoriile-istorice-despre-cultura-stramosilor-nostri"},{"dateAdded":1451404076931,"id":"101","index":6,"parentId":"17","title":"Things I Wish Someone Had Told Me When I Was Learning How to Code — Medium","url":"https://medium.com/@cecilycarver/things-i-wish-someone-had-told-me-when-i-was-learning-how-to-code-565fc9dcb329#.kn4la1pn5"},{"dateAdded":1451037189071,"id":"102","index":7,"parentId":"17","title":"Death is nothing at all. - StumbleUpon","url":"http://www.stumbleupon.com/su/2WsTvQ/:Au_NEW9j:mQiG6OEv/www.highexistence.com/images/view/death-is-nothing-at-all"},{"children":[{"dateAdded":1446809218802,"id":"187","index":0,"parentId":"103","title":"Absurdistan (2008) - IMDb","url":"http://www.imdb.com/title/tt1027658/"},{"dateAdded":1386089936519,"id":"188","index":1,"parentId":"103","title":"Top 25 filme pe care trebuie sa le vedeti | Webcultura | Pagina 3","url":"http://webcultura.ro/top-25-filme-pe-care-trebuie-sa-le-vedeti/3/"}],"dateAdded":1492451153760,"dateGroupModified":1492451153760,"id":"103","index":8,"parentId":"17","title":"movies"},{"dateAdded":1446644244530,"id":"104","index":9,"parentId":"17","title":"BBC - Future - The mystery of the female orgasm","url":"http://www.bbc.com/future/story/20150625-the-mystery-of-the-female-orgasm"},{"dateAdded":1405379400147,"id":"105","index":10,"parentId":"17","title":"10 Mind-Blowing Theories That Will Change Your Perception of the World | - StumbleUpon","url":"http://www.stumbleupon.com/su/9qDp9V/pZf_EnqY:qWP8rP1R/www.learning-mind.com/10-mind-blowing-theories-that-will-change-your-perception-of-the-world"},{"children":[{"dateAdded":1407441035342,"id":"182","index":0,"parentId":"106","title":"100 Writing Topics - StumbleUpon","url":"http://www.stumbleupon.com/su/3SbmgU/!$fZ7EaY:flK6nrx4/redravine.wordpress.com/2007/05/30/100-writing-topics"},{"dateAdded":1408569096315,"id":"183","index":1,"parentId":"106","title":"50 MORE Journal Writing Prompts - StumbleUpon","url":"http://www.stumbleupon.com/su/2chTsw/1-l$Vka+5:qVVXj9I!/www.tomslatin.com/50-more-journal-writing-prompts"},{"dateAdded":1405544662926,"id":"184","index":2,"parentId":"106","title":"Exercises for Fiction Writers - Page 2","url":"http://www2.hn.psu.edu/faculty/jmanis/assign/e50xs2.htm"},{"dateAdded":1405715259033,"id":"185","index":3,"parentId":"106","title":"Internet Resources - Writers Resources - Writing Links & Writers Links for Writers - Word Stuff","url":"http://www.internet-resources.com/writers/wrlinks-wordstuff.htm"},{"dateAdded":1405873034621,"id":"186","index":4,"parentId":"106","title":"wooord","url":"http://s3-ec.buzzfed.com/static/enhanced/web05/2012/8/15/10/enhanced-buzz-30757-1345042560-7.jpg"}],"dateAdded":1492451153760,"dateGroupModified":1492451153760,"id":"106","index":11,"parentId":"17","title":"writing"},{"dateAdded":1407008383117,"id":"107","index":12,"parentId":"17","title":"trey-ratcliff-milford10-X2.jpg (1280×854)","url":"http://stuckincustoms.smugmug.com/Portfolio/i-MbXWDKH/2/X2/trey-ratcliff-milford10-X2.jpg"},{"dateAdded":1451334485657,"id":"108","index":13,"parentId":"17","title":"An Illustrated Book of Bad Arguments","url":"https://bookofbadarguments.com/"},{"dateAdded":1383706626122,"id":"109","index":14,"parentId":"17","title":"Esther Perel: Secretul dorinţei într-o relaţie pe termen lung | Video on TED.com","url":"http://www.ted.com/talks/esther_perel_the_secret_to_desire_in_a_long_term_relationship.html?quote=2040"},{"dateAdded":1392582200916,"id":"110","index":15,"parentId":"17","title":"Romania - UE: Cine are nevoie mai mare de cine","url":"http://www.9am.ro/stiri-revista-presei/2006-10-09/romania-ue-cine-are-nevoie-mai-mare-de-cine-63.html"},{"children":[{"dateAdded":1383904623762,"id":"180","index":0,"parentId":"111","title":"It\'s Okay To Be Smart","url":"http://www.itsokaytobesmart.com/"},{"dateAdded":1446644244530,"id":"181","index":1,"parentId":"111","title":"BBC - Future - The mystery of the female orgasm","url":"http://www.bbc.com/future/story/20150625-the-mystery-of-the-female-orgasm"}],"dateAdded":1492451153760,"dateGroupModified":1492451153760,"id":"111","index":16,"parentId":"17","title":"smarties"},{"dateAdded":1384694850201,"id":"112","index":17,"parentId":"17","title":"Heartwarming Friendship Between a Girl and Her Cat - My Modern Metropolis","url":"http://www.mymodernmet.com/profiles/blogs/andy-prokh-daughter-cat-photos"},{"dateAdded":1383904638562,"id":"113","index":18,"parentId":"17","title":"Just because I\'m crazy doesn\'t mean I\'m wrong","url":"http://abvh.tumblr.com/page/6"},{"dateAdded":1387220241461,"id":"114","index":19,"parentId":"17","title":"Website dedicat artei – contine tutoriale video (Photoshop, After Effects, Illustrator, Cinema 4D,etc.) si elemente grafice gratuite, precum si news-uri art-related si galerii inspirationaleInspiratie «","url":"http://creativemonkeyz.com/category/la-cafea/inspiratie/page/46/"},{"dateAdded":1403967670418,"id":"115","index":20,"parentId":"17","title":"How to Remove Scratches From Your Phone","url":"http://mashable.com/2014/06/28/phone-screen-scratches/?utm_cid=mash-com-fb-main-link"},{"dateAdded":1389912754005,"id":"116","index":21,"parentId":"17","title":"Invatamantul.ro","url":"http://www.invatamantul.ro/"},{"dateAdded":1361987139573,"id":"117","index":22,"parentId":"17","title":"FLICK_KA - Automat","url":"http://www02.zkm.de/flick_ka/index.php?option=com_events&task=view_detail&agid=319097411&year=2012&month=11&day=23&Itemid=40&catids=13|18"},{"dateAdded":1401531915195,"id":"118","index":23,"parentId":"17","title":"ROMÂNIA SUB ASEDIU","url":"http://inpremiera.antena3.ro/reportaje/romania-sub-asediu-254.html"},{"children":[{"dateAdded":1404855272497,"id":"168","index":0,"parentId":"119","title":"rlly fnny","url":"http://qph.is.quoracdn.net/main-qimg-c34318f40a5beea7d2398b2e973773a1?convert_to_webp=true"},{"dateAdded":1406414363006,"id":"169","index":1,"parentId":"119","title":"ultimate irony","url":"http://qph.is.quoracdn.net/main-qimg-9d89c0e2d12c3e6b0890b4f34a36ded9?convert_to_webp=true"},{"dateAdded":1438262505356,"id":"170","index":2,"parentId":"119","title":"rub-it-in-your-face-middle-finger-in-your-face.gif (320×600)","url":"http://reactiongifs.me/wp-content/uploads/2013/11/rub-it-in-your-face-middle-finger-in-your-face.gif"},{"dateAdded":1412415111295,"id":"171","index":3,"parentId":"119","title":"...","url":"http://thechive.files.wordpress.com/2014/10/really-good-points-34.jpg?w=600&h=335"},{"dateAdded":1403642631715,"id":"172","index":4,"parentId":"119","title":"h8291A227 (401×271)","url":"https://i.chzbgr.com/maxW500/8234233856/h8291A227/"},{"dateAdded":1435245792949,"id":"173","index":5,"parentId":"119","title":"gif","url":"http://img-comment-fun.9cache.com/media/d3bc5d66141702659072193116_700wa_0.gif"},{"dateAdded":1451940692612,"id":"174","index":6,"parentId":"119","title":"tumblr_inline_myl82zAg6E1reg6lt.gif (320×240)","url":"http://33.media.tumblr.com/840ead7c2dfda198367ba57042504825/tumblr_inline_myl82zAg6E1reg6lt.gif"},{"dateAdded":1384188067851,"id":"175","index":7,"parentId":"119","title":"votre-opinion-cul.jpg (706×832)","url":"http://www.tuxboard.com/photos/2013/10/votre-opinion-cul.jpg"},{"dateAdded":1387655163436,"id":"176","index":8,"parentId":"119","title":"anigif_enhanced-buzz-29703-1384888258-28.gif (198×257)","url":"http://s3-ec.buzzfed.com/static/2013-11/enhanced/webdr06/19/14/anigif_enhanced-buzz-29703-1384888258-28.gif"},{"dateAdded":1387655159971,"id":"177","index":9,"parentId":"119","title":"anigif_enhanced-buzz-2049-1384889309-9.gif (250×333)","url":"http://s3-ec.buzzfed.com/static/2013-11/enhanced/webdr05/19/14/anigif_enhanced-buzz-2049-1384889309-9.gif"},{"dateAdded":1387808094362,"id":"178","index":10,"parentId":"119","title":"Catastrofa de la Ciurea. Povestea celui mai grav accident feroviar din istoria României, soldat cu peste 1.000 de morţi | adevarul.ro","url":"http://adevarul.ro/locale/iasi/catastrofa-accident-feroviar-ciurea-1_52b54fdfc7b855ff56e5e04d/index.html"},{"dateAdded":1387655141339,"id":"179","index":11,"parentId":"119","title":"anigif_enhanced-buzz-7600-1384888226-19.gif (250×187)","url":"http://s3-ec.buzzfed.com/static/2013-11/enhanced/webdr03/19/14/anigif_enhanced-buzz-7600-1384888226-19.gif"},{"dateAdded":1504780155104,"id":"420","index":12,"parentId":"119","title":"Poorly Drawn Lines – A Volcano","url":"http://www.poorlydrawnlines.com/comic/a-volcano/"},{"dateAdded":1505383911455,"id":"430","index":13,"parentId":"119","title":"UbIng9zrj6nQI.gif (320×180)","url":"http://i.giphy.com/UbIng9zrj6nQI.gif"},{"dateAdded":1505394144188,"id":"431","index":14,"parentId":"119","title":"The coding love - When I start fixing a small bug","url":"http://thecodinglove.com/post/162667007455/when-i-start-fixing-a-small-bug"},{"dateAdded":1505394211524,"id":"432","index":15,"parentId":"119","title":"The coding love - Monday morning","url":"http://thecodinglove.com/post/162543000090/monday-morning"},{"dateAdded":1505394581968,"id":"433","index":16,"parentId":"119","title":"The coding love - When I try a solution from Stack Overflow","url":"http://thecodinglove.com/post/162038422395/when-i-try-a-solution-from-stack-overflow"},{"dateAdded":1505736674941,"id":"437","index":17,"parentId":"119","title":"875087333544120320-png__700.jpg (700×314)","url":"https://static.boredpanda.com/blog/wp-content/uploads/2017/06/875087333544120320-png__700.jpg"},{"dateAdded":1506422268160,"id":"443","index":18,"parentId":"119","title":"crying-money-woody-harrelson-zombieland.gif (500×341)","url":"http://reactiongifs.me/wp-content/uploads/2014/04/crying-money-woody-harrelson-zombieland.gif"}],"dateAdded":1492451153761,"dateGroupModified":1511370447219,"id":"119","index":24,"parentId":"17","title":"funny"},{"children":[{"dateAdded":1406439506449,"id":"128","index":0,"parentId":"121","title":"Papillon (1969) for Papillon (1970) - HENRI CHARRIÈRE","url":"http://www.scribd.com/doc/58015525/1/Papillon-1969"},{"dateAdded":1406439519168,"id":"129","index":1,"parentId":"121","title":"bookspot.ro/file.axd?file=2013%2F3%2FAntoine+de+SaintExupery+-+Micul+Print.pdf","url":"http://bookspot.ro/file.axd?file=2013%2F3%2FAntoine+de+SaintExupery+-+Micul+Print.pdf"},{"children":[{"dateAdded":1406439506449,"id":"148","index":0,"parentId":"130","title":"Papillon (1969) for Papillon (1970) - HENRI CHARRIÈRE","url":"http://www.scribd.com/doc/58015525/1/Papillon-1969"},{"dateAdded":1406439519168,"id":"149","index":1,"parentId":"130","title":"bookspot.ro/file.axd?file=2013%2F3%2FAntoine+de+SaintExupery+-+Micul+Print.pdf","url":"http://bookspot.ro/file.axd?file=2013%2F3%2FAntoine+de+SaintExupery+-+Micul+Print.pdf"},{"dateAdded":1406439538024,"id":"150","index":2,"parentId":"130","title":"www.perpustakaan.depkeu.go.id/FOLDEREBOOK/How to Analyze People on Sight.pdf","url":"http://www.perpustakaan.depkeu.go.id/FOLDEREBOOK/How%20to%20Analyze%20People%20on%20Sight.pdf"},{"dateAdded":1406439425757,"id":"151","index":3,"parentId":"130","title":"teacherweb.com/ON/SacredHeartHighSchool/MrStriukas/A_Sound_of_Thunder.pdf","url":"http://teacherweb.com/ON/SacredHeartHighSchool/MrStriukas/A_Sound_of_Thunder.pdf"},{"dateAdded":1406439561608,"id":"152","index":4,"parentId":"130","title":"The Picture of Dorian Gray","url":"http://www.scribd.com/doc/38986/The-Picture-of-Dorian-Gray"},{"dateAdded":1406439588808,"id":"153","index":5,"parentId":"130","title":"kisi.deu.edu.tr/murat.goc/451.pdf","url":"http://kisi.deu.edu.tr/murat.goc/451.pdf"},{"dateAdded":1406439608096,"id":"154","index":6,"parentId":"130","title":"gv.pl/pdf/lord_of_the_flies.pdf","url":"http://gv.pl/pdf/lord_of_the_flies.pdf"},{"dateAdded":1406439665839,"id":"155","index":7,"parentId":"130","title":"gigy.weebly.com/uploads/5/9/4/4/5944278/john_fowles_the_french_lieutenants_woman.pdf","url":"http://gigy.weebly.com/uploads/5/9/4/4/5944278/john_fowles_the_french_lieutenants_woman.pdf"},{"dateAdded":1406439745791,"id":"156","index":8,"parentId":"130","title":"journaleast.files.wordpress.com/2010/06/charles-bukowski-women.pdf","url":"http://journaleast.files.wordpress.com/2010/06/charles-bukowski-women.pdf"},{"dateAdded":1398377602226,"id":"157","index":9,"parentId":"130","title":"hrsbstaff.ednet.ns.ca/engramja/ENG_11/Five_people.pdf","url":"http://hrsbstaff.ednet.ns.ca/engramja/ENG_11/Five_people.pdf"},{"dateAdded":1405544921508,"id":"158","index":10,"parentId":"130","title":"A List of Books | 623 of the Best Books ever Written - StumbleUpon","url":"http://www.stumbleupon.com/su/1l9EMS/pZmLQJrU:jnJ_v-UI/www.alistofbooks.com"}],"dateAdded":1492451153761,"dateGroupModified":1492451153761,"id":"130","index":2,"parentId":"121","title":"carti"},{"dateAdded":1406439538024,"id":"131","index":3,"parentId":"121","title":"www.perpustakaan.depkeu.go.id/FOLDEREBOOK/How to Analyze People on Sight.pdf","url":"http://www.perpustakaan.depkeu.go.id/FOLDEREBOOK/How%20to%20Analyze%20People%20on%20Sight.pdf"},{"dateAdded":1406439561608,"id":"132","index":4,"parentId":"121","title":"The Picture of Dorian Gray","url":"http://www.scribd.com/doc/38986/The-Picture-of-Dorian-Gray"},{"dateAdded":1406439588808,"id":"133","index":5,"parentId":"121","title":"kisi.deu.edu.tr/murat.goc/451.pdf","url":"http://kisi.deu.edu.tr/murat.goc/451.pdf"},{"dateAdded":1406439608096,"id":"134","index":6,"parentId":"121","title":"gv.pl/pdf/lord_of_the_flies.pdf","url":"http://gv.pl/pdf/lord_of_the_flies.pdf"},{"dateAdded":1406439665839,"id":"135","index":7,"parentId":"121","title":"gigy.weebly.com/uploads/5/9/4/4/5944278/john_fowles_the_french_lieutenants_woman.pdf","url":"http://gigy.weebly.com/uploads/5/9/4/4/5944278/john_fowles_the_french_lieutenants_woman.pdf"},{"dateAdded":1406439745791,"id":"136","index":8,"parentId":"121","title":"journaleast.files.wordpress.com/2010/06/charles-bukowski-women.pdf","url":"http://journaleast.files.wordpress.com/2010/06/charles-bukowski-women.pdf"},{"dateAdded":1398377602226,"id":"137","index":9,"parentId":"121","title":"hrsbstaff.ednet.ns.ca/engramja/ENG_11/Five_people.pdf","url":"http://hrsbstaff.ednet.ns.ca/engramja/ENG_11/Five_people.pdf"},{"dateAdded":1434051539037,"id":"138","index":10,"parentId":"121","title":"Hesse, Hermann - Siddhartha","url":"http://ro.scribd.com/doc/12739621/Hesse-Hermann-Siddhartha#scribd"},{"dateAdded":1437556481452,"id":"139","index":11,"parentId":"121","title":"https://cartebunaonline.files.wordpress.com/2014/03/4580649-william-golding-imparatul-mustelor.pdf","url":"https://cartebunaonline.files.wordpress.com/2014/03/4580649-william-golding-imparatul-mustelor.pdf"},{"dateAdded":1437566983894,"id":"140","index":12,"parentId":"121","title":"Nathaniel-Hawthorne-Litera-stacojie.pdf - File Shared from Box","url":"https://app.box.com/s/h3lhu8wn9phfl4hratm3"},{"dateAdded":1437568726135,"id":"141","index":13,"parentId":"121","title":"Sun also rises Hemingway romana","url":"http://cristinamoraru10.ro/wp-content/uploads/2014/05/Fiesta-Ernest-Hemingway.pdf"},{"dateAdded":1437641928863,"id":"142","index":14,"parentId":"121","title":"cosmos carl sagan","url":"http://www.arvindguptatoys.com/arvindgupta/sagancosmos.pdf"},{"dateAdded":1407271125784,"id":"143","index":15,"parentId":"121","title":"scorilos.files.wordpress.com/2011/09/bulgakov-maestrul-si-margareta.pdf","url":"http://scorilos.files.wordpress.com/2011/09/bulgakov-maestrul-si-margareta.pdf"},{"dateAdded":1441534530784,"id":"144","index":16,"parentId":"121","title":"Spuma zilelor - Boris Vian","url":"https://scrieriliteratura.files.wordpress.com/2009/09/spuma-zilelor.pdf"},{"dateAdded":1415994529257,"id":"145","index":17,"parentId":"121","title":"600 Free eBooks for iPad, Kindle & Other Devices | Open Culture","url":"http://www.openculture.com/free_ebooks"},{"dateAdded":1407271125784,"id":"146","index":18,"parentId":"121","title":"scorilos.files.wordpress.com/2011/09/bulgakov-maestrul-si-margareta.pdf","url":"http://scorilos.files.wordpress.com/2011/09/bulgakov-maestrul-si-margareta.pdf"},{"dateAdded":1451404006770,"id":"147","index":19,"parentId":"121","title":"www.physixfan.com/wp-content/files/GEBen.pdf","url":"http://www.physixfan.com/wp-content/files/GEBen.pdf"},{"dateAdded":1507112181247,"id":"454","index":20,"parentId":"121","title":"Dive Into HTML5","url":"http://diveintohtml5.info/"}],"dateAdded":1492451153761,"dateGroupModified":1510395109813,"id":"121","index":25,"parentId":"17","title":"carti"},{"children":[{"dateAdded":1451402168010,"id":"123","index":0,"parentId":"122","title":"How do I learn web development as quickly as possible? - Quora","url":"https://www.quora.com/How-do-I-learn-web-development-as-quickly-as-possible"},{"dateAdded":1441649666349,"id":"124","index":1,"parentId":"122","title":"How can I learn programming? - Quora","url":"http://www.quora.com/How-can-I-learn-programming-3"},{"dateAdded":1451404082650,"id":"125","index":2,"parentId":"122","title":"What makes a great web developer? - Quora","url":"https://www.quora.com/What-makes-a-great-web-developer"},{"dateAdded":1451404091286,"id":"126","index":3,"parentId":"122","title":"Erik Trautman\'s answer to How long would it take an average person with no programming background to become a full-stack developer? - Quora","url":"https://www.quora.com/How-long-would-it-take-an-average-person-with-no-programming-background-to-become-a-full-stack-developer/answer/Erik-Trautman"},{"dateAdded":1384188132114,"id":"127","index":4,"parentId":"122","title":"Is the universe infinite? [VIDEO]","url":"http://www.wimp.com/infiniteuniverse/"}],"dateAdded":1492451153761,"dateGroupModified":1492451153761,"id":"122","index":26,"parentId":"17","title":"questions"},{"dateAdded":1503170368505,"id":"414","index":27,"parentId":"17","title":"Four in the Morning - Poetry Society of America","url":"https://www.poetrysociety.org/psa/poetry/poetry_in_motion/atlas/portland/fou_in_the_mor/"},{"dateAdded":1503499240328,"id":"417","index":28,"parentId":"17","title":"Sarah\'s Scribbles by Sarah Andersen for Apr 19, 2017 | Read Comic Strips at GoComics.com","url":"http://www.gocomics.com/sarahs-scribbles/2017/04/19"},{"children":[{"dateAdded":1488874681969,"id":"78","index":0,"parentId":"23","title":"Reviews for Introduction to Python for Data Science from edX | Class Central","url":"https://www.class-central.com/mooc/5683/edx-introduction-to-python-for-data-science"},{"dateAdded":1492948181056,"id":"278","index":1,"parentId":"23","title":"See more...","url":"https://web.facebook.com/groups/infoIasi/#"},{"dateAdded":1488874687201,"id":"79","index":2,"parentId":"23","title":"Reviews for Developing Scalable Apps in Python from Udacity | Class Central","url":"https://www.class-central.com/mooc/3525/udacity-developing-scalable-apps-in-python"},{"dateAdded":1488874694369,"id":"80","index":3,"parentId":"23","title":"Reviews for Programming with Python for Data Science from edX | Class Central","url":"https://www.class-central.com/mooc/6471/edx-programming-with-python-for-data-science"},{"dateAdded":1488874713681,"id":"81","index":4,"parentId":"23","title":"370 Free Online Programming & Computer Science Courses You Can Start This Month","url":"https://medium.freecodecamp.com/370-free-online-programming-computer-science-courses-you-can-start-this-month-fc5b9867769e#.9f8ecj892"},{"dateAdded":1495108850569,"id":"323","index":5,"parentId":"23","title":"Richard Feynman: Physics is fun to imagine | TED Talk | TED.com","url":"https://www.ted.com/talks/richard_feynman"},{"children":[{"dateAdded":1467011106005,"id":"90","index":0,"parentId":"19","title":"The Python Tutorial — Python 2.7.12 documentation","url":"https://docs.python.org/2/tutorial/index.html"}],"dateAdded":1467011117718,"dateGroupModified":1492451153751,"id":"19","index":6,"parentId":"23","title":"python"},{"children":[{"dateAdded":1471766884884,"id":"57","index":0,"parentId":"30","title":"Intro to Computer Science | Udacity","url":"https://www.udacity.com/course/intro-to-computer-science--cs101"},{"dateAdded":1471766881792,"id":"58","index":1,"parentId":"30","title":"Intro to Machine Learning Course | Udacity","url":"https://www.udacity.com/course/intro-to-machine-learning--ud120"}],"dateAdded":1471766870090,"dateGroupModified":1492451153757,"id":"30","index":7,"parentId":"23","title":"machine learning"}],"dateAdded":1488874671394,"dateGroupModified":1510162004577,"id":"23","index":29,"parentId":"17","title":"de invatat"},{"children":[{"dateAdded":1486470410166,"id":"66","index":0,"parentId":"26","title":"SABF","url":"https://www.sabf.org.ar/"},{"dateAdded":1487259682955,"id":"67","index":1,"parentId":"26","title":"Travel Writing Scholarship 2017 → Win a trip to the Balkans with World Nomads","url":"https://www.worldnomads.com/learn/travel-writing/scholarship/2017/"},{"dateAdded":1487333878559,"id":"68","index":2,"parentId":"26","title":"International Essay Contest for Young People | The Goi Peace Foundation","url":"https://www.goipeace.or.jp/en/work/essay-contest/"},{"dateAdded":1487842711262,"id":"69","index":3,"parentId":"26","title":"MyMUN: Model United Nations","url":"https://mymun.net/muns/bmeu-2017"},{"dateAdded":1487843180693,"id":"70","index":4,"parentId":"26","title":"Students - graduates | Careers with the European Union","url":"https://epso.europa.eu/job-opportunities/students-and-graduates_en#tab-0-0"},{"dateAdded":1487843716580,"id":"71","index":5,"parentId":"26","title":"Travel grants","url":"http://schwarzkopf-stiftung.de/en/awards/reisestipendien/"}],"dateAdded":1462477012823,"dateGroupModified":1495643313363,"id":"26","index":30,"parentId":"17","title":"Chestii la care e foarte important sa ma inscriu"},{"children":[{"dateAdded":1463834398062,"id":"54","index":0,"parentId":"31","title":"itn-niven.pdf","url":"https://editorialdinosaurio.files.wordpress.com/2012/03/itn-niven.pdf"},{"dateAdded":1463834403349,"id":"55","index":1,"parentId":"31","title":"cormenrom.pdf","url":"file:///home/cristina/Downloads/cormenrom.pdf"}],"dateAdded":1463834388876,"dateGroupModified":1492451153757,"id":"31","index":31,"parentId":"17","title":"carti de scos la pim"},{"dateAdded":1507207011525,"id":"457","index":32,"parentId":"17","title":"stuff-no-one-told-me-snotm-alex-noriega-36-5742eca1ce1a9__605.jpg (605×605)","url":"https://static.boredpanda.com/blog/wp-content/uploads/2016/05/stuff-no-one-told-me-snotm-alex-noriega-36-5742eca1ce1a9__605.jpg"}],"dateAdded":1492451153750,"dateGroupModified":1511370447218,"id":"17","index":2,"parentId":"1","title":"stuff"},{"dateAdded":1506432122212,"id":"442","index":3,"parentId":"1","title":"Orar 3 sem 1 - Google Docs","url":"https://docs.google.com/document/d/1oxVxDqOZWJh8MrkoUntzo7wVLnmpTYFqFg9XG6IIlYw/edit#"},{"dateAdded":1506704314252,"id":"450","index":4,"parentId":"1","title":"Planificare semestru - Google Docs","url":"https://docs.google.com/document/d/1un-iwqh3pdvQnaoRDPga7J4si3thpi0EtjNC88eVjJc/edit#"},{"dateAdded":1507095309310,"id":"453","index":5,"parentId":"1","title":"Orar Informatica, anul 3A, grupa 4","url":"https://profs.info.uaic.ro/~orar/participanti/orar_I3A4.html"},{"children":[{"dateAdded":1470126737771,"id":"59","index":0,"parentId":"29","title":"The Selective Laziness Of Human Reasoning : 13.7: Cosmos And Culture : NPR","url":"http://www.npr.org/sections/13.7/2016/08/01/488228453/the-selective-laziness-of-human-reasoning?utm_source=facebook.com&utm_medium=social&utm_campaign=npr&utm_term=nprnews&utm_content=20160801"},{"dateAdded":1473241963362,"id":"60","index":1,"parentId":"29","title":"Yuval Noah Harari on big data, Google and the end of free will - FT.com","url":"http://www.ft.com/cms/s/2/50bb4830-6a4c-11e6-ae5b-a7cc5dd5a28c.html?siteedition=intl#axzz4IbQH1oYy"},{"dateAdded":1484118152844,"id":"61","index":2,"parentId":"29","title":"Manage Your Energy, Not Your Time","url":"https://hbr.org/2007/10/manage-your-energy-not-your-time?utm_campaign=HBR&utm_source=facebook&utm_medium=social"},{"dateAdded":1484126554659,"id":"62","index":3,"parentId":"29","title":"Full Transcript: President Barack Obama’s farewell speech - Vox","url":"http://www.vox.com/policy-and-politics/2017/1/10/14229878/full-transcript-president-barack-obama-farewell-speech"},{"dateAdded":1486472982717,"id":"63","index":4,"parentId":"29","title":"5 People Who Took Revenge to a Whole New Level","url":"http://www.cracked.com/article_20434_5-people-who-took-revenge-to-whole-new-level.html"},{"dateAdded":1509470141244,"id":"474","index":5,"parentId":"29","title":"","url":"https://static.boredpanda.com/blog/wp-content/uploads/2016/05/stuff-no-one-told-me-snotm-alex-noriega-36-5742eca1ce1a9__605.jpg"},{"dateAdded":1491467521568,"id":"64","index":6,"parentId":"29","title":"Education of a Programmer – Hacker Noon","url":"https://hackernoon.com/education-of-a-programmer-aaecf2d35312"},{"dateAdded":1492155740596,"id":"65","index":7,"parentId":"29","title":"From Muhammad to ISIS: Iraq\'s Full Story - Wait But Why","url":"http://waitbutwhy.com/2014/09/muhammad-isis-iraqs-full-story.html"},{"dateAdded":1492520994878,"id":"269","index":8,"parentId":"29","title":"BBC - Future - Will religion ever disappear?","url":"http://www.bbc.com/future/story/20141219-will-religion-ever-disappear"},{"dateAdded":1492521015620,"id":"270","index":9,"parentId":"29","title":"BBC - Future - How Western civilisation could collapse","url":"http://www.bbc.com/future/story/20170418-how-western-civilisation-could-collapse"},{"dateAdded":1492521022123,"id":"271","index":10,"parentId":"29","title":"BBC - Future - How to cope with the end of the world","url":"http://www.bbc.com/future/story/20161124-how-to-cope-with-the-end-of-the-world"},{"dateAdded":1492637640970,"id":"275","index":11,"parentId":"29","title":"BBC - Future - How break-ups change your personality","url":"http://www.bbc.com/future/story/20161205-how-break-ups-change-your-personality"},{"dateAdded":1493040500505,"id":"281","index":12,"parentId":"29","title":"Sheryl Sandberg: How to Build Resilient Kids, Even After a Loss - The New York Times","url":"https://www.nytimes.com/2017/04/24/opinion/sheryl-sandberg-how-to-build-resilient-kids-even-after-a-loss.html?smid=fb-nytimes&smtyp=cur&_r=0"},{"dateAdded":1493496915664,"id":"290","index":13,"parentId":"29","title":"How Windmills Saved the Dutch – Science Channel | Impossible Engineering | Discovery Science","url":"http://www.sciencechannel.com/tv-shows/impossible-engineering/impossible-engineering-videos/how-windmills-saved-the-dutch/?sf74536901=1"},{"dateAdded":1494327895644,"id":"299","index":14,"parentId":"29","title":"BBC - Future - The many reasons that people are having less sex","url":"http://www.bbc.com/future/story/20170508-the-many-reasons-that-people-are-having-less-sex"},{"dateAdded":1500458086214,"id":"385","index":15,"parentId":"29","title":"To Defend Western Civilization, Start With Science : 13.7: Cosmos And Culture : NPR","url":"http://www.npr.org/sections/13.7/2017/07/18/537882769/to-defend-western-civilization-start-with-science?utm_source=facebook.com&utm_medium=social&utm_campaign=npr&utm_term=nprnews&utm_content=20170719"},{"dateAdded":1500452879202,"id":"386","index":16,"parentId":"29","title":"Ma puteti ierta pentru cele 300 de milioane de Euro spaga pierdute din cauza mea? | Contributors","url":"http://www.contributors.ro/editorial/ma-puteti-ierta-pentru-cele-300-de-milioane-de-euro-pierdute-din-cauza-mea/"},{"dateAdded":1500452871586,"id":"387","index":17,"parentId":"29","title":"Why Russia, U.S. and Israel Probably Won\'t Start a World War | Time.com","url":"http://time.com/4826856/russia-trump-north-korea-china-war/"},{"dateAdded":1499349159752,"id":"370","index":18,"parentId":"29","title":"Work and Reward: The Great Disconnect - The New York Times","url":"https://www.nytimes.com/2017/07/06/opinion/wage-inequality-income-growth.html?smid=fb-nytimes&smtyp=cur"},{"dateAdded":1498645808431,"id":"367","index":19,"parentId":"29","title":"Augusten Burroughs on How to Live Unhappily Ever After - WSJ","url":"https://www.wsj.com/articles/SB10001424052702304746604577379891905861390"},{"dateAdded":1500324968701,"id":"382","index":20,"parentId":"29","title":"5 Cheap(ish) Things That Could Disproportionately Improve Your Life - The New York Times","url":"https://www.nytimes.com/2017/07/16/smarter-living/5-cheap-ish-things-that-could-disproportionately-improve-your-life.html?smid=fb-nytimes&smtyp=cur"},{"dateAdded":1499776396785,"id":"376","index":21,"parentId":"29","title":"Effects of Complex Trauma | National Child Traumatic Stress Network - Child Trauma Home","url":"http://www.nctsn.org/trauma-types/complex-trauma/effects-of-complex-trauma#q6"},{"dateAdded":1499776392729,"id":"375","index":22,"parentId":"29","title":"Poverty shrinks brains from birth : Nature News & Comment","url":"http://www.nature.com/news/poverty-shrinks-brains-from-birth-1.17227"},{"dateAdded":1496698726009,"id":"355","index":23,"parentId":"29","title":"The Disease of Being Busy | On Being","url":"https://onbeing.org/blog/the-disease-of-being-busy/"},{"dateAdded":1496044241897,"id":"335","index":24,"parentId":"29","title":"The “Good at Math” Myth – Remake Learning","url":"http://remakelearning.org/blog/2013/12/02/the-good-at-math-myth/"},{"dateAdded":1496044233561,"id":"334","index":25,"parentId":"29","title":"Belief that some fields require \'brilliance\' may keep women out | Science | AAAS","url":"http://www.sciencemag.org/news/2015/01/belief-some-fields-require-brilliance-may-keep-women-out"},{"dateAdded":1496749569186,"id":"358","index":26,"parentId":"29","title":"Cînd ea nu mai e - Dilema Veche","url":"http://dilemaveche.ro/sectiune/carte/articol/cind-ea-nu-mai-e"},{"dateAdded":1496670277991,"id":"354","index":27,"parentId":"29","title":"We Aren’t Built to Live in the Moment - The New York Times","url":"https://www.nytimes.com/2017/05/19/opinion/sunday/why-the-future-is-always-on-your-mind.html?smid=fb-share&_r=0"},{"dateAdded":1504866044101,"id":"423","index":28,"parentId":"29","title":"A Tale of Two Industries: How Programming Languages Differ Between Wealthy and Developing Countries - Stack Overflow Blog","url":"https://stackoverflow.blog/2017/08/29/tale-two-industries-programming-languages-differ-wealthy-developing-countries/"},{"dateAdded":1505142688274,"id":"424","index":29,"parentId":"29","title":"How I learned to stop worrying and write my own ORM","url":"https://samsaffron.com/archive/2011/03/30/How+I+learned+to+stop+worrying+and+write+my+own+ORM"},{"dateAdded":1505163328747,"id":"425","index":30,"parentId":"29","title":"Are the robots about to rise? Google\'s new director of engineering thinks so… | Technology | The Guardian","url":"https://www.theguardian.com/technology/2014/feb/22/robots-google-ray-kurzweil-terminator-singularity-artificial-intelligence"},{"dateAdded":1505383902629,"id":"428","index":31,"parentId":"29","title":"Mind Control Isn\'t Sci-Fi Anymore | WIRED","url":"https://www.wired.com/story/brain-machine-interface-isnt-sci-fi-anymore"},{"dateAdded":1505398468365,"id":"429","index":32,"parentId":"29","title":"How do you remake one of the most legendary... - Bloomberg Businessweek","url":"https://www.facebook.com/bloombergbusinessweek/videos/1171445006334018/"},{"dateAdded":1505731465842,"id":"436","index":33,"parentId":"29","title":"10 Ways We Get the Odds Wrong | Psychology Today","url":"https://www.psychologytoday.com/articles/200801/10-ways-we-get-the-odds-wrong"},{"dateAdded":1506072731494,"id":"441","index":34,"parentId":"29","title":"Merkelism vs. Trumpism - The New York Times","url":"https://www.nytimes.com/2017/09/22/opinion/merkel-trump-free-world.html?smid=fb-nytimes&smtyp=cur"},{"dateAdded":1507307323594,"id":"460","index":35,"parentId":"29","title":"Grieving the people we’ve loved and lost |","url":"https://ideas.ted.com/grieving-the-people-weve-loved-and-lost/?utm_campaign=social&utm_medium=referral&utm_source=facebook.com&utm_content=ideas-blog&utm_term=social-science"},{"dateAdded":1508673609154,"id":"464","index":36,"parentId":"29","title":"Sex Is Sex. But Money Is Money. – Matter – Medium","url":"https://medium.com/matter/sex-is-sex-but-money-is-money-e7c10091713f"},{"dateAdded":1509360734400,"id":"471","index":37,"parentId":"29","title":"Big data meets Big Brother as China moves to rate its citizens | WIRED UK","url":"https://www.wired.co.uk/article/chinese-government-social-credit-score-privacy-invasion"},{"dateAdded":1512384625764,"id":"488","index":38,"parentId":"29","title":"Life, but not as we know it | Ars Technica","url":"https://arstechnica.com/science/2017/12/life-but-not-as-we-know-it/"},{"dateAdded":1512399483733,"id":"489","index":39,"parentId":"29","title":"Bitcoin: Seven questions you were too embarrassed to ask | Ars Technica","url":"https://arstechnica.com/tech-policy/2017/12/bitcoin-a-beginners-guide/"}],"dateAdded":1470126735163,"dateGroupModified":1512399483733,"id":"29","index":6,"parentId":"1","title":"to read later"},{"dateAdded":1469192648604,"id":"24","index":7,"parentId":"1","title":"How to clear/flush the DNS cache in Google Chrome? - Super User","url":"http://superuser.com/questions/203674/how-to-clear-flush-the-dns-cache-in-google-chrome"},{"dateAdded":1469192598645,"id":"27","index":8,"parentId":"1","title":"phpstorm - JetBrains WebIDE: PHP variable type hinting? - Stack Overflow","url":"http://stackoverflow.com/questions/1816641/jetbrains-webide-php-variable-type-hinting"},{"dateAdded":1454538043760,"id":"32","index":9,"parentId":"1","title":"Born to Learn","url":"https://borntolearn.mslearn.net/goodstuff/p/students?WT.mc_id=WWLeX_AcademicMCP_DG_FB_GEO"},{"dateAdded":1454702622376,"id":"35","index":10,"parentId":"1","title":"Coding a Space Invaders game for Android - StumbleUpon","url":"http://www.stumbleupon.com/su/4j4KXO/:bvCjlqrn:g+I+luDL/gamecodeschool.com/android/coding-a-space-invaders-game"},{"dateAdded":1455353499624,"id":"38","index":11,"parentId":"1","title":"20 Basic Plots For Story Generators - Software Secret Weapons - StumbleUpon","url":"http://www.stumbleupon.com/su/2WgEBQ/:197yur!7t:iQawkjdv/www.softwaresecretweapons.com/jspwiki/20basicplotsforstorygenerators"},{"dateAdded":1455512941432,"id":"39","index":12,"parentId":"1","title":"Formular Web privind solicitarea unei adeverințe RATP","url":"https://docs.google.com/forms/d/1Fx2ZSLWl0aL0rPsDrwnDq22XiAbjMfyoKNWaixK7QUs/viewform?edit_requested=true"},{"dateAdded":1455571559773,"id":"40","index":13,"parentId":"1","title":"Filă nouă","url":"https://e5.onthehub.com/WebStore/ProductsByMajorVersionList.aspx?ws=219cd8a5-826f-e011-971f-0030487d8897&JSEnabled=1"},{"dateAdded":1455647080223,"id":"41","index":14,"parentId":"1","title":"SwitchingToUbuntu/FromWindows - Community Help Wiki","url":"https://help.ubuntu.com/community/SwitchingToUbuntu/FromWindows"},{"dateAdded":1455651452558,"id":"42","index":15,"parentId":"1","title":"ApacheMySQLPHP - Community Help Wiki","url":"https://help.ubuntu.com/community/ApacheMySQLPHP"},{"dateAdded":1457696966866,"id":"44","index":16,"parentId":"1","title":"API documentation","url":"http://arsbackendstable.dev/api/doc"},{"dateAdded":1457686188604,"id":"43","index":17,"parentId":"1","title":"GEYC: Mobility Center","url":"http://www.geyc.ro/p/european-mobility.html#app"},{"dateAdded":1464161641425,"id":"45","index":18,"parentId":"1","title":"Java Programming Questions and Answers","url":"http://www.indiabix.com/java-programming/questions-and-answers/"},{"dateAdded":1472809634669,"id":"46","index":19,"parentId":"1","title":"How to be perfectly unhappy - The Oatmeal","url":"http://theoatmeal.com/comics/unhappy"},{"dateAdded":1473934464370,"id":"47","index":20,"parentId":"1","title":"Fiction: The Fisherman and His Soul","url":"http://fiction.eserver.org/short/the_fisherman_and_his_soul.html/document_view"},{"dateAdded":1475761067021,"id":"48","index":21,"parentId":"1","title":"Software Engineering Intern, BS/MS, Summer 2017 - Google - 901 Cherry Ave, San Bruno, CA - Google Careers","url":"https://www.google.com/about/careers/jobs?utm_source=facebook&utm_medium=googlestudents&utm_campaign=B2S&src=Online/Social/students_facebook_B2S#!t=jo&jid=/google/software-engineering-intern-bs-ms-summer-901-cherry-ave-san-bruno-ca-usa-1745030490&"},{"dateAdded":1476086027100,"id":"49","index":22,"parentId":"1","title":"BringITon! 2016 - Înscriere","url":"http://bringiton.info.uaic.ro/inscriere.html"},{"dateAdded":1491775483223,"id":"52","index":23,"parentId":"1","title":"EducationRatings","url":"https://sites.google.com/view/education-ratings-a4-ip/home?authuser=0"},{"dateAdded":1493891073780,"id":"293","index":24,"parentId":"1","title":"GitHub - donnemartin/interactive-coding-challenges: Huge update! Interactive Python coding interview challenges (algorithms and data structures). Includes Anki flashcards.","url":"https://github.com/donnemartin/interactive-coding-challenges?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more"},{"dateAdded":1494362525007,"id":"300","index":25,"parentId":"1","title":"Monkey on Oracle: Installfest: Oracle 11g XE on Amazon Linux Micro Instance","url":"http://monkeyonoracle.blogspot.ro/2012/03/installfest-oracle-11g-xe-on-amazon.html"},{"dateAdded":1494788627517,"id":"306","index":26,"parentId":"1","title":"Young European Council | Young European Leadership","url":"http://www.younglead.eu/activities/yec/#2017-apply"},{"dateAdded":1494854562433,"id":"309","index":27,"parentId":"1","title":"5 Common Encryption Algorithms and the Unbreakables of the Future","url":"https://www.storagecraft.com/blog/5-common-encryption-algorithms/"},{"dateAdded":1495444216055,"id":"326","index":28,"parentId":"1","title":"#EUinMyRegion: Participați la concursul de blogging „UE în regiunea mea” | România - European Commission","url":"https://ec.europa.eu/romania/news/20171705_concurs_de_blogging_ue_in_regiunea_mea_ro"},{"dateAdded":1495477673323,"id":"328","index":29,"parentId":"1","title":"[Haskell] parseFactor :: [Token] -> Maybe (Exp, [Token]) parseFactor ((TInt x) : xs) = Ju - Pastebin.com","url":"https://pastebin.com/4TDD3ZQv"},{"dateAdded":1495972968298,"id":"331","index":30,"parentId":"1","title":"36 eBooks on Computer Programming from O’Reilly Media: Free to Download and Read | Open Culture","url":"http://www.openculture.com/2017/05/36-ebooks-on-computer-programming-from-oreilly-media-free-to-download-and-read.html"},{"dateAdded":1496132514981,"id":"339","index":31,"parentId":"1","title":"AWS General: Cloud Application Architect/Developer","url":"https://awseducate.instructure.com/courses/95/pages/aws-general?module_item_id=3684"},{"dateAdded":1496267810168,"id":"345","index":32,"parentId":"1","title":"Django Multiple Files Upload Using Ajax","url":"https://simpleisbetterthancomplex.com/tutorial/2016/11/22/django-multiple-file-upload-using-ajax.html"},{"dateAdded":1501166348108,"id":"394","index":33,"parentId":"1","title":"Learn Node.js Completely and with Confidence | JavaScript is Sexy","url":"http://javascriptissexy.com/learn-node-js-completely-and-with-confidence/"},{"dateAdded":1501166773646,"id":"395","index":34,"parentId":"1","title":"javascript - How do I get started with Node.js - Stack Overflow","url":"https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js"},{"dateAdded":1501245062972,"id":"400","index":35,"parentId":"1","title":"Bitdefender GravityZone","url":"https://192.168.33.20/"},{"dateAdded":1501245066180,"id":"401","index":36,"parentId":"1","title":"Bitdefender GravityZone","url":"https://192.168.33.10/"},{"dateAdded":1501506719630,"id":"402","index":37,"parentId":"1","title":"Cristina NEGRUTU - Outlook Web App","url":"https://xmail.bitdefender.com/owa/#path=/mail"},{"dateAdded":1501513131805,"id":"396","index":38,"parentId":"1","title":"Elon Musk’s Billion-Dollar Crusade to Stop the A.I. Apocalypse | Vanity Fair","url":"http://www.vanityfair.com/news/2017/03/elon-musk-billion-dollar-crusade-to-stop-ai-space-x"},{"dateAdded":1501598950487,"id":"399","index":39,"parentId":"1","title":"Bitdefender GravityZone","url":"https://10.17.46.104/"},{"dateAdded":1501598956915,"id":"398","index":40,"parentId":"1","title":"vSphere Web Client","url":"https://10.17.41.22/vsphere-client/?csp#extensionId%3Dvsphere.core.vm.gettingStarted%3Bcontext%3Dcom.vmware.core.model%253A%253AServerObjectRef~b1e38bf2-d367-4fdc-a25e-e57b8a9004f2%253AVirtualMachine%253Avm-2973~core"},{"dateAdded":1501598960468,"id":"397","index":41,"parentId":"1","title":"First Steps - Iulian LAZAR - Confluence","url":"https://confluence.bitdefender.biz/display/~ilazar/First+Steps#FirstSteps-NewVirtualMachine"},{"dateAdded":1502362785620,"id":"408","index":42,"parentId":"1","title":"10 Insanely Inspirational TED Talks - Self Thrive - StumbleUpon","url":"http://www.stumbleupon.com/su/6ZQHIC/:!bTlMGZu:h3t2QBYr/www.selfthrive.com/10-insanely-inspirational-ted-talks"},{"dateAdded":1503050393036,"id":"411","index":43,"parentId":"1","title":"Quarantine.Remote.SetSettings - Endpoint Security - Confluence","url":"https://confluence.bitdefender.biz/pages/viewpage.action?spaceKey=FREYA&title=Quarantine.Remote.SetSettings"},{"dateAdded":1505762567689,"id":"438","index":44,"parentId":"1","title":"Practical Machine Learning Tutorial with Python Intro p.1 - YouTube","url":"https://www.youtube.com/watch?v=OGxgnH8y2NM&list=PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v"},{"dateAdded":1509535934120,"id":"484","index":45,"parentId":"1","title":"Totally Crush GIF - Tenor GIF Keyboard - Bring Personality To Your Conversations | Say more with Tenor","url":"https://media1.tenor.co/images/ef06a7a3b9425fa9ec862d06de781413/tenor.gif?itemid=5511392"},{"dateAdded":1512408837293,"id":"487","index":46,"parentId":"1","title":"[A4] AI Chatbot","url":"https://sites.google.com/view/a4-ai-chatbot/home"}],"dateAdded":1492451064662,"dateGroupModified":1512486326913,"id":"1","index":0,"parentId":"0","title":"Bookmarks bar"},{"children":[{"dateAdded":1459002454374,"id":"9","index":0,"parentId":"2","title":"13 Short Stories With Unexpectedly Shocking Twists","url":"http://mashable.com/2014/07/06/short-stories-shocking-twists/?utm_cid=mash-com-fb-reads-link#VArzp83uusqV"},{"dateAdded":1460551869333,"id":"10","index":1,"parentId":"2","title":"The Orphanage Problem – Phenomena: Only Human","url":"http://phenomena.nationalgeographic.com/2013/07/31/the-orphanage-problem/"},{"dateAdded":1462029249376,"id":"11","index":2,"parentId":"2","title":"Squishy Earth - StumbleUpon","url":"http://www.stumbleupon.com/su/3674uO/:!bTlMAKq:qRmYpQM+/www.byronknoll.com/earth.html"},{"dateAdded":1462029601492,"id":"12","index":3,"parentId":"2","title":"Academic Earth - A world-class education at your fingertips - StumbleUpon","url":"http://www.stumbleupon.com/su/2HzJEW/:1NXDCKW!i:qRmYpQM+/academicearth.org"},{"dateAdded":1486494745187,"id":"13","index":4,"parentId":"2","title":"The art of cognitive blindspots | Kyle Eschen | TEDxVienna - Duration: 14:39. TEDx Talks 562,238 views","url":"https://www.youtube.com/watch?v=OOG65rSM5fA"}],"dateAdded":1492451064662,"dateGroupModified":1494351131167,"id":"2","index":1,"parentId":"0","title":"Other bookmarks"},{"children":[{"dateAdded":1458327980580,"id":"6","index":0,"parentId":"3","title":"Ap 1CD, Gara - Str Silvestru , et intermediar, cu CT propie Iasi • OLX.ro","url":"http://olx.ro/i2/oferta/ap-1cd-gara-str-silvestru-et-intermediar-cu-ct-propie-ID5SvKq.html#gallery"},{"dateAdded":1453038410776,"id":"7","index":1,"parentId":"3","title":"Photos from Marina Munteanu\'s post in Am prea multe haine. Le vand.","url":"https://m.facebook.com/photo.php?fbid=907345936002708&id=100001819296444&set=gm.1622347741360936&source=57"},{"dateAdded":1451249215329,"id":"8","index":2,"parentId":"3","title":"waitbutwhy.com/2014/02/pick-life-partner-part-2.html","url":"http://waitbutwhy.com/2014/02/pick-life-partner-part-2.html"}],"dateAdded":1492451064662,"dateGroupModified":1458327980580,"id":"3","index":2,"parentId":"0","title":"Mobile bookmarks"}],"dateAdded":1512486303596,"id":"0","title":""}]';
        console.log("dumping");
        var dummyArray = JSON.parse(dummyData);
        // let dummyArray = chrome.bookmarks.getTree(
        //   function (dummyArray) {
        var domItem = 'bookmarks-list';
        this.expandTree(dummyArray[0], domItem);
        //
        // });
    };
    ListViewComponent.prototype.expandTree = function (dummyArray, domItem) {
        jQuery('#' + domItem).append('<ul class="collapsible" data-collapsible="accordion">');
        var i;
        var rootNodes = dummyArray.children;
        for (i = 0; i < rootNodes.length; i++) {
            var classSelector = this.generateRandomId("asd");
            jQuery('#' + domItem + ' ul').append('  <li id="' + classSelector + '" >\n' +
                '    <div class="collapsible-header grey lighten-2">\n' +
                '      <i class="material-icons">folder</i>' + dummyArray.children[i].title + '\n' +
                '    </div>\n');
            var j = void 0;
            var currentArray = dummyArray.children[i].children;
            for (j = 0; j < currentArray.length; j++) {
                if (typeof currentArray[j].children == 'undefined') {
                    jQuery('#' + domItem + ' ul li').append('    <div class="collapsible-body">' +
                        '       <a target="_blank" href="' + currentArray[j].url + '">' + dummyArray.children[i].children[j].title +
                        '         </a>' +
                        '    </div>\n');
                }
                else {
                    // jQuery('#' + domItem + ' ul li').append(
                    //   '    <div class="collapsible-body" id="' + classSelector + '">' +
                    //   '       <a target="_blank" href="' + currentArray[j].url + '">' + dummyArray.children[i].children[j].title +
                    //   '</a>' +
                    //   '</div>\n'
                    // );
                    var newArray = currentArray[j];
                    // console.log("am dat de subfolder cu titlul:");
                    // console.log(currentArray[j].title);
                    //
                    // console.log("si lungimea:");
                    // console.log(currentArray[j].children.length);
                    this.expandRecursively(newArray, domItem, classSelector);
                }
            }
            jQuery('' + domItem + ' ul').append('  </li>');
        }
        jQuery('' + domItem).append('</ul>');
    };
    ListViewComponent.prototype.expandRecursively = function (dummyArray, item, classSelector) {
        var newSelector = this.generateRandomId(item);
        console.log("~~~~``");
        console.log(jQuery('#' + classSelector).length);
        jQuery('#' + classSelector).append(
        // '     <div id="' + newSelector + '">' +
        '          <div class="collapsible-header grey lighten-2">\n' +
            '             <i class="material-icons">folder</i>' + dummyArray.title + '\n' +
            '         </div>\n' +
            '         <div class="collapsible-body">' +
            '            <ul class="collapsible" data-collapsible="accordion">');
        var j;
        var currentChildren = dummyArray.children;
        for (j = 0; j < currentChildren.length; j++) {
            if (typeof currentChildren[j].children === 'undefined') {
                jQuery('#' + classSelector + ' ul').append(' <li' +
                    ' <div class="collapsible-header">\n' +
                    ' <i class="material-icons">filter_drama</i>Nested First</div>' +
                    ' <div class="collapsible-body"><p>' + currentChildren[j].title + '</p></div></li>\n');
            }
            else if (typeof currentChildren[j].children !== 'undefined') {
                // console.log(currentChildren[j].children)
                var classSelector_1 = this.generateRandomId("asd");
                // this.expandRecursively(currentChildren[j], newSelector, classSelector)
                //
                // console.log("am dat de subfolder cu titlul:");
                // console.log(currentChildren[j].title);
                //
                // console.log("si lungimea:");
                // console.log(currentChildren[j].children.length);
            }
        }
        jQuery('#' + classSelector).append(
        // '</div>' +
        ' </ul>');
    };
    ListViewComponent.prototype.generateRandomId = function (domItem) {
        var randomNumber = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
        return domItem + randomNumber;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], ListViewComponent.prototype, "onDocumentClick", null);
    ListViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'list-view',
            template: __webpack_require__("../../../../../src/app/views/list-view/list-view.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ListViewComponent);
    return ListViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/pie-chart/pie-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display: block\">\n\t<canvas baseChart\n\t[data]=\"pieChartData\"\n\t[labels]=\"pieChartLabels\"\n\t[chartType]=\"pieChartType\"\n\t(chartHover)=\"chartHovered($event)\"\n\t(chartClick)=\"chartClicked($event)\"></canvas>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/pie-chart/pie-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hivi_service__ = __webpack_require__("../../../../../src/app/views/hivi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PieChartComponent = (function () {
    function PieChartComponent(hiviService) {
        this.hiviService = hiviService;
    }
    PieChartComponent.prototype.ngOnInit = function () {
        this.hiviService.dumpBookmarks();
        this.pieChartLabels = this.hiviService.getPieChartsLabels();
        this.pieChartData = this.hiviService.getPieChartData();
        this.pieChartType = 'pie';
    };
    PieChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    PieChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    PieChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pie-chart',
            template: __webpack_require__("../../../../../src/app/views/pie-chart/pie-chart.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hivi_service__["a" /* HiviService */]])
    ], PieChartComponent);
    return PieChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/side-menu/assets/logo_with_text.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/app/views/side-menu/side-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header, main, footer {\n  padding-left: 300px;\n}\n\n@media only screen and (max-width: 992px) {\n  header, main, footer {\n    padding-left: 0;\n  }\n}\n\n.logo-with-text {\n\n\twidth: 90%;\n\tpadding-left: 1em;\n\tpadding-top: 0.5em;\n\tmargin-bottom: 3em;\n}\n\n.side-nav {\n  width: 8em;\n}\n\n.menu-button {\n\tpadding-top: 2em;\n\tpadding-bottom: 6em;\n}\n\n.export-button {\n\tmargin-top: 6em;\n}\n\n.view:hover {\n  background-color: #e0e0e0 ;\n}\n\n.view:link {\n  background-color: #e0e0e0 ;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/side-menu/side-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul id=\"slide-out\" class=\"side-nav fixed\">\n  <div class=\"side-menu-icons nav-wrapper\">\n    <ul class=\"logo-with-text\">\n      <li><img [src]=\"logo\" class=\"responsive-img\"/>\n      </li>\n    </ul>\n    <li class=\"view\" (click)=\"displayListView()\">\n      <a class=\"menu-button\">\n        <i class=\"medium material-icons\">list</i>\n      </a>\n    </li>\n    <li class=\"view\" (click)=\"displayBarChart()\">\n      <a class=\"menu-button\">\n        <i class=\"medium material-icons\">insert_chart</i>\n      </a>\n    </li>\n    <li class=\"view\" (click)=\"displayPieChart()\">\n      <a class=\"menu-button\">\n        <i class=\"medium material-icons\">pie_chart</i>\n      </a>\n    </li>\n  </div>\n</ul>\n<a data-activates=\"slide-out\" class=\"a-collapse show-on-large\" (click)=\"showSideMenu()\">\n  <i class=\"material-icons\">menu</i>\n</a>\n\n<script type=\"text/javascript\">\n  $(\".a-collapse\").sideNav();\n</script>\n"

/***/ }),

/***/ "../../../../../src/app/views/side-menu/side-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideMenuComponent = (function () {
    function SideMenuComponent(elementRef) {
        this.elementRef = elementRef;
        this.logo = __webpack_require__("../../../../../src/app/views/side-menu/assets/logo_with_text.png");
        this.notifyThatSideMenuChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SideMenuComponent.prototype.showSideMenu = function () {
        jQuery(this.elementRef.nativeElement).find('.a-collapse').sideNav();
        jQuery(this.elementRef.nativeElement).find('.a-collapse').sideNav('show');
        console.log("Menu button has been pressed.");
    };
    SideMenuComponent.prototype.displayListView = function () {
        this.notifyThatSideMenuChanged.emit("list");
        console.log("Pressed the list button.");
    };
    SideMenuComponent.prototype.displayPieChart = function () {
        this.notifyThatSideMenuChanged.emit("pie");
        console.log("Pressed the pie button.");
    };
    SideMenuComponent.prototype.displayBarChart = function () {
        this.notifyThatSideMenuChanged.emit("bar");
        console.log("Pressed the bar button.");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SideMenuComponent.prototype, "notifyThatSideMenuChanged", void 0);
    SideMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'side-menu',
            template: __webpack_require__("../../../../../src/app/views/side-menu/side-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/side-menu/side-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/views.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".export-button {\n\tmargin-bottom: 1em;\n}\n\n.settings-button {\n  padding-bottom: 1em;\n\t/*padding-top: 1em;*/\n\tmargin-top: 1em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/views.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div class=\"row\">\n\t\t<div class=\"col s1\">\n\t\t\t<side-menu (notifyThatSideMenuChanged)=\"updateAfterSideMenuSelectionChanged($event)\"></side-menu>\n\t\t</div>\n\t\t<div class=\"col s9 offset-s1 m6 offset-m1 l9 offset-l1\">\n\t\t\t<date-filter (notifyThatSelectedFilterChanged)=\"updateAfterDateFilterValueChanged($event)\"></date-filter>\n\t\t</div>\n\t\t<div class=\"col s1 m1 l1 settings-button\">\n\t\t\t<a routerLink=\"/settings\" routerLinkActive=\"active\" class=\"btn-floating btn-medium menu 26a69a\"><i\n\t\t\t\tclass=\"material-icons\">more_vert</i>\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"col s10 offset-s1 m6 offset-m1 l10 offset-l1\">\n\t\t\t<div *ngIf=\"whatViewToDisplay=='pie'\">\n\t\t\t\t<pie-chart></pie-chart>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"whatViewToDisplay=='list'\">\n\t\t\t\t<list-view></list-view>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"whatViewToDisplay=='bar'\">\n\t\t\t\t<bar-chart></bar-chart>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"whatViewToDisplay=='pie' || whatViewToDisplay=='bar'\" class=\"fixed-action-btn\">\n\t\t<a class=\"btn-floating btn-large teal darken-4 export-button\">\n\t\t\t<i class=\"material-icons\">save</i>\n\t\t</a>\n\t\t<ul>\n\t\t\t<a class=\"export-button btn-floating teal lighten-1\" (click)=\"downloadCanvasAsPNG($event)\">PNG</a>\n\t\t\t<a class=\"export-button btn-floating teal darken-2\" (click)=\"downloadCanvasAsJPEG($event)\">JPEG</a>\n\t\t</ul>\n\t</div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/views/views.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_excluded_domains_excluded_domains_service__ = __webpack_require__("../../../../../src/app/settings/excluded-domains/excluded-domains.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewsComponent = (function () {
    function ViewsComponent(domainsService) {
        this.domainsService = domainsService;
        this.whatViewToDisplay = "pie";
        this.selectedFilter = "TODAY";
    }
    ViewsComponent.prototype.ngOnInit = function () {
        this.getExcludedDomains();
        console.log("ViewsComponent: excludedDomains = " + this.excludedDomains);
    };
    ViewsComponent.prototype.getExcludedDomains = function () {
        var _this = this;
        this.domainsService.getExcludedDomains()
            .subscribe(function (results) { return _this.excludedDomains = results; });
    };
    ViewsComponent.prototype.updateAfterSideMenuSelectionChanged = function (sideMenuSelectionValue) {
        this.whatViewToDisplay = sideMenuSelectionValue;
        console.log("ViewsComponent: what to display = " + this.whatViewToDisplay);
    };
    ViewsComponent.prototype.updateAfterDateFilterValueChanged = function (dateFilterValue) {
        this.selectedFilter = dateFilterValue;
        console.log("ViewsComponent: selected filter = " + this.selectedFilter);
    };
    ViewsComponent.prototype.downloadCanvasAsPNG = function (event) {
        var anchor = event.target;
        anchor.href = document.getElementsByTagName('canvas')[0].toDataURL();
        anchor.download = "image.png";
    };
    /*
    JPEG format does not suport fully-transparent background, so the canvas must
    be filled with a color in order to download as JPEG.
    */
    ViewsComponent.prototype.downloadCanvasAsJPEG = function (event) {
        var anchor = event.target;
        var canvas = document.getElementsByTagName('canvas')[0];
        var canvasContext = canvas.getContext('2d');
        canvasContext.fillStyle = 'rgba(255,255,255, 0.3)';
        canvasContext.fillRect(0, 0, canvas.width * 2, canvas.height * 2);
        anchor.href = document.getElementsByTagName('canvas')[0].toDataURL("image/jpeg");
        anchor.download = "image.jpeg";
    };
    ViewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'views',
            template: __webpack_require__("../../../../../src/app/views/views.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/views.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__settings_excluded_domains_excluded_domains_service__["a" /* ExcludedDomainsService */]])
    ], ViewsComponent);
    return ViewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/views.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings_module__ = __webpack_require__("../../../../../src/app/settings/settings.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_component__ = __webpack_require__("../../../../../src/app/views/views.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__side_menu_side_menu_component__ = __webpack_require__("../../../../../src/app/views/side-menu/side-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__date_filter_date_filter_component__ = __webpack_require__("../../../../../src/app/views/date-filter/date-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pie_chart_pie_chart_component__ = __webpack_require__("../../../../../src/app/views/pie-chart/pie-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bar_chart_bar_chart_component__ = __webpack_require__("../../../../../src/app/views/bar-chart/bar-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__list_view_list_view_component__ = __webpack_require__("../../../../../src/app/views/list-view/list-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__hivi_service__ = __webpack_require__("../../../../../src/app/views/hivi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__settings_excluded_domains_excluded_domains_service__ = __webpack_require__("../../../../../src/app/settings/excluded-domains/excluded-domains.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    {
        path: 'views',
        component: __WEBPACK_IMPORTED_MODULE_5__views_component__["a" /* ViewsComponent */]
    }
];
var ViewsModule = (function () {
    function ViewsModule() {
    }
    ViewsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__side_menu_side_menu_component__["a" /* SideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_7__date_filter_date_filter_component__["a" /* DateFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pie_chart_pie_chart_component__["a" /* PieChartComponent */],
                __WEBPACK_IMPORTED_MODULE_9__bar_chart_bar_chart_component__["a" /* BarChartComponent */],
                __WEBPACK_IMPORTED_MODULE_10__list_view_list_view_component__["a" /* ListViewComponent */],
                __WEBPACK_IMPORTED_MODULE_5__views_component__["a" /* ViewsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_4__settings_settings_module__["a" /* SettingsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__hivi_service__["a" /* HiviService */],
                __WEBPACK_IMPORTED_MODULE_13__settings_excluded_domains_excluded_domains_service__["a" /* ExcludedDomainsService */]
            ]
        })
    ], ViewsModule);
    return ViewsModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map