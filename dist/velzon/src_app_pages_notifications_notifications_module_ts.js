"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([["src_app_pages_notifications_notifications_module_ts"],{

/***/ 81918:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/notifications/list-notifications/list-notifications.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListNotificationsComponent": () => (/* binding */ ListNotificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../notification.service */ 55376);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _items_item_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../items/item-http.service */ 45911);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/paginator */ 21066);
/* harmony import */ var _items_preview_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../items/preview/preview.component */ 22377);
/* harmony import */ var _items_matching_preview_matching_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../items/matching-preview/matching-preview.component */ 98404);
/* harmony import */ var _items_ordering_preview_ordering_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../items/ordering-preview/ordering-preview.component */ 79040);
/* harmony import */ var _items_rich_essay_preview_rich_essay_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../items/rich-essay-preview/rich-essay-preview.component */ 90021);
/* harmony import */ var _items_multiple_response_preview_multiple_response_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../items/multiple-response-preview/multiple-response-preview.component */ 82457);
/* harmony import */ var _items_short_text_preview_short_text_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../items/short-text-preview/short-text-preview.component */ 50612);
/* harmony import */ var _items_yes_or_no_preview_yes_or_no_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../items/yes-or-no-preview/yes-or-no-preview.component */ 33699);
/* harmony import */ var _items_true_or_false_preview_true_or_false_preview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../items/true-or-false-preview/true-or-false-preview.component */ 96733);
/* harmony import */ var _items_cloze_dropdown_preview_cloze_dropdown_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../items/cloze-dropdown-preview/cloze-dropdown-preview.component */ 5518);
/* harmony import */ var _items_cloze_text_preview_cloze_text_preview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../items/cloze-text-preview/cloze-text-preview.component */ 35550);




















function ListNotificationsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Loading Notifications...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Loading Notifications...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListNotificationsComponent_div_2_div_5_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Subtopic: ", notification_r6.subtopicName.toUpperCase(), "");
} }
function ListNotificationsComponent_div_2_div_5_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "REASON: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", notification_r6.rejectReason, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
} }
function ListNotificationsComponent_div_2_div_5_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, notification_r6.status));
} }
function ListNotificationsComponent_div_2_div_5_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, notification_r6.status), "");
} }
function ListNotificationsComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, ListNotificationsComponent_div_2_div_5_span_14_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, ListNotificationsComponent_div_2_div_5_div_17_Template, 4, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, ListNotificationsComponent_div_2_div_5_span_25_Template, 3, 3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, ListNotificationsComponent_div_2_div_5_span_26_Template, 3, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListNotificationsComponent_div_2_div_5_Template_button_click_27_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16); const notification_r6 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r15.previewItem(notification_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29, "View Question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Author: ", notification_r6.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Subject:", notification_r6.subjectName.toUpperCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Topic: ", notification_r6.topicName.toUpperCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", notification_r6.subtopicName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Moderator: ", notification_r6.moderator, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", notification_r6.rejectReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", notification_r6.status + " on", ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](23, 10, notification_r6.messageTime, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", notification_r6.status == "ACCEPTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", notification_r6.status == "REJECTED");
} }
const _c0 = function () { return [20, 30, 50]; };
function ListNotificationsComponent_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "p-paginator", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onPageChange", function ListNotificationsComponent_div_2_div_7_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r18.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("totalRecords", ctx_r5.notifications.totalElements)("first", 1)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c0))("rows", 25)("showCurrentPageReport", true);
} }
function ListNotificationsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ListNotificationsComponent_div_2_div_5_Template, 30, 13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, ListNotificationsComponent_div_2_div_7_Template, 3, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Accepted Questions(", ctx_r1.notifications.totalElements, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.notifications.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.notifications.content.length > 0);
} }
function ListNotificationsComponent_ng_template_3_div_9_app_preview_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-preview", 53);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r22.item);
} }
function ListNotificationsComponent_ng_template_3_div_9_app_matching_preview_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-matching-preview", 53);
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r23.item);
} }
function ListNotificationsComponent_ng_template_3_div_9_app_ordering_preview_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-ordering-preview", 53);
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r24.item);
} }
function ListNotificationsComponent_ng_template_3_div_9_app_rich_essay_preview_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-rich-essay-preview", 53);
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r25.item);
} }
function ListNotificationsComponent_ng_template_3_div_9_app_multiple_response_preview_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-multiple-response-preview", 53);
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r26.item);
} }
function ListNotificationsComponent_ng_template_3_div_9_app_short_text_preview_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-short-text-preview", 53);
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r27.item);
} }
function ListNotificationsComponent_ng_template_3_div_9_app_yes_or_no_preview_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-yes-or-no-preview", 53);
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r28.item);
} }
function ListNotificationsComponent_ng_template_3_div_9_app_true_or_false_preview_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-true-or-false-preview", 53);
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r29.item);
} }
function ListNotificationsComponent_ng_template_3_div_9_app_cloze_dropdown_preview_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-cloze-dropdown-preview", 53);
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r30.item);
} }
function ListNotificationsComponent_ng_template_3_div_9_app_cloze_text_preview_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-cloze-text-preview", 53);
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r31.item);
} }
function ListNotificationsComponent_ng_template_3_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ListNotificationsComponent_ng_template_3_div_9_app_preview_1_Template, 1, 1, "app-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ListNotificationsComponent_ng_template_3_div_9_app_matching_preview_2_Template, 1, 1, "app-matching-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ListNotificationsComponent_ng_template_3_div_9_app_ordering_preview_3_Template, 1, 1, "app-ordering-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ListNotificationsComponent_ng_template_3_div_9_app_rich_essay_preview_4_Template, 1, 1, "app-rich-essay-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ListNotificationsComponent_ng_template_3_div_9_app_multiple_response_preview_5_Template, 1, 1, "app-multiple-response-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ListNotificationsComponent_ng_template_3_div_9_app_short_text_preview_6_Template, 1, 1, "app-short-text-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, ListNotificationsComponent_ng_template_3_div_9_app_yes_or_no_preview_7_Template, 1, 1, "app-yes-or-no-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ListNotificationsComponent_ng_template_3_div_9_app_true_or_false_preview_8_Template, 1, 1, "app-true-or-false-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ListNotificationsComponent_ng_template_3_div_9_app_cloze_dropdown_preview_9_Template, 1, 1, "app-cloze-dropdown-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, ListNotificationsComponent_ng_template_3_div_9_app_cloze_text_preview_10_Template, 1, 1, "app-cloze-text-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "MCQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "ASSOCIATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "ORDER_LIST");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "ESSAY_RICH_TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "MRQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "SHORT_TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "YES_NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "TRUE_FALSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "CLOZE_DROPDOWN");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "CLOZE_TEXT");
} }
function ListNotificationsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h3", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Question Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListNotificationsComponent_ng_template_3_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33); const modal_r20 = restoredCtx.$implicit; return modal_r20.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ListNotificationsComponent_ng_template_3_div_9_Template, 11, 10, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.item);
} }
class ListNotificationsComponent {
    constructor(notificationService, userService, notifier, router, modalService, itemService) {
        this.notificationService = notificationService;
        this.userService = userService;
        this.notifier = notifier;
        this.router = router;
        this.modalService = modalService;
        this.itemService = itemService;
        this.page = 0;
        this.pageSize = 25;
        this.loading = true;
        this.filterOption = '';
        this.filteredNotifications = [];
    }
    ngOnInit() {
        this.currentUser = this.userService.getCurrentUser();
        this.notificationService.notificationPageOpen = true;
        this.breadCrumbItems = [
            { label: 'notifications', active: true },
            /* {
              label: this.subject ? this.subject : '',
              active: this.subject ? true : false,
            }, */
        ];
        /* if (this.subject && this.subjectId && this.status) {
          this.notificationService
            .filterNotificationsBySubject(this.status, this.subjectId)
            .subscribe(
              (value) => {
                if (value) {
                  this.notifications = value;
                }
              },
              (error: HttpErrorResponse) => {
                this.notifier.notify('error', `${error.error.message}`);
              }
            );
        } else { */
        this.notificationService
            .fetchAllNotifications(this.currentUser.id, this.page, this.pageSize)
            .subscribe((value) => {
            this.notifications = value;
            this.loading = false;
        }, (error) => {
            this.notifier.notify('error', `${error.error.message}`);
        });
        //}
    }
    ngOnDestroy() {
        this.notificationService.notificationPageOpen = false;
    }
    setFilter(filter) {
        this.notificationService.filterNotifications(filter).subscribe((value) => {
            if (value) {
                this.notifications = value;
            }
        }, (error) => {
            this.notifier.notify('error', `${error.error.message}`);
        });
    }
    viewItem(notification) {
        // console.log(notification);
        this.router.navigate(['/examalpha/subjects/' + notification.subjectId + '/edit-item'], {
            queryParams: {
                type: `${notification.itemType}`,
                id: `${notification.itemId}`,
            },
        });
    }
    previewItem(notification) { }
    openNotification(notification) {
        // console.log(notification);
        this.router.navigate(['/examalpha/subjects/' + notification.subjectName + '/edit-item'], {
            queryParams: {
                type: `${notification.itemType}`,
                id: `${notification.itemId}`,
            },
        });
    }
    openPreviewItemModal(notification, itemModal) {
        this.itemService.fetchIndividualItem(notification.itemId).subscribe((value) => {
            if (value) {
                this.item = value;
            }
        }, (error) => {
            // console.log(error.error.message);
        });
        this.modalService.open(itemModal, { centered: true, size: 'lg' });
    }
    onPageChange(event) {
        this.page = event.page;
        this.pageSize = event.rows;
        this.ngOnInit();
    }
}
ListNotificationsComponent.ɵfac = function ListNotificationsComponent_Factory(t) { return new (t || ListNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_15__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_items_item_http_service__WEBPACK_IMPORTED_MODULE_2__.ItemHttpService)); };
ListNotificationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: ListNotificationsComponent, selectors: [["app-list-notifications"]], inputs: { status: "status", subject: "subject", subjectId: "subjectId" }, decls: 5, vars: 3, consts: [["title", "NOTIFICATIONS", 3, "breadcrumbItems"], ["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["previewItemModal", ""], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "visually-hidden"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title"], [1, "card-body"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "card-footer"], ["class", "mt-2 text-center", 4, "ngIf"], [1, "row"], [1, "card", "card-animate", "p-3"], [1, "d-flex", "align-items-center"], [1, "flex-grow-1", "overflow-hidden"], [1, "d-flex", "flex-column", 2, "cursor", "pointer"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted"], [1, "d-flex", "gap-2", "fs-12"], [1, "badge", "bg-primary"], [1, "badge", "bg-warning"], ["class", "badge bg-secondary", 4, "ngIf"], [1, "text-muted", "fs-12"], ["class", "my-2", 4, "ngIf"], [1, "d-flex", "justify-content-between", "fs-11", "fw-medium", "text-uppercase", "text-muted"], [1, "mt-2"], [1, "mdi", "mdi-clock-outline", "mr-2"], [1, "d-flex", "gap-2"], ["class", "badge badge-soft-success fs-12", 4, "ngIf"], ["class", "badge badge-soft-danger fs-12", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "ri-edit-fill", "me-2", "align-middle"], [1, "badge", "bg-secondary"], [1, "my-2"], [1, "form-label"], [1, "text-muted", 3, "innerHTML"], [1, "badge", "badge-soft-success", "fs-12"], [1, "badge", "badge-soft-danger", "fs-12"], [1, "mt-2", "text-center"], [3, "totalRecords", "first", "rowsPerPageOptions", "rows", "showCurrentPageReport", "onPageChange"], ["paginator", ""], [1, "modal-header", "px-5"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "p-5", "modal-body", 2, "height", "450px", "scroll-behavior", "smooth", "overflow-x", "hidden", "overflow-y", "auto"], [4, "ngIf"], [3, "previewData", 4, "ngIf"], [3, "previewData"]], template: function ListNotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ListNotificationsComponent_div_1_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ListNotificationsComponent_div_2_Template, 8, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ListNotificationsComponent_ng_template_3_Template, 10, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, primeng_paginator__WEBPACK_IMPORTED_MODULE_19__.Paginator, _items_preview_preview_component__WEBPACK_IMPORTED_MODULE_4__.PreviewComponent, _items_matching_preview_matching_preview_component__WEBPACK_IMPORTED_MODULE_5__.MatchingPreviewComponent, _items_ordering_preview_ordering_preview_component__WEBPACK_IMPORTED_MODULE_6__.OrderingPreviewComponent, _items_rich_essay_preview_rich_essay_preview_component__WEBPACK_IMPORTED_MODULE_7__.RichEssayPreviewComponent, _items_multiple_response_preview_multiple_response_preview_component__WEBPACK_IMPORTED_MODULE_8__.MultipleResponsePreviewComponent, _items_short_text_preview_short_text_preview_component__WEBPACK_IMPORTED_MODULE_9__.ShortTextPreviewComponent, _items_yes_or_no_preview_yes_or_no_preview_component__WEBPACK_IMPORTED_MODULE_10__.YesOrNoPreviewComponent, _items_true_or_false_preview_true_or_false_preview_component__WEBPACK_IMPORTED_MODULE_11__.TrueOrFalsePreviewComponent, _items_cloze_dropdown_preview_cloze_dropdown_preview_component__WEBPACK_IMPORTED_MODULE_12__.ClozeDropdownPreviewComponent, _items_cloze_text_preview_cloze_text_preview_component__WEBPACK_IMPORTED_MODULE_13__.ClozeTextPreviewComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.UpperCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 24114:
/*!*********************************************************************!*\
  !*** ./src/app/pages/notifications/notifications-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsRoutingModule": () => (/* binding */ NotificationsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _list_notifications_list_notifications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-notifications/list-notifications.component */ 81918);
/* harmony import */ var _subject_notifications_subject_notifications_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subject-notifications/subject-notifications.component */ 63286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: '', component: _list_notifications_list_notifications_component__WEBPACK_IMPORTED_MODULE_0__.ListNotificationsComponent },
    /* { path: ':status', component: ListNotificationsComponent }, */
    { path: 'subject/:subjectId/status/:stats', component: _subject_notifications_subject_notifications_component__WEBPACK_IMPORTED_MODULE_1__.SubjectNotificationsComponent },
];
class NotificationsRoutingModule {
}
NotificationsRoutingModule.ɵfac = function NotificationsRoutingModule_Factory(t) { return new (t || NotificationsRoutingModule)(); };
NotificationsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NotificationsRoutingModule });
NotificationsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotificationsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 44558:
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsModule": () => (/* binding */ NotificationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/paginator */ 21066);
/* harmony import */ var _items_items_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/items.module */ 97272);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications-routing.module */ 24114);
/* harmony import */ var _list_notifications_list_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-notifications/list-notifications.component */ 81918);
/* harmony import */ var _subject_notifications_subject_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subject-notifications/subject-notifications.component */ 63286);
/* harmony import */ var _rejected_questions_list_rejected_questions_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rejected-questions-list/rejected-questions-list.component */ 29658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);










