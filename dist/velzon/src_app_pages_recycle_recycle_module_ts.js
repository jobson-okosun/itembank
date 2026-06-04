"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([["src_app_pages_recycle_recycle_module_ts"],{

/***/ 26108:
/*!******************************************************************!*\
  !*** ./src/app/pages/recycle/models/new-recycle-policy.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewRecyclePolicy": () => (/* binding */ NewRecyclePolicy)
/* harmony export */ });
class NewRecyclePolicy {
}


/***/ }),

/***/ 63965:
/*!***************************************************************!*\
  !*** ./src/app/pages/recycle/models/recycle-duration-enum.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecycleDurationEnum": () => (/* binding */ RecycleDurationEnum)
/* harmony export */ });
var RecycleDurationEnum;
(function (RecycleDurationEnum) {
    RecycleDurationEnum["HOUR"] = "HOUR";
    RecycleDurationEnum["DAY"] = "DAY";
    RecycleDurationEnum["WEEK"] = "WEEK";
    RecycleDurationEnum["MONTH"] = "MONTH";
    RecycleDurationEnum["YEAR"] = "YEAR";
})(RecycleDurationEnum || (RecycleDurationEnum = {}));


/***/ }),

/***/ 88174:
/*!*******************************************************!*\
  !*** ./src/app/pages/recycle/models/restore-items.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestoreItems": () => (/* binding */ RestoreItems)
/* harmony export */ });
class RestoreItems {
    constructor() {
        this.itemIds = [];
    }
}


/***/ }),

/***/ 2932:
/*!********************************************************************************!*\
  !*** ./src/app/pages/recycle/recycle-dashboard/recycle-dashboard.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecycleDashboardComponent": () => (/* binding */ RecycleDashboardComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_new_recycle_policy_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/new-recycle-policy.model */ 26108);
/* harmony import */ var _models_recycle_duration_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/recycle-duration-enum */ 63965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _recycle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recycle.service */ 44502);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _layouts_rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/rightsidebar/rightsidebar.component */ 56034);












function RecycleDashboardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Loading subjects...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RecycleDashboardComponent_div_2_div_13_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " In Recycle:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](subject_r10.itemsInBin);
} }
function RecycleDashboardComponent_div_2_div_13_li_21_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecycleDashboardComponent_div_2_div_13_li_21_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const subject_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5); return ctx_r17.openModal(_r3, subject_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Add policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RecycleDashboardComponent_div_2_div_13_li_22_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecycleDashboardComponent_div_2_div_13_li_22_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7); return ctx_r20.openEditPolicyModal(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Edit policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RecycleDashboardComponent_div_2_div_13_li_23_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecycleDashboardComponent_div_2_div_13_li_23_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const subject_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](9); return ctx_r22.openDeleteRecyclePolicyConfirmationModal(_r7, subject_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Delete policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RecycleDashboardComponent_div_2_div_13_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " view questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("routerLink", "/examalpha/recycle/", subject_r10.subjectName, "/", subject_r10.subjectId, "");
} }
function RecycleDashboardComponent_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, RecycleDashboardComponent_div_2_div_13_div_14_Template, 5, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecycleDashboardComponent_div_2_div_13_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27); const subject_r10 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r26.fetchSubjectRecycle(subject_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, RecycleDashboardComponent_div_2_div_13_li_21_Template, 4, 0, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, RecycleDashboardComponent_div_2_div_13_li_22_Template, 4, 0, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, RecycleDashboardComponent_div_2_div_13_li_23_Template, 4, 0, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, RecycleDashboardComponent_div_2_div_13_li_25_Template, 4, 2, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 7, subject_r10.subjectName[0]), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 9, subject_r10.subjectName));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", subject_r10.recycleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", subject_r10.recycleId === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", subject_r10.recycleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", subject_r10.recycleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", subject_r10.recycleId);
} }
function RecycleDashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "List of all Subjects");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RecycleDashboardComponent_div_2_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r28.searchSubject = $event; })("ngModelChange", function RecycleDashboardComponent_div_2_Template_input_ngModelChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.filterSubjects(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "app-rightsidebar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("settingsButtonClicked", function RecycleDashboardComponent_div_2_Template_app_rightsidebar_settingsButtonClicked_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r31.onSettingsButtonClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, RecycleDashboardComponent_div_2_div_13_Template, 26, 11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.searchSubject);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("currentView", "Moderation Subjects");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.subjects);
} }
function RecycleDashboardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h4", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "No Subject Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Go to Create Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RecycleDashboardComponent_ng_template_4_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const duration_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", duration_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", duration_r37 + "(s)", " ");
} }
function RecycleDashboardComponent_ng_template_4_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecycleDashboardComponent_ng_template_4_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r38.savePolicy(_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Create Policy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RecycleDashboardComponent_ng_template_4_button_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Creating Policy...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Creating Policy... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r36.submitted);
} }
function RecycleDashboardComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Create Recycle Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecycleDashboardComponent_ng_template_4_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const modal_r32 = restoredCtx.$implicit; return modal_r32.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function RecycleDashboardComponent_ng_template_4_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r42.savePolicy(_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Add questions to recycle after");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RecycleDashboardComponent_ng_template_4_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r43.newRecyclePolicy.maxUsageCount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " usage(s). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Recycle used questions after");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RecycleDashboardComponent_ng_template_4_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r44.newRecyclePolicy.lifeSpan = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "select", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RecycleDashboardComponent_ng_template_4_Template_select_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r45.newRecyclePolicy.recycleDuration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, RecycleDashboardComponent_ng_template_4_option_25_Template, 2, 2, "option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecycleDashboardComponent_ng_template_4_Template_button_click_28_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const modal_r32 = restoredCtx.$implicit; return modal_r32.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, RecycleDashboardComponent_ng_template_4_button_31_Template, 3, 0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, RecycleDashboardComponent_ng_template_4_button_32_Template, 7, 1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" SUBJECT: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 7, ctx_r4.selectedSubject.subjectName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r4.newRecyclePolicy.maxUsageCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r4.newRecyclePolicy.lifeSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r4.newRecyclePolicy.recycleDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.durations);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r4.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.submitted);
} }
function RecycleDashboardComponent_ng_template_6_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const duration_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", duration_r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", duration_r52, " ");
} }
function RecycleDashboardComponent_ng_template_6_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecycleDashboardComponent_ng_template_6_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r54); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r53.updatePolicy(_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RecycleDashboardComponent_ng_template_6_button_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Updating Policy...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Updating Policy... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r51.submitted);
} }
function RecycleDashboardComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Edit Recycle Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecycleDashboardComponent_ng_template_6_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56); const modal_r47 = restoredCtx.$implicit; return modal_r47.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function RecycleDashboardComponent_ng_template_6_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56); const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r57.updatePolicy(_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Add questions to recycle after");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RecycleDashboardComponent_ng_template_6_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r58.newRecyclePolicy.maxUsageCount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " usage(s). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Recycle used items after");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RecycleDashboardComponent_ng_template_6_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r59.newRecyclePolicy.lifeSpan = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "select", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RecycleDashboardComponent_ng_template_6_Template_select_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r60.newRecyclePolicy.recycleDuration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Choose period");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, RecycleDashboardComponent_ng_template_6_option_27_Template, 2, 2, "option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecycleDashboardComponent_ng_template_6_Template_button_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56); const modal_r47 = restoredCtx.$implicit; return modal_r47.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, RecycleDashboardComponent_ng_template_6_button_33_Template, 3, 0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, RecycleDashboardComponent_ng_template_6_button_34_Template, 7, 1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" SUBJECT: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 7, ctx_r6.selectedSubject.subjectName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r6.newRecyclePolicy.maxUsageCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r6.newRecyclePolicy.lifeSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r6.newRecyclePolicy.recycleDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r6.durations);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r6.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.submitted);
} }
function RecycleDashboardComponent_ng_template_8_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecycleDashboardComponent_ng_template_8_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r66.deleteRecyclePolicy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Yes, Delete it. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RecycleDashboardComponent_ng_template_8_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Deleting Policy...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Deleting Policy... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r65.submitted);
} }
function RecycleDashboardComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Delete Recycle Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecycleDashboardComponent_ng_template_8_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r69); const modal_r62 = restoredCtx.$implicit; return modal_r62.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function RecycleDashboardComponent_ng_template_8_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r69); const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r70.updatePolicy(_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Are you sure you want to delete this recycle policy?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "This action cannot be reversed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecycleDashboardComponent_ng_template_8_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r69); const modal_r62 = restoredCtx.$implicit; return modal_r62.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "No, Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, RecycleDashboardComponent_ng_template_8_button_19_Template, 3, 0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, RecycleDashboardComponent_ng_template_8_button_20_Template, 7, 1, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r8.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.submitted);
} }
class RecycleDashboardComponent {
    constructor(modalService, router, notifier, recycleService) {
        this.modalService = modalService;
        this.router = router;
        this.notifier = notifier;
        this.recycleService = recycleService;
        this.subjects = [];
        this.allSubjects = [];
        this.newRecyclePolicy = new _models_new_recycle_policy_model__WEBPACK_IMPORTED_MODULE_1__.NewRecyclePolicy();
        this.submitted = false;
        this.loading = true;
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
        this.breadCrumbItems = [{ label: 'Recycle' }];
        this.recycleService.fetchAllRecycleSubjects().subscribe((value) => {
            value.sort((a, b) => {
                return b.itemsInBin - a.itemsInBin;
            });
            this.subjects = value;
            this.loading = false;
            //console.log(this.subjects);
        }, (error) => {
            this.loading = false;
            this.notifier.notify('error', `${error.error.message}`);
        });
        this.durations = Object.values(_models_recycle_duration_enum__WEBPACK_IMPORTED_MODULE_2__.RecycleDurationEnum);
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
        // console.log(filteredSubjects);
    }
    openModal(recyclePolicyModal, subject) {
        this.selectedSubject = subject;
        this.newRecyclePolicy = new _models_new_recycle_policy_model__WEBPACK_IMPORTED_MODULE_1__.NewRecyclePolicy();
        this.modalService.open(recyclePolicyModal, { centered: true });
    }
    openEditPolicyModal(editRecyclePolicyModal) {
        this.modalService.open(editRecyclePolicyModal, { centered: true });
    }
    fetchSubjectRecycle(subject) {
        this.selectedSubject = subject;
        if (subject.recycleId === null) {
            return;
        }
        else {
            this.recycleService.fetchSubjectRecycle(subject.recycleId).subscribe((value) => {
                this.newRecyclePolicy = value;
                // console.log('to edit', this.newRecyclePolicy);
            }, (error) => {
                // console.log(error);
            });
        }
    }
    savePolicy(form) {
        this.newRecyclePolicy.enabled = true;
        this.newRecyclePolicy.subjectId = this.selectedSubject.subjectId;
        // console.log(this.newRecyclePolicy);
        if (form.valid === false) {
            return this.notifier.notify('error', 'All Fields must be entered!');
        }
        if (this.newRecyclePolicy.maxUsageCount > 10 ||
            this.newRecyclePolicy.maxUsageCount < 0) {
            return this.notifier.notify('error', 'Max Usage must be between 1-10.');
        }
        else {
            this.submitted = true;
            this.recycleService.createNewPolicy(this.newRecyclePolicy).subscribe((value) => {
                if (value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        icon: 'success',
                        title: 'Congratulations',
                        text: 'Your recycle policy has been saved successfully!',
                    });
                }
                this.submitted = false;
                form.reset();
                this.modalService.dismissAll();
                this.ngOnInit();
                //this.newRecyclePolicy = new NewRecyclePolicy();
            }, (error) => {
                this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    icon: 'error',
                    title: 'Failed',
                    text: error.error.message,
                });
            });
        }
    }
    updatePolicy(recycleForm) {
        this.submitted = true;
        this.recycleService
            .editRecyclePolicy(this.selectedSubject.recycleId, this.newRecyclePolicy)
            .subscribe((value) => {
            if (value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Congratulations',
                    text: `You have successfully updated the recycle policy for ${this.selectedSubject.subjectName.toUpperCase()} subject.`,
                    icon: 'success',
                });
                this.submitted = false;
                this.ngOnInit();
                this.modalService.dismissAll();
                recycleForm.reset();
                //this.newRecyclePolicy = new NewRecyclePolicy();
            }
        }, (error) => {
            this.submitted = false;
            this.notifier.notify('error', `${error.error.message}`);
        });
    }
    /* viewSubject(subject: string) {
      this.router.navigate([
        '/examalpha/recycle/' + subject.toLowerCase() + '/' + subject,
      ]);
    } */
    openDeleteRecyclePolicyConfirmationModal(deleteRecyclePolicyModal, recyleSubject) {
        this.selectedSubject = recyleSubject;
        this.modalService.open(deleteRecyclePolicyModal, {
            centered: true,
            size: 'md',
        });
    }
    deleteRecyclePolicy() {
        this.submitted = true;
        this.recycleService
            .deleteRecyclePolicy(this.selectedSubject.recycleId, this.selectedSubject.subjectId)
            .subscribe((value) => {
            if (value) {
                this.notifier.notify('success', `${value}`);
            }
            this.submitted = false;
            this.modalService.dismissAll();
            this.ngOnInit();
        }, (error) => {
            this.submitted = false;
            this.notifier.notify('error', `${error.error.message}`);
        });
    }
    restoreAllItemsInSubject(subject) {
        this.recycleService.restoreAllItemsInSubject(subject.subjectId).subscribe((value) => {
            if (value) {
                this.notifier.notify(`success`, 'All the questions in recycle has successfully been restored!');
            }
        }, (error) => {
            this.notifier.notify('', `${error.error.message}`);
        });
    }
}
RecycleDashboardComponent.ɵfac = function RecycleDashboardComponent_Factory(t) { return new (t || RecycleDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_9__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_recycle_service__WEBPACK_IMPORTED_MODULE_3__.RecycleService)); };
RecycleDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: RecycleDashboardComponent, selectors: [["app-recycle-dashboard"]], decls: 10, vars: 4, consts: [["title", "RECYCLE", 3, "breadcrumbItems"], ["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], [4, "ngIf"], ["class", "d-flex flex-column justify-content-center align-items-center", 4, "ngIf"], [3, "showModal"], ["recyclePolicyModal", ""], ["editRecyclePolicyModal", ""], ["deleteRecyclePolicyModal", ""], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "visually-hidden"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"], [1, "row", "mb-3", "pb-1"], [1, "col-12"], [1, "d-flex", "align-items-lg-center", "flex-lg-row", "flex-sm-row", "justify-content-between", "flex-column"], [1, "flex-grow-1"], [1, "fs-16", "mb-1"], [1, "d-flex", "gap-2", "mt-lg-0"], [1, "search-box", "ms-2"], ["type", "text", "name", "searchTerm", "placeholder", "Search...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "ri-search-line", "search-icon"], [3, "currentView", "settingsButtonClicked"], [1, "row"], ["class", "col-lg-4 col-md-6 col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "card"], [1, "card-body", "p-2"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0", "me-3"], [1, "avatar-sm"], [1, "avatar-title", "bg-light", "text-primary", "rounded", "fs-24"], [1, "flex-grow-1", "overflow-hidden"], [1, "text-body", "text-truncate", "d-block"], ["class", "d-flex gap-1 align-items-center mt-2", 4, "ngIf"], [1, "flex-shrink-0", "ms-2"], [1, "d-flex", "gap-1"], ["ngbDropdown", "", 1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-icon", "text-muted", "btn-sm", "fs-18", "dropdown", "arrow-none", 3, "click"], ["ngbTooltip", "Settings", 1, "ri-settings-4-line"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["style", "cursor: pointer", 4, "ngIf"], [1, "dropdown-divider"], [1, "d-flex", "gap-1", "align-items-center", "mt-2"], ["title", "No of Items in Recycle", 1, "d-flex", "gap-1", "align-items-center", "badge", "badge-soft-success", "fs-12"], [1, "ri-file-list-line"], [2, "cursor", "pointer"], [1, "dropdown-item", 3, "click"], [1, "ri-add-line", "align-bottom", "me-2", "text-muted"], [1, "ri-edit-line", "align-bottom", "me-2", "text-muted"], [1, "ri-delete-bin-2-line", "align-bottom", "me-2", "text-muted"], [1, "dropdown-item", 3, "routerLink"], [1, "ri-eye-line", "align-bottom", "me-2", "text-muted"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], ["src", "assets/images/blank_pages/empty-pg.png", "width", "300", "height", "300", 1, "my-2"], [1, "d-flex", "flex-column", "gap-3", "justify-content-center", "align-items-center"], [1, "text-secondary", "fw-bold"], ["routerLink", "/examalpha/subjects", 1, "btn", "btn-outline-primary"], [1, "ri-add-line", "me-2"], [1, "modal-header"], [1, "text-center", "mb-4"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "p-4"], [3, "ngSubmit"], ["recycleForm", "ngForm"], [1, "text-black", "fw-bold", "text-center"], [1, "d-flex", "flex-wrap", "gap-2", "align-items-center", "mb-3"], [1, "col-xl-2", "col-md-2", "col-sm-2"], ["type", "number", "min", "1", "max", "10", "placeholder", "1", "name", "maxUsageCount", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "1", "placeholder", "60", "name", "lifespan", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-xl-3", "col-md-3", "col-sm-3"], ["name", "duration", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "d-flex", "gap-2", "float-end", "mt-4"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-danger", "d-flex", "gap-1", "align-items-center", 3, "click"], [1, "ri-close-line"], ["type", "button", "class", "btn btn-primary d-flex gap-1 align-items-center", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-load", 3, "disabled", 4, "ngIf"], [3, "value"], ["type", "button", 1, "btn", "btn-primary", "d-flex", "gap-1", "align-items-center", 3, "click"], [1, "ri-save-line"], [1, "btn", "btn-outline-primary", "btn-load", 3, "disabled"], ["role", "status", 1, "spinner-border", "flex-shrink-0"], [1, "flex-grow-1", "ms-2"], [1, "modal-title"], ["type", "number", "min", "1", "placeholder", "60", "name", "lifeSpan", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "duration", "required", "", "ngModel", "", 1, "form-select", 3, "ngModel", "ngModelChange"], ["selected", "", "disabled", ""], [1, "text-muted", "text-center"], [1, "d-flex", "gap-2", "float-end"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "d-flex", "gap-1", "align-items-center", 3, "click"], ["type", "button", "class", "btn btn-danger d-flex gap-1 align-items-center", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-danger btn-load", 3, "disabled", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", "d-flex", "gap-1", "align-items-center", 3, "click"], [1, "ri-delete-bin-2-line"], [1, "btn", "btn-outline-danger", "btn-load", 3, "disabled"]], template: function RecycleDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RecycleDashboardComponent_div_1_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, RecycleDashboardComponent_div_2_Template, 14, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RecycleDashboardComponent_div_3_Template, 8, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, RecycleDashboardComponent_ng_template_4_Template, 33, 9, "ng-template", 4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RecycleDashboardComponent_ng_template_6_Template, 35, 9, "ng-template", 4, 6, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, RecycleDashboardComponent_ng_template_8_Template, 21, 2, "ng-template", 4, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.subjects.length > 0 && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.subjects.length == 0 && !ctx.loading);
    } }, directives: [_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _layouts_rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_5__.RightsidebarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltip, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownMenu, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.UpperCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWN5Y2xlLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5729:
/*!*********************************************************!*\
  !*** ./src/app/pages/recycle/recycle-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecycleRoutingModule": () => (/* binding */ RecycleRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _recycle_dashboard_recycle_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recycle-dashboard/recycle-dashboard.component */ 2932);
/* harmony import */ var _subject_recycle_subject_recycle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subject-recycle/subject-recycle.component */ 53482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _recycle_dashboard_recycle_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.RecycleDashboardComponent,
    },
    {
        path: ':subject/:id',
        component: _subject_recycle_subject_recycle_component__WEBPACK_IMPORTED_MODULE_1__.SubjectRecycleComponent
    }
];
class RecycleRoutingModule {
}
RecycleRoutingModule.ɵfac = function RecycleRoutingModule_Factory(t) { return new (t || RecycleRoutingModule)(); };
RecycleRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RecycleRoutingModule });
RecycleRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RecycleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 66556:
/*!*************************************************!*\
  !*** ./src/app/pages/recycle/recycle.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecycleModule": () => (/* binding */ RecycleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/layouts/layouts.module */ 52372);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 28155);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _items_items_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items/items.module */ 97272);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/paginator */ 21066);
