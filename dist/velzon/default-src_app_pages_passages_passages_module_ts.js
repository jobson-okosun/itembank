"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([["default-src_app_pages_passages_passages_module_ts"],{

/***/ 91512:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/passages/all-subjects-passage/all-subjects-passage.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllSubjectsPassageComponent": () => (/* binding */ AllSubjectsPassageComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _items_models_new_subject_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../items/models/new-subject.model */ 93116);
/* harmony import */ var _items_models_new_topic_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../items/models/new-topic.model */ 53971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _items_item_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../items/item-http.service */ 45911);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _items_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../items/subject.service */ 24533);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);












function AllSubjectsPassageComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Questions:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllSubjectsPassageComponent_div_11_div_1_Template_a_click_24_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const subject_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r9.setSubjectId(subject_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllSubjectsPassageComponent_div_11_div_1_Template_a_click_28_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const subject_r8 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17); return ctx_r11.renameSubjectModal(_r5, subject_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, " Rename");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", subject_r8.name[0].toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](subject_r8.name.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](subject_r8.totalItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("routerLink", "/itembank/passages/subjects/", subject_r8.name, "");
} }
function AllSubjectsPassageComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AllSubjectsPassageComponent_div_11_div_1_Template, 31, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.allSubjects);
} }
function AllSubjectsPassageComponent_ng_template_12_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllSubjectsPassageComponent_ng_template_12_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Saving...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Saving... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r15.submitted);
} }
function AllSubjectsPassageComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "form", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function AllSubjectsPassageComponent_ng_template_12_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); ctx_r16.addSubject(_r13); return _r13.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Add a new subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Subject Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AllSubjectsPassageComponent_ng_template_12_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r18.newSubject.name = $event.toUpperCase(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllSubjectsPassageComponent_ng_template_12_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const modal_r12 = restoredCtx.$implicit; return modal_r12.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, AllSubjectsPassageComponent_ng_template_12_button_13_Template, 2, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, AllSubjectsPassageComponent_ng_template_12_ng_template_14_Template, 7, 1, "ng-template", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.newSubject.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.submitted);
} }
function AllSubjectsPassageComponent_ng_template_14_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllSubjectsPassageComponent_ng_template_14_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Saving...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Saving... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r23.submitted);
} }
function AllSubjectsPassageComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "form", 38, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function AllSubjectsPassageComponent_ng_template_14_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r24.addTopic(_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Add a new topic");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Topic Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AllSubjectsPassageComponent_ng_template_14_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r26.newTopic.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllSubjectsPassageComponent_ng_template_14_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const modal_r20 = restoredCtx.$implicit; return modal_r20.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, AllSubjectsPassageComponent_ng_template_14_button_16_Template, 3, 0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, AllSubjectsPassageComponent_ng_template_14_ng_template_17_Template, 7, 1, "ng-template", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r4.currentSubject.name.toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r4.newTopic.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r4.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.submitted);
} }
function AllSubjectsPassageComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "form", 38, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function AllSubjectsPassageComponent_ng_template_16_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r30.renameSubject(_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Rename Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Subject Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AllSubjectsPassageComponent_ng_template_16_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r32.currentSubject.name = $event.toUpperCase(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Subject Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AllSubjectsPassageComponent_ng_template_16_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r33.currentSubject.subjectCode = $event.toUpperCase(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllSubjectsPassageComponent_ng_template_16_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const modal_r28 = restoredCtx.$implicit; return modal_r28.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r6.currentSubject.name.toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r6.currentSubject.name.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r6.currentSubject.subjectCode);
} }
class AllSubjectsPassageComponent {
    constructor(itemService, modal, subjectService, userService) {
        this.itemService = itemService;
        this.modal = modal;
        this.subjectService = subjectService;
        this.userService = userService;
        this.allSubjects = [];
        this.newSubject = new _items_models_new_subject_model__WEBPACK_IMPORTED_MODULE_1__.NewSubject();
        this.newTopic = new _items_models_new_topic_model__WEBPACK_IMPORTED_MODULE_2__.NewTopic();
        this.topicName = '';
        this.submitted = false;
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Passages', active: false }, { label: 'Subjects', active: true }];
        this.currentUser = this.userService.getCurrentUser();
        if (this.currentUser.authorities.includes('ADMIN')) {
            this.itemService.fetchAllSubjectsItems().subscribe((value) => {
                this.allSubjects = value;
                // console.log(this.allSubjects);
            }, (error) => {
                // console.log(error);
            });
        }
        else {
            this.itemService.fetchAllSubjectsNonAdmin().subscribe((value) => {
                this.allSubjects = value;
                // console.log(this.allSubjects);
            }, (error) => {
                // console.log(error);
            });
        }
    }
    setSubjectId(subject) {
        this.itemService.subjectId = subject.subjectId;
        this.itemService.subjectName = subject.name;
    }
    addSubject(form) {
        this.submitted = true;
        this.itemService.createNewSubject(this.newSubject).subscribe((value) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'success',
                title: 'Congratulations',
                text: 'A new subject was created successfully',
            });
            this.submitted = false;
            this.ngOnInit();
            form.reset();
        }, (error) => {
            this.submitted = false;
            form.reset();
            // console.log(error);
        });
        this.modal.dismissAll();
    }
    addTopic(topic) {
        this.submitted = true;
        this.newTopic.subjectId = this.currentSubject.subjectId;
        this.itemService.createNewTopic(this.newTopic).subscribe((value) => {
            if (value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    icon: 'success',
                    title: 'Congratulations',
                    text: 'You have successfully added a new topic!',
                });
                this.submitted = false;
                topic.reset();
            }
        }, (error) => {
            this.submitted = false;
            topic.reset();
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'error',
                title: 'Failed',
                text: error.error.message
            });
            // console.log(error);
        });
    }
    addTopicModal(newTopicModal, subject) {
        this.currentSubject = subject;
        this.modal.open(newTopicModal, { centered: true });
    }
    addSubjectModal(newSubjectModal) {
        this.modal.open(newSubjectModal, { centered: true });
    }
    renameSubjectModal(editSubjectModal, subject) {
        this.currentSubject = subject;
        this.editSubjectName = subject.name;
        this.modal.open(editSubjectModal, { centered: true });
    }
    renameSubject(form) {
        // console.log(this.currentSubject);
        let subject = {
            subjectName: this.currentSubject.name,
            subjectId: this.currentSubject.subjectId,
            subjectCode: this.currentSubject.subjectCode
        };
        this.subjectService.renameSubject(subject).subscribe((value) => {
            if (value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    icon: 'success',
                    title: 'Congratulations',
                    text: 'You have suceessfully changed the subject information.'
                });
            }
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'error',
                title: 'Failed!',
                text: 'Oops!...Sorry the operation failed, try again.'
            });
        });
    }
}
AllSubjectsPassageComponent.ɵfac = function AllSubjectsPassageComponent_Factory(t) { return new (t || AllSubjectsPassageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_items_item_http_service__WEBPACK_IMPORTED_MODULE_3__.ItemHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_items_subject_service__WEBPACK_IMPORTED_MODULE_4__.SubjectService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService)); };
AllSubjectsPassageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AllSubjectsPassageComponent, selectors: [["app-all-subjects-passage"]], decls: 18, vars: 3, consts: [["title", "PASSAGES", 3, "breadcrumbItems"], [1, "row", "mb-3", "pb-1"], [1, "col-12"], [1, "d-flex", "align-items-lg-center", "flex-lg-row", "flex-sm-row", "justify-content-between", "flex-column"], [1, "flex-grow-1"], [1, "fs-16", "mb-1"], [1, "mt-lg-0"], ["type", "button", 1, "btn", "btn-sm", "btn-soft-primary", "float-end", 3, "click"], [1, "ri-add-circle-line", "align-middle", "me-1"], ["class", "row", 4, "ngIf"], ["newSubjectModal", ""], ["newTopicModal", ""], ["editSubjectModal", ""], [1, "row"], ["class", "col-xxl-4 col-lg-6 col-md-6 col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-xxl-4", "col-lg-6", "col-md-6", "col-sm-6"], [1, "card"], [1, "card-body", "p-2"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0", "me-3"], [1, "avatar-sm"], [1, "avatar-title", "bg-light", "text-primary", "rounded", "fs-24"], [1, "flex-grow-1", "overflow-hidden"], [1, "text-body", "text-truncate", "d-block"], [1, "d-flex", "gap-1", "align-items-center", "mt-2"], ["title", "No of Items", 1, "d-flex", "gap-1", "align-items-center", "badge", "badge-soft-info", "fs-12"], [1, "ri-file-list-line"], [1, "flex-shrink-0", "ms-2"], [1, "d-flex", "gap-1"], ["ngbDropdown", "", 1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-icon", "text-muted", "btn-sm", "fs-18", "dropdown", "arrow-none"], [1, "ri-more-fill"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item", 3, "routerLink", "click"], [1, "ri-eye-fill", "align-bottom", "me-2", "text-muted"], [1, "dropdown-item", 3, "click"], [1, "ri-pencil-fill", "align-bottom", "me-2", "text-muted"], [1, "modal-body", "p-5"], ["novalidate", "", 3, "ngSubmit"], ["newSubjectForm", "ngForm"], [1, "text-center"], [1, "mt-4"], ["for", "subjectName", 1, "label"], ["type", "text", "name", "subjectName", "placeholder", "Subject", "required", "", 1, "form-control", "mb-3", 3, "ngModel", "ngModelChange"], [1, "hstack", "gap-2", "justify-content-end"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], ["type", "submit", "class", "btn btn-primary", "data-bs-dismiss", "modal", 4, "ngIf"], [3, "ngIf"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "btn", "btn-outline-primary", "btn-load", 3, "disabled"], ["role", "status", 1, "spinner-border", "flex-shrink-0"], [1, "visually-hidden"], [1, "flex-grow-1", "ms-2"], ["newTopicForm", "ngForm"], [1, "text-muted", "text-center"], ["type", "text", "name", "topicName", "placeholder", "Topic", "required", "", 1, "form-control", "mb-3", 3, "ngModel", "ngModelChange"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", "d-flex", "gap-1", "align-items-center", 3, "click"], [1, "ri-close-line"], ["type", "submit", "class", "btn btn-primary d-flex gap-1 align-items-center", "data-bs-dismiss", "modal", 4, "ngIf"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "d-flex", "gap-1", "align-items-center"], [1, "ri-save-line"], ["editSubjectForm", "ngForm"], ["type", "text", "name", "subjectCode", "placeholder", "Subject Code", "required", "", 1, "form-control", "mb-3", 3, "ngModel", "ngModelChange"]], template: function AllSubjectsPassageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllSubjectsPassageComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13); return ctx.addSubjectModal(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " New Subject ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, AllSubjectsPassageComponent_div_11_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, AllSubjectsPassageComponent_ng_template_12_Template, 15, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, AllSubjectsPassageComponent_ng_template_14_Template, 18, 4, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, AllSubjectsPassageComponent_ng_template_16_Template, 21, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" List of all Subjects (", ctx.allSubjects.length, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.allSubjects);
    } }, directives: [_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtc3ViamVjdHMtcGFzc2FnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 55437:
/*!***********************************************************************!*\
  !*** ./src/app/pages/passages/edit-passage/edit-passage.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPassageComponent": () => (/* binding */ EditPassageComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _list_passages_all_passages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-passages/all-passages.service */ 88820);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _new_passage_new_passage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../new-passage/new-passage.component */ 41180);






function EditPassageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-new-passage", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("passageEdit", ctx_r0.passage);
} }
class EditPassageComponent {
    constructor(ar, router, passageService, location) {
        this.ar = ar;
        this.router = router;
        this.passageService = passageService;
        this.location = location;
    }
    ngOnInit() {
        this.passageId = this.ar.snapshot.params['passageId'];
        this.fetchPassage(this.passageId);
    }
    editPassage() {
        this.passageService.editPassage(this.passageId, this.passage).subscribe((value) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'success',
                title: 'Congratulations!',
                text: 'The passage has been updated successfully.',
            });
            this.location.back();
        }, (error) => {
            // console.log(error);
        });
    }
    fetchPassage(passageId) {
        this.passageService.fetchSinglePassage(passageId).subscribe((value) => {
            this.passage = value;
            this.passage.itemStatus = value.status;
            //console.log(this.passage);
        }, (error) => {
            // console.log(error);
        });
    }
}
EditPassageComponent.ɵfac = function EditPassageComponent_Factory(t) { return new (t || EditPassageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_list_passages_all_passages_service__WEBPACK_IMPORTED_MODULE_1__.AllPassagesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location)); };
EditPassageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditPassageComponent, selectors: [["app-edit-passage"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "passageEdit"]], template: function EditPassageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, EditPassageComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.passage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _new_passage_new_passage_component__WEBPACK_IMPORTED_MODULE_2__.NewPassageComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXBhc3NhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 71089:
/*!*************************************************************************!*\
  !*** ./src/app/pages/passages/list-passages/list-passages.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPassagesComponent": () => (/* binding */ ListPassagesComponent)
/* harmony export */ });
/* harmony import */ var _model_all_passages_response_model_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../model/all-passages-response-model.model */ 1891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_passage_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/passage-filter */ 17079);
/* harmony import */ var _items_models_item_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../items/models/item-status-enum */ 60758);
/* harmony import */ var _items_models_item_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../items/models/item-types */ 55284);
/* harmony import */ var _items_models_new_topic_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../items/models/new-topic.model */ 53971);
/* harmony import */ var _items_models_filter_items_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../items/models/filter-items.model */ 34483);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 45398);
/* harmony import */ var _all_passages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all-passages.service */ 88820);
/* harmony import */ var _items_item_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../items/item-http.service */ 45911);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _items_item_utilities_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../items/item-utilities.service */ 16716);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _assessment_service_assessments_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assessment/service/assessments.service */ 9472);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _items_item_tag_item_tag_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../items/item-tag/item-tag.component */ 73742);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/paginator */ 21066);

























