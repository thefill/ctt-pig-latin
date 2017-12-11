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

module.exports = "<!-- Header -->\n<ctt-header\n    [toolbarTitle]=\"title\"\n    [toolbarTitleIcon]=\"icon\"\n    [(buttonToggle)]=\"sidenavVisible\">\n</ctt-header>\n\n<!-- Navigation with wrapped main content-->\n<ctt-navigation\n    [(show)]=\"sidenavVisible\">\n    <!-- Main content -->\n    <ng-container>\n        <!-- Content provided via router -->\n        <router-outlet></router-outlet>\n    </ng-container>\n</ctt-navigation>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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
        // app title
        this.title = 'Pig latin';
        // app icon
        this.icon = 'cached';
        // is sidenav visible?
        this.sidenavVisible = false;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ctt-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_header__ = __webpack_require__("../../../../../src/app/modules/header/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_material_theme__ = __webpack_require__("../../../../../src/app/modules/material-theme/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_navigation__ = __webpack_require__("../../../../../src/app/modules/navigation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_routing__ = __webpack_require__("../../../../../src/app/modules/routing/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_sentence_translator__ = __webpack_require__("../../../../../src/app/modules/sentence-translator/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_settings__ = __webpack_require__("../../../../../src/app/modules/settings/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_history__ = __webpack_require__("../../../../../src/app/modules/history/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                // WebAnimation API polyfill
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                // Material aggregate module for material components
                __WEBPACK_IMPORTED_MODULE_5__modules_material_theme__["a" /* MaterialThemeModule */],
                // Routing module
                __WEBPACK_IMPORTED_MODULE_8__modules_routing__["a" /* RoutingModule */],
                // Main header module
                __WEBPACK_IMPORTED_MODULE_4__modules_header__["a" /* HeaderModule */],
                // Main navigation module
                __WEBPACK_IMPORTED_MODULE_6__modules_navigation__["a" /* NavigationModule */],
                // Translator module
                __WEBPACK_IMPORTED_MODULE_9__modules_sentence_translator__["b" /* SentenceTranslatorModule */],
                // Settings module
                __WEBPACK_IMPORTED_MODULE_10__modules_settings__["b" /* SettingsModule */],
                // History module
                __WEBPACK_IMPORTED_MODULE_11__modules_history__["b" /* HistoryModule */],
            ],
            providers: [
                // utils for procedurally handling mediaQueries
                __WEBPACK_IMPORTED_MODULE_7__angular_cdk_layout__["d" /* MediaMatcher */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <!-- Title & icon -->\n    <mat-icon>{{ toolbarTitleIcon }}</mat-icon>\n    <h1 class=\"mat-display-1 fill-remaining-space\">{{ toolbarTitle }}</h1>\n\n    <!-- Side-menu toggle -->\n    <button class=\"side-nav-toggle\" mat-raised-button (click)=\"toggle()\">\n        <ng-container *ngIf=\"buttonToggle\">\n            <mat-icon>{{ buttonIconToggle }}</mat-icon>\n            {{ buttonLabelToggle }}\n        </ng-container>\n        <ng-container *ngIf=\"!buttonToggle\">\n            <mat-icon>{{ buttonIcon }}</mat-icon>\n            {{ buttonLabel }}\n        </ng-container>\n    </button>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/modules/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n.fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.side-nav-toggle {\n  color: #673ab7; }\n\n.mat-icon {\n  margin-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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

/**
 * Main app header component
 */
var HeaderComponent = (function () {
    function HeaderComponent() {
        // title & icon
        this.toolbarTitle = 'Toolbar title';
        this.toolbarTitleIcon = 'help_outline';
        // button label & icon: toggled state
        this.buttonIconToggle = 'close';
        this.buttonLabelToggle = 'Menu';
        // button label & icon: default state
        this.buttonIcon = 'menu';
        this.buttonLabel = 'Menu';
        // toggle state
        this.buttonToggle = false;
        this.buttonToggleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    /**
     * Toggle & emit change
     */
    HeaderComponent.prototype.toggle = function () {
        this.buttonToggle = !this.buttonToggle;
        this.buttonToggleChange.emit(this.buttonToggle);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "toolbarTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "toolbarTitleIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "buttonIconToggle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "buttonLabelToggle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "buttonIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "buttonLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "buttonToggle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], HeaderComponent.prototype, "buttonToggleChange", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ctt-header',
            template: __webpack_require__("../../../../../src/app/modules/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_theme__ = __webpack_require__("../../../../../src/app/modules/material-theme/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_component__ = __webpack_require__("../../../../../src/app/modules/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * Module for the main app header
 */
var HeaderModule = (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__material_theme__["a" /* MaterialThemeModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__header_component__["a" /* HeaderComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__header_component__["a" /* HeaderComponent */]
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__("../../../../../src/app/modules/header/header.component.ts");
/* unused harmony reexport HeaderComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_module__ = __webpack_require__("../../../../../src/app/modules/header/header.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__header_module__["a"]; });




/***/ }),

/***/ "../../../../../src/app/modules/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- If history entries does not exist -->\n<mat-grid-list cols=\"1\" rowHeight=\"70px\" *ngIf=\"!history.length\">\n\n    <mat-grid-tile>\n        <mat-card class=\"no-entries\">\n            <mat-card-content>\n                No history of translations.\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n\n</mat-grid-list>\n\n<!-- If history entries exists -->\n<mat-accordion>\n    <mat-expansion-panel *ngFor=\"let entry of history\">\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                Translation entry\n            </mat-panel-title>\n            <mat-panel-description>\n                Created: {{ entry.timestamp | date: 'medium' }}\n            </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <!-- Input -->\n        <label>Input:</label>\n        <div class=\"input\">\n            <p>{{ entry.input }}</p>\n        </div>\n\n        <!-- Output -->\n        <label>Output:</label>\n        <div class=\"output\">\n            <p>{{ entry.output }}</p>\n        </div>\n\n        <mat-card-actions>\n            <button mat-raised-button color=\"warn\"\n                    (click)=\"removeHistoryEntry(entry.timestamp)\">\n                Remove entry\n            </button>\n        </mat-card-actions>\n    </mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "../../../../../src/app/modules/history/history.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  display: block; }\n\n.input {\n  margin-bottom: 10px; }\n\n.input,\n.output {\n  background: #e4e4e4; }\n  .input p,\n  .output p {\n    max-height: 200px;\n    overflow: auto;\n    padding: 20px; }\n\n.date {\n  margin-left: 10px;\n  border-left: 1px solid #cfcfcf;\n  padding-left: 10px; }\n\n.no-entries {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history_service__ = __webpack_require__("../../../../../src/app/modules/history/history.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryComponent = (function () {
    function HistoryComponent(historyService) {
        this.historyService = historyService;
    }
    Object.defineProperty(HistoryComponent.prototype, "history", {
        get: function () {
            return this.historyService.historyStore;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Remove entry by timestamp
     */
    HistoryComponent.prototype.removeHistoryEntry = function (timestamp) {
        this.historyService.removeEntry(timestamp);
    };
    HistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ctt-history',
            template: __webpack_require__("../../../../../src/app/modules/history/history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/history/history.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__history_service__["a" /* HistoryService */]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/history/history.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_component__ = __webpack_require__("../../../../../src/app/modules/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_theme__ = __webpack_require__("../../../../../src/app/modules/material-theme/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_service__ = __webpack_require__("../../../../../src/app/modules/history/history.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings__ = __webpack_require__("../../../../../src/app/modules/settings/index.ts");
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
 * Module for history list part of app
 */
var HistoryModule = (function () {
    function HistoryModule() {
    }
    HistoryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_theme__["a" /* MaterialThemeModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__history_service__["a" /* HistoryService */],
                __WEBPACK_IMPORTED_MODULE_5__settings__["c" /* SettingsService */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__history_component__["a" /* HistoryComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__history_component__["a" /* HistoryComponent */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HistoryModule);
    return HistoryModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/history/history.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__("../../../../../src/app/modules/settings/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryService = (function () {
    function HistoryService(settingsService) {
        this.settingsService = settingsService;
        // array of entries
        this._historyStore = [];
    }
    Object.defineProperty(HistoryService.prototype, "historyStore", {
        get: function () {
            return this._historyStore;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add entry to the store
     */
    HistoryService.prototype.addEntry = function (input, output) {
        // get timestamp
        var timestamp = Date.now();
        // if over the limit remove first entry first
        if (this._historyStore.length >= this.settingsService.historyLimit) {
            this._historyStore.shift();
        }
        // add to store
        this._historyStore.push({
            timestamp: timestamp,
            input: input,
            output: output
        });
    };
    /**
     * Remove from store by timestamp
     */
    HistoryService.prototype.removeEntry = function (timestamp) {
        // find entry with timestamp and remove
        var index = this._historyStore.findIndex(function (entry) {
            return entry.timestamp === timestamp;
        });
        // if entry found
        if (index > -1) {
            // remove
            this._historyStore.splice(index, 1);
        }
    };
    HistoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__settings__["c" /* SettingsService */]])
    ], HistoryService);
    return HistoryService;
}());



/***/ }),

/***/ "../../../../../src/app/modules/history/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__history_component__ = __webpack_require__("../../../../../src/app/modules/history/history.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__history_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history_module__ = __webpack_require__("../../../../../src/app/modules/history/history.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__history_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_service__ = __webpack_require__("../../../../../src/app/modules/history/history.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__history_service__["a"]; });





/***/ }),

/***/ "../../../../../src/app/modules/material-theme/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_theme_module__ = __webpack_require__("../../../../../src/app/modules/material-theme/material-theme.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__material_theme_module__["a"]; });



/***/ }),

/***/ "../../../../../src/app/modules/material-theme/material-theme.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialThemeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Barrel module for Material components import
 */
var MaterialThemeModule = (function () {
    function MaterialThemeModule() {
    }
    MaterialThemeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSlideToggleModule */]
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSlideToggleModule */]
            ]
        })
    ], MaterialThemeModule);
    return MaterialThemeModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/navigation/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navigation_component__ = __webpack_require__("../../../../../src/app/modules/navigation/navigation.component.ts");
/* unused harmony reexport NavigationComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_module__ = __webpack_require__("../../../../../src/app/modules/navigation/navigation.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__navigation_module__["a"]; });




/***/ }),

