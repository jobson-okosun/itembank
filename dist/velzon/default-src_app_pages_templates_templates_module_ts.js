"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([["default-src_app_pages_templates_templates_module_ts"],{

/***/ 73069:
/*!*********************************************************************!*\
  !*** ./src/app/pages/assessment/model/assessment-template.model.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssessmentTemplate": () => (/* binding */ AssessmentTemplate),
/* harmony export */   "AssessmentFromTemplateRequest": () => (/* binding */ AssessmentFromTemplateRequest)
/* harmony export */ });
class AssessmentTemplate {
}
class AssessmentFromTemplateRequest {
}


/***/ }),

/***/ 59290:
/*!*************************************************************!*\
  !*** ./src/app/pages/assessment/model/single-assessment.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleAssessment": () => (/* binding */ SingleAssessment)
/* harmony export */ });
class SingleAssessment {
    constructor() {
        this.sectionDetails = [];
    }
}


/***/ }),

/***/ 15814:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/templates/assessment-template/assessment-template.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssessmentTemplateComponent": () => (/* binding */ AssessmentTemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_templates_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/templates.service */ 7);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);







function AssessmentTemplateComponent_ng_container_1_div_12_i_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 41);
} }
function AssessmentTemplateComponent_ng_container_1_div_12_i_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 42);
} }
function AssessmentTemplateComponent_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AssessmentTemplateComponent_ng_container_1_div_12_Template_a_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const template_r6 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.setCurrentTemplate(template_r6.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AssessmentTemplateComponent_ng_container_1_div_12_Template_a_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const template_r6 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.setCurrentTemplate(template_r6.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AssessmentTemplateComponent_ng_container_1_div_12_Template_a_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const template_r6 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return ctx_r12.openDeleteTemplateConfirmationModal(_r3, template_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Sections: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Delivery Method: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, AssessmentTemplateComponent_ng_container_1_div_12_i_30_Template, 1, 0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, AssessmentTemplateComponent_ng_container_1_div_12_i_31_Template, 1, 0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Duration: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Created At: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const template_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/examalpha/exams/templates/", template_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](template_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/examalpha/exams/templates/", template_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", template_r6.sectionCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", template_r6.deliveryMethod.includes("ON_PREMISE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", template_r6.deliveryMethod.includes("PROCTORING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", template_r6.deliveryMethod, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", template_r6.duration, " Minute(s).");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](45, 9, template_r6.createdAt, "medium"), "");
} }
function AssessmentTemplateComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AssessmentTemplateComponent_ng_container_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AssessmentTemplateComponent_ng_container_1_div_12_Template, 46, 12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" List of all templates (", ctx_r0.templates.content.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.templates.content);
} }
function AssessmentTemplateComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Loading exam templates...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AssessmentTemplateComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AssessmentTemplateComponent_ng_template_2_div_0_Template, 7, 0, "div", 43);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.templates);
} }
function AssessmentTemplateComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Confirm Delete Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AssessmentTemplateComponent_ng_template_4_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const modal_r16 = restoredCtx.$implicit; return modal_r16.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Are you sure you want to delete this Template?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " This action cannot be reversed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AssessmentTemplateComponent_ng_template_4_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const modal_r16 = restoredCtx.$implicit; return modal_r16.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " No, Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AssessmentTemplateComponent_ng_template_4_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.deleteAssessmentTemplate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Yes, Delete It ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r4.submitted);
} }
class AssessmentTemplateComponent {
    constructor(templateService, notifier, modalService, location) {
        this.templateService = templateService;
        this.notifier = notifier;
        this.modalService = modalService;
        this.location = location;
        this.submitted = false;
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: "exam-templates", active: true }];
        this.fetchAllAssessmentTemplates();
    }
    openDeleteTemplateConfirmationModal(deleteTemplateModal, template) {
        this.selectedTemplate = template;
        this.modalService.open(deleteTemplateModal, { centered: true, size: "md" });
    }
    deleteAssessmentTemplate() {
        this.submitted = true;
        this.templateService
            .deleteAssessmentTemplate(this.selectedTemplate.id)
            .subscribe((value) => {
            if (value) {
                this.notifier.notify("success", `${this.selectedTemplate.name} was deleted successfully.`);
                this.ngOnInit();
                this.submitted = false;
                this.modalService.dismissAll();
            }
        }, (error) => {
            this.submitted = false;
            this.notifier.notify("error", `${error.error.message}`);
        });
    }
    fetchAllAssessmentTemplates() {
        this.templateService.fetchAllAssessmentTemplates().subscribe((value) => {
            // console.log(value);
            this.templates = value;
        }, (error) => {
            // console.log(error);
        });
    }
    deleteTemplate(templateId) {
        this.templateService.deleteAssessmentDetailsTemplate(templateId).subscribe((value) => {
            // console.log(value);
        }, (error) => {
            // console.log(error);
        });
    }
    setCurrentTemplate(templateName) {
        this.templateService.currentTemplate = templateName;
    }
    goBack() {
        this.location.back();
    }
}
AssessmentTemplateComponent.ɵfac = function AssessmentTemplateComponent_Factory(t) { return new (t || AssessmentTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_templates_service__WEBPACK_IMPORTED_MODULE_0__.TemplatesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location)); };
AssessmentTemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AssessmentTemplateComponent, selectors: [["app-assessment-template"]], decls: 6, vars: 3, consts: [["title", "EXAM TEMPLATES", 3, "breadcrumbItems"], [4, "ngIf", "ngIfElse"], ["alternative", ""], ["deleteTemplateConfirmationModal", ""], [1, "row", "my-4"], [1, "col-xl-12"], [1, "d-flex", "gap-3", "align-items-center"], [1, "btn", "btn-outline-info", 3, "click"], [1, "d-flex", "align-items-center"], [1, "ri-arrow-left-line"], [1, "card-title", "mb-0"], [1, "row"], ["class", "col-6", 4, "ngFor", "ngForOf"], [1, "col-6"], [1, "card"], [1, "card-header", "mb-0"], [1, "d-flex"], [1, "fs-15", "text-truncate", "flex-grow-1"], [3, "routerLink", "click"], ["ngbDropdown", "", 1, "dropdown"], ["id", "dropdownMenuLink1", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "text-muted", "arrow-none"], [1, "ri-more-2-fill", "align-middle", "me-2", "fs-18", "fw-bold", "text-dark", 2, "cursor", "pointer"], ["aria-labelledby", "dropdownMenuLink1", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item", 3, "routerLink", "click"], [1, "ri-eye-fill", "align-bottom", "me-2", "text-muted"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "ri-delete-bin-2-line", "align-bottom", "me-2", "text-muted"], [1, "card-body"], [1, "flex-shrink-0"], [1, "ps-4", "vstack", "gap-2", 2, "list-style-type", "none"], [1, "text-capitalize"], [1, "ri-checkbox-circle-fill", "align-bottom"], [1, "text-capitalize", "text-info"], ["class", "ri-cloud-off-line align-bottom", 4, "ngIf"], ["class", "ri-user-shared-line align-bottom", 4, "ngIf"], [1, "text-primary"], [1, "ri-timer-line", "align-bottom"], [1, "card-footer", "border-top-dashed"], [1, "fs-12", "flex-grow-1"], [1, "text-secondary"], [1, "ri-time-line", "align-bottom"], [1, "ri-cloud-off-line", "align-bottom"], [1, "ri-user-shared-line", "align-bottom"], ["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "visually-hidden"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "p-5"], [1, "text-center", "text-muted"], [1, "card-footer"], [1, "d-flex", "justify-content-Qss", "gap-2", "mt-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"]], template: function AssessmentTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AssessmentTemplateComponent_ng_container_1_Template, 13, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AssessmentTemplateComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AssessmentTemplateComponent_ng_template_4_Template, 19, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.templates)("ngIfElse", _r1);
    } }, directives: [_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3Nlc3NtZW50LXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7:
/*!**************************************************************!*\
  !*** ./src/app/pages/templates/service/templates.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesService": () => (/* binding */ TemplatesService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class TemplatesService {
    constructor(http) {
        this.http = http;
    }
    fetchAllAssessmentTemplates() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/assessment_template`, { withCredentials: true });
    }
    fetchSingleAssessmentTemplate(assessmentTemplateId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/assessment_template/${assessmentTemplateId}`, { withCredentials: true });
    }
    deleteAssessmentTemplate(templateId) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/assessment_template/${templateId}`, { withCredentials: true });
    }
    fetchAllAssessmentDetailsTemplate() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/template/assessmentdetails/`, { withCredentials: true });
    }
    fetchAssessmentTemplateDetailById(templateId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/template/assessmentdetails/${templateId}`, { withCredentials: true });
    }
    deleteAssessmentDetailsTemplate(templateId) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/items/template/assessmentdetails/${templateId}`, { withCredentials: true });
    }
}
TemplatesService.ɵfac = function TemplatesService_Factory(t) { return new (t || TemplatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TemplatesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TemplatesService, factory: TemplatesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 88241:
/*!*************************************************************!*\
  !*** ./src/app/pages/templates/templates-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesRoutingModule": () => (/* binding */ TemplatesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _assessment_template_assessment_template_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assessment-template/assessment-template.component */ 15814);
/* harmony import */ var _view_assessment_template_view_assessment_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-assessment-template/view-assessment-template.component */ 61154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: 'assessment-templates',
        component: _assessment_template_assessment_template_component__WEBPACK_IMPORTED_MODULE_0__.AssessmentTemplateComponent,
    },
    {
        path: 'assessment-templates/:template_id',
        component: _view_assessment_template_view_assessment_template_component__WEBPACK_IMPORTED_MODULE_1__.ViewAssessmentTemplateComponent,
    },
];
class TemplatesRoutingModule {
}
TemplatesRoutingModule.ɵfac = function TemplatesRoutingModule_Factory(t) { return new (t || TemplatesRoutingModule)(); };
TemplatesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TemplatesRoutingModule });
TemplatesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TemplatesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5381:
/*!*****************************************************!*\
  !*** ./src/app/pages/templates/templates.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesModule": () => (/* binding */ TemplatesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ 68581);