function ListPassagesComponent_app_breadcrumbs_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-breadcrumbs", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate2"]("title", "", ctx_r0.subjectName, " | PASSAGES (", ctx_r0.totalPassages, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("breadcrumbItems", ctx_r0.breadCrumbItems);
} }
function ListPassagesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Loading passages...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListPassagesComponent_div_2_div_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "uppercase");
} if (rf & 2) {
    const item_r25 = ctx.item;
    const i_r26 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 1, item_r25[i_r26].name), " ");
} }
function ListPassagesComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Subjects");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ng-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ListPassagesComponent_div_2_div_4_Template_ng_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r27.subjectId = $event; })("change", function ListPassagesComponent_div_2_div_4_Template_ng_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r29.handleSubjectSelection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ListPassagesComponent_div_2_div_4_ng_template_4_Template, 2, 3, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("items", ctx_r9.allSubjects)("ngModel", ctx_r9.subjectId);
} }
function ListPassagesComponent_div_2_i_6_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_div_2_i_6_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](4); return ctx_r30.openNewTopicModal(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListPassagesComponent_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Loading topics...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "bg-soft-primary": a0 }; };
const _c1 = function () { return { cursor: "pointer" }; };
function ListPassagesComponent_div_2_ngx_simplebar_10_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_div_2_ngx_simplebar_10_div_6_Template_a_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37); const topic_r33 = restoredCtx.$implicit; const i_r34 = restoredCtx.index; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); ctx_r36.getPassages(topic_r33, i_r34); return ctx_r36.setItemTrail(topic_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topic_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](10, _c0, ctx_r32.selectedTopic ? ctx_r32.selectedTopic.topicId === topic_r33.topicId : false));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("ngbTooltip", topic_r33.topicName.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind3"](6, 6, topic_r33.topicName.toUpperCase(), 0, 25), "", topic_r33.topicName.length > 25 ? "..." : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](topic_r33.totalPassages);
} }
function ListPassagesComponent_div_2_ngx_simplebar_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ngx-simplebar", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "ul", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ListPassagesComponent_div_2_ngx_simplebar_10_div_6_Template, 9, 13, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Topics (", ctx_r12.passageTopics.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r12.passageTopics);
} }
function ListPassagesComponent_div_2_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("| ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, ctx_r13.selectedTopicName), " ", !ctx_r13.loading_passages && !ctx_r13.filterState ? "(" + ctx_r13.passages.totalElements + ")" : "(" + ctx_r13.filteredResult.totalElements + ")", "");
} }
function ListPassagesComponent_div_2_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_div_2_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r38.gotoNewPassage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "NEW PASSAGE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListPassagesComponent_div_2_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", ctx_r15.selectedPassageIds.length, " / ", ctx_r15._currentBlock.totalQuestions, " passages selected");
} }
function ListPassagesComponent_div_2_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_div_2_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r40.showFilterOptions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](!ctx_r16.showFilter ? "btn btn-secondary" : "btn btn-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("ngbTooltip", !ctx_r16.showFilter ? "Show Filter" : "Hide Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](!ctx_r16.showFilter ? "ri-equalizer-fill" : "ri-close-line fs-14");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", !ctx_r16.showFilter ? "Filter Passages" : "Hide Filter", " ");
} }
function ListPassagesComponent_div_2_div_25_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", status_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", status_r45, " ");
} }
function ListPassagesComponent_div_2_div_25_div_19_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemUsage_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", itemUsage_r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", itemUsage_r47, " ");
} }
function ListPassagesComponent_div_2_div_25_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Item Usage");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "select", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ListPassagesComponent_div_2_div_25_div_19_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r48.newPassageFilter.itemUsed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ListPassagesComponent_div_2_div_25_div_19_option_5_Template, 2, 2, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r44.newPassageFilter.itemUsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r44.itemUsages);
} }
function ListPassagesComponent_div_2_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "form", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function ListPassagesComponent_div_2_div_25_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r51); const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](2); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r50.filterPassage(_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ListPassagesComponent_div_2_div_25_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r52.newPassageFilter.stimulusSearchText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ListPassagesComponent_div_2_div_25_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r51); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r53.newPassageFilter.referenceSearchText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ListPassagesComponent_div_2_div_25_Template_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r51); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r54.newPassageFilter.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, ListPassagesComponent_div_2_div_25_option_18_Template, 2, 2, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, ListPassagesComponent_div_2_div_25_div_19_Template, 6, 2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "app-item-tag", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sendTags", function ListPassagesComponent_div_2_div_25_Template_app_item_tag_sendTags_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r51); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r55.recieveTag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_div_2_div_25_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r51); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r56.clearFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, "Clear Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](27, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "Apply Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r17.newPassageFilter.stimulusSearchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r17.newPassageFilter.referenceSearchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r17.newPassageFilter.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r17.passageStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r17.currentUser.authorities.includes("MODERATOR"));
} }
function ListPassagesComponent_div_2_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Loading passages...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListPassagesComponent_div_2_div_30_a_1_ng_template_29_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, tag_r65.tagName));
} }
function ListPassagesComponent_div_2_div_30_a_1_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ListPassagesComponent_div_2_div_30_a_1_ng_template_29_li_1_Template, 4, 3, "li", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const passage_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", passage_r58.itemTagDTOS);
} }
function ListPassagesComponent_div_2_div_30_a_1_div_31_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " already selected for exam ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListPassagesComponent_div_2_div_30_a_1_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ListPassagesComponent_div_2_div_30_a_1_div_31_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r70); const passage_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r68.pickPassage(passage_r58.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_div_2_div_30_a_1_div_31_Template_label_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r70); const passage_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r71.pickPassage(passage_r58.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ListPassagesComponent_div_2_div_30_a_1_div_31_span_4_Template, 2, 0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const passage_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r62._existingPassageIds.includes(passage_r58.id))("checked", ctx_r62.selectedPassageIds.includes(passage_r58.id) || ctx_r62._existingPassageIds.includes(passage_r58.id))("hidden", !ctx_r62.selectedPassageIds.includes(passage_r58.id) && ctx_r62.selectedPassageIds.length === ctx_r62._currentBlock.totalQuestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", !ctx_r62.selectedPassageIds.includes(passage_r58.id) && ctx_r62.selectedPassageIds.length === ctx_r62._currentBlock.totalQuestions || ctx_r62._existingPassageIds.includes(passage_r58.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r62.selectedPassageIds.includes(passage_r58.id) ? "selected" : "select passage", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r62._existingPassageIds.includes(passage_r58.id));
} }
function ListPassagesComponent_div_2_div_30_a_1_div_32_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_div_2_div_30_a_1_div_32_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r77); const passage_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](6); return ctx_r75.openUsageHistoryModal(passage_r58.id, _r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListPassagesComponent_div_2_div_30_a_1_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_div_2_div_30_a_1_div_32_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r80); const passage_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r78.setTrailInfo(passage_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_div_2_div_30_a_1_div_32_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r80); const passage_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r81.editPassage(passage_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ListPassagesComponent_div_2_div_30_a_1_div_32_button_5_Template, 2, 0, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_div_2_div_30_a_1_div_32_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r80); const passage_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](8); return ctx_r83.openDeletePassageConfirmationModal(passage_r58.id, _r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const passage_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate2"]("routerLink", "/examalpha/passages/subjects/", ctx_r63.subjectId, "/passage/", passage_r58.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r63.currentUser.authorities.includes("ADMIN"));
} }
const _c2 = function (a0, a1) { return { "badge-soft-success": a0, "badge-soft-warning": a1 }; };
function ListPassagesComponent_div_2_div_30_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "h5", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "Passage : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, ListPassagesComponent_div_2_div_30_a_1_ng_template_29_Template, 2, 1, "ng-template", null, 96, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, ListPassagesComponent_div_2_div_30_a_1_div_31_Template, 5, 6, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](32, ListPassagesComponent_div_2_div_30_a_1_div_32_Template, 8, 3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const passage_r58 = ctx.$implicit;
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](30);
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", passage_r58.reference, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Author: ", passage_r58.authorDetails.authorName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Created At: ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](12, 12, passage_r58.createdAt, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Last Modified: ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](15, 15, passage_r58.modifiedAt, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", passage_r58.stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Total Questions: ", passage_r58.itemCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](18, _c2, passage_r58.status == "PUBLISHED", passage_r58.status == "DRAFT" || passage_r58.status == "AWAITING_MODERATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Status: ", passage_r58.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngbPopover", _r60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Tags: ", passage_r58.itemTagDTOS.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r57.assessmentActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r57.assessmentActive);
} }
function ListPassagesComponent_div_2_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ListPassagesComponent_div_2_div_30_a_1_Template, 33, 21, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r19.passages.content);
} }
function ListPassagesComponent_div_2_div_31_a_1_ng_template_29_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, tag_r95.tagName));
} }
function ListPassagesComponent_div_2_div_31_a_1_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ListPassagesComponent_div_2_div_31_a_1_ng_template_29_li_1_Template, 4, 3, "li", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const passage_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", passage_r87.itemTagDTOS);
} }
function ListPassagesComponent_div_2_div_31_a_1_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const passage_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Item usage: ", passage_r87.itemUsed, "");
} }
function ListPassagesComponent_div_2_div_31_a_1_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ListPassagesComponent_div_2_div_31_a_1_div_32_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r100); const passage_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r98.pickPassage(passage_r87.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const passage_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", ctx_r92.selectedPassageIds.includes(passage_r87.id))("hidden", !ctx_r92.selectedPassageIds.includes(passage_r87.id) && ctx_r92.selectedPassageIds.length === ctx_r92._currentBlock.totalQuestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", !ctx_r92.selectedPassageIds.includes(passage_r87.id) && ctx_r92.selectedPassageIds.length === ctx_r92._currentBlock.totalQuestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r92.selectedPassageIds.includes(passage_r87.id) ? "selected" : "select passage", " ");
} }
function ListPassagesComponent_div_2_div_31_a_1_div_33_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_div_2_div_31_a_1_div_33_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r105); const passage_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit; const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r103.gotoUsageHistory(passage_r87.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListPassagesComponent_div_2_div_31_a_1_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_div_2_div_31_a_1_div_33_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r108); const passage_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r106.setTrailInfo(passage_r87); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_div_2_div_31_a_1_div_33_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r108); const passage_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r109.editPassage(passage_r87); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ListPassagesComponent_div_2_div_31_a_1_div_33_button_5_Template, 2, 0, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_div_2_div_31_a_1_div_33_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r108); const passage_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](8); return ctx_r111.openDeletePassageConfirmationModal(passage_r87.id, _r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const passage_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate2"]("routerLink", "/examalpha/passages/subjects/", ctx_r93.subjectId, "/passage/", passage_r87.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r93.currentUser.authorities.includes("ADMIN"));
} }
function ListPassagesComponent_div_2_div_31_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "h5", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "Passage : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, ListPassagesComponent_div_2_div_31_a_1_ng_template_29_Template, 2, 1, "ng-template", null, 96, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, ListPassagesComponent_div_2_div_31_a_1_span_31_Template, 2, 1, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](32, ListPassagesComponent_div_2_div_31_a_1_div_32_Template, 4, 4, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](33, ListPassagesComponent_div_2_div_31_a_1_div_33_Template, 8, 3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const passage_r87 = ctx.$implicit;
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](30);
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", passage_r87.reference, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Author: ", passage_r87.authorDetails.authorName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Created At: ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](12, 13, passage_r87.createdAt, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Last Modified: ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](15, 16, passage_r87.modifiedAt, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", passage_r87.stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Total Questions: ", passage_r87.itemCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](19, _c2, passage_r87.status == "PUBLISHED", passage_r87.status == "DRAFT" || passage_r87.status == "AWAITING_MODERATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Status: ", passage_r87.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngbPopover", _r89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Tags: ", passage_r87.itemTagDTOS.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r86.passageFilterOptions.itemUsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r86.assessmentActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r86.assessmentActive);
} }
function ListPassagesComponent_div_2_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ListPassagesComponent_div_2_div_31_a_1_Template, 34, 22, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r20.filteredResult.content);
} }
function ListPassagesComponent_div_2_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h4", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "No Passage(s) Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListPassagesComponent_div_2_ng_container_33_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "h4", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " No passage(s) found for filter! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_div_2_ng_container_33_div_1_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r116); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r115.clearFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Clear Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListPassagesComponent_div_2_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ListPassagesComponent_div_2_ng_container_33_div_1_Template, 7, 0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r22.filteredResult.content.length < 1);
} }
const _c3 = function () { return [20, 30, 50]; };
function ListPassagesComponent_div_2_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "p-paginator", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onPageChange", function ListPassagesComponent_div_2_div_34_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r118); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r117.pageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("totalRecords", ctx_r23.passages.totalElements)("first", 0)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c3))("rows", 20)("showCurrentPageReport", true);
} }
function ListPassagesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ListPassagesComponent_div_2_div_4_Template, 5, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ListPassagesComponent_div_2_i_6_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ListPassagesComponent_div_2_div_9_Template, 7, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, ListPassagesComponent_div_2_ngx_simplebar_10_Template, 7, 2, "ngx-simplebar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, " List of Passages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, ListPassagesComponent_div_2_span_19_Template, 3, 4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, ListPassagesComponent_div_2_button_22_Template, 3, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, ListPassagesComponent_div_2_div_23_Template, 3, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, ListPassagesComponent_div_2_button_24_Template, 3, 8, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, ListPassagesComponent_div_2_div_25_Template, 29, 5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "ngx-simplebar", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, ListPassagesComponent_div_2_div_29_Template, 7, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](30, ListPassagesComponent_div_2_div_30_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, ListPassagesComponent_div_2_div_31_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](32, ListPassagesComponent_div_2_div_32_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](33, ListPassagesComponent_div_2_ng_container_33_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](34, ListPassagesComponent_div_2_div_34_Template, 2, 6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r2.assessmentActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.currentUser.authorities.includes("ADMIN") && !ctx_r2._currentBlock);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r2.subjectName.toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.loading_topics_tree);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r2.loading_topics_tree && ctx_r2.passageTopics.length >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.selectedTopicName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.selectedTopic && !ctx_r2.assessmentActive && !ctx_r2.loading_passages && !ctx_r2.currentUser.authorities.includes("MODERATOR") && ctx_r2.passages.content.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.assessmentActive && ctx_r2.selectedPassageIds.length >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.selectedTopic && !ctx_r2.assessmentActive && !ctx_r2.loading_passages && ctx_r2.passages.content.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.showFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.loading_passages);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r2.loading_passages && ctx_r2.passages && ctx_r2.passages.content.length > 0 && !ctx_r2.filterState);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r2.loading_passages && ctx_r2.filteredResult && ctx_r2.filterState);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r2.loading_passages && !ctx_r2.filterState && ctx_r2.passages && ctx_r2.passages.content.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r2.loading_passages && ctx_r2.filterState && ctx_r2.filteredResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r2.loading_passages && ctx_r2.passages && ctx_r2.passages.content.length > 0);
} }
function ListPassagesComponent_ng_template_3_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r121.newTopic.name.length < 3);
} }
function ListPassagesComponent_ng_template_3_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Saving...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " Saving... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r122.submitted);
} }
function ListPassagesComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "form", 57, 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function ListPassagesComponent_ng_template_3_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r124); const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](2); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r123.addNewTopic(_r120); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "h4", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Add a new topic");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "p", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Topic Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ListPassagesComponent_ng_template_3_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r124); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r125.newTopic.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_ng_template_3_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r124); const modal_r119 = restoredCtx.$implicit; return modal_r119.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, ListPassagesComponent_ng_template_3_button_15_Template, 3, 1, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, ListPassagesComponent_ng_template_3_ng_template_16_Template, 7, 1, "ng-template", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r4.subjectName.toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r4.newTopic.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r4.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.submitted);
} }
function ListPassagesComponent_ng_template_5_ng_container_7_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "h6", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usage_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" This question was used in ", usage_r132.assessmentName, " ");
} }
function ListPassagesComponent_ng_template_5_ng_container_7_div_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usage_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Used at ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](4, 1, usage_r132.usedAt, "medium"), ". ");
} }
function ListPassagesComponent_ng_template_5_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ngb-accordion", 157, 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ngb-panel", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ListPassagesComponent_ng_template_5_ng_container_7_div_1_ng_template_4_Template, 8, 1, "ng-template", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ListPassagesComponent_ng_template_5_ng_container_7_div_1_ng_template_5_Template, 5, 4, "ng-template", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("closeOthers", true);
} }
function ListPassagesComponent_ng_template_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ListPassagesComponent_ng_template_5_ng_container_7_div_1_Template, 6, 1, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r128.passageUsageHistory);
} }
function ListPassagesComponent_ng_template_5_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "h4", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " This Passage has never been used for an exam! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListPassagesComponent_ng_template_5_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Loading passage usage history...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Loading passage usage history...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListPassagesComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h3", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "PASSAGE USAGE HISTORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_ng_template_5_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r139); const modal_r127 = restoredCtx.$implicit; return modal_r127.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, ListPassagesComponent_ng_template_5_ng_container_7_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ListPassagesComponent_ng_template_5_div_8_Template, 5, 0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ListPassagesComponent_ng_template_5_div_9_Template, 7, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_ng_template_5_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r139); const modal_r127 = restoredCtx.$implicit; return modal_r127.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r6.loading_usage_history && ctx_r6.passageUsageHistory && ctx_r6.passageUsageHistory.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r6.loading_usage_history && ctx_r6.passageUsageHistory.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r6.loading_usage_history);
} }
function ListPassagesComponent_ng_template_7_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_ng_template_7_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r145); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r144.deletePassage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Yes, Delete It ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListPassagesComponent_ng_template_7_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Deleting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " Deleting... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r143.processing_delete);
} }
function ListPassagesComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h4", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Confirm Action Dialog");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "p", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, " Are you sure you want to delete this Passage? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListPassagesComponent_ng_template_7_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r147); const modal_r141 = restoredCtx.$implicit; return modal_r141.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, " No, Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ListPassagesComponent_ng_template_7_button_9_Template, 2, 0, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, ListPassagesComponent_ng_template_7_ng_template_10_Template, 7, 1, "ng-template", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r8.processing_delete);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r8.processing_delete);
} }
class ListPassagesComponent {
    constructor(passageService, itemService, activatedRoute, router, itemUtil, notifier, assessmentService, modalService, userService, location) {
        this.passageService = passageService;
        this.itemService = itemService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.itemUtil = itemUtil;
        this.notifier = notifier;
        this.assessmentService = assessmentService;
        this.modalService = modalService;
        this.userService = userService;
        this.location = location;
        this._existingPassageIds = [];
        this._loadingExistingPassageIds = false;
        this.sendSelectedPassages = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
        this.subjects = [];
        this.assessmentStatus = false;
        this.subjectId = this.activatedRoute.snapshot.params['subjectId'];
        this.passageTopics = [];
        this.newPassageFilter = new _model_passage_filter__WEBPACK_IMPORTED_MODULE_2__.PassageFilter();
        this.showFilter = false;
        this.pageNo = 0;
        this.pageSize = 5;
        this.passageFilterOptions = new _model_passage_filter__WEBPACK_IMPORTED_MODULE_2__.PassageFilter();
        this.assessmentActive = false;
        this.passageSelectionComplete = false;
        this.selectedPassageIds = [];
        this.tagIds = [];
        this.submitted = false;
        this.newTopic = new _items_models_new_topic_model__WEBPACK_IMPORTED_MODULE_5__.NewTopic();
        this.passageStatus = [];
        this.itemType = [];
        this.difficultyLevel = [1, 2, 3, 4, 5];
        this.totalPassages = 0;
        this.loading = true;
        this.loading_passages = true;
        this.loading_topics_tree = true;
        this.processing_delete = false;
        this.filteredResult = new _model_all_passages_response_model_model__WEBPACK_IMPORTED_MODULE_0__.AllPassagesResponseModel();
        this.filterState = false;
        this.itemUsages = Object.keys(_items_models_filter_items_model__WEBPACK_IMPORTED_MODULE_6__.ItemUsed);
        this.passageUsageHistory = [];
        this.loading_usage_history = false;
        this.loadingAllSubjects = true;
    }
    ngOnInit() {
        this.subjectId = this.activatedRoute.snapshot.params['subjectId'];
        // console.log('PASSAGE ID: ', this.subjectId);
        this.breadCrumbItems = [{ label: 'passages', active: true }];
        this.assessmentActive = this.itemService.assessmentActive;
        // console.log(this.assessmentActive)
        console.log('SELECT PASS CLASS: ', this.passageService.selectedPassageIndex);
        this.passageStatus = Object.values(_items_models_item_status_enum__WEBPACK_IMPORTED_MODULE_3__.ItemStatusEnum);
        this.itemType = Object.values(_items_models_item_types__WEBPACK_IMPORTED_MODULE_4__.ItemTypes);
        if (this.passageService.topicId) {
            this.selectedTopicName = this.passageService.topicName;
            this.itemService
                .fetchTopicPassages(this.passageService.subjectId, this.passageService.topicId, this.pageNo, this.pageSize)
                .subscribe((value) => {
                this.passages = value;
                //console.log(this.passages);
            });
        }
        this.currentUser = this.userService.getCurrentUser();
        if (!this.assessmentActive) {
            // this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            if (this.subjectId === 'passages') {
                console.log('passages', 'passed');
                // this.loading_passages = false;
                if (this.currentUser.authorities.includes('ADMIN')) {
                    this.fetchAllSubjects();
                }
                else {
                    this.fetchAllSubjectsNonAdmin();
                }
            }
            else {
                if (this.subjectId !== 'passages') {
                    // this.subjectId = params.get("subjectId");
                    if (this.currentUser.authorities.includes('ADMIN')) {
                        this.fetchAllSubjects();
                    }
                    else {
                        this.fetchAllSubjectsNonAdmin();
                    }
                    this.subjectName = this.passageService.subjectName;
                    if (this.currentUser.authorities.includes('ADMIN')) {
                        this.itemService
                            .fetchPassageTopicTreeAdmin(this.passageService.subjectId)
                            .subscribe((value) => {
                            console.log('i got here');
                            value.forEach((topic) => {
                                this.totalPassages += topic.totalPassages;
                            });
                            this.passageTopics = value;
                            this.loading_topics_tree = false;
                            this.loading_passages = false;
                            this.loadingAllSubjects = false;
                            this.autoSelectTopicFromTrail();
                        }, (error) => {
                            this.loading_topics_tree = false;
                        });
                    }
                    else if (this.currentUser.authorities.includes('MODERATOR')) {
                        this.itemService
                            .fetchPassageTopicTreeModerator(this.passageService.subjectId)
                            .subscribe((value) => {
                            console.log('i got here');
                            value.forEach((topic) => {
                                this.totalPassages += topic.totalPassages;
                            });
                            this.passageTopics = value;
                            this.loading_topics_tree = false;
                            this.loading_passages = false;
                            this.loadingAllSubjects = false;
                            this.autoSelectTopicFromTrail();
                        }, (error) => {
                            this.loading_topics_tree = false;
                        });
                    }
                    else if (this.currentUser.authorities.includes('AUTHOR')) {
                        this.itemService
                            .fetchPassageTopicTreeAuthor(this.passageService.subjectId)
                            .subscribe((value) => {
                            console.log('i got here');
                            value.forEach((topic) => {
                                this.totalPassages += topic.totalPassages;
                            });
                            this.passageTopics = value;
                            this.loading_topics_tree = false;
                            this.loading_passages = false;
                            this.loadingAllSubjects = false;
                            this.autoSelectTopicFromTrail();
                            //console.log(this.passageTopics);
                        }, (error) => {
                            this.loading_topics_tree = false;
                        });
                    }
                }
            }
            // });
        }
        if (this.assessmentActive) {
            console.log('i got here assesment is active');
            this.loadingAllSubjects = false;
            this.subjectName = this._subjectName;
            this.itemService
                .fetchAssessmentPassageTopicsTree(this._subjectId, this._currentBlock.totalQuestionsInPassage)
                .subscribe((value) => {
                this.passageTopics = value;
                this.loading_topics_tree = false;
                this.loading = false;
                this.autoSelectTopicFromTrail();
            }, (error) => {
                this.loading_topics_tree = false;
                this.loading = false;
            });
        }
        // else {
        //   console.log("i dey here");
        //   // todo: loading topic treee if there is a subject id
        //   // todo: display selcet topic if there is no subject id
        // }
        let passageTrail = localStorage.getItem('passage-trail');
        if (passageTrail) {
            passageTrail = JSON.parse(passageTrail);
            (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.timer)(1000).subscribe(() => {
                this.getPassages(passageTrail);
                localStorage.removeItem('passage-trail');
            });
        }
    }
    handleSubjectSelection(subject) {
        const subIndex = this.allSubjects.findIndex((subj) => subj.subjectId === subject.subjectId);
        if (subIndex >= 0) {
            console.log('SELECTED PASS INDEX: ', subIndex);
            this.passageService.selectedPassageIndex = subIndex;
        }
        this.selectSubject(subject.subjectId);
        console.log('SELECTED PASS: ', subject);
    }
    selectSubject(subjectId) {
        this.passageService.subjectId = subjectId;
        this.subjectId = subjectId;
        this.subjectName = this.allSubjects.find((subject) => subject.subjectId === subjectId).name;
        const existingTrail = this.itemUtil.getSavedItemTrail();
        if (!existingTrail || existingTrail.subjectId !== subjectId) {
            const itemTrail = {
                subjectId: subjectId,
                subjectName: this.subjectName,
                topicId: null,
                topicName: null,
                subtopicId: null,
                subtopicName: null,
            };
            this.itemUtil.saveCurrentItemTrail(itemTrail);
        }
        if (this.currentUser.authorities.includes('ADMIN')) {
            this.itemService
                .fetchPassageTopicTreeAdmin(this.passageService.subjectId)
                .subscribe((value) => {
                value.forEach((topic) => {
                    this.totalPassages += topic.totalPassages;
                });
                console.log('SELECTED VALUE: ', value);
                this.passageTopics = value;
                this.loading_topics_tree = false;
                this.autoSelectTopicFromTrail();
                //console.log(this.passageTopics);
            }, (error) => {
                this.loading_topics_tree = false;
            });
        }
        else if (this.currentUser.authorities.includes('MODERATOR')) {
            this.itemService
                .fetchPassageTopicTreeModerator(this.passageService.subjectId)
                .subscribe((value) => {
                value.forEach((topic) => {
                    this.totalPassages += topic.totalPassages;
                });
                this.passageTopics = value;
                this.loading_topics_tree = false;
                this.autoSelectTopicFromTrail();
                //console.log(this.passageTopics);
            }, (error) => {
                this.loading_topics_tree = false;
            });
        }
        else if (this.currentUser.authorities.includes('AUTHOR')) {
            this.itemService
                .fetchPassageTopicTreeAuthor(this.passageService.subjectId)
                .subscribe((value) => {
                value.forEach((topic) => {
                    this.totalPassages += topic.totalPassages;
                });
                this.passageTopics = value;
                this.loading_topics_tree = false;
                this.autoSelectTopicFromTrail();
                //console.log(this.passageTopics);
            }, (error) => {
                this.loading_topics_tree = false;
            });
        }
    }
    openNewTopicModal(newTopicModal) {
        this.newTopic.name = '';
        this.modalService.open(newTopicModal, { centered: true, size: 'md' });
    }
    addNewTopic(form) {
        this.submitted = true;
        if (this.newTopic.name.trim() === '' || this.newTopic.name === undefined) {
            this.submitted = false;
            return this.notifier.notify('error', 'Please provide a valid topic name!');
        }
        if (this.newTopic.name.length < 5) {
            this.submitted = false;
            return this.notifier.notify('error', 'Please provide a valid topic name not less than 3 characters!');
        }
        this.newTopic.subjectId = this.subjectId;
        this.itemService.createNewTopic(this.newTopic).subscribe((value) => {
            if (value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: 'success',
                    title: 'Congratulations',
                    text: 'You have successfully added a new topic!',
                });
            }
            this.modalService.dismissAll();
            this.ngOnInit();
            this.submitted = false;
        }, (error) => {
            //console.log(error);
            this.submitted = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                icon: 'error',
                title: 'Failed!',
                text: `${error.error.message}`,
            });
        });
    }
    pickPassage(id) {
        if (this.selectedPassageIds.length === this._currentBlock.totalQuestions &&
            this.selectedPassageIds.includes(id)) {
            this.selectedPassageIds.splice(this.selectedPassageIds.indexOf(id), 1);
            this.sendSelectedPassages.emit(this.selectedPassageIds);
        }
        else {
            this.selectedPassageIds.push(id);
            if (this.selectedPassageIds.length === this._currentBlock.totalQuestions) {
                this.passageSelectionComplete = true;
            }
            this.sendSelectedPassages.emit(this.selectedPassageIds);
        }
    }
    pageChange(event) {
        this.pageNo = event.page;
        this.pageSize = event.rows;
        this.itemService
            .fetchTopicPassages(this.assessmentActive ? this._subjectId : this.subjectId, this.selectedTopic.topicId)
            .subscribe((value) => {
            this.passages = value;
            // console.log(this.passages);
        });
    }
    viewPassageItems(passageId) {
        this.passageService.fetchPassageItems(passageId).subscribe((value) => {
            if (value) {
                this.passageItems = value;
            }
        }, (error) => {
            // console.log(error);
        });
    }
    gotoUsageHistory(passageId) {
        this.router.navigate([
            '/examalpha/passages/subjects/' +
                this.subjectId +
                '/passage/' +
                passageId +
                '/usage',
        ]);
    }
    openUsageHistoryModal(passageId, passageHistoryModal) {
        this.loading_usage_history = true;
        this.modalService.open(passageHistoryModal, { centered: true, size: 'md' });
        this.passageService.getPassageUsageHistory(passageId).subscribe((value) => {
            if (value) {
                this.passageUsageHistory = value;
                this.loading_usage_history = false;
            }
        }, (error) => {
            this.loading_usage_history = false;
            this.notifier.notify('error', error.error.message);
        });
    }
    setItemTrail(topic) {
        this.passageService.topicId = topic.topicId;
        let itemTrail = {
            subjectName: this.subjectName,
            subjectId: this.subjectId,
            topicName: topic.topicName,
            topicId: topic.topicId,
        };
        this.itemUtil.currentItemTrail = itemTrail;
        this.itemUtil.saveCurrentItemTrail();
    }
    autoSelectTopicFromTrail() {
        if (!this.passageTopics || this.passageTopics.length === 0) {
            this.loading_passages = false;
            return;
        }
        const savedTrail = this.itemUtil.getSavedItemTrail();
        let selectedTopic = this.passageTopics[0];
        if (savedTrail && savedTrail.topicId) {
            const matchedTopic = this.passageTopics.find((t) => t.topicId === savedTrail.topicId);
            if (matchedTopic) {
                selectedTopic = matchedTopic;
            }
        }
        this.selectedTopic = selectedTopic;
        if (this.assessmentActive) {
            this.getAssessmentPassages(selectedTopic);
        }
        else {
            this.getPassages(selectedTopic);
            this.setItemTrail(selectedTopic);
        }
    }
    setTreeItemIndex(topic, index) {
        if (index == undefined) {
            return;
        }
        const passageTrail = Object.assign(Object.assign({}, topic), { treeIndex: index });
        localStorage.setItem('passage-trail', JSON.stringify(passageTrail));
    }
    getPassages(topic, treeItemIndex) {
        if (treeItemIndex !== undefined && treeItemIndex !== null) {
            this.setTreeItemIndex(topic, treeItemIndex);
        }
        this.showFilter = false;
        this.loading_passages = true;
        this.selectedTopicName = topic.topicName;
        let itemTrail = {
            subjectId: this.subjectId,
            topicId: topic.topicId,
            subtopicId: '',
            subjectName: this.subjectName,
            topicName: topic.topicName,
            subtopicName: '',
        };
        if (topic) {
            this.selectedTopic = topic;
        }
        // console.log(this.subjectId);
        //console.log('selectedTopic', this.selectedTopic);
        if (this.assessmentActive) {
            // fetch assessment  passage
            this.getAssessmentPassages(topic);
        }
        else {
            this.itemService
                .fetchTopicPassages(this.assessmentActive ? this._subjectId : this.subjectId, topic.topicId, this.pageNo, this.pageSize)
                .subscribe((value) => {
                this.passages = value;
                //console.log(this.passages);
                this.loading_passages = false;
            });
        }
    }
    getAssessmentPassages(passageTopics) {
        this.loading_passages = true;
        this.selectedTopicName = passageTopics.topicName;
        if (passageTopics) {
            this.selectedTopic = passageTopics;
        }
        this.assessmentService
            .fetchAssessmentPassages(this._subjectId, passageTopics.topicId, this._currentBlock.totalQuestionsInPassage, this.pageNo, this.pageSize)
            .subscribe((value) => {
            this.passages = value;
            this.loading_passages = false;
        }, (error) => {
            return this.notifier.notify('error', error.error.message);
        });
    }
    openDeletePassageConfirmationModal(passage_id, deletePassageConfirmationModal) {
        this.selectedPassageIdToDelete = passage_id;
        this.modalService.open(deletePassageConfirmationModal, {
            centered: true,
            size: 'md',
        });
    }
    deletePassage() {
        this.processing_delete = !this.processing_delete;
        this.passageService.deletePassage(this.selectedPassageIdToDelete).subscribe((value) => {
            if (value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: 'Congratulations',
                    text: 'The passage was deleted successfully.',
                    icon: 'success',
                });
            }
            this.modalService.dismissAll();
            this.processing_delete = !this.processing_delete;
            this.ngOnInit();
        }, (error) => {
            this.notifier.notify('error', `${error.error.message}`);
            this.processing_delete = !this.processing_delete;
        });
    }
    confirm() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'You are about to delete a passage ?',
            text: 'Deleting this passage will permanently remove it from our database.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#f46a6a',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Close',
        }).then((result) => {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Deleted!', 'Invoice has been deleted.', 'success');
            }
        });
    }
    recieveTag(event) {
        this.tagIds = event;
        // //console.log('newly filtered tag::::::', this.tagIds);
    }
    showFilterOptions() {
        this.showFilter = !this.showFilter;
    }
    filterPassage(passageFilterForm) {
        //this.showFilter = !this.showFilter;
        this.filterState = !this.filterState;
        this.loading_passages = true;
        //this.newPassageFilter.authorId = this.currentUser.id;
        if (this.newPassageFilter.score === undefined) {
            this.newPassageFilter.score = 10000000;
        }
        this.newPassageFilter.subjectId = this.subjectId;
        this.newPassageFilter.topicId = this.selectedTopic.topicId;
        this.tagIds.forEach((tag) => {
            this.newPassageFilter.tagIds.push(tag.tagId);
        });
        this.passageService.filterPassage(this.newPassageFilter).subscribe((value) => {
            if (value) {
                //this.filteredPassageResult = value;
                this.filteredResult = value;
                //console.log('original passages after filter::::', this.passages);
                this.loading_passages = false;
            }
        }, (error) => {
            this.filterState = !this.filterState;
            this.notifier.notify('error', `${error.error.message}`);
            this.loading_passages = false;
        });
    }
    clearFilter() {
        //this.showFilter = !this.showFilter;
        //this.loading_passages = true;
        this.filterState = false;
        this.filteredResult = new _model_all_passages_response_model_model__WEBPACK_IMPORTED_MODULE_0__.AllPassagesResponseModel();
        this.newPassageFilter = new _model_passage_filter__WEBPACK_IMPORTED_MODULE_2__.PassageFilter();
        //console.log('original passages after clearing filter::::', this.passages);
        //this.getPassages(this.selectedTopic);
        //this.ngOnInit();
    }
    setSubjectId() {
        this.itemUtil.currentItemTrail.subjectId = this.subject.subjectId;
        this.router.navigate(['/itembank/items/subjects/new-item']);
    }
    setTrailInfo(passageInfo) {
        this.passageService.topicName = this.selectedTopicName;
        this.passageService.currentPassageTrail = this.itemTrail;
        // console.log(this.passageService.topicName, this.passageService.currentPassageTrail)
        const trail = {
            subjectId: this.subjectId,
            topicId: this.selectedTopic.topicId,
            subjectName: this.subjectName,
            topicName: this.selectedTopic.topicName,
            assessmentActive: this.itemService.assessmentActive,
        };
        this.itemUtil.currentItemTrail = trail;
        this.itemUtil.saveCurrentItemTrail(trail);
    }
    sendInformation(topic) {
        this.itemTrail = {
            subjectId: this.itemService.subjectId,
            subjectName: this.subjectName,
            topicId: topic.topicId,
            topicName: topic.topicName,
        };
        this.passageService.currentPassageTrail = this.itemTrail;
        this.router.navigate(['/itembank/items/new-item']);
    }
    gotoNewPassage() {
        this.passageService.currentPassageTrail = {
            subjectId: this.subjectId,
            subjectName: this.subjectName,
            topicId: this.selectedTopic.topicId,
            topicName: this.selectedTopic.topicName,
        };
        this.router.navigate([
            '/examalpha/passages/subjects/' + this.subjectId + '/new-passage',
        ]);
    }
    editPassage(passage) {
        this.passageService.currentPassageTrail = {
            topicId: this.selectedTopic.topicId,
            subjectId: this.subjectId,
            subjectName: this.subjectName,
            topicName: this.selectedTopic.topicName,
        };
        this.router.navigate([
            'examalpha/passages/subjects/' +
                this.subjectId +
                '/passage/' +
                passage.id +
                '/edit-passage',
        ]);
    }
    fetchAllSubjectsNonAdmin() {
        this.itemService.fetchAllSubjectsNonAdmin().subscribe((value) => {
            this.allSubjects = value;
            this.loadingAllSubjects = false;
            this.subjectName = value[this.passageService.selectedPassageIndex].name;
            // this.subjectId =
            //   this.activatedRoute.snapshot.params['subjectId'] === 'passages'
            //     ? value[0].subjectId
            //     : this.activatedRoute.snapshot.params['subjectId'];
            this.subjectId =
                this.activatedRoute.snapshot.params['subjectId'] === 'passages'
                    ? value[this.passageService.selectedPassageIndex].subjectId
                    : this.activatedRoute.snapshot.params['subjectId'];
            this.passageService.subjectId = this.subjectId;
            // console.log('all sub', this.allSubjects);
            this.fetchTopicTree(this.passageService.subjectId);
            // console.log(this.allSubjects);
        }, (error) => {
            //console.log(error);
            this.loadingAllSubjects = false;
            this.notifier.notify('error', `${error.error.msg}`);
        });
    }
    fetchAllSubjects() {
        this.itemService.fetchAllSubjectsItems().subscribe((value) => {
            this.allSubjects = value;
            this.loadingAllSubjects = false;
            this.subjectName = value[this.passageService.selectedPassageIndex].name;
            this.subjectId =
                this.activatedRoute.snapshot.params['subjectId'] === 'passages'
                    ? value[this.passageService.selectedPassageIndex].subjectId
                    : this.activatedRoute.snapshot.params['subjectId'];
            this.passageService.subjectId = this.subjectId;
            // console.log('all sub', this.allSubjects);
            this.fetchTopicTree(this.passageService.subjectId);
            // console.log(this.allSubjects);
        }, (error) => {
            //console.log(error);
            this.loadingAllSubjects = false;
            this.notifier.notify('error', `${error.error.msg}`);
        });
    }
    fetchTopicTree(subjectId) {
        if (this.currentUser.authorities.includes('ADMIN')) {
            this.itemService.fetchPassageTopicTreeAdmin(subjectId).subscribe((value) => {
                console.log(value);
                value.forEach((topic) => {
                    this.totalPassages += topic.totalPassages;
                });
                this.passageTopics = value;
                this.loading_topics_tree = false;
                this.loading_passages = false;
                this.autoSelectTopicFromTrail();
                //console.log(this.passageTopics);
            }, (error) => {
                this.loading_topics_tree = false;
            });
        }
        else if (this.currentUser.authorities.includes('MODERATOR')) {
            this.itemService.fetchPassageTopicTreeModerator(subjectId).subscribe((value) => {
                console.log(value);
                value.forEach((topic) => {
                    this.totalPassages += topic.totalPassages;
                });
                this.passageTopics = value;
                this.loading_topics_tree = false;
                this.loading_passages = false;
                this.autoSelectTopicFromTrail();
                //console.log(this.passageTopics);
            }, (error) => {
                this.loading_topics_tree = false;
            });
        }
        else if (this.currentUser.authorities.includes('AUTHOR')) {
            this.itemService.fetchPassageTopicTreeAuthor(subjectId).subscribe((value) => {
                console.log(value);
                value.forEach((topic) => {
                    this.totalPassages += topic.totalPassages;
                });
                this.passageTopics = value;
                this.loading_topics_tree = false;
                this.loading_passages = false;
                this.autoSelectTopicFromTrail();
                //console.log(this.passageTopics);
            }, (error) => {
                this.loading_topics_tree = false;
            });
        }
    }
}
ListPassagesComponent.ɵfac = function ListPassagesComponent_Factory(t) { return new (t || ListPassagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_all_passages_service__WEBPACK_IMPORTED_MODULE_7__.AllPassagesService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_items_item_http_service__WEBPACK_IMPORTED_MODULE_8__.ItemHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_items_item_utilities_service__WEBPACK_IMPORTED_MODULE_9__.ItemUtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_17__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_assessment_service_assessments_service__WEBPACK_IMPORTED_MODULE_10__.AssessmentsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_11__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_19__.Location)); };
ListPassagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: ListPassagesComponent, selectors: [["app-list-passages"]], inputs: { _subjectId: "_subjectId", _assessmentId: "_assessmentId", _sectionId: "_sectionId", _currentBlock: "_currentBlock", _subjectName: "_subjectName", _existingPassageIds: "_existingPassageIds", _loadingExistingPassageIds: "_loadingExistingPassageIds" }, outputs: { sendSelectedPassages: "sendSelectedPassages" }, decls: 9, vars: 3, consts: [[3, "title", "breadcrumbItems", 4, "ngIf"], ["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["newTopicModal", ""], ["passageUsageModal", ""], ["deletePassageConfirmationModal", ""], [3, "title", "breadcrumbItems"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "visually-hidden"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"], [1, "row"], [1, "col-lg-3", "col-sm-12"], [1, "card"], [1, "card-header", "border-bottom-dashed"], ["class", "mb-3", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "btn-label", "text-center", "waves-effect", "right", "waves-light", "w-100"], ["title", "NEW TOPIC", "class", "ri-add-line label-icon align-middle fs-11 ms-2", 3, "click", 4, "ngIf"], [1, "card-body"], ["class", "message-list-content mx-n4 px-4 message-list-scroll", 4, "ngIf"], [1, "col-lg-9", "col-sm-12"], [1, "row", "g-4", "align-items-center"], [1, "col-sm"], [1, "card-title", "mb-0"], [4, "ngIf"], [1, "col-sm-auto"], [1, "d-flex", "gap-2", "hstack"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", 3, "ngbTooltip", "class", "click", 4, "ngIf"], ["class", "card-body border-bottom-dashed border-bottom bg-white", 4, "ngIf"], [1, "message-list-content", "mx-n4", "px-4", "message-list-scroll"], [1, "live-preview"], ["class", "list-group", 4, "ngIf"], ["class", "d-flex flex-column justify-content-between align-items-center py-5 my-2", 4, "ngIf"], ["class", "card-footer", 4, "ngIf"], [1, "mb-3"], ["for", "", 1, "form-label", "mt-2"], ["bindLabel", "name", "bindValue", "subjectId", "name", "subject", "dropdownPosition", "bottom", 1, "custom", 3, "items", "ngModel", "ngModelChange", "change"], ["ng-optgroup-tmp", ""], ["title", "NEW TOPIC", 1, "ri-add-line", "label-icon", "align-middle", "fs-11", "ms-2", 3, "click"], ["ngbDropdown", "", 1, "verti-sitemap", "dropdown"], [1, "list-unstyled", "mb-0"], ["data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "p-0", "parent-title", "dropdown", "arrow-none", "d-flex", "justify-content-between"], ["name", "topic-tree"], ["class", "first-list", 4, "ngFor", "ngForOf"], [1, "first-list"], ["ngbDropdown", "", 1, "dropdown", 2, "padding", "8px", 3, "ngClass"], ["topicDrop", "ngbDropdown"], ["data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", "placement", "top", 1, "fw-small", "fs-11", "text-primary", "dropdown", "arrow-none", 3, "ngStyle", "ngbTooltip", "click"], [1, "ri-folder-line", "me-1", "align-bottom"], ["ngbTooltip", "TOTAL PASSAGES", 1, "position-absolute", "top-50", "end-0", "translate-middle", "badge", "rounded-pill", "bg-primary"], [1, "btn", "btn-primary", 3, "click"], [1, "ri-add-line", "align-middle"], [1, ""], ["type", "button", 3, "ngbTooltip", "click"], [1, "card-body", "border-bottom-dashed", "border-bottom", "bg-white"], [3, "ngSubmit"], ["passageFilterForm", "ngForm"], [1, "row", "g-3"], [1, "col-6"], [1, "search-box"], ["type", "text", "name", "content", "placeholder", "Search for content", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "ri-search-line", "search-icon"], ["type", "text", "name", "title", "placeholder", "Search for title", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-2"], ["for", "status"], ["data-plugin", "choices", "data-choices", "", "data-choices-search-false", "", "name", "status", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-sm-2", 4, "ngIf"], [1, "col-8"], [3, "sendTags"], [1, "d-flex", "justify-content-start", "gap-2"], ["type", "button", 1, "align-items-center", "btn", "btn-danger", 3, "click"], [1, "ri-close-line", "me-2", "align-middle"], ["type", "submit", 1, "align-items-center", "btn", "btn-secondary"], [1, "ri-equalizer-fill", "me-2", "align-middle"], [3, "value"], [1, "col-sm-2"], ["for", "itemType"], ["data-plugin", "choices", "data-choices", "", "data-choices-search-false", "", "name", "itemUsed", 1, "form-select", 3, "ngModel", "ngModelChange"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "row", 2, "height", "fit-content"], [1, "col-lg-12", "col-sm-auto"], [1, "d-flex", "flex-wrap", "mb-2", "align-items-center", "justify-content-between"], [1, "list-title", "fs-18", "mb-1"], [1, "list-text", "mb-0", "fs-12"], [1, "d-flex", "gap-2", "float-end"], [1, "list-text", "mb-0", 3, "innerHTML"], [1, "d-flex", "gap-1", "align-items-end", "justify-content-between"], [1, "d-flex", "align-items-end"], [1, "badge", "badge-soft-primary"], [1, "badge", "mx-2", 3, "ngClass"], ["placement", "top", "data-bs-container", "body", "data-bs-toggle", "popover", "popoverClass", "popOverClass", "triggers", "mouseenter:mouseleave", 1, "badge", "mx-2", "badge-soft-info", 2, "cursor", "pointer", 3, "ngbPopover"], ["tagsPopOver", ""], ["class", "form-check mt-1", 4, "ngIf"], ["class", "d-flex gap-1 justify-content-end", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "form-check", "mt-1"], ["type", "checkbox", 1, "form-check-input", 3, "disabled", "checked", "hidden", "change"], [1, "form-check-label", 3, "hidden", "click"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"], [1, "d-flex", "gap-1", "justify-content-end"], ["ngbTooltip", "VIEW", "type", "button", 1, "btn", "btn-icon", "btn-outline-dark", 3, "routerLink", "click"], [1, "ri-eye-line"], ["ngbTooltip", "EDIT", "type", "button", 1, "btn", "btn-icon", "btn-outline-primary", 3, "click"], [1, "ri-edit-line"], ["ngbTooltip", "USAGE HISTORY", "type", "button", "class", "btn btn-icon btn-outline-info", 3, "click", 4, "ngIf"], ["ngbTooltip", "DELETE", "type", "button", 1, "btn", "btn-icon", "btn-outline-danger", 3, "click"], [1, "ri-delete-bin-line"], ["ngbTooltip", "USAGE HISTORY", "type", "button", 1, "btn", "btn-icon", "btn-outline-info", 3, "click"], [1, "ri-history-line"], ["class", "badge badge-soft-secondary", 4, "ngIf"], [1, "badge", "badge-soft-secondary"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "hidden", "change"], [1, "form-check-label", 3, "hidden"], [1, "d-flex", "flex-column", "justify-content-between", "align-items-center", "py-5", "my-2"], [1, "text-secondary", "fw-bold", "fst-italic"], ["class", "d-flex flex-column justify-content-between align-items-center my-2", 4, "ngIf"], [1, "d-flex", "flex-column", "justify-content-between", "align-items-center", "my-2"], ["src", "assets/images/blank_pages/empty-state.png", "width", "200", "height", "200", 1, ""], [1, "text-secondary", "fw-bold"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "ri-close-line", "me-2"], [1, "card-footer"], ["currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "totalRecords", "first", "rowsPerPageOptions", "rows", "showCurrentPageReport", "onPageChange"], [1, "modal-body", "p-4"], ["newTopicForm", "ngForm"], [1, "text-center", "mb-4"], [1, "text-muted", "text-center"], [1, "d-flex", "flex-wrap", "gap-2", "align-items-center", "mb-3"], ["for", "name"], ["type", "text", "name", "name", "placeholder", "Topic", 1, "form-control", "mb-3", 3, "ngModel", "ngModelChange"], [1, "d-flex", "gap-2", "float-end", "mt-4"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", "d-flex", "gap-1", "align-items-center", 3, "click"], [1, "ri-close-line"], ["type", "submit", "class", "btn btn-success d-flex gap-1 align-items-center", 3, "disabled", 4, "ngIf"], [3, "ngIf"], ["type", "submit", 1, "btn", "btn-success", "d-flex", "gap-1", "align-items-center", 3, "disabled"], [1, "ri-save-line"], [1, "btn", "btn-outline-primary", "btn-load", 3, "disabled"], [1, "d-flex", "align-items-center"], ["role", "status", 1, "spinner-border", "flex-shrink-0"], [1, "flex-grow-1", "ms-2"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "px-5", 2, "height", "350px", "scroll-behavior", "smooth", "overflow-x", "hidden", "overflow-y", "auto"], ["class", "p-2", 4, "ngIf"], [1, "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["class", "profile-timeline", 4, "ngFor", "ngForOf"], [1, "profile-timeline"], ["activeIds", "static-1", 3, "closeOthers"], ["acc", "ngbAccordion"], ["id", "static-1"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], ["data-bs-toggle", "collapse", "href", "javasccript:void(0;)", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "accordion-button", "p-2", "shadow-none"], [1, "flex-shrink-0", "avatar-xs"], [1, "avatar-title", "rounded-circle", "'bg-success'"], [1, "ri-file-line"], [1, "flex-grow-1", "ms-3"], [1, "fs-15", "mb-0", "fw-semibold"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body", "ms-2", "ps-5", "pt-0"], [1, "p-2"], [1, "d-flex", "flex-column", "justify-content-between", "align-items-center"], [1, "text-secondary", "fw-bold", "my-2"], [1, "modal-body", "p-5"], [1, "mb-4", "text-center"], [1, "text-center", "text-muted"], [1, "d-flex", "justify-content-center", "gap-2", "mt-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "class", "btn btn-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-outline-danger", "btn-load", 3, "disabled"]], template: function ListPassagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, ListPassagesComponent_app_breadcrumbs_0_Template, 1, 3, "app-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ListPassagesComponent_div_1_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ListPassagesComponent_div_2_Template, 35, 16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ListPassagesComponent_ng_template_3_Template, 17, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ListPassagesComponent_ng_template_5_Template, 14, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, ListPassagesComponent_ng_template_7_Template, 11, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.assessmentActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loading_passages);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.loading_passages && !ctx.loadingAllSubjects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_12__.BreadcrumbsComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__.NgOptgroupTemplateDirective, simplebar_angular__WEBPACK_IMPORTED_MODULE_22__.SimplebarAngularComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbDropdownToggle, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgStyle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgSelectMultipleOption"], _items_item_tag_item_tag_component__WEBPACK_IMPORTED_MODULE_13__.ItemTagComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbPopover, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLinkWithHref, primeng_paginator__WEBPACK_IMPORTED_MODULE_23__.Paginator, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbPanelTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbPanelContent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.TitleCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXBhc3NhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1891:
/*!***************************************************************************!*\
  !*** ./src/app/pages/passages/model/all-passages-response-model.model.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPassagesResponseModel": () => (/* binding */ AllPassagesResponseModel)