/***/ "../../../../../src/app/modules/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"main-container\"\n                       (backdropClick)=\"onHide()\">\n    <!-- Sidenav -->\n    <mat-sidenav\n        class=\"sidenav\"\n        position=\"end\"\n        [mode]=\"mobileQuery.matches ? 'over' : 'push'\"\n        [(opened)]=\"show\"\n        [fixedInViewport]=\"true\"\n        [fixedTopGap]=\"mobileQuery.matches ? 56 : 64\"\n    >\n        <!-- Sidenav content -->\n        <ng-container class=\"sidenav-content\">\n            <ul class=\"sidenav-list\" #sidenavList>\n                <!-- Generate links based on provided data -->\n                <li *ngFor=\"let routeLink of routeLinks\">\n                    <a class=\"sidenav-link\" mat-button [routerLink]=\"routeLink.path\">{{ routeLink.label }}</a>\n                </li>\n            </ul>\n        </ng-container>\n    </mat-sidenav>\n\n    <!-- Main content-->\n    <mat-sidenav-content>\n        <div class=\"content-wrapper\">\n            <!-- Project content from outside -->\n            <ng-content></ng-content>\n        </div>\n    </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/modules/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  position: absolute;\n  top: 64px;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n  @media (max-width: 600px) {\n    :host {\n      top: 56px; } }\n\n.main-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.sidenav-list {\n  list-style: none;\n  padding-left: 0;\n  min-width: 180px;\n  text-align: center; }\n  .sidenav-list li > a {\n    width: 100%; }\n\nmat-sidenav-content {\n  padding: 30px;\n  height: calc(100% - 64px); }\n  @media (max-width: 600px) {\n    mat-sidenav-content {\n      height: calc(100% - 56px); } }\n  mat-sidenav-content .content-wrapper {\n    background: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routing__ = __webpack_require__("../../../../../src/app/modules/routing/index.ts");
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
 * Main navigation component
 */
