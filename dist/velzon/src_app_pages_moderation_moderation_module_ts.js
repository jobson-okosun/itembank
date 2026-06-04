"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([["src_app_pages_moderation_moderation_module_ts"],{

/***/ 68813:
/*!*****************************************************************!*\
  !*** ./src/app/pages/moderation/models/new-moderation.model.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewModeration": () => (/* binding */ NewModeration)
/* harmony export */ });
class NewModeration {
}


/***/ }),

/***/ 55505:
/*!***************************************************************!*\
  !*** ./src/app/pages/moderation/moderation-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModerationRoutingModule": () => (/* binding */ ModerationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _moderation_moderation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moderation/moderation.component */ 61528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _moderation_moderation_component__WEBPACK_IMPORTED_MODULE_0__.ModerationComponent,
    },
];
class ModerationRoutingModule {
}
ModerationRoutingModule.ɵfac = function ModerationRoutingModule_Factory(t) { return new (t || ModerationRoutingModule)(); };
ModerationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ModerationRoutingModule });
ModerationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModerationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 71356:
/*!*******************************************************!*\
  !*** ./src/app/pages/moderation/moderation.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModerationModule": () => (/* binding */ ModerationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/layouts/layouts.module */ 52372);
/* harmony import */ var _moderation_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moderation-routing.module */ 55505);
/* harmony import */ var _moderation_moderation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moderation/moderation.component */ 61528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








class ModerationModule {
}
ModerationModule.ɵfac = function ModerationModule_Factory(t) { return new (t || ModerationModule)(); };
ModerationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ModerationModule });
ModerationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _moderation_routing_module__WEBPACK_IMPORTED_MODULE_2__.ModerationRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalModule,
            src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_1__.LayoutsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ModerationModule, { declarations: [_moderation_moderation_component__WEBPACK_IMPORTED_MODULE_3__.ModerationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _moderation_routing_module__WEBPACK_IMPORTED_MODULE_2__.ModerationRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalModule,
        src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_1__.LayoutsModule] }); })();


/***/ }),

/***/ 6671:
/*!********************************************************!*\
  !*** ./src/app/pages/moderation/moderation.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModerationService": () => (/* binding */ ModerationService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class ModerationService {
    constructor(http) {
        this.http = http;
    }
    fetchAllModeratedSubjects() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/moderation/policy`, { withCredentials: true });
    }
    enableDisableModeration(moderationPolicy) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/moderation/policy`, moderationPolicy, { withCredentials: true });
    }
}
ModerationService.ɵfac = function ModerationService_Factory(t) { return new (t || ModerationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ModerationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ModerationService, factory: ModerationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 61528:
/*!*********************************************************************!*\
  !*** ./src/app/pages/moderation/moderation/moderation.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModerationComponent": () => (/* binding */ ModerationComponent)
/* harmony export */ });
/* harmony import */ var _models_new_moderation_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/new-moderation.model */ 68813);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _items_item_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../items/item-http.service */ 45911);
/* harmony import */ var _moderation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../moderation.service */ 6671);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _layouts_rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layouts/rightsidebar/rightsidebar.component */ 56034);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);













function ModerationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Loading subjects...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ModerationComponent_div_2_div_13_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Moderation enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ModerationComponent_div_2_div_13_div_15_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 44);
} }
function ModerationComponent_div_2_div_13_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ul", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ModerationComponent_div_2_div_13_div_15_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const subject_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r8.enableDisableModerationActionCall(subject_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ModerationComponent_div_2_div_13_div_15_i_8_Template, 1, 0, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", subject_r4.moderationId === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", subject_r4.moderationId !== null ? "Disable moderation" : "Enable moderation", "");
} }
function ModerationComponent_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ModerationComponent_div_2_div_13_span_14_Template, 3, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ModerationComponent_div_2_div_13_div_15_Template, 10, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", subject_r4.subjectName[0].toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](subject_r4.subjectName.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", subject_r4.moderationId !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.currentUser.authorities.includes("ADMIN"));
} }
function ModerationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "List of all Subjects");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ModerationComponent_div_2_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r12.searchSubject = $event; })("ngModelChange", function ModerationComponent_div_2_Template_input_ngModelChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r14.filterSubjects(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "app-rightsidebar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("settingsButtonClicked", function ModerationComponent_div_2_Template_app_rightsidebar_settingsButtonClicked_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r15.onSettingsButtonClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ModerationComponent_div_2_div_13_Template, 16, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r1.searchSubject);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("currentView", "Moderation Subjects");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.subjects);
} }
function ModerationComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h4", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "No Subject Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Go to Create Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class ModerationComponent {
    constructor(itemService, moderationService, notifier, userService) {
        this.itemService = itemService;
        this.moderationService = moderationService;
        this.notifier = notifier;
        this.userService = userService;
        this.subjects = [];
        this.allSubjects = [];
        this.subjectName = '';
        this.topicName = '';
        this.showExtraField = false;
        this.newModeration = new _models_new_moderation_model__WEBPACK_IMPORTED_MODULE_0__.NewModeration();
        this.loading = true;
        this.processing = false;
    }
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
        const rightBar = document.getElementById('theme-settings-offcanvas');
        if (rightBar != null) {
            rightBar.classList.toggle('show');
            rightBar.setAttribute('style', 'visibility: visible;');
        }
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Moderation' }];
        this.currentUser = this.userService.getCurrentUser();
        /* this.itemService.fetchAllSubjectsItems().subscribe((value) => {
          this.allSubjects = value;
        }, (error: HttpErrorResponse) => {
          console.log(error);
        }) */
        this.moderationService.fetchAllModeratedSubjects().subscribe((value) => {
            if (value) {
                value.forEach((element) => {
                    if (!element.moderationId) {
                        element.moderationId = null;
                    }
                });
                value.sort((a, b) => {
                    if (a.moderationId == null && b.moderationId !== null) {
                        return 1;
                    }
                    else if (a.moderationId !== null && b.moderationId === null) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });
                this.subjects = value;
                this.loading = false;
                /* console.log(this.subjects); */
            }
        }, (error) => {
            this.loading = false;
            this.notifier.notify('error', `${error}`);
        });
    }
    enableDisableModerationActionCall(subject) {
        // console.log(subject);
        if (subject.moderationId === null) {
            this.newModeration.subjectEntityId = subject.entityId;
            this.newModeration.subjectId = subject.subjectId;
            this.newModeration.enableModeration = true;
        }
        else {
            this.newModeration.subjectEntityId = subject.entityId;
            this.newModeration.subjectId = subject.subjectId;
            this.newModeration.enableModeration = false;
        }
        //console.log(this.newModeration, 'moderation value');
        this.processing = true;
        this.activityLoader(subject.moderationId, subject.subjectName);
        this.moderationService
            .enableDisableModeration(this.newModeration)
            .subscribe((value) => {
            if (value.id && value.id !== 'Moderation disabled for subject') {
                this.notifier.notify('success', `Moderation has been enabled for ${subject.subjectName}`);
            }
            else if (value.id &&
                value.id === 'Moderation disabled for subject') {
                this.notifier.notify('error', `${value.id} ${subject.subjectName}`);
            }
            this.processing = false;
            this.activityLoader();
            this.ngOnInit();
        }, (error) => {
            this.processing = false;
            this.activityLoader();
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                icon: 'error',
                title: 'Failed!',
                text: `${error.error.message}`,
            });
        });
    }
    filterSubjects() {
        let filteredSubjects = [];
        if (this.allSubjects.length == 0) {
            this.allSubjects = this.subjects;
        }
        // console.log(this.searchSubject);
        if (this.searchSubject) {
            for (let i = 0; i <= this.searchSubject.length; i++) {
                this.subjects.filter((subject) => {
                    if (subject.subjectName.startsWith(this.searchSubject) &&
                        !filteredSubjects.includes(subject)) {
                        filteredSubjects.push(subject);
                        //return subject;
                    }
                });
            }
        }
        this.subjects = filteredSubjects;
        if (this.subjects.length === 0) {
            this.subjects = this.allSubjects;
            this.allSubjects = [];
        }
        //console.log(filteredSubjects);
    }
    activityLoader(status, subject) {
        if (!this.processing) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
            //Swal.hideLoading();
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: status === null
                    ? `Enabling moderation for ${subject}`
                    : `Disabling moderation for ${subject}`,
                allowEnterKey: false,
                allowEscapeKey: false,
                allowOutsideClick: false,
                timerProgressBar: true,
                didOpen: () => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().showLoading();
                },
            });
        }
    }
}
ModerationComponent.ɵfac = function ModerationComponent_Factory(t) { return new (t || ModerationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_items_item_http_service__WEBPACK_IMPORTED_MODULE_2__.ItemHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_moderation_service__WEBPACK_IMPORTED_MODULE_3__.ModerationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_8__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService)); };
ModerationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ModerationComponent, selectors: [["app-moderation"]], decls: 4, vars: 4, consts: [["title", "MODERATION", 3, "breadcrumbItems"], ["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], [4, "ngIf"], ["class", "d-flex flex-column justify-content-center align-items-center", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "visually-hidden"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"], [1, "row", "mb-3", "pb-1"], [1, "col-12"], [1, "d-flex", "align-items-lg-center", "flex-lg-row", "flex-sm-row", "justify-content-between", "flex-column"], [1, "flex-grow-1"], [1, "fs-16", "mb-1"], [1, "d-flex", "gap-2", "mt-lg-0"], [1, "search-box", "ms-2"], ["type", "text", "name", "searchTerm", "placeholder", "Search...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "ri-search-line", "search-icon"], [3, "currentView", "settingsButtonClicked"], [1, "row"], ["class", "col-lg-4 col-md-6 col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "card"], [1, "card-body", "p-2"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0", "me-3"], [1, "avatar-sm"], [1, "avatar-title", "bg-light", "text-primary", "rounded", "fs-24"], [1, "flex-grow-1", "overflow-hidden"], [1, "text-body", "text-truncate", "d-block"], [1, "d-flex", "gap-1", "align-items-center", "mt-2"], ["ngbTooltip", "NO OF TOPICS", 1, "d-flex"], ["class", "d-flex align-items-center badge badge-soft-success fs-14", 4, "ngIf"], ["class", "flex-shrink-0 ms-2", 4, "ngIf"], [1, "d-flex", "align-items-center", "badge", "badge-soft-success", "fs-14"], [1, "ri-check-fill"], [1, "flex-shrink-0", "ms-2"], [1, "d-flex", "gap-1"], ["ngbDropdown", "", 1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-icon", "text-muted", "btn-sm", "fs-18", "dropdown", "arrow-none"], [1, "ri-more-fill"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item", 3, "click"], ["class", "ri-check-line align-bottom me-2 text-muted", 4, "ngIf"], [1, "ri-check-line", "align-bottom", "me-2", "text-muted"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], ["src", "assets/images/blank_pages/empty-pg.png", "width", "300", "height", "300", 1, "my-2"], [1, "d-flex", "flex-column", "gap-3", "justify-content-center", "align-items-center"], [1, "text-secondary", "fw-bold"], ["routerLink", "/examalpha/subjects", 1, "btn", "btn-outline-primary"]], template: function ModerationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ModerationComponent_div_1_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ModerationComponent_div_2_Template, 14, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ModerationComponent_div_3_Template, 7, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.subjects.length > 0 && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.subjects.length == 0 && !ctx.loading);
    } }, directives: [_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _layouts_rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_6__.RightsidebarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTooltip, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownMenu, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RlcmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_moderation_moderation_module_ts.js.map