/* harmony export */ });
class AllPassagesResponseModel {
}


/***/ }),

/***/ 17079:
/*!********************************************************!*\
  !*** ./src/app/pages/passages/model/passage-filter.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassageFilter": () => (/* binding */ PassageFilter)
/* harmony export */ });
class PassageFilter {
    constructor() {
        this.tagIds = [];
        this.topicId = null;
        //authorId: string;
    }
}


/***/ }),

/***/ 22713:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/passages/new-passage-item/new-passage-item.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPassageItemComponent": () => (/* binding */ NewPassageItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _items_item_utilities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../items/item-utilities.service */ 16716);
/* harmony import */ var _items_new_item_new_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../items/new-item/new-item.component */ 11031);



class NewPassageItemComponent {
    constructor(itemUtil) {
        this.itemUtil = itemUtil;
    }
    ngOnInit() {
        // console.log(this.itemUtil.currentItemTrail);
        this.itemTrail = this.itemUtil.currentItemTrail;
    }
}
NewPassageItemComponent.ɵfac = function NewPassageItemComponent_Factory(t) { return new (t || NewPassageItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_items_item_utilities_service__WEBPACK_IMPORTED_MODULE_0__.ItemUtilitiesService)); };
NewPassageItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NewPassageItemComponent, selectors: [["app-new-passage-item"]], decls: 1, vars: 0, consts: [[3, "itemTrail"]], template: function NewPassageItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-new-item", 0);
    } }, directives: [_items_new_item_new_item_component__WEBPACK_IMPORTED_MODULE_1__.NewItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctcGFzc2FnZS1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 41180:
/*!*********************************************************************!*\
  !*** ./src/app/pages/passages/new-passage/new-passage.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPassageComponent": () => (/* binding */ NewPassageComponent)