var NavigationComponent = (function () {
    function NavigationComponent(changeDetector, media) {
        // Should we show sidenav
        this.show = false;
        this.showChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        // create ling data object
        this.routeLinks = __WEBPACK_IMPORTED_MODULE_2__routing__["b" /* globalRoutes */].map(function (route) {
            return {
                label: route.data['routeTitle'],
                path: route.path
            };
        });
        // Handle mediaQueries change
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetector.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to the click event to hide sidebar on navigation event
        this.sidenavList.nativeElement
            .addEventListener('click', function () {
            _this.hide();
        });
    };
    /**
     * Callback on component destroy event
     */
    NavigationComponent.prototype.ngOnDestroy = function () {
        // clean listeners
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    /**
     * Callback on sidenav internal hide event e.g. when backdrop clicked
     */
    NavigationComponent.prototype.onHide = function () {
        this.showChange.emit(false);
    };
    /**
     * Close sidenav
     */
    NavigationComponent.prototype.hide = function () {
        this.show = false;
        this.onHide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "show", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], NavigationComponent.prototype, "showChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('sidenavList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], NavigationComponent.prototype, "sidenavList", void 0);
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ctt-navigation',
            template: __webpack_require__("../../../../../src/app/modules/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["d" /* MediaMatcher */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/navigation/navigation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_component__ = __webpack_require__("../../../../../src/app/modules/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_theme__ = __webpack_require__("../../../../../src/app/modules/material-theme/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routing__ = __webpack_require__("../../../../../src/app/modules/routing/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/**
 * Module for the main app navigation
 */
var NavigationModule = (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_theme__["a" /* MaterialThemeModule */],
                __WEBPACK_IMPORTED_MODULE_5__routing__["a" /* RoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__angular_cdk_layout__["d" /* MediaMatcher */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__navigation_component__["a" /* NavigationComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__navigation_component__["a" /* NavigationComponent */]
            ]
        })
    ], NavigationModule);
    return NavigationModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/routing/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_module__ = __webpack_require__("../../../../../src/app/modules/routing/routing.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__routing_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__routing_module__["b"]; });



/***/ }),

/***/ "../../../../../src/app/modules/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return globalRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("../../../../../src/app/modules/settings/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history__ = __webpack_require__("../../../../../src/app/modules/history/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sentence_translator__ = __webpack_require__("../../../../../src/app/modules/sentence-translator/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Object with all app routes
var globalRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__sentence_translator__["a" /* SentenceTranslatorComponent */],
        data: {
            routeTitle: 'Translator'
        }
    },
    {
        path: 'history',
        component: __WEBPACK_IMPORTED_MODULE_3__history__["a" /* HistoryComponent */],
        data: {
            routeTitle: 'Translation history'
        }
    },
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsComponent */],
        data: {
            routeTitle: 'Settings'
        }
    }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(globalRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/sentence-translator/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sentence_translator_component__ = __webpack_require__("../../../../../src/app/modules/sentence-translator/sentence-translator.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sentence_translator_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sentence_translator_module__ = __webpack_require__("../../../../../src/app/modules/sentence-translator/sentence-translator.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__sentence_translator_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sentence_translator_service__ = __webpack_require__("../../../../../src/app/modules/sentence-translator/sentence-translator.service.ts");
/* unused harmony reexport SentenceTranslatorService */





/***/ }),

