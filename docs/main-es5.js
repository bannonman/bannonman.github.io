function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.??fac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 5,
      vars: 0,
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Senior Software Engineer at Mastercard.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Graduated from Dublin Institute of technology with a first class honours BSc degree in Computer Science.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: [".mat-card[_ngcontent-%COMP%] {\n    width: 400px;\n    height: 500px;\n    \n    display: flex;\n    flex-flow: column;\n}\n\np[_ngcontent-%COMP%]   mat-line[_ngcontent-%COMP%]{\n    word-break: break-all;\n    white-space: normal;\n}\n\n.about-image[_ngcontent-%COMP%] {\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgLyogbWFyZ2luOiAxNXB4OyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG59XG5cbnAgbWF0LWxpbmV7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5hYm91dC1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");

    var routes = [{
      path: 'home-component',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'contact-component',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    }, {
      path: '',
      redirectTo: '/home-component',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'pearsesoft-web';
    };

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-footer");
        }
      },
      directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: [".menu-container[_ngcontent-%COMP%] {\n    padding: 40px;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBOzs7Ozs7R0FNRyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vKiAuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn0gKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-twitter-timeline */
    "./node_modules/ngx-twitter-timeline/__ivy_ngcc__/fesm2015/ngx-twitter-timeline.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _leaving_cert_cal_leaving_cert_cal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./leaving-cert-cal/leaving-cert-cal.component */
    "./src/app/leaving-cert-cal/leaving-cert-cal.component.ts");
    /* harmony import */


    var _update_update_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./update/update.component */
    "./src/app/update/update.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_20__["NgxTwitterTimelineModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_22__["MenuComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_25__["ContactComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_26__["AboutComponent"], _leaving_cert_cal_leaving_cert_cal_component__WEBPACK_IMPORTED_MODULE_27__["LeavingCertCalComponent"], _update_update_component__WEBPACK_IMPORTED_MODULE_28__["UpdateComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_20__["NgxTwitterTimelineModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_22__["MenuComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_25__["ContactComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_26__["AboutComponent"], _leaving_cert_cal_leaving_cert_cal_component__WEBPACK_IMPORTED_MODULE_27__["LeavingCertCalComponent"], _update_update_component__WEBPACK_IMPORTED_MODULE_28__["UpdateComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_20__["NgxTwitterTimelineModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/connection.service.ts":
  /*!***************************************!*\
    !*** ./src/app/connection.service.ts ***!
    \***************************************/

  /*! exports provided: ConnectionService */

  /***/
  function srcAppConnectionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionService", function () {
      return ConnectionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ConnectionService = /*#__PURE__*/function () {
      function ConnectionService(http) {
        _classCallCheck(this, ConnectionService);

        this.http = http;
        this.createMessageUrl = 'http://localhost:8081/api/v1/contact';
        this.getAppsUrl = 'http://localhost:8081/api/v1/apps';
        this.getTweetsUrl = 'http://localhost:8081/api/v1/socials';
      }

      _createClass(ConnectionService, [{
        key: "sendMessage",
        value: function sendMessage(messageContent) {
          var headers = {
            'content-type': 'application/json'
          };
          var body = JSON.stringify(messageContent);
          console.log(body);
          return this.http.post(this.createMessageUrl, body, {
            observe: 'response',
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
          ;
        }
      }, {
        key: "getApps",
        value: function getApps() {
          return this.http.get(this.getAppsUrl, {
            responseType: "json",
            observe: "body"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
          ;
        }
      }, {
        key: "getTweets",
        value: function getTweets() {
          return this.http.get(this.getTweetsUrl, {
            responseType: "json",
            observe: "body"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
          ;
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          } // return an observable with a user-facing error message


          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
        }
      }]);

      return ConnectionService;
    }();

    ConnectionService.??fac = function ConnectionService_Factory(t) {
      return new (t || ConnectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    ConnectionService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: ConnectionService,
      factory: ConnectionService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ConnectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent, MyErrorStateMatcher */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
      return MyErrorStateMatcher;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_contact_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/contact.model */
    "./src/app/models/contact.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../connection.service */
    "./src/app/connection.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactComponent_option_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var subject_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", subject_r4.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](subject_r4.viewValue);
      }
    }

    function ContactComponent_option_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var app_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", app_r5.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](app_r5.viewValue);
      }
    }

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(connectionService, _snackBar) {
        _classCallCheck(this, ContactComponent);

        this.connectionService = connectionService;
        this._snackBar = _snackBar;
        this.contact = new _models_contact_model__WEBPACK_IMPORTED_MODULE_1__["Contact"]();
        this.subjects = [{
          value: 'feedback',
          viewValue: 'Feedback'
        }, {
          value: 'feature request',
          viewValue: 'Feature Request'
        }, {
          value: 'report bug',
          viewValue: 'Report Bug'
        }];
        this.apps = [{
          value: 'leaving-cert-calculator',
          viewValue: 'Leaving Cert Calculator'
        }];
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.matcher = new MyErrorStateMatcher();
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(contactForm) {
          var _this = this;

          // alert("Thanks for submitting! Data: " + JSON.stringify(this.contact));
          this.connectionService.sendMessage(this.contact).subscribe(function (resp) {
            console.log(resp);

            if (resp.status == 201) {
              _this.snackBar();
            } else {
              _this.errorSnackBar();
            }

            contactForm.resetForm();

            _this.emailFormControl.reset();
          });
        }
      }, {
        key: "snackBar",
        value: function snackBar() {
          this._snackBar.open("thank you!", String(this.contact.subject + " for " + this.contact.app + " received"), {
            duration: 3000
          });
        }
      }, {
        key: "errorSnackBar",
        value: function errorSnackBar() {
          this._snackBar.open("Error!", this.contact.subject.toUpperCase() + " cannot be sent at this time.... :(", {
            duration: 3000
          });
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.??fac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
    };

    ContactComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 44,
      vars: 9,
      consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [3, "ngSubmit"], ["contactForm", "ngForm"], [1, "field"], [1, "label"], [1, "control"], ["type", "text", "placeholder", "First Name", "id", "firstname", "name", "firstName", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Last Name", "id", "lastname", "name", "lastName", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Email", "id", "email", "name", "email", 1, "input", 3, "ngModel", "ngModelChange"], [1, "select"], ["id", "subject", "name", "subject", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "app", "name", "app", 3, "ngModel", "ngModelChange"], ["placeholder", "Textarea", "maxlength", "250", "placeholder", "Message", "id", "message", "name", "message", 1, "textarea", 3, "ngModel", "ngModelChange"], ["message", ""], [1, "field", "is-grouped"], ["type", "submit", 1, "button", "is-link"], [3, "value"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);

            return ctx.onSubmit(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.contact.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.contact.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.contact.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Subject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ContactComponent_Template_select_ngModelChange_24_listener($event) {
            return ctx.contact.subject = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ContactComponent_option_25_Template, 2, 2, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ContactComponent_Template_select_ngModelChange_31_listener($event) {
            return ctx.contact.app = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, ContactComponent_option_32_Template, 2, 2, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "textarea", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_37_listener($event) {
            return ctx.contact.message = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.contact.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.contact.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.contact.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.contact.subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.subjects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.contact.app);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.apps);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.contact.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _r3.value.length, " / 250 ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_x"]],
      styles: [".about-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n    width: 400px;\n    height: 500px;\n    \n    display: flex;\n    flex-flow: column;\n}\n\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {border: 1px solid #42A948;}\n\n.error[_ngcontent-%COMP%] {color:#ff0000;}\n\n.success[_ngcontent-%COMP%] { color:green; }\n\n.contact-message[_ngcontent-%COMP%] { text-align: center; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBLHlDQUF5Qyx5QkFBeUIsQ0FBQzs7QUFDbkUsUUFBUSxhQUFhLENBQUM7O0FBQ3RCLFdBQVcsV0FBVyxFQUFFOztBQUN4QixtQkFBbUIsa0JBQWtCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubWF0LWNhcmQge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIC8qIG1hcmdpbjogMTVweDsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQge2JvcmRlcjogMXB4IHNvbGlkICM0MkE5NDg7fVxuLmVycm9yIHtjb2xvcjojZmYwMDAwO31cbi5zdWNjZXNzIHsgY29sb3I6Z3JlZW47IH1cbi5jb250YWN0LW1lc3NhZ2UgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [{
          type: _connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }];
      }, null);
    })();

    var MyErrorStateMatcher = /*#__PURE__*/function () {
      function MyErrorStateMatcher() {
        _classCallCheck(this, MyErrorStateMatcher);
      }

      _createClass(MyErrorStateMatcher, [{
        key: "isErrorState",
        value: function isErrorState(control, form) {
          var isSubmitted = form && form.submitted;
          return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        }
      }]);

      return MyErrorStateMatcher;
    }();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.currentYear = Date.now();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.??fac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 13,
      vars: 4,
      consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "hero", "is-light"], [1, "hero-foot"], [1, "content", "has-text-centered"], ["href", "https://www.linkedin.com/in/coreybannon/", "target", "_blank", "rel", "noopener", 1, "fa", "fa-linkedin", 2, "font-size", "24px"], ["href", "https://twitter.com/bannonman", "target", "_blank", "rel", "noopener", 1, "fa", "fa-twitter", 2, "font-size", "24px"], ["href", "https://github.com/bannonman", "target", "_blank", "rel", "noopener", 1, "fa", "fa-github", 2, "font-size", "24px"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" \xA9 coreybannon ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](7, 1, ctx.currentYear, "yyyy"), " | ");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      styles: [".fa[_ngcontent-%COMP%] {\n    padding: 5px;\n    font-size: 10px;\n    width: 30px;\n    text-align: center;\n    text-decoration: none;\n    margin: 5px 2px;\n}\n  \n.fa[_ngcontent-%COMP%]:hover {\n    opacity: 0.7;\n}\n  \n.fa-linkedin[_ngcontent-%COMP%] {\n    background: rgb(0, 0, 0);\n    color: white;\n}\n  \n.fa-twitter[_ngcontent-%COMP%] {\n    background: rgb(0, 0, 0);\n    color: white;\n}\n  \n.fa-github[_ngcontent-%COMP%] {\n    background: rgb(0, 0, 0);\n    color: white;\n}\n  \n.footer-center[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbjogNXB4IDJweDtcbn1cbiAgXG4uZmE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNztcbn0gXG4uZmEtbGlua2VkaW4ge1xuICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS10d2l0dGVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtZ2l0aHViIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZm9vdGVyLWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _leaving_cert_cal_leaving_cert_cal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../leaving-cert-cal/leaving-cert-cal.component */
    "./src/app/leaving-cert-cal/leaving-cert-cal.component.ts");
    /* harmony import */


    var _update_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../update/update.component */
    "./src/app/update/update.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../contact/contact.component */
    "./src/app/contact/contact.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.breakpoint = window.innerWidth <= 1700 ? 1 : 4;
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.breakpoint = event.target.innerWidth <= 1700 ? 1 : 4;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.??fac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 24,
      vars: 0,
      consts: [[1, "hero", "is-light"], [1, "hero-body"], [1, "container"], [1, "tile", "is-ancestor"], [1, "tile", "is-parent", "is-vertical"], [1, "tile", "is-child", "box"], [1, "title"], [1, "tile", "is-parent"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "app-about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Apps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "app-leaving-cert-cal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "app-update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "article", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "app-contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"], _leaving_cert_cal_leaving_cert_cal_component__WEBPACK_IMPORTED_MODULE_2__["LeavingCertCalComponent"], _update_update_component__WEBPACK_IMPORTED_MODULE_3__["UpdateComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]],
      styles: [".container-card[_ngcontent-%COMP%] {\n    padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWNhcmQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/leaving-cert-cal/leaving-cert-cal.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/leaving-cert-cal/leaving-cert-cal.component.ts ***!
    \****************************************************************/

  /*! exports provided: LeavingCertCalComponent */

  /***/
  function srcAppLeavingCertCalLeavingCertCalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeavingCertCalComponent", function () {
      return LeavingCertCalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../connection.service */
    "./src/app/connection.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

    function LeavingCertCalComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "figure", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var app_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", app_r4.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](app_r4.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", app_r4.description, " ");
      }
    }

    function LeavingCertCalComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LeavingCertCalComponent_a_6_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

          return _r1.previous();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("disabled", _r1.isFirstPage());
      }
    }

    function LeavingCertCalComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LeavingCertCalComponent_a_7_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

          return _r1.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("disabled", _r1.isLastPage());
      }
    }

    var LeavingCertCalComponent = /*#__PURE__*/function () {
      function LeavingCertCalComponent(connectionService) {
        _classCallCheck(this, LeavingCertCalComponent);

        this.connectionService = connectionService;
        this.appList = [];
        this.pageConfig = {
          id: 'appPage',
          itemsPerPage: 2,
          currentPage: 1
        };
      }

      _createClass(LeavingCertCalComponent, [{
        key: "onPageChange",
        value: function onPageChange(event) {
          console.log(event);
          this.pageConfig.currentPage = event;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.connectionService.getApps().subscribe(function (resp) {
            console.log("Getting App Data: " + resp);
            _this2.appList = resp;
          });
        }
      }]);

      return LeavingCertCalComponent;
    }();

    LeavingCertCalComponent.??fac = function LeavingCertCalComponent_Factory(t) {
      return new (t || LeavingCertCalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_connection_service__WEBPACK_IMPORTED_MODULE_1__["ConnectionService"]));
    };

    LeavingCertCalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: LeavingCertCalComponent,
      selectors: [["app-leaving-cert-cal"]],
      decls: 8,
      vars: 7,
      consts: [[2, "text-align", "center"], ["class", "box", 4, "ngFor", "ngForOf"], [3, "id", "pageChange"], ["p", "paginationApi"], ["role", "navigation", "aria-label", "pagination", 1, "pagination"], ["class", "pagination-previous", 3, "disabled", "click", 4, "ngIf"], ["class", "pagination-next", 3, "disabled", "click", 4, "ngIf"], [1, "box"], [1, "media"], [1, "media-left"], [1, "image", "is-64x64"], ["alt", "Image", 3, "src"], [1, "media-content"], [1, "content"], [1, "pagination-previous", 3, "click"], [1, "pagination-next", 3, "click"]],
      template: function LeavingCertCalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, LeavingCertCalComponent_div_1_Template, 11, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "paginate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "pagination-template", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function LeavingCertCalComponent_Template_pagination_template_pageChange_3_listener($event) {
            return ctx.pageConfig.currentPage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, LeavingCertCalComponent_a_6_Template, 2, 2, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, LeavingCertCalComponent_a_7_Template, 2, 2, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 4, ctx.appList, ctx.pageConfig));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", ctx.pageConfig.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !_r1.isFirstPage());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !_r1.isLastPage());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationControlsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatePipe"]],
      styles: [".header-icon[_ngcontent-%COMP%] {\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhdmluZy1jZXJ0LWNhbC9sZWF2aW5nLWNlcnQtY2FsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvbGVhdmluZy1jZXJ0LWNhbC9sZWF2aW5nLWNlcnQtY2FsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5oZWFkZXItaWNvbiB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LeavingCertCalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-leaving-cert-cal',
          templateUrl: './leaving-cert-cal.component.html',
          styleUrls: ['./leaving-cert-cal.component.css']
        }]
      }], function () {
        return [{
          type: _connection_service__WEBPACK_IMPORTED_MODULE_1__["ConnectionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(route) {
        _classCallCheck(this, MenuComponent);

        this.route = route;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.route.queryParams.subscribe(function (params) {
            _this3.name = params['name'];
          });
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.??fac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    MenuComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 7,
      vars: 0,
      consts: [[1, "hero", "is-light"], [1, "hero-head"], [1, "container"], [1, "title"], [1, "subtitle"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Corey Bannon ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Software Engineer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: [".spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.item-space[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n\n.md-fab[_ngcontent-%COMP%] {\n    line-height: 5.6rem;\n    min-width: 2;\n    width: 5.6rem;\n    height: 5.6rem;\n    border-radius: 20% 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaXRlbS1zcGFjZSB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubWQtZmFiIHtcbiAgICBsaW5lLWhlaWdodDogNS42cmVtO1xuICAgIG1pbi13aWR0aDogMjtcbiAgICB3aWR0aDogNS42cmVtO1xuICAgIGhlaWdodDogNS42cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwJSAyMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/contact.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/contact.model.ts ***!
    \*****************************************/

  /*! exports provided: Contact */

  /***/
  function srcAppModelsContactModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Contact", function () {
      return Contact;
    });

    var Contact = function Contact(firstName, lastName, email, subject, app, message) {
      _classCallCheck(this, Contact);

      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.subject = subject;
      this.app = app;
      this.message = message;
    };
    /***/

  },

  /***/
  "./src/app/update/update.component.ts":
  /*!********************************************!*\
    !*** ./src/app/update/update.component.ts ***!
    \********************************************/

  /*! exports provided: UpdateComponent */

  /***/
  function srcAppUpdateUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateComponent", function () {
      return UpdateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../connection.service */
    "./src/app/connection.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

    function UpdateComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " | ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var tweet_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](tweet_r4.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](tweet_r4.screen_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", tweet_r4.text, " | ", tweet_r4.hashtag, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", tweet_r4.created_at, " ");
      }
    }

    function UpdateComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UpdateComponent_a_6_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

          return _r1.previous();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("disabled", _r1.isFirstPage());
      }
    }

    function UpdateComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UpdateComponent_a_7_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

          return _r1.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("disabled", _r1.isLastPage());
      }
    }

    var UpdateComponent = /*#__PURE__*/function () {
      function UpdateComponent(connectionService) {
        _classCallCheck(this, UpdateComponent);

        this.connectionService = connectionService;
        this.tweets = [];
        this.pageConfig = {
          id: 'socialPage',
          itemsPerPage: 4,
          currentPage: 1
        };
      }

      _createClass(UpdateComponent, [{
        key: "onPageChange",
        value: function onPageChange(event) {
          console.log(event);
          this.pageConfig.currentPage = event;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.connectionService.getTweets().subscribe(function (resp) {
            console.log("Social Response: " + resp);
            _this4.tweets = resp;
            console.log(_this4.tweets);
          });
        }
      }]);

      return UpdateComponent;
    }();

    UpdateComponent.??fac = function UpdateComponent_Factory(t) {
      return new (t || UpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_connection_service__WEBPACK_IMPORTED_MODULE_1__["ConnectionService"]));
    };

    UpdateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: UpdateComponent,
      selectors: [["app-update"]],
      decls: 8,
      vars: 7,
      consts: [[2, "text-align", "center"], ["class", "box", 4, "ngFor", "ngForOf"], [3, "id", "pageChange"], ["p", "paginationApi"], ["role", "navigation", "aria-label", "pagination", 1, "pagination"], ["class", "pagination-previous", 3, "disabled", "click", 4, "ngIf"], ["class", "pagination-next", 3, "disabled", "click", 4, "ngIf"], [1, "box"], [1, "media"], [1, "media-content"], [1, "content"], [1, "pagination-previous", 3, "click"], [1, "pagination-next", 3, "click"]],
      template: function UpdateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UpdateComponent_div_1_Template, 14, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "paginate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "pagination-template", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function UpdateComponent_Template_pagination_template_pageChange_3_listener($event) {
            return ctx.pageConfig.currentPage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, UpdateComponent_a_6_Template, 2, 2, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, UpdateComponent_a_7_Template, 2, 2, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 4, ctx.tweets, ctx.pageConfig));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", ctx.pageConfig.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !_r1.isFirstPage());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !_r1.isLastPage());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationControlsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatePipe"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\n    width: 400px;\n    height: 500px;\n    \n    display: flex;\n    flex-flow: column;\n}\n\nngx-twitter-timeline[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICAvKiBtYXJnaW46IDE1cHg7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cblxubmd4LXR3aXR0ZXItdGltZWxpbmV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update',
          templateUrl: './update.component.html',
          styleUrls: ['./update.component.css']
        }]
      }], function () {
        return [{
          type: _connection_service__WEBPACK_IMPORTED_MODULE_1__["ConnectionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/coreybannon/dev/bannonman.github.io/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map