/* harmony export */ });
/* harmony import */ var _items_passage_item_model_passage_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../items/passage-item/model/passage.model */ 53287);
/* harmony import */ var _items_models_item_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../items/models/item-status-enum */ 60758);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _items_item_utilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../items/item-utilities.service */ 16716);
/* harmony import */ var _list_passages_all_passages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list-passages/all-passages.service */ 88820);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _items_item_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../items/item-http.service */ 45911);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 28155);
/* harmony import */ var _items_item_tag_item_tag_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../items/item-tag/item-tag.component */ 73742);
/* harmony import */ var _items_passage_preview_passage_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../items/passage-preview/passage-preview.component */ 29306);














function NewPassageComponent_form_0_div_10_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.passageTrail.topicName.toUpperCase());
} }
function NewPassageComponent_form_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, NewPassageComponent_form_0_div_10_span_4_Template, 3, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r3.passageTrail.subjectName.toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.passageTrail.topicName);
} }
function NewPassageComponent_form_0_div_17_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NewPassageComponent_form_0_div_17_li_8_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r9.updatePassage("draft"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Save as draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function NewPassageComponent_form_0_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NewPassageComponent_form_0_div_17_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r11.updatePassage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, NewPassageComponent_form_0_div_17_li_8_Template, 3, 0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.passageEdit.itemStatus !== "PUBLISHED");
} }
function NewPassageComponent_form_0_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ul", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NewPassageComponent_form_0_div_18_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r13.savePassage(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NewPassageComponent_form_0_div_18_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r15.savePassageAsDraft(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Save as draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["table quickbars lists autoresize charmap"]; };
const _c1 = "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent table quickimage quicklink | superscript subscript charmap";
const _c2 = function (a3) { return { base_url: "/tinymce", height: 200, menubar: true, plugins: a3, quickbars_insert_toolbars: false, branding: false, toolbar: _c1 }; };
function NewPassageComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function NewPassageComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r16.savePassage(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NewPassageComponent_form_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r18.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, NewPassageComponent_form_0_div_10_Template, 5, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NewPassageComponent_form_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r19.doPreview(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, " Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, NewPassageComponent_form_0_div_17_Template, 9, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, NewPassageComponent_form_0_div_18_Template, 11, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function NewPassageComponent_form_0_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r20.passage.reference = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Passage");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "editor", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function NewPassageComponent_form_0_Template_editor_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r21.passage.stimulus = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "app-item-tag", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("sendTags", function NewPassageComponent_form_0_Template_app_item_tag_sendTags_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r22.recieveTags($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r0.passageEdit ? "Edit Passage" : "New Passage", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.passageTrail);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r0.passage.stimulus);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.passageEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.passageEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.passage.reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.passage.stimulus)("init", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](10, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](9, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("recievedTag", ctx_r0.passage.itemTagsDTOS);
} }
function NewPassageComponent_app_passage_preview_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-passage-preview", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("returnPreviewData", function NewPassageComponent_app_passage_preview_1_Template_app_passage_preview_returnPreviewData_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r23.returnData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("previewData", ctx_r1.previewData);
} }
class NewPassageComponent {
    /* subjectId: string = this.ar.snapshot.params['subjectId']; */
    constructor(itemUtil, passageService, location, itemService, userService) {
        this.itemUtil = itemUtil;
        this.passageService = passageService;
        this.location = location;
        this.itemService = itemService;
        this.userService = userService;
        this.selectedItemType = '';
        this.passage = new _items_passage_item_model_passage_model__WEBPACK_IMPORTED_MODULE_0__.Passage();
        this.tags = [];
        this.preview = false;
        this.currentUser = this.userService.getCurrentUser();
        this.savingPassage = false;
    }
    ngOnInit() {
        this.passageTrail = this.passageService.currentPassageTrail;
        console.log('Is moderation currently enabled on this subject?::::', this.itemService.currentSubjectModerationEnabled);
        //console.log(this.passageTrail);
        if (this.passageEdit) {
            this.passage.stimulus = this.passageEdit.stimulus;
            this.passage.reference = this.passageEdit.reference;
            this.passage.itemTagsDTOS = this.passageEdit.itemTagsDTOS;
        }
    }
    setItemType(value) {
        this.selectedItemType = value;
    }
    doPreview(itemForm) {
        this.itemUtil.previewItem = true;
        this.preview = true;
        this.previewData = this.passage;
    }
    recieveTags(tags) {
        tags.forEach((tag) => {
            let data = { tagId: tag.tagId };
            this.tags.push(data);
        });
    }
    buildItem(itemForm) {
        // this.tags = this.tags.map((tag) => {
        //   return { tagId: tag.tagId };
        // });
        this.passage.itemTagsDTOS = this.tags.map((tag) => {
            return { tagId: tag.tagId };
        });
        this.passage.subjectId = this.passageService.currentPassageTrail.subjectId;
        this.passage.topicId = this.passageService.currentPassageTrail.topicId;
        /* if(this.passageEdit) {
          this.passage.itemStatus = this.passageEdit.itemStatus;
        } */
    }
    savePassage(itemForm) {
        if (this.itemService.currentSubjectModerationEnabled) {
            this.passage.itemStatus = _items_models_item_status_enum__WEBPACK_IMPORTED_MODULE_1__.ItemStatusEnum.AWAITING_MODERATION;
        }
        else if (!this.itemService.currentSubjectModerationEnabled) {
            this.passage.itemStatus = _items_models_item_status_enum__WEBPACK_IMPORTED_MODULE_1__.ItemStatusEnum.PUBLISHED;
        }
        this.buildItem(itemForm);
        this.saveFunction();
    }
    back() {
        this.location.back();
    }
    savePassageAsDraft(itemForm) {
        this.passage.itemStatus = _items_models_item_status_enum__WEBPACK_IMPORTED_MODULE_1__.ItemStatusEnum.DRAFT;
        this.buildItem(itemForm);
        this.saveFunction();
    }
    saveFunction() {
        this.savingPassage = true;
        this.publishLoader();
        this.itemService
            .createNewPassage(this.passage)
            .toPromise()
            .then((response) => {
            if (response) {
                // console.log(response);
                this.savingPassage = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().close();
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    icon: 'success',
                    title: 'Congratulations',
                    text: 'You have successfully added a new passage.',
                });
            }
            this.location.back();
        })
            .catch((error) => {
            // console.log(error);
            this.savingPassage = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().close();
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                title: 'Failed',
                text: error.error.message,
            });
        });
    }
    returnData(data) {
        this.preview = false;
        //this.previewData = data;
        this.passage = data;
        // console.log(data);
    }
    updatePassage(status) {
        // console.log(this.tags);
        let temp_tags = [];
        if (status) {
            this.passage.itemStatus = _items_models_item_status_enum__WEBPACK_IMPORTED_MODULE_1__.ItemStatusEnum.DRAFT;
        }
        else if (this.itemService.currentSubjectModerationEnabled) {
            this.passage.itemStatus = _items_models_item_status_enum__WEBPACK_IMPORTED_MODULE_1__.ItemStatusEnum.AWAITING_MODERATION;
        }
        else {
            this.passage.itemStatus = _items_models_item_status_enum__WEBPACK_IMPORTED_MODULE_1__.ItemStatusEnum.PUBLISHED;
        }
        /* this.tags.forEach((tag) => {
          let data = { tagId: tag.tagId }
          this.passage.itemTagsDTOS.push(data);
        }); */
        if (this.tags.length > 0) {
            this.passage.itemTagsDTOS = this.tags;
        }
        else {
            this.passageEdit.itemTagsDTOS.forEach((tag) => {
                temp_tags.push({ tagId: tag.tagId });
            });
        }
        this.passage.itemTagsDTOS = temp_tags;
        this.passage.subjectId = this.passageTrail.subjectId;
        this.passage.topicId = this.passageTrail.topicId;
        //this.passageEdit.reference = this.passage.reference;
        //this.passageEdit.itemTagsDTOS = this.tags;
        //console.log('passage to update', this.passage);
        this.savingPassage = true;
        this.publishLoader();
        this.passageService
            .editPassage(this.passageEdit.id, this.passage)
            .subscribe((value) => {
            if (value) {
                this.savingPassage = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().close();
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    title: 'Congratulations!',
                    text: 'You have successfully updated this passage.',
                    icon: 'success',
                });
            }
            //this.passage = new Passage();
            this.back();
        }, (error) => {
            // console.log(error);
            this.savingPassage = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().close();
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: 'Failed!',
                text: error.error.message,
                icon: 'error',
            });
        });
    }
    publishLoader(msg) {
        if (!this.savingPassage) {
            return;
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: msg ? msg : 'Saving the passage, Please Wait...',
                allowEnterKey: false,
                allowEscapeKey: false,
                allowOutsideClick: false,
                timerProgressBar: true,
                didOpen: () => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().showLoading();
                },
            });
        }
    }
}
NewPassageComponent.ɵfac = function NewPassageComponent_Factory(t) { return new (t || NewPassageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_items_item_utilities_service__WEBPACK_IMPORTED_MODULE_3__.ItemUtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_list_passages_all_passages_service__WEBPACK_IMPORTED_MODULE_4__.AllPassagesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_items_item_http_service__WEBPACK_IMPORTED_MODULE_5__.ItemHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService)); };
NewPassageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: NewPassageComponent, selectors: [["app-new-passage"]], inputs: { passageEdit: "passageEdit" }, decls: 2, vars: 2, consts: [[3, "ngSubmit", 4, "ngIf"], [3, "previewData", "returnPreviewData", 4, "ngIf"], [3, "ngSubmit"], ["itemForm", "ngForm"], [1, "row", "mb-1"], [1, "col-lg-4", "col-sm-12"], [1, "d-flex", "gap-2", "align-items-center"], ["type", "button", 1, "btn", "btn-outline-info", 3, "click"], [1, "ri-arrow-left-line", "align-middle", "me-2"], [1, "title"], ["class", "col-lg-8 col-sm-12 d-flex justify-content-end float-end", 4, "ngIf"], [1, "card"], [1, "card-body"], [1, "mb-5"], [1, "d-flex", "flex-wrap", "gap-2", "float-end"], ["type", "button", 1, "btn", "btn-outline-success", "waves-effect", "waves-light", 3, "disabled", "click"], ["class", "btn-group", "role", "group", "ngbDropdown", "", 4, "ngIf"], [1, "mb-3"], ["for", "autoSizingInputGroup", 1, "form-label"], ["type", "text", "name", "reference", "placeholder", "Title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "stimulus", 3, "ngModel", "init", "ngModelChange"], ["stimulus", "ngModel"], [1, "row", "gy-4"], [1, "col-12"], [3, "recievedTag", "sendTags"], [1, "col-lg-8", "col-sm-12", "d-flex", "justify-content-end", "float-end"], [1, "d-flex", "flex-row", "mx-2"], ["ngbTooltip", "SUBJECT", 1, "d-flex", "align-items-center", "text-muted"], ["class", "d-flex align-items-center text-muted", "ngbTooltip", "TOPIC", 4, "ngIf"], ["ngbTooltip", "TOPIC", 1, "d-flex", "align-items-center", "text-muted"], [1, "ri-arrow-right-s-line"], ["role", "group", "ngbDropdown", "", 1, "btn-group"], ["id", "btnGroupDrop2", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle", "arrow-none"], [1, "mdi", "mdi-chevron-down"], ["aria-labelledby", "btnGroupDrop2", "ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [4, "ngIf"], ["id", "btnGroupDrop1", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle", "arrow-none"], ["aria-labelledby", "btnGroupDrop1", "ngbDropdownMenu", "", 1, "dropdown-menu"], [3, "previewData", "returnPreviewData"]], template: function NewPassageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NewPassageComponent_form_0_Template, 31, 12, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NewPassageComponent_app_passage_preview_1_Template, 1, 1, "app-passage-preview", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.preview === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.preview === true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltip, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_13__.EditorComponent, _items_item_tag_item_tag_component__WEBPACK_IMPORTED_MODULE_7__.ItemTagComponent, _items_passage_preview_passage_preview_component__WEBPACK_IMPORTED_MODULE_8__.PassagePreviewComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctcGFzc2FnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 72344:
/*!***********************************************************!*\
  !*** ./src/app/pages/passages/passages-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassagesRoutingModule": () => (/* binding */ PassagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _all_subjects_passage_all_subjects_passage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-subjects-passage/all-subjects-passage.component */ 91512);