/***/ "../../../../../src/app/modules/sentence-translator/sentence-translator.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Auto-toggle button -->\n<button class=\"auto-translate\"\n        mat-mini-fab color=\"accent\"\n        [class.active]=\"autoTranslate\"\n        *ngIf=\"autoTranslateAllowed\"\n        (click)=\"autoTranslate = !autoTranslate\"\n        title=\"Switch on / off auto-translation\">\n    <mat-icon>cached</mat-icon>\n</button>\n\n<!-- Grid -->\n<mat-grid-list cols=\"2\" rowHeight=\"fit\">\n\n    <!-- Source -->\n    <mat-grid-tile>\n        <mat-card class=\"source\">\n            <mat-card-header class=\"border-bottom\">\n                <mat-card-title>\n                    Sentence / word to translate\n                </mat-card-title>\n                <mat-card-subtitle>\n                    You can provide any sentence / word and use any common punctuation characters.\n                </mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content class=\"input\">\n                <mat-form-field\n                    hintLabel=\"Max 500 characters\"\n                    floatLabel=\"auto\">\n                    <mat-label>Sentence or word</mat-label>\n                    <textarea matInput #sourceInput\n                              placeholder=\"Provide content for translation\"\n                              maxlength=\"500\"\n                              value=\"\"\n                              matTextareaAutosize\n                              matAutosizeMinRows=\"8\"\n                              matAutosizeMaxRows=\"13\"\n                              (change)=\"autoTranslate && translate()\">\n                        </textarea>\n                    <mat-hint align=\"end\">\n                        {{sourceInput.value?.length || 0}}/500\n                    </mat-hint>\n                </mat-form-field>\n            </mat-card-content>\n            <mat-card-actions>\n                <button mat-raised-button\n                        (click)=\"sourceInput.value=''\">\n                    Clear\n                </button>\n                <button mat-raised-button color=\"primary\"\n                        *ngIf=\"!autoTranslate\"\n                        (click)=\"translate()\">\n                    Translate content\n                </button>\n            </mat-card-actions>\n        </mat-card>\n    </mat-grid-tile>\n\n    <!-- Result -->\n    <mat-grid-tile>\n        <mat-card class=\"result\">\n            <mat-card-header class=\"border-bottom\">\n                <mat-card-title>\n                    Translation result\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content class=\"output\">\n                <p #resultOutput [innerText]=\"translation\"></p>\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "../../../../../src/app/modules/sentence-translator/sentence-translator.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  display: block; }\n\n.auto-translate {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  padding: 0;\n  z-index: 20; }\n\nmat-grid-list {\n  min-height: 600px; }\n\nmat-card-content.output {\n  height: calc(100% - 60px);\n  overflow: auto; }\n\n.active {\n  background-color: #ff8d28;\n  transition: background-color 1s ease; }\n  .active mat-icon {\n    -webkit-animation: rotation 2s infinite linear;\n            animation: rotation 2s infinite linear; }\n\n@-webkit-keyframes rotation {\n  from {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg); }\n  to {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n\n@keyframes rotation {\n  from {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg); }\n  to {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/sentence-translator/sentence-translator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentenceTranslatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sentence_translator_service__ = __webpack_require__("../../../../../src/app/modules/sentence-translator/sentence-translator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("../../../../../src/app/modules/settings/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SentenceTranslatorComponent = (function () {
    function SentenceTranslatorComponent(translatorService, settingsService) {
        this.translatorService = translatorService;
        this.settingsService = settingsService;
        this.translation = '';
        // Handle auto-translate
        this._autoTranslate = false;
        // set initial setting
        this._autoTranslate = this.settingsService.autoTranslateEnabled;
    }
    Object.defineProperty(SentenceTranslatorComponent.prototype, "autoTranslateAllowed", {
        // is auto-translate allowed
        get: function () {
            return this.settingsService.autoTranslateAllowed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SentenceTranslatorComponent.prototype, "autoTranslate", {
        get: function () {
            return this._autoTranslate;
        },
        set: function (value) {
            this._autoTranslate = value;
            // notify service
            this.settingsService.autoTranslateEnabled = value;
        },
        enumerable: true,
        configurable: true
    });
    SentenceTranslatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // link source to service
        this.translatorService.linkToSource(this.sourceInput);
        // subscribe to the translation stream
        this.translatorService.translationStream.subscribe(function (result) {
            // set new result
            _this.translation = result;
        });
    };
    SentenceTranslatorComponent.prototype.ngAfterViewInit = function () {
        // set initial setting
        this._autoTranslate = this.settingsService.autoTranslateEnabled;
    };
    /**
     * Translate content
     */
    SentenceTranslatorComponent.prototype.translate = function () {
        this.translatorService.triggerTranslate();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('sourceInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SentenceTranslatorComponent.prototype, "sourceInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('resultOutput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SentenceTranslatorComponent.prototype, "resultOutput", void 0);
    SentenceTranslatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ctt-sentence-translator',
            template: __webpack_require__("../../../../../src/app/modules/sentence-translator/sentence-translator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/sentence-translator/sentence-translator.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sentence_translator_service__["a" /* SentenceTranslatorService */],
            __WEBPACK_IMPORTED_MODULE_2__settings__["c" /* SettingsService */]])
    ], SentenceTranslatorComponent);
    return SentenceTranslatorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/sentence-translator/sentence-translator.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentenceTranslatorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sentence_translator_component__ = __webpack_require__("../../../../../src/app/modules/sentence-translator/sentence-translator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_theme__ = __webpack_require__("../../../../../src/app/modules/material-theme/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sentence_translator_service__ = __webpack_require__("../../../../../src/app/modules/sentence-translator/sentence-translator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history__ = __webpack_require__("../../../../../src/app/modules/history/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings__ = __webpack_require__("../../../../../src/app/modules/settings/index.ts");
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
 * Module for sentence-translator part of app
 */
var SentenceTranslatorModule = (function () {
    function SentenceTranslatorModule() {
    }
    SentenceTranslatorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_theme__["a" /* MaterialThemeModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__sentence_translator_service__["a" /* SentenceTranslatorService */],
                __WEBPACK_IMPORTED_MODULE_6__settings__["c" /* SettingsService */],
                __WEBPACK_IMPORTED_MODULE_5__history__["c" /* HistoryService */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sentence_translator_component__["a" /* SentenceTranslatorComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__sentence_translator_component__["a" /* SentenceTranslatorComponent */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], SentenceTranslatorModule);
    return SentenceTranslatorModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/sentence-translator/sentence-translator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentenceTranslatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__("../../../../../src/app/modules/settings/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__("../../../../../src/app/modules/history/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_skipWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/skipWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_debounce__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SentenceTranslatorService = (function () {
    function SentenceTranslatorService(settingsService, historyService) {
        this.settingsService = settingsService;
        this.historyService = historyService;
        // manual translation triggered
        this.isManulaTrigger = false;
    }
    /**
     * Connect to the source
     */
    SentenceTranslatorService.prototype.linkToSource = function (source) {
        var _this = this;
        // save source
        this.source = source;
        // hook to the source change event
        this.translationStream = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */]
            .fromEvent(source.nativeElement, 'keyup')
            .filter(function (event) {
            // if auto-translation allowed & enabled
            if (_this.settingsService.autoTranslateAllowed && _this.settingsService.autoTranslateEnabled) {
                // pass event
                return true;
            }
            // if auto-translate disabled & manual trigger
            if (!_this.settingsService.autoTranslateEnabled && _this.isManulaTrigger) {
                // disable manual trigger flag
                _this.isManulaTrigger = false;
                // pass event
                return true;
            }
            // else block event
            return false;
        })
            .map(function (event) {
            return event.target.value;
        })
            .distinctUntilChanged()
            .debounce(function () {
            // if auto-translation allowed & enabled
            if (_this.settingsService.autoTranslateAllowed && _this.settingsService.autoTranslateEnabled) {
                // debounce event
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].timer(600);
            }
            // else pass quickly
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].timer(0);
        })
            .map(function (value) {
            // pass translated result
            return _this.translate(value);
        });
    };
    /**
     * Manual translation
     */
    SentenceTranslatorService.prototype.triggerTranslate = function () {
        // its a manual trigger
        this.isManulaTrigger = true;
        // trigger event from source on every key-press
        this.source.nativeElement.dispatchEvent(new Event('keyup'));
    };
    /**
     * Use translation rules & modify provided string
     */
    SentenceTranslatorService.prototype.translate = function (value) {
        var _this = this;
        // backup whitespaces and punctuation
        var backupElements;
        var backupPattern;
        var words;
        // We will need to check if any extra character has been backed up in
        // the start and end
        var backupStartPattern;
        var backupEndPattern;
        var prefixCollected = false;
        var suffixCollected = false;
        // if we respect punctuation
        if (this.settingsService.respectPunctuation) {
            // backup punctuation same as whitespaces
            backupPattern = /[\s\.\;\,\-\:\'\"\/]+/g;
            backupStartPattern = /^[\s\.\;\,\-\:\'\"\/]+/g;
            backupEndPattern = /[\s\.\;\,\-\:\'\"\/]+$/g;
        }
        else {
            // backup only whitespaces
            backupPattern = /[\s]+/g;
            backupStartPattern = /^[\s\.\;\,\-\:\'\"\/]+/g;
            backupEndPattern = /[\s\.\;\,\-\:\'\"\/]+$/g;
        }
        backupElements = value.match(backupPattern);
        // lets check if we backed up any characters at the start or end of string
        prefixCollected = backupStartPattern.test(value);
        suffixCollected = backupEndPattern.test(value);
        // remove backed-up elements and get only words
        words = value
            .replace(backupStartPattern, '')
            .replace(backupEndPattern, '')
            .split(backupPattern);
        // for each of the word apply transformation
        words = words.map(function (word) {
            // Execute first matching rule
            _this.settingsService.translationRules.some(function (rule) {
                var capitalised = false;
                // if we preserve capitalisation
                if (_this.settingsService.preserveCapitalisation) {
                    // is capitalised?
                    capitalised = word[0] === word[0].toUpperCase();
                }
                // word to lower-case
                word = word.toLowerCase();
                var match = rule.predicate.exec(word);
                // if match apply translation
                if (match) {
                    // if we move matched partial to the end of the word
                    if (rule.needleToTheEnd) {
                        var matchedPartial = match[0];
                        // remove p
                        word = word.substring(matchedPartial.length) + matchedPartial;
                    }
                    // if suffix provided
                    if (rule.suffix && rule.suffix.length) {
                        // add it at the end
                        word += rule.suffix;
                    }
                    // if capitalised
                    if (capitalised) {
                        word = word[0].toUpperCase() + word.substring(word[0].length);
                    }
                    // stop searching for the rule - we have found correct one
                    return true;
                }
                // check another rule
                return false;
            });
            return word;
        });
        // we have all words translated - now lets rebuild sentence from the backup
        // If we collected anything at the begin and end of string - lets handle that
        var prefix = '';
        if (prefixCollected) {
            prefix = backupElements.shift();
        }
        var suffix = '';
        if (suffixCollected) {
            suffix = backupElements.pop();
        }
        // now there should be less backed elements than words
        var translation = '';
        for (var i = 0; i < words.length; i++) {
            translation += words[i];
            // if not the last word - we still have backed entries
            if (i + 1 < words.length) {
                translation += backupElements[i];
            }
        }
        // add prefix & suffix
        translation = prefix + translation + suffix;
        // add entry to the history
        this.historyService.addEntry(value, translation);
        return translation;
    };
    SentenceTranslatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__settings__["c" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_2__history__["c" /* HistoryService */]])
    ], SentenceTranslatorService);
    return SentenceTranslatorService;
}());



/***/ }),

/***/ "../../../../../src/app/modules/settings/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_component__ = __webpack_require__("../../../../../src/app/modules/settings/settings.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__settings_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_module__ = __webpack_require__("../../../../../src/app/modules/settings/settings.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_service__ = __webpack_require__("../../../../../src/app/modules/settings/settings.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_service__["a"]; });





/***/ }),

