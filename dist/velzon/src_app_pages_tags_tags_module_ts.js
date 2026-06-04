"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([["src_app_pages_tags_tags_module_ts"],{

/***/ 37458:
/*!***********************************************************!*\
  !*** ./src/app/pages/tags/all-tags/all-tags.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllTagsComponent": () => (/* binding */ AllTagsComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_new_tag_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/new-tag.model */ 92619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _service_tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/tags.service */ 60384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/paginator */ 21066);
/* harmony import */ var _layouts_rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/rightsidebar/rightsidebar.component */ 56034);













function AllTagsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Loading tags...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllTagsComponent_div_2_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllTagsComponent_div_2_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4); return ctx_r9.addTag(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Create Tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllTagsComponent_div_2_div_12_div_1_li_26_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllTagsComponent_div_2_div_12_div_1_li_26_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const tag_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6); return ctx_r15.renameTag(_r4, tag_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Rename");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllTagsComponent_div_2_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllTagsComponent_div_2_div_12_div_1_Template_a_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const tag_r13 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r18.viewTag(tag_r13.tagId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Total Questions :");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "ul", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllTagsComponent_div_2_div_12_div_1_Template_a_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const tag_r13 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r20.viewTag(tag_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, AllTagsComponent_div_2_div_12_div_1_li_26_Template, 4, 0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r13 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tag_r13.tagName ? tag_r13.tagName[0].toUpperCase() : "--", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](tag_r13.tagName.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tag_r13.itemCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("routerLink", "/examalpha/tags/", tag_r13.tagId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.currentUser.authorities.includes("ADMIN"));
} }
const _c0 = function () { return [50, 70, 100]; };
function AllTagsComponent_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AllTagsComponent_div_2_div_12_div_1_Template, 27, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p-paginator", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onPageChange", function AllTagsComponent_div_2_div_12_Template_p_paginator_onPageChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r21.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.tagsPage.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("totalRecords", ctx_r7.tagsPage.totalElements)("first", 0)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c0))("rows", 50)("pageLinkSize", 5)("showCurrentPageReport", true);
} }
function AllTagsComponent_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "No Subject Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllTagsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AllTagsComponent_div_2_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r23.searchTag = $event; })("ngModelChange", function AllTagsComponent_div_2_Template_input_ngModelChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AllTagsComponent_div_2_button_11_Template, 3, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AllTagsComponent_div_2_div_12_Template, 4, 8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AllTagsComponent_div_2_div_13_Template, 5, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" List of all Tags (", ctx_r1.tagsPage && ctx_r1.tagsPage.totalElements, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.searchTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.authorities.includes("ADMIN"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.tagsPage.content.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.tagsPage.content.length < 1);
} }
function AllTagsComponent_ng_template_3_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllTagsComponent_ng_template_3_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.createTag(_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllTagsComponent_ng_template_3_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Saving...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Saving... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r29.submitted);
} }
function AllTagsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "CREATE NEW TAG");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllTagsComponent_ng_template_3_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const modal_r26 = restoredCtx.$implicit; return modal_r26.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AllTagsComponent_ng_template_3_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r34.createTag(_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Tag Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AllTagsComponent_ng_template_3_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r35.newTag.tagName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllTagsComponent_ng_template_3_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r36.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, AllTagsComponent_ng_template_3_button_19_Template, 3, 0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, AllTagsComponent_ng_template_3_button_20_Template, 7, 1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r3.newTag.tagName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.submitted);
} }
function AllTagsComponent_ng_template_5_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllTagsComponent_ng_template_5_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r42.updateTagName(_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !(_r39.value == null ? null : _r39.value.length));
} }
function AllTagsComponent_ng_template_5_button_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Saving...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Saving... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r41.submitted);
} }
const _c1 = function (a0) { return { "border-danger": a0 }; };
function AllTagsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "RENAME TAG");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllTagsComponent_ng_template_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r44.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 57, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AllTagsComponent_ng_template_5_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r46.updateTagName(_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Tag name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "input", 75, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AllTagsComponent_ng_template_5_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r47.newTag.tagName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllTagsComponent_ng_template_5_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r48.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, AllTagsComponent_ng_template_5_button_20_Template, 3, 1, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, AllTagsComponent_ng_template_5_button_21_Template, 7, 1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](14);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r5.newTag.tagName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, _r39.hasError("noSpaces")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r5.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.submitted);
} }
class AllTagsComponent {
    constructor(modalService, tagService, router, notifier, user, activeModal) {
        this.modalService = modalService;
        this.tagService = tagService;
        this.router = router;
        this.notifier = notifier;
        this.user = user;
        this.activeModal = activeModal;
        this.newTag = new _model_new_tag_model__WEBPACK_IMPORTED_MODULE_1__.NewTag();
        this.previousPageNumber = 0;
        this.newTagModal = false;
        this.openModal = false;
        this.pageSize = 50;
        this.pageCount = 0;
        this.quickGuide = `
    <div class="p-4">
      <h6 class="mb-2 fw-bold text-uppercase">Introduction</h6>
      <p class="text-muted">Tags are used to categorize and organize questions in the bank. They help users 
      easily find content related to specific topics 
      </p>
      <h6 class="mb-2 fw-bold text-uppercase">How to create a new tag</h6>
      <p class="text-muted">To create a new tag click on the new tag button, it is located at the top 
      right corner of the tags page. 
      <em>A sample image is shown below</em></p>
      <div class="d-flex justify-content-center align-items-center mb-4 col-12">
        <img
          src="assets/images/snapshots/users/users_creation_process.gif"
          alt=""
          height="500"
          width="80%"
        />
      </div>
      <p class="text-muted">Once you have clicked on the new tag button 
      a form is displayed where you input the new tag name and click submit. <em>As Shown below:</em></p>
      <div class="d-flex justify-content-center align-items-center mb-4 col-12">
        <img
          src="assets/images/snapshots/users/users_creation_process.gif"
          alt=""
          height="500"
          width="80%"
        />
      </div>
      <h6 class="mb-2 fw-bold text-uppercase">How to view tags distribution</h6>
      <p class="text-muted">To view a tag click on the (ellipsis) three dotted icon, on a tag card to reveal the actions, click "view".  
      <em>As indicated in the image below:</em></p>
      <div class="d-flex justify-content-center align-items-center mb-4 col-12">
        <img
          src="assets/images/snapshots/users/users_creation_process.gif"
          alt=""
          height="500"
          width="80%"
        />
      </div>
      <p class="text-muted">Once you click view, you will be redirected to a different page with instructions.</p>
      <p><strong>Notice that in AGRICULTURE there are 25 questions under the ANALYZING tag</strong></p>
      <div class="d-flex justify-content-center align-items-center mb-4 col-12">
        <img
          src="assets/images/snapshots/users/users_creation_process.gif"
          alt=""
          height="500"
          width="80%"
        />
      </div>
      <h6 class="mb-2 fw-bold text-uppercase">How to a rename tag</h6>
      <p class="text-muted">To rename tags click on the three dotted icon on a tag card to reveal the actions, click "rename". 
      <em>As indicated in the image below:</em></p>
      <div class="d-flex justify-content-center align-items-center mb-4 col-12">
        <img
          src="assets/images/snapshots/users/users_creation_process.gif"
          alt=""
          height="500"
          width="80%"
        />
      </div>
      <p class="text-muted">Once you click rename, a modal pops up with the name of the selected tag you selected ready to be edited.
      <em>As indicated in the image below;</em> 
    </div>
  `;
        this.searchTag = '';
        this.loading = true;
    }
    /** Handler function for the quick guide pull out */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
        const rightBar = document.getElementById('theme-settings-offcanvas');
        if (rightBar != null) {
            rightBar.classList.toggle('show');
            rightBar.setAttribute('style', 'visibility: visible;');
        }
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Tags', active: true }];
        // this.currentUser = this.user.getCurrentUser();
        this.currentUser = this.user.getCurrentUser()
            ? this.user.getCurrentUser()
            : this.user.getCurrentUserAfterReload();
        this.tagService.listAllTags(this.pageCount, this.pageSize).subscribe((value) => {
            this.tagsPage = value;
            this.loading = false;
            //this.tagsPage.pageable.pageNumber = 1;
            //console.log(this.tagsPage);
        }, (error) => {
            // console.log(error);
        });
    }
    viewTag(tag) {
        this.tagService.activeTag = tag.tagName;
        //this.router.navigate(['/examalpha/tags/tag/' + tagId]);
    }
    createTag(form) {
        if (form.invalid) {
            return this.notifier.notify('error', 'Please enter a valid tag name');
        }
        else if (form.controls['tagName'].value.length < 3 ||
            form.controls['tagName'].value === '') {
            return this.notifier.notify('error', 'Tag name must not be less than 3 chararcters.');
        }
        else if (this.newTag.tagName.trim() === '') {
            return this.notifier.notify('error', 'Tag name must not be empty.');
        }
        //let msg = 'Creating new tag, please wait...';
        this.submitted = true;
        this.newTag.tagName = this.newTag.tagName.trim();
        //this.loader(msg);
        this.tagService.createNewTag(this.newTag).subscribe((value) => {
            if (value)
                form.reset();
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'success',
                title: 'Congratulations!',
                confirmButtonColor: 'rgb(3, 142, 220)',
                html: 'A new tag has been created successfully.',
            });
            this.ngOnInit();
            this.submitted = false;
            this.modalService.dismissAll();
            //this.loader();
        }, (error) => {
            this.notifier.notify('error', `${error.error.message}`);
            //form.reset();
            this.submitted = false;
            //this.loader();
        });
    }
    updateTagName(renameTagForm) {
        if (renameTagForm.controls['tagName'].value === this.previousTagName) {
            return;
        }
        this.submitted = true;
        this.newTag.tagName = this.newTag.tagName.trim();
        //this.loader(msg);
        this.tagService.renameTag(this.tagId, this.newTag).subscribe((value) => {
            this.submitted = false;
            renameTagForm.reset();
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'success',
                html: 'Tag name was changed successfully.',
                title: 'Congratulations!',
            });
            this.modalService.dismissAll();
            this.newTag = new _model_new_tag_model__WEBPACK_IMPORTED_MODULE_1__.NewTag();
            this.newTag.tagName = '';
            this.ngOnInit();
            this.submitted = false;
            //this.loader();
        }, (error) => {
            this.notifier.notify('error', `${error.error.message}`);
            this.submitted = false;
            //this.loader();
        });
    }
    addTag(newTagModal) {
        this.activeModal = this.modalService.open(newTagModal, { centered: true });
    }
    renameTag(renameTagTypeModal, tag) {
        this.newTag.tagName = tag.tagName.toUpperCase();
        this.tagId = tag.tagId;
        this.activeModal = this.modalService.open(renameTagTypeModal, {
            centered: true,
        });
    }
    nextPage(pageNumber) {
        if (pageNumber !== 0 && pageNumber > this.previousPageNumber) {
            //pageNumber--;
            this.previousPageNumber = pageNumber;
        }
        else if (pageNumber > 0 && pageNumber === this.previousPageNumber) {
            pageNumber--;
            this.previousPageNumber = pageNumber;
        } /* else if(pageNumber === 0 && pageNumber === this.previousPageNumber){
          pageNumber++;
          this.previousPageNumber = pageNumber;
        } */
        this.tagService.listAllTags(this.pageCount, this.pageSize).subscribe((value) => {
            this.tagsPage = value;
            // console.log(value);
        }, (error) => {
            // console.log(error);
        });
    }
    onPageChange(event) {
        this.pageSize = event.rows;
        this.pageCount = event.page;
        this.ngOnInit();
    }
    updatePage(event) {
        this.tagService.listAllTags(event.page, event.rows);
    }
    closeModal() {
        this.activeModal.close();
        this.newTag = new _model_new_tag_model__WEBPACK_IMPORTED_MODULE_1__.NewTag();
    }
    search() {
        if (this.searchTag === '') {
            return this.ngOnInit();
        }
        if (this.searchTag.length >= 3)
            this.tagService.searchTag(this.searchTag).subscribe((value) => {
                this.tagsPage = value;
            }, (error) => {
                this.notifier.notify('error', `${error.error.message}`);
            });
    }
    loader(msg) {
        if (this.submitted === false) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: msg,
                allowEnterKey: false,
                allowEscapeKey: false,
                allowOutsideClick: false,
                timerProgressBar: true,
                didOpen: () => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
                },
            });
        }
    }
}
AllTagsComponent.ɵfac = function AllTagsComponent_Factory(t) { return new (t || AllTagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_tags_service__WEBPACK_IMPORTED_MODULE_2__.TagsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_9__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbActiveModal)); };
AllTagsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AllTagsComponent, selectors: [["app-all-tags"]], decls: 8, vars: 5, consts: [["title", "TAGS", 3, "breadcrumbItems"], ["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], [4, "ngIf"], ["newTagModal", ""], ["renameTagModal", ""], [3, "currentView", "pageGuide", "settingsButtonClicked"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "visually-hidden"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"], [1, "row", "mb-3", "pb-1"], [1, "col-12"], [1, "d-flex", "align-items-lg-center", "flex-lg-row", "flex-sm-row", "justify-content-between", "flex-column"], [1, "flex-grow-1"], [1, "fs-16", "mb-1"], [1, "d-flex", "gap-2", "mt-lg-0"], [1, "search-box", "ms-2"], ["type", "text", "name", "searchTerm", "placeholder", "Search...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "ri-search-line", "search-icon"], ["type", "button", "class", "btn btn-soft-primary", 3, "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["type", "button", 1, "btn", "btn-soft-primary", 3, "click"], [1, "ri-add-circle-line", "align-middle", "me-1"], [1, "row"], ["class", "col-lg-4 col-md-6 col-sm-6", 4, "ngFor", "ngForOf"], ["currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "totalRecords", "first", "rowsPerPageOptions", "rows", "pageLinkSize", "showCurrentPageReport", "onPageChange"], ["paginator", ""], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "card"], [1, "card-body", "p-2"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0", "me-3"], [1, "avatar-sm"], [1, "avatar-title", "bg-light", "text-primary", "rounded", "fs-24"], [1, "flex-grow-1", "overflow-hidden"], [1, "fs-13", "mb-1"], [1, "text-body", "text-truncate", "d-block", 2, "cursor", "pointer", 3, "click"], ["title", "Total Items"], [1, "flex-shrink-0", "ms-2"], [1, "d-flex", "gap-1"], ["ngbDropdown", "", 1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-icon", "text-muted", "btn-sm", "fs-18", "dropdown", "arrow-none"], [1, "ri-more-fill"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item", 3, "routerLink", "click"], [1, "ri-eye-fill", "align-bottom", "me-2", "text-muted"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "ri-pencil-fill", "align-bottom", "me-2", "text-muted"], [1, "d-flex", "flex-column", "justify-content-between", "align-items-center"], ["src", "assets/images/blank_pages/empty-pg.png", "width", "300", "height", "300", 1, "my-2"], [1, "text-secondary", "fw-bold"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "px-5"], ["novalidate", "", 3, "ngSubmit"], ["newTagForm", "ngForm"], [1, ""], ["for", "tagName", 1, "label"], ["type", "text", "name", "tagName", "placeholder", "Tag Name", "required", "", 1, "form-control", "mb-3", 3, "ngModel", "ngModelChange"], [1, "card-footer"], [1, "hstack", "gap-2", "justify-content-end"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "ri-close-line", "align-middle", "me-2"], ["type", "button", "class", "btn btn-success", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-load", 3, "disabled", 4, "ngIf"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-success", 3, "click"], [1, "ri-save-line", "align-middle", "me-2"], [1, "btn", "btn-outline-primary", "btn-load", 3, "disabled"], ["role", "status", 1, "spinner-border", "flex-shrink-0"], [1, "flex-grow-1", "ms-2"], ["renameTagForm", "ngForm"], ["for", "subjectName", 1, "label"], ["type", "text", "name", "tagName", "placeholder", "Enter Tag name", "required", "", 1, "form-control", "mb-3", 3, "ngModel", "ngClass", "ngModelChange"], ["tag", "ngModel"], [1, "ri-close-fill", "align-middle", "me-2"], ["type", "button", "class", "btn btn-primary", "data-bs-dismiss", "modal", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "ri-save-fill", "align-middle", "me-2"]], template: function AllTagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AllTagsComponent_div_1_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AllTagsComponent_div_2_Template, 14, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AllTagsComponent_ng_template_3_Template, 21, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AllTagsComponent_ng_template_5_Template, 22, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "app-rightsidebar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("settingsButtonClicked", function AllTagsComponent_Template_app_rightsidebar_settingsButtonClicked_7_listener() { return ctx.onSettingsButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.tagsPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("currentView", "Tags")("pageGuide", ctx.quickGuide);
    } }, directives: [_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownMenu, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, primeng_paginator__WEBPACK_IMPORTED_MODULE_12__.Paginator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _layouts_rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_5__.RightsidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtdGFncy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 68631:
/*!*************************************************************!*\
  !*** ./src/app/pages/tags/directives/no-space.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoSpaceDirective": () => (/* binding */ NoSpaceDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class NoSpaceDirective {
    validate(control) {
        if (control.value && /\s/.test(control.value)) {
            return { noSpaces: true };
        }
        return null;
    }
}
NoSpaceDirective.ɵfac = function NoSpaceDirective_Factory(t) { return new (t || NoSpaceDirective)(); };
NoSpaceDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NoSpaceDirective, selectors: [["", "noInputSpace", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
                useExisting: NoSpaceDirective,
                multi: true
            }])] });