/* harmony import */ var _recycle_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recycle-routing.module */ 5729);
/* harmony import */ var _recycle_dashboard_recycle_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recycle-dashboard/recycle-dashboard.component */ 2932);
/* harmony import */ var _subject_recycle_subject_recycle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject-recycle/subject-recycle.component */ 53482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);














class RecycleModule {
}
RecycleModule.ɵfac = function RecycleModule_Factory(t) { return new (t || RecycleModule)(); };
RecycleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: RecycleModule });
RecycleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        { provide: _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_7__.TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _recycle_routing_module__WEBPACK_IMPORTED_MODULE_3__.RecycleRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbAccordionModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModalModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationModule,
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_7__.EditorModule,
            simplebar_angular__WEBPACK_IMPORTED_MODULE_12__.SimplebarAngularModule,
            _items_items_module__WEBPACK_IMPORTED_MODULE_2__.ItemsModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_13__.PaginatorModule,
            src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_1__.LayoutsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPopoverModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](RecycleModule, { declarations: [_recycle_dashboard_recycle_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.RecycleDashboardComponent,
        _subject_recycle_subject_recycle_component__WEBPACK_IMPORTED_MODULE_5__.SubjectRecycleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _recycle_routing_module__WEBPACK_IMPORTED_MODULE_3__.RecycleRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbAccordionModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModalModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_7__.EditorModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_12__.SimplebarAngularModule,
        _items_items_module__WEBPACK_IMPORTED_MODULE_2__.ItemsModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_13__.PaginatorModule,
        src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_1__.LayoutsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPopoverModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule] }); })();