/***/ "../../../../../src/app/modules/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Grid -->\n<mat-grid-list cols=\"1\" rowHeight=\"350px\">\n\n    <!-- Other settings -->\n    <mat-grid-tile>\n        <mat-card class=\"other\">\n            <mat-card-header class=\"border-bottom\">\n                <mat-card-title>\n                    Settings\n                </mat-card-title>\n                <mat-card-subtitle>\n                    Various useful settings that changes application behaviour.\n                </mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n                <!-- History limit -->\n                <mat-form-field floatLabel=\"auto\">\n                    <mat-label>History limit</mat-label>\n                    <input matInput\n                           type=\"number\"\n                           step=\"1\"\n                           min=\"0\"\n                           placeholder=\"Provide number\"\n                           [(value)]=\"historyLimit\">\n                </mat-form-field>\n\n                <!-- Auto-translation  -->\n                <mat-slide-toggle\n                    [checked]=\"autoTranslateAllowed\"\n                    (change)=\"autoTranslateAllowed = !autoTranslateAllowed\">\n                    Auto-translation{{ autoTranslateAllowed ? '' : ' not'}} allowed\n                </mat-slide-toggle>\n\n                <mat-slide-toggle\n                    [checked]=\"autoTranslateEnabled\"\n                    (change)=\"autoTranslateEnabled = !autoTranslateEnabled\">\n                    Auto-translation is {{ autoTranslateEnabled ? 'enabled' : 'disabled'}}\n                </mat-slide-toggle>\n\n                <!-- Preserve punctuation  -->\n                <mat-slide-toggle\n                    [checked]=\"respectPunctuation\"\n                    (change)=\"respectPunctuation = !respectPunctuation\">\n                    Translation will {{ respectPunctuation ? '' : ' not'}} respect punctuation\n                </mat-slide-toggle>\n\n\n                <!-- Preserve capitalisation  -->\n                <mat-slide-toggle\n                    [checked]=\"preserveCapitalisation\"\n                    (change)=\"preserveCapitalisation = !preserveCapitalisation\">\n                    Translation will {{ preserveCapitalisation ? '' : ' not'}} preserve capitalisation\n                </mat-slide-toggle>\n\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n\n</mat-grid-list>\n"

