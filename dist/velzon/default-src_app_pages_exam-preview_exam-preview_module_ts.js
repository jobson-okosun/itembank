"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([["default-src_app_pages_exam-preview_exam-preview_module_ts"],{

/***/ 67495:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/exam-preview/components/calculator/calculator.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculatorComponent": () => (/* binding */ CalculatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_candidate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/candidate.service */ 88291);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/item.service */ 17154);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! simplebar-angular */ 51618);






function CalculatorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "btn", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ngx-simplebar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.allClear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " DEL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.pressOperator("/"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.pressNum("7"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " 7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.pressNum("8"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " 8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.pressNum("9"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " 9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.pressOperator("*"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.pressNum("4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " 4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.pressNum("5"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.pressNum("6"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " 6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.pressOperator("-"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.pressNum("1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.pressNum("2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.pressNum("3"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.pressOperator("+"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.pressNum("."); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.pressNum("0"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalculatorComponent_ng_container_0_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.getAnswer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " = ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbTooltip", "Calculator");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.input, " ");
} }
class CalculatorComponent {
    constructor(candidateService, itemsService) {
        this.candidateService = candidateService;
        this.itemsService = itemsService;
        this.input = "";
        this.result = "";
    }
    ngOnInit() { }
    pressNum(num) {
        //Do Not Allow . more than once
        if (num == ".") {
            if (this.input != "") {
                const lastNum = this.getLastOperand();
                console.log(lastNum.lastIndexOf("."));
                if (lastNum.lastIndexOf(".") >= 0)
                    return;
            }
        }
        //Do Not Allow 0 at beginning.
        //Javascript will throw Octal literals are not allowed in strict mode.
        if (num == "0") {
            if (this.input == "") {
                return;
            }
            const PrevKey = this.input[this.input.length - 1];
            if (PrevKey === "/" ||
                PrevKey === "*" ||
                PrevKey === "-" ||
                PrevKey === "+") {
                return;
            }
        }
        this.input = this.input + num;
        this.calcAnswer();
    }
    getLastOperand() {
        let pos;
        console.log(this.input);
        pos = this.input.toString().lastIndexOf("+");
        if (this.input.toString().lastIndexOf("-") > pos)
            pos = this.input.lastIndexOf("-");
        if (this.input.toString().lastIndexOf("*") > pos)
            pos = this.input.lastIndexOf("*");
        if (this.input.toString().lastIndexOf("/") > pos)
            pos = this.input.lastIndexOf("/");
        console.log("Last " + this.input.substr(pos + 1));
        return this.input.substr(pos + 1);
    }
    pressOperator(op) {
        //Do not allow operators more than once
        const lastKey = this.input[this.input.length - 1];
        if (lastKey === "/" ||
            lastKey === "*" ||
            lastKey === "-" ||
            lastKey === "+") {
            return;
        }
        this.input = this.input + op;
        this.calcAnswer();
    }
    clear() {
        if (this.input != "") {
            this.input = this.input.substr(0, this.input.length - 1);
        }
    }
    allClear() {
        this.result = "";
        this.input = "";
    }
    calcAnswer() {
        let formula = this.input;
        let lastKey = formula[formula.length - 1];
        if (lastKey === ".") {
            formula = formula.substr(0, formula.length - 1);
        }
        lastKey = formula[formula.length - 1];
        if (lastKey === "/" ||
            lastKey === "*" ||
            lastKey === "-" ||
            lastKey === "+" ||
            lastKey === ".") {
            formula = formula.substr(0, formula.length - 1);
        }
        console.log("Formula " + formula);
        this.result = eval(formula);
    }
    getAnswer() {
        this.calcAnswer();
        this.input = this.result;
        if (this.input == "0")
            this.input = "";
    }
    checkForCalculatorUsage() {
        const foundSectionIndex = this.candidateService.candidateData.sections_questions.findIndex((section) => section.name === this.itemsService.currentSection);
        if (this.candidateService.candidateData.sections_questions[foundSectionIndex]
            .section_settings.allow_calculator) {
            return true;
        }
        return false;
    }
}
CalculatorComponent.ɵfac = function CalculatorComponent_Factory(t) { return new (t || CalculatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_candidate_service__WEBPACK_IMPORTED_MODULE_0__.CandidateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_1__.ItemService)); };
CalculatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalculatorComponent, selectors: [["app-calculator"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["triggers", "mouseenter:mouseleave", "ngbDropdown", "", 3, "ngbTooltip"], ["data-bs-toggle", "dropdown", "ngbDropdownToggle", "", 1, "btn", "btn-sm", "btn-soft-success", 2, "padding", "0px 5px"], [1, "mdi", "mdi-calculator-variant", 2, "font-size", "30px"], ["ngbDropdownMenu", "", 1, "dropdown-menu-xl-end", "dropdown-menu-xl", "p-1", "mx-3"], [1, "mx-n4", "px-4"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "card-body"], [1, ""], [1, "jumbotron", "p-2", "m-0", "bg-inverse"], [1, "input-group", "input-group-sm", "col-sm-12", "m-0", "p-0"], ["type", "text", 1, "col-sm-12", "form-control", "text-lg-right", 2, "height", "40px"], [1, "col-sm-12", "p-1", "m-0"], ["type", "button", 1, "btn", "btn-info", "col-sm-6", 3, "click"], ["type", "button", 1, "btn", "btn-warning", "col-sm-3", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "col-sm-3", 3, "click"], ["type", "button", 1, "btn", "btn-lg", "btn-outline-secondary", "col-sm-3", "p-1", 3, "click"], ["type", "button", 1, "btn", "btn-lg", "btn-secondary", "col-sm-3", "p-1", 3, "click"], ["type", "button", 1, "btn", "btn-lg", "btn-success", "col-sm-6", "p-1", 3, "click"]], template: function CalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalculatorComponent_ng_container_0_Template, 56, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkForCalculatorUsage() == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTooltip, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu, simplebar_angular__WEBPACK_IMPORTED_MODULE_5__.SimplebarAngularComponent], styles: [".cal[_ngcontent-%COMP%] {\n  color: #00a185;\n}\n\n.cal[_ngcontent-%COMP%]:hover {\n  color: #005b4b;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFQyxjQUFBO0FBRkQ7O0FBS0E7RUFDSSxjQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0FBRkoiLCJmaWxlIjoiY2FsY3VsYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmNhbHtcclxuIFxyXG4gY29sb3I6IzAwYTE4NSA7XHJcbn1cclxuXHJcbi5jYWw6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzAwNWI0YjtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59Il19 */"] });


/***/ }),

/***/ 77861:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/exam-preview/components/reset-button/reset-button.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetButtonComponent": () => (/* binding */ ResetButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/item.service */ 17154);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);



class ResetButtonComponent {
    constructor(itemService) {
        this.itemService = itemService;
    }
    ngOnInit() { }
    clearAnswer() {
        this.itemService.getCurrentQuestion().responses = [];
        this.itemService.removeAttemptedQuestionNumber(this.itemService.currentQuestionNumber);
    }
}
ResetButtonComponent.ɵfac = function ResetButtonComponent_Factory(t) { return new (t || ResetButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_0__.ItemService)); };
ResetButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResetButtonComponent, selectors: [["app-reset-button"]], decls: 3, vars: 1, consts: [["triggers", "mouseenter:mouseleave", 1, "btn", "btn-sm", "btn-soft-danger", 3, "ngbTooltip", "click"], [1, "ri-eraser-fill"]], template: function ResetButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetButtonComponent_Template_button_click_0_listener() { return ctx.clearAnswer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Clear Answer\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbTooltip", "Clear answer");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbTooltip], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 13205:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/exam-preview/components/revisit-button/revisit-button.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RevisitButtonComponent": () => (/* binding */ RevisitButtonComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enum/itemTypes */ 86159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/item.service */ 17154);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);





const _c0 = function (a0) { return { "bg-primary": a0 }; };
class RevisitButtonComponent {
    constructor(itemService) {
        this.itemService = itemService;
        this.showAnswer = false;
        this.previousResponses = [];
    }
    ngOnInit() {
        const currentQuestion = this.itemService.getCurrentQuestion();
        this.showAnswer = (currentQuestion === null || currentQuestion === void 0 ? void 0 : currentQuestion.showAnswer) || false;
        this.previousResponses = [];
    }
    isDisplayAnswerForCurrentQuestion() {
        const currentQuestion = this.itemService.getCurrentQuestion();
        return (currentQuestion === null || currentQuestion === void 0 ? void 0 : currentQuestion.showAnswer) || false;
    }
    revisitQuestion() {
        if (this.itemService
            .getQuestionNumbersForRevisitInsection(this.itemService.currentSection)
            .includes(this.questionNumber)) {
            this.itemService.removeQuestionNumberFromRevisit(this.questionNumber);
        }
        else if (!this.itemService
            .getQuestionNumbersForRevisitInsection(this.itemService.currentSection)
            .includes(this.questionNumber)) {
            this.itemService.captureQuestionNumberForRevisit(this.questionNumber);
        }
    }
    getClassObject() {
        if (this.itemService.getCurrentQuestion().revisit === true) {
            return " ri-check-double-line  align-bottom";
        }
        else {
            return "";
        }
    }
    toggleShowAnswer() {
        const currentQuestion = this.itemService.getCurrentQuestion();
        const newShowAnswerState = !currentQuestion.showAnswer;
        currentQuestion.showAnswer = newShowAnswerState;
        this.showAnswer = newShowAnswerState;
        if (newShowAnswerState) {
            this.previousResponses = [...currentQuestion.responses];
            if (currentQuestion.item_type === src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_0__.ItemType.CLOZE_DROPDOWN_IMAGE) {
                this.handleClozeImageDropDown();
            }
            else if (currentQuestion.item_type === src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_0__.ItemType.ASSOCIATION ||
                currentQuestion.item_type === src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_0__.ItemType.ORDER_LIST) {
                this.handleOrderingAndAssociation();
            }
            else if (currentQuestion.item_type === src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_0__.ItemType.IMAGE_DRAG_AND_DROP) {
                this.handleClozeImageDragDrop();
            }
            else {
                currentQuestion.responses = [...currentQuestion.answers];
            }
        }
        else {
            currentQuestion.responses = [...this.previousResponses];
        }
    }
    handleClozeImageDropDown() {
        const currentQuestion = this.itemService.getCurrentQuestion();
        const answers = currentQuestion.answers;
        currentQuestion.responses = answers.map((answer, index) => {
            const possibleResponsesForThisPosition = currentQuestion.possible_responses[index].responses;
            return possibleResponsesForThisPosition[parseInt(answer)];
        });
    }
    handleOrderingAndAssociation() {
        this.itemService.getCurrentQuestion().options = this.sortOptionsByAnswers(this.itemService.getCurrentQuestion().options, this.itemService.getCurrentQuestion().answers);
    }
    handleClozeImageDragDrop() {
        const currentQuestion = this.itemService.getCurrentQuestion();
        const answers = currentQuestion.answers;
        // Map the answers to their corresponding labels from options
        currentQuestion.responses = answers.map((answer) => {
            const matchingOption = currentQuestion.options.find((opt) => opt.value === answer);
            return (matchingOption === null || matchingOption === void 0 ? void 0 : matchingOption.label) || "";
        });
        console.log(currentQuestion);
    }
    sortOptionsByAnswers(options, answers) {
        if (answers.length !== 0) {
            return [...options].sort((a, b) => answers.indexOf(a.value) - answers.indexOf(b.value));
        }
        return options;
    }
    ngOnDestroy() {
        console.log("destroyed revisit button");
        const currentQuestion = this.itemService.getCurrentQuestion();
        if (currentQuestion && this.previousResponses) {
            currentQuestion.responses = this.previousResponses;
            currentQuestion.showAnswer = false;
        }
        this.showAnswer = false;
    }
}
RevisitButtonComponent.ɵfac = function RevisitButtonComponent_Factory(t) { return new (t || RevisitButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_1__.ItemService)); };
RevisitButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RevisitButtonComponent, selectors: [["app-revisit-button"]], inputs: { questionNumber: "questionNumber" }, decls: 5, vars: 6, consts: [[1, "form-check"], ["triggers", "mouseenter:mouseleave", 1, "p-lg-2", "btn", "btn-sm", "mt-1", 2, "padding", "3px !important", "cursor", "pointer", 3, "ngbTooltip", "ngClass"], ["type", "checkbox", 1, "form-check-input", 2, "margin-right", "5px", 3, "checked", "change"], ["revisitbtn", ""]], template: function RevisitButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RevisitButtonComponent_Template_input_change_2_listener() { return ctx.toggleShowAnswer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbTooltip", ctx.isDisplayAnswerForCurrentQuestion() ? "Hide answer" : "Show answer")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, _r0.checked));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.isDisplayAnswerForCurrentQuestion());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isDisplayAnswerForCurrentQuestion() ? "Hide answer" : "Show answer", " ");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpc2l0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 91359:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/exam-preview/exam-page/choice-matrix/choice-matrix.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChoiceMatrixComponent": () => (/* binding */ ChoiceMatrixComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/item.service */ 17154);
/* harmony import */ var _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/revisit-button/revisit-button.component */ 13205);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);





function ChoiceMatrixComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", option_r2.label, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r2.label, " ");
} }
function ChoiceMatrixComponent_tr_19_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ChoiceMatrixComponent_tr_19_td_3_Template_input_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const option_r7 = restoredCtx.$implicit; const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.optionSelected(option_r7.value, $event, i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    const j_r8 = ctx.index;
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "form-radio-", i_r5, "-", j_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("name", "stem_", i_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", option_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("name", "stem_", i_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r6.getCurrentQuestion().responses[i_r5] === option_r7.value);
} }
function ChoiceMatrixComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ChoiceMatrixComponent_tr_19_td_3_Template, 2, 6, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stem_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", stem_r4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", stem_r4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.getCurrentQuestion().options);
} }
class ChoiceMatrixComponent {
    constructor(itemService) {
        this.itemService = itemService;
        this.currentQuestionNumber = 0;
    }
    ngOnInit() {
        this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
    }
    getCurrentQuestion() {
        return this.itemService.getCurrentQuestion();
    }
    optionSelected(value, event, stem) {
        if (event.target.checked) {
            this.itemService.getCurrentQuestion().responses[stem] = value;
            this.itemService.captureAttemptedQuestionNumber();
        }
        console.log(this.getCurrentQuestion().responses, "responses from choice matrix");
        // this.itemService.captureAttemptedQuestionNumber();
    }
}
ChoiceMatrixComponent.ɵfac = function ChoiceMatrixComponent_Factory(t) { return new (t || ChoiceMatrixComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_0__.ItemService)); };
ChoiceMatrixComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChoiceMatrixComponent, selectors: [["app-choice-matrix"]], decls: 20, vars: 6, consts: [[1, "card", "card-body", 2, "height", "62vh"], [1, "text-primary", "d-flex", "justify-content-between"], [1, "fw-bold", "py-lg-2"], [3, "questionNumber"], [1, "row"], [1, "col-xxl-12", "col-lg-12", "col-md-12", "col-sm-12"], [3, "innerHTML"], [2, "height", "40vh", "overflow-x", "hidden"], [1, "col-xl-12"], [1, "table-responsive"], [1, "table", "table-bordered", "align-middle", "table-nowrap", "mb-0"], ["scope", "col", 3, "innerHTML", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["scope", "col", 3, "innerHTML"], [1, "fw-medium", 3, "innerHTML"], ["type", "radio", 1, "form-check-input", 3, "id", "name", "value", "checked", "change"]], template: function ChoiceMatrixComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-revisit-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ngx-simplebar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ChoiceMatrixComponent_th_17_Template, 2, 2, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ChoiceMatrixComponent_tr_19_Template, 4, 3, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Question ", ctx.currentQuestionNumber + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("questionNumber", ctx.currentQuestionNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.getCurrentQuestion().stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getCurrentQuestion().stimulus, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getCurrentQuestion().options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getCurrentQuestion().stems);
    } }, directives: [_components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_1__.RevisitButtonComponent, simplebar_angular__WEBPACK_IMPORTED_MODULE_3__.SimplebarAngularComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaG9pY2UtbWF0cml4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 95041:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/exam-preview/exam-page/classify-by-matching/classify-by-matching.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassifyByMatchingComponent": () => (/* binding */ ClassifyByMatchingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/item.service */ 17154);
/* harmony import */ var _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/revisit-button/revisit-button.component */ 13205);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);





function ClassifyByMatchingComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 18);
} if (rf & 2) {
    const stem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", stem_r3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function ClassifyByMatchingComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 19);
} }
function ClassifyByMatchingComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragstart", function ClassifyByMatchingComponent_div_19_Template_div_dragstart_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const option_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.onDragStart($event, option_r5); })("dragover", function ClassifyByMatchingComponent_div_19_Template_div_dragover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.onDragOver($event); })("drop", function ClassifyByMatchingComponent_div_19_Template_div_drop_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const option_r5 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.onDrop($event, option_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", option_r5.label, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
class ClassifyByMatchingComponent {
    constructor(itemService) {
        this.itemService = itemService;
        this.currentQuestionNumber = 0;
        this.draggedOption = null;
    }
    ngOnInit() {
        this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
        this.itemService.getCurrentQuestion().options = this.sortOptionsByResponses(this.itemService.getCurrentQuestion().options, this.itemService.getCurrentQuestion().responses);
        // this.itemService.getCurrentQuestion().options[0].label =
        //   this.itemService.getCurrentQuestion().options[0].label =
        //     "<p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem </p><p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlo</p>remloremloremloremloremloremloremloremloremloremloremloremloremloremloremlo<p>remloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>";
        // this.itemService
        //   .getCurrentQuestion()
        //   .options.push(this.itemService.getCurrentQuestion().options[0]);
        // this.itemService
        //   .getCurrentQuestion()
        //   .options.push(this.itemService.getCurrentQuestion().options[1]);
        // this.itemService
        //   .getCurrentQuestion()
        //   .stems.push(this.itemService.getCurrentQuestion().stems[0]);
        // this.itemService
        //   .getCurrentQuestion()
        //   .stems.push(this.itemService.getCurrentQuestion().stems[1]);
    }
    getCurrentQuestion() {
        return this.itemService.getCurrentQuestion();
    }
    onDragStart(event, option) {
        var _a;
        this.draggedOption = option;
        (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text", JSON.stringify(option));
    }
    onDragOver(event) {
        event.preventDefault(); // Necessary to allow dropping
    }
    onDrop(event, targetOption) {
        event.preventDefault();
        if (!this.draggedOption)
            return;
        const options = this.itemService.getCurrentQuestion().options;
        const draggedIndex = options.indexOf(this.draggedOption);
        const targetIndex = options.indexOf(targetOption);
        if (draggedIndex !== -1 && targetIndex !== -1) {
            // Swap the options
            [options[draggedIndex], options[targetIndex]] = [
                options[targetIndex],
                options[draggedIndex],
            ];
        }
        // Update responses based on new order
        this.itemService.getCurrentQuestion().responses = options.map((opt) => opt.value);
        this.itemService.captureAttemptedQuestionNumber();
        this.draggedOption = null;
    }
    sortOptionsByResponses(options, responses) {
        if (responses.length !== 0) {
            return [...options].sort((a, b) => responses.indexOf(a.value) - responses.indexOf(b.value));
        }
        return options;
    }
}
ClassifyByMatchingComponent.ɵfac = function ClassifyByMatchingComponent_Factory(t) { return new (t || ClassifyByMatchingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_0__.ItemService)); };
ClassifyByMatchingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClassifyByMatchingComponent, selectors: [["app-classify-by-matching"]], decls: 20, vars: 7, consts: [[1, "px-3"], [1, "card", "card-body", 2, "height", "62vh"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "mt-2"], [1, "text-primary", "d-flex", "justify-content-between"], [1, "fw-bold", "py-lg-2"], [3, "questionNumber"], [1, "mt-3", 3, "innerHtml"], [1, "fw-normal", "lh-2", "content-box", 3, "innerHtml"], [2, "height", "40vh", "overflow-x", "hidden"], [1, "row", "d-flex", "align-items-stretch", "mt-3"], [1, "col-lg-5", "col-md-4", "col-sm-4", "col-4", "d-flex", "flex-column", "match-height"], ["id", "listOne", 1, "list-group", "scrollable-container"], ["class", "list-group-item flex-grow-1 p-2 overflow-scrollable", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "col-lg-2", "col-md-1", "col-sm-1", "col-1", "d-flex", "flex-column", "align-items-center", "justify-content-between", "separator-container"], ["class", "separator-line", 4, "ngFor", "ngForOf"], ["id", "listTwo", 1, "list-group", "scrollable-container"], ["class", "move list-group-item flex-grow-1 p-2 move-cursor overflow-scrollable", "draggable", "true", 3, "innerHTML", "dragstart", "dragover", "drop", 4, "ngFor", "ngForOf"], [1, "list-group-item", "flex-grow-1", "p-2", "overflow-scrollable", 3, "innerHTML"], [1, "separator-line"], ["draggable", "true", 1, "move", "list-group-item", "flex-grow-1", "p-2", "move-cursor", "overflow-scrollable", 3, "innerHTML", "dragstart", "dragover", "drop"]], template: function ClassifyByMatchingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-revisit-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ngx-simplebar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ClassifyByMatchingComponent_div_14_Template, 1, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ClassifyByMatchingComponent_div_16_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ClassifyByMatchingComponent_div_19_Template, 1, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Question ", ctx.currentQuestionNumber + 1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("questionNumber", ctx.currentQuestionNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().passage_stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getCurrentQuestion().stems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getCurrentQuestion().options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getCurrentQuestion().options);
    } }, directives: [_components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_1__.RevisitButtonComponent, simplebar_angular__WEBPACK_IMPORTED_MODULE_3__.SimplebarAngularComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["@charset \"UTF-8\";\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n}\n\n.col-xl-5[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\n.separator-line[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 2px;\n  background-color: #ddd;\n  margin: 0.5rem 0;\n  margin-top: 4vh;\n}\n\n.separator-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0;\n}\n\n.scrollable-container[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  max-height: 300px;\n  \n  overflow-y: auto;\n  \n  overflow-x: hidden;\n  \n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  align-items: center;\n  min-height: 50px;\n  \n  max-height: 200px;\n  \n  overflow-y: auto;\n  \n  overflow-x: hidden;\n  \n  word-wrap: break-word;\n  flex-grow: 1;\n}\n\n.overflow-scrollable[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  overflow-x: hidden;\n  \n  max-height: 200px;\n  \n}\n\n.move-cursor[_ngcontent-%COMP%] {\n  cursor: move;\n}\n\n@media (max-width: 768px) {\n  .col-xl-2[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LWJ5LW1hdGNoaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQUVGO0FBQ0EsdUNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBRUY7QUFDQSxnQ0FBQTtBQUNBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVGO0FBQ0Esa0RBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBRUY7QUFFQSxvREFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQW1CLG9DQUFBO0VBQ25CLGdCQUFBO0VBQW1CLDhCQUFBO0VBQ25CLGtCQUFBO0VBQW9CLGlDQUFBO0FBSXRCO0FBREEsOERBQUE7QUFDQTtFQUVFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFBa0IseUNBQUE7RUFDbEIsaUJBQUE7RUFBbUIsb0NBQUE7RUFDbkIsZ0JBQUE7RUFBa0Isd0NBQUE7RUFDbEIsa0JBQUE7RUFBb0IsaUNBQUE7RUFDcEIscUJBQUE7RUFDQSxZQUFBO0FBT0Y7QUFKQSxrREFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUFvQixpQ0FBQTtFQUNwQixpQkFBQTtFQUFtQixzQ0FBQTtBQVNyQjtBQU5BLHdDQUFBO0FBQ0E7RUFDRSxZQUFBO0FBU0Y7QUFOQSwyQkFBQTtBQUNBO0VBQ0U7SUFDRSxXQUFBO0VBU0Y7QUFDRiIsImZpbGUiOiJjbGFzc2lmeS1ieS1tYXRjaGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuLyogU3RlbXMgJiBvcHRpb25zIHNob3VsZCBiZSBmbGV4aWJsZSAqL1xuLmNvbC14bC01LCAuY29sLW1kLTUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi8qIFN0eWxpbmcgZm9yIHNlcGFyYXRvciBsaW5lcyAqL1xuLnNlcGFyYXRvci1saW5lIHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIG1hcmdpbi10b3A6IDR2aDtcbn1cblxuLyogTWFrZSBzZXBhcmF0b3IgY29udGFpbmVyIHRha2UgdGhlIGZ1bGwgaGVpZ2h0ICovXG4uc2VwYXJhdG9yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cblxuLyogRW5zdXJlIHRoZSBsaXN0IGNvbnRhaW5lcnMgdGFrZSB0aGUgZnVsbCBoZWlnaHQgKi9cbi5zY3JvbGxhYmxlLWNvbnRhaW5lciB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIC8qIE1heGltdW0gaGVpZ2h0IGJlZm9yZSBzY3JvbGxpbmcgKi9cbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgLyogRW5hYmxlIHZlcnRpY2FsIHNjcm9sbGluZyAqL1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIC8qIFByZXZlbnQgaG9yaXpvbnRhbCBzY3JvbGxpbmcgKi9cbn1cblxuLyogRW5zdXJlIGxpc3QgaXRlbXMgZ3JvdyBpbiBoZWlnaHQgYnV0IHJlbWFpbiB3aXRoaW4gbGltaXRzICovXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgLyogTWluaW11bSBoZWlnaHQgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAvKiBNYXhpbXVtIGhlaWdodCBiZWZvcmUgc2Nyb2xsaW5nICovXG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIC8qIEVuYWJsZSB2ZXJ0aWNhbCBzY3JvbGxpbmcgaWYgbmVlZGVkICovXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgLyogUHJldmVudCBob3Jpem9udGFsIHNjcm9sbGluZyAqL1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLyogU2Nyb2xsIG9ubHkgaWYgY29udGVudCBleGNlZWRzIHRoZSBtYXggaGVpZ2h0ICovXG4ub3ZlcmZsb3ctc2Nyb2xsYWJsZSB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgLyogUHJldmVudCBob3Jpem9udGFsIHNjcm9sbGluZyAqL1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgLyogRW5zdXJlIGl0ZW1zIGRvbuKAmXQgZ3JvdyBlbmRsZXNzbHkgKi9cbn1cblxuLyogQ3Vyc29yIHN0eWxlcyBmb3IgZHJhZ2dhYmxlIG9wdGlvbnMgKi9cbi5tb3ZlLWN1cnNvciB7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLyogUmVzcG9uc2l2ZSBBZGp1c3RtZW50cyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb2wteGwtMiwgLmNvbC1tZC0yIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */", ""] });


/***/ }),

/***/ 98272:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/exam-preview/exam-page/classify-by-ordering/classify-by-ordering.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassifyByOrderingComponent": () => (/* binding */ ClassifyByOrderingComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/item.service */ 17154);
/* harmony import */ var _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/revisit-button/revisit-button.component */ 13205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);






function ClassifyByOrderingComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 14);
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", option_r1.label, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
class ClassifyByOrderingComponent {
    constructor(itemService) {
        this.itemService = itemService;
        this.currentQuestionNumber = 0;
    }
    ngOnInit() {
        this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
        this.itemService.getCurrentQuestion().options = this.sortOptionsByResponses(this.itemService.getCurrentQuestion().options, this.itemService.getCurrentQuestion().responses);
        // this.getOptions();
    }
    getCurrentQuestion() {
        // this.currentQuestion = this.itemService.getCurrentQuestion()
        return this.itemService.getCurrentQuestion();
    }
    drop(event) {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.moveItemInArray)(this.itemService.getCurrentQuestion().options, event.previousIndex, event.currentIndex);
        let responseArray = this.itemService
            .getCurrentQuestion()
            .options.map((option) => {
            return option.value;
        });
        console.log("reponses", responseArray);
        this.itemService.getCurrentQuestion().responses = responseArray;
        this.itemService.captureAttemptedQuestionNumber();
        // console.log(event.currentIndex + "current index");
        // console.log(event.previousIndex + "prviouse index");
        // console.log("options:", this.options);
    }
    // getOptions(): Option[] {
    //   this.options = this.currentQuestion.options;
    //   return this.options;
    // }
    sortOptionsByResponses(options, responses) {
        if (responses.length !== 0) {
            return [...options].sort((a, b) => responses.indexOf(a.value) - responses.indexOf(b.value));
        }
        return options;
    }
}
ClassifyByOrderingComponent.ɵfac = function ClassifyByOrderingComponent_Factory(t) { return new (t || ClassifyByOrderingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_0__.ItemService)); };
ClassifyByOrderingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClassifyByOrderingComponent, selectors: [["app-classify-by-ordering"]], decls: 15, vars: 5, consts: [[1, "px-3"], [1, "card", "card-body", 2, "height", "62vh"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "mt-2"], [1, "text-primary", "d-flex", "justify-content-between"], [1, "fw-bold", "py-lg-2"], [3, "questionNumber"], [1, "mt-3", 3, "innerHtml"], [1, "fw-normal", "lh-2", 2, "/* height", "55vh", "*/\n            /* font-size", "16px", "*/\n            overflow-y", "auto", "max-height", "10vh", 3, "innerHtml"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [2, "margin-bottom", "15%"], [1, "card-body", 2, "overflow-y", "scroll", "max-height", "35vh"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "p-2 w-100 user-select list-group-item move-cursor p-1", "role", "button", "cdkDrag", "", 3, "innerHtml", 4, "ngFor", "ngForOf"], ["role", "button", "cdkDrag", "", 1, "p-2", "w-100", "user-select", "list-group-item", "move-cursor", "p-1", 3, "innerHtml"]], template: function ClassifyByOrderingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-revisit-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function ClassifyByOrderingComponent_Template_div_cdkDropListDropped_13_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ClassifyByOrderingComponent_span_14_Template, 1, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Question ", ctx.currentQuestionNumber + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("questionNumber", ctx.currentQuestionNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().passage_stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getCurrentQuestion().options);
    } }, directives: [_components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_1__.RevisitButtonComponent, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDropList, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDrag], styles: [".foot-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n\n.move-cursor[_ngcontent-%COMP%] {\n  cursor: move;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LWJ5LW9yZGVyaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUM7RUFDRyxZQUFBO0FBQ0oiLCJmaWxlIjoiY2xhc3NpZnktYnktb3JkZXJpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdC1iYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIFxyXG4gfVxyXG4gLm1vdmUtY3Vyc29ye1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gfVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 75594:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/exam-preview/exam-page/cloze-image-with-drag-drop/cloze-image-with-drag-drop.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClozeImageWithDragDropComponent": () => (/* binding */ ClozeImageWithDragDropComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/item.service */ 17154);
/* harmony import */ var _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/revisit-button/revisit-button.component */ 13205);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);





function ClozeImageWithDragDropComponent_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 15, 16);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.getCurrentQuestion().image_data[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ClozeImageWithDragDropComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("drop", function ClozeImageWithDragDropComponent_div_14_Template_div_drop_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const i_r6 = restoredCtx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onDrop($event, i_r6); })("dragover", function ClozeImageWithDragDropComponent_div_14_Template_div_dragover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.allowDrop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", position_r5.x, "%")("top", position_r5.y, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r1.getCurrentQuestion().responses[i_r6], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function ClozeImageWithDragDropComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragstart", function ClozeImageWithDragDropComponent_div_16_Template_div_dragstart_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const distractor_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onDragStart($event, distractor_r10.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const distractor_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", distractor_r10, " ");
} }
function ClozeImageWithDragDropComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragstart", function ClozeImageWithDragDropComponent_div_17_Template_div_dragstart_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const option_r13 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.onDragStart($event, option_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", option_r13.label, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
const _c0 = function () { return []; };
class ClozeImageWithDragDropComponent {
    constructor(itemService) {
        this.itemService = itemService;
        this.currentQuestionNumber = 0;
        this.draggedItem = "";
        this.draggingItem = null;
    }
    ngOnInit() {
        this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
        console.log("hello");
    }
    getCurrentQuestion() {
        return this.itemService.getCurrentQuestion();
    }
    trackByIndex(index, item) {
        return index;
    }
    onDragStart(event, option) {
        var _a;
        (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text", JSON.stringify(option));
    }
    onDrop(event, positionIndex) {
        var _a;
        event.preventDefault();
        const data = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData("text");
        if (data) {
            const option = JSON.parse(data);
            this.getCurrentQuestion().responses[positionIndex] = option.label;
        }
    }
    allowDrop(event) {
        event.preventDefault();
    }
}
ClozeImageWithDragDropComponent.ɵfac = function ClozeImageWithDragDropComponent_Factory(t) { return new (t || ClozeImageWithDragDropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_0__.ItemService)); };
ClozeImageWithDragDropComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClozeImageWithDragDropComponent, selectors: [["app-cloze-image-with-drag-drop"]], decls: 18, vars: 9, consts: [[1, "px-3"], [1, "card", "card-body", "question-card"], [1, ""], [1, "text-primary", "d-flex", "justify-content-between"], [1, "fw-bold", "py-lg-2"], [3, "questionNumber"], [2, "height", "320px", "overflow-x", "hidden"], [1, "row", "pt-3", "pb-3"], [1, "col-lg-12", "col-md-12", "col-sm-12", "align-items-center"], [1, "mt-3", 3, "innerHtml"], [1, "preview-container"], ["class", "preview-image", "alt", "Preview Image", 3, "src", 4, "ngIf"], ["class", "preview-label", 3, "left", "top", "drop", "dragover", 4, "ngFor", "ngForOf"], [1, "example-box-container"], ["class", "example-box", "draggable", "true", 3, "dragstart", 4, "ngFor", "ngForOf"], ["alt", "Preview Image", 1, "preview-image", 3, "src"], ["previewImage", ""], [1, "preview-label", 3, "drop", "dragover"], [1, "pointer"], ["type", "text", 1, "form-control", "form-control-sm", 3, "innerHTML"], ["draggable", "true", 1, "example-box", 3, "dragstart"], [3, "innerHTML"]], template: function ClozeImageWithDragDropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-revisit-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ngx-simplebar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ClozeImageWithDragDropComponent_img_13_Template, 2, 1, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ClozeImageWithDragDropComponent_div_14_Template, 3, 5, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ClozeImageWithDragDropComponent_div_16_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ClozeImageWithDragDropComponent_div_17_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Question ", ctx.currentQuestionNumber + 1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("questionNumber", ctx.currentQuestionNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().passage_stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getCurrentQuestion().image_data);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getCurrentQuestion().response_positions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getCurrentQuestion().options);
    } }, directives: [_components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_1__.RevisitButtonComponent, simplebar_angular__WEBPACK_IMPORTED_MODULE_3__.SimplebarAngularComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: [".preview-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  \n  height: 400px;\n  \n  margin: auto;\n  aspect-ratio: 16/9;\n}\n\n.preview-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.preview-label[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 5px 10px;\n  font-size: 14px;\n  font-weight: bold;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  \n  width: 31px;\n  height: 54px;\n  background-image: url(/assets/images/svg/left-arrow.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3plLWltYWdlLXdpdGgtZHJhZy1kcm9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFBa0IsNEJBQUE7RUFDbEIsYUFBQTtFQUFlLDZCQUFBO0VBQ2YsWUFBQTtFQUdBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUtBLHNCQUFBO0tBQUEsbUJBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUVBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9FO0VBQ0UsY0FBQTtFQUFnQixpQ0FBQTtFQU9oQixXQUFBO0VBQ0EsWUFBQTtFQUtBLHdEQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQWJKOztBQWdCRTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFiSiIsImZpbGUiOiJjbG96ZS1pbWFnZS13aXRoLWRyYWctZHJvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7IC8qIFNhbWUgYXMgdGhlIGltYWdlIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDQwMHB4OyAvKiBTYW1lIGFzIHRoZSBpbWFnZSBoZWlnaHQgKi9cclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgYXNwZWN0LXJhdGlvOiAxNiAvIDk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmV2aWV3LWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIFxyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICAvLyB3aWR0aDogNTUwLjY2NjYyNTk3NjU2MjVweDtcclxuICAgIC8vIGhlaWdodDogIDMzNi4zNjY2Njg3MDExNzE5cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIH1cclxuICBcclxuICAucHJldmlldy1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucG9pbnRlciB7XHJcbiAgICBmbGV4LXNocmluazogMDsgLyogUHJldmVudCBzaHJpbmtpbmcgb2YgcG9pbnRlciAqL1xyXG4gICBcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XHJcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC8vIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIFxyXG4gICAgd2lkdGg6IDMxcHg7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICAvLyBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzYjgyZjY7XHJcbiAgICAvLyBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCAjM2I4MmY2O1xyXG4gICAgLy8gYm9yZGVyLXRvcDogMHB4IHNvbGlkICMzYjgyZjY7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNiODJmNjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9zdmcvbGVmdC1hcnJvdy5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWJveCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 27595:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/exam-preview/exam-page/cloze-image-with-dropdown/cloze-image-with-dropdown.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClozeImageWithDropdownComponent": () => (/* binding */ ClozeImageWithDropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/item.service */ 17154);
/* harmony import */ var _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/revisit-button/revisit-button.component */ 13205);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);






function ClozeImageWithDropdownComponent_div_15_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const response_r5 = ctx.$implicit;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", ctx_r4.getCurrentQuestion().responses[i_r3] && ctx_r4.getCurrentQuestion().responses[i_r3] === response_r5.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", response_r5, " ");
} }
function ClozeImageWithDropdownComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ClozeImageWithDropdownComponent_div_15_option_3_Template, 2, 2, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", position_r2.x, "%")("top", position_r2.y, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.getCurrentQuestion().possible_responses[i_r3].responses);
} }
class ClozeImageWithDropdownComponent {
    constructor(itemService) {
        this.itemService = itemService;
        this.currentQuestionNumber = 0;
    }
    ngOnInit() {
        this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
    }
    getCurrentQuestion() {
        return this.itemService.getCurrentQuestion();
    }
    captureResponses(index, dropBoxValue) {
        this.getCurrentQuestion().responses[index] = dropBoxValue;
        this.itemService.captureAttemptedQuestionNumber();
        console.log(index);
        console.log(this.getCurrentQuestion().responses);
    }
}
ClozeImageWithDropdownComponent.ɵfac = function ClozeImageWithDropdownComponent_Factory(t) { return new (t || ClozeImageWithDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_0__.ItemService)); };
ClozeImageWithDropdownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClozeImageWithDropdownComponent, selectors: [["app-cloze-image-with-dropdown"]], decls: 16, vars: 6, consts: [[1, "card"], [1, "card-body"], [1, "row"], [1, "text-primary", "d-flex", "justify-content-between"], [1, "fw-bold", "py-lg-2"], [3, "questionNumber"], [2, "height", "320px", "overflow-x", "hidden"], [1, "row", "pt-3", "pb-3"], [1, "col-lg-12", "col-md-12", "col-sm-12", "align-items-center"], [1, "mt-3", 3, "innerHtml"], [1, "preview-container"], ["alt", "Preview Image", 1, "preview-image", 3, "src"], ["previewImage", ""], ["class", "preview-label", 3, "left", "top", 4, "ngFor", "ngForOf"], [1, "preview-label"], [1, "pointer"], ["name", "", "id", "", 1, "form-select", "form-select-sm", 2, "width", "100px"], [3, "selected", 4, "ngFor", "ngForOf"], [3, "selected"]], template: function ClozeImageWithDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-revisit-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ngx-simplebar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ClozeImageWithDropdownComponent_div_15_Template, 4, 5, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Question ", ctx.currentQuestionNumber + 1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("questionNumber", ctx.currentQuestionNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().passage_stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.getCurrentQuestion().image_data[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getCurrentQuestion().response_positions);
    } }, directives: [_components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_1__.RevisitButtonComponent, simplebar_angular__WEBPACK_IMPORTED_MODULE_3__.SimplebarAngularComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"]], styles: [".preview-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  \n  height: 400px;\n  \n  margin: auto;\n  aspect-ratio: 16/9;\n}\n\n.preview-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin-left: 24px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.preview-label[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 5px 10px;\n  font-size: 14px;\n  font-weight: bold;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  \n  width: 31px;\n  height: 54px;\n  background-image: url(/assets/images/svg/left-arrow.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3plLWltYWdlLXdpdGgtZHJvcGRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUFrQiw0QkFBQTtFQUNsQixhQUFBO0VBQWUsNkJBQUE7RUFDZixZQUFBO0VBR0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7RUFHQSxzQkFBQTtLQUFBLG1CQUFBO0FBRko7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNRTtFQVlFLGNBQUE7RUFBZ0IsaUNBQUE7RUFPaEIsV0FBQTtFQUNBLFlBQUE7RUFLQSx3REFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUF2QkoiLCJmaWxlIjoiY2xvemUtaW1hZ2Utd2l0aC1kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7IC8qIFNhbWUgYXMgdGhlIGltYWdlIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDQwMHB4OyAvKiBTYW1lIGFzIHRoZSBpbWFnZSBoZWlnaHQgKi9cclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgYXNwZWN0LXJhdGlvOiAxNiAvIDk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmV2aWV3LWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICAvLyB3aWR0aDogNTUwLjY2NjYyNTk3NjU2MjVweDtcclxuICAgIC8vIGhlaWdodDogIDMzNi4zNjY2Njg3MDExNzE5cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIH1cclxuICBcclxuICAucHJldmlldy1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucG9pbnRlciB7XHJcbiAgICAvLyB3aWR0aDogOHB4O1xyXG4gICAgLy8gaGVpZ2h0OiA4cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB0b3A6IDUwJTtcclxuICAgIC8vIGxlZnQ6IDUwJTtcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLy8gei1pbmRleDogMTtcclxuICBcclxuICBcclxuICAgIGZsZXgtc2hyaW5rOiAwOyAvKiBQcmV2ZW50IHNocmlua2luZyBvZiBwb2ludGVyICovXHJcbiAgIFxyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcclxuICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgXHJcbiAgICB3aWR0aDogMzFweDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIC8vIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzNiODJmNjtcclxuICAgIC8vIGJvcmRlci1yaWdodDogMHB4IHNvbGlkICMzYjgyZjY7XHJcbiAgICAvLyBib3JkZXItdG9wOiAwcHggc29saWQgIzNiODJmNjtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2I4MmY2O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3N2Zy9sZWZ0LWFycm93LnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 63157:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/exam-preview/exam-page/cloze-image-with-text/cloze-image-with-text.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClozeImageWithTextComponent": () => (/* binding */ ClozeImageWithTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/item.service */ 17154);
/* harmony import */ var _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/revisit-button/revisit-button.component */ 13205);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);






function ClozeImageWithTextComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ClozeImageWithTextComponent_div_16_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r4.getCurrentQuestion().responses[i_r3] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", position_r2.x, "%")("top", position_r2.y, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.getCurrentQuestion().responses[i_r3]);
} }
class ClozeImageWithTextComponent {
    constructor(itemService) {
        this.itemService = itemService;
        this.currentQuestionNumber = 0;
    }
    ngOnInit() {
        this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
    }
    getCurrentQuestion() {
        return this.itemService.getCurrentQuestion();
    }
}
ClozeImageWithTextComponent.ɵfac = function ClozeImageWithTextComponent_Factory(t) { return new (t || ClozeImageWithTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_0__.ItemService)); };
ClozeImageWithTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClozeImageWithTextComponent, selectors: [["app-cloze-image-with-text"]], decls: 17, vars: 6, consts: [[1, "card"], [1, "card-body"], [1, "text-primary", "d-flex", "justify-content-between"], [1, "fw-bold", "py-lg-2"], [3, "questionNumber"], [1, "row"], [2, "height", "320px", "overflow-x", "hidden"], [1, "row", "pt-3", "pb-3"], [1, "col-lg-12", "col-md-12", "col-sm-12", "align-items-center"], [1, "mt-3", 3, "innerHtml"], [1, "preview-container"], ["alt", "Preview Image", 1, "preview-image", 3, "src"], ["previewImage", ""], ["class", "preview-label", 3, "left", "top", 4, "ngFor", "ngForOf"], [1, "preview-label"], [1, "pointer"], ["type", "text", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"]], template: function ClozeImageWithTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-revisit-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ngx-simplebar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ClozeImageWithTextComponent_div_16_Template, 3, 5, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Question ", ctx.currentQuestionNumber + 1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("questionNumber", ctx.currentQuestionNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().passage_stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.getCurrentQuestion().image_data[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getCurrentQuestion().response_positions);
    } }, directives: [_components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_1__.RevisitButtonComponent, simplebar_angular__WEBPACK_IMPORTED_MODULE_3__.SimplebarAngularComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel], styles: [".preview-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  \n  height: 400px;\n  \n  margin: auto;\n  aspect-ratio: 16/9;\n}\n\n.preview-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.preview-label[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 5px 10px;\n  font-size: 14px;\n  font-weight: bold;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  \n  width: 31px;\n  height: 54px;\n  background-image: url(/assets/images/svg/left-arrow.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3plLWltYWdlLXdpdGgtdGV4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQWtCLDRCQUFBO0VBQ2xCLGFBQUE7RUFBZSw2QkFBQTtFQUNmLFlBQUE7RUFHQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFLQSxzQkFBQTtLQUFBLG1CQUFBO0FBSEo7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFPRTtFQUNFLGNBQUE7RUFBZ0IsaUNBQUE7RUFPaEIsV0FBQTtFQUNBLFlBQUE7RUFLQSx3REFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFiSiIsImZpbGUiOiJjbG96ZS1pbWFnZS13aXRoLXRleHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJldmlldy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4OyAvKiBTYW1lIGFzIHRoZSBpbWFnZSB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiA0MDBweDsgLyogU2FtZSBhcyB0aGUgaW1hZ2UgaGVpZ2h0ICovXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIGFzcGVjdC1yYXRpbzogMTYgLyA5O1xyXG4gIH1cclxuICBcclxuICAucHJldmlldy1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICBcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgLy8gd2lkdGg6IDU1MC42NjY2MjU5NzY1NjI1cHg7XHJcbiAgICAvLyBoZWlnaHQ6ICAzMzYuMzY2NjY4NzAxMTcxOXB4O1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB9XHJcbiAgXHJcbiAgLnByZXZpZXctbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnBvaW50ZXIge1xyXG4gICAgZmxleC1zaHJpbms6IDA7IC8qIFByZXZlbnQgc2hyaW5raW5nIG9mIHBvaW50ZXIgKi9cclxuICAgXHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgLy8gYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBcclxuICAgIHdpZHRoOiAzMXB4O1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgLy8gYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjM2I4MmY2O1xyXG4gICAgLy8gYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgIzNiODJmNjtcclxuICAgIC8vIGJvcmRlci10b3A6IDBweCBzb2xpZCAjM2I4MmY2O1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYjgyZjY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvc3ZnL2xlZnQtYXJyb3cuc3ZnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 46988:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/exam-preview/exam-page/cloze-with-drop-down/cloze-with-drop-down.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClozeWithDropDownComponent": () => (/* binding */ ClozeWithDropDownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/item.service */ 17154);
/* harmony import */ var _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/revisit-button/revisit-button.component */ 13205);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);






function ClozeWithDropDownComponent_span_11_select_3_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const response_r6 = ctx.$implicit;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", ctx_r5.currentQuestion.responses[i_r2] && ctx_r5.currentQuestion.responses[i_r2].trim() === response_r6.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", response_r6, " ");
} }
function ClozeWithDropDownComponent_span_11_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ClozeWithDropDownComponent_span_11_select_3_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.captureResponses(i_r2, _r4.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Select answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ClozeWithDropDownComponent_span_11_select_3_option_4_Template, 2, 2, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.currentQuestion.possible_responses[i_r2].responses);
} }
function ClozeWithDropDownComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ClozeWithDropDownComponent_span_11_select_3_Template, 5, 1, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", item_r1.text.replaceAll("<p>", "").replaceAll("</p>", ""), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.dropBox == true);
} }
class ClozeWithDropDownComponent {
    constructor(itemService) {
        this.itemService = itemService;
        this.displaySplit = false;
        this.clozeRenderArray = [];
        this.extractedTexts = [];
        this.expectedCloze = [];
        this.totalDropBoxes = 0;
        this.currentQuestionNumber = 0;
    }
    ngOnInit() {
        this.removePreviousCloze();
        this.setCurrentQuestion();
        this.checkCloze(this.expectedCloze);
        this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
        if (this.itemService.getCurrentQuestion().responses.length == 0) {
            this.currentQuestion.responses = new Array(this.totalDropBoxes);
            console.log(this.totalDropBoxes + "Dropboxes");
        }
        console.log(this.currentQuestion);
        // this.addOptions(this.clozeRenderArray, this.extractedOptions);
    }
    setCurrentQuestion() {
        this.currentQuestion = this.itemService.getCurrentQuestion();
        this.expectedCloze.push(this.itemService.getCurrentQuestion());
    }
    checkCloze(expectedCloze) {
        expectedCloze.forEach((element) => {
            this.extractedTexts = element.stimulus.split("{{response}}");
            let totalTextBoxes = this.renderCloze(this.extractedTexts);
            // this.currentQuestion.answers = new Array<string>(totalTextBoxes);
        });
    }
    removePreviousCloze() {
        this.expectedCloze = [];
        this.clozeRenderArray = [];
    }
    renderCloze(extractedTexts) {
        this.totalDropBoxes = 0;
        extractedTexts.forEach((element, index) => {
            // dont add textbox to the last text
            if (index == this.extractedTexts.length - 1) {
                let clozeRender = { text: element, dropBox: false, index: index };
                this.clozeRenderArray.push(clozeRender);
            }
            else {
                let clozeRender = { text: element, dropBox: true, index: index };
                this.clozeRenderArray.push(clozeRender);
                ++this.totalDropBoxes;
            }
        });
        return this.totalDropBoxes;
    }
    // addOptions(clozeRenderArray: Array<any>, extractedOptions: Array<any>) {
    //   for (let i = 0; i < clozeRenderArray.length; i++) {
    //     for (let j = 0; j < extractedOptions.length; j++) {
    //       clozeRenderArray[j].possibleResponse = extractedOptions[j];
    //     }
    //   }
    // }
    captureResponses(index, dropBoxValue) {
        this.currentQuestion.responses[index] = dropBoxValue;
        this.itemService.captureAttemptedQuestionNumber();
        console.log(index);
        console.log(this.currentQuestion.responses);
    }
    // without trackBy, component will destroy and recreate DOM elements on every update.
    trackByIndex(index, item) {
        return index; //  return a unique identifier for the item
    }
}
ClozeWithDropDownComponent.ɵfac = function ClozeWithDropDownComponent_Factory(t) { return new (t || ClozeWithDropDownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_0__.ItemService)); };
ClozeWithDropDownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClozeWithDropDownComponent, selectors: [["app-cloze-with-drop-down"]], decls: 12, vars: 4, consts: [[1, "px-3"], [1, "card", "card-body", "question-card", 2, "height", "62vh"], [1, "text-primary", "d-flex", "justify-content-between"], [1, "fw-bold"], [3, "questionNumber"], [2, "height", "420px", "overflow-x", "hidden"], [1, "row", "mt-3"], [1, "col", "d-flex"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "mt-3", 3, "innerHtml"], ["class", "fw-normal", 4, "ngFor", "ngForOf"], [1, "fw-normal"], [3, "innerHtml"], ["class", "form-select-sm mt-0 m-2", "aria-label", ".form-select-sm", 3, "change", 4, "ngIf"], ["aria-label", ".form-select-sm", 1, "form-select-sm", "mt-0", "m-2", 3, "change"], ["dropBoxRef", ""], ["selected", "", "disabled", ""], [3, "selected", 4, "ngFor", "ngForOf"], [3, "selected"]], template: function ClozeWithDropDownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-revisit-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ngx-simplebar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ClozeWithDropDownComponent_span_11_Template, 4, 2, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Question ", ctx.currentQuestionNumber + 1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("questionNumber", ctx.currentQuestionNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.currentQuestion.passage_stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.clozeRenderArray);
    } }, directives: [_components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_1__.RevisitButtonComponent, simplebar_angular__WEBPACK_IMPORTED_MODULE_3__.SimplebarAngularComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"]], styles: [".foot-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3plLXdpdGgtZHJvcC1kb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoiY2xvemUtd2l0aC1kcm9wLWRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdC1iYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiB9Il19 */"] });


/***/ }),

/***/ 87295:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/exam-preview/exam-page/cloze-with-text/cloze-with-text.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClozeWithTextComponent": () => (/* binding */ ClozeWithTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/item.service */ 17154);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/revisit-button/revisit-button.component */ 13205);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);







function ClozeWithTextComponent_span_11_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function ClozeWithTextComponent_span_11_input_2_Template_input_keyup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.captureResponses(i_r2, _r4.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.getCurrentQuestion().responses[i_r2]);
} }
function ClozeWithTextComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ClozeWithTextComponent_span_11_input_2_Template, 2, 1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", item_r1.text.replaceAll("<p>", "").replaceAll("</p>", ""), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.textBox == true);
} }
class ClozeWithTextComponent {
    constructor(itemService, notifierService) {
        this.itemService = itemService;
        this.notifierService = notifierService;
        // currentQuestion: ICandidateItem;
        this.displaySplit = false;
        this.clozeRenderArray = [];
        this.extractedTexts = [];
        this.expectedCloze = [];
        this.totalTextBoxes = 0;
        this.currentQuestionNumber = 0;
    }
    // @ViewChildren(NgModel) textBoxRefList: QueryList<NgModel>;
    ngOnInit() {
        this.removePreviousCloze();
        // this.setCurrentQuestion();
        this.expectedCloze.push(this.itemService.getCurrentQuestion());
        this.checkCloze(this.expectedCloze);
        this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
        // console.log(this.currentQuestion);
        // let totalTextBoxes =
        if (this.itemService.getCurrentQuestion().responses.length == 0) {
            this.itemService.getCurrentQuestion().responses = new Array(this.totalTextBoxes).fill('');
            console.log(this.getCurrentQuestion(), "for clozetext");
            console.log(this.totalTextBoxes + "textboxes");
        }
    }
    getCurrentQuestion() {
        return this.itemService.getCurrentQuestion();
    }
    removePreviousCloze() {
        this.expectedCloze = [];
        this.clozeRenderArray = [];
    }
    checkCloze(expectedCloze) {
        expectedCloze.forEach((element) => {
            this.extractedTexts = element.stimulus.split("{{response}}");
            let totalTextBoxes = this.renderCloze(this.extractedTexts);
            // this.currentQuestion.answers = new Array<string>(totalTextBoxes);
            // console.log(totalTextBoxes + "textboxes")
        });
    }
    renderCloze(extractedTexts) {
        this.totalTextBoxes = 0;
        extractedTexts.forEach((element, index) => {
            // dont add textbox to the last text
            if (index == this.extractedTexts.length - 1) {
                let clozeRender = { text: element, textBox: false, index: index };
                this.clozeRenderArray.push(clozeRender);
            }
            else {
                let clozeRender = { text: element, textBox: true, index: index };
                this.clozeRenderArray.push(clozeRender);
                ++this.totalTextBoxes;
            }
        });
        return this.totalTextBoxes;
    }
    captureResponses(index, textBoxValue) {
        const answerSet = [];
        /* this.textBoxRefList.forEach((element) => {
          answerSet.push(element.value);
          this.currentQuestion.answers = answerSet;
        });*/
        this.itemService.getCurrentQuestion().responses[index] = textBoxValue;
        // console.log(index);
        this.itemService.captureAttemptedQuestionNumber();
        console.log(this.itemService.getCurrentQuestion());
    }
    // Conditional prevention of copy action based on the fetched data
    onCopy(event) {
        if ((this.getCurrentQuestion().allow_copy === false)) {
            this.notifierService.notify("warning", 'you are not allowed to copy');
            event.preventDefault();
        }
    }
    // Conditional prevention of cut action based on the fetched data
    onCut(event) {
        if (this.getCurrentQuestion().allow_cut === false) {
            this.notifierService.notify("warning", 'you are not allowed to cut');
            event.preventDefault();
        }
    }
    // Conditional prevention of paste action based on the fetched data
    onPaste(event) {
        if ((this.getCurrentQuestion().allow_paste === false)) {
            this.notifierService.notify("warning", 'you are not allowed to paste');
            event.preventDefault();
        }
    }
}
ClozeWithTextComponent.ɵfac = function ClozeWithTextComponent_Factory(t) { return new (t || ClozeWithTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_0__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_3__.NotifierService)); };
ClozeWithTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClozeWithTextComponent, selectors: [["app-cloze-with-text"]], hostBindings: function ClozeWithTextComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("copy", function ClozeWithTextComponent_copy_HostBindingHandler($event) { return ctx.onCopy($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"])("cut", function ClozeWithTextComponent_cut_HostBindingHandler($event) { return ctx.onCut($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"])("paste", function ClozeWithTextComponent_paste_HostBindingHandler($event) { return ctx.onPaste($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, decls: 12, vars: 4, consts: [[1, "px-3"], [1, "card", "card-body", "question-card", 2, "height", "62vh"], [1, ""], [1, "text-primary", "d-flex", "justify-content-between"], [1, "fw-bold", "py-lg-2"], [3, "questionNumber"], [2, "height", "420px", "overflow-x", "hidden"], [1, "row", "pt-3", "pb-3"], [1, "col-lg-12", "col-md-12", "col-sm-12", "align-items-center"], [1, "mt-3", 3, "innerHtml"], ["class", "fw-normal", 4, "ngFor", "ngForOf"], [1, "fw-normal"], [3, "innerHtml"], ["class", "mb-2 text-secondary", "type", "text", "style", "border: none; border-bottom: 1px dashed rgb(173, 173, 173)", 3, "ngModel", "keyup", 4, "ngIf"], ["type", "text", 1, "mb-2", "text-secondary", 2, "border", "none", "border-bottom", "1px dashed rgb(173, 173, 173)", 3, "ngModel", "keyup"], ["boxRef", ""]], template: function ClozeWithTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-revisit-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ngx-simplebar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ClozeWithTextComponent_span_11_Template, 3, 2, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Question ", ctx.currentQuestionNumber + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("questionNumber", ctx.currentQuestionNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().passage_stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.clozeRenderArray);
    } }, directives: [_components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_1__.RevisitButtonComponent, simplebar_angular__WEBPACK_IMPORTED_MODULE_4__.SimplebarAngularComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], styles: [".foot-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3plLXdpdGgtdGV4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6ImNsb3plLXdpdGgtdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290LWJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgXHJcbiB9Il19 */"] });


/***/ }),

/***/ 33434:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/exam-preview/exam-page/essay-with-rich-text/essay-with-rich-text.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EssayWithRichTextComponent": () => (/* binding */ EssayWithRichTextComponent)
/* harmony export */ });
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 28155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/item.service */ 17154);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _components_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/calculator/calculator.component */ 67495);
/* harmony import */ var _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/revisit-button/revisit-button.component */ 13205);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);









const _c0 = "undo redo | formatselect | bold italic backcolor | \n                                    alignleft aligncenter alignright alignjustify | \n                                    bullist numlist outdent indent | removeformat | help";
const _c1 = function () { return { menubar: true, base_url: "/tinymce", suffix: ".min", height: "300", toolbar: _c0 }; };
_tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__.EditorComponent;
class EssayWithRichTextComponent {
    constructor(itemService, notifierService) {
        this.itemService = itemService;
        this.notifierService = notifierService;
        // currentQuestion: ICandidateItem;
        this.currentQuestionNumber = 0;
    }
    ngOnInit() {
        // this.setCurrentQuestion();
        this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
        tinymce.init({
            selector: '#mytextarea',
            setup: (editor) => {
                // Listen for copy, cut, and paste events in TinyMCE editor
                editor.on('copy', (event) => this.handleEditorEvent(event, 'copy'));
                editor.on('cut', (event) => this.handleEditorEvent(event, 'cut'));
                editor.on('paste', (event) => this.handleEditorEvent(event, 'paste'));
            }
        });
    }
    getCurrentQuestion() {
        return this.itemService.getCurrentQuestion();
    }
    addToRevisit(questionNumber) {
        this.itemService.captureQuestionNumberForRevisit(questionNumber);
    }
    // captureResponse(event:any){
    //   // console.log()
    //   this.itemService.captureAttemptedQuestionNumber()
    // }
    handleEditorEvent(event, action) {
        if (this.getCurrentQuestion()) {
            switch (action) {
                case 'copy':
                    if (this.getCurrentQuestion().allow_copy === false) {
                        this.notifierService.notify("warning", 'you are not allowed to copy');
                        event.preventDefault();
                    }
                    break;
                case 'cut':
                    if (this.getCurrentQuestion().allow_cut === false) {
                        this.notifierService.notify("warning", 'you are not allowed to cut');
                        event.preventDefault();
                    }
                    break;
                case 'paste':
                    if (this.getCurrentQuestion().allow_paste === false) {
                        this.notifierService.notify("warning", 'you are not allowed to paste');
                        event.preventDefault();
                    }
                    break;
            }
        }
    }
}
EssayWithRichTextComponent.ɵfac = function EssayWithRichTextComponent_Factory(t) { return new (t || EssayWithRichTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_0__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_5__.NotifierService)); };
EssayWithRichTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EssayWithRichTextComponent, selectors: [["app-essay-with-rich-text"]], decls: 30, vars: 7, consts: [[1, "px-3"], [1, "d-flex", "row"], [1, "col-lg-6"], [1, "card", "card-body", "question-card", "py-1", 2, "height", "62vh"], [1, "text-primary", "d-flex", "justify-content-between"], [1, "fw-bold", "py-lg-2"], [2, "height", "40vh", "overflow-x", "hidden"], [1, "mt-3", "card-body", 3, "innerHtml"], [1, "d-flex", "justify-content-end", "my-3"], [1, "col-lg-6", 2, "/* height", "440px"], [1, "card", 2, "height", "62vh"], [1, "card-body"], [1, ""], [1, "d-flex", "justify-content-between"], [1, "card-title", "mb-4", "text-start", "text-primary"], [3, "questionNumber"], [2, "height", "45vh", "overflow-x", "hidden"], [1, "row"], [1, "col-lg-12"], [3, "init", "ngModel", "ngModelChange"], [1, "text-end", 2, "font-size", "12px"]], template: function EssayWithRichTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-simplebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ngx-simplebar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "app-calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "app-revisit-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ngx-simplebar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "editor", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EssayWithRichTextComponent_Template_editor_ngModelChange_27_listener($event) { return (ctx.getCurrentQuestion().responses[0] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Total Words: 0 | Word Limit: 0 Words ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Question ", ctx.currentQuestionNumber + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().passage_stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("questionNumber", ctx.currentQuestionNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("init", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c1))("ngModel", ctx.getCurrentQuestion().responses[0]);
    } }, directives: [simplebar_angular__WEBPACK_IMPORTED_MODULE_6__.SimplebarAngularComponent, _components_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__.CalculatorComponent, _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_2__.RevisitButtonComponent, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__.EditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel], styles: ["[_nghost-%COMP%]     .ck-editor__editable_inline {\n  height: 37vh !important;\n}\n\n.foot-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzc2F5LXdpdGgtcmljaC10ZXh0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1EsdUJBQUE7QUFDUjs7QUFFQTtFQUNRLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNSIiwiZmlsZSI6ImVzc2F5LXdpdGgtcmljaC10ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzN3ZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb290LWJhciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgIFxyXG4gICAgIH0iXX0= */"] });


/***/ }),

/***/ 43566:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/exam-preview/exam-page/essay-with-short-text/essay-with-short-text.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EssayWithShortTextComponent": () => (/* binding */ EssayWithShortTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/item.service */ 17154);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _components_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/calculator/calculator.component */ 67495);
/* harmony import */ var _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/revisit-button/revisit-button.component */ 13205);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);







class EssayWithShortTextComponent {
    constructor(itemService, notifierService) {
        this.itemService = itemService;
        this.notifierService = notifierService;
        // currentQuestion: ICandidateItem;
        this.displaySplit = true;
        this.currentQuestionNumber = 0;
    }
    ngOnInit() {
        // this.setCurrentQuestion();
        this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
    }
    getCurrentQuestion() {
        return this.itemService.getCurrentQuestion();
    }
    updateAttemptedQuestions() {
        this.itemService.captureAttemptedQuestionNumber();
    }
    // Conditional prevention of copy action based on the fetched data
    onCopy(event) {
        if ((this.getCurrentQuestion().allow_copy === false)) {
            this.notifierService.notify("warning", 'you are not allowed to copy');
            event.preventDefault();
        }
    }
    // Conditional prevention of cut action based on the fetched data
    onCut(event) {
        if (this.getCurrentQuestion().allow_cut === false) {
            this.notifierService.notify("warning", 'you are not allowed to cut');
            event.preventDefault();
        }
    }
    // Conditional prevention of paste action based on the fetched data
    onPaste(event) {
        if ((this.getCurrentQuestion().allow_paste === false)) {
            this.notifierService.notify("warning", 'you are not allowed to paste');
            event.preventDefault();
        }
    }
}
EssayWithShortTextComponent.ɵfac = function EssayWithShortTextComponent_Factory(t) { return new (t || EssayWithShortTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_0__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_4__.NotifierService)); };
EssayWithShortTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EssayWithShortTextComponent, selectors: [["app-essay-with-short-text"]], hostBindings: function EssayWithShortTextComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("copy", function EssayWithShortTextComponent_copy_HostBindingHandler($event) { return ctx.onCopy($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"])("cut", function EssayWithShortTextComponent_cut_HostBindingHandler($event) { return ctx.onCut($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"])("paste", function EssayWithShortTextComponent_paste_HostBindingHandler($event) { return ctx.onPaste($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
    } }, decls: 32, vars: 6, consts: [[1, "px-3"], [1, "d-flex", "row"], [1, "col-lg-6"], [1, "card", "card-body", "question-card", "py-1", 2, "height", "62vh"], [1, "text-primary", "d-flex", "justify-content-between"], [1, "fw-bold", "py-lg-2"], [2, "height", "45vh", "overflow-x", "hidden"], [1, "mt-3", 3, "innerHtml"], [1, "d-flex", "justify-content-end", "my-3"], [1, "card", 2, "height", "62vh"], [1, "card-body"], [1, "d-flex", "justify-content-between"], [1, "card-title", "mb-4", "text-start", "text-primary"], [3, "questionNumber"], [1, ""], [2, "height", "50vh", "overflow-x", "hidden"], [1, "row"], [1, "col-lg-12"], [1, "p-2"], ["rows", "12", 1, "form-control", 2, "width", "100%", 3, "ngModel", "maxlength", "ngModelChange", "keyup"], [1, "text-end", 2, "font-size", "12px"]], template: function EssayWithShortTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-simplebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ngx-simplebar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "app-calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "app-revisit-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ngx-simplebar", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EssayWithShortTextComponent_Template_textarea_ngModelChange_28_listener($event) { return (ctx.getCurrentQuestion().responses[0] = $event); })("keyup", function EssayWithShortTextComponent_Template_textarea_keyup_28_listener() { return ctx.updateAttemptedQuestions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Total Words: 0 | Word Limit: 0 Words ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Question ", ctx.currentQuestionNumber + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().passage_stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("questionNumber", ctx.currentQuestionNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("maxlength", ctx.getCurrentQuestion().max_words ? ctx.getCurrentQuestion().max_words : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.getCurrentQuestion().responses[0]);
    } }, directives: [simplebar_angular__WEBPACK_IMPORTED_MODULE_5__.SimplebarAngularComponent, _components_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__.CalculatorComponent, _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_2__.RevisitButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator], styles: [".foot-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzc2F5LXdpdGgtc2hvcnQtdGV4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6ImVzc2F5LXdpdGgtc2hvcnQtdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290LWJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgXHJcbiB9Il19 */"] });


/***/ }),

/***/ 87339:
/*!*********************************************************************!*\
  !*** ./src/app/pages/exam-preview/exam-page/exam-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamPageComponent": () => (/* binding */ ExamPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 45398);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/enum/itemTypes */ 86159);
/* harmony import */ var _true_or_false_true_or_false_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./true-or-false/true-or-false.component */ 27474);
/* harmony import */ var _standard_choice_standard_choice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./standard-choice/standard-choice.component */ 81748);
/* harmony import */ var _multiple_response_multiple_response_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multiple-response/multiple-response.component */ 33505);
/* harmony import */ var _cloze_with_drop_down_cloze_with_drop_down_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cloze-with-drop-down/cloze-with-drop-down.component */ 46988);
/* harmony import */ var _cloze_with_text_cloze_with_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cloze-with-text/cloze-with-text.component */ 87295);
/* harmony import */ var _essay_with_rich_text_essay_with_rich_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./essay-with-rich-text/essay-with-rich-text.component */ 33434);
/* harmony import */ var _essay_with_short_text_essay_with_short_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./essay-with-short-text/essay-with-short-text.component */ 43566);
/* harmony import */ var _classify_by_matching_classify_by_matching_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./classify-by-matching/classify-by-matching.component */ 95041);
/* harmony import */ var _classify_by_ordering_classify_by_ordering_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./classify-by-ordering/classify-by-ordering.component */ 98272);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _yes_or_no_yes_or_no_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./yes-or-no/yes-or-no.component */ 50446);
/* harmony import */ var src_app_shared_enum_assessmentFonts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/assessmentFonts */ 37902);
/* harmony import */ var src_app_shared_enum_blockTypes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/blockTypes */ 92413);
/* harmony import */ var _choice_matrix_choice_matrix_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./choice-matrix/choice-matrix.component */ 91359);
/* harmony import */ var _cloze_image_with_drag_drop_cloze_image_with_drag_drop_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cloze-image-with-drag-drop/cloze-image-with-drag-drop.component */ 75594);
/* harmony import */ var _cloze_image_with_dropdown_cloze_image_with_dropdown_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cloze-image-with-dropdown/cloze-image-with-dropdown.component */ 27595);
/* harmony import */ var _cloze_image_with_text_cloze_image_with_text_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cloze-image-with-text/cloze-image-with-text.component */ 63157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/item.service */ 17154);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _services_candidate_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/candidate.service */ 88291);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _services_exam_preview_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/exam-preview.service */ 77760);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/paginator */ 21066);














































const _c0 = ["paginator"];
function ExamPageComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Loading questions...");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
} }
function ExamPageComponent_div_1_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ExamPageComponent_div_1_ng_container_35_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r25); const i_r23 = restoredCtx.index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return ctx_r24.navigateTo(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const questionNumber_r22 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](ctx_r6.getClassObject(questionNumber_r22));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", questionNumber_r22, " ");
} }
function ExamPageComponent_div_1_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r26 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", section_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("selected", section_r26.name.toLowerCase() === ctx_r8.currentSectionName.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", section_r26.name, " ");
} }
function ExamPageComponent_div_1_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r28 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", section_r28.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("selected", section_r28.name.toLowerCase() === ctx_r10.currentSectionName.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", section_r28.name, " ");
} }
function ExamPageComponent_div_1_ng_container_55_app_true_or_false_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-true-or-false");
} }
function ExamPageComponent_div_1_ng_container_55_app_yes_or_no_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-yes-or-no");
} }
function ExamPageComponent_div_1_ng_container_55_app_standard_choice_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-standard-choice");
} }
function ExamPageComponent_div_1_ng_container_55_app_multiple_response_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-multiple-response");
} }
function ExamPageComponent_div_1_ng_container_55_app_essay_with_short_text_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-essay-with-short-text");
} }
function ExamPageComponent_div_1_ng_container_55_app_essay_with_rich_text_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-essay-with-rich-text");
} }
function ExamPageComponent_div_1_ng_container_55_app_classify_by_ordering_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-classify-by-ordering");
} }
function ExamPageComponent_div_1_ng_container_55_app_classify_by_matching_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-classify-by-matching");
} }
function ExamPageComponent_div_1_ng_container_55_app_cloze_with_text_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-cloze-with-text");
} }
function ExamPageComponent_div_1_ng_container_55_app_cloze_with_drop_down_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-cloze-with-drop-down");
} }
function ExamPageComponent_div_1_ng_container_55_app_cloze_image_with_text_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-cloze-image-with-text");
} }
function ExamPageComponent_div_1_ng_container_55_app_cloze_image_with_dropdown_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-cloze-image-with-dropdown");
} }
function ExamPageComponent_div_1_ng_container_55_app_cloze_image_with_drag_drop_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-cloze-image-with-drag-drop");
} }
function ExamPageComponent_div_1_ng_container_55_app_choice_matrix_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-choice-matrix");
} }
function ExamPageComponent_div_1_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ExamPageComponent_div_1_ng_container_55_app_true_or_false_1_Template, 1, 0, "app-true-or-false", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ExamPageComponent_div_1_ng_container_55_app_yes_or_no_2_Template, 1, 0, "app-yes-or-no", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ExamPageComponent_div_1_ng_container_55_app_standard_choice_3_Template, 1, 0, "app-standard-choice", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ExamPageComponent_div_1_ng_container_55_app_multiple_response_4_Template, 1, 0, "app-multiple-response", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ExamPageComponent_div_1_ng_container_55_app_essay_with_short_text_5_Template, 1, 0, "app-essay-with-short-text", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ExamPageComponent_div_1_ng_container_55_app_essay_with_rich_text_6_Template, 1, 0, "app-essay-with-rich-text", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, ExamPageComponent_div_1_ng_container_55_app_classify_by_ordering_7_Template, 1, 0, "app-classify-by-ordering", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, ExamPageComponent_div_1_ng_container_55_app_classify_by_matching_8_Template, 1, 0, "app-classify-by-matching", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, ExamPageComponent_div_1_ng_container_55_app_cloze_with_text_9_Template, 1, 0, "app-cloze-with-text", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, ExamPageComponent_div_1_ng_container_55_app_cloze_with_drop_down_10_Template, 1, 0, "app-cloze-with-drop-down", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, ExamPageComponent_div_1_ng_container_55_app_cloze_image_with_text_11_Template, 1, 0, "app-cloze-image-with-text", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, ExamPageComponent_div_1_ng_container_55_app_cloze_image_with_dropdown_12_Template, 1, 0, "app-cloze-image-with-dropdown", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](13, ExamPageComponent_div_1_ng_container_55_app_cloze_image_with_drag_drop_13_Template, 1, 0, "app-cloze-image-with-drag-drop", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, ExamPageComponent_div_1_ng_container_55_app_choice_matrix_14_Template, 1, 0, "app-choice-matrix", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r11.currentQuestion.item_type === ctx_r11.itemTypes.TRUE_FALSE);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r11.currentQuestion.item_type === ctx_r11.itemTypes.YES_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r11.currentQuestion.item_type === ctx_r11.itemTypes.MCQ);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r11.currentQuestion.item_type === ctx_r11.itemTypes.MRQ);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r11.currentQuestion.item_type === ctx_r11.itemTypes.SHORT_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r11.currentQuestion.item_type === ctx_r11.itemTypes.ESSAY_RICH_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r11.currentQuestion.item_type === ctx_r11.itemTypes.ORDER_LIST);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r11.currentQuestion.item_type === ctx_r11.itemTypes.ASSOCIATION);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r11.currentQuestion.item_type === ctx_r11.itemTypes.CLOZE_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r11.currentQuestion.item_type === ctx_r11.itemTypes.CLOZE_DROPDOWN);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r11.currentQuestion.item_type === ctx_r11.itemTypes.CLOZE_TEXT_IMAGE);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r11.currentQuestion.item_type === ctx_r11.itemTypes.CLOZE_DROPDOWN_IMAGE);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r11.currentQuestion.item_type === ctx_r11.itemTypes.IMAGE_DRAG_AND_DROP);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r11.currentQuestion.item_type === ctx_r11.itemTypes.CHOICE_MATRIX);
} }
function ExamPageComponent_div_1_ng_container_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
} }
function ExamPageComponent_div_1_ng_container_60_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ExamPageComponent_div_1_ng_container_60_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return ctx_r44.prevSection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " Previous Section ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ExamPageComponent_div_1_ng_container_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ExamPageComponent_div_1_ng_container_60_button_1_Template, 2, 0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r13.isOnfirstQuestionOfSection());
} }
function ExamPageComponent_div_1_button_61_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ExamPageComponent_div_1_button_61_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return ctx_r46.previousQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r14.currentQuestionNumber === 0);
} }
function ExamPageComponent_div_1_button_67_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ExamPageComponent_div_1_button_67_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return ctx_r48.nextQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ExamPageComponent_div_1_button_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ExamPageComponent_div_1_ng_container_69_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ExamPageComponent_div_1_ng_container_69_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return ctx_r52.gotoNextSection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " Next Section ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ExamPageComponent_div_1_ng_container_69_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ExamPageComponent_div_1_ng_container_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ExamPageComponent_div_1_ng_container_69_button_1_Template, 2, 0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ExamPageComponent_div_1_ng_container_69_button_2_Template, 2, 0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r18.currentQuestionNumber + 1 === ctx_r18.itemsLength && !ctx_r18.onLastSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r18.currentQuestionNumber + 1 === ctx_r18.itemsLength && ctx_r18.onLastSection);
} }
function ExamPageComponent_div_1_ng_template_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", ctx_r20.getSectionInstruction(), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
} }
function ExamPageComponent_div_1_ng_template_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", ctx_r21.getExamInstruction(), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
} }
const _c1 = function (a0, a1) { return { "btn-primary": a0, "btn-outline-primary": a1 }; };
function ExamPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, " Aa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19, "Font Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ExamPageComponent_div_1_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r54.setFontSize(ctx_r54.fontsEnum.SMALL); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](24, "Aa");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ExamPageComponent_div_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r55); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r56.setFontSize(ctx_r56.fontsEnum.NORMAL); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](27, "Aa");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ExamPageComponent_div_1_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r55); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r57.setFontSize(ctx_r57.fontsEnum.LARGE); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](30, "Aa");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](32, "ngx-simplebar", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](35, ExamPageComponent_div_1_ng_container_35_Template, 3, 3, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](36, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](38, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](40, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](41, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](42, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](43, "select", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function ExamPageComponent_div_1_Template_select_change_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r55); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](44); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r58.getCandidateDataForSection(ctx_r58.assessmentId, _r7.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](45, ExamPageComponent_div_1_option_45_Template, 2, 3, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](46, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](47, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](48, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](49, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](50, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](51, "select", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function ExamPageComponent_div_1_Template_select_change_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r55); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](52); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r59.getCandidateDataForSection(ctx_r59.assessmentId, _r9.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](53, ExamPageComponent_div_1_option_53_Template, 2, 3, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](54, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](55, ExamPageComponent_div_1_ng_container_55_Template, 15, 14, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](56, ExamPageComponent_div_1_ng_container_56_Template, 5, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](57, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](58, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](59, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](60, ExamPageComponent_div_1_ng_container_60_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](61, ExamPageComponent_div_1_button_61_Template, 2, 1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](62, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](63, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](64, "p-paginator", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ExamPageComponent_div_1_Template_p_paginator_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r55); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r60.onPageLinkClick(); })("onPageChange", function ExamPageComponent_div_1_Template_p_paginator_onPageChange_64_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r55); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r61.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](66, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](67, ExamPageComponent_div_1_button_67_Template, 2, 0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](68, ExamPageComponent_div_1_button_68_Template, 2, 0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](69, ExamPageComponent_div_1_ng_container_69_Template, 3, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](70, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](71, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](72, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](73, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](74, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](75, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](76, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](77, "h5", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](78, "Instruction");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](79, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](80, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ExamPageComponent_div_1_Template_button_click_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r55); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r62.hideSideBar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](81, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](82, "ngx-simplebar", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](83, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](84, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](85, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](86, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](87, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](88, "ul", 73, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](90, "li", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](91, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](93, ExamPageComponent_div_1_ng_template_93_Template, 3, 1, "ng-template", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](94, "li", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](95, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](96, " Exam Instruction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](97, ExamPageComponent_div_1_ng_template_97_Template, 3, 1, "ng-template", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](98, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](99, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](89);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵstyleMapInterpolate1"]("font-size: ", ctx_r1.fontSize, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r1.assessmentName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngbTooltip", "Font settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](26, _c1, ctx_r1.fontSize === "12px!important", ctx_r1.fontSize !== "12px!important"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](29, _c1, ctx_r1.fontSize === "16px!important", ctx_r1.fontSize !== "16px!important"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](32, _c1, ctx_r1.fontSize === "20px!important", ctx_r1.fontSize !== "20px!important"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.questionNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.sections);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.sections);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.loadingSectionQuestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.loadingSectionQuestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.sections.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isOnfirstQuestionOfSection());
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pageLinkSize", 3)("rows", 1)("totalRecords", ctx_r1.itemsLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.currentQuestionNumber + 1 < ctx_r1.itemsLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.currentQuestionNumber + 1 === ctx_r1.itemsLength && ctx_r1.sections.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.sections.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("activeId", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngbNavItem", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r1.currentSectionName, " Instruction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngbNavItem", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngbNavOutlet", _r19);
} }
function ExamPageComponent_ng_template_2_span_6_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unAttemptedQuestionNumbersInSection_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", unAttemptedQuestionNumbersInSection_r65.sectionName, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", unAttemptedQuestionNumbersInSection_r65.unattemptedQuestion, " ");
} }
function ExamPageComponent_ng_template_2_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ExamPageComponent_ng_template_2_span_6_li_2_Template, 4, 2, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unAttemptedQuestionNumbersInSection_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", unAttemptedQuestionNumbersInSection_r65.unattemptedQuestion.length !== 0);
} }
function ExamPageComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Uh oh, Are you sure you want to end this exam?");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, " You have not attempted questions in the following sections ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ExamPageComponent_ng_template_2_span_6_Template, 3, 1, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ExamPageComponent_ng_template_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r68.displayConfirmationWindowOnSubmission() ? ctx_r68.confirm() : ctx_r68.doEndExam(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r3.unAttemptedQuestionNumbersInAllSections);
} }
function ExamPageComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "h4", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Follow-Up Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, " Hide this modal and show the first with the button below Automatically Send your invitees a follow -Up email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, " Back to First ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ExamPageComponent_ng_template_4_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r72); const modal_r70 = restoredCtx.$implicit; return modal_r70.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
class ExamPageComponent {
    constructor(document, router, itemService, primeNG, 
    // private settingsService: SettingsService,
    candidateService, modalService, notifierService, examPreviewService, ar) {
        this.document = document;
        this.router = router;
        this.itemService = itemService;
        this.primeNG = primeNG;
        this.candidateService = candidateService;
        this.modalService = modalService;
        this.notifierService = notifierService;
        this.examPreviewService = examPreviewService;
        this.ar = ar;
        this.assessmentId = '';
        this.currentQuestionNumber = 0;
        this.itemTypes = src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType;
        this.keyPressed = '';
        this.shortcutKeys = ['a', 'b', 'c', 'd'];
        this.attemptedQuestionsNumbers = [];
        this.sections = [];
        this.questionNumbers = [];
        this.unAttemptedQuestionNumbers = [];
        this.lastAutoSaveTimeSec = 0;
        this.saved = false;
        this.questionNumbersForRevisit = [];
        this.timeDisplay = {
            hrs: 0o00,
            mins: 0o00,
            secs: 0o00,
        };
        this.currentSectionName = '';
        this.lastAutoSaveTime = new Date();
        this.isOffline = false;
        this.fontsEnum = src_app_shared_enum_assessmentFonts__WEBPACK_IMPORTED_MODULE_12__.AssessmentFont;
        this.totalAttemptedQuestionInAllSections = 0;
        this.onLastSection = false;
        this.currentSectionIndex = 0;
        this.sectionProgress = [];
        this.totalQuestionsInAllSections = 0;
        this.loadingSectionQuestions = false;
    }
    handleKeyboardEvent(event) {
        this.keyPressed = event.key;
        //shortCuts
        //shortcut not to work with short text ,rich text and cloze text
        if (this.currentQuestion.item_type != src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.ESSAY_RICH_TEXT &&
            this.currentQuestion.item_type != src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.SHORT_TEXT &&
            this.currentQuestion.item_type != src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.CLOZE_TEXT) {
            this.useShortcut();
        }
    }
    ngOnInit() {
        this.assessmentId = this.ar.snapshot.params['assessmentId'];
        //  0194b283-8417-78da-a9ae-76f71c13d3df
        // 0194cc2c-d704-75d5-bcd0-d8e4b9438477
        // this.examPreviewService.
        // let sections: ExamPreviewData;
        this.examPreviewService
            .fetchAssesmentPreviewDetails(this.assessmentId)
            .subscribe({
            next: (value) => {
                this.assessmentPreviewDetails = value;
                // sections = value;
                console.log(value);
                this.sections = value.assessmentSections.map((section) => {
                    return {
                        name: section.name,
                        id: section.id,
                    };
                });
                this.currentSectionName = this.sections[0].name;
                console.log(this.sections[0].id, 'id');
                this.getCandidateDataForSection(this.assessmentId, this.sections[0].id);
            },
        });
        // this.timerSub = this.timeService.startTimer().subscribe({
        //   next: (val) => {
        //     // console.log(val + '' + 'Countdown')
        //     // console.log(--this.timeLeft);
        //     --this.timeLeft
        //   },
        //   complete: () => {
        //     this.endExam();
        //     Swal.fire({
        //       title: "Exam submitted!",
        //       text: "You ran out of time.",
        //       confirmButtonColor: "rgb(3, 142, 220)",
        //       icon: "info",
        //     });
        //   },
        // });
        // this.itemTypes = itemType;
        // if (
        //   this.candidateService.candidateData.assessment_data
        //     .display_all_sections_at_once
        // ) {
        //   this.itemService.displayAllSectionsAtOnce();
        // }
    }
    getCandidateDataForSection(assessmentId, sectionId) {
        this.loadingSectionQuestions = true;
        this.examPreviewService
            .fetchAssessmentSectionPreview(assessmentId, sectionId)
            .subscribe({
            next: (value) => {
                this.currentSectionData = value;
                this.buildItemForSection(value);
                const foundSection = this.sections.find((section) => section.id === sectionId);
                this.sections = this.itemService.getAssessmentSections();
                this.captureSectionAndSetQuestion(foundSection.name);
                console.log(value + 'section preview');
                this.itemService.setSectionQuestion(this.sections[0].name);
                this.currentSectionName = this.itemService.currentSection;
                this.attemptedQuestionsNumbers =
                    this.itemService.attemptedQuestionNumbers;
                this.itemsLength = this.itemService.getItems().length;
                this.currentCandidateData =
                    this.candidateService.getCandidateData().candidate_data;
                this.assessmentName =
                    this.candidateService.getCandidateData().assessment_data.name;
                this.setFontSize(this.candidateService.getCandidateData().assessment_data.font_size);
                // this.setQuestionNumbers();
                this.setCurrentQuestionNumber();
                this.itemService.currentQuestionNumber = 0;
                this.getCurrentQuestion();
                this.setQuestionNumbers();
                this.getTotalQuestionsInAllSections();
                // this.currentQuestion =this.itemService.getCurrentQuestion()
                console.log(this.itemsLength);
                this.startExamTimer();
                this.lastAutoSaveTimeSec = 0;
                this.element = document.documentElement;
                this.currentSectionName = foundSection.name;
                // this.checkForCompensatoryTime();
                console.log(this.itemService.getCurrentQuestion());
                this.loadingSectionQuestions = false;
            },
        });
    }
    buildItemForSection(value) {
        // trae
        this.currentSectionData = value;
        console.log(this.currentSectionData, 'current section data');
        this.candidateService.candidateData = {
            assessment_data: {
                allow_end_exam_after_xquestions: 10,
                // value.assessmentSettings.allowEndExamAfterXQuestions,
                auto_save_sec: 4000,
                // value.assessmentSettings.autoSaveSec,
                compensatory_time_value: this.assessmentPreviewDetails.assessmentSettings.compensatoryTimeMins,
                display_all_sections_at_once: this.assessmentPreviewDetails.assessmentSettings
                    .displayAllSectionsAtOnce,
                duration_minutes: this.assessmentPreviewDetails.assessmentSettings.durationMinutes,
                end_exam_confirmation: this.assessmentPreviewDetails.assessmentSettings.endExamConfirmation,
                font_size: this.assessmentPreviewDetails.assessmentSettings
                    .fontSize,
                inactivity_waring_sec: this.assessmentPreviewDetails.assessmentSettings.inactivityWaringSec,
                instruction_read_time_sec: this.assessmentPreviewDetails.assessmentSettings
                    .instructionReadTimeSec,
                name: this.assessmentPreviewDetails.name,
                preserve_section_order: this.assessmentPreviewDetails.assessmentSettings.preserveSectionOrder,
                warn_end_of_reading_time_sec: this.assessmentPreviewDetails.assessmentSettings
                    .warnEndOfReadingTimeSec,
                warn_unattempted_questions: this.assessmentPreviewDetails.assessmentSettings
                    .warnUnattemptedQuestions,
                end_exam_instruction: this.assessmentPreviewDetails.assessmentSettings.endExamInstruction,
                start_exam_instruction: this.assessmentPreviewDetails.assessmentSettings.startExamInstruction,
            },
            candidate_data: {
                id: '123456',
                login_field_value: 'previewcandiate@gmail.com',
                login_times: [],
                minutes_left: 1000,
                name: 'Test Candidate',
                passport: '',
                seconds_left: 100,
                section_ids: this.assessmentPreviewDetails.assessmentSections.map((section) => section.id),
            },
            sections_overview: this.assessmentPreviewDetails.assessmentSections.map((section) => {
                return {
                    duration: section.sectionSettings.durationInMinutes,
                    name: section.name,
                    total_questions: section.totalQuestions,
                };
            }),
            sections_questions: this.assessmentPreviewDetails.assessmentSections.map((section) => {
                return {
                    id: section.id,
                    name: section.name,
                    section_settings: {
                        allow_calculator: section.sectionSettings.allowCalculator,
                        duration_in_minutes: section.sectionSettings.durationInMinutes,
                        minutes_left: 100,
                        prevent_navigation_to_attempted_items: section.sectionSettings.preventNavigationToAttemptedItems,
                        seconds_left: 100,
                        shuffle_blocks: section.sectionSettings.shuffleBlocks,
                        shuffle_items: section.sectionSettings.shuffleItems,
                        shuffle_options: section.sectionSettings.shuffleOptions,
                        section_instruction: section.sectionSettings.sectionInstruction,
                    },
                    question_blocks: this.currentSectionData.blocks.map((block) => {
                        return {
                            id: block.id,
                            total_questions: block.totalQuestions,
                            index: block.index,
                            block_type: block.blockType,
                            items: block.items.map((item) => {
                                return {
                                    id: item.id,
                                    passage_stimulus: item.passageStimulus,
                                    stimulus: item.stimulus,
                                    options: item.options,
                                    stems: item.stems,
                                    possible_responses: item.possibleResponses,
                                    response_positions: item.responsePositions,
                                    item_type: item.itemType,
                                    numerical: item.numerical,
                                    case_sensitive: item.caseSensitive,
                                    shuffle_options: item.shuffleOptions,
                                    multiple_response: item.multipleResponse,
                                    max_words: item.maxWords,
                                    max_length: item.maxLength,
                                    allow_paste: item.allowPaste,
                                    allow_copy: item.allowCopy,
                                    allow_cut: item.allowCut,
                                    plain_text: item.plainText,
                                    responses: [],
                                    selectedResponse: '',
                                    block_id: block.id,
                                    revisit: false,
                                    max_responses: item.maxWords,
                                    image_data: item.images,
                                    answers: item.scoringOption.answers,
                                    showAnswer: false,
                                };
                            }),
                            passages: block.passages.map((passage) => {
                                return {
                                    id: passage.id,
                                    stimulus: passage.stimulus,
                                    items: passage.items.map((item) => {
                                        return {
                                            id: item.id,
                                            passage_stimulus: item.passageStimulus,
                                            stimulus: item.stimulus,
                                            options: item.options,
                                            stems: item.stems,
                                            possible_responses: item.possibleResponses,
                                            response_positions: item.responsePositions,
                                            item_type: item.itemType,
                                            numerical: item.numerical,
                                            case_sensitive: item.caseSensitive,
                                            shuffle_options: item.shuffleOptions,
                                            multiple_response: item.multipleResponse,
                                            max_words: item.maxWords,
                                            max_length: item.maxLength,
                                            allow_paste: item.allowPaste,
                                            allow_copy: item.allowCopy,
                                            allow_cut: item.allowCut,
                                            plain_text: item.plainText,
                                            responses: [],
                                            selectedResponse: '',
                                            block_id: block.id,
                                            revisit: false,
                                            max_responses: item.maxWords,
                                            image_data: item.images,
                                            answers: item.scoringOption.answers,
                                            showAnswer: false,
                                        };
                                    }),
                                };
                            }),
                        };
                    }),
                };
            }),
        };
        console.log(this.candidateService.candidateData, 'candidate data');
    }
    confirm() {
        let itemSection = {};
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Are you sure you want to end this exam?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(3, 142, 220)',
            cancelButtonColor: 'rgb(243, 78, 78)',
            confirmButtonText: 'Yes, end exam!',
        }).then((result) => {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Exam submitted!',
                    text: 'You have submitted successfully.',
                    confirmButtonColor: 'rgb(3, 142, 220)',
                    icon: 'success',
                });
                this.doEndExam(false);
            }
        });
    }
    // checkForCompensatoryTime() {
    //   if (
    //     this.candidateService.getCandidateData().assessment_data
    //       .compensatory_time_value
    //   ) {
    //     this.currentCandidateData.minutes_left =
    //       this.candidateService.getCandidateData().assessment_data.compensatory_time_value;
    //     this.notifierService.notify("success", "Compensatory time added");
    //   }
    // }
    // displayConectionLossModal(): void {
    //   Swal.fire({
    //     title: "Loss of Connection",
    //     text: "You Have lost connection to the exam server, kindly contact admin for assisstance",
    //     icon: "warning",
    //     showCancelButton: false,
    //     confirmButtonColor: "rgb(3, 142, 220)",
    //     cancelButtonColor: "rgb(243, 78, 78)",
    //     confirmButtonText: "Yes, Relogin",
    //     allowOutsideClick: false,
    //     allowEscapeKey: false,
    //   }).then((result) => {
    //     if (result.value) {
    //       this.candidateService.isExamOn = false;
    //       this.candidateService.isExamEnded = true;
    //       this.router.navigate(["examalpha/on-premise/candidate"]);
    //     }
    //   });
    // }
    callAttemptedQuestions() {
        console.log(this.attemptedQuestionsNumbers);
    }
    openModal(content) {
        this.modalService.open(content);
    }
    endExam(content) {
        console.log('section prg', this.itemService.getUnattemptedQuestionsInAllSections());
        if (this.warnCandidatesOfUnattemptedQuestions() === true) {
            //add check for if the cadidtae has already attempted app question in section, there wont be need to display the modal anymore
            this.unAttemptedQuestionNumbersInAllSections =
                this.itemService.getUnattemptedQuestionsInAllSections();
            this.openModal(content);
        }
        else {
            if (this.displayConfirmationWindowOnSubmission()) {
                this.confirm();
            }
        }
    }
    doEndExam(timedOut) {
        this.candidateService
            .doEndExam(this.generatePayLoadForAutoSave(), this.candidateService.getPreLoginData().id, this.currentCandidateData.login_field_value, timedOut)
            .subscribe({
            next: (value) => {
                this.candidateService.endExamResponse = value;
                this.candidateService.isExamOn = false;
                this.candidateService.isExamEnded = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                if (this.examTimerSub$ !== undefined) {
                    this.examTimerSub$.unsubscribe();
                }
                this.router.navigate(['examalpha/on-premise/candidate/end-exam']);
            },
        });
    }
    ngOnDestroy() {
        this.candidateService.isExamOn = false;
        if (this.examTimerSub$ !== undefined) {
            this.examTimerSub$.unsubscribe();
        }
        // console.log("i have been destroyed");
    }
    nextQuestion() {
        let currentQuestion = this.itemService.getCurrentQuestion();
        //console.log(currentQuestion);
        this.getCurrentQuestionResponse(currentQuestion);
        this.itemService.captureAttemptedQuestionNumber();
        // check to current question and next question type to know if they are the same type so as to reinitialize component
        // console.log(this.attemptedQuestionsNumbers);
        this.fetchProgressUpdates();
        this.changePaginatorToNext();
        if (this.isTheSameItemType('nextQuestion')) {
            this.callNgOnInit();
        }
        else {
            this.setCurrentQuestionNumber();
            this.getCurrentQuestion();
        }
        //console.log(this.currentQuestion);
        //this.nextQuestion()
        //  this.modelRefList.forEach((element)=>{
        //   console.log( element)
        //  })
    }
    previousQuestion() {
        let currentQuestion = this.itemService.getCurrentQuestion();
        this.getCurrentQuestionResponse(currentQuestion);
        this.itemService.captureAttemptedQuestionNumber();
        this.fetchProgressUpdates();
        this.changePaginatorToPrevious();
        if (this.isTheSameItemType('previousQuestion')) {
            this.callNgOnInit();
        }
        else {
            this.setCurrentQuestionNumber();
            this.getCurrentQuestion();
        }
    }
    getCurrentQuestionResponse(item) {
        console.log(item);
    }
    getCurrentQuestion() {
        this.currentQuestion = this.itemService.getCurrentQuestion();
        return this.currentQuestion;
    }
    callNgOnInit() {
        var _a;
        // Mapping of item types to the corresponding reference and ngOnInit method
        const itemTypeToRefMap = {
            [src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.TRUE_FALSE]: this.trueFalseRef,
            [src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.MCQ]: this.standardChoiceRef,
            [src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.MRQ]: this.multipleResponseRef,
            [src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.ESSAY_RICH_TEXT]: this.essayWithRichTextRef,
            [src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.SHORT_TEXT]: this.essayWithShortTextRef,
            [src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.ORDER_LIST]: this.classifyByOrderingRef,
            [src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.ASSOCIATION]: this.classifyByMatchingRef,
            [src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.CLOZE_TEXT]: this.clozeWithtextRef,
            [src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.CLOZE_DROPDOWN]: this.clozeWithDropDownRef,
            [src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.YES_NO]: this.yesNoRef,
            [src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.CHOICE_MATRIX]: this.choiceMatrixRef,
            [src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.IMAGE_DRAG_AND_DROP]: this.clozeImageWithDragDropRef,
            [src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.CLOZE_TEXT_IMAGE]: this.clozeImageWithTextRef,
            [src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.CLOZE_DROPDOWN_IMAGE]: this.clozeImageWithDropdownRef,
        };
        const currentItemType = this.itemService.getCurrentQuestion().item_type;
        // Check if the reference exists for the current item type, and call ngOnInit if so
        if (itemTypeToRefMap[currentItemType]) {
            (_a = itemTypeToRefMap[currentItemType]) === null || _a === void 0 ? void 0 : _a.ngOnInit();
        }
        // Set the current question number
        this.setCurrentQuestionNumber();
    }
    setCurrentQuestionNumber() {
        this.currentQuestionNumber = this.itemService.currentQuestionNumber;
    }
    useShortcut() {
        if (this.currentQuestionNumber != 0) {
            switch (this.keyPressed.toLowerCase()) {
                case 'p':
                    this.previousQuestion();
                    break;
            }
        }
        if (this.currentQuestionNumber + 1 != this.itemsLength) {
            switch (this.keyPressed.toLowerCase()) {
                case 'n':
                    this.nextQuestion();
                    break;
            }
        }
        if (this.getCurrentQuestion().item_type === this.itemTypes.MRQ) {
            // for (let i = 0; i < this.shortcutKeys.length; i++) {
            switch (this.keyPressed.toLowerCase()) {
                case `a`:
                    this.multipleResponseRef.optionClicked(this.getCurrentQuestion().options[0].value);
                    break;
                case 'b':
                    this.multipleResponseRef.optionClicked(this.getCurrentQuestion().options[1].value);
                    break;
                case 'c':
                    this.multipleResponseRef.optionClicked(this.getCurrentQuestion().options[2].value);
                    break;
                case 'd':
                    this.multipleResponseRef.optionClicked(this.getCurrentQuestion().options[3].value);
                    break;
                // }
            }
        }
        else if (this.getCurrentQuestion().item_type === this.itemTypes.MCQ) {
            // for (let i = 0; i < this.shortcutKeys.length; i++) {
            switch (this.keyPressed.toLowerCase()) {
                case `a`:
                    this.standardChoiceRef.optionSelected(this.getCurrentQuestion().options[0].value);
                    // this.getCurrentQuestion().responses[0] = "0";
                    break;
                case 'b':
                    this.standardChoiceRef.optionSelected(this.getCurrentQuestion().options[1].value);
                    // this.getCurrentQuestion().responses[0] = "1";
                    break;
                case 'c':
                    this.standardChoiceRef.optionSelected(this.getCurrentQuestion().options[2].value);
                    // this.getCurrentQuestion().responses[0] = "2";
                    break;
                case 'd':
                    this.standardChoiceRef.optionSelected(this.getCurrentQuestion().options[3].value);
                    // this.getCurrentQuestion().responses[0] = "3";
                    break;
            }
        }
        else if (this.getCurrentQuestion().item_type === this.itemTypes.TRUE_FALSE ||
            this.getCurrentQuestion().item_type === this.itemTypes.YES_NO) {
            switch (this.keyPressed.toLowerCase()) {
                case `a`:
                    this.getCurrentQuestion().responses[0] =
                        this.getCurrentQuestion().options[0].value;
                    break;
                case 'b':
                    this.getCurrentQuestion().responses[0] =
                        this.getCurrentQuestion().options[1].value;
                    break;
            }
            // }
        }
    }
    isTheSameItemType(reference) {
        switch (reference) {
            case 'nextQuestion':
                if (this.itemService.getCurrentQuestion().item_type ==
                    this.itemService.getNextQuestionItemType()) {
                    return true;
                }
                break;
            case 'previousQuestion':
                if (this.itemService.getCurrentQuestion().item_type ==
                    this.itemService.getPreviousQuestionItemType()) {
                    return true;
                }
                break;
        }
        return false;
    }
    // captureAttemptedQuestionNumbers(): void {
    //   if (
    //     this.getCurrentQuestion().answers.length != 0 &&
    //     !this.getCurrentQuestion().answers.includes(undefined) &&
    //     !this.attemptedQuestionsNumbers.includes(this.getCurrentQuestionNumber())
    //   ) {
    //     this.attemptedQuestionsNumbers.push(this.getCurrentQuestionNumber());
    //     console.log("i have been attempted" + this.getCurrentQuestion().stimulus);
    //     console.log(this.getCurrentQuestion().answers);
    //   }
    // }
    setQuestionNumbers() {
        this.questionNumbers = [];
        for (let i = 0; i < this.itemsLength; i++) {
            this.questionNumbers.push(i + 1);
        }
    }
    navigateTo(index) {
        this.paginator.changePage(index);
        if (this.itemService.navigateTo(index).item_type ==
            this.currentQuestion.item_type) {
            this.callNgOnInit();
        }
        else {
            this.currentQuestion = this.itemService.navigateTo(index);
            this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
        }
    }
    fetchProgressUpdates() {
        const currentSectionIndex = this.itemService.sectionProgress.findIndex((section) => section.sectionName === this.itemService.currentSection);
        this.attemptedQuestionsNumbers =
            this.itemService.sectionProgress[currentSectionIndex].attemptedQuestions;
        console.log(this.attemptedQuestionsNumbers);
        // console.log(this.itemService.attemptedQuestionsNumbers);
        this.setUnattemptedQuestionNumbers();
        this.setQuestionNumbersForRevisit();
        this.setQuestionNumbers();
    }
    getAttemptedQuestionPecentage() {
        return (this.attemptedQuestionsNumbers.length / this.itemsLength) * 100;
    }
    setUnattemptedQuestionNumbers() {
        // const unAttemptedItems = this.itemService
        //   .getItems()
        //   .filter((item) => item.answers.length === 0);
        // this.itemService.captureUnattemptedQuestionNumbers()
        this.unAttemptedQuestionNumbers =
            this.itemService.getUnattemptedQuestionNumbersInSection(this.itemService.currentSection);
        // console.log(this.unAttemptedQuestionNumbers)
    }
    setQuestionNumbersForRevisit() {
        this.questionNumbersForRevisit =
            this.itemService.getQuestionNumbersForRevisitInsection(this.itemService.currentSection);
    }
    checkIfAttempted(number) {
        // console.log(this.attemptedQuestionsNumbers);
        // this.fetchProgressUpdates();
        const itemFound = this.attemptedQuestionsNumbers.find((item) => item + 1 == number);
        // console.log(itemFound);
        if (itemFound != null) {
            return '#ffffff';
        }
        return '#25a0e2';
        // return "";
    }
    // getStyleObject(number: number): object {
    //   this.fetchProgressUpdates();
    //   var itemFound = this.attemptedQuestionsNumbers.find(
    //     (item) => item + 1== number
    //   );
    //   // let borderColor = itemFound ? "red" : "pink";
    //   let backgroundColor = itemFound ? "black" : "green";
    //   // let textColor = itemFound ? "black" : "white";
    //   // console.log(itemFound);
    //   return {
    //     // "border-color": borderColor,
    //     "background-color": backgroundColor,
    //   //  "color": textColor
    //   };
    // }
    getClassObject(currentQuestionNumber) {
        // this.fetchProgressUpdates();
        // console.log("calle");
        const foundAttemptedQuestionNumber = this.attemptedQuestionsNumbers.find((attemptedQuestionNumber) => attemptedQuestionNumber + 1 == currentQuestionNumber);
        const foundRevisitQuestionNumber = this.questionNumbersForRevisit.find((revisitQuestionNumber) => revisitQuestionNumber + 1 == currentQuestionNumber);
        if (foundAttemptedQuestionNumber != undefined) {
            return ' btn-success border-success';
        }
        else if (foundRevisitQuestionNumber != undefined) {
            return 'btn-warning border-warming';
        }
        else {
            return 'border-danger btn-danger';
        }
    }
    showInstruction() {
        const rightBar = document.getElementById('instructionSideBar');
        if (rightBar != null) {
            rightBar.classList.toggle('show');
            rightBar.setAttribute('style', 'visibility: visible;');
        }
    }
    hideSideBar() {
        const rightBar = document.getElementById('instructionSideBar');
        if (rightBar != null) {
            rightBar.classList.remove('show');
            rightBar.removeAttribute('style');
        }
    }
    startAutoSave() {
        this.doAutoSave();
        this.lastAutoSaveTimeSec = 0;
    }
    startExamTimer() {
        this.examDuration =
            this.candidateService.getCandidateData().candidate_data.minutes_left * 60; // Convert minutes to seconds
        this.autoSaveInterval =
            this.candidateService.getCandidateData().assessment_data.auto_save_sec;
        this.examTimerSub$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.timer)(1000, 1000).subscribe(() => {
            const currentTime = new Date();
            const timeDifference = (currentTime.getTime() - this.lastAutoSaveTime.getTime()) / 1000; // in seconds
            if (timeDifference >= 300) {
                //5mins and above
                if (this.examTimerSub$) {
                    this.examTimerSub$.unsubscribe();
                    // this.displayConectionLossModal();
                }
            }
            if (timeDifference >= 120) {
                this.isOffline = true;
            }
            else {
                this.isOffline = false;
            }
            if (this.examDuration > 0) {
                const minutes = Math.floor((this.examDuration % 3600) / 60);
                const seconds = this.examDuration % 60;
                // console.log(`Time left: ${hours}h ${minutes}m ${seconds}s`);
                // jamb@jamb.gov.ng452 43:01
                this.timeDisplay.mins = minutes;
                this.timeDisplay.secs = seconds;
                this.examDuration--;
                this.startLastAutoSaveCounter();
                if (this.examDuration % this.autoSaveInterval === 0) {
                    this.startAutoSave();
                }
            }
            else if (this.examDuration <= 0) {
                console.log('Exam time is up');
                this.doEndExam(true);
                // this.examTimerSub$.unsubscribe();
            }
        });
    }
    startLastAutoSaveCounter() {
        if (this.saved) {
            ++this.lastAutoSaveTimeSec;
            this.lastAutoSaveTime = new Date();
        }
    }
    displayConfirmationWindowOnSubmission() {
        return this.candidateService.candidateData.assessment_data
            .end_exam_confirmation;
    }
    // getFontSize(): string {
    //   return this.candidateService.candidateData.assessment_data.font_size;
    // }
    setFontSize(font) {
        if (font === src_app_shared_enum_assessmentFonts__WEBPACK_IMPORTED_MODULE_12__.AssessmentFont.LARGE) {
            this.fontSize = '20px!important';
        }
        else if (font === src_app_shared_enum_assessmentFonts__WEBPACK_IMPORTED_MODULE_12__.AssessmentFont.NORMAL) {
            this.fontSize = '16px!important';
        }
        else if (font === src_app_shared_enum_assessmentFonts__WEBPACK_IMPORTED_MODULE_12__.AssessmentFont.SMALL) {
            this.fontSize = '12px!important';
        }
    }
    warnCandidatesOfUnattemptedQuestions() {
        return this.candidateService.candidateData.assessment_data
            .warn_unattempted_questions;
    }
    onPageChange(event) {
        this.page = event.page;
        console.log(event);
    }
    captureSectionAndSetQuestion(sectionName) {
        const foundSelectedSectionIndex = this.sections.findIndex((section) => section.name === sectionName);
        console.log(foundSelectedSectionIndex, 'section index');
        if (foundSelectedSectionIndex !== -1) {
            this.currentSectionIndex = foundSelectedSectionIndex;
        }
        console.log(this.sections, 'sections');
        this.currentSectionName = sectionName;
        console.log(this.currentSectionName, 'current section name');
        // todo: handle when switching section and the question type is the same, question number is not updating
        // this.setCurrentQuestionNumber
        this.itemService.setSectionQuestion(sectionName);
        this.itemService.currentQuestionNumber = 0;
        this.currentQuestionNumber = 0;
        this.callNgOnInit();
        // const currentSectionIndex = this.itemService.sectionProgress.findIndex(
        //   (section) => section.sectionName === this.itemService.currentSection
        // );
        this.attemptedQuestionsNumbers = this.itemService.attemptedQuestionNumbers;
        if (this.paginator)
            this.paginator.changePage(0);
        this.itemsLength = this.itemService.getItems().length;
        this.itemService.currentQuestionNumber = 0;
        this.getCurrentQuestion();
        (console.log(this.itemsLength), console.log(this.currentQuestion));
        console.log(this.currentQuestion.item_type);
        console.log(this.currentQuestionNumber);
    }
    onPageLinkClick() {
        this.navigateTo(this.page);
    }
    changePaginatorToNext() {
        console.log('hello');
        this.paginator.changePageToNext(event);
    }
    changePaginatorToPrevious() {
        this.paginator.changePageToPrev(event);
    }
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
    generatePayLoadForAutoSave() {
        const autoSaveData = {
            sections_map: {},
            section_times: {},
            minutes: this.timeDisplay.mins,
            seconds: this.timeDisplay.secs,
            cand_id: this.currentCandidateData.id,
        };
        this.candidateService
            .getCandidateData()
            .sections_questions.forEach((section) => {
            // store ICandidateAutoSaveItems for this section
            const sectionItems = [];
            // Loop through questions in the section
            section.question_blocks.forEach((sectionBlock) => {
                // const attemptedQuestions = sectionBlock.items.filter(
                //   (item) => item.responses.length !== 0
                // );
                // let result = sectionBlock.items.filter(
                //   (item) => item.revisit == false || item.responses.length !== 0
                // );
                // console.log(sectionBlock.items);
                if (sectionBlock.block_type === src_app_shared_enum_blockTypes__WEBPACK_IMPORTED_MODULE_13__.BlockType.PASSAGES) {
                    section.question_blocks.forEach((block) => {
                        block.passages.forEach((passage) => {
                            passage.items.forEach((itemInPassage) => {
                                if (itemInPassage.item_type === src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.CLOZE_TEXT ||
                                    itemInPassage.item_type === src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.CLOZE_DROPDOWN) {
                                    // use map
                                    for (let i = 0; i < itemInPassage.responses.length; i++) {
                                        if (typeof itemInPassage.responses[i] !== 'string') {
                                            itemInPassage.responses[i] = ''; // Replace non-string elements with an empty string
                                        }
                                    }
                                    console.log(itemInPassage, 'itemInPassage in block');
                                }
                                // Create an ICandidateAutoSaveItems object for each question
                                const passageItem = {
                                    item_id: itemInPassage.id,
                                    blk_id: sectionBlock.id,
                                    answers: itemInPassage.responses,
                                    revisit_later: itemInPassage.revisit,
                                    passage_id: passage.id,
                                };
                                // add passage_id if it exists
                                // if (question.passage_id) {
                                //   item.passage_id = itemInBlock.;
                                // }
                                // Add the ICandidateAutoSaveItems to the sectionItems array
                                sectionItems.push(passageItem);
                            });
                        });
                    });
                }
                else if (sectionBlock.block_type === src_app_shared_enum_blockTypes__WEBPACK_IMPORTED_MODULE_13__.BlockType.SINGLE_QUESTIONS) {
                    sectionBlock.items.forEach((itemInBlock) => {
                        if (itemInBlock.item_type === src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.CLOZE_TEXT ||
                            itemInBlock.item_type === src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType.CLOZE_DROPDOWN) {
                            //rodo: use a map
                            let modRes = itemInBlock.responses.map((response) => {
                                if (typeof response !== 'string') {
                                    return {
                                        response: '',
                                    };
                                    // itemInBlock.responses[i] = ""; // Replace non-string elements with an empty string
                                }
                                return response;
                            });
                            for (let i = 0; i < itemInBlock.responses.length; i++) {
                                if (typeof itemInBlock.responses[i] !== 'string') {
                                    itemInBlock.responses[i] = ''; // Replace non-string elements with an empty string
                                }
                            }
                            console.log(itemInBlock, 'item in block');
                        }
                        // Create an ICandidateAutoSaveItems object for each question
                        const item = {
                            item_id: itemInBlock.id,
                            blk_id: sectionBlock.id,
                            answers: itemInBlock.responses,
                            revisit_later: itemInBlock.revisit,
                        };
                        // add passage_id if it exists
                        // if (question.passage_id) {
                        //   item.passage_id = itemInBlock.;
                        // }
                        // Add the ICandidateAutoSaveItems to the sectionItems array
                        sectionItems.push(item);
                    });
                }
                // Add the sectionItems to the sections_map with the section key
                // const filteredSections = sectionItems.filter(
                //   (section) =>
                //     section.answers.length !== 0 || section.revisit_later == true
                // );
                autoSaveData.sections_map[section.id] = sectionItems;
                // console.log(filteredSections);
                // set section times here (minutes and seconds)
                autoSaveData.section_times[section.id] = {
                    minutes: section.section_settings.minutes_left,
                    seconds: section.section_settings.seconds_left,
                };
            });
        });
        console.log('autoSaveData', autoSaveData);
        return autoSaveData;
    }
    doAutoSave() {
        // console.log(this.generatePayLoadForAutoSave());
        this.candidateService
            .doAutoSave(this.candidateService.getPreLoginData().id, this.currentCandidateData.login_field_value, this.generatePayLoadForAutoSave())
            .subscribe({
            next: (value) => {
                this.autoSaveResponse = value;
                this.saved = this.autoSaveResponse.auto_saved;
                this.lastAutoSaveTime = new Date();
                if (value.compensatory_time_added) {
                    this.handleCompensatoryTimeAddition();
                }
                if (value.message_from_admin) {
                    this.handleMessageFromAdmin(value.message_from_admin);
                }
            },
            error: (err) => {
                this.saved = false;
                console.log(err.error.error);
            },
        });
    }
    handleCompensatoryTimeAddition() {
        this.currentCandidateData.minutes_left +=
            this.candidateService.getCandidateData().assessment_data.compensatory_time_value;
        this.timeDisplay.mins +=
            this.candidateService.getCandidateData().assessment_data.compensatory_time_value;
        this.examDuration +=
            60 *
                this.candidateService.getCandidateData().assessment_data
                    .compensatory_time_value;
        console.log(this.currentCandidateData.minutes_left, 'minu');
        this.notifierService.notify('success', 'Compensatory time added');
    }
    handleMessageFromAdmin(message) {
        this.notifierService.notify('success', message);
    }
    getTotalQuestionsInAllSections() {
        let totalQuestions = 0;
        this.candidateService.candidateData.sections_overview.forEach((section) => {
            totalQuestions += section.total_questions;
        });
        this.totalQuestionsInAllSections = totalQuestions;
        // return totalQuestions;
    }
    gotoNextSection() {
        // Get the index of the current section
        const currentSectionIndex = this.sections.findIndex((section) => section.name === this.currentSectionName);
        // Get the next section if available
        if (currentSectionIndex !== -1 &&
            currentSectionIndex + 1 < this.sections.length) {
            const nextSectionName = this.sections[currentSectionIndex + 1];
            this.currentSectionIndex += 1;
            // Set the new section and reset questions
            this.getCandidateDataForSection(this.assessmentId, nextSectionName.id);
            this.captureSectionAndSetQuestion(nextSectionName.name);
        }
        else {
            this.onLastSection = true;
            console.log('No more sections available.');
            // Optionally, handle end of sections (e.g., show a message, disable the button)
        }
    }
    isOnfirstQuestionOfSection() {
        // and there is a previous sections
        if (this.currentQuestionNumber === 0 && this.currentSectionIndex > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    prevSection() {
        const currentSectionIndex = this.sections.findIndex((section) => section.name === this.currentSectionName);
        if (currentSectionIndex > 0) {
            this.currentSectionIndex = currentSectionIndex - 1;
            this.currentSectionName = this.sections[this.currentSectionIndex].name;
            this.getCandidateDataForSection(this.assessmentId, this.sections[this.currentSectionIndex].id);
            this.captureSectionAndSetQuestion(this.currentSectionName);
            this.onLastSection = false; // Reset the flag if it's not the last section
        }
    }
    // canEndExam(): boolean {
    //   let totalAttemptedQuestionInAllSections = 0;
    //   this.candidateService.candidateData.sections_questions.forEach(
    //     (section) => {
    //       section.question_blocks.forEach((questionBlock) => {
    //         if (questionBlock.block_type === BlockType.SINGLE_QUESTIONS) {
    //           questionBlock.items.forEach((item) => {
    //             if (
    //               item.item_type !== ItemType.CLOZE_TEXT &&
    //               item.item_type !== ItemType.CLOZE_DROPDOWN
    //             ) {
    //               if (item.responses.length !== 0) {
    //                 totalAttemptedQuestionInAllSections += 1;
    //               }
    //             } else {
    //               // Count as attempted if at least one valid response exists
    //               let hasValidResponse = item.responses.some(
    //                 (value) => value !== undefined && value.trim() !== ""
    //               );
    //               if (hasValidResponse) {
    //                 totalAttemptedQuestionInAllSections += 1;
    //               }
    //             }
    //           });
    //         } else if (questionBlock.block_type === BlockType.PASSAGES) {
    //           questionBlock.passages.forEach((passage) => {
    //             passage.items.forEach((item) => {
    //               if (
    //                 item.item_type !== ItemType.CLOZE_TEXT &&
    //                 item.item_type !== ItemType.CLOZE_DROPDOWN
    //               ) {
    //                 if (item.responses.length !== 0) {
    //                   totalAttemptedQuestionInAllSections += 1;
    //                 }
    //               } else {
    //                 // Count as attempted if at least one valid response exists
    //                 let hasValidResponse = item.responses.some(
    //                   (value) => value !== undefined && value.trim() !== ""
    //                 );
    //                 if (hasValidResponse) {
    //                   totalAttemptedQuestionInAllSections += 1;
    //                 }
    //               }
    //             });
    //           });
    //         }
    //       });
    //     }
    //   );
    //   this.totalAttemptedQuestionInAllSections =
    //     totalAttemptedQuestionInAllSections;
    //   if (
    //     totalAttemptedQuestionInAllSections >=
    //     this.candidateService.candidateData.assessment_data
    //       .allow_end_exam_after_xquestions
    //   ) {
    //     return true;
    //   }
    //   return false;
    // }
    getExamInstruction() {
        return this.candidateService.getCandidateData().assessment_data
            .start_exam_instruction;
    }
    getSectionInstruction() {
        return this.candidateService
            .getCandidateData()
            .sections_questions.find((section) => section.name.toLowerCase() ==
            this.itemService.currentSection.toLowerCase()).section_settings.section_instruction;
    }
    getSectionOverview(sectionName) {
        console.log(sectionName);
        let result = this.itemService.getSectionOverview(sectionName);
        this.attemptedQuestionsNumbers = result.attempted;
        this.questionNumbersForRevisit = result.revisit;
        this.unAttemptedQuestionNumbers = result.unAttempted;
        console.log(result);
        return result;
    }
    getSectionProgress() {
        return this.itemService.getSectionProgress();
    }
}
ExamPageComponent.ɵfac = function ExamPageComponent_Factory(t) { return new (t || ExamPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_23__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_18__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_25__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_candidate_service__WEBPACK_IMPORTED_MODULE_19__.CandidateService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_27__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_exam_preview_service__WEBPACK_IMPORTED_MODULE_20__.ExamPreviewService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute)); };
ExamPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({ type: ExamPageComponent, selectors: [["app-exam-page"]], viewQuery: function ExamPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_true_or_false_true_or_false_component__WEBPACK_IMPORTED_MODULE_2__.TrueOrFalseComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_choice_matrix_choice_matrix_component__WEBPACK_IMPORTED_MODULE_14__.ChoiceMatrixComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_cloze_image_with_drag_drop_cloze_image_with_drag_drop_component__WEBPACK_IMPORTED_MODULE_15__.ClozeImageWithDragDropComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_cloze_image_with_dropdown_cloze_image_with_dropdown_component__WEBPACK_IMPORTED_MODULE_16__.ClozeImageWithDropdownComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_cloze_image_with_text_cloze_image_with_text_component__WEBPACK_IMPORTED_MODULE_17__.ClozeImageWithTextComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_yes_or_no_yes_or_no_component__WEBPACK_IMPORTED_MODULE_11__.YesOrNoComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_standard_choice_standard_choice_component__WEBPACK_IMPORTED_MODULE_3__.StandardChoiceComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_multiple_response_multiple_response_component__WEBPACK_IMPORTED_MODULE_4__.MultipleResponseComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_cloze_with_drop_down_cloze_with_drop_down_component__WEBPACK_IMPORTED_MODULE_5__.ClozeWithDropDownComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_cloze_with_text_cloze_with_text_component__WEBPACK_IMPORTED_MODULE_6__.ClozeWithTextComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_essay_with_rich_text_essay_with_rich_text_component__WEBPACK_IMPORTED_MODULE_7__.EssayWithRichTextComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_essay_with_short_text_essay_with_short_text_component__WEBPACK_IMPORTED_MODULE_8__.EssayWithShortTextComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_classify_by_matching_classify_by_matching_component__WEBPACK_IMPORTED_MODULE_9__.ClassifyByMatchingComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_classify_by_ordering_classify_by_ordering_component__WEBPACK_IMPORTED_MODULE_10__.ClassifyByOrderingComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.trueFalseRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.choiceMatrixRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.clozeImageWithDragDropRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.clozeImageWithDropdownRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.clozeImageWithTextRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.yesNoRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.standardChoiceRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.multipleResponseRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.clozeWithDropDownRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.clozeWithtextRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.essayWithRichTextRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.essayWithShortTextRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.classifyByMatchingRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.classifyByOrderingRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, hostBindings: function ExamPageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keypress", function ExamPageComponent_keypress_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresolveDocument"]);
    } }, inputs: { assessmentId: "assessmentId" }, decls: 6, vars: 2, consts: [[4, "ngIf"], [3, "style", 4, "ngIf"], ["unattemptedQuestionsModal", ""], ["toggleSecondModal", ""], [1, "d-flex", "justify-content-center", "align-items-center", 2, "height", "60vh"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "full-height"], [1, "d-flex", "text-secondary", "justify-content-around", "align-center", "align-items-center", "mb-6"], [1, "d-none", "d-md-block"], [1, "d-flex", "justify-content-between", "mx-2", "align-items-center", "mt-2"], [1, "m-0", "text-black", "fs-16", "fw-bold"], [1, "d-flex", "justify-content-center", "align-items-center", "gap-2", "mx-3"], [1, ""], [1, "d-flex", "align-items-center", "justify-content-center", "gap-1"], [1, "d-flex", "gap-2", "align-center", "align-items-center", "sections"], ["triggers", "mouseenter:mouseleave", "ngbDropdown", "", 1, "d-none", "d-md-block", 3, "ngbTooltip"], ["data-bs-toggle", "dropdown", "ngbDropdownToggle", "", 1, "btn", "btn-md", "border"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "p-2"], [1, "d-flex", "justify-content-center"], [1, "mb-2"], [1, "text-primary", "text-center", "fs-16"], ["role", "group", 1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", "btn-sm", 3, "ngClass", "click"], [2, "font-size", "12px !important"], [2, "font-size", "15px !important"], [2, "font-size", "20px !important"], [1, "mx-1", "p-1"], [2, "width", "25rem"], [1, "mb-2", "d-block", "d-md-none", "d-sm-none", "mt-3"], [1, "d-flex", "gap-3"], [4, "ngFor", "ngForOf"], [1, "border-top", "p-0", "mb-0"], [1, "d-flex", "d-block", "d-md-none", "d-sm-none", "mb-2", "justify-content-between"], [1, "mx-3", "mt-2"], [1, "row"], [1, "d-flex", "align-items-center"], [1, "col-12"], [1, "w-100"], [1, "form-select", "form-select-sm", "border", "border-1", "w-100", "rounded-2", 3, "change"], ["sectionNameRef", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "mx-3", "d-none", "d-lg-block", "d-sm-block", "d-md-block", "my-2"], [1, "col-2"], [1, "form-select", "form-select-sm", "border", "border-1", "rounded-2", 3, "change"], ["sectionNameRef1", ""], [1, "col-8", "text-center"], [1, "button-container", "justify-content-center", "mx-5"], [1, "row", "align-center"], [1, "col-3", "d-flex", "flex-column", "align-items-start"], ["class", "btn btn-primary border-0 px-4", "id", "previous-question", "style", "background-color: #25a0e2; width: fit-content", "type", "button", 3, "disabled", "click", 4, "ngIf"], [1, "col-6"], [1, "d-none", "d-lg-block", "d-sm-block", "d-md-block", "p-1"], [3, "pageLinkSize", "rows", "totalRecords", "click", "onPageChange"], ["paginator", ""], [1, "col-3", "d-flex", "flex-column", "align-items-end"], ["class", "btn btn-primary border-0 px-4", "id", "next-question", "style", "background-color: #25a0e2; width: fit-content", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn btn-primary border-0 px-4", "id", "end-exam", "style", "width: fit-content", "type", "button", "disabled", "", 4, "ngIf"], ["id", "instructionSideBar", "tabindex", "-1", 1, "offcanvas", "offcanvas-end", "border-0"], [1, "p-4", "d-flex", "flex-column", "h-100"], [1, "pb-1"], [1, "col"], [1, "d-flex", "justify-content-between", "align-center", "align-items-center"], [1, "d-flex", "g-1"], [1, "text-primary"], [1, "ri-information-line", "text-primary"], ["type", "button", 1, "btn", "btn-soft-primary", "btn-icon", "btn-sm", "fs-16", 3, "click"], [1, "ri-close-fill", "align-bottom"], [1, "mx-n4", "px-4", 2, "height", "80vh"], [1, "mt-4", "mb-3"], [1, "col-xxl-6"], [1, "card", 2, "height", "50rem"], [1, "card-body"], ["ngbNav", "", 1, "nav", "nav-tabs", "nav-tabs-custom", "nav-primary", "nav-justified", "mb-3", 3, "activeId"], ["Bordered", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "tab-content", "text-muted"], [3, "ngbNavOutlet"], [1, "btn", "btn-sm", 3, "click"], [3, "value", "selected"], ["class", "btn btn-primary border-0 px-4", "id", "prev-section", "style", "background-color: #25a0e2; width: fit-content", "type", "button", 3, "click", 4, "ngIf"], ["id", "prev-section", "type", "button", 1, "btn", "btn-primary", "border-0", "px-4", 2, "background-color", "#25a0e2", "width", "fit-content", 3, "click"], ["id", "previous-question", "type", "button", 1, "btn", "btn-primary", "border-0", "px-4", 2, "background-color", "#25a0e2", "width", "fit-content", 3, "disabled", "click"], ["id", "next-question", "type", "button", 1, "btn", "btn-primary", "border-0", "px-4", 2, "background-color", "#25a0e2", "width", "fit-content", 3, "click"], ["id", "end-exam", "type", "button", "disabled", "", 1, "btn", "btn-primary", "border-0", "px-4", 2, "width", "fit-content"], ["class", "btn btn-primary border-0", "id", "next-section", "style", "background-color: #25a0e2; width: fit-content", "type", "button", 3, "click", 4, "ngIf"], ["id", "next-section", "type", "button", 1, "btn", "btn-primary", "border-0", 2, "background-color", "#25a0e2", "width", "fit-content", 3, "click"], [1, "d-flex"], [1, "flex-grow-1", "ms-2"], [3, "innerHTML"], [1, "modal-body", "text-center", "p-5"], [1, "mt-4", "pt-4"], [1, "text-muted"], ["class", "text-start", 4, "ngFor", "ngForOf"], ["data-bs-dismiss", "modal", "data-bs-target", "#secondmodal", "data-bs-toggle", "modal", 1, "btn", "btn-warning", 3, "click"], [1, "text-start"], [1, "mt-4", "pt-3"], [1, "mb-3"], [1, "text-muted", "mb-4"], [1, "hstack", "gap-2", "justify-content-center"], ["data-bs-dismiss", "modal", "data-bs-target", "#firstmodal", "data-bs-toggle", "modal", 1, "btn", "btn-soft-danger"], ["data-bs-dismiss", "modal", "type", "button", 1, "btn", "btn-light", 3, "click"]], template: function ExamPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, ExamPageComponent_ng_container_0_Template, 5, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ExamPageComponent_div_1_Template, 100, 35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ExamPageComponent_ng_template_2_Template, 9, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ExamPageComponent_ng_template_4_Template, 11, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.currentSectionData && !ctx.currentCandidateData);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.currentSectionData && ctx.currentCandidateData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbTooltip, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, simplebar_angular__WEBPACK_IMPORTED_MODULE_28__.SimplebarAngularComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ɵNgSelectMultipleOption"], _true_or_false_true_or_false_component__WEBPACK_IMPORTED_MODULE_2__.TrueOrFalseComponent, _yes_or_no_yes_or_no_component__WEBPACK_IMPORTED_MODULE_11__.YesOrNoComponent, _standard_choice_standard_choice_component__WEBPACK_IMPORTED_MODULE_3__.StandardChoiceComponent, _multiple_response_multiple_response_component__WEBPACK_IMPORTED_MODULE_4__.MultipleResponseComponent, _essay_with_short_text_essay_with_short_text_component__WEBPACK_IMPORTED_MODULE_8__.EssayWithShortTextComponent, _essay_with_rich_text_essay_with_rich_text_component__WEBPACK_IMPORTED_MODULE_7__.EssayWithRichTextComponent, _classify_by_ordering_classify_by_ordering_component__WEBPACK_IMPORTED_MODULE_10__.ClassifyByOrderingComponent, _classify_by_matching_classify_by_matching_component__WEBPACK_IMPORTED_MODULE_9__.ClassifyByMatchingComponent, _cloze_with_text_cloze_with_text_component__WEBPACK_IMPORTED_MODULE_6__.ClozeWithTextComponent, _cloze_with_drop_down_cloze_with_drop_down_component__WEBPACK_IMPORTED_MODULE_5__.ClozeWithDropDownComponent, _cloze_image_with_text_cloze_image_with_text_component__WEBPACK_IMPORTED_MODULE_17__.ClozeImageWithTextComponent, _cloze_image_with_dropdown_cloze_image_with_dropdown_component__WEBPACK_IMPORTED_MODULE_16__.ClozeImageWithDropdownComponent, _cloze_image_with_drag_drop_cloze_image_with_drag_drop_component__WEBPACK_IMPORTED_MODULE_15__.ClozeImageWithDragDropComponent, _choice_matrix_choice_matrix_component__WEBPACK_IMPORTED_MODULE_14__.ChoiceMatrixComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_30__.Paginator, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbNavOutlet], styles: [".full-height[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.foot-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background: #25a0e2;\n  background: linear-gradient(to top, #105378, #25a0e2);\n}\n\n.ui-paginator[_ngcontent-%COMP%]   .ui-paginator-pages[_ngcontent-%COMP%]   .ui-paginator-page[_ngcontent-%COMP%] {\n  min-width: 2.5em !important;\n}\n\nexam-card-footer[_ngcontent-%COMP%] {\n  height: 100px;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.p-paginator[_ngcontent-%COMP%]   .p-paginator-pages[_ngcontent-%COMP%]   .p-paginator-page[_ngcontent-%COMP%] {\n  margin: 1px !important;\n  min-width: 2rem !important;\n  height: 2rem !important;\n  color: #25a0e2 !important;\n}\n\n.p-paginator[_ngcontent-%COMP%]   .p-paginator-first[_ngcontent-%COMP%], .p-paginator[_ngcontent-%COMP%]   .p-paginator-prev[_ngcontent-%COMP%], .p-paginator[_ngcontent-%COMP%]   .p-paginator-next[_ngcontent-%COMP%], .p-paginator[_ngcontent-%COMP%]   .p-paginator-last[_ngcontent-%COMP%] {\n  min-width: 2rem !important;\n  height: 2rem !important;\n}\n\n.p-paginator[_ngcontent-%COMP%]   .p-paginator-first[_ngcontent-%COMP%]:not(.p-disabled):not(.p-highlight):hover, .p-paginator[_ngcontent-%COMP%]   .p-paginator-prev[_ngcontent-%COMP%]:not(.p-disabled):not(.p-highlight):hover, .p-paginator[_ngcontent-%COMP%]   .p-paginator-next[_ngcontent-%COMP%]:not(.p-disabled):not(.p-highlight):hover, .p-paginator[_ngcontent-%COMP%]   .p-paginator-last[_ngcontent-%COMP%]:not(.p-disabled):not(.p-highlight):hover {\n  background-color: #c5dfec !important;\n  color: white !important;\n}\n\n.p-paginator[_ngcontent-%COMP%]   .p-paginator-first[_ngcontent-%COMP%]:not(.p-disabled):not(.p-highlight):hover, .p-paginator[_ngcontent-%COMP%]   .p-paginator-prev[_ngcontent-%COMP%]:not(.p-disabled):not(.p-highlight):hover, .p-paginator[_ngcontent-%COMP%]   .p-paginator-next[_ngcontent-%COMP%]:not(.p-disabled):not(.p-highlight):hover, .p-paginator[_ngcontent-%COMP%]   .p-paginator-last[_ngcontent-%COMP%]:not(.p-disabled):not(.p-highlight):hover {\n  background-color: #c5dfec !important;\n  color: white !important;\n}\n\n.p-paginator[_ngcontent-%COMP%]   .p-paginator-pages[_ngcontent-%COMP%]   .p-paginator-page[_ngcontent-%COMP%]   .p-highlight[_ngcontent-%COMP%] {\n  background-color: #25a0e2 !important;\n  color: white !important;\n  border-radius: 19% !important;\n}\n\n.pi-angle-right[_ngcontent-%COMP%]:before {\n  color: #25a0e2 !important;\n}\n\n.pi-angle-left[_ngcontent-%COMP%]:before {\n  color: #25a0e2 !important;\n}\n\n.pi-angle-double-left[_ngcontent-%COMP%]:before {\n  color: #25a0e2 !important;\n}\n\n.pi-angle-double-right[_ngcontent-%COMP%]:before {\n  color: #25a0e2 !important;\n}\n\n.p-paginator[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  flex-wrap: nowrap !important;\n}\n\n.display[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  width: 100px;\n  height: 20px;\n  text-align: right;\n  margin-bottom: 15px;\n}\n\n.num-buttons[_ngcontent-%COMP%] {\n  display: grid;\n  \n  width: 100%;\n  justify-items: center;\n  grid-template-columns: 33px 33px 33px;\n  grid-template-rows: 30px 30px 30px 30px;\n  grid-template-areas: \". . .\" \". . .\" \". . .\" \". center .\";\n}\n\n.button-0[_ngcontent-%COMP%] {\n  grid-area: center;\n}\n\n.operator-buttons[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  justify-items: center;\n  grid-template-columns: 25px 25px 25px 25px;\n}\n\n.equals[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  width: 100px;\n  height: 25px;\n  background-color: yellow;\n  color: black;\n  text-align: center;\n}\n\np-paginator[_ngcontent-%COMP%]   .p-paginator-pages[_ngcontent-%COMP%]   .p-paginator-page[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 0 none;\n  border-top-color: currentcolor;\n  border-right-color: currentcolor;\n  border-bottom-color: currentcolor;\n  border-left-color: currentcolor;\n  color: #6c757d;\n  min-width: 3rem;\n  height: 3rem;\n  margin: 0.143rem;\n  transition: box-shadow 0.2s;\n  border-radius: 25%;\n}\n\n.img-thumbnail[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  background-color: var(--vz-body-bg);\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n\n.rounded-circle[_ngcontent-%COMP%] {\n  border-radius: 29% !important;\n}\n\n@media only screen and (min-width: 393px) {\n  .assessment-name[_ngcontent-%COMP%] {\n    margin-left: 12px !important;\n  }\n}\n\n\n\n@media only screen and (min-width: 768px) {\n  .assessment-name[_ngcontent-%COMP%] {\n    margin-left: 12px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW0tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQztFQUNHLG1CQUFBO0VBQ0EscURBQUE7QUFDSjs7QUFFQztFQUNHLDJCQUFBO0FBQ0o7O0FBRUk7RUFFSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0FBQVI7O0FBR0k7RUFDSSxhQUFBO0FBQVI7O0FBMEJBO0VBR0ksc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUF6Qko7O0FBNEJBO0VBQ0ksMEJBQUE7RUFDQSx1QkFBQTtBQXpCSjs7QUE0QkE7RUFDSSxvQ0FBQTtFQUNBLHVCQUFBO0FBekJKOztBQTJCQTtFQUNJLG9DQUFBO0VBQ0EsdUJBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBeEJKOztBQTJCQTtFQUNJLHlCQUFBO0FBeEJKOztBQTBCQTtFQUNJLHlCQUFBO0FBdkJKOztBQTBCQTtFQUNJLHlCQUFBO0FBdkJKOztBQTBCQTtFQUNJLHlCQUFBO0FBdkJKOztBQTJCQTtFQUNJLHVCQUFBO0VBQ0EsNEJBQUE7QUF4Qko7O0FBNEJBO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUF6Qko7O0FBNEJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHlEQUNFO0FBMUJOOztBQWlDRTtFQUNFLGlCQUFBO0FBOUJKOztBQWlDRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtBQTlCSjs7QUFpQ0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUE5Qko7O0FBaUNFO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDRixjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUE5Qko7O0FBaUNFO0VBQ0UsZ0JBQUE7RUFFQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUEvQko7O0FBbUNFO0VBQ0ksNkJBQUE7QUFoQ047O0FBb0NBO0VBQ0U7SUFDRSw0QkFBQTtFQWpDRjtBQUNGOztBQXlDQSxrREFBQTs7QUFDQTtFQUVFO0lBQ0UsNEJBQUE7RUF4Q0Y7QUFDRiIsImZpbGUiOiJleGFtLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC1oZWlnaHQge1xyXG4gICAgLy8gbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5mb290LWJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgXHJcbiB9XHJcbiAuYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjVhMGUyO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzEwNTM3OCwgIzI1YTBlMik7XHJcbiB9XHJcblxyXG4gLnVpLXBhZ2luYXRvciAudWktcGFnaW5hdG9yLXBhZ2VzIC51aS1wYWdpbmF0b3ItcGFnZXsgXHJcbiAgICBtaW4td2lkdGg6IDIuNWVtICFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG5cclxuICAgIGV4YW0tY2FyZC1mb290ZXIge1xyXG4gICAgICAgXHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG5cclxuLy8gICAuZmxvYXRpbmctbmF2LWJ0biAubGVmdC1mbG9hdCAubGVmdC1mbG9hdC10ZXh0OmhvdmVye1xyXG4vLyAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbi8vICAgICB9XHJcblxyXG4vLyAuaG92ZXItYnV0dG9uIHtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICB9XHJcblxyXG4vLyAgIC5ob3Zlci10ZXh0IHtcclxuLy8gICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5ob3Zlci1idXR0b246aG92ZXIgLmhvdmVyLXRleHQge1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgfVxyXG5cclxuXHJcblxyXG4ucC1wYWdpbmF0b3IgLnAtcGFnaW5hdG9yLXBhZ2VzIC5wLXBhZ2luYXRvci1wYWdlICB7XHJcbiAgICBcclxuICBcclxuICAgIG1hcmdpbjogMXB4IWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMnJlbSFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDJyZW0haW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMyNWEwZTIhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuLnAtcGFnaW5hdG9yIC5wLXBhZ2luYXRvci1maXJzdCwgLnAtcGFnaW5hdG9yIC5wLXBhZ2luYXRvci1wcmV2LCAucC1wYWdpbmF0b3IgLnAtcGFnaW5hdG9yLW5leHQsIC5wLXBhZ2luYXRvciAucC1wYWdpbmF0b3ItbGFzdCB7XHJcbiAgICBtaW4td2lkdGg6IDJyZW0haW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAycmVtIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi5wLXBhZ2luYXRvciAucC1wYWdpbmF0b3ItZmlyc3Q6bm90KC5wLWRpc2FibGVkKTpub3QoLnAtaGlnaGxpZ2h0KTpob3ZlciwgLnAtcGFnaW5hdG9yIC5wLXBhZ2luYXRvci1wcmV2Om5vdCgucC1kaXNhYmxlZCk6bm90KC5wLWhpZ2hsaWdodCk6aG92ZXIsIC5wLXBhZ2luYXRvciAucC1wYWdpbmF0b3ItbmV4dDpub3QoLnAtZGlzYWJsZWQpOm5vdCgucC1oaWdobGlnaHQpOmhvdmVyLCAucC1wYWdpbmF0b3IgLnAtcGFnaW5hdG9yLWxhc3Q6bm90KC5wLWRpc2FibGVkKTpub3QoLnAtaGlnaGxpZ2h0KTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNWRmZWMhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxufVxyXG4ucC1wYWdpbmF0b3IgLnAtcGFnaW5hdG9yLWZpcnN0Om5vdCgucC1kaXNhYmxlZCk6bm90KC5wLWhpZ2hsaWdodCk6aG92ZXIsIC5wLXBhZ2luYXRvciAucC1wYWdpbmF0b3ItcHJldjpub3QoLnAtZGlzYWJsZWQpOm5vdCgucC1oaWdobGlnaHQpOmhvdmVyLCAucC1wYWdpbmF0b3IgLnAtcGFnaW5hdG9yLW5leHQ6bm90KC5wLWRpc2FibGVkKTpub3QoLnAtaGlnaGxpZ2h0KTpob3ZlciwgLnAtcGFnaW5hdG9yIC5wLXBhZ2luYXRvci1sYXN0Om5vdCgucC1kaXNhYmxlZCk6bm90KC5wLWhpZ2hsaWdodCk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVkZmVjIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLXBhZ2luYXRvciAucC1wYWdpbmF0b3ItcGFnZXMgLnAtcGFnaW5hdG9yLXBhZ2UgLnAtaGlnaGxpZ2h0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1YTBlMiFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTklIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBpLWFuZ2xlLXJpZ2h0OmJlZm9yZSB7XHJcbiAgICBjb2xvcjogIzI1YTBlMiFpbXBvcnRhbnQ7XHJcbn1cclxuLnBpLWFuZ2xlLWxlZnQ6YmVmb3JlIHtcclxuICAgIGNvbG9yOiAjMjVhMGUyIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBpLWFuZ2xlLWRvdWJsZS1sZWZ0OmJlZm9yZSB7XHJcbiAgICBjb2xvcjogIzI1YTBlMiFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG4ucGktYW5nbGUtZG91YmxlLXJpZ2h0OmJlZm9yZSB7XHJcbiAgICBjb2xvcjogIzI1YTBlMiFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5cclxuLnAtcGFnaW5hdG9ye1xyXG4gICAgcGFkZGluZzogMHB4IWltcG9ydGFudDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5kaXNwbGF5IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLm51bS1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzcHggMzNweCAzM3B4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDMwcHggMzBweCAzMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICAgIFwiLiAuIC5cIlxyXG4gICAgICBcIi4gLiAuXCJcclxuICAgICAgXCIuIC4gLlwiXHJcbiAgICAgIFwiLiBjZW50ZXIgLlwiO1xyXG4gICAgICBcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbi0wIHtcclxuICAgIGdyaWQtYXJlYTogY2VudGVyXHJcbiAgfVxyXG4gIFxyXG4gIC5vcGVyYXRvci1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAyNXB4IDI1cHggMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmVxdWFscyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgcC1wYWdpbmF0b3IgLnAtcGFnaW5hdG9yLXBhZ2VzIC5wLXBhZ2luYXRvci1wYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgICAgIGJvcmRlci10b3AtY29sb3I6IGN1cnJlbnRjb2xvcjtcclxuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBjdXJyZW50Y29sb3I7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IGN1cnJlbnRjb2xvcjtcclxuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IGN1cnJlbnRjb2xvcjtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgbWluLXdpZHRoOiAzcmVtO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgbWFyZ2luOiAwLjE0M3JlbTtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcclxuICB9XHJcblxyXG4gIC5pbWctdGh1bWJuYWlsIHtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZ6LWJvZHktYmcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnJvdW5kZWQtY2lyY2xlIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjklICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzOTNweCkge1xyXG4gIC5hc3Nlc3NtZW50LW5hbWV7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBcclxuICAvLyAuZXhhbS1jYXJkLWZvb3RlcntcclxuICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIHN1Y2ggYXMgdGFibGV0cyAoNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gIC5hc3Nlc3NtZW50LW5hbWV7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAvLyAuZXhhbS1jYXJkLWZvb3RlcntcclxuICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyB9XHJcblxyXG59Il19 */"] });


/***/ }),

/***/ 33505:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/exam-preview/exam-page/multiple-response/multiple-response.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultipleResponseComponent": () => (/* binding */ MultipleResponseComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_enum_alphabetList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enum/alphabetList */ 12293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/item.service */ 17154);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _components_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/calculator/calculator.component */ 67495);
/* harmony import */ var _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/revisit-button/revisit-button.component */ 13205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);








function MultipleResponseComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MultipleResponseComponent_ng_container_30_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const option_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.optionClicked(option_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function MultipleResponseComponent_ng_container_30_Template_input_change_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const option_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.optionSelected(option_r1.value, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function MultipleResponseComponent_ng_container_30_Template_span_change_7_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const option_r1 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.optionSelected(option_r1.value, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.alphabetList[i_r2].toLowerCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r0.getCurrentQuestion().responses.includes(option_r1.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", option_r1.label, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
class MultipleResponseComponent {
    constructor(itemService, notifierService) {
        this.itemService = itemService;
        this.notifierService = notifierService;
        // currentQuestion: ICandidateItem;
        this.alphabetList = src_app_shared_enum_alphabetList__WEBPACK_IMPORTED_MODULE_0__.AlphabetList;
        this.currentQuestionNumber = 0;
    }
    ngOnInit() {
        // this.setCurrentQuestion();
        this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
    }
    getCurrentQuestion() {
        return this.itemService.getCurrentQuestion();
    }
    optionSelected(value, event) {
        const currentQuestion = this.itemService.getCurrentQuestion();
        if (event.target.checked) {
            if (currentQuestion.responses.length < currentQuestion.max_responses) {
                if (!currentQuestion.responses.includes(value)) {
                    currentQuestion.responses.push(value);
                    console.log(currentQuestion.responses);
                }
            }
            else {
                // Prevent selecting more than max_responses
                event.target.checked = false;
                this.notifierService.notify("warning", `You can only select up to ${currentQuestion.max_responses} options.`);
            }
        }
        else {
            const indexToRemove = currentQuestion.responses.indexOf(value);
            if (indexToRemove !== -1) {
                currentQuestion.responses.splice(indexToRemove, 1);
                console.log(currentQuestion.responses);
            }
        }
        this.itemService.captureAttemptedQuestionNumber();
    }
    optionClicked(value) {
        const currentQuestion = this.itemService.getCurrentQuestion();
        if (!currentQuestion.responses.includes(value)) {
            if (currentQuestion.responses.length < currentQuestion.max_responses) {
                currentQuestion.responses.push(value);
                console.log(currentQuestion.responses);
            }
            else {
                this.notifierService.notify("warning", `You can only select up to ${currentQuestion.max_responses} options.`);
            }
        }
        else {
            const indexToRemove = currentQuestion.responses.indexOf(value);
            currentQuestion.responses.splice(indexToRemove, 1);
            console.log(currentQuestion.responses);
        }
        this.itemService.captureAttemptedQuestionNumber();
    }
}
MultipleResponseComponent.ɵfac = function MultipleResponseComponent_Factory(t) { return new (t || MultipleResponseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_1__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_5__.NotifierService)); };
MultipleResponseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MultipleResponseComponent, selectors: [["app-multiple-response"]], decls: 31, vars: 5, consts: [[1, "px-3"], [1, "d-flex", "row"], [1, "col-lg-6"], [1, "card", "card-body", "question-card", 2, "height", "62vh"], [1, "text-primary", "d-flex", "justify-content-between"], [1, "fw-bold", "py-lg-2"], [2, "height", "45vh", "overflow-x", "hidden"], [1, "mt-3", 3, "innerHtml"], [1, "d-flex", "justify-content-end"], [1, "card", 2, "height", "62vh"], [1, ""], [1, "mb-3"], [1, "row"], [1, "col-lg-12"], [1, "mt-1"], [1, "card-header", "border-bottom-dashed", "p-2"], [1, "d-flex", "justify-content-between"], [1, "card-title", "mb-0", "text-start", "text-primary"], [3, "questionNumber"], [2, "height", "48vh", "overflow-x", "hidden"], [1, "card-body", "px-1", 2, "overflow-y", "auto", "max-height", "80vh"], [4, "ngFor", "ngForOf"], [1, "d-flex", "card", "border-2", "border-light", "mx-3", "card-animate", 2, "padding", "0.4rem !important", "margin-bottom", "0.4rem !important", 3, "click"], [1, "d-flex"], [1, "mx-2", "fw-semibold"], [1, "form-check", "form-check-primary", "mb-1"], ["type", "checkbox", "id", "formCheck11", "name", "q", 1, "form-check-input", 3, "checked", "change"], ["for", "formCheck11", 1, "form-check-label", "align-bottom", 2, "cursor", "pointer", 3, "innerHTML", "change"]], template: function MultipleResponseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-simplebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ngx-simplebar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "app-calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Answer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "app-revisit-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "ngx-simplebar", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, MultipleResponseComponent_ng_container_30_Template, 8, 3, "ng-container", 21);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Question ", ctx.currentQuestionNumber + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().passage_stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("questionNumber", ctx.currentQuestionNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.getCurrentQuestion().options);
    } }, directives: [simplebar_angular__WEBPACK_IMPORTED_MODULE_6__.SimplebarAngularComponent, _components_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__.CalculatorComponent, _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_3__.RevisitButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], styles: [".foot-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpcGxlLXJlc3BvbnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoibXVsdGlwbGUtcmVzcG9uc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdC1iYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIFxyXG4gfSJdfQ== */"] });


/***/ }),

/***/ 81748:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/exam-preview/exam-page/standard-choice/standard-choice.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StandardChoiceComponent": () => (/* binding */ StandardChoiceComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_enum_alphabetList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enum/alphabetList */ 12293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/item.service */ 17154);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _components_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/calculator/calculator.component */ 67495);
/* harmony import */ var _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/revisit-button/revisit-button.component */ 13205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);







function StandardChoiceComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StandardChoiceComponent_ng_container_31_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const option_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.optionSelected(option_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StandardChoiceComponent_ng_container_31_Template_input_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const option_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.optionSelected(option_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StandardChoiceComponent_ng_container_31_Template_span_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const option_r1 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.optionSelected(option_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.alphabetList[i_r2].toLowerCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", option_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r0.getCurrentQuestion().responses[0] == option_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", option_r1.label, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
class StandardChoiceComponent {
    constructor(itemService) {
        this.itemService = itemService;
        this.alphabetList = src_app_shared_enum_alphabetList__WEBPACK_IMPORTED_MODULE_0__.AlphabetList;
        this.currentQuestionNumber = 0;
    }
    ngOnInit() {
        // this.getCurrentQuestion();
        this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
    }
    getCurrentQuestion() {
        return this.itemService.getCurrentQuestion();
    }
    optionSelected(value) {
        this.itemService.getCurrentQuestion().responses[0] = value;
        this.itemService.captureAttemptedQuestionNumber();
    }
}
StandardChoiceComponent.ɵfac = function StandardChoiceComponent_Factory(t) { return new (t || StandardChoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_1__.ItemService)); };
StandardChoiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StandardChoiceComponent, selectors: [["app-standard-choice"]], decls: 32, vars: 5, consts: [[1, "px-3"], [1, "d-flex", "row"], [1, "col-lg-6"], [1, "card", "card-body", "question-card", 2, "height", "62vh"], [1, "text-primary", "d-flex", "justify-content-between"], [1, "fw-bold", "py-lg-2"], [1, "scroll-height", 2, "height", "45vh", "overflow-x", "hidden"], [1, "mt-3", 3, "innerHtml"], [1, "d-flex", "justify-content-end"], [1, "card", 2, "height", "62vh"], [1, ""], [1, "mb-3"], [1, "row"], [1, "col-lg-12"], [1, "mt-1"], [1, "card-header", "border-bottom-dashed", "p-2"], [1, "d-flex", "justify-content-between"], [1, "card-title", "mb-0", "text-start", "text-primary"], [3, "questionNumber"], [2, "height", "48vh", "max-width", "100%", "overflow-x", "hidden"], [1, "card-body", "px-3", 2, "overflow-y", "auto", "max-height", "30%"], [4, "ngFor", "ngForOf"], [1, "d-flex", "card-animate", "card", "border-2", "border-light", 2, "padding", "0.4rem !important", "margin-bottom", "0.4rem !important", 3, "click"], [1, "d-flex"], [1, "mx-2", "fw-semibold"], [1, "form-check"], ["type", "radio", "name", "q", 1, "form-check-input", 3, "checked", "value", "click"], [2, "cursor", "pointer", 3, "innerHTML", "click"]], template: function StandardChoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-simplebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ngx-simplebar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "app-calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Answer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "app-revisit-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "ngx-simplebar", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, StandardChoiceComponent_ng_container_31_Template, 8, 4, "ng-container", 21);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Question ", ctx.currentQuestionNumber + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().passage_stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("questionNumber", ctx.currentQuestionNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.getCurrentQuestion().options);
    } }, directives: [simplebar_angular__WEBPACK_IMPORTED_MODULE_5__.SimplebarAngularComponent, _components_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__.CalculatorComponent, _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_3__.RevisitButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], styles: [".foot-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n\n@media (min-width: 576px) {\n  .custom-height[_ngcontent-%COMP%] {\n    height: 25%;\n  }\n}\n\n@media (min-width: 768px) {\n  .custom-height[_ngcontent-%COMP%] {\n    height: 50%;\n  }\n}\n\n@media (min-width: 992px) {\n  .custom-height[_ngcontent-%COMP%] {\n    height: 75%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .custom-height[_ngcontent-%COMP%] {\n    height: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YW5kYXJkLWNob2ljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNKOztBQU1JO0VBSEg7SUFJTyxXQUFBO0VBRk47QUFDRjs7QUFJSTtFQVBIO0lBUU8sV0FBQTtFQUROO0FBQ0Y7O0FBR0k7RUFYSDtJQVlPLFdBQUE7RUFBTjtBQUNGOztBQUVJO0VBZkg7SUFnQk8sV0FBQTtFQUNOO0FBQ0YiLCJmaWxlIjoic3RhbmRhcmQtY2hvaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3QtYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICBcclxuIH1cclxuXHJcbiAuY3VzdG9tLWhlaWdodCB7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7IC8vIERlZmF1bHQgaGVpZ2h0XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNSU7IC8vIEhlaWdodCBmb3Igc21hbGwgc2NyZWVucyBhbmQgdXBcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDUwJTsgLy8gSGVpZ2h0IGZvciBtZWRpdW0gc2NyZWVucyBhbmQgdXBcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDc1JTsgLy8gSGVpZ2h0IGZvciBsYXJnZSBzY3JlZW5zIGFuZCB1cFxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDgwJTsgLy8gSGVpZ2h0IGZvciBleHRyYS1sYXJnZSBzY3JlZW5zIGFuZCB1cFxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 27474:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/exam-preview/exam-page/true-or-false/true-or-false.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrueOrFalseComponent": () => (/* binding */ TrueOrFalseComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_enum_alphabetList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enum/alphabetList */ 12293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/item.service */ 17154);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/revisit-button/revisit-button.component */ 13205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);






function TrueOrFalseComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TrueOrFalseComponent_ng_container_29_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const option_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.optionSelected(option_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TrueOrFalseComponent_ng_container_29_Template_input_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const option_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.optionSelected(option_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TrueOrFalseComponent_ng_container_29_Template_span_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const option_r1 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.optionSelected(option_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.alphabetList[i_r2].toLowerCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", option_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r0.getCurrentQuestion().responses[0] == option_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", option_r1.label, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
class TrueOrFalseComponent {
    constructor(itemService) {
        this.itemService = itemService;
        // currentQuestion: ICandidateItem;
        this.alphabetList = src_app_shared_enum_alphabetList__WEBPACK_IMPORTED_MODULE_0__.AlphabetList;
        this.currentQuestionNumber = 0;
    }
    ngOnInit() {
        this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
        console.log("i was called");
    }
    optionSelected(value) {
        this.itemService.getCurrentQuestion().responses[0] = value;
        this.itemService.captureAttemptedQuestionNumber();
    }
    getCurrentQuestion() {
        return this.itemService.getCurrentQuestion();
    }
}
TrueOrFalseComponent.ɵfac = function TrueOrFalseComponent_Factory(t) { return new (t || TrueOrFalseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_1__.ItemService)); };
TrueOrFalseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TrueOrFalseComponent, selectors: [["app-true-or-false"]], decls: 30, vars: 5, consts: [[1, "px-3"], [1, "d-flex", "row"], [1, "col-lg-6"], [1, "card", "card-body", "question-card", "py-1", 2, "height", "62vh"], [1, "text-primary", "d-flex", "justify-content-between"], [1, "fw-bold", "py-lg-2"], [2, "height", "45vh", "overflow-x", "hidden"], [1, "mt-3", 3, "innerHtml"], [1, "card", 2, "height", "62vh"], [1, ""], [1, "mb-3"], [1, "row"], [1, "col-lg-12"], [1, "mt-1"], [1, "card-header", "border-bottom-dashed", "p-2"], [1, "d-flex", "justify-content-between"], [1, "card-title", "mb-0", "text-start", "text-primary"], [3, "questionNumber"], [1, "card-body", "px-3", 2, "overflow-y", "auto", "max-height", "30%"], [4, "ngFor", "ngForOf"], [1, "d-flex", "card-animate", "card", "border-2", "border-light", 2, "padding", "0.4rem !important", "margin-bottom", "0.4rem !important", 3, "click"], [1, "d-flex"], [1, "mx-2", "fw-semibold"], [1, "form-check"], ["type", "radio", "name", "q", 1, "form-check-input", 3, "checked", "value", "click"], [2, "cursor", "pointer", 3, "innerHTML", "click"]], template: function TrueOrFalseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-simplebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ngx-simplebar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Answer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "app-revisit-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ngx-simplebar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, TrueOrFalseComponent_ng_container_29_Template, 8, 4, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Question ", ctx.currentQuestionNumber + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().passage_stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("questionNumber", ctx.currentQuestionNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.getCurrentQuestion().options);
    } }, directives: [simplebar_angular__WEBPACK_IMPORTED_MODULE_4__.SimplebarAngularComponent, _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_2__.RevisitButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], styles: [".foot-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n\n.hover[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRydWUtb3ItZmFsc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFHQztFQUNHLGVBQUE7QUFBSiIsImZpbGUiOiJ0cnVlLW9yLWZhbHNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3QtYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICBcclxuIH1cclxuXHJcbiAuaG92ZXI6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiB9XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 50446:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/exam-preview/exam-page/yes-or-no/yes-or-no.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YesOrNoComponent": () => (/* binding */ YesOrNoComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_enum_alphabetList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enum/alphabetList */ 12293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/item.service */ 17154);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _components_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/calculator/calculator.component */ 67495);
/* harmony import */ var _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/revisit-button/revisit-button.component */ 13205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);







function YesOrNoComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function YesOrNoComponent_ng_container_31_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const option_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.optionSelected(option_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function YesOrNoComponent_ng_container_31_Template_input_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const option_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.optionSelected(option_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function YesOrNoComponent_ng_container_31_Template_span_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const option_r1 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.optionSelected(option_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.alphabetList[i_r2].toLowerCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", option_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r0.getCurrentQuestion().responses[0] == option_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", option_r1.label, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
class YesOrNoComponent {
    constructor(itemService) {
        this.itemService = itemService;
        // currentQuestion: ICandidateItem;
        this.alphabetList = src_app_shared_enum_alphabetList__WEBPACK_IMPORTED_MODULE_0__.AlphabetList;
        this.currentQuestionNumber = 0;
    }
    ngOnInit() {
        this.currentQuestionNumber = this.itemService.currentQuestionNumber;
        console.log("i was called");
    }
    optionSelected(value) {
        this.itemService.getCurrentQuestion().responses[0] = value;
        this.itemService.captureAttemptedQuestionNumber();
    }
    getCurrentQuestion() {
        return this.itemService.getCurrentQuestion();
    }
    showAnswer() {
        if (this.showAnswer) {
            this.itemService.getCurrentQuestion().responses =
                this.itemService.getCurrentQuestion().answers;
        }
        else {
            this.itemService.getCurrentQuestion().responses = [];
        }
    }
}
YesOrNoComponent.ɵfac = function YesOrNoComponent_Factory(t) { return new (t || YesOrNoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_1__.ItemService)); };
YesOrNoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: YesOrNoComponent, selectors: [["app-yes-or-no"]], decls: 32, vars: 5, consts: [[1, "px-3"], [1, "d-flex", "row"], [1, "col-lg-6"], [1, "card", "question-card", "card-body", "py-1", 2, "height", "62vh"], [1, "text-primary", "mt-4", "d-flex", "justify-content-between"], [1, "fw-bold", "py-lg-2"], [1, "srcoll-height", 2, "height", "45vh", "overflow-x", "hidden"], [1, "mt-3", 3, "innerHtml"], [1, "d-flex", "justify-content-end", "my-3"], [1, "card", 2, "height", "62vh"], [1, ""], [1, "mb-3"], [1, "row"], [1, "col-lg-12"], [1, "mt-1"], [1, "card-header", "border-bottom-dashed", "p-2"], [1, "d-flex", "justify-content-between"], [1, "card-title", "mb-0", "text-start", "text-primary"], [3, "questionNumber"], [2, "height", "48vh", "overflow-x", "hidden"], [1, "card-body", "px-3", 2, "overflow-y", "auto", "max-height", "30%"], [4, "ngFor", "ngForOf"], [1, "d-flex", "card-animate", "card", "border-2", "border-light", 2, "padding", "0.4rem !important", "margin-bottom", "0.4rem !important", 3, "click"], [1, "d-flex"], [1, "mx-2", "fw-semibold"], [1, "form-check"], ["type", "radio", "name", "q", 1, "form-check-input", 3, "checked", "value", "click"], [2, "cursor", "pointer", 3, "innerHTML", "click"]], template: function YesOrNoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-simplebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ngx-simplebar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "app-calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Answer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "app-revisit-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "ngx-simplebar", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, YesOrNoComponent_ng_container_31_Template, 8, 4, "ng-container", 21);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Question ", ctx.currentQuestionNumber + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().passage_stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx.getCurrentQuestion().stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("questionNumber", ctx.currentQuestionNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.getCurrentQuestion().options);
    } }, directives: [simplebar_angular__WEBPACK_IMPORTED_MODULE_5__.SimplebarAngularComponent, _components_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__.CalculatorComponent, _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_3__.RevisitButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ5ZXMtb3Itbm8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 13487:
/*!*******************************************************************!*\
  !*** ./src/app/pages/exam-preview/exam-preview-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamPreviewRoutingModule": () => (/* binding */ ExamPreviewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _exam_page_exam_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam-page/exam-page.component */ 87339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: ":assessmentId", component: _exam_page_exam_page_component__WEBPACK_IMPORTED_MODULE_0__.ExamPageComponent }];
class ExamPreviewRoutingModule {
}
ExamPreviewRoutingModule.ɵfac = function ExamPreviewRoutingModule_Factory(t) { return new (t || ExamPreviewRoutingModule)(); };
ExamPreviewRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExamPreviewRoutingModule });
ExamPreviewRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExamPreviewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 45338:
/*!***********************************************************!*\
  !*** ./src/app/pages/exam-preview/exam-preview.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamPreviewModule": () => (/* binding */ ExamPreviewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _exam_preview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam-preview-routing.module */ 13487);
/* harmony import */ var _exam_page_exam_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-page/exam-page.component */ 87339);
/* harmony import */ var _exam_page_choice_matrix_choice_matrix_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exam-page/choice-matrix/choice-matrix.component */ 91359);
/* harmony import */ var _exam_page_multiple_response_multiple_response_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exam-page/multiple-response/multiple-response.component */ 33505);
/* harmony import */ var _exam_page_true_or_false_true_or_false_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exam-page/true-or-false/true-or-false.component */ 27474);
/* harmony import */ var _exam_page_yes_or_no_yes_or_no_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exam-page/yes-or-no/yes-or-no.component */ 50446);
/* harmony import */ var _components_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/calculator/calculator.component */ 67495);
/* harmony import */ var _components_reset_button_reset_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/reset-button/reset-button.component */ 77861);
/* harmony import */ var _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/revisit-button/revisit-button.component */ 13205);
/* harmony import */ var _exam_page_classify_by_matching_classify_by_matching_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exam-page/classify-by-matching/classify-by-matching.component */ 95041);
/* harmony import */ var _exam_page_classify_by_ordering_classify_by_ordering_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exam-page/classify-by-ordering/classify-by-ordering.component */ 98272);
/* harmony import */ var _exam_page_cloze_image_with_drag_drop_cloze_image_with_drag_drop_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exam-page/cloze-image-with-drag-drop/cloze-image-with-drag-drop.component */ 75594);
/* harmony import */ var _exam_page_cloze_image_with_dropdown_cloze_image_with_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./exam-page/cloze-image-with-dropdown/cloze-image-with-dropdown.component */ 27595);
/* harmony import */ var _exam_page_cloze_image_with_text_cloze_image_with_text_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./exam-page/cloze-image-with-text/cloze-image-with-text.component */ 63157);
/* harmony import */ var _exam_page_cloze_with_drop_down_cloze_with_drop_down_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./exam-page/cloze-with-drop-down/cloze-with-drop-down.component */ 46988);
/* harmony import */ var _exam_page_cloze_with_text_cloze_with_text_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./exam-page/cloze-with-text/cloze-with-text.component */ 87295);
/* harmony import */ var _exam_page_essay_with_rich_text_essay_with_rich_text_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./exam-page/essay-with-rich-text/essay-with-rich-text.component */ 33434);
/* harmony import */ var _exam_page_essay_with_short_text_essay_with_short_text_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./exam-page/essay-with-short-text/essay-with-short-text.component */ 43566);
/* harmony import */ var _exam_page_standard_choice_standard_choice_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./exam-page/standard-choice/standard-choice.component */ 81748);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 24169);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 28155);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angular-archwizard */ 38531);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/paginator */ 21066);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);






























class ExamPreviewModule {
}
ExamPreviewModule.ɵfac = function ExamPreviewModule_Factory(t) { return new (t || ExamPreviewModule)(); };
ExamPreviewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: ExamPreviewModule });
ExamPreviewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
            _exam_preview_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExamPreviewRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_22__.PaginatorModule,
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_23__.EditorModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbDropdownModule,
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_25__.CKEditorModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_26__.NgSelectModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__.DragDropModule,
            simplebar_angular__WEBPACK_IMPORTED_MODULE_28__.SimplebarAngularModule,
            angular_archwizard__WEBPACK_IMPORTED_MODULE_29__.ArchwizardModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbCarouselModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbTooltipModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](ExamPreviewModule, { declarations: [_exam_page_exam_page_component__WEBPACK_IMPORTED_MODULE_1__.ExamPageComponent,
        // EndExamPageComponent,
        // InstructionPageComponent,
        _exam_page_true_or_false_true_or_false_component__WEBPACK_IMPORTED_MODULE_4__.TrueOrFalseComponent,
        _exam_page_yes_or_no_yes_or_no_component__WEBPACK_IMPORTED_MODULE_5__.YesOrNoComponent,
        _exam_page_multiple_response_multiple_response_component__WEBPACK_IMPORTED_MODULE_3__.MultipleResponseComponent,
        // NavigatorComponent,
        _exam_page_standard_choice_standard_choice_component__WEBPACK_IMPORTED_MODULE_18__.StandardChoiceComponent,
        _exam_page_essay_with_short_text_essay_with_short_text_component__WEBPACK_IMPORTED_MODULE_17__.EssayWithShortTextComponent,
        _exam_page_essay_with_rich_text_essay_with_rich_text_component__WEBPACK_IMPORTED_MODULE_16__.EssayWithRichTextComponent,
        _exam_page_classify_by_ordering_classify_by_ordering_component__WEBPACK_IMPORTED_MODULE_10__.ClassifyByOrderingComponent,
        _exam_page_classify_by_matching_classify_by_matching_component__WEBPACK_IMPORTED_MODULE_9__.ClassifyByMatchingComponent,
        _exam_page_cloze_with_text_cloze_with_text_component__WEBPACK_IMPORTED_MODULE_15__.ClozeWithTextComponent,
        _exam_page_cloze_with_drop_down_cloze_with_drop_down_component__WEBPACK_IMPORTED_MODULE_14__.ClozeWithDropDownComponent,
        _components_reset_button_reset_button_component__WEBPACK_IMPORTED_MODULE_7__.ResetButtonComponent,
        // OnboardingComponent,
        // WelcomePageComponent,
        _components_revisit_button_revisit_button_component__WEBPACK_IMPORTED_MODULE_8__.RevisitButtonComponent,
        _components_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_6__.CalculatorComponent,
        _exam_page_cloze_image_with_text_cloze_image_with_text_component__WEBPACK_IMPORTED_MODULE_13__.ClozeImageWithTextComponent,
        _exam_page_cloze_image_with_dropdown_cloze_image_with_dropdown_component__WEBPACK_IMPORTED_MODULE_12__.ClozeImageWithDropdownComponent,
        _exam_page_cloze_image_with_drag_drop_cloze_image_with_drag_drop_component__WEBPACK_IMPORTED_MODULE_11__.ClozeImageWithDragDropComponent,
        _exam_page_choice_matrix_choice_matrix_component__WEBPACK_IMPORTED_MODULE_2__.ChoiceMatrixComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
        _exam_preview_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExamPreviewRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_22__.PaginatorModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_23__.EditorModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbDropdownModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_25__.CKEditorModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_26__.NgSelectModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__.DragDropModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_28__.SimplebarAngularModule,
        angular_archwizard__WEBPACK_IMPORTED_MODULE_29__.ArchwizardModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbCarouselModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbTooltipModule], exports: [_exam_page_exam_page_component__WEBPACK_IMPORTED_MODULE_1__.ExamPageComponent, _exam_page_exam_page_component__WEBPACK_IMPORTED_MODULE_1__.ExamPageComponent] }); })();


/***/ }),

/***/ 88291:
/*!******************************************************************!*\
  !*** ./src/app/pages/exam-preview/services/candidate.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateService": () => (/* binding */ CandidateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 45398);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 46774);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 55217);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);





class CandidateService {
    constructor(http) {
        this.http = http;
        this.preloginData = null;
        this.isExamOn = false;
        this.isExamEnded = false;
    }
    fetchPreLoginData() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/candidate/fetch_prelogin_data`);
    }
    doAutoSave(assessmentId, loginValue, payload) {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/candidate/auto_save/assessment/${assessmentId}/login_value/${loginValue}`, payload)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retryWhen)((errors) => errors.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.scan)((retryCount, error) => {
            console.error(`Retry attempt #${retryCount + 1}`, error);
            return retryCount + 1;
        }, 0), 
        // Delay increases exponentially: 2s, 4s, 8s, etc.
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delayWhen)((retryCount) => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(Math.pow(2, retryCount) * 1000)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => console.log("Retrying...")))));
    }
    doEndExam(payload, assessmentId, loginValue, timedOut) {
        const endExamPayload = {
            autosave: payload,
            timed_out: timedOut,
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/candidate/end_exam/assessment/${assessmentId}/login_value/${loginValue}`, endExamPayload);
    }
    setPreLoginData(preloginData) {
        this.preloginData = preloginData;
    }
    getPreLoginData() {
        return this.preloginData;
    }
    setCandidateData(candidateDate) {
        this.candidateData = candidateDate;
    }
    getCandidateData() {
        return this.candidateData;
    }
    clearPreLoginData() {
        this.preloginData = null;
    }
    clearCandidateData() {
        this.candidateData = null;
    }
}
CandidateService.ɵfac = function CandidateService_Factory(t) { return new (t || CandidateService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient)); };
CandidateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: CandidateService, factory: CandidateService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 77760:
/*!*********************************************************************!*\
  !*** ./src/app/pages/exam-preview/services/exam-preview.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamPreviewService": () => (/* binding */ ExamPreviewService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class ExamPreviewService {
    constructor(http) {
        this.http = http;
    }
    fetchExamPreview(assessmentId) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/preview`, { withCredentials: true });
    }
    fetchAssesmentPreviewDetails(assessmentId) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/preview_assessment`, { withCredentials: true });
    }
    fetchAssessmentSectionPreview(assessmentId, sectionId) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/itembank/assessments/${assessmentId}/preview_section/${sectionId}`, { withCredentials: true });
    }
}
ExamPreviewService.ɵfac = function ExamPreviewService_Factory(t) { return new (t || ExamPreviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ExamPreviewService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ExamPreviewService, factory: ExamPreviewService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 17154:
/*!*************************************************************!*\
  !*** ./src/app/pages/exam-preview/services/item.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemService": () => (/* binding */ ItemService)
/* harmony export */ });
/* harmony import */ var src_app_shared_enum_blockTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enum/blockTypes */ 92413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _candidate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./candidate.service */ 88291);



class ItemService {
    constructor(candidateService) {
        this.candidateService = candidateService;
        this.currentQuestionNumber = 0;
        this.attemptedQuestionNumbers = [];
        this.unAttemptedQuestionNumbers = [];
        this.revisitQuestionNumbers = [];
        // private items: ICandidateItem[] = [
        //   {
        //     id: "1",
        //     item_type: ItemType.RICH_ESSAY,
        //     stimulus: "write richly What do you understand by Devotion  ",
        //     possible_responses: [],
        //     answers: [],
        //     options: [],
        //   },
        //   {
        //     id: "2",
        //     item_type: ItemType.SHORT_ESSAY,
        //     stimulus: "write shortly What do you understand by Devotion",
        //     possible_responses: [],
        //     answers: [],
        //     options: [],
        //     numerical: false,
        //   },
        //   {
        //     id: "3",
        //     item_type: ItemType.TRUE_FALSE,
        //     stimulus: "The capital of Nigeria is Lagos ?",
        //     possible_responses: [],
        //     answers: [],
        //     options: [
        //       { label: "TRUE", value: "1" },
        //       { label: "False", value: "2" },
        //     ],
        //     numerical: false,
        //     selectedResponse: "",
        //   },
        //   {
        //     id: "4",
        //     item_type: ItemType.TRUE_FALSE,
        //     stimulus: "The capital of Nigeria is Lagos Part2 ?",
        //     possible_responses: [],
        //     answers: [],
        //     options: [
        //       { label: "Correct", value: "1" },
        //       { label: "Wrong", value: "2" },
        //     ],
        //     numerical: false,
        //     selectedResponse: "",
        //   },
        //   {
        //     id: "5",
        //     item_type: ItemType.TRUE_FALSE,
        //     stimulus: "I dont expect u to work ?",
        //     possible_responses: [],
        //     answers: [],
        //     options: [
        //       { label: "TRUE", value: "1" },
        //       { label: "False", value: "2" },
        //     ],
        //     numerical: false,
        //     selectedResponse: "",
        //   },
        //   {
        //     id: "6",
        //     item_type: ItemType.TRUE_FALSE,
        //     stimulus: "I dont expect u too to work ?",
        //     possible_responses: [],
        //     answers: [],
        //     options: [
        //       { label: "Abi", value: "1" },
        //       { label: "Rara", value: "2" },
        //     ],
        //     numerical: false,
        //     selectedResponse: "",
        //   },
        //   {
        //     id: "7",
        //     item_type: ItemType.MCQ,
        //     stimulus: "The sum of 2 and 4 is  ?",
        //     possible_responses: [],
        //     answers: [],
        //     options: [
        //       { label: "4", value: "1" },
        //       { label: "5", value: "2" },
        //       { label: "6", value: "3" },
        //       { label: "7", value: "4" },
        //     ],
        //     numerical: false,
        //   },
        //   {
        //     id: "8",
        //     item_type: ItemType.MCQ,
        //     stimulus: "The Difference of 4 and 1 is  ?",
        //     possible_responses: [],
        //     answers: [],
        //     options: [
        //       { label: "3", value: "1" },
        //       { label: "1", value: "2" },
        //       { label: "0", value: "3" },
        //       { label: "9", value: "4" },
        //     ],
        //     numerical: false,
        //   },
        //   {
        //     id: "9",
        //     item_type: ItemType.MRQ,
        //     stimulus: "Which of the following are correct about Nigeria  ?",
        //     possible_responses: [],
        //     answers: [],
        //     options: [
        //       { label: "Flag has 3 colors", value: "1" },
        //       { label: "Has 37 states", value: "2" },
        //       { label: "Colonised by Ghana", value: "3" },
        //       { label: "Has military Govt", value: "4" },
        //     ],
        //     numerical: false,
        //   },
        //   {
        //     id: "10",
        //     item_type: ItemType.MRQ,
        //     stimulus: "Which of the following are correct about Abuja  ?",
        //     possible_responses: [],
        //     answers: [],
        //     options: [
        //       { label: "Has military Govt", value: "1" },
        //       { label: "Largest city in Nigeria", value: "2" },
        //       { label: "Colonised by Ghana", value: "3" },
        //       { label: "Is not the capital of Nigeria  ", value: "4" },
        //     ],
        //     numerical: false,
        //   },
        //   {
        //     id: "11",
        //     item_type: ItemType.CLOZE_TEXT,
        //     stimulus:
        //       "ade is a {{response}} and he is from {{response}} he also likes {{response}}, he goes to {{response}} school, he is {{response}} and {{response}} and {{response}} however, whenever he is with is friend {{response}} he likes {{response}} and this makes him really {{response}}. The auto of this question is {{response}} ade is a {{response}} and he is from {{response}} he also likes {{response}}, he goes to {{response}} school, he is {{response}} and {{response}} and {{response}} however, whenever he is with is friend {{response}} he likes {{response}} and this makes him really {{response}}. The auto of this question is {{response}} ade is a {{response}} and he is from {{response}} he also likes {{response}}, he goes to {{response}} school, he is {{response}} and {{response}} and {{response}} however, whenever he is with is friend {{response}} he likes {{response}} and this makes him really {{response}}. The auto of this question is {{response}} ade is a {{response}} and he is from {{response}} he also likes {{response}}, he goes to {{response}} school, he is {{response}} and {{response}} and {{response}} however, whenever he is with is friend {{response}} he likes {{response}} and this makes him really {{response}}. The auto of this question is {{response}} ade is a {{response}} and he is from {{response}} he also likes {{response}}, he goes to {{response}} school, he is {{response}} and {{response}} and {{response}} however, whenever he is with is friend {{response}} he likes {{response}} and this makes him really {{response}}. The auto of this question is {{response}} ade is a {{response}} and he is from {{response}} he also likes {{response}}, he goes to {{response}} school, he is {{response}} and {{response}} and {{response}} however, whenever he is with is friend {{response}} he likes {{response}} and this makes him really {{response}}. The auto of this question is {{response}}",
        //     possible_responses: [],
        //     answers: [],
        //     options: [],
        //     numerical: false,
        //   },
        //   {
        //     id: "12",
        //     item_type: ItemType.CLOZE_TEXT,
        //     stimulus:
        //       "tunde is a {{response}} and he is from {{response}} he also likes {{response}}, he goes to {{response}} school, he is {{response}} and {{response}} and {{response}} however, whenever he is with is friend {{response}} he likes {{response}} and this makes him really {{response}}. The auto of this question is {{response}}",
        //     possible_responses: [],
        //     answers: [],
        //     options: [],
        //     numerical: false,
        //   },
        //   {
        //     id: "13",
        //     item_type: ItemType.CLOZE_DROPDOWN,
        //     stimulus: "Nigeria is a {{response}} located in {{response}}",
        //     possible_responses: [
        //       { responses: ["country", "city"] },
        //       { responses: ["america", "Angola"] },
        //     ],
        //     answers: [],
        //     options: [],
        //     numerical: false,
        //   },
        //   {
        //     id: "14",
        //     item_type: ItemType.CLOZE_DROPDOWN,
        //     stimulus:
        //       "Togo is a {{response}} located in {{response}} it is known for {{response}} resources and {{response}}",
        //     possible_responses: [
        //       { responses: ["town", "country"] },
        //       { responses: ["america", "canada"] },
        //       { responses: ["mineral", "natural"] },
        //       { responses: ["Salvery", "Faaji"] },
        //     ],
        //     answers: [],
        //     options: [],
        //     numerical: false,
        //   },
        //   {
        //     id: "15",
        //     item_type: ItemType.CLOZE_TEXT,
        //     stimulus:
        //       "Bola is a {{response}} and he is from {{response}} he also likes {{response}}, he goes to {{response}} school, he is {{response}} and {{response}} and {{response}} however, whenever he is with is friend {{response}} he likes {{response}} and this makes him really {{response}}. The auto of this question is {{response}}",
        //     possible_responses: [],
        //     answers: [],
        //     options: [],
        //     numerical: false,
        //   },
        //   {
        //     id: "16",
        //     item_type: ItemType.SHORT_ESSAY,
        //     stimulus: "write shortly What do you understand by Devotion",
        //     possible_responses: [],
        //     answers: [],
        //     options: [],
        //     numerical: false,
        //   },
        //   {
        //     id: "17",
        //     item_type: ItemType.RICH_ESSAY,
        //     stimulus: "write richly What do you understand by Devotion  ",
        //     possible_responses: [],
        //     answers: [],
        //     options: [],
        //     numerical: false,
        //   },
        //   {
        //     id: "18",
        //     item_type: ItemType.RICH_ESSAY,
        //     stimulus:
        //       "In not less than 100 words explain richly What do you understand by 'bu45bub45uber' In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber' ",
        //     possible_responses: [],
        //     answers: [],
        //     options: [],
        //     numerical: false,
        //   },
        //   {
        //     id: "19",
        //     item_type: ItemType.SHORT_ESSAY,
        //     stimulus: "Briefly tell me about yourself ",
        //     possible_responses: [],
        //     answers: [],
        //     options: [],
        //     numerical: false,
        //   },
        //   {
        //     id: "20",
        //     item_type: ItemType.SHORT_ESSAY,
        //     stimulus: "Briefly tell me what you understand by programming ",
        //     possible_responses: [],
        //     answers: [],
        //     options: [],
        //     numerical: false,
        //   },
        //   {
        //     id: "21",
        //     item_type: ItemType.MATCHING,
        //     stimulus: "Match the following ",
        //     possible_responses: [],
        //     answers: [],
        //     options: [
        //       { label: "2001", value: "1" },
        //       { label: "2002", value: "2" },
        //       { label: "2003", value: "3" },
        //       { label: "2004", value: "4" },
        //       { label: "20012", value: "5" },
        //       { label: "20021", value: "6" },
        //       { label: "20013", value: "7" },
        //       { label: "2006", value: "8" },
        //       { label: "2000", value: "9" },
        //     ],
        //     numerical: false,
        //   },
        //   {
        //     id: "22",
        //     item_type: ItemType.MATCHING,
        //     stimulus: "Match the following ",
        //     possible_responses: [],
        //     answers: [],
        //     options: [
        //       { label: "2001", value: "1" },
        //       { label: "2002", value: "2" },
        //       { label: "2003", value: "3" },
        //       { label: "2004", value: "4" },
        //       { label: "20012", value: "5" },
        //       { label: "20021", value: "6" },
        //       { label: "20013", value: "7" },
        //       { label: "2006", value: "8" },
        //       { label: "2000", value: "9" },
        //     ],
        //     numerical: false,
        //   },
        //   {
        //     id: "23",
        //     item_type: ItemType.ORDERING,
        //     stimulus: "Order the following items ",
        //     possible_responses: [],
        //     answers: [],
        //     options: [
        //       { label: "2001", value: "1" },
        //       { label: "2002", value: "2" },
        //       { label: "2003", value: "3" },
        //       { label: "2004", value: "4" },
        //       { label: "20012", value: "5" },
        //       { label: "20021", value: "6" },
        //       { label: "20013", value: "7" },
        //       { label: "2006", value: "8" },
        //       { label: "2000", value: "9" },
        //     ],
        //     numerical: false,
        //   },
        //   {
        //     id: "24",
        //     item_type: ItemType.ORDERING,
        //     stimulus: "Order the following items part 2 ",
        //     possible_responses: [],
        //     answers: [],
        //     options: [
        //       { label: "200", value: "1" },
        //       { label: "202", value: "2" },
        //       { label: "203", value: "3" },
        //       { label: "004", value: "4" },
        //       { label: "2012", value: "5" },
        //       { label: "2021", value: "6" },
        //       { label: "2013", value: "7" },
        //       { label: "206", value: "8" },
        //       { label: "200", value: "9" },
        //     ],
        //     numerical: false,
        //   },
        //   {
        //     id: "25",
        //     item_type: ItemType.ORDERING,
        //     stimulus: "Order the following items part 3 ",
        //     possible_responses: [],
        //     answers: [],
        //     options: [
        //       { label: "201", value: "1" },
        //       { label: "22", value: "2" },
        //       { label: "23", value: "3" },
        //       { label: "04", value: "4" },
        //       { label: "212", value: "5" },
        //       { label: "221", value: "6" },
        //       { label: "203", value: "7" },
        //       { label: "20", value: "8" },
        //       { label: "210", value: "9" },
        //     ],
        //     numerical: false,
        //   },
        // ];
        this.sectionProgress = [];
        this.currentSection = "";
        this.items = [];
    }
    getItems() {
        return this.items;
    }
    getCurrentQuestionNumber() {
        return this.currentQuestionNumber;
    }
    getCurrentQuestion() {
        // console.log(this.currentQuestionNumber);
        // console.log(this.items[this.currentQuestionNumber]);
        return this.items[this.currentQuestionNumber];
    }
    getNextQuestionItemType() {
        console.log(this.currentQuestionNumber);
        return this.items[++this.currentQuestionNumber].item_type;
    }
    getPreviousQuestionItemType() {
        return this.items[--this.currentQuestionNumber].item_type;
    }
    // nextQuestionNumber(): number {
    //   ++this.currentQuestionNumber; //
    //   return this.currentQuestionNumber;
    // }
    // previousQuestionNumber(): number {
    //   --this.currentQuestionNumber;
    //   return this.currentQuestionNumber;
    // }
    navigateTo(index) {
        this.currentQuestionNumber = index;
        return this.items[this.currentQuestionNumber];
    }
    captureAttemptedQuestionNumber() {
        const currentQuestion = this.getCurrentQuestion();
        const currentSectionIndex = this.sectionProgress.findIndex((section) => section.sectionName === this.currentSection);
        if (currentSectionIndex === -1) {
            console.log("Section not found!");
            return;
        }
        const currentSection = this.sectionProgress[currentSectionIndex];
        // Helper function to check for valid responses
        const hasValidResponses = (responses) => responses.some((value) => value !== undefined && value.trim() !== "");
        const currentQuestionNumber = this.getCurrentQuestionNumber();
        // If the question has valid responses and is not already recorded as attempted
        if (hasValidResponses(currentQuestion.responses) &&
            !currentSection.attemptedQuestions.includes(currentQuestionNumber)) {
            currentSection.attemptedQuestions.push(currentQuestionNumber);
            this.attemptedQuestionNumbers = currentSection.attemptedQuestions;
            console.log(this.attemptedQuestionNumbers);
            console.log(`${currentSectionIndex} found section`);
        }
    }
    removeAttemptedQuestionNumber(questionNumber) {
        let indexOfQuestionNumber = this.attemptedQuestionNumbers.indexOf(questionNumber);
        if (indexOfQuestionNumber != -1) {
            this.attemptedQuestionNumbers.splice(indexOfQuestionNumber, 1);
        }
        else {
            console.log("Question number Not Found on attempted question number list");
        }
    }
    captureQuestionNumberForRevisit(questionNumber) {
        const foundSectionIndex = this.sectionProgress.findIndex((section) => section.sectionName === this.currentSection);
        if (!this.sectionProgress[foundSectionIndex].revisitQuestionNumbers.includes(questionNumber)) {
            // this.revisitQuestionNumbers.push(questionNumber);
            this.sectionProgress[foundSectionIndex].revisitQuestionNumbers.push(questionNumber);
        }
        this.getCurrentQuestion().revisit = true;
        return this.sectionProgress[foundSectionIndex].revisitQuestionNumbers;
    }
    removeQuestionNumberFromRevisit(questionNumber) {
        const foundSectionIndex = this.sectionProgress.findIndex((section) => section.sectionName === this.currentSection);
        this.getCurrentQuestion().revisit = false;
        if (this.sectionProgress[foundSectionIndex].revisitQuestionNumbers.includes(questionNumber)) {
            this.sectionProgress[foundSectionIndex].revisitQuestionNumbers.splice(questionNumber, 1);
        }
    }
    getQuestionNumbersForRevisitInsection(sectionName) {
        this.revisitQuestionNumbers = [];
        const foundSectionIndex = this.sectionProgress.findIndex((section) => section.sectionName === sectionName);
        this.sectionProgress[foundSectionIndex].revisitQuestionNumbers = [];
        this.getItems().forEach((item, index) => {
            if (item.revisit == true) {
                this.revisitQuestionNumbers.push(index);
                this.sectionProgress[foundSectionIndex].revisitQuestionNumbers.push(index);
            }
        });
        return this.sectionProgress[foundSectionIndex].revisitQuestionNumbers;
    }
    getUnattemptedQuestionNumbersInSection(sectionName) {
        this.unAttemptedQuestionNumbers = [];
        const foundSectionIndex = this.sectionProgress.findIndex((section) => section.sectionName.toLowerCase() === sectionName.toLowerCase());
        this.getItems().forEach((item, index) => {
            let hasValidResponse = item.responses.some((value) => value !== undefined && value.trim() !== "");
            console.log(item, "unattempted");
            if (!hasValidResponse) {
                this.unAttemptedQuestionNumbers.push(index);
                console.log(this.unAttemptedQuestionNumbers, "unattt");
                this.sectionProgress[foundSectionIndex].unAttemptedQuestionNumbers.push(index);
            }
        });
        return this.unAttemptedQuestionNumbers;
    }
    getUnattemptedQuestionsInAllSections() {
        let unattemptedQuestions = [];
        this.candidateService.candidateData.sections_questions.forEach((section) => {
            let unattemptedQuestionNumbers = [];
            let currentIndex = 1;
            section.question_blocks.forEach((block) => {
                block.items.forEach((item) => {
                    let hasValidResponse = item.responses.some((value) => value !== undefined && value.trim() !== "");
                    if (!hasValidResponse) {
                        unattemptedQuestionNumbers.push(currentIndex);
                    }
                    currentIndex++;
                });
            });
            unattemptedQuestions.push({
                sectionName: section.name,
                unattemptedQuestion: unattemptedQuestionNumbers,
            });
        });
        return unattemptedQuestions;
    }
    setSectionQuestion(sectionName) {
        console.log(sectionName, "Section name");
        this.items = [];
        this.currentSection = sectionName;
        const founditemsFromSection = this.candidateService
            .getCandidateData()
            .sections_questions.find((section) => sectionName === section.name);
        console.log(founditemsFromSection, "items from section");
        // todo: sort out passage questions
        founditemsFromSection.question_blocks.forEach((questionBlock) => {
            if (questionBlock.block_type === src_app_shared_enum_blockTypes__WEBPACK_IMPORTED_MODULE_0__.BlockType.SINGLE_QUESTIONS) {
                questionBlock.items.forEach((item) => {
                    item.block_id = questionBlock.id;
                    this.items.push(item);
                });
            }
            else if (questionBlock.block_type === src_app_shared_enum_blockTypes__WEBPACK_IMPORTED_MODULE_0__.BlockType.PASSAGES) {
                questionBlock.passages.forEach((passage) => {
                    passage.items.forEach((item) => {
                        this.items.push(item);
                        item.block_id = questionBlock.id;
                        item.passage_stimulus = passage.stimulus;
                        // this.items.push(item);
                    });
                });
            }
            // this.items.push(questionBlock.items);
        });
        console.log(this.candidateService.getCandidateData().sections_questions, "section questions");
        // this.captureAttemptedQuestionNumber();
        console.log(this.sectionProgress);
        console.log(this.currentSection, "current section");
        const foundSectionIndex = this.sectionProgress.findIndex((section) => section.sectionName === this.currentSection);
        this.items.forEach((item, index) => {
            let hasValidResponse = item.responses.length !== 0 &&
                !item.responses.includes(undefined) &&
                !item.responses.some((value) => value === "" || value.trim() === "");
            if (hasValidResponse) {
                if (!this.sectionProgress[foundSectionIndex].attemptedQuestions.includes(index)) {
                    this.sectionProgress[foundSectionIndex].attemptedQuestions.push(index);
                }
                console.log(index + "attempted");
            }
        });
        this.attemptedQuestionNumbers =
            this.sectionProgress[foundSectionIndex].attemptedQuestions;
        this.revisitQuestionNumbers =
            this.sectionProgress[foundSectionIndex].revisitQuestionNumbers;
        console.log(this.items);
    }
    displayAllSectionsAtOnce() {
        this.items = [];
        this.currentSection = "All";
        this.candidateService
            .getCandidateData()
            .sections_questions.forEach((sectionQuestion) => {
            sectionQuestion.question_blocks.forEach((questionBlock) => {
                questionBlock.items.forEach((item) => {
                    this.items.push(item);
                });
            });
        });
        console.log(this.candidateService.getCandidateData().sections_questions);
        // this.captureAttemptedQuestionNumber();
        const foundSectionIndex = this.sectionProgress.findIndex((section) => section.sectionName === this.currentSection);
        this.items.forEach((item, index) => {
            if (item.responses.length !== 0) {
                if (!this.sectionProgress[foundSectionIndex].attemptedQuestions.includes(index)) {
                    this.sectionProgress[foundSectionIndex].attemptedQuestions.push(index);
                }
                console.log(index + "attempted");
            }
        });
        // this.attemptedQuestionNumbers =
        //   this.sectionProgress[foundSectionIndex].attemptedQuestions;
        // this.revisitQuestionNumbers =
        //   this.sectionProgress[foundSectionIndex].revisitQuestionNumbers;
    }
    getAssessmentSections() {
        const assessmentSections = [];
        this.candidateService.candidateData.sections_questions.forEach((section) => {
            assessmentSections.push({ name: section.name, id: section.id });
            this.sectionProgress.push({
                sectionName: section.name,
                attemptedQuestions: [],
                revisitQuestionNumbers: [],
                unAttemptedQuestionNumbers: [],
                totalQuestions: section.question_blocks.reduce((total, block) => total + block.total_questions, 0),
            });
        });
        console.log(this.sectionProgress + "section prog");
        return assessmentSections;
    }
    getSectionProgress() {
        return this.sectionProgress;
    }
    getSectionOverview(sectionName) {
        let attempted = [];
        let revisit = [];
        let unAttempted = [];
        const foundSection = this.sectionProgress.find((section) => section.sectionName === sectionName);
        if (foundSection) {
            attempted = foundSection.attemptedQuestions;
            revisit = foundSection.revisitQuestionNumbers;
            unAttempted = foundSection.unAttemptedQuestionNumbers;
            return { attempted, revisit, unAttempted };
        }
        return { attempted, revisit, unAttempted };
    }
}
ItemService.ɵfac = function ItemService_Factory(t) { return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_candidate_service__WEBPACK_IMPORTED_MODULE_1__.CandidateService)); };
ItemService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ItemService, factory: ItemService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 12293:
/*!*********************************************!*\
  !*** ./src/app/shared/enum/alphabetList.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlphabetList": () => (/* binding */ AlphabetList)
/* harmony export */ });
const AlphabetList = [
    "(A)",
    "(B)",
    "(C)",
    "(D)",
    "(E)",
    "(F)",
    "(G)",
];


/***/ }),

/***/ 37902:
/*!************************************************!*\
  !*** ./src/app/shared/enum/assessmentFonts.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssessmentFont": () => (/* binding */ AssessmentFont)
/* harmony export */ });
var AssessmentFont;
(function (AssessmentFont) {
    AssessmentFont["SMALL"] = "SMALL";
    AssessmentFont["DEFAULT"] = "DEFAULT";
    AssessmentFont["NORMAL"] = "NORMAL";
    AssessmentFont["LARGE"] = " LARGE";
})(AssessmentFont || (AssessmentFont = {}));


/***/ }),

/***/ 92413:
/*!*******************************************!*\
  !*** ./src/app/shared/enum/blockTypes.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockType": () => (/* binding */ BlockType)
/* harmony export */ });
var BlockType;
(function (BlockType) {
    BlockType["SINGLE_QUESTIONS"] = "SINGLE_QUESTIONS";
    BlockType["PASSAGES"] = "PASSAGES";
})(BlockType || (BlockType = {}));


/***/ }),

/***/ 86159:
/*!******************************************!*\
  !*** ./src/app/shared/enum/itemTypes.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemType": () => (/* binding */ ItemType)
/* harmony export */ });
var ItemType;
(function (ItemType) {
    ItemType["MCQ"] = "MCQ";
    ItemType["MRQ"] = "MRQ";
    //ESSAY_PLAIN_TEXT = 'ESSAY_PLAIN_TEXT',
    ItemType["ESSAY_RICH_TEXT"] = "ESSAY_RICH_TEXT";
    ItemType["CLOZE_TEXT"] = "CLOZE_TEXT";
    ItemType["CLOZE_DROPDOWN"] = "CLOZE_DROPDOWN";
    ItemType["SHORT_TEXT"] = "SHORT_TEXT";
    ItemType["TRUE_FALSE"] = "TRUE_FALSE";
    ItemType["YES_NO"] = "YES_NO";
    ItemType["ASSOCIATION"] = "ASSOCIATION";
    ItemType["CHOICE_MATRIX"] = "CHOICE_MATRIX";
    ItemType["ORDER_LIST"] = "ORDER_LIST";
    ItemType["CLOZE_TEXT_IMAGE"] = "CLOZE_TEXT_IMAGE";
    ItemType["CLOZE_DROPDOWN_IMAGE"] = "CLOZE_DROPDOWN_IMAGE";
    ItemType["IMAGE_DRAG_AND_DROP"] = "IMAGE_DRAG_AND_DROP";
    ItemType["DRAWING_AND_WRITING"] = "DRAWING_AND_WRITING";
})(ItemType || (ItemType = {}));


/***/ }),

/***/ 89019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    //developmentIP: "http://35.178.141.73:8081",
    // developmentIP: 'https://' + location.hostname + ':6443/examalpha/api/v1',
    developmentIP: 'https://admin-examalpha.ngrok.app/examalpha/api/v1',
    //  developmentIP: 'https://4fea649f3af8.ngrok.app/examalpha/api/v1',
    // developmentIP: 'https://beta.examalpha.com:6080/examalpha/api/v1',
    // developmentIP: 'http://172.31.92.145:6080/examalpha/api/v1', 
    // developmentIP: 'http://172.31.92.145:6080/examalpha/api/v1', 
    //  developmentIP: 'https://7d2a3d029e24.ngrok.app/examalpha/api/v1',
    // developmentIP: 'https://55f199aa0150.ngrok.app/examalpha/api/v1',
    // developmentIP: "http://" + location.hostname + ":8081/examalpha/api/v1",
    //developmentIP: 'http://192.168.101.141:8081',
    //developmentIP: 'http://192.168.177.141:8081',
    //schedulerIP: 'http://192.168.177.141:3201',
    //schedulerIP: 'http://35.178.141.73:3201',
    // schedulerIP: 'https://55f199aa0150.ngrok.app',
    //schedulerIP: 'https://aeb47dcc205d.ngrok.app',
    //  schedulerIP: 'https://4fea649f3af8.ngrok.app',
    //  schedulerIP: 'http://172.31.92.145:6080',
    // schedulerIP: 'https://beta.examalpha.com:6080',
    //  schedulerIP: 'https://7d2a3d029e24.ngrok.app',
    // schedulerIP: 'http://' + location.hostname + ':3201', 
    schedulerIP: 'https://admin-examalpha.ngrok.app',
    // schedulerIP: 'https://' + location.hostname + ':6443',
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
    userSecureStorageKey: '_ID_SECURE',
    secureStorageId: '_ID_MAP',
    ecureStorageKey: '######_ID_SECURE',
    showAppAssets: true
};


/***/ }),

/***/ 24169:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CKEditorComponent": () => (/* binding */ CKEditorComponent),
/* harmony export */   "CKEditorModule": () => (/* binding */ CKEditorModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ckeditor_ckeditor5_watchdog_src_editorwatchdog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-watchdog/src/editorwatchdog */ 34108);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 25670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);







/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */


function CKEditorComponent_ng_template_0_Template(rf, ctx) { }
const ɵ0 = (val, index) => ('0' + (index).toString(16)).slice(-2);
// A copy of @ckeditor/ckeditor5-utils/src/uid.js
// A hash table of hex numbers to avoid using toString() in uid() which is costly.
// [ '00', '01', '02', ..., 'fe', 'ff' ]
const HEX_NUMBERS = new Array(256).fill(0)
    .map(ɵ0);
/**
 * Returns a unique id. The id starts with an "e" character and a randomly generated string of
 * 32 alphanumeric characters.
 *
 * **Note**: The characters the unique id is built from correspond to the hex number notation
 * (from "0" to "9", from "a" to "f"). In other words, each id corresponds to an "e" followed
 * by 16 8-bit numbers next to each other.
 *
 * @returns An unique id string.
 */
function uid() {
    // Let's create some positive random 32bit integers first.
    //
    // 1. Math.random() is a float between 0 and 1.
    // 2. 0x100000000 is 2^32 = 4294967296.
    // 3. >>> 0 enforces integer (in JS all numbers are floating point).
    //
    // For instance:
    //		Math.random() * 0x100000000 = 3366450031.853859
    // but
    //		Math.random() * 0x100000000 >>> 0 = 3366450031.
    const r1 = Math.random() * 0x100000000 >>> 0;
    const r2 = Math.random() * 0x100000000 >>> 0;
    const r3 = Math.random() * 0x100000000 >>> 0;
    const r4 = Math.random() * 0x100000000 >>> 0;
    // Make sure that id does not start with number.
    return 'e' +
        HEX_NUMBERS[r1 >> 0 & 0xFF] +
        HEX_NUMBERS[r1 >> 8 & 0xFF] +
        HEX_NUMBERS[r1 >> 16 & 0xFF] +
        HEX_NUMBERS[r1 >> 24 & 0xFF] +
        HEX_NUMBERS[r2 >> 0 & 0xFF] +
        HEX_NUMBERS[r2 >> 8 & 0xFF] +
        HEX_NUMBERS[r2 >> 16 & 0xFF] +
        HEX_NUMBERS[r2 >> 24 & 0xFF] +
        HEX_NUMBERS[r3 >> 0 & 0xFF] +
        HEX_NUMBERS[r3 >> 8 & 0xFF] +
        HEX_NUMBERS[r3 >> 16 & 0xFF] +
        HEX_NUMBERS[r3 >> 24 & 0xFF] +
        HEX_NUMBERS[r4 >> 0 & 0xFF] +
        HEX_NUMBERS[r4 >> 8 & 0xFF] +
        HEX_NUMBERS[r4 >> 16 & 0xFF] +
        HEX_NUMBERS[r4 >> 24 & 0xFF];
}

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
class CKEditorComponent {
    constructor(elementRef, ngZone) {
        /**
         * The configuration of the editor.
         * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editorconfig-EditorConfig.html
         * to learn more.
         */
        this.config = {};
        /**
         * The initial data of the editor. Useful when not using the ngModel.
         * See https://angular.io/api/forms/NgModel to learn more.
         */
        this.data = '';
        /**
         * Tag name of the editor component.
         *
         * The default tag is 'div'.
         */
        this.tagName = 'div';
        /**
         * Fires when the editor is ready. It corresponds with the `editor#ready`
         * https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#event-ready
         * event.
         */
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * Fires when the content of the editor has changed. It corresponds with the `editor.model.document#change`
         * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_document-Document.html#event-change
         * event.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * Fires when the editing view of the editor is blurred. It corresponds with the `editor.editing.view.document#blur`
         * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:blur
         * event.
         */
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * Fires when the editing view of the editor is focused. It corresponds with the `editor.editing.view.document#focus`
         * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:focus
         * event.
         */
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * Fires when the editor component crashes.
         */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * If the component is read–only before the editor instance is created, it remembers that state,
         * so the editor can become read–only once it is ready.
         */
        this.initiallyDisabled = false;
        /**
         * A lock flag preventing from calling the `cvaOnChange()` during setting editor data.
         */
        this.isEditorSettingData = false;
        this.id = uid();
        this.ngZone = ngZone;
        this.elementRef = elementRef;
    }
    /**
     * When set `true`, the editor becomes read-only.
     * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#member-isReadOnly
     * to learn more.
     */
    set disabled(isDisabled) {
        this.setDisabledState(isDisabled);
    }
    get disabled() {
        if (this.editorInstance) {
            return this.editorInstance.isReadOnly;
        }
        return this.initiallyDisabled;
    }
    /**
     * The instance of the editor created by this component.
     */
    get editorInstance() {
        let editorWatchdog = this.editorWatchdog;
        if (this.watchdog) {
            // Temporarily use the `_watchdogs` internal map as the `getItem()` method throws
            // an error when the item is not registered yet.
            // See https://github.com/ckeditor/ckeditor5-angular/issues/177.
            editorWatchdog = this.watchdog._watchdogs.get(this.id);
        }
        if (editorWatchdog) {
            return editorWatchdog.editor;
        }
        return null;
    }
    // Implementing the AfterViewInit interface.
    ngAfterViewInit() {
        this.attachToWatchdog();
    }
    // Implementing the OnDestroy interface.
    ngOnDestroy() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (this.watchdog) {
                yield this.watchdog.remove(this.id);
            }
            else if (this.editorWatchdog && this.editorWatchdog.editor) {
                yield this.editorWatchdog.destroy();
                this.editorWatchdog = undefined;
            }
        });
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    writeValue(value) {
        // This method is called with the `null` value when the form resets.
        // A component's responsibility is to restore to the initial state.
        if (value === null) {
            value = '';
        }
        // If already initialized.
        if (this.editorInstance) {
            // The lock mechanism prevents from calling `cvaOnChange()` during changing
            // the editor state. See #139
            this.isEditorSettingData = true;
            this.editorInstance.setData(value);
            this.isEditorSettingData = false;
        }
        // If not, wait for it to be ready; store the data.
        else {
            // If the editor element is already available, then update its content.
            this.data = value;
            // If not, then wait until it is ready
            // and change data only for the first `ready` event.
            this.ready
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.first)())
                .subscribe((editor) => {
                editor.setData(this.data);
            });
        }
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    registerOnChange(callback) {
        this.cvaOnChange = callback;
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    registerOnTouched(callback) {
        this.cvaOnTouched = callback;
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    setDisabledState(isDisabled) {
        // If already initialized.
        if (this.editorInstance) {
            this.editorInstance.isReadOnly = isDisabled;
        }
        // Store the state anyway to use it once the editor is created.
        this.initiallyDisabled = isDisabled;
    }
    /**
     * Creates the editor instance, sets initial editor data, then integrates
     * the editor with the Angular component. This method does not use the `editor.setData()`
     * because of the issue in the collaboration mode (#6).
     */
    attachToWatchdog() {
        const creator = (element, config) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return this.ngZone.runOutsideAngular(() => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                this.elementRef.nativeElement.appendChild(element);
                const editor = yield this.editor.create(element, config);
                if (this.initiallyDisabled) {
                    editor.isReadOnly = this.initiallyDisabled;
                }
                this.ngZone.run(() => {
                    this.ready.emit(editor);
                });
                this.setUpEditorEvents(editor);
                return editor;
            }));
        });
        const destructor = (editor) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield editor.destroy();
            this.elementRef.nativeElement.removeChild(this.editorElement);
        });
        const emitError = () => {
            this.ngZone.run(() => {
                this.error.emit();
            });
        };
        const element = document.createElement(this.tagName);
        const config = this.getConfig();
        this.editorElement = element;
        // Based on the presence of the watchdog decide how to initialize the editor.
        if (this.watchdog) {
            // When the context watchdog is passed add the new item to it based on the passed configuration.
            this.watchdog.add({
                id: this.id,
                type: 'editor',
                creator,
                destructor,
                sourceElementOrData: element,
                config
            });
            this.watchdog.on('itemError', (_, { itemId }) => {
                if (itemId === this.id) {
                    emitError();
                }
            });
        }
        else {
            // In the other case create the watchdog by hand to keep the editor running.
            const editorWatchdog = new _ckeditor_ckeditor5_watchdog_src_editorwatchdog__WEBPACK_IMPORTED_MODULE_0__["default"](this.editor);
            editorWatchdog.setCreator(creator);
            editorWatchdog.setDestructor(destructor);
            editorWatchdog.on('error', emitError);
            this.editorWatchdog = editorWatchdog;
            this.editorWatchdog.create(element, config);
        }
    }
    getConfig() {
        if (this.data && this.config.initialData) {
            throw new Error('Editor data should be provided either using `config.initialData` or `data` properties.');
        }
        const config = Object.assign({}, this.config);
        // Merge two possible ways of providing data into the `config.initialData` field.
        const initialData = this.config.initialData || this.data;
        if (initialData) {
            // Define the `config.initialData` only when the initial content is specified.
            config.initialData = initialData;
        }
        return config;
    }
    /**
     * Integrates the editor with the component by attaching related event listeners.
     */
    setUpEditorEvents(editor) {
        const modelDocument = editor.model.document;
        const viewDocument = editor.editing.view.document;
        modelDocument.on('change:data', (evt) => {
            this.ngZone.run(() => {
                if (this.cvaOnChange && !this.isEditorSettingData) {
                    const data = editor.getData();
                    this.cvaOnChange(data);
                }
                this.change.emit({ event: evt, editor });
            });
        });
        viewDocument.on('focus', (evt) => {
            this.ngZone.run(() => {
                this.focus.emit({ event: evt, editor });
            });
        });
        viewDocument.on('blur', (evt) => {
            this.ngZone.run(() => {
                if (this.cvaOnTouched) {
                    this.cvaOnTouched();
                }
                this.blur.emit({ event: evt, editor });
            });
        });
    }
}
CKEditorComponent.ɵfac = function CKEditorComponent_Factory(t) { return new (t || CKEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone)); };
CKEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CKEditorComponent, selectors: [["ckeditor"]], inputs: { config: "config", data: "data", tagName: "tagName", disabled: "disabled", editor: "editor", watchdog: "watchdog" }, outputs: { ready: "ready", change: "change", blur: "blur", focus: "focus", error: "error" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => CKEditorComponent),
                multi: true
            }
        ])], decls: 1, vars: 0, template: function CKEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CKEditorComponent_ng_template_0_Template, 0, 0, "ng-template");
    } }, encapsulation: 2 });
CKEditorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone }
];
CKEditorComponent.propDecorators = {
    editor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    tagName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    watchdog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CKEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'ckeditor',
                template: '<ng-template></ng-template>',
                // Integration with @angular/forms.
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
                        // eslint-disable-next-line @typescript-eslint/no-use-before-define
                        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => CKEditorComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], tagName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], editor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], watchdog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
class CKEditorModule {
}
CKEditorModule.ɵfac = function CKEditorModule_Factory(t) { return new (t || CKEditorModule)(); };
CKEditorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CKEditorModule });
CKEditorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CKEditorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
                declarations: [CKEditorComponent],
                exports: [CKEditorComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CKEditorModule, { declarations: function () { return [CKEditorComponent]; }, imports: function () { return [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]; }, exports: function () { return [CKEditorComponent]; } }); })();

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 34108:
/*!*************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/editorwatchdog.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditorWatchdog)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ 69616);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ 5846);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ 25780);
/* harmony import */ var _utils_areconnectedthroughproperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/areconnectedthroughproperties */ 58830);
/* harmony import */ var _watchdog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watchdog */ 15663);
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module watchdog/editorwatchdog
 */

/* globals console */





/**
 * A watchdog for CKEditor 5 editors.
 *
 * See the {@glink features/watchdog Watchdog feature guide} to learn the rationale behind it and
 * how to use it.
 *
 * @extends {module:watchdog/watchdog~Watchdog}
 */
class EditorWatchdog extends _watchdog__WEBPACK_IMPORTED_MODULE_1__["default"] {
	/**
	 * @param {*} Editor The editor class.
	 * @param {module:watchdog/watchdog~WatchdogConfig} [watchdogConfig] The watchdog plugin configuration.
	 */
	constructor( Editor, watchdogConfig = {} ) {
		super( watchdogConfig );

		/**
		 * The current editor instance.
		 *
		 * @private
		 * @type {module:core/editor/editor~Editor}
		 */
		this._editor = null;

		/**
		 * Throttled save method. The `save()` method is called the specified `saveInterval` after `throttledSave()` is called,
		 * unless a new action happens in the meantime.
		 *
		 * @private
		 * @type {Function}
		 */
		this._throttledSave = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(
			this._save.bind( this ),
			typeof watchdogConfig.saveInterval === 'number' ? watchdogConfig.saveInterval : 5000
		);

		/**
		 * The latest saved editor data represented as a root name -> root data object.
		 *
		 * @private
		 * @member {Object.<String,String>} #_data
		 */

		/**
		 * The last document version.
		 *
		 * @private
		 * @member {Number} #_lastDocumentVersion
		 */

		/**
		 * The editor source element or data.
		 *
		 * @private
		 * @member {HTMLElement|String|Object.<String|String>} #_elementOrData
		 */

		/**
		 * The editor configuration.
		 *
		 * @private
		 * @member {Object|undefined} #_config
		 */

		// Set default creator and destructor functions:
		this._creator = ( ( elementOrData, config ) => Editor.create( elementOrData, config ) );
		this._destructor = editor => editor.destroy();
	}

	/**
	 * The current editor instance.
	 *
	 * @readonly
	 * @type {module:core/editor/editor~Editor}
	 */
	get editor() {
		return this._editor;
	}

	/**
	 * @inheritDoc
	 */
	get _item() {
		return this._editor;
	}

	/**
	 * Sets the function that is responsible for the editor creation.
	 * It expects a function that should return a promise.
	 *
	 *		watchdog.setCreator( ( element, config ) => ClassicEditor.create( element, config ) );
	 *
	 * @method #setCreator
	 * @param {Function} creator
	 */

	/**
	 * Sets the function that is responsible for the editor destruction.
	 * Overrides the default destruction function, which destroys only the editor instance.
	 * It expects a function that should return a promise or `undefined`.
	 *
	 *		watchdog.setDestructor( editor => {
	 *			// Do something before the editor is destroyed.
	 *
	 *			return editor
	 *				.destroy()
	 *				.then( () => {
	 *					// Do something after the editor is destroyed.
	 *				} );
	 *		} );
	 *
	 * @method #setDestructor
	 * @param {Function} destructor
	 */

	/**
	 * Restarts the editor instance. This method is called whenever an editor error occurs. It fires the `restart` event and changes
	 * the state to `initializing`.
	 *
	 * @protected
	 * @fires restart
	 * @returns {Promise}
	 */
	_restart() {
		return Promise.resolve()
			.then( () => {
				this.state = 'initializing';
				this._fire( 'stateChange' );

				return this._destroy();
			} )
			.catch( err => {
				console.error( 'An error happened during the editor destroying.', err );
			} )
			.then( () => {
				if ( typeof this._elementOrData === 'string' ) {
					return this.create( this._data, this._config, this._config.context );
				} else {
					const updatedConfig = Object.assign( {}, this._config, {
						initialData: this._data
					} );

					return this.create( this._elementOrData, updatedConfig, updatedConfig.context );
				}
			} )
			.then( () => {
				this._fire( 'restart' );
			} );
	}

	/**
	 * Creates the editor instance and keeps it running, using the defined creator and destructor.
	 *
	 * @param {HTMLElement|String|Object.<String|String>} [elementOrData] The editor source element or the editor data.
	 * @param {module:core/editor/editorconfig~EditorConfig} [config] The editor configuration.
	 * @param {Object} [context] A context for the editor.
	 *
	 * @returns {Promise}
	 */
	create( elementOrData = this._elementOrData, config = this._config, context ) {
		return Promise.resolve()
			.then( () => {
				super._startErrorHandling();

				this._elementOrData = elementOrData;

				// Clone configuration because it might be shared within multiple watchdog instances. Otherwise,
				// when an error occurs in one of these editors, the watchdog will restart all of them.
				this._config = this._cloneEditorConfiguration( config ) || {};

				this._config.context = context;

				return this._creator( elementOrData, this._config );
			} )
			.then( editor => {
				this._editor = editor;

				editor.model.document.on( 'change:data', this._throttledSave );

				this._lastDocumentVersion = editor.model.document.version;
				this._data = this._getData();

				this.state = 'ready';
				this._fire( 'stateChange' );
			} );
	}

	/**
	 * Destroys the watchdog and the current editor instance. It fires the callback
	 * registered in {@link #setDestructor `setDestructor()`} and uses it to destroy the editor instance.
	 * It also sets the state to `destroyed`.
	 *
	 * @returns {Promise}
	 */
	destroy() {
		return Promise.resolve()
			.then( () => {
				this.state = 'destroyed';
				this._fire( 'stateChange' );

				super.destroy();

				return this._destroy();
			} );
	}

	/**
	 * @private
	 * @returns {Promise}
	 */
	_destroy() {
		return Promise.resolve()
			.then( () => {
				this._stopErrorHandling();

				// Save data if there is a remaining editor data change.
				this._throttledSave.flush();

				const editor = this._editor;

				this._editor = null;

				return this._destructor( editor );
			} );
	}

	/**
	 * Saves the editor data, so it can be restored after the crash even if the data cannot be fetched at
	 * the moment of the crash.
	 *
	 * @private
	 */
	_save() {
		const version = this._editor.model.document.version;

		// Operation may not result in a model change, so the document's version can be the same.
		if ( version === this._lastDocumentVersion ) {
			return;
		}

		try {
			this._data = this._getData();
			this._lastDocumentVersion = version;
		} catch ( err ) {
			console.error(
				err,
				'An error happened during restoring editor data. ' +
				'Editor will be restored from the previously saved data.'
			);
		}
	}

	/**
	 * @protected
	 * @param {Set} props
	 */
	_setExcludedProperties( props ) {
		this._excludedProps = props;
	}

	/**
	 * Returns the editor data.
	 *
	 * @private
	 * @returns {Object<String,String>}
	 */
	_getData() {
		const data = {};

		for ( const rootName of this._editor.model.document.getRootNames() ) {
			data[ rootName ] = this._editor.data.get( { rootName } );
		}

		return data;
	}

	/**
	 * Traverses the error context and the current editor to find out whether these structures are connected
	 * to each other via properties.
	 *
	 * @protected
	 * @param {module:utils/ckeditorerror~CKEditorError} error
	 */
	_isErrorComingFromThisItem( error ) {
		return (0,_utils_areconnectedthroughproperties__WEBPACK_IMPORTED_MODULE_0__["default"])( this._editor, error.context, this._excludedProps );
	}

	/**
	 * Clones the editor configuration.
	 *
	 * @private
	 * @param {Object} config
	 */
	_cloneEditorConfiguration( config ) {
		return (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])( config, ( value, key ) => {
			// Leave DOM references.
			if ( (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])( value ) ) {
				return value;
			}

			if ( key === 'context' ) {
				return value;
			}
		} );
	}

	/**
	 * Fired after the watchdog restarts the error in case of a crash.
	 *
	 * @event restart
	 */
}


/***/ }),

/***/ 58830:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/utils/areconnectedthroughproperties.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ areConnectedThroughProperties)
/* harmony export */ });
/* harmony import */ var _getsubnodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getsubnodes */ 2744);
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module watchdog/utils/areconnectedthroughproperties
 */

/* globals console */



/**
 * Traverses both structures to find out whether there is a reference that is shared between both structures.
 *
 * @param {Object|Array} target1
 * @param {Object|Array} target2
 */
function areConnectedThroughProperties( target1, target2, excludedNodes = new Set() ) {
	if ( target1 === target2 && isObject( target1 ) ) {
		return true;
	}

	// @if CK_DEBUG_WATCHDOG // return checkConnectionBetweenProps( target1, target2, excludedNodes );

	const subNodes1 = (0,_getsubnodes__WEBPACK_IMPORTED_MODULE_0__["default"])( target1, excludedNodes );
	const subNodes2 = (0,_getsubnodes__WEBPACK_IMPORTED_MODULE_0__["default"])( target2, excludedNodes );

	for ( const node of subNodes1 ) {
		if ( subNodes2.has( node ) ) {
			return true;
		}
	}

	return false;
}

/* istanbul ignore next */
// eslint-disable-next-line
function checkConnectionBetweenProps( target1, target2, excludedNodes ) {
	const { subNodes: subNodes1, prevNodeMap: prevNodeMap1 } = (0,_getsubnodes__WEBPACK_IMPORTED_MODULE_0__["default"])( target1, excludedNodes.subNodes );
	const { subNodes: subNodes2, prevNodeMap: prevNodeMap2 } = (0,_getsubnodes__WEBPACK_IMPORTED_MODULE_0__["default"])( target2, excludedNodes.subNodes );

	for ( const sharedNode of subNodes1 ) {
		if ( subNodes2.has( sharedNode ) ) {
			const connection = [];

			connection.push( sharedNode );

			let node = prevNodeMap1.get( sharedNode );

			while ( node && node !== target1 ) {
				connection.push( node );
				node = prevNodeMap1.get( node );
			}

			node = prevNodeMap2.get( sharedNode );

			while ( node && node !== target2 ) {
				connection.unshift( node );
				node = prevNodeMap2.get( node );
			}

			console.log( '--------' );
			console.log( { target1 } );
			console.log( { sharedNode } );
			console.log( { target2 } );
			console.log( { connection } );

			return true;
		}
	}

	return false;
}

function isObject( structure ) {
	return typeof structure === 'object' && structure !== null;
}


/***/ }),

/***/ 2744:
/*!****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/utils/getsubnodes.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSubNodes)
/* harmony export */ });
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module watchdog/utils/getsubnodes
 */

/* globals EventTarget, Event */

function getSubNodes( head, excludedProperties = new Set() ) {
	const nodes = [ head ];

	// @if CK_DEBUG_WATCHDOG // const prevNodeMap = new Map();

	// Nodes are stored to prevent infinite looping.
	const subNodes = new Set();

	while ( nodes.length > 0 ) {
		const node = nodes.shift();

		if ( subNodes.has( node ) || shouldNodeBeSkipped( node ) || excludedProperties.has( node ) ) {
			continue;
		}

		subNodes.add( node );

		// Handle arrays, maps, sets, custom collections that implements `[ Symbol.iterator ]()`, etc.
		if ( node[ Symbol.iterator ] ) {
			// The custom editor iterators might cause some problems if the editor is crashed.
			try {
				for ( const n of node ) {
					nodes.push( n );

					// @if CK_DEBUG_WATCHDOG // if ( !prevNodeMap.has( n ) ) {
					// @if CK_DEBUG_WATCHDOG // 	prevNodeMap.set( n, node );
					// @if CK_DEBUG_WATCHDOG // }
				}
			} catch ( err ) {
				// Do not log errors for broken structures
				// since we are in the error handling process already.
				// eslint-disable-line no-empty
			}
		} else {
			for ( const key in node ) {
				// We share a reference via the protobuf library within the editors,
				// hence the shared value should be skipped. Although, it's not a perfect
				// solution since new places like that might occur in the future.
				if ( key === 'defaultValue' ) {
					continue;
				}

				nodes.push( node[ key ] );

				// @if CK_DEBUG_WATCHDOG // if ( !prevNodeMap.has( node[ key ] ) ) {
				// @if CK_DEBUG_WATCHDOG // 	prevNodeMap.set( node[ key ], node );
				// @if CK_DEBUG_WATCHDOG // }
			}
		}
	}

	// @if CK_DEBUG_WATCHDOG // return { subNodes, prevNodeMap };

	return subNodes;
}

function shouldNodeBeSkipped( node ) {
	const type = Object.prototype.toString.call( node );
	const typeOfNode = typeof node;

	return (
		typeOfNode === 'number' ||
		typeOfNode === 'boolean' ||
		typeOfNode === 'string' ||
		typeOfNode === 'symbol' ||
		typeOfNode === 'function' ||
		type === '[object Date]' ||
		type === '[object RegExp]' ||
		type === '[object Module]' ||

		node === undefined ||
		node === null ||

		// Skip native DOM objects, e.g. Window, nodes, events, etc.
		node instanceof EventTarget ||
		node instanceof Event
	);
}


/***/ }),

/***/ 15663:
/*!*******************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/watchdog.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Watchdog)
/* harmony export */ });
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module watchdog/watchdog
 */

/* globals window */

/**
 * An abstract watchdog class that handles most of the error handling process and the state of the underlying component.
 *
 * See the {@glink features/watchdog Watchdog feature guide} to learn the rationale behind it and how to use it.
 *
 * @private
 * @abstract
 */
class Watchdog {
	/**
	 * @param {module:watchdog/watchdog~WatchdogConfig} config The watchdog plugin configuration.
	 */
	constructor( config ) {
		/**
		 * An array of crashes saved as an object with the following properties:
		 *
		 * * `message`: `String`,
		 * * `stack`: `String`,
		 * * `date`: `Number`,
		 * * `filename`: `String | undefined`,
		 * * `lineno`: `Number | undefined`,
		 * * `colno`: `Number | undefined`,
		 *
		 * @public
		 * @readonly
		 * @type {Array.<Object>}
		 */
		this.crashes = [];

		/**
		 * Specifies the state of the item watched by the watchdog. The state can be one of the following values:
		 *
		 * * `initializing` &ndash; Before the first initialization, and after crashes, before the item is ready.
		 * * `ready` &ndash; A state when the user can interact with the item.
		 * * `crashed` &ndash; A state when an error occurs. It quickly changes to `initializing` or `crashedPermanently`
		 * depending on how many and how frequent errors have been caught recently.
		 * * `crashedPermanently` &ndash; A state when the watchdog stops reacting to errors and keeps the item it is watching crashed,
		 * * `destroyed` &ndash; A state when the item is manually destroyed by the user after calling `watchdog.destroy()`.
		 *
		 * @public
		 * @type {'initializing'|'ready'|'crashed'|'crashedPermanently'|'destroyed'}
		 */
		this.state = 'initializing';

		/**
		 * @protected
		 * @type {Number}
		 * @see module:watchdog/watchdog~WatchdogConfig
		 */
		this._crashNumberLimit = typeof config.crashNumberLimit === 'number' ? config.crashNumberLimit : 3;

		/**
		 * Returns the result of the `Date.now()` call. It can be overridden in tests to mock time as some popular
		 * approaches like `sinon.useFakeTimers()` do not work well with error handling.
		 *
		 * @protected
		 */
		this._now = Date.now;

		/**
		 * @protected
		 * @type {Number}
		 * @see module:watchdog/watchdog~WatchdogConfig
		 */
		this._minimumNonErrorTimePeriod = typeof config.minimumNonErrorTimePeriod === 'number' ? config.minimumNonErrorTimePeriod : 5000;

		/**
		 * Checks if the event error comes from the underlying item and restarts the item.
		 *
		 * @private
		 * @type {Function}
		 */
		this._boundErrorHandler = evt => {
			// `evt.error` is exposed by EventError while `evt.reason` is available in PromiseRejectionEvent.
			const error = evt.error || evt.reason;

			// Note that `evt.reason` might be everything that is in the promise rejection.
			// Similarly everything that is thrown lands in `evt.error`.
			if ( error instanceof Error ) {
				this._handleError( error, evt );
			}
		};

		/**
		 * The creation method.
		 *
		 * @protected
		 * @member {Function} #_creator
		 * @see #setCreator
		 */

		/**
		 * The destruction method.
		 *
		 * @protected
		 * @member {Function} #_destructor
		 * @see #setDestructor
		 */

		/**
		 * The watched item.
		 *
		 * @abstract
		 * @protected
		 * @member {Object|undefined} #_item
		 */

		/**
		 * The method responsible for restarting the watched item.
		 *
		 * @abstract
		 * @protected
		 * @method #_restart
		 */

		/**
		 * Traverses the error context and the watched item to find out whether the error should
		 * be handled by the given item.
		 *
		 * @abstract
		 * @protected
		 * @method #_isErrorComingFromThisItem
		 * @param {module:utils/ckeditorerror~CKEditorError} error
		 */

		/**
		 * A dictionary of event emitter listeners.
		 *
		 * @private
		 * @type {Object.<String,Array.<Function>>}
		 */
		this._listeners = {};

		if ( !this._restart ) {
			throw new Error(
				'The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. ' +
				'Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.'
			);
		}
	}

	/**
	 * Sets the function that is responsible for creating watched items.
	 *
	 * @param {Function} creator A callback responsible for creating an item. Returns a promise
	 * that is resolved when the item is created.
	 */
	setCreator( creator ) {
		this._creator = creator;
	}

	/**
	 * Sets the function that is responsible for destroying watched items.
	 *
	 * @param {Function} destructor A callback that takes the item and returns the promise
	 * to the destroying process.
	 */
	setDestructor( destructor ) {
		this._destructor = destructor;
	}

	/**
	 * Destroys the watchdog and releases the resources.
	 */
	destroy() {
		this._stopErrorHandling();

		this._listeners = {};
	}

	/**
	 * Starts listening to a specific event name by registering a callback that will be executed
	 * whenever an event with a given name fires.
	 *
	 * Note that this method differs from the CKEditor 5's default `EventEmitterMixin` implementation.
	 *
	 * @param {String} eventName The event name.
	 * @param {Function} callback A callback which will be added to event listeners.
	 */
	on( eventName, callback ) {
		if ( !this._listeners[ eventName ] ) {
			this._listeners[ eventName ] = [];
		}

		this._listeners[ eventName ].push( callback );
	}

	/**
	 * Stops listening to the specified event name by removing the callback from event listeners.
	 *
	 * Note that this method differs from the CKEditor 5's default `EventEmitterMixin` implementation.
	 *
	 * @param {String} eventName The event name.
	 * @param {Function} callback A callback which will be removed from event listeners.
	 */
	off( eventName, callback ) {
		this._listeners[ eventName ] = this._listeners[ eventName ]
			.filter( cb => cb !== callback );
	}

	/**
	 * Fires an event with a given event name and arguments.
	 *
	 * Note that this method differs from the CKEditor 5's default `EventEmitterMixin` implementation.
	 *
	 * @protected
	 * @param {String} eventName The event name.
	 * @param  {...*} args Event arguments.
	 */
	_fire( eventName, ...args ) {
		const callbacks = this._listeners[ eventName ] || [];

		for ( const callback of callbacks ) {
			callback.apply( this, [ null, ...args ] );
		}
	}

	/**
	 * Starts error handling by attaching global error handlers.
	 *
	 * @protected
	 */
	_startErrorHandling() {
		window.addEventListener( 'error', this._boundErrorHandler );
		window.addEventListener( 'unhandledrejection', this._boundErrorHandler );
	}

	/**
	 * Stops error handling by detaching global error handlers.
	 *
	 * @protected
	 */
	_stopErrorHandling() {
		window.removeEventListener( 'error', this._boundErrorHandler );
		window.removeEventListener( 'unhandledrejection', this._boundErrorHandler );
	}

	/**
	 * Checks if an error comes from the watched item and restarts it.
	 * It reacts to {@link module:utils/ckeditorerror~CKEditorError `CKEditorError` errors} only.
	 *
	 * @private
	 * @fires error
	 * @param {Error} error Error.
	 * @param {ErrorEvent|PromiseRejectionEvent} evt An error event.
	 */
	_handleError( error, evt ) {
		// @if CK_DEBUG // if ( error.is && error.is( 'CKEditorError' ) && error.context === undefined ) {
		// @if CK_DEBUG // console.warn( 'The error is missing its context and Watchdog cannot restart the proper item.' );
		// @if CK_DEBUG // }

		if ( this._shouldReactToError( error ) ) {
			this.crashes.push( {
				message: error.message,
				stack: error.stack,

				// `evt.filename`, `evt.lineno` and `evt.colno` are available only in ErrorEvent events
				filename: evt.filename,
				lineno: evt.lineno,
				colno: evt.colno,
				date: this._now()
			} );

			const causesRestart = this._shouldRestart();

			this.state = 'crashed';
			this._fire( 'stateChange' );
			this._fire( 'error', { error, causesRestart } );

			if ( causesRestart ) {
				this._restart();
			} else {
				this.state = 'crashedPermanently';
				this._fire( 'stateChange' );
			}
		}
	}

	/**
	 * Checks whether an error should be handled by the watchdog.
	 *
	 * @private
	 * @param {Error} error An error that was caught by the error handling process.
	 */
	_shouldReactToError( error ) {
		return (
			error.is &&
			error.is( 'CKEditorError' ) &&
			error.context !== undefined &&

			// In some cases the watched item should not be restarted - e.g. during the item initialization.
			// That's why the `null` was introduced as a correct error context which does cause restarting.
			error.context !== null &&

			// Do not react to errors if the watchdog is in states other than `ready`.
			this.state === 'ready' &&

			this._isErrorComingFromThisItem( error )
		);
	}

	/**
	 * Checks if the watchdog should restart the underlying item.
	 *
	 * @private
	 */
	_shouldRestart() {
		if ( this.crashes.length <= this._crashNumberLimit ) {
			return true;
		}

		const lastErrorTime = this.crashes[ this.crashes.length - 1 ].date;
		const firstMeaningfulErrorTime = this.crashes[ this.crashes.length - 1 - this._crashNumberLimit ].date;

		const averageNonErrorTimePeriod = ( lastErrorTime - firstMeaningfulErrorTime ) / this._crashNumberLimit;

		return averageNonErrorTimePeriod > this._minimumNonErrorTimePeriod;
	}

	/**
	 * Fired when a new {@link module:utils/ckeditorerror~CKEditorError `CKEditorError`} error connected to the watchdog instance occurs
	 * and the watchdog will react to it.
	 *
	 * 	watchdog.on( 'error', ( evt, { error, causesRestart } ) => {
	 * 		console.log( 'An error occurred.' );
	 * 	} );
	 *
	 * @event error
	 */
}

/**
 * The watchdog plugin configuration.
 *
 * @typedef {Object} WatchdogConfig
 *
 * @property {Number} [crashNumberLimit=3] A threshold specifying the number of watched item crashes
 * when the watchdog stops restarting the item in case of errors.
 * After this limit is reached and the time between the last errors is shorter than `minimumNonErrorTimePeriod`,
 * the watchdog changes its state to `crashedPermanently` and it stops restarting the item. This prevents an infinite restart loop.
 *
 * @property {Number} [minimumNonErrorTimePeriod=5000] An average number of milliseconds between the last watched item errors
 * (defaults to 5000). When the period of time between errors is lower than that and the `crashNumberLimit` is also reached,
 * the watchdog changes its state to `crashedPermanently` and it stops restarting the item. This prevents an infinite restart loop.
 *
 * @property {Number} [saveInterval=5000] A minimum number of milliseconds between saving the editor data internally (defaults to 5000).
 * Note that for large documents this might impact the editor performance.
 */


/***/ }),

/***/ 38531:
/*!*************************************************************************************!*\
  !*** ./node_modules/angular-archwizard/__ivy_ngcc__/fesm2015/angular-archwizard.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArchwizardModule": () => (/* binding */ ArchwizardModule),
/* harmony export */   "BaseNavigationMode": () => (/* binding */ BaseNavigationMode),
/* harmony export */   "CompletedStepDirective": () => (/* binding */ CompletedStepDirective),
/* harmony export */   "ConfigurableNavigationMode": () => (/* binding */ ConfigurableNavigationMode),
/* harmony export */   "EnableBackLinksDirective": () => (/* binding */ EnableBackLinksDirective),
/* harmony export */   "GoToStepDirective": () => (/* binding */ GoToStepDirective),
/* harmony export */   "MovingDirection": () => (/* binding */ MovingDirection),
/* harmony export */   "NavigationModeDirective": () => (/* binding */ NavigationModeDirective),
/* harmony export */   "NextStepDirective": () => (/* binding */ NextStepDirective),
/* harmony export */   "OptionalStepDirective": () => (/* binding */ OptionalStepDirective),
/* harmony export */   "PreviousStepDirective": () => (/* binding */ PreviousStepDirective),
/* harmony export */   "ResetWizardDirective": () => (/* binding */ ResetWizardDirective),
/* harmony export */   "SelectedStepDirective": () => (/* binding */ SelectedStepDirective),
/* harmony export */   "WizardCompletionStep": () => (/* binding */ WizardCompletionStep),
/* harmony export */   "WizardCompletionStepComponent": () => (/* binding */ WizardCompletionStepComponent),
/* harmony export */   "WizardCompletionStepDirective": () => (/* binding */ WizardCompletionStepDirective),
/* harmony export */   "WizardComponent": () => (/* binding */ WizardComponent),
/* harmony export */   "WizardNavigationBarComponent": () => (/* binding */ WizardNavigationBarComponent),
/* harmony export */   "WizardStep": () => (/* binding */ WizardStep),
/* harmony export */   "WizardStepComponent": () => (/* binding */ WizardStepComponent),
/* harmony export */   "WizardStepDirective": () => (/* binding */ WizardStepDirective),
/* harmony export */   "WizardStepSymbolDirective": () => (/* binding */ WizardStepSymbolDirective),
/* harmony export */   "WizardStepTitleDirective": () => (/* binding */ WizardStepTitleDirective),
/* harmony export */   "isStepId": () => (/* binding */ isStepId),
/* harmony export */   "isStepIndex": () => (/* binding */ isStepIndex),
/* harmony export */   "isStepOffset": () => (/* binding */ isStepOffset)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);



/**
 * The `awWizardStepSymbol` directive can be used as an alternative to the `navigationSymbol` input of a [[WizardStep]]
 * to define the step symbol inside the navigation bar.  This way step symbol may contain arbitrary content.
 *
 * ### Syntax
 *
 * ```html
 * <ng-template awWizardStepSymbol>
 *     ...
 * </ng-template>
 * ```
 */



const _c0 = ["*"];
const _c1 = function (a0, a1, a2, a3, a4, a5, a6) { return { "vertical": a0, "horizontal": a1, "small": a2, "large-filled": a3, "large-filled-symbols": a4, "large-empty": a5, "large-empty-symbols": a6 }; };
function WizardComponent_aw_wizard_navigation_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "aw-wizard-navigation-bar", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction7"](1, _c1, ctx_r0.navBarLocation == "left", ctx_r0.navBarLocation == "top", ctx_r0.navBarLayout == "small", ctx_r0.navBarLayout == "large-filled", ctx_r0.navBarLayout == "large-filled-symbols", ctx_r0.navBarLayout == "large-empty", ctx_r0.navBarLayout == "large-empty-symbols"));
} }
function WizardComponent_aw_wizard_navigation_bar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "aw-wizard-navigation-bar", 1);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction7"](1, _c1, ctx_r1.navBarLocation == "right", ctx_r1.navBarLocation == "bottom", ctx_r1.navBarLayout == "small", ctx_r1.navBarLayout == "large-filled", ctx_r1.navBarLayout == "large-filled-symbols", ctx_r1.navBarLayout == "large-empty", ctx_r1.navBarLayout == "large-empty-symbols"));
} }
const _c2 = function (a1, a2) { return { "wizard-steps": true, "vertical": a1, "horizontal": a2 }; };
const _c3 = function (a0) { return { wizardStep: a0 }; };
function WizardNavigationBarComponent_li_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 7);
} if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r1.stepTitleTemplate.templateRef)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, step_r1));
} }
function WizardNavigationBarComponent_li_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r1.stepTitle);
} }
function WizardNavigationBarComponent_li_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 7);
} if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r1.stepSymbolTemplate.templateRef)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, step_r1));
} }
function WizardNavigationBarComponent_li_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r1.navigationSymbol.symbol);
} }
const _c4 = function (a0, a1, a2, a3, a4, a5) { return { "current": a0, "editing": a1, "done": a2, "optional": a3, "completed": a4, "navigable": a5 }; };
const _c5 = function (a0) { return { "font-family": a0 }; };
function WizardNavigationBarComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardNavigationBarComponent_li_1_ng_container_3_Template, 1, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WizardNavigationBarComponent_li_1_ng_container_4_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WizardNavigationBarComponent_li_1_ng_container_6_Template, 1, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WizardNavigationBarComponent_li_1_ng_container_7_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](8, _c4, ctx_r0.isCurrent(step_r1), ctx_r0.isEditing(step_r1), ctx_r0.isDone(step_r1), ctx_r0.isOptional(step_r1), ctx_r0.isCompleted(step_r1), ctx_r0.isNavigable(step_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", step_r1.stepId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("awGoToStep", step_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", step_r1.stepTitleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !step_r1.stepTitleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c5, step_r1.stepSymbolTemplate ? "" : step_r1.navigationSymbol.fontFamily));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", step_r1.stepSymbolTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !step_r1.stepSymbolTemplate);
} }
class WizardStepSymbolDirective {
    /**
     * Constructor
     *
     * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepSymbolDirective]]
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
WizardStepSymbolDirective.ɵfac = function WizardStepSymbolDirective_Factory(t) { return new (t || WizardStepSymbolDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
WizardStepSymbolDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WizardStepSymbolDirective, selectors: [["ng-template", "awStepSymbol", ""], ["ng-template", "awWizardStepSymbol", ""]] });
WizardStepSymbolDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardStepSymbolDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'ng-template[awStepSymbol], ng-template[awWizardStepSymbol]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();

/**
 * The `awWizardStepTitle` directive can be used as an alternative to the `stepTitle` input of a [[WizardStep]]
 * to define the content of a step title inside the navigation bar.
 * This step title can be freely created and can contain more than only plain text
 *
 * ### Syntax
 *
 * ```html
 * <ng-template awWizardStepTitle>
 *     ...
 * </ng-template>
 * ```
 *
 * @author Marc Arndt
 */
class WizardStepTitleDirective {
    /**
     * Constructor
     *
     * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepTitleDirective]]
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
WizardStepTitleDirective.ɵfac = function WizardStepTitleDirective_Factory(t) { return new (t || WizardStepTitleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
WizardStepTitleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WizardStepTitleDirective, selectors: [["ng-template", "awStepTitle", ""], ["ng-template", "awWizardStepTitle", ""]] });
WizardStepTitleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardStepTitleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'ng-template[awStepTitle], ng-template[awWizardStepTitle]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();

/**
 * Basic functionality every type of wizard step needs to provide
 *
 * @author Marc Arndt
 */
/* tslint:disable-next-line directive-class-suffix */
class WizardStep {
    constructor() {
        /**
         * A symbol property, which contains an optional symbol for the step inside the navigation bar.
         * Takes effect when `stepSymbolTemplate` is not defined or null.
         */
        this.navigationSymbol = { symbol: '' };
        /**
         * A boolean describing if the wizard step is currently selected
         */
        this.selected = false;
        /**
         * A boolean describing if the wizard step has been completed
         */
        this.completed = false;
        /**
         * A boolean describing if the wizard step is shown as completed when the wizard is presented to the user
         *
         * Users will typically use `CompletedStepDirective` to set this flag
         */
        this.initiallyCompleted = false;
        /**
         * A boolean describing if the wizard step is being edited after being competed
         *
         * This flag can only be true when `selected` is true.
         */
        this.editing = false;
        /**
         * A boolean describing, if the wizard step should be selected by default, i.e. after the wizard has been initialized as the initial step
         */
        this.defaultSelected = false;
        /**
         * A boolean describing if the wizard step is an optional step
         */
        this.optional = false;
        /**
         * A function or boolean deciding, if this step can be entered
         */
        this.canEnter = true;
        /**
         * A function or boolean deciding, if this step can be exited
         */
        this.canExit = true;
        /**
         * This [[EventEmitter]] is called when the step is entered.
         * The bound method should be used to do initialization work.
         */
        this.stepEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * This [[EventEmitter]] is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * Returns true if this wizard step should be visible to the user.
     * If the step should be visible to the user false is returned, otherwise true
     */
    get hidden() {
        return !this.selected;
    }
    /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @param condition A condition variable, deciding if the step can be transitioned
     * @param direction The direction in which this step should be transitioned
     * @returns A [[Promise]] containing `true`, if this step can transitioned in the given direction
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     */
    static canTransitionStep(condition, direction) {
        if (typeof (condition) === typeof (true)) {
            return Promise.resolve(condition);
        }
        else if (condition instanceof Function) {
            return Promise.resolve(condition(direction));
        }
        else {
            return Promise.reject(new Error(`Input value '${condition}' is neither a boolean nor a function`));
        }
    }
    /**
     * A function called when the step is entered
     *
     * @param direction The direction in which the step is entered
     */
    enter(direction) {
        this.stepEnter.emit(direction);
    }
    /**
     * A function called when the step is exited
     *
     * @param direction The direction in which the step is exited
     */
    exit(direction) {
        this.stepExit.emit(direction);
    }
    /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be entered
     * @returns A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     */
    canEnterStep(direction) {
        return WizardStep.canTransitionStep(this.canEnter, direction);
    }
    /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be left
     * @returns A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     */
    canExitStep(direction) {
        return WizardStep.canTransitionStep(this.canExit, direction);
    }
}
WizardStep.ɵfac = function WizardStep_Factory(t) { return new (t || WizardStep)(); };
WizardStep.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WizardStep, contentQueries: function WizardStep_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, WizardStepTitleDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, WizardStepSymbolDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepTitleTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepSymbolTemplate = _t.first);
    } }, hostVars: 1, hostBindings: function WizardStep_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("hidden", ctx.hidden);
    } }, inputs: { navigationSymbol: "navigationSymbol", canEnter: "canEnter", canExit: "canExit", stepId: "stepId", stepTitle: "stepTitle" }, outputs: { stepEnter: "stepEnter", stepExit: "stepExit" } });
WizardStep.propDecorators = {
    stepTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [WizardStepTitleDirective,] }],
    stepSymbolTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [WizardStepSymbolDirective,] }],
    stepId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    stepTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    navigationSymbol: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    canEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    canExit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    stepEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    stepExit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['hidden',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardStep, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return []; }, { navigationSymbol: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], canEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], canExit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], stepEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], stepExit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], hidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['hidden']
        }], stepTitleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [WizardStepTitleDirective]
        }], stepSymbolTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [WizardStepSymbolDirective]
        }], stepId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], stepTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 */
/* tslint:disable-next-line directive-class-suffix */
class WizardCompletionStep extends WizardStep {
    constructor() {
        super(...arguments);
        /**
         * @inheritDoc
         */
        this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * @inheritDoc
         */
        this.canExit = false;
    }
    /**
     * @inheritDoc
     */
    enter(direction) {
        this.completed = true;
        this.stepEnter.emit(direction);
    }
    /**
     * @inheritDoc
     */
    exit(direction) {
        // set this completion step as incomplete (unless it happens to be initiallyCompleted)
        this.completed = this.initiallyCompleted;
        this.stepExit.emit(direction);
    }
}
WizardCompletionStep.ɵfac = /*@__PURE__*/ function () { let ɵWizardCompletionStep_BaseFactory; return function WizardCompletionStep_Factory(t) { return (ɵWizardCompletionStep_BaseFactory || (ɵWizardCompletionStep_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](WizardCompletionStep)))(t || WizardCompletionStep); }; }();
WizardCompletionStep.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WizardCompletionStep, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardCompletionStep, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], null, null); })();

/**
 * The `aw-wizard-completion-step` component can be used to define a completion/success step at the end of your wizard
 * After a `aw-wizard-completion-step` has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a `aw-wizard-completion-step` automatically sets the `aw-wizard` and all steps inside the `aw-wizard`
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step [stepTitle]="title of the wizard step"
 *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'navigation symbol font family' }"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
class WizardCompletionStepComponent extends WizardCompletionStep {
}
WizardCompletionStepComponent.ɵfac = /*@__PURE__*/ function () { let ɵWizardCompletionStepComponent_BaseFactory; return function WizardCompletionStepComponent_Factory(t) { return (ɵWizardCompletionStepComponent_BaseFactory || (ɵWizardCompletionStepComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](WizardCompletionStepComponent)))(t || WizardCompletionStepComponent); }; }();
WizardCompletionStepComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WizardCompletionStepComponent, selectors: [["aw-wizard-completion-step"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: WizardStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepComponent) },
            { provide: WizardCompletionStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepComponent) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function WizardCompletionStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardCompletionStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'aw-wizard-completion-step',
                template: "<ng-content></ng-content>\n",
                providers: [
                    { provide: WizardStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepComponent) },
                    { provide: WizardCompletionStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepComponent) }
                ]
            }]
    }], null, null); })();

/**
 * The direction in which a step transition was made
 *
 * @author Marc Arndt
 */
/**
 * This enum contains the different possible moving directions in which a wizard can be traversed
 *
 * @author Marc Arndt
 */
var MovingDirection;
(function (MovingDirection) {
    /**
     * A forward step transition
     */
    MovingDirection[MovingDirection["Forwards"] = 0] = "Forwards";
    /**
     * A backward step transition
     */
    MovingDirection[MovingDirection["Backwards"] = 1] = "Backwards";
    /**
     * No step transition was done
     */
    MovingDirection[MovingDirection["Stay"] = 2] = "Stay";
})(MovingDirection || (MovingDirection = {}));

/**
 * Base implementation of [[NavigationMode]]
 *
 * Note: Built-in [[NavigationMode]] classes should be stateless, allowing the library user to easily create
 * an instance of a particular [[NavigationMode]] class and pass it to `<aw-wizard [navigationMode]="...">`.
 *
 * @author Marc Arndt
 */
class BaseNavigationMode {
    /**
     * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
     *
     * This method controls navigation by [[goToStep]], [[goToPreviousStep]], and [[goToNextStep]] directives.
     * Navigation by navigation bar is governed by [[isNavigable]].
     *
     * In this implementation, a destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - the destination step can be entered in the direction from the current step
     *
     * Subclasses can impose additional restrictions, see [[canTransitionToStep]].
     *
     * @param wizard The wizard component to operate on
     * @param destinationIndex The index of the destination step
     * @returns A [[Promise]] containing `true`, if the destination step can be transitioned to and `false` otherwise
     */
    canGoToStep(wizard, destinationIndex) {
        const hasStep = wizard.hasStep(destinationIndex);
        const movingDirection = wizard.getMovingDirection(destinationIndex);
        const canExitCurrentStep = (previous) => {
            return previous && wizard.currentStep.canExitStep(movingDirection);
        };
        const canEnterDestinationStep = (previous) => {
            return previous && wizard.getStepAtIndex(destinationIndex).canEnterStep(movingDirection);
        };
        const canTransitionToStep = (previous) => {
            return previous && this.canTransitionToStep(wizard, destinationIndex);
        };
        return Promise.resolve(hasStep)
            .then(canTransitionToStep)
            // Apply user-defined checks at the end.  They can involve user interaction
            // which is better to be avoided if navigation mode does not actually allow the transition
            // (`canTransitionToStep` returns `false`).
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep);
    }
    /**
     * Imposes additional restrictions for `canGoToStep` in current navigation mode.
     *
     * The base implementation allows transition iff the given step is navigable from the navigation bar (see `isNavigable`).
     * However, in some navigation modes `canTransitionToStep` can be more relaxed to allow navigation to certain steps
     * by previous/next buttons, but not using the navigation bar.
     *
     * @param wizard The wizard component to operate on
     * @param destinationIndex The index of the destination step
     * @returns `true`, if the destination step can be transitioned to and `false` otherwise
     */
    canTransitionToStep(wizard, destinationIndex) {
        return this.isNavigable(wizard, destinationIndex);
    }
    /**
     * Tries to transition to the wizard step, as denoted by the given destination index.
     *
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param wizard The wizard component to operate on
     * @param destinationIndex The index of the destination wizard step, which should be entered
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    goToStep(wizard, destinationIndex, preFinalize, postFinalize) {
        this.canGoToStep(wizard, destinationIndex).then(navigationAllowed => {
            if (navigationAllowed) {
                // the current step can be exited in the given direction
                const movingDirection = wizard.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                wizard.currentStep.completed = true;
                wizard.currentStep.exit(movingDirection);
                wizard.currentStep.editing = false;
                wizard.currentStep.selected = false;
                this.transition(wizard, destinationIndex);
                // remember if the next step is already completed before entering it to properly set `editing` flag
                const wasCompleted = wizard.completed || wizard.currentStep.completed;
                // go to next step
                wizard.currentStep.enter(movingDirection);
                wizard.currentStep.selected = true;
                if (wasCompleted) {
                    wizard.currentStep.editing = true;
                }
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                wizard.currentStep.exit(MovingDirection.Stay);
                wizard.currentStep.enter(MovingDirection.Stay);
            }
        });
    }
    /**
     * Transitions the wizard to the given step index.
     *
     * Can perform additional actions in particular navigation mode implementations.
     *
     * @param wizard The wizard component to operate on
     * @param destinationIndex The index of the destination wizard step
     */
    transition(wizard, destinationIndex) {
        wizard.currentStepIndex = destinationIndex;
    }
    /**
     * Resets the state of this wizard.
     *
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete.
     *
     * @param wizard The wizard component to operate on
     */
    reset(wizard) {
        this.ensureCanReset(wizard);
        // reset the step internal state
        wizard.wizardSteps.forEach(step => {
            step.completed = step.initiallyCompleted;
            step.selected = false;
            step.editing = false;
        });
        // set the first step as the current step
        wizard.currentStepIndex = wizard.defaultStepIndex;
        wizard.currentStep.selected = true;
        wizard.currentStep.enter(MovingDirection.Forwards);
    }
    /**
     * Checks if wizard configuration allows to perform reset.
     *
     * A check failure is indicated by throwing an `Error` with the message discribing the discovered misconfiguration issue.
     *
     * Can include additional checks in particular navigation mode implementations.
     *
     * @param wizard The wizard component to operate on
     * @throws An `Error` is thrown, if a micconfiguration issue is discovered.
     */
    ensureCanReset(wizard) {
        // the wizard doesn't contain a step with the default step index
        if (!wizard.hasStep(wizard.defaultStepIndex)) {
            throw new Error(`The wizard doesn't contain a step with index ${wizard.defaultStepIndex}`);
        }
    }
}

/**
 * The default navigation mode used by [[WizardComponent]] and [[NavigationModeDirective]].
 *
 * It is parameterized with two navigation policies passed to constructor:
 *
 * - [[navigateBackward]] policy controls whether wizard steps before the current step are navigable:
 *
 *   - `"deny"` -- the steps are not navigable
 *   - `"allow"` -- the steps are navigable
 *   - If the corresponding constructor argument is omitted or is `null` or `undefined`,
 *     then the default value is applied which is `"deny"`
 *
 * - [[navigateForward]] policy controls whether wizard steps after the current step are navigable:
 *
 *   - `"deny"` -- the steps are not navigable
 *   - `"allow"` -- the steps are navigable
 *   - `"visited"` -- a step is navigable iff it was already visited before
 *   - If the corresponding constructor argument is omitted or is `null` or `undefined`,
 *     then the default value is applied which is `"allow"`
 */
class ConfigurableNavigationMode extends BaseNavigationMode {
    /**
     * Constructor
     *
     * @param navigateBackward Controls whether wizard steps before the current step are navigable
     * @param navigateForward Controls whether wizard steps before the current step are navigable
     */
    constructor(navigateBackward = null, navigateForward = null) {
        super();
        this.navigateBackward = navigateBackward;
        this.navigateForward = navigateForward;
        this.navigateBackward = this.navigateBackward || 'allow';
        this.navigateForward = this.navigateForward || 'deny';
    }
    /**
     * @inheritDoc
     */
    canTransitionToStep(wizard, destinationIndex) {
        // if the destination step can be navigated to using the navigation bar,
        // it should be accessible with [goToStep] as well
        if (this.isNavigable(wizard, destinationIndex)) {
            return true;
        }
        // navigation with [goToStep] is permitted if all previous steps
        // to the destination step have been completed or are optional
        return wizard.wizardSteps
            .filter((step, index) => index < destinationIndex && index !== wizard.currentStepIndex)
            .every(step => step.completed || step.optional);
    }
    /**
     * @inheritDoc
     */
    transition(wizard, destinationIndex) {
        if (this.navigateForward === 'deny') {
            // set all steps after the destination step to incomplete
            wizard.wizardSteps
                .filter((step, index) => wizard.currentStepIndex > destinationIndex && index > destinationIndex)
                .forEach(step => step.completed = false);
        }
        super.transition(wizard, destinationIndex);
    }
    /**
     * @inheritDoc
     */
    isNavigable(wizard, destinationIndex) {
        // Check if the destination step can be navigated to
        const destinationStep = wizard.getStepAtIndex(destinationIndex);
        if (destinationStep instanceof WizardCompletionStep) {
            // A completion step can only be entered, if all previous steps have been completed, are optional, or selected
            const previousStepsCompleted = wizard.wizardSteps
                .filter((step, index) => index < destinationIndex)
                .every(step => step.completed || step.optional || step.selected);
            if (!previousStepsCompleted) {
                return false;
            }
        }
        // Apply navigation pocicies
        if (destinationIndex < wizard.currentStepIndex) {
            // If the destination step is before current, apply the `navigateBackward` policy
            switch (this.navigateBackward) {
                case 'allow': return true;
                case 'deny': return false;
                default:
                    throw new Error(`Invalid value for navigateBackward: ${this.navigateBackward}`);
            }
        }
        else if (destinationIndex > wizard.currentStepIndex) {
            // If the destination step is after current, apply the `navigateForward` policy
            switch (this.navigateForward) {
                case 'allow': return true;
                case 'deny': return false;
                case 'visited': return destinationStep.completed;
                default:
                    throw new Error(`Invalid value for navigateForward: ${this.navigateForward}`);
            }
        }
        else {
            // Re-entering the current step is not allowed
            return false;
        }
    }
    /**
     * @inheritDoc
     */
    ensureCanReset(wizard) {
        super.ensureCanReset(wizard);
        // the default step is a completion step and the wizard contains more than one step
        const defaultWizardStep = wizard.getStepAtIndex(wizard.defaultStepIndex);
        const defaultCompletionStep = defaultWizardStep instanceof WizardCompletionStep;
        if (defaultCompletionStep && wizard.wizardSteps.length !== 1) {
            throw new Error(`The default step index ${wizard.defaultStepIndex} references a completion step`);
        }
    }
}

/**
 * The `aw-wizard` component defines the root component of a wizard.
 * Through the setting of input parameters for the `aw-wizard` component it's possible to change the location and size
 * of its navigation bar.
 *
 * ### Syntax
 * ```html
 * <aw-wizard [navBarLocation]="location of navigation bar" [navBarLayout]="layout of navigation bar">
 *     ...
 * </aw-wizard>
 * ```
 *
 * ### Example
 *
 * Without completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 * </aw-wizard>
 * ```
 *
 * With completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-completion-step>...</aw-wizard-completion-step>
 * </aw-wizard>
 * ```
 *
 * @author Marc Arndt
 */
class WizardComponent {
    /**
     * Constructor
     */
    constructor() {
        /**
         * The location of the navigation bar inside the wizard.
         * This location can be either top, bottom, left or right
         */
        this.navBarLocation = 'top';
        /**
         * The layout of the navigation bar inside the wizard.
         * The layout can be either small, large-filled, large-empty or large-symbols
         */
        this.navBarLayout = 'small';
        /**
         * The direction in which the steps inside the navigation bar should be shown.
         * The direction can be either `left-to-right` or `right-to-left`
         */
        this.navBarDirection = 'left-to-right';
        this._defaultStepIndex = 0;
        /**
         * True, if the navigation bar shouldn't be used for navigating
         */
        this.disableNavigationBar = false;
        /**
         * The navigation mode used to navigate inside the wizard
         *
         * For outside access, use the [[navigation]] getter.
         */
        this._navigation = new ConfigurableNavigationMode();
        /**
         * An array representation of all wizard steps belonging to this model
         *
         * For outside access, use the [[wizardSteps]] getter.
         */
        this._wizardSteps = [];
        /**
         * The index of the currently visible and selected step inside the wizardSteps QueryList.
         * If this wizard contains no steps, currentStepIndex is -1
         *
         * Note: Do not modify this field directly.  Instead, use navigation methods:
         * [[goToStep]], [[goToPreviousStep]], [[goToNextStep]].
         */
        this.currentStepIndex = -1;
    }
    /**
     * The initially selected step, represented by its index
     * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
     */
    get defaultStepIndex() {
        // This value can be either:
        // - the index of a wizard step with a `selected` directive, or
        // - the default step index, set in the [[WizardComponent]]
        const foundDefaultStep = this.wizardSteps.find(step => step.defaultSelected);
        if (foundDefaultStep) {
            return this.getIndexOfStep(foundDefaultStep);
        }
        else {
            return this._defaultStepIndex;
        }
    }
    set defaultStepIndex(defaultStepIndex) {
        this._defaultStepIndex = defaultStepIndex;
    }
    /**
     * Returns true if this wizard uses a horizontal orientation.
     * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
     *
     * @returns True if this wizard uses a horizontal orientation
     */
    get horizontalOrientation() {
        return this.navBarLocation === 'top' || this.navBarLocation === 'bottom';
    }
    /**
     * Returns true if this wizard uses a vertical orientation.
     * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
     *
     * @returns True if this wizard uses a vertical orientation
     */
    get verticalOrientation() {
        return this.navBarLocation === 'left' || this.navBarLocation === 'right';
    }
    /**
     * Initialization work
     */
    ngAfterContentInit() {
        // add a subscriber to the wizard steps QueryList to listen to changes in the DOM
        this.wizardStepsQueryList.changes.subscribe(changedWizardSteps => {
            this.updateWizardSteps(changedWizardSteps.toArray());
        });
        // initialize the model
        this.updateWizardSteps(this.wizardStepsQueryList.toArray());
        // finally reset the whole wizard component
        setTimeout(() => this.reset());
    }
    /**
     * The WizardStep object belonging to the currently visible and selected step.
     * The currentStep is always the currently selected wizard step.
     * The currentStep can be either completed, if it was visited earlier,
     * or not completed, if it is visited for the first time or its state is currently out of date.
     *
     * If this wizard contains no steps, currentStep is null
     */
    get currentStep() {
        if (this.hasStep(this.currentStepIndex)) {
            return this.wizardSteps[this.currentStepIndex];
        }
        else {
            return null;
        }
    }
    /**
     * The completeness of the wizard.
     * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
     */
    get completed() {
        return this.wizardSteps.every(step => step.completed || step.optional);
    }
    /**
     * An array representation of all wizard steps belonging to this model
     */
    get wizardSteps() {
        return this._wizardSteps;
    }
    /**
     * Updates the wizard steps to the new array
     *
     * @param wizardSteps The updated wizard steps
     */
    updateWizardSteps(wizardSteps) {
        // the wizard is currently not in the initialization phase
        if (this.wizardSteps.length > 0 && this.currentStepIndex > -1) {
            this.currentStepIndex = wizardSteps.indexOf(this.wizardSteps[this.currentStepIndex]);
        }
        this._wizardSteps = wizardSteps;
    }
    /**
     * The navigation mode used to navigate inside the wizard
     */
    get navigation() {
        return this._navigation;
    }
    /**
     * Updates the navigation mode for this wizard component
     *
     * @param navigation The updated navigation mode
     */
    set navigation(navigation) {
        this._navigation = navigation;
    }
    /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param stepIndex The to be checked index of a step inside this wizard
     * @returns True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    hasStep(stepIndex) {
        return this.wizardSteps.length > 0 && 0 <= stepIndex && stepIndex < this.wizardSteps.length;
    }
    /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @returns True if this wizard has a previous step before the current step
     */
    hasPreviousStep() {
        return this.hasStep(this.currentStepIndex - 1);
    }
    /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @returns True if this wizard has a next step after the current step
     */
    hasNextStep() {
        return this.hasStep(this.currentStepIndex + 1);
    }
    /**
     * Checks if this wizard is currently inside its last step
     *
     * @returns True if the wizard is currently inside its last step
     */
    isLastStep() {
        return this.wizardSteps.length > 0 && this.currentStepIndex === this.wizardSteps.length - 1;
    }
    /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @param stepIndex The given index
     * @returns The found [[WizardStep]] at the given index `stepIndex`
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     */
    getStepAtIndex(stepIndex) {
        if (!this.hasStep(stepIndex)) {
            throw new Error(`Expected a known step, but got stepIndex: ${stepIndex}.`);
        }
        return this.wizardSteps[stepIndex];
    }
    /**
     * Finds the index of the step with the given `stepId`.
     * If no step with the given `stepId` exists, `-1` is returned
     *
     * @param stepId The given step id
     * @returns The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
     */
    getIndexOfStepWithId(stepId) {
        return this.wizardSteps.findIndex(step => step.stepId === stepId);
    }
    /**
     * Finds the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param step The given [[WizardStep]]
     * @returns The found index of `step` or `-1` if the step is not included in the wizard
     */
    getIndexOfStep(step) {
        return this.wizardSteps.indexOf(step);
    }
    /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param destinationStep The given destination step
     * @returns The calculated [[MovingDirection]]
     */
    getMovingDirection(destinationStep) {
        let movingDirection;
        if (destinationStep > this.currentStepIndex) {
            movingDirection = MovingDirection.Forwards;
        }
        else if (destinationStep < this.currentStepIndex) {
            movingDirection = MovingDirection.Backwards;
        }
        else {
            movingDirection = MovingDirection.Stay;
        }
        return movingDirection;
    }
    /**
     * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
     *
     * This method controls navigation by [[goToStep]], [[goToPreviousStep]], and [[goToNextStep]] directives.
     * Navigation by navigation bar is governed by [[isNavigable]].
     *
     * @param destinationIndex The index of the destination step
     * @returns A [[Promise]] containing `true`, if the destination step can be transitioned to and false otherwise
     */
    canGoToStep(destinationIndex) {
        return this.navigation.canGoToStep(this, destinationIndex);
    }
    /**
     * Tries to transition to the wizard step, as denoted by the given destination index.
     *
     * Note: You do not have to call [[canGoToStep]] before calling [[goToStep]].
     * The [[canGoToStep]] method will be called automatically.
     *
     * @param destinationIndex The index of the destination wizard step, which should be entered
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    goToStep(destinationIndex, preFinalize, postFinalize) {
        return this.navigation.goToStep(this, destinationIndex, preFinalize, postFinalize);
    }
    /**
     * Tries to transition the wizard to the previous step
     *
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    goToPreviousStep(preFinalize, postFinalize) {
        return this.navigation.goToStep(this, this.currentStepIndex - 1, preFinalize, postFinalize);
    }
    /**
     * Tries to transition the wizard to the next step
     *
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    goToNextStep(preFinalize, postFinalize) {
        return this.navigation.goToStep(this, this.currentStepIndex + 1, preFinalize, postFinalize);
    }
    /**
     * Checks, whether the wizard step, located at the given index, can be navigated to using the navigation bar.
     *
     * @param destinationIndex The index of the destination step
     * @returns True if the step can be navigated to, false otherwise
     */
    isNavigable(destinationIndex) {
        return this.navigation.isNavigable(this, destinationIndex);
    }
    /**
     * Resets the state of this wizard.
     */
    reset() {
        this.navigation.reset(this);
    }
}
WizardComponent.ɵfac = function WizardComponent_Factory(t) { return new (t || WizardComponent)(); };
WizardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WizardComponent, selectors: [["aw-wizard"]], contentQueries: function WizardComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, WizardStep, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wizardStepsQueryList = _t);
    } }, hostVars: 4, hostBindings: function WizardComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("horizontal", ctx.horizontalOrientation)("vertical", ctx.verticalOrientation);
    } }, inputs: { navBarLocation: "navBarLocation", navBarLayout: "navBarLayout", navBarDirection: "navBarDirection", disableNavigationBar: "disableNavigationBar", defaultStepIndex: "defaultStepIndex" }, ngContentSelectors: _c0, decls: 4, vars: 6, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"]], template: function WizardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardComponent_aw_wizard_navigation_bar_0_Template, 1, 9, "aw-wizard-navigation-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardComponent_aw_wizard_navigation_bar_3_Template, 1, 9, "aw-wizard-navigation-bar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navBarLocation == "top" || ctx.navBarLocation == "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c2, ctx.navBarLocation == "left" || ctx.navBarLocation == "right", ctx.navBarLocation == "top" || ctx.navBarLocation == "bottom"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navBarLocation == "bottom" || ctx.navBarLocation == "right");
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, WizardNavigationBarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass]; }, encapsulation: 2 });
WizardComponent.ctorParameters = () => [];
WizardComponent.propDecorators = {
    wizardStepsQueryList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [WizardStep, { descendants: true },] }],
    navBarLocation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    navBarLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    navBarDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    defaultStepIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disableNavigationBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    horizontalOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.horizontal',] }],
    verticalOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.vertical',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'aw-wizard',
                template: "<aw-wizard-navigation-bar\n  *ngIf=\"navBarLocation == 'top' || navBarLocation == 'left'\"\n  [ngClass]=\"{\n    'vertical': navBarLocation == 'left',\n    'horizontal': navBarLocation == 'top',\n    'small': navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n\n<div [ngClass]=\"{\n  'wizard-steps': true,\n  'vertical': navBarLocation == 'left' || navBarLocation == 'right',\n  'horizontal': navBarLocation == 'top' || navBarLocation == 'bottom'\n}\">\n  <ng-content></ng-content>\n</div>\n\n<aw-wizard-navigation-bar\n  *ngIf=\"navBarLocation == 'bottom' || navBarLocation == 'right'\"\n  [ngClass]=\"{\n    'vertical': navBarLocation == 'right',\n    'horizontal': navBarLocation == 'bottom',\n    'small': navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n"
            }]
    }], function () { return []; }, { navBarLocation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], navBarLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], navBarDirection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disableNavigationBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], defaultStepIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], horizontalOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.horizontal']
        }], verticalOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.vertical']
        }], wizardStepsQueryList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [WizardStep, { descendants: true }]
        }] }); })();

/**
 * The `aw-wizard-navigation-bar` component contains the navigation bar inside a [[WizardComponent]].
 * To correctly display the navigation bar, it's required to set the right css classes for the navigation bar,
 * otherwise it will look like a normal `ul` component.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-navigation-bar></aw-wizard-navigation-bar>
 * ```
 *
 * @author Marc Arndt
 */
class WizardNavigationBarComponent {
    /**
     * Constructor
     *
     * @param wizard The state the wizard currently resides in
     */
    constructor(wizard) {
        this.wizard = wizard;
    }
    /**
     * Returns all [[WizardStep]]s contained in the wizard
     *
     * @returns An array containing all [[WizardStep]]s
     */
    get wizardSteps() {
        switch (this.wizard.navBarDirection) {
            case 'right-to-left':
                return this.wizard.wizardSteps.slice().reverse();
            case 'left-to-right':
            default:
                return this.wizard.wizardSteps;
        }
    }
    /**
     * Returns the number of wizard steps, that need to be displaced in the navigation bar
     *
     * @returns The number of wizard steps to be displayed
     */
    get numberOfWizardSteps() {
        return this.wizard.wizardSteps.length;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as `current`
     */
    isCurrent(wizardStep) {
        return wizardStep.selected;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as `editing`
     */
    isEditing(wizardStep) {
        return wizardStep.editing;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as `done`
     */
    isDone(wizardStep) {
        return wizardStep.completed;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as `optional`
     */
    isOptional(wizardStep) {
        return wizardStep.optional;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `completed` in the navigation bar.
     *
     * The `completed` class is only applied to completion steps.
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as `completed`
     */
    isCompleted(wizardStep) {
        return wizardStep instanceof WizardCompletionStep && this.wizard.completed;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as navigable
     */
    isNavigable(wizardStep) {
        return !wizardStep.selected && !this.wizard.disableNavigationBar &&
            this.wizard.isNavigable(this.wizard.getIndexOfStep(wizardStep));
    }
}
WizardNavigationBarComponent.ɵfac = function WizardNavigationBarComponent_Factory(t) { return new (t || WizardNavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardComponent)); };
WizardNavigationBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WizardNavigationBarComponent, selectors: [["aw-wizard-navigation-bar"]], decls: 2, vars: 4, consts: [[3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "awGoToStep"], [1, "label"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [4, "ngIf"], [1, "step-indicator", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function WizardNavigationBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardNavigationBarComponent_li_1_Template, 8, 17, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("steps-indicator steps-", ctx.numberOfWizardSteps, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wizardSteps);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, GoToStepDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle]; }, encapsulation: 2 });
WizardNavigationBarComponent.ctorParameters = () => [
    { type: WizardComponent }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardNavigationBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'aw-wizard-navigation-bar',
                template: "<ul class=\"steps-indicator steps-{{numberOfWizardSteps}}\">\n  <li [attr.id]=\"step.stepId\" *ngFor=\"let step of wizardSteps\" [ngClass]=\"{\n        'current': isCurrent(step),\n        'editing': isEditing(step),\n        'done': isDone(step),\n        'optional': isOptional(step),\n        'completed': isCompleted(step),\n        'navigable': isNavigable(step)\n  }\">\n    <a [awGoToStep]=\"step\">\n      <div class=\"label\">\n        <ng-container *ngIf=\"step.stepTitleTemplate\" [ngTemplateOutlet]=\"step.stepTitleTemplate.templateRef\"\n          [ngTemplateOutletContext]=\"{wizardStep: step}\"></ng-container>\n        <ng-container *ngIf=\"!step.stepTitleTemplate\">{{step.stepTitle}}</ng-container>\n      </div>\n      <div class=\"step-indicator\"\n        [ngStyle]=\"{ 'font-family': step.stepSymbolTemplate ? '' : step.navigationSymbol.fontFamily }\">\n        <ng-container *ngIf=\"step.stepSymbolTemplate\" [ngTemplateOutlet]=\"step.stepSymbolTemplate.templateRef\"\n          [ngTemplateOutletContext]=\"{wizardStep: step}\"></ng-container>\n        <ng-container *ngIf=\"!step.stepSymbolTemplate\">{{step.navigationSymbol.symbol}}</ng-container>\n      </div>\n    </a>\n  </li>\n</ul>\n"
            }]
    }], function () { return [{ type: WizardComponent }]; }, null); })();

/**
 * The `aw-wizard-step` component is used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <aw-wizard-step [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <aw-wizard-step"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template awWizardStepTitle>
 *        step title
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        symbol
 *    </ng-template>
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <aw-wizard-step stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <aw-wizard-step>
 *    <ng-template awWizardStepTitle>
 *        Address information
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        <i class="fa fa-taxi"></i>
 *    </ng-template>
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
class WizardStepComponent extends WizardStep {
}
WizardStepComponent.ɵfac = /*@__PURE__*/ function () { let ɵWizardStepComponent_BaseFactory; return function WizardStepComponent_Factory(t) { return (ɵWizardStepComponent_BaseFactory || (ɵWizardStepComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](WizardStepComponent)))(t || WizardStepComponent); }; }();
WizardStepComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WizardStepComponent, selectors: [["aw-wizard-step"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: WizardStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardStepComponent) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function WizardStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'aw-wizard-step',
                template: "<ng-content></ng-content>\n",
                providers: [
                    { provide: WizardStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardStepComponent) }
                ]
            }]
    }], null, null); })();

/**
 * The `awEnableBackLinks` directive can be used to allow the user to leave a [[WizardCompletionStep]] after is has been entered.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step awEnableBackLinks (stepExit)="exit function">
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Final step" awEnableBackLinks>
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
class EnableBackLinksDirective {
    /**
     * Constructor
     *
     * @param completionStep The wizard completion step, which should be exitable
     */
    constructor(completionStep) {
        this.completionStep = completionStep;
        /**
         * This EventEmitter is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * Initialization work
     */
    ngOnInit() {
        this.completionStep.canExit = true;
        this.completionStep.stepExit = this.stepExit;
    }
}
EnableBackLinksDirective.ɵfac = function EnableBackLinksDirective_Factory(t) { return new (t || EnableBackLinksDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardCompletionStep, 1)); };
EnableBackLinksDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EnableBackLinksDirective, selectors: [["", "awEnableBackLinks", ""]], outputs: { stepExit: "stepExit" } });
EnableBackLinksDirective.ctorParameters = () => [
    { type: WizardCompletionStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host }] }
];
EnableBackLinksDirective.propDecorators = {
    stepExit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnableBackLinksDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awEnableBackLinks]'
            }]
    }], function () { return [{ type: WizardCompletionStep, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }]; }, { stepExit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }] }); })();

/**
 * Checks whether the given `value` implements the interface [[StepId]].
 *
 * @param value The value to be checked
 * @returns True if the given value implements [[StepId]] and false otherwise
 */
function isStepId(value) {
    return value.hasOwnProperty('stepId') && !(value instanceof WizardStep);
}

/**
 * Checks whether the given `value` implements the interface [[StepIndex]].
 *
 * @param value The value to be checked
 * @returns True if the given value implements [[StepIndex]] and false otherwise
 */
function isStepIndex(value) {
    return value.hasOwnProperty('stepIndex');
}

/**
 * Checks whether the given `value` implements the interface [[StepOffset]].
 *
 * @param value The value to be checked
 * @returns True if the given value implements [[StepOffset]] and false otherwise
 */
function isStepOffset(value) {
    return value.hasOwnProperty('stepOffset');
}

/**
 * The `awGoToStep` directive can be used to navigate to a given step.
 * This step can be defined in one of multiple formats
 *
 * ### Syntax
 *
 * With absolute step index:
 *
 * ```html
 * <button [awGoToStep]="{ stepIndex: absolute step index }" (finalize)="finalize method">...</button>
 * ```
 *
 * With unique step id:
 *
 * ```html
 * <button [awGoToStep]="{ stepId: 'step id of destination step' }" (finalize)="finalize method">...</button>
 * ```
 *
 * With a wizard step object:
 *
 * ```html
 * <button [awGoToStep]="wizard step object" (finalize)="finalize method">...</button>
 * ```
 *
 * With an offset to the defining step:
 *
 * ```html
 * <button [awGoToStep]="{ stepOffset: offset }" (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
class GoToStepDirective {
    /**
     * Constructor
     *
     * @param wizard The wizard component
     * @param wizardStep The wizard step, which contains this [[GoToStepDirective]]
     */
    constructor(wizard, wizardStep) {
        this.wizard = wizard;
        this.wizardStep = wizardStep;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * A convenience field for `preFinalize`
     */
    get finalize() {
        return this.preFinalize;
    }
    /**
     * A convenience name for `preFinalize`
     *
     * @param emitter The [[EventEmitter]] to be set
     */
    set finalize(emitter) {
        /* istanbul ignore next */
        this.preFinalize = emitter;
    }
    /**
     * Returns the destination step of this directive as an absolute step index inside the wizard
     *
     * @returns The index of the destination step
     * @throws If `targetStep` is of an unknown type an `Error` is thrown
     */
    get destinationStep() {
        let destinationStep;
        if (isStepIndex(this.targetStep)) {
            destinationStep = this.targetStep.stepIndex;
        }
        else if (isStepId(this.targetStep)) {
            destinationStep = this.wizard.getIndexOfStepWithId(this.targetStep.stepId);
        }
        else if (isStepOffset(this.targetStep) && this.wizardStep !== null) {
            destinationStep = this.wizard.getIndexOfStep(this.wizardStep) + this.targetStep.stepOffset;
        }
        else if (this.targetStep instanceof WizardStep) {
            destinationStep = this.wizard.getIndexOfStep(this.targetStep);
        }
        else {
            throw new Error(`Input 'targetStep' is neither a WizardStep, StepOffset, StepIndex or StepId`);
        }
        return destinationStep;
    }
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     */
    onClick() {
        this.wizard.goToStep(this.destinationStep, this.preFinalize, this.postFinalize);
    }
}
GoToStepDirective.ɵfac = function GoToStepDirective_Factory(t) { return new (t || GoToStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardComponent), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardStep, 8)); };
GoToStepDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: GoToStepDirective, selectors: [["", "awGoToStep", ""]], hostBindings: function GoToStepDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoToStepDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { targetStep: ["awGoToStep", "targetStep"] }, outputs: { preFinalize: "preFinalize", postFinalize: "postFinalize", finalize: "finalize" } });
GoToStepDirective.ctorParameters = () => [
    { type: WizardComponent },
    { type: WizardStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
GoToStepDirective.propDecorators = {
    preFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    postFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    targetStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['awGoToStep',] }],
    finalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoToStepDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awGoToStep]'
            }]
    }], function () { return [{ type: WizardComponent }, { type: WizardStep, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { preFinalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], postFinalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], finalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], 
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
        }], targetStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['awGoToStep']
        }] }); })();

/**
 * The `awNextStep` directive can be used to navigate to the next step.
 *
 * ### Syntax
 *
 * ```html
 * <button awNextStep (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
class NextStepDirective {
    /**
     * Constructor
     *
     * @param wizard The state of the wizard
     */
    constructor(wizard) {
        this.wizard = wizard;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * A convenience field for `preFinalize`
     */
    get finalize() {
        return this.preFinalize;
    }
    /**
     * A convenience name for `preFinalize`
     *
     * @param emitter The [[EventEmitter]] to be set
     */
    set finalize(emitter) {
        this.preFinalize = emitter;
    }
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     */
    onClick() {
        this.wizard.goToNextStep(this.preFinalize, this.postFinalize);
    }
}
NextStepDirective.ɵfac = function NextStepDirective_Factory(t) { return new (t || NextStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardComponent)); };
NextStepDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NextStepDirective, selectors: [["", "awNextStep", ""]], hostBindings: function NextStepDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NextStepDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, outputs: { preFinalize: "preFinalize", postFinalize: "postFinalize", finalize: "finalize" } });
NextStepDirective.ctorParameters = () => [
    { type: WizardComponent }
];
NextStepDirective.propDecorators = {
    preFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    postFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    finalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NextStepDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awNextStep]'
            }]
    }], function () { return [{ type: WizardComponent }]; }, { preFinalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], postFinalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], finalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], 
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
        }] }); })();

/**
 * The `awOptionalStep` directive can be used to define an optional `wizard-step`.
 * An optional wizard step is a [[WizardStep]] that doesn't need to be completed to transition to later wizard steps.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-step stepTitle="Second step" awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
class OptionalStepDirective {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which contains this [[OptionalStepDirective]]
     */
    constructor(wizardStep) {
        this.wizardStep = wizardStep;
        // tslint:disable-next-line:no-input-rename
        this.optional = true;
    }
    /**
     * Initialization work
     */
    ngOnInit() {
        // The input receives '' when specified in the template without a value.  In this case, apply the default value (`true`).
        this.wizardStep.optional = this.optional || this.optional === '';
    }
}
OptionalStepDirective.ɵfac = function OptionalStepDirective_Factory(t) { return new (t || OptionalStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardStep, 1)); };
OptionalStepDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OptionalStepDirective, selectors: [["", "awOptionalStep", ""]], inputs: { optional: ["awOptionalStep", "optional"] } });
OptionalStepDirective.ctorParameters = () => [
    { type: WizardStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host }] }
];
OptionalStepDirective.propDecorators = {
    optional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['awOptionalStep',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionalStepDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awOptionalStep]'
            }]
    }], function () { return [{ type: WizardStep, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }]; }, { optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['awOptionalStep']
        }] }); })();

/**
 * The `awPreviousStep` directive can be used to navigate to the previous step.
 * Compared to the [[NextStepDirective]] it's important to note, that this directive doesn't contain a `finalize` output method.
 *
 * ### Syntax
 *
 * ```html
 * <button awPreviousStep>...</button>
 * ```
 *
 * @author Marc Arndt
 */
class PreviousStepDirective {
    /**
     * Constructor
     *
     * @param wizard The state of the wizard
     */
    constructor(wizard) {
        this.wizard = wizard;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * A convenience field for `preFinalize`
     */
    get finalize() {
        return this.preFinalize;
    }
    /**
     * A convenience field for `preFinalize`
     *
     * @param emitter The [[EventEmitter]] to be set
     */
    set finalize(emitter) {
        /* istanbul ignore next */
        this.preFinalize = emitter;
    }
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     */
    onClick() {
        this.wizard.goToPreviousStep(this.preFinalize, this.postFinalize);
    }
}
PreviousStepDirective.ɵfac = function PreviousStepDirective_Factory(t) { return new (t || PreviousStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardComponent)); };
PreviousStepDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PreviousStepDirective, selectors: [["", "awPreviousStep", ""]], hostBindings: function PreviousStepDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviousStepDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, outputs: { preFinalize: "preFinalize", postFinalize: "postFinalize", finalize: "finalize" } });
PreviousStepDirective.ctorParameters = () => [
    { type: WizardComponent }
];
PreviousStepDirective.propDecorators = {
    preFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    postFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    finalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviousStepDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awPreviousStep]'
            }]
    }], function () { return [{ type: WizardComponent }]; }, { preFinalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], postFinalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], finalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], 
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
        }] }); })();

/**
 * The `awResetWizard` directive can be used to reset the wizard to its initial state.
 * This directive accepts an output, which can be used to specify some custom cleanup work during the reset process.
 *
 * ### Syntax
 *
 * ```html
 * <button awResetWizard (finalize)="custom reset task">...</button>
 * ```
 *
 * @author Marc Arndt
 */
class ResetWizardDirective {
    /**
     * Constructor
     *
     * @param wizard The wizard component
     */
    constructor(wizard) {
        this.wizard = wizard;
        /**
         * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
         */
        this.finalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * Resets the wizard
     */
    onClick() {
        // do some optional cleanup work
        this.finalize.emit();
        // reset the wizard to its initial state
        this.wizard.reset();
    }
}
ResetWizardDirective.ɵfac = function ResetWizardDirective_Factory(t) { return new (t || ResetWizardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardComponent)); };
ResetWizardDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ResetWizardDirective, selectors: [["", "awResetWizard", ""]], hostBindings: function ResetWizardDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetWizardDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, outputs: { finalize: "finalize" } });
ResetWizardDirective.ctorParameters = () => [
    { type: WizardComponent }
];
ResetWizardDirective.propDecorators = {
    finalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetWizardDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awResetWizard]'
            }]
    }], function () { return [{ type: WizardComponent }]; }, { finalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], 
    /**
     * Resets the wizard
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
        }] }); })();

/**
 * The `awSelectedStep` directive can be used on a [[WizardStep]] to set it as selected after the wizard initialisation or a reset.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step stepTitle="Step title" awSelectedStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
class SelectedStepDirective {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which should be selected by default
     */
    constructor(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     */
    ngOnInit() {
        this.wizardStep.defaultSelected = true;
    }
}
SelectedStepDirective.ɵfac = function SelectedStepDirective_Factory(t) { return new (t || SelectedStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardStep, 1)); };
SelectedStepDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SelectedStepDirective, selectors: [["", "awSelectedStep", ""]] });
SelectedStepDirective.ctorParameters = () => [
    { type: WizardStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectedStepDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awSelectedStep]'
            }]
    }], function () { return [{ type: WizardStep, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }]; }, null); })();

/**
 * The `awWizardCompletionStep` directive can be used to define a completion/success step at the end of your wizard
 * After a [[WizardCompletionStep]] has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a [[WizardCompletionStep]] automatically sets the `wizard`, and all steps inside the `wizard`,
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <div awWizardCompletionStep [stepTitle]="title of the wizard step"
 *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'font-family' }"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * ```html
 * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
 *    ...
 * </div>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
class WizardCompletionStepDirective extends WizardCompletionStep {
}
WizardCompletionStepDirective.ɵfac = /*@__PURE__*/ function () { let ɵWizardCompletionStepDirective_BaseFactory; return function WizardCompletionStepDirective_Factory(t) { return (ɵWizardCompletionStepDirective_BaseFactory || (ɵWizardCompletionStepDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](WizardCompletionStepDirective)))(t || WizardCompletionStepDirective); }; }();
WizardCompletionStepDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WizardCompletionStepDirective, selectors: [["", "awWizardCompletionStep", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: WizardStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepDirective) },
            { provide: WizardCompletionStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepDirective) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardCompletionStepDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awWizardCompletionStep]',
                providers: [
                    { provide: WizardStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepDirective) },
                    { provide: WizardCompletionStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepDirective) }
                ]
            }]
    }], null, null); })();

/**
 * The `awWizardStep` directive can be used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <div awWizardStep [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </div>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <div awWizardStep [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template awWizardStepTitle>
 *        step title
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        symbol
 *    </ng-template>
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <div awWizardStep stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </div>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <div awWizardStep>
 *    <ng-template awWizardStepTitle>
 *        Address information
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        <i class="fa fa-taxi"></i>
 *    </ng-template>
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
class WizardStepDirective extends WizardStep {
}
WizardStepDirective.ɵfac = /*@__PURE__*/ function () { let ɵWizardStepDirective_BaseFactory; return function WizardStepDirective_Factory(t) { return (ɵWizardStepDirective_BaseFactory || (ɵWizardStepDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](WizardStepDirective)))(t || WizardStepDirective); }; }();
WizardStepDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WizardStepDirective, selectors: [["", "awWizardStep", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: WizardStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardStepDirective) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardStepDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awWizardStep]',
                providers: [
                    { provide: WizardStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardStepDirective) }
                ]
            }]
    }], null, null); })();

/**
 * The [[awNavigationMode]] directive can be used to customize wizard'd navigation mode.
 *
 * There are several usage options:
 *
 * ### Option 1. Customize the default navigation mode with [[navigateBackward]] and/or [[navigateForward]] inputs.
 *
 * ```html
 * <aw-wizard [awNavigationMode] navigateBackward="deny" navigateForward="allow">...</aw-wizard>
 * ```
 *
 * ### Option 2. Pass in a custom navigation mode
 *
 * ```typescript
 * import { BaseNavigationMode } from 'angular-archwizard'
 *
 * class CustomNavigationMode extends BaseNavigationMode {
 *
 *   // ...
 * }
 * ```
 *
 * ```typescript
 * @Component({
 *   // ...
 * })
 * class MyComponent {
 *
 *   navigationMode = new CustomNavigationMode();
 * }
 * ```
 *
 * ```html
 * <aw-wizard [awNavigationMode]="navigationMode">...</aw-wizard>
 * ```
 *
 * ### Additional Notes
 *
 * - Specifying a custom navigation mode takes priority over [[navigateBackward]] and [[navigateForward]] inputs
 *
 * - Omitting the [[awNavigationMode]] directive or, equally, specifying just [[awNavigationMode]] without
 *   any inputs or parameters causes the wizard to use the default "strict" navigation mode equivalent to
 *
 * ```html
 * <aw-wizard [awNavigationMode] navigateBackward="deny" navigateForward="allow">...</aw-wizard>
 * ````
 */
class NavigationModeDirective {
    constructor(wizard) {
        this.wizard = wizard;
    }
    ngOnChanges(changes) {
        this.wizard.navigation = this.getNavigationMode();
    }
    getNavigationMode() {
        if (this.awNavigationMode) {
            return this.awNavigationMode;
        }
        return new ConfigurableNavigationMode(this.navigateBackward, this.navigateForward);
    }
}
NavigationModeDirective.ɵfac = function NavigationModeDirective_Factory(t) { return new (t || NavigationModeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardComponent)); };
NavigationModeDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NavigationModeDirective, selectors: [["", "awNavigationMode", ""]], inputs: { awNavigationMode: "awNavigationMode", navigateBackward: "navigateBackward", navigateForward: "navigateForward" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
NavigationModeDirective.ctorParameters = () => [
    { type: WizardComponent }
];
NavigationModeDirective.propDecorators = {
    awNavigationMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    navigateBackward: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    navigateForward: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationModeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awNavigationMode]'
            }]
    }], function () { return [{ type: WizardComponent }]; }, { awNavigationMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], navigateBackward: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], navigateForward: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * The `awCompletedStep` directive can be used to make a wizard step initially completed.
 *
 * Initially completed steps are shown as completed when the wizard is presented to the user.
 *
 * A typical use case is to make a step initially completed if it is automatically filled with some derived/predefined information.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step awCompletedStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * An optional boolean condition can be specified:
 *
 * ```html
 * <aw-wizard-step [awCompletedStep]="shouldBeCompleted">
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-step stepTitle="First step" [awCompletedStep]="firstStepPrefilled">
 *     ...
 * </aw-wizard-step>
 * ```
 */
class CompletedStepDirective {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which contains this [[CompletedStepDirective]]
     */
    constructor(wizardStep) {
        this.wizardStep = wizardStep;
        // tslint:disable-next-line:no-input-rename
        this.initiallyCompleted = true;
    }
    /**
     * Initialization work
     */
    ngOnInit() {
        // The input receives '' when specified in the template without a value.  In this case, apply the default value (`true`).
        this.wizardStep.initiallyCompleted = this.initiallyCompleted || this.initiallyCompleted === '';
    }
}
CompletedStepDirective.ɵfac = function CompletedStepDirective_Factory(t) { return new (t || CompletedStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardStep, 1)); };
CompletedStepDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CompletedStepDirective, selectors: [["", "awCompletedStep", ""]], inputs: { initiallyCompleted: ["awCompletedStep", "initiallyCompleted"] } });
CompletedStepDirective.ctorParameters = () => [
    { type: WizardStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host }] }
];
CompletedStepDirective.propDecorators = {
    initiallyCompleted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['awCompletedStep',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompletedStepDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awCompletedStep]'
            }]
    }], function () { return [{ type: WizardStep, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }]; }, { initiallyCompleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['awCompletedStep']
        }] }); })();

/**
 * The module defining all the content inside `angular-archwizard`
 *
 * @author Marc Arndt
 */
class ArchwizardModule {
    /* istanbul ignore next */
    static forRoot() {
        return {
            ngModule: ArchwizardModule,
            providers: [
            // Nothing here yet
            ]
        };
    }
}
ArchwizardModule.ɵfac = function ArchwizardModule_Factory(t) { return new (t || ArchwizardModule)(); };
ArchwizardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArchwizardModule });
ArchwizardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArchwizardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [
                    WizardComponent,
                    WizardStepComponent,
                    WizardNavigationBarComponent,
                    WizardCompletionStepComponent,
                    GoToStepDirective,
                    NextStepDirective,
                    PreviousStepDirective,
                    OptionalStepDirective,
                    WizardStepSymbolDirective,
                    WizardStepTitleDirective,
                    EnableBackLinksDirective,
                    WizardStepDirective,
                    WizardCompletionStepDirective,
                    SelectedStepDirective,
                    ResetWizardDirective,
                    NavigationModeDirective,
                    CompletedStepDirective,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
                ],
                exports: [
                    WizardComponent,
                    WizardStepComponent,
                    WizardNavigationBarComponent,
                    WizardCompletionStepComponent,
                    GoToStepDirective,
                    NextStepDirective,
                    PreviousStepDirective,
                    OptionalStepDirective,
                    WizardStepSymbolDirective,
                    WizardStepTitleDirective,
                    EnableBackLinksDirective,
                    WizardStepDirective,
                    WizardCompletionStepDirective,
                    SelectedStepDirective,
                    ResetWizardDirective,
                    NavigationModeDirective,
                    CompletedStepDirective,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArchwizardModule, { declarations: function () { return [WizardComponent, WizardStepComponent, WizardNavigationBarComponent, WizardCompletionStepComponent, GoToStepDirective, NextStepDirective, PreviousStepDirective, OptionalStepDirective, WizardStepSymbolDirective, WizardStepTitleDirective, EnableBackLinksDirective, WizardStepDirective, WizardCompletionStepDirective, SelectedStepDirective, ResetWizardDirective, NavigationModeDirective, CompletedStepDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]; }, exports: function () { return [WizardComponent, WizardStepComponent, WizardNavigationBarComponent, WizardCompletionStepComponent, GoToStepDirective, NextStepDirective, PreviousStepDirective, OptionalStepDirective, WizardStepSymbolDirective, WizardStepTitleDirective, EnableBackLinksDirective, WizardStepDirective, WizardCompletionStepDirective, SelectedStepDirective, ResetWizardDirective, NavigationModeDirective, CompletedStepDirective]; } }); })();

// export the components

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 55217:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/delayWhen.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delayWhen": () => (/* binding */ delayWhen)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subscriber */ 60014);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 12378);
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ 75266);
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ 60640);




function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return (source) => new SubscriptionDelayObservable(source, subscriptionDelay)
            .lift(new DelayWhenOperator(delayDurationSelector));
    }
    return (source) => source.lift(new DelayWhenOperator(delayDurationSelector));
}
class DelayWhenOperator {
    constructor(delayDurationSelector) {
        this.delayDurationSelector = delayDurationSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
    }
}
class DelayWhenSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__.OuterSubscriber {
    constructor(destination, delayDurationSelector) {
        super(destination);
        this.delayDurationSelector = delayDurationSelector;
        this.completed = false;
        this.delayNotifierSubscriptions = [];
        this.index = 0;
    }
    notifyNext(outerValue, _innerValue, _outerIndex, _innerIndex, innerSub) {
        this.destination.next(outerValue);
        this.removeSubscription(innerSub);
        this.tryComplete();
    }
    notifyError(error, innerSub) {
        this._error(error);
    }
    notifyComplete(innerSub) {
        const value = this.removeSubscription(innerSub);
        if (value) {
            this.destination.next(value);
        }
        this.tryComplete();
    }
    _next(value) {
        const index = this.index++;
        try {
            const delayNotifier = this.delayDurationSelector(value, index);
            if (delayNotifier) {
                this.tryDelay(delayNotifier, value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    }
    _complete() {
        this.completed = true;
        this.tryComplete();
        this.unsubscribe();
    }
    removeSubscription(subscription) {
        subscription.unsubscribe();
        const subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
        if (subscriptionIdx !== -1) {
            this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
        }
        return subscription.outerValue;
    }
    tryDelay(delayNotifier, value) {
        const notifierSubscription = (0,_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__.subscribeToResult)(this, delayNotifier, value);
        if (notifierSubscription && !notifierSubscription.closed) {
            const destination = this.destination;
            destination.add(notifierSubscription);
            this.delayNotifierSubscriptions.push(notifierSubscription);
        }
    }
    tryComplete() {
        if (this.completed && this.delayNotifierSubscriptions.length === 0) {
            this.destination.complete();
        }
    }
}
class SubscriptionDelayObservable extends _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable {
    constructor(source, subscriptionDelay) {
        super();
        this.source = source;
        this.subscriptionDelay = subscriptionDelay;
    }
    _subscribe(subscriber) {
        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
    }
}
class SubscriptionDelaySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_3__.Subscriber {
    constructor(parent, source) {
        super();
        this.parent = parent;
        this.source = source;
        this.sourceSubscribed = false;
    }
    _next(unused) {
        this.subscribeToSource();
    }
    _error(err) {
        this.unsubscribe();
        this.parent.error(err);
    }
    _complete() {
        this.unsubscribe();
        this.subscribeToSource();
    }
    subscribeToSource() {
        if (!this.sourceSubscribed) {
            this.sourceSubscribed = true;
            this.unsubscribe();
            this.source.subscribe(this.parent);
        }
    }
}


/***/ }),

/***/ 46774:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/retryWhen.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retryWhen": () => (/* binding */ retryWhen)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subject */ 92218);
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 52831);


function retryWhen(notifier) {
    return (source) => source.lift(new RetryWhenOperator(notifier, source));
}
class RetryWhenOperator {
    constructor(notifier, source) {
        this.notifier = notifier;
        this.source = source;
    }
    call(subscriber, source) {
        return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
    }
}
class RetryWhenSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
    constructor(destination, notifier, source) {
        super(destination);
        this.notifier = notifier;
        this.source = source;
    }
    error(err) {
        if (!this.isStopped) {
            let errors = this.errors;
            let retries = this.retries;
            let retriesSubscription = this.retriesSubscription;
            if (!retries) {
                errors = new _Subject__WEBPACK_IMPORTED_MODULE_1__.Subject();
                try {
                    const { notifier } = this;
                    retries = notifier(errors);
                }
                catch (e) {
                    return super.error(e);
                }
                retriesSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(retries, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(this));
            }
            else {
                this.errors = undefined;
                this.retriesSubscription = undefined;
            }
            this._unsubscribeAndRecycle();
            this.errors = errors;
            this.retries = retries;
            this.retriesSubscription = retriesSubscription;
            errors.next(err);
        }
    }
    _unsubscribe() {
        const { errors, retriesSubscription } = this;
        if (errors) {
            errors.unsubscribe();
            this.errors = undefined;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = undefined;
        }
        this.retries = undefined;
    }
    notifyNext() {
        const { _unsubscribe } = this;
        this._unsubscribe = null;
        this._unsubscribeAndRecycle();
        this._unsubscribe = _unsubscribe;
        this.source.subscribe(this);
    }
}


/***/ }),

/***/ 84128:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/a11y.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A11yModule": () => (/* binding */ A11yModule),
/* harmony export */   "ActiveDescendantKeyManager": () => (/* binding */ ActiveDescendantKeyManager),
/* harmony export */   "AriaDescriber": () => (/* binding */ AriaDescriber),
/* harmony export */   "CDK_DESCRIBEDBY_HOST_ATTRIBUTE": () => (/* binding */ CDK_DESCRIBEDBY_HOST_ATTRIBUTE),
/* harmony export */   "CDK_DESCRIBEDBY_ID_PREFIX": () => (/* binding */ CDK_DESCRIBEDBY_ID_PREFIX),
/* harmony export */   "CdkAriaLive": () => (/* binding */ CdkAriaLive),
/* harmony export */   "CdkMonitorFocus": () => (/* binding */ CdkMonitorFocus),
/* harmony export */   "CdkTrapFocus": () => (/* binding */ CdkTrapFocus),
/* harmony export */   "ConfigurableFocusTrap": () => (/* binding */ ConfigurableFocusTrap),
/* harmony export */   "ConfigurableFocusTrapFactory": () => (/* binding */ ConfigurableFocusTrapFactory),
/* harmony export */   "EventListenerFocusTrapInertStrategy": () => (/* binding */ EventListenerFocusTrapInertStrategy),
/* harmony export */   "FOCUS_MONITOR_DEFAULT_OPTIONS": () => (/* binding */ FOCUS_MONITOR_DEFAULT_OPTIONS),
/* harmony export */   "FOCUS_TRAP_INERT_STRATEGY": () => (/* binding */ FOCUS_TRAP_INERT_STRATEGY),
/* harmony export */   "FocusKeyManager": () => (/* binding */ FocusKeyManager),
/* harmony export */   "FocusMonitor": () => (/* binding */ FocusMonitor),
/* harmony export */   "FocusTrap": () => (/* binding */ FocusTrap),
/* harmony export */   "FocusTrapFactory": () => (/* binding */ FocusTrapFactory),
/* harmony export */   "HighContrastModeDetector": () => (/* binding */ HighContrastModeDetector),
/* harmony export */   "INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS": () => (/* binding */ INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS),
/* harmony export */   "INPUT_MODALITY_DETECTOR_OPTIONS": () => (/* binding */ INPUT_MODALITY_DETECTOR_OPTIONS),
/* harmony export */   "InputModalityDetector": () => (/* binding */ InputModalityDetector),
/* harmony export */   "InteractivityChecker": () => (/* binding */ InteractivityChecker),
/* harmony export */   "IsFocusableConfig": () => (/* binding */ IsFocusableConfig),
/* harmony export */   "LIVE_ANNOUNCER_DEFAULT_OPTIONS": () => (/* binding */ LIVE_ANNOUNCER_DEFAULT_OPTIONS),
/* harmony export */   "LIVE_ANNOUNCER_ELEMENT_TOKEN": () => (/* binding */ LIVE_ANNOUNCER_ELEMENT_TOKEN),
/* harmony export */   "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY": () => (/* binding */ LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY),
/* harmony export */   "ListKeyManager": () => (/* binding */ ListKeyManager),
/* harmony export */   "LiveAnnouncer": () => (/* binding */ LiveAnnouncer),
/* harmony export */   "MESSAGES_CONTAINER_ID": () => (/* binding */ MESSAGES_CONTAINER_ID),
/* harmony export */   "isFakeMousedownFromScreenReader": () => (/* binding */ isFakeMousedownFromScreenReader),
/* harmony export */   "isFakeTouchstartFromScreenReader": () => (/* binding */ isFakeTouchstartFromScreenReader)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 14390);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ 75939);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 16276);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion */ 76484);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/observers */ 35837);











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** IDs are delimited by an empty space, as per the spec. */

const ID_DELIMITER = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */

function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);

  if (ids.some(existingId => existingId.trim() == id.trim())) {
    return;
  }

  ids.push(id.trim());
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */


function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  const filteredIds = ids.filter(val => val != id.trim());

  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */


function getAriaReferenceIds(el, attr) {
  // Get string array of all individual ids (whitespace delimited) in the attribute value
  return (el.getAttribute(attr) || '').match(/\S+/g) || [];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * ID used for the body container where all messages are appended.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 14.0.0
 */


const MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/**
 * ID prefix used for each created message element.
 * @deprecated To be turned into a private variable.
 * @breaking-change 14.0.0
 */

const CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/**
 * Attribute given to each host element that is described by a message element.
 * @deprecated To be turned into a private variable.
 * @breaking-change 14.0.0
 */

const CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/** Global incremental identifier for each registered message element. */

let nextId = 0;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 */

class AriaDescriber {
  constructor(_document,
  /**
   * @deprecated To be turned into a required parameter.
   * @breaking-change 14.0.0
   */
  _platform) {
    this._platform = _platform;
    /** Map of all registered message elements that have been placed into the document. */

    this._messageRegistry = new Map();
    /** Container for all registered messages. */

    this._messagesContainer = null;
    /** Unique ID for the service. */

    this._id = `${nextId++}`;
    this._document = _document;
  }

  describe(hostElement, message, role) {
    if (!this._canBeDescribed(hostElement, message)) {
      return;
    }

    const key = getKey(message, role);

    if (typeof message !== 'string') {
      // We need to ensure that the element has an ID.
      setMessageId(message);

      this._messageRegistry.set(key, {
        messageElement: message,
        referenceCount: 0
      });
    } else if (!this._messageRegistry.has(key)) {
      this._createMessageElement(message, role);
    }

    if (!this._isElementDescribedByMessage(hostElement, key)) {
      this._addMessageReference(hostElement, key);
    }
  }

  removeDescription(hostElement, message, role) {
    var _a;

    if (!message || !this._isElementNode(hostElement)) {
      return;
    }

    const key = getKey(message, role);

    if (this._isElementDescribedByMessage(hostElement, key)) {
      this._removeMessageReference(hostElement, key);
    } // If the message is a string, it means that it's one that we created for the
    // consumer so we can remove it safely, otherwise we should leave it in place.


    if (typeof message === 'string') {
      const registeredMessage = this._messageRegistry.get(key);

      if (registeredMessage && registeredMessage.referenceCount === 0) {
        this._deleteMessageElement(key);
      }
    }

    if (((_a = this._messagesContainer) === null || _a === void 0 ? void 0 : _a.childNodes.length) === 0) {
      this._messagesContainer.remove();

      this._messagesContainer = null;
    }
  }
  /** Unregisters all created message elements and removes the message container. */


  ngOnDestroy() {
    var _a;

    const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);

    for (let i = 0; i < describedElements.length; i++) {
      this._removeCdkDescribedByReferenceIds(describedElements[i]);

      describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }

    (_a = this._messagesContainer) === null || _a === void 0 ? void 0 : _a.remove();
    this._messagesContainer = null;

    this._messageRegistry.clear();
  }
  /**
   * Creates a new element in the visually hidden message container element with the message
   * as its content and adds it to the message registry.
   */


  _createMessageElement(message, role) {
    const messageElement = this._document.createElement('div');

    setMessageId(messageElement);
    messageElement.textContent = message;

    if (role) {
      messageElement.setAttribute('role', role);
    }

    this._createMessagesContainer();

    this._messagesContainer.appendChild(messageElement);

    this._messageRegistry.set(getKey(message, role), {
      messageElement,
      referenceCount: 0
    });
  }
  /** Deletes the message element from the global messages container. */


  _deleteMessageElement(key) {
    var _a, _b;

    (_b = (_a = this._messageRegistry.get(key)) === null || _a === void 0 ? void 0 : _a.messageElement) === null || _b === void 0 ? void 0 : _b.remove();

    this._messageRegistry.delete(key);
  }
  /** Creates the global container for all aria-describedby messages. */


  _createMessagesContainer() {
    if (this._messagesContainer) {
      return;
    }

    const containerClassName = 'cdk-describedby-message-container';

    const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);

    for (let i = 0; i < serverContainers.length; i++) {
      // When going from the server to the client, we may end up in a situation where there's
      // already a container on the page, but we don't have a reference to it. Clear the
      // old container so we don't get duplicates. Doing this, instead of emptying the previous
      // container, should be slightly faster.
      serverContainers[i].remove();
    }

    const messagesContainer = this._document.createElement('div'); // We add `visibility: hidden` in order to prevent text in this container from
    // being searchable by the browser's Ctrl + F functionality.
    // Screen-readers will still read the description for elements with aria-describedby even
    // when the description element is not visible.


    messagesContainer.style.visibility = 'hidden'; // Even though we use `visibility: hidden`, we still apply `cdk-visually-hidden` so that
    // the description element doesn't impact page layout.

    messagesContainer.classList.add(containerClassName);
    messagesContainer.classList.add('cdk-visually-hidden'); // @breaking-change 14.0.0 Remove null check for `_platform`.

    if (this._platform && !this._platform.isBrowser) {
      messagesContainer.setAttribute('platform', 'server');
    }

    this._document.body.appendChild(messagesContainer);

    this._messagesContainer = messagesContainer;
  }
  /** Removes all cdk-describedby messages that are hosted through the element. */


  _removeCdkDescribedByReferenceIds(element) {
    // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
    const originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(id => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
    element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
  }
  /**
   * Adds a message reference to the element using aria-describedby and increments the registered
   * message's reference count.
   */


  _addMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key); // Add the aria-describedby reference and set the
    // describedby_host attribute to mark the element.


    addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
    element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
    registeredMessage.referenceCount++;
  }
  /**
   * Removes a message reference from the element using aria-describedby
   * and decrements the registered message's reference count.
   */


  _removeMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);

    registeredMessage.referenceCount--;
    removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
    element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
  }
  /** Returns true if the element has been described by the provided message ID. */


  _isElementDescribedByMessage(element, key) {
    const referenceIds = getAriaReferenceIds(element, 'aria-describedby');

    const registeredMessage = this._messageRegistry.get(key);

    const messageId = registeredMessage && registeredMessage.messageElement.id;
    return !!messageId && referenceIds.indexOf(messageId) != -1;
  }
  /** Determines whether a message can be described on a particular element. */


  _canBeDescribed(element, message) {
    if (!this._isElementNode(element)) {
      return false;
    }

    if (message && typeof message === 'object') {
      // We'd have to make some assumptions about the description element's text, if the consumer
      // passed in an element. Assume that if an element is passed in, the consumer has verified
      // that it can be used as a description.
      return true;
    }

    const trimmedMessage = message == null ? '' : `${message}`.trim();
    const ariaLabel = element.getAttribute('aria-label'); // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
    // element, because screen readers will end up reading out the same text twice in a row.

    return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
  }
  /** Checks whether a node is an Element node. */


  _isElementNode(element) {
    return element.nodeType === this._document.ELEMENT_NODE;
  }

}

AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
  return new (t || AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform));
};

AriaDescriber.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AriaDescriber,
  factory: AriaDescriber.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AriaDescriber, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }];
  }, null);
})();
/** Gets a key that can be used to look messages up in the registry. */


function getKey(message, role) {
  return typeof message === 'string' ? `${role || ''}/${message}` : message;
}
/** Assigns a unique ID to an element, if it doesn't have one already. */


function setMessageId(element) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${nextId++}`;
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */


class ListKeyManager {
  constructor(_items) {
    this._items = _items;
    this._activeItemIndex = -1;
    this._activeItem = null;
    this._wrap = false;
    this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
    this._vertical = true;
    this._allowedModifierKeys = [];
    this._homeAndEnd = false;
    /**
     * Predicate function that can be used to check whether an item should be skipped
     * by the key manager. By default, disabled items are skipped.
     */

    this._skipPredicateFn = item => item.disabled; // Buffer for the letters that the user has pressed when the typeahead option is turned on.


    this._pressedLetters = [];
    /**
     * Stream that emits any time the TAB key is pressed, so components can react
     * when focus is shifted off of the list.
     */

    this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** Stream that emits whenever the active item of the list manager changes. */

    this.change = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject(); // We allow for the items to be an array because, in some cases, the consumer may
    // not have access to a QueryList of the items they want to manage (e.g. when the
    // items aren't being collected via `ViewChildren` or `ContentChildren`).

    if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList) {
      _items.changes.subscribe(newItems => {
        if (this._activeItem) {
          const itemArray = newItems.toArray();
          const newIndex = itemArray.indexOf(this._activeItem);

          if (newIndex > -1 && newIndex !== this._activeItemIndex) {
            this._activeItemIndex = newIndex;
          }
        }
      });
    }
  }
  /**
   * Sets the predicate function that determines which items should be skipped by the
   * list key manager.
   * @param predicate Function that determines whether the given item should be skipped.
   */


  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  /**
   * Configures wrapping mode, which determines whether the active item will wrap to
   * the other end of list when there are no more items in the given direction.
   * @param shouldWrap Whether the list should wrap when reaching the end.
   */


  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  /**
   * Configures whether the key manager should be able to move the selection vertically.
   * @param enabled Whether vertical selection should be enabled.
   */


  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  /**
   * Configures the key manager to move the selection horizontally.
   * Passing in `null` will disable horizontal movement.
   * @param direction Direction in which the selection can be moved.
   */


  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  /**
   * Modifier keys which are allowed to be held down and whose default actions will be prevented
   * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
   */


  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  /**
   * Turns on typeahead mode which allows users to set the active item by typing.
   * @param debounceInterval Time to wait after the last keystroke before setting the active item.
   */


  withTypeAhead(debounceInterval = 200) {
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && this._items.length && this._items.some(item => typeof item.getLabel !== 'function')) {
      throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
    }

    this._typeaheadSubscription.unsubscribe(); // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
    // and convert those letters back into a string. Afterwards find the first item that starts
    // with that string and select it.


    this._typeaheadSubscription = this._letterKeyStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(letter => this._pressedLetters.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(debounceInterval), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(() => this._pressedLetters.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => this._pressedLetters.join(''))).subscribe(inputString => {
      const items = this._getItemsArray(); // Start at 1 because we want to start searching at the item immediately
      // following the current active item.


      for (let i = 1; i < items.length + 1; i++) {
        const index = (this._activeItemIndex + i) % items.length;
        const item = items[index];

        if (!this._skipPredicateFn(item) && item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
          this.setActiveItem(index);
          break;
        }
      }

      this._pressedLetters = [];
    });
    return this;
  }
  /**
   * Configures the key manager to activate the first and last items
   * respectively when the Home or End key is pressed.
   * @param enabled Whether pressing the Home or End key activates the first/last item.
   */


  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }

  setActiveItem(item) {
    const previousActiveItem = this._activeItem;
    this.updateActiveItem(item);

    if (this._activeItem !== previousActiveItem) {
      this.change.next(this._activeItemIndex);
    }
  }
  /**
   * Sets the active item depending on the key event passed in.
   * @param event Keyboard event to be used for determining which element should be active.
   */


  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
    const isModifierAllowed = modifiers.every(modifier => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });

    switch (keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.TAB:
        this.tabOut.next();
        return;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.DOWN_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.UP_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.RIGHT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.LEFT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.HOME:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.END:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }

      default:
        if (isModifierAllowed || (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.hasModifierKey)(event, 'shiftKey')) {
          // Attempt to use the `event.key` which also maps it to the user's keyboard language,
          // otherwise fall back to resolving alphanumeric characters via the keyCode.
          if (event.key && event.key.length === 1) {
            this._letterKeyStream.next(event.key.toLocaleUpperCase());
          } else if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.A && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.Z || keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.ZERO && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.NINE) {
            this._letterKeyStream.next(String.fromCharCode(keyCode));
          }
        } // Note that we return here, in order to avoid preventing
        // the default action of non-navigational keys.


        return;
    }

    this._pressedLetters = [];
    event.preventDefault();
  }
  /** Index of the currently active item. */


  get activeItemIndex() {
    return this._activeItemIndex;
  }
  /** The active item. */


  get activeItem() {
    return this._activeItem;
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */


  isTyping() {
    return this._pressedLetters.length > 0;
  }
  /** Sets the active item to the first enabled item in the list. */


  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  /** Sets the active item to the last enabled item in the list. */


  setLastItemActive() {
    this._setActiveItemByIndex(this._items.length - 1, -1);
  }
  /** Sets the active item to the next enabled item in the list. */


  setNextItemActive() {
    this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  /** Sets the active item to a previous enabled item in the list. */


  setPreviousItemActive() {
    this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }

  updateActiveItem(item) {
    const itemArray = this._getItemsArray();

    const index = typeof item === 'number' ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index]; // Explicitly check for `null` and `undefined` because other falsy values are valid.

    this._activeItem = activeItem == null ? null : activeItem;
    this._activeItemIndex = index;
  }
  /**
   * This method sets the active item, given a list of items and the delta between the
   * currently active item and the new active item. It will calculate differently
   * depending on whether wrap mode is turned on.
   */


  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  /**
   * Sets the active item properly given "wrap" mode. In other words, it will continue to move
   * down the list until it finds an item that is not disabled, and it will wrap if it
   * encounters either end of the list.
   */


  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();

    for (let i = 1; i <= items.length; i++) {
      const index = (this._activeItemIndex + delta * i + items.length) % items.length;
      const item = items[index];

      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  /**
   * Sets the active item properly given the default mode. In other words, it will
   * continue to move down the list until it finds an item that is not disabled. If
   * it encounters either end of the list, it will stop and not wrap.
   */


  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
  }
  /**
   * Sets the active item to the first enabled item starting at the index specified. If the
   * item is disabled, it will move in the fallbackDelta direction until it either
   * finds an enabled item or encounters the end of the list.
   */


  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();

    if (!items[index]) {
      return;
    }

    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;

      if (!items[index]) {
        return;
      }
    }

    this.setActiveItem(index);
  }
  /** Returns the items as an array. */


  _getItemsArray() {
    return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList ? this._items.toArray() : this._items;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class ActiveDescendantKeyManager extends ListKeyManager {
  setActiveItem(index) {
    if (this.activeItem) {
      this.activeItem.setInactiveStyles();
    }

    super.setActiveItem(index);

    if (this.activeItem) {
      this.activeItem.setActiveStyles();
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class FocusKeyManager extends ListKeyManager {
  constructor() {
    super(...arguments);
    this._origin = 'program';
  }
  /**
   * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
   * @param origin Focus origin to be used when focusing items.
   */


  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }

  setActiveItem(item) {
    super.setActiveItem(item);

    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
  }

}
/**
 * Configuration for the isFocusable method.
 */


class IsFocusableConfig {
  constructor() {
    /**
     * Whether to count an element as focusable even if it is not currently visible.
     */
    this.ignoreVisibility = false;
  }

} // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.

/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */


class InteractivityChecker {
  constructor(_platform) {
    this._platform = _platform;
  }
  /**
   * Gets whether an element is disabled.
   *
   * @param element Element to be checked.
   * @returns Whether the element is disabled.
   */


  isDisabled(element) {
    // This does not capture some cases, such as a non-form control with a disabled attribute or
    // a form control inside of a disabled form, but should capture the most common cases.
    return element.hasAttribute('disabled');
  }
  /**
   * Gets whether an element is visible for the purposes of interactivity.
   *
   * This will capture states like `display: none` and `visibility: hidden`, but not things like
   * being clipped by an `overflow: hidden` parent or being outside the viewport.
   *
   * @returns Whether the element is visible.
   */


  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
  }
  /**
   * Gets whether an element can be reached via Tab key.
   * Assumes that the element has already been checked with isFocusable.
   *
   * @param element Element to be checked.
   * @returns Whether the element is tabbable.
   */


  isTabbable(element) {
    // Nothing is tabbable on the server 😎
    if (!this._platform.isBrowser) {
      return false;
    }

    const frameElement = getFrameElement(getWindow(element));

    if (frameElement) {
      // Frame elements inherit their tabindex onto all child elements.
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      } // Browsers disable tabbing to an element inside of an invisible frame.


      if (!this.isVisible(frameElement)) {
        return false;
      }
    }

    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);

    if (element.hasAttribute('contenteditable')) {
      return tabIndexValue !== -1;
    }

    if (nodeName === 'iframe' || nodeName === 'object') {
      // The frame or object's content may be tabbable depending on the content, but it's
      // not possibly to reliably detect the content of the frames. We always consider such
      // elements as non-tabbable.
      return false;
    } // In iOS, the browser only considers some specific elements as tabbable.


    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }

    if (nodeName === 'audio') {
      // Audio elements without controls enabled are never tabbable, regardless
      // of the tabindex attribute explicitly being set.
      if (!element.hasAttribute('controls')) {
        return false;
      } // Audio elements with controls are by default tabbable unless the
      // tabindex attribute is set to `-1` explicitly.


      return tabIndexValue !== -1;
    }

    if (nodeName === 'video') {
      // For all video elements, if the tabindex attribute is set to `-1`, the video
      // is not tabbable. Note: We cannot rely on the default `HTMLElement.tabIndex`
      // property as that one is set to `-1` in Chrome, Edge and Safari v13.1. The
      // tabindex attribute is the source of truth here.
      if (tabIndexValue === -1) {
        return false;
      } // If the tabindex is explicitly set, and not `-1` (as per check before), the
      // video element is always tabbable (regardless of whether it has controls or not).


      if (tabIndexValue !== null) {
        return true;
      } // Otherwise (when no explicit tabindex is set), a video is only tabbable if it
      // has controls enabled. Firefox is special as videos are always tabbable regardless
      // of whether there are controls or not.


      return this._platform.FIREFOX || element.hasAttribute('controls');
    }

    return element.tabIndex >= 0;
  }
  /**
   * Gets whether an element can be focused by the user.
   *
   * @param element Element to be checked.
   * @param config The config object with options to customize this method's behavior
   * @returns Whether the element is focusable.
   */


  isFocusable(element, config) {
    // Perform checks in order of left to most expensive.
    // Again, naive approach that does not capture many edge cases and browser quirks.
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && ((config === null || config === void 0 ? void 0 : config.ignoreVisibility) || this.isVisible(element));
  }

}

InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
  return new (t || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform));
};

InteractivityChecker.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: InteractivityChecker,
  factory: InteractivityChecker.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InteractivityChecker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }];
  }, null);
})();
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 */


function getFrameElement(window) {
  try {
    return window.frameElement;
  } catch (_a) {
    return null;
  }
}
/** Checks whether the specified element has any geometry / rectangles. */


function hasGeometry(element) {
  // Use logic from jQuery to check for an invisible element.
  // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
}
/** Gets whether an element's  */


function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
}
/** Gets whether an element is an `<input type="hidden">`. */


function isHiddenInput(element) {
  return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */


function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */


function isInputElement(element) {
  return element.nodeName.toLowerCase() == 'input';
}
/** Gets whether an element is an anchor element. */


function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */


function hasValidTabIndex(element) {
  if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
    return false;
  }

  let tabIndex = element.getAttribute('tabindex');
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 */


function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  } // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054


  const tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
/** Checks whether the specified element is potentially tabbable on iOS */


function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === 'input' && element.type;
  return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */


function isPotentiallyFocusable(element) {
  // Inputs are potentially focusable *unless* they're type="hidden".
  if (isHiddenInput(element)) {
    return false;
  }

  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
}
/** Gets the parent window of a DOM node with regards of being inside of an iframe. */


function getWindow(node) {
  // ownerDocument is null if `node` itself *is* a document.
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause the two to be misaligned.
 *
 * @deprecated Use `ConfigurableFocusTrap` instead.
 * @breaking-change 11.0.0
 */


class FocusTrap {
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._hasAttached = false; // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.

    this.startAnchorListener = () => this.focusLastTabbableElement();

    this.endAnchorListener = () => this.focusFirstTabbableElement();

    this._enabled = true;

    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Whether the focus trap is active. */


  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    this._enabled = value;

    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);

      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */


  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;

    if (startAnchor) {
      startAnchor.removeEventListener('focus', this.startAnchorListener);
      startAnchor.remove();
    }

    if (endAnchor) {
      endAnchor.removeEventListener('focus', this.endAnchorListener);
      endAnchor.remove();
    }

    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */


  attachAnchors() {
    // If we're not on the browser, there can be no focus to trap.
    if (this._hasAttached) {
      return true;
    }

    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();

        this._startAnchor.addEventListener('focus', this.startAnchorListener);
      }

      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();

        this._endAnchor.addEventListener('focus', this.endAnchorListener);
      }
    });

    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);

      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);

      this._hasAttached = true;
    }

    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then focuses the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusInitialElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusFirstTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusLastTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */


  _getRegionBoundary(bound) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], ` + `[cdkFocusRegion${bound}], ` + `[cdk-focus-${bound}]`);

    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        // @breaking-change 8.0.0
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated ` + `attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated attribute ` + `will be removed in 8.0.0.`, markers[i]);
        }
      }
    }

    if (bound == 'start') {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }

    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */


  focusInitialElement(options) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], ` + `[cdkFocusInitial]`);

    if (redirectToElement) {
      // @breaking-change 8.0.0
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', ` + `use 'cdkFocusInitial' instead. The deprecated attribute ` + `will be removed in 8.0.0`, redirectToElement);
      } // Warn the consumer if the element they've pointed to
      // isn't focusable, when not in production mode.


      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }

      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);

        focusableChild === null || focusableChild === void 0 ? void 0 : focusableChild.focus(options);
        return !!focusableChild;
      }

      redirectToElement.focus(options);
      return true;
    }

    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */


  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('start');

    if (redirectToElement) {
      redirectToElement.focus(options);
    }

    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */


  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('end');

    if (redirectToElement) {
      redirectToElement.focus(options);
    }

    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */


  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */


  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }

    const children = root.children;

    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;

      if (tabbableChild) {
        return tabbableChild;
      }
    }

    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */


  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    } // Iterate in reverse DOM order.


    const children = root.children;

    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;

      if (tabbableChild) {
        return tabbableChild;
      }
    }

    return null;
  }
  /** Creates an anchor element. */


  _createAnchor() {
    const anchor = this._document.createElement('div');

    this._toggleAnchorTabIndex(this._enabled, anchor);

    anchor.classList.add('cdk-visually-hidden');
    anchor.classList.add('cdk-focus-trap-anchor');
    anchor.setAttribute('aria-hidden', 'true');
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */


  _toggleAnchorTabIndex(isEnabled, anchor) {
    // Remove the tabindex completely, rather than setting it to -1, because if the
    // element has a tabindex, the user might still hit it when navigating with the arrow keys.
    isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */


  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);

      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */


  _executeOnStable(fn) {
    if (this._ngZone.isStable) {
      fn();
    } else {
      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(fn);
    }
  }

}
/**
 * Factory that allows easy instantiation of focus traps.
 * @deprecated Use `ConfigurableFocusTrapFactory` instead.
 * @breaking-change 11.0.0
 */


class FocusTrapFactory {
  constructor(_checker, _ngZone, _document) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
  }
  /**
   * Creates a focus-trapped region around the given element.
   * @param element The element around which focus will be trapped.
   * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
   *     manually by the user.
   * @returns The created focus trap instance.
   */


  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
  }

}

FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
  return new (t || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};

FocusTrapFactory.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FocusTrapFactory,
  factory: FocusTrapFactory.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrapFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: InteractivityChecker
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, null);
})();
/** Directive for trapping focus within a region. */


class CdkTrapFocus {
  constructor(_elementRef, _focusTrapFactory,
  /**
   * @deprecated No longer being used. To be removed.
   * @breaking-change 13.0.0
   */
  _document) {
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    /** Previously focused element to restore focus to upon destroy when using autoCapture. */

    this._previouslyFocusedElement = null;
    this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
  }
  /** Whether the focus trap is active. */


  get enabled() {
    return this.focusTrap.enabled;
  }

  set enabled(value) {
    this.focusTrap.enabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
  }
  /**
   * Whether the directive should automatically move focus into the trapped region upon
   * initialization and return focus to the previous activeElement upon destruction.
   */


  get autoCapture() {
    return this._autoCapture;
  }

  set autoCapture(value) {
    this._autoCapture = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
  }

  ngOnDestroy() {
    this.focusTrap.destroy(); // If we stored a previously focused element when using autoCapture, return focus to that
    // element now that the trapped region is being destroyed.

    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();

      this._previouslyFocusedElement = null;
    }
  }

  ngAfterContentInit() {
    this.focusTrap.attachAnchors();

    if (this.autoCapture) {
      this._captureFocus();
    }
  }

  ngDoCheck() {
    if (!this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }

  ngOnChanges(changes) {
    const autoCaptureChange = changes['autoCapture'];

    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap.hasAttached()) {
      this._captureFocus();
    }
  }

  _captureFocus() {
    this._previouslyFocusedElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getFocusedElementPierceShadowDom)();
    this.focusTrap.focusInitialElementWhenReady();
  }

}

CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
  return new (t || CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};

CdkTrapFocus.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkTrapFocus,
  selectors: [["", "cdkTrapFocus", ""]],
  inputs: {
    enabled: ["cdkTrapFocus", "enabled"],
    autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"]
  },
  exportAs: ["cdkTrapFocus"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkTrapFocus, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkTrapFocus]',
      exportAs: 'cdkTrapFocus'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: FocusTrapFactory
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, {
    enabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkTrapFocus']
    }],
    autoCapture: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkTrapFocusAutoCapture']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */


class ConfigurableFocusTrap extends FocusTrap {
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
    super(_element, _checker, _ngZone, _document, config.defer);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;

    this._focusTrapManager.register(this);
  }
  /** Whether the FocusTrap is enabled. */


  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    this._enabled = value;

    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */


  destroy() {
    this._focusTrapManager.deregister(this);

    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */


  _enable() {
    this._inertStrategy.preventFocus(this);

    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */


  _disable() {
    this._inertStrategy.allowFocus(this);

    this.toggleAnchors(false);
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The injection token used to specify the inert strategy. */


const FOCUS_TRAP_INERT_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('FOCUS_TRAP_INERT_STRATEGY');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Lightweight FocusTrapInertStrategy that adds a document focus event
 * listener to redirect focus back inside the FocusTrap.
 */

class EventListenerFocusTrapInertStrategy {
  constructor() {
    /** Focus event handler. */
    this._listener = null;
  }
  /** Adds a document event listener that keeps focus inside the FocusTrap. */


  preventFocus(focusTrap) {
    // Ensure there's only one listener per document
    if (this._listener) {
      focusTrap._document.removeEventListener('focus', this._listener, true);
    }

    this._listener = e => this._trapFocus(focusTrap, e);

    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener('focus', this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */


  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }

    focusTrap._document.removeEventListener('focus', this._listener, true);

    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */


  _trapFocus(focusTrap, event) {
    var _a;

    const target = event.target;
    const focusTrapRoot = focusTrap._element; // Don't refocus if target was in an overlay, because the overlay might be associated
    // with an element inside the FocusTrap, ex. mat-select.

    if (target && !focusTrapRoot.contains(target) && !((_a = target.closest) === null || _a === void 0 ? void 0 : _a.call(target, 'div.cdk-overlay-pane'))) {
      // Some legacy FocusTrap usages have logic that focuses some element on the page
      // just before FocusTrap is destroyed. For backwards compatibility, wait
      // to be sure FocusTrap is still enabled before refocusing.
      setTimeout(() => {
        // Check whether focus wasn't put back into the focus trap while the timeout was pending.
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injectable that ensures only the most recently enabled FocusTrap is active. */


class FocusTrapManager {
  constructor() {
    // A stack of the FocusTraps on the page. Only the FocusTrap at the
    // top of the stack is active.
    this._focusTrapStack = [];
  }
  /**
   * Disables the FocusTrap at the top of the stack, and then pushes
   * the new FocusTrap onto the stack.
   */


  register(focusTrap) {
    // Dedupe focusTraps that register multiple times.
    this._focusTrapStack = this._focusTrapStack.filter(ft => ft !== focusTrap);
    let stack = this._focusTrapStack;

    if (stack.length) {
      stack[stack.length - 1]._disable();
    }

    stack.push(focusTrap);

    focusTrap._enable();
  }
  /**
   * Removes the FocusTrap from the stack, and activates the
   * FocusTrap that is the new top of the stack.
   */


  deregister(focusTrap) {
    focusTrap._disable();

    const stack = this._focusTrapStack;
    const i = stack.indexOf(focusTrap);

    if (i !== -1) {
      stack.splice(i, 1);

      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }

}

FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) {
  return new (t || FocusTrapManager)();
};

FocusTrapManager.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FocusTrapManager,
  factory: FocusTrapManager.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrapManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Factory that allows easy instantiation of configurable focus traps. */


class ConfigurableFocusTrapFactory {
  constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._focusTrapManager = _focusTrapManager;
    this._document = _document; // TODO split up the strategies into different modules, similar to DateAdapter.

    this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
  }

  create(element, config = {
    defer: false
  }) {
    let configObject;

    if (typeof config === 'boolean') {
      configObject = {
        defer: config
      };
    } else {
      configObject = config;
    }

    return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
  }

}

ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) {
  return new (t || ConfigurableFocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8));
};

ConfigurableFocusTrapFactory.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ConfigurableFocusTrapFactory,
  factory: ConfigurableFocusTrapFactory.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurableFocusTrapFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: InteractivityChecker
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: FocusTrapManager
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [FOCUS_TRAP_INERT_STRATEGY]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Gets whether an event could be a faked `mousedown` event dispatched by a screen reader. */


function isFakeMousedownFromScreenReader(event) {
  // Some screen readers will dispatch a fake `mousedown` event when pressing enter or space on
  // a clickable element. We can distinguish these events when both `offsetX` and `offsetY` are
  // zero or `event.buttons` is zero, depending on the browser:
  // - `event.buttons` works on Firefox, but fails on Chrome.
  // - `offsetX` and `offsetY` work on Chrome, but fail on Firefox.
  // Note that there's an edge case where the user could click the 0x0 spot of the
  // screen themselves, but that is unlikely to contain interactive elements.
  return event.buttons === 0 || event.offsetX === 0 && event.offsetY === 0;
}
/** Gets whether an event could be a faked `touchstart` event dispatched by a screen reader. */


function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0]; // A fake `touchstart` can be distinguished from a real one by looking at the `identifier`
  // which is typically >= 0 on a real device versus -1 from a screen reader. Just to be safe,
  // we can also look at `radiusX` and `radiusY`. This behavior was observed against a Windows 10
  // device with a touch screen running NVDA v2020.4 and Firefox 85 or Chrome 88.

  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injectable options for the InputModalityDetector. These are shallowly merged with the default
 * options.
 */


const INPUT_MODALITY_DETECTOR_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-input-modality-detector-options');
/**
 * Default options for the InputModalityDetector.
 *
 * Modifier keys are ignored by default (i.e. when pressed won't cause the service to detect
 * keyboard input modality) for two reasons:
 *
 * 1. Modifier keys are commonly used with mouse to perform actions such as 'right click' or 'open
 *    in new tab', and are thus less representative of actual keyboard interaction.
 * 2. VoiceOver triggers some keyboard events when linearly navigating with Control + Option (but
 *    confusingly not with Caps Lock). Thus, to have parity with other screen readers, we ignore
 *    these keys so as to not update the input modality.
 *
 * Note that we do not by default ignore the right Meta key on Safari because it has the same key
 * code as the ContextMenu key on other browsers. When we switch to using event.key, we can
 * distinguish between the two.
 */

const INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.ALT, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.CONTROL, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.MAC_META, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.META, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.SHIFT]
};
/**
 * The amount of time needed to pass after a touchstart event in order for a subsequent mousedown
 * event to be attributed as mouse and not touch.
 *
 * This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
 * that a value of around 650ms seems appropriate.
 */

const TOUCH_BUFFER_MS = 650;
/**
 * Event listener options that enable capturing and also mark the listener as passive if the browser
 * supports it.
 */

const modalityEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/**
 * Service that detects the user's input modality.
 *
 * This service does not update the input modality when a user navigates with a screen reader
 * (e.g. linear navigation with VoiceOver, object navigation / browse mode with NVDA, virtual PC
 * cursor mode with JAWS). This is in part due to technical limitations (i.e. keyboard events do not
 * fire as expected in these modes) but is also arguably the correct behavior. Navigating with a
 * screen reader is akin to visually scanning a page, and should not be interpreted as actual user
 * input interaction.
 *
 * When a user is not navigating but *interacting* with a screen reader, this service attempts to
 * update the input modality to keyboard, but in general this service's behavior is largely
 * undefined.
 */

class InputModalityDetector {
  constructor(_platform, ngZone, document, options) {
    this._platform = _platform;
    /**
     * The most recently detected input modality event target. Is null if no input modality has been
     * detected or if the associated event target is null for some unknown reason.
     */

    this._mostRecentTarget = null;
    /** The underlying BehaviorSubject that emits whenever an input modality is detected. */

    this._modality = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(null);
    /**
     * The timestamp of the last touch input modality. Used to determine whether mousedown events
     * should be attributed to mouse or touch.
     */

    this._lastTouchMs = 0;
    /**
     * Handles keydown events. Must be an arrow function in order to preserve the context when it gets
     * bound.
     */

    this._onKeydown = event => {
      var _a, _b; // If this is one of the keys we should ignore, then ignore it and don't update the input
      // modality to keyboard.


      if ((_b = (_a = this._options) === null || _a === void 0 ? void 0 : _a.ignoreKeys) === null || _b === void 0 ? void 0 : _b.some(keyCode => keyCode === event.keyCode)) {
        return;
      }

      this._modality.next('keyboard');

      this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
    };
    /**
     * Handles mousedown events. Must be an arrow function in order to preserve the context when it
     * gets bound.
     */


    this._onMousedown = event => {
      // Touches trigger both touch and mouse events, so we need to distinguish between mouse events
      // that were triggered via mouse vs touch. To do so, check if the mouse event occurs closely
      // after the previous touch event.
      if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
        return;
      } // Fake mousedown events are fired by some screen readers when controls are activated by the
      // screen reader. Attribute them to keyboard input modality.


      this._modality.next(isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse');

      this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
    };
    /**
     * Handles touchstart events. Must be an arrow function in order to preserve the context when it
     * gets bound.
     */


    this._onTouchstart = event => {
      // Same scenario as mentioned in _onMousedown, but on touch screen devices, fake touchstart
      // events are fired. Again, attribute to keyboard input modality.
      if (isFakeTouchstartFromScreenReader(event)) {
        this._modality.next('keyboard');

        return;
      } // Store the timestamp of this touch event, as it's used to distinguish between mouse events
      // triggered via mouse vs touch.


      this._lastTouchMs = Date.now();

      this._modality.next('touch');

      this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
    };

    this._options = Object.assign(Object.assign({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options); // Skip the first emission as it's null.

    this.modalityDetected = this._modality.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.skip)(1));
    this.modalityChanged = this.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)()); // If we're not in a browser, this service should do nothing, as there's no relevant input
    // modality to detect.

    if (_platform.isBrowser) {
      ngZone.runOutsideAngular(() => {
        document.addEventListener('keydown', this._onKeydown, modalityEventListenerOptions);
        document.addEventListener('mousedown', this._onMousedown, modalityEventListenerOptions);
        document.addEventListener('touchstart', this._onTouchstart, modalityEventListenerOptions);
      });
    }
  }
  /** The most recently detected input modality. */


  get mostRecentModality() {
    return this._modality.value;
  }

  ngOnDestroy() {
    this._modality.complete();

    if (this._platform.isBrowser) {
      document.removeEventListener('keydown', this._onKeydown, modalityEventListenerOptions);
      document.removeEventListener('mousedown', this._onMousedown, modalityEventListenerOptions);
      document.removeEventListener('touchstart', this._onTouchstart, modalityEventListenerOptions);
    }
  }

}

InputModalityDetector.ɵfac = function InputModalityDetector_Factory(t) {
  return new (t || InputModalityDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](INPUT_MODALITY_DETECTOR_OPTIONS, 8));
};

InputModalityDetector.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: InputModalityDetector,
  factory: InputModalityDetector.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputModalityDetector, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [INPUT_MODALITY_DETECTOR_OPTIONS]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('liveAnnouncerElement', {
  providedIn: 'root',
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
/** @docs-private */

function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
/** Injection token that can be used to configure the default options for the LiveAnnouncer. */


const LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('LIVE_ANNOUNCER_DEFAULT_OPTIONS');

class LiveAnnouncer {
  constructor(elementToken, _ngZone, _document, _defaultOptions) {
    this._ngZone = _ngZone;
    this._defaultOptions = _defaultOptions; // We inject the live element and document as `any` because the constructor signature cannot
    // reference browser globals (HTMLElement, Document) on non-browser environments, since having
    // a class decorator causes TypeScript to preserve the constructor signature types.

    this._document = _document;
    this._liveElement = elementToken || this._createLiveElement();
  }

  announce(message, ...args) {
    const defaultOptions = this._defaultOptions;
    let politeness;
    let duration;

    if (args.length === 1 && typeof args[0] === 'number') {
      duration = args[0];
    } else {
      [politeness, duration] = args;
    }

    this.clear();
    clearTimeout(this._previousTimeout);

    if (!politeness) {
      politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
    }

    if (duration == null && defaultOptions) {
      duration = defaultOptions.duration;
    } // TODO: ensure changing the politeness works on all environments we support.


    this._liveElement.setAttribute('aria-live', politeness); // This 100ms timeout is necessary for some browser + screen-reader combinations:
    // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
    // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
    //   second time without clearing and then using a non-zero delay.
    // (using JAWS 17 at time of this writing).


    return this._ngZone.runOutsideAngular(() => {
      if (!this._currentPromise) {
        this._currentPromise = new Promise(resolve => this._currentResolve = resolve);
      }

      clearTimeout(this._previousTimeout);
      this._previousTimeout = setTimeout(() => {
        this._liveElement.textContent = message;

        if (typeof duration === 'number') {
          this._previousTimeout = setTimeout(() => this.clear(), duration);
        }

        this._currentResolve();

        this._currentPromise = this._currentResolve = undefined;
      }, 100);
      return this._currentPromise;
    });
  }
  /**
   * Clears the current text from the announcer element. Can be used to prevent
   * screen readers from reading the text out again while the user is going
   * through the page landmarks.
   */


  clear() {
    if (this._liveElement) {
      this._liveElement.textContent = '';
    }
  }

  ngOnDestroy() {
    var _a, _b;

    clearTimeout(this._previousTimeout);
    (_a = this._liveElement) === null || _a === void 0 ? void 0 : _a.remove();
    this._liveElement = null;
    (_b = this._currentResolve) === null || _b === void 0 ? void 0 : _b.call(this);
    this._currentPromise = this._currentResolve = undefined;
  }

  _createLiveElement() {
    const elementClass = 'cdk-live-announcer-element';

    const previousElements = this._document.getElementsByClassName(elementClass);

    const liveEl = this._document.createElement('div'); // Remove any old containers. This can happen when coming in from a server-side-rendered page.


    for (let i = 0; i < previousElements.length; i++) {
      previousElements[i].remove();
    }

    liveEl.classList.add(elementClass);
    liveEl.classList.add('cdk-visually-hidden');
    liveEl.setAttribute('aria-atomic', 'true');
    liveEl.setAttribute('aria-live', 'polite');

    this._document.body.appendChild(liveEl);

    return liveEl;
  }

}

LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
  return new (t || LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
};

LiveAnnouncer.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: LiveAnnouncer,
  factory: LiveAnnouncer.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveAnnouncer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */


class CdkAriaLive {
  constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
    this._elementRef = _elementRef;
    this._liveAnnouncer = _liveAnnouncer;
    this._contentObserver = _contentObserver;
    this._ngZone = _ngZone;
    this._politeness = 'polite';
  }
  /** The aria-live politeness level to use when announcing messages. */


  get politeness() {
    return this._politeness;
  }

  set politeness(value) {
    this._politeness = value === 'off' || value === 'assertive' ? value : 'polite';

    if (this._politeness === 'off') {
      if (this._subscription) {
        this._subscription.unsubscribe();

        this._subscription = null;
      }
    } else if (!this._subscription) {
      this._subscription = this._ngZone.runOutsideAngular(() => {
        return this._contentObserver.observe(this._elementRef).subscribe(() => {
          // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
          const elementText = this._elementRef.nativeElement.textContent; // The `MutationObserver` fires also for attribute
          // changes which we don't want to announce.

          if (elementText !== this._previousAnnouncedText) {
            this._liveAnnouncer.announce(elementText, this._politeness);

            this._previousAnnouncedText = elementText;
          }
        });
      });
    }
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}

CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
  return new (t || CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

CdkAriaLive.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkAriaLive,
  selectors: [["", "cdkAriaLive", ""]],
  inputs: {
    politeness: ["cdkAriaLive", "politeness"]
  },
  exportAs: ["cdkAriaLive"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAriaLive, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkAriaLive]',
      exportAs: 'cdkAriaLive'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: LiveAnnouncer
    }, {
      type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ContentObserver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    politeness: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkAriaLive']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** InjectionToken for FocusMonitorOptions. */


const FOCUS_MONITOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-focus-monitor-default-options');
/**
 * Event listener options that enable capturing and also
 * mark the listener as passive if the browser supports it.
 */

const captureEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/** Monitors mouse and keyboard events to determine the cause of focus events. */

class FocusMonitor {
  constructor(_ngZone, _platform, _inputModalityDetector,
  /** @breaking-change 11.0.0 make document required */
  document, options) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._inputModalityDetector = _inputModalityDetector;
    /** The focus origin that the next focus event is a result of. */

    this._origin = null;
    /** Whether the window has just been focused. */

    this._windowFocused = false;
    /**
     * Whether the origin was determined via a touch interaction. Necessary as properly attributing
     * focus events to touch interactions requires special logic.
     */

    this._originFromTouchInteraction = false;
    /** Map of elements being monitored to their info. */

    this._elementInfo = new Map();
    /** The number of elements currently being monitored. */

    this._monitoredElementCount = 0;
    /**
     * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
     * as well as the number of monitored elements that they contain. We have to treat focus/blur
     * handlers differently from the rest of the events, because the browser won't emit events
     * to the document when focus moves inside of a shadow root.
     */

    this._rootNodeFocusListenerCount = new Map();
    /**
     * Event listener for `focus` events on the window.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */

    this._windowFocusListener = () => {
      // Make a note of when the window regains focus, so we can
      // restore the origin info for the focused element.
      this._windowFocused = true;
      this._windowFocusTimeoutId = window.setTimeout(() => this._windowFocused = false);
    };
    /** Subject for stopping our InputModalityDetector subscription. */


    this._stopInputModalityDetector = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /**
     * Event listener for `focus` and 'blur' events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */

    this._rootNodeFocusAndBlurListener = event => {
      const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);

      const handler = event.type === 'focus' ? this._onFocus : this._onBlur; // We need to walk up the ancestor chain in order to support `checkChildren`.

      for (let element = target; element; element = element.parentElement) {
        handler.call(this, event, element);
      }
    };

    this._document = document;
    this._detectionMode = (options === null || options === void 0 ? void 0 : options.detectionMode) || 0
    /* IMMEDIATE */
    ;
  }

  monitor(element, checkChildren = false) {
    const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element); // Do nothing if we're not on the browser platform or the passed in node isn't an element.

    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(null);
    } // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
    // the shadow root, rather than the `document`, because the browser won't emit focus events
    // to the `document`, if focus is moving within the same shadow root.


    const rootNode = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getShadowRoot)(nativeElement) || this._getDocument();

    const cachedInfo = this._elementInfo.get(nativeElement); // Check if we're already monitoring this element.


    if (cachedInfo) {
      if (checkChildren) {
        // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
        // observers into ones that behave as if `checkChildren` was turned on. We need a more
        // robust solution.
        cachedInfo.checkChildren = true;
      }

      return cachedInfo.subject;
    } // Create monitored element info.


    const info = {
      checkChildren: checkChildren,
      subject: new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject(),
      rootNode
    };

    this._elementInfo.set(nativeElement, info);

    this._registerGlobalListeners(info);

    return info.subject;
  }

  stopMonitoring(element) {
    const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element);

    const elementInfo = this._elementInfo.get(nativeElement);

    if (elementInfo) {
      elementInfo.subject.complete();

      this._setClasses(nativeElement);

      this._elementInfo.delete(nativeElement);

      this._removeGlobalListeners(elementInfo);
    }
  }

  focusVia(element, origin, options) {
    const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element);

    const focusedElement = this._getDocument().activeElement; // If the element is focused already, calling `focus` again won't trigger the event listener
    // which means that the focus classes won't be updated. If that's the case, update the classes
    // directly without waiting for an event.


    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin); // `focus` isn't available on the server


      if (typeof nativeElement.focus === 'function') {
        nativeElement.focus(options);
      }
    }
  }

  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  /** Access injected document if available or fallback to global document reference */


  _getDocument() {
    return this._document || document;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */


  _getWindow() {
    const doc = this._getDocument();

    return doc.defaultView || window;
  }

  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      // If the origin was realized via a touch interaction, we need to perform additional checks
      // to determine whether the focus origin should be attributed to touch or program.
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? 'touch' : 'program';
      } else {
        return this._origin;
      }
    } // If the window has just regained focus, we can restore the most recent origin from before the
    // window blurred. Otherwise, we've reached the point where we can't identify the source of the
    // focus. This typically means one of two things happened:
    //
    // 1) The element was programmatically focused, or
    // 2) The element was focused via screen reader navigation (which generally doesn't fire
    //    events).
    //
    // Because we can't distinguish between these two cases, we default to setting `program`.


    return this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : 'program';
  }
  /**
   * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
   * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
   * handle a focus event following a touch interaction, we need to determine whether (1) the focus
   * event was directly caused by the touch interaction or (2) the focus event was caused by a
   * subsequent programmatic focus call triggered by the touch interaction.
   * @param focusEventTarget The target of the focus event under examination.
   */


  _shouldBeAttributedToTouch(focusEventTarget) {
    // Please note that this check is not perfect. Consider the following edge case:
    //
    // <div #parent tabindex="0">
    //   <div #child tabindex="0" (click)="#parent.focus()"></div>
    // </div>
    //
    // Suppose there is a FocusMonitor in IMMEDIATE mode attached to #parent. When the user touches
    // #child, #parent is programmatically focused. This code will attribute the focus to touch
    // instead of program. This is a relatively minor edge-case that can be worked around by using
    // focusVia(parent, 'program') to focus #parent.
    return this._detectionMode === 1
    /* EVENTUAL */
    || !!(focusEventTarget === null || focusEventTarget === void 0 ? void 0 : focusEventTarget.contains(this._inputModalityDetector._mostRecentTarget));
  }
  /**
   * Sets the focus classes on the element based on the given focus origin.
   * @param element The element to update the classes on.
   * @param origin The focus origin.
   */


  _setClasses(element, origin) {
    element.classList.toggle('cdk-focused', !!origin);
    element.classList.toggle('cdk-touch-focused', origin === 'touch');
    element.classList.toggle('cdk-keyboard-focused', origin === 'keyboard');
    element.classList.toggle('cdk-mouse-focused', origin === 'mouse');
    element.classList.toggle('cdk-program-focused', origin === 'program');
  }
  /**
   * Updates the focus origin. If we're using immediate detection mode, we schedule an async
   * function to clear the origin at the end of a timeout. The duration of the timeout depends on
   * the origin being set.
   * @param origin The origin to set.
   * @param isFromInteraction Whether we are setting the origin from an interaction event.
   */


  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === 'touch' && isFromInteraction; // If we're in IMMEDIATE mode, reset the origin at the next tick (or in `TOUCH_BUFFER_MS` ms
      // for a touch event). We reset the origin at the next tick because Firefox focuses one tick
      // after the interaction event. We wait `TOUCH_BUFFER_MS` ms before resetting the origin for
      // a touch event because when a touch event is fired, the associated focus event isn't yet in
      // the event queue. Before doing so, clear any pending timeouts.

      if (this._detectionMode === 0
      /* IMMEDIATE */
      ) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  /**
   * Handles focus events on a registered element.
   * @param event The focus event.
   * @param element The monitored element.
   */


  _onFocus(event, element) {
    // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
    // focus event affecting the monitored element. If we want to use the origin of the first event
    // instead we should check for the cdk-focused class here and return if the element already has
    // it. (This only matters for elements that have includesChildren = true).
    // If we are not counting child-element-focus as focused, make sure that the event target is the
    // monitored element itself.
    const elementInfo = this._elementInfo.get(element);

    const focusEventTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);

    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }

    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  /**
   * Handles blur events on a registered element.
   * @param event The blur event.
   * @param element The monitored element.
   */


  _onBlur(event, element) {
    // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
    // order to focus another child of the monitored element.
    const elementInfo = this._elementInfo.get(element);

    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }

    this._setClasses(element);

    this._emitOrigin(elementInfo.subject, null);
  }

  _emitOrigin(subject, origin) {
    this._ngZone.run(() => subject.next(origin));
  }

  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }

    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;

    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }

    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1); // Register global listeners when first element is monitored.


    if (++this._monitoredElementCount === 1) {
      // Note: we listen to events in the capture phase so we
      // can detect them even if the user stops propagation.
      this._ngZone.runOutsideAngular(() => {
        const window = this._getWindow();

        window.addEventListener('focus', this._windowFocusListener);
      }); // The InputModalityDetector is also just a collection of global listeners.


      this._inputModalityDetector.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._stopInputModalityDetector)).subscribe(modality => {
        this._setOrigin(modality, true
        /* isFromInteraction */
        );
      });
    }
  }

  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;

    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);

      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);

        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    } // Unregister global listeners when last element is unmonitored.


    if (! --this._monitoredElementCount) {
      const window = this._getWindow();

      window.removeEventListener('focus', this._windowFocusListener); // Equivalently, stop our InputModalityDetector subscription.

      this._stopInputModalityDetector.next(); // Clear timeouts for all potentially pending timeouts to prevent the leaks.


      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  /** Updates all the state on an element once its focus origin has changed. */


  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);

    this._emitOrigin(elementInfo.subject, origin);

    this._lastFocusOrigin = origin;
  }
  /**
   * Collects the `MonitoredElementInfo` of a particular element and
   * all of its ancestors that have enabled `checkChildren`.
   * @param element Element from which to start the search.
   */


  _getClosestElementsInfo(element) {
    const results = [];

    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });

    return results;
  }

}

FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
  return new (t || FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InputModalityDetector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
};

FocusMonitor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FocusMonitor,
  factory: FocusMonitor.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusMonitor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }, {
      type: InputModalityDetector
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */


class CdkMonitorFocus {
  constructor(_elementRef, _focusMonitor) {
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(origin => this.cdkFocusChange.emit(origin));
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);

    if (this._monitorSubscription) {
      this._monitorSubscription.unsubscribe();
    }
  }

}

CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
  return new (t || CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FocusMonitor));
};

CdkMonitorFocus.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkMonitorFocus,
  selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
  outputs: {
    cdkFocusChange: "cdkFocusChange"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkMonitorFocus, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: FocusMonitor
    }];
  }, {
    cdkFocusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/** CSS class applied to the document body when in black-on-white high-contrast mode. */


const BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
/** CSS class applied to the document body when in white-on-black high-contrast mode. */

const WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
/** CSS class applied to the document body when in high-contrast mode. */

const HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
/**
 * Service to determine whether the browser is currently in a high-contrast-mode environment.
 *
 * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
 * changes the appearance of all applications, including web applications, to dramatically increase
 * contrast.
 *
 * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
 * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
 * browser extension.
 */

class HighContrastModeDetector {
  constructor(_platform, document) {
    this._platform = _platform;
    this._document = document;
  }
  /** Gets the current high-contrast-mode for the page. */


  getHighContrastMode() {
    if (!this._platform.isBrowser) {
      return 0
      /* NONE */
      ;
    } // Create a test element with an arbitrary background-color that is neither black nor
    // white; high-contrast mode will coerce the color to either black or white. Also ensure that
    // appending the test element to the DOM does not affect layout by absolutely positioning it


    const testElement = this._document.createElement('div');

    testElement.style.backgroundColor = 'rgb(1,2,3)';
    testElement.style.position = 'absolute';

    this._document.body.appendChild(testElement); // Get the computed style for the background color, collapsing spaces to normalize between
    // browsers. Once we get this color, we no longer need the test element. Access the `window`
    // via the document so we can fake it in tests. Note that we have extra null checks, because
    // this logic will likely run during app bootstrap and throwing can break the entire app.


    const documentWindow = this._document.defaultView || window;
    const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
    const computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');
    testElement.remove();

    switch (computedColor) {
      case 'rgb(0,0,0)':
        return 2
        /* WHITE_ON_BLACK */
        ;

      case 'rgb(255,255,255)':
        return 1
        /* BLACK_ON_WHITE */
        ;
    }

    return 0
    /* NONE */
    ;
  }
  /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */


  _applyBodyHighContrastModeCssClasses() {
    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
      const bodyClasses = this._document.body.classList; // IE11 doesn't support `classList` operations with multiple arguments

      bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
      bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
      bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
      this._hasCheckedHighContrastMode = true;
      const mode = this.getHighContrastMode();

      if (mode === 1
      /* BLACK_ON_WHITE */
      ) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
        bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
      } else if (mode === 2
      /* WHITE_ON_BLACK */
      ) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
        bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
      }
    }
  }

}

HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) {
  return new (t || HighContrastModeDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};

HighContrastModeDetector.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: HighContrastModeDetector,
  factory: HighContrastModeDetector.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighContrastModeDetector, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class A11yModule {
  constructor(highContrastModeDetector) {
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
  }

}

A11yModule.ɵfac = function A11yModule_Factory(t) {
  return new (t || A11yModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HighContrastModeDetector));
};

A11yModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: A11yModule
});
A11yModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ObserversModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](A11yModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ObserversModule],
      declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }], function () {
    return [{
      type: HighContrastModeDetector
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 54941:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/drag-drop.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CDK_DRAG_CONFIG": () => (/* binding */ CDK_DRAG_CONFIG),
/* harmony export */   "CDK_DRAG_HANDLE": () => (/* binding */ CDK_DRAG_HANDLE),
/* harmony export */   "CDK_DRAG_PARENT": () => (/* binding */ CDK_DRAG_PARENT),
/* harmony export */   "CDK_DRAG_PLACEHOLDER": () => (/* binding */ CDK_DRAG_PLACEHOLDER),
/* harmony export */   "CDK_DRAG_PREVIEW": () => (/* binding */ CDK_DRAG_PREVIEW),
/* harmony export */   "CDK_DROP_LIST": () => (/* binding */ CDK_DROP_LIST),
/* harmony export */   "CDK_DROP_LIST_GROUP": () => (/* binding */ CDK_DROP_LIST_GROUP),
/* harmony export */   "CdkDrag": () => (/* binding */ CdkDrag),
/* harmony export */   "CdkDragHandle": () => (/* binding */ CdkDragHandle),
/* harmony export */   "CdkDragPlaceholder": () => (/* binding */ CdkDragPlaceholder),
/* harmony export */   "CdkDragPreview": () => (/* binding */ CdkDragPreview),
/* harmony export */   "CdkDropList": () => (/* binding */ CdkDropList),
/* harmony export */   "CdkDropListGroup": () => (/* binding */ CdkDropListGroup),
/* harmony export */   "DragDrop": () => (/* binding */ DragDrop),
/* harmony export */   "DragDropModule": () => (/* binding */ DragDropModule),
/* harmony export */   "DragDropRegistry": () => (/* binding */ DragDropRegistry),
/* harmony export */   "DragRef": () => (/* binding */ DragRef),
/* harmony export */   "DropListRef": () => (/* binding */ DropListRef),
/* harmony export */   "copyArrayItem": () => (/* binding */ copyArrayItem),
/* harmony export */   "moveItemInArray": () => (/* binding */ moveItemInArray),
/* harmony export */   "transferArrayItem": () => (/* binding */ transferArrayItem)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ 14390);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 76484);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 84128);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 13491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 73911);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ 95752);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Shallow-extends a stylesheet object with another stylesheet-like object.
 * Note that the keys in `source` have to be dash-cased.
 * @docs-private
 */

function extendStyles(dest, source, importantProperties) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];

      if (value) {
        dest.setProperty(key, value, (importantProperties === null || importantProperties === void 0 ? void 0 : importantProperties.has(key)) ? 'important' : '');
      } else {
        dest.removeProperty(key);
      }
    }
  }

  return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * @param element Element on which to toggle the drag interactions.
 * @param enable Whether the drag interactions should be enabled.
 * @docs-private
 */


function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? '' : 'none';
  extendStyles(element.style, {
    'touch-action': enable ? '' : 'none',
    '-webkit-user-drag': enable ? '' : 'none',
    '-webkit-tap-highlight-color': enable ? '' : 'transparent',
    'user-select': userSelect,
    '-ms-user-select': userSelect,
    '-webkit-user-select': userSelect,
    '-moz-user-select': userSelect
  });
}
/**
 * Toggles whether an element is visible while preserving its dimensions.
 * @param element Element whose visibility to toggle
 * @param enable Whether the element should be visible.
 * @param importantProperties Properties to be set as `!important`.
 * @docs-private
 */


function toggleVisibility(element, enable, importantProperties) {
  extendStyles(element.style, {
    position: enable ? '' : 'fixed',
    top: enable ? '' : '0',
    opacity: enable ? '' : '0',
    left: enable ? '' : '-999em'
  }, importantProperties);
}
/**
 * Combines a transform string with an optional other transform
 * that exited before the base transform was applied.
 */


function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != 'none' ? transform + ' ' + initialTransform : transform;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Parses a CSS time value to milliseconds. */


function parseCssTimeUnitsToMs(value) {
  // Some browsers will return it in seconds, whereas others will return milliseconds.
  const multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
  return parseFloat(value) * multiplier;
}
/** Gets the transform transition duration, including the delay, of an element in milliseconds. */


function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
  const property = transitionedProperties.find(prop => prop === 'transform' || prop === 'all'); // If there's no transition for `all` or `transform`, we shouldn't do anything.

  if (!property) {
    return 0;
  } // Get the index of the property that we're interested in and match
  // it up to the same index in `transition-delay` and `transition-duration`.


  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
  const rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/** Parses out multiple values from a computed style into an array. */


function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(',').map(part => part.trim());
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Gets a mutable version of an element's bounding `ClientRect`. */


function getMutableClientRect(element) {
  const clientRect = element.getBoundingClientRect(); // We need to clone the `clientRect` here, because all the values on it are readonly
  // and we need to be able to update them. Also we can't use a spread here, because
  // the values on a `ClientRect` aren't own properties. See:
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes

  return {
    top: clientRect.top,
    right: clientRect.right,
    bottom: clientRect.bottom,
    left: clientRect.left,
    width: clientRect.width,
    height: clientRect.height,
    x: clientRect.x,
    y: clientRect.y
  };
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param clientRect ClientRect that is being checked.
 * @param x Coordinates along the X axis.
 * @param y Coordinates along the Y axis.
 */


function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param clientRect `ClientRect` that should be updated.
 * @param top Amount to add to the `top` position.
 * @param left Amount to add to the `left` position.
 */


function adjustClientRect(clientRect, top, left) {
  clientRect.top += top;
  clientRect.bottom = clientRect.top + clientRect.height;
  clientRect.left += left;
  clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Checks whether the pointer coordinates are close to a ClientRect.
 * @param rect ClientRect to check against.
 * @param threshold Threshold around the ClientRect.
 * @param pointerX Coordinates along the X axis.
 * @param pointerY Coordinates along the Y axis.
 */


function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Keeps track of the scroll position and dimensions of the parents of an element. */


class ParentPositionTracker {
  constructor(_document) {
    this._document = _document;
    /** Cached positions of the scrollable parent elements. */

    this.positions = new Map();
  }
  /** Clears the cached positions. */


  clear() {
    this.positions.clear();
  }
  /** Caches the positions. Should be called at the beginning of a drag sequence. */


  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this.getViewportScrollPosition()
    });
    elements.forEach(element => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  /** Handles scrolling while a drag is taking place. */


  handleScroll(event) {
    const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);

    const cachedPosition = this.positions.get(target);

    if (!cachedPosition) {
      return null;
    }

    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;

    if (target === this._document) {
      const viewportScrollPosition = this.getViewportScrollPosition();
      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }

    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft; // Go through and update the cached positions of the scroll
    // parents that are inside the element that was scrolled.

    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && target.contains(node)) {
        adjustClientRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }
  /**
   * Gets the scroll position of the viewport. Note that we use the scrollX and scrollY directly,
   * instead of going through the `ViewportRuler`, because the first value the ruler looks at is
   * the top/left offset of the `document.documentElement` which works for most cases, but breaks
   * if the element is offset by something like the `BlockScrollStrategy`.
   */


  getViewportScrollPosition() {
    return {
      top: window.scrollY,
      left: window.scrollX
    };
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Creates a deep clone of an element. */


function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll('[id]');
  const nodeName = node.nodeName.toLowerCase(); // Remove the `id` to avoid having multiple elements with the same id on the page.

  clone.removeAttribute('id');

  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute('id');
  }

  if (nodeName === 'canvas') {
    transferCanvasData(node, clone);
  } else if (nodeName === 'input' || nodeName === 'select' || nodeName === 'textarea') {
    transferInputData(node, clone);
  }

  transferData('canvas', node, clone, transferCanvasData);
  transferData('input, textarea, select', node, clone, transferInputData);
  return clone;
}
/** Matches elements between an element and its clone and allows for their data to be cloned. */


function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);

  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);

    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
} // Counter for unique cloned radio button names.


let cloneUniqueId = 0;
/** Transfers the data of one input element to another. */

function transferInputData(source, clone) {
  // Browsers throw an error when assigning the value of a file input programmatically.
  if (clone.type !== 'file') {
    clone.value = source.value;
  } // Radio button `name` attributes must be unique for radio button groups
  // otherwise original radio buttons can lose their checked state
  // once the clone is inserted in the DOM.


  if (clone.type === 'radio' && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
/** Transfers the data of one canvas element to another. */


function transferCanvasData(source, clone) {
  const context = clone.getContext('2d');

  if (context) {
    // In some cases `drawImage` can throw (e.g. if the canvas size is 0x0).
    // We can't do much about it so just ignore the error.
    try {
      context.drawImage(source, 0, 0);
    } catch (_a) {}
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Options that can be used to bind a passive event listener. */


const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: true
});
/** Options that can be used to bind an active event listener. */

const activeEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: false
});
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 */

const MOUSE_EVENT_IGNORE_TIME = 800;
/** Inline styles to be set as `!important` while dragging. */

const dragImportantProperties = new Set([// Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
'position']);
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 */

class DragRef {
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    /**
     * CSS `transform` applied to the element when it isn't being dragged. We need a
     * passive transform in order for the dragged element to retain its new position
     * after the user has stopped dragging and because we need to know the relative
     * position in case they start dragging again. This corresponds to `element.style.transform`.
     */

    this._passiveTransform = {
      x: 0,
      y: 0
    };
    /** CSS `transform` that is applied to the element while it's being dragged. */

    this._activeTransform = {
      x: 0,
      y: 0
    };
    /**
     * Whether the dragging sequence has been started. Doesn't
     * necessarily mean that the element has been moved.
     */

    this._hasStartedDragging = false;
    /** Emits when the item is being moved. */

    this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subscription to pointer movement events. */

    this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /** Subscription to the event that is dispatched when the user lifts their pointer. */

    this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /** Subscription to the viewport being scrolled. */

    this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /** Subscription to the viewport being resized. */

    this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /** Cached reference to the boundary element. */

    this._boundaryElement = null;
    /** Whether the native dragging interactions have been enabled on the root element. */

    this._nativeInteractionsEnabled = true;
    /** Elements that can be used to drag the draggable item. */

    this._handles = [];
    /** Registered handles that are currently disabled. */

    this._disabledHandles = new Set();
    /** Layout direction of the item. */

    this._direction = 'ltr';
    /**
     * Amount of milliseconds to wait after the user has put their
     * pointer down before starting to drag the element.
     */

    this.dragStartDelay = 0;
    this._disabled = false;
    /** Emits as the drag sequence is being prepared. */

    this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the user starts dragging the item. */

    this.started = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the user has released a drag item, before any animations have started. */

    this.released = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the user stops dragging an item in the container. */

    this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the user has moved the item into a new container. */

    this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the user removes the item its container by dragging it into another container. */

    this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the user drops the item inside a container. */

    this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits as the user is dragging the item. Use with caution,
     * because this event will fire for every pixel that the user has dragged.
     */

    this.moved = this._moveEvents;
    /** Handler for the `mousedown`/`touchstart` events. */

    this._pointerDown = event => {
      this.beforeStarted.next(); // Delegate the event based on whether it started from a handle or the element itself.

      if (this._handles.length) {
        const targetHandle = this._getTargetHandle(event);

        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          this._initializeDragSequence(targetHandle, event);
        }
      } else if (!this.disabled) {
        this._initializeDragSequence(this._rootElement, event);
      }
    };
    /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */


    this._pointerMove = event => {
      const pointerPosition = this._getPointerPositionOnPage(event);

      if (!this._hasStartedDragging) {
        const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
        const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
        const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold; // Only start dragging after the user has moved more than the minimum distance in either
        // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
        // in the `pointerMove` subscription, because we're not guaranteed to have one move event
        // per pixel of movement (e.g. if the user moves their pointer quickly).

        if (isOverThreshold) {
          const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);

          const container = this._dropContainer;

          if (!isDelayElapsed) {
            this._endDragSequence(event);

            return;
          } // Prevent other drag sequences from starting while something in the container is still
          // being dragged. This can happen while we're waiting for the drop animation to finish
          // and can cause errors, because some elements might still be moving around.


          if (!container || !container.isDragging() && !container.isReceiving()) {
            // Prevent the default action as soon as the dragging sequence is considered as
            // "started" since waiting for the next event can allow the device to begin scrolling.
            event.preventDefault();
            this._hasStartedDragging = true;

            this._ngZone.run(() => this._startDragSequence(event));
          }
        }

        return;
      } // We prevent the default action down here so that we know that dragging has started. This is
      // important for touch devices where doing this too early can unnecessarily block scrolling,
      // if there's a dragging delay.


      event.preventDefault();

      const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);

      this._hasMoved = true;
      this._lastKnownPointerPosition = pointerPosition;

      this._updatePointerDirectionDelta(constrainedPointerPosition);

      if (this._dropContainer) {
        this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
      } else {
        const activeTransform = this._activeTransform;
        activeTransform.x = constrainedPointerPosition.x - this._pickupPositionOnPage.x + this._passiveTransform.x;
        activeTransform.y = constrainedPointerPosition.y - this._pickupPositionOnPage.y + this._passiveTransform.y;

        this._applyRootElementTransform(activeTransform.x, activeTransform.y);
      } // Since this event gets fired for every pixel while dragging, we only
      // want to fire it if the consumer opted into it. Also we have to
      // re-enter the zone because we run all of the events on the outside.


      if (this._moveEvents.observers.length) {
        this._ngZone.run(() => {
          this._moveEvents.next({
            source: this,
            pointerPosition: constrainedPointerPosition,
            event,
            distance: this._getDragDistance(constrainedPointerPosition),
            delta: this._pointerDirectionDelta
          });
        });
      }
    };
    /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */


    this._pointerUp = event => {
      this._endDragSequence(event);
    };
    /** Handles a native `dragstart` event. */


    this._nativeDragStart = event => {
      if (this._handles.length) {
        const targetHandle = this._getTargetHandle(event);

        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          event.preventDefault();
        }
      } else if (!this.disabled) {
        // Usually this isn't necessary since the we prevent the default action in `pointerDown`,
        // but some cases like dragging of links can slip through (see #24403).
        event.preventDefault();
      }
    };

    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document);

    _dragDropRegistry.registerDragItem(this);
  }
  /** Whether starting to drag this element is disabled. */


  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }

  set disabled(value) {
    const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);

    if (newValue !== this._disabled) {
      this._disabled = newValue;

      this._toggleNativeDragInteractions();

      this._handles.forEach(handle => toggleNativeDragInteractions(handle, newValue));
    }
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */


  getPlaceholderElement() {
    return this._placeholder;
  }
  /** Returns the root draggable element. */


  getRootElement() {
    return this._rootElement;
  }
  /**
   * Gets the currently-visible element that represents the drag item.
   * While dragging this is the placeholder, otherwise it's the root element.
   */


  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  /** Registers the handles that can be used to drag the element. */


  withHandles(handles) {
    this._handles = handles.map(handle => (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(handle));

    this._handles.forEach(handle => toggleNativeDragInteractions(handle, this.disabled));

    this._toggleNativeDragInteractions(); // Delete any lingering disabled handles that may have been destroyed. Note that we re-create
    // the set, rather than iterate over it and filter out the destroyed handles, because while
    // the ES spec allows for sets to be modified while they're being iterated over, some polyfills
    // use an array internally which may throw an error.


    const disabledHandles = new Set();

    this._disabledHandles.forEach(handle => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });

    this._disabledHandles = disabledHandles;
    return this;
  }
  /**
   * Registers the template that should be used for the drag preview.
   * @param template Template that from which to stamp out the preview.
   */


  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  /**
   * Registers the template that should be used for the drag placeholder.
   * @param template Template that from which to stamp out the placeholder.
   */


  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  /**
   * Sets an alternate drag root element. The root element is the element that will be moved as
   * the user is dragging. Passing an alternate root element is useful when trying to enable
   * dragging on an element that you might not have access to.
   */


  withRootElement(rootElement) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(rootElement);

    if (element !== this._rootElement) {
      if (this._rootElement) {
        this._removeRootElementListeners(this._rootElement);
      }

      this._ngZone.runOutsideAngular(() => {
        element.addEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.addEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
        element.addEventListener('dragstart', this._nativeDragStart, activeEventListenerOptions);
      });

      this._initialTransform = undefined;
      this._rootElement = element;
    }

    if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }

    return this;
  }
  /**
   * Element to which the draggable's position will be constrained.
   */


  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(boundaryElement) : null;

    this._resizeSubscription.unsubscribe();

    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }

    return this;
  }
  /** Sets the parent ref that the ref is nested in.  */


  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  /** Removes the dragging functionality from the DOM element. */


  dispose() {
    var _a, _b;

    this._removeRootElementListeners(this._rootElement); // Do this check before removing from the registry since it'll
    // stop being considered as dragged once it is removed.


    if (this.isDragging()) {
      // Since we move out the element to the end of the body while it's being
      // dragged, we have to make sure that it's removed if it gets destroyed.
      (_a = this._rootElement) === null || _a === void 0 ? void 0 : _a.remove();
    }

    (_b = this._anchor) === null || _b === void 0 ? void 0 : _b.remove();

    this._destroyPreview();

    this._destroyPlaceholder();

    this._dragDropRegistry.removeDragItem(this);

    this._removeSubscriptions();

    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();

    this._moveEvents.complete();

    this._handles = [];

    this._disabledHandles.clear();

    this._dropContainer = undefined;

    this._resizeSubscription.unsubscribe();

    this._parentPositions.clear();

    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null;
  }
  /** Checks whether the element is currently being dragged. */


  isDragging() {
    return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
  }
  /** Resets a standalone drag item to its initial position. */


  reset() {
    this._rootElement.style.transform = this._initialTransform || '';
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  /**
   * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
   * @param handle Handle element that should be disabled.
   */


  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);

      toggleNativeDragInteractions(handle, true);
    }
  }
  /**
   * Enables a handle, if it has been disabled.
   * @param handle Handle element to be enabled.
   */


  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);

      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  /** Sets the layout direction of the draggable item. */


  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  /** Sets the container that the item is part of. */


  _withDropContainer(container) {
    this._dropContainer = container;
  }
  /**
   * Gets the current position in pixels the draggable outside of a drop container.
   */


  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */


  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;

    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }

    return this;
  }
  /**
   * Sets the container into which to insert the preview element.
   * @param value Container into which to insert the preview.
   */


  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  /** Updates the item's sort order based on the last-known pointer position. */


  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;

    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  /** Unsubscribes from the global subscriptions. */


  _removeSubscriptions() {
    this._pointerMoveSubscription.unsubscribe();

    this._pointerUpSubscription.unsubscribe();

    this._scrollSubscription.unsubscribe();
  }
  /** Destroys the preview element and its ViewRef. */


  _destroyPreview() {
    var _a, _b;

    (_a = this._preview) === null || _a === void 0 ? void 0 : _a.remove();
    (_b = this._previewRef) === null || _b === void 0 ? void 0 : _b.destroy();
    this._preview = this._previewRef = null;
  }
  /** Destroys the placeholder element and its ViewRef. */


  _destroyPlaceholder() {
    var _a, _b;

    (_a = this._placeholder) === null || _a === void 0 ? void 0 : _a.remove();
    (_b = this._placeholderRef) === null || _b === void 0 ? void 0 : _b.destroy();
    this._placeholder = this._placeholderRef = null;
  }
  /**
   * Clears subscriptions and stops the dragging sequence.
   * @param event Browser event object that ended the sequence.
   */


  _endDragSequence(event) {
    // Note that here we use `isDragging` from the service, rather than from `this`.
    // The difference is that the one from the service reflects whether a dragging sequence
    // has been initiated, whereas the one on `this` includes whether the user has passed
    // the minimum dragging threshold.
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }

    this._removeSubscriptions();

    this._dragDropRegistry.stopDragging(this);

    this._toggleNativeDragInteractions();

    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }

    if (!this._hasStartedDragging) {
      return;
    }

    this.released.next({
      source: this
    });

    if (this._dropContainer) {
      // Stop scrolling immediately, instead of waiting for the animation to finish.
      this._dropContainer._stopScrolling();

      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);

        this._cleanupCachedDimensions();

        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      // Convert the active transform into a passive one. This means that next time
      // the user starts dragging the item, its position will be calculated relatively
      // to the new passive transform.
      this._passiveTransform.x = this._activeTransform.x;

      const pointerPosition = this._getPointerPositionOnPage(event);

      this._passiveTransform.y = this._activeTransform.y;

      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition
        });
      });

      this._cleanupCachedDimensions();

      this._dragDropRegistry.stopDragging(this);
    }
  }
  /** Starts the dragging sequence. */


  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }

    this._toggleNativeDragInteractions();

    const dropContainer = this._dropContainer;

    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;

      const placeholder = this._placeholder = this._createPlaceholderElement();

      const anchor = this._anchor = this._anchor || this._document.createComment(''); // Needs to happen before the root element is moved.


      const shadowRoot = this._getShadowRoot(); // Insert an anchor node so that we can restore the element's position in the DOM.


      parent.insertBefore(anchor, element); // There's no risk of transforms stacking when inside a drop container so
      // we can keep the initial transform up to date any time dragging starts.

      this._initialTransform = element.style.transform || ''; // Create the preview after the initial transform has
      // been cached, because it can be affected by the transform.

      this._preview = this._createPreviewElement(); // We move the element out at the end of the body and we make it hidden, because keeping it in
      // place will throw off the consumer's `:last-child` selectors. We can't remove the element
      // from the DOM completely, because iOS will stop firing all subsequent events in the chain.

      toggleVisibility(element, false, dragImportantProperties);

      this._document.body.appendChild(parent.replaceChild(placeholder, element));

      this._getPreviewInsertionPoint(parent, shadowRoot).appendChild(this._preview);

      this.started.next({
        source: this
      }); // Emit before notifying the container.

      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this
      });
      this._initialContainer = this._initialIndex = undefined;
    } // Important to run after we've called `start` on the parent container
    // so that it has had time to resolve its scrollable parents.


    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  /**
   * Sets up the different variables and subscriptions
   * that will be necessary for the dragging sequence.
   * @param referenceElement Element that started the drag sequence.
   * @param event Browser event object that started the sequence.
   */


  _initializeDragSequence(referenceElement, event) {
    // Stop propagation if the item is inside another
    // draggable so we don't start multiple drag sequences.
    if (this._parentDragRef) {
      event.stopPropagation();
    }

    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;

    const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);

    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.isFakeTouchstartFromScreenReader)(event) : (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.isFakeMousedownFromScreenReader)(event); // If the event started from an element with the native HTML drag&drop, it'll interfere
    // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
    // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
    // it's flaky and it fails if the user drags it away quickly. Also note that we only want
    // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
    // events from firing on touch devices.

    if (target && target.draggable && event.type === 'mousedown') {
      event.preventDefault();
    } // Abort if the user is already dragging or is using a mouse button other than the primary one.


    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    } // If we've got handles, we need to disable the tap highlight on the entire root element,
    // otherwise iOS will still add it, even though all the drag interactions on the handle
    // are disabled.


    if (this._handles.length) {
      const rootStyles = rootElement.style;
      this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || '';
      rootStyles.webkitTapHighlightColor = 'transparent';
    }

    this._hasStartedDragging = this._hasMoved = false; // Avoid multiple subscriptions and memory leaks when multi touch
    // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)

    this._removeSubscriptions();

    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(scrollEvent => this._updateOnScroll(scrollEvent));

    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    } // If we have a custom preview we can't know ahead of time how large it'll be so we position
    // it next to the cursor. The exception is when the consumer has opted into making the preview
    // the same size as the root element, in which case we do know the size.


    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(referenceElement, event);

    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);

    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();

    this._dragDropRegistry.startDragging(this, event);
  }
  /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */


  _cleanupDragArtifacts(event) {
    // Restore the element's visibility and insert it at its old position in the DOM.
    // It's important that we maintain the position, because moving the element around in the DOM
    // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
    // while moving the existing elements in all other cases.
    toggleVisibility(this._rootElement, true, dragImportantProperties);

    this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);

    this._destroyPreview();

    this._destroyPlaceholder();

    this._boundaryRect = this._previewRect = this._initialTransform = undefined; // Re-enter the NgZone since we bound `document` events on the outside.

    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);

      const pointerPosition = this._getPointerPositionOnPage(event);

      const distance = this._getDragDistance(pointerPosition);

      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);

      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container: container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition);
      this._dropContainer = this._initialContainer;
    });
  }
  /**
   * Updates the item's position in its drop container, or moves it
   * into a new one, depending on its current drag position.
   */


  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    // Drop container that draggable has been moved into.
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y); // If we couldn't find a new container to move the item into, and the item has left its
    // initial container, check whether the it's over the initial container. This handles the
    // case where two containers are connected one way and the user tries to undo dragging an
    // item into a new container.


    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }

    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        // Notify the old container that the item has left.
        this.exited.next({
          item: this,
          container: this._dropContainer
        });

        this._dropContainer.exit(this); // Notify the new container that the item has entered.


        this._dropContainer = newContainer;

        this._dropContainer.enter(this, x, y, newContainer === this._initialContainer && // If we're re-entering the initial container and sorting is disabled,
        // put item the into its starting index to begin with.
        newContainer.sortingDisabled ? this._initialIndex : undefined);

        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    } // Dragging may have been interrupted as a result of the events above.


    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);

      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);

      this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    }
  }
  /**
   * Creates the element that will be rendered next to the user's pointer
   * and will be used as a preview of the element that is being dragged.
   */


  _createPreviewElement() {
    const previewConfig = this._previewTemplate;
    const previewClass = this.previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;

    if (previewTemplate && previewConfig) {
      // Measure the element before we've inserted the preview
      // since the insertion could throw off the measurement.
      const rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewRef = viewRef;

      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      const element = this._rootElement;
      preview = deepCloneNode(element);
      matchElementSize(preview, element.getBoundingClientRect());

      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }

    extendStyles(preview.style, {
      // It's important that we disable the pointer events on the preview, because
      // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
      'pointer-events': 'none',
      // We have to reset the margin, because it can throw off positioning relative to the viewport.
      'margin': '0',
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'z-index': `${this._config.zIndex || 1000}`
    }, dragImportantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add('cdk-drag-preview');
    preview.setAttribute('dir', this._direction);

    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach(className => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }

    return preview;
  }
  /**
   * Animates the preview element from its current position to the location of the drop placeholder.
   * @returns Promise that resolves when the animation completes.
   */


  _animatePreviewToPlaceholder() {
    // If the user hasn't moved yet, the transitionend event won't fire.
    if (!this._hasMoved) {
      return Promise.resolve();
    }

    const placeholderRect = this._placeholder.getBoundingClientRect(); // Apply the class that adds a transition to the preview.


    this._preview.classList.add('cdk-drag-animating'); // Move the preview to the placeholder position.


    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top); // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
    // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
    // apply its style, we take advantage of the available info to figure out whether we need to
    // bind the event in the first place.


    const duration = getTransformTransitionDurationInMs(this._preview);

    if (duration === 0) {
      return Promise.resolve();
    }

    return this._ngZone.runOutsideAngular(() => {
      return new Promise(resolve => {
        const handler = event => {
          var _a;

          if (!event || (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event) === this._preview && event.propertyName === 'transform') {
            (_a = this._preview) === null || _a === void 0 ? void 0 : _a.removeEventListener('transitionend', handler);
            resolve();
            clearTimeout(timeout);
          }
        }; // If a transition is short enough, the browser might not fire the `transitionend` event.
        // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
        // fire if the transition hasn't completed when it was supposed to.


        const timeout = setTimeout(handler, duration * 1.5);

        this._preview.addEventListener('transitionend', handler);
      });
    });
  }
  /** Creates an element that will be shown instead of the current element while dragging. */


  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;

    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);

      this._placeholderRef.detectChanges();

      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    } // Stop pointer events on the preview so the user can't
    // interact with it while the preview is animating.


    placeholder.style.pointerEvents = 'none';
    placeholder.classList.add('cdk-drag-placeholder');
    return placeholder;
  }
  /**
   * Figures out the coordinates at which an element was picked up.
   * @param referenceElement Element that initiated the dragging.
   * @param event Event that initiated the dragging.
   */


  _getPointerPositionInElement(referenceElement, event) {
    const elementRect = this._rootElement.getBoundingClientRect();

    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;

    const scrollPosition = this._getViewportScrollPosition();

    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  /** Determines the point of the page that was touched by the user. */


  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();

    const point = isTouchEvent(event) ? // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
    // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
    // to have a value, but Firefox in device emulation mode has a bug where both can be empty
    // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
    // throwing an error. The value returned here will be incorrect, but since this only
    // breaks inside a developer tool and the value is only used for secondary information,
    // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
    event.touches[0] || event.changedTouches[0] || {
      pageX: 0,
      pageY: 0
    } : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top; // if dragging SVG element, try to convert from the screen coordinate system to the SVG
    // coordinate system

    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();

      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();

        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }

    return {
      x,
      y
    };
  }
  /** Gets the pointer position on the page, accounting for any position constraints. */


  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this) : point;

    if (this.lockAxis === 'x' || dropContainerLock === 'x') {
      y = this._pickupPositionOnPage.y;
    } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
      x = this._pickupPositionOnPage.x;
    }

    if (this._boundaryRect) {
      const {
        x: pickupX,
        y: pickupY
      } = this._pickupPositionInElement;
      const boundaryRect = this._boundaryRect;

      const {
        width: previewWidth,
        height: previewHeight
      } = this._getPreviewRect();

      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewHeight - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewWidth - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }

    return {
      x,
      y
    };
  }
  /** Updates the current drag delta, based on the user's current pointer position on the page. */


  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange; // Amount of pixels the user has dragged since the last time the direction changed.

    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y); // Because we handle pointer events on a per-pixel basis, we don't want the delta
    // to change for every pixel, otherwise anything that depends on it can look erratic.
    // To make the delta more consistent, we track how much the user has moved since the last
    // delta change and we only update it after it has reached a certain threshold.

    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }

    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }

    return delta;
  }
  /** Toggles the native drag interactions, based on how many handles are registered. */


  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }

    const shouldEnable = this._handles.length > 0 || !this.isDragging();

    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  /** Removes the manually-added event listeners from the root element. */


  _removeRootElementListeners(element) {
    element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
    element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    element.removeEventListener('dragstart', this._nativeDragStart, activeEventListenerOptions);
  }
  /**
   * Applies a `transform` to the root element, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */


  _applyRootElementTransform(x, y) {
    const transform = getTransform(x, y);
    const styles = this._rootElement.style; // Cache the previous transform amount only after the first drag sequence, because
    // we don't want our own transforms to stack on top of each other.
    // Should be excluded none because none + translate3d(x, y, x) is invalid css

    if (this._initialTransform == null) {
      this._initialTransform = styles.transform && styles.transform != 'none' ? styles.transform : '';
    } // Preserve the previous `transform` value, if there was one. Note that we apply our own
    // transform before the user's, because things like rotation can affect which direction
    // the element will be translated towards.


    styles.transform = combineTransforms(transform, this._initialTransform);
  }
  /**
   * Applies a `transform` to the preview, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */


  _applyPreviewTransform(x, y) {
    var _a; // Only apply the initial transform if the preview is a clone of the original element, otherwise
    // it could be completely different and the transform might not make sense anymore.


    const initialTransform = ((_a = this._previewTemplate) === null || _a === void 0 ? void 0 : _a.template) ? undefined : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.style.transform = combineTransforms(transform, initialTransform);
  }
  /**
   * Gets the distance that the user has dragged during the current drag sequence.
   * @param currentPosition Current position of the user's pointer.
   */


  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;

    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }

    return {
      x: 0,
      y: 0
    };
  }
  /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */


  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = undefined;

    this._parentPositions.clear();
  }
  /**
   * Checks whether the element is still inside its boundary after the viewport has been resized.
   * If not, the position is adjusted so that the element fits again.
   */


  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;

    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }

    const boundaryRect = this._boundaryElement.getBoundingClientRect();

    const elementRect = this._rootElement.getBoundingClientRect(); // It's possible that the element got hidden away after dragging (e.g. by switching to a
    // different tab). Don't do anything in this case so we don't clear the user's position.


    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }

    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom; // If the element has become wider than the boundary, we can't
    // do much to make it fit so we just anchor it to the left.

    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }

      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    } // If the element has become taller than the boundary, we can't
    // do much to make it fit so we just anchor it to the top.


    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }

      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }

    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  /** Gets the drag start delay, based on the event type. */


  _getDragStartDelay(event) {
    const value = this.dragStartDelay;

    if (typeof value === 'number') {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }

    return value ? value.mouse : 0;
  }
  /** Updates the internal state of the draggable element when scrolling has occurred. */


  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);

    if (scrollDifference) {
      const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event); // ClientRect dimensions are based on the scroll position of the page and its parent
      // node so we have to update the cached boundary ClientRect if the user has scrolled.


      if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
        adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }

      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top; // If we're in free drag mode, we have to update the active transform, because
      // it isn't relative to the viewport like the preview inside a drop list.

      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;

        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  /** Gets the scroll position of the viewport. */


  _getViewportScrollPosition() {
    var _a;

    return ((_a = this._parentPositions.positions.get(this._document)) === null || _a === void 0 ? void 0 : _a.scrollPosition) || this._parentPositions.getViewportScrollPosition();
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */


  _getShadowRoot() {
    if (this._cachedShadowRoot === undefined) {
      this._cachedShadowRoot = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getShadowRoot)(this._rootElement);
    }

    return this._cachedShadowRoot;
  }
  /** Gets the element into which the drag preview should be inserted. */


  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || 'global';

    if (previewContainer === 'parent') {
      return initialParent;
    }

    if (previewContainer === 'global') {
      const documentRef = this._document; // We can't use the body if the user is in fullscreen mode,
      // because the preview will render under the fullscreen element.
      // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.

      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }

    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(previewContainer);
  }
  /** Lazily resolves and returns the dimensions of the preview. */


  _getPreviewRect() {
    // Cache the preview element rect if we haven't cached it already or if
    // we cached it too early before the element dimensions were computed.
    if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
      this._previewRect = (this._preview || this._rootElement).getBoundingClientRect();
    }

    return this._previewRect;
  }
  /** Gets a handle that is the target of an event. */


  _getTargetHandle(event) {
    return this._handles.find(handle => {
      return event.target && (event.target === handle || handle.contains(event.target));
    });
  }

}
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param x Desired position of the element along the X axis.
 * @param y Desired position of the element along the Y axis.
 */


function getTransform(x, y) {
  // Round the transforms since some browsers will
  // blur the elements for sub-pixel transforms.
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
/** Clamps a value between a minimum and a maximum. */


function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
/** Determines whether an event is a touch event. */


function isTouchEvent(event) {
  // This function is called for every pixel that the user has dragged so we need it to be
  // as fast as possible. Since we only bind mouse events and touch events, we can assume
  // that if the event's name starts with `t`, it's a touch event.
  return event.type[0] === 't';
}
/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 */


function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;

  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }

  const wrapper = _document.createElement('div');

  rootNodes.forEach(node => wrapper.appendChild(node));
  return wrapper;
}
/**
 * Matches the target element's size to the source's size.
 * @param target Element that needs to be resized.
 * @param sourceRect Dimensions of the source element.
 */


function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Moves an item one index in an array to another.
 * @param array Array in which to move the item.
 * @param fromIndex Starting index of the item.
 * @param toIndex Index to which the item should be moved.
 */


function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);

  if (from === to) {
    return;
  }

  const target = array[from];
  const delta = to < from ? -1 : 1;

  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }

  array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @param currentArray Array from which to transfer the item.
 * @param targetArray Array into which to put the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 */


function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const from = clamp(currentIndex, currentArray.length - 1);
  const to = clamp(targetIndex, targetArray.length);

  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
  }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @param currentArray Array from which to copy the item.
 * @param targetArray Array into which is copy the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 *
 */


function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const to = clamp(targetIndex, targetArray.length);

  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray[currentIndex]);
  }
}
/** Clamps a number between zero and a maximum. */


function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 */


const DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 */

const SCROLL_PROXIMITY_THRESHOLD = 0.05;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 */

class DropListRef {
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    /** Whether starting a dragging sequence from this container is disabled. */

    this.disabled = false;
    /** Whether sorting items within the list is disabled. */

    this.sortingDisabled = false;
    /**
     * Whether auto-scrolling the view when the user
     * moves their pointer close to the edges is disabled.
     */

    this.autoScrollDisabled = false;
    /** Number of pixels to scroll for each frame when auto-scrolling an element. */

    this.autoScrollStep = 2;
    /**
     * Function that is used to determine whether an item
     * is allowed to be moved into a drop container.
     */

    this.enterPredicate = () => true;
    /** Functions that is used to determine whether an item can be sorted into a particular index. */


    this.sortPredicate = () => true;
    /** Emits right before dragging has started. */


    this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits when the user has moved a new drag item into this container.
     */

    this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits when the user removes an item from the container
     * by dragging it into another container.
     */

    this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the user drops an item inside the container. */

    this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits as the user is swapping items while actively dragging. */

    this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Whether an item in the list is being dragged. */

    this._isDragging = false;
    /** Cache of the dimensions of all the items inside the container. */

    this._itemPositions = [];
    /**
     * Keeps track of the item that was last swapped with the dragged item, as well as what direction
     * the pointer was moving in when the swap occured and whether the user's pointer continued to
     * overlap with the swapped item after the swapping occurred.
     */

    this._previousSwap = {
      drag: null,
      delta: 0,
      overlaps: false
    };
    /** Draggable items in the container. */

    this._draggables = [];
    /** Drop lists that are connected to the current one. */

    this._siblings = [];
    /** Direction in which the list is oriented. */

    this._orientation = 'vertical';
    /** Connected siblings that currently have a dragged item. */

    this._activeSiblings = new Set();
    /** Layout direction of the drop list. */

    this._direction = 'ltr';
    /** Subscription to the window being scrolled. */

    this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /** Vertical direction in which the list is currently scrolling. */

    this._verticalScrollDirection = 0
    /* NONE */
    ;
    /** Horizontal direction in which the list is currently scrolling. */

    this._horizontalScrollDirection = 0
    /* NONE */
    ;
    /** Used to signal to the current auto-scroll sequence when to stop. */

    this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */

    this._cachedShadowRoot = null;
    /** Starts the interval that'll auto-scroll the element. */

    this._startScrollInterval = () => {
      this._stopScrolling();

      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.interval)(0, rxjs__WEBPACK_IMPORTED_MODULE_6__.animationFrameScheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._stopScrollTimers)).subscribe(() => {
        const node = this._scrollNode;
        const scrollStep = this.autoScrollStep;

        if (this._verticalScrollDirection === 1
        /* UP */
        ) {
          node.scrollBy(0, -scrollStep);
        } else if (this._verticalScrollDirection === 2
        /* DOWN */
        ) {
          node.scrollBy(0, scrollStep);
        }

        if (this._horizontalScrollDirection === 1
        /* LEFT */
        ) {
          node.scrollBy(-scrollStep, 0);
        } else if (this._horizontalScrollDirection === 2
        /* RIGHT */
        ) {
          node.scrollBy(scrollStep, 0);
        }
      });
    };

    this.element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(element);
    this._document = _document;
    this.withScrollableParents([this.element]);

    _dragDropRegistry.registerDropContainer(this);

    this._parentPositions = new ParentPositionTracker(_document);
  }
  /** Removes the drop list functionality from the DOM element. */


  dispose() {
    this._stopScrolling();

    this._stopScrollTimers.complete();

    this._viewportScrollSubscription.unsubscribe();

    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();

    this._activeSiblings.clear();

    this._scrollNode = null;

    this._parentPositions.clear();

    this._dragDropRegistry.removeDropContainer(this);
  }
  /** Whether an item from this list is currently being dragged. */


  isDragging() {
    return this._isDragging;
  }
  /** Starts dragging an item. */


  start() {
    this._draggingStarted();

    this._notifyReceivingSiblings();
  }
  /**
   * Emits an event to indicate that the user moved an item into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */


  enter(item, pointerX, pointerY, index) {
    this._draggingStarted(); // If sorting is disabled, we want the item to return to its starting
    // position if the user is returning it to its initial container.


    let newIndex;

    if (index == null) {
      newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;

      if (newIndex === -1) {
        // We use the coordinates of where the item entered the drop
        // zone to figure out at which index it should be inserted.
        newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
      }
    } else {
      newIndex = index;
    }

    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    let newPositionReference = activeDraggables[newIndex]; // If the item at the new position is the same as the item that is being dragged,
    // it means that we're trying to restore the item to its initial position. In this
    // case we should use the next item from the list as the reference.

    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    } // If we didn't find a new position reference, it means that either the item didn't start off
    // in this container, or that the item requested to be inserted at the end of the list.


    if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      newPositionReference = activeDraggables[0];
    } // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
    // into another container and back again), we have to ensure that it isn't duplicated.


    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    } // Don't use items that are being dragged as a reference, because
    // their element has been moved down to the bottom of the body.


    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element).appendChild(placeholder);
      activeDraggables.push(item);
    } // The transform needs to be cleared so it doesn't throw off the measurements.


    placeholder.style.transform = ''; // Note that the positions were already cached when we called `start` above,
    // but we need to refresh them since the amount of items has changed and also parent rects.

    this._cacheItemPositions();

    this._cacheParentPositions(); // Notify siblings at the end so that the item has been inserted into the `activeDraggables`.


    this._notifyReceivingSiblings();

    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  /**
   * Removes an item from the container after it was dragged into another container by the user.
   * @param item Item that was dragged out.
   */


  exit(item) {
    this._reset();

    this.exited.next({
      item,
      container: this
    });
  }
  /**
   * Drops an item into this container.
   * @param item Item being dropped into the container.
   * @param currentIndex Index at which the item should be inserted.
   * @param previousIndex Index of the item when dragging started.
   * @param previousContainer Container from which the item got dragged in.
   * @param isPointerOverContainer Whether the user's pointer was over the
   *    container when the item was dropped.
   * @param distance Distance the user has dragged since the start of the dragging sequence.
   */


  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint) {
    this._reset();

    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint
    });
  }
  /**
   * Sets the draggable items that are a part of this list.
   * @param items Items that are a part of this list.
   */


  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach(item => item._withDropContainer(this));

    if (this.isDragging()) {
      const draggedItems = previousItems.filter(item => item.isDragging()); // If all of the items being dragged were removed
      // from the list, abort the current drag sequence.

      if (draggedItems.every(item => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._cacheItems();
      }
    }

    return this;
  }
  /** Sets the layout direction of the drop list. */


  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  /**
   * Sets the containers that are connected to this one. When two or more containers are
   * connected, the user will be allowed to transfer items between them.
   * @param connectedTo Other containers that the current containers should be connected to.
   */


  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  /**
   * Sets the orientation of the container.
   * @param orientation New orientation for the container.
   */


  withOrientation(orientation) {
    this._orientation = orientation;
    return this;
  }
  /**
   * Sets which parent elements are can be scrolled while the user is dragging.
   * @param elements Elements that can be scrolled.
   */


  withScrollableParents(elements) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element); // We always allow the current element to be scrollable
    // so we need to ensure that it's in the array.

    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  /** Gets the scrollable parents that are registered with this drop container. */


  getScrollableParents() {
    return this._scrollableElements;
  }
  /**
   * Figures out the index of an item in the container.
   * @param item Item whose index should be determined.
   */


  getItemIndex(item) {
    if (!this._isDragging) {
      return this._draggables.indexOf(item);
    } // Items are sorted always by top/left in the cache, however they flow differently in RTL.
    // The rest of the logic still stands no matter what orientation we're in, however
    // we need to invert the array when determining the index.


    const items = this._orientation === 'horizontal' && this._direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
    return items.findIndex(currentItem => currentItem.drag === item);
  }
  /**
   * Whether the list is able to receive the item that
   * is currently being dragged inside a connected drop list.
   */


  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  /**
   * Sorts an item inside the container based on its position.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */


  _sortItem(item, pointerX, pointerY, pointerDelta) {
    // Don't sort the item if sorting is disabled or it's out of range.
    if (this.sortingDisabled || !this._clientRect || !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }

    const siblings = this._itemPositions;

    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);

    if (newIndex === -1 && siblings.length > 0) {
      return;
    }

    const isHorizontal = this._orientation === 'horizontal';
    const currentIndex = siblings.findIndex(currentItem => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1; // How many pixels the item's placeholder should be offset.

    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta); // How many pixels all the other items should be offset.


    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta); // Save the previous order of the items before moving the item to its new index.
    // We use this to check whether an item has been moved as a result of the sorting.


    const oldOrder = siblings.slice(); // Shuffle the array in place.

    moveItemInArray(siblings, currentIndex, newIndex);
    this.sorted.next({
      previousIndex: currentIndex,
      currentIndex: newIndex,
      container: this,
      item
    });
    siblings.forEach((sibling, index) => {
      // Don't do anything if the position hasn't changed.
      if (oldOrder[index] === sibling) {
        return;
      }

      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement(); // Update the offset to reflect the new position.

      sibling.offset += offset; // Since we're moving the items with a `transform`, we need to adjust their cached
      // client rects to reflect their new position, as well as swap their positions in the cache.
      // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
      // elements may be mid-animation which will give us a wrong result.

      if (isHorizontal) {
        // Round the transforms since some browsers will
        // blur the elements, for sub-pixel transforms.
        elementToOffset.style.transform = combineTransforms(`translate3d(${Math.round(sibling.offset)}px, 0, 0)`, sibling.initialTransform);
        adjustClientRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${Math.round(sibling.offset)}px, 0)`, sibling.initialTransform);
        adjustClientRect(sibling.clientRect, offset, 0);
      }
    }); // Note that it's important that we do this after the client rects have been adjusted.

    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
  }
  /**
   * Checks whether the user's pointer is close to the edges of either the
   * viewport or the drop list and starts the auto-scroll sequence.
   * @param pointerX User's pointer position along the x axis.
   * @param pointerY User's pointer position along the y axis.
   */


  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }

    let scrollNode;
    let verticalScrollDirection = 0
    /* NONE */
    ;
    let horizontalScrollDirection = 0
    /* NONE */
    ; // Check whether we should start scrolling any of the parent containers.

    this._parentPositions.positions.forEach((position, element) => {
      // We have special handling for the `document` below. Also this would be
      // nicer with a  for...of loop, but it requires changing a compiler flag.
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }

      if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, pointerX, pointerY);

        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    }); // Otherwise check if we can start scrolling the viewport.


    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();

      const clientRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
      scrollNode = window;
    }

    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;

      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  /** Stops any currently-running auto-scroll sequences. */


  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  /** Starts the dragging sequence within the list. */


  _draggingStarted() {
    const styles = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element).style;
    this.beforeStarted.next();
    this._isDragging = true; // We need to disable scroll snapping while the user is dragging, because it breaks automatic
    // scrolling. The browser seems to round the value based on the snapping points which means
    // that we can't increment/decrement the scroll position.

    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || '';
    styles.scrollSnapType = styles.msScrollSnapType = 'none';

    this._cacheItems();

    this._viewportScrollSubscription.unsubscribe();

    this._listenToScrollEvents();
  }
  /** Caches the positions of the configured scrollable parents. */


  _cacheParentPositions() {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element);

    this._parentPositions.cache(this._scrollableElements); // The list element is always in the `scrollableElements`
    // so we can take advantage of the cached `ClientRect`.


    this._clientRect = this._parentPositions.positions.get(element).clientRect;
  }
  /** Refreshes the position cache of the items and sibling containers. */


  _cacheItemPositions() {
    const isHorizontal = this._orientation === 'horizontal';
    this._itemPositions = this._activeDraggables.map(drag => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || '',
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  /** Resets the container to its initial state. */


  _reset() {
    this._isDragging = false;
    const styles = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element).style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap; // TODO(crisbeto): may have to wait for the animations to finish.

    this._activeDraggables.forEach(item => {
      var _a;

      const rootElement = item.getRootElement();

      if (rootElement) {
        const initialTransform = (_a = this._itemPositions.find(current => current.drag === item)) === null || _a === void 0 ? void 0 : _a.initialTransform;
        rootElement.style.transform = initialTransform || '';
      }
    });

    this._siblings.forEach(sibling => sibling._stopReceiving(this));

    this._activeDraggables = [];
    this._itemPositions = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;

    this._stopScrolling();

    this._viewportScrollSubscription.unsubscribe();

    this._parentPositions.clear();
  }
  /**
   * Gets the offset in pixels by which the items that aren't being dragged should be moved.
   * @param currentIndex Index of the item currently being dragged.
   * @param siblings All of the items in the list.
   * @param delta Direction in which the user is moving.
   */


  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this._orientation === 'horizontal';
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;

    if (immediateSibling) {
      const start = isHorizontal ? 'left' : 'top';
      const end = isHorizontal ? 'right' : 'bottom'; // Get the spacing between the start of the current item and the end of the one immediately
      // after it in the direction in which the user is dragging, or vice versa. We add it to the
      // offset in order to push the element to where it will be when it's inline and is influenced
      // by the `margin` of its siblings.

      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }

    return siblingOffset;
  }
  /**
   * Gets the offset in pixels by which the item that is being dragged should be moved.
   * @param currentPosition Current position of the item.
   * @param newPosition Position of the item where the current item should be moved.
   * @param delta Direction in which the user is moving.
   */


  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this._orientation === 'horizontal';
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top; // Account for differences in the item width/height.

    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }

    return itemOffset;
  }
  /**
   * Checks if pointer is entering in the first position
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */


  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }

    const itemPositions = this._itemPositions;
    const isHorizontal = this._orientation === 'horizontal'; // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
    // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)

    const reversed = itemPositions[0].drag !== this._activeDraggables[0];

    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */


  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this._orientation === 'horizontal';

    const index = this._itemPositions.findIndex(({
      drag,
      clientRect
    }) => {
      // Skip the item itself.
      if (drag === item) {
        return false;
      }

      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y; // If the user is still hovering over the same item as last time, their cursor hasn't left
        // the item after we made the swap, and they didn't change the direction in which they're
        // dragging, we don't consider it a direction swap.

        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }

      return isHorizontal ? // Round these down since most browsers report client rects with
      // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
      pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });

    return index === -1 || !this.sortPredicate(index, item, this) ? -1 : index;
  }
  /** Caches the current items in the list and their positions. */


  _cacheItems() {
    this._activeDraggables = this._draggables.slice();

    this._cacheItemPositions();

    this._cacheParentPositions();
  }
  /**
   * Checks whether the user's pointer is positioned over the container.
   * @param x Pointer position along the X axis.
   * @param y Pointer position along the Y axis.
   */


  _isOverContainer(x, y) {
    return this._clientRect != null && isInsideClientRect(this._clientRect, x, y);
  }
  /**
   * Figures out whether an item should be moved into a sibling
   * drop container, based on its current position.
   * @param item Drag item that is being moved.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */


  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find(sibling => sibling._canReceive(item, x, y));
  }
  /**
   * Checks whether the drop list can receive the passed-in item.
   * @param item Item that is being dragged into the list.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */


  _canReceive(item, x, y) {
    if (!this._clientRect || !isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }

    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y); // If there's no element at the pointer position, then
    // the client rect is probably scrolled out of the view.


    if (!elementFromPoint) {
      return false;
    }

    const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element); // The `ClientRect`, that we're using to find the container over which the user is
    // hovering, doesn't give us any information on whether the element has been scrolled
    // out of the view or whether it's overlapping with other containers. This means that
    // we could end up transferring the item into a container that's invisible or is positioned
    // below another one. We use the result from `elementFromPoint` to get the top-most element
    // at the pointer position and to find whether it's one of the intersecting drop containers.

    return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
  }
  /**
   * Called by one of the connected drop lists when a dragging sequence has started.
   * @param sibling Sibling in which dragging has started.
   */


  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;

    if (!activeSiblings.has(sibling) && items.every(item => {
      // Note that we have to add an exception to the `enterPredicate` for items that started off
      // in this drop list. The drag ref has logic that allows an item to return to its initial
      // container, if it has left the initial container and none of the connected containers
      // allow it to enter. See `DragRef._updateActiveDropContainer` for more context.
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);

      this._cacheParentPositions();

      this._listenToScrollEvents();
    }
  }
  /**
   * Called by a connected drop list when dragging has stopped.
   * @param sibling Sibling whose dragging has stopped.
   */


  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);

    this._viewportScrollSubscription.unsubscribe();
  }
  /**
   * Starts listening to scroll events on the viewport.
   * Used for updating the internal state of the list.
   */


  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(event => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);

        if (scrollDifference) {
          // Since we know the amount that the user has scrolled we can shift all of the
          // client rectangles ourselves. This is cheaper than re-measuring everything and
          // we can avoid inconsistent behavior where we might be measuring the element before
          // its position has changed.
          this._itemPositions.forEach(({
            clientRect
          }) => {
            adjustClientRect(clientRect, scrollDifference.top, scrollDifference.left);
          }); // We need two loops for this, because we want all of the cached
          // positions to be up-to-date before we re-sort the item.


          this._itemPositions.forEach(({
            drag
          }) => {
            if (this._dragDropRegistry.isDragging(drag)) {
              // We need to re-sort the item manually, because the pointer move
              // events won't be dispatched while the user is scrolling.
              drag._sortFromLastPointerPosition();
            }
          });
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */


  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getShadowRoot)((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element));

      this._cachedShadowRoot = shadowRoot || this._document;
    }

    return this._cachedShadowRoot;
  }
  /** Notifies any siblings that may potentially receive the item. */


  _notifyReceivingSiblings() {
    const draggedItems = this._activeDraggables.filter(item => item.isDragging());

    this._siblings.forEach(sibling => sibling._startReceiving(this, draggedItems));
  }

}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerY Position of the user's pointer along the y axis.
 */


function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;

  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return 1
    /* UP */
    ;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return 2
    /* DOWN */
    ;
  }

  return 0
  /* NONE */
  ;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerX Position of the user's pointer along the x axis.
 */


function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;

  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return 1
    /* LEFT */
    ;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return 2
    /* RIGHT */
    ;
  }

  return 0
  /* NONE */
  ;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param element Element for which we should calculate the scroll direction.
 * @param clientRect Bounding client rectangle of the element.
 * @param pointerX Position of the user's pointer along the x axis.
 * @param pointerY Position of the user's pointer along the y axis.
 */


function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = 0
  /* NONE */
  ;
  let horizontalScrollDirection = 0
  /* NONE */
  ; // Note that we here we do some extra checks for whether the element is actually scrollable in
  // a certain direction and we only assign the scroll direction if it is. We do this so that we
  // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
  // This allows us to handle cases where the scroll regions of two scrollable elements overlap.

  if (computedVertical) {
    const scrollTop = element.scrollTop;

    if (computedVertical === 1
    /* UP */
    ) {
      if (scrollTop > 0) {
        verticalScrollDirection = 1
        /* UP */
        ;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = 2
      /* DOWN */
      ;
    }
  }

  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;

    if (computedHorizontal === 1
    /* LEFT */
    ) {
      if (scrollLeft > 0) {
        horizontalScrollDirection = 1
        /* LEFT */
        ;
      }
    } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
      horizontalScrollDirection = 2
      /* RIGHT */
      ;
    }
  }

  return [verticalScrollDirection, horizontalScrollDirection];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Event options that can be used to bind an active, capturing event. */


const activeCapturingEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: false,
  capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * @docs-private
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.

class DragDropRegistry {
  constructor(_ngZone, _document) {
    this._ngZone = _ngZone;
    /** Registered drop container instances. */

    this._dropInstances = new Set();
    /** Registered drag item instances. */

    this._dragInstances = new Set();
    /** Drag item instances that are currently being dragged. */

    this._activeDragInstances = [];
    /** Keeps track of the event listeners that we've bound to the `document`. */

    this._globalListeners = new Map();
    /**
     * Predicate function to check if an item is being dragged.  Moved out into a property,
     * because it'll be called a lot and we don't want to create a new function every time.
     */

    this._draggingPredicate = item => item.isDragging();
    /**
     * Emits the `touchmove` or `mousemove` events that are dispatched
     * while the user is dragging a drag item instance.
     */


    this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits the `touchend` or `mouseup` events that are dispatched
     * while the user is dragging a drag item instance.
     */

    this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits when the viewport has been scrolled while the user is dragging an item.
     * @deprecated To be turned into a private member. Use the `scrolled` method instead.
     * @breaking-change 13.0.0
     */

    this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Event listener that will prevent the default browser action while the user is dragging.
     * @param event Event whose default action should be prevented.
     */

    this._preventDefaultWhileDragging = event => {
      if (this._activeDragInstances.length > 0) {
        event.preventDefault();
      }
    };
    /** Event listener for `touchmove` that is bound even if no dragging is happening. */


    this._persistentTouchmoveListener = event => {
      if (this._activeDragInstances.length > 0) {
        // Note that we only want to prevent the default action after dragging has actually started.
        // Usually this is the same time at which the item is added to the `_activeDragInstances`,
        // but it could be pushed back if the user has set up a drag delay or threshold.
        if (this._activeDragInstances.some(this._draggingPredicate)) {
          event.preventDefault();
        }

        this.pointerMove.next(event);
      }
    };

    this._document = _document;
  }
  /** Adds a drop container to the registry. */


  registerDropContainer(drop) {
    if (!this._dropInstances.has(drop)) {
      this._dropInstances.add(drop);
    }
  }
  /** Adds a drag item instance to the registry. */


  registerDragItem(drag) {
    this._dragInstances.add(drag); // The `touchmove` event gets bound once, ahead of time, because WebKit
    // won't preventDefault on a dynamically-added `touchmove` listener.
    // See https://bugs.webkit.org/show_bug.cgi?id=184250.


    if (this._dragInstances.size === 1) {
      this._ngZone.runOutsideAngular(() => {
        // The event handler has to be explicitly active,
        // because newer browsers make it passive by default.
        this._document.addEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
      });
    }
  }
  /** Removes a drop container from the registry. */


  removeDropContainer(drop) {
    this._dropInstances.delete(drop);
  }
  /** Removes a drag item instance from the registry. */


  removeDragItem(drag) {
    this._dragInstances.delete(drag);

    this.stopDragging(drag);

    if (this._dragInstances.size === 0) {
      this._document.removeEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
    }
  }
  /**
   * Starts the dragging sequence for a drag instance.
   * @param drag Drag instance which is being dragged.
   * @param event Event that initiated the dragging.
   */


  startDragging(drag, event) {
    // Do not process the same drag twice to avoid memory leaks and redundant listeners
    if (this._activeDragInstances.indexOf(drag) > -1) {
      return;
    }

    this._activeDragInstances.push(drag);

    if (this._activeDragInstances.length === 1) {
      const isTouchEvent = event.type.startsWith('touch'); // We explicitly bind __active__ listeners here, because newer browsers will default to
      // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
      // use `preventDefault` to prevent the page from scrolling while the user is dragging.

      this._globalListeners.set(isTouchEvent ? 'touchend' : 'mouseup', {
        handler: e => this.pointerUp.next(e),
        options: true
      }).set('scroll', {
        handler: e => this.scroll.next(e),
        // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
        // the document. See https://github.com/angular/components/issues/17144.
        options: true
      }) // Preventing the default action on `mousemove` isn't enough to disable text selection
      // on Safari so we need to prevent the selection event as well. Alternatively this can
      // be done by setting `user-select: none` on the `body`, however it has causes a style
      // recalculation which can be expensive on pages with a lot of elements.
      .set('selectstart', {
        handler: this._preventDefaultWhileDragging,
        options: activeCapturingEventOptions
      }); // We don't have to bind a move event for touch drag sequences, because
      // we already have a persistent global one bound from `registerDragItem`.


      if (!isTouchEvent) {
        this._globalListeners.set('mousemove', {
          handler: e => this.pointerMove.next(e),
          options: activeCapturingEventOptions
        });
      }

      this._ngZone.runOutsideAngular(() => {
        this._globalListeners.forEach((config, name) => {
          this._document.addEventListener(name, config.handler, config.options);
        });
      });
    }
  }
  /** Stops dragging a drag item instance. */


  stopDragging(drag) {
    const index = this._activeDragInstances.indexOf(drag);

    if (index > -1) {
      this._activeDragInstances.splice(index, 1);

      if (this._activeDragInstances.length === 0) {
        this._clearGlobalListeners();
      }
    }
  }
  /** Gets whether a drag item instance is currently being dragged. */


  isDragging(drag) {
    return this._activeDragInstances.indexOf(drag) > -1;
  }
  /**
   * Gets a stream that will emit when any element on the page is scrolled while an item is being
   * dragged.
   * @param shadowRoot Optional shadow root that the current dragging sequence started from.
   *   Top-level listeners won't pick up events coming from the shadow DOM so this parameter can
   *   be used to include an additional top-level listener at the shadow root level.
   */


  scrolled(shadowRoot) {
    const streams = [this.scroll];

    if (shadowRoot && shadowRoot !== this._document) {
      // Note that this is basically the same as `fromEvent` from rjxs, but we do it ourselves,
      // because we want to guarantee that the event is bound outside of the `NgZone`. With
      // `fromEvent` it'll only happen if the subscription is outside the `NgZone`.
      streams.push(new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(observer => {
        return this._ngZone.runOutsideAngular(() => {
          const eventOptions = true;

          const callback = event => {
            if (this._activeDragInstances.length) {
              observer.next(event);
            }
          };

          shadowRoot.addEventListener('scroll', callback, eventOptions);
          return () => {
            shadowRoot.removeEventListener('scroll', callback, eventOptions);
          };
        });
      }));
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(...streams);
  }

  ngOnDestroy() {
    this._dragInstances.forEach(instance => this.removeDragItem(instance));

    this._dropInstances.forEach(instance => this.removeDropContainer(instance));

    this._clearGlobalListeners();

    this.pointerMove.complete();
    this.pointerUp.complete();
  }
  /** Clears out the global event listeners from the `document`. */


  _clearGlobalListeners() {
    this._globalListeners.forEach((config, name) => {
      this._document.removeEventListener(name, config.handler, config.options);
    });

    this._globalListeners.clear();
  }

}

DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) {
  return new (t || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT));
};

DragDropRegistry.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
  token: DragDropRegistry,
  factory: DragDropRegistry.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](DragDropRegistry, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Default configuration to be used when creating a `DragRef`. */


const DEFAULT_CONFIG = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */

class DragDrop {
  constructor(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
  }
  /**
   * Turns an element into a draggable item.
   * @param element Element to which to attach the dragging functionality.
   * @param config Object used to configure the dragging behavior.
   */


  createDrag(element, config = DEFAULT_CONFIG) {
    return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
  }
  /**
   * Turns an element into a drop list.
   * @param element Element to which to attach the drop list functionality.
   */


  createDropList(element) {
    return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
  }

}

DragDrop.ɵfac = function DragDrop_Factory(t) {
  return new (t || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](DragDropRegistry));
};

DragDrop.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
  token: DragDrop,
  factory: DragDrop.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](DragDrop, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ViewportRuler
    }, {
      type: DragDropRegistry
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * @docs-private
 */


const CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CDK_DRAG_PARENT');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `CdkDropListGroup`. It serves as
 * alternative token to the actual `CdkDropListGroup` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

const CDK_DROP_LIST_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDropListGroup');
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 */

class CdkDropListGroup {
  constructor() {
    /** Drop lists registered inside the group. */
    this._items = new Set();
    this._disabled = false;
  }
  /** Whether starting a dragging sequence from inside this group is disabled. */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }

  ngOnDestroy() {
    this._items.clear();
  }

}

CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) {
  return new (t || CdkDropListGroup)();
};

CdkDropListGroup.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDropListGroup,
  selectors: [["", "cdkDropListGroup", ""]],
  inputs: {
    disabled: ["cdkDropListGroupDisabled", "disabled"]
  },
  exportAs: ["cdkDropListGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
    provide: CDK_DROP_LIST_GROUP,
    useExisting: CdkDropListGroup
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDropListGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: '[cdkDropListGroup]',
      exportAs: 'cdkDropListGroup',
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }]
    }]
  }], null, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListGroupDisabled']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to configure the
 * behavior of the drag&drop-related components.
 */


const CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CDK_DRAG_CONFIG');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Asserts that a particular node is an element.
 * @param node Node to be checked.
 * @param name Name to attach to the error message.
 */

function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. ` + `Currently attached to "${node.nodeName}".`);
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Counter used to generate unique ids for drop zones. */


let _uniqueIdCounter = 0;
/**
 * Injection token that can be used to reference instances of `CdkDropList`. It serves as
 * alternative token to the actual `CdkDropList` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

const CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDropList');
/** Container that wraps a set of draggable items. */

class CdkDropList {
  constructor(
  /** Element that the drop list is attached to. */
  element, dragDrop, _changeDetectorRef, _scrollDispatcher, _dir, _group, config) {
    this.element = element;
    this._changeDetectorRef = _changeDetectorRef;
    this._scrollDispatcher = _scrollDispatcher;
    this._dir = _dir;
    this._group = _group;
    /** Emits when the list has been destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Other draggable containers that this container is connected to and into which the
     * container's items can be transferred. Can either be references to other drop containers,
     * or their unique IDs.
     */

    this.connectedTo = [];
    /**
     * Unique ID for the drop zone. Can be used as a reference
     * in the `connectedTo` of another `CdkDropList`.
     */

    this.id = `cdk-drop-list-${_uniqueIdCounter++}`;
    /**
     * Function that is used to determine whether an item
     * is allowed to be moved into a drop container.
     */

    this.enterPredicate = () => true;
    /** Functions that is used to determine whether an item can be sorted into a particular index. */


    this.sortPredicate = () => true;
    /** Emits when the user drops an item inside the container. */


    this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /**
     * Emits when the user has moved a new drag item into this container.
     */

    this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /**
     * Emits when the user removes an item from the container
     * by dragging it into another container.
     */

    this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits as the user is swapping items while actively dragging. */

    this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /**
     * Keeps track of the items that are registered with this container. Historically we used to
     * do this with a `ContentChildren` query, however queries don't handle transplanted views very
     * well which means that we can't handle cases like dragging the headers of a `mat-table`
     * correctly. What we do instead is to have the items register themselves with the container
     * and then we sort them based on their position in the DOM.
     */

    this._unsortedItems = new Set();

    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      assertElementNode(element.nativeElement, 'cdkDropList');
    }

    this._dropListRef = dragDrop.createDropList(element);
    this._dropListRef.data = this;

    if (config) {
      this._assignDefaults(config);
    }

    this._dropListRef.enterPredicate = (drag, drop) => {
      return this.enterPredicate(drag.data, drop.data);
    };

    this._dropListRef.sortPredicate = (index, drag, drop) => {
      return this.sortPredicate(index, drag.data, drop.data);
    };

    this._setupInputSyncSubscription(this._dropListRef);

    this._handleEvents(this._dropListRef);

    CdkDropList._dropLists.push(this);

    if (_group) {
      _group._items.add(this);
    }
  }
  /** Whether starting a dragging sequence from this container is disabled. */


  get disabled() {
    return this._disabled || !!this._group && this._group.disabled;
  }

  set disabled(value) {
    // Usually we sync the directive and ref state right before dragging starts, in order to have
    // a single point of failure and to avoid having to use setters for everything. `disabled` is
    // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
    // the user in a disabled state, so we also need to sync it as it's being set.
    this._dropListRef.disabled = this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /** Registers an items with the drop list. */


  addItem(item) {
    this._unsortedItems.add(item);

    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef();
    }
  }
  /** Removes an item from the drop list. */


  removeItem(item) {
    this._unsortedItems.delete(item);

    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef();
    }
  }
  /** Gets the registered items in the list, sorted by their position in the DOM. */


  getSortedItems() {
    return Array.from(this._unsortedItems).sort((a, b) => {
      const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement()); // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
      // tslint:disable-next-line:no-bitwise


      return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
  }

  ngOnDestroy() {
    const index = CdkDropList._dropLists.indexOf(this);

    if (index > -1) {
      CdkDropList._dropLists.splice(index, 1);
    }

    if (this._group) {
      this._group._items.delete(this);
    }

    this._unsortedItems.clear();

    this._dropListRef.dispose();

    this._destroyed.next();

    this._destroyed.complete();
  }
  /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */


  _setupInputSyncSubscription(ref) {
    if (this._dir) {
      this._dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(this._dir.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(value => ref.withDirection(value));
    }

    ref.beforeStarted.subscribe(() => {
      const siblings = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(this.connectedTo).map(drop => {
        if (typeof drop === 'string') {
          const correspondingDropList = CdkDropList._dropLists.find(list => list.id === drop);

          if (!correspondingDropList && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
          }

          return correspondingDropList;
        }

        return drop;
      });

      if (this._group) {
        this._group._items.forEach(drop => {
          if (siblings.indexOf(drop) === -1) {
            siblings.push(drop);
          }
        });
      } // Note that we resolve the scrollable parents here so that we delay the resolution
      // as long as possible, ensuring that the element is in its final place in the DOM.


      if (!this._scrollableParentsResolved) {
        const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map(scrollable => scrollable.getElementRef().nativeElement);

        this._dropListRef.withScrollableParents(scrollableParents); // Only do this once since it involves traversing the DOM and the parents
        // shouldn't be able to change without the drop list being destroyed.


        this._scrollableParentsResolved = true;
      }

      ref.disabled = this.disabled;
      ref.lockAxis = this.lockAxis;
      ref.sortingDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(this.sortingDisabled);
      ref.autoScrollDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(this.autoScrollDisabled);
      ref.autoScrollStep = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(this.autoScrollStep, 2);
      ref.connectedTo(siblings.filter(drop => drop && drop !== this).map(list => list._dropListRef)).withOrientation(this.orientation);
    });
  }
  /** Handles events from the underlying DropListRef. */


  _handleEvents(ref) {
    ref.beforeStarted.subscribe(() => {
      this._syncItemsWithRef();

      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe(event => {
      this.entered.emit({
        container: this,
        item: event.item.data,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe(event => {
      this.exited.emit({
        container: this,
        item: event.item.data
      });

      this._changeDetectorRef.markForCheck();
    });
    ref.sorted.subscribe(event => {
      this.sorted.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        container: this,
        item: event.item.data
      });
    });
    ref.dropped.subscribe(event => {
      this.dropped.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        previousContainer: event.previousContainer.data,
        container: event.container.data,
        item: event.item.data,
        isPointerOverContainer: event.isPointerOverContainer,
        distance: event.distance,
        dropPoint: event.dropPoint
      }); // Mark for check since all of these events run outside of change
      // detection and we're not guaranteed for something else to have triggered it.

      this._changeDetectorRef.markForCheck();
    });
  }
  /** Assigns the default input values based on a provided config object. */


  _assignDefaults(config) {
    const {
      lockAxis,
      draggingDisabled,
      sortingDisabled,
      listAutoScrollDisabled,
      listOrientation
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
    this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
    this.orientation = listOrientation || 'vertical';

    if (lockAxis) {
      this.lockAxis = lockAxis;
    }
  }
  /** Syncs up the registered drag items with underlying drop list ref. */


  _syncItemsWithRef() {
    this._dropListRef.withItems(this.getSortedItems().map(item => item._dragRef));
  }

}
/** Keeps track of the drop lists that are currently on the page. */


CdkDropList._dropLists = [];

CdkDropList.ɵfac = function CdkDropList_Factory(t) {
  return new (t || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DROP_LIST_GROUP, 12), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8));
};

CdkDropList.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDropList,
  selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
  hostAttrs: [1, "cdk-drop-list"],
  hostVars: 7,
  hostBindings: function CdkDropList_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
    }
  },
  inputs: {
    connectedTo: ["cdkDropListConnectedTo", "connectedTo"],
    data: ["cdkDropListData", "data"],
    orientation: ["cdkDropListOrientation", "orientation"],
    id: "id",
    lockAxis: ["cdkDropListLockAxis", "lockAxis"],
    disabled: ["cdkDropListDisabled", "disabled"],
    sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"],
    enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"],
    sortPredicate: ["cdkDropListSortPredicate", "sortPredicate"],
    autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"],
    autoScrollStep: ["cdkDropListAutoScrollStep", "autoScrollStep"]
  },
  outputs: {
    dropped: "cdkDropListDropped",
    entered: "cdkDropListEntered",
    exited: "cdkDropListExited",
    sorted: "cdkDropListSorted"
  },
  exportAs: ["cdkDropList"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([// Prevent child drop lists from picking up the same group as their parent.
  {
    provide: CDK_DROP_LIST_GROUP,
    useValue: undefined
  }, {
    provide: CDK_DROP_LIST,
    useExisting: CdkDropList
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDropList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: '[cdkDropList], cdk-drop-list',
      exportAs: 'cdkDropList',
      providers: [// Prevent child drop lists from picking up the same group as their parent.
      {
        provide: CDK_DROP_LIST_GROUP,
        useValue: undefined
      }, {
        provide: CDK_DROP_LIST,
        useExisting: CdkDropList
      }],
      host: {
        'class': 'cdk-drop-list',
        '[attr.id]': 'id',
        '[class.cdk-drop-list-disabled]': 'disabled',
        '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
        '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
    }, {
      type: DragDrop
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollDispatcher
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }]
    }, {
      type: CdkDropListGroup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DROP_LIST_GROUP]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DRAG_CONFIG]
      }]
    }];
  }, {
    connectedTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListConnectedTo']
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListData']
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListOrientation']
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
    }],
    lockAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListLockAxis']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListDisabled']
    }],
    sortingDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListSortingDisabled']
    }],
    enterPredicate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListEnterPredicate']
    }],
    sortPredicate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListSortPredicate']
    }],
    autoScrollDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListAutoScrollDisabled']
    }],
    autoScrollStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListAutoScrollStep']
    }],
    dropped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDropListDropped']
    }],
    entered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDropListEntered']
    }],
    exited: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDropListExited']
    }],
    sorted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDropListSorted']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `CdkDragHandle`. It serves as
 * alternative token to the actual `CdkDragHandle` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


const CDK_DRAG_HANDLE = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDragHandle');
/** Handle that can be used to drag a CdkDrag instance. */

class CdkDragHandle {
  constructor(element, parentDrag) {
    this.element = element;
    /** Emits when the state of the handle has changed. */

    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this._disabled = false;

    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      assertElementNode(element.nativeElement, 'cdkDragHandle');
    }

    this._parentDrag = parentDrag;
  }
  /** Whether starting to drag through this handle is disabled. */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);

    this._stateChanges.next(this);
  }

  ngOnDestroy() {
    this._stateChanges.complete();
  }

}

CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) {
  return new (t || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12));
};

CdkDragHandle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDragHandle,
  selectors: [["", "cdkDragHandle", ""]],
  hostAttrs: [1, "cdk-drag-handle"],
  inputs: {
    disabled: ["cdkDragHandleDisabled", "disabled"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
    provide: CDK_DRAG_HANDLE,
    useExisting: CdkDragHandle
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDragHandle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: '[cdkDragHandle]',
      host: {
        'class': 'cdk-drag-handle'
      },
      providers: [{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DRAG_PARENT]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
      }]
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragHandleDisabled']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `CdkDragPlaceholder`. It serves as
 * alternative token to the actual `CdkDragPlaceholder` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


const CDK_DRAG_PLACEHOLDER = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDragPlaceholder');
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 */

class CdkDragPlaceholder {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }

}

CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) {
  return new (t || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef));
};

CdkDragPlaceholder.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDragPlaceholder,
  selectors: [["ng-template", "cdkDragPlaceholder", ""]],
  inputs: {
    data: "data"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
    provide: CDK_DRAG_PLACEHOLDER,
    useExisting: CdkDragPlaceholder
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDragPlaceholder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: 'ng-template[cdkDragPlaceholder]',
      providers: [{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `CdkDragPreview`. It serves as
 * alternative token to the actual `CdkDragPreview` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


const CDK_DRAG_PREVIEW = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDragPreview');
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 */

class CdkDragPreview {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._matchSize = false;
  }
  /** Whether the preview should preserve the same size as the item that is being dragged. */


  get matchSize() {
    return this._matchSize;
  }

  set matchSize(value) {
    this._matchSize = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }

}

CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) {
  return new (t || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef));
};

CdkDragPreview.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDragPreview,
  selectors: [["ng-template", "cdkDragPreview", ""]],
  inputs: {
    data: "data",
    matchSize: "matchSize"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
    provide: CDK_DRAG_PREVIEW,
    useExisting: CdkDragPreview
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDragPreview, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: 'ng-template[cdkDragPreview]',
      providers: [{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
    }],
    matchSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
    }]
  });
})();

const DRAG_HOST_CLASS = 'cdk-drag';
/** Element that can be moved inside a CdkDropList container. */

class CdkDrag {
  constructor(
  /** Element that the draggable is attached to. */
  element,
  /** Droppable container that the draggable is a part of. */
  dropContainer,
  /**
   * @deprecated `_document` parameter no longer being used and will be removed.
   * @breaking-change 12.0.0
   */
  _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef, _selfHandle, _parentDrag) {
    this.element = element;
    this.dropContainer = dropContainer;
    this._ngZone = _ngZone;
    this._viewContainerRef = _viewContainerRef;
    this._dir = _dir;
    this._changeDetectorRef = _changeDetectorRef;
    this._selfHandle = _selfHandle;
    this._parentDrag = _parentDrag;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the user starts dragging the item. */

    this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits when the user has released a drag item, before any animations have started. */

    this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits when the user stops dragging an item in the container. */

    this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits when the user has moved the item into a new container. */

    this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits when the user removes the item its container by dragging it into another container. */

    this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits when the user drops the item inside a container. */

    this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /**
     * Emits as the user is dragging the item. Use with caution,
     * because this event will fire for every pixel that the user has dragged.
     */

    this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(observer => {
      const subscription = this._dragRef.moved.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(movedEvent => ({
        source: this,
        pointerPosition: movedEvent.pointerPosition,
        event: movedEvent.event,
        delta: movedEvent.delta,
        distance: movedEvent.distance
      }))).subscribe(observer);

      return () => {
        subscription.unsubscribe();
      };
    });
    this._dragRef = dragDrop.createDrag(element, {
      dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
      pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
      zIndex: config === null || config === void 0 ? void 0 : config.zIndex
    });
    this._dragRef.data = this; // We have to keep track of the drag instances in order to be able to match an element to
    // a drag instance. We can't go through the global registry of `DragRef`, because the root
    // element could be different.

    CdkDrag._dragInstances.push(this);

    if (config) {
      this._assignDefaults(config);
    } // Note that usually the container is assigned when the drop list is picks up the item, but in
    // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
    // where there are no items on the first change detection pass, but the items get picked up as
    // soon as the user triggers another pass by dragging. This is a problem, because the item would
    // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
    // is too late since the two modes save different kinds of information. We work around it by
    // assigning the drop container both from here and the list.


    if (dropContainer) {
      this._dragRef._withDropContainer(dropContainer._dropListRef);

      dropContainer.addItem(this);
    }

    this._syncInputs(this._dragRef);

    this._handleEvents(this._dragRef);
  }
  /** Whether starting to drag this element is disabled. */


  get disabled() {
    return this._disabled || this.dropContainer && this.dropContainer.disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    this._dragRef.disabled = this._disabled;
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */


  getPlaceholderElement() {
    return this._dragRef.getPlaceholderElement();
  }
  /** Returns the root draggable element. */


  getRootElement() {
    return this._dragRef.getRootElement();
  }
  /** Resets a standalone drag item to its initial position. */


  reset() {
    this._dragRef.reset();
  }
  /**
   * Gets the pixel coordinates of the draggable outside of a drop container.
   */


  getFreeDragPosition() {
    return this._dragRef.getFreeDragPosition();
  }

  ngAfterViewInit() {
    // Normally this isn't in the zone, but it can cause major performance regressions for apps
    // using `zone-patch-rxjs` because it'll trigger a change detection when it unsubscribes.
    this._ngZone.runOutsideAngular(() => {
      // We need to wait for the zone to stabilize, in order for the reference
      // element to be in the proper place in the DOM. This is mostly relevant
      // for draggable elements inside portals since they get stamped out in
      // their original DOM position and then they get transferred to the portal.
      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(() => {
        this._updateRootElement();

        this._setupHandlesListener();

        if (this.freeDragPosition) {
          this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
      });
    });
  }

  ngOnChanges(changes) {
    const rootSelectorChange = changes['rootElementSelector'];
    const positionChange = changes['freeDragPosition']; // We don't have to react to the first change since it's being
    // handled in `ngAfterViewInit` where it needs to be deferred.

    if (rootSelectorChange && !rootSelectorChange.firstChange) {
      this._updateRootElement();
    } // Skip the first change since it's being handled in `ngAfterViewInit`.


    if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
      this._dragRef.setFreeDragPosition(this.freeDragPosition);
    }
  }

  ngOnDestroy() {
    if (this.dropContainer) {
      this.dropContainer.removeItem(this);
    }

    const index = CdkDrag._dragInstances.indexOf(this);

    if (index > -1) {
      CdkDrag._dragInstances.splice(index, 1);
    } // Unnecessary in most cases, but used to avoid extra change detections with `zone-paths-rxjs`.


    this._ngZone.runOutsideAngular(() => {
      this._destroyed.next();

      this._destroyed.complete();

      this._dragRef.dispose();
    });
  }
  /** Syncs the root element with the `DragRef`. */


  _updateRootElement() {
    var _a;

    const element = this.element.nativeElement;
    let rootElement = element;

    if (this.rootElementSelector) {
      rootElement = element.closest !== undefined ? element.closest(this.rootElementSelector) : // Comment tag doesn't have closest method, so use parent's one.
      (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.closest(this.rootElementSelector);
    }

    if (rootElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      assertElementNode(rootElement, 'cdkDrag');
    }

    this._dragRef.withRootElement(rootElement || element);
  }
  /** Gets the boundary element, based on the `boundaryElement` value. */


  _getBoundaryElement() {
    const boundary = this.boundaryElement;

    if (!boundary) {
      return null;
    }

    if (typeof boundary === 'string') {
      return this.element.nativeElement.closest(boundary);
    }

    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(boundary);
  }
  /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */


  _syncInputs(ref) {
    ref.beforeStarted.subscribe(() => {
      if (!ref.isDragging()) {
        const dir = this._dir;
        const dragStartDelay = this.dragStartDelay;
        const placeholder = this._placeholderTemplate ? {
          template: this._placeholderTemplate.templateRef,
          context: this._placeholderTemplate.data,
          viewContainer: this._viewContainerRef
        } : null;
        const preview = this._previewTemplate ? {
          template: this._previewTemplate.templateRef,
          context: this._previewTemplate.data,
          matchSize: this._previewTemplate.matchSize,
          viewContainer: this._viewContainerRef
        } : null;
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.dragStartDelay = typeof dragStartDelay === 'object' && dragStartDelay ? dragStartDelay : (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(dragStartDelay);
        ref.constrainPosition = this.constrainPosition;
        ref.previewClass = this.previewClass;
        ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || 'global');

        if (dir) {
          ref.withDirection(dir.value);
        }
      }
    }); // This only needs to be resolved once.

    ref.beforeStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(() => {
      var _a; // If we managed to resolve a parent through DI, use it.


      if (this._parentDrag) {
        ref.withParent(this._parentDrag._dragRef);
        return;
      } // Otherwise fall back to resolving the parent by looking up the DOM. This can happen if
      // the item was projected into another item by something like `ngTemplateOutlet`.


      let parent = this.element.nativeElement.parentElement;

      while (parent) {
        if (parent.classList.contains(DRAG_HOST_CLASS)) {
          ref.withParent(((_a = CdkDrag._dragInstances.find(drag => {
            return drag.element.nativeElement === parent;
          })) === null || _a === void 0 ? void 0 : _a._dragRef) || null);
          break;
        }

        parent = parent.parentElement;
      }
    });
  }
  /** Handles the events from the underlying `DragRef`. */


  _handleEvents(ref) {
    ref.started.subscribe(() => {
      this.started.emit({
        source: this
      }); // Since all of these events run outside of change detection,
      // we need to ensure that everything is marked correctly.

      this._changeDetectorRef.markForCheck();
    });
    ref.released.subscribe(() => {
      this.released.emit({
        source: this
      });
    });
    ref.ended.subscribe(event => {
      this.ended.emit({
        source: this,
        distance: event.distance,
        dropPoint: event.dropPoint
      }); // Since all of these events run outside of change detection,
      // we need to ensure that everything is marked correctly.

      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe(event => {
      this.entered.emit({
        container: event.container.data,
        item: this,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe(event => {
      this.exited.emit({
        container: event.container.data,
        item: this
      });
    });
    ref.dropped.subscribe(event => {
      this.dropped.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        previousContainer: event.previousContainer.data,
        container: event.container.data,
        isPointerOverContainer: event.isPointerOverContainer,
        item: this,
        distance: event.distance,
        dropPoint: event.dropPoint
      });
    });
  }
  /** Assigns the default input values based on a provided config object. */


  _assignDefaults(config) {
    const {
      lockAxis,
      dragStartDelay,
      constrainPosition,
      previewClass,
      boundaryElement,
      draggingDisabled,
      rootElementSelector,
      previewContainer
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.dragStartDelay = dragStartDelay || 0;

    if (lockAxis) {
      this.lockAxis = lockAxis;
    }

    if (constrainPosition) {
      this.constrainPosition = constrainPosition;
    }

    if (previewClass) {
      this.previewClass = previewClass;
    }

    if (boundaryElement) {
      this.boundaryElement = boundaryElement;
    }

    if (rootElementSelector) {
      this.rootElementSelector = rootElementSelector;
    }

    if (previewContainer) {
      this.previewContainer = previewContainer;
    }
  }
  /** Sets up the listener that syncs the handles with the drag ref. */


  _setupHandlesListener() {
    // Listen for any newly-added handles.
    this._handles.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(this._handles), // Sync the new handles with the DragRef.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(handles => {
      const childHandleElements = handles.filter(handle => handle._parentDrag === this).map(handle => handle.element); // Usually handles are only allowed to be a descendant of the drag element, but if
      // the consumer defined a different drag root, we should allow the drag element
      // itself to be a handle too.

      if (this._selfHandle && this.rootElementSelector) {
        childHandleElements.push(this.element);
      }

      this._dragRef.withHandles(childHandleElements);
    }), // Listen if the state of any of the handles changes.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(handles => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(...handles.map(item => {
        return item._stateChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(item));
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(handleInstance => {
      // Enabled/disable the handle that changed in the DragRef.
      const dragRef = this._dragRef;
      const handle = handleInstance.element.nativeElement;
      handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
    });
  }

}

CdkDrag._dragInstances = [];

CdkDrag.ɵfac = function CdkDrag_Factory(t) {
  return new (t || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DRAG_HANDLE, 10), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12));
};

CdkDrag.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDrag,
  selectors: [["", "cdkDrag", ""]],
  contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_PREVIEW, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_PLACEHOLDER, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_HANDLE, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx._previewTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx._placeholderTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx._handles = _t);
    }
  },
  hostAttrs: [1, "cdk-drag"],
  hostVars: 4,
  hostBindings: function CdkDrag_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
    }
  },
  inputs: {
    data: ["cdkDragData", "data"],
    lockAxis: ["cdkDragLockAxis", "lockAxis"],
    rootElementSelector: ["cdkDragRootElement", "rootElementSelector"],
    boundaryElement: ["cdkDragBoundary", "boundaryElement"],
    dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"],
    freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"],
    disabled: ["cdkDragDisabled", "disabled"],
    constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"],
    previewClass: ["cdkDragPreviewClass", "previewClass"],
    previewContainer: ["cdkDragPreviewContainer", "previewContainer"]
  },
  outputs: {
    started: "cdkDragStarted",
    released: "cdkDragReleased",
    ended: "cdkDragEnded",
    entered: "cdkDragEntered",
    exited: "cdkDragExited",
    dropped: "cdkDragDropped",
    moved: "cdkDragMoved"
  },
  exportAs: ["cdkDrag"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
    provide: CDK_DRAG_PARENT,
    useExisting: CdkDrag
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDrag, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: '[cdkDrag]',
      exportAs: 'cdkDrag',
      host: {
        'class': DRAG_HOST_CLASS,
        '[class.cdk-drag-disabled]': 'disabled',
        '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
      },
      providers: [{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DROP_LIST]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DRAG_CONFIG]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }]
    }, {
      type: DragDrop
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
    }, {
      type: CdkDragHandle,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Self
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DRAG_HANDLE]
      }]
    }, {
      type: CdkDrag,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DRAG_PARENT]
      }]
    }];
  }, {
    _handles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ContentChildren,
      args: [CDK_DRAG_HANDLE, {
        descendants: true
      }]
    }],
    _previewTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ContentChild,
      args: [CDK_DRAG_PREVIEW]
    }],
    _placeholderTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ContentChild,
      args: [CDK_DRAG_PLACEHOLDER]
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragData']
    }],
    lockAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragLockAxis']
    }],
    rootElementSelector: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragRootElement']
    }],
    boundaryElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragBoundary']
    }],
    dragStartDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragStartDelay']
    }],
    freeDragPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragFreeDragPosition']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragDisabled']
    }],
    constrainPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragConstrainPosition']
    }],
    previewClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragPreviewClass']
    }],
    previewContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragPreviewContainer']
    }],
    started: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragStarted']
    }],
    released: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragReleased']
    }],
    ended: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragEnded']
    }],
    entered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragEntered']
    }],
    exited: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragExited']
    }],
    dropped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragDropped']
    }],
    moved: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragMoved']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class DragDropModule {}

DragDropModule.ɵfac = function DragDropModule_Factory(t) {
  return new (t || DragDropModule)();
};

DragDropModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: DragDropModule
});
DragDropModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [DragDrop],
  imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkScrollableModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](DragDropModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule,
    args: [{
      declarations: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkScrollableModule, CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
      providers: [DragDrop]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 75939:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/keycodes.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "ALT": () => (/* binding */ ALT),
/* harmony export */   "APOSTROPHE": () => (/* binding */ APOSTROPHE),
/* harmony export */   "AT_SIGN": () => (/* binding */ AT_SIGN),
/* harmony export */   "B": () => (/* binding */ B),
/* harmony export */   "BACKSLASH": () => (/* binding */ BACKSLASH),
/* harmony export */   "BACKSPACE": () => (/* binding */ BACKSPACE),
/* harmony export */   "C": () => (/* binding */ C),
/* harmony export */   "CAPS_LOCK": () => (/* binding */ CAPS_LOCK),
/* harmony export */   "CLOSE_SQUARE_BRACKET": () => (/* binding */ CLOSE_SQUARE_BRACKET),
/* harmony export */   "COMMA": () => (/* binding */ COMMA),
/* harmony export */   "CONTEXT_MENU": () => (/* binding */ CONTEXT_MENU),
/* harmony export */   "CONTROL": () => (/* binding */ CONTROL),
/* harmony export */   "D": () => (/* binding */ D),
/* harmony export */   "DASH": () => (/* binding */ DASH),
/* harmony export */   "DELETE": () => (/* binding */ DELETE),
/* harmony export */   "DOWN_ARROW": () => (/* binding */ DOWN_ARROW),
/* harmony export */   "E": () => (/* binding */ E),
/* harmony export */   "EIGHT": () => (/* binding */ EIGHT),
/* harmony export */   "END": () => (/* binding */ END),
/* harmony export */   "ENTER": () => (/* binding */ ENTER),
/* harmony export */   "EQUALS": () => (/* binding */ EQUALS),
/* harmony export */   "ESCAPE": () => (/* binding */ ESCAPE),
/* harmony export */   "F": () => (/* binding */ F),
/* harmony export */   "F1": () => (/* binding */ F1),
/* harmony export */   "F10": () => (/* binding */ F10),
/* harmony export */   "F11": () => (/* binding */ F11),
/* harmony export */   "F12": () => (/* binding */ F12),
/* harmony export */   "F2": () => (/* binding */ F2),
/* harmony export */   "F3": () => (/* binding */ F3),
/* harmony export */   "F4": () => (/* binding */ F4),
/* harmony export */   "F5": () => (/* binding */ F5),
/* harmony export */   "F6": () => (/* binding */ F6),
/* harmony export */   "F7": () => (/* binding */ F7),
/* harmony export */   "F8": () => (/* binding */ F8),
/* harmony export */   "F9": () => (/* binding */ F9),
/* harmony export */   "FF_EQUALS": () => (/* binding */ FF_EQUALS),
/* harmony export */   "FF_MINUS": () => (/* binding */ FF_MINUS),
/* harmony export */   "FF_MUTE": () => (/* binding */ FF_MUTE),
/* harmony export */   "FF_SEMICOLON": () => (/* binding */ FF_SEMICOLON),
/* harmony export */   "FF_VOLUME_DOWN": () => (/* binding */ FF_VOLUME_DOWN),
/* harmony export */   "FF_VOLUME_UP": () => (/* binding */ FF_VOLUME_UP),
/* harmony export */   "FIRST_MEDIA": () => (/* binding */ FIRST_MEDIA),
/* harmony export */   "FIVE": () => (/* binding */ FIVE),
/* harmony export */   "FOUR": () => (/* binding */ FOUR),
/* harmony export */   "G": () => (/* binding */ G),
/* harmony export */   "H": () => (/* binding */ H),
/* harmony export */   "HOME": () => (/* binding */ HOME),
/* harmony export */   "I": () => (/* binding */ I),
/* harmony export */   "INSERT": () => (/* binding */ INSERT),
/* harmony export */   "J": () => (/* binding */ J),
/* harmony export */   "K": () => (/* binding */ K),
/* harmony export */   "L": () => (/* binding */ L),
/* harmony export */   "LAST_MEDIA": () => (/* binding */ LAST_MEDIA),
/* harmony export */   "LEFT_ARROW": () => (/* binding */ LEFT_ARROW),
/* harmony export */   "M": () => (/* binding */ M),
/* harmony export */   "MAC_ENTER": () => (/* binding */ MAC_ENTER),
/* harmony export */   "MAC_META": () => (/* binding */ MAC_META),
/* harmony export */   "MAC_WK_CMD_LEFT": () => (/* binding */ MAC_WK_CMD_LEFT),
/* harmony export */   "MAC_WK_CMD_RIGHT": () => (/* binding */ MAC_WK_CMD_RIGHT),
/* harmony export */   "META": () => (/* binding */ META),
/* harmony export */   "MUTE": () => (/* binding */ MUTE),
/* harmony export */   "N": () => (/* binding */ N),
/* harmony export */   "NINE": () => (/* binding */ NINE),
/* harmony export */   "NUMPAD_DIVIDE": () => (/* binding */ NUMPAD_DIVIDE),
/* harmony export */   "NUMPAD_EIGHT": () => (/* binding */ NUMPAD_EIGHT),
/* harmony export */   "NUMPAD_FIVE": () => (/* binding */ NUMPAD_FIVE),
/* harmony export */   "NUMPAD_FOUR": () => (/* binding */ NUMPAD_FOUR),
/* harmony export */   "NUMPAD_MINUS": () => (/* binding */ NUMPAD_MINUS),
/* harmony export */   "NUMPAD_MULTIPLY": () => (/* binding */ NUMPAD_MULTIPLY),
/* harmony export */   "NUMPAD_NINE": () => (/* binding */ NUMPAD_NINE),
/* harmony export */   "NUMPAD_ONE": () => (/* binding */ NUMPAD_ONE),
/* harmony export */   "NUMPAD_PERIOD": () => (/* binding */ NUMPAD_PERIOD),
/* harmony export */   "NUMPAD_PLUS": () => (/* binding */ NUMPAD_PLUS),
/* harmony export */   "NUMPAD_SEVEN": () => (/* binding */ NUMPAD_SEVEN),
/* harmony export */   "NUMPAD_SIX": () => (/* binding */ NUMPAD_SIX),
/* harmony export */   "NUMPAD_THREE": () => (/* binding */ NUMPAD_THREE),
/* harmony export */   "NUMPAD_TWO": () => (/* binding */ NUMPAD_TWO),
/* harmony export */   "NUMPAD_ZERO": () => (/* binding */ NUMPAD_ZERO),
/* harmony export */   "NUM_CENTER": () => (/* binding */ NUM_CENTER),
/* harmony export */   "NUM_LOCK": () => (/* binding */ NUM_LOCK),
/* harmony export */   "O": () => (/* binding */ O),
/* harmony export */   "ONE": () => (/* binding */ ONE),
/* harmony export */   "OPEN_SQUARE_BRACKET": () => (/* binding */ OPEN_SQUARE_BRACKET),
/* harmony export */   "P": () => (/* binding */ P),
/* harmony export */   "PAGE_DOWN": () => (/* binding */ PAGE_DOWN),
/* harmony export */   "PAGE_UP": () => (/* binding */ PAGE_UP),
/* harmony export */   "PAUSE": () => (/* binding */ PAUSE),
/* harmony export */   "PERIOD": () => (/* binding */ PERIOD),
/* harmony export */   "PLUS_SIGN": () => (/* binding */ PLUS_SIGN),
/* harmony export */   "PRINT_SCREEN": () => (/* binding */ PRINT_SCREEN),
/* harmony export */   "Q": () => (/* binding */ Q),
/* harmony export */   "QUESTION_MARK": () => (/* binding */ QUESTION_MARK),
/* harmony export */   "R": () => (/* binding */ R),
/* harmony export */   "RIGHT_ARROW": () => (/* binding */ RIGHT_ARROW),
/* harmony export */   "S": () => (/* binding */ S),
/* harmony export */   "SCROLL_LOCK": () => (/* binding */ SCROLL_LOCK),
/* harmony export */   "SEMICOLON": () => (/* binding */ SEMICOLON),
/* harmony export */   "SEVEN": () => (/* binding */ SEVEN),
/* harmony export */   "SHIFT": () => (/* binding */ SHIFT),
/* harmony export */   "SINGLE_QUOTE": () => (/* binding */ SINGLE_QUOTE),
/* harmony export */   "SIX": () => (/* binding */ SIX),
/* harmony export */   "SLASH": () => (/* binding */ SLASH),
/* harmony export */   "SPACE": () => (/* binding */ SPACE),
/* harmony export */   "T": () => (/* binding */ T),
/* harmony export */   "TAB": () => (/* binding */ TAB),
/* harmony export */   "THREE": () => (/* binding */ THREE),
/* harmony export */   "TILDE": () => (/* binding */ TILDE),
/* harmony export */   "TWO": () => (/* binding */ TWO),
/* harmony export */   "U": () => (/* binding */ U),
/* harmony export */   "UP_ARROW": () => (/* binding */ UP_ARROW),
/* harmony export */   "V": () => (/* binding */ V),
/* harmony export */   "VOLUME_DOWN": () => (/* binding */ VOLUME_DOWN),
/* harmony export */   "VOLUME_UP": () => (/* binding */ VOLUME_UP),
/* harmony export */   "W": () => (/* binding */ W),
/* harmony export */   "X": () => (/* binding */ X),
/* harmony export */   "Y": () => (/* binding */ Y),
/* harmony export */   "Z": () => (/* binding */ Z),
/* harmony export */   "ZERO": () => (/* binding */ ZERO),
/* harmony export */   "hasModifierKey": () => (/* binding */ hasModifierKey)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAC_ENTER = 3;
const BACKSPACE = 8;
const TAB = 9;
const NUM_CENTER = 12;
const ENTER = 13;
const SHIFT = 16;
const CONTROL = 17;
const ALT = 18;
const PAUSE = 19;
const CAPS_LOCK = 20;
const ESCAPE = 27;
const SPACE = 32;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const END = 35;
const HOME = 36;
const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const PLUS_SIGN = 43;
const PRINT_SCREEN = 44;
const INSERT = 45;
const DELETE = 46;
const ZERO = 48;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;
const SEVEN = 55;
const EIGHT = 56;
const NINE = 57;
const FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186
const FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187
const QUESTION_MARK = 63;
const AT_SIGN = 64;
const A = 65;
const B = 66;
const C = 67;
const D = 68;
const E = 69;
const F = 70;
const G = 71;
const H = 72;
const I = 73;
const J = 74;
const K = 75;
const L = 76;
const M = 77;
const N = 78;
const O = 79;
const P = 80;
const Q = 81;
const R = 82;
const S = 83;
const T = 84;
const U = 85;
const V = 86;
const W = 87;
const X = 88;
const Y = 89;
const Z = 90;
const META = 91; // WIN_KEY_LEFT
const MAC_WK_CMD_LEFT = 91;
const MAC_WK_CMD_RIGHT = 93;
const CONTEXT_MENU = 93;
const NUMPAD_ZERO = 96;
const NUMPAD_ONE = 97;
const NUMPAD_TWO = 98;
const NUMPAD_THREE = 99;
const NUMPAD_FOUR = 100;
const NUMPAD_FIVE = 101;
const NUMPAD_SIX = 102;
const NUMPAD_SEVEN = 103;
const NUMPAD_EIGHT = 104;
const NUMPAD_NINE = 105;
const NUMPAD_MULTIPLY = 106;
const NUMPAD_PLUS = 107;
const NUMPAD_MINUS = 109;
const NUMPAD_PERIOD = 110;
const NUMPAD_DIVIDE = 111;
const F1 = 112;
const F2 = 113;
const F3 = 114;
const F4 = 115;
const F5 = 116;
const F6 = 117;
const F7 = 118;
const F8 = 119;
const F9 = 120;
const F10 = 121;
const F11 = 122;
const F12 = 123;
const NUM_LOCK = 144;
const SCROLL_LOCK = 145;
const FIRST_MEDIA = 166;
const FF_MINUS = 173;
const MUTE = 173; // Firefox (Gecko) fires 181 for MUTE
const VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN
const VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP
const FF_MUTE = 181;
const FF_VOLUME_DOWN = 182;
const LAST_MEDIA = 183;
const FF_VOLUME_UP = 183;
const SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON
const EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS
const COMMA = 188;
const DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS
const PERIOD = 190;
const SLASH = 191;
const APOSTROPHE = 192;
const TILDE = 192;
const OPEN_SQUARE_BRACKET = 219;
const BACKSLASH = 220;
const CLOSE_SQUARE_BRACKET = 221;
const SINGLE_QUOTE = 222;
const MAC_META = 224;

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Checks whether a modifier key is pressed.
 * @param event Event to be checked.
 */
function hasModifierKey(event, ...modifiers) {
    if (modifiers.length) {
        return modifiers.some(modifier => event[modifier]);
    }
    return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 35837:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/observers.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdkObserveContent": () => (/* binding */ CdkObserveContent),
/* harmony export */   "ContentObserver": () => (/* binding */ ContentObserver),
/* harmony export */   "MutationObserverFactory": () => (/* binding */ MutationObserverFactory),
/* harmony export */   "ObserversModule": () => (/* binding */ ObserversModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 76484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 80823);





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */

class MutationObserverFactory {
  create(callback) {
    return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
  }

}

MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
  return new (t || MutationObserverFactory)();
};

MutationObserverFactory.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MutationObserverFactory,
  factory: MutationObserverFactory.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MutationObserverFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/** An injectable service that allows watching elements for changes to their content. */


class ContentObserver {
  constructor(_mutationObserverFactory) {
    this._mutationObserverFactory = _mutationObserverFactory;
    /** Keeps track of the existing MutationObservers so they can be reused. */

    this._observedElements = new Map();
  }

  ngOnDestroy() {
    this._observedElements.forEach((_, element) => this._cleanupObserver(element));
  }

  observe(elementOrRef) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(elementOrRef);
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      const stream = this._observeElement(element);

      const subscription = stream.subscribe(observer);
      return () => {
        subscription.unsubscribe();

        this._unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing MutationObserver if available, or creating a
   * new one if not.
   */


  _observeElement(element) {
    if (!this._observedElements.has(element)) {
      const stream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();

      const observer = this._mutationObserverFactory.create(mutations => stream.next(mutations));

      if (observer) {
        observer.observe(element, {
          characterData: true,
          childList: true,
          subtree: true
        });
      }

      this._observedElements.set(element, {
        observer,
        stream,
        count: 1
      });
    } else {
      this._observedElements.get(element).count++;
    }

    return this._observedElements.get(element).stream;
  }
  /**
   * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
   * observing this element.
   */


  _unobserveElement(element) {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element).count--;

      if (!this._observedElements.get(element).count) {
        this._cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying MutationObserver for the specified element. */


  _cleanupObserver(element) {
    if (this._observedElements.has(element)) {
      const {
        observer,
        stream
      } = this._observedElements.get(element);

      if (observer) {
        observer.disconnect();
      }

      stream.complete();

      this._observedElements.delete(element);
    }
  }

}

ContentObserver.ɵfac = function ContentObserver_Factory(t) {
  return new (t || ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MutationObserverFactory));
};

ContentObserver.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ContentObserver,
  factory: ContentObserver.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentObserver, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: MutationObserverFactory
    }];
  }, null);
})();
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */


class CdkObserveContent {
  constructor(_contentObserver, _elementRef, _ngZone) {
    this._contentObserver = _contentObserver;
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    /** Event emitted for each change in the element's content. */

    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._disabled = false;
    this._currentSubscription = null;
  }
  /**
   * Whether observing content is disabled. This option can be used
   * to disconnect the underlying MutationObserver until it is needed.
   */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  /** Debounce interval for emitting the changes. */


  get debounce() {
    return this._debounce;
  }

  set debounce(value) {
    this._debounce = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(value);

    this._subscribe();
  }

  ngAfterContentInit() {
    if (!this._currentSubscription && !this.disabled) {
      this._subscribe();
    }
  }

  ngOnDestroy() {
    this._unsubscribe();
  }

  _subscribe() {
    this._unsubscribe();

    const stream = this._contentObserver.observe(this._elementRef); // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
    // Consider brining it back inside the zone next time we're making breaking changes.
    // Bringing it back inside can cause things like infinite change detection loops and changed
    // after checked errors if people's code isn't handling it properly.


    this._ngZone.runOutsideAngular(() => {
      this._currentSubscription = (this.debounce ? stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(this.debounce)) : stream).subscribe(this.event);
    });
  }

  _unsubscribe() {
    var _a;

    (_a = this._currentSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
  }

}

CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
  return new (t || CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

CdkObserveContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkObserveContent,
  selectors: [["", "cdkObserveContent", ""]],
  inputs: {
    disabled: ["cdkObserveContentDisabled", "disabled"],
    debounce: "debounce"
  },
  outputs: {
    event: "cdkObserveContent"
  },
  exportAs: ["cdkObserveContent"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkObserveContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkObserveContent]',
      exportAs: 'cdkObserveContent'
    }]
  }], function () {
    return [{
      type: ContentObserver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    event: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['cdkObserveContent']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkObserveContentDisabled']
    }],
    debounce: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class ObserversModule {}

ObserversModule.ɵfac = function ObserversModule_Factory(t) {
  return new (t || ObserversModule)();
};

ObserversModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ObserversModule
});
ObserversModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MutationObserverFactory]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObserversModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [CdkObserveContent],
      declarations: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 28230:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_DataView.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 94727);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 84261);



/* Built-in method references that are verified to be native. */
var DataView = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'DataView');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataView);


/***/ }),

/***/ 69420:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_Promise.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 94727);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 84261);



/* Built-in method references that are verified to be native. */
var Promise = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Promise');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promise);


/***/ }),

/***/ 63538:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Set.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 94727);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 84261);



/* Built-in method references that are verified to be native. */
var Set = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Set');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Set);


/***/ }),

/***/ 57571:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_WeakMap.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 94727);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 84261);



/* Built-in method references that are verified to be native. */
var WeakMap = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'WeakMap');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeakMap);


/***/ }),

/***/ 75805:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayEach.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayEach);


/***/ }),

/***/ 28468:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_arrayFilter.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayFilter);


/***/ }),

/***/ 82784:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayPush.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayPush);


/***/ }),

/***/ 29065:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseAssign.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 1540);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ 24876);



/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssign);


/***/ }),

/***/ 76563:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 1540);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ 39274);



/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssignIn);


/***/ }),

/***/ 19702:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseClone.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_Stack.js */ 90246);
/* harmony import */ var _arrayEach_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_arrayEach.js */ 75805);
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_assignValue.js */ 21123);
/* harmony import */ var _baseAssign_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_baseAssign.js */ 29065);
/* harmony import */ var _baseAssignIn_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_baseAssignIn.js */ 76563);
/* harmony import */ var _cloneBuffer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_cloneBuffer.js */ 59097);
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_copyArray.js */ 77331);
/* harmony import */ var _copySymbols_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_copySymbols.js */ 14104);
/* harmony import */ var _copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_copySymbolsIn.js */ 64488);
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_getAllKeys.js */ 11922);
/* harmony import */ var _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_getAllKeysIn.js */ 24173);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_getTag.js */ 33221);
/* harmony import */ var _initCloneArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_initCloneArray.js */ 13530);
/* harmony import */ var _initCloneByTag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_initCloneByTag.js */ 84191);
/* harmony import */ var _initCloneObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_initCloneObject.js */ 65914);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 17191);
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isBuffer.js */ 28057);
/* harmony import */ var _isMap_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isMap.js */ 5088);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 19089);
/* harmony import */ var _isSet_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./isSet.js */ 59486);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./keys.js */ 24876);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./keysIn.js */ 39274);























/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if (isArr) {
    result = (0,_initCloneArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
    if (!isDeep) {
      return (0,_copyArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value, result);
    }
  } else {
    var tag = (0,_getTag_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value),
        isFunc = tag == funcTag || tag == genTag;

    if ((0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value)) {
      return (0,_cloneBuffer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : (0,_initCloneObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(value);
      if (!isDeep) {
        return isFlat
          ? (0,_copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__["default"])(value, (0,_baseAssignIn_js__WEBPACK_IMPORTED_MODULE_9__["default"])(result, value))
          : (0,_copySymbols_js__WEBPACK_IMPORTED_MODULE_10__["default"])(value, (0,_baseAssign_js__WEBPACK_IMPORTED_MODULE_11__["default"])(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = (0,_initCloneByTag_js__WEBPACK_IMPORTED_MODULE_12__["default"])(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if ((0,_isSet_js__WEBPACK_IMPORTED_MODULE_14__["default"])(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if ((0,_isMap_js__WEBPACK_IMPORTED_MODULE_15__["default"])(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_16__["default"] : _getAllKeys_js__WEBPACK_IMPORTED_MODULE_17__["default"])
    : (isFlat ? _keysIn_js__WEBPACK_IMPORTED_MODULE_18__["default"] : _keys_js__WEBPACK_IMPORTED_MODULE_19__["default"]);

  var props = isArr ? undefined : keysFunc(value);
  (0,_arrayEach_js__WEBPACK_IMPORTED_MODULE_20__["default"])(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    (0,_assignValue_js__WEBPACK_IMPORTED_MODULE_21__["default"])(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseClone);


/***/ }),

/***/ 6288:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_baseGetAllKeys.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ 82784);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 17191);



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? result : (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, symbolsFunc(object));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetAllKeys);


/***/ }),

/***/ 44774:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsMap.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ 33221);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 86567);



/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == mapTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsMap);


/***/ }),

/***/ 60694:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsSet.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ 33221);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 86567);



/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == setTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsSet);


/***/ }),

/***/ 962:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeys.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ 5908);
/* harmony import */ var _nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeys.js */ 70081);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return (0,_nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeys);


/***/ }),

/***/ 12695:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseTrim.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_trimmedEndIndex.js */ 51463);


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, (0,_trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string) + 1).replace(reTrimStart, '')
    : string;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTrim);


/***/ }),

/***/ 28653:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_cloneDataView.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ 57094);


/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneDataView);


/***/ }),

/***/ 43992:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneRegExp.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneRegExp);


/***/ }),

/***/ 64149:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneSymbol.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 194);


/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneSymbol);


/***/ }),

/***/ 14104:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_copySymbols.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 1540);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbols.js */ 65175);



/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_getSymbols_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copySymbols);


/***/ }),

/***/ 64488:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_copySymbolsIn.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 1540);
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbolsIn.js */ 8065);



/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copySymbolsIn);


/***/ }),

/***/ 11922:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ 6288);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ 65175);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ 24876);




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keys_js__WEBPACK_IMPORTED_MODULE_1__["default"], _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllKeys);


/***/ }),

/***/ 24173:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeysIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ 6288);
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbolsIn.js */ 8065);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ 39274);




/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"], _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllKeysIn);


/***/ }),

/***/ 65175:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getSymbols.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayFilter.js */ 28468);
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stubArray.js */ 30709);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return (0,_arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSymbols);


/***/ }),

/***/ 8065:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getSymbolsIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ 82784);
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_getPrototype.js */ 70118);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ 65175);
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stubArray.js */ 30709);





/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function(object) {
  var result = [];
  while (object) {
    (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, (0,_getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object));
    object = (0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object);
  }
  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSymbolsIn);


/***/ }),

/***/ 33221:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_getTag.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_DataView.js */ 28230);
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Map.js */ 83686);
/* harmony import */ var _Promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Promise.js */ 69420);
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_Set.js */ 63538);
/* harmony import */ var _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_WeakMap.js */ 57571);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_baseGetTag.js */ 4035);
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_toSource.js */ 66018);








/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
    mapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
    promiseCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
    setCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
    weakMapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"];

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"] && getTag(new _DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"](new ArrayBuffer(1))) != dataViewTag) ||
    (_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"] && getTag(new _Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]) != mapTag) ||
    (_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"] && getTag(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"].resolve()) != promiseTag) ||
    (_Set_js__WEBPACK_IMPORTED_MODULE_4__["default"] && getTag(new _Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]) != setTag) ||
    (_WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"] && getTag(new _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]) != weakMapTag)) {
  getTag = function(value) {
    var result = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTag);


/***/ }),

/***/ 13530:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneArray.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneArray);


/***/ }),

/***/ 84191:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneByTag.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ 57094);
/* harmony import */ var _cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cloneDataView.js */ 28653);
/* harmony import */ var _cloneRegExp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_cloneRegExp.js */ 43992);
/* harmony import */ var _cloneSymbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_cloneSymbol.js */ 64149);
/* harmony import */ var _cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cloneTypedArray.js */ 22856);






/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return (0,_cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return (0,_cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return (0,_cloneRegExp_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return (0,_cloneSymbol_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneByTag);


/***/ }),

/***/ 70081:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ 76854);


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.keys, Object);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeys);


/***/ }),

/***/ 51463:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_trimmedEndIndex.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trimmedEndIndex);


/***/ }),

/***/ 5846:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/cloneDeepWith.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseClone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseClone.js */ 19702);


/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.cloneWith` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @param {Function} [customizer] The function to customize cloning.
 * @returns {*} Returns the deep cloned value.
 * @see _.cloneWith
 * @example
 *
 * function customizer(value) {
 *   if (_.isElement(value)) {
 *     return value.cloneNode(true);
 *   }
 * }
 *
 * var el = _.cloneDeepWith(document.body, customizer);
 *
 * console.log(el === document.body);
 * // => false
 * console.log(el.nodeName);
 * // => 'BODY'
 * console.log(el.childNodes.length);
 * // => 20
 */
function cloneDeepWith(value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return (0,_baseClone_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneDeepWith);


/***/ }),

/***/ 88673:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/debounce.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ 19089);
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./now.js */ 80600);
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toNumber.js */ 79034);




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = (0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(wait) || 0;
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax((0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge((0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  }

  function debounced() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);


/***/ }),

/***/ 25780:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/isElement.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 86567);
/* harmony import */ var _isPlainObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isPlainObject.js */ 8978);



/**
 * Checks if `value` is likely a DOM element.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 * @example
 *
 * _.isElement(document.body);
 * // => true
 *
 * _.isElement('<body>');
 * // => false
 */
function isElement(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && value.nodeType === 1 && !(0,_isPlainObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isElement);


/***/ }),

/***/ 5088:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/isMap.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsMap.js */ 44774);
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ 7560);
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ 25986);




/* Node.js helper references. */
var nodeIsMap = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsMap) : _baseIsMap_js__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMap);


/***/ }),

/***/ 59486:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/isSet.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsSet.js */ 60694);
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ 7560);
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ 25986);




/* Node.js helper references. */
var nodeIsSet = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsSet) : _baseIsSet_js__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSet);


/***/ }),

/***/ 48455:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 4035);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 86567);



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    ((0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == symbolTag);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSymbol);


/***/ }),

/***/ 24876:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/keys.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ 87224);
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseKeys.js */ 962);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 53943);




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) : (0,_baseKeys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);


/***/ }),

/***/ 80600:
/*!***************************************!*\
  !*** ./node_modules/lodash-es/now.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 84261);


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Date.now();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (now);


/***/ }),

/***/ 30709:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubArray.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubArray);


/***/ }),

/***/ 69616:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/throttle.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce.js */ 88673);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 19089);



/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return (0,_debounce_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (throttle);


/***/ }),

/***/ 79034:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toNumber.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTrim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseTrim.js */ 12695);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ 19089);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ 48455);




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return NAN;
  }
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = (0,_baseTrim_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toNumber);


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_exam-preview_exam-preview_module_ts.js.map