class NotificationsModule {
}
NotificationsModule.ɵfac = function NotificationsModule_Factory(t) { return new (t || NotificationsModule)(); };
NotificationsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: NotificationsModule });
NotificationsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_2__.NotificationsRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_8__.PaginatorModule,
            _items_items_module__WEBPACK_IMPORTED_MODULE_1__.ItemsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPopoverModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NotificationsModule, { declarations: [_list_notifications_list_notifications_component__WEBPACK_IMPORTED_MODULE_3__.ListNotificationsComponent, _subject_notifications_subject_notifications_component__WEBPACK_IMPORTED_MODULE_4__.SubjectNotificationsComponent, _rejected_questions_list_rejected_questions_list_component__WEBPACK_IMPORTED_MODULE_5__.RejectedQuestionsListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _notifications_routing_module__WEBPACK_IMPORTED_MODULE_2__.NotificationsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_8__.PaginatorModule,
        _items_items_module__WEBPACK_IMPORTED_MODULE_1__.ItemsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPopoverModule], exports: [_list_notifications_list_notifications_component__WEBPACK_IMPORTED_MODULE_3__.ListNotificationsComponent] }); })();


/***/ }),

/***/ 29658:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/notifications/rejected-questions-list/rejected-questions-list.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RejectedQuestionsListComponent": () => (/* binding */ RejectedQuestionsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../notification.service */ 55376);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _items_item_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../items/item-http.service */ 45911);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/paginator */ 21066);
/* harmony import */ var _items_preview_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../items/preview/preview.component */ 22377);
/* harmony import */ var _items_matching_preview_matching_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../items/matching-preview/matching-preview.component */ 98404);
/* harmony import */ var _items_ordering_preview_ordering_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../items/ordering-preview/ordering-preview.component */ 79040);
/* harmony import */ var _items_rich_essay_preview_rich_essay_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../items/rich-essay-preview/rich-essay-preview.component */ 90021);
/* harmony import */ var _items_multiple_response_preview_multiple_response_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../items/multiple-response-preview/multiple-response-preview.component */ 82457);
/* harmony import */ var _items_short_text_preview_short_text_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../items/short-text-preview/short-text-preview.component */ 50612);
/* harmony import */ var _items_yes_or_no_preview_yes_or_no_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../items/yes-or-no-preview/yes-or-no-preview.component */ 33699);
/* harmony import */ var _items_true_or_false_preview_true_or_false_preview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../items/true-or-false-preview/true-or-false-preview.component */ 96733);
/* harmony import */ var _items_cloze_dropdown_preview_cloze_dropdown_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../items/cloze-dropdown-preview/cloze-dropdown-preview.component */ 5518);
/* harmony import */ var _items_cloze_text_preview_cloze_text_preview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../items/cloze-text-preview/cloze-text-preview.component */ 35550);




















function RejectedQuestionsListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Loading Notifications...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Loading Notifications...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RejectedQuestionsListComponent_div_2_div_5_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Subtopic: ", notification_r6.subtopicName.toUpperCase(), "");
} }
function RejectedQuestionsListComponent_div_2_div_5_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "REASON: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", notification_r6.rejectReason, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
} }
function RejectedQuestionsListComponent_div_2_div_5_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, notification_r6.status));
} }
function RejectedQuestionsListComponent_div_2_div_5_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, notification_r6.status), "");
} }
function RejectedQuestionsListComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, RejectedQuestionsListComponent_div_2_div_5_span_14_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, RejectedQuestionsListComponent_div_2_div_5_div_17_Template, 4, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, RejectedQuestionsListComponent_div_2_div_5_span_25_Template, 3, 3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, RejectedQuestionsListComponent_div_2_div_5_span_26_Template, 3, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RejectedQuestionsListComponent_div_2_div_5_Template_button_click_27_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16); const notification_r6 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r15.openNotification(notification_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29, "Modify Question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Author: ", notification_r6.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Subject:", notification_r6.subjectName.toUpperCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Topic: ", notification_r6.topicName.toUpperCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", notification_r6.subtopicName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Moderator: ", notification_r6.moderator, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", notification_r6.rejectReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", notification_r6.status + " on", ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](23, 10, notification_r6.messageTime, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", notification_r6.status == "ACCEPTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", notification_r6.status == "REJECTED");
} }
const _c0 = function () { return [20, 30, 50]; };
function RejectedQuestionsListComponent_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "p-paginator", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onPageChange", function RejectedQuestionsListComponent_div_2_div_7_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r18.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("totalRecords", ctx_r5.notifications.totalElements)("first", 1)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c0))("rows", 25)("showCurrentPageReport", true);
} }
function RejectedQuestionsListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, RejectedQuestionsListComponent_div_2_div_5_Template, 30, 13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, RejectedQuestionsListComponent_div_2_div_7_Template, 3, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Rejected Questions(", ctx_r1.notifications.totalElements, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.notifications.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.notifications.content.length > 0);
} }
function RejectedQuestionsListComponent_ng_template_3_div_9_app_preview_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-preview", 53);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r22.item);
} }
function RejectedQuestionsListComponent_ng_template_3_div_9_app_matching_preview_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-matching-preview", 53);
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r23.item);
} }
function RejectedQuestionsListComponent_ng_template_3_div_9_app_ordering_preview_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-ordering-preview", 53);
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r24.item);
} }
function RejectedQuestionsListComponent_ng_template_3_div_9_app_rich_essay_preview_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-rich-essay-preview", 53);
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r25.item);
} }
function RejectedQuestionsListComponent_ng_template_3_div_9_app_multiple_response_preview_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-multiple-response-preview", 53);
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r26.item);
} }
function RejectedQuestionsListComponent_ng_template_3_div_9_app_short_text_preview_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-short-text-preview", 53);
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r27.item);
} }
function RejectedQuestionsListComponent_ng_template_3_div_9_app_yes_or_no_preview_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-yes-or-no-preview", 53);
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r28.item);
} }
function RejectedQuestionsListComponent_ng_template_3_div_9_app_true_or_false_preview_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-true-or-false-preview", 53);
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r29.item);
} }
function RejectedQuestionsListComponent_ng_template_3_div_9_app_cloze_dropdown_preview_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-cloze-dropdown-preview", 53);
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r30.item);
} }
function RejectedQuestionsListComponent_ng_template_3_div_9_app_cloze_text_preview_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-cloze-text-preview", 53);
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("previewData", ctx_r31.item);
} }
function RejectedQuestionsListComponent_ng_template_3_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, RejectedQuestionsListComponent_ng_template_3_div_9_app_preview_1_Template, 1, 1, "app-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RejectedQuestionsListComponent_ng_template_3_div_9_app_matching_preview_2_Template, 1, 1, "app-matching-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, RejectedQuestionsListComponent_ng_template_3_div_9_app_ordering_preview_3_Template, 1, 1, "app-ordering-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, RejectedQuestionsListComponent_ng_template_3_div_9_app_rich_essay_preview_4_Template, 1, 1, "app-rich-essay-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, RejectedQuestionsListComponent_ng_template_3_div_9_app_multiple_response_preview_5_Template, 1, 1, "app-multiple-response-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, RejectedQuestionsListComponent_ng_template_3_div_9_app_short_text_preview_6_Template, 1, 1, "app-short-text-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, RejectedQuestionsListComponent_ng_template_3_div_9_app_yes_or_no_preview_7_Template, 1, 1, "app-yes-or-no-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, RejectedQuestionsListComponent_ng_template_3_div_9_app_true_or_false_preview_8_Template, 1, 1, "app-true-or-false-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, RejectedQuestionsListComponent_ng_template_3_div_9_app_cloze_dropdown_preview_9_Template, 1, 1, "app-cloze-dropdown-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, RejectedQuestionsListComponent_ng_template_3_div_9_app_cloze_text_preview_10_Template, 1, 1, "app-cloze-text-preview", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "MCQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "ASSOCIATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "ORDER_LIST");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "ESSAY_RICH_TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "MRQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "SHORT_TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "YES_NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "TRUE_FALSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "CLOZE_DROPDOWN");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.item.type === "CLOZE_TEXT");
} }
function RejectedQuestionsListComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h3", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Question Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RejectedQuestionsListComponent_ng_template_3_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33); const modal_r20 = restoredCtx.$implicit; return modal_r20.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, RejectedQuestionsListComponent_ng_template_3_div_9_Template, 11, 10, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.item);
} }
class RejectedQuestionsListComponent {
    constructor(notificationService, userService, notifier, router, modalService, itemService) {
        this.notificationService = notificationService;
        this.userService = userService;
        this.notifier = notifier;
        this.router = router;
        this.modalService = modalService;
        this.itemService = itemService;
        this.page = 0;
        this.pageSize = 25;
        this.loading = true;
        this.filterOption = '';
        this.filteredNotifications = [];
    }
    ngOnInit() {
        this.currentUser = this.userService.getCurrentUser();
        this.notificationService.notificationPageOpen = true;
        this.breadCrumbItems = [
            { label: 'notifications', active: true },
            /* {
              label: this.subject ? this.subject : '',
              active: this.subject ? true : false,
            }, */
        ];
        /* if (this.subject && this.subjectId && this.status) {
          this.notificationService
            .filterNotificationsBySubject(this.status, this.subjectId)
            .subscribe(
              (value) => {
                if (value) {
                  this.notifications = value;
                }
              },
              (error: HttpErrorResponse) => {
                this.notifier.notify('error', `${error.error.message}`);
              }
            );
        } else { */
        this.notificationService
            .fetchAllNotifications(this.currentUser.id, this.page, this.pageSize)
            .subscribe((value) => {
            this.notifications = value;
            this.loading = false;
        }, (error) => {
            this.notifier.notify('error', `${error.error.message}`);
        });
        //}
    }
    ngOnDestroy() {
        this.notificationService.notificationPageOpen = false;
    }
    setFilter(filter) {
        this.notificationService.filterNotifications(filter).subscribe((value) => {
            if (value) {
                this.notifications = value;
            }
        }, (error) => {
            this.notifier.notify('error', `${error.error.message}`);
        });
    }
    viewItem(notification) {
        // console.log(notification);
        this.router.navigate(['/examalpha/subjects/' + notification.subjectId + '/edit-item'], {
            queryParams: {
                type: `${notification.itemType}`,
                id: `${notification.itemId}`,
            },
        });
    }
    openNotification(notification) {
        // console.log(notification);
        this.router.navigate(['/examalpha/subjects/' + notification.subjectName + '/edit-item'], {
            queryParams: {
                type: `${notification.itemType}`,
                id: `${notification.itemId}`,
            },
        });
    }
    openPreviewItemModal(notification, itemModal) {
        this.itemService.fetchIndividualItem(notification.itemId).subscribe((value) => {
            if (value) {
                this.item = value;
            }
        }, (error) => {
            // console.log(error.error.message);
        });
        this.modalService.open(itemModal, { centered: true, size: 'lg' });
    }
    onPageChange(event) {
        this.page = event.page;
        this.pageSize = event.rows;
        this.ngOnInit();
    }
}
RejectedQuestionsListComponent.ɵfac = function RejectedQuestionsListComponent_Factory(t) { return new (t || RejectedQuestionsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_15__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_items_item_http_service__WEBPACK_IMPORTED_MODULE_2__.ItemHttpService)); };
RejectedQuestionsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: RejectedQuestionsListComponent, selectors: [["app-rejected-questions-list"]], inputs: { status: "status", subject: "subject", subjectId: "subjectId" }, decls: 5, vars: 3, consts: [["title", "NOTIFICATIONS", 3, "breadcrumbItems"], ["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["previewItemModal", ""], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "visually-hidden"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title"], [1, "card-body"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "card-footer"], ["class", "mt-2 text-center", 4, "ngIf"], [1, "row"], [1, "card", "card-animate", "p-3"], [1, "d-flex", "align-items-center"], [1, "flex-grow-1", "overflow-hidden"], [1, "d-flex", "flex-column", 2, "cursor", "pointer"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted"], [1, "d-flex", "gap-2", "fs-12"], [1, "badge", "bg-primary"], [1, "badge", "bg-warning"], ["class", "badge bg-secondary", 4, "ngIf"], [1, "text-muted", "fs-12"], ["class", "my-2", 4, "ngIf"], [1, "d-flex", "justify-content-between", "fs-11", "fw-medium", "text-uppercase", "text-muted"], [1, "mt-2"], [1, "mdi", "mdi-clock-outline", "mr-2"], [1, "d-flex", "gap-2"], ["class", "badge badge-soft-success fs-12", 4, "ngIf"], ["class", "badge badge-soft-danger fs-12", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "ri-edit-fill", "me-2", "align-middle"], [1, "badge", "bg-secondary"], [1, "my-2"], [1, "form-label"], [1, "text-muted", 3, "innerHTML"], [1, "badge", "badge-soft-success", "fs-12"], [1, "badge", "badge-soft-danger", "fs-12"], [1, "mt-2", "text-center"], [3, "totalRecords", "first", "rowsPerPageOptions", "rows", "showCurrentPageReport", "onPageChange"], ["paginator", ""], [1, "modal-header", "px-5"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "p-5", "modal-body", 2, "height", "450px", "scroll-behavior", "smooth", "overflow-x", "hidden", "overflow-y", "auto"], [4, "ngIf"], [3, "previewData", 4, "ngIf"], [3, "previewData"]], template: function RejectedQuestionsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, RejectedQuestionsListComponent_div_1_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RejectedQuestionsListComponent_div_2_Template, 8, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, RejectedQuestionsListComponent_ng_template_3_Template, 10, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, primeng_paginator__WEBPACK_IMPORTED_MODULE_19__.Paginator, _items_preview_preview_component__WEBPACK_IMPORTED_MODULE_4__.PreviewComponent, _items_matching_preview_matching_preview_component__WEBPACK_IMPORTED_MODULE_5__.MatchingPreviewComponent, _items_ordering_preview_ordering_preview_component__WEBPACK_IMPORTED_MODULE_6__.OrderingPreviewComponent, _items_rich_essay_preview_rich_essay_preview_component__WEBPACK_IMPORTED_MODULE_7__.RichEssayPreviewComponent, _items_multiple_response_preview_multiple_response_preview_component__WEBPACK_IMPORTED_MODULE_8__.MultipleResponsePreviewComponent, _items_short_text_preview_short_text_preview_component__WEBPACK_IMPORTED_MODULE_9__.ShortTextPreviewComponent, _items_yes_or_no_preview_yes_or_no_preview_component__WEBPACK_IMPORTED_MODULE_10__.YesOrNoPreviewComponent, _items_true_or_false_preview_true_or_false_preview_component__WEBPACK_IMPORTED_MODULE_11__.TrueOrFalsePreviewComponent, _items_cloze_dropdown_preview_cloze_dropdown_preview_component__WEBPACK_IMPORTED_MODULE_12__.ClozeDropdownPreviewComponent, _items_cloze_text_preview_cloze_text_preview_component__WEBPACK_IMPORTED_MODULE_13__.ClozeTextPreviewComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.UpperCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWplY3RlZC1xdWVzdGlvbnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_notifications_notifications_module_ts.js.map