/* harmony import */ var _templates_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates-routing.module */ 88241);
/* harmony import */ var _assessment_template_assessment_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assessment-template/assessment-template.component */ 15814);
/* harmony import */ var _view_assessment_template_view_assessment_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-assessment-template/view-assessment-template.component */ 61154);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularx-flatpickr */ 81988);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);











class TemplatesModule {
}
TemplatesModule.ɵfac = function TemplatesModule_Factory(t) { return new (t || TemplatesModule)(); };
TemplatesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TemplatesModule });
TemplatesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _templates_routing_module__WEBPACK_IMPORTED_MODULE_1__.TemplatesRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_7__.TableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAccordionModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltipModule,
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__.FlatpickrModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TemplatesModule, { declarations: [_assessment_template_assessment_template_component__WEBPACK_IMPORTED_MODULE_2__.AssessmentTemplateComponent,
        _view_assessment_template_view_assessment_template_component__WEBPACK_IMPORTED_MODULE_3__.ViewAssessmentTemplateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _templates_routing_module__WEBPACK_IMPORTED_MODULE_1__.TemplatesRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_7__.TableModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltipModule,
        angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__.FlatpickrModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule], exports: [_assessment_template_assessment_template_component__WEBPACK_IMPORTED_MODULE_2__.AssessmentTemplateComponent] }); })();