/***/ }),

/***/ "../../../../../src/app/modules/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  display: block; }\n\nmat-slide-toggle {\n  display: block;\n  margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_service__ = __webpack_require__("../../../../../src/app/modules/settings/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = (function () {
    function SettingsComponent(settingsService) {
        this.settingsService = settingsService;
    }
    Object.defineProperty(SettingsComponent.prototype, "respectPunctuation", {
        get: function () {
            return this.settingsService.respectPunctuation;
        },
        set: function (value) {
            this.settingsService.respectPunctuation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "preserveCapitalisation", {
        get: function () {
            return this.settingsService.preserveCapitalisation;
        },
        set: function (value) {
            this.settingsService.preserveCapitalisation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "historyLimit", {
        get: function () {
            return this.settingsService.historyLimit;
        },
        set: function (value) {
            this.settingsService.historyLimit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "autoTranslateAllowed", {
        get: function () {
            return this.settingsService.autoTranslateAllowed;
        },
        set: function (value) {
            this.settingsService.autoTranslateAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "autoTranslateEnabled", {
        get: function () {
            return this.settingsService.autoTranslateEnabled;
        },
        set: function (value) {
            this.settingsService.autoTranslateEnabled = value;
        },
        enumerable: true,
        configurable: true
    });
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ctt-settings',
            template: __webpack_require__("../../../../../src/app/modules/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__settings_service__["a" /* SettingsService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_component__ = __webpack_require__("../../../../../src/app/modules/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_theme__ = __webpack_require__("../../../../../src/app/modules/material-theme/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_service__ = __webpack_require__("../../../../../src/app/modules/settings/settings.service.ts");
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
 * Module for settings part of app
 */
var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_theme__["a" /* MaterialThemeModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__settings_service__["a" /* SettingsService */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings_component__["a" /* SettingsComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__settings_component__["a" /* SettingsComponent */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/settings/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
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

/**
 * Cross-component settings store
 */
var SettingsService = (function () {
    function SettingsService() {
        // preserve punctuations
        this.respectPunctuation = true;
        // preserve capitalisation
        this.preserveCapitalisation = true;
        // translation rules - position is important (rules don't stack)
        this._translationRules = [];
        // auto-translate as user type
        this.autoTranslateAllowed = false;
        // is auto-translate enabled
        this.autoTranslateEnabled = false;
        // limit for history entries
        this.historyLimit = 10;
        // set initial rules
        this.translationRules = [
            // Default rule for consonants
            {
                ruleName: 'Consonants to "ay"',
                predicatePartials: [
                    'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
                    'p', 'q', 'r', 's', 't', 'v', 'x', 'z', 'w', 'y'
                ],
                predicate: null,
                clustering: false,
                needleToTheEnd: true,
                suffix: 'ay',
            },
            // Default rule for vowel
            {
                ruleName: 'Vowels to "way"',
                predicatePartials: [
                    'a', 'e', 'i', 'o', 'u'
                ],
                predicate: null,
                clustering: false,
                needleToTheEnd: false,
                suffix: 'way',
            }
        ];
    }
    Object.defineProperty(SettingsService.prototype, "translationRules", {
        get: function () {
            return this._translationRules;
        },
        set: function (rules) {
            // compile rules
            this._translationRules = this.compileRules(rules);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Generate final predicate for provided rules
     */
    SettingsService.prototype.compileRules = function (rules) {
        // generate / regenerate final predicate for provided rules
        return rules.map(function (rule) {
            // build final predicate
            var predicate = "^[" + rule.predicatePartials.join('') + "]";
            // if we match cluster
            if (rule.clustering) {
                predicate += '+';
            }
            else {
                // we match exaclty one partial
                predicate += '{1}';
            }
            rule.predicate = new RegExp(predicate);
            return rule;
        });
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);




// touch / gesture support

if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map