/* harmony import */ var _list_passages_list_passages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-passages/list-passages.component */ 71089);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _new_passage_new_passage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-passage/new-passage.component */ 41180);
/* harmony import */ var _edit_passage_edit_passage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-passage/edit-passage.component */ 55437);
/* harmony import */ var _view_passage_view_passage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-passage/view-passage.component */ 57138);
/* harmony import */ var _new_passage_item_new_passage_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-passage-item/new-passage-item.component */ 22713);
/* harmony import */ var _usage_history_usage_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usage-history/usage-history.component */ 1770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);










const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/itembank/passages/subjects' },
    { path: 'subjects', component: _all_subjects_passage_all_subjects_passage_component__WEBPACK_IMPORTED_MODULE_0__.AllSubjectsPassageComponent },
    { path: 'subjects/:subjectId', component: _list_passages_list_passages_component__WEBPACK_IMPORTED_MODULE_1__.ListPassagesComponent },
    { path: 'subjects/:subjectId/new-passage', component: _new_passage_new_passage_component__WEBPACK_IMPORTED_MODULE_2__.NewPassageComponent },
    { path: 'subjects/:subjectId/passage/:passageId/edit-passage', component: _edit_passage_edit_passage_component__WEBPACK_IMPORTED_MODULE_3__.EditPassageComponent },
    { path: 'subjects/:subjectId/passage/:passageId/usage', component: _usage_history_usage_history_component__WEBPACK_IMPORTED_MODULE_6__.UsageHistoryComponent },
    { path: 'subjects/:subjectId/passage/:passageId/new-item', component: _new_passage_item_new_passage_item_component__WEBPACK_IMPORTED_MODULE_5__.NewPassageItemComponent },
    { path: 'subjects/:subjectId/passage/:passageId', component: _view_passage_view_passage_component__WEBPACK_IMPORTED_MODULE_4__.ViewPassageComponent },
];
class PassagesRoutingModule {
}
PassagesRoutingModule.ɵfac = function PassagesRoutingModule_Factory(t) { return new (t || PassagesRoutingModule)(); };
PassagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PassagesRoutingModule });
PassagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PassagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 35771:
/*!***************************************************!*\
  !*** ./src/app/pages/passages/passages.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassagesModule": () => (/* binding */ PassagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _items_items_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/items.module */ 97272);