/***/ }),

/***/ 61154:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/templates/view-assessment-template/view-assessment-template.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewAssessmentTemplateComponent": () => (/* binding */ ViewAssessmentTemplateComponent)
/* harmony export */ });
/* harmony import */ var _assessment_model_single_assessment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assessment/model/single-assessment */ 59290);
/* harmony import */ var _assessment_model_assessment_template_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assessment/model/assessment-template.model */ 73069);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assessment_model_assessment_delivery_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assessment/model/assessment-delivery-enum */ 20686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _service_templates_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/templates.service */ 7);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _assessment_service_assessments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assessment/service/assessments.service */ 9472);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 68581);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularx-flatpickr */ 81988);
















function ViewAssessmentTemplateComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](card_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](card_r5.count);
} }
function ViewAssessmentTemplateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ViewAssessmentTemplateComponent_div_1_div_1_Template, 6, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.cards);
} }
function ViewAssessmentTemplateComponent_div_5_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Display Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "p-sortIcon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Section ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "p-sortIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Question Groups ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Questions No");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "p-sortIcon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssessmentTemplateComponent_div_5_ng_template_4_ng_container_8_div_1_ngb_accordion_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", block_r12.blockName, " ");
} }
function ViewAssessmentTemplateComponent_div_5_ng_template_4_ng_container_8_div_1_ngb_accordion_1_ng_template_4_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" NO OF QUESTIONS: ", block_r12.totalQuestions, " ");
} }
function ViewAssessmentTemplateComponent_div_5_ng_template_4_ng_container_8_div_1_ngb_accordion_1_ng_template_4_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" NO OF PASSAGES: ", block_r12.totalQuestions, " ");
} }
function ViewAssessmentTemplateComponent_div_5_ng_template_4_ng_container_8_div_1_ngb_accordion_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ViewAssessmentTemplateComponent_div_5_ng_template_4_ng_container_8_div_1_ngb_accordion_1_ng_template_4_span_7_Template, 2, 1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ViewAssessmentTemplateComponent_div_5_ng_template_4_ng_container_8_div_1_ngb_accordion_1_ng_template_4_span_8_Template, 2, 1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" GROUP TYPE: ", block_r12.blockType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" QUESTION SELECTION METHOD: ", block_r12.selectionType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", block_r12.blockType === "SINGLE_QUESTIONS");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", block_r12.blockType === "PASSAGES");
} }
function ViewAssessmentTemplateComponent_div_5_ng_template_4_ng_container_8_div_1_ngb_accordion_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngb-accordion", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ngb-panel", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ViewAssessmentTemplateComponent_div_5_ng_template_4_ng_container_8_div_1_ngb_accordion_1_ng_template_3_Template, 3, 1, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ViewAssessmentTemplateComponent_div_5_ng_template_4_ng_container_8_div_1_ngb_accordion_1_ng_template_4_Template, 9, 4, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", block_r12.blockName);
} }
function ViewAssessmentTemplateComponent_div_5_ng_template_4_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ViewAssessmentTemplateComponent_div_5_ng_template_4_ng_container_8_div_1_ngb_accordion_1_Template, 5, 1, "ngb-accordion", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", block_r12.blockName);
} }
function ViewAssessmentTemplateComponent_div_5_ng_template_4_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ViewAssessmentTemplateComponent_div_5_ng_template_4_ng_container_8_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const section_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", section_r9.blockDetailsDTOS);
} }
function ViewAssessmentTemplateComponent_div_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ViewAssessmentTemplateComponent_div_5_ng_template_4_ng_container_8_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 4, section_r9.sectionName));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 6, section_r9.subjectName));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", section_r9.blockDetailsDTOS.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", section_r9.totalQuestions, " ");
} }
function ViewAssessmentTemplateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p-table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ViewAssessmentTemplateComponent_div_5_ng_template_3_Template, 13, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ViewAssessmentTemplateComponent_div_5_ng_template_4_Template, 11, 8, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r1.assessment_template.sectionDetails);
} }
function ViewAssessmentTemplateComponent_ng_template_6_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const method_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", method_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", method_r31, " ");
} }
function ViewAssessmentTemplateComponent_ng_template_6_button_49_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssessmentTemplateComponent_ng_template_6_button_49_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r32.createExamFromTemplate(_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", _r27.invalid);
} }
function ViewAssessmentTemplateComponent_ng_template_6_button_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Saving...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Saving... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ViewAssessmentTemplateComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "CREATE NEW EXAM USING TEMPLATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssessmentTemplateComponent_ng_template_6_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const modal_r26 = restoredCtx.$implicit; return modal_r26.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "form", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ViewAssessmentTemplateComponent_ng_template_6_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _r27.valid && ctx_r36.createExamFromTemplate(_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Exam Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ViewAssessmentTemplateComponent_ng_template_6_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r37.newAssessment.assessmentName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Exam Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "textarea", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ViewAssessmentTemplateComponent_ng_template_6_Template_textarea_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r38.newAssessment.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Exam Start Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ViewAssessmentTemplateComponent_ng_template_6_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r39.newAssessment.startDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Exam End Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ViewAssessmentTemplateComponent_ng_template_6_Template_input_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r40.newAssessment.endDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Exam Delivery Method ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ViewAssessmentTemplateComponent_ng_template_6_Template_select_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r41.newAssessment.deliveryMethod = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, ViewAssessmentTemplateComponent_ng_template_6_option_44_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssessmentTemplateComponent_ng_template_6_Template_button_click_47_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const modal_r26 = restoredCtx.$implicit; const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8); modal_r26.close("Close click"); return _r27.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, ViewAssessmentTemplateComponent_ng_template_6_button_49_Template, 2, 1, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, ViewAssessmentTemplateComponent_ng_template_6_button_50_Template, 7, 0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r3.newAssessment.assessmentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("minLength", 200)("maxlength", 1000)("ngModel", ctx_r3.newAssessment.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "datetime-local")("altInput", false)("enableTime", true)("convertModelValue", true)("dateFormat", "Y-m-d H:i")("ngModel", ctx_r3.newAssessment.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r3.newAssessment.startDate, " ", ctx_r3.newAssessment.endDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "datetime-local")("altInput", false)("enableTime", true)("convertModelValue", true)("dateFormat", "Y-m-d H:i")("ngModel", ctx_r3.newAssessment.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r3.newAssessment.deliveryMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.deliveryMethods);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r3.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.submitted);
} }
class ViewAssessmentTemplateComponent {
    constructor(ar, templateService, modalService, assessmentService, notifierService) {
        this.ar = ar;
        this.templateService = templateService;
        this.modalService = modalService;
        this.assessmentService = assessmentService;
        this.notifierService = notifierService;
        this.assessment_template = new _assessment_model_single_assessment__WEBPACK_IMPORTED_MODULE_0__.SingleAssessment();
        this.cards = [];
        this.newAssessment = new _assessment_model_assessment_template_model__WEBPACK_IMPORTED_MODULE_1__.AssessmentFromTemplateRequest();
        this.submitted = false;
        this.deliveryMethods = [];
        this.template_name = this.templateService.currentTemplate;
        this.templateId = this.ar.snapshot.params["template_id"];
    }
    ngOnInit() {
        let m = Object.keys(_assessment_model_assessment_delivery_enum__WEBPACK_IMPORTED_MODULE_3__.AssessmentDeliveryEnum);
        m.forEach((method) => {
            this.deliveryMethods.push(method);
        });
        this.breadCrumbItems = [
            { label: "exam template", active: false },
            { label: this.template_name.toLowerCase(), active: true },
        ];
        this.templateService
            .fetchSingleAssessmentTemplate(this.templateId)
            .subscribe((value) => {
            this.assessment_template = value;
            this.assessment_template.sectionDetails.reduce((sum, item) => sum + item.totalQuestions, 0);
        }, (error) => { });
    }
    openReuseModal(assessmentSettingsModal) {
        this.modalService.open(assessmentSettingsModal, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false,
        });
    }
    createExamFromTemplate(newAssesmentForm) {
        this.submitted = true;
        // if (
        //   this.newAssessment.startDate.trim() === "" ||
        //   this.newAssessment.endDate.trim() === ""
        // ) {
        //   this.submitted = false;
        //   return this.notifier.notify(`error`, `Exam must have start and end date`);
        // }
        if (this.newAssessment.startDate > this.newAssessment.endDate) {
            this.submitted = false;
            return this.notifierService.notify(`error`, `The end date of the examination cannot be earlier than the start date`);
        }
        // if (this.newAssessment.duration < 5) {
        //   this.submitted = false;
        //   return this.notifierService.notify(
        //     `error`,
        //     `The specified duration cannot be less than 5 minutes`
        //   );
        // }
        console.log(this.newAssessment);
        this.assessmentService
            .createExamUsingTemplate(this.newAssessment, this.assessment_template.id)
            .subscribe({
            next: (value) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    title: "Congratulations",
                    text: "Your exam was created successfully.",
                    icon: "success",
                });
                this.submitted = false;
                this.modalService.dismissAll();
                this.ngOnInit();
                this.newAssessment = new _assessment_model_assessment_template_model__WEBPACK_IMPORTED_MODULE_1__.AssessmentFromTemplateRequest();
            },
            error: (err) => {
                this.submitted = false;
                this.notifierService.notify("error", `${err.error.message}`);
            },
        });
    }
}
ViewAssessmentTemplateComponent.ɵfac = function ViewAssessmentTemplateComponent_Factory(t) { return new (t || ViewAssessmentTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_templates_service__WEBPACK_IMPORTED_MODULE_4__.TemplatesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_assessment_service_assessments_service__WEBPACK_IMPORTED_MODULE_5__.AssessmentsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_10__.NotifierService)); };
ViewAssessmentTemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ViewAssessmentTemplateComponent, selectors: [["app-view-assessment-template"]], decls: 8, vars: 4, consts: [[3, "title", "breadcrumbItems"], ["class", "row", 4, "ngIf"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-soft-primary", 3, "click"], ["newExamFromTemplateModal", ""], [1, "row"], ["class", "col-lg-3 col-sm-12 col-md-6 card p-3", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-sm-12", "col-md-6", "card", "p-3"], [1, "d-flex", "flex-row", "gap-2", "justify-content-center", "align-items-center"], [1, "table", "table-responsive"], ["styleClass", "p-datatable-gridlines", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["pSortableColumn", "code"], ["field", "code"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "category"], ["field", "category"], ["pSortableColumn", "quantity"], ["field", "quantity"], [4, "ngIf"], ["class", "live-preview mb-2", 4, "ngFor", "ngForOf"], [1, "live-preview", "mb-2"], ["class", "custom-accordionwithicon accordion-border-box", 4, "ngIf"], [1, "custom-accordionwithicon", "accordion-border-box"], ["acc", "ngbAccordion"], ["id", "static-1"], ["ngbPanelTitle", "", "class", "accordion-header"], ["ngbPanelContent", "", 3, "ngIf"], ["id", "gen-ques-headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#gen-ques-collapseOne", "aria-expanded", "false", "aria-controls", "gen-ques-collapseOne", 1, "accordion-button"], [1, "accordion-body"], [1, "live-preview"], [1, "d-flex", "flex-column", "gap-1", "mb-2"], [1, "badge", "badge-soft-dark"], ["class", "badge badge-soft-dark", 4, "ngIf"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "px-5"], [3, "ngSubmit"], ["newAssessmentForm", "ngForm"], [1, ""], ["for", "subjectName", 1, "label"], [1, "text-danger"], ["type", "text", "name", "name", "placeholder", "Name of Exam", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "mt-2"], [1, "col-12"], [1, "form-label"], ["placeholder", "Give a brief description of the exam...", "rows", "3", "cols", "100vw", "name", "description", "required", "", 1, "form-control", 3, "minLength", "maxlength", "ngModel", "ngModelChange"], [1, "col-6"], ["type", "text", "name", "assessmentStartDate", "required", "", "mwlFlatpickr", "", "name", "calendar", "data-id", "datetime", 1, "form-control", "flatpickr-input", 3, "type", "altInput", "enableTime", "convertModelValue", "altFormat", "dateFormat", "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "assessmentEndDate", "name", "calendar", "mwlFlatpickr", "", 1, "form-control", "flatpickr-input", 3, "type", "altInput", "enableTime", "convertModelValue", "altFormat", "dateFormat", "ngModel", "ngModelChange"], ["for", "deliveryMethod", 1, "label"], ["data-plugin", "choices", "data-choices", "", "data-choices-search-false", "", "name", "deliveryMethod", "required", "", 1, "form-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "card-footer", "flex", "justify-end", "py-2", "gap-3"], [1, "hstack", "gap-2", "justify-content-end"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-load", "disabled", "", 4, "ngIf"], [3, "value"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["disabled", "", 1, "btn", "btn-outline-primary", "btn-load"], [1, "d-flex", "align-items-center"], ["role", "status", 1, "spinner-border", "flex-shrink-0"], [1, "visually-hidden"], [1, "flex-grow-1", "ms-2"]], template: function ViewAssessmentTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ViewAssessmentTemplateComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewAssessmentTemplateComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r43); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7); return ctx.openReuseModal(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Use for exam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ViewAssessmentTemplateComponent_div_5_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ViewAssessmentTemplateComponent_ng_template_6_Template, 51, 22, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("title", "EXAM TEMPLATE | ", ctx.template_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.assessment_template);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.assessment_template && ctx.assessment_template.sectionDetails.length > 0);
    } }, directives: [_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, primeng_table__WEBPACK_IMPORTED_MODULE_12__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_12__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_12__.SortIcon, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPanelTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPanelContent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.MaxLengthValidator, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_15__.FlatpickrDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.UpperCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWFzc2Vzc21lbnQtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_templates_templates_module_ts.js.map