/***/ }),

/***/ 92619:
/*!***************************************************!*\
  !*** ./src/app/pages/tags/model/new-tag.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTag": () => (/* binding */ NewTag)
/* harmony export */ });
class NewTag {
}


/***/ }),

/***/ 60384:
/*!****************************************************!*\
  !*** ./src/app/pages/tags/service/tags.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagSubjects": () => (/* binding */ TagSubjects),
/* harmony export */   "TagsService": () => (/* binding */ TagsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class TagSubjects {
}
class TagsService {
    constructor(http) {
        this.http = http;
    }
    //Creating a new tag
    createNewTag(tag) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/tags`, tag, { withCredentials: true });
    }
    //Renaming an existing tagName
    renameTag(tagId, tag) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/tags/${tagId}`, tag, { withCredentials: true });
    }
    //Listing all the available tagTypes
    listAllTags(page, size) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/tags/list?page=${page}&size=${size}`, {
            withCredentials: true,
        });
    }
    //List all subjects with a particular tag
    listTagSubjects(tagId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/subjects/tag/${tagId}`, { withCredentials: true });
    }
    getTagAnalysis(subjectId, tagId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/subjects/${subjectId}/tag/${tagId}/tag_analysis`, { withCredentials: true });
    }
    searchTag(searchTecx) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/admin/tags/filter_by/${searchTecx}`, { withCredentials: true });
    }
}
TagsService.ɵfac = function TagsService_Factory(t) { return new (t || TagsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TagsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TagsService, factory: TagsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 88365:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tags/tag-analysis/tag-analysis.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagAnalysisComponent": () => (/* binding */ TagAnalysisComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _service_tags_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/tags.service */ 60384);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 68581);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _layouts_rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layouts/rightsidebar/rightsidebar.component */ 56034);








function TagAnalysisComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Loading tag analysis...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TagAnalysisComponent_h4_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, ctx_r1.analysis.subjectName));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 5, ctx_r1.currentTag));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx_r1.analysis.totalItems, ")");
} }
function TagAnalysisComponent_div_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Topic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "p-sortIcon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Total Ques. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "p-sortIcon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Total Awaiting Mod. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "p-sortIcon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Total Pub.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "p-sortIcon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Total Recy. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "p-sortIcon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Total Drf. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "p-sortIcon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TagAnalysisComponent_div_8_ng_template_3_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TagAnalysisComponent_div_8_ng_template_3_i_2_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().rowIndex; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r11.showSubTopic(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TagAnalysisComponent_div_8_ng_template_3_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TagAnalysisComponent_div_8_ng_template_3_i_3_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().rowIndex; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r14.showSubTopic(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TagAnalysisComponent_div_8_ng_template_3_ng_container_18_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subTopic_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 6, subTopic_r18.subtopicName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](subTopic_r18.totalItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](subTopic_r18.totalItemsAwaitingModeration);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](subTopic_r18.totalItemsPublished);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](subTopic_r18.totalItemsInRecycle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](subTopic_r18.totalItemsDraft);
} }
function TagAnalysisComponent_div_8_ng_template_3_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TagAnalysisComponent_div_8_ng_template_3_ng_container_18_tr_3_Template, 15, 8, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const topicAnalysis_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", topicAnalysis_r5.subtopics);
} }
const _c0 = function (a0) { return { "text-primary": a0 }; };
function TagAnalysisComponent_div_8_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TagAnalysisComponent_div_8_ng_template_3_i_2_Template, 1, 0, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TagAnalysisComponent_div_8_ng_template_3_i_3_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TagAnalysisComponent_div_8_ng_template_3_Template_td_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const i_r7 = restoredCtx.rowIndex; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r20.showSubTopic(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, TagAnalysisComponent_div_8_ng_template_3_ng_container_18_Template, 4, 1, "ng-container", 40);
} if (rf & 2) {
    const topicAnalysis_r5 = ctx.$implicit;
    const i_r7 = ctx.rowIndex;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.activeRow === i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.activeRow !== i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, ctx_r4.activeRow === i_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 10, topicAnalysis_r5.topicName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", topicAnalysis_r5.totalItems, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](topicAnalysis_r5.totalItemsAwaitingModeration);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", topicAnalysis_r5.totalItemsPublished, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", topicAnalysis_r5.totalItemsInRecycle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", topicAnalysis_r5.totalItemsDraft, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.activeRow === i_r7);
} }
function TagAnalysisComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TagAnalysisComponent_div_8_ng_template_2_Template, 20, 0, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TagAnalysisComponent_div_8_ng_template_3_Template, 19, 14, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.analysis && ctx_r2.analysis.topics)("scrollable", true);
} }
class TagAnalysisComponent {
    constructor(ar, tagService) {
        this.ar = ar;
        this.tagService = tagService;
    }
    /** Handler function for the quick guide pull out */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
        const rightBar = document.getElementById('theme-settings-offcanvas');
        if (rightBar != null) {
            rightBar.classList.toggle('show');
            rightBar.setAttribute('style', 'visibility: visible;');
        }
    }
    ngOnInit() {
        this.tagId = this.ar.snapshot.params['tagId'];
        this.subjectId = this.ar.snapshot.params['subjectId'];
        this.currentTag = this.tagService.activeTag;
        this.breadCrumbItems = [
            { label: 'Tag', active: false },
            { label: this.currentTag, active: false },
            { label: 'analysis', active: true },
        ];
        this.tagService.getTagAnalysis(this.subjectId, this.tagId).subscribe((value) => {
            this.analysis = value;
            this.analysis;
        }, (error) => { });
    }
    showSubTopic(rowIndex) {
        // console.log(this.activeRow + "active row");
        // console.log(rowIndex + "current row");
        if (this.activeRow === rowIndex) {
            this.activeRow = -1;
        }
        else {
            this.activeRow = rowIndex;
        }
    }
    routeBack() {
        history.back();
    }
}
TagAnalysisComponent.ɵfac = function TagAnalysisComponent_Factory(t) { return new (t || TagAnalysisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_tags_service__WEBPACK_IMPORTED_MODULE_0__.TagsService)); };
TagAnalysisComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TagAnalysisComponent, selectors: [["app-tag-analysis"]], decls: 10, vars: 5, consts: [["title", "TAG_ANALYSIS", 3, "breadcrumbItems"], ["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-2", "mb-3"], [1, "d-flex", "align-items-center", "flex-row", "gap-2"], [1, "btn", "mb-2", "btn-outline-info", 3, "click"], [1, "ri-arrow-left-line"], ["class", "card-title", "style", "cursor: default", 4, "ngIf"], ["class", "card", 4, "ngIf"], [3, "currentView", "pageGuide", "settingsButtonClicked"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "visually-hidden"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"], [1, "card-title", 2, "cursor", "default"], ["title", "SUBJECT"], ["title", "TAG"], ["title", "TOTAL QUESTIONS"], [1, "card"], ["dataKey", "name", "responsiveLayout", "scroll", 3, "value", "scrollable"], ["pTemplate", "header"], ["pTemplate", "body"], ["pFrozenColumn", "", 2, "width", "5px"], ["pFrozenColumn", "", "pSortableColumn", "topicName", 2, "width", "300px"], ["field", "topicName"], ["pSortableColumn", "totalItems"], ["field", "totalItems"], ["pSortableColumn", "totalItemsAwaitingModeration"], ["field", "totalItemsAwaitingModeration"], ["pSortableColumn", "totalItemsPublished"], ["field", "totalItemsPublished"], ["pSortableColumn", "totalItemsInRecycle"], ["field", "totalItemsInRecycle"], ["pSortableColumn", "totalItemsDraft"], ["field", "totalItemsDraft"], ["pFrozenColumn", "", 2, "width", "10px"], ["class", "la la-angle-down cursor", 3, "click", 4, "ngIf"], ["class", "la la-angle-right cursor", 3, "click", 4, "ngIf"], ["pFrozenColumn", "", 1, "text-truncate", "cursor", 2, "width", "500px", 3, "ngClass", "click"], [1, "la", "la-book"], [4, "ngIf"], [1, "la", "la-angle-down", "cursor", 3, "click"], [1, "la", "la-angle-right", "cursor", 3, "click"], [2, "border", "none"], ["pFrozenColumn", "", 2, "border", "none"], ["style", "margin-left: 30px;", 4, "ngFor", "ngForOf"], [2, "margin-left", "30px"], ["pFrozenColumn", "", 1, "text-truncate", 2, "width", "500px"]], template: function TagAnalysisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TagAnalysisComponent_div_1_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TagAnalysisComponent_Template_button_click_4_listener() { return ctx.routeBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, TagAnalysisComponent_h4_7_Template, 10, 7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, TagAnalysisComponent_div_8_Template, 4, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "app-rightsidebar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("settingsButtonClicked", function TagAnalysisComponent_Template_app_rightsidebar_settingsButtonClicked_9_listener() { return ctx.onSettingsButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.analysis);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.analysis);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.analysis);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("currentView", "Tags");
    } }, directives: [_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_6__.FrozenColumn, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _layouts_rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_2__.RightsidebarComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWctYW5hbHlzaXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 81730:
/*!***************************************************!*\
  !*** ./src/app/pages/tags/tags-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsRoutingModule": () => (/* binding */ TagsRoutingModule)