/* harmony import */ var _passages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passages-routing.module */ 72344);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 28155);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/paginator */ 21066);
/* harmony import */ var _list_passages_list_passages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-passages/list-passages.component */ 71089);
/* harmony import */ var _all_subjects_passage_all_subjects_passage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-subjects-passage/all-subjects-passage.component */ 91512);
/* harmony import */ var _new_passage_new_passage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-passage/new-passage.component */ 41180);
/* harmony import */ var _edit_passage_edit_passage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-passage/edit-passage.component */ 55437);
/* harmony import */ var _view_passage_view_passage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-passage/view-passage.component */ 57138);
/* harmony import */ var _new_passage_item_new_passage_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-passage-item/new-passage-item.component */ 22713);
/* harmony import */ var _usage_history_usage_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./usage-history/usage-history.component */ 1770);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);









/** component imports */









class PassagesModule {
}
PassagesModule.ɵfac = function PassagesModule_Factory(t) { return new (t || PassagesModule)(); };
PassagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: PassagesModule });
PassagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
        { provide: _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_11__.TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
        //ItemUtilitiesService,
        //ItemHttpService,
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _passages_routing_module__WEBPACK_IMPORTED_MODULE_2__.PassagesRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbAccordionModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPaginationModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbTooltipModule,
            _items_items_module__WEBPACK_IMPORTED_MODULE_1__.ItemsModule,
            simplebar_angular__WEBPACK_IMPORTED_MODULE_15__.SimplebarAngularModule,
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_11__.EditorModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_16__.PaginatorModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPopoverModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](PassagesModule, { declarations: [_list_passages_list_passages_component__WEBPACK_IMPORTED_MODULE_3__.ListPassagesComponent,
        _all_subjects_passage_all_subjects_passage_component__WEBPACK_IMPORTED_MODULE_4__.AllSubjectsPassageComponent,
        _new_passage_new_passage_component__WEBPACK_IMPORTED_MODULE_5__.NewPassageComponent,
        _edit_passage_edit_passage_component__WEBPACK_IMPORTED_MODULE_6__.EditPassageComponent,
        _view_passage_view_passage_component__WEBPACK_IMPORTED_MODULE_7__.ViewPassageComponent,
        _new_passage_item_new_passage_item_component__WEBPACK_IMPORTED_MODULE_8__.NewPassageItemComponent,
        _usage_history_usage_history_component__WEBPACK_IMPORTED_MODULE_9__.UsageHistoryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _passages_routing_module__WEBPACK_IMPORTED_MODULE_2__.PassagesRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbAccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbTooltipModule,
        _items_items_module__WEBPACK_IMPORTED_MODULE_1__.ItemsModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_15__.SimplebarAngularModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_11__.EditorModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_16__.PaginatorModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPopoverModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule], exports: [_list_passages_list_passages_component__WEBPACK_IMPORTED_MODULE_3__.ListPassagesComponent] }); })();