/***/ }),

/***/ 53482:
/*!****************************************************************************!*\
  !*** ./src/app/pages/recycle/subject-recycle/subject-recycle.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectRecycleComponent": () => (/* binding */ SubjectRecycleComponent)
/* harmony export */ });
/* harmony import */ var _items_models_item_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../items/models/item-status-enum */ 60758);
/* harmony import */ var _items_models_item_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../items/models/item-types */ 55284);
/* harmony import */ var _items_models_filter_items_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../items/models/filter-items.model */ 34483);
/* harmony import */ var _models_restore_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/restore-items */ 88174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _items_item_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../items/item-http.service */ 45911);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _recycle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recycle.service */ 44502);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _items_item_topic_item_topic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../items/item-topic/item-topic.component */ 86216);
/* harmony import */ var _items_preview_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../items/preview/preview.component */ 22377);
/* harmony import */ var _items_matching_preview_matching_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../items/matching-preview/matching-preview.component */ 98404);
/* harmony import */ var _items_ordering_preview_ordering_preview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../items/ordering-preview/ordering-preview.component */ 79040);
/* harmony import */ var _items_rich_essay_preview_rich_essay_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../items/rich-essay-preview/rich-essay-preview.component */ 90021);
/* harmony import */ var _items_multiple_response_preview_multiple_response_preview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../items/multiple-response-preview/multiple-response-preview.component */ 82457);
/* harmony import */ var _items_short_text_preview_short_text_preview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../items/short-text-preview/short-text-preview.component */ 50612);
/* harmony import */ var _items_yes_or_no_preview_yes_or_no_preview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../items/yes-or-no-preview/yes-or-no-preview.component */ 33699);
/* harmony import */ var _items_true_or_false_preview_true_or_false_preview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../items/true-or-false-preview/true-or-false-preview.component */ 96733);
/* harmony import */ var _items_cloze_dropdown_preview_cloze_dropdown_preview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../items/cloze-dropdown-preview/cloze-dropdown-preview.component */ 5518);
/* harmony import */ var _items_cloze_text_preview_cloze_text_preview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../items/cloze-text-preview/cloze-text-preview.component */ 35550);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/paginator */ 21066);



























function SubjectRecycleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "Loading questions...");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { cursor: "pointer" }; };
function SubjectRecycleComponent_div_2_div_13_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 36, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "ul", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SubjectRecycleComponent_div_2_div_13_div_10_Template_a_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r18); const subtopic_r13 = restoredCtx.$implicit; const topic_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return ctx_r16.showTopicDetails(topic_r10, subtopic_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subtopic_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("ngbTooltip", subtopic_r13.subtopicName.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind3"](7, 5, subtopic_r13.subtopicName.toUpperCase(), 0, 20), "", subtopic_r13.subtopicName.length > 20 ? "..." : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](subtopic_r13.totalItems);
} }
function SubjectRecycleComponent_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SubjectRecycleComponent_div_2_div_13_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r20); const topic_r10 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return ctx_r19.showTopicDetails(topic_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, SubjectRecycleComponent_div_2_div_13_div_10_Template, 10, 10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topic_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("ngbTooltip", topic_r10.topicName.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind3"](7, 6, topic_r10.topicName.toUpperCase(), 0, 25), "", topic_r10.topicName.length > 25 ? "..." : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](topic_r10.totalItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", topic_r10.subtopics);
} }
function SubjectRecycleComponent_div_2_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"](" | ", ctx_r3.currentSubtopicName ? ctx_r3.currentSubtopicName : ctx_r3.currentTopicName, " (", ctx_r3.itemsPage && ctx_r3.itemsPage.content.length, ")");
} }
function SubjectRecycleComponent_div_2_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SubjectRecycleComponent_div_2_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return ctx_r21.restoreSelectedItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Restore Selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function SubjectRecycleComponent_div_2_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SubjectRecycleComponent_div_2_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return ctx_r23.restoreItemsInTopic(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Restore All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function SubjectRecycleComponent_div_2_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SubjectRecycleComponent_div_2_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return ctx_r25.restoreQuestionsInSubTopic(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Restore All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function SubjectRecycleComponent_div_2_div_31_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", status_r31, " ");
} }
function SubjectRecycleComponent_div_2_div_31_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const difficulty_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", difficulty_r32, " ");
} }
function SubjectRecycleComponent_div_2_div_31_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", type_r33, " ");
} }
function SubjectRecycleComponent_div_2_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "form", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngSubmit", function SubjectRecycleComponent_div_2_div_31_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r35); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](2); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return !_r27.invalid && ctx_r34.filter(_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](9, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function SubjectRecycleComponent_div_2_div_31_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return ctx_r36.filterInformation.stimulusSearchText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](13, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function SubjectRecycleComponent_div_2_div_31_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return ctx_r37.filterInformation.referenceSearchText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](16, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "app-item-topic", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("sendTags", function SubjectRecycleComponent_div_2_div_31_Template_app_item_topic_sendTags_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r35); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return ctx_r38.recieveTags($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](23, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](24, "select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function SubjectRecycleComponent_div_2_div_31_Template_select_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r35); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return ctx_r39.filterInformation.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](25, SubjectRecycleComponent_div_2_div_31_option_25_Template, 2, 1, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](28, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](29, "Passage");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](30, "select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function SubjectRecycleComponent_div_2_div_31_Template_select_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r35); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return ctx_r40.filterInformation.hasPassage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](31, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](32, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](33, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](34, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](35, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](37, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](38, "Difficulty Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](39, "select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function SubjectRecycleComponent_div_2_div_31_Template_select_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r35); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return ctx_r41.filterInformation.difficultyLevel = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](40, SubjectRecycleComponent_div_2_div_31_option_40_Template, 2, 1, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](41, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](43, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](44, "Item Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](45, "select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function SubjectRecycleComponent_div_2_div_31_Template_select_ngModelChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r35); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return ctx_r42.filterInformation.itemType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](46, SubjectRecycleComponent_div_2_div_31_option_46_Template, 2, 1, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](47, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](48, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](49, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](50, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](51, "Apply Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r7.filterInformation.stimulusSearchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r7.filterInformation.referenceSearchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("label", "Topic");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r7.filterInformation.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r7.passageStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r7.filterInformation.hasPassage);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r7.filterInformation.difficultyLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r7.difficultyLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r7.filterInformation.itemType);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r7.itemType);
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" last modified: ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, item_r45.modifiedAt), " ");
} }
function SubjectRecycleComponent_div_2_div_34_a_1_a_16_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function SubjectRecycleComponent_div_2_div_34_a_1_a_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "i", 96);
} }
function SubjectRecycleComponent_div_2_div_34_a_1_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SubjectRecycleComponent_div_2_div_34_a_1_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); const item_r45 = ctx_r56.$implicit; const i_r46 = ctx_r56.index; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return ctx_r55.preview(item_r45, i_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, SubjectRecycleComponent_div_2_div_34_a_1_a_16_span_1_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, SubjectRecycleComponent_div_2_div_34_a_1_a_16_i_2_Template, 1, 0, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !item_r45.showingPreviewLoader);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.showingPreviewLoader);
} }
function SubjectRecycleComponent_div_2_div_34_a_1_a_17_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SubjectRecycleComponent_div_2_div_34_a_1_a_17_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); const item_r45 = ctx_r60.$implicit; const i_r46 = ctx_r60.index; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return ctx_r59.hidePreview(item_r45, i_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_19_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, " PASSAGE QUESTION ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_19_ng_template_30_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "a", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind3"](4, 3, tag_r69.tagName, 0, 50)), " ");
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_19_ng_template_30_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ul", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, SubjectRecycleComponent_div_2_div_34_a_1_div_19_ng_template_30_ul_0_li_1_Template, 5, 7, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", item_r45.itemTagDTOS);
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_19_ng_template_30_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "No Tag(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_19_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, SubjectRecycleComponent_div_2_div_34_a_1_div_19_ng_template_30_ul_0_Template, 2, 1, "ul", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, SubjectRecycleComponent_div_2_div_34_a_1_div_19_ng_template_30_p_1_Template, 2, 0, "p", 23);
} if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.itemTagDTOS.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.itemTagDTOS.length < 1);
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_19_div_35_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "label", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SubjectRecycleComponent_div_2_div_34_a_1_div_19_div_35_label_2_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); const item_r45 = ctx_r75.$implicit; const i_r46 = ctx_r75.index; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return ctx_r74.selectQuestionId(item_r45.itemId, i_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "select question");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_19_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("change", function SubjectRecycleComponent_div_2_div_34_a_1_div_19_div_35_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); const item_r45 = ctx_r78.$implicit; const i_r46 = ctx_r78.index; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return ctx_r77.selectQuestionId(item_r45.itemId, i_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, SubjectRecycleComponent_div_2_div_34_a_1_div_19_div_35_label_2_Template, 2, 0, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("checked", ctx_r65.restoredItemDetails.itemIds.includes(item_r45.itemId));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r65.restoredItemDetails.itemIds.includes(item_r45.itemId));
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Question : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](9, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](14, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](19, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](20, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](23, SubjectRecycleComponent_div_2_div_34_a_1_div_19_span_23_Template, 5, 0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](26, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](27, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](28, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](30, SubjectRecycleComponent_div_2_div_34_a_1_div_19_ng_template_30_Template, 2, 2, "ng-template", null, 112, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](32, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](33, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](35, SubjectRecycleComponent_div_2_div_34_a_1_div_19_div_35_Template, 3, 2, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](31);
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("innerHTML", item_r45.stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind3"](5, 10, item_r45.stimulus, 0, 50), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r45.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r45.itemStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r45.difficultyLevel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.passageDetails.passageId);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngbPopover", _r63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" TAGS (", item_r45.itemTagDTOS.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r45.score, " Mark(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r50.itemsPage.content.length > 0);
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_preview_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-preview", 126);
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("previewData", ctx_r82.previewData);
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_matching_preview_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-matching-preview", 126);
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("previewData", ctx_r83.previewData);
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_ordering_preview_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-ordering-preview", 126);
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("previewData", ctx_r84.previewData);
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_rich_essay_preview_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-rich-essay-preview", 126);
} if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("previewData", ctx_r85.previewData);
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_multiple_response_preview_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-multiple-response-preview", 126);
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("previewData", ctx_r86.previewData);
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_short_text_preview_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-short-text-preview", 126);
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("previewData", ctx_r87.previewData);
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_yes_or_no_preview_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-yes-or-no-preview", 126);
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("previewData", ctx_r88.previewData);
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_true_or_false_preview_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-true-or-false-preview", 126);
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("previewData", ctx_r89.previewData);
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_cloze_dropdown_preview_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-cloze-dropdown-preview", 126);
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("previewData", ctx_r90.previewData);
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_cloze_text_preview_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-cloze-text-preview", 126);
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("previewData", ctx_r91.previewData);
} }
function SubjectRecycleComponent_div_2_div_34_a_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_preview_1_Template, 1, 1, "app-preview", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_matching_preview_2_Template, 1, 1, "app-matching-preview", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_ordering_preview_3_Template, 1, 1, "app-ordering-preview", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_rich_essay_preview_4_Template, 1, 1, "app-rich-essay-preview", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_multiple_response_preview_5_Template, 1, 1, "app-multiple-response-preview", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_short_text_preview_6_Template, 1, 1, "app-short-text-preview", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_yes_or_no_preview_7_Template, 1, 1, "app-yes-or-no-preview", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_true_or_false_preview_8_Template, 1, 1, "app-true-or-false-preview", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_cloze_dropdown_preview_9_Template, 1, 1, "app-cloze-dropdown-preview", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, SubjectRecycleComponent_div_2_div_34_a_1_div_20_app_cloze_text_preview_10_Template, 1, 1, "app-cloze-text-preview", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.type === "MCQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.type === "ASSOCIATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.type === "ORDER_LIST");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.type === "ESSAY_RICH_TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.type === "MRQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.type === "SHORT_TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.type === "YES_NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.type === "TRUE_FALSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.type === "CLOZE_DROPDOWN");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.type === "CLOZE_TEXT");
} }
const _c1 = function (a0, a1) { return { "item-size": a0, "item-size-expand": a1 }; };
function SubjectRecycleComponent_div_2_div_34_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "h5", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, SubjectRecycleComponent_div_2_div_34_a_1_div_13_Template, 3, 3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](16, SubjectRecycleComponent_div_2_div_34_a_1_a_16_Template, 3, 2, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](17, SubjectRecycleComponent_div_2_div_34_a_1_a_17_Template, 2, 0, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](19, SubjectRecycleComponent_div_2_div_34_a_1_div_19_Template, 36, 14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](20, SubjectRecycleComponent_div_2_div_34_a_1_div_20_Template, 11, 10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction2"](11, _c1, item_r45.showFullItem === false, item_r45.showFullItem === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r45.reference, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" Author: ", item_r45.authorDetails.authorName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" date created: ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](12, 9, item_r45.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.modifiedAt !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.showFullItem === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.showFullItem === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.showFullItem === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r45.showFullItem === true);
} }
const _c2 = function () { return [20, 30, 50]; };
function SubjectRecycleComponent_div_2_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, SubjectRecycleComponent_div_2_div_34_a_1_Template, 21, 14, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "p-paginator", 82, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("onPageChange", function SubjectRecycleComponent_div_2_div_34_Template_p_paginator_onPageChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return ctx_r93.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r8.itemsPage.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("totalRecords", ctx_r8.itemsPage.totalElements)("first", 1)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](6, _c2))("rows", 20)("showCurrentPageReport", true);
} }
function SubjectRecycleComponent_div_2_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "No Questions Undergoing Recycling");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function SubjectRecycleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "ngx-simplebar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, SubjectRecycleComponent_div_2_div_13_Template, 11, 11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](21, " Items List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, SubjectRecycleComponent_div_2_span_22_Template, 2, 2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](24, SubjectRecycleComponent_div_2_button_24_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](25, SubjectRecycleComponent_div_2_button_25_Template, 3, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](26, SubjectRecycleComponent_div_2_button_26_Template, 3, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SubjectRecycleComponent_div_2_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r95.showFilters(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](28, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](30, "ngx-simplebar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](31, SubjectRecycleComponent_div_2_div_31_Template, 52, 10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](32, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](33, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](34, SubjectRecycleComponent_div_2_div_34_Template, 4, 7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](35, SubjectRecycleComponent_div_2_div_35_Template, 5, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.subject.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" Topics (", ctx_r1.recycleTopicsTree.topics.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.recycleTopicsTree.topics);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.currentTopicName || ctx_r1.currentSubtopicName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.authorities.includes("ADMIN") && ctx_r1.restoredItemDetails.itemIds.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.authorities.includes("ADMIN") && ctx_r1.currentTopicName && !ctx_r1.currentSubtopicName && ctx_r1.restoredItemDetails.itemIds.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.authorities.includes("ADMIN") && ctx_r1.currentSubtopicName && ctx_r1.restoredItemDetails.itemIds.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵclassMapInterpolate1"]("", !ctx_r1.showFilter ? "btn btn-outline-secondary" : "btn btn-outline-danger", " btn-sm");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("ngbTooltip", !ctx_r1.showFilter ? "Filter Options" : "Hide Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵclassMap"](!ctx_r1.showFilter ? "ri-equalizer-fill" : "ri-close-line fs-14");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", !ctx_r1.showFilter ? "Filter" : "Hide Filter", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.showFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.itemsPage && ctx_r1.itemsPage.content.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.itemsPage || ctx_r1.itemsPage.content.length < 1);
} }
class SubjectRecycleComponent {
    constructor(itemService, ar, modal, recycleService, notifier, userService) {
        this.itemService = itemService;
        this.ar = ar;
        this.modal = modal;
        this.recycleService = recycleService;
        this.notifier = notifier;
        this.userService = userService;
        this.subject = '';
        /* showFullItem: boolean = false; */
        this.passageStatus = [];
        this.itemType = [];
        this.difficultyLevel = [1, 2, 3, 4, 5];
        this.tags = [];
        this.page = 0;
        this.pageSize = 20;
        this.filterInformation = new _items_models_filter_items_model__WEBPACK_IMPORTED_MODULE_2__.FilterItems();
        this.editQuestion = false;
        this.showFilter = false;
        this.new_subtopic = '';
        this.loading = true;
        this.restoredItemDetails = new _models_restore_items__WEBPACK_IMPORTED_MODULE_3__.RestoreItems();
        this.subjectId = this.ar.snapshot.params['id'];
    }
    ngOnInit() {
        this.recycleService.recycleActive = true;
        this.currentUser = this.userService.getCurrentUser();
        this.subject = this.ar.snapshot.paramMap.get('subject');
        this.breadCrumbItems = [
            { label: 'recycle' },
            { label: this.subject, active: true },
        ];
        this.subjectId;
        this.recycleService.fetchRecycleSubjectTree(this.subjectId).subscribe((value) => {
            if (value)
                this.recycleTopicsTree = value;
            this.loading = false;
        }, (error) => {
            // console.log(error);
        });
        this.passageStatus = Object.values(_items_models_item_status_enum__WEBPACK_IMPORTED_MODULE_0__.ItemStatusEnum);
        this.itemType = Object.values(_items_models_item_types__WEBPACK_IMPORTED_MODULE_1__.ItemTypes);
        //this.fetchItems();
    }
    ngOnDestroy() {
        this.recycleService.recycleActive = false;
    }
    showFilters() {
        this.showFilter = !this.showFilter;
    }
    displayItemTags(roleDropdown) {
        roleDropdown.open();
    }
    hideItemTags(roleDropdown) {
        roleDropdown.close();
    }
    showTopicDetails(topic, subtopic) {
        this.selectedTopic = topic;
        if (subtopic) {
            this.selectedSubtopic = subtopic;
        }
        if (subtopic) {
            this.itemService
                .fetchAllRecycleItems(this.subjectId, topic.topicId, this.page, this.pageSize, subtopic.topicId)
                .subscribe((value) => {
                this.itemsPage = value;
                this.itemsPage.content.forEach((item) => {
                    return (item.showFullItem = false);
                });
                this.currentSubtopicName = this.selectedSubtopic.subtopicName;
            }, (error) => {
                // console.log(error);
            });
        }
        else {
            this.currentSubtopicName = '';
            this.itemService
                .fetchAllRecycleItems(this.subjectId, topic.topicId, this.page, this.pageSize)
                .subscribe((value) => {
                this.itemsPage = value;
                this.itemsPage.content.forEach((item) => {
                    return (item.showFullItem = false);
                });
                this.currentTopicName = this.selectedTopic.topicName;
            }, (error) => {
                // console.log(error);
            });
        }
    }
    fetchTopicItems(topicId) {
        this.itemService
            .fetchAllRecycleItems(this.subjectId, topicId, this.page, this.pageSize)
            .subscribe((value) => {
            this.itemsPage = value;
            this.itemsPage.content.forEach((item) => {
                return (item.showFullItem = false);
            });
            this.currentTopicName = this.selectedTopic.topicName;
            // console.log(this.itemsPage.content);
        }, (error) => {
            // console.log(error);
        });
    }
    fetchSubtopicItems(topicId, subtopicId) {
        this.itemService
            .fetchAllRecycleItems(this.subjectId, topicId, this.page, this.pageSize, subtopicId)
            .subscribe((value) => {
            this.itemsPage = value;
            this.itemsPage.content.forEach((item) => {
                return (item.showFullItem = false);
            });
            this.currentSubtopicName = this.selectedSubtopic.subtopicName;
            // console.log(this.itemsPage.content);
        }, (error) => {
            // console.log(error);
        });
    }
    preview(item, i) {
        if (this.previewData) {
            this.itemsPage.content[this.activePreviewItem].showFullItem = false;
        }
        this.itemService.fetchIndividualItem(item.itemId).subscribe((value) => {
            if (value) {
                this.activePreviewItem = i;
                this.previewData = value;
                item.showFullItem = true;
            }
        }, (err) => {
            // console.log(err);
        });
    }
    /* fetchItems() {
      this.itemService.fetchAllRecycleItems(this.subjectId,).subscribe(
        (value) => {
          this.itemsPage = value;
          this.itemsPage.content.forEach(item => {
            return item.showFullItem = false;
          })
          console.log(this.itemsPage.content);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    } */
    showTags() {
        // console.log('these are the tags associated with this question');
    }
    recieveTags(tags) {
        this.tags = tags;
    }
    hidePreview(item, i) {
        item.showFullItem = false;
    }
    edit() {
        //this.showFullItem = false;
        this.editQuestion = !this.editQuestion;
    }
    buildFilter(filterForm) {
        // console.log(this.filterInformation);
        this.tags = this.tags.map((tag) => {
            return tag.tagId;
        });
        this.filterInformation.tagIds = this.tags;
    }
    filter(filterForm) {
        this.buildFilter(filterForm);
        this.itemService.filterItems(this.filterInformation).subscribe((value) => {
            // console.log(value);
            this.itemsPage = value;
        }, (error) => {
            // console.log(error);
        });
    }
    openNewTopicModal(newTopicModal) {
        this.modal.open(newTopicModal, { centered: true });
    }
    openNewSubTopicModal(newSubTopicModal, topic) {
        this.new_subtopic = topic;
        this.modal.open(newSubTopicModal, { centered: true });
    }
    onPageChange(event) {
        this.page = event.page;
        this.pageSize = event.rows;
        if (this.selectedSubtopic) {
            this.showTopicDetails(this.selectedTopic, this.selectedSubtopic);
        }
        else {
            this.showTopicDetails(this.selectedTopic);
        }
    }
    restoreItemsInTopic() {
        this.restoredItemDetails.subjectId = this.subjectId;
        this.restoredItemDetails.topicId = this.selectedTopic.topicId;
        this.recycleService
            .restoreTopicItem(this.subjectId, this.selectedTopic.topicId, this.restoredItemDetails)
            .subscribe((value) => {
            if (value) {
                this.notifier.notify(`success`, `Congratulations! You have have successfully restored all the questions in ${this.selectedTopic.name}!`);
            }
            this.ngOnInit();
            this.restoredItemDetails = new _models_restore_items__WEBPACK_IMPORTED_MODULE_3__.RestoreItems();
            this.showTopicDetails(this.selectedTopic);
        }, (error) => {
            this.notifier.notify('', `${error.error.message}`);
        });
    }
    restoreSelectedItem(itemId) {
        this.restoredItemDetails.subjectId = this.subjectId;
        if (itemId) {
            this.restoredItemDetails.itemIds.push(itemId);
        }
        this.recycleService
            .restoreSelectedItemsInSubject(this.subjectId, this.restoredItemDetails)
            .subscribe((value) => {
            if (value) {
                this.notifier.notify('success', `Congratulations! The question has been restored successfully.`);
            }
            this.ngOnInit();
            this.restoredItemDetails = new _models_restore_items__WEBPACK_IMPORTED_MODULE_3__.RestoreItems();
            if (!this.currentSubtopicName)
                this.showTopicDetails(this.selectedTopic);
            if (this.currentSubtopicName)
                this.showTopicDetails(this.selectedTopic, this.selectedSubtopic);
        }, (error) => {
            this.notifier.notify('error', `${error.error.message}`);
        });
    }
    restoreQuestionsInSubTopic() {
        this.restoredItemDetails.subjectId = this.subjectId;
        this.restoredItemDetails.topicId = this.selectedTopic.topicId;
        this.restoredItemDetails.subtopicId = this.selectedSubtopic.topicId;
        this.recycleService
            .restoreSubtopicItem(this.subjectId, this.selectedTopic.topicId, this.selectedSubtopic.topicId, this.restoredItemDetails)
            .subscribe((value) => {
            if (value) {
                this.notifier.notify('success', `Congratulations! You have successfully restored all the questions in ${this.selectedSubtopic.name}`);
            }
            this.ngOnInit();
            this.restoredItemDetails = new _models_restore_items__WEBPACK_IMPORTED_MODULE_3__.RestoreItems();
            this.showTopicDetails(this.selectedTopic, this.selectedSubtopic);
        }, (error) => {
            this.notifier.notify('error', `${error.error.message}`);
        });
    }
    // selection of questions to be deleted
    selectQuestionId(itemId, index) {
        if (!this.restoredItemDetails.itemIds.includes(itemId)) {
            this.restoredItemDetails.itemIds.push(itemId);
        }
        else {
            this.restoredItemDetails.itemIds.splice(index, 1);
        }
    }
}
SubjectRecycleComponent.ɵfac = function SubjectRecycleComponent_Factory(t) { return new (t || SubjectRecycleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_items_item_http_service__WEBPACK_IMPORTED_MODULE_4__.ItemHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_recycle_service__WEBPACK_IMPORTED_MODULE_5__.RecycleService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_22__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService)); };
SubjectRecycleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({ type: SubjectRecycleComponent, selectors: [["app-subject-recycle"]], decls: 3, vars: 3, consts: [["title", "RECYCLE", 3, "breadcrumbItems"], ["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "visually-hidden"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"], [1, "row"], [1, "col-lg-3", "col-sm-12"], [1, "card"], [1, "card-header", "border-bottom-dashed"], [1, "btn", "btn-primary", "w-100"], [1, "card-body"], [1, "message-list-content", "mx-n4", "px-4", "message-list-scroll"], ["ngbDropdown", "", 1, "verti-sitemap", "dropdown"], [1, "list-unstyled", "mb-0"], ["data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "p-0", "parent-title", "dropdown", "arrow-none", "d-flex", "justify-content-between"], ["class", "first-list", 4, "ngFor", "ngForOf"], [1, "col-lg-9", "col-sm-12"], [1, "row", "g-4", "align-items-center"], [1, "col-sm", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], [4, "ngIf"], [1, "d-flex", "gap-2"], ["class", "btn btn-primary btn-sm", "ngbTooltip", "RESTORE QUESTIONS", "title", "Restore all selected questions", 3, "click", 4, "ngIf"], ["class", "btn btn-primary btn-sm", "ngbTooltip", "RESTORE QUESTIONS", "title", "Restore all questions in this topic", 3, "click", 4, "ngIf"], ["class", "btn btn-primary btn-sm", "ngbTooltip", "RESTORE QUESTIONS", "title", "Restore all questions in this subtopic", 3, "click", 4, "ngIf"], ["type", "submit", 3, "ngbTooltip", "click"], ["class", "card-body border-bottom-dashed border-bottom sticky-top bg-white", 4, "ngIf"], [1, "live-preview"], ["class", "list-group", 4, "ngIf"], ["class", "d-flex flex-column align-items-center justify-content-center", 4, "ngIf"], [1, "first-list"], [1, "profile-timeline"], ["data-bs-toggle", "collapse", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "accordion-button", "p-2", "shadow-none", 3, "click"], ["ngbDropdown", "", 1, "dropdown"], ["data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", "placement", "bottom", 1, "fw-small", "fs-11", "text-primary", "dropdown", "arrow-none", 3, "ngStyle", "ngbTooltip"], [1, "ri-folder-line", "me-1", "align-bottom"], ["ngbTooltip", "TOTAL ITEMS", 1, "position-absolute", "top-50", "start-100", "translate-middle", "badge", "rounded-pill", "bg-primary"], ["class", "dropdown", "ngbDropdown", "", 4, "ngFor", "ngForOf"], ["drop", "ngbDropdown"], [1, "second-list", "list-unstyled"], ["data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "dropdown", "arrow-none", "fs-11", "d-flex", "gap-1", "align-items-center", 3, "ngStyle", "ngbTooltip", "click"], [1, "ri-folder-line"], ["ngbTooltip", "TOTAL ITEMS", 1, "position-absolute", "top-50", "start-0", "translate-middle", "badge", "rounded-pill", "bg-primary"], ["ngbTooltip", "RESTORE QUESTIONS", "title", "Restore all selected questions", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "ri-refresh-line", "align-middle", "me-2"], ["ngbTooltip", "RESTORE QUESTIONS", "title", "Restore all questions in this topic", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["ngbTooltip", "RESTORE QUESTIONS", "title", "Restore all questions in this subtopic", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "card-body", "border-bottom-dashed", "border-bottom", "sticky-top", "bg-white"], [3, "ngSubmit"], ["filterForm", "ngForm"], ["ngModelGroup", "filterInformation"], [1, "row", "g-3", "mb-2"], [1, "col-sm-4"], ["for", "content"], [1, "search-box"], [1, "ri-search-line", "search-icon"], ["type", "text", "name", "stimulus", "placeholder", "Search content", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "title"], ["type", "text", "name", "title", "placeholder", "Search for title", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "label", "sendTags"], [1, "row", "g-3"], [1, "col-sm-3"], ["for", "status"], ["data-plugin", "choices", "data-choices", "", "data-choices-search-false", "", "name", "status", 1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["for", "passage"], ["data-plugin", "choices", "data-choices", "", "data-choices-search-false", "", "name", "passage", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "true", "selected", ""], ["value", "false"], ["for", "difficulty"], ["data-plugin", "choices", "data-choices", "", "data-choices-search-false", "", "name", "difficulty", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "itemType"], ["data-plugin", "choices", "data-choices", "", "data-choices-search-false", "", "name", "itemType", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row-g3"], [1, "col-sm-auto"], ["type", "submit", 1, "btn", "btn-secondary", "mt-2"], [1, "ri-equalizer-fill"], [1, "list-group"], ["style", "color: #000", "class", "list-group-item", 4, "ngFor", "ngForOf"], [3, "totalRecords", "first", "rowsPerPageOptions", "rows", "showCurrentPageReport", "onPageChange"], ["paginator", ""], [1, "list-group-item", 2, "color", "#000"], [1, "row", 3, "ngClass"], [1, "col-lg-10", "col-sm-auto"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between"], [1, "list-title", "fs-18", "mb-1"], [1, "list-text", "mb-0", "fs-12"], [1, "d-flex", "gap-2", "float-end"], ["class", "list-text mb-0 fs-12", 4, "ngIf"], [1, "col-lg-2", "col-sm-auto", "d-flex", "flex-column", "gap-1", "mt-1", "item-tags-size", "px-2"], ["class", "btn btn-sm btn-outline-success", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-success", 3, "click"], ["_ngcontent-urx-c230", "", "class", "mdi mdi-loading mdi-spin fs-20 align-middle me-2", 4, "ngIf"], ["_ngcontent-urx-c230", "", 1, "mdi", "mdi-loading", "mdi-spin", "fs-20", "align-middle", "me-2"], [1, "list-text", "mb-0", 3, "innerHTML"], [1, "d-flex", "justify-content-between", "mt-3"], [1, "d-flex", "gap-1"], ["title", "QUESTION TYPE", 1, "d-flex", "align-items-center", 2, "cursor", "pointer"], [1, "ri-list-check-2"], [1, "badge", "badge-soft-success", "fs-10"], ["title", "QUESTION STATUS", 1, "d-flex", "align-items-center", 2, "cursor", "pointer"], [1, "ri-upload-cloud-2-line"], [1, "badge", "badge-soft-primary", "fs-10"], ["title", "DIFFICULTY LEVEL", 1, "d-flex", "align-items-center", 2, "cursor", "pointer"], [1, "ri-line-height"], [1, "badge", "badge-soft-danger", "fs-10"], ["title", "PASSAGE", "class", "d-flex align-items-center", "style", "cursor: pointer", 4, "ngIf"], ["triggers", "mouseenter:mouseleave", "placement", "top", 2, "cursor", "pointer", 3, "ngbPopover"], [1, "bx", "bx-purchase-tag", "fs-10"], ["tagsTemplate", ""], ["title", "ALLOCATED SCORE", 1, "d-flex", "align-items-center", 2, "cursor", "pointer"], [1, "badge", "badge-soft-secondary", "fs-10"], ["class", "d-flex gap-2", 4, "ngIf"], ["title", "PASSAGE", 1, "d-flex", "align-items-center", 2, "cursor", "pointer"], [1, "ri-article-line"], [1, "badge", "badge-soft-info", "fs-10"], ["style", "list-style-type: none", 4, "ngIf"], [2, "list-style-type", "none"], [1, "fs-10"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "change"], ["class", "text-muted", 3, "click", 4, "ngIf"], [1, "text-muted", 3, "click"], [3, "previewData", 4, "ngIf"], [3, "previewData"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "ri-recycle-fill", "text-muted", "align-middle", 2, "font-size", "60px"], [1, "text-muted", "fs-24"]], template: function SubjectRecycleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, SubjectRecycleComponent_div_1_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, SubjectRecycleComponent_div_2_Template, 36, 18, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, simplebar_angular__WEBPACK_IMPORTED_MODULE_24__.SimplebarAngularComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDropdownToggle, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgStyle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgModelGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgModel, _items_item_topic_item_topic_component__WEBPACK_IMPORTED_MODULE_8__.ItemTopicComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbPopover, _items_preview_preview_component__WEBPACK_IMPORTED_MODULE_9__.PreviewComponent, _items_matching_preview_matching_preview_component__WEBPACK_IMPORTED_MODULE_10__.MatchingPreviewComponent, _items_ordering_preview_ordering_preview_component__WEBPACK_IMPORTED_MODULE_11__.OrderingPreviewComponent, _items_rich_essay_preview_rich_essay_preview_component__WEBPACK_IMPORTED_MODULE_12__.RichEssayPreviewComponent, _items_multiple_response_preview_multiple_response_preview_component__WEBPACK_IMPORTED_MODULE_13__.MultipleResponsePreviewComponent, _items_short_text_preview_short_text_preview_component__WEBPACK_IMPORTED_MODULE_14__.ShortTextPreviewComponent, _items_yes_or_no_preview_yes_or_no_preview_component__WEBPACK_IMPORTED_MODULE_15__.YesOrNoPreviewComponent, _items_true_or_false_preview_true_or_false_preview_component__WEBPACK_IMPORTED_MODULE_16__.TrueOrFalsePreviewComponent, _items_cloze_dropdown_preview_cloze_dropdown_preview_component__WEBPACK_IMPORTED_MODULE_17__.ClozeDropdownPreviewComponent, _items_cloze_text_preview_cloze_text_preview_component__WEBPACK_IMPORTED_MODULE_18__.ClozeTextPreviewComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_26__.Paginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.UpperCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJqZWN0LXJlY3ljbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_recycle_recycle_module_ts.js.map