/* harmony export */ });
/* harmony import */ var _all_tags_all_tags_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-tags/all-tags.component */ 37458);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _view_tag_view_tag_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-tag/view-tag.component */ 44365);
/* harmony import */ var _view_subject_tag_view_subject_tag_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-subject-tag/view-subject-tag.component */ 78652);
/* harmony import */ var _tag_analysis_tag_analysis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag-analysis/tag-analysis.component */ 88365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    { path: '', component: _all_tags_all_tags_component__WEBPACK_IMPORTED_MODULE_0__.AllTagsComponent },
    { path: ':tagId', component: _view_tag_view_tag_component__WEBPACK_IMPORTED_MODULE_1__.ViewTagComponent },
    { path: ':tagId/subject/:subjectId', component: _view_subject_tag_view_subject_tag_component__WEBPACK_IMPORTED_MODULE_2__.ViewSubjectTagComponent },
    { path: ':tagId/subject/:subjectId/tag-analysis', component: _tag_analysis_tag_analysis_component__WEBPACK_IMPORTED_MODULE_3__.TagAnalysisComponent },
];
class TagsRoutingModule {
}
TagsRoutingModule.ɵfac = function TagsRoutingModule_Factory(t) { return new (t || TagsRoutingModule)(); };
TagsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TagsRoutingModule });
TagsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TagsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 30104:
/*!*******************************************!*\
  !*** ./src/app/pages/tags/tags.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsModule": () => (/* binding */ TagsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/paginator */ 21066);
