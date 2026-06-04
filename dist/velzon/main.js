(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/layout.component */ 76774);
/* harmony import */ var _pages_items_cloze_dropdown_cloze_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/items/cloze-dropdown/cloze-dropdown.component */ 83415);
/* harmony import */ var _pages_transcript_preview_transcript_preview_transcript_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/transcript-preview/transcript-preview/transcript-preview.component */ 81740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);


// Auth
// import { AuthGuard } from "./core/guards/auth.guard";




// import { SchedulerDashboardComponent } from "./pages/scheduler/scheduler-dashboard/scheduler-dashboard.component";
// import { ItemsPreviewAndPrintingTestComponent } from "./items-preview-and-printing-test/items-preview-and-printing-test/items-preview-and-printing-test.component";
const routes = [
    {
        path: "",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_authentication_countries_data_ts"), __webpack_require__.e("src_app_authentication_authentication_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/authentication.module */ 41082)).then((m) => m.AuthenticationModule),
    },
    {
        path: "schedule",
        component: _layouts_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-dropzone-wrapper___ivy_ngcc___fesm2015_ngx-dropzone-wrapper_js"), __webpack_require__.e("default-src_app_pages_scheduler_scheduler_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/scheduler/scheduler.module */ 11973)).then((m) => m.SchedulerModule),
    },
    {
        path: "examalpha",
        component: _layouts_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 18950)).then((m) => m.PagesModule),
        //canActivate: [AuthGuard],
    },
    {
        path: "exam-preview",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-src_app_pages_exam-preview_exam-preview_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exam-preview/exam-preview.module */ 45338)).then((m) => m.ExamPreviewModule),
    },
    {
        path: "auth",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_authentication_countries_data_ts"), __webpack_require__.e("src_app_authentication_authentication_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/authentication.module */ 41082)).then((m) => m.AuthenticationModule),
    },
    {
        path: "account",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_authentication_countries_data_ts"), __webpack_require__.e("src_app_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 63879)).then((m) => m.AccountModule),
    },
    {
        path: "cloze-dropdown",
        component: _pages_items_cloze_dropdown_cloze_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.ClozeDropdownComponent,
    },
    { path: 'transcript', component: _pages_transcript_preview_transcript_preview_transcript_preview_component__WEBPACK_IMPORTED_MODULE_2__.TranscriptPreviewComponent }
    // { path: 'print', component: ItemsPreviewAndPrintingTestComponent }
    // { path: 'testing', component: DrawingAndWritingPreviewComponent }
    //{ path: 'pages', loadChildren: () => import('./extraspages/extraspages.module').then(m => m.ExtraspagesModule), canActivate: [AuthGuard] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mfe": () => (/* binding */ mfe),
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var mathlive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mathlive */ 58901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _pages_assessment_service_assessments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/assessment/service/assessments.service */ 9472);
/* harmony import */ var _pages_items_item_utilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/items/item-utilities.service */ 16716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ 43683);






const mfe = new mathlive__WEBPACK_IMPORTED_MODULE_0__.MathfieldElement();
class AppComponent {
    constructor(itembankAssessmentService, assessmentService, itemUtil) {
        this.itembankAssessmentService = itembankAssessmentService;
        this.assessmentService = assessmentService;
        this.itemUtil = itemUtil;
        this.title = 'Exam Alpha';
    }
    ngOnInit() {
        if (!this.itembankAssessmentService.schedulerAssessmentId) {
            const id = localStorage.getItem('assessmentId');
            if (id) {
                this.itembankAssessmentService.schedulerAssessmentId = id;
            }
            const medthod = localStorage.getItem('deliveryMethod');
            if (medthod) {
                this.assessmentService.activeAssessmentDeliveryMethod = medthod;
            }
            const assessmentName = localStorage.getItem('assessmentName');
            if (assessmentName) {
                this.assessmentService.activeAssessment = assessmentName;
            }
        }
        if (!this.itemUtil.currentItemTrail) {
            const trail = localStorage.getItem('item-trail');
            if (trail) {
                this.itemUtil.currentItemTrail = JSON.parse(trail);
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_pages_assessment_service_assessments_service__WEBPACK_IMPORTED_MODULE_1__.AssessmentsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_pages_assessment_service_assessments_service__WEBPACK_IMPORTED_MODULE_1__.AssessmentsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_pages_items_item_utilities_service__WEBPACK_IMPORTED_MODULE_2__.ItemUtilitiesService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "notifier-container");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, angular_notifier__WEBPACK_IMPORTED_MODULE_5__.NotifierContainerComponent], styles: [".p-paginator[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  flex-wrap: nowrap !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsNEJBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucC1wYWdpbmF0b3IgLnBhZ2luYXRpb257XHJcbiAgICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/layouts.module */ 52372);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.module */ 18950);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _authUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authUtils */ 69453);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 75347);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 84633);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ 78189);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _pages_transcript_preview_transcript_preview_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/transcript-preview/transcript-preview.module */ 94700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);





// Auth




/* import { FakeBackendInterceptor } from './core/helpers/fake-backend';
import { ErrorInterceptor } from './core/helpers/error.interceptor';
import { JwtInterceptor } from './core/helpers/jwt.interceptor'; */
// Language





// import { DrawingAndWritingPreviewComponent } from "./drawing-and-writing-preview/drawing-and-writing-preview.component";





// import { ItemsPreviewAndPrintingTestModule } from "./items-preview-and-printing-test/items-preview-and-printing-test.module";
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http, "assets/i18n/", ".json");
}
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.defaultauth === "firebase") {
    (0,_authUtils__WEBPACK_IMPORTED_MODULE_5__.initFirebaseBackend)(_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebaseConfig);
}
else {
    //FakeBackendInterceptor;
}
const customNotifierOptions = {
    position: {
        horizontal: {
            position: "right",
            distance: 12,
        },
        vertical: {
            position: "top",
            distance: 12,
            gap: 10,
        },
    },
    theme: "material",
    behaviour: {
        autoHide: 5000,
        onClick: "hide",
        onMouseover: "pauseAutoHide",
        showDismissButton: true,
        stacking: 4,
    },
    animations: {
        enabled: true,
        show: {
            preset: "slide",
            speed: 300,
            easing: "ease",
        },
        hide: {
            preset: "fade",
            speed: 300,
            easing: "ease",
            offset: 50,
        },
        shift: {
            speed: 300,
            easing: "ease",
        },
        overlap: 150,
    },
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
            useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__.AuthInterceptor,
            multi: true,
        },
        /* { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true }, */
    ], imports: [[
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forRoot({
                defaultLanguage: "en",
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient],
                },
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__.LayoutsModule,
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__.PagesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonModule,
            // ItemsPreviewAndPrintingTestModule,
            _pages_transcript_preview_transcript_preview_module__WEBPACK_IMPORTED_MODULE_7__.TranscriptPreviewModule,
            angular_notifier__WEBPACK_IMPORTED_MODULE_16__.NotifierModule.withConfig(customNotifierOptions)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__.LayoutsModule,
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__.PagesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonModule,
        // ItemsPreviewAndPrintingTestModule,
        _pages_transcript_preview_transcript_preview_module__WEBPACK_IMPORTED_MODULE_7__.TranscriptPreviewModule, angular_notifier__WEBPACK_IMPORTED_MODULE_16__.NotifierModule] }); })();


/***/ }),

/***/ 69453:
/*!******************************!*\
  !*** ./src/app/authUtils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initFirebaseBackend": () => (/* binding */ initFirebaseBackend),
/* harmony export */   "getFirebaseBackend": () => (/* binding */ getFirebaseBackend)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 66369);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 23628);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 31866);

// Add the Firebase products that you want to use


class FirebaseAuthBackend {
    constructor(firebaseConfig) {
        /**
         * Registers the user with given details
         */
        this.registerUser = (email, password) => {
            return new Promise((resolve, reject) => {
                firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().createUserWithEmailAndPassword(email, password).then((user) => {
                    var user = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().currentUser;
                    resolve(user);
                }, (error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * Login user with given details
         */
        this.loginUser = (email, password) => {
            return new Promise((resolve, reject) => {
                firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signInWithEmailAndPassword(email, password).then((user) => {
                    // eslint-disable-next-line no-redeclare
                    var user = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().currentUser;
                    resolve(user);
                }, (error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * Logout the user
         */
        this.logout = () => {
            return new Promise((resolve, reject) => {
                firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signOut().then(() => {
                    resolve(true);
                }).catch((error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * forget Password user with given details
         */
        this.forgetPassword = (email) => {
            return new Promise((resolve, reject) => {
                // tslint:disable-next-line: max-line-length
                firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().sendPasswordResetEmail(email, { url: window.location.protocol + '//' + window.location.host + '/login' }).then(() => {
                    resolve(true);
                }).catch((error) => {
                    reject(this._handleError(error));
                });
            });
        };
        this.setLoggeedInUser = (user) => {
            sessionStorage.setItem('authUser', JSON.stringify(user));
        };
        /**
         * Returns the authenticated user
         */
        this.getAuthenticatedUser = () => {
            if (!sessionStorage.getItem('authUser')) {
                return null;
            }
            return JSON.parse(sessionStorage.getItem('authUser'));
        };
        if (firebaseConfig) {
            // Initialize Firebase
            firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
            firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().onAuthStateChanged((user) => {
                if (user) {
                    sessionStorage.setItem('authUser', JSON.stringify(user));
                }
                else {
                    sessionStorage.removeItem('authUser');
                }
            });
        }
    }
    /**
     * Handle the error
     * @param {*} error
     */
    _handleError(error) {
        // tslint:disable-next-line: prefer-const
        var errorMessage = error.message;
        return errorMessage;
    }
}
// tslint:disable-next-line: variable-name
let _fireBaseBackend = null;
/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = (config) => {
    if (!_fireBaseBackend) {
        _fireBaseBackend = new FirebaseAuthBackend(config);
    }
    return _fireBaseBackend;
};
/**
 * Returns the firebase backend
 */
const getFirebaseBackend = () => {
    return _fireBaseBackend;
};



/***/ }),

/***/ 75973:
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 80522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _shared_enum_role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/enum/role */ 96790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ 79089);
/* harmony import */ var _services_secure_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/secure-storage.service */ 50147);








class AuthenticationService {
    constructor(http, userService, secureStorage) {
        this.http = http;
        this.userService = userService;
        this.secureStorage = secureStorage;
    }
    registerOrganization(signupModel) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/register`, signupModel);
    }
    login(signInModel) {
        const data = `username=${encodeURIComponent(signInModel.username)}` +
            `&password=${encodeURIComponent(signInModel.password)}` +
            //`&remember-me=${credentials.rememberMe ? 'true' : 'false'}` +
            '&submit=Login';
        // console.log(data);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/authentication`, data, {
            headers,
            responseType: 'json',
            withCredentials: true,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(() => this.getLoggedInAccount()));
    }
    authorizeItembank(data) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/auth/authorize_item_bank`, //examalpha/api/v1/sch_mon_grd/auth/login,
        data, { withCredentials: true });
    }
    checkLogin() { }
    schedulerLogin(signInModel) {
        /* const data =
          `username=${encodeURIComponent(signInModel.username)}` +
          `&password=${encodeURIComponent(signInModel.password)}` +
          //`&remember-me=${credentials.rememberMe ? 'true' : 'false'}` +
          '&submit=Login'; */
        const data = {
            username: signInModel.username,
            password: signInModel.password,
        };
        // console.log(data);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json' //'application/x-www-form-urlencoded'
        );
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/auth/authorize_item_bank`, //examalpha/api/v1/sch_mon_grd/auth/login,
        data, { headers, withCredentials: true });
        //.pipe(mergeMap(() => this.getLoggedInAccount()));
    }
    getLoggedInAccount() {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/authentication/account`, {
            withCredentials: true,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((value) => {
            value.authority = _shared_enum_role__WEBPACK_IMPORTED_MODULE_1__.Role[value.authorities[0]];
            this.userService.setCurrentUser(value);
            this.secureStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.secureStorageId, value);
            return value;
        }));
    }
    storeUserAccountDetails(user) {
        this.userService.setCurrentUser(user);
        return user;
    }
    userLogin(signInModel) {
        return this.login(signInModel).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(() => this.getLoggedInAccount()));
    }
    logoutUser() {
        // console.log('logged out!');
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/logout`, {
            withCredentials: true,
        });
    }
    getSchedulerRefreshToken() {
        // const url = `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/auth_token/auth_refresh/refresh-token`
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/authentication/account/refresh`;
        return this.http.get(url, { withCredentials: true });
    }
    doPasswordReset(email) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/account/reset_password`, { email });
    }
    setNewPassword(payload) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/account/reset_password/new-password`, payload);
    }
    updateExistingUserUsernameAndPassword(payload) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/accounts/new-user-account/set-credentials`, payload);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_secure_storage_service__WEBPACK_IMPORTED_MODULE_3__.SecureStorageService)); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92293:
/*!***************************************************!*\
  !*** ./src/app/core/services/authfake.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthfakeauthenticationService": () => (/* binding */ AuthfakeauthenticationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);




class AuthfakeauthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    /**
     * current user
     */
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email, password) {
        return this.http.post(`/users/authenticate`, { email, password })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    /**
     * Logout the user
     */
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
AuthfakeauthenticationService.ɵfac = function AuthfakeauthenticationService_Factory(t) { return new (t || AuthfakeauthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AuthfakeauthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthfakeauthenticationService, factory: AuthfakeauthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 13117:
/*!************************************************!*\
  !*** ./src/app/core/services/event.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventService": () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);



class EventService {
    constructor() {
        this.handler = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    /**
     * Broadcast the event
     * @param type type of event
     * @param payload payload
     */
    broadcast(type, payload = {}) {
        this.handler.next({ type, payload });
    }
    /**
     * Subscribe to event
     * @param type type of event
     * @param callback call back function
     */
    subscribe(type, callback) {
        return this.handler.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event.type === type)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(event => event.payload))
            .subscribe(callback);
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(); };
EventService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 77524:
/*!***************************************************!*\
  !*** ./src/app/core/services/language.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ 53694);



class LanguageService {
    constructor(translate, cookieService) {
        this.translate = translate;
        this.cookieService = cookieService;
        this.languages = ['en', 'es', 'de', 'it', 'ru'];
        let browserLang;
        /***
         * cookie Language Get
        */
        this.translate.addLangs(this.languages);
        if (this.cookieService.check('lang')) {
            browserLang = this.cookieService.get('lang');
        }
        else {
            browserLang = translate.getBrowserLang();
        }
        translate.use(browserLang.match(/en|es|de|it|ru/) ? browserLang : 'en');
    }
    /***
     * Cookie Language set
     */
    setLanguage(lang) {
        this.translate.use(lang);
        this.cookieService.set('lang', lang);
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__.CookieService)); };
LanguageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 78189:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authentication/authentication.service */ 75973);




class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            if (error.status === 401 &&
                error.error &&
                error.error.message.toLowerCase() ===
                    "you are not logged in, please log in" &&
                request.url.includes("examalpha/api/v1/sch_mon_grd/schedule")) {
                // Attempt to refresh the token
                return this.authService.getSchedulerRefreshToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((response) => {
                    // If token refresh is successful, retry the original request
                    const clonedRequest = request
                        .clone();
                    return next.handle(clonedRequest);
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((refreshError) => {
                    // Handle token refresh error
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(refreshError);
                }));
            }
            else {
                // For other errors
                if (!['/sign-in', '/account/sign-up', '/reset-password'].includes(location.pathname)) {
                    // location.href = '/'
                }
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
            }
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 84158:
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function FooterComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Powered by Multilent.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u00A9 ", ctx_r0.year, "");
} }
class FooterComponent {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
        this.showAppAssets = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.showAppAssets;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 1, consts: [[1, "footer"], [1, "container-fluid"], [1, "row"], ["class", "d-flex justify-content-between", 4, "ngIf"], [1, "d-flex", "justify-content-between"], [1, "text-black", "fs-12"], ["src", "/assets/logo/EXPryLogoHor.png", "alt", "", "height", "16"], [1, "d-flex", "fs-12", "text-black"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FooterComponent_div_3_Template, 6, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showAppAssets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 771:
/*!**************************************************************************!*\
  !*** ./src/app/layouts/horizontal-topbar/horizontal-topbar.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalTopbarComponent": () => (/* binding */ HorizontalTopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ 42792);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-feather */ 5601);

// Menu Pachage
// import MetisMenu from 'metismenujs';







const _c0 = ["sideMenu"];
function HorizontalTopbarComponent_ng_container_23_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, item_r1.label));
} }
function HorizontalTopbarComponent_ng_container_23_li_2_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("badge badge-pill ", item_r1.badge.variant, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, item_r1.badge.text));
} }
const _c1 = function (a0, a1) { return { "has-arrow": a0, "has-dropdown": a1 }; };
function HorizontalTopbarComponent_ng_container_23_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontalTopbarComponent_ng_container_23_li_2_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r10.toggleItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i-feather", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HorizontalTopbarComponent_ng_container_23_li_2_a_1_span_5_Template, 3, 6, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](6, _c1, !item_r1.badge, item_r1.badge));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, item_r1.label), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.badge);
} }
function HorizontalTopbarComponent_ng_container_23_li_2_a_2_i_feather_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i-feather", 22);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", item_r1.icon);
} }
function HorizontalTopbarComponent_ng_container_23_li_2_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("badge ", item_r1.badge.variant, " float-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, item_r1.badge.text));
} }
function HorizontalTopbarComponent_ng_container_23_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HorizontalTopbarComponent_ng_container_23_li_2_a_2_i_feather_1_Template, 1, 1, "i-feather", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HorizontalTopbarComponent_ng_container_23_li_2_a_2_span_5_Template, 3, 6, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, item_r1.label), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.badge);
} }
function HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_a_1_i_feather_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i-feather", 22);
} if (rf & 2) {
    const subitem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", subitem_r20.icon);
} }
function HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const subitem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5); ctx_r26.updateActive($event); return ctx_r26.onMenuClick(subitem_r20.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_a_1_i_feather_1_Template, 1, 1, "i-feather", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", subitem_r20.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-parent", subitem_r20.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subitem_r20.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, subitem_r20.label), " ");
} }
function HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_a_2_i_feather_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i-feather", 22);
} if (rf & 2) {
    const subitem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", subitem_r20.icon);
} }
function HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6); return ctx_r32.toggleSubItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_a_2_i_feather_1_Template, 1, 1, "i-feather", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-parent", subitem_r20.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subitem_r20.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, subitem_r20.label), " ");
} }
function HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_div_3_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_div_3_li_2_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](8); return ctx_r40.updateActive($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subSubitem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", subSubitem_r36.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-parent", subSubitem_r36.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, subSubitem_r36.label), " ");
} }
function HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_div_3_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_div_3_li_2_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](8); return ctx_r43.updateActive($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subSubitem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", subSubitem_r36.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-parent", subSubitem_r36.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, subSubitem_r36.label), " ");
} }
function HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_div_3_li_2_div_3_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_div_3_li_2_div_3_li_2_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](9); return ctx_r48.updateActive($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subChilditem_r47 = ctx.$implicit;
    const subSubitem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", subChilditem_r47.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-parent", subSubitem_r36.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, subChilditem_r47.label), " ");
} }
function HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_div_3_li_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_div_3_li_2_div_3_li_2_Template, 4, 5, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subSubitem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", subSubitem_r36.childItem);
} }
function HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_div_3_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_div_3_li_2_a_1_Template, 3, 5, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_div_3_li_2_a_2_Template, 3, 5, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_div_3_li_2_div_3_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subSubitem_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !subSubitem_r36.childItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subSubitem_r36.childItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subSubitem_r36.childItem);
} }
function HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_div_3_li_2_Template, 4, 3, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", subitem_r20.subItems);
} }
function HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_a_1_Template, 4, 6, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_a_2_Template, 4, 5, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_div_3_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r19.hasItems(subitem_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.hasItems(subitem_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.hasItems(subitem_r20));
} }
function HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_li_1_Template, 4, 3, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.subItems);
} }
function HorizontalTopbarComponent_ng_container_23_li_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HorizontalTopbarComponent_ng_container_23_li_2_div_3_ul_1_Template, 2, 1, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.hasItems(item_r1));
} }
function HorizontalTopbarComponent_ng_container_23_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontalTopbarComponent_ng_container_23_li_2_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r55.updateActiveDropMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HorizontalTopbarComponent_ng_container_23_li_2_a_1_Template, 6, 9, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HorizontalTopbarComponent_ng_container_23_li_2_a_2_Template, 6, 6, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HorizontalTopbarComponent_ng_container_23_li_2_div_3_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.hasItems(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.hasItems(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.hasItems(item_r1));
} }
function HorizontalTopbarComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HorizontalTopbarComponent_ng_container_23_li_1_Template, 4, 3, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HorizontalTopbarComponent_ng_container_23_li_2_Template, 4, 3, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.isTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r1.isTitle && !item_r1.isLayout);
} }
class HorizontalTopbarComponent {
    constructor(router, translate, user, ar) {
        this.router = router;
        this.translate = translate;
        this.user = user;
        this.ar = ar;
        this.toggle = true;
        this.menuItems = [];
        this.authorMenu = [];
        this.mobileMenuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        translate.setDefaultLang('en');
    }
    ngOnInit() {
        // this.currentUser = this.user.getCurrentUser();
        this.currentUser = this.user.getCurrentUser()
            ? this.user.getCurrentUser()
            : this.user.getCurrentUserAfterReload();
        // Menu Items
        let sidemenus = _menu__WEBPACK_IMPORTED_MODULE_0__.MENU;
        sidemenus.forEach((element) => {
            var _a;
            // Check if user has permission for parent menu item
            const hasParentPermission = (_a = element.role) === null || _a === void 0 ? void 0 : _a.some((role) => this.currentUser.authorities.includes(role));
            if (hasParentPermission && !this.menuItems.includes(element)) {
                // If menu has subitems, filter them based on user roles
                if (element.subItems) {
                    const filteredSubItems = element.subItems.filter((subItem) => subItem.role
                        ? subItem.role.some((role) => this.currentUser.authorities.includes(role))
                        : true);
                    // Only add parent menu if it has accessible subitems
                    if (filteredSubItems.length > 0) {
                        const menuItem = Object.assign(Object.assign({}, element), { subItems: filteredSubItems });
                        this.menuItems.push(menuItem);
                    }
                }
                else {
                    // Add menu item without subitems
                    this.menuItems.push(element);
                }
            }
        });
    }
    /***
     * Activate droup down set
     */
    ngAfterViewInit() {
        this.initActiveMenu();
    }
    removeActivation(items) {
        // console.log(items);
        this.items = items;
        // console.log("remove");
        items.forEach((item) => {
            if (item.classList.contains('menu-link')) {
                if (!item.classList.contains('active')) {
                    item.setAttribute('aria-expanded', false);
                }
                item.nextElementSibling
                    ? item.nextElementSibling.classList.remove('show')
                    : null;
            }
            if (item.classList.contains('nav-link')) {
                if (item.nextElementSibling) {
                    item.nextElementSibling.classList.remove('show');
                }
                item.setAttribute('aria-expanded', false);
            }
            item.classList.remove('active');
        });
    }
    // remove active items of two-column-menu
    activateParentDropdown(item) {
        // console.log("parent");
        // navbar-nav menu add active
        item.classList.add('active');
        let parentCollapseDiv = item.closest('.collapse.menu-dropdown');
        if (parentCollapseDiv) {
            // to set aria expand true remaining
            parentCollapseDiv.classList.add('show');
            parentCollapseDiv.parentElement.children[0].classList.add('active');
            parentCollapseDiv.parentElement.children[0].setAttribute('aria-expanded', 'true');
            if (parentCollapseDiv.parentElement.closest('.collapse.menu-dropdown')) {
                parentCollapseDiv.parentElement
                    .closest('.collapse')
                    .classList.add('show');
                if (parentCollapseDiv.parentElement.closest('.collapse')
                    .previousElementSibling)
                    parentCollapseDiv.parentElement
                        .closest('.collapse')
                        .previousElementSibling.classList.add('active');
                parentCollapseDiv.parentElement
                    .closest('.collapse')
                    .previousElementSibling.setAttribute('aria-expanded', 'true');
            }
            return false;
        }
        return false;
    }
    updateActive(event) {
        // console.log("update me");
        const ul = document.getElementById('navbar-nav');
        if (ul) {
            const items = Array.from(ul.querySelectorAll('a.nav-link'));
            this.removeActivation(items);
        }
        this.activateParentDropdown(event.target);
    }
    initActiveMenu() {
        // console.log("init me");
        const pathName = window.location.pathname;
        const ul = document.getElementById('navbar-nav');
        if (ul) {
            const items = Array.from(ul.querySelectorAll('a.nav-link'));
            let activeItems = items.filter((x) => x.classList.contains('active'));
            this.removeActivation(activeItems);
            let matchingMenuItem = items.find((x) => {
                return x.pathname === pathName;
            });
            if (matchingMenuItem) {
                this.activateParentDropdown(matchingMenuItem);
            }
        }
    }
    toggleSubItem(event) {
        // console.log("sub");
        if (event.target && event.target.nextElementSibling)
            event.target.nextElementSibling.classList.toggle('show');
    }
    toggleItem(event) {
        // console.log("item");
        let isCurrentMenuId = event.target.closest('a.nav-link');
        let isMenu = isCurrentMenuId.nextElementSibling;
        let dropDowns = Array.from(document.querySelectorAll('#navbar-nav .show'));
        dropDowns.forEach((node) => {
            node.classList.remove('show');
        });
        isMenu ? isMenu.classList.add('show') : null;
        const ul = document.getElementById('navbar-nav');
        if (ul) {
            const iconItems = Array.from(ul.getElementsByTagName('a'));
            let activeIconItems = iconItems.filter((x) => x.classList.contains('active'));
            activeIconItems.forEach((item) => {
                item.setAttribute('aria-expanded', 'false');
                item.classList.remove('active');
            });
        }
        if (isCurrentMenuId) {
            this.activateParentDropdown(isCurrentMenuId);
        }
    }
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
        return item.subItems !== undefined ? item.subItems.length > 0 : false;
    }
    /**
     * remove active and mm-active class
     */
    _removeAllClass(className) {
        const els = document.getElementsByClassName(className);
        while (els[0]) {
            els[0].classList.remove(className);
        }
    }
    updateActiveDropMenu() {
        let dropMenuActive = document.getElementsByClassName('is-parent nav-link menu-link has-arrow active');
        let normalLinkActive = document.getElementsByClassName('side-nav-link-ref nav-link menu-link active');
        if (normalLinkActive.length > 0 && dropMenuActive.length > 0) {
            let classToReplace = document.getElementsByClassName('is-parent nav-link menu-link has-arrow active');
            if (classToReplace.length > 0) {
                let result = classToReplace[0].classList.replace('active', 'text-secondary');
                this.initActiveMenu();
                // console.log(result, "remove after");
            }
        }
        else if (dropMenuActive.length > 0) {
            let classToReplace = document.getElementsByClassName('is-parent nav-link menu-link has-arrow');
            let result = classToReplace[0].classList.replace('text-secondary', 'active');
        }
    }
    onMenuClick(link) {
        if (link.startsWith('/examalpha/subjects')
            || link.startsWith('/examalpha/passages')) {
            localStorage.removeItem('item-trail');
        }
    }
}
HorizontalTopbarComponent.ɵfac = function HorizontalTopbarComponent_Factory(t) { return new (t || HorizontalTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
HorizontalTopbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HorizontalTopbarComponent, selectors: [["app-horizontal-topbar"]], viewQuery: function HorizontalTopbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sideMenu = _t.first);
    } }, outputs: { mobileMenuButtonClicked: "mobileMenuButtonClicked" }, decls: 24, vars: 1, consts: [[1, "app-menu", "navbar-menu"], [1, "navbar-brand-box"], ["routerLink", "/", 1, "logo", "logo-dark"], [1, "logo-sm"], [1, "mt-3", "font-weight-bold", "text-left"], [1, "logo-lg"], ["routerLink", "/", 1, "logo", "logo-light"], ["type", "button", "id", "vertical-hover", 1, "btn", "btn-sm", "p-0", "fs-20", "header-item", "float-end", "btn-vertical-sm-hover"], [1, "ri-record-circle-line"], ["id", "scrollbar"], ["id", "two-column-menu"], ["id", "navbar-nav", 1, "navbar-nav"], [4, "ngFor", "ngForOf"], ["class", "menu-title", 4, "ngIf"], ["class", "nav-item", 3, "click", 4, "ngIf"], [1, "menu-title"], ["data-key", "t-menu"], [1, "nav-item", 3, "click"], ["href", "javascript:void(0);", "class", "is-parent nav-link menu-link", "data-bs-toggle", "collapse", "aria-expanded", "false", 3, "ngClass", "click", 4, "ngIf"], ["class", "side-nav-link-ref nav-link menu-link", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "collapse menu-dropdown", "id", "sidebarDashboards", 4, "ngIf"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "aria-expanded", "false", 1, "is-parent", "nav-link", "menu-link", 3, "ngClass", "click"], [1, "icon", "nav-icon", 3, "name"], [1, ""], [3, "class", 4, "ngIf"], ["routerLinkActive", "active", 1, "side-nav-link-ref", "nav-link", "menu-link", 3, "routerLink"], ["class", "icon nav-icon", 3, "name", 4, "ngIf"], ["id", "sidebarDashboards", 1, "collapse", "menu-dropdown"], ["class", "nav nav-sm flex-column", "aria-expanded", "false", 4, "ngIf"], ["aria-expanded", "false", 1, "nav", "nav-sm", "flex-column"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["class", "nav-link", "routerLinkActive", "active", 3, "routerLink", "click", 4, "ngIf"], ["class", "nav-link", "href", "javascript:void(0);", "data-bs-toggle", "collapse", "aria-expanded", "false", 3, "click", 4, "ngIf"], ["class", "collapse menu-dropdown", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "click"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "aria-expanded", "false", 1, "nav-link", 3, "click"], [1, "collapse", "menu-dropdown"], ["routerLinkActive", "active", "class", "nav-link", 3, "routerLink", "click", 4, "ngIf"], ["data-bs-toggle", "collapse", "aria-expanded", "false", "routerLinkActive", "active", "class", "nav-link", 3, "routerLink", "click", 4, "ngIf"], ["data-bs-toggle", "collapse", "aria-expanded", "false", "routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "click"]], template: function HorizontalTopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "ExamAlpha");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "ExamAlpha");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "ExamAlpha");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "ExamAlpha");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, HorizontalTopbarComponent_ng_container_23_Template, 3, 2, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, angular_feather__WEBPACK_IMPORTED_MODULE_6__.FeatherComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".container[_ngcontent-%COMP%] {\n  margin-left: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwtdG9wYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUFDSiIsImZpbGUiOiJob3Jpem9udGFsLXRvcGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ 42792:
/*!***************************************************!*\
  !*** ./src/app/layouts/horizontal-topbar/menu.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU": () => (/* binding */ MENU),
/* harmony export */   "SCHEDULER_MENU": () => (/* binding */ SCHEDULER_MENU)
/* harmony export */ });
const MENU = [
    {
        id: 11,
        label: 'MENUITEMS.DASHBOARD.TEXT',
        link: '/examalpha/dashboard',
        role: ['AUTHOR', 'MODERATOR', 'ADMIN', 'EXAMINER', 'ANALYTICS'],
        icon: 'grid',
    },
    {
        id: 12,
        label: 'MENUITEMS.USERS.TEXT',
        link: '/examalpha/users',
        role: ['ADMIN'],
        icon: 'users',
    },
    {
        id: 13,
        label: 'MENUITEMS.TAGS.TEXT',
        link: '/examalpha/tags',
        role: ['AUTHOR', 'MODERATOR', 'ADMIN'],
        icon: 'tag',
    },
    /* {
      id: 14,
      label: 'MENUITEMS.PASSAGE.TEXT',
      link: '/itembank/passages',
      role: ['AUTHOR', 'MODERATOR', 'ADMIN'],
      icon: 'file-text',
    }, */
    /* {
      id: 15,
      label: 'MENUITEMS.ASSESSMENT_TEMPLATES.TEXT',
      link: '/itembank/assessment-templates',
      icon: 'hash',
      role: ['ADMIN', 'EXAMINER'],
      subItems: [
        {
          id: 1,
          label: 'MENUITEMS.ASSESSMENT_TEMPLATES.LIST.ASSESSMENT DETAILS',
          link: '/itembank/templates/assessment-details',
          parentId: 15,
        },
        {
          id: 2,
          label: 'MENUITEMS.ASSESSMENT_TEMPLATES.LIST.SECTION TEMPLATES',
          link: '/itembank/templates/assessment-section',
          parentId: 15,
        },
        {
          id: 3,
          label: 'MENUITEMS.ASSESSMENT_TEMPLATES.LIST.ASSESSMENT SETTINGS',
          link: '/itembank/templates/assessment-settings',
          parentId: 15,
        },
      ],
    }, */
    {
        id: 16,
        label: 'MENUITEMS.QUESTIONS.TEXT',
        link: '/examalpha/subjects',
        role: ['AUTHOR', 'MODERATOR', 'ADMIN'],
        icon: 'folder',
        subItems: [
            //Subject obj was moved to the top and the id of obj was changed accordingly.
            {
                id: 3,
                label: 'MENUITEMS.QUESTIONS.LIST.SUBJECTS',
                link: '/examalpha/subjects',
                parentId: 16,
                icon: 'folder',
                role: ['AUTHOR', 'MODERATOR', 'EXAMINER', 'ADMIN'],
            },
            {
                id: 1,
                label: 'MENUITEMS.QUESTIONS.LIST.QUESTIONS',
                link: '/examalpha/subjects/questions',
                parentId: 16,
                icon: 'layers',
                role: ['EXAMINER', 'ADMIN', 'AUTHOR', 'MODERATOR'],
            },
            {
                id: 2,
                label: 'MENUITEMS.QUESTIONS.LIST.PASSAGES',
                link: '/examalpha/passages/subjects/passages',
                parentId: 16,
                icon: 'book',
                role: ['EXAMINER', 'ADMIN', 'AUTHOR', 'MODERATOR'],
            },
            // {
            //   id: 3,
            //   label: 'MENUITEMS.QUESTIONS.LIST.SUBJECTS',
            //   link: '/examalpha/subjects',
            //   parentId: 16,
            //   icon: 'folder',
            //   role: ['AUTHOR', 'MODERATOR', 'EXAMINER', 'ADMIN'],
            // },
            {
                id: 4,
                label: 'MENUITEMS.QUESTIONS.LIST.MODERATION',
                link: '/examalpha/moderation',
                parentId: 16,
                icon: 'user-check',
                role: ['EXAMINER', 'ADMIN'],
            },
            {
                id: 5,
                label: 'MENUITEMS.QUESTIONS.LIST.RECYCLE',
                link: '/examalpha/recycle',
                parentId: 16,
                icon: 'repeat',
                role: ['EXAMINER', 'ADMIN'],
            },
        ],
    },
    {
        id: 17,
        label: 'MENUITEMS.EXAMS.TEXT',
        link: '/examalpha/exams',
        role: ['ADMIN', 'EXAMINER'],
        icon: 'monitor',
    },
    {
        id: 18,
        label: 'MENUITEMS.SCHEDULE.TEXT',
        link: '/examalpha/schedule',
        role: ['EXAMINER', 'ADMIN'],
        icon: 'calendar',
    },
    {
        id: 19,
        label: "MENUITEMS.RESULT.TEXT",
        link: "/examalpha/result",
        role: ["ADMIN", "EXAMINER", "ANALYTIC"],
        icon: "bar-chart",
    },
    {
        id: 19,
        label: "MENUITEMS.MONITOR.TEXT",
        link: "/examalpha/monitor",
        role: ["EXAMINER", "ADMIN", "MONITOR"],
        icon: "airplay",
    },
    {
        id: 19,
        label: 'MENUITEMS.RESULTS.TEXT',
        link: '/examalpha/reports',
        role: ['EXAMINER', 'ADMIN'],
        icon: 'bar-chart',
    },
    /* {
      id: 18,
      label: 'MENUITEMS.SETTINGS.TEXT',
      link: '/examalpha/settings',
      role: ['AUTHOR', 'MODERATOR', 'ADMIN'],
      icon: 'tag',
    }, */
    /* {
      id: 18,
      label: 'MENUITEMS.MODERATION.TEXT',
      link: '/itembank/moderation',
      role: ['ADMIN'],
      icon: 'user-check',
    },
    {
      id: 19,
      label: 'MENUITEMS.RECYCLE.TEXT',
      link: '/itembank/recycle',
      role: ['ADMIN'],
      icon: 'repeat',
    }, */
    /* {
      id: 20,
      label: 'MENUITEMS.SETTINGS.TEXT',
      link: '/itembank/settings',
      role: ['ADMIN'],
      icon: 'settings',
    }, */
    /* {
      id: 20,
      label: 'MENUITEMS.SCHEDULER.TEXT',
      link: '/scheduler/bank/group',
      role: ['ADMIN', 'EXAMINER'],
      icon: 'calendar',
      subItems: [
        
      ],
    }, */
    /* {
      id: 21,
      label: 'MENUITEMS.LOGS.TEXT',
      link: '/examalpha/logs',
      role: ['AUTHOR', 'MODERATOR', 'ADMIN', 'EXAMINER'],
      icon: 'activity',
    }, */
];
const SCHEDULER_MENU = [
    {
        id: 1,
        label: 'SCHEDULER_MENU.DASHBOARD.TEXT',
        link: '/itembank/dashboard',
        icon: 'grid',
    },
    {
        id: 2,
        label: 'SCHEDULER_MENU.USERS.TEXT',
        link: '/itembank/users',
        role: ['ADMIN'],
        icon: 'users',
    },
    {
        id: 3,
        label: 'SCHEDULER_MENU.BANK.TEXT',
        link: '/scheduler/bank/group',
        icon: 'archive',
    },
    {
        id: 4,
        label: 'SCHEDULER_MENU.PARTICIPANTS.TEXT',
        link: '/scheduler/participants',
        icon: 'database',
    },
    {
        id: 5,
        label: 'SCHEDULER_MENU.CENTERS.TEXT',
        link: '/scheduler/center',
        icon: 'monitor',
    },
];


/***/ }),

/***/ 18807:
/*!************************************************************!*\
  !*** ./src/app/layouts/horizontal/horizontal.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalComponent": () => (/* binding */ HorizontalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../topbar/topbar.component */ 24016);
/* harmony import */ var _horizontal_topbar_horizontal_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../horizontal-topbar/horizontal-topbar.component */ 771);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 84158);





/**
 * Horizontal Component
 */
class HorizontalComponent {
    constructor() { }
    ngOnInit() {
        document.documentElement.setAttribute('data-layout', 'horizontal');
        document.documentElement.setAttribute('data-topbar', 'light');
        document.documentElement.setAttribute('data-sidebar', 'dark');
        document.documentElement.setAttribute('data-sidebar-size', 'lg');
        document.documentElement.setAttribute('data-layout-style', 'default');
        document.documentElement.setAttribute('data-layout-mode', 'light');
        document.documentElement.setAttribute('data-layout-width', 'fluid');
        document.documentElement.setAttribute('data-layout-position', 'fixed');
    }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
        const rightBar = document.getElementById('theme-settings-offcanvas');
        if (rightBar != null) {
            rightBar.classList.toggle('show');
            rightBar.setAttribute('style', "visibility: visible;");
        }
    }
    /**
     * On mobile toggle button clicked
     */
    onToggleMobileMenu() {
        if (window.screen.width < 1024) {
            document.body.classList.toggle('menu');
        }
    }
}
HorizontalComponent.ɵfac = function HorizontalComponent_Factory(t) { return new (t || HorizontalComponent)(); };
HorizontalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HorizontalComponent, selectors: [["app-horizontal"]], decls: 8, vars: 0, consts: [["id", "layout-wrapper"], [3, "mobileMenuButtonClicked"], [1, "main-content"], [1, "page-content"], [1, "container-fluid"]], template: function HorizontalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mobileMenuButtonClicked", function HorizontalComponent_Template_app_topbar_mobileMenuButtonClicked_1_listener() { return ctx.onToggleMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-horizontal-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__.TopbarComponent, _horizontal_topbar_horizontal_topbar_component__WEBPACK_IMPORTED_MODULE_1__.HorizontalTopbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: [".container-fluid[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  max-width: 97% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoiaG9yaXpvbnRhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogOTclICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 76774:
/*!*********************************************!*\
  !*** ./src/app/layouts/layout.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _layout_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.model */ 50965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/event.service */ 13117);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertical/vertical.component */ 27198);
/* harmony import */ var _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./horizontal/horizontal.component */ 18807);
/* harmony import */ var _two_column_two_column_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./two-column/two-column.component */ 96486);







function LayoutComponent_app_vertical_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-vertical");
} }
function LayoutComponent_app_horizontal_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-horizontal");
} }
function LayoutComponent_app_two_column_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-two-column");
} }
/**
 * Layout Component
 */
class LayoutComponent {
    constructor(eventService) {
        this.eventService = eventService;
    }
    ngOnInit() {
        this.layoutType = _layout_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_HORIZONTAL;
        // listen to event and change the layout, theme, etc
        this.eventService.subscribe('changeLayout', (layout) => {
            this.layoutType = layout;
        });
    }
    /**
    * Check if the vertical layout is requested
    */
    isVerticalLayoutRequested() {
        return this.layoutType === _layout_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_VERTICAL;
    }
    /**
     * Check if the horizontal layout is requested
     */
    isHorizontalLayoutRequested() {
        return this.layoutType === _layout_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_HORIZONTAL;
    }
    /**
     * Check if the horizontal layout is requested
     */
    isTwoColumnLayoutRequested() {
        return this.layoutType === _layout_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_TWOCOLUMN;
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService)); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 3, vars: 3, consts: [[4, "ngIf"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, LayoutComponent_app_vertical_0_Template, 1, 0, "app-vertical", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LayoutComponent_app_horizontal_1_Template, 1, 0, "app-horizontal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LayoutComponent_app_two_column_2_Template, 1, 0, "app-two-column", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isVerticalLayoutRequested());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isHorizontalLayoutRequested());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isTwoColumnLayoutRequested());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_2__.VerticalComponent, _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_3__.HorizontalComponent, _two_column_two_column_component__WEBPACK_IMPORTED_MODULE_4__.TwoColumnComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 50965:
/*!*****************************************!*\
  !*** ./src/app/layouts/layout.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LAYOUT_VERTICAL": () => (/* binding */ LAYOUT_VERTICAL),
/* harmony export */   "LAYOUT_HORIZONTAL": () => (/* binding */ LAYOUT_HORIZONTAL),
/* harmony export */   "LAYOUT_TWOCOLUMN": () => (/* binding */ LAYOUT_TWOCOLUMN),
/* harmony export */   "LAYOUT_MODE": () => (/* binding */ LAYOUT_MODE),
/* harmony export */   "LAYOUT_WIDTH": () => (/* binding */ LAYOUT_WIDTH),
/* harmony export */   "LAYOUT_POSITION": () => (/* binding */ LAYOUT_POSITION),
/* harmony export */   "TOPBAR": () => (/* binding */ TOPBAR),
/* harmony export */   "SIDEBAR_SIZE": () => (/* binding */ SIDEBAR_SIZE),
/* harmony export */   "SIDEBAR_VIEW": () => (/* binding */ SIDEBAR_VIEW),
/* harmony export */   "SIDEBAR_COLOR": () => (/* binding */ SIDEBAR_COLOR)
/* harmony export */ });
// export layout related constants
const LAYOUT_VERTICAL = 'vertical';
const LAYOUT_HORIZONTAL = 'horizontal';
const LAYOUT_TWOCOLUMN = 'twocolumn';
const LAYOUT_MODE = 'light';
const LAYOUT_WIDTH = 'fluid';
const LAYOUT_POSITION = 'fixed';
const TOPBAR = 'light';
const SIDEBAR_SIZE = 'lg';
const SIDEBAR_VIEW = 'default';
const SIDEBAR_COLOR = 'light';


/***/ }),

/***/ 52372:
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutsModule": () => (/* binding */ LayoutsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/services/language.service */ 77524);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-feather */ 5601);
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-feather/icons */ 6252);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component */ 76774);
/* harmony import */ var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertical/vertical.component */ 27198);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topbar/topbar.component */ 24016);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 79504);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ 84158);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rightsidebar/rightsidebar.component */ 56034);
/* harmony import */ var _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./horizontal/horizontal.component */ 18807);
/* harmony import */ var _horizontal_topbar_horizontal_topbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./horizontal-topbar/horizontal-topbar.component */ 771);
/* harmony import */ var _two_column_two_column_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./two-column/two-column.component */ 96486);
/* harmony import */ var _two_column_sidebar_two_column_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./two-column-sidebar/two-column-sidebar.component */ 93125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);







// Feather Icon


// Component pages












class LayoutsModule {
}
LayoutsModule.ɵfac = function LayoutsModule_Factory(t) { return new (t || LayoutsModule)(); };
LayoutsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: LayoutsModule });
LayoutsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavModule,
            simplebar_angular__WEBPACK_IMPORTED_MODULE_15__.SimplebarAngularModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbTooltipModule,
            angular_feather__WEBPACK_IMPORTED_MODULE_17__.FeatherModule.pick(angular_feather_icons__WEBPACK_IMPORTED_MODULE_18__.allIcons),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](LayoutsModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent,
        _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_2__.VerticalComponent,
        _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__.TopbarComponent,
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.SidebarComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent,
        _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_6__.RightsidebarComponent,
        _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_7__.HorizontalComponent,
        _horizontal_topbar_horizontal_topbar_component__WEBPACK_IMPORTED_MODULE_8__.HorizontalTopbarComponent,
        _two_column_two_column_component__WEBPACK_IMPORTED_MODULE_9__.TwoColumnComponent,
        _two_column_sidebar_two_column_sidebar_component__WEBPACK_IMPORTED_MODULE_10__.TwoColumnSidebarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_15__.SimplebarAngularModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbTooltipModule, angular_feather__WEBPACK_IMPORTED_MODULE_17__.FeatherModule], exports: [_rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_6__.RightsidebarComponent] }); })();


/***/ }),

/***/ 56034:
/*!****************************************************************!*\
  !*** ./src/app/layouts/rightsidebar/rightsidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightsidebarComponent": () => (/* binding */ RightsidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _layout_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout.model */ 50965);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/event.service */ 13117);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);





/**
 * Right Sidebar component
 */
class RightsidebarComponent {
    constructor(eventService) {
        this.eventService = eventService;
        this.settingsButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.layout = _layout_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_VERTICAL;
        this.mode = _layout_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_MODE;
        this.width = _layout_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_WIDTH;
        this.position = _layout_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_POSITION;
        this.topbar = _layout_model__WEBPACK_IMPORTED_MODULE_0__.TOPBAR;
        this.size = _layout_model__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_SIZE;
        this.sidebarView = _layout_model__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_VIEW;
        this.sidebar = _layout_model__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_COLOR;
        this.attribute = '';
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.attribute = '';
            this.attribute = document.documentElement.getAttribute('data-layout');
            if (this.attribute == 'vertical') {
                const vertical = document.getElementById('customizer-layout01');
                if (vertical != null) {
                    vertical.setAttribute('checked', 'true');
                }
            }
            if (this.attribute == 'horizontal') {
                const horizontal = document.getElementById('customizer-layout02');
                if (horizontal != null) {
                    horizontal.setAttribute('checked', 'true');
                }
            }
            if (this.attribute == 'twocolumn') {
                const Twocolumn = document.getElementById('customizer-layout03');
                if (Twocolumn != null) {
                    Twocolumn.setAttribute('checked', 'true');
                }
            }
        }, 0);
    }
    /**
     * Toggles the right sidebar
     */
    toggleRightSidebar() {
        this.settingsButtonClicked.emit();
    }
    /**
     * Hide the sidebar
     */
    hide() {
        document.body.classList.remove('right-bar-enabled');
        const rightBar = document.getElementById('theme-settings-offcanvas');
        if (rightBar != null) {
            rightBar.classList.remove('show');
            rightBar.removeAttribute('style');
        }
    }
    /**
     * Change the layout onclick
     * @param layout Change the layout
     */
    changeLayout(layout) {
        this.eventService.broadcast('changeLayout', layout);
    }
}
RightsidebarComponent.ɵfac = function RightsidebarComponent_Factory(t) { return new (t || RightsidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService)); };
RightsidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RightsidebarComponent, selectors: [["app-rightsidebar"]], inputs: { currentView: "currentView", pageGuide: "pageGuide" }, outputs: { settingsButtonClicked: "settingsButtonClicked" }, decls: 12, vars: 2, consts: [[1, "customizer-setting", "d-none", "d-md-block"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#theme-settings-offcanvas", "aria-controls", "theme-settings-offcanvas", 1, "btn-info", "btn-rounded", "shadow-lg", "btn", "btn-icon", "btn-lg", "p-2", 3, "click"], ["ngbTooltip", "HELP", 1, "ri-question-fill", "fs-22"], ["tabindex", "-1", "id", "theme-settings-offcanvas", 1, "w-50", "offcanvas", "offcanvas-end", "border-0"], [1, "d-flex", "align-items-center", "p-3", "offcanvas-header"], [1, "m-0", "me-2"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-dark", "ms-auto", 3, "click"], [1, "offcanvas-body", "px-3"], ["data-simplebar", "", 1, "h-100"], [1, "card"], [1, "card-body", 3, "innerHTML"]], template: function RightsidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RightsidebarComponent_Template_div_click_1_listener() { return ctx.toggleRightSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RightsidebarComponent_Template_button_click_7_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Quick Guide | ", ctx.currentView, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.pageGuide, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltip], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodHNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1121:
/*!*****************************************!*\
  !*** ./src/app/layouts/sidebar/menu.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU": () => (/* binding */ MENU),
/* harmony export */   "SHARED_MENU": () => (/* binding */ SHARED_MENU),
/* harmony export */   "AUTHOR_MENU": () => (/* binding */ AUTHOR_MENU),
/* harmony export */   "MODERATOR_MENU": () => (/* binding */ MODERATOR_MENU),
/* harmony export */   "EXAMINER_MENU": () => (/* binding */ EXAMINER_MENU),
/* harmony export */   "ANALYTICS_MENU": () => (/* binding */ ANALYTICS_MENU)
/* harmony export */ });
const MENU = [
    {
        id: 11,
        label: 'MENUITEMS.DASHBOARD.TEXT',
        link: '/itembank/dashboard',
        role: ['AUTHOR', 'MODERATOR', 'ADMIN', 'EXAMINER', 'ANALYTICS'],
        icon: 'grid',
    },
    {
        id: 12,
        label: 'MENUITEMS.USERS.TEXT',
        link: '/itembank/users',
        role: ['ADMIN'],
        icon: 'users',
    },
    {
        id: 13,
        label: 'MENUITEMS.TAGS.TEXT',
        link: '/itembank/tags',
        role: ['AUTHOR', 'MODERATOR', 'ADMIN', 'EXAMINER'],
        icon: 'tag',
    },
    {
        id: 14,
        label: 'MENUITEMS.PASSAGE.TEXT',
        link: '/itembank/passages',
        role: ['AUTHOR', 'MODERATOR', 'ADMIN'],
        icon: 'file-text',
    },
    {
        id: 15,
        label: 'MENUITEMS.ASSESSMENT_TEMPLATES.TEXT',
        link: '/itembank/assessment-templates',
        icon: 'hash',
        role: ['ADMIN', 'EXAMINER'],
        subItems: [
            {
                id: 1,
                label: 'MENUITEMS.ASSESSMENT_TEMPLATES.LIST.ASSESSMENT DETAILS',
                link: '/itembank/templates/assessment-details',
                parentId: 15,
            },
            {
                id: 2,
                label: 'MENUITEMS.ASSESSMENT_TEMPLATES.LIST.SECTION TEMPLATES',
                link: '/itembank/templates/assessment-section',
                parentId: 15,
            },
            {
                id: 3,
                label: 'MENUITEMS.ASSESSMENT_TEMPLATES.LIST.ASSESSMENT SETTINGS',
                link: '/itembank/templates/assessment-settings',
                parentId: 15,
            },
        ],
    },
    {
        id: 16,
        label: 'MENUITEMS.SUBJECTS.TEXT',
        link: '/itembank/subjects',
        role: ['AUTHOR', 'MODERATOR', 'ADMIN'],
        icon: 'folder',
    },
    {
        id: 17,
        label: 'MENUITEMS.ASSESSMENT.TEXT',
        link: '/itembank/assessment',
        role: ['MODERATOR', 'ADMIN'],
        icon: 'monitor',
    },
    {
        id: 18,
        label: 'MENUITEMS.MODERATION.TEXT',
        link: '/itembank/moderation',
        role: ['MODERATOR', 'ADMIN'],
        icon: 'user-check',
    },
    {
        id: 19,
        label: 'MENUITEMS.RECYCLE.TEXT',
        link: '/itembank/recycle',
        role: ['ADMIN', 'EXAMINER'],
        icon: 'repeat',
    },
    {
        id: 20,
        label: 'MENUITEMS.SETTINGS.TEXT',
        link: '/itembank/settings',
        role: ['ADMIN'],
        icon: 'settings',
    },
    {
        id: 21,
        label: 'MENUITEMS.LOGS.TEXT',
        link: '/itembank/logs',
        role: ['AUTHOR', 'MODERATOR', 'ADMIN', 'EXAMINER', 'ANALYTICS'],
        icon: 'activity',
    },
];
const SHARED_MENU = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARD.TEXT',
        link: '/itembank/dashboard',
        icon: 'grid',
    },
    {
        id: 2,
        label: 'MENUITEMS.TAGS.TEXT',
        link: '/itembank/tags',
        icon: 'tag',
    },
    {
        id: 5,
        label: 'MENUITEMS.LOGS.TEXT',
        link: '/itembank/logs',
        icon: 'activity',
    },
];
const AUTHOR_MENU = [
    /* {
      id: 2,
      label: 'MENUITEMS.TAGS.TEXT',
      link: '/itembank/tags',
      icon: 'tag',
    }, */
    {
        id: 3,
        label: 'MENUITEMS.SUBJECTS.TEXT',
        link: '/itembank/subjects',
        role: ['AUTHOR'],
        icon: 'folder',
    }
];
const MODERATOR_MENU = [
    /* {
      id: 1,
      label: 'MENUITEMS.DASHBOARD.TEXT',
      link: '/itembank/dashboard',
      icon: 'grid',
    }, */
    {
        id: 2,
        label: 'MENUITEMS.TAGS.TEXT',
        link: '/itembank/tags',
        icon: 'tag',
    },
    /* {
      id: 3,
      label: 'MENUITEMS.LOGS.TEXT',
      link: '/itembank/logs',
      icon: 'activity',
    }, */
    {
        id: 3,
        label: 'MENUITEMS.MODERATION.TEXT',
        link: '/itembank/moderation',
        icon: 'user-check',
    },
];
const EXAMINER_MENU = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARD.TEXT',
        link: '/itembank/dashboard',
        icon: 'grid',
    },
    {
        id: 2,
        label: 'MENUITEMS.TAGS.TEXT',
        link: '/itembank/tags',
        icon: 'tag',
    },
    {
        id: 3,
        label: 'MENUITEMS.ASSESSMENT.TEXT',
        link: '/itembank/assessment',
        icon: 'monitor',
    },
    {
        id: 4,
        label: 'MENUITEMS.LOGS.TEXT',
        link: '/itembank/logs',
        icon: 'activity',
    },
];
const ANALYTICS_MENU = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARD.TEXT',
        link: '/itembank/dashboard',
        icon: 'grid',
    },
    {
        id: 2,
        label: 'MENUITEMS.LOGS.TEXT',
        link: '/itembank/logs',
        icon: 'activity',
    },
];


/***/ }),

/***/ 79504:
/*!******************************************************!*\
  !*** ./src/app/layouts/sidebar/sidebar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ 1121);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-feather */ 5601);









const _c0 = ["sideMenu"];
function SidebarComponent_ng_container_15_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, item_r1.label));
} }
function SidebarComponent_ng_container_15_li_2_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("badge badge-pill ", item_r1.badge.variant, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, item_r1.badge.text));
} }
const _c1 = function (a0, a1) { return { "has-arrow": a0, "has-dropdown": a1 }; };
function SidebarComponent_ng_container_15_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_ng_container_15_li_2_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r10.toggleItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i-feather", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SidebarComponent_ng_container_15_li_2_a_1_span_5_Template, 3, 6, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](6, _c1, !item_r1.badge, item_r1.badge));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, item_r1.label), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.badge);
} }
function SidebarComponent_ng_container_15_li_2_a_2_i_feather_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i-feather", 23);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", item_r1.icon);
} }
function SidebarComponent_ng_container_15_li_2_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("badge ", item_r1.badge.variant, " float-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, item_r1.badge.text));
} }
function SidebarComponent_ng_container_15_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_ng_container_15_li_2_a_2_i_feather_1_Template, 1, 1, "i-feather", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SidebarComponent_ng_container_15_li_2_a_2_span_5_Template, 3, 6, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, item_r1.label), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.badge);
} }
function SidebarComponent_ng_container_15_li_2_div_3_ul_1_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_ng_container_15_li_2_div_3_ul_1_li_1_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6); return ctx_r24.updateActive($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", subitem_r20.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-parent", subitem_r20.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, subitem_r20.label), " ");
} }
function SidebarComponent_ng_container_15_li_2_div_3_ul_1_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_ng_container_15_li_2_div_3_ul_1_li_1_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6); return ctx_r27.toggleSubItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-parent", subitem_r20.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, subitem_r20.label), " ");
} }
function SidebarComponent_ng_container_15_li_2_div_3_ul_1_li_1_div_3_ul_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_ng_container_15_li_2_div_3_ul_1_li_1_div_3_ul_1_li_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](8); return ctx_r33.updateActive($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subSubitem_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", subSubitem_r32.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-parent", subSubitem_r32.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, subSubitem_r32.label), " ");
} }
function SidebarComponent_ng_container_15_li_2_div_3_ul_1_li_1_div_3_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_ng_container_15_li_2_div_3_ul_1_li_1_div_3_ul_1_li_1_Template, 4, 5, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", subitem_r20.subItems);
} }
function SidebarComponent_ng_container_15_li_2_div_3_ul_1_li_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_ng_container_15_li_2_div_3_ul_1_li_1_div_3_ul_1_Template, 2, 1, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r23.hasItems(subitem_r20));
} }
function SidebarComponent_ng_container_15_li_2_div_3_ul_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_ng_container_15_li_2_div_3_ul_1_li_1_a_1_Template, 3, 5, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SidebarComponent_ng_container_15_li_2_div_3_ul_1_li_1_a_2_Template, 3, 4, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidebarComponent_ng_container_15_li_2_div_3_ul_1_li_1_div_3_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r19.hasItems(subitem_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.hasItems(subitem_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.hasItems(subitem_r20));
} }
function SidebarComponent_ng_container_15_li_2_div_3_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_ng_container_15_li_2_div_3_ul_1_li_1_Template, 4, 3, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.subItems);
} }
function SidebarComponent_ng_container_15_li_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_ng_container_15_li_2_div_3_ul_1_Template, 2, 1, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.hasItems(item_r1));
} }
function SidebarComponent_ng_container_15_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_ng_container_15_li_2_a_1_Template, 6, 9, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SidebarComponent_ng_container_15_li_2_a_2_Template, 6, 6, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidebarComponent_ng_container_15_li_2_div_3_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.hasItems(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.hasItems(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.hasItems(item_r1));
} }
function SidebarComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_ng_container_15_li_1_Template, 4, 3, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SidebarComponent_ng_container_15_li_2_Template, 4, 3, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.isTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r1.isTitle && !item_r1.isLayout);
} }
class SidebarComponent {
    constructor(router, translate, user) {
        this.router = router;
        this.translate = translate;
        this.user = user;
        this.toggle = true;
        this.menuItems = [];
        this.authorMenu = [];
        this.mobileMenuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        translate.setDefaultLang('en');
    }
    ngOnInit() {
        this.currentUser = this.user.getCurrentUser();
        // Menu Items
        let sidemenus = _menu__WEBPACK_IMPORTED_MODULE_0__.MENU;
        sidemenus.forEach(element => {
            for (let i = 0; i < element.role.length; i++) {
                if (this.currentUser.authorities.includes(element.role[i]) && !this.menuItems.includes(element)) {
                    this.menuItems.push(element);
                }
            }
        });
    }
    /***
     * Activate droup down set
     */
    ngAfterViewInit() {
        this.initActiveMenu();
    }
    removeActivation(items) {
        items.forEach((item) => {
            if (item.classList.contains("menu-link")) {
                if (!item.classList.contains("active")) {
                    console.log("i am here");
                    item.setAttribute("aria-expanded", false);
                }
                (item.nextElementSibling) ? item.nextElementSibling.classList.remove("show") : null;
            }
            if (item.classList.contains("nav-link")) {
                if (item.nextElementSibling) {
                    item.nextElementSibling.classList.remove("show");
                }
                item.setAttribute("aria-expanded", false);
            }
            item.classList.remove("active");
        });
    }
    toggleSubItem(event) {
        if (event.target && event.target.nextElementSibling)
            event.target.nextElementSibling.classList.toggle("show");
    }
    ;
    toggleItem(event) {
        let isCurrentMenuId = event.target.closest('a.nav-link');
        let isMenu = isCurrentMenuId.nextElementSibling;
        if (isMenu.classList.contains("show")) {
            isMenu.classList.remove("show");
            isCurrentMenuId.setAttribute("aria-expanded", "false");
        }
        else {
            let dropDowns = Array.from(document.querySelectorAll('#navbar-nav .show'));
            dropDowns.forEach((node) => {
                node.classList.remove('show');
            });
            (isMenu) ? isMenu.classList.add('show') : null;
            const ul = document.getElementById("navbar-nav");
            if (ul) {
                const iconItems = Array.from(ul.getElementsByTagName("a"));
                let activeIconItems = iconItems.filter((x) => x.classList.contains("active"));
                activeIconItems.forEach((item) => {
                    item.setAttribute('aria-expanded', "false");
                    item.classList.remove("active");
                });
            }
            isCurrentMenuId.setAttribute("aria-expanded", "true");
            if (isCurrentMenuId) {
                this.activateParentDropdown(isCurrentMenuId);
            }
        }
    }
    // remove active items of two-column-menu
    activateParentDropdown(item) {
        item.classList.add("active");
        let parentCollapseDiv = item.closest(".collapse.menu-dropdown");
        if (parentCollapseDiv) {
            //   // to set aria expand true remaining
            parentCollapseDiv.classList.add("show");
            parentCollapseDiv.parentElement.children[0].classList.add("active");
            parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
            if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
                    parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
            }
            return false;
        }
        return false;
    }
    updateActive(event) {
        const ul = document.getElementById("navbar-nav");
        if (ul) {
            const items = Array.from(ul.querySelectorAll("a.nav-link"));
            this.removeActivation(items);
        }
        this.activateParentDropdown(event.target);
    }
    initActiveMenu() {
        const pathName = window.location.pathname;
        const ul = document.getElementById("navbar-nav");
        if (ul) {
            const items = Array.from(ul.querySelectorAll("a.nav-link"));
            let activeItems = items.filter((x) => x.classList.contains("active"));
            this.removeActivation(activeItems);
            let matchingMenuItem = items.find((x) => {
                return x.pathname === pathName;
            });
            if (matchingMenuItem) {
                this.activateParentDropdown(matchingMenuItem);
            }
        }
    }
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
        return item.subItems !== undefined ? item.subItems.length > 0 : false;
    }
    /**
     * Toggle the menu bar when having mobile screen
     */
    toggleMobileMenu(event) {
        var sidebarsize = document.documentElement.getAttribute("data-sidebar-size");
        if (sidebarsize == 'sm-hover-active') {
            document.documentElement.setAttribute("data-sidebar-size", 'sm-hover');
        }
        else {
            document.documentElement.setAttribute("data-sidebar-size", 'sm-hover-active');
        }
    }
    /**
     * SidebarHide modal
     * @param content modal content
     */
    SidebarHide() {
        document.body.classList.remove('vertical-sidebar-enable');
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sideMenu = _t.first);
    } }, outputs: { mobileMenuButtonClicked: "mobileMenuButtonClicked" }, decls: 17, vars: 1, consts: [[1, "app-menu", "navbar-menu"], [1, "navbar-brand-box"], ["routerLink", "/", 1, "logo", "logo-dark"], [1, "mt-3", "font-weight-bold", "text-left"], ["routerLink", "/", 1, "logo", "logo-light"], ["type", "button", "id", "vertical-hover", 1, "btn", "btn-sm", "p-0", "fs-20", "header-item", "float-end", "btn-vertical-sm-hover", 3, "click"], [1, "ri-record-circle-line"], ["id", "scrollbar"], [1, "container-fluid"], ["id", "two-column-menu"], [1, "sidebar-menu-scroll", 2, "max-height", "100vh"], ["id", "navbar-nav", 1, "metismenu", "list-unstyled", "navbar-nav"], [4, "ngFor", "ngForOf"], [1, "vertical-overlay", 3, "click"], ["class", "menu-title", 4, "ngIf"], ["class", "nav-item", 4, "ngIf"], [1, "menu-title"], ["data-key", "t-menu"], [1, "nav-item"], ["href", "javascript:void(0);", "class", "is-parent nav-link menu-link", "data-bs-toggle", "collapse", "aria-expanded", "false", 3, "ngClass", "click", 4, "ngIf"], ["class", "side-nav-link-ref nav-link menu-link", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "collapse menu-dropdown", 4, "ngIf"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "aria-expanded", "false", 1, "is-parent", "nav-link", "menu-link", 3, "ngClass", "click"], [1, "icon", "nav-icon", 3, "name"], [1, ""], [3, "class", 4, "ngIf"], ["routerLinkActive", "active", 1, "side-nav-link-ref", "nav-link", "menu-link", 3, "routerLink"], ["class", "icon nav-icon", 3, "name", 4, "ngIf"], [1, "collapse", "menu-dropdown"], ["class", "nav nav-sm flex-column", "aria-expanded", "false", 4, "ngIf"], ["aria-expanded", "false", 1, "nav", "nav-sm", "flex-column"], ["class", "nav-item", 4, "ngFor", "ngForOf"], ["class", "nav-link", "routerLinkActive", "active", 3, "routerLink", "click", 4, "ngIf"], ["class", "nav-link", "href", "javascript:void(0);", "data-bs-toggle", "collapse", "aria-expanded", "false", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "click"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "aria-expanded", "false", 1, "nav-link", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "AlphaExam");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "AlphaExam");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_8_listener($event) { return ctx.toggleMobileMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ngx-simplebar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SidebarComponent_ng_container_15_Template, 3, 2, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_16_listener() { return ctx.SidebarHide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, simplebar_angular__WEBPACK_IMPORTED_MODULE_5__.SimplebarAngularComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, angular_feather__WEBPACK_IMPORTED_MODULE_7__.FeatherComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 24016:
/*!****************************************************!*\
  !*** ./src/app/layouts/topbar/topbar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopbarComponent": () => (/* binding */ TopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/event.service */ 13117);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/language.service */ 77524);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ 53694);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/authentication.service */ 75973);
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/authfake.service */ 92293);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_pages_items_item_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/items/item-http.service */ 45911);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);


//Logout














function TopbarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TopbarComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TopbarComponent_div_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r2.routeToProfile; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "h6", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TopbarComponent_div_21_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.currentUser.firstName.length <= 8 ? ctx_r1.currentUser.firstName : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 6, ctx_r1.currentUser.firstName.substring(0, 8) + "..."), " ", ctx_r1.currentUser.firstName.length <= 8 ? ctx_r1.currentUser.lastName : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 8, ctx_r1.currentUser.lastName.substring(0, 8) + "..."), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.currentUser.username.length <= 12 ? ctx_r1.currentUser.username : ctx_r1.currentUser.username.substring(0, 12) + "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.currentUser.authorities[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Welcome ", ctx_r1.currentUser.firstName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("routerLink", "/examalpha/users/view/", ctx_r1.currentUser.id, "");
} }
class TopbarComponent {
    constructor(document, eventService, languageService, _cookiesService, translate, authService, authenticationService, authFackservice, userService, router, itemService, notifier) {
        this.document = document;
        this.eventService = eventService;
        this.languageService = languageService;
        this._cookiesService = _cookiesService;
        this.translate = translate;
        this.authService = authService;
        this.authenticationService = authenticationService;
        this.authFackservice = authFackservice;
        this.userService = userService;
        this.router = router;
        this.itemService = itemService;
        this.notifier = notifier;
        this.notifications = [];
        this.approved = [];
        this.rejected = [];
        this.mobileMenuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.showAppAssets = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.showAppAssets;
        /***
         * Language Listing
         */
        this.listLang = [
            { text: 'English', flag: 'assets/images/flags/us.svg', lang: 'en' },
            { text: 'Española', flag: 'assets/images/flags/spain.svg', lang: 'es' },
            { text: 'Deutsche', flag: 'assets/images/flags/germany.svg', lang: 'de' },
            { text: 'Italiana', flag: 'assets/images/flags/italy.svg', lang: 'it' },
            { text: 'русский', flag: 'assets/images/flags/russia.svg', lang: 'ru' },
            { text: '中国人', flag: 'assets/images/flags/china.svg', lang: 'ch' },
            { text: 'français', flag: 'assets/images/flags/french.svg', lang: 'fr' },
        ];
    }
    ngOnInit() {
        this.element = document.documentElement;
        this.getCurrentUserData();
        /* setInterval(() => {
          this.getNotifications();
        }, 10000); */
        /* setInterval() */
        // Cookies wise Language set
        this.cookieValue = this._cookiesService.get('lang');
        const val = this.listLang.filter((x) => x.lang === this.cookieValue);
        this.countryName = val.map((element) => element.text);
        if (val.length === 0) {
            if (this.flagvalue === undefined) {
                this.valueset = 'assets/images/flags/us.svg';
            }
        }
        else {
            this.flagvalue = val.map((element) => element.flag);
        }
    }
    getCurrentUserData() {
        this.currentUser = this.userService.getCurrentUser()
            ? this.userService.getCurrentUser()
            : this.userService.getCurrentUserAfterReload();
        this.getNotifications();
    }
    viewAllNotifications() {
        this.router.navigate(['/examalpha/notifications']);
    }
    /**
     * Toggle the menu bar when having mobile screen
     */
    toggleMobileMenu(event) {
        event.preventDefault();
        this.mobileMenuButtonClicked.emit();
    }
    getNotifications() {
        /* if (
          this.currentUser.authority === 'AUTHOR' ||
          this.currentUser.authorities.includes('MODERATOR')
        ) { */
        this.itemService
            .fetchAuthorModerationNotifications(this.currentUser.id)
            .subscribe((value) => {
            if (value) {
                value.content.forEach((notification) => {
                    if (notification.messageRead == false &&
                        notification.status == 'ACCEPTED') {
                        this.notifications.push(notification);
                        this.approved.push(notification);
                    }
                    if (notification.messageRead == false &&
                        notification.status == 'REJECTED') {
                        this.notifications.push(notification);
                        this.rejected.push(notification);
                    }
                });
                /* this.notifications.content.forEach((notification) => {
                    if(notification.status == 'REJECTED'){
                      this.rejected.push(notification);
                    }else{
                      this.approved.push(notification);
                    }
                  }) */
                // console.log('NOTIFICATIONS: ', this.notifications);
            }
        }, (error) => {
            this.notifier.notify('error', `${error.error.message}`);
        });
        /* } */
    }
    /**
     * Fullscreen method
     */
    fullscreen() {
        document.body.classList.toggle('fullscreen-enable');
        if (!document.fullscreenElement &&
            !this.element.mozFullScreenElement &&
            !this.element.webkitFullscreenElement) {
            if (this.element.requestFullscreen) {
                this.element.requestFullscreen();
            }
            else if (this.element.mozRequestFullScreen) {
                /* Firefox */
                this.element.mozRequestFullScreen();
            }
            else if (this.element.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.element.webkitRequestFullscreen();
            }
            else if (this.element.msRequestFullscreen) {
                /* IE/Edge */
                this.element.msRequestFullscreen();
            }
        }
        else {
            if (this.document.exitFullscreen) {
                this.document.exitFullscreen();
            }
            else if (this.document.mozCancelFullScreen) {
                /* Firefox */
                this.document.mozCancelFullScreen();
            }
            else if (this.document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                this.document.webkitExitFullscreen();
            }
            else if (this.document.msExitFullscreen) {
                /* IE/Edge */
                this.document.msExitFullscreen();
            }
        }
    }
    /**
     * Topbar Light-Dark Mode Change
     */
    changeMode(mode) {
        this.mode = mode;
        this.eventService.broadcast('changeMode', mode);
        switch (mode) {
            case 'light':
                document.body.setAttribute('data-layout-mode', 'light');
                document.body.setAttribute('data-sidebar', 'light');
                break;
            case 'dark':
                document.body.setAttribute('data-layout-mode', 'dark');
                document.body.setAttribute('data-sidebar', 'dark');
                break;
            default:
                document.body.setAttribute('data-layout-mode', 'light');
                break;
        }
    }
    /***
     * Language Value Set
     */
    setLanguage(text, lang, flag) {
        this.countryName = text;
        this.flagvalue = flag;
        this.cookieValue = lang;
        this.languageService.setLanguage(lang);
    }
    /**
     * Logout the user
     */
    logout() {
        /* if (environment.defaultauth === 'firebase') {
          this.authService.logout();
        } else {
          this.authFackservice.logout();
        } */
        this.authService.logoutUser().subscribe((value) => {
            // console.log(value);
        });
        this.router.navigate(['/sign-in']);
    }
    routeToProfile() {
        if (this.currentUser.authorities.includes('ADMIN')) {
            this.router.navigate(['/itembank/users/view/' + this.currentUser.id]);
        }
    }
}
TopbarComponent.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_pages_items_item_http_service__WEBPACK_IMPORTED_MODULE_6__.ItemHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_12__.NotifierService)); };
TopbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["app-topbar"]], outputs: { mobileMenuButtonClicked: "mobileMenuButtonClicked" }, decls: 22, vars: 2, consts: [["id", "page-topbar"], [1, "layout-width"], [1, "navbar-header"], [1, "d-flex"], ["class", "navbar-brand-box horizontal-logo", 4, "ngIf"], ["type", "button", "id", "topnav-hamburger-icon", 1, "btn", "btn-sm", "px-3", "fs-16", "header-item", "vertical-menu-btn", "topnav-hamburger", 3, "click"], [1, "hamburger-icon"], [1, "d-flex", "align-items-center"], ["ngbDropdown", "", 1, "dropdown", "d-md-none", "topbar-head-dropdown", "header-item"], ["type", "button", "id", "page-header-search-dropdown", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-icon", "btn-topbar", "btn-ghost-secondary", "rounded-circle"], [1, "bx", "bx-search", "fs-22", 2, "cursor", "pointer"], ["aria-labelledby", "page-header-search-dropdown", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "p-0"], [1, "p-3"], [1, "form-group", "m-0"], [1, "input-group"], ["type", "text", "placeholder", "Search ...", "aria-label", "Recipient's username", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "mdi", "mdi-magnify"], ["class", "dropdown ms-sm-3 header-item topbar-user", "ngbDropdown", "", 4, "ngIf"], [1, "navbar-brand-box", "horizontal-logo"], ["href", "javascript:void(0);", 1, "logo", "logo-dark"], [1, "logo-sm"], ["src", "assets/logo/EXPryLogoHor.png", "alt", "", "height", "22"], [1, "logo-lg"], ["src", "assets/logo/EXPryLogoHor.png", "alt", "", "height", "17"], ["href", "javascript:void(0);", 1, "logo", "logo-light"], ["ngbDropdown", "", 1, "dropdown", "ms-sm-3", "header-item", "topbar-user"], ["type", "button", "id", "page-header-user-dropdown", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", 3, "click"], ["src", "assets/logo/profile.png", "alt", "Header Avatar", 1, "rounded-circle", "header-profile-user"], [1, "text-start", "ms-xl-2"], [1, "d-none", "d-xl-inline-block", "ms-1", "fw-medium", "user-name-text"], [1, "d-none", "d-xl-block", "ms-1", "fs-12", "text-muted", "user-name-sub-text"], [1, "d-none", "d-xl-block", "ms-1", "fs-12"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-header"], [1, "dropdown-item", 3, "routerLink"], [1, "mdi", "mdi-account-circle", "text-muted", "fs-16", "align-middle", "me-1"], [1, "align-middle"], ["routerLink", "/examalpha/settings", 1, "dropdown-item"], [1, "ri-settings-5-fill", "text-muted", "fs-16", "align-middle", "me-1"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "click"], [1, "mdi", "mdi-logout", "text-muted", "fs-16", "align-middle", "me-1"], ["data-key", "t-logout", 1, "align-middle"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, TopbarComponent_div_4_Template, 11, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_5_listener($event) { return ctx.toggleMobileMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, TopbarComponent_div_21_Template, 29, 10, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showAppAssets);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.currentUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownMenu, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe], styles: [".layout-width[_ngcontent-%COMP%] {\n  max-width: 96% !important;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6InRvcGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXQtd2lkdGh7XHJcbiAgICBtYXgtd2lkdGg6IDk2JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn0iXX0= */"] });


/***/ }),

/***/ 68849:
/*!****************************************************!*\
  !*** ./src/app/layouts/two-column-sidebar/menu.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU": () => (/* binding */ MENU)
/* harmony export */ });
const MENU = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARD.TEXT',
        collapseid: 'sidebarDashboards',
        icon: 'home',
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.DASHBOARD.LIST.ANALYTICS',
                link: '/analytics',
                parentId: 2
            },
            {
                id: 4,
                label: 'MENUITEMS.DASHBOARD.LIST.CRM',
                link: '/crm',
                parentId: 2
            },
            {
                id: 5,
                label: 'MENUITEMS.DASHBOARD.LIST.ECOMMERCE',
                link: '',
                parentId: 2
            },
            {
                id: 6,
                label: 'MENUITEMS.DASHBOARD.LIST.CRYPTO',
                link: '/crypto',
                parentId: 2
            },
            {
                id: 7,
                label: 'MENUITEMS.DASHBOARD.LIST.PROJECTS',
                link: '/projects',
                parentId: 2
            }
        ]
    },
    {
        id: 8,
        label: 'MENUITEMS.APPS.TEXT',
        collapseid: 'sidebarApps',
        icon: 'grid',
        subItems: [
            {
                id: 9,
                label: 'MENUITEMS.APPS.LIST.CALENDAR',
                link: '/calendar',
                parentId: 8
            },
            {
                id: 10,
                label: 'MENUITEMS.APPS.LIST.CHAT',
                link: '/chat',
                parentId: 8
            },
            {
                id: 11,
                label: 'MENUITEMS.APPS.LIST.MAILBOX',
                link: '/mailbox',
                parentId: 8
            },
            {
                id: 12,
                label: 'MENUITEMS.APPS.LIST.ECOMMERCE',
                link: '/mailbox',
                parentId: 8,
                collapseid: 'ecommerce',
                subItems: [
                    {
                        id: 13,
                        label: 'MENUITEMS.APPS.LIST.PRODUCTS',
                        link: '/ecommerce/products',
                        parentId: 12
                    },
                    {
                        id: 14,
                        label: 'MENUITEMS.APPS.LIST.PRODUCTDETAILS',
                        link: '/ecommerce/product-detail/1',
                        parentId: 12
                    },
                    {
                        id: 15,
                        label: 'MENUITEMS.APPS.LIST.CREATEPRODUCT',
                        link: '/ecommerce/add-product',
                        parentId: 12
                    },
                    {
                        id: 16,
                        label: 'MENUITEMS.APPS.LIST.ORDERS',
                        link: '/ecommerce/orders',
                        parentId: 12
                    },
                    {
                        id: 17,
                        label: 'MENUITEMS.APPS.LIST.ORDERDETAILS',
                        link: '/ecommerce/order-details',
                        parentId: 12
                    },
                    {
                        id: 18,
                        label: 'MENUITEMS.APPS.LIST.CUSTOMERS',
                        link: '/ecommerce/customers',
                        parentId: 12
                    },
                    {
                        id: 19,
                        label: 'MENUITEMS.APPS.LIST.SHOPPINGCART',
                        link: '/ecommerce/cart',
                        parentId: 12
                    },
                    {
                        id: 20,
                        label: 'MENUITEMS.APPS.LIST.CHECKOUT',
                        link: '/ecommerce/checkout',
                        parentId: 12
                    },
                    {
                        id: 21,
                        label: 'MENUITEMS.APPS.LIST.SELLERS',
                        link: '/ecommerce/sellers',
                        parentId: 12
                    },
                    {
                        id: 22,
                        label: 'MENUITEMS.APPS.LIST.SELLERDETAILS',
                        link: '/ecommerce/seller-details',
                        parentId: 12
                    }
                ]
            },
            {
                id: 23,
                label: 'MENUITEMS.APPS.LIST.PROJECTS',
                parentId: 8,
                subItems: [
                    {
                        id: 24,
                        label: 'MENUITEMS.APPS.LIST.LIST',
                        link: '/projects/list',
                        parentId: 23
                    },
                    {
                        id: 25,
                        label: 'MENUITEMS.APPS.LIST.OVERVIEW',
                        link: '/projects/overview',
                        parentId: 23
                    },
                    {
                        id: 26,
                        label: 'MENUITEMS.APPS.LIST.CREATEPROJECT',
                        link: '/projects/create',
                        parentId: 23
                    }
                ]
            },
            {
                id: 27,
                label: 'MENUITEMS.APPS.LIST.TASK',
                parentId: 8,
                subItems: [
                    {
                        id: 28,
                        label: 'MENUITEMS.APPS.LIST.KANBANBOARD',
                        link: '/tasks/kanban',
                        parentId: 27
                    },
                    {
                        id: 29,
                        label: 'MENUITEMS.APPS.LIST.LISTVIEW',
                        link: '/tasks/list-view',
                        parentId: 27
                    },
                    {
                        id: 30,
                        label: 'MENUITEMS.APPS.LIST.TASKDETAILS',
                        link: '/tasks/details',
                        parentId: 27
                    }
                ]
            },
            {
                id: 31,
                label: 'MENUITEMS.APPS.LIST.CRM',
                parentId: 8,
                subItems: [
                    {
                        id: 32,
                        label: 'MENUITEMS.APPS.LIST.CONTACTS',
                        link: '/crm/contacts',
                        parentId: 31
                    },
                    {
                        id: 33,
                        label: 'MENUITEMS.APPS.LIST.COMPANIES',
                        link: '/crm/companies',
                        parentId: 31
                    },
                    {
                        id: 34,
                        label: 'MENUITEMS.APPS.LIST.DEALS',
                        link: '/crm/deals',
                        parentId: 31
                    },
                    {
                        id: 35,
                        label: 'MENUITEMS.APPS.LIST.LEADS',
                        link: '/crm/leads',
                        parentId: 31
                    }
                ]
            },
            {
                id: 36,
                label: 'MENUITEMS.APPS.LIST.CRYPTO',
                parentId: 8,
                subItems: [
                    {
                        id: 37,
                        label: 'MENUITEMS.APPS.LIST.TRANSACTIONS',
                        link: '/crypto/transactions',
                        parentId: 36
                    },
                    {
                        id: 38,
                        label: 'MENUITEMS.APPS.LIST.BUY&SELL',
                        link: '/crypto/buy-sell',
                        parentId: 36
                    },
                    {
                        id: 38,
                        label: 'MENUITEMS.APPS.LIST.ORDERS',
                        link: '/crypto/orders',
                        parentId: 36
                    },
                    {
                        id: 39,
                        label: 'MENUITEMS.APPS.LIST.MYWALLET',
                        link: '/crypto/wallet',
                        parentId: 36
                    },
                    {
                        id: 40,
                        label: 'MENUITEMS.APPS.LIST.ICOLIST',
                        link: '/crypto/ico',
                        parentId: 36
                    },
                    {
                        id: 41,
                        label: 'MENUITEMS.APPS.LIST.KYCAPPLICATION',
                        link: '/crypto/kyc',
                        parentId: 36
                    }
                ]
            },
            {
                id: 42,
                label: 'MENUITEMS.APPS.LIST.INVOICES',
                parentId: 8,
                subItems: [
                    {
                        id: 43,
                        label: 'MENUITEMS.APPS.LIST.LISTVIEW',
                        link: '/invoices/list',
                        parentId: 42
                    },
                    {
                        id: 44,
                        label: 'MENUITEMS.APPS.LIST.DETAILS',
                        link: '/invoices/details',
                        parentId: 42
                    },
                    {
                        id: 45,
                        label: 'MENUITEMS.APPS.LIST.CREATEINVOICE',
                        link: '/invoices/create',
                        parentId: 42
                    }
                ]
            },
            {
                id: 46,
                label: 'MENUITEMS.APPS.LIST.SUPPORTTICKETS',
                parentId: 8,
                subItems: [
                    {
                        id: 47,
                        label: 'MENUITEMS.APPS.LIST.LISTVIEW',
                        link: '/tickets/list',
                        parentId: 46
                    },
                    {
                        id: 48,
                        label: 'MENUITEMS.APPS.LIST.TICKETDETAILS',
                        link: '/tickets/details',
                        parentId: 46
                    }
                ]
            },
        ]
    },
    {
        id: 54,
        label: 'MENUITEMS.PAGES.TEXT',
        isTitle: true
    },
    {
        id: 55,
        label: 'MENUITEMS.AUTHENTICATION.TEXT',
        collapseid: 'sidebarAuth',
        icon: 'users',
        subItems: [
            {
                id: 56,
                label: 'MENUITEMS.AUTHENTICATION.LIST.SIGNIN',
                parentId: 49,
                subItems: [
                    {
                        id: 57,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: '/auth/signin/basic',
                        parentId: 56
                    },
                    {
                        id: 58,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: '/auth/signin/cover',
                        parentId: 56
                    },
                ]
            },
            {
                id: 59,
                label: 'MENUITEMS.AUTHENTICATION.LIST.SIGNUP',
                parentId: 49,
                subItems: [
                    {
                        id: 60,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: '/auth/signup/basic',
                        parentId: 59
                    },
                    {
                        id: 61,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: '/auth/signup/cover',
                        parentId: 59
                    },
                ]
            },
            {
                id: 62,
                label: 'MENUITEMS.AUTHENTICATION.LIST.PASSWORDRESET',
                parentId: 49,
                subItems: [
                    {
                        id: 63,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: '/auth/pass-reset/basic',
                        parentId: 62
                    },
                    {
                        id: 64,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: '/auth/pass-reset/cover',
                        parentId: 62
                    },
                ]
            },
            {
                id: 65,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                parentId: 49,
                subItems: [
                    {
                        id: 66,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: '/auth/lockscreen/basic',
                        parentId: 65
                    },
                    {
                        id: 67,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: '/auth/lockscreen/cover',
                        parentId: 65
                    },
                ]
            },
            {
                id: 68,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGOUT',
                parentId: 49,
                subItems: [
                    {
                        id: 69,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: '/auth/logout/basic',
                        parentId: 68
                    },
                    {
                        id: 70,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: '/auth/logout/cover',
                        parentId: 68
                    },
                ]
            },
            {
                id: 71,
                label: 'MENUITEMS.AUTHENTICATION.LIST.SUCCESSMESSAGE',
                parentId: 49,
                subItems: [
                    {
                        id: 72,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: '/auth/success-msg/basic',
                        parentId: 71
                    },
                    {
                        id: 73,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: '/auth/success-msg/cover',
                        parentId: 71
                    },
                ]
            },
            {
                id: 74,
                label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
                parentId: 49,
                subItems: [
                    {
                        id: 75,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: '/auth/twostep/basic',
                        parentId: 74
                    },
                    {
                        id: 76,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: '/auth/twostep/cover',
                        parentId: 74
                    },
                ]
            },
            {
                id: 77,
                label: 'MENUITEMS.AUTHENTICATION.LIST.ERRORS',
                parentId: 49,
                subItems: [
                    {
                        id: 78,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.404BASIC',
                        link: '/auth/errors/404-basic',
                        parentId: 77
                    },
                    {
                        id: 79,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.404COVER',
                        link: '/auth/errors/404-cover',
                        parentId: 77
                    },
                    {
                        id: 80,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.404ALT',
                        link: '/auth/errors/404-alt',
                        parentId: 77
                    },
                    {
                        id: 81,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.500',
                        link: '/auth/errors/page-500',
                        parentId: 77
                    },
                ]
            },
        ]
    },
    {
        id: 82,
        label: 'MENUITEMS.PAGES.TEXT',
        icon: 'command',
        collapseid: 'sidebarPages',
        subItems: [
            {
                id: 83,
                label: 'MENUITEMS.PAGES.LIST.STARTER',
                link: '/pages/starter',
                parentId: 82
            },
            {
                id: 84,
                label: 'MENUITEMS.PAGES.LIST.PROFILE',
                parentId: 82,
                subItems: [
                    {
                        id: 85,
                        label: 'MENUITEMS.PAGES.LIST.SIMPLEPAGE',
                        link: '/pages/profile',
                        parentId: 84
                    },
                    {
                        id: 86,
                        label: 'MENUITEMS.PAGES.LIST.SETTINGS',
                        link: '/pages/profile-setting',
                        parentId: 84
                    },
                ]
            },
            {
                id: 87,
                label: 'MENUITEMS.PAGES.LIST.TEAM',
                link: '/pages/team',
                parentId: 82
            },
            {
                id: 88,
                label: 'MENUITEMS.PAGES.LIST.TIMELINE',
                link: '/pages/timeline',
                parentId: 82
            },
            {
                id: 89,
                label: 'MENUITEMS.PAGES.LIST.FAQS',
                link: '/pages/faqs',
                parentId: 82
            },
            {
                id: 90,
                label: 'MENUITEMS.PAGES.LIST.PRICING',
                link: '/pages/pricing',
                parentId: 82
            },
            {
                id: 91,
                label: 'MENUITEMS.PAGES.LIST.GALLERY',
                link: '/pages/gallery',
                parentId: 82
            },
            {
                id: 92,
                label: 'MENUITEMS.PAGES.LIST.MAINTENANCE',
                link: '/pages/maintenance',
                parentId: 82
            },
            {
                id: 93,
                label: 'MENUITEMS.PAGES.LIST.COMINGSOON',
                link: '/pages/coming-soon',
                parentId: 82
            },
            {
                id: 94,
                label: 'MENUITEMS.PAGES.LIST.SITEMAP',
                link: '/pages/sitemap',
                parentId: 82
            },
            {
                id: 95,
                label: 'MENUITEMS.PAGES.LIST.SEARCHRESULTS',
                link: '/pages/search-results',
                parentId: 82
            }
        ]
    },
    {
        id: 131,
        label: 'MENUITEMS.LANDING.TEXT',
        icon: 'airplay',
        link: '/landing'
    },
    {
        id: 96,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        isTitle: true
    },
    {
        id: 97,
        label: 'MENUITEMS.BASEUI.TEXT',
        collapseid: 'sidebarUI',
        icon: 'package',
        subItems: [
            {
                id: 98,
                label: 'MENUITEMS.BASEUI.LIST.ALERTS',
                link: '/ui/alerts',
                parentId: 97
            },
            {
                id: 99,
                label: 'MENUITEMS.BASEUI.LIST.BADGES',
                link: '/ui/badges',
                parentId: 97
            },
            {
                id: 100,
                label: 'MENUITEMS.BASEUI.LIST.BUTTONS',
                link: '/ui/buttons',
                parentId: 97
            },
            {
                id: 101,
                label: 'MENUITEMS.BASEUI.LIST.COLORS',
                link: '/ui/colors',
                parentId: 97
            },
            {
                id: 102,
                label: 'MENUITEMS.BASEUI.LIST.CARDS',
                link: '/ui/cards',
                parentId: 97
            },
            {
                id: 103,
                label: 'MENUITEMS.BASEUI.LIST.CAROUSEL',
                link: '/ui/carousel',
                parentId: 97
            },
            {
                id: 104,
                label: 'MENUITEMS.BASEUI.LIST.DROPDOWNS',
                link: '/ui/dropdowns',
                parentId: 97
            },
            {
                id: 105,
                label: 'MENUITEMS.BASEUI.LIST.GRID',
                link: '/ui/grid',
                parentId: 97
            },
            {
                id: 106,
                label: 'MENUITEMS.BASEUI.LIST.IMAGES',
                link: '/ui/images',
                parentId: 97
            },
            {
                id: 107,
                label: 'MENUITEMS.BASEUI.LIST.TABS',
                link: '/ui/tabs',
                parentId: 97
            },
            {
                id: 108,
                label: 'MENUITEMS.BASEUI.LIST.ACCORDION&COLLAPSE',
                link: '/ui/accordions',
                parentId: 97
            },
            {
                id: 109,
                label: 'MENUITEMS.BASEUI.LIST.MODALS',
                link: '/ui/modals',
                parentId: 97
            },
            {
                id: 111,
                label: 'MENUITEMS.BASEUI.LIST.PLACEHOLDERS',
                link: '/ui/placeholder',
                parentId: 97
            },
            {
                id: 112,
                label: 'MENUITEMS.BASEUI.LIST.PROGRESS',
                link: '/ui/progress',
                parentId: 97
            },
            {
                id: 113,
                label: 'MENUITEMS.BASEUI.LIST.NOTIFICATIONS',
                link: '/ui/notifications',
                parentId: 97
            },
            {
                id: 114,
                label: 'MENUITEMS.BASEUI.LIST.MEDIAOBJECT',
                link: '/ui/media',
                parentId: 97
            },
            {
                id: 115,
                label: 'MENUITEMS.BASEUI.LIST.EMBEDVIDEO',
                link: '/ui/video',
                parentId: 97
            },
            {
                id: 116,
                label: 'MENUITEMS.BASEUI.LIST.TYPOGRAPHY',
                link: '/ui/typography',
                parentId: 97
            },
            {
                id: 117,
                label: 'MENUITEMS.BASEUI.LIST.LISTS',
                link: '/ui/list',
                parentId: 97
            },
            {
                id: 118,
                label: 'MENUITEMS.BASEUI.LIST.GENERAL',
                link: '/ui/general',
                parentId: 97
            },
            {
                id: 119,
                label: 'MENUITEMS.BASEUI.LIST.RIBBONS',
                link: '/ui/ribbons',
                parentId: 97
            },
            {
                id: 120,
                label: 'MENUITEMS.BASEUI.LIST.UTILITIES',
                link: '/ui/utilities',
                parentId: 97
            }
        ]
    },
    {
        id: 121,
        label: 'MENUITEMS.ADVANCEUI.TEXT',
        icon: 'layers',
        collapseid: 'sidebarAdvanceUI',
        badge: {
            variant: 'bg-success',
            text: 'MENUITEMS.ADVANCEUI.BADGE',
        },
        subItems: [
            {
                id: 122,
                label: 'MENUITEMS.ADVANCEUI.LIST.SWEETALERTS',
                link: '/advance-ui/sweetalerts',
                parentId: 121
            },
            {
                id: 124,
                label: 'MENUITEMS.ADVANCEUI.LIST.SCROLLBAR',
                link: '/advance-ui/scrollbar',
                parentId: 121
            },
            {
                id: 125,
                label: 'MENUITEMS.ADVANCEUI.LIST.ANIMATION',
                link: '/advance-ui/animation',
                parentId: 121
            },
            {
                id: 126,
                label: 'MENUITEMS.ADVANCEUI.LIST.TOUR',
                link: '/advance-ui/tour',
                parentId: 121
            },
            {
                id: 127,
                label: 'MENUITEMS.ADVANCEUI.LIST.SWIPERSLIDER',
                link: '/advance-ui/swiper',
                parentId: 121
            },
            {
                id: 128,
                label: 'MENUITEMS.ADVANCEUI.LIST.RATTINGS',
                link: '/advance-ui/ratings',
                parentId: 121
            },
            {
                id: 129,
                label: 'MENUITEMS.ADVANCEUI.LIST.HIGHLIGHT',
                link: '/advance-ui/highlight',
                parentId: 121
            },
            {
                id: 130,
                label: 'MENUITEMS.ADVANCEUI.LIST.SCROLLSPY',
                link: '/advance-ui/scrollspy',
                parentId: 121
            }
        ]
    },
    {
        id: 131,
        label: 'MENUITEMS.WIDGETS.TEXT',
        icon: 'copy',
        link: '/widgets'
    },
    {
        id: 132,
        label: 'MENUITEMS.FORMS.TEXT',
        icon: 'file-text',
        collapseid: 'sidebarForms',
        subItems: [
            {
                id: 133,
                label: 'MENUITEMS.FORMS.LIST.BASICELEMENTS',
                link: '/forms/basic',
                parentId: 132
            },
            {
                id: 134,
                label: 'MENUITEMS.FORMS.LIST.FORMSELECT',
                link: '/forms/select',
                parentId: 132
            },
            {
                id: 135,
                label: 'MENUITEMS.FORMS.LIST.CHECKBOXS&RADIOS',
                link: '/forms/checkboxs-radios',
                parentId: 132
            },
            {
                id: 136,
                label: 'MENUITEMS.FORMS.LIST.PICKERS',
                link: '/forms/pickers',
                parentId: 132
            },
            {
                id: 137,
                label: 'MENUITEMS.FORMS.LIST.INPUTMASKS',
                link: '/forms/masks',
                parentId: 132
            },
            {
                id: 138,
                label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                link: '/forms/advanced',
                parentId: 132
            },
            {
                id: 139,
                label: 'MENUITEMS.FORMS.LIST.RANGESLIDER',
                link: '/forms/range-sliders',
                parentId: 132
            },
            {
                id: 140,
                label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                link: '/forms/validation',
                parentId: 132
            },
            {
                id: 141,
                label: 'MENUITEMS.FORMS.LIST.WIZARD',
                link: '/forms/wizard',
                parentId: 132
            },
            {
                id: 142,
                label: 'MENUITEMS.FORMS.LIST.EDITORS',
                link: '/forms/editors',
                parentId: 132
            },
            {
                id: 143,
                label: 'MENUITEMS.FORMS.LIST.FILEUPLOADS',
                link: '/forms/file-uploads',
                parentId: 132
            },
            {
                id: 144,
                label: 'MENUITEMS.FORMS.LIST.FORMLAYOUTS',
                link: '/forms/layouts',
                parentId: 132
            }
        ]
    },
    {
        id: 145,
        label: 'MENUITEMS.TABLES.TEXT',
        collapseid: 'sidebarTables',
        icon: 'database',
        subItems: [
            {
                id: 146,
                label: 'MENUITEMS.TABLES.LIST.BASICTABLES',
                link: '/tables/basic',
                parentId: 145
            },
            {
                id: 147,
                label: 'MENUITEMS.TABLES.LIST.GRIDJS',
                link: '/tables/gridjs',
                parentId: 145
            },
            {
                id: 148,
                label: 'MENUITEMS.TABLES.LIST.LISTJS',
                link: '/tables/listjs',
                parentId: 145
            }
        ]
    },
    {
        id: 149,
        label: 'MENUITEMS.CHARTS.TEXT',
        collapseid: 'sidebarCharts',
        icon: 'pie-chart',
        subItems: [
            {
                id: 150,
                label: 'MENUITEMS.CHARTS.LIST.APEXCHARTS',
                parentId: 149,
                subItems: [
                    {
                        id: 151,
                        label: 'MENUITEMS.CHARTS.LIST.LINE',
                        link: '/charts/apex-line',
                        parentId: 150
                    },
                    {
                        id: 152,
                        label: 'MENUITEMS.CHARTS.LIST.AREA',
                        link: '/charts/apex-area',
                        parentId: 150
                    },
                    {
                        id: 153,
                        label: 'MENUITEMS.CHARTS.LIST.COLUMN',
                        link: '/charts/apex-column',
                        parentId: 150
                    },
                    {
                        id: 154,
                        label: 'MENUITEMS.CHARTS.LIST.BAR',
                        link: '/charts/apex-bar',
                        parentId: 150
                    },
                    {
                        id: 155,
                        label: 'MENUITEMS.CHARTS.LIST.MIXED',
                        link: '/charts/apex-mixed',
                        parentId: 150
                    },
                    {
                        id: 156,
                        label: 'MENUITEMS.CHARTS.LIST.TIMELINE',
                        link: '/charts/apex-timeline',
                        parentId: 150
                    },
                    {
                        id: 157,
                        label: 'MENUITEMS.CHARTS.LIST.CANDLSTICK',
                        link: '/charts/apex-candlestick',
                        parentId: 150
                    },
                    {
                        id: 158,
                        label: 'MENUITEMS.CHARTS.LIST.BOXPLOT',
                        link: '/charts/apex-boxplot',
                        parentId: 150
                    },
                    {
                        id: 159,
                        label: 'MENUITEMS.CHARTS.LIST.BUBBLE',
                        link: '/charts/apex-bubble',
                        parentId: 150
                    },
                    {
                        id: 160,
                        label: 'MENUITEMS.CHARTS.LIST.SCATTER',
                        link: '/charts/apex-scatter',
                        parentId: 150
                    },
                    {
                        id: 161,
                        label: 'MENUITEMS.CHARTS.LIST.HEATMAP',
                        link: '/charts/apex-heatmap',
                        parentId: 150
                    },
                    {
                        id: 162,
                        label: 'MENUITEMS.CHARTS.LIST.TREEMAP',
                        link: '/charts/apex-treemap',
                        parentId: 150
                    },
                    {
                        id: 163,
                        label: 'MENUITEMS.CHARTS.LIST.PIE',
                        link: '/charts/apex-pie',
                        parentId: 150
                    },
                    {
                        id: 164,
                        label: 'MENUITEMS.CHARTS.LIST.RADIALBAR',
                        link: '/charts/apex-radialbar',
                        parentId: 150
                    },
                    {
                        id: 165,
                        label: 'MENUITEMS.CHARTS.LIST.RADAR',
                        link: '/charts/apex-radar',
                        parentId: 150
                    },
                    {
                        id: 166,
                        label: 'MENUITEMS.CHARTS.LIST.POLARAREA',
                        link: '/charts/apex-polar',
                        parentId: 150
                    },
                ]
            },
            {
                id: 167,
                label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
                link: '/charts/chartjs',
                parentId: 149
            },
            {
                id: 168,
                label: 'MENUITEMS.CHARTS.LIST.ECHARTS',
                link: '/charts/echarts',
                parentId: 149
            }
        ]
    },
    {
        id: 169,
        label: 'MENUITEMS.ICONS.TEXT',
        icon: 'archive',
        collapseid: 'sidebarIcons',
        subItems: [
            {
                id: 170,
                label: 'MENUITEMS.ICONS.LIST.REMIX',
                link: '/icons/remix',
                parentId: 169
            },
            {
                id: 171,
                label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                link: '/icons/boxicons',
                parentId: 169
            },
            {
                id: 172,
                label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                link: '/icons/materialdesign',
                parentId: 169
            },
            {
                id: 173,
                label: 'MENUITEMS.ICONS.LIST.LINEAWESOME',
                link: '/icons/lineawesome',
                parentId: 169
            },
            {
                id: 174,
                label: 'MENUITEMS.ICONS.LIST.FEATHER',
                link: '/icons/feather',
                parentId: 169
            },
        ]
    },
    {
        id: 175,
        label: 'MENUITEMS.MAPS.TEXT',
        icon: 'map-pin',
        collapseid: 'sidebarMaps',
        subItems: [
            {
                id: 176,
                label: 'MENUITEMS.MAPS.LIST.GOOGLE',
                link: '/maps/google',
                parentId: 175
            },
            {
                id: 178,
                label: 'MENUITEMS.MAPS.LIST.LEAFLET',
                link: '/maps/leaflet',
                parentId: 175
            }
        ]
    },
    {
        id: 179,
        label: 'MENUITEMS.MULTILEVEL.TEXT',
        icon: 'share-2',
        collapseid: 'sidebarMultilevel',
        subItems: [
            {
                id: 180,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
                parentId: 179
            },
            {
                id: 181,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
                subItems: [
                    {
                        id: 182,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
                        parentId: 181,
                    },
                    {
                        id: 183,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
                        parentId: 181,
                    }
                ]
            },
        ]
    }
];


/***/ }),

/***/ 93125:
/*!****************************************************************************!*\
  !*** ./src/app/layouts/two-column-sidebar/two-column-sidebar.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwoColumnSidebarComponent": () => (/* binding */ TwoColumnSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ 68849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-feather */ 5601);







const _c0 = ["sideMenu"];
function TwoColumnSidebarComponent_ng_container_25_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TwoColumnSidebarComponent_ng_container_25_li_1_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r6.toggleItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i-feather", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("subitems", item_r2.collapseid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, item_r2.label));
} }
function TwoColumnSidebarComponent_ng_container_25_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i-feather", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", item_r2.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("subitems", item_r2.collapseid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, item_r2.label));
} }
function TwoColumnSidebarComponent_ng_container_25_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TwoColumnSidebarComponent_ng_container_25_li_1_a_1_Template, 5, 5, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TwoColumnSidebarComponent_ng_container_25_li_1_a_2_Template, 5, 6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.hasItems(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.hasItems(item_r2));
} }
function TwoColumnSidebarComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TwoColumnSidebarComponent_ng_container_25_li_1_Template, 3, 2, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r2.isTitle && !item_r2.isLayout);
} }
function TwoColumnSidebarComponent_li_37_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TwoColumnSidebarComponent_li_37_ul_4_li_1_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r18.updateActive($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", subitem_r14.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-parent", subitem_r14.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, subitem_r14.label), " ");
} }
function TwoColumnSidebarComponent_li_37_ul_4_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TwoColumnSidebarComponent_li_37_ul_4_li_1_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r21.toggleSubItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", false)("data-parent", subitem_r14.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, subitem_r14.label), " ");
} }
function TwoColumnSidebarComponent_li_37_ul_4_li_1_div_3_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TwoColumnSidebarComponent_li_37_ul_4_li_1_div_3_li_2_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r26.updateActive($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subSubitem_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", subSubitem_r25.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-parent", subSubitem_r25.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, subSubitem_r25.label), " ");
} }
function TwoColumnSidebarComponent_li_37_ul_4_li_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TwoColumnSidebarComponent_li_37_ul_4_li_1_div_3_li_2_Template, 4, 5, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", item_r11.collapseid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", subitem_r14.subItems);
} }
function TwoColumnSidebarComponent_li_37_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TwoColumnSidebarComponent_li_37_ul_4_li_1_a_1_Template, 3, 5, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TwoColumnSidebarComponent_li_37_ul_4_li_1_a_2_Template, 3, 5, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TwoColumnSidebarComponent_li_37_ul_4_li_1_div_3_Template, 3, 2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r13.hasItems(subitem_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.hasItems(subitem_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.hasItems(subitem_r14));
} }
function TwoColumnSidebarComponent_li_37_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TwoColumnSidebarComponent_li_37_ul_4_li_1_Template, 4, 3, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r11.subItems);
} }
function TwoColumnSidebarComponent_li_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TwoColumnSidebarComponent_li_37_ul_4_Template, 2, 1, "ul", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", item_r11.collapseid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-name", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, item_r11.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.hasItems(item_r11));
} }
class TwoColumnSidebarComponent {
    constructor(router, translate) {
        this.router = router;
        this.translate = translate;
        this.toggle = true;
        this.menuItems = [];
        this.mobileMenuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // router.events.subscribe((val) => {
        //   this.initActiveMenu();
        // });
        translate.setDefaultLang('en');
    }
    ngOnInit() {
        // Menu Items
        this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_0__.MENU;
    }
    /***
    * Activate drop down set
    */
    ngAfterViewInit() {
        this.initActiveMenu();
    }
    toggleSubItem(event) {
        if (event.target && event.target.nextElementSibling)
            event.target.nextElementSibling.classList.toggle("show");
    }
    ;
    updateActive(event) {
        const ul = document.getElementById("navbar-nav");
        if (ul) {
            const items = Array.from(ul.querySelectorAll("a.nav-link.active"));
            this.removeActivation(items);
        }
        this.activateParentDropdown(event.target);
    }
    toggleItem(event) {
        let isCurrentMenuId = event.target.getAttribute('subitems');
        let isMenu = document.getElementById(isCurrentMenuId);
        let dropDowns = Array.from(document.querySelectorAll('#navbar-nav .show'));
        dropDowns.forEach((node) => {
            node.classList.remove('show');
        });
        (isMenu) ? isMenu.classList.add('show') : null;
        const ul = document.getElementById("two-column-menu");
        if (ul) {
            const iconItems = Array.from(ul.getElementsByTagName("a"));
            let activeIconItems = iconItems.filter((x) => x.classList.contains("active"));
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
            });
        }
        event.target.classList.add("active");
    }
    // remove active items of two-column-menu
    removeActivation(items) {
        items.forEach((item) => {
            if (item.classList.contains("menu-link")) {
                if (!item.classList.contains("active")) {
                    item.setAttribute("aria-expanded", false);
                }
                item.nextElementSibling.classList.remove("show");
            }
            if (item.classList.contains("nav-link")) {
                if (item.nextElementSibling) {
                    item.nextElementSibling.classList.remove("show");
                }
                item.setAttribute("aria-expanded", false);
            }
            item.classList.remove("active");
        });
    }
    activateIconSidebarActive(id) {
        var menu = document.querySelector("#two-column-menu .simplebar-content-wrapper a[subitems='" + id + "'].nav-icon");
        if (menu !== null) {
            menu.classList.add("active");
        }
    }
    activateParentDropdown(item) {
        item.classList.add("active");
        let parentCollapseDiv = item.closest(".collapse.menu-dropdown");
        if (parentCollapseDiv) {
            // to set aria expand true remaining
            parentCollapseDiv.classList.add("show");
            parentCollapseDiv.parentElement.children[0].classList.add("active");
            parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
            if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
                    parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
            }
            this.activateIconSidebarActive(parentCollapseDiv.getAttribute("id"));
            return false;
        }
        return false;
    }
    initActiveMenu() {
        const pathName = window.location.pathname;
        const ul = document.getElementById("navbar-nav");
        if (ul) {
            const items = Array.from(ul.querySelectorAll("a.nav-link"));
            let activeItems = items.filter((x) => x.classList.contains("active"));
            this.removeActivation(activeItems);
            let matchingMenuItem = items.find((x) => {
                return x.pathname === pathName;
            });
            if (matchingMenuItem) {
                this.activateParentDropdown(matchingMenuItem);
            }
            else {
                var id = pathName.replace("/", "");
                if (id)
                    document.body.classList.add('twocolumn-panel');
                this.activateIconSidebarActive(id);
            }
        }
    }
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
        return item.subItems !== undefined ? item.subItems.length > 0 : false;
    }
}
TwoColumnSidebarComponent.ɵfac = function TwoColumnSidebarComponent_Factory(t) { return new (t || TwoColumnSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService)); };
TwoColumnSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TwoColumnSidebarComponent, selectors: [["app-two-column-sidebar"]], viewQuery: function TwoColumnSidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sideMenu = _t.first);
    } }, outputs: { mobileMenuButtonClicked: "mobileMenuButtonClicked" }, decls: 40, vars: 2, consts: [[1, "app-menu", "navbar-menu"], [1, "navbar-brand-box"], ["routerLink", "/", 1, "logo", "logo-dark"], [1, "logo-sm"], ["src", "assets/images/logo-sm.png", "alt", "", "height", "22"], [1, "logo-lg"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "17"], ["routerLink", "/", 1, "logo", "logo-light"], ["src", "assets/images/logo-light.png", "alt", "", "height", "17"], ["type", "button", "id", "vertical-hover", 1, "btn", "btn-sm", "p-0", "fs-20", "header-item", "float-end", "btn-vertical-sm-hover"], [1, "ri-record-circle-line"], ["id", "scrollbar"], [1, "container-fluid"], ["id", "two-column-menu"], ["data-simplebar", "init", 1, "twocolumn-iconview"], [1, "simplebar-wrapper", 2, "margin", "0px"], [1, "simplebar-mask"], [1, "simplebar-offset", 2, "right", "0px", "bottom", "0px"], ["tabindex", "0", "role", "region", "aria-label", "scrollable content", 1, "simplebar-content-wrapper", 2, "height", "100%", "overflow", "hidden scroll"], [1, "simplebar-content", 2, "padding", "0px"], ["href", "#", 1, "logo"], [4, "ngFor", "ngForOf"], ["id", "navbar-nav", "data-simplebar", "init", 1, "navbar-nav"], [1, "simplebar-height-auto-observer-wrapper"], [1, "simplebar-height-auto-observer"], ["tabindex", "0", "role", "region", "aria-label", "scrollable content", 1, "simplebar-content-wrapper", 2, "height", "100%", "overflow", "hidden"], [1, "menu-title"], ["data-key", "t-menu"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "simplebar-placeholder", 2, "width", "auto", "height", "183px"], [1, "vertical-overlay"], [4, "ngIf"], ["href", "javascript:void(0);", "class", "nav-icon", 3, "click", 4, "ngIf"], ["class", "nav-icon", 3, "routerLink", 4, "ngIf"], ["href", "javascript:void(0);", 1, "nav-icon", 3, "click"], [1, "icon-dual", "feather-icon-align", 3, "name"], ["data-key", "t-dashboards", 1, "d-none"], [1, "nav-icon", 3, "routerLink"], ["data-key", "t-widget", 1, "d-none"], [1, "nav-item"], ["aria-expanded", "true", 1, "collapse", "menu-dropdown", 3, "id"], ["class", "nav nav-sm flex-column", "aria-expanded", "false", 4, "ngIf"], ["aria-expanded", "false", 1, "nav", "nav-sm", "flex-column"], ["class", "nav-link", 3, "routerLink", "click", 4, "ngIf"], ["class", "nav-link ecomm", "data-bs-toggle", "collapse", "href", "javascript:void(0);", 3, "click", 4, "ngIf"], ["class", "collapse menu-dropdown", 3, "id", 4, "ngIf"], [1, "nav-link", 3, "routerLink", "click"], ["data-bs-toggle", "collapse", "href", "javascript:void(0);", 1, "nav-link", "ecomm", 3, "click"], [1, "collapse", "menu-dropdown", 3, "id"], [1, "nav", "nav-sm", "flex-column"]], template: function TwoColumnSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, TwoColumnSidebarComponent_ng_container_25_Template, 2, 1, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, TwoColumnSidebarComponent_li_37_Template, 5, 5, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 30);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, angular_feather__WEBPACK_IMPORTED_MODULE_5__.FeatherComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0d28tY29sdW1uLXNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 96486:
/*!************************************************************!*\
  !*** ./src/app/layouts/two-column/two-column.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwoColumnComponent": () => (/* binding */ TwoColumnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../topbar/topbar.component */ 24016);
/* harmony import */ var _two_column_sidebar_two_column_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../two-column-sidebar/two-column-sidebar.component */ 93125);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 84158);





/**
 * TwoColumnComponent
 */
class TwoColumnComponent {
    constructor() {
        this.isCondensed = false;
    }
    ngOnInit() {
        document.documentElement.setAttribute('data-layout', 'twocolumn');
        document.documentElement.setAttribute('data-topbar', 'light');
        document.documentElement.setAttribute('data-sidebar', 'dark');
        document.documentElement.setAttribute('data-sidebar-size', 'lg');
        document.documentElement.setAttribute('data-layout-style', 'default');
        document.documentElement.setAttribute('data-layout-mode', 'light');
        document.documentElement.setAttribute('data-layout-width', 'fluid');
        document.documentElement.setAttribute('data-layout-position', 'fixed');
    }
    /**
     * On mobile toggle button clicked
     */
    onToggleMobileMenu() {
        document.body.classList.toggle('twocolumn-panel');
        const currentSIdebarSize = document.body.getAttribute("data-sidebar-size");
        if (window.screen.width >= 992) {
            if (currentSIdebarSize == null) {
                (document.body.getAttribute('data-sidebar-size') == null || document.body.getAttribute('data-sidebar-size') == "lg") ? document.body.setAttribute('data-sidebar-size', 'sm') : document.body.setAttribute('data-sidebar-size', 'lg');
            }
            else if (currentSIdebarSize == "md") {
                (document.body.getAttribute('data-sidebar-size') == "md") ? document.body.setAttribute('data-sidebar-size', 'sm') : document.body.setAttribute('data-sidebar-size', 'md');
            }
            else {
                (document.body.getAttribute('data-sidebar-size') == "sm") ? document.body.setAttribute('data-sidebar-size', 'lg') : document.body.setAttribute('data-sidebar-size', 'sm');
            }
        }
        this.isCondensed = !this.isCondensed;
    }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
        const rightBar = document.getElementById('theme-settings-offcanvas');
        if (rightBar != null) {
            rightBar.classList.toggle('show');
            rightBar.setAttribute('style', "visibility: visible;");
        }
    }
}
TwoColumnComponent.ɵfac = function TwoColumnComponent_Factory(t) { return new (t || TwoColumnComponent)(); };
TwoColumnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TwoColumnComponent, selectors: [["app-two-column"]], decls: 8, vars: 0, consts: [["id", "layout-wrapper"], [3, "mobileMenuButtonClicked"], [1, "main-content"], [1, "page-content"], [1, "container-fluid"]], template: function TwoColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mobileMenuButtonClicked", function TwoColumnComponent_Template_app_topbar_mobileMenuButtonClicked_1_listener() { return ctx.onToggleMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-two-column-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__.TopbarComponent, _two_column_sidebar_two_column_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.TwoColumnSidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0d28tY29sdW1uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 27198:
/*!********************************************************!*\
  !*** ./src/app/layouts/vertical/vertical.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalComponent": () => (/* binding */ VerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../topbar/topbar.component */ 24016);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 79504);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 84158);





class VerticalComponent {
    constructor() {
        this.isCondensed = false;
    }
    ngOnInit() {
        document.documentElement.setAttribute('data-layout', 'vertical');
        document.documentElement.setAttribute('data-topbar', 'light');
        document.documentElement.setAttribute('data-sidebar', 'light');
        document.documentElement.setAttribute('data-sidebar-size', 'lg');
        document.documentElement.setAttribute('data-layout-style', 'default');
        document.documentElement.setAttribute('data-layout-mode', 'light');
        document.documentElement.setAttribute('data-layout-width', 'fluid');
        document.documentElement.setAttribute('data-layout-position', 'fixed');
        window.addEventListener('resize', function () {
            if (window.screen.width <= 767) {
                document.documentElement.setAttribute('data-sidebar-size', '');
            }
            else if (window.screen.width <= 1024) {
                document.documentElement.setAttribute('data-sidebar-size', 'sm');
            }
            else if (window.screen.width >= 1024) {
                document.documentElement.setAttribute('data-sidebar-size', 'lg');
            }
        });
    }
    /**
     * On mobile toggle button clicked
     */
    onToggleMobileMenu() {
        document.body.classList.toggle('sidebar-enable');
        const currentSIdebarSize = document.documentElement.getAttribute("data-sidebar-size");
        if (window.screen.width >= 767) {
            if (currentSIdebarSize == null) {
                (document.documentElement.getAttribute('data-sidebar-size') == null || document.documentElement.getAttribute('data-sidebar-size') == "lg") ? document.documentElement.setAttribute('data-sidebar-size', 'sm') : document.documentElement.setAttribute('data-sidebar-size', 'lg');
            }
            else if (currentSIdebarSize == "md") {
                (document.documentElement.getAttribute('data-sidebar-size') == "md") ? document.documentElement.setAttribute('data-sidebar-size', 'sm') : document.documentElement.setAttribute('data-sidebar-size', 'md');
            }
            else {
                (document.documentElement.getAttribute('data-sidebar-size') == "sm") ? document.documentElement.setAttribute('data-sidebar-size', 'lg') : document.documentElement.setAttribute('data-sidebar-size', 'sm');
            }
        }
        if (window.screen.width <= 767) {
            document.body.classList.toggle('vertical-sidebar-enable');
        }
        this.isCondensed = !this.isCondensed;
    }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
        const rightBar = document.getElementById('theme-settings-offcanvas');
        if (rightBar != null) {
            rightBar.classList.toggle('show');
            rightBar.setAttribute('style', "visibility: visible;");
        }
    }
}
VerticalComponent.ɵfac = function VerticalComponent_Factory(t) { return new (t || VerticalComponent)(); };
VerticalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VerticalComponent, selectors: [["app-vertical"]], decls: 8, vars: 0, consts: [["id", "layout-wrapper"], [3, "mobileMenuButtonClicked"], [1, "main-content"], [1, "page-content"], [1, "container-fluid"]], template: function VerticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mobileMenuButtonClicked", function VerticalComponent_Template_app_topbar_mobileMenuButtonClicked_1_listener() { return ctx.onToggleMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__.TopbarComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJ0aWNhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9472:
/*!*****************************************************************!*\
  !*** ./src/app/pages/assessment/service/assessments.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssessmentsService": () => (/* binding */ AssessmentsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ 43683);




class AssessmentsService {
    constructor(http, notifier) {
        this.http = http;
        this.notifier = notifier;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP + '/sch_mon_grd/reports/monitor';
    }
    validateBlockSection(newBlock, section) {
        // console.log(this.currentBlock, "currentBlock");
        // console.log(newBlock, "newblock");
        // console.log(section, "section");
        let totalBlockQuestions = 0;
        let totalQuestionPerCandidate = 0;
        if (newBlock.totalQuestions <= 0) {
            // todo: ask if this is it : "change the error message on new question block to total question in block from total question expected"
            this.notifier.notify("error", "The total questions in block must be above 0!");
            return false;
        }
        if (newBlock.totalQuestions > section.totalQuestions) {
            this.notifier.notify("error", `The total questions expected cannot exceed ${section.totalQuestions}!`);
            return false;
        }
        if (newBlock.totalQuestionsPerCandidate > newBlock.totalQuestions) {
            this.notifier.notify("error", "The total question per candidate cannot be more than the total questions specified for the block!");
        }
        section.blockDetailsDTOS.forEach((block) => {
            // console.log(block.totalQuestionsPerStudent, "block total question");
            totalQuestionPerCandidate += Number(block.totalQuestionsPerStudent || 0);
        });
        // console.log(newBlock.totalQuestionsPerCandidate + totalQuestionPerCandidate);
        if (newBlock.totalQuestionsPerCandidate + totalQuestionPerCandidate >
            section.totalQuestionsPerCandidate) {
            this.notifier.notify("error", `The total questions per candidate cannot exceed ${section.totalQuestionsPerCandidate} in this subject!`);
            return false;
        }
        if (newBlock.totalQuestionsPerCandidate > section.totalQuestionsPerCandidate) {
            this.notifier.notify("error", `The total questions per candidate cannot exceed ${section.totalQuestionsPerCandidate}  question per candidate!`);
            return false;
        }
        // if(newBlock.totalQuestionsPerCandidate < this.currentBlock.totalQuestionsPerCandidate){
        //   this.notifier.notify(
        //     "error",
        //     `error message!`
        //   );
        //   console.log("hello")
        //   return false;
        // }
        if (newBlock.totalQuestionsPerCandidate <= 0) {
            this.notifier.notify("error", "The total questions expected per candidate must be above 0!");
            return false;
        }
        section.blockDetailsDTOS.forEach((block) => {
            totalBlockQuestions += block.totalQuestions;
        });
        if (newBlock.totalQuestions + totalBlockQuestions >
            section.totalQuestions) {
            const remainder = section.totalQuestions - totalBlockQuestions;
            if (remainder > 0) {
                this.notifier.notify("error", `You have room for only ${remainder} more questions!`);
                return false;
            }
            else if (remainder <= 0) {
                this.notifier.notify("error", `You have room for only ${remainder} more questions!`);
                return false;
            }
        }
        return true;
    }
    validateSection(newSection) {
        if (newSection.totalQuestions <= 0) {
            this.notifier.notify("error", "The total number of questions expected must be above 0!");
            return false;
        }
        if (newSection.totalQuestionsPerStudent <= 0) {
            this.notifier.notify("error", "The total questions expected per candidate must be above 0!");
            return false;
        }
        return true;
    }
    importAssessmentTemplate(template) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/assessment/${template.assessmentId}/import_template`, template, { withCredentials: true });
    }
    fetchSchedulerAssessmentId(assessmentId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP}/schedule/assessment/remote/${assessmentId}/get_scheduler_id`, { withCredentials: true });
    }
    createAssessmentDetailsTemplate(newAssessmentDetails) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/template/assessmentdetails/`, newAssessmentDetails, { withCredentials: true });
    }
    createAssessmentSettingsTemplate(newAssessmentSettings) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/template/assessmentsettings/`, newAssessmentSettings, { withCredentials: true });
    }
    createAssessmentSectionTemplate(newAssessmentSectionTemplate) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/template/assessmentsections/`, newAssessmentSectionTemplate, { withCredentials: true });
    }
    createNewAssessment(assessment) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments`, assessment, { withCredentials: true });
    }
    saveAssessmentTemplate(assessmentId, assessment) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/save_as_template`, assessment, { withCredentials: true });
    }
    createNewSection(assessmentId, section) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/new_section`, section, { withCredentials: true });
    }
    saveAssessmentSectionTemplate(assessmentId, sectionId, newSectionTemplate) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/save_as_template`, newSectionTemplate, { withCredentials: true });
    }
    createNewBlock(assessmentId, sectionId, block) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/new_block`, block, { withCredentials: true });
    }
    updateBlock(assessmentId, sectionId, blockId, block) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/block/${blockId}`, block, { withCredentials: true });
    }
    deleteBlock(assessmentId, sectionId, blockId) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/block/${blockId}`, { withCredentials: true });
    }
    deleteSection(assessmentId, sectionId) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}`, { withCredentials: true });
    }
    saveManualSelectedQuestionsToAssessment(assessmentId, sectionId, blockId, items) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/new_block/${blockId}/manual_selection/passage_single_item`, items, { withCredentials: true });
    }
    fetchAllAssessment(page, pageSize) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments?page=${page}&size=${pageSize}`, { withCredentials: true });
    }
    fetchAllAssessmentV2(page, pageSize) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/list_assessments_v2?page=${page}&size=${pageSize}`, { withCredentials: true });
    }
    fetchSingleAssessmentSettings(assessmentId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/assessment_settings`, 
        /* `${environment.developmentIP}/itembank/assessments/${assessmentId}/assessment_settings`, */
        { withCredentials: true });
    }
    fetchSingleAssessment(assessmentId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}`, { withCredentials: true });
    }
    fetchSections(assessmentId, sectionId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/settings`, { withCredentials: true });
    }
    listFilterBlocks(assessmentId, sectionId, subjectId, blockId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/subject/${subjectId}/block/${blockId}/listblockfilters`, { withCredentials: true });
    }
    getSectionSettings(assessmentId, sectionId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/settings`, { withCredentials: true });
    }
    updateSectionSettings(assessmentId, sectionId, settings) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/edit_settings`, settings, { withCredentials: true });
    }
    saveAssessmentSettings(assessment, assessmentId) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/edit_assessment_settings`, 
        /* `${environment.developmentIP}/itembank/assessments/${assessmentId}/edit_assessment_settings`, */
        assessment, { withCredentials: true });
    }
    newAssessmentFilter(filter, assessmentId, sectionId, blockId) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/new_block/${blockId}/new_filter_single`, filter, { withCredentials: true });
    }
    deleteAssessmentFilter(assessmentId, sectionId, blockId, filterId) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/block/${blockId}/filter/${filterId}`, { withCredentials: true });
    }
    newAssessmentPassageFilter(assessmentId, sectionId, blockId, filterOptions) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/new_block/${blockId}/new_filter_passage`, filterOptions, { withCredentials: true });
    }
    assessmentPassageFilterWithPassageQuestionsSpecified(filterOptions) {
        // itembank/api/items/assessment/passage-filter/assessment/items_in_passage/
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/assessment/passage-filter/items_in_passage/${filterOptions.maxPassageItemsCount}`, filterOptions, { withCredentials: true });
    }
    fetchBlockItems(assessmentId, sectionId, blockId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/new_block/${blockId}/items`, { withCredentials: true });
    }
    fetchBlockPassages(assessmentId, sectionId, blockId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/new_block/${blockId}/passages`, { withCredentials: true });
    }
    publishAssessment(assessmentId, assessment) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/publish`, assessment, { withCredentials: true });
    }
    getTotalAssessmentItemsAndMarks(assessmentId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/itemscount`, { withCredentials: true });
    }
    fetchAssessmentPassages(subjectId, topicId, itemsInPassage, page, size) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/assessment/passage/${subjectId}/${topicId}/assessment/items_in_passage/${itemsInPassage}?page=${page}&size=${size}`, { withCredentials: true });
    }
    fetchExistingItemIds(assessmentId, sectionId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/existing_items`, { withCredentials: true });
    }
    fetchExistingPassageIds(assessmentId, sectionId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/existing_passages`, { withCredentials: true });
    }
    createExamUsingTemplate(payload, templateId) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/assessment_template/${templateId}`, payload, { withCredentials: true });
    }
    fetchAppDownloads(page, pageSize) {
        const url = this.baseURL + `/list_examiners_app_download_registration?page=${page}&size=${pageSize}`;
        return this.http.get(url, { withCredentials: true });
    }
    fetchAppInstallations(page, pageSize) {
        const url = this.baseURL + `/list_examiners_clear_app?page=${page}&size=${pageSize}`;
        return this.http.get(url, { withCredentials: true });
    }
    fetchAppClears(page, pageSize) {
        const url = this.baseURL + `/list_examiners_clear_app?page=${page}&size=${pageSize}`;
        return this.http.get(url, { withCredentials: true });
    }
}
AssessmentsService.ɵfac = function AssessmentsService_Factory(t) { return new (t || AssessmentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](angular_notifier__WEBPACK_IMPORTED_MODULE_3__.NotifierService)); };
AssessmentsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AssessmentsService, factory: AssessmentsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 5518:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/items/cloze-dropdown-preview/cloze-dropdown-preview.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClozeDropdownPreviewComponent": () => (/* binding */ ClozeDropdownPreviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _item_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item-http.service */ 45911);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var _passages_list_passages_all_passages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../passages/list-passages/all-passages.service */ 88820);
/* harmony import */ var _recycle_recycle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../recycle/recycle.service */ 44502);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _item_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../item-utilities.service */ 16716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_shared_pipes_html_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/pipes/html-sanitizer.pipe */ 26432);














function ClozeDropdownPreviewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedItemType, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.formType);
} }
function ClozeDropdownPreviewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "htmlSanitizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r1.previewData.itemPassage), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
} }
function ClozeDropdownPreviewComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "incomplete answers provided!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ClozeDropdownPreviewComponent_div_14_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClozeDropdownPreviewComponent_div_14_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16); return ctx_r14.openDeleteItemModal(_r4, ctx_r14.previewData.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ClozeDropdownPreviewComponent_div_14_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClozeDropdownPreviewComponent_div_14_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16); return ctx_r16.openDeletePassageItemModal(_r4, ctx_r16.previewData.itemId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ClozeDropdownPreviewComponent_div_14_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClozeDropdownPreviewComponent_div_14_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r18.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ClozeDropdownPreviewComponent_div_14_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClozeDropdownPreviewComponent_div_14_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r20.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ClozeDropdownPreviewComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ClozeDropdownPreviewComponent_div_14_button_1_Template, 3, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ClozeDropdownPreviewComponent_div_14_button_2_Template, 3, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ClozeDropdownPreviewComponent_div_14_button_3_Template, 3, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ClozeDropdownPreviewComponent_div_14_button_4_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r3.currentUser.authorities.includes("MODERATOR") && !ctx_r3.assessmentActive && !ctx_r3.recycleComponentActive && !ctx_r3.previewData.passageId && ctx_r3.previewData.id && ctx_r3.component !== "question_status" && !ctx_r3.isEditPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r3.currentUser.authorities.includes("MODERATOR") && !ctx_r3.assessmentActive && !ctx_r3.recycleComponentActive && ctx_r3.previewData.id && ctx_r3.previewData.passageId && ctx_r3.component !== "question_status" && !ctx_r3.isEditPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r3.currentUser.authorities.includes("MODERATOR") && !ctx_r3.assessmentActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.currentUser.authorities.includes("MODERATOR") && !ctx_r3.assessmentActive && ctx_r3.previewData.itemStatus !== "REJECTED" && ctx_r3.previewData.itemStatus !== "PUBLISHED");
} }
function ClozeDropdownPreviewComponent_ng_template_15_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClozeDropdownPreviewComponent_ng_template_15_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r25.deleteItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Yes, Delete It ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ClozeDropdownPreviewComponent_ng_template_15_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Deleting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Deleting... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r24.processing_delete);
} }
function ClozeDropdownPreviewComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h4", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Confirm Action Dialog");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Are you sure you want to delete this Question? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClozeDropdownPreviewComponent_ng_template_15_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const modal_r22 = restoredCtx.$implicit; return modal_r22.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " No, Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ClozeDropdownPreviewComponent_ng_template_15_button_9_Template, 2, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ClozeDropdownPreviewComponent_ng_template_15_ng_template_10_Template, 7, 1, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r5.processing_delete && !ctx_r5.assessmentActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.processing_delete);
} }
function ClozeDropdownPreviewComponent_ng_template_17_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClozeDropdownPreviewComponent_ng_template_17_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r32.deletePassageItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Yes, Delete It ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ClozeDropdownPreviewComponent_ng_template_17_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Deleting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Deleting... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r31.processing_delete);
} }
function ClozeDropdownPreviewComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h4", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Confirm Action Dialog");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Are you sure you want to delete this Question? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClozeDropdownPreviewComponent_ng_template_17_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const modal_r29 = restoredCtx.$implicit; return modal_r29.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " No, Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ClozeDropdownPreviewComponent_ng_template_17_button_9_Template, 2, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ClozeDropdownPreviewComponent_ng_template_17_ng_template_10_Template, 7, 1, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r7.processing_delete);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.processing_delete);
} }
function ClozeDropdownPreviewComponent_ng_template_19_ng_container_7_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h6", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usage_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" This question was used in ", usage_r41.assessmentName, " ");
} }
function ClozeDropdownPreviewComponent_ng_template_19_ng_container_7_div_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usage_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" used at ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 1, usage_r41.usedAt, "medium"), ". ");
} }
function ClozeDropdownPreviewComponent_ng_template_19_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ngb-accordion", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ngb-panel", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ClozeDropdownPreviewComponent_ng_template_19_ng_container_7_div_1_ng_template_4_Template, 8, 1, "ng-template", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ClozeDropdownPreviewComponent_ng_template_19_ng_container_7_div_1_ng_template_5_Template, 5, 4, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("closeOthers", true);
} }
function ClozeDropdownPreviewComponent_ng_template_19_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ClozeDropdownPreviewComponent_ng_template_19_ng_container_7_div_1_Template, 6, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r37.itemUsageHistory);
} }
function ClozeDropdownPreviewComponent_ng_template_19_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h4", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " This Question has never been used for an exam! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ClozeDropdownPreviewComponent_ng_template_19_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Loading question usage history...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Loading question usage history...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ClozeDropdownPreviewComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "QUESTION USAGE HISTORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClozeDropdownPreviewComponent_ng_template_19_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48); const modal_r36 = restoredCtx.$implicit; return modal_r36.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ClozeDropdownPreviewComponent_ng_template_19_ng_container_7_Template, 2, 1, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ClozeDropdownPreviewComponent_ng_template_19_div_8_Template, 5, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ClozeDropdownPreviewComponent_ng_template_19_div_9_Template, 7, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClozeDropdownPreviewComponent_ng_template_19_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48); const modal_r36 = restoredCtx.$implicit; return modal_r36.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r9.loading_usage_history && ctx_r9.itemUsageHistory && ctx_r9.itemUsageHistory.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r9.loading_usage_history && ctx_r9.itemUsageHistory.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.loading_usage_history);
} }
class ClozeDropdownPreviewComponent {
    constructor(router, itemService, userService, passageService, recycleService, modalService, notifier, itemUtil, sanitizer) {
        this.router = router;
        this.itemService = itemService;
        this.userService = userService;
        this.passageService = passageService;
        this.recycleService = recycleService;
        this.modalService = modalService;
        this.notifier = notifier;
        this.itemUtil = itemUtil;
        this.sanitizer = sanitizer;
        this.returnPreviewData = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.reload = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.displaySplit = false;
        this.clozeRenderArray = [];
        this.extractedTexts = [];
        this.expectedCloze = [];
        this.showAnswer = false;
        this.subjectName = '';
        this.preview = false;
        this.assessmentActive = false;
        this.recycleComponentActive = this.recycleService.recycleActive;
        this.processing_delete = false;
        this.subjectId = this.itemService.subjectId;
        this.itemUsageHistory = [];
        this.loading_usage_history = false;
        this.isEditPreview = false;
    }
    ngOnInit() {
        this.currentUser = this.userService.getCurrentUser();
        this.subjectName = this.itemService.subjectName;
        this.assessmentActive = this.itemService.assessmentActive;
        /* let startIndex = 3;
        let lastIndex = this.previewData.stimulus.indexOf('</p>', startIndex);
        let content = this.previewData.stimulus.slice(startIndex, lastIndex); */
        //this.previewData.stimulus;
        // console.log(this.previewData.stimulus);
        // console.log(this.previewData.scoringOption.answers);
        this.isEditPreview = this.router.url.includes('edit-item');
        // this.getCurrentQuestion();
        this.renderContent();
        //this.checkCloze(this.expectedCloze);
        // console.log('cloze dropdown preview', this.previewData);
        // this.addOptions(this.clozeRenderArray, this.extractedOptions);
    }
    renderContent() {
        if (this.previewData && this.previewData.stimulus) {
            let content = this.previewData.stimulus;
            // Process each response placeholder
            const parts = content.split('{{response}}');
            for (let i = 0; i < parts.length - 1; i++) {
                const selectHtml = this.createSelectElement(i);
                parts[i] = parts[i] + selectHtml;
            }
            content = parts.join('');
            this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(content);
        }
    }
    // getCurrentQuestion(): any {
    //   console.log(this.previewData , "previewdata")
    //   let data: string[] = this.previewData.stimulus.split('{{response}}');
    //   let totalTextBoxes = this.renderCloze(data);
    //   // console.log(totalTextBoxes);
    //   //this.expectedCloze.push(this.previewData);
    //   this.previewData.answers = new Array<string>(totalTextBoxes);
    // }
    /* checkCloze(expectedCloze: Array<any>) {
      expectedCloze.forEach((element) => {
        this.extractedTexts = element.stimulus.split('{{response}}');
        let totalTextBoxes = this.renderCloze(this.extractedTexts);
        this.previewData.answers = new Array<string>(totalTextBoxes);
      });
    } */
    removePreviousCloze() {
        this.expectedCloze = [];
        this.clozeRenderArray = [];
    }
    renderCloze(extractedTexts) {
        let dropBoxes = 0;
        // console.log(extractedTexts.length);
        // console.log('extracted texts', extractedTexts);
        extractedTexts.forEach((element, index) => {
            // dont add textbox to the last text
            // console.log(
            //   'current index',
            //   index,
            //   'expression value',
            //   extractedTexts.length - 1
            // );
            if (index == extractedTexts.length - 1) {
                let clozeRender = { text: element, dropBox: false, index: index };
                this.clozeRenderArray.push(clozeRender);
            }
            else {
                let clozeRender = { text: element, dropBox: true, index: index };
                this.clozeRenderArray.push(clozeRender);
                ++dropBoxes;
            }
        });
        // console.log(this.clozeRenderArray);
        return dropBoxes;
    }
    createSelectElement(index) {
        const options = this.previewData.possibleResponses[index].responses;
        const selectedAnswer = this.previewData.scoringOption.answers[index];
        let selectHtml = '<select class="form-select" style="width:auto; display:inline-block">';
        if (this.showAnswer) {
            // When showing answer, only display the correct answer
            selectHtml += `<option selected>${selectedAnswer ? selectedAnswer : 'No Answer'}</option>`;
        }
        else {
            // When not showing answer, show all options without selection
            options.forEach((option) => {
                selectHtml += `<option>${option}</option>`;
            });
        }
        selectHtml += '</select>';
        return selectHtml;
    }
    // addOptions(clozeRenderArray: Array<any>, extractedOptions: Array<any>) {
    //   for (let i = 0; i < clozeRenderArray.length; i++) {
    //     for (let j = 0; j < extractedOptions.length; j++) {
    //       clozeRenderArray[j].possibleResponse = extractedOptions[j];
    //     }
    //   }
    // }
    captureResponses(index, dropBoxValue) {
        const answerSet = new Array();
        /* this.textBoxRefList.forEach((element) => {
          answerSet.push(element.value);
          this.currentQuestion.answers = answerSet;
        });*/
        this.previewData.answers[index] = dropBoxValue;
        // console.log(index);
        // console.log(this.previewData.answers);
    }
    edit() {
        this.itemUtil.previewItem = false;
        if (this.previewData.id) {
            // Remove this line that was clearing the answers
            // this.previewData.scoringOption.answers = [];
            this.returnPreviewData.emit(this.previewData);
            this.router.navigate(['/examalpha/subjects/' + this.subjectId + '/edit-item'], {
                queryParams: {
                    type: `${this.previewData.type}`,
                    id: `${this.previewData.id}`,
                },
            });
        }
        else {
            this.returnPreviewData.emit(this.previewData);
        }
    }
    check() {
        this.showAnswer = !this.showAnswer;
    }
    review() {
        if (this.previewData.id) {
            //this.return.emit();
            this.router.navigate(['/examalpha/subjects/' + this.subjectId + '/edit-item'], {
                queryParams: {
                    type: `${this.previewData.type}`,
                    id: `${this.previewData.id}`,
                },
            });
        }
        else {
            this.reload.emit();
        }
    }
    selection(i) {
        //this.selected = i;
    }
    openDeleteItemModal(deleteConfirmationModal, itemId) {
        this.selectedItemId = itemId;
        this.modalRef = this.modalService.open(deleteConfirmationModal, {
            centered: true,
            size: 'md',
        });
    }
    openDeletePassageItemModal(deletePassageQuestionConfirmationModal, itemId) {
        this.selectedItemId = itemId;
        this.modalRef = this.modalService.open(deletePassageQuestionConfirmationModal, {
            centered: true,
            size: 'md',
        });
    }
    deleteItem() {
        this.processing_delete = true;
        this.itemService.deleteItem(this.selectedItemId).subscribe((value) => {
            if (value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    icon: 'success',
                    title: 'Congratulations',
                    text: 'The item was deleted successfully!',
                });
                this.refresh();
            }
            this.processing_delete = false;
            this.modalService.dismissAll();
        }, (error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'error',
                title: 'Failed!',
                text: `${error.error.message}`,
            });
            this.processing_delete = false;
            this.modalService.dismissAll();
        });
    }
    refresh() {
        this.reload.emit();
    }
    deletePassageItem() {
        this.processing_delete = true;
        this.passageService
            .deletePassageItem(this.selectedItemId, this.previewData.passageId)
            .subscribe((value) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Congratulations!',
                text: 'You have successfully deleted the selected question.',
                icon: 'success',
            });
            /* this.passage.items = this.passage.items.filter(
              (item) => item.id !== this.selectedItemId
            ); */
            this.processing_delete = false;
            this.refresh();
            this.modalService.dismissAll();
            //this.ngOnInit();
        }, (error) => {
            this.processing_delete = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Failed!',
                text: `${error.error.message}`,
                icon: 'error',
            });
        });
    }
    openUsageHistoryModal(itemUsageModal, itemId) {
        this.loading_usage_history = true;
        this.modalService.open(itemUsageModal, {
            centered: true,
            size: 'md',
        });
        this.itemService.fetchItemUsageCount(itemId).subscribe((value) => {
            if (value) {
                this.itemUsageHistory = value;
                this.loading_usage_history = false;
            }
        }, (error) => {
            this.loading_usage_history = false;
            this.notifier.notify('error', error.error.message);
        });
        /* this.router.navigate([
          '/examalpha/subjects/' +
            this.subject_id +
            '/questions/' +
            itemId +
            '/usage-history',
        ]); */
    }
    viewAnswer() {
        this.showAnswer = !this.showAnswer;
        this.renderContent();
    }
}
ClozeDropdownPreviewComponent.ɵfac = function ClozeDropdownPreviewComponent_Factory(t) { return new (t || ClozeDropdownPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_item_http_service__WEBPACK_IMPORTED_MODULE_1__.ItemHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_passages_list_passages_all_passages_service__WEBPACK_IMPORTED_MODULE_3__.AllPassagesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_recycle_recycle_service__WEBPACK_IMPORTED_MODULE_4__.RecycleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_10__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_item_utilities_service__WEBPACK_IMPORTED_MODULE_5__.ItemUtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer)); };
ClozeDropdownPreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ClozeDropdownPreviewComponent, selectors: [["app-cloze-dropdown-preview"]], inputs: { component: "component", previewData: "previewData", itemTrailInfo: "itemTrailInfo", selectedItemType: "selectedItemType", formType: "formType" }, outputs: { returnPreviewData: "returnPreviewData", reload: "reload" }, decls: 21, vars: 5, consts: [[1, "card"], [1, "card-body"], ["class", "d-flex justify-content-between flex-wrap mb-5", 4, "ngIf"], ["class", "col-xxl-12 col-lg-12 col-md-12 col-sm-12", 4, "ngIf"], [2, "max-height", "250px", "overflow-y", "auto"], [1, "fw-normal", 3, "innerHTML"], [1, "text-primary", "d-flex", "justify-content-between"], [1, "form-check", "mt-1"], ["type", "checkbox", "name", "showAnswer", 1, "form-check-input", 3, "change"], [1, "form-check-label"], ["class", "text-danger", 4, "ngIf"], ["class", "d-flex gap-2 float-end flex-wrap", 4, "ngIf"], ["deleteQuestionConfirmationModal", ""], ["deletePassageQuestionConfirmationModal", ""], ["itemUsageModal", ""], [1, "d-flex", "justify-content-between", "flex-wrap", "mb-5"], [1, "card-title"], [1, "text-muted"], [1, "col-xxl-12", "col-lg-12", "col-md-12", "col-sm-12"], [3, "innerHTML"], [1, "text-danger"], [1, "d-flex", "gap-2", "float-end", "flex-wrap"], ["class", "btn btn-sm btn-danger", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "ri-delete-bin-2-fill", "align-middle", "fs-14"], [1, "ri-delete-bin-5-fill", "align-middle", "fs-14"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ri-edit-fill", "label-icon", "align-middle", "fs-16", "me-2"], [1, "modal-body", "p-5"], [1, "mb-4", "text-center"], [1, "row"], [1, "text-center", "text-muted"], [1, "d-flex", "justify-content-center", "gap-2", "mt-2"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "class", "btn btn-danger", 3, "click", 4, "ngIf"], [3, "ngIf"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-outline-danger", "btn-load", 3, "disabled"], [1, "d-flex", "align-items-center"], ["role", "status", 1, "spinner-border", "flex-shrink-0"], [1, "visually-hidden"], [1, "flex-grow-1", "ms-2"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "px-5", 2, "height", "350px", "scroll-behavior", "smooth", "overflow-x", "hidden", "overflow-y", "auto"], [4, "ngIf"], ["class", "p-2", 4, "ngIf"], ["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], [1, "card-footer"], [1, "d-flex", "justify-content-end", "gap-2"], ["class", "profile-timeline", 4, "ngFor", "ngForOf"], [1, "profile-timeline"], ["activeIds", "static-1", 3, "closeOthers"], ["acc", "ngbAccordion"], ["id", "static-1"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], ["data-bs-toggle", "collapse", "href", "javasccript:void(0;)", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "accordion-button", "p-2", "shadow-none"], [1, "flex-shrink-0", "avatar-xs"], [1, "avatar-title", "rounded-circle", "'bg-success'"], [1, "ri-file-line"], [1, "flex-grow-1", "ms-3"], [1, "fs-15", "mb-0", "fw-semibold"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body", "ms-2", "ps-5", "pt-0"], [1, "p-2"], [1, "d-flex", "flex-column", "justify-content-between", "align-items-center"], ["src", "assets/images/blank_pages/empty-state.png", "width", "200", "height", "200", 1, ""], [1, "text-secondary", "fw-bold", "my-2"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"]], template: function ClozeDropdownPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ClozeDropdownPreviewComponent_div_2_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ClozeDropdownPreviewComponent_div_3_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ClozeDropdownPreviewComponent_Template_input_change_10_listener() { return ctx.viewAnswer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Show Answer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ClozeDropdownPreviewComponent_span_13_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ClozeDropdownPreviewComponent_div_14_Template, 5, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ClozeDropdownPreviewComponent_ng_template_15_Template, 11, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ClozeDropdownPreviewComponent_ng_template_17_Template, 11, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ClozeDropdownPreviewComponent_ng_template_19_Template, 14, 3, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !!ctx.selectedItemType && !!ctx.formType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.previewData && ctx.previewData.itemPassage && ctx.component !== "passageItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx.sanitizedContent, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.previewData.scoringOption.answers.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.assessmentActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPanelTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPanelContent], pipes: [src_app_shared_pipes_html_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_6__.HtmlSanitizerPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbG96ZS1kcm9wZG93bi1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 83415:
/*!************************************************************************!*\
  !*** ./src/app/pages/items/cloze-dropdown/cloze-dropdown.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClozeDropdownComponent": () => (/* binding */ ClozeDropdownComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _utility_FileUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/FileUpload */ 99302);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-file-upload */ 58356);
/* harmony import */ var _utility_ClozeTextUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/ClozeTextUtil */ 92534);
/* harmony import */ var _cloze_dropdown_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cloze-dropdown.model */ 63664);
/* harmony import */ var _models_default_item_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/default-item-properties */ 28333);
/* harmony import */ var _models_item_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/item-types */ 55284);
/* harmony import */ var _models_item_status_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/item-status-enum */ 60758);
/* harmony import */ var _models_scoring_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/scoring-type-enum */ 50459);
/* harmony import */ var _models_responses_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/responses.model */ 26963);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _models_matching_rule_enums__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/matching-rule-enums */ 14309);
/* harmony import */ var _models_rejection_reason__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/rejection-reason */ 36172);
/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! katex */ 33749);
/* harmony import */ var _item_http_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../item-http.service */ 45911);
/* harmony import */ var _item_utilities_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../item-utilities.service */ 16716);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _passages_list_passages_all_passages_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../passages/list-passages/all-passages.service */ 88820);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _passage_preview_passage_preview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../passage-preview/passage-preview.component */ 29306);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 28155);
/* harmony import */ var _item_tag_item_tag_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../item-tag/item-tag.component */ 73742);
/* harmony import */ var _cloze_dropdown_preview_cloze_dropdown_preview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../cloze-dropdown-preview/cloze-dropdown-preview.component */ 5518);

 //import {getTinymce as Tmce} from "@tinymce/tinymce-angular/TinyMCE";




























const _c0 = ["tagRef"];

function ClozeDropdownComponent_form_0_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ClozeDropdownComponent_form_0_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return ctx_r19.setShowPassage(!ctx_r19.showPassage);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " View Passage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}

function ClozeDropdownComponent_form_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ClozeDropdownComponent_form_0_div_13_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r22);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1);

      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r21.saveItem(_r4, "save");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](7, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](8, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ClozeDropdownComponent_form_0_div_13_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r22);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1);

      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r23.saveToDraft(_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10, "Save as draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}

function ClozeDropdownComponent_form_0_div_14_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ClozeDropdownComponent_form_0_div_14_li_5_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r30);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](30);

      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r29.openConfirmationModal(_r12);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}

function ClozeDropdownComponent_form_0_div_14_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ClozeDropdownComponent_form_0_div_14_li_6_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r32);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1);

      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r31.updateItem(_r4, "save");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}

function ClozeDropdownComponent_form_0_div_14_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ClozeDropdownComponent_form_0_div_14_li_7_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r34);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);

      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](32);

      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r33.openConfirmationModal(_r14);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}

function ClozeDropdownComponent_form_0_div_14_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ClozeDropdownComponent_form_0_div_14_li_8_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r36);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1);

      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r35.updateItem(_r4, "draft");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "Save as Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}

function ClozeDropdownComponent_form_0_div_14_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ClozeDropdownComponent_form_0_div_14_li_9_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r38);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1);

      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r37.updateItem(_r4, "save");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}

function ClozeDropdownComponent_form_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "ul", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](5, ClozeDropdownComponent_form_0_div_14_li_5_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](6, ClozeDropdownComponent_form_0_div_14_li_6_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, ClozeDropdownComponent_form_0_div_14_li_7_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](8, ClozeDropdownComponent_form_0_div_14_li_8_Template, 3, 0, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](9, ClozeDropdownComponent_form_0_div_14_li_9_Template, 3, 0, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r7.editData.itemStatus === "AWAITING_MODERATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r7.editData.itemStatus === "PUBLISHED");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r7.editData.itemStatus === "AWAITING_MODERATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r7.editData.itemStatus === "DRAFT");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r7.editData.itemStatus === "DRAFT");
  }
}

function ClozeDropdownComponent_form_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ClozeDropdownComponent_form_0_div_15_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r40);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1);

      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r39.saveItem(_r4, "save");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](7, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](8, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ClozeDropdownComponent_form_0_div_15_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r40);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1);

      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r41.saveToDraft(_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10, "Save as draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](11, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](12, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ClozeDropdownComponent_form_0_div_15_Template_a_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r40);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1);

      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r42.saveAndNew(_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](13, "Save and new");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}

function ClozeDropdownComponent_form_0_app_passage_preview_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "app-passage-preview", 44);
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("previewData", ctx_r9.passageForPreview);
  }
}

function ClozeDropdownComponent_form_0_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "h4", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "Confirm Action Dialog");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5, " Are you sure you want to accept this Question? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ClozeDropdownComponent_form_0_ng_template_29_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r45);
      const modal_r43 = restoredCtx.$implicit;
      return modal_r43.close("Close click");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](8, " No, Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ClozeDropdownComponent_form_0_ng_template_29_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r45);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1);

      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r46.approveQuestion(_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10, " Yes, accept It ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}

function ClozeDropdownComponent_form_0_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "h4", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "Confirm Action Dialog");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5, " Are you sure you want to reject this Question? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ClozeDropdownComponent_form_0_ng_template_31_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r49);
      const modal_r47 = restoredCtx.$implicit;
      return modal_r47.close("Close click");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](8, " No, Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ClozeDropdownComponent_form_0_ng_template_31_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r49);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](3);

      return ctx_r50.openRejectionReasonModal(_r2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10, " Yes, reject It ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}

function ClozeDropdownComponent_form_0_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "h2", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, " More options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}

function ClozeDropdownComponent_form_0_ng_template_39_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const scoreType_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpropertyInterpolate"]("value", scoreType_r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", scoreType_r54, " ");
  }
}

function ClozeDropdownComponent_form_0_ng_template_39_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const matchRule_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpropertyInterpolate"]("value", matchRule_r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", matchRule_r55, " ");
  }
}

function ClozeDropdownComponent_form_0_ng_template_39_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const difficulty_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpropertyInterpolate"]("value", difficulty_r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", difficulty_r56, " ");
  }
}

function ClozeDropdownComponent_form_0_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](6, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("ngModelChange", function ClozeDropdownComponent_form_0_ng_template_39_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return ctx_r57.defaultItemProperties.scoringOption.score = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](8, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10, "Scoring Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](11, "select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("ngModelChange", function ClozeDropdownComponent_form_0_ng_template_39_Template_select_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r58);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return ctx_r59.defaultItemProperties.scoringOption.scoringType = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](12, ClozeDropdownComponent_form_0_ng_template_39_option_12_Template, 2, 2, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](13, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](14, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](15, "Matching Rule");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](16, "select", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("ngModelChange", function ClozeDropdownComponent_form_0_ng_template_39_Template_select_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r58);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return ctx_r60.defaultItemProperties.scoringOption.matchingRule = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](17, ClozeDropdownComponent_form_0_ng_template_39_option_17_Template, 2, 2, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](18, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](19, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](20, "Penalty");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](21, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](22, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("ngModelChange", function ClozeDropdownComponent_form_0_ng_template_39_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r58);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return ctx_r61.defaultItemProperties.scoringOption.penalty = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](23, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](24, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](25, "Difficulty level");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](26, "select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("ngModelChange", function ClozeDropdownComponent_form_0_ng_template_39_Template_select_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r58);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return ctx_r62.defaultItemProperties.difficultyLevel = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](27, ClozeDropdownComponent_form_0_ng_template_39_option_27_Template, 2, 2, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](28, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](29, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](30, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("ngModelChange", function ClozeDropdownComponent_form_0_ng_template_39_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r58);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return ctx_r63.defaultItemProperties.scoringOption.autoScore = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](31, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](32, " Auto Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngModel", ctx_r18.defaultItemProperties.scoringOption.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngModel", ctx_r18.defaultItemProperties.scoringOption.scoringType);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r18.scoringType);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngModel", ctx_r18.defaultItemProperties.scoringOption.matchingRule);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r18.matchingRules);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngModel", ctx_r18.defaultItemProperties.scoringOption.penalty);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngModel", ctx_r18.defaultItemProperties.difficultyLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r18.difficultyLevels);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngModel", ctx_r18.defaultItemProperties.scoringOption.autoScore);
  }
}

function ClozeDropdownComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "form", null, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ClozeDropdownComponent_form_0_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r65);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1);

      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r64.doPreview(_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](11, " Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](12, ClozeDropdownComponent_form_0_button_12_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](13, ClozeDropdownComponent_form_0_div_13_Template, 11, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](14, ClozeDropdownComponent_form_0_div_14_Template, 10, 5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](15, ClozeDropdownComponent_form_0_div_15_Template, 14, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](16, ClozeDropdownComponent_form_0_app_passage_preview_16_Template, 1, 1, "app-passage-preview", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](18, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](19, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](20, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("ngModelChange", function ClozeDropdownComponent_form_0_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r65);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r66.defaultItemProperties.reference = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](23, "Compose Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](24, "editor", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("ngModelChange", function ClozeDropdownComponent_form_0_Template_editor_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r65);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r67.defaultItemProperties.stimulus = $event;
    })("ngModelChange", function ClozeDropdownComponent_form_0_Template_editor_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r65);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r68.onStimulusChange($event);
    })("onInit", function ClozeDropdownComponent_form_0_Template_editor_onInit_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r65);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r69.logEditor($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](26, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](27, "app-item-tag", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("sendTags", function ClozeDropdownComponent_form_0_Template_app_item_tag_sendTags_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r65);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r70.recieveTag($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](29, ClozeDropdownComponent_form_0_ng_template_29_Template, 11, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](31, ClozeDropdownComponent_form_0_ng_template_31_Template, 11, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](33, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](34, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](35, "ngb-accordion", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](37, "ngb-panel", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](38, ClozeDropdownComponent_form_0_ng_template_38_Template, 3, 0, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](39, ClozeDropdownComponent_form_0_ng_template_39_Template, 33, 9, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedItemType, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r0.formType);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r0.passageId);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r0.editData && ctx_r0.currentUser.authorities.includes("AUTHOR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r0.editData && (ctx_r0.currentUser.authorities.includes("MODERATOR") || ctx_r0.currentUser.authorities.includes("ADMIN")));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r0.editData);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r0.showPassage);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngModel", ctx_r0.defaultItemProperties.reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngModel", ctx_r0.defaultItemProperties.stimulus)("init", ctx_r0.option);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("closeOthers", true);
  }
}

function ClozeDropdownComponent_app_cloze_dropdown_preview_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "app-cloze-dropdown-preview", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("returnPreviewData", function ClozeDropdownComponent_app_cloze_dropdown_preview_1_Template_app_cloze_dropdown_preview_returnPreviewData_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r72);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r71.returnPreviewData();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("previewData", ctx_r1.previewData)("itemTrailInfo", ctx_r1.itemTrailInfo)("selectedItemType", ctx_r1.selectedItemType)("formType", ctx_r1.formType);
  }
}

function ClozeDropdownComponent_ng_template_2_button_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}

function ClozeDropdownComponent_ng_template_2_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4, "Saving...");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](6, " Saving... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("disabled", ctx_r76.processingRejection);
  }
}

const _c1 = "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent table quickimage quicklink";

const _c2 = function () {
  return {
    base_url: "/tinymce",
    height: 200,
    suffix: ".min",
    menubar: true,
    plugins: "table quickbars lists autoresize",
    quickbars_insert_toolbars: false,
    branding: false,
    toolbar: _c1
  };
};

function ClozeDropdownComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "form", 76, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("ngSubmit", function ClozeDropdownComponent_ng_template_2_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r78);

      const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](2);

      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r77.submitRejection(_r74);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "h4", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4, "Reason for Rejection");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](6, " provide a reason why you have rejected the question. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](9, "Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "editor", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("ngModelChange", function ClozeDropdownComponent_ng_template_2_Template_editor_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r78);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r79.newRejectionReason.reason = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](11, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](12, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ClozeDropdownComponent_ng_template_2_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r78);
      const modal_r73 = restoredCtx.$implicit;
      return modal_r73.close("Close click");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](13, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](14, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](15, ClozeDropdownComponent_ng_template_2_button_15_Template, 3, 0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](16, ClozeDropdownComponent_ng_template_2_ng_template_16_Template, 7, 1, "ng-template", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngModel", ctx_r3.newRejectionReason.reason)("init", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r3.processingRejection);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r3.processingRejection);
  }
} // // Load WIRISplugins.js dynamically
// const jsDemoImagesTransform = document.createElement("script");
// jsDemoImagesTransform.type = "text/javascript";
// jsDemoImagesTransform.src =
//   "https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image";
// // Load generated scripts.
// document.head.appendChild(jsDemoImagesTransform);


class ClozeDropdownComponent {
  constructor(itemService, itemUtil, userService, notifier, location, router, modalService, ar, passageService) {
    this.itemService = itemService;
    this.itemUtil = itemUtil;
    this.userService = userService;
    this.notifier = notifier;
    this.location = location;
    this.router = router;
    this.modalService = modalService;
    this.ar = ar;
    this.passageService = passageService;
    this.stimulus = new _angular_core__WEBPACK_IMPORTED_MODULE_20__.EventEmitter();
    this.editDataStatus = false;
    this.newEditData = new _cloze_dropdown_model__WEBPACK_IMPORTED_MODULE_3__.ClozeDropdown();
    this.dropdownCount = 0;
    this.content = [];
    this.responses = [];
    this.displayTagModal = false;
    this.preview = false;
    this.selectedIndexes = new Set();
    this.tags = [];
    this.defaultItemProperties = new _models_default_item_properties__WEBPACK_IMPORTED_MODULE_4__.DefaultItemProperties();
    this.difficultyLevels = [1, 2, 3, 4, 5];
    this.scoringType = ['EXACT_MATCH', 'PARTIAL_MATCH_PER_RESPONSE', 'PARTIAL_MATCH'];
    this.clozeRenderArray = [];
    this.subjectModerationStatusEnabled = this.itemService.currentSubjectModerationEnabled;
    this.moderationStatus = false;
    this.newRejectionReason = new _models_rejection_reason__WEBPACK_IMPORTED_MODULE_11__.RejectionReason();
    this.updatingItem = false;
    this.processingRejection = false;
    this.subjectModerationStatus = false;
    this.selectBoxesLength = 0;
    this.passageId = '';
    this.showPassage = false;
    this.option = {
      min_height: 300,
      max_height: 500,
      menubar: true,
      statusbar: false,
      base_url: '/tinymce',
      content_css: '/katex/dist/katex.min.css',
      branding: false,
      inline_boundaries: false,
      suffix: '.min',
      plugins: 'image autoresize media table quickbars lists charmap',
      file_picker_callback: _utility_FileUpload__WEBPACK_IMPORTED_MODULE_1__.imageUpload,

      /* images_upload_url:'http://192.168.0.131:8081/itembank/api/images',
      images_upload_credentials:true,*/
      setup: this.setup,
      draggable_modal: true,
      extended_valid_elements: 'span[*],svg[*],path[*],g[*],defs[*],line[*],rect[*],circle[*],ellipse[*],polygon[*],polyline[*],math[*],semantics[*],annotation[*],annotation-xml[*],merror[*],mtext[*],mspace[*],mover[*],munder[*],munderover[*],mstack[*],mrow[*],msrow[*],mfenced[*],menclose[*],mphantom[*],msup[*],msub[*],msubsup[*],mmultiscripts[*],mi[*],mn[*],mo[*],ms[*],mtable[*],mtr[*],mtd[*],mlabeledtr[*],mfrac[*],mfraction[*],msline[*],msqrt[*],mroot[*],mscarries[*],mscarry[*]',

      /* external_plugins: {
        tiny_mce_wiris: `${window.location.href}/node_modules/@wiris/mathtype-tinymce5/plugin.min.js`,
      }, */
      toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify myimage myimage2 bullist numlist outdent indent table quickimage quicklink equation-editor | subscript superscript charmap'
    };

    this.changeFunc = function () {
      // console.log('i am called');
      alert('on change');
    };

    this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_21__.FileUploader({
      url: '//post',
      disableMultipart: false,
      autoUpload: true,
      method: 'post',
      itemAlias: 'attachment',
      allowedFileType: ['image']
    });
  }

  ngAfterViewInit() {//console.log('I am in an init!');
  }

  ngOnInit() {
    this.passageId = this.ar.snapshot.params['passageId'];
    console.log('PASS ID: ', this.passageId);
    console.log('SHOW PASS: ', this.showPassage);

    if (this.passageId) {
      this.passageService.fetchSinglePassage(this.passageId).subscribe({
        next: value => {
          this.passageForPreview = value;
          console.log('PASS PREVIEW: ', this.passageForPreview);
        }
      });
    }

    if (!this.selectedItemType) {
      this.selectedItemType = 'Fill in the gap';
    }

    this.currentUser = this.userService.getCurrentUser();

    this.uploader.onCompleteItem = (item, response, status, headers) => {
      tinymce.activeEditor.insertContent('<img src="' + location + '"/>');
    };

    this.scoringType = Object.values(_models_scoring_type_enum__WEBPACK_IMPORTED_MODULE_7__.ScoringTypeEnum);
    this.defaultItemProperties.scoringOption.matchingRule = _models_matching_rule_enums__WEBPACK_IMPORTED_MODULE_10__.MatchingRuleEnums.EXACT_MATCH;
    this.defaultItemProperties.scoringOption.autoScore = true;
    this.matchingRules = Object.values(_models_matching_rule_enums__WEBPACK_IMPORTED_MODULE_10__.MatchingRuleEnums);
    this.defaultItemProperties.shuffleOptions = true;
    this.defaultItemProperties.difficultyLevel = 1;
    this.subjectModerationStatus = this.itemService.currentSubjectModerationEnabled; // if (this.editDataStatus) {
    //   this.editData.stimulus = "<p>{{response}} are to {{response}}</p>";
    //   this.editData.itemId = "bhbcbhvyshasyhsh";
    //   this.editData.reference = "Item 1";
    //   this.editData.difficultyLevel = 3;
    //   this.editData.shuffleOptions = false;
    //   (this.editData.subjectId = "25"), (this.editData.topicId = "20");
    //   this.editData.possibleResponses = [
    //     { responses: ["cats", "dogs", "rats", "horse"] },
    //     { responses: ["meows", "whinies", "barks", "squeaks"] },
    //   ];
    //   this.editData.scoringOption.answers = ["1", "2"];
    // }

    if (this.editData) {
      console.log('here i am'); //this.defaultItemProperties.stimulus = this.editData.stimulus;

      this.defaultItemProperties.scoringOption.answers = this.editData.scoringOption.answers;
      this.defaultItemProperties.reference = this.editData.reference; // this.editData.stimulus = this.editData.stimulus.replaceAll(
      //   "{{response}}",
      //   "<select style='width: 200px; height: 30px; border-radius: 3px'></select>"
      // );

      const selectTemplate = `<select style='width: 200px; height: 30px; border-radius: 3px; display: inline-block;'><option value="blank">--</option><option value="addRemove">click to add / remove</option></select>`;
      let modifiedStimulus = this.editData.stimulus;
      const responseMatches = modifiedStimulus.match(/{{response}}/g) || [];
      responseMatches.forEach(() => {
        modifiedStimulus = modifiedStimulus.replace('{{response}}', selectTemplate);
      });
      this.defaultItemProperties.stimulus = modifiedStimulus; // this.defaultItemProperties.stimulus = this.editData.stimulus;

      this.defaultItemProperties.scoringOption.score = this.editData.scoringOption.score;
      this.defaultItemProperties.scoringOption.penalty = this.editData.scoringOption.penalty;
      this.defaultItemProperties.scoringOption.matchingRule = this.editData.scoringOption.matchingRule;
      this.defaultItemProperties.scoringOption.scoringType = this.editData.scoringOption.scoringType;
      this.defaultItemProperties.scoringOption.autoScore = this.editData.scoringOption.autoScore;
      this.defaultItemProperties.scoringOption.caseSensitive = this.editData.scoringOption.caseSensitive;
      this.defaultItemProperties.scoringOption.minimumScoreIfAttempted = this.editData.scoringOption.minimumScoreIfAttempted;
      /* let openingIndex = this.editData.stimulus.indexOf('{{response}}');
      while(true) */
    }
  }

  onStimulusChange(value) {
    this.stimulus.emit(value);
  }

  setShowPassage(value) {
    this.showPassage = value;
  }

  logEditor(event) {
    if (this.editData) {
      let selectBoxes = tinymce.get('abc').getDoc().querySelectorAll('select');
      console.log('These are the select boxes', selectBoxes);
      this.selectBoxesLength = selectBoxes.length;
      selectBoxes.forEach((selectBox, i) => {
        selectBox.setAttribute('id', i + '');
        console.log(selectBoxes.length, 'select box length'); // Add default options if not present

        if (selectBox.options.length === 0) {
          let option1 = document.createElement('option');
          let option2 = document.createElement('option');
          option1.label = '--';
          option1.value = 'blank';
          option2.label = 'click to add / remove';
          option2.value = 'addRemove';
          selectBox.options.add(option1);
          selectBox.options.add(option2);
        } // Add dynamic response options


        const responses = this.editData.possibleResponses[i].responses;
        responses.forEach((response, j) => {
          let new_option = document.createElement('option');
          new_option.label = response;
          new_option.value = j + ''; // Check if option already exists, avoid duplicates

          if (!Array.from(selectBox.options).some(option => option.value === j + '')) {
            selectBox.options.add(new_option);
          }
        }); // Insert space after the last select box if it's the last one

        if (i === selectBoxes.length - 1) {
          let p = document.createElement('p');
          p.innerHTML = '&nbsp;';
          tinymce.activeEditor.getDoc().body.appendChild(p);
        } // Set the selected answer


        const correctAnswer = this.editData.scoringOption.answers[i]; // Correct answer for this selectBox

        for (let k = 0; k < selectBox.options.length; k++) {
          const optionLabel = selectBox.options[k].label; // Current option's label

          if (optionLabel === correctAnswer) {
            selectBox.options[k].selected = true; // Set as selected

            console.log(`Answer set for selectBox ${i}: ${correctAnswer}`);
            break;
          }
        } // Add event listener for handling "add/remove"


        selectBox.addEventListener('change', event => {
          console.log('change event added for', i);
          let selectElement = event.currentTarget; // Cast to HTMLSelectElement
          // Skip if "add/remove" is not clicked

          if (selectElement.options[selectElement.selectedIndex].value !== 'addRemove') {
            return;
          } // Build the options array for add/remove functionality


          let optionsArray = [{
            value: 'selectOption',
            text: 'Select option to delete'
          }];

          for (let j = 0; j < selectElement.options.length; j++) {
            if (selectElement.options[j].value === 'blank' || selectElement.options[j].value === 'addRemove') {
              continue;
            }

            optionsArray.push({
              value: selectElement.options[j].value,
              text: selectElement.options[j].label
            });
          } // Execute the TinyMCE command for add/remove functionality


          tinymce.activeEditor.execCommand('addRemoveClozeOption', false, {
            select: event.currentTarget,
            options: optionsArray
          });
          selectElement.selectedIndex = 0; // Reset selection
        });
        console.log(`SelectBox ${i} initialized in TinyMCE.`);
      });
      /* selectBoxes.forEach((selectBox, i) => {
            let options: HTMLOptionElement[] = [];
            for (let j = 0; j < selectBox.options.length; j++) {
              //selectBox.options((option) => {
                          if (
                selectBox.options[j].value === 'blank' ||
                selectBox.options[j].value === 'addRemove'
              ) {
                continue;
              } else {
                if (j - 2 == +this.previewData.scoringOption.answers[i]) {
                  selectBox.options[j].selected = true;
                  console.log('answer found');
                }
              }
              //})
            }
          }); */
    } // if (this.previewData) {
    //   let selectedBoxes: HTMLSelectElement[] = tinymce
    //     .get("abc")
    //     .getDoc()
    //     .querySelectorAll("select");
    //   // console.log('These are the selected boxes', selectedBoxes);
    //   selectedBoxes.forEach((selectBox, i) => {
    //     let options: HTMLOptionElement[] = [];
    //     for (let j = 0; j < selectBox.options.length; j++) {
    //       //selectBox.options((option) => {
    //       if (
    //         selectBox.options[j].value === "blank" ||
    //         selectBox.options[j].value === "addRemove"
    //       ) {
    //         continue;
    //       } else {
    //         if (j - 2 == +this.previewData.scoringOption.answers[i]) {
    //           selectBox.options[j].selected = true;
    //           // console.log('answer found');
    //         }
    //       }
    //       //})
    //     }
    //     /* for (let j = 0; j < options.length; j++) {
    //       let option = options[j];
    //       console.log('Logging answer', option, this.previewData.scoringOption.answers[j]);
    //       if (j == +this.previewData.scoringOption.answers[j]) {
    //         option.selected = true;
    //         console.log('answer found');
    //       }
    //     } */
    //   });
    // }

  }

  recieveTag(tag) {
    this.tags = tag;
  }

  setup(editor_) {
    // let tinymce : any;
    // console.log("this is tmce",tinymce)
    let editor = editor_;
    this.editor = editor;
    let activeEquation = null;
    console.log(this.editor, 'this');
    let count = 0; //   let selectBoxes: HTMLSelectElement[] = editor
    // .get("abc")
    // .getDoc()
    // .querySelectorAll("select");

    console.log(editor.getBody(), 'editor'); // console.log(selectBoxes, 'editor selectBoxes');

    const openDialog = latex => {
      editor.windowManager.open({
        title: 'Edit Equation',
        size: 'normal',
        body: {
          type: 'panel',
          items: [{
            type: 'htmlpanel',
            html: `<math-field id="mathfield" style="width: 100%; height: 200px; border: 1px solid grey">${latex}</math-field>`
          }]
        },
        buttons: [{
          type: 'cancel',
          name: 'cancel',
          text: 'Cancel'
        }, {
          type: 'submit',
          name: 'update',
          text: 'Update',
          primary: true
        }],
        onSubmit: function () {
          var _ref = (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (api) {
            var _a;

            const mathField = document.getElementById('mathfield');
            const updatedLatex = mathField.getValue();

            if (activeEquation) {
              // Local KaTeX Rendering
              const renderedHtml = katex__WEBPACK_IMPORTED_MODULE_12__["default"].renderToString(updatedLatex, {
                throwOnError: false
              });

              if (activeEquation.tagName === 'IMG') {
                // Replace the old IMG element with a new SPAN element
                const newSpan = document.createElement('span');
                newSpan.className = 'math-expression';
                newSpan.setAttribute('data-latex', updatedLatex);
                newSpan.setAttribute('contenteditable', 'false');
                newSpan.style.display = 'inline-block';
                newSpan.style.verticalAlign = 'middle';
                newSpan.style.margin = '4px 5px';
                newSpan.style.padding = '2px 0';
                newSpan.innerHTML = renderedHtml;
                (_a = activeEquation.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(newSpan, activeEquation);
              } else {
                // It is already a SPAN element
                activeEquation.setAttribute('data-latex', updatedLatex);
                activeEquation.setAttribute('contenteditable', 'false');
                activeEquation.style.display = 'inline-block';
                activeEquation.style.verticalAlign = 'middle';
                activeEquation.innerHTML = renderedHtml;
              }

              editor.setDirty(true);
            }

            activeEquation = null;
            api.close();
          });

          return function onSubmit(_x) {
            return _ref.apply(this, arguments);
          };
        }()
      });
    };

    editor.ui.registry.addIcon('cloze', '<svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59375 25.25V5.25H7.21875V6.78125H4.34375V23.7188H7.21875V25.25H2.59375ZM11.002 22.125C10.6165 22.125 10.2858 21.987 10.0098 21.7109C9.73372 21.4349 9.5957 21.1042 9.5957 20.7187C9.5957 20.3333 9.73372 20.0026 10.0098 19.7266C10.2858 19.4505 10.6165 19.3125 11.002 19.3125C11.3874 19.3125 11.7181 19.4505 11.9941 19.7266C12.2702 20.0026 12.4082 20.3333 12.4082 20.7187C12.4082 20.974 12.3431 21.2083 12.2129 21.4219C12.0879 21.6354 11.9186 21.8073 11.7051 21.9375C11.4967 22.0625 11.2624 22.125 11.002 22.125ZM17.0605 22.125C16.6751 22.125 16.3444 21.987 16.0684 21.7109C15.7923 21.4349 15.6543 21.1042 15.6543 20.7187C15.6543 20.3333 15.7923 20.0026 16.0684 19.7266C16.3444 19.4505 16.6751 19.3125 17.0605 19.3125C17.446 19.3125 17.7767 19.4505 18.0527 19.7266C18.3288 20.0026 18.4668 20.3333 18.4668 20.7187C18.4668 20.974 18.4017 21.2083 18.2715 21.4219C18.1465 21.6354 17.9772 21.8073 17.7637 21.9375C17.5553 22.0625 17.321 22.125 17.0605 22.125ZM23.1191 22.125C22.7337 22.125 22.403 21.987 22.127 21.7109C21.8509 21.4349 21.7129 21.1042 21.7129 20.7187C21.7129 20.3333 21.8509 20.0026 22.127 19.7266C22.403 19.4505 22.7337 19.3125 23.1191 19.3125C23.5046 19.3125 23.8353 19.4505 24.1113 19.7266C24.3874 20.0026 24.5254 20.3333 24.5254 20.7187C24.5254 20.974 24.4603 21.2083 24.3301 21.4219C24.2051 21.6354 24.0358 21.8073 23.8223 21.9375C23.6139 22.0625 23.3796 22.125 23.1191 22.125ZM31.5215 5.25V25.25H26.8965V23.7188H29.7715V6.78125H26.8965V5.25H31.5215Z" fill="#1E1E1E"/></svg>');
    editor.ui.registry.addButton('myimage', {
      icon: 'cloze',

      onAction() {
        // editor.execCommand('openImageDialog', false, null);
        // console.log('button clicked');
        //editor.insertContent("<input type = 'text'/>", { class : 'form-control'});
        //console.log(editor.getDoc().querySelectorAll('input[type=text]'));
        // console.log(count + ' this is count');
        ++count;
        (0,_utility_ClozeTextUtil__WEBPACK_IMPORTED_MODULE_2__.newClozeDropDown)(editor, count);
      }

    });
    editor.on('init', () => {
      const editorBody = editor.getBody(); // Event  for equations

      editorBody.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('.math-expression')) {
          const equationElement = target.closest('.math-expression');
          activeEquation = equationElement;
          const latex = equationElement.getAttribute('data-latex') || '';
          openDialog(latex);
        }
      });
    });
    editor.ui.registry.addButton('equation-editor', {
      text: 'Insert Math',
      icon: 'character-count',
      onAction: () => {
        editor.windowManager.open({
          title: 'Insert Equation',
          size: 'normal',
          body: {
            type: 'panel',
            items: [{
              type: 'htmlpanel',
              html: `<math-field id="mathfield" style="width: 100%; height: 200px; border: 1px solid grey"></math-field>`
            }]
          },
          buttons: [{
            type: 'cancel',
            name: 'cancel',
            text: 'Cancel'
          }, {
            type: 'submit',
            name: 'insert',
            text: 'Insert',
            primary: true
          }],
          onSubmit: function () {
            var _ref2 = (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (api) {
              const mathField = document.getElementById('mathfield');
              const latex = mathField.getValue(); // Ensure cursor placement is outside the equation

              editor.selection.collapse(false); // Local KaTeX Rendering

              const renderedHtml = katex__WEBPACK_IMPORTED_MODULE_12__["default"].renderToString(latex, {
                throwOnError: false
              });
              const content = `<span class="math-expression" data-latex="${latex}" contenteditable="false" style="display: inline-block; vertical-align: middle; margin: 4px 5px; padding: 2px 0;">${renderedHtml}</span>&nbsp;`;
              editor.insertContent(content);
              editor.selection.collapse(false);
              api.close();
            });

            return function onSubmit(_x2) {
              return _ref2.apply(this, arguments);
            };
          }()
        });
      }
    });
    /* editor.ui.registry.addButton('myimage2', {
      text: 'image 2',
      onAction(): void {
        editor.execCommand('openImageDialog', false, null);
      },
    }); */

    editor.addCommand('addRemoveClozeOption', (ui, v) => {
      editor.windowManager.open({
        size: 'normal',
        title: 'Add Or Remove option',
        body: {
          type: 'panel',
          items: [{
            type: 'input',
            name: 'option_data',
            label: 'Enter option to add'
          }, {
            type: 'selectbox',
            name: 'option_to_delete',
            label: 'Choose Option to delete',
            items: v.options
          }]
        },
        buttons: [{
          type: 'cancel',
          name: 'closeButton',
          text: 'Cancel'
        }, {
          type: 'custom',
          name: 'deleteOption',
          text: 'Delete Option'
        }, {
          type: 'submit',
          name: 'submitButton',
          text: 'Add Option',
          primary: true
        }],
        onSubmit: function (api) {
          // console.log(api.getData().option_data);
          let option = document.createElement('option');
          option.label = api.getData().option_data;
          option.value = Math.random() + '';
          v.select.add(option);
          api.close();
        },
        onAction: function (api, details) {
          let indexToDelete = -1;

          if (details.name == 'deleteOption') {
            // console.log(api.getData());
            let optToDelete = api.getData().option_to_delete;

            if (optToDelete == 'selectOption') {
              alert('Please select an option to delete ');
            } else {
              for (let i = 0; i < v.select.options.length; i++) {
                if (v.select.item(i).value == optToDelete) {
                  indexToDelete = i; // console.log('found');

                  break;
                }
              }

              if (indexToDelete != -1) {
                v.select.item(indexToDelete).remove();
                api.close();
              }
            }
          }
        }
      });
    });
    editor.addCommand('openImageDialog', (ui, v) => {
      editor.windowManager.open({
        size: 'normal',
        title: 'Images',
        body: {
          type: 'panel',
          items: [{
            type: 'urlinput',
            filetype: 'image',
            disabled: false,
            name: 'url',
            label: 'Paste or enter an Url as the link to the page.'
          }, {
            type: 'input',
            name: 'linkText',
            label: 'Link Text'
          }]
        },
        buttons: [{
          type: 'cancel',
          name: 'closeButton',
          text: 'Cancel'
        }, {
          type: 'submit',
          name: 'submitButton',
          text: 'Insert Link to Page',
          primary: true
        }],
        onSubmit: function (api) {
          //  console.log(api.getData().url);
          let blob = api.getData().url; // console.log(blob.value);

          editor.insertContent(`<img src = '${blob.value}'`);
          var reader = new FileReader();
          reader.readAsDataURL(blob.value);

          reader.onloadend = function () {
            var base64String = reader.result; // console.log('Base64 String - ', base64String);

            editor.insertContent(`<img src = '${blob.value}'`);
          };
          /*let option = document.createElement('option')
          option.label = api.getData().option_data;
          option.value = Math.random()+"";
          v.select.add(option);*/


          api.close();
        }
      });
    });

    if (this.editDataStatus) {// console.log(editor.getContent());
    }
  }

  buildItem(form) {
    let item = new _cloze_dropdown_model__WEBPACK_IMPORTED_MODULE_3__.ClozeDropdown();
    item.reference = this.defaultItemProperties.reference;
    item.stimulus = this.defaultItemProperties.stimulus;
    item.shuffleOptions = false;
    item.itemType = _models_item_types__WEBPACK_IMPORTED_MODULE_5__.ItemTypes.CLOZE_DROPDOWN;
    item.difficultyLevel = this.defaultItemProperties.difficultyLevel;
    item.subjectId = this.itemUtil.currentItemTrail.subjectId;
    item.topicId = this.itemUtil.currentItemTrail.topicId;
    item.subtopicId = this.itemUtil.currentItemTrail.subtopicId ? this.itemUtil.currentItemTrail.subtopicId : '';
    /* item.subjectId = this.itemService.subjectId ? this.itemService.subjectId : null;
    item.topicId = this.itemUtil.currentItemTrail.topicId ? this.itemUtil.currentItemTrail.topicId : null;
    item.subtopicId = this.itemUtil.currentItemTrail.subtopicId
      ? this.itemUtil.currentItemTrail.subtopicId
      : null; */

    item.scoringOption = Object.assign(Object.assign({}, this.defaultItemProperties.scoringOption), {
      answers: []
    });

    if (this.itemUtil.passageId) {
      item.passageId = this.itemUtil.passageId;
    }

    item.possibleResponses = [];
    item.itemTagsDTOS = this.tags.map(tag => {
      return {
        tagId: tag.tagId
      };
    });
    return item;
  }

  saveItem(form, type) {
    console.log('called me');
    let item = this.buildItem(form);
    const original_content = '';
    this.responses = [];
    console.log(form, 'form');
    this.content = tinymce.get('abc').getDoc().getElementsByTagName('select');

    for (let i = 0; i < this.content.length; i++) {
      item.scoringOption.answers.push(this.content[i].selectedOptions[0].label.trim());
    }

    for (let i = 0; i < this.content.length; i++) {
      let possibleResponse = new _models_responses_model__WEBPACK_IMPORTED_MODULE_8__.Responses();
      let options = [];

      for (let j = 2; j < this.content[i].options.length; j++) {
        options.push(this.content[i].options[j].label.trim());
      }

      possibleResponse.responses = options.map(option => option.trim());
      possibleResponse.responses = options;
      this.responses.push(possibleResponse);
    }

    item.possibleResponses = this.responses; // Reset response array, to avoid duplicate possible respone (possibleResponse) in item.

    if (this.responses.length > 0) {
      console.log('Resetted for future actions');
      this.responses = [];
    }

    console.log(item);
    let content = tinymce.activeEditor.getContent();
    let newContent = content.replaceAll(/<select[^>]*>[\s\S]*?<\/select>/g, '{{response}}');
    tinymce.get('abc').dom.select();
    item.stimulus = newContent;
    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    } // Second Validation


    if (item.possibleResponses.length !== item.scoringOption.answers.length) {
      this.notifier.notify('error', `Sorry, Incorrect number of response found!`);
      return;
    } // Third Validation


    var missingOptionsIndex = -1;
    var unavailableOptionsForPossibleResponse = false;

    for (var res = 0; res < item.possibleResponses.length; res++) {
      if (item.possibleResponses[res].responses.length === 0) {
        missingOptionsIndex = res;
        unavailableOptionsForPossibleResponse = true;
        break;
      }
    }

    if (unavailableOptionsForPossibleResponse) {
      this.notifier.notify('error', `Sorry, Option (${missingOptionsIndex + 1}) in composed question has no options!`);
      return;
    } // Fourth Validation


    const noAnswerSelected = item.scoringOption.answers.every(answer => answer === '--');

    if (noAnswerSelected) {
      this.notifier.notify('error', `Sorry, Select the correct answer for each option(s)!`);
      return;
    } // Fifth Validation


    const answerSet = new Set(item.scoringOption.answers);
    var missingAnswerIndex = -1;
    const isAnAnswerMissing = item.scoringOption.answers.some((answer, index) => {
      if (answerSet.has('--')) {
        missingAnswerIndex = item.scoringOption.answers.indexOf('--');
        return true;
      }

      return false;
    });

    if (isAnAnswerMissing) {
      this.notifier.notify('error', `Sorry, Select the correct answer for ${missingAnswerIndex + 1} option(s)!`);
      return;
    } // Sixth validation


    var answerIndex = -1;
    const isAnswerArrElementValid = item.scoringOption.answers.every((value, index) => {
      if (!item.possibleResponses[index].responses.includes(value)) {
        answerIndex = index + 1;
        return false;
      }

      return true;
    });

    if (!isAnswerArrElementValid) {
      this.notifier.notify('error', `Sorry, ${answerIndex} Selected answer not found among options!`);
      return;
    }

    if (this.currentUser.authorities.includes('AUTHOR') && this.itemService.currentSubjectModerationEnabled) {
      item.itemStatus = _models_item_status_enum__WEBPACK_IMPORTED_MODULE_6__.ItemStatusEnum.AWAITING_MODERATION;
    }

    if (this.itemService.currentSubjectModerationEnabled) {
      item.itemStatus = _models_item_status_enum__WEBPACK_IMPORTED_MODULE_6__.ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = _models_item_status_enum__WEBPACK_IMPORTED_MODULE_6__.ItemStatusEnum.PUBLISHED;
    }

    console.log(original_content, 'original');
    console.log(item.stimulus);
    this.saveFunction(item, 'save');
    return;
    this.itemService.createClozeDropdownItem(item).subscribe(value => {
      if (value) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire({
          icon: 'success',
          title: 'Congratulations',
          text: 'You have successfully created a new item.'
        }); // this.saveFunction("save")
      }
    }, err => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire({
        icon: 'error',
        title: 'Failed',
        text: `${err.error.message}`
      });
      item.possibleResponses = []; // console.log(err);
    }); // console.log(item);
    // console.log(item);
  }

  saveToDraft(itemForm) {
    let item = this.buildItem(itemForm);
    const original_content = ''; // this.content = []
    // console.log(form, "form");

    this.content = tinymce.get('abc').getDoc().getElementsByTagName('select');

    for (let i = 0; i < this.content.length; i++) {
      item.scoringOption.answers.push(this.content[i].selectedOptions[0].label);
    }

    for (let i = 0; i < this.content.length; i++) {
      let possibleResponse = new _models_responses_model__WEBPACK_IMPORTED_MODULE_8__.Responses();
      let options = [];

      for (let j = 2; j < this.content[i].options.length; j++) {
        options.push(this.content[i].options[j].label);
      }

      possibleResponse.responses = options;
      this.responses.push(possibleResponse);
    }

    item.possibleResponses = this.responses; // Reset response array, to avoid duplicate possible respone (possibleResponse) in item.

    if (this.responses.length > 0) {
      console.log('Resetted for future actions');
      this.responses = [];
    }

    console.log(item);
    let content = tinymce.activeEditor.getContent();
    let newContent = content.replaceAll(/<select[^>]*>[\s\S]*?<\/select>/g, '{{response}}');
    tinymce.get('abc').dom.select();
    item.stimulus = newContent;
    item.itemStatus = _models_item_status_enum__WEBPACK_IMPORTED_MODULE_6__.ItemStatusEnum.DRAFT;
    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    } // Second Validation


    if (item.possibleResponses.length !== item.scoringOption.answers.length) {
      this.notifier.notify('error', `Sorry, Incorrect number of response found!`);
      return;
    } // Third Validation


    var missingOptionsIndex = -1;
    var unavailableOptionsForPossibleResponse = false;

    for (var res = 0; res < item.possibleResponses.length; res++) {
      if (item.possibleResponses[res].responses.length === 0) {
        missingOptionsIndex = res;
        unavailableOptionsForPossibleResponse = true;
        break;
      }
    }

    if (unavailableOptionsForPossibleResponse) {
      this.notifier.notify('error', `Sorry, Option (${missingOptionsIndex + 1}) in composed question has no options!`);
      return;
    } // Fourth Validation


    const noAnswerSelected = item.scoringOption.answers.every(answer => answer === '--');

    if (noAnswerSelected) {
      this.notifier.notify('error', `Sorry, Select the correct answer for each option(s)!`);
      return;
    } // Fifth Validation


    const answerSet = new Set(item.scoringOption.answers);
    var missingAnswerIndex = -1;
    const isAnAnswerMissing = item.scoringOption.answers.some((answer, index) => {
      if (answerSet.has('--')) {
        missingAnswerIndex = item.scoringOption.answers.indexOf('--');
        return true;
      }

      return false;
    });

    if (isAnAnswerMissing) {
      this.notifier.notify('error', `Sorry, Select the correct answer for ${missingAnswerIndex + 1} option(s)!`);
      return;
    } // Sixth validation


    var answerIndex = -1;
    const isAnswerArrElementValid = item.scoringOption.answers.every((value, index) => {
      if (!item.possibleResponses[index].responses.includes(value)) {
        answerIndex = index + 1;
        return false;
      }

      return true;
    });

    if (!isAnswerArrElementValid) {
      this.notifier.notify('error', `Sorry, ${answerIndex} Selected answer not found among options!`);
      return;
    } // if (
    //   this.currentUser.authorities.includes("AUTHOR") &&
    //   this.itemService.currentSubjectModerationEnabled
    // ) {
    //   item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    // }
    // if (this.itemService.currentSubjectModerationEnabled) {
    //   item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    // } else {
    //   item.itemStatus = ItemStatusEnum.PUBLISHED;
    // }


    console.log(original_content, 'original');
    console.log(item.stimulus);
    this.saveFunction(item, 'draft');
  }

  saveAndNew(itemForm) {
    console.log('called me');
    let item = this.buildItem(itemForm);
    const original_content = ''; // this.content = []
    // console.log(form, "form");

    this.content = tinymce.get('abc').getDoc().getElementsByTagName('select');

    for (let i = 0; i < this.content.length; i++) {
      item.scoringOption.answers.push(this.content[i].selectedOptions[0].label);
    }

    for (let i = 0; i < this.content.length; i++) {
      let possibleResponse = new _models_responses_model__WEBPACK_IMPORTED_MODULE_8__.Responses();
      let options = [];

      for (let j = 2; j < this.content[i].options.length; j++) {
        options.push(this.content[i].options[j].label);
      }

      possibleResponse.responses = options;
      this.responses.push(possibleResponse);
    }

    item.possibleResponses = this.responses; // Reset response array, to avoid duplicate possible respone (possibleResponse) in item.

    if (this.responses.length > 0) {
      console.log('Resetted for future actions');
      this.responses = [];
    }

    console.log(item);
    let content = tinymce.activeEditor.getContent();
    let newContent = content.replaceAll(/<select[^>]*>[\s\S]*?<\/select>/g, '{{response}}');
    tinymce.get('abc').dom.select();
    item.stimulus = newContent;
    item.itemStatus = _models_item_status_enum__WEBPACK_IMPORTED_MODULE_6__.ItemStatusEnum.DRAFT;
    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    } // Second Validation


    if (item.possibleResponses.length !== item.scoringOption.answers.length) {
      this.notifier.notify('error', `Sorry, Incorrect number of response found!`);
      return;
    } // Third Validation


    var missingOptionsIndex = -1;
    var unavailableOptionsForPossibleResponse = false;

    for (var res = 0; res < item.possibleResponses.length; res++) {
      if (item.possibleResponses[res].responses.length === 0) {
        missingOptionsIndex = res;
        unavailableOptionsForPossibleResponse = true;
        break;
      }
    }

    if (unavailableOptionsForPossibleResponse) {
      this.notifier.notify('error', `Sorry, Option (${missingOptionsIndex + 1}) in composed question has no options!`);
      return;
    } // Fourth Validation


    const noAnswerSelected = item.scoringOption.answers.every(answer => answer === '--');

    if (noAnswerSelected) {
      this.notifier.notify('error', `Sorry, Select the correct answer for each option(s)!`);
      return;
    } // Fifth Validation


    const answerSet = new Set(item.scoringOption.answers);
    var missingAnswerIndex = -1;
    const isAnAnswerMissing = item.scoringOption.answers.some((answer, index) => {
      if (answerSet.has('--')) {
        missingAnswerIndex = item.scoringOption.answers.indexOf('--');
        return true;
      }

      return false;
    });

    if (isAnAnswerMissing) {
      this.notifier.notify('error', `Sorry, Select the correct answer for ${missingAnswerIndex + 1} option(s)!`);
      return;
    } // Sixth validation


    var answerIndex = -1;
    const isAnswerArrElementValid = item.scoringOption.answers.every((value, index) => {
      if (!item.possibleResponses[index].responses.includes(value)) {
        answerIndex = index + 1;
        return false;
      }

      return true;
    });

    if (!isAnswerArrElementValid) {
      this.notifier.notify('error', `Sorry, ${answerIndex} Selected answer not found among options!`);
      return;
    }

    if (this.currentUser.authorities.includes('AUTHOR') && this.itemService.currentSubjectModerationEnabled) {
      item.itemStatus = _models_item_status_enum__WEBPACK_IMPORTED_MODULE_6__.ItemStatusEnum.AWAITING_MODERATION;
    }

    if (this.itemService.currentSubjectModerationEnabled) {
      item.itemStatus = _models_item_status_enum__WEBPACK_IMPORTED_MODULE_6__.ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = _models_item_status_enum__WEBPACK_IMPORTED_MODULE_6__.ItemStatusEnum.PUBLISHED;
    }

    console.log(original_content, 'original');
    console.log(item.stimulus);
    this.saveFunction(item, 'save_and_new');
  }

  saveFunction(item, type) {
    let msg;

    if (type == 'save' || type === 'save_and_new') {
      msg = `A new item has been created successfully`;
    } else if (type == 'draft') {
      msg = `A new item has been saved to draft successfully`;
    } else if (type == 'passage-item') {
      msg = `A new item has been added to the passage successfully`;
    }

    if (this.currentUser.authorities.includes('AUTHOR') //  && this. check mod atatus
    ) {
      msg = `item successfully sent for moderation`;
    }

    this.itemService.createClozeDropdownItem(item).subscribe(value => {
      if (value) {
        this.publishingItem = false;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().close();
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire({
          icon: 'success',
          title: 'Congratulations',
          text: msg
        });
      }

      if (type === 'save' || type == 'draft') {
        this.back();
      }

      if (type == 'save_and_new' || type !== '') {
        this.defaultItemProperties = new _models_default_item_properties__WEBPACK_IMPORTED_MODULE_4__.DefaultItemProperties();
        this.tags = [];
        this.defaultItemProperties.scoringOption.autoScore = true;
        this.defaultItemProperties.difficultyLevel = 1;
        this.defaultItemProperties.shuffleOptions = true;
        this.responses = [];
        this.content = [];
        this.defaultItemProperties.stimulus = '';
        this.tagRef.Tag = [];
        this.tagRef.ngOnInit();
        this.tagRef.sendTag([]); // this.createOptions(4)
        // this.createStems(4)

        this.ngOnInit();
      }
    }, err => {
      this.publishingItem = false;
      sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().close();
      sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire({
        icon: 'error',
        title: 'Failed',
        text: err.error.message
      });
    });
  }

  publishLoader(msg) {
    if (!this.publishingItem) {
      return;
    } else {
      sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire({
        title: msg ? msg : 'Saving your question, Please Wait...',
        allowEnterKey: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
        timerProgressBar: true,
        didOpen: () => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().showLoading();
        }
      });
    }
  }

  doPreview(itemForm) {
    let item = this.buildItem(itemForm);
    console.log('Item: ', item);
    this.itemUtil.previewItem = true;
    item.scoringOption.answers = [];
    this.responses = [];
    item.possibleResponses = [];
    let collection = tinymce.get('abc').getDoc().getElementsByTagName('select');

    for (let i = 0; i < collection.length; i++) {
      let options = collection[i].options;
      let possibleResponse = new _models_responses_model__WEBPACK_IMPORTED_MODULE_8__.Responses();
      let itemOptions = [];

      if (options.length > 2) {
        for (let j = 0; j < options.length; j++) {
          if (options[j].value === 'blank' || options[j].value === 'addRemove') {
            continue;
          }

          const optionLabel = options[j].label.trim();
          itemOptions.push(optionLabel);

          if (options[j].selected) {
            item.scoringOption.answers.push(optionLabel);
          }
        }

        possibleResponse.responses = itemOptions;
        /**
         * This is automatically selected when you go to preview because it will
         * be appearing in the first position of the array and when the 'show answer'
         * checkbox is clicked the correct answer is showned.
         */

        possibleResponse.responses.unshift('--');
        this.responses.push(possibleResponse);
      }
    }

    item.possibleResponses = this.responses; // Store the original select elements state

    this.content = collection;
    let content = tinymce.activeEditor.getContent();
    let openingTagIndex = content.indexOf('<select');

    while (openingTagIndex != -1) {
      let closingTagIndex = content.indexOf('</select>', openingTagIndex);
      let selectTag = content.substring(openingTagIndex, closingTagIndex + 9);
      content = content.replace(selectTag, '{{response}}');
      openingTagIndex = content.indexOf('<select');
    }

    item.stimulus = content;
    this.previewData = item;
    this.preview = true;
  }

  editPreview() {
    let item = this.buildItem();
    let content = this.defaultItemProperties.stimulus;
    let openingTagIndex = content.indexOf('<select');

    while (openingTagIndex != -1) {
      let closingTagIndex = content.indexOf('</select>', openingTagIndex);
      let selectTag = content.substring(openingTagIndex, closingTagIndex + 9); //console.log('selected tag', selectTag);

      content = content.replace(selectTag, '{{response}}'); //console.log('after replace', content);

      openingTagIndex = content.indexOf('<select');
    } // console.log('content', content);


    item.stimulus = content;
    item.possibleResponses = this.editData.possibleResponses;
    item.scoringOption.answers = this.editData.scoringOption.answers;
    this.previewData = item;
    this.preview = true; //    item.stimulus = content;
  }

  returnPreviewData() {
    this.preview = false;
    setTimeout(() => {
      const editor = tinymce.get('abc');
      if (!editor) return;
      const selectBoxes = editor.getDoc().getElementsByTagName('select');
      Array.from(selectBoxes).forEach((selectBox, index) => {
        var _a; // First, ensure all options from preview are present


        const responses = ((_a = this.previewData.possibleResponses[index]) === null || _a === void 0 ? void 0 : _a.responses) || [];
        const correctAnswer = this.previewData.scoringOption.answers[index]; // Find and select the correct answer

        for (let i = 2; i < selectBox.options.length; i++) {
          const option = selectBox.options[i];

          if (option.label.trim() === correctAnswer) {
            selectBox.selectedIndex = i;
            break;
          }
        }
      }); // Force TinyMCE to recognize the changes

      editor.fire('change');
    }, 200);
  }

  back() {
    this.location.back();
  }

  approveQuestion(itemForm) {
    this.updateItem(itemForm, 'approve');
  }

  updateItem(itemForm, status) {
    let item = this.buildItem(itemForm);
    item.itemId = this.editData.id;
    this.responses = [];
    console.log(this.editData, 'edit data');
    console.log('called me');
    const original_content = '';
    this.content = tinymce.get('abc').getDoc().getElementsByTagName('select');

    for (let i = 0; i < this.content.length; i++) {
      item.scoringOption.answers.push(this.content[i].selectedOptions[0].label.trim());
    }

    for (let i = 0; i < this.content.length; i++) {
      let possibleResponse = new _models_responses_model__WEBPACK_IMPORTED_MODULE_8__.Responses();
      let options = [];

      for (let j = 2; j < this.content[i].options.length; j++) {
        options.push(this.content[i].options[j].label.trim());
      }

      possibleResponse.responses = options.map(option => option.trim());
      possibleResponse.responses = options;
      this.responses.push(possibleResponse);
    }

    item.possibleResponses = this.responses;
    console.log(item);
    let content = tinymce.activeEditor.getContent();
    let newContent = content.replaceAll(/<select[^>]*>[\s\S]*?<\/select>/g, '{{response}}');
    tinymce.get('abc').dom.select();
    item.stimulus = newContent;
    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    if (this.currentUser.authorities.includes('AUTHOR') && this.itemService.currentSubjectModerationEnabled) {
      item.itemStatus = _models_item_status_enum__WEBPACK_IMPORTED_MODULE_6__.ItemStatusEnum.AWAITING_MODERATION;
    }

    if (this.itemService.currentSubjectModerationEnabled) {
      item.itemStatus = _models_item_status_enum__WEBPACK_IMPORTED_MODULE_6__.ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = _models_item_status_enum__WEBPACK_IMPORTED_MODULE_6__.ItemStatusEnum.PUBLISHED;
    }

    console.log(original_content, 'original');
    console.log(item.stimulus); // this.saveFunction(item, "save");
    // let validated = this.itemService.validateItem(item);
    // if (!validated) {
    //   return;
    // }

    this.publishingItem = true;
    this.publishLoader();
    console.log('builtItem', item);

    switch (status) {
      case 'save':
        if (this.subjectModerationStatus || item.itemStatus === _models_item_status_enum__WEBPACK_IMPORTED_MODULE_6__.ItemStatusEnum.AWAITING_MODERATION) {
          item.itemStatus = _models_item_status_enum__WEBPACK_IMPORTED_MODULE_6__.ItemStatusEnum.AWAITING_MODERATION;
        } else {
          item.itemStatus = _models_item_status_enum__WEBPACK_IMPORTED_MODULE_6__.ItemStatusEnum.PUBLISHED;
        }

        break;

      case 'draft':
        item.itemStatus = _models_item_status_enum__WEBPACK_IMPORTED_MODULE_6__.ItemStatusEnum.DRAFT;
        break;

      case 'approve':
        item.itemStatus = _models_item_status_enum__WEBPACK_IMPORTED_MODULE_6__.ItemStatusEnum.PUBLISHED;
        item.moderation_status = 'accepted';
        break;

      default:
        break;
    }

    this.itemService.edit_cloze_dropdown(this.editData.id, item).subscribe(value => {
      if (value) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire({
          title: 'Congratulations!',
          text: 'The question was successfully updated.',
          icon: 'success'
        });
      }

      this.back();
    }, error => {
      this.publishingItem = false;
      this.publishLoader();
      sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().close();
      sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire({
        icon: 'error',
        html: `${error.error.message}`
      });
    });
  }

  openRejectionReasonModal(rejectionModal) {
    this.modalService.open(rejectionModal, {
      centered: true,
      size: 'lg'
    });
  }

  submitRejection(questionRejectionForm) {
    this.processingRejection = true;
    this.newRejectionReason.itemId = this.editData.id; // console.log(this.newRejectionReason);

    this.itemService.rejectItem({
      itemId: this.newRejectionReason.itemId,
      reason: this.newRejectionReason.reason,
      subjectId: this.itemUtil.currentItemTrail.subjectId
    }).subscribe(value => {
      if (value) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire({
          title: 'Congratulations!',
          text: `The question was rejected sucessfully.`,
          icon: 'success'
        });
      } //this.notificationService.setNotifications();


      this.processingRejection = false;
      this.modalService.dismissAll();
      this.back();
    }, error => {
      this.processingRejection = false;
      this.notifier.notify('error', `${error.error.message}`);
    });
  }

  ngOnDestroy() {
    this.itemUtil.previewItem = false;
  }

  openConfirmationModal(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      windowClass: 'modal-holder'
    });
  }

}

ClozeDropdownComponent.ɵfac = function ClozeDropdownComponent_Factory(t) {
  return new (t || ClozeDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_item_http_service__WEBPACK_IMPORTED_MODULE_13__.ItemHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_item_utilities_service__WEBPACK_IMPORTED_MODULE_14__.ItemUtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_15__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_22__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_23__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_passages_list_passages_all_passages_service__WEBPACK_IMPORTED_MODULE_16__.AllPassagesService));
};

ClozeDropdownComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({
  type: ClozeDropdownComponent,
  selectors: [["app-cloze-dropdown"]],
  viewQuery: function ClozeDropdownComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵloadQuery"]()) && (ctx.tagRef = _t.first);
    }
  },
  inputs: {
    selectedItemType: "selectedItemType",
    formType: "formType",
    editData: "editData",
    itemTrailInfo: "itemTrailInfo"
  },
  outputs: {
    stimulus: "stimulus"
  },
  decls: 4,
  vars: 2,
  consts: [[4, "ngIf"], [3, "previewData", "itemTrailInfo", "selectedItemType", "formType", "returnPreviewData", 4, "ngIf"], ["rejectionModal", ""], ["itemForm", "ngForm"], [1, "card"], [1, "card-body"], [1, "d-flex", "flex-wrap", "justify-content-between", "mb-5"], [1, "card-title"], [1, "text-muted"], [1, "d-flex", "flex-wrap", "gap-2", "float-end"], ["type", "button", 1, "btn", "btn-outline-success", "waves-effect", "waves-light", 3, "click"], ["type", "button", "class", "btn btn-outline-warning waves-effect waves-light", 3, "click", 4, "ngIf"], ["class", "btn-group", "role", "group", "ngbDropdown", "", 4, "ngIf"], ["ngbDropdown", "", "class", "d-flex gap-2", 4, "ngIf"], [3, "previewData", 4, "ngIf"], [1, "mb-3"], ["for", "autoSizingInputGroup", 1, "form-label"], ["type", "text", "name", "reference", "placeholder", "Title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "stimulus", "id", "abc", 3, "ngModel", "init", "ngModelChange", "onInit"], ["stimulus", "ngModel"], [3, "sendTags"], ["tagRef", ""], ["acceptConfirmationModal", ""], ["rejectConfirmationModal", ""], [1, "live-preview"], ["activeIds", "static-1", 1, "custom-accordionwithicon", "accordion-border-box", 3, "closeOthers"], ["acc", "ngbAccordion"], ["id", "static-1"], ["ngbPanelTitle", "", "class", "accordion-header"], ["ngbPanelContent", ""], ["type", "button", 1, "btn", "btn-outline-warning", "waves-effect", "waves-light", 3, "click"], ["role", "group", "ngbDropdown", "", 1, "btn-group"], ["id", "btnGroupDrop1", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle", "arrow-none"], [1, "mdi", "mdi-chevron-down"], ["aria-labelledby", "btnGroupDrop1", "ngbDropdownMenu", "", 1, "dropdown-menu"], [2, "cursor", "pointer"], [1, "dropdown-item", 3, "click"], ["ngbDropdown", "", 1, "d-flex", "gap-2"], ["id", "btnGroupDrop3", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle", "arrow-none"], ["aria-labelledby", "btnGroupDrop3", "ngbDropdownMenu", "", 1, "dropdown-menu"], ["style", "cursor: pointer", 3, "click", 4, "ngIf"], ["style", "cursor: pointer", 4, "ngIf"], [2, "cursor", "pointer", 3, "click"], [1, "dropdown-item"], [3, "previewData"], [1, "modal-body", "p-5"], [1, "mb-4", "text-center"], [1, "row"], [1, "text-center", "text-muted"], [1, "d-flex", "justify-content-center", "gap-2", "mt-2"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 3, "click"], ["id", "gen-ques-headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#gen-ques-collapseOne", "aria-expanded", "false", "aria-controls", "gen-ques-collapseOne", 1, "accordion-button"], [1, "accordion-body"], ["ngModelGroup", "item.scoringOption"], [1, "row", "gy-2", "gx-3", "mb-3", "align-items-center"], [1, "col-sm-auto", "col-lg-6"], [1, "form-label"], ["type", "number", "placeholder", "Score", "name", "score", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "choices-privacy-status-input", 1, "form-label"], ["data-choices", "", "data-choices-search-false", "", "id", "choices-privacy-status-input", "name", "scoringType", 1, "form-select", 3, "ngModel", "ngModelChange"], ["selected", " defaultItemProperties.scoringOption.matchingRule === matchRule ", 3, "value", 4, "ngFor", "ngForOf"], ["data-choices", "", "data-choices-search-false", "", "name", "matchingRule", "disabled", "", 1, "form-select", 3, "ngModel", "ngModelChange"], ["selected", " defaultItemProperties.scoringOption.matchingRule === matchRule ", "disabled", "", 3, "value", 4, "ngFor", "ngForOf"], [1, "input-group"], ["type", "number", "min", "0", "placeholder", "Penalty value", "name", "penalty", 1, "form-control", 3, "ngModel", "ngModelChange"], ["data-choices", "", "data-choices-search-false", "", "name", "difficultyLevel", 1, "form-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-check", "mb-3"], ["type", "checkbox", "name", "autoScore", 1, "form-check-input", "mb-2", 3, "ngModel", "ngModelChange"], [1, "form-check-label"], ["selected", " defaultItemProperties.scoringOption.matchingRule === matchRule ", 3, "value"], ["selected", " defaultItemProperties.scoringOption.matchingRule === matchRule ", "disabled", "", 3, "value"], [3, "value"], [3, "previewData", "itemTrailInfo", "selectedItemType", "formType", "returnPreviewData"], [3, "ngSubmit"], ["questionRejectionForm", "ngForm"], [1, "text-center", "mb-4"], [1, "text-muted", "text-center"], [1, "row", "mb-2"], ["name", "reason", "initialValue", "reason(s)....", 3, "ngModel", "init", "ngModelChange"], [1, "d-flex", "gap-2", "float-end", "mt-4"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", "d-flex", "gap-1", "align-items-center", 3, "click"], [1, "ri-close-line"], ["type", "submit", "class", "btn btn-danger d-flex gap-1 align-items-center", 4, "ngIf"], [3, "ngIf"], ["type", "submit", 1, "btn", "btn-danger", "d-flex", "gap-1", "align-items-center"], [1, "las", "la-file-excel"], [1, "btn", "btn-outline-success", "btn-load", 3, "disabled"], [1, "d-flex", "align-items-center"], ["role", "status", 1, "spinner-border", "flex-shrink-0"], [1, "visually-hidden"], [1, "flex-grow-1", "ms-2"]],
  template: function ClozeDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, ClozeDropdownComponent_form_0_Template, 40, 11, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, ClozeDropdownComponent_app_cloze_dropdown_preview_1_Template, 1, 4, "app-cloze-dropdown-preview", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, ClozeDropdownComponent_ng_template_2_Template, 17, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.itemUtil.previewItem === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.itemUtil.previewItem === true);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbDropdownMenu, _passage_preview_passage_preview_component__WEBPACK_IMPORTED_MODULE_17__.PassagePreviewComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgModel, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_27__.EditorComponent, _item_tag_item_tag_component__WEBPACK_IMPORTED_MODULE_18__.ItemTagComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbPanelTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbPanelContent, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgModelGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.CheckboxControlValueAccessor, _cloze_dropdown_preview_cloze_dropdown_preview_component__WEBPACK_IMPORTED_MODULE_19__.ClozeDropdownPreviewComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbG96ZS1kcm9wZG93bi5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 63664:
/*!********************************************************************!*\
  !*** ./src/app/pages/items/cloze-dropdown/cloze-dropdown.model.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClozeDropdown": () => (/* binding */ ClozeDropdown)
/* harmony export */ });
/* harmony import */ var _models_scoring_option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/scoring-option */ 58049);

class ClozeDropdown {
    constructor() {
        this.scoringOption = new _models_scoring_option__WEBPACK_IMPORTED_MODULE_0__.ScoringOption();
    }
}


/***/ }),

/***/ 45911:
/*!**************************************************!*\
  !*** ./src/app/pages/items/item-http.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemHttpService": () => (/* binding */ ItemHttpService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _models_item_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/item-types */ 55284);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dompurify */ 52600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ 43683);








class ItemHttpService {
    constructor(http, notifier) {
        this.http = http;
        this.notifier = notifier;
        this.assessmentActive = false;
        this.currentSubjectModerationEnabled = false;
        this.duplicateItem = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
        this.duplicateFound$ = this.duplicateItem.asObservable();
        dompurify__WEBPACK_IMPORTED_MODULE_2__["default"].setConfig({
            ALLOWED_TAGS: [
                'b',
                'i',
                'em',
                'strong',
                'p',
                'div',
                'span',
                'ul',
                'ol',
                'li',
                'a',
                'br',
                'img',
                'table',
                'tbody',
                'thead',
                'tr',
                'th',
                'td',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
            ],
            ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'style'],
            FORBID_ATTR: ['onclick', 'onerror', 'onload'],
            FORBID_TAGS: ['script', 'iframe'], // Block any script or iframe tags
        });
    }
    sanitize(html) {
        return dompurify__WEBPACK_IMPORTED_MODULE_2__["default"].sanitize(html);
    }
    validateItem(item) {
        // console.log('=>', {item});
        if (item.stimulus == '') {
            this.notifier.notify('error', `Please compose a question!`);
            return false;
        }
        if (item.stimulus.trim() === '' ||
            item.stimulus.trim() === '<p></p>' ||
            item.stimulus.replace(/(&nbsp;|\s|\n|\r|<[^>]+>)/g, '').trim() === '') {
            this.notifier.notify('error', 'You can not create a question with only empty space(s)');
            return false;
        }
        if (item.itemType === _models_item_types__WEBPACK_IMPORTED_MODULE_1__.ItemTypes.CLOZE_DROPDOWN_IMAGE) {
            if (item.scoringOption.answers.some((answer) => answer.replace(/(&nbsp;|\s|\n|\r|<[^>]+>)/g, '').trim() === '' ||
                answer.trim() === '' ||
                answer.trim() === '<p></p>')) {
                this.notifier.notify('error', 'Label found without a selected answer');
                return false;
            }
        }
        if (item.options &&
            item.options.some((option) => option.label.replace(/(&nbsp;|\s|\n|\r|<[^>]+>)/g, '').trim() ===
                '' ||
                item.stimulus.trim() === '' ||
                item.stimulus.trim() === '<p></p>')) {
            this.notifier.notify('error', 'Found Option with empty space(s)');
            return false;
        }
        // todo: check for null and thr
        // if( item.itemType === ItemTypes.CHOICE_MATRIX){
        //   if(item.scoringOption.answers.every((answer)=>)){
        //   }
        // }
        if (item.itemType === _models_item_types__WEBPACK_IMPORTED_MODULE_1__.ItemTypes.CHOICE_MATRIX &&
            item.scoringOption.answers.length !== item.stems.length) {
            this.notifier.notify('error', 'Please ensure you have provided answers to all questions!');
            return false;
        }
        if (item.itemType !== _models_item_types__WEBPACK_IMPORTED_MODULE_1__.ItemTypes.ESSAY_RICH_TEXT &&
            item.itemType !== _models_item_types__WEBPACK_IMPORTED_MODULE_1__.ItemTypes.SHORT_TEXT &&
            item.itemType !== _models_item_types__WEBPACK_IMPORTED_MODULE_1__.ItemTypes.CLOZE_DROPDOWN &&
            item.itemType !== _models_item_types__WEBPACK_IMPORTED_MODULE_1__.ItemTypes.CLOZE_DROPDOWN_IMAGE &&
            item.itemType !== _models_item_types__WEBPACK_IMPORTED_MODULE_1__.ItemTypes.DRAW_WRITING &&
            item.itemType !== _models_item_types__WEBPACK_IMPORTED_MODULE_1__.ItemTypes.CLOZE_RADIO) {
            // console.log(item.itemType);
            for (let i = 0; i < item.options.length; i++) {
                if (item.options[i].label == '') {
                    this.notifier.notify('error', `Please provide a valid response for option ${i + 1}`);
                    return false;
                }
            }
        }
        // if (item.itemType !== ItemTypes.ESSAY_RICH_TEXT) {
        //   if (item.scoringOption.answers.length < 1) {
        //     this.notifier.notify("error", `Please select an answer!`);
        //     return false;
        //   }
        // }
        if (item.itemType === _models_item_types__WEBPACK_IMPORTED_MODULE_1__.ItemTypes.ORDER_LIST) {
            if (item.options.length < 2) {
                this.notifier.notify('error', `Order list cannot have less than 2 options!`);
                return false;
            }
        }
        console.log(item + 'negative score');
        if (item.itemType === _models_item_types__WEBPACK_IMPORTED_MODULE_1__.ItemTypes.CLOZE_TEXT) {
            if (item.options.some((option) => option.label.trim() === '')) {
                this.notifier.notify('error', `Please provide answer in input box!`);
                return false;
            }
            if (item.scoringOption.answers.some((answer) => answer.trim() === '')) {
                this.notifier.notify('error', `Please provide answer in input box!`);
                return false;
            }
        }
        if (item.scoringOption.score < 0) {
            this.notifier.notify('error', `Please ensure the score is not a negative value!`);
            return false;
        }
        if (!Number.isInteger(item.scoringOption.score)) {
            this.notifier.notify('error', `Please ensure the score is an integer value!`);
            return false;
        }
        if (item.itemType === _models_item_types__WEBPACK_IMPORTED_MODULE_1__.ItemTypes.MRQ &&
            item.scoringOption.answers.length < 2) {
            this.notifier.notify('error', 'kindly, provide at least two correct responses to the question!');
            return false;
        }
        if (item.scoringOption.score === '' ||
            item.scoringOption.score === undefined) {
            this.notifier.notify('error', `Please ensure the score is not empty!`);
            return false;
        }
        if (item.itemType === _models_item_types__WEBPACK_IMPORTED_MODULE_1__.ItemTypes.MCQ) {
            if (item.options.length < 2) {
                this.notifier.notify('error', `Please ensure the options is two or more!`);
                return false;
            }
        }
        console.log(item.scoringOption.penalty);
        console.log(item, 'here');
        if (item.scoringOption.penalty < 0) {
            this.notifier.notify('error', `Please ensure the penalty is not a negative value!`);
            return false;
        }
        if (item.scoringOption.minimumScoreIfAttempted < 0) {
            this.notifier.notify('error', `Please ensure the minimum Score on attempt is not a negative value!`);
            return false;
        }
        if (item.itemType === _models_item_types__WEBPACK_IMPORTED_MODULE_1__.ItemTypes.SHORT_TEXT && item.maxLength < 0) {
            this.notifier.notify('error', `Please ensure the max length  is not a negative value!`);
            return false;
        }
        if (item.ItemType === _models_item_types__WEBPACK_IMPORTED_MODULE_1__.ItemTypes.SHORT_TEXT) {
            if (item.scoringOption.answers[0]
                .replace(/(&nbsp;|\s|\n|\r|<[^>]+>)/g, '')
                .trim() == '' ||
                item.scoringOption.answers[0].trim() === '' ||
                item.scoringOption.answers[0].trim() === '<p></p>') {
                this.notifier.notify('error', `Please ensure you provide an answer to question!`);
                return false;
            }
        }
        // if (
        //   (item.itemType === ItemTypes.SHORT_TEXT &&
        // ) {
        // }
        if (item.ItemType === _models_item_types__WEBPACK_IMPORTED_MODULE_1__.ItemTypes.CLOZE_DROPDOWN) {
            if (item.scoringOption.answers &&
                item.scoringOption.answers.some((answer) => answer.replace(/(&nbsp;|\s|\n|\r|<[^>]+>)/g, '').trim() === '' ||
                    answer.replace(/(&nbsp;|\s|\n|\r|<[^>]+>)/g, '').trim() === '--')) {
                this.notifier.notify('error', `Please ensure you provide an answer to question!`);
                return false;
            }
        }
        if (!Number.isInteger(item.scoringOption.penalty)) {
            this.notifier.notify('error', `Please ensure the penalty is an integer!`);
            return false;
        }
        return true;
    }
    setDuplicateStatus(newValue) {
        return this.duplicateItem.next(newValue);
    }
    getDuplicateStatus() {
        return this.duplicateFound$;
    }
    fetchAuthorModerationNotifications(userId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/notifications/moderation/${userId}/author_moderator`, { withCredentials: true });
    }
    setSubjectId(subjectId) {
        this.subjectId = subjectId;
    }
    setSubjectName(subjectName) {
        this.subjectName = subjectName;
    }
    setSubjectInfo(subject) {
        this.subjectId = subject.subjectId;
        this.subjectName = subject.subjectName;
    }
    createNewSubject(subject) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/subjects`, subject, { withCredentials: true });
    }
    uploadSubjects(payload) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/subjectsss`, payload, { withCredentials: true });
    }
    createChoiceMatrixItem(item) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/choice-matrix`, item, { withCredentials: true });
    }
    editChoiceMatrixItem(itemId, item) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/item/choice-matrix`, item, { withCredentials: true });
    }
    createAssociationItem(item) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/association`, item, { withCredentials: true });
    }
    createClozeItem(item) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/cloze-text`, item, { withCredentials: true });
    }
    createClozeDropdownItem(item) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/cloze-dropdown`, item, { withCredentials: true });
    }
    createClozeRadioItem(item) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/cloze-radio`, item, { withCredentials: true });
    }
    createOrderListItem(item) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/order_list`, item, { withCredentials: true });
    }
    createClozeTextImageItem(item) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/cloze-text-image`, item, { withCredentials: true });
    }
    editClozeTextImageItem(item) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${item.itemId}/item/IMAGE_CLOZE_TEXT`, item, { withCredentials: true });
    }
    createClozeDropdownImageItem(item) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/cloze-dropdown-image`, item, { withCredentials: true });
    }
    editClozeDropdownImageItem(item) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${item.itemId}/item/CLOZE_DROPDOWN_IMAGE`, item, { withCredentials: true });
    }
    createClozeDragDropImageItem(item) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/drag-and-drop-image`, item, { withCredentials: true });
    }
    editClozeDragDropImageItem(item) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${item.itemId}/item/IMAGE_DRAG_DROP`, item, { withCredentials: true });
    }
    createNewTopic(topic) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/subjects/topic`, topic, { withCredentials: true });
    }
    createNewSubTopic(subtopic) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/subjects/subtopic`, subtopic, { withCredentials: true });
    }
    deleteSubTopic(subjectId, topicId, subtopicId) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/subjects/${subjectId}/${topicId}/${subtopicId}/delete_subtopic`, { withCredentials: true });
    }
    deleteTopic(subjectId, topicId) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/subjects/${subjectId}/${topicId}/delete_subtopic`, { withCredentials: true });
    }
    createMultipleChoiceItem(newMultipleChoiceItem) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/mcq`, newMultipleChoiceItem, { withCredentials: true });
    }
    createMultipleResponseItem(newMultipleResponseItem) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/mrq`, newMultipleResponseItem, { withCredentials: true });
    }
    createTrueOrFalseItem(newTrueOrFalseItem) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/trueorfalse`, newTrueOrFalseItem, { withCredentials: true });
    }
    createYesOrNoItem(newYesOrNoItem) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/yesorno`, newYesOrNoItem, { withCredentials: true });
    }
    createEssayItem(newEssayItem) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/essay`, newEssayItem, { withCredentials: true });
    }
    createDrawWritingItem(newDrawWritingItem) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/draw_write`, newDrawWritingItem, { withCredentials: true });
    }
    editDrawWritingItem(newDrawWritingItem) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${newDrawWritingItem.itemId}/item/draw-write`, newDrawWritingItem, { withCredentials: true });
    }
    createShortTextItem(newShortTextItem) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/short-text`, newShortTextItem, { withCredentials: true });
    }
    createNewPassage(newPassage) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/passage`, newPassage, { withCredentials: true });
    }
    fetchSubjectPassages(subjectId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/passage/${subjectId}`, { withCredentials: true });
    }
    fetchTopicPassages(subjectId, topicId, page, size) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/passage/${subjectId}/${topicId}?page=${page}&size=${size}`, { withCredentials: true });
    }
    fetchSinglePassage(passageId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${passageId}/passage`, { withCredentials: true });
    }
    // fetchPassageTopicsTree(subjectId: string): Observable<ListPassageTopics[]> {
    //   return this.http.get<ListPassageTopics[]>(
    //     `${environment.developmentIP}/itembank/admin/subjects/${subjectId}/passage_topics_tree`,
    //     { withCredentials: true }
    //   );
    // }
    fetchAssessmentPassageTopicsTree(subjectId, itemsCount) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/subjects/${subjectId}/passage_topics_tree/assessment/items/${itemsCount}`, { withCredentials: true });
    }
    fetchAssessmentPassageTopicsTreeWithPassageCount(itemsInPassage) {
        return this.http.post(
        ///items/assessment/passage-filter/items_in_passage/{itemsInPassage}
        `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/assessment/passage-filter/assessment/items_in_passage/${itemsInPassage}`, { withCredentials: true });
    }
    fetchPassageItem(passageId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${passageId}/passage-items`, { withCredentials: true });
    }
    fetchPassageTopicTreeAdmin(subjectId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/subjects/${subjectId}/passage_topics_tree`, { withCredentials: true });
    }
    fetchPassageTopicTreeModerator(subjectId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/user/subjects/${subjectId}/passage_topics_tree`, { withCredentials: true });
    }
    fetchPassageTopicTreeAuthor(subjectId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/user/subjects/${subjectId}/passage_topics_tree`, { withCredentials: true });
    }
    fetchIndividualItem(itemId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/item`, { withCredentials: true });
    }
    fetchAllItems(subjectId, topicId, subtopicId, page, size) {
        if (subtopicId) {
            return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/?subjectId=${subjectId}&topicId=${topicId}&subtopicId=${subtopicId}&page=${page}&size=${size}`, { withCredentials: true });
        }
        else {
            return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/?subjectId=${subjectId}&topicId=${topicId}&page=${page}&size=${size}`, { withCredentials: true });
        }
    }
    fetchItemUsageCount(itemId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/usages`, {
            withCredentials: true,
        });
    }
    fetchAllAssessmentItems(assessmentId, sectionId, subjectId, topicId, subtopicId, page, size) {
        if (subtopicId) {
            return this.http.get(
            /** former endpoint ==> /items/assessment/ */
            `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/assessment/${assessmentId}/section/${sectionId}?subjectId=${subjectId}&topicId=${topicId}&subtopicId=${subtopicId}&page=${page}&size=${size}`, { withCredentials: true });
        }
        else {
            let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
            queryParams = queryParams
                .append('subjectId', subjectId)
                .append('topicId', topicId)
                .append('page', page)
                .append('size', size);
            return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/assessment/${assessmentId}/section/${sectionId}`, //?subjectId=${subjectId}&topicId=${topicId}`,
            { params: queryParams, withCredentials: true });
        }
    }
    fetchManualSelectedItemsInAssessment(assessmentId, sectionId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/manual/selected_items`, { withCredentials: true });
    }
    fetchAllRecycleItems(subjectId, topicId, page, pageSize, subtopicId) {
        if (subtopicId) {
            return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/recycle/in-recycle?subjectId=${subjectId}&topicId=${topicId}&subtopicId=${subtopicId}&page=${page}&size=${pageSize}`, { withCredentials: true });
        }
        else {
            return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/recycle/in-recycle?subjectId=${subjectId}&topicId=${topicId}&page=${page}&size=${pageSize}`, { withCredentials: true });
        }
    }
    fetchAllSubjectsNonAdmin() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/user/subjects`, { withCredentials: true });
    }
    fetchAllSubjectsItems() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/subjects/items`, { withCredentials: true });
    }
    fetchAllSubjectsDropdown() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/subjects`, { withCredentials: true });
    }
    fetchAllSubjectsDropdownForAssessment() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/subjects/assessment`, { withCredentials: true });
    }
    fetchSubjectTopicsTreeAuthor(subjectId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/user/subjects/${subjectId}/topics_tree_author`, { withCredentials: true });
    }
    fetchSubjectTopicsTreeAdmin(subjectId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/subjects/${subjectId}/topics_tree`, { withCredentials: true });
    }
    fetchSubjectTopicsTreeUser(subjectId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/user/subjects/${subjectId}/topics_tree`, { withCredentials: true });
    }
    fetchAssessmentSubjectTopicsTree(subjectId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/subjects/${subjectId}/topics_tree/assessment`, { withCredentials: true });
    }
    fetchItemsAwaitingModerationTopicsTree(subjectId, itemStatus) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/user/subjects/${subjectId}/topics_tree_moderation/item_status/${itemStatus}`, { withCredentials: true });
    }
    filterItems(filterInformation) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/item-filter`, filterInformation, { withCredentials: true });
    }
    filterAssessmentItems(assessmentId, sectionId, filterInformation) {
        return this.http.post(
        /** former endpoint ===> /items/item-filter_assessment */
        `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/assessment/${assessmentId}/section/${sectionId}/item-filter_assessment`, filterInformation, { withCredentials: true });
    }
    rejectItem(rejectItemRequest) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/reject-item/${rejectItemRequest.itemId}`, rejectItemRequest, { withCredentials: true });
    }
    copyItem(itemId, copiedItem) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/copy`, copiedItem, { withCredentials: true });
    }
    moveItem(itemId, movedItem) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/move`, movedItem, { withCredentials: true });
    }
    editItem(itemId, item) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/item/MCQ`, item, { withCredentials: true });
    }
    editShortText(itemId, item) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/item/shortText`, item, { withCredentials: true });
    }
    edit_Essay(itemId, item) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/item/essay`, item, { withCredentials: true });
    }
    edit_Yes_No(itemId, item) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/item/YES_NO`, item, { withCredentials: true });
    }
    edit_True_False(itemId, item) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/item/TRUE_FALSE`, item, { withCredentials: true });
    }
    edit_order_list(itemId, item) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/item/ORDER_LIST`, item, { withCredentials: true });
    }
    edit_MRQ(itemId, item) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/item/MRQ`, item, { withCredentials: true });
    }
    editAssociation(itemId, item) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/item/ASSOCIATION`, item, { withCredentials: true });
    }
    edit_cloze_text(itemId, item) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/item/CLOZE_TEXT`, item, { withCredentials: true });
    }
    edit_cloze_dropdown(itemId, item) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/item/CLOZE_DROPDOWN`, item, { withCredentials: true });
    }
    edit_cloze_radio(itemId, item) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/item/CLOZE_DROPDOWN`, item, { withCredentials: true });
    }
    deleteItem(itemId) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/item`, { withCredentials: true });
    }
}
ItemHttpService.ɵfac = function ItemHttpService_Factory(t) { return new (t || ItemHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](angular_notifier__WEBPACK_IMPORTED_MODULE_6__.NotifierService)); };
ItemHttpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ItemHttpService, factory: ItemHttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 73742:
/*!************************************************************!*\
  !*** ./src/app/pages/items/item-tag/item-tag.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemTagComponent": () => (/* binding */ ItemTagComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 55828);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var _users_user_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../users/user/users.service */ 29073);
/* harmony import */ var _item_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item-utilities.service */ 16716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);















function ItemTagComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx_r0.status, ")");
  }
}

function ItemTagComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "uppercase");
  }

  if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, item_r2[0].tagName), " ");
  }
}

class ItemTagComponent {
  constructor(userService, itemUtilityService) {
    this.userService = userService;
    this.itemUtilityService = itemUtilityService;
    this.sendTags = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.resetTagsArray = false;
    this.minLengthTerm = 3;
    this.loadingTags = false;
    this.tagSearchInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.Tag = [];
  }

  ngOnInit() {
    if (this.recievedTag) {
      this.Tag = this.recievedTag;
    }

    this.itemUtilityService.selectedTags$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(tags => {
      if (tags && tags.length) {
        this.Tag = tags;
      }
    });
    this.loadTags();

    if (this.resetTagsArray) {
      console.log("RESETTING TAGS ARRAY");
      this.Tag = [];
      this.sendTags.emit(this.Tag);
    }
  }

  showSelect(event) {// console.log(event);
  }

  trackByFn(tag) {
    return tag.id;
  }

  loadTags() {
    this.tags$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]), this.tagSearchInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(value => {
      return value !== null && value.length >= this.minLengthTerm;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.loadingTags = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(value => {
      return this.userService.searchTags(value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(_err => {
        // console.log(_err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(value => {
        this.loadingTags = false; // console.log(value);
      }));
    })));
  }

  sendTag(val) {
    if (val.length === 0) {
      this.clearTags();
    } else {
      this.Tag = val;
      this.sendTags.emit(val);
      this.itemUtilityService.setSelectedTags(this.Tag);
    }
  }

  clearTags() {
    console.log("USER CLEARED TAGS");
    this.Tag = [];
    this.sendTags.emit(this.Tag);
    this.itemUtilityService.setSelectedTags(this.Tag);
  }

}

ItemTagComponent.ɵfac = function ItemTagComponent_Factory(t) {
  return new (t || ItemTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_users_user_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_item_utilities_service__WEBPACK_IMPORTED_MODULE_1__.ItemUtilitiesService));
};

ItemTagComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ItemTagComponent,
  selectors: [["app-item-tag"]],
  inputs: {
    recievedTag: "recievedTag",
    status: "status",
    disabled: "disabled",
    resetTagsArray: "resetTagsArray"
  },
  outputs: {
    sendTags: "sendTags"
  },
  decls: 7,
  vars: 11,
  consts: [[1, "mb-3"], ["for", "choices-multiple-default", 1, "form-label"], [4, "ngIf"], ["bindLabel", "tagName", "name", "tag", "typeToSearchText", "Enter tag name to search", 3, "items", "multiple", "disabled", "minTermLength", "trackByFn", "loading", "typeahead", "ngModel", "search", "ngModelChange"], ["ng-optgroup-tmp", ""]],
  template: function ItemTagComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Tags ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ItemTagComponent_span_3_Template, 2, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ng-select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("search", function ItemTagComponent_Template_ng_select_search_4_listener($event) {
        return ctx.showSelect($event);
      })("ngModelChange", function ItemTagComponent_Template_ng_select_ngModelChange_4_listener($event) {
        return ctx.Tag = $event;
      })("ngModelChange", function ItemTagComponent_Template_ng_select_ngModelChange_4_listener() {
        return ctx.sendTag(ctx.Tag);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ItemTagComponent_ng_template_6_Template, 2, 3, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 9, ctx.tags$))("multiple", true)("disabled", ctx.disabled)("minTermLength", ctx.minLengthTerm)("trackByFn", ctx.trackByFn)("loading", ctx.loadingTags)("typeahead", ctx.tagSearchInput$)("ngModel", ctx.Tag);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgOptgroupTemplateDirective],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.UpperCasePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLXRhZy5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 16716:
/*!*******************************************************!*\
  !*** ./src/app/pages/items/item-utilities.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemUtilitiesService": () => (/* binding */ ItemUtilitiesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);




class ItemUtilitiesService {
    constructor(http) {
        this.http = http;
        this.passageItemWorkflow = false;
        this.passageId = "";
        this.previewItem = false;
        this.tagSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.selectedTags$ = this.tagSource.asObservable();
    }
    setSelectedTags(tags) {
        this.tagSource.next(tags);
    }
    convertLatexToBase64(latex) {
        const payload = {
            text: latex,
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/choice-matrix`, payload, { withCredentials: true });
    }
    saveCurrentItemTrail(itemTrail) {
        localStorage.setItem('item-trail', JSON.stringify(itemTrail !== null && itemTrail !== void 0 ? itemTrail : this.currentItemTrail));
    }
    getSavedItemTrail() {
        return localStorage.getItem('item-trail') ? JSON.parse(localStorage.getItem('item-trail')) : null;
    }
}
ItemUtilitiesService.ɵfac = function ItemUtilitiesService_Factory(t) { return new (t || ItemUtilitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ItemUtilitiesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ItemUtilitiesService, factory: ItemUtilitiesService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 28333:
/*!***************************************************************!*\
  !*** ./src/app/pages/items/models/default-item-properties.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultItemProperties": () => (/* binding */ DefaultItemProperties)
/* harmony export */ });
/* harmony import */ var _scoring_option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scoring-option */ 58049);

class DefaultItemProperties {
    constructor() {
        this.images = [];
        this.stimulus = "";
        this.scoringOption = new _scoring_option__WEBPACK_IMPORTED_MODULE_0__.ScoringOption();
        this.possibleResponses = [];
        this.allowCopy = false;
        this.allowPaste = false;
        this.allowCut = false;
        this.plainText = false;
        this.maxWords = 0;
    }
}


/***/ }),

/***/ 60758:
/*!********************************************************!*\
  !*** ./src/app/pages/items/models/item-status-enum.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemStatusEnum": () => (/* binding */ ItemStatusEnum)
/* harmony export */ });
var ItemStatusEnum;
(function (ItemStatusEnum) {
    ItemStatusEnum["DRAFT"] = "DRAFT";
    ItemStatusEnum["PUBLISHED"] = "PUBLISHED";
    ItemStatusEnum["REJECTED"] = "REJECTED";
    ItemStatusEnum["AWAITING_MODERATION"] = "AWAITING_MODERATION";
})(ItemStatusEnum || (ItemStatusEnum = {}));


/***/ }),

/***/ 55284:
/*!**************************************************!*\
  !*** ./src/app/pages/items/models/item-types.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemTypes": () => (/* binding */ ItemTypes)
/* harmony export */ });
var ItemTypes;
(function (ItemTypes) {
    ItemTypes["MCQ"] = "MCQ";
    ItemTypes["MRQ"] = "MRQ";
    //ESSAY_PLAIN_TEXT = 'ESSAY_PLAIN_TEXT',
    ItemTypes["ESSAY_RICH_TEXT"] = "ESSAY_RICH_TEXT";
    ItemTypes["CLOZE_TEXT"] = "CLOZE_TEXT";
    ItemTypes["CLOZE_DROPDOWN"] = "CLOZE_DROPDOWN";
    ItemTypes["CLOZE_RADIO"] = "CLOZERADIO";
    ItemTypes["SHORT_TEXT"] = "SHORT_TEXT";
    ItemTypes["TRUE_FALSE"] = "TRUE_FALSE";
    ItemTypes["YES_NO"] = "YES_NO";
    ItemTypes["ASSOCIATION"] = "ASSOCIATION";
    ItemTypes["CHOICE_MATRIX"] = "CHOICE_MATRIX";
    ItemTypes["ORDER_LIST"] = "ORDER_LIST";
    ItemTypes["CLOZE_TEXT_IMAGE"] = "CLOZE_TEXT_IMAGE";
    ItemTypes["CLOZE_DROPDOWN_IMAGE"] = "CLOZE_DROPDOWN_IMAGE";
    ItemTypes["IMAGE_DRAG_AND_DROP"] = "IMAGE_DRAG_AND_DROP";
    ItemTypes["DRAW_WRITING"] = "DRAWING_AND_WRITING";
    ItemTypes["DRAW_AND_WRITING"] = "DRAWING_AND_WRITING";
    ItemTypes["ANY"] = "ANY";
})(ItemTypes || (ItemTypes = {}));


/***/ }),

/***/ 14309:
/*!***********************************************************!*\
  !*** ./src/app/pages/items/models/matching-rule-enums.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchingRuleEnums": () => (/* binding */ MatchingRuleEnums)
/* harmony export */ });
var MatchingRuleEnums;
(function (MatchingRuleEnums) {
    MatchingRuleEnums["CONTAINS"] = "CONTAINS";
    MatchingRuleEnums["EXACT_MATCH"] = "EXACT_MATCH";
})(MatchingRuleEnums || (MatchingRuleEnums = {}));


/***/ }),

/***/ 36172:
/*!********************************************************!*\
  !*** ./src/app/pages/items/models/rejection-reason.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RejectionReason": () => (/* binding */ RejectionReason)
/* harmony export */ });
class RejectionReason {
}


/***/ }),

/***/ 26963:
/*!*******************************************************!*\
  !*** ./src/app/pages/items/models/responses.model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Responses": () => (/* binding */ Responses)
/* harmony export */ });
class Responses {
}


/***/ }),

/***/ 13802:
/*!**********************************************!*\
  !*** ./src/app/pages/items/models/result.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultSummaryParams": () => (/* binding */ ResultSummaryParams),
/* harmony export */   "AssessmentResultSummary": () => (/* binding */ AssessmentResultSummary),
/* harmony export */   "ScoreDistributionParams": () => (/* binding */ ScoreDistributionParams),
/* harmony export */   "ScoreDistributionScaledScore": () => (/* binding */ ScoreDistributionScaledScore),
/* harmony export */   "ScoreAnalysisParams": () => (/* binding */ ScoreAnalysisParams),
/* harmony export */   "ScoreAnalysisScaledScore": () => (/* binding */ ScoreAnalysisScaledScore),
/* harmony export */   "ParticipantsParams": () => (/* binding */ ParticipantsParams),
/* harmony export */   "ParticipantsScoreList": () => (/* binding */ ParticipantsScoreList),
/* harmony export */   "Participant": () => (/* binding */ Participant),
/* harmony export */   "SectionAttempts": () => (/* binding */ SectionAttempts),
/* harmony export */   "SectionAttempted": () => (/* binding */ SectionAttempted),
/* harmony export */   "ParticipantLogins": () => (/* binding */ ParticipantLogins),
/* harmony export */   "ParticipantIpAddressAndTime": () => (/* binding */ ParticipantIpAddressAndTime),
/* harmony export */   "ParticipantScore": () => (/* binding */ ParticipantScore),
/* harmony export */   "SectionScoreResponse": () => (/* binding */ SectionScoreResponse),
/* harmony export */   "TranscriptListParams": () => (/* binding */ TranscriptListParams),
/* harmony export */   "TranscriptParticipantsScoreList": () => (/* binding */ TranscriptParticipantsScoreList),
/* harmony export */   "CandidateItemScore": () => (/* binding */ CandidateItemScore),
/* harmony export */   "ItemPublishDTO": () => (/* binding */ ItemPublishDTO),
/* harmony export */   "ParticipantSectionTranscript": () => (/* binding */ ParticipantSectionTranscript),
/* harmony export */   "ParticipantsStatus": () => (/* binding */ ParticipantsStatus),
/* harmony export */   "PARTICIPANT_STATUS": () => (/* binding */ PARTICIPANT_STATUS),
/* harmony export */   "ItemType": () => (/* binding */ ItemType),
/* harmony export */   "PassFailStatus": () => (/* binding */ PassFailStatus),
/* harmony export */   "questionItemType": () => (/* binding */ questionItemType),
/* harmony export */   "QUESTION_TYPES": () => (/* binding */ QUESTION_TYPES),
/* harmony export */   "Section_Score_Response": () => (/* binding */ Section_Score_Response),
/* harmony export */   "Participant_Score": () => (/* binding */ Participant_Score),
/* harmony export */   "Section_Attempt_Summary": () => (/* binding */ Section_Attempt_Summary),
/* harmony export */   "Participant_Result_Data_DTO": () => (/* binding */ Participant_Result_Data_DTO)
/* harmony export */ });
class ResultSummaryParams {
}
class AssessmentResultSummary {
}
class ScoreDistributionParams {
}
class ScoreDistributionScaledScore {
}
class ScoreAnalysisParams {
}
class ScoreAnalysisScaledScore {
}
class ParticipantsParams {
}
class ParticipantsScoreList {
}
class Participant {
}
class SectionAttempts {
}
class SectionAttempted {
}
class ParticipantLogins {
}
class ParticipantIpAddressAndTime {
}
class ParticipantScore {
}
class SectionScoreResponse {
}
class TranscriptListParams {
}
class TranscriptParticipantsScoreList {
}
class CandidateItemScore {
}
class ItemPublishDTO {
}
class ParticipantSectionTranscript {
}
var ParticipantsStatus;
(function (ParticipantsStatus) {
    ParticipantsStatus["NOT_STARTED"] = "NOT_STARTED";
    ParticipantsStatus["STARTED"] = "STARTED";
    ParticipantsStatus["ENDED"] = "ENDED";
})(ParticipantsStatus || (ParticipantsStatus = {}));
const PARTICIPANT_STATUS = {
    NOT_STARTED: 'NOT_STARTED',
    STARTED: 'STARTED',
    ENDED: 'ENDED',
};
var ItemType;
(function (ItemType) {
    ItemType["MULTIPLE_CHOICE"] = "MULTIPLE_CHOICE";
    ItemType["ESSAY"] = "ESSAY";
    ItemType["CODING"] = "CODING";
})(ItemType || (ItemType = {}));
var PassFailStatus;
(function (PassFailStatus) {
    PassFailStatus["PASS"] = "PASS";
    PassFailStatus["FAIL"] = "FAIL";
    PassFailStatus["UNATTEMPTED"] = "UNATTEMPTED";
    PassFailStatus["MANUAL_SCORING"] = "MANUAL_SCORING";
    PassFailStatus["PARTIAL"] = "PARTIAL";
})(PassFailStatus || (PassFailStatus = {}));
var questionItemType;
(function (questionItemType) {
    questionItemType["MCQ"] = "MCQ";
    questionItemType["MRQ"] = "MRQ";
    questionItemType["ESSAY_PLAIN_TEXT"] = "ESSAY_PLAIN_TEXT";
    questionItemType["ESSAY_RICH_TEXT"] = "ESSAY_RICH_TEXT";
    questionItemType["CLOZE_TEXT"] = "CLOZE_TEXT";
    questionItemType["CLOZE_DROPDOWN"] = "CLOZE_DROPDOWN";
    questionItemType["CLOZE_RADIO"] = "CLOZE_RADIO";
    questionItemType["SHORT_TEXT"] = "SHORT_TEXT";
    questionItemType["TRUE_FALSE"] = "TRUE_FALSE";
    questionItemType["YES_NO"] = "YES_NO";
    questionItemType["ASSOCIATION"] = "ASSOCIATION";
    questionItemType["CHOICE_MATRIX"] = "CHOICE_MATRIX";
    questionItemType["ORDER_LIST"] = "ORDER_LIST";
    questionItemType["CLOZE_TEXT_IMAGE"] = "CLOZE_TEXT_IMAGE";
    questionItemType["CLOZE_DROPDOWN_IMAGE"] = "CLOZE_DROPDOWN_IMAGE";
    questionItemType["IMAGE_DRAG_AND_DROP"] = "IMAGE_DRAG_AND_DROP";
})(questionItemType || (questionItemType = {}));
const QUESTION_TYPES = {
    MCQ: 'MCQ',
    MRQ: 'MRQ',
    ESSAY_PLAIN_TEXT: 'ESSAY_PLAIN_TEXT',
    ESSAY_RICH_TEXT: 'ESSAY_RICH_TEXT',
    CLOZE_TEXT: 'CLOZE_TEXT',
    CLOZE_RADIO: 'CLOZE_RADIO',
    CLOZE_DROPDOWN: 'CLOZE_DROPDOWN',
    SHORT_TEXT: 'SHORT_TEXT',
    TRUE_FALSE: 'TRUE_FALSE',
    YES_NO: 'YES_NO',
    ASSOCIATION: 'ASSOCIATION',
    CHOICE_MATRIX: 'CHOICE_MATRIX',
    ORDER_LIST: 'ORDER_LIST',
    CLOZE_TEXT_IMAGE: 'CLOZE_TEXT_IMAGE',
    CLOZE_DROPDOWN_IMAGE: 'CLOZE_DROPDOWN_IMAGE',
    IMAGE_DRAG_AND_DROP: 'IMAGE_DRAG_AND_DROP',
};
class Section_Score_Response {
}
class Participant_Score {
}
class Section_Attempt_Summary {
}
class Participant_Result_Data_DTO {
}


/***/ }),

/***/ 58049:
/*!******************************************************!*\
  !*** ./src/app/pages/items/models/scoring-option.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoringOption": () => (/* binding */ ScoringOption)
/* harmony export */ });
class ScoringOption {
    constructor() {
        this.score = 1;
        this.penalty = 0;
        this.minimumScoreIfAttempted = 0;
        this.answers = [];
        this.scoringType = 'EXACT_MATCH';
        this.autoScore = false;
        this.matchingRule = 'CONTAINS';
        this.caseSensitive = false;
        this.ignoreLeadingAndTrailingSpaces = false;
    }
}


/***/ }),

/***/ 50459:
/*!*********************************************************!*\
  !*** ./src/app/pages/items/models/scoring-type-enum.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoringTypeEnum": () => (/* binding */ ScoringTypeEnum)
/* harmony export */ });
var ScoringTypeEnum;
(function (ScoringTypeEnum) {
    ScoringTypeEnum["EXACT_MATCH"] = "EXACT_MATCH";
    //PARTIAL_MATCH = 'PARTIAL_MATCH',
    ScoringTypeEnum["PARTIAL_MATCH_PER_RESPONSE"] = "PARTIAL_MATCH_PER_RESPONSE";
})(ScoringTypeEnum || (ScoringTypeEnum = {}));


/***/ }),

/***/ 29306:
/*!**************************************************************************!*\
  !*** ./src/app/pages/items/passage-preview/passage-preview.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassagePreviewComponent": () => (/* binding */ PassagePreviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _item_utilities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item-utilities.service */ 16716);
/* harmony import */ var src_app_shared_pipes_html_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pipes/html-sanitizer.pipe */ 26432);




class PassagePreviewComponent {
    constructor(itemUtil) {
        this.itemUtil = itemUtil;
        this.showEditBtnInProfileActivitiesPassagePreview = true;
        this.returnPreviewData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
    edit() {
        this.itemUtil.previewItem = false;
        this.returnPreviewData.emit(this.previewData);
    }
}
PassagePreviewComponent.ɵfac = function PassagePreviewComponent_Factory(t) { return new (t || PassagePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_item_utilities_service__WEBPACK_IMPORTED_MODULE_0__.ItemUtilitiesService)); };
PassagePreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PassagePreviewComponent, selectors: [["app-passage-preview"]], inputs: { previewData: "previewData", showEditBtnInProfileActivitiesPassagePreview: "showEditBtnInProfileActivitiesPassagePreview" }, outputs: { returnPreviewData: "returnPreviewData" }, decls: 8, vars: 6, consts: [[1, "card"], [1, "card-body"], [1, "row"], [1, "col-xxl-12", "col-lg-12", "col-md-12", "col-sm-12"], [3, "innerHTML"]], template: function PassagePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "htmlSanitizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "htmlSanitizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, ctx.previewData.stimulus), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, ctx.previewData.stimulus), " ");
    } }, pipes: [src_app_shared_pipes_html_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_1__.HtmlSanitizerPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzYWdlLXByZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 92534:
/*!******************************************************!*\
  !*** ./src/app/pages/items/utility/ClozeTextUtil.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newClozeDropDown": () => (/* binding */ newClozeDropDown),
/* harmony export */   "newClozeRadioContainer": () => (/* binding */ newClozeRadioContainer),
/* harmony export */   "openClozeOptionsModal": () => (/* binding */ openClozeOptionsModal)
/* harmony export */ });
function newClozeDropDown(editor, count) {
    let dropCount = tinymce.activeEditor.dom.doc.body.innerHTML.split("<select").length;
    count = dropCount;
    let el = tinymce.activeEditor.dom.create("select", {
        style: "width: 200px; height: 30px; border-radius: 3px",
    });
    ++count;
    el.setAttribute("id", count + "");
    let optionBlank = tinymce.activeEditor.dom.create("option");
    optionBlank.text = " -- ";
    optionBlank.value = "blank";
    let optionAddRemove = tinymce.activeEditor.dom.create("option");
    optionAddRemove.text = " click to add / remove";
    optionAddRemove.value = "addRemove";
    el.add(optionBlank);
    el.add(optionAddRemove);
    tinymce.activeEditor.selection.setNode(el);
    tinymce.activeEditor
        .getDoc()
        .getElementById(count + "")
        .addEventListener("change", (event) => {
        let selectElement = event.currentTarget;
        if (selectElement.item(selectElement.selectedIndex).value != "addRemove") {
            return;
        }
        let optionsArray = [];
        optionsArray.push({
            value: "selectOption",
            text: "Select option to delete",
        });
        for (let i = 0; i < selectElement.options.length; i++) {
            if (selectElement.item(i).value == "blank" ||
                selectElement.item(i).value == "addRemove") {
                continue;
            }
            optionsArray.push({
                value: selectElement.item(i).value,
                text: selectElement.item(i).label,
            });
        }
        editor.execCommand("addRemoveClozeOption", false, {
            select: event.currentTarget,
            options: optionsArray,
        });
        selectElement.selectedIndex = 0;
    });
}
function newClozeRadioContainer(editor, count) {
    let dropCount = tinymce.activeEditor.dom.doc.body.innerHTML.split("<span").length;
    count = dropCount;
    const groupName = `option-group-${count + 1}`;
    const containerId = `container-${count + 1}`;
    let el = tinymce.activeEditor.dom.create("span", {
        class: "cloze-radio-container mceNonEditable",
        contenteditable: "false",
        style: "display:inline-flex; flex-wrap:wrap; border:1px solid #ccc; padding: 3px; gap:5px;"
    });
    ++count;
    el.setAttribute("id", count + "");
    let optionsContainer = tinymce.activeEditor.dom.create("span", {
        class: "options-wrapper",
        contenteditable: "true",
        style: "display:flex; gap:5px; flex-wrap:wrap; align-items:center;"
    });
    let option = tinymce.activeEditor.dom.create("span", {
        class: "option",
        style: "display:inline-flex; align-items:center; gap:3px; border:1px dashed #ccc;",
        contenteditable: "false"
    });
    let input = tinymce.activeEditor.dom.create("input", {
        type: "radio",
        contenteditable: "true",
        name: groupName,
    });
    let label = tinymce.activeEditor.dom.create("label", { for: `${containerId}-option-1` }, "Option 1");
    let actionsDiv = tinymce.activeEditor.dom.create("span", {
        class: "actions",
        style: "display:inline-flex; align-items:center;"
    });
    let action = tinymce.activeEditor.dom.create("button", {
        type: "button",
        class: "add-remove-btn",
        contenteditable: "false",
        style: "padding:5px; font-size:12px; cursor:pointer;"
    }, "Add / Edit");
    option.appendChild(input);
    option.appendChild(label);
    optionsContainer.appendChild(option);
    actionsDiv.appendChild(action);
    el.appendChild(optionsContainer);
    el.appendChild(actionsDiv);
    tinymce.activeEditor.selection.setNode(el);
}
function openClozeOptionsModal(container, groupName) {
    // Find the options wrapper inside this container
    const optionsWrapper = container.querySelector('.options-wrapper');
    if (!optionsWrapper)
        return;
    // Gather existing options
    const existingOptions = Array.from(optionsWrapper.querySelectorAll('.option')).map((opt) => {
        var _a, _b;
        return ({
            id: opt.dataset.id,
            label: ((_a = opt.querySelector('label')) === null || _a === void 0 ? void 0 : _a.innerText) || '',
            checked: ((_b = opt.querySelector('input[type="radio"]')) === null || _b === void 0 ? void 0 : _b.checked) || false
        });
    });
    const modal = document.createElement('div');
    modal.className = 'cloze-modal position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50';
    modal.style.zIndex = '9999';
    const modalContent = document.createElement('div');
    modalContent.className = 'bg-white p-4 rounded shadow';
    modalContent.style.maxHeight = '80%';
    modalContent.style.width = '400px';
    modalContent.style.overflowY = 'auto';
    modal.appendChild(modalContent);
    const title = document.createElement('h5');
    title.className = 'mb-3';
    title.innerText = 'Edit Options';
    modalContent.appendChild(title);
    const optionsContainer = document.createElement('div');
    modalContent.appendChild(optionsContainer);
    // Render the options inside the modal
    function renderOptions() {
        optionsContainer.innerHTML = '';
        existingOptions.forEach((opt, idx) => {
            const row = document.createElement('div');
            row.className = 'd-flex align-items-center gap-2 mb-2';
            const input = document.createElement('input');
            input.type = 'text';
            input.value = opt.label;
            input.className = 'form-control form-control-sm flex-grow-1';
            input.addEventListener('input', (e) => {
                existingOptions[idx].label = e.target.value;
            });
            const deleteBtn = document.createElement('button');
            deleteBtn.type = 'button';
            deleteBtn.className = 'btn btn-sm btn-danger';
            deleteBtn.innerText = 'Delete';
            deleteBtn.addEventListener('click', () => {
                existingOptions.splice(idx, 1);
                renderOptions();
            });
            row.appendChild(input);
            row.appendChild(deleteBtn);
            optionsContainer.appendChild(row);
        });
    }
    renderOptions();
    // Add new option button
    const addBtn = document.createElement('button');
    addBtn.type = 'button';
    addBtn.className = 'btn btn-sm btn-outline-primary mt-2';
    addBtn.innerText = 'Add New Option';
    addBtn.addEventListener('click', () => {
        existingOptions.push({
            id: `${container.id}-option-${existingOptions.length + 1}`,
            label: `Option ${existingOptions.length + 1}`,
            checked: false
        });
        renderOptions();
    });
    modalContent.appendChild(addBtn);
    const actions = document.createElement('div');
    actions.className = 'd-flex justify-content-end gap-2 mt-3';
    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.className = 'btn btn-secondary btn-sm';
    cancelBtn.innerText = 'Cancel';
    cancelBtn.addEventListener('click', () => modal.remove());
    const confirmBtn = document.createElement('button');
    confirmBtn.type = 'button';
    confirmBtn.className = 'btn btn-primary btn-sm';
    confirmBtn.innerText = 'Confirm';
    confirmBtn.addEventListener('click', () => {
        var _a;
        // If all options are deleted, remove the entire cloze radio block container from the editor
        if (existingOptions.length === 0) {
            container.remove();
            modal.remove();
            return;
        }
        const checkedId = (_a = optionsWrapper.querySelector('input[type="radio"]:checked')) === null || _a === void 0 ? void 0 : _a.id;
        // Clear options but keep wrapper alive
        optionsWrapper.innerHTML = '';
        existingOptions.forEach((opt) => {
            const optionDiv = document.createElement('span');
            optionDiv.className = 'd-flex option align-items-center gap-2 border p-1';
            optionDiv.style.border = "1px dashed #ccc";
            optionDiv.dataset['id'] = opt.id;
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = groupName;
            radio.id = opt.id;
            if (opt.checked) {
                radio.checked = true;
            }
            const label = document.createElement('label');
            label.htmlFor = opt.id;
            label.innerText = opt.label;
            optionDiv.appendChild(radio);
            optionDiv.appendChild(label);
            optionsWrapper.appendChild(optionDiv);
        });
        modal.remove();
    });
    actions.appendChild(cancelBtn);
    actions.appendChild(confirmBtn);
    modalContent.appendChild(actions);
    document.body.appendChild(modal);
}
/*
export function clozeDropDownEventManager(editor:any,event: Event){

    let selectElement : HTMLSelectElement =   event.currentTarget;

    if(selectElement.item(selectElement.selectedIndex).value != 'addRemove' ){

        return;
    }

    let optionsArray = [];

    optionsArray.push({value:'selectOption',text:'Select option to delete'});

    for (let i = 0; i < selectElement.options.length; i++) {

        if(selectElement.item(i).value == "blank" || selectElement.item(i).value =="addRemove"){

            continue;
        }
        optionsArray.push({value:selectElement.item(i).value,text:selectElement.item(i).label})
    }

    editor.execCommand('addRemoveClozeOption', false, {select:event.currentTarget,options:optionsArray});
}*/


/***/ }),

/***/ 99302:
/*!***************************************************!*\
  !*** ./src/app/pages/items/utility/FileUpload.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imageUpload": () => (/* binding */ imageUpload)
/* harmony export */ });
function imageUpload(cb, value, meta) {
    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.setAttribute('name', 'image');
    alert('ocheal is here');
    input.onchange = function () {
        var file = input.files[0];
        var reader = new FileReader();
        reader.onload = function () {
            var id = 'blobid' + new Date().getTime();
            var blobCache = tinymce.activeEditor.editorUpload.blobCache;
            var base64 = reader.result.split(',')[1];
            // console.log(base64);
            var blobInfo = blobCache.create(id, file, base64);
            blobCache.add(blobInfo);
            // console.log();
            cb('data:' + blobInfo.blob().type + ';base64,' + blobInfo.base64(), {
                title: file.name,
            });
        };
        reader.readAsDataURL(file);
    };
    input.click();
}


/***/ }),

/***/ 39730:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesRoutingModule": () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/examalpha/dashboard",
    },
    {
        path: "dashboard",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2015_ngx-echarts_mjs"), __webpack_require__.e("default-src_app_pages_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 71659)).then((m) => m.DashboardModule),
    },
    {
        path: "exams",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-dropzone-wrapper___ivy_ngcc___fesm2015_ngx-dropzone-wrapper_js"), __webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2015_ngx-echarts_mjs"), __webpack_require__.e("default-src_app_pages_exam-preview_exam-preview_module_ts"), __webpack_require__.e("default-src_app_pages_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_pages_items_items_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-accordion_mjs"), __webpack_require__.e("default-src_app_pages_scheduler_scheduler_module_ts"), __webpack_require__.e("default-src_app_pages_results_candidate-result_candidate-result_component_ts-src_app_pages_re-5f6b7b"), __webpack_require__.e("default-src_app_pages_passages_passages_module_ts"), __webpack_require__.e("default-src_app_pages_templates_templates_module_ts"), __webpack_require__.e("src_app_pages_assessment_assessment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./assessment/assessment.module */ 13947)).then((m) => m.AssessmentModule),
    },
    {
        path: "result",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-dropzone-wrapper___ivy_ngcc___fesm2015_ngx-dropzone-wrapper_js"), __webpack_require__.e("src_app_pages_result_result_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./result/result.module */ 29813)).then((m) => m.ResultModule),
    },
    {
        path: "passages",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-dropzone-wrapper___ivy_ngcc___fesm2015_ngx-dropzone-wrapper_js"), __webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2015_ngx-echarts_mjs"), __webpack_require__.e("default-src_app_pages_exam-preview_exam-preview_module_ts"), __webpack_require__.e("default-src_app_pages_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_pages_items_items_module_ts"), __webpack_require__.e("default-src_app_pages_passages_passages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./passages/passages.module */ 35771)).then((m) => m.PassagesModule),
    },
    {
        path: "subjects",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-dropzone-wrapper___ivy_ngcc___fesm2015_ngx-dropzone-wrapper_js"), __webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2015_ngx-echarts_mjs"), __webpack_require__.e("default-src_app_pages_exam-preview_exam-preview_module_ts"), __webpack_require__.e("default-src_app_pages_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_pages_items_items_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./items/items.module */ 97272)).then((m) => m.ItemsModule),
    },
    {
        path: "moderation",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_moderation_moderation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./moderation/moderation.module */ 71356)).then((m) => m.ModerationModule),
    },
    {
        path: "recycle",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-dropzone-wrapper___ivy_ngcc___fesm2015_ngx-dropzone-wrapper_js"), __webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2015_ngx-echarts_mjs"), __webpack_require__.e("default-src_app_pages_exam-preview_exam-preview_module_ts"), __webpack_require__.e("default-src_app_pages_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_pages_items_items_module_ts"), __webpack_require__.e("src_app_pages_recycle_recycle_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./recycle/recycle.module */ 66556)).then((m) => m.RecycleModule),
    },
    {
        path: "templates",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_templates_templates_module_ts"), __webpack_require__.e("src_app_pages_assessment_model_assessment-delivery-enum_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./templates/templates.module */ 5381)).then((m) => m.TemplatesModule),
    },
    {
        path: "profile",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 88558)).then((m) => m.ProfileModule),
    },
    // {
    //   path: "ui",
    //   loadChildren: () => import("./ui/ui.module").then((m) => m.UiModule),
    // },
    {
        path: "users",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-dropzone-wrapper___ivy_ngcc___fesm2015_ngx-dropzone-wrapper_js"), __webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2015_ngx-echarts_mjs"), __webpack_require__.e("default-src_app_pages_exam-preview_exam-preview_module_ts"), __webpack_require__.e("default-src_app_pages_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_pages_items_items_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_users_users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./users/users.module */ 40535)).then((m) => m.UsersModule),
    },
    {
        path: "tags",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-dropzone-wrapper___ivy_ngcc___fesm2015_ngx-dropzone-wrapper_js"), __webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2015_ngx-echarts_mjs"), __webpack_require__.e("default-src_app_pages_exam-preview_exam-preview_module_ts"), __webpack_require__.e("default-src_app_pages_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_pages_items_items_module_ts"), __webpack_require__.e("src_app_pages_tags_tags_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tags/tags.module */ 30104)).then((m) => m.TagsModule),
    },
    // {
    //   path: "icons",
    //   loadChildren: () =>
    //     import("./icons/icons.module").then((m) => m.IconsModule),
    // },
    {
        path: "notifications",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-dropzone-wrapper___ivy_ngcc___fesm2015_ngx-dropzone-wrapper_js"), __webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2015_ngx-echarts_mjs"), __webpack_require__.e("default-src_app_pages_exam-preview_exam-preview_module_ts"), __webpack_require__.e("default-src_app_pages_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_pages_items_items_module_ts"), __webpack_require__.e("src_app_pages_notifications_notifications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./notifications/notifications.module */ 44558)).then((m) => m.NotificationsModule),
    },
    {
        path: "settings",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_authentication_countries_data_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 7850)).then((m) => m.SettingsModule),
    },
    {
        path: "schedule",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-dropzone-wrapper___ivy_ngcc___fesm2015_ngx-dropzone-wrapper_js"), __webpack_require__.e("default-src_app_pages_scheduler_scheduler_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./scheduler/scheduler.module */ 11973)).then((m) => m.SchedulerModule),
    },
    {
        path: "reports",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-dropzone-wrapper___ivy_ngcc___fesm2015_ngx-dropzone-wrapper_js"), __webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2015_ngx-echarts_mjs"), __webpack_require__.e("default-src_app_pages_exam-preview_exam-preview_module_ts"), __webpack_require__.e("default-src_app_pages_dashboard_dashboard_module_ts"), __webpack_require__.e("default-src_app_pages_items_items_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-accordion_mjs"), __webpack_require__.e("default-src_app_pages_results_candidate-result_candidate-result_component_ts-src_app_pages_re-5f6b7b"), __webpack_require__.e("default-src_app_pages_results_results_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./results/results.module */ 31869)).then((m) => m.ResultsModule),
    },
    {
        path: "monitor",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-echarts_fesm2015_ngx-echarts_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-accordion_mjs"), __webpack_require__.e("src_app_pages_monitor_monitor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./monitor/monitor.module */ 93199)).then((m) => m.MonitorModule),
    },
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵfac = function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); };
PagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 18950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularx-flatpickr */ 81988);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-count-to */ 97321);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-apexcharts */ 33142);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 42803);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 68581);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-swiper-wrapper */ 70598);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lightbox */ 25015);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ 39730);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








// Swiper Slider



// Pages Routing




// import { DrawingAndWritingPreviewComponent } from "./items/drawing-and-writing-preview/drawing-and-writing-preview.component";
// import { WidgetModule } from '../shared/widget/widget.module';
// import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
// import { DashboardsModule } from "./dashboards/dashboards.module";
const DEFAULT_SWIPER_CONFIG = {
    direction: "horizontal",
    slidesPerView: "auto",
};
class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        {
            provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__.SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__.FlatpickrModule.forRoot(),
            angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule,
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_1__.LeafletModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownModule,
            simplebar_angular__WEBPACK_IMPORTED_MODULE_11__.SimplebarAngularModule,
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__.PagesRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            // WidgetModule,
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__.SwiperModule,
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__.LightboxModule,
            // DashboardsModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_12__.TableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PagesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__.FlatpickrModule, angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule,
        _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_1__.LeafletModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_11__.SimplebarAngularModule,
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__.PagesRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        // WidgetModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__.SwiperModule,
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__.LightboxModule,
        // DashboardsModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_12__.TableModule] }); })();


/***/ }),

/***/ 88820:
/*!**********************************************************************!*\
  !*** ./src/app/pages/passages/list-passages/all-passages.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPassagesService": () => (/* binding */ AllPassagesService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class AllPassagesService {
    constructor(passagehttpService) {
        this.passagehttpService = passagehttpService;
        this.selectedPassageIndex = 0;
    }
    fetchAllPassages() {
        return this.passagehttpService.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/passage`, { withCredentials: true });
    }
    fetchSinglePassage(passageId) {
        return this.passagehttpService.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${passageId}/passage`, { withCredentials: true });
    }
    fetchPassageItems(passageId) {
        return this.passagehttpService.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${passageId}/passage-items`, { withCredentials: true });
    }
    filterPassage(filter) {
        return this.passagehttpService.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/passage-filter/items_in_passage`, filter, { withCredentials: true });
    }
    editPassage(passageId, passage) {
        return this.passagehttpService.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${passageId}/passage`, passage, { withCredentials: true });
    }
    deletePassage(passageId) {
        return this.passagehttpService.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${passageId}/passage`, { withCredentials: true });
    }
    listPassagesAndItems(itemsInPassage) {
        //items/assessment/passage-filter/assessment/items_in_passage/{itemsInPassage}
        return this.passagehttpService.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/assessment/passage-filter/assessment/items_in_passage/${itemsInPassage}`, itemsInPassage);
    }
    deletePassageItem(itemId, passageId) {
        return this.passagehttpService.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/${itemId}/item/${passageId}/passage`, { withCredentials: true });
    }
    getPassageUsageHistory(passageId) {
        return this.passagehttpService.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/passage/${passageId}/usages`, { withCredentials: true });
    }
}
AllPassagesService.ɵfac = function AllPassagesService_Factory(t) { return new (t || AllPassagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AllPassagesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AllPassagesService, factory: AllPassagesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 44502:
/*!**************************************************!*\
  !*** ./src/app/pages/recycle/recycle.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecycleService": () => (/* binding */ RecycleService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class RecycleService {
    constructor(http) {
        this.http = http;
        this.recycleActive = false;
    }
    fetchAllRecycleSubjects() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/recycle/subjects`, { withCredentials: true });
    }
    createNewPolicy(newPolicy) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/recycle`, newPolicy, { withCredentials: true });
    }
    editRecyclePolicy(recycleSettingId, recyclePolicy) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/recycle/${recycleSettingId}`, recyclePolicy, { withCredentials: true });
    }
    deleteRecyclePolicy(recycleId, subjectId) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/recycle/${recycleId}/${subjectId}`, { withCredentials: true });
    }
    fetchSubjectRecycle(recycleId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/recycle/${recycleId}`, { withCredentials: true });
    }
    fetchRecycleSubjectTree(subjectId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/subjects/${subjectId}/topics_tree_recycle`, { withCredentials: true });
    }
    restoreSubtopicItem(subjectId, topicId, subtopicId, details) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/recycle/subject/${subjectId}/topic/${topicId}/subtopic/${subtopicId}/manual_recycle`, details, { withCredentials: true });
    }
    restoreTopicItem(subjectId, topicId, details) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/recycle/subject/${subjectId}/topic/${topicId}/manual_recycle`, details, { withCredentials: true });
    }
    restoreSelectedItemsInSubject(subjectId, details) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/recycle/subject/${subjectId}/items/manual_recycle`, details, { withCredentials: true });
    }
    restoreAllItemsInSubject(subjectId) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/recycle/subject/${subjectId}/items/manual_recycle`, {
            withCredentials: true,
        });
    }
}
RecycleService.ɵfac = function RecycleService_Factory(t) { return new (t || RecycleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
RecycleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RecycleService, factory: RecycleService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 25414:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/transcript-preview/question-types/choice-matrix/choice-matrix.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChoiceMatrixComponent": () => (/* binding */ ChoiceMatrixComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function ChoiceMatrixComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.currentQuestion.item.passageStimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ChoiceMatrixComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 15);
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", option_r3.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ChoiceMatrixComponent_tr_15_td_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChoiceMatrixComponent_tr_15_td_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "bg-soft-success": a0, "bg-soft-danger": a1 }; };
function ChoiceMatrixComponent_tr_15_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChoiceMatrixComponent_tr_15_td_2_span_3_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChoiceMatrixComponent_tr_15_td_2_span_4_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r6.isSelectionCorrect(i_r5, option_r7.value), ctx_r6.isCandidateSelection(i_r5, option_r7.value) && !ctx_r6.isSelectionCorrect(i_r5, option_r7.value)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isCandidateSelection(i_r5, option_r7.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isSelectionCorrect(i_r5, option_r7.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r6.isCandidateSelection(i_r5, option_r7.value));
} }
function ChoiceMatrixComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChoiceMatrixComponent_tr_15_td_2_Template, 6, 7, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stem_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", stem_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.currentQuestion.item.options);
} }
const _c1 = function (a0, a1) { return { "text-success": a0, "text-danger": a1 }; };
class ChoiceMatrixComponent {
    constructor() {
        this.currentQuestion = null;
        this.currentQuestionIndex = 0;
    }
    ngOnInit() { }
    stripSpaceFormat(str) {
        var _a;
        return (_a = str === null || str === void 0 ? void 0 : str.replace(/<p>|<\/p>/g, '').replace(/<\/?br\s*\/?>/gi, '')) === null || _a === void 0 ? void 0 : _a.replace(/<p>|<\/p>/g, '').replace(/&nbsp;/g, ' ');
    }
    isSelectionCorrect(stemIndex, optionValue) {
        var _a, _b;
        if (!((_b = (_a = this.currentQuestion) === null || _a === void 0 ? void 0 : _a.item) === null || _b === void 0 ? void 0 : _b.scoringOption))
            return false;
        return this.currentQuestion.item.scoringOption.answers[stemIndex] === optionValue;
    }
    isCandidateSelection(stemIndex, optionValue) {
        var _a, _b;
        if (!((_b = (_a = this.currentQuestion) === null || _a === void 0 ? void 0 : _a.item_score) === null || _b === void 0 ? void 0 : _b.graded_response))
            return false;
        return this.currentQuestion.item_score.graded_response[stemIndex] === optionValue;
    }
}
ChoiceMatrixComponent.ɵfac = function ChoiceMatrixComponent_Factory(t) { return new (t || ChoiceMatrixComponent)(); };
ChoiceMatrixComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChoiceMatrixComponent, selectors: [["app-choice-matrix"]], inputs: { currentQuestion: "currentQuestion", currentQuestionIndex: "currentQuestionIndex" }, decls: 35, vars: 14, consts: [[1, "card", "border", "border-light", "rounded-3", "p-3"], [1, "fs-6", "fw-bold"], ["class", "mt-2 text-black border-bottom pb-2", "style", "font-size: 1.1rem", 3, "innerHTML", 4, "ngIf"], [1, "mt-2", "text-black", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "row", "my-4"], [1, "col-xl-12"], [1, "table-responsive"], [1, "table", "table-bordered", "align-middle", "table-nowrap", "mb-0"], [1, "bg-light"], [2, "width", "40%"], ["scope", "col", "class", "text-center", 3, "innerHTML", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "align-items-center", "flex-wrap", "gap-2", "my-2", 2, "font-size", "0.895em"], [3, "ngClass"], [1, "mt-2", "text-black", "border-bottom", "pb-2", 2, "font-size", "1.1rem", 3, "innerHTML"], ["scope", "col", 1, "text-center", 3, "innerHTML"], [1, "fw-medium", 3, "innerHTML"], ["class", "text-center", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "text-center", 3, "ngClass"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "d-flex", "align-items-center", "gap-1"], ["class", "badge rounded-pill bg-secondary", "style", "font-size: 0.7em", 4, "ngIf"], ["class", "badge rounded-pill bg-success", "style", "font-size: 0.7em", 4, "ngIf"], ["type", "radio", "disabled", "", 1, "form-check-input", "mt-1", 3, "checked"], [1, "badge", "rounded-pill", "bg-secondary", 2, "font-size", "0.7em"], [1, "badge", "rounded-pill", "bg-success", 2, "font-size", "0.7em"]], template: function ChoiceMatrixComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChoiceMatrixComponent_div_3_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Stems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChoiceMatrixComponent_th_13_Template, 1, 1, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChoiceMatrixComponent_tr_15_Template, 3, 2, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Scoring: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Question Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Candidate Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Penalty Applied? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Pass or Failed:? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question: ", ctx.currentQuestionIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion.item.passageStimulus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.currentQuestion.item.stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentQuestion.item.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentQuestion.item.stems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item.scoringOption.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item_score.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentQuestion.item_score.has_penalty ? "Yes" : "No", " (", ctx.currentQuestion.item.scoringOption.penalty, " MKs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c1, ctx.currentQuestion.item_score.pass_fail_status == "PASS", ctx.currentQuestion.item_score.pass_fail_status == "FAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentQuestion.item_score.pass_fail_status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".bg-soft-success[_ngcontent-%COMP%] {\n  background-color: rgba(10, 191, 115, 0.15) !important;\n}\n.bg-soft-danger[_ngcontent-%COMP%] {\n  background-color: rgba(240, 101, 72, 0.15) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZS1tYXRyaXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBQUE7QUFDQTtFQUNFLHFEQUFBO0FBQ0Y7QUFDQTtFQUNFLHFEQUFBO0FBRUYiLCJmaWxlIjoiY2hvaWNlLW1hdHJpeC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENob2ljZSBNYXRyaXggU3R5bGVzICovXG4uYmctc29mdC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgMTkxLCAxMTUsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG4uYmctc29mdC1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTAxLCA3MiwgMC4xNSkgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 63273:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/transcript-preview/question-types/close-dropdown/close-dropdown.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseDropdownComponent": () => (/* binding */ CloseDropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function CloseDropdownComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.currentQuestion.item.passageStimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0, a1) { return { "text-success": a0, "text-danger": a1 }; };
class CloseDropdownComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.currentQuestion = null;
        this.currentQuestionIndex = 0;
    }
    ngOnInit() {
        this.renderContent();
    }
    renderContent() {
        let content = this.currentQuestion.item.stimulus;
        if (!(content === null || content === void 0 ? void 0 : content.length)) {
            return;
        }
        const parts = content.split('{{response}}');
        for (let i = 0; i < parts.length - 1; i++) {
            const selectHtml = this.createSelectElement(i);
            parts[i] = parts[i] + selectHtml;
        }
        content = parts.join('');
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(content);
    }
    createSelectElement(index) {
        // const options = this.currentQuestion.item.possibleResponses[index].responses;
        const correctAnswer = this.currentQuestion.item.scoringOption.answers[index];
        const selectedAnswer = this.currentQuestion.item_score.graded_response[index];
        const isCorrect = (correctAnswer === null || correctAnswer === void 0 ? void 0 : correctAnswer.trim()) == (selectedAnswer === null || selectedAnswer === void 0 ? void 0 : selectedAnswer.trim());
        let selectHtml = `
        <span class="border border-secondary border-dashed p-1 rounded" style="width:auto; display:inline-block">
          <span style="width:auto; display:inline-block">
            <span class="d-flex flex-column gap-1" >
              <span class="badge rounded-pill bg-secondary ng-star-inserted" style="font-size: 0.7em;">Correct Answer</span>
              <select class="form-select" style="width:auto; display:inline-block">
                <option selected>${correctAnswer}</option>
              </select>
            </span>
          </span>
          <span style="width:auto; display:inline-block">
            <span class="d-flex flex-column gap-1" >
              <span class="badge rounded-pill bg-${isCorrect ? 'success' : 'danger'} ng-star-inserted" style="font-size: 0.7em;">Selected</span>
              <span readonly class="border border-${isCorrect ? 'success' : 'danger'} " style="width:max-content; display:inline-block; padding: 6px">
                ${selectedAnswer}
              </span>
            </span>
          </span>
        </span>
      `;
        return selectHtml;
    }
}
CloseDropdownComponent.ɵfac = function CloseDropdownComponent_Factory(t) { return new (t || CloseDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer)); };
CloseDropdownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CloseDropdownComponent, selectors: [["app-close-dropdown"]], inputs: { currentQuestion: "currentQuestion", currentQuestionIndex: "currentQuestionIndex" }, decls: 24, vars: 12, consts: [[1, "card", "border", "border-light", "rounded-3", "p-3"], [1, "fs-6", "fw-bold"], ["class", "mt-2 text-black border-bottom pb-2", "style", "font-size: 1.1rem", 3, "innerHTML", 4, "ngIf"], [1, "mt-2", "text-black", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "d-flex", "flex-row", "align-items-center", "flex-wrap", "gap-2", "my-2", 2, "font-size", "0.895em"], [3, "ngClass"], [1, "mt-2", "text-black", "border-bottom", "pb-2", 2, "font-size", "1.1rem", 3, "innerHTML"]], template: function CloseDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CloseDropdownComponent_div_3_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Scoring: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Question Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Candidate Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Penalty Applied? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Pass or Failed:? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question: ", ctx.currentQuestionIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion.item.passageStimulus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.sanitizedContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item.scoringOption.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item_score.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentQuestion.item_score.has_penalty ? "Yes" : "No", " (", ctx.currentQuestion.item.scoringOption.penalty, " MKs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx.currentQuestion.item_score.pass_fail_status == "PASS", ctx.currentQuestion.item_score.pass_fail_status == "FAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentQuestion.item_score.pass_fail_status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbG9zZS1kcm9wZG93bi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 49131:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/transcript-preview/question-types/cloze-radio/cloze-radio.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClozeRadioComponent": () => (/* binding */ ClozeRadioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function ClozeRadioComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.currentQuestion.item.passageStimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0, a1) { return { "text-success": a0, "text-danger": a1 }; };
class ClozeRadioComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.currentQuestion = null;
        this.currentQuestionIndex = 0;
        this.showAnswer = false;
    }
    ngOnInit() {
        this.renderContent();
    }
    renderContent() {
        let content = this.currentQuestion.item.stimulus;
        if (!(content === null || content === void 0 ? void 0 : content.length)) {
            return;
        }
        const parts = content.split('{{response}}');
        for (let i = 0; i < parts.length - 1; i++) {
            const selectHtml = this.createSelectBlock(i);
            parts[i] = parts[i] + selectHtml;
        }
        content = parts.join('');
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(content);
    }
    createSelectBlock(index) {
        const options = this.currentQuestion.item.possibleResponses[index].responses;
        const correctAnswer = this.currentQuestion.item.scoringOption.answers[index];
        const selectedAnswer = this.currentQuestion.item_score.graded_response[index];
        const isCorrect = (correctAnswer === null || correctAnswer === void 0 ? void 0 : correctAnswer.trim()) == (selectedAnswer === null || selectedAnswer === void 0 ? void 0 : selectedAnswer.trim());
        const optionHTML = options.map((item, itemIndex) => {
            const option = item;
            const isChecked = this.currentQuestion.item.scoringOption.answers[index] === option;
            return `
          <span style="width:auto; display:inline-block">
            <span class="d-flex flex-column gap-1" >
              ${correctAnswer == option
                ? '<span style="font-size: 0.7em;"  class="badge rounded-pill bg-secondary ng-star-inserted">Correct Answer</span>'
                : ''}
              ${selectedAnswer == option
                ? `<span style="font-size: 0.7em;"  class="badge rounded-pill bg-secondary ng-star-inserted bg-${isCorrect ? 'success' : 'danger'}">Selected</span>`
                : ''}
              <span class="d-flex align-items-center gap-2 rounded-pill bg-white py-2 px-3">
                  ${isChecked
                ? `<input checked type="radio" name="option_${index}" value="${option}" />`
                : `<input type="radio" name="option_${index}" value="${option}" />`}
                  <span>${option}</span>
              </span>
            </span>
          </span>
      `;
        }).join('');
        let selectHtml = `
        <span class="border border-secondary bg-light border-dashed p-1 rounded mb-1 small" style="width:auto; display:inline-flex; align-items:end;gap:1px">${optionHTML}</span>
      `;
        return selectHtml;
    }
}
ClozeRadioComponent.ɵfac = function ClozeRadioComponent_Factory(t) { return new (t || ClozeRadioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer)); };
ClozeRadioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClozeRadioComponent, selectors: [["app-cloze-radio"]], inputs: { currentQuestion: "currentQuestion", currentQuestionIndex: "currentQuestionIndex" }, decls: 24, vars: 12, consts: [[1, "card", "border", "border-light", "rounded-3", "p-3"], [1, "fs-6", "fw-bold"], ["class", "mt-2 text-black border-bottom pb-2", "style", "font-size: 1.1rem", 3, "innerHTML", 4, "ngIf"], [1, "mt-2", "text-black", 2, "font-size", "0.9rem", 3, "innerHTML"], [1, "d-flex", "flex-row", "align-items-center", "flex-wrap", "gap-2", "my-2", 2, "font-size", "0.895em"], [3, "ngClass"], [1, "mt-2", "text-black", "border-bottom", "pb-2", 2, "font-size", "1.1rem", 3, "innerHTML"]], template: function ClozeRadioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ClozeRadioComponent_div_3_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Scoring: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Question Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Candidate Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Penalty Applied? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Pass or Failed:? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question: ", ctx.currentQuestionIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion.item.passageStimulus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.sanitizedContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item.scoringOption.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item_score.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentQuestion.item_score.has_penalty ? "Yes" : "No", " (", ctx.currentQuestion.item.scoringOption.penalty, " MKs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx.currentQuestion.item_score.pass_fail_status == "PASS", ctx.currentQuestion.item_score.pass_fail_status == "FAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentQuestion.item_score.pass_fail_status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbG96ZS1yYWRpby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 62972:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/transcript-preview/question-types/cloze-text/cloze-text.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClozeTextComponent": () => (/* binding */ ClozeTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function ClozeTextComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.currentQuestion.item.passageStimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0, a1) { return { "text-success": a0, "text-danger": a1 }; };
class ClozeTextComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.currentQuestion = null;
        this.currentQuestionIndex = 0;
        this.showAnswer = false;
    }
    ngOnInit() {
        this.renderContent();
    }
    renderContent() {
        let content = this.currentQuestion.item.stimulus;
        if (!(content === null || content === void 0 ? void 0 : content.length)) {
            return;
        }
        const parts = content.split('{{response}}');
        for (let i = 0; i < parts.length - 1; i++) {
            const selectHtml = this.createInputElement(i);
            parts[i] = parts[i] + selectHtml;
        }
        content = parts.join('');
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(content);
    }
    createInputElement(index) {
        const correctAnswer = this.currentQuestion.item.scoringOption.answers[index];
        const selectedAnswer = this.currentQuestion.item_score.graded_response[index];
        const isCorrect = (correctAnswer === null || correctAnswer === void 0 ? void 0 : correctAnswer.trim()) == (selectedAnswer === null || selectedAnswer === void 0 ? void 0 : selectedAnswer.trim());
        let inputs = `
        <span class="border border-secondary border-dashed p-1 rounded" style="width:auto; display:inline-block">
          <span style="width:auto; display:inline-block">
            <span class="d-flex flex-column gap-1" >
              <span class="badge rounded-pill bg-secondary ng-star-inserted" style="font-size: 0.7em;">Correct Answer</span>
              <span class="border borer-secondary" style="width:max-content; display:inline-block; padding: 6px; font-size: 0.7em;">${correctAnswer}</span>
            </span>
          </span>
          <span style="width:auto; display:inline-block"> 
            <span class="d-flex flex-column gap-1" >
              <span class="badge rounded-pill bg-${isCorrect ? 'success' : 'danger'} ng-star-inserted" style="font-size: 0.7em;">Answer</span>
              <span class="border border-${isCorrect ? 'success' : 'danger'} " style="width:max-content; display:inline-block; padding: 6px; font-size: 0.7em;"> ${selectedAnswer}</span>
            </span>
          </span> 
        </span>
      `;
        return inputs;
    }
}
ClozeTextComponent.ɵfac = function ClozeTextComponent_Factory(t) { return new (t || ClozeTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer)); };
ClozeTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClozeTextComponent, selectors: [["app-cloze-text"]], inputs: { currentQuestion: "currentQuestion", currentQuestionIndex: "currentQuestionIndex" }, decls: 24, vars: 12, consts: [[1, "card", "border", "border-light", "rounded-3", "p-3"], [1, "fs-6", "fw-bold"], ["class", "mt-2 text-black border-bottom pb-2", "style", "font-size: 1.1rem", 3, "innerHTML", 4, "ngIf"], [1, "mt-2", "text-black", 2, "font-size", "0.9rem", 3, "innerHTML"], [1, "d-flex", "flex-row", "align-items-center", "flex-wrap", "gap-2", "my-2", 2, "font-size", "0.895em"], [3, "ngClass"], [1, "mt-2", "text-black", "border-bottom", "pb-2", 2, "font-size", "1.1rem", 3, "innerHTML"]], template: function ClozeTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ClozeTextComponent_div_3_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Scoring: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Question Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Candidate Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Penalty Applied? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Pass or Failed:? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question: ", ctx.currentQuestionIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion.item.passageStimulus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.sanitizedContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item.scoringOption.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item_score.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentQuestion.item_score.has_penalty ? "Yes" : "No", " (", ctx.currentQuestion.item.scoringOption.penalty, " MKs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx.currentQuestion.item_score.pass_fail_status == "PASS", ctx.currentQuestion.item_score.pass_fail_status == "FAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item_score.pass_fail_status, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbG96ZS10ZXh0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 49023:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/transcript-preview/question-types/essay/essay.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EssayComponent": () => (/* binding */ EssayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function EssayComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.currentQuestion.item.passageStimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function EssayComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.currentQuestion.item_score.graded_response[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function EssayComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No response submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "text-success": a0, "text-danger": a1 }; };
class EssayComponent {
    constructor() {
        this.currentQuestion = null;
        this.currentQuestionIndex = 0;
    }
    ngOnInit() { }
    stripSpaceFormat(str) {
        var _a;
        return (_a = str === null || str === void 0 ? void 0 : str.replace(/<p>|<\/p>/g, '').replace(/<\/?br\s*\/?>/gi, '')) === null || _a === void 0 ? void 0 : _a.replace(/<p>|<\/p>/g, '').replace(/&nbsp;/g, ' ');
    }
}
EssayComponent.ɵfac = function EssayComponent_Factory(t) { return new (t || EssayComponent)(); };
EssayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EssayComponent, selectors: [["app-essay"]], inputs: { currentQuestion: "currentQuestion", currentQuestionIndex: "currentQuestionIndex" }, decls: 30, vars: 14, consts: [[1, "card", "border", "border-light", "rounded-3", "p-3"], [1, "fs-6", "fw-bold"], ["class", "mt-2 text-black border-bottom pb-2", "style", "font-size: 1.1rem", 3, "innerHTML", 4, "ngIf"], [1, "mt-2", "text-black", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "d-flex", "flex-column", "my-4", "gap-2"], [1, "fs-6", "fw-bold", "text-muted"], [1, "card", "border", "border-gray", "m-0", "p-3", "bg-light", 2, "min-height", "100px", "font-size", "1.0rem"], [3, "innerHTML", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "d-flex", "flex-row", "align-items-center", "flex-wrap", "gap-2", "my-2", 2, "font-size", "0.895em"], [3, "ngClass"], [1, "mt-2", "text-black", "border-bottom", "pb-2", 2, "font-size", "1.1rem", 3, "innerHTML"], [3, "innerHTML"], [1, "text-muted"]], template: function EssayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EssayComponent_div_3_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Candidate Response:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EssayComponent_div_9_Template, 1, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EssayComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Scoring: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Question Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Candidate Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Penalty Applied? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Pass or Failed:? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question: ", ctx.currentQuestionIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion.item.passageStimulus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.currentQuestion.item.stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion.item_score.graded_response == null ? null : ctx.currentQuestion.item_score.graded_response[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.currentQuestion.item_score.graded_response == null ? null : ctx.currentQuestion.item_score.graded_response[0]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item.scoringOption.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item_score.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentQuestion.item_score.has_penalty ? "Yes" : "No", " (", ctx.currentQuestion.item.scoringOption.penalty, " MKs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx.currentQuestion.item_score.pass_fail_status == "PASS", ctx.currentQuestion.item_score.pass_fail_status == "FAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentQuestion.item_score.pass_fail_status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzc2F5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBIiwiZmlsZSI6ImVzc2F5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRXNzYXkgU3R5bGVzICovXG4iXX0= */"] });


/***/ }),

/***/ 23577:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/transcript-preview/question-types/label-image-drag-and-drop/label-image-drag-and-drop.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelImageDragAndDropComponent": () => (/* binding */ LabelImageDragAndDropComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function LabelImageDragAndDropComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.currentQuestion.item.passageStimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0, a1) { return { "border-success text-success fw-bold": a0, "border-danger text-danger fw-bold": a1 }; };
function LabelImageDragAndDropComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", position_r2.x, "%")("top", position_r2.y, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx_r1.isAnswerCorrect(i_r3), !ctx_r1.isAnswerCorrect(i_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getCandidateLabel(i_r3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Correct: ", ctx_r1.getCorrectLabel(i_r3), " ");
} }
const _c1 = function (a0, a1) { return { "text-success": a0, "text-danger": a1 }; };
class LabelImageDragAndDropComponent {
    constructor() {
        this.currentQuestion = null;
        this.currentQuestionIndex = 0;
    }
    ngOnInit() { }
    isAnswerCorrect(index) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!((_a = this.currentQuestion) === null || _a === void 0 ? void 0 : _a.item_score) || !((_c = (_b = this.currentQuestion) === null || _b === void 0 ? void 0 : _b.item) === null || _c === void 0 ? void 0 : _c.scoringOption)) {
            return false;
        }
        const candidateAnswer = ((_e = (_d = this.currentQuestion.item_score.graded_response) === null || _d === void 0 ? void 0 : _d[index]) === null || _e === void 0 ? void 0 : _e.trim()) || '';
        const correctAnswer = ((_g = (_f = this.currentQuestion.item.scoringOption.answers) === null || _f === void 0 ? void 0 : _f[index]) === null || _g === void 0 ? void 0 : _g.trim()) || '';
        return candidateAnswer === correctAnswer;
    }
    getCorrectLabel(index) {
        var _a, _b, _c, _d, _e;
        if (!((_b = (_a = this.currentQuestion) === null || _a === void 0 ? void 0 : _a.item) === null || _b === void 0 ? void 0 : _b.options) || !((_d = (_c = this.currentQuestion) === null || _c === void 0 ? void 0 : _c.item) === null || _d === void 0 ? void 0 : _d.scoringOption))
            return 'N/A';
        const correctAnswerVal = (_e = this.currentQuestion.item.scoringOption.answers) === null || _e === void 0 ? void 0 : _e[index];
        const optionObj = this.currentQuestion.item.options.find(opt => opt.value === correctAnswerVal);
        return optionObj ? optionObj.label : (correctAnswerVal || 'N/A');
    }
    getCandidateLabel(index) {
        var _a, _b, _c, _d;
        if (!((_b = (_a = this.currentQuestion) === null || _a === void 0 ? void 0 : _a.item) === null || _b === void 0 ? void 0 : _b.options) || !((_c = this.currentQuestion) === null || _c === void 0 ? void 0 : _c.item_score))
            return 'No Selection';
        const candidateVal = (_d = this.currentQuestion.item_score.graded_response) === null || _d === void 0 ? void 0 : _d[index];
        const optionObj = this.currentQuestion.item.options.find(opt => opt.value === candidateVal);
        return optionObj ? optionObj.label : (candidateVal || 'No Selection');
    }
}
LabelImageDragAndDropComponent.ɵfac = function LabelImageDragAndDropComponent_Factory(t) { return new (t || LabelImageDragAndDropComponent)(); };
LabelImageDragAndDropComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LabelImageDragAndDropComponent, selectors: [["app-label-image-drag-and-drop"]], inputs: { currentQuestion: "currentQuestion", currentQuestionIndex: "currentQuestionIndex" }, decls: 29, vars: 22, consts: [[1, "card", "border", "border-light", "rounded-3", "p-3"], [1, "fs-6", "fw-bold"], ["class", "mt-2 text-black border-bottom pb-2", "style", "font-size: 1.1rem", 3, "innerHTML", 4, "ngIf"], [1, "mt-2", "text-black", "mb-3", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "preview-container", "mb-4", "position-relative", "border"], ["alt", "Label Image Drag and Drop", 1, "preview-image", 3, "src"], [2, "width", "100%", "height", "100%", "position", "absolute", "top", "0", "left", "0"], [2, "position", "relative", "width", "100%", "height", "100%"], ["class", "preview-label d-flex align-items-center", 3, "left", "top", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "align-items-center", "flex-wrap", "gap-2", "my-2", 2, "font-size", "0.895em"], [3, "ngClass"], [1, "mt-2", "text-black", "border-bottom", "pb-2", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "preview-label", "d-flex", "align-items-center"], [1, "pointer"], [1, "d-flex", "flex-column", "align-items-start", 2, "z-index", "10"], [1, "form-control", "form-control-sm", "bg-white", "text-center", "d-flex", "align-items-center", "justify-content-center", 2, "width", "140px", "height", "32px", "border-style", "dashed", "font-size", "0.85em", 3, "ngClass"], [1, "badge", "bg-success", "mt-1", "text-wrap", 2, "font-size", "0.75em", "width", "140px", "text-align", "left"]], template: function LabelImageDragAndDropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LabelImageDragAndDropComponent_div_3_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LabelImageDragAndDropComponent_div_9_Template, 7, 10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Scoring: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Question Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Candidate Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Penalty Applied? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Pass or Failed:? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question: ", ctx.currentQuestionIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion.item.passageStimulus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.currentQuestion.item.stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", (ctx.currentQuestion.item.images[0] == null ? null : ctx.currentQuestion.item.images[0].height) || 400, "px")("max-width", (ctx.currentQuestion.item.images[0] == null ? null : ctx.currentQuestion.item.images[0].width) || 600, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", (ctx.currentQuestion.item.images[0] == null ? null : ctx.currentQuestion.item.images[0].width) || 600, "px")("height", (ctx.currentQuestion.item.images[0] == null ? null : ctx.currentQuestion.item.images[0].height) || 400, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentQuestion.item.images[0] == null ? null : ctx.currentQuestion.item.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentQuestion.item.responsePositions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item.scoringOption.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item_score.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentQuestion.item_score.has_penalty ? "Yes" : "No", " (", ctx.currentQuestion.item.scoringOption.penalty, " MKs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c1, ctx.currentQuestion.item_score.pass_fail_status == "PASS", ctx.currentQuestion.item_score.pass_fail_status == "FAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentQuestion.item_score.pass_fail_status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".preview-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.preview-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.preview-label[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-transform: translate(-10px, -50%);\n          transform: translate(-10px, -50%);\n}\n\n.pointer[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 20px;\n  background-image: url(/assets/images/svg/left-arrow.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.form-control-sm[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhYmVsLWltYWdlLWRyYWctYW5kLWRyb3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdEQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJsYWJlbC1pbWFnZS1kcmFnLWFuZC1kcm9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXctY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJldmlldy1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5wcmV2aWV3LWxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIC01MCUpO1xyXG59XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgd2lkdGg6IDMxcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9zdmcvbGVmdC1hcnJvdy5zdmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXNtIHtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 61794:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/transcript-preview/question-types/label-image-with-dropdown/label-image-with-dropdown.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelImageWithDropdownComponent": () => (/* binding */ LabelImageWithDropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function LabelImageWithDropdownComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.currentQuestion.item.passageStimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0, a1) { return { "border-success text-success": a0, "border-danger text-danger": a1 }; };
function LabelImageWithDropdownComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", position_r2.x, "%")("top", position_r2.y, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx_r1.isAnswerCorrect(i_r3), !ctx_r1.isAnswerCorrect(i_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r1.currentQuestion.item_score.graded_response == null ? null : ctx_r1.currentQuestion.item_score.graded_response[i_r3]) || "No Selection");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Correct: ", ctx_r1.currentQuestion.item.scoringOption.answers[i_r3] || "N/A", " ");
} }
const _c1 = function (a0, a1) { return { "text-success": a0, "text-danger": a1 }; };
class LabelImageWithDropdownComponent {
    constructor() {
        this.currentQuestion = null;
        this.currentQuestionIndex = 0;
    }
    ngOnInit() { }
    isAnswerCorrect(index) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!((_a = this.currentQuestion) === null || _a === void 0 ? void 0 : _a.item_score) || !((_c = (_b = this.currentQuestion) === null || _b === void 0 ? void 0 : _b.item) === null || _c === void 0 ? void 0 : _c.scoringOption)) {
            return false;
        }
        const candidateAnswer = ((_e = (_d = this.currentQuestion.item_score.graded_response) === null || _d === void 0 ? void 0 : _d[index]) === null || _e === void 0 ? void 0 : _e.trim()) || '';
        const correctAnswer = ((_g = (_f = this.currentQuestion.item.scoringOption.answers) === null || _f === void 0 ? void 0 : _f[index]) === null || _g === void 0 ? void 0 : _g.trim()) || '';
        return candidateAnswer === correctAnswer;
    }
}
LabelImageWithDropdownComponent.ɵfac = function LabelImageWithDropdownComponent_Factory(t) { return new (t || LabelImageWithDropdownComponent)(); };
LabelImageWithDropdownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LabelImageWithDropdownComponent, selectors: [["app-label-image-with-dropdown"]], inputs: { currentQuestion: "currentQuestion", currentQuestionIndex: "currentQuestionIndex" }, decls: 29, vars: 22, consts: [[1, "card", "border", "border-light", "rounded-3", "p-3"], [1, "fs-6", "fw-bold"], ["class", "mt-2 text-black border-bottom pb-2", "style", "font-size: 1.1rem", 3, "innerHTML", 4, "ngIf"], [1, "mt-2", "text-black", "mb-3", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "preview-container", "mb-4", "position-relative", "border"], ["alt", "Label Image with dropdown", 1, "preview-image", 3, "src"], [2, "width", "100%", "height", "100%", "position", "absolute", "top", "0", "left", "0"], [2, "position", "relative", "width", "100%", "height", "100%"], ["class", "preview-label d-flex align-items-center", 3, "left", "top", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "align-items-center", "flex-wrap", "gap-2", "my-2", 2, "font-size", "0.895em"], [3, "ngClass"], [1, "mt-2", "text-black", "border-bottom", "pb-2", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "preview-label", "d-flex", "align-items-center"], [1, "pointer"], [1, "d-flex", "flex-column", "align-items-start", 2, "z-index", "10"], ["disabled", "", 1, "form-select", "form-select-sm", "bg-white", 2, "width", "140px", 3, "ngClass"], ["selected", ""], [1, "badge", "bg-success", "mt-1", "text-wrap", 2, "font-size", "0.75em", "width", "140px", "text-align", "left"]], template: function LabelImageWithDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LabelImageWithDropdownComponent_div_3_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LabelImageWithDropdownComponent_div_9_Template, 8, 10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Scoring: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Question Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Candidate Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Penalty Applied? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Pass or Failed:? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question: ", ctx.currentQuestionIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion.item.passageStimulus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.currentQuestion.item.stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", (ctx.currentQuestion.item.images[0] == null ? null : ctx.currentQuestion.item.images[0].height) || 400, "px")("max-width", (ctx.currentQuestion.item.images[0] == null ? null : ctx.currentQuestion.item.images[0].width) || 600, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", (ctx.currentQuestion.item.images[0] == null ? null : ctx.currentQuestion.item.images[0].width) || 600, "px")("height", (ctx.currentQuestion.item.images[0] == null ? null : ctx.currentQuestion.item.images[0].height) || 400, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentQuestion.item.images[0] == null ? null : ctx.currentQuestion.item.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentQuestion.item.responsePositions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item.scoringOption.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item_score.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentQuestion.item_score.has_penalty ? "Yes" : "No", " (", ctx.currentQuestion.item.scoringOption.penalty, " MKs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c1, ctx.currentQuestion.item_score.pass_fail_status == "PASS", ctx.currentQuestion.item_score.pass_fail_status == "FAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentQuestion.item_score.pass_fail_status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".preview-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.preview-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.preview-label[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-transform: translate(-10px, -50%);\n          transform: translate(-10px, -50%);\n}\n\n.pointer[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 20px;\n  background-image: url(/assets/images/svg/left-arrow.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.form-control-sm[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhYmVsLWltYWdlLXdpdGgtZHJvcGRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdEQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJsYWJlbC1pbWFnZS13aXRoLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXctY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJldmlldy1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5wcmV2aWV3LWxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIC01MCUpO1xyXG59XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgd2lkdGg6IDMxcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9zdmcvbGVmdC1hcnJvdy5zdmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXNtIHtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 12812:
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/transcript-preview/question-types/label-image-with-text/label-image-with-text.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelImageWithTextComponent": () => (/* binding */ LabelImageWithTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function LabelImageWithTextComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.currentQuestion.item.passageStimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0, a1) { return { "border-success text-success": a0, "border-danger text-danger": a1 }; };
function LabelImageWithTextComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", position_r2.x, "%")("top", position_r2.y, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", (ctx_r1.currentQuestion.item_score.graded_response == null ? null : ctx_r1.currentQuestion.item_score.graded_response[i_r3]) || "")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx_r1.isAnswerCorrect(i_r3), !ctx_r1.isAnswerCorrect(i_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Correct: ", ctx_r1.currentQuestion.item.scoringOption.answers[i_r3] || "N/A", " ");
} }
const _c1 = function (a0, a1) { return { "text-success": a0, "text-danger": a1 }; };
class LabelImageWithTextComponent {
    constructor() {
        this.currentQuestion = null;
        this.currentQuestionIndex = 0;
    }
    ngOnInit() { }
    isAnswerCorrect(index) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!((_a = this.currentQuestion) === null || _a === void 0 ? void 0 : _a.item_score) || !((_c = (_b = this.currentQuestion) === null || _b === void 0 ? void 0 : _b.item) === null || _c === void 0 ? void 0 : _c.scoringOption)) {
            return false;
        }
        const candidateAnswer = ((_e = (_d = this.currentQuestion.item_score.graded_response) === null || _d === void 0 ? void 0 : _d[index]) === null || _e === void 0 ? void 0 : _e.trim()) || '';
        const correctAnswer = ((_g = (_f = this.currentQuestion.item.scoringOption.answers) === null || _f === void 0 ? void 0 : _f[index]) === null || _g === void 0 ? void 0 : _g.trim()) || '';
        if (this.currentQuestion.item.caseSensitive) {
            return candidateAnswer === correctAnswer;
        }
        return candidateAnswer.toLowerCase() === correctAnswer.toLowerCase();
    }
}
LabelImageWithTextComponent.ɵfac = function LabelImageWithTextComponent_Factory(t) { return new (t || LabelImageWithTextComponent)(); };
LabelImageWithTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LabelImageWithTextComponent, selectors: [["app-label-image-with-text"]], inputs: { currentQuestion: "currentQuestion", currentQuestionIndex: "currentQuestionIndex" }, decls: 29, vars: 22, consts: [[1, "card", "border", "border-light", "rounded-3", "p-3"], [1, "fs-6", "fw-bold"], ["class", "mt-2 text-black border-bottom pb-2", "style", "font-size: 1.1rem", 3, "innerHTML", 4, "ngIf"], [1, "mt-2", "text-black", "mb-3", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "preview-container", "mb-4", "position-relative", "border"], ["alt", "Label image with Text", 1, "preview-image", 3, "src"], [2, "width", "100%", "height", "100%", "position", "absolute", "top", "0", "left", "0"], [2, "position", "relative", "width", "100%", "height", "100%"], ["class", "preview-label d-flex align-items-center", 3, "left", "top", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "align-items-center", "flex-wrap", "gap-2", "my-2", 2, "font-size", "0.895em"], [3, "ngClass"], [1, "mt-2", "text-black", "border-bottom", "pb-2", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "preview-label", "d-flex", "align-items-center"], [1, "pointer"], [1, "d-flex", "flex-column", "align-items-start", 2, "z-index", "10"], ["type", "text", "disabled", "", 1, "form-control", "form-control-sm", "bg-white", 2, "width", "130px", 3, "value", "ngClass"], [1, "badge", "bg-success", "mt-1", "text-wrap", 2, "font-size", "0.75em", "width", "130px", "text-align", "left"]], template: function LabelImageWithTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LabelImageWithTextComponent_div_3_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LabelImageWithTextComponent_div_9_Template, 6, 10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Scoring: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Question Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Candidate Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Penalty Applied? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Pass or Failed:? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question: ", ctx.currentQuestionIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion.item.passageStimulus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.currentQuestion.item.stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", (ctx.currentQuestion.item.images[0] == null ? null : ctx.currentQuestion.item.images[0].height) || 400, "px")("max-width", (ctx.currentQuestion.item.images[0] == null ? null : ctx.currentQuestion.item.images[0].width) || 600, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", (ctx.currentQuestion.item.images[0] == null ? null : ctx.currentQuestion.item.images[0].width) || 600, "px")("height", (ctx.currentQuestion.item.images[0] == null ? null : ctx.currentQuestion.item.images[0].height) || 400, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentQuestion.item.images[0] == null ? null : ctx.currentQuestion.item.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentQuestion.item.responsePositions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item.scoringOption.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item_score.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentQuestion.item_score.has_penalty ? "Yes" : "No", " (", ctx.currentQuestion.item.scoringOption.penalty, " MKs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c1, ctx.currentQuestion.item_score.pass_fail_status == "PASS", ctx.currentQuestion.item_score.pass_fail_status == "FAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentQuestion.item_score.pass_fail_status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".preview-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.preview-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.preview-label[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-transform: translate(-10px, -50%);\n          transform: translate(-10px, -50%);\n}\n\n.pointer[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 20px;\n  background-image: url(/assets/images/svg/left-arrow.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.form-control-sm[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhYmVsLWltYWdlLXdpdGgtdGV4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0RBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImxhYmVsLWltYWdlLXdpdGgtdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByZXZpZXctaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4ucHJldmlldy1sYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAtNTAlKTtcclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gIHdpZHRoOiAzMXB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvc3ZnL2xlZnQtYXJyb3cuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1zbSB7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 40840:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/transcript-preview/question-types/matching/matching.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchingComponent": () => (/* binding */ MatchingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);



const _c0 = ["wrapper"];
const _c1 = ["leftBox"];
const _c2 = ["rightBox"];
function MatchingComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.currentQuestion.item.passageStimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MatchingComponent_div_0__svg_line_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "line", 17);
} if (rf & 2) {
    const line_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", line_r6.x1)("y1", line_r6.y1)("x2", line_r6.x2)("y2", line_r6.y2);
} }
function MatchingComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stem_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", stem_r7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MatchingComponent_div_0_div_14_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Incorrect position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MatchingComponent_div_0_div_14_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Correct position is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resp_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.getCorrectPosition(resp_r10) + 1);
} }
function MatchingComponent_div_0_div_14_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Correct position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function (a0, a1) { return { "border-danger": a0, "border-success": a1 }; };
function MatchingComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatchingComponent_div_0_div_14_span_3_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatchingComponent_div_0_div_14_span_4_Template, 4, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatchingComponent_div_0_div_14_span_5_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resp_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c3, resp_r10 !== ctx_r5.currentQuestion.item.scoringOption.answers[i_r11], resp_r10 == ctx_r5.currentQuestion.item.scoringOption.answers[i_r11]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", resp_r10 !== ctx_r5.currentQuestion.item.scoringOption.answers[i_r11]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", resp_r10 !== ctx_r5.currentQuestion.item.scoringOption.answers[i_r11]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", resp_r10 == ctx_r5.currentQuestion.item.scoringOption.answers[i_r11]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", (tmp_4_0 = ctx_r5.getOption(resp_r10)) == null ? null : tmp_4_0.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c4 = function (a0, a1) { return { "text-success": a0, "text-danger": a1 }; };
function MatchingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatchingComponent_div_0_div_3_Template, 1, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MatchingComponent_div_0__svg_line_9_Template, 1, 4, "line", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MatchingComponent_div_0_div_12_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MatchingComponent_div_0_div_14_Template, 10, 8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Scoring: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Question Score: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Candidate Score: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Penalty Applied? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Pass or Failed:? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question: ", ctx_r0.currentQuestionIndex, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentQuestion.item.passageStimulus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.currentQuestion.item.stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.lines);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.currentQuestion.item.stems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.currentQuestion.item_score.graded_response);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.currentQuestion.item.scoringOption.score, " (Mks) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.currentQuestion.item_score.score, " (Mks) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.currentQuestion.item_score.has_penalty ? "Yes" : "No", " (", ctx_r0.currentQuestion.item.scoringOption.penalty, " MKs)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c4, ctx_r0.currentQuestion.item_score.pass_fail_status == "PASS", ctx_r0.currentQuestion.item_score.pass_fail_status == "FAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currentQuestion.item_score.pass_fail_status);
} }
class MatchingComponent {
    constructor() {
        this.currentQuestion = null;
        this.currentQuestionIndex = 0;
        this.lines = [];
    }
    ngOnInit() { }
    getOption(resp) {
        return this.currentQuestion.item.options.find(item => item.value == resp);
    }
    getCorrectPosition(resp) {
        return this.currentQuestion.item.scoringOption.answers.findIndex(item => item == resp);
    }
    ngAfterViewInit() {
        setTimeout(() => this.updateLines());
    }
    updateLines() {
        var _a;
        if (!((_a = this.wrapper) === null || _a === void 0 ? void 0 : _a.nativeElement))
            return;
        const wrapperRect = this.wrapper.nativeElement.getBoundingClientRect();
        this.lines = this.leftBoxes.map((leftRef, i) => {
            const rightRef = this.rightBoxes.toArray()[i];
            const lRect = leftRef.nativeElement.getBoundingClientRect();
            const rRect = rightRef ? rightRef.nativeElement.getBoundingClientRect() : null;
            return {
                x1: lRect.right - wrapperRect.left,
                y1: lRect.top - wrapperRect.top + lRect.height / 2,
                x2: rRect ? rRect.left - wrapperRect.left : 0,
                y2: rRect ? rRect.top - wrapperRect.top + rRect.height / 2 : 0,
            };
        });
    }
}
MatchingComponent.ɵfac = function MatchingComponent_Factory(t) { return new (t || MatchingComponent)(); };
MatchingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatchingComponent, selectors: [["app-matching"]], viewQuery: function MatchingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.leftBoxes = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rightBoxes = _t);
    } }, inputs: { currentQuestion: "currentQuestion", currentQuestionIndex: "currentQuestionIndex" }, decls: 1, vars: 1, consts: [["class", "card border border-light rounded-3 p-3", 4, "ngIf"], [1, "card", "border", "border-light", "rounded-3", "p-3"], [1, "fs-6", "fw-bold"], ["class", "mt-2 text-black border-bottom pb-2", "style", "font-size: 1.1rem", 3, "innerHTML", 4, "ngIf"], [1, "mt-2", "text-black", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "my-4"], [1, "position-relative", "bg-light", "p-3"], ["wrapper", ""], [1, "position-absolute", "top-0", "start-0", "w-100", "h-100", "pointer-events-none"], ["stroke", "black", "stroke-width", "3", "stroke-linecap", "round", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-6"], ["class", "p-3 mb-3 bg-white rounded border", "style", "position: relative;", 4, "ngFor", "ngForOf"], ["class", "p-3 mb-3 bg-white rounded", "style", "position: relative;min-height: 70px;", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "align-items-center", "flex-wrap", "gap-2", "my-2", 2, "font-size", "0.895em"], [3, "ngClass"], [1, "mt-2", "text-black", "border-bottom", "pb-2", 2, "font-size", "1.1rem", 3, "innerHTML"], ["stroke", "black", "stroke-width", "3", "stroke-linecap", "round"], [1, "p-3", "mb-3", "bg-white", "rounded", "border", 2, "position", "relative"], ["leftBox", ""], [3, "innerHTML"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "position", "absolute", "top", "0", "right", "0", "height", "100%", "width", "max-content"], [1, "rounded-circle", "border", "bg-white", 2, "width", "20px", "height", "20px", "transform", "translateX(10px)"], [1, "p-3", "mb-3", "bg-white", "rounded", 2, "position", "relative", "min-height", "70px", 3, "ngClass"], ["rightBox", ""], [1, "mb-1", "d-flex", "gap-1"], ["class", "badge rounded-pill bg-danger", "style", "font-size: 0.7em", 4, "ngIf"], ["class", "badge rounded-pill bg-secondary", "style", "font-size: 0.7em", 4, "ngIf"], ["class", "badge rounded-pill bg-success", "style", "font-size: 0.7em", 4, "ngIf"], [1, "cursor-move"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "position", "absolute", "top", "0", "left", "0", "height", "100%", "width", "max-content"], [1, "rounded-circle", "border", "bg-white", 2, "width", "20px", "height", "20px", "transform", "translateX(-10px)"], [1, "badge", "rounded-pill", "bg-danger", 2, "font-size", "0.7em"], [1, "badge", "rounded-pill", "bg-secondary", 2, "font-size", "0.7em"], [1, "badge", "rounded-pill", "bg-success", 2, "font-size", "0.7em"]], template: function MatchingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatchingComponent_div_0_Template, 34, 15, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXRjaGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 54903:
/*!******************************************************************************!*\
  !*** ./src/app/pages/transcript-preview/question-types/mcq/mcq.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "McqComponent": () => (/* binding */ McqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function McqComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.currentQuestion.item.passageStimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function McqComponent_div_6_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function McqComponent_div_6_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function McqComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, McqComponent_div_6_div_1_span_1_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McqComponent_div_6_div_1_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.value == ctx_r4.currentQuestion.item_score.graded_response[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.value == ctx_r4.currentQuestion.item.scoringOption.answers[0]);
} }
const _c0 = function (a0, a1, a2) { return { "border-danger": a0, "border-success": a1, "border-gray": a2 }; };
function McqComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, McqComponent_div_6_div_1_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, item_r2.value == ctx_r1.currentQuestion.item_score.graded_response[0] && ctx_r1.currentQuestion.item_score.graded_response[0] !== ctx_r1.currentQuestion.item.scoringOption.answers[0], ctx_r1.currentQuestion.item.scoringOption.answers[0] == item_r2.value, ctx_r1.currentQuestion.item.scoringOption.answers[0] !== item_r2.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.value == ctx_r1.currentQuestion.item_score.graded_response[0] || item_r2.value == ctx_r1.currentQuestion.item.scoringOption.answers[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.stripSpaceFormat(item_r2.label), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c1 = function (a0, a1) { return { "text-success": a0, "text-danger": a1 }; };
class McqComponent {
    constructor() {
        this.currentQuestion = null;
        this.currentQuestionIndex = 0;
    }
    ngOnInit() {
    }
    stripSpaceFormat(str) {
        var _a;
        return (_a = str === null || str === void 0 ? void 0 : str.replace(/<p>|<\/p>/g, '').replace(/<\/?br\s*\/?>/gi, '')) === null || _a === void 0 ? void 0 : _a.replace(/<p>|<\/p>/g, '').replace(/&nbsp;/g, ' ');
    }
}
McqComponent.ɵfac = function McqComponent_Factory(t) { return new (t || McqComponent)(); };
McqComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: McqComponent, selectors: [["mcq"]], inputs: { currentQuestion: "currentQuestion", currentQuestionIndex: "currentQuestionIndex" }, decls: 26, vars: 13, consts: [[1, "card", "border", "border-light", "rounded-3", "p-3"], [1, "fs-6", "fw-bold"], ["class", "mt-2 text-black border-bottom pb-2", "style", "font-size: 1.1rem", 3, "innerHTML", 4, "ngIf"], [1, "mt-2", "text-black", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "d-flex", "flex-column", "my-4", "gap-1"], ["class", "card border m-0", "style", "padding: 10px", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "align-items-center", "flex-wrap", "gap-2", "my-2", 2, "font-size", "0.895em"], [3, "ngClass"], [1, "mt-2", "text-black", "border-bottom", "pb-2", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "card", "border", "m-0", 2, "padding", "10px", 3, "ngClass"], ["class", "mb-1 d-flex flex-col gap-1", 4, "ngIf"], [1, "p-0", "item-label", 2, "font-size", "1.0rem", 3, "innerHTML"], [1, "mb-1", "d-flex", "flex-col", "gap-1"], ["class", "badge rounded-pill bg-secondary", "style", "font-size: 0.7em", 4, "ngIf"], ["class", "badge rounded-pill bg-success", "style", "font-size: 0.7em", 4, "ngIf"], [1, "badge", "rounded-pill", "bg-secondary", 2, "font-size", "0.7em"], [1, "badge", "rounded-pill", "bg-success", 2, "font-size", "0.7em"]], template: function McqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, McqComponent_div_3_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, McqComponent_div_6_Template, 3, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Scoring: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Question Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Candidate Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Penalty Applied? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Pass or Failed:? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question: ", ctx.currentQuestionIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion.item.passageStimulus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.currentQuestion.item.stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentQuestion.item.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item.scoringOption.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item_score.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentQuestion.item_score.has_penalty ? "Yes" : "No", " (", ctx.currentQuestion.item.scoringOption.penalty, " MKs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, ctx.currentQuestion.item_score.pass_fail_status == "PASS", ctx.currentQuestion.item_score.pass_fail_status == "FAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentQuestion.item_score.pass_fail_status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtY3EuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 23536:
/*!******************************************************************************!*\
  !*** ./src/app/pages/transcript-preview/question-types/mrq/mrq.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MrqComponent": () => (/* binding */ MrqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function MrqComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.currentQuestion.item.passageStimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MrqComponent_div_6_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MrqComponent_div_6_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MrqComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MrqComponent_div_6_div_1_span_1_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MrqComponent_div_6_div_1_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isResponseSelected(item_r2.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isAnswerCorrect(item_r2.value));
} }
const _c0 = function (a0, a1, a2) { return { "border-danger": a0, "border-success": a1, "border-gray": a2 }; };
function MrqComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MrqComponent_div_6_div_1_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, ctx_r1.isResponseSelected(item_r2.value) && !ctx_r1.isAnswerCorrect(item_r2.value), ctx_r1.isAnswerCorrect(item_r2.value), !ctx_r1.isResponseSelected(item_r2.value) && !ctx_r1.isAnswerCorrect(item_r2.value)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isResponseSelected(item_r2.value) || ctx_r1.isAnswerCorrect(item_r2.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.stripSpaceFormat(item_r2.label), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c1 = function (a0, a1) { return { "text-success": a0, "text-danger": a1 }; };
class MrqComponent {
    constructor() {
        this.currentQuestion = null;
        this.currentQuestionIndex = 0;
    }
    stripSpaceFormat(str) {
        var _a;
        return (_a = str === null || str === void 0 ? void 0 : str.replace(/<p>|<\/p>/g, '').replace(/<\/?br\s*\/?>/gi, '')) === null || _a === void 0 ? void 0 : _a.replace(/<p>|<\/p>/g, '').replace(/&nbsp;/g, ' ');
    }
    isResponseSelected(value) {
        var _a, _b, _c, _d;
        return (_d = (_c = (_b = (_a = this.currentQuestion) === null || _a === void 0 ? void 0 : _a.item_score) === null || _b === void 0 ? void 0 : _b.graded_response) === null || _c === void 0 ? void 0 : _c.includes(value)) !== null && _d !== void 0 ? _d : false;
    }
    isAnswerCorrect(value) {
        var _a, _b, _c, _d, _e;
        return (_e = (_d = (_c = (_b = (_a = this.currentQuestion) === null || _a === void 0 ? void 0 : _a.item) === null || _b === void 0 ? void 0 : _b.scoringOption) === null || _c === void 0 ? void 0 : _c.answers) === null || _d === void 0 ? void 0 : _d.includes(value)) !== null && _e !== void 0 ? _e : false;
    }
}
MrqComponent.ɵfac = function MrqComponent_Factory(t) { return new (t || MrqComponent)(); };
MrqComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MrqComponent, selectors: [["app-mrq"]], inputs: { currentQuestion: "currentQuestion", currentQuestionIndex: "currentQuestionIndex" }, decls: 26, vars: 13, consts: [[1, "card", "border", "border-light", "rounded-3", "p-3"], [1, "fs-6", "fw-bold"], ["class", "mt-2 text-black border-bottom pb-2", "style", "font-size: 1.1rem", 3, "innerHTML", 4, "ngIf"], [1, "mt-2", "text-black", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "d-flex", "flex-column", "my-4", "gap-1"], ["class", "card border m-0", "style", "padding: 10px", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "align-items-center", "flex-wrap", "gap-2", "my-2", 2, "font-size", "0.895em"], [3, "ngClass"], [1, "mt-2", "text-black", "border-bottom", "pb-2", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "card", "border", "m-0", 2, "padding", "10px", 3, "ngClass"], ["class", "mb-1 d-flex flex-col gap-1", 4, "ngIf"], [1, "p-0", "item-label", 2, "font-size", "1.0rem", 3, "innerHTML"], [1, "mb-1", "d-flex", "flex-col", "gap-1"], ["class", "badge rounded-pill bg-secondary", "style", "font-size: 0.7em", 4, "ngIf"], ["class", "badge rounded-pill bg-success", "style", "font-size: 0.7em", 4, "ngIf"], [1, "badge", "rounded-pill", "bg-secondary", 2, "font-size", "0.7em"], [1, "badge", "rounded-pill", "bg-success", 2, "font-size", "0.7em"]], template: function MrqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MrqComponent_div_3_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MrqComponent_div_6_Template, 3, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Scoring: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Question Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Candidate Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Penalty Applied? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Pass or Failed:? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question: ", ctx.currentQuestionIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion.item.passageStimulus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.currentQuestion.item.stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentQuestion.item.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item.scoringOption.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item_score.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentQuestion.item_score.has_penalty ? "Yes" : "No", " (", ctx.currentQuestion.item.scoringOption.penalty, " MKs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, ctx.currentQuestion.item_score.pass_fail_status == "PASS", ctx.currentQuestion.item_score.pass_fail_status == "FAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentQuestion.item_score.pass_fail_status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtcnEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 85518:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/transcript-preview/question-types/ordering/ordering.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderingComponent": () => (/* binding */ OrderingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function OrderingComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.currentQuestion.item.passageStimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function OrderingComponent_div_12_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Incorrect position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderingComponent_div_12_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Correct position is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.getCorrectPosition(value_r3) + 1);
} }
function OrderingComponent_div_12_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " correct position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "border-danger": a0, "border-success": a1 }; };
function OrderingComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderingComponent_div_12_span_3_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderingComponent_div_12_span_4_Template, 4, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrderingComponent_div_12_span_5_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, value_r3 !== ctx_r1.currentQuestion.item.scoringOption.answers[i_r4], value_r3 == ctx_r1.currentQuestion.item.scoringOption.answers[i_r4]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r3 !== ctx_r1.currentQuestion.item.scoringOption.answers[i_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r3 !== ctx_r1.currentQuestion.item.scoringOption.answers[i_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r3 == ctx_r1.currentQuestion.item.scoringOption.answers[i_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", (tmp_4_0 = ctx_r1.getOption(value_r3)) == null ? null : tmp_4_0.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function OrderingComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", (tmp_0_0 = ctx_r2.getOption(answer_r9)) == null ? null : tmp_0_0.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c1 = function (a0, a1) { return { "text-success": a0, "text-danger": a1 }; };
class OrderingComponent {
    constructor() {
        this.currentQuestion = null;
        this.currentQuestionIndex = 0;
    }
    ngOnInit() { }
    getOption(value) {
        return this.currentQuestion.item.options.find(item => item.value == value);
    }
    getCorrectPosition(resp) {
        return this.currentQuestion.item.scoringOption.answers.findIndex(item => item == resp);
    }
}
OrderingComponent.ɵfac = function OrderingComponent_Factory(t) { return new (t || OrderingComponent)(); };
OrderingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderingComponent, selectors: [["app-ordering"]], inputs: { currentQuestion: "currentQuestion", currentQuestionIndex: "currentQuestionIndex" }, decls: 39, vars: 14, consts: [[1, "card", "border", "border-light", "rounded-3", "p-3"], [1, "fs-6", "fw-bold"], ["class", "mt-2 text-black border-bottom pb-2", "style", "font-size: 1.1rem", 3, "innerHTML", 4, "ngIf"], [1, "mt-2", "text-black", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "row", "my-4"], [1, "col-sm-6"], [1, "p-3"], [1, "card"], [1, "mt-2"], [4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "align-items-center", "flex-wrap", "gap-2", "my-2", 2, "font-size", "0.895em"], [3, "ngClass"], [1, "mt-2", "text-black", "border-bottom", "pb-2", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "card", "border", "m-0", 2, "padding", "10px", 3, "ngClass"], [1, "mb-1", "d-flex", "gap-1"], ["class", "badge rounded-pill bg-danger", "style", "font-size: 0.7em", 4, "ngIf"], ["class", "badge rounded-pill bg-secondary", "style", "font-size: 0.7em", 4, "ngIf"], ["class", "badge rounded-pill bg-success", "style", "font-size: 0.7em", 4, "ngIf"], [1, "p-0", "item-label", 2, "font-size", "1.0rem", 3, "innerHTML"], [1, "badge", "rounded-pill", "bg-danger", 2, "font-size", "0.7em"], [1, "badge", "rounded-pill", "bg-secondary", 2, "font-size", "0.7em"], [1, "badge", "rounded-pill", "bg-success", 2, "font-size", "0.7em"], [1, "card", "border", "m-0", 2, "padding", "10px"], [1, "mb-1", "p-1", "d-flex", "gap-1"]], template: function OrderingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderingComponent_div_3_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Your answer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OrderingComponent_div_12_Template, 7, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Correct answer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, OrderingComponent_div_19_Template, 4, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Scoring: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Question Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Candidate Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Penalty Applied? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Pass or Failed:? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question: ", ctx.currentQuestionIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion.item.passageStimulus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.currentQuestion.item.stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentQuestion.item_score.graded_response);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentQuestion.item.scoringOption.answers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item.scoringOption.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item_score.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentQuestion.item_score.has_penalty ? "Yes" : "No", " (", ctx.currentQuestion.item.scoringOption.penalty, " MKs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c1, ctx.currentQuestion.item_score.pass_fail_status == "PASS", ctx.currentQuestion.item_score.pass_fail_status == "FAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentQuestion.item_score.pass_fail_status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".option-content[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d4d6d8;\n  border-radius: 8px;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJvcmRlcmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb24tY29udGVudCB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ2ZDg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 23198:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/transcript-preview/question-types/short-text/short-text.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortTextComponent": () => (/* binding */ ShortTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function ShortTextComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.currentQuestion.item.passageStimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ShortTextComponent_div_16_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShortTextComponent_div_16_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Incorrect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShortTextComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShortTextComponent_div_16_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShortTextComponent_div_16_span_2_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isAnswerCorrect());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isAnswerCorrect());
} }
const _c0 = function (a0, a1, a2) { return { "border-success": a0, "border-danger": a1, "border-gray": a2 }; };
const _c1 = function (a0, a1) { return { "text-success": a0, "text-danger": a1 }; };
class ShortTextComponent {
    constructor() {
        this.currentQuestion = null;
        this.currentQuestionIndex = 0;
    }
    ngOnInit() { }
    stripSpaceFormat(str) {
        var _a;
        return (_a = str === null || str === void 0 ? void 0 : str.replace(/<p>|<\/p>/g, '').replace(/<\/?br\s*\/?>/gi, '')) === null || _a === void 0 ? void 0 : _a.replace(/<p>|<\/p>/g, '').replace(/&nbsp;/g, ' ');
    }
    isAnswerCorrect() {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!((_a = this.currentQuestion) === null || _a === void 0 ? void 0 : _a.item_score) || !((_c = (_b = this.currentQuestion) === null || _b === void 0 ? void 0 : _b.item) === null || _c === void 0 ? void 0 : _c.scoringOption)) {
            return false;
        }
        const candidateAnswer = ((_e = (_d = this.currentQuestion.item_score.graded_response) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.trim()) || '';
        const correctAnswer = ((_g = (_f = this.currentQuestion.item.scoringOption.answers) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.trim()) || '';
        if (this.currentQuestion.item.numerical) {
            const candNum = Number(candidateAnswer);
            const corrNum = Number(correctAnswer);
            return !isNaN(candNum) && !isNaN(corrNum) && candNum === corrNum;
        }
        if (this.currentQuestion.item.caseSensitive) {
            return candidateAnswer === correctAnswer;
        }
        return candidateAnswer.toLowerCase() === correctAnswer.toLowerCase();
    }
}
ShortTextComponent.ɵfac = function ShortTextComponent_Factory(t) { return new (t || ShortTextComponent)(); };
ShortTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShortTextComponent, selectors: [["app-short-text"]], inputs: { currentQuestion: "currentQuestion", currentQuestionIndex: "currentQuestionIndex" }, decls: 38, vars: 20, consts: [[1, "card", "border", "border-light", "rounded-3", "p-3"], [1, "fs-6", "fw-bold"], ["class", "mt-2 text-black border-bottom pb-2", "style", "font-size: 1.1rem", 3, "innerHTML", 4, "ngIf"], [1, "mt-2", "text-black", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "d-flex", "flex-column", "my-4", "gap-3"], [1, "fs-6", "fw-bold", "text-secondary"], [1, "card", "border", "border-secondary", "m-0", "mt-1", 2, "padding", "10px"], [1, "p-0", "item-label", 2, "font-size", "1.0rem"], [1, "fs-6", "fw-bold", "text-muted"], [1, "card", "border", "m-0", "mt-1", 2, "padding", "10px", 3, "ngClass"], ["class", "mb-1 d-flex gap-1", 4, "ngIf"], [1, "d-flex", "flex-row", "align-items-center", "flex-wrap", "gap-2", "my-2", 2, "font-size", "0.895em"], [3, "ngClass"], [1, "mt-2", "text-black", "border-bottom", "pb-2", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "mb-1", "d-flex", "gap-1"], ["class", "badge rounded-pill bg-success", "style", "font-size: 0.7em", 4, "ngIf"], ["class", "badge rounded-pill bg-danger", "style", "font-size: 0.7em", 4, "ngIf"], [1, "badge", "rounded-pill", "bg-success", 2, "font-size", "0.7em"], [1, "badge", "rounded-pill", "bg-danger", 2, "font-size", "0.7em"]], template: function ShortTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShortTextComponent_div_3_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Correct Answer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Candidate Response:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ShortTextComponent_div_16_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Scoring: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Question Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Candidate Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Penalty Applied? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Pass or Failed:? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question: ", ctx.currentQuestionIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion.item.passageStimulus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.currentQuestion.item.stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.currentQuestion.item.scoringOption.answers == null ? null : ctx.currentQuestion.item.scoringOption.answers[0]) || "N/A", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c0, ctx.isAnswerCorrect(), !ctx.isAnswerCorrect() && (ctx.currentQuestion.item_score.graded_response == null ? null : ctx.currentQuestion.item_score.graded_response[0]), !(ctx.currentQuestion.item_score.graded_response == null ? null : ctx.currentQuestion.item_score.graded_response[0])));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion.item_score.graded_response == null ? null : ctx.currentQuestion.item_score.graded_response[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.currentQuestion.item_score.graded_response == null ? null : ctx.currentQuestion.item_score.graded_response[0]) || "No response submitted", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item.scoringOption.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item_score.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentQuestion.item_score.has_penalty ? "Yes" : "No", " (", ctx.currentQuestion.item.scoringOption.penalty, " MKs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c1, ctx.currentQuestion.item_score.pass_fail_status == "PASS", ctx.currentQuestion.item_score.pass_fail_status == "FAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentQuestion.item_score.pass_fail_status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0LXRleHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQUEiLCJmaWxlIjoic2hvcnQtdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNob3J0IFRleHQgU3R5bGVzICovXG4iXX0= */"] });


/***/ }),

/***/ 27606:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/transcript-preview/question-types/true-or-false/true-or-false.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrueOrFalseComponent": () => (/* binding */ TrueOrFalseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function TrueOrFalseComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.currentQuestion.item.passageStimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function TrueOrFalseComponent_div_6_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrueOrFalseComponent_div_6_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrueOrFalseComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrueOrFalseComponent_div_6_div_1_span_1_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrueOrFalseComponent_div_6_div_1_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.value == ctx_r4.currentQuestion.item_score.graded_response[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.value == ctx_r4.currentQuestion.item.scoringOption.answers[0]);
} }
const _c0 = function (a0, a1, a2) { return { "border-danger": a0, "border-success": a1, "border-gray": a2 }; };
function TrueOrFalseComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrueOrFalseComponent_div_6_div_1_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, item_r2.value == ctx_r1.currentQuestion.item_score.graded_response[0] && ctx_r1.currentQuestion.item_score.graded_response[0] !== ctx_r1.currentQuestion.item.scoringOption.answers[0], ctx_r1.currentQuestion.item.scoringOption.answers[0] == item_r2.value, ctx_r1.currentQuestion.item.scoringOption.answers[0] !== item_r2.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.value == ctx_r1.currentQuestion.item_score.graded_response[0] || item_r2.value == ctx_r1.currentQuestion.item.scoringOption.answers[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r2.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c1 = function (a0, a1) { return { "text-success": a0, "text-danger": a1 }; };
class TrueOrFalseComponent {
    constructor() {
        this.currentQuestion = null;
        this.currentQuestionIndex = 0;
    }
    ngOnInit() { }
}
TrueOrFalseComponent.ɵfac = function TrueOrFalseComponent_Factory(t) { return new (t || TrueOrFalseComponent)(); };
TrueOrFalseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrueOrFalseComponent, selectors: [["app-true-or-false"]], inputs: { currentQuestion: "currentQuestion", currentQuestionIndex: "currentQuestionIndex" }, decls: 26, vars: 13, consts: [[1, "card", "border", "border-light", "rounded-3", "p-3"], [1, "fs-6", "fw-bold"], ["class", "mt-2 text-black border-bottom pb-2", "style", "font-size: 1.1rem", 3, "innerHTML", 4, "ngIf"], [1, "mt-2", "text-black", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "d-flex", "flex-column", "my-4", "gap-1"], ["class", "card border m-0", "style", "padding: 10px", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "align-items-center", "flex-wrap", "gap-2", "my-2", 2, "font-size", "0.895em"], [3, "ngClass"], [1, "mt-2", "text-black", "border-bottom", "pb-2", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "card", "border", "m-0", 2, "padding", "10px", 3, "ngClass"], ["class", "mb-1 d-flex flex-col gap-1", 4, "ngIf"], [1, "p-0", "item-label", 2, "font-size", "1.0rem", 3, "innerHTML"], [1, "mb-1", "d-flex", "flex-col", "gap-1"], ["class", "badge rounded-pill bg-secondary", "style", "font-size: 0.7em", 4, "ngIf"], ["class", "badge rounded-pill bg-success", "style", "font-size: 0.7em", 4, "ngIf"], [1, "badge", "rounded-pill", "bg-secondary", 2, "font-size", "0.7em"], [1, "badge", "rounded-pill", "bg-success", 2, "font-size", "0.7em"]], template: function TrueOrFalseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TrueOrFalseComponent_div_3_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TrueOrFalseComponent_div_6_Template, 3, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Scoring: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Question Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Candidate Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Penalty Applied? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Pass or Failed:? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question: ", ctx.currentQuestionIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion.item.passageStimulus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.currentQuestion.item.stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentQuestion.item.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item.scoringOption.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item_score.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentQuestion.item_score.has_penalty ? "Yes" : "No", " (", ctx.currentQuestion.item.scoringOption.penalty, " MKs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, ctx.currentQuestion.item_score.pass_fail_status == "PASS", ctx.currentQuestion.item_score.pass_fail_status == "FAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentQuestion.item_score.pass_fail_status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cnVlLW9yLWZhbHNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 64899:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/transcript-preview/question-types/yes-or-no/yes-or-no.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YesOrNoComponent": () => (/* binding */ YesOrNoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function YesOrNoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.currentQuestion.item.passageStimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function YesOrNoComponent_div_6_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YesOrNoComponent_div_6_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YesOrNoComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YesOrNoComponent_div_6_div_1_span_1_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, YesOrNoComponent_div_6_div_1_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.value == ctx_r4.currentQuestion.item_score.graded_response[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.value == ctx_r4.currentQuestion.item.scoringOption.answers[0]);
} }
const _c0 = function (a0, a1, a2) { return { "border-danger": a0, "border-success": a1, "border-gray": a2 }; };
function YesOrNoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YesOrNoComponent_div_6_div_1_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, item_r2.value == ctx_r1.currentQuestion.item_score.graded_response[0] && ctx_r1.currentQuestion.item_score.graded_response[0] !== ctx_r1.currentQuestion.item.scoringOption.answers[0], ctx_r1.currentQuestion.item.scoringOption.answers[0] == item_r2.value, ctx_r1.currentQuestion.item.scoringOption.answers[0] !== item_r2.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.value == ctx_r1.currentQuestion.item_score.graded_response[0] || item_r2.value == ctx_r1.currentQuestion.item.scoringOption.answers[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r2.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c1 = function (a0, a1) { return { "text-success": a0, "text-danger": a1 }; };
class YesOrNoComponent {
    constructor() {
        this.currentQuestion = null;
        this.currentQuestionIndex = 0;
    }
    ngOnInit() { }
}
YesOrNoComponent.ɵfac = function YesOrNoComponent_Factory(t) { return new (t || YesOrNoComponent)(); };
YesOrNoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YesOrNoComponent, selectors: [["app-yes-or-no"]], inputs: { currentQuestion: "currentQuestion", currentQuestionIndex: "currentQuestionIndex" }, decls: 26, vars: 13, consts: [[1, "card", "border", "border-light", "rounded-3", "p-3"], [1, "fs-6", "fw-bold"], ["class", "mt-2 text-black border-bottom pb-2", "style", "font-size: 1.1rem", 3, "innerHTML", 4, "ngIf"], [1, "mt-2", "text-black", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "d-flex", "flex-column", "my-4", "gap-1"], ["class", "card border m-0", "style", "padding: 10px", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "align-items-center", "flex-wrap", "gap-2", "my-2", 2, "font-size", "0.895em"], [3, "ngClass"], [1, "mt-2", "text-black", "border-bottom", "pb-2", 2, "font-size", "1.1rem", 3, "innerHTML"], [1, "card", "border", "m-0", 2, "padding", "10px", 3, "ngClass"], ["class", "mb-1 d-flex flex-col gap-1", 4, "ngIf"], [1, "p-0", "item-label", 2, "font-size", "1.0rem", 3, "innerHTML"], [1, "mb-1", "d-flex", "flex-col", "gap-1"], ["class", "badge rounded-pill bg-secondary", "style", "font-size: 0.7em", 4, "ngIf"], ["class", "badge rounded-pill bg-success", "style", "font-size: 0.7em", 4, "ngIf"], [1, "badge", "rounded-pill", "bg-secondary", 2, "font-size", "0.7em"], [1, "badge", "rounded-pill", "bg-success", 2, "font-size", "0.7em"]], template: function YesOrNoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, YesOrNoComponent_div_3_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, YesOrNoComponent_div_6_Template, 3, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Scoring: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Question Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Candidate Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Penalty Applied? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Pass or Failed:? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question: ", ctx.currentQuestionIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion.item.passageStimulus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.currentQuestion.item.stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentQuestion.item.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item.scoringOption.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentQuestion.item_score.score, " (Mks) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentQuestion.item_score.has_penalty ? "Yes" : "No", " (", ctx.currentQuestion.item.scoringOption.penalty, " MKs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, ctx.currentQuestion.item_score.pass_fail_status == "PASS", ctx.currentQuestion.item_score.pass_fail_status == "FAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentQuestion.item_score.pass_fail_status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ5ZXMtb3Itbm8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 75293:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/transcript-preview/transcript-preview-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transcriptRoutingModule": () => (/* binding */ transcriptRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _transcript_preview_transcript_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transcript-preview/transcript-preview.component */ 81740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _transcript_preview_transcript_preview_component__WEBPACK_IMPORTED_MODULE_0__.TranscriptPreviewComponent },
];
class transcriptRoutingModule {
}
transcriptRoutingModule.ɵfac = function transcriptRoutingModule_Factory(t) { return new (t || transcriptRoutingModule)(); };
transcriptRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: transcriptRoutingModule });
transcriptRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](transcriptRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 94700:
/*!***********************************************************************!*\
  !*** ./src/app/pages/transcript-preview/transcript-preview.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranscriptPreviewModule": () => (/* binding */ TranscriptPreviewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _transcript_preview_transcript_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transcript-preview/transcript-preview.component */ 81740);
/* harmony import */ var _transcript_preview_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transcript-preview-routing.module */ 75293);
/* harmony import */ var _question_types_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question-types/mcq/mcq.component */ 54903);
/* harmony import */ var _question_types_close_dropdown_close_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question-types/close-dropdown/close-dropdown.component */ 63273);
/* harmony import */ var _question_types_cloze_text_cloze_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question-types/cloze-text/cloze-text.component */ 62972);
/* harmony import */ var _question_types_cloze_radio_cloze_radio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question-types/cloze-radio/cloze-radio.component */ 49131);
/* harmony import */ var _question_types_true_or_false_true_or_false_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question-types/true-or-false/true-or-false.component */ 27606);
/* harmony import */ var _question_types_yes_or_no_yes_or_no_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question-types/yes-or-no/yes-or-no.component */ 64899);
/* harmony import */ var _question_types_matching_matching_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./question-types/matching/matching.component */ 40840);
/* harmony import */ var _question_types_ordering_ordering_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./question-types/ordering/ordering.component */ 85518);
/* harmony import */ var _question_types_mrq_mrq_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./question-types/mrq/mrq.component */ 23536);
/* harmony import */ var _question_types_short_text_short_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./question-types/short-text/short-text.component */ 23198);
/* harmony import */ var _question_types_essay_essay_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./question-types/essay/essay.component */ 49023);
/* harmony import */ var _question_types_choice_matrix_choice_matrix_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./question-types/choice-matrix/choice-matrix.component */ 25414);
/* harmony import */ var _question_types_label_image_drag_and_drop_label_image_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./question-types/label-image-drag-and-drop/label-image-drag-and-drop.component */ 23577);
/* harmony import */ var _question_types_label_image_with_text_label_image_with_text_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./question-types/label-image-with-text/label-image-with-text.component */ 12812);
/* harmony import */ var _question_types_label_image_with_dropdown_label_image_with_dropdown_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./question-types/label-image-with-dropdown/label-image-with-dropdown.component */ 61794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);



















class TranscriptPreviewModule {
}
TranscriptPreviewModule.ɵfac = function TranscriptPreviewModule_Factory(t) { return new (t || TranscriptPreviewModule)(); };
TranscriptPreviewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: TranscriptPreviewModule });
TranscriptPreviewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
            _transcript_preview_routing_module__WEBPACK_IMPORTED_MODULE_1__.transcriptRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](TranscriptPreviewModule, { declarations: [_transcript_preview_transcript_preview_component__WEBPACK_IMPORTED_MODULE_0__.TranscriptPreviewComponent,
        _question_types_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_2__.McqComponent,
        _question_types_close_dropdown_close_dropdown_component__WEBPACK_IMPORTED_MODULE_3__.CloseDropdownComponent,
        _question_types_cloze_text_cloze_text_component__WEBPACK_IMPORTED_MODULE_4__.ClozeTextComponent,
        _question_types_cloze_radio_cloze_radio_component__WEBPACK_IMPORTED_MODULE_5__.ClozeRadioComponent,
        _question_types_true_or_false_true_or_false_component__WEBPACK_IMPORTED_MODULE_6__.TrueOrFalseComponent,
        _question_types_yes_or_no_yes_or_no_component__WEBPACK_IMPORTED_MODULE_7__.YesOrNoComponent,
        _question_types_matching_matching_component__WEBPACK_IMPORTED_MODULE_8__.MatchingComponent,
        _question_types_ordering_ordering_component__WEBPACK_IMPORTED_MODULE_9__.OrderingComponent,
        _question_types_mrq_mrq_component__WEBPACK_IMPORTED_MODULE_10__.MrqComponent,
        _question_types_short_text_short_text_component__WEBPACK_IMPORTED_MODULE_11__.ShortTextComponent,
        _question_types_essay_essay_component__WEBPACK_IMPORTED_MODULE_12__.EssayComponent,
        _question_types_choice_matrix_choice_matrix_component__WEBPACK_IMPORTED_MODULE_13__.ChoiceMatrixComponent,
        _question_types_label_image_drag_and_drop_label_image_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_14__.LabelImageDragAndDropComponent,
        _question_types_label_image_with_text_label_image_with_text_component__WEBPACK_IMPORTED_MODULE_15__.LabelImageWithTextComponent,
        _question_types_label_image_with_dropdown_label_image_with_dropdown_component__WEBPACK_IMPORTED_MODULE_16__.LabelImageWithDropdownComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _transcript_preview_routing_module__WEBPACK_IMPORTED_MODULE_1__.transcriptRoutingModule] }); })();


/***/ }),

/***/ 81740:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/transcript-preview/transcript-preview/transcript-preview.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranscriptPreviewComponent": () => (/* binding */ TranscriptPreviewComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var _items_models_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../items/models/result */ 13802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _question_types_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../question-types/mcq/mcq.component */ 54903);
/* harmony import */ var _question_types_close_dropdown_close_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../question-types/close-dropdown/close-dropdown.component */ 63273);
/* harmony import */ var _question_types_cloze_text_cloze_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../question-types/cloze-text/cloze-text.component */ 62972);
/* harmony import */ var _question_types_cloze_radio_cloze_radio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../question-types/cloze-radio/cloze-radio.component */ 49131);
/* harmony import */ var _question_types_true_or_false_true_or_false_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../question-types/true-or-false/true-or-false.component */ 27606);
/* harmony import */ var _question_types_yes_or_no_yes_or_no_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../question-types/yes-or-no/yes-or-no.component */ 64899);
/* harmony import */ var _question_types_matching_matching_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../question-types/matching/matching.component */ 40840);
/* harmony import */ var _question_types_ordering_ordering_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../question-types/ordering/ordering.component */ 85518);
/* harmony import */ var _question_types_mrq_mrq_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../question-types/mrq/mrq.component */ 23536);
/* harmony import */ var _question_types_short_text_short_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../question-types/short-text/short-text.component */ 23198);
/* harmony import */ var _question_types_essay_essay_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../question-types/essay/essay.component */ 49023);
/* harmony import */ var _question_types_choice_matrix_choice_matrix_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../question-types/choice-matrix/choice-matrix.component */ 25414);
/* harmony import */ var _question_types_label_image_with_text_label_image_with_text_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../question-types/label-image-with-text/label-image-with-text.component */ 12812);
/* harmony import */ var _question_types_label_image_with_dropdown_label_image_with_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../question-types/label-image-with-dropdown/label-image-with-dropdown.component */ 61794);
/* harmony import */ var _question_types_label_image_drag_and_drop_label_image_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../question-types/label-image-drag-and-drop/label-image-drag-and-drop.component */ 23577);





















function TranscriptPreviewComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r2.params.name, " ");
} }
function TranscriptPreviewComponent_div_0_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r3.params.loginField, " ");
} }
function TranscriptPreviewComponent_div_0_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r4.params.sectionName, " ");
} }
function TranscriptPreviewComponent_div_0_ng_container_28_mcq_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "mcq", 19);
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const item_r6 = ctx_r24.$implicit;
    const i_r7 = ctx_r24.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("currentQuestion", item_r6)("currentQuestionIndex", i_r7 + 1);
} }
function TranscriptPreviewComponent_div_0_ng_container_28_app_close_dropdown_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-close-dropdown", 19);
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const item_r6 = ctx_r25.$implicit;
    const i_r7 = ctx_r25.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("currentQuestion", item_r6)("currentQuestionIndex", i_r7 + 1);
} }
function TranscriptPreviewComponent_div_0_ng_container_28_app_cloze_text_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-cloze-text", 19);
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const item_r6 = ctx_r26.$implicit;
    const i_r7 = ctx_r26.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("currentQuestion", item_r6)("currentQuestionIndex", i_r7 + 1);
} }
function TranscriptPreviewComponent_div_0_ng_container_28_app_cloze_radio_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-cloze-radio", 19);
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const item_r6 = ctx_r27.$implicit;
    const i_r7 = ctx_r27.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("currentQuestion", item_r6)("currentQuestionIndex", i_r7 + 1);
} }
function TranscriptPreviewComponent_div_0_ng_container_28_app_true_or_false_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-true-or-false", 19);
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const item_r6 = ctx_r28.$implicit;
    const i_r7 = ctx_r28.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("currentQuestion", item_r6)("currentQuestionIndex", i_r7 + 1);
} }
function TranscriptPreviewComponent_div_0_ng_container_28_app_yes_or_no_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-yes-or-no", 19);
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const item_r6 = ctx_r29.$implicit;
    const i_r7 = ctx_r29.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("currentQuestion", item_r6)("currentQuestionIndex", i_r7 + 1);
} }
function TranscriptPreviewComponent_div_0_ng_container_28_app_matching_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-matching", 19);
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const item_r6 = ctx_r30.$implicit;
    const i_r7 = ctx_r30.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("currentQuestion", item_r6)("currentQuestionIndex", i_r7 + 1);
} }
function TranscriptPreviewComponent_div_0_ng_container_28_app_ordering_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-ordering", 19);
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const item_r6 = ctx_r31.$implicit;
    const i_r7 = ctx_r31.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("currentQuestion", item_r6)("currentQuestionIndex", i_r7 + 1);
} }
function TranscriptPreviewComponent_div_0_ng_container_28_app_mrq_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-mrq", 19);
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const item_r6 = ctx_r32.$implicit;
    const i_r7 = ctx_r32.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("currentQuestion", item_r6)("currentQuestionIndex", i_r7 + 1);
} }
function TranscriptPreviewComponent_div_0_ng_container_28_app_short_text_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-short-text", 19);
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const item_r6 = ctx_r33.$implicit;
    const i_r7 = ctx_r33.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("currentQuestion", item_r6)("currentQuestionIndex", i_r7 + 1);
} }
function TranscriptPreviewComponent_div_0_ng_container_28_app_essay_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-essay", 19);
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const item_r6 = ctx_r34.$implicit;
    const i_r7 = ctx_r34.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("currentQuestion", item_r6)("currentQuestionIndex", i_r7 + 1);
} }
function TranscriptPreviewComponent_div_0_ng_container_28_app_essay_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-essay", 19);
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const item_r6 = ctx_r35.$implicit;
    const i_r7 = ctx_r35.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("currentQuestion", item_r6)("currentQuestionIndex", i_r7 + 1);
} }
function TranscriptPreviewComponent_div_0_ng_container_28_app_choice_matrix_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-choice-matrix", 19);
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const item_r6 = ctx_r36.$implicit;
    const i_r7 = ctx_r36.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("currentQuestion", item_r6)("currentQuestionIndex", i_r7 + 1);
} }
function TranscriptPreviewComponent_div_0_ng_container_28_app_label_image_with_text_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-label-image-with-text", 19);
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const item_r6 = ctx_r37.$implicit;
    const i_r7 = ctx_r37.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("currentQuestion", item_r6)("currentQuestionIndex", i_r7 + 1);
} }
function TranscriptPreviewComponent_div_0_ng_container_28_app_label_image_with_dropdown_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-label-image-with-dropdown", 19);
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const item_r6 = ctx_r38.$implicit;
    const i_r7 = ctx_r38.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("currentQuestion", item_r6)("currentQuestionIndex", i_r7 + 1);
} }
function TranscriptPreviewComponent_div_0_ng_container_28_app_label_image_drag_and_drop_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-label-image-drag-and-drop", 19);
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const item_r6 = ctx_r39.$implicit;
    const i_r7 = ctx_r39.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("currentQuestion", item_r6)("currentQuestionIndex", i_r7 + 1);
} }
function TranscriptPreviewComponent_div_0_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, TranscriptPreviewComponent_div_0_ng_container_28_mcq_1_Template, 1, 2, "mcq", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, TranscriptPreviewComponent_div_0_ng_container_28_app_close_dropdown_2_Template, 1, 2, "app-close-dropdown", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, TranscriptPreviewComponent_div_0_ng_container_28_app_cloze_text_3_Template, 1, 2, "app-cloze-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](4, TranscriptPreviewComponent_div_0_ng_container_28_app_cloze_radio_4_Template, 1, 2, "app-cloze-radio", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](5, TranscriptPreviewComponent_div_0_ng_container_28_app_true_or_false_5_Template, 1, 2, "app-true-or-false", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, TranscriptPreviewComponent_div_0_ng_container_28_app_yes_or_no_6_Template, 1, 2, "app-yes-or-no", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, TranscriptPreviewComponent_div_0_ng_container_28_app_matching_7_Template, 1, 2, "app-matching", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, TranscriptPreviewComponent_div_0_ng_container_28_app_ordering_8_Template, 1, 2, "app-ordering", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, TranscriptPreviewComponent_div_0_ng_container_28_app_mrq_9_Template, 1, 2, "app-mrq", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](10, TranscriptPreviewComponent_div_0_ng_container_28_app_short_text_10_Template, 1, 2, "app-short-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](11, TranscriptPreviewComponent_div_0_ng_container_28_app_essay_11_Template, 1, 2, "app-essay", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, TranscriptPreviewComponent_div_0_ng_container_28_app_essay_12_Template, 1, 2, "app-essay", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](13, TranscriptPreviewComponent_div_0_ng_container_28_app_choice_matrix_13_Template, 1, 2, "app-choice-matrix", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](14, TranscriptPreviewComponent_div_0_ng_container_28_app_label_image_with_text_14_Template, 1, 2, "app-label-image-with-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](15, TranscriptPreviewComponent_div_0_ng_container_28_app_label_image_with_dropdown_15_Template, 1, 2, "app-label-image-with-dropdown", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](16, TranscriptPreviewComponent_div_0_ng_container_28_app_label_image_drag_and_drop_16_Template, 1, 2, "app-label-image-drag-and-drop", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (item_r6.item_score == null ? null : item_r6.item_score.item_type) === ctx_r5.transcriptQuestionTypes.MCQ);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (item_r6.item_score == null ? null : item_r6.item_score.item_type) === ctx_r5.transcriptQuestionTypes.CLOZE_DROPDOWN);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (item_r6.item_score == null ? null : item_r6.item_score.item_type) === ctx_r5.transcriptQuestionTypes.CLOZE_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (item_r6.item_score == null ? null : item_r6.item_score.item_type) === ctx_r5.transcriptQuestionTypes.CLOZE_RADIO);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (item_r6.item_score == null ? null : item_r6.item_score.item_type) === ctx_r5.transcriptQuestionTypes.TRUE_FALSE);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (item_r6.item_score == null ? null : item_r6.item_score.item_type) === ctx_r5.transcriptQuestionTypes.YES_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (item_r6.item_score == null ? null : item_r6.item_score.item_type) === ctx_r5.transcriptQuestionTypes.ASSOCIATION);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (item_r6.item_score == null ? null : item_r6.item_score.item_type) === ctx_r5.transcriptQuestionTypes.ORDER_LIST);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (item_r6.item_score == null ? null : item_r6.item_score.item_type) === ctx_r5.transcriptQuestionTypes.MRQ);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (item_r6.item_score == null ? null : item_r6.item_score.item_type) === ctx_r5.transcriptQuestionTypes.SHORT_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (item_r6.item_score == null ? null : item_r6.item_score.item_type) === ctx_r5.transcriptQuestionTypes.ESSAY_PLAIN_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (item_r6.item_score == null ? null : item_r6.item_score.item_type) === ctx_r5.transcriptQuestionTypes.ESSAY_RICH_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (item_r6.item_score == null ? null : item_r6.item_score.item_type) === ctx_r5.transcriptQuestionTypes.CHOICE_MATRIX);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (item_r6.item_score == null ? null : item_r6.item_score.item_type) === ctx_r5.transcriptQuestionTypes.CLOZE_TEXT_IMAGE);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (item_r6.item_score == null ? null : item_r6.item_score.item_type) === ctx_r5.transcriptQuestionTypes.CLOZE_DROPDOWN_IMAGE);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (item_r6.item_score == null ? null : item_r6.item_score.item_type) === ctx_r5.transcriptQuestionTypes.IMAGE_DRAG_AND_DROP);
} }
function TranscriptPreviewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "TRANSCRIPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, TranscriptPreviewComponent_div_0_div_12_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](13, TranscriptPreviewComponent_div_0_span_13_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](17, "Total questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](21, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](27, TranscriptPreviewComponent_div_0_div_27_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](28, TranscriptPreviewComponent_div_0_ng_container_28_Template, 17, 16, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r0.params.name == null ? null : (tmp_0_0 = ctx_r0.params.name.substr(0, 2)) == null ? null : tmp_0_0.toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.params == null ? null : ctx_r0.params.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.params == null ? null : ctx_r0.params.loginField);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = ctx_r0.transcriptData == null ? null : ctx_r0.transcriptData.length) !== null && tmp_3_0 !== undefined ? tmp_3_0 : 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r0.transcriptScore, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.params == null ? null : ctx_r0.params.sectionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r0.transcriptData);
} }
function TranscriptPreviewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "div", 20);
} }
class TranscriptPreviewComponent {
    constructor(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.downloadingTranscript = true;
        this.transcriptQuestionTypes = _items_models_result__WEBPACK_IMPORTED_MODULE_0__.QUESTION_TYPES;
        this.transcriptScore = 0;
    }
    ngOnInit() {
        this.getTranscriptParams();
    }
    getTranscriptParams() {
        this.route.queryParamMap.subscribe(route => {
            const params = {};
            route.keys.map(key => {
                params[key] = route.get(key);
            });
            this.params = params;
            this.fetchTranscriptData();
        });
    }
    calculateTranscriptScore() {
        const score = this.transcriptData.reduce((total, curr) => total + curr.item_score.score, 0);
        this.transcriptScore = score;
    }
    fetchTranscriptData() {
        this.downloadingTranscript = true;
        this.dataService.fetchTranscript(this.params)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.finalize)(() => this.downloadingTranscript = false))
            .subscribe({
            next: (res) => {
                this.transcriptData = res;
                this.calculateTranscriptScore();
                this.domReady();
            }
        });
    }
    domReady() {
        window.domReady = true;
    }
}
TranscriptPreviewComponent.ɵfac = function TranscriptPreviewComponent_Factory(t) { return new (t || TranscriptPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService)); };
TranscriptPreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: TranscriptPreviewComponent, selectors: [["app-transcript-preview"]], decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], ["id", "domready", 4, "ngIf"], [1, "container"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mt-3"], [1, "d-flex", "justify-content-between", "align-items-center", "py-3", "border-bottom"], [1, "d-flex", "gap-5", "justify-content-between", "align-items-center"], [1, "d-flex", "gap-2", "align-items-center"], [1, "rounded-circle", "d-flex", "flex-colum", "align-items-center", "justify-content-center", "bg-soft-secondary", 2, "width", "50px", "height", "50px"], [1, "fs-12", "fw-bold", "text-uppercase"], ["class", "fs-14 fw-bold", 4, "ngIf"], ["class", "small", 4, "ngIf"], [1, "d-flex", "justify-content-between", "gap-3"], [1, "small", "fw-bold", "fs-12"], [1, "d-flex", "align-items-center", "gap-1"], [4, "ngFor", "ngForOf"], [1, "fs-14", "fw-bold"], [1, "small"], [3, "currentQuestion", "currentQuestionIndex", 4, "ngIf"], [3, "currentQuestion", "currentQuestionIndex"], ["id", "domready"]], template: function TranscriptPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, TranscriptPreviewComponent_div_0_Template, 29, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, TranscriptPreviewComponent_div_1_Template, 1, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.downloadingTranscript);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.transcriptData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _question_types_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_2__.McqComponent, _question_types_close_dropdown_close_dropdown_component__WEBPACK_IMPORTED_MODULE_3__.CloseDropdownComponent, _question_types_cloze_text_cloze_text_component__WEBPACK_IMPORTED_MODULE_4__.ClozeTextComponent, _question_types_cloze_radio_cloze_radio_component__WEBPACK_IMPORTED_MODULE_5__.ClozeRadioComponent, _question_types_true_or_false_true_or_false_component__WEBPACK_IMPORTED_MODULE_6__.TrueOrFalseComponent, _question_types_yes_or_no_yes_or_no_component__WEBPACK_IMPORTED_MODULE_7__.YesOrNoComponent, _question_types_matching_matching_component__WEBPACK_IMPORTED_MODULE_8__.MatchingComponent, _question_types_ordering_ordering_component__WEBPACK_IMPORTED_MODULE_9__.OrderingComponent, _question_types_mrq_mrq_component__WEBPACK_IMPORTED_MODULE_10__.MrqComponent, _question_types_short_text_short_text_component__WEBPACK_IMPORTED_MODULE_11__.ShortTextComponent, _question_types_essay_essay_component__WEBPACK_IMPORTED_MODULE_12__.EssayComponent, _question_types_choice_matrix_choice_matrix_component__WEBPACK_IMPORTED_MODULE_13__.ChoiceMatrixComponent, _question_types_label_image_with_text_label_image_with_text_component__WEBPACK_IMPORTED_MODULE_14__.LabelImageWithTextComponent, _question_types_label_image_with_dropdown_label_image_with_dropdown_component__WEBPACK_IMPORTED_MODULE_15__.LabelImageWithDropdownComponent, _question_types_label_image_drag_and_drop_label_image_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_16__.LabelImageDragAndDropComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2NyaXB0LXByZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 29073:
/*!***************************************************!*\
  !*** ./src/app/pages/users/user/users.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class UsersService {
    constructor(http) {
        this.http = http;
    }
    listAllUsers() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users`, { withCredentials: true });
    }
    listRoles() {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users/roles`, { withCredentials: true })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((results) => {
            results.sort((a, b) => a.role.localeCompare(b.role));
        }));
    }
    fetchActivityListAdmin(activityFilter, page, size) {
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        queryParams = queryParams
            .append('page', page)
            .append('size', size);
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users/activityList`, activityFilter, { params: queryParams, withCredentials: true });
    }
    fetchSingleUserActivityList(activityFilter, page, size) {
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        queryParams = queryParams
            .append('page', page)
            .append('size', size);
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/o_users/activityList`, activityFilter, { params: queryParams, withCredentials: true });
    }
    searchTags(text) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/tags/searchtag?text=${text}`, { withCredentials: true });
    }
    addNewUser(newUser) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users`, newUser, { withCredentials: true });
    }
    addSubjectToUser(newSubject) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users/subject_add`, newSubject, { withCredentials: true });
    }
    addremoveSubjectFromUser(newSubject) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users/subject`, newSubject, { withCredentials: true });
    }
    getUserDetail(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users/${id}`, { withCredentials: true });
    }
    getSingleUserDetails(userId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/o_users/${userId}`, { withCredentials: true });
    }
    getSingleItemAnalysisNonAdmin(userId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/o_users/${userId}/items-analysis`, { withCredentials: true });
    }
    ChangeUserPassword(newPassword) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users/user-password`, newPassword, { withCredentials: true });
    }
    updateUserDetails(newUserDetail) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users/user-details`, newUserDetail, { withCredentials: true });
    }
    getUserItemAnalysis(userId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users/${userId}/items-analysis`, { withCredentials: true });
    }
    activateDeactivateUser(userId, status) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users/${userId}/enable-disableUser`, status, { withCredentials: true });
    }
    getAuthorItems(userId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users/${userId}/items-analysis`, { withCredentials: true });
    }
    activateDeactivateMultipleUsers(users, flag) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users/bulk_activate_deactivate/${flag}`, users, { withCredentials: true });
    }
    bulkUserUpload(file) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users/upload`, file, { withCredentials: true });
    }
    filterUsers(filter) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users/filter`, filter, { withCredentials: true });
    }
    resendEmailVerification(userId, data) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users/${userId}/resend-email-verification`, data, { withCredentials: true });
    }
    downloadUsersTemplate() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users/download/users_template`, { responseType: 'blob', withCredentials: true });
    }
    downloadAllUsersFile() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/users/download/all_users_file`, { responseType: 'blob', withCredentials: true });
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UsersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 52468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class DataService {
    constructor(_http) {
        this._http = _http;
    }
    getAssessmentSummary(assessmentId, queryParams) {
        // assessmentId = '0196a9b3-85b2-794d-8ad5-a8abac57fa57';
        const centerId = '0196a9b9-9c4a-7fc0-abb8-50e93b2852bf'; // This variable is declared but not used.
        const url = `/examalpha/api/v1/sch_mon_grd/reports/result/result_summary/${assessmentId}`;
        return this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP + url, { withCredentials: true, params: Object.assign({}, queryParams) });
    }
    getScoreDistribution(assessmentId, queryParams) {
        // assessmentId = '0196a9b3-85b2-794d-8ad5-a8abac57fa57';
        const url = `/examalpha/api/v1/sch_mon_grd/reports/result/score_distribution/${assessmentId}`;
        return this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP + url, { withCredentials: true, params: Object.assign({}, queryParams) });
    }
    getScoreAnalysis(assessmentId, queryParams) {
        // assessmentId = '0196a9b3-85b2-794d-8ad5-a8abac57fa57';
        const url = `/examalpha/api/v1/sch_mon_grd/reports/result/score_analysis/${assessmentId}`;
        return this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP + url, { withCredentials: true, params: Object.assign({}, queryParams) });
    }
    getParticipants(assessmentId, queryParams) {
        // assessmentId = '0196a9b3-85b2-794d-8ad5-a8abac57fa57';
        const url = `/examalpha/api/v1/sch_mon_grd/reports/result/list_participants/${assessmentId}`;
        return this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP + url, { withCredentials: true, params: Object.assign({}, queryParams) });
    }
    getTranscriptParticipants(assessmentId, queryParams) {
        // assessmentId = '0196a9b3-85b2-794d-8ad5-a8abac57fa57';
        const url = `/examalpha/api/v1/sch_mon_grd/reports/result/list_participants_transcript/${assessmentId}`;
        return this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP + url, {
            withCredentials: true,
            params: Object.assign({}, queryParams),
        });
    }
    getParticipantTranscript(assessmentId, sectionId, participantId) {
        // assessmentId = '0196a9b3-85b2-794d-8ad5-a8abac57fa57';
        const url = `/examalpha/api/v1/sch_mon_grd/reports/result/participant_transcript/assessment/${assessmentId}/section/${sectionId}/participant/${participantId}`;
        return this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP + url, { withCredentials: true });
    }
    getCandidateResult(assessmentId, participantId) {
        // assessmentId = '0196a9b3-85b2-794d-8ad5-a8abac57fa57';
        const url = `/examalpha/api/v1/sch_mon_grd/reports/result/participant_result/assessment/${assessmentId}/participant/${participantId}`;
        return this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP + url, { withCredentials: true });
    }
    downloadResult(assessmentId, queryParams) {
        const url = `/examalpha/api/v1/sch_mon_grd/reports/result/download_result/${assessmentId}`;
        // Remove pagination params if present
        if (queryParams) {
            delete queryParams.size;
            delete queryParams.page;
        }
        // Build query string
        const queryString = queryParams
            ? '?' + new URLSearchParams(queryParams).toString()
            : '';
        return fetch(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP + url + queryString, {
            method: 'GET',
            credentials: 'include'
        });
    }
    fetchTranscript(params) {
        // assessmentId = '0196a9b3-85b2-794d-8ad5-a8abac57fa57';
        const url = `/examalpha/api/v1/sch_mon_grd/exam_server/participant_transcript/assessment/${params.assessmentId}/section/${params.sectionId}/participant/${params.participantId}/o/${params.oId}`;
        // /section_name/${ params.sectionName }
        return this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP + url, { withCredentials: true });
    }
    downloadTranscript(assessmentId, sectionName, queryParams) {
        const url = `/examalpha/api/v1/sch_mon_grd/reports/result/download_transcript/${assessmentId}/section_name/${sectionName}`;
        if (queryParams) {
            delete queryParams.size;
            delete queryParams.page;
        }
        const queryString = queryParams
            ? '?' + new URLSearchParams(queryParams).toString()
            : '';
        return fetch(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP + url + queryString, {
            method: 'GET',
            credentials: 'include'
        });
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 50147:
/*!****************************************************!*\
  !*** ./src/app/services/secure-storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecureStorageService": () => (/* binding */ SecureStorageService)
/* harmony export */ });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 36240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
// import SecureLS from 'secure-ls';



class SecureStorageService {
    constructor() {
        this._environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment;
    }
    setItem(key, data) {
        try {
            const stringifiedData = JSON.stringify(data);
            const encryptedData = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(stringifiedData, this._environment.ecureStorageKey).toString();
            localStorage.setItem(key, encryptedData);
        }
        catch (e) {
            console.error('Error setting item to secure storage:', e);
        }
    }
    getItem(key) {
        try {
            const encryptedData = localStorage.getItem(key);
            if (encryptedData === null) {
                return null;
            }
            const decryptedBytes = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.decrypt(encryptedData, this._environment.ecureStorageKey);
            const decryptedData = decryptedBytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8);
            return JSON.parse(decryptedData);
        }
        catch (e) {
            console.error('Error getting item from secure storage:', key, e);
            return null;
        }
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
    getAllKeys() {
        const keys = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key) {
                keys.push(key);
            }
        }
        return keys;
    }
    clear() {
        localStorage.clear();
    }
}
SecureStorageService.ɵfac = function SecureStorageService_Factory(t) { return new (t || SecureStorageService)(); };
SecureStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SecureStorageService, factory: SecureStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 71098:
/*!********************************************!*\
  !*** ./src/app/shared/app-http.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHttpService": () => (/* binding */ AppHttpService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);


class AppHttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getHttpClient() {
        return this.httpClient;
    }
    getCountriesList(country) {
        const headers = {
            'X-CSCAPI-KEY': '',
        };
        return this.httpClient.get(`https://countriesnow.space/api/v0.1/countries`, { headers: headers });
    }
}
AppHttpService.ɵfac = function AppHttpService_Factory(t) { return new (t || AppHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AppHttpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppHttpService, factory: AppHttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 47352:
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumbs/breadcrumbs.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbsComponent": () => (/* binding */ BreadcrumbsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


const _c0 = function (a0) { return { "active": a0 }; };
function BreadcrumbsComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r1.active == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.label, " ");
} }
/**
 * Bread Crumbs Component
 */
class BreadcrumbsComponent {
    constructor() { }
    ngOnInit() {
    }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(); };
BreadcrumbsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbsComponent, selectors: [["app-breadcrumbs"]], inputs: { title: "title", breadcrumbItems: "breadcrumbItems" }, decls: 7, vars: 2, consts: [[1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between", "gap-3"], [1, "mb-0", 3, "innerHTML"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [4, "ngFor", "ngForOf"], [1, "breadcrumb-item", 3, "ngClass"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BreadcrumbsComponent_ng_container_6_Template, 3, 4, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1icy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 96790:
/*!*************************************!*\
  !*** ./src/app/shared/enum/role.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": () => (/* binding */ Role)
/* harmony export */ });
var Role;
(function (Role) {
    Role["ANALYTIC"] = "ANALYTIC";
    Role["ADMIN"] = "ADMIN";
    Role["AUTHOR"] = "AUTHOR";
    Role["CENTER_ADMIN"] = "CENTER_ADMIN";
    Role["EXAMINER"] = "EXAMINER";
    Role["MARKER"] = "MARKER";
    Role["MODERATOR"] = "MODERATOR";
    Role["MONITOR"] = "MONITOR";
})(Role || (Role = {}));


/***/ }),

/***/ 73637:
/*!***********************************************************!*\
  !*** ./src/app/shared/passage-service/passage.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassageService": () => (/* binding */ PassageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PassageService {
    constructor() {
        this.passages = [];
        /* this.passages = [
          {
            id: '',
            reference: '',
            stimulus: '',
            tags: [{ id: '', tagName: '' }],
            items: [
              { id: '', reference: '', stimulus: '' },
              { id: '', reference: '', stimulus: '' },
              { id: '', reference: '', stimulus: '' },
            ],
          },
          {
            id: '',
            reference: '',
            stimulus: '',
            tags: [{ id: '', tagName: '' }],
            items: [
              { id: '', reference: '', stimulus: '' },
              { id: '', reference: '', stimulus: '' },
            ],
          },
          {
            id: '',
            reference: '',
            stimulus: '',
            tags: [
              { id: '', tagName: '' },
              { id: '', tagName: '' },
              { id: '', tagName: '' },
            ],
            items: [{ id: '', reference: '', stimulus: '' }],
          },
        ]; */
    }
    savePassage(passage) {
        this.passages.push(passage);
    }
    getAllPassages() {
        return this.passages;
    }
    getPassage(id) {
        return this.passages.filter(passage => passage.id === id);
    }
    deletePassage(index) {
        return this.passages.splice(index, 1);
    }
    deleteAllPassages() {
        this.passages.splice(0, this.passages.length);
    }
}
PassageService.ɵfac = function PassageService_Factory(t) { return new (t || PassageService)(); };
PassageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PassageService, factory: PassageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 26432:
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/html-sanitizer.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlSanitizerPipe": () => (/* binding */ HtmlSanitizerPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 50318);


class HtmlSanitizerPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}
HtmlSanitizerPipe.ɵfac = function HtmlSanitizerPipe_Factory(t) { return new (t || HtmlSanitizerPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
HtmlSanitizerPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "htmlSanitizer", type: HtmlSanitizerPipe, pure: true });


/***/ }),

/***/ 36564:
/*!***********************************************!*\
  !*** ./src/app/shared/scrollspy.directive.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollspyDirective": () => (/* binding */ ScrollspyDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);



class ScrollspyDirective {
    // tslint:disable-next-line: variable-name
    constructor(_el, document) {
        this._el = _el;
        this.document = document;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ;
    /**
     * Window scroll method
     */
    onScroll(event) {
        let currentSection;
        const children = this._el.nativeElement.querySelectorAll('section');
        const scrollTop = this.document.documentElement.scrollTop;
        const parentOffset = this.document.documentElement.offsetTop;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }
}
ScrollspyDirective.ɵfac = function ScrollspyDirective_Factory(t) { return new (t || ScrollspyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
ScrollspyDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollspyDirective, selectors: [["", "appScrollspy", ""]], hostBindings: function ScrollspyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollspyDirective_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { spiedTags: "spiedTags" }, outputs: { sectionChange: "sectionChange" } });


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-swiper-wrapper */ 70598);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-count-to */ 97321);
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _scrollspy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollspy.directive */ 36564);
/* harmony import */ var _app_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-http.service */ 71098);
/* harmony import */ var _passage_service_passage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./passage-service/passage.service */ 73637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);



// Swiper Slider

// Counter


// import { ClientLogoComponent } from './landing/client-logo/client-logo.component';
// import { ServicesComponent } from './landing/services/services.component';
// import { CollectionComponent } from './landing/collection/collection.component';
// import { CtaComponent } from './landing/cta/cta.component';
// import { DesignedComponent } from './landing/designed/designed.component';
// import { PlanComponent } from './landing/plan/plan.component';
// import { FaqsComponent } from './landing/faqs/faqs.component';
// import { ReviewComponent } from './landing/review/review.component';
// import { CounterComponent } from './landing/counter/counter.component';
// import { WorkProcessComponent } from './landing/work-process/work-process.component';
// import { TeamComponent } from './landing/team/team.component';
// import { ContactComponent } from './landing/contact/contact.component';
// import { FooterComponent } from './landing/footer/footer.component';




const DEFAULT_SWIPER_CONFIG = {
    direction: "horizontal",
    slidesPerView: "auto",
};
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_app_http_service__WEBPACK_IMPORTED_MODULE_3__.AppHttpService, _passage_service_passage_service__WEBPACK_IMPORTED_MODULE_4__.PassageService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAccordionModule,
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__.SwiperModule,
            angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsComponent,
        // ClientLogoComponent,
        // ServicesComponent,
        // CollectionComponent,
        // CtaComponent,
        // DesignedComponent,
        // PlanComponent,
        // FaqsComponent,
        // ReviewComponent,
        // CounterComponent,
        // WorkProcessComponent,
        // TeamComponent,
        // ContactComponent,
        // FooterComponent,
        _scrollspy_directive__WEBPACK_IMPORTED_MODULE_2__.ScrollspyDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAccordionModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__.SwiperModule,
        angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule], exports: [_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsComponent,
        // ClientLogoComponent,
        // ServicesComponent,
        // CollectionComponent,
        // CtaComponent,
        // DesignedComponent,
        // PlanComponent,
        // FaqsComponent,
        // ReviewComponent,
        // CounterComponent,
        // WorkProcessComponent,
        // TeamComponent,
        // ContactComponent,
        // FooterComponent,
        _scrollspy_directive__WEBPACK_IMPORTED_MODULE_2__.ScrollspyDirective] }); })();


/***/ }),

/***/ 79089:
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _services_secure_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/secure-storage.service */ 50147);




class UserService {
    constructor(http, secureStorage) {
        this.http = http;
        this.secureStorage = secureStorage;
    }
    setCurrentUser(account) {
        this.currentUser = account;
    }
    getCurrentUser() {
        return this.currentUser
            ? this.currentUser
            : this.getCurrentUserAfterReload();
    }
    getCurrentUserAfterReload() {
        const user = this.secureStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.secureStorageId);
        return user;
    }
    getUserRole() {
        if (this.currentUser != null)
            return this.currentUser.authority;
        else
            return null;
    }
    hasRole(role) {
        if (this.currentUser != null) {
            if (this.currentUser.authority == role) {
                return true;
            }
        }
        return false;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_secure_storage_service__WEBPACK_IMPORTED_MODULE_1__.SecureStorageService)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //developmentIP: "http://35.178.141.73:8081",
    // developmentIP: 'http://' + location.hostname + ':8081/examalpha/api/v1',
    // developmentIP: "https://736ab3c5162e.ngrok.app/examalpha/api/v1",
    //new
    //developmentIP: "https://b28be17333dc.ngrok.app/examalpha/api/v1",
    // developmentIP: 'https://0df90ac58b47.ngrok.app/examalpha/api/v1',
    developmentIP: 'https://admin-examalpha.ngrok.app/examalpha/api/v1',
    // developmentIP: 'https://beta.examalpha.com:6080/examalpha/api/v1',
    // developmentIP: 'http://192.168.0.104:5002/examalpha/api/v1',
    // developmentIP: "http://" + location.hostname + ":8081/examalpha/api/v1",
    //developmentIP: 'http://192.168.101.141:8081',
    //developmentIP: 'http://192.168.177.141:8081',
    //schedulerIP: 'http://192.168.177.141:3201',
    //schedulerIP: 'http://35.178.141.73:3201',
    // schedulerIP: "https://7695bc53780.ngrok.app",
    // new
    //schedulerIP: "https://500beb525a2a.ngrok.app",
    // schedulerIP: 'https://5775f45a3fec.ngrok.app',
    // schedulerIP: 'https://beta.examalpha.com:6080', 
    schedulerIP: 'https://admin-examalpha.ngrok.app',
    // schedulerIP: 'http://' + location.hostname + ':3201',
    org_id: '',
    key: '',
    defaultauth: 'fackbackend',
    firebaseConfig: {
        apiKey: '',
        authDomain: '',
        databaseURL: '',
        projectId: '',
        storageBucket: '',
        messagingSenderId: '',
        appId: '',
        measurementId: '',
    },
    secureStorageId: '_ID_MAP',
    ecureStorageKey: '######_ID_SECURE',
    showAppAssets: true,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 42480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map