/***/ }),

/***/ 1770:
/*!*************************************************************************!*\
  !*** ./src/app/pages/passages/usage-history/usage-history.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsageHistoryComponent": () => (/* binding */ UsageHistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _list_passages_all_passages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list-passages/all-passages.service */ 88820);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);






class UsageHistoryComponent {
    constructor(notifier, passageService, ar, userService) {
        this.notifier = notifier;
        this.passageService = passageService;
        this.ar = ar;
        this.userService = userService;
        this.passageId = this.ar.snapshot.params['passageId'];
        this.loading = true;
        this.currentUser = this.userService.getCurrentUser();
        this.fetchUsageHistory();
    }
    ngOnInit() {
        this.breadCrumbItems = [
            { label: 'passages', active: false },
            { label: 'usage-history', active: false },
        ];
    }
    fetchUsageHistory() {
        this.passageService.getPassageUsageHistory(this.passageId).subscribe((value) => {
            this.passageUsageHistory = value;
            this.loading = false;
        }, (error) => {
            this.notifier.notify('error', error.error.message);
            this.loading = false;
        });
    }
}
UsageHistoryComponent.ɵfac = function UsageHistoryComponent_Factory(t) { return new (t || UsageHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_4__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_list_passages_all_passages_service__WEBPACK_IMPORTED_MODULE_0__.AllPassagesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService)); };
UsageHistoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UsageHistoryComponent, selectors: [["app-usage-history"]], decls: 1, vars: 1, consts: [["title", "PASSAGE | USAGE-HISTORY", 3, "breadcrumbItems"]], template: function UsageHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumbs", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
    } }, directives: [_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2FnZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 57138:
/*!***********************************************************************!*\
  !*** ./src/app/pages/passages/view-passage/view-passage.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPassageComponent": () => (/* binding */ ViewPassageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _items_item_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../items/item-http.service */ 45911);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _items_item_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../items/item-utilities.service */ 16716);
/* harmony import */ var _items_passage_and_item_passage_and_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../items/passage-and-item/passage-and-item.component */ 98412);





class ViewPassageComponent {
    constructor(itemService, ar, itemUtil) {
        this.itemService = itemService;
        this.ar = ar;
        this.itemUtil = itemUtil;
    }
    ngOnInit() {
        this.id = this.ar.snapshot.params['id'];
        // console.log(this.passage)
        //console.log(this.itemTrail);
        /* this.itemService.fetchPassageItem(this.id).subscribe((res) => {
          if(res){
            this.passage = res;
            console.log(this.passage);
          }
    
        }, (error: HttpErrorResponse) => {
          console.log(error);
        }) */
    }
}
ViewPassageComponent.ɵfac = function ViewPassageComponent_Factory(t) { return new (t || ViewPassageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_items_item_http_service__WEBPACK_IMPORTED_MODULE_0__.ItemHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_items_item_utilities_service__WEBPACK_IMPORTED_MODULE_1__.ItemUtilitiesService)); };
ViewPassageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ViewPassageComponent, selectors: [["app-view-passage"]], inputs: { passage: "passage" }, decls: 1, vars: 1, consts: [[3, "passage"]], template: function ViewPassageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-passage-and-item", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("passage", ctx.passage);
    } }, directives: [_items_passage_and_item_passage_and_item_component__WEBPACK_IMPORTED_MODULE_2__.PassageAndItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXBhc3NhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_passages_passages_module_ts.js.map