/* harmony import */ var _items_items_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/items.module */ 97272);
/* harmony import */ var _tags_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags-routing.module */ 81730);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 68581);
/* harmony import */ var _all_tags_all_tags_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-tags/all-tags.component */ 37458);
/* harmony import */ var _view_tag_view_tag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-tag/view-tag.component */ 44365);
/* harmony import */ var _view_subject_tag_view_subject_tag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-subject-tag/view-subject-tag.component */ 78652);
/* harmony import */ var _tag_analysis_tag_analysis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tag-analysis/tag-analysis.component */ 88365);
/* harmony import */ var src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/layouts/layouts.module */ 52372);
/* harmony import */ var _directives_no_space_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/no-space.directive */ 68631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);









/* import components */







class TagsModule {
}
TagsModule.ɵfac = function TagsModule_Factory(t) { return new (t || TagsModule)(); };
TagsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: TagsModule });
TagsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbActiveModal], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModalModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbAccordionModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _tags_routing_module__WEBPACK_IMPORTED_MODULE_2__.TagsRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltipModule,
            simplebar_angular__WEBPACK_IMPORTED_MODULE_13__.SimplebarAngularModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_14__.TableModule,
            _items_items_module__WEBPACK_IMPORTED_MODULE_1__.ItemsModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_15__.PaginatorModule,
            src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_7__.LayoutsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](TagsModule, { declarations: [_all_tags_all_tags_component__WEBPACK_IMPORTED_MODULE_3__.AllTagsComponent,
        _view_tag_view_tag_component__WEBPACK_IMPORTED_MODULE_4__.ViewTagComponent,
        _view_subject_tag_view_subject_tag_component__WEBPACK_IMPORTED_MODULE_5__.ViewSubjectTagComponent,
        _tag_analysis_tag_analysis_component__WEBPACK_IMPORTED_MODULE_6__.TagAnalysisComponent,
        _directives_no_space_directive__WEBPACK_IMPORTED_MODULE_8__.NoSpaceDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModalModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbAccordionModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _tags_routing_module__WEBPACK_IMPORTED_MODULE_2__.TagsRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltipModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_13__.SimplebarAngularModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_14__.TableModule,
        _items_items_module__WEBPACK_IMPORTED_MODULE_1__.ItemsModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_15__.PaginatorModule,
        src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_7__.LayoutsModule] }); })();


/***/ }),

/***/ 78652:
/*!***************************************************************************!*\
  !*** ./src/app/pages/tags/view-subject-tag/view-subject-tag.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewSubjectTagComponent": () => (/* binding */ ViewSubjectTagComponent)
/* harmony export */ });
/* harmony import */ var _items_models_filter_items_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../items/models/filter-items.model */ 34483);
/* harmony import */ var _items_models_assessment_filter_information__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../items/models/assessment-filter-information */ 68776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _items_item_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../items/item-http.service */ 45911);
/* harmony import */ var _items_item_utilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../items/item-utilities.service */ 16716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _items_subject_subject_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../items/subject/subject.component */ 24248);








function ViewSubjectTagComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ViewSubjectTagComponent {
    constructor(itemService, itemUtil, router) {
        this.itemService = itemService;
        this.itemUtil = itemUtil;
        this.router = router;
        this.difficultyLevel = [1, 2, 3, 4, 5];
        this.tags = [];
        this.tagIds = [];
        this.page = 1;
        this.filterInformation = new _items_models_filter_items_model__WEBPACK_IMPORTED_MODULE_0__.FilterItems();
        this.assessmentFilter = new _items_models_assessment_filter_information__WEBPACK_IMPORTED_MODULE_1__.AssessmentFilterInformation();
        this.assessmentFilters = [];
        this.editQuestion = false;
        this.showFilter = false;
        this.assessmentItems = [];
        this.submitted = false;
        this.displayLink = false;
    }
    ngOnInit() {
        this.breadCrumbItems = [
            {
                label: ''
            }
        ];
        this.fetchSubjectTree(this.itemService.subjectId);
    }
    fetchSubjectTree(subjectId) {
        this.itemService.fetchSubjectTopicsTreeAdmin(subjectId).subscribe((value) => {
            this.subject = value;
            // console.log(this.subject);
        }, (error) => {
            // console.log(error);
        });
    }
    showTopicDetails(topic, subtopicId) {
        if (subtopicId) {
            this.fetchItems(topic, subtopicId);
        }
        else {
            this.fetchItems(topic);
        }
    }
    fetchItems(topic, subtopicId) {
        this.itemService
            .fetchAllItems(this.itemService.subjectId, topic.topicId, subtopicId)
            .subscribe((value) => {
            this.itemsPage = value;
            this.itemsPage.content.forEach((item) => (item.showFullItem = false));
            // console.log(this.itemsPage.content);
        }, (error) => {
            // console.log(error);
        });
    }
    sendInformation(topic, subtopic) {
        let itemTrail = {
            subjectId: this.itemService.subjectId,
            subjectName: this.itemService.subjectName,
            topicId: topic.topicId,
            topicName: topic.topicName,
        };
        if (subtopic) {
            let newItemTrail = Object.assign(Object.assign({}, itemTrail), { subtopicName: subtopic.subtopicName, subtopicId: subtopic.topicId });
            this.itemUtil.currentItemTrail = newItemTrail;
        }
        else {
            this.itemUtil.currentItemTrail = itemTrail;
            this.itemUtil.saveCurrentItemTrail();
        }
        this.router.navigate(['/examalpha/items/new-item']);
        /* routerLink="/examalpha/items/new-item" */
    }
    recieveTags(tags) {
        this.tags = tags;
    }
}
ViewSubjectTagComponent.ɵfac = function ViewSubjectTagComponent_Factory(t) { return new (t || ViewSubjectTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_items_item_http_service__WEBPACK_IMPORTED_MODULE_2__.ItemHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_items_item_utilities_service__WEBPACK_IMPORTED_MODULE_3__.ItemUtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
ViewSubjectTagComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ViewSubjectTagComponent, selectors: [["app-view-subject-tag"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function ViewSubjectTagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ViewSubjectTagComponent_div_0_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.subject);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _items_subject_subject_component__WEBPACK_IMPORTED_MODULE_4__.SubjectComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXN1YmplY3QtdGFnLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 44365:
/*!***********************************************************!*\
  !*** ./src/app/pages/tags/view-tag/view-tag.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewTagComponent": () => (/* binding */ ViewTagComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _items_item_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../items/item-http.service */ 45911);
/* harmony import */ var _service_tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/tags.service */ 60384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);









function ViewTagComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Loading tag subjects...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ViewTagComponent_div_0_div_4_h4_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" List of All Subjects with ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r3.currentTag), " ");
} }
function ViewTagComponent_div_0_div_4_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Questions:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewTagComponent_div_0_div_4_div_11_div_2_Template_a_click_24_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const subject_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return ctx_r8.setSubjectId(subject_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Tag Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", subject_r7.name[0].toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](subject_r7.name.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](subject_r7.totalItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("routerLink", "/examalpha/tags/", ctx_r6.tagId, "/subject/", subject_r7.subjectId, "/tag-analysis");
} }
function ViewTagComponent_div_0_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ViewTagComponent_div_0_div_4_div_11_div_2_Template, 27, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.allSubjects);
} }
function ViewTagComponent_div_0_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "No Subject(s) Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Go to Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ViewTagComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewTagComponent_div_0_div_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r10.routeBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ViewTagComponent_div_0_div_4_h4_10_Template, 3, 3, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ViewTagComponent_div_0_div_4_div_11_Template, 3, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ViewTagComponent_div_0_div_4_div_12_Template, 9, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.allSubjects.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.loading && (ctx_r2.allSubjects == null ? null : ctx_r2.allSubjects.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.loading && (ctx_r2.allSubjects == null ? null : ctx_r2.allSubjects.length) < 1);
} }
function ViewTagComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-breadcrumbs", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ViewTagComponent_div_0_div_3_Template, 7, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ViewTagComponent_div_0_div_4_Template, 13, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("title", "TAGS | ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, ctx_r0.currentTag), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbItems", ctx_r0.breadCrumbItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.allSubjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
} }
class ViewTagComponent {
    constructor(itemService, tagService, ar, notifier, userService) {
        this.itemService = itemService;
        this.tagService = tagService;
        this.ar = ar;
        this.notifier = notifier;
        this.userService = userService;
        this.page = 1;
        this.subjects = [];
        this.allSubjects = [];
        this.loading = true;
        this.openedSubjects = [];
    }
    /** Handler function for the quick guide pull out */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
        const rightBar = document.getElementById('theme-settings-offcanvas');
        if (rightBar != null) {
            rightBar.classList.toggle('show');
            rightBar.setAttribute('style', 'visibility: visible;');
        }
    }
    ngOnInit() {
        this.currentUser = this.userService.getCurrentUser();
        this.currentTag = this.tagService.activeTag;
        this.breadCrumbItems = [
            { label: 'Tags' },
            { label: this.currentTag, active: true },
        ];
        this.tagId = this.ar.snapshot.params['tagId'];
        this.tagService.listTagSubjects(this.tagId).subscribe((value) => {
            value = (value === null || value === void 0 ? void 0 : value.length) ? value : [];
            value === null || value === void 0 ? void 0 : value.forEach((subj) => {
                subj.loading = false;
            });
            this.allSubjects = value;
            //console.log(this.allSubjects);
            this.loading = false;
        }, (error) => {
            this.loading = false;
            return this.notifier.notify('error', `${error.error.message}`);
        });
    }
    setSubjectId(subject) {
        this.selectedSubject = subject;
        this.itemService.subjectId = subject.subjectId;
        this.itemService.subjectName = subject.name;
        /* console.log(this.itemService.subjectId);
        console.log(this.itemService.subjectName); */
    }
    viewSubjectItem(subject) {
        this.selectedSubject = subject;
        this.fetchItems(this.selectedSubject.subjectId);
    }
    fetchItems(subjectId) {
        this.itemService.fetchAllItems(subjectId).subscribe((value) => {
            this.itemsPage = value;
            this.itemsPage.content.forEach((item) => (item.showFullItem = false));
            // console.log(this.itemsPage.content);
        }, (error) => {
            // console.log(error);
        });
    }
    loadTagAnalysis(subject, i) {
        if (this.openedSubjects.includes(subject.name)) {
            this.openedSubjects = [];
            return;
        }
        else {
            subject.loading = true;
            this.openedSubjects = [];
            this.openedSubjects.push(subject.name);
            this.tagService.getTagAnalysis(subject.subjectId, this.tagId).subscribe((value) => {
                this.analysis = value;
                subject.loading = false;
                //this.analysis;
            }, (error) => {
                // console.log(error);
                subject.loading = false;
                return this.notifier.notify('error', error.error.message);
            });
        }
    }
    routeBack() {
        history.back();
    }
}
ViewTagComponent.ɵfac = function ViewTagComponent_Factory(t) { return new (t || ViewTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_items_item_http_service__WEBPACK_IMPORTED_MODULE_0__.ItemHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_tags_service__WEBPACK_IMPORTED_MODULE_1__.TagsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_6__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService)); };
ViewTagComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ViewTagComponent, selectors: [["app-view-tag"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "title", "breadcrumbItems"], ["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "visually-hidden"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"], [1, "row", "mb-3", "pb-1"], [1, "col-12"], [1, "d-flex", "align-items-lg-center", "flex-lg-row", "flex-sm-row", "justify-content-between", "flex-column"], [1, "py-2", "d-flex", "align-items-center", "flex-row", "gap-2"], [1, "btn", "mb-2", "btn-outline-info", 3, "click"], [1, "ri-arrow-left-line"], [1, "position-relative"], [1, "flex-grow-1"], ["class", "fs-16 mb-1", 4, "ngIf"], [1, "fs-16", "mb-1"], [1, "row"], ["class", "col-xxl-4 col-lg-6 col-md-6 col-sm-12", 4, "ngFor", "ngForOf"], [1, "col-xxl-4", "col-lg-6", "col-md-6", "col-sm-12"], [1, "card"], [1, "card-body", "p-2"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0", "me-3"], [1, "avatar-sm"], [1, "avatar-title", "bg-light", "text-primary", "rounded", "fs-24"], [1, "flex-grow-1", "overflow-hidden"], [1, "text-body", "text-truncate", "d-block"], [1, "d-flex", "gap-1", "align-items-center", "mt-2"], ["title", "No of Items", 1, "d-flex", "gap-1", "align-items-center", "badge", "badge-soft-info", "fs-12"], [1, "ri-file-list-line"], [1, "flex-shrink-0", "ms-2"], [1, "d-flex", "gap-1"], ["ngbDropdown", "", 1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-icon", "text-muted", "btn-sm", "fs-18", "dropdown", "arrow-none"], [1, "ri-more-fill"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item", 3, "routerLink", "click"], [1, "ri-eye-fill", "align-bottom", "me-2", "text-muted"], [1, "d-flex", "flex-column", "justify-content-between", "align-items-center", "py-5"], ["src", "assets/images/blank_pages/empty-state.png", "width", "150", "height", "150", 1, "my-2"], [1, "d-flex", "flex-column", "gap-3", "justify-content-center", "align-items-center"], [1, "text-secondary", "fw-bold", "my-2"], ["routerLink", "/examalpha/subjects", 1, "btn", "btn-outline-primary"], [1, "ri-add-line", "me-2"]], template: function ViewTagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ViewTagComponent_div_0_Template, 5, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedSubject === undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXRhZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_tags_tags_module_ts.js.map