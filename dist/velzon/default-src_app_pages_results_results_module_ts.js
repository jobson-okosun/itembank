"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([["default-src_app_pages_results_results_module_ts"],{

/***/ 61505:
/*!****************************************************************!*\
  !*** ./src/app/pages/results/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _items_models_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../items/models/result */ 13802);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-apexcharts */ 33142);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/table */ 68581);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/paginator */ 21066);
/* harmony import */ var _transcript_question_types_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transcript/question-types/mcq/mcq.component */ 81368);
/* harmony import */ var _transcript_question_types_mrq_mrq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transcript/question-types/mrq/mrq.component */ 12802);
/* harmony import */ var _transcript_question_types_close_dropdown_close_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transcript/question-types/close-dropdown/close-dropdown.component */ 26045);
/* harmony import */ var _transcript_question_types_cloze_text_cloze_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transcript/question-types/cloze-text/cloze-text.component */ 94870);
/* harmony import */ var _transcript_question_types_short_text_short_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../transcript/question-types/short-text/short-text.component */ 99627);
/* harmony import */ var _transcript_question_types_essay_essay_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../transcript/question-types/essay/essay.component */ 76083);
/* harmony import */ var _transcript_question_types_choice_matrix_choice_matrix_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../transcript/question-types/choice-matrix/choice-matrix.component */ 73273);
/* harmony import */ var _transcript_question_types_cloze_radio_cloze_radio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../transcript/question-types/cloze-radio/cloze-radio.component */ 93017);
/* harmony import */ var _transcript_question_types_yes_or_no_yes_or_no_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../transcript/question-types/yes-or-no/yes-or-no.component */ 38556);
/* harmony import */ var _transcript_question_types_true_or_false_true_or_false_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../transcript/question-types/true-or-false/true-or-false.component */ 95686);
/* harmony import */ var _transcript_question_types_ordering_ordering_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../transcript/question-types/ordering/ordering.component */ 27333);
/* harmony import */ var _transcript_question_types_matching_matching_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../transcript/question-types/matching/matching.component */ 36810);
/* harmony import */ var _transcript_question_types_label_image_with_text_label_image_with_text_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../transcript/question-types/label-image-with-text/label-image-with-text.component */ 47715);
/* harmony import */ var _transcript_question_types_label_image_with_dropdown_label_image_with_dropdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../transcript/question-types/label-image-with-dropdown/label-image-with-dropdown.component */ 9784);
/* harmony import */ var _transcript_question_types_label_image_drag_and_drop_label_image_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../transcript/question-types/label-image-drag-and-drop/label-image-drag-and-drop.component */ 8095);


































function DashboardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_ng_container_1_app_breadcrumbs_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-breadcrumbs", 101);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("breadcrumbItems", ctx_r2.breadCrumbItems);
  }
}

function DashboardComponent_ng_container_1_h3_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, ctx_r3.assessmentSummary.exam_name));
  }
}

function DashboardComponent_ng_container_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](2, 1, ctx_r4.assessmentSummary.start_date, "MMMM d, y 'at' h:mm a"));
  }
}

function DashboardComponent_ng_container_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](2, 1, ctx_r5.assessmentSummary.end_date, "MMMM d, y 'at' h:mm a"), "");
  }
}

function DashboardComponent_ng_container_1_option_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", item_r34.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r34.center_id, " ");
  }
}

function DashboardComponent_ng_container_1_option_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", item_r35.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r35.name, " ");
  }
}

function DashboardComponent_ng_container_1_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_ng_container_1_div_56_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r36.assessmentSummary.total_participants, " ");
  }
}

function DashboardComponent_ng_container_1_div_56_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r37.assessmentSummary.total_started, "");
  }
}

function DashboardComponent_ng_container_1_div_56_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r38.assessmentSummary.total_completed, "");
  }
}

function DashboardComponent_ng_container_1_div_56_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r39.assessmentSummary.total_suspended, "");
  }
}

function DashboardComponent_ng_container_1_div_56_span_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r40.assessmentSummary.total_absent, "");
  }
}

function DashboardComponent_ng_container_1_div_56_span_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r41.assessmentSummary.total_comp_time_added, "");
  }
}

function DashboardComponent_ng_container_1_div_56_span_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r42.assessmentSummary.total_timed_out, "");
  }
}

function DashboardComponent_ng_container_1_div_56_span_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r43.assessmentSummary.total_computer_swapped, "");
  }
}

function DashboardComponent_ng_container_1_div_56_span_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r44.assessmentSummary.total_relogin, "");
  }
}

function DashboardComponent_ng_container_1_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, " Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, DashboardComponent_ng_container_1_div_56_span_11_Template, 2, 1, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](17, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](20, " Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, DashboardComponent_ng_container_1_div_56_span_22_Template, 2, 1, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](24, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](28, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](30, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](31, " Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](33, DashboardComponent_ng_container_1_div_56_span_33_Template, 2, 1, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](34, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](35, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](36, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](37, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](38, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](39, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](40, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](41, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](42, " Suspended");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](44, DashboardComponent_ng_container_1_div_56_span_44_Template, 2, 1, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](45, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](46, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](47, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](48, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](49, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](50, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](51, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](52, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](53, " Absentees");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](54, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](55, DashboardComponent_ng_container_1_div_56_span_55_Template, 2, 1, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](56, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](57, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](58, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](59, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](60, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](61, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](62, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](63, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](64, " compensatory time");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](65, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](66, DashboardComponent_ng_container_1_div_56_span_66_Template, 2, 1, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](67, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](68, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](69, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](70, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](71, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](72, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](73, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](74, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](75, " Timed out");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](76, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](77, DashboardComponent_ng_container_1_div_56_span_77_Template, 2, 1, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](78, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](79, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](80, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](81, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](82, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](83, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](84, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](85, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](86, " System swaps");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](87, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](88, DashboardComponent_ng_container_1_div_56_span_88_Template, 2, 1, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](89, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](90, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](91, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](92, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](93, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](94, "i", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](95, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](96, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](97, " Re logins");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](98, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](99, DashboardComponent_ng_container_1_div_56_span_99_Template, 2, 1, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.assessmentSummary);
  }
}

function DashboardComponent_ng_container_1_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_ng_container_1_div_64_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", item_r49.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r49.center_id, " ");
  }
}

function DashboardComponent_ng_container_1_div_64_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", item_r50.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r50.name, " ");
  }
}

function DashboardComponent_ng_container_1_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 21, 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](7, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10, " Filter Score Analysis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15, "Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18, "--Select center --");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](19, DashboardComponent_ng_container_1_div_64_option_19_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](22, "Section*");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "select", 50, 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](26, "--Select section --");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](27, DashboardComponent_ng_container_1_div_64_option_27_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](28, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](30, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DashboardComponent_ng_container_1_div_64_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r52);

      const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](5);

      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      ctx_r51.applyScoreAnalysisFilter();
      return _r45.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](31, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](32, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DashboardComponent_ng_container_1_div_64_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r52);

      const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](5);

      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      ctx_r53.clearFilter("scoreanalysis");
      return _r45.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](33, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](35, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](36, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](37, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](38, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](39, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](42, "h6", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](43, "AVG. Raw Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](44, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](45, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](46, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](47, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](49, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](50, "h6", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](51, "AVG. Scaled Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](52, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](53, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](54, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](55, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](57, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](58, "h6", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](59, "Max Raw Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](60, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](61, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](62, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](63, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](65, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](66, "h6", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](67, "Min Raw Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](68, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](69, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](70, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](71, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](73, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](74, "h6", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](75, "Max Scaled Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](76, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](77, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](78, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](79, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](81, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](82, "h6", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](83, "Min Scaled Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](84, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](85, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](86, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](87, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](89, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](90, "h6", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](91, "Midian Raw Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](92, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](93, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](94, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](95, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](97, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](98, "h6", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](99, "Midian Scaled Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](100, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](101, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](102, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](103, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](105, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](106, "h6", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](107, "Upper Quartile Scaled Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](108, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](109, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](110, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](111, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](113, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](114, "h6", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](115, "Lower Quartile Scaled Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](116, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](117, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](118, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](119, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](121, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](122, "h6", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](123, "Standard Deviation Scaled Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("Score Analysis (", ctx_r12.scoreAnalysisFilterSubjectName, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r12.scoreAnalysisFilterForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r12.assessmentSummary == null ? null : ctx_r12.assessmentSummary.centers);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r12.assessmentSummary == null ? null : ctx_r12.assessmentSummary.sections);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r12.numberToPrecision(ctx_r12.scoreAnalysis.avg_raw_score), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r12.numberToPrecision(ctx_r12.scoreAnalysis.avg_scaled_score), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r12.scoreAnalysis.max_raw_score, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r12.scoreAnalysis.min_raw_score, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r12.scoreAnalysis.max_scaled_score, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r12.scoreAnalysis.min_scaled_score, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r12.scoreAnalysis.median_raw_score, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r12.numberToPrecision(ctx_r12.scoreAnalysis.median_scaled_score), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r12.numberToPrecision(ctx_r12.scoreAnalysis.upper_quartile_scaled_score), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r12.numberToPrecision(ctx_r12.scoreAnalysis.lower_quartile_scaled_score), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r12.numberToPrecision(ctx_r12.scoreAnalysis.std_dev_scaled_score), "% ");
  }
}

function DashboardComponent_ng_container_1_option_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", item_r54.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r54.center_id, " ");
  }
}

function DashboardComponent_ng_container_1_option_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", item_r55.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r55.name, " ");
  }
}

function DashboardComponent_ng_container_1_apx_chart_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "apx-chart", 140);
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("series", ctx_r16.scoreDistributionChart.series)("chart", ctx_r16.scoreDistributionChart.chart)("markers", ctx_r16.scoreDistributionChart.markers)("dataLabels", ctx_r16.scoreDistributionChart.dataLabels)("stroke", ctx_r16.scoreDistributionChart.stroke)("colors", ctx_r16.scoreDistributionChart.colors)("title", ctx_r16.scoreDistributionChart.title)("xaxis", ctx_r16.scoreDistributionChart.xaxis)("yaxis", ctx_r16.scoreDistributionChart.yaxis);
  }
}

function DashboardComponent_ng_container_1_button_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, " Downloading.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_ng_container_1_button_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DashboardComponent_ng_container_1_button_107_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r56.downloadTranscript();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "svg", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "path", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_ng_container_1_option_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", item_r58.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r58.name, " ");
  }
}

function DashboardComponent_ng_container_1_span_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Section (Subject) is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_ng_container_1_option_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", item_r59.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r59.center_id, " ");
  }
}

function DashboardComponent_ng_container_1_div_142_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
}

function DashboardComponent_ng_container_1_div_142_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, " No section selected yet! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_ng_container_1_div_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, DashboardComponent_ng_container_1_div_142_ng_container_1_Template, 7, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, DashboardComponent_ng_container_1_div_142_div_2_Template, 2, 0, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r23.isLoadingTranscript);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r23.isLoadingTranscript);
  }
}

function DashboardComponent_ng_container_1_div_143_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "th", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, " Fullname");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "p-sortIcon", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "p-columnFilter", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "th", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "Section");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "th", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8, " Mark(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](9, "p-sortIcon", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "th", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0) {
  return {
    "disable-click": a0
  };
};

function DashboardComponent_ng_container_1_div_143_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "td", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "td", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "td", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "td", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "button", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DashboardComponent_ng_container_1_div_143_ng_template_6_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r68);
      const participant_r66 = restoredCtx.$implicit;
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return ctx_r67.showTranscriptQuestionDetails(participant_r66.participantId, participant_r66.section, participant_r66.participantName, participant_r66.loginField, participant_r66.loginFieldValue);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](8, _c0, participant_r66.status !== "ENDED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 6, participant_r66.participantName));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"]("", participant_r66.loginField, ": ", participant_r66.loginFieldValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", participant_r66.section, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", participant_r66.score, " ");
  }
}

function DashboardComponent_ng_container_1_div_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "p-table", 152, 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, DashboardComponent_ng_container_1_div_143_ng_template_5_Template, 12, 0, "ng-template", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, DashboardComponent_ng_container_1_div_143_ng_template_6_Template, 15, 10, "ng-template", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", ctx_r24.formatedTranscriptData)("rowHover", true)("scrollable", true);
  }
}

function DashboardComponent_ng_container_1_div_145_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_ng_container_1_div_145_div_2_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DashboardComponent_ng_container_1_div_145_div_2_ng_container_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      ctx_r75.previousQuestionItem();
      return ctx_r75.scrollTransscriptQuestionsContainerToTop();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "i", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Prev ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DashboardComponent_ng_container_1_div_145_div_2_ng_container_11_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r76);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      ctx_r77.nextQuestionItem();
      return ctx_r77.scrollTransscriptQuestionsContainerToTop();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, " Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", ctx_r72.isPreviousDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", ctx_r72.isNextDisabled());
  }
}

function DashboardComponent_ng_container_1_div_145_div_2_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DashboardComponent_ng_container_1_div_145_div_2_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r79);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return ctx_r78.transcriptMode = "ALL";
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Show all questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_ng_container_1_div_145_div_2_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DashboardComponent_ng_container_1_div_145_div_2_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r81);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return ctx_r80.transcriptMode = "ONE";
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Show one question");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_ng_container_1_div_145_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, DashboardComponent_ng_container_1_div_145_div_2_ng_container_11_Template, 7, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](14, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](16, DashboardComponent_ng_container_1_div_145_div_2_button_16_Template, 2, 0, "button", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](17, DashboardComponent_ng_container_1_div_145_div_2_button_17_Template, 2, 0, "button", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 7, ctx_r70.selectedTranscriptUserInformation.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"]("", ctx_r70.selectedTranscriptUserInformation.loginField, ": ", ctx_r70.selectedTranscriptUserInformation.loginFieldValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r70.selectedTranscriptSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r70.transcriptMode === "ONE");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r70.transcriptMode === "ONE");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r70.transcriptMode !== "ONE");
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "mcq", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", ctx_r85.currentQuestion)("currentQuestionIndex", ctx_r85.currentQuestionIndex + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-mrq", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", ctx_r86.currentQuestion)("currentQuestionIndex", ctx_r86.currentQuestionIndex + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-close-dropdown", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", ctx_r87.currentQuestion)("currentQuestionIndex", ctx_r87.currentQuestionIndex + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-cloze-text", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", ctx_r88.currentQuestion)("currentQuestionIndex", ctx_r88.currentQuestionIndex + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-short-text", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", ctx_r89.currentQuestion)("currentQuestionIndex", ctx_r89.currentQuestionIndex + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-essay", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", ctx_r90.currentQuestion)("currentQuestionIndex", ctx_r90.currentQuestionIndex + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-essay", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", ctx_r91.currentQuestion)("currentQuestionIndex", ctx_r91.currentQuestionIndex + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-choice-matrix", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", ctx_r92.currentQuestion)("currentQuestionIndex", ctx_r92.currentQuestionIndex + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-cloze-radio", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", ctx_r93.currentQuestion)("currentQuestionIndex", ctx_r93.currentQuestionIndex + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-yes-or-no", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", ctx_r94.currentQuestion)("currentQuestionIndex", ctx_r94.currentQuestionIndex + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-true-or-false", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", ctx_r95.currentQuestion)("currentQuestionIndex", ctx_r95.currentQuestionIndex + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-ordering", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", ctx_r96.currentQuestion)("currentQuestionIndex", ctx_r96.currentQuestionIndex + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-matching", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", ctx_r97.currentQuestion)("currentQuestionIndex", ctx_r97.currentQuestionIndex + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-label-image-with-text", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", ctx_r98.currentQuestion)("currentQuestionIndex", ctx_r98.currentQuestionIndex + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-label-image-with-dropdown", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", ctx_r99.currentQuestion)("currentQuestionIndex", ctx_r99.currentQuestionIndex + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-label-image-drag-and-drop", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", ctx_r100.currentQuestion)("currentQuestionIndex", ctx_r100.currentQuestionIndex + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_2_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_3_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_4_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_5_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_6_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_7_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_8_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_9_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_10_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_11_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_12_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_13_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](14, DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_14_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](15, DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_15_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](16, DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_ng_container_16_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r82.currentQuestion == null ? null : ctx_r82.currentQuestion.item_score == null ? null : ctx_r82.currentQuestion.item_score.item_type) === ctx_r82.transcriptQuestionTypes.MCQ);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r82.currentQuestion == null ? null : ctx_r82.currentQuestion.item_score == null ? null : ctx_r82.currentQuestion.item_score.item_type) === ctx_r82.transcriptQuestionTypes.MRQ);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r82.currentQuestion == null ? null : ctx_r82.currentQuestion.item_score == null ? null : ctx_r82.currentQuestion.item_score.item_type) === ctx_r82.transcriptQuestionTypes.CLOZE_DROPDOWN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r82.currentQuestion == null ? null : ctx_r82.currentQuestion.item_score == null ? null : ctx_r82.currentQuestion.item_score.item_type) === ctx_r82.transcriptQuestionTypes.CLOZE_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r82.currentQuestion == null ? null : ctx_r82.currentQuestion.item_score == null ? null : ctx_r82.currentQuestion.item_score.item_type) === ctx_r82.transcriptQuestionTypes.SHORT_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r82.currentQuestion == null ? null : ctx_r82.currentQuestion.item_score == null ? null : ctx_r82.currentQuestion.item_score.item_type) === ctx_r82.transcriptQuestionTypes.ESSAY_PLAIN_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r82.currentQuestion == null ? null : ctx_r82.currentQuestion.item_score == null ? null : ctx_r82.currentQuestion.item_score.item_type) === ctx_r82.transcriptQuestionTypes.ESSAY_RICH_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r82.currentQuestion == null ? null : ctx_r82.currentQuestion.item_score == null ? null : ctx_r82.currentQuestion.item_score.item_type) === ctx_r82.transcriptQuestionTypes.CHOICE_MATRIX);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r82.currentQuestion == null ? null : ctx_r82.currentQuestion.item_score == null ? null : ctx_r82.currentQuestion.item_score.item_type) === ctx_r82.transcriptQuestionTypes.CLOZE_RADIO);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r82.currentQuestion == null ? null : ctx_r82.currentQuestion.item_score == null ? null : ctx_r82.currentQuestion.item_score.item_type) === ctx_r82.transcriptQuestionTypes.YES_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r82.currentQuestion == null ? null : ctx_r82.currentQuestion.item_score == null ? null : ctx_r82.currentQuestion.item_score.item_type) === ctx_r82.transcriptQuestionTypes.TRUE_FALSE);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r82.currentQuestion == null ? null : ctx_r82.currentQuestion.item_score == null ? null : ctx_r82.currentQuestion.item_score.item_type) === ctx_r82.transcriptQuestionTypes.ORDER_LIST);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r82.currentQuestion == null ? null : ctx_r82.currentQuestion.item_score == null ? null : ctx_r82.currentQuestion.item_score.item_type) === ctx_r82.transcriptQuestionTypes.ASSOCIATION);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r82.currentQuestion == null ? null : ctx_r82.currentQuestion.item_score == null ? null : ctx_r82.currentQuestion.item_score.item_type) === ctx_r82.transcriptQuestionTypes.CLOZE_TEXT_IMAGE);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r82.currentQuestion == null ? null : ctx_r82.currentQuestion.item_score == null ? null : ctx_r82.currentQuestion.item_score.item_type) === ctx_r82.transcriptQuestionTypes.CLOZE_DROPDOWN_IMAGE);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r82.currentQuestion == null ? null : ctx_r82.currentQuestion.item_score == null ? null : ctx_r82.currentQuestion.item_score.item_type) === ctx_r82.transcriptQuestionTypes.IMAGE_DRAG_AND_DROP);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_mcq_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "mcq", 184);
  }

  if (rf & 2) {
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const item_r102 = ctx_r120.$implicit;
    const i_r103 = ctx_r120.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", item_r102)("currentQuestionIndex", i_r103 + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_mrq_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-mrq", 184);
  }

  if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const item_r102 = ctx_r121.$implicit;
    const i_r103 = ctx_r121.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", item_r102)("currentQuestionIndex", i_r103 + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_close_dropdown_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-close-dropdown", 184);
  }

  if (rf & 2) {
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const item_r102 = ctx_r122.$implicit;
    const i_r103 = ctx_r122.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", item_r102)("currentQuestionIndex", i_r103 + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_cloze_text_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-cloze-text", 184);
  }

  if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const item_r102 = ctx_r123.$implicit;
    const i_r103 = ctx_r123.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", item_r102)("currentQuestionIndex", i_r103 + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_short_text_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-short-text", 184);
  }

  if (rf & 2) {
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const item_r102 = ctx_r124.$implicit;
    const i_r103 = ctx_r124.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", item_r102)("currentQuestionIndex", i_r103 + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_essay_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-essay", 184);
  }

  if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const item_r102 = ctx_r125.$implicit;
    const i_r103 = ctx_r125.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", item_r102)("currentQuestionIndex", i_r103 + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_essay_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-essay", 184);
  }

  if (rf & 2) {
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const item_r102 = ctx_r126.$implicit;
    const i_r103 = ctx_r126.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", item_r102)("currentQuestionIndex", i_r103 + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_choice_matrix_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-choice-matrix", 184);
  }

  if (rf & 2) {
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const item_r102 = ctx_r127.$implicit;
    const i_r103 = ctx_r127.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", item_r102)("currentQuestionIndex", i_r103 + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_cloze_radio_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-cloze-radio", 184);
  }

  if (rf & 2) {
    const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const item_r102 = ctx_r128.$implicit;
    const i_r103 = ctx_r128.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", item_r102)("currentQuestionIndex", i_r103 + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_yes_or_no_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-yes-or-no", 184);
  }

  if (rf & 2) {
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const item_r102 = ctx_r129.$implicit;
    const i_r103 = ctx_r129.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", item_r102)("currentQuestionIndex", i_r103 + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_true_or_false_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-true-or-false", 184);
  }

  if (rf & 2) {
    const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const item_r102 = ctx_r130.$implicit;
    const i_r103 = ctx_r130.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", item_r102)("currentQuestionIndex", i_r103 + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_ordering_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-ordering", 184);
  }

  if (rf & 2) {
    const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const item_r102 = ctx_r131.$implicit;
    const i_r103 = ctx_r131.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", item_r102)("currentQuestionIndex", i_r103 + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_matching_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-matching", 184);
  }

  if (rf & 2) {
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const item_r102 = ctx_r132.$implicit;
    const i_r103 = ctx_r132.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", item_r102)("currentQuestionIndex", i_r103 + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_label_image_with_text_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-label-image-with-text", 184);
  }

  if (rf & 2) {
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const item_r102 = ctx_r133.$implicit;
    const i_r103 = ctx_r133.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", item_r102)("currentQuestionIndex", i_r103 + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_label_image_with_dropdown_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-label-image-with-dropdown", 184);
  }

  if (rf & 2) {
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const item_r102 = ctx_r134.$implicit;
    const i_r103 = ctx_r134.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", item_r102)("currentQuestionIndex", i_r103 + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_label_image_drag_and_drop_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-label-image-drag-and-drop", 184);
  }

  if (rf & 2) {
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const item_r102 = ctx_r135.$implicit;
    const i_r103 = ctx_r135.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentQuestion", item_r102)("currentQuestionIndex", i_r103 + 1);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_mcq_1_Template, 1, 2, "mcq", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_mrq_2_Template, 1, 2, "app-mrq", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_close_dropdown_3_Template, 1, 2, "app-close-dropdown", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_cloze_text_4_Template, 1, 2, "app-cloze-text", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_short_text_5_Template, 1, 2, "app-short-text", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_essay_6_Template, 1, 2, "app-essay", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_essay_7_Template, 1, 2, "app-essay", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_choice_matrix_8_Template, 1, 2, "app-choice-matrix", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_cloze_radio_9_Template, 1, 2, "app-cloze-radio", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_yes_or_no_10_Template, 1, 2, "app-yes-or-no", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_true_or_false_11_Template, 1, 2, "app-true-or-false", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_ordering_12_Template, 1, 2, "app-ordering", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_matching_13_Template, 1, 2, "app-matching", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](14, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_label_image_with_text_14_Template, 1, 2, "app-label-image-with-text", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](15, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_label_image_with_dropdown_15_Template, 1, 2, "app-label-image-with-dropdown", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](16, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_app_label_image_drag_and_drop_16_Template, 1, 2, "app-label-image-drag-and-drop", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r102 = ctx.$implicit;
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (item_r102.item_score == null ? null : item_r102.item_score.item_type) === ctx_r101.transcriptQuestionTypes.MCQ);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (item_r102.item_score == null ? null : item_r102.item_score.item_type) === ctx_r101.transcriptQuestionTypes.MRQ);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (item_r102.item_score == null ? null : item_r102.item_score.item_type) === ctx_r101.transcriptQuestionTypes.CLOZE_DROPDOWN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (item_r102.item_score == null ? null : item_r102.item_score.item_type) === ctx_r101.transcriptQuestionTypes.CLOZE_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (item_r102.item_score == null ? null : item_r102.item_score.item_type) === ctx_r101.transcriptQuestionTypes.SHORT_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (item_r102.item_score == null ? null : item_r102.item_score.item_type) === ctx_r101.transcriptQuestionTypes.ESSAY_PLAIN_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (item_r102.item_score == null ? null : item_r102.item_score.item_type) === ctx_r101.transcriptQuestionTypes.ESSAY_RICH_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (item_r102.item_score == null ? null : item_r102.item_score.item_type) === ctx_r101.transcriptQuestionTypes.CHOICE_MATRIX);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (item_r102.item_score == null ? null : item_r102.item_score.item_type) === ctx_r101.transcriptQuestionTypes.CLOZE_RADIO);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (item_r102.item_score == null ? null : item_r102.item_score.item_type) === ctx_r101.transcriptQuestionTypes.YES_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (item_r102.item_score == null ? null : item_r102.item_score.item_type) === ctx_r101.transcriptQuestionTypes.TRUE_FALSE);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (item_r102.item_score == null ? null : item_r102.item_score.item_type) === ctx_r101.transcriptQuestionTypes.ORDER_LIST);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (item_r102.item_score == null ? null : item_r102.item_score.item_type) === ctx_r101.transcriptQuestionTypes.ASSOCIATION);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (item_r102.item_score == null ? null : item_r102.item_score.item_type) === ctx_r101.transcriptQuestionTypes.CLOZE_TEXT_IMAGE);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (item_r102.item_score == null ? null : item_r102.item_score.item_type) === ctx_r101.transcriptQuestionTypes.CLOZE_DROPDOWN_IMAGE);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (item_r102.item_score == null ? null : item_r102.item_score.item_type) === ctx_r101.transcriptQuestionTypes.IMAGE_DRAG_AND_DROP);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_ng_container_0_Template, 17, 16, "ng-container", 185);
  }

  if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r84.transcriptQuestions);
  }
}

function DashboardComponent_ng_container_1_div_145_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, DashboardComponent_ng_container_1_div_145_div_3_ng_container_1_Template, 17, 16, "ng-container", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, DashboardComponent_ng_container_1_div_145_div_3_ng_template_2_Template, 1, 1, "ng-template", null, 183, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](3);

    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r71.transcriptMode === "ONE")("ngIfElse", _r83);
  }
}

function DashboardComponent_ng_container_1_div_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, DashboardComponent_ng_container_1_div_145_div_1_Template, 6, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, DashboardComponent_ng_container_1_div_145_div_2_Template, 18, 9, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, DashboardComponent_ng_container_1_div_145_div_3_Template, 4, 2, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r25.isLoadingParticipantTranscript);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r25.transcriptQuestions && !ctx_r25.isLoadingParticipantTranscript);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r25.transcriptQuestions && !ctx_r25.isLoadingParticipantTranscript);
  }
}

function DashboardComponent_ng_container_1_button_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, " Downloading.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_ng_container_1_button_152_Template(rf, ctx) {
  if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DashboardComponent_ng_container_1_button_152_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r137);
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r136.downloadResult();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "svg", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "path", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_ng_container_1_option_169_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r138 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", item_r138.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r138.center_id, " ");
  }
}

function DashboardComponent_ng_container_1_option_176_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", item_r139.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r139.name, " ");
  }
}

function DashboardComponent_ng_container_1_option_183_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r140 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", item_r140);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r140.replaceAll("_", " "), " ");
  }
}

function DashboardComponent_ng_container_1_div_239_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_ng_container_1_div_241_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "th", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, " Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "p-sortIcon", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "p-columnFilter", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "th", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "th", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8, "Sections");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10, "Duration\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "th", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12, "\u00A0Timed\u00A0Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "th", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Comp.\u00A0Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "System\u00A0Swap");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18, "Login\u00A0Ips");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "th", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](20, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

const _c1 = function (a0, a1, a2) {
  return {
    "badge-soft-danger": a0,
    "badge-soft-warning": a1,
    "badge-soft-success": a2
  };
};

function DashboardComponent_ng_container_1_div_241_ng_template_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction3"](2, _c1, participant_r144.status.toUpperCase() === "NOT_STARTED", participant_r144.status.toUpperCase() === "STARTED", participant_r144.status.toUpperCase() === "ENDED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](participant_r144.status.split("_").join(" "));
  }
}

function DashboardComponent_ng_container_1_div_241_ng_template_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](participant_r144.center);
  }
}

function DashboardComponent_ng_container_1_div_241_ng_template_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "batch");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](participant_r144.batchName);
  }
}

function DashboardComponent_ng_container_1_div_241_ng_template_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "T. Attempts");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](participant_r144.attempted);
  }
}

function DashboardComponent_ng_container_1_div_241_ng_template_4_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "raw score");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](participant_r144.score);
  }
}

function DashboardComponent_ng_container_1_div_241_ng_template_4_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "scaled score");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](participant_r144.scaledScore);
  }
}

function DashboardComponent_ng_container_1_div_241_ng_template_4_div_21_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Section\u00A0Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "Total\u00A0Questions: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15, "Attempted: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](21, "Section\u00A0Score: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](27, "Section\u00A0Scaled\u00A0Score: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const section_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](section_r165.section_name.trim().replaceAll(" ", "\u00A0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](section_r165.total_items);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](section_r165.total_attempted);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](section_r165.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", section_r165.scaled_score, "%");
  }
}

function DashboardComponent_ng_container_1_div_241_ng_template_4_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, DashboardComponent_ng_container_1_div_241_ng_template_4_div_21_ng_template_5_Template, 31, 5, "ng-template", null, 222, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const section_r165 = ctx.$implicit;

    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](6);

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate1"]("popoverTitle", "Section: ", section_r165.section_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngbPopover", _r166);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", section_r165.section_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("Attempted: ", section_r165.total_attempted, "");
  }
}

function DashboardComponent_ng_container_1_div_241_ng_template_4_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "span", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](participant_r144.startTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](participant_r144.endTime);
  }
}

function DashboardComponent_ng_container_1_div_241_ng_template_4_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", participant_r144.systemSwaps, " Times ");
  }
}

function DashboardComponent_ng_container_1_div_241_ng_template_4_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;

    const _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](41);

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngbPopover", _r157);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", participant_r144 == null ? null : participant_r144.loginIps[0] == null ? null : participant_r144.loginIps[0].ip_address, " ");
  }
}

function DashboardComponent_ng_container_1_div_241_ng_template_4_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("Relogins: ", participant_r144.totalRelogins, "");
  }
}

function DashboardComponent_ng_container_1_div_241_ng_template_4_ng_template_40_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, "IP: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ipItem_r176 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](8, 2, ipItem_r176 == null ? null : ipItem_r176.time, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ipItem_r176 == null ? null : ipItem_r176.ip_address);
  }
}

function DashboardComponent_ng_container_1_div_241_ng_template_4_ng_template_40_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, DashboardComponent_ng_container_1_div_241_ng_template_4_ng_template_40_div_0_div_1_Template, 15, 5, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", participant_r144 == null ? null : participant_r144.loginIps);
  }
}

function DashboardComponent_ng_container_1_div_241_ng_template_4_ng_template_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10, "IP: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](7, 2, participant_r144.loginIps[0] == null ? null : participant_r144.loginIps[0].time, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](participant_r144.loginIps[0] == null ? null : participant_r144.loginIps[0].ip_address);
  }
}

function DashboardComponent_ng_container_1_div_241_ng_template_4_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, DashboardComponent_ng_container_1_div_241_ng_template_4_ng_template_40_div_0_Template, 2, 1, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, DashboardComponent_ng_container_1_div_241_ng_template_4_ng_template_40_div_1_Template, 14, 5, "div", 231);
  }

  if (rf & 2) {
    const participant_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (participant_r144 == null ? null : participant_r144.loginIps == null ? null : participant_r144.loginIps.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (participant_r144 == null ? null : participant_r144.loginIps == null ? null : participant_r144.loginIps.length) <= 1);
  }
}

const _c2 = function (a0, a1) {
  return {
    "text-danger": a0,
    "text-success": a1
  };
};

function DashboardComponent_ng_container_1_div_241_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "td", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, DashboardComponent_ng_container_1_div_241_ng_template_4_div_9_Template, 6, 6, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, DashboardComponent_ng_container_1_div_241_ng_template_4_div_10_Template, 5, 1, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, DashboardComponent_ng_container_1_div_241_ng_template_4_div_11_Template, 5, 1, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, DashboardComponent_ng_container_1_div_241_ng_template_4_div_12_Template, 5, 1, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "td", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](16, DashboardComponent_ng_container_1_div_241_ng_template_4_div_16_Template, 5, 1, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](17, DashboardComponent_ng_container_1_div_241_ng_template_4_div_17_Template, 5, 1, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "td", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, DashboardComponent_ng_container_1_div_241_ng_template_4_div_21_Template, 7, 4, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](25, DashboardComponent_ng_container_1_div_241_ng_template_4_ng_template_25_Template, 5, 2, "ng-template", null, 202, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](28, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](31, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](36, DashboardComponent_ng_container_1_div_241_ng_template_4_span_36_Template, 2, 1, "span", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](38, DashboardComponent_ng_container_1_div_241_ng_template_4_div_38_Template, 2, 2, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](39, DashboardComponent_ng_container_1_div_241_ng_template_4_div_39_Template, 2, 1, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](40, DashboardComponent_ng_container_1_div_241_ng_template_4_ng_template_40_Template, 2, 2, "ng-template", null, 206, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](43, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](44, "button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](45, "i", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](46, "ul", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](47, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](48, "a", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](49, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](50, " View result ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](51, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](52, "a", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](53, "i", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](54, " Download transcript");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r144 = ctx.$implicit;

    const _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](26);

    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 22, participant_r144.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"]("", participant_r144.loginField, ": ", participant_r144.loginFieldValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", participant_r144.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", participant_r144.center);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", participant_r144.batchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", participant_r144.attempted !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", participant_r144.score !== undefined || participant_r144.score !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", participant_r144.scaledScore !== undefined || participant_r144.scaledScore !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", participant_r144.sectionItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngbPopover", _r152);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", participant_r144.duration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction2"](24, _c2, participant_r144.timeout == "YES", participant_r144.timeout == "NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](participant_r144.timeout);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction2"](27, _c2, participant_r144.compTimedOut == "YES", participant_r144.compTimedOut == "NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](participant_r144.compTimedOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", participant_r144.computerSwaped, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", participant_r144.systemSwaps > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", participant_r144 == null ? null : participant_r144.loginIps);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", participant_r144.relogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("routerLink", "/examalpha/exams/", ctx_r143.assessmentId, "/results/", participant_r144.participantId, "/result");
  }
}

function DashboardComponent_ng_container_1_div_241_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "p-table", 189, 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, DashboardComponent_ng_container_1_div_241_ng_template_3_Template, 21, 0, "ng-template", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, DashboardComponent_ng_container_1_div_241_ng_template_4_Template, 55, 30, "ng-template", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", ctx_r33.participants);
  }
}

const _c3 = function (a0) {
  return {
    row: a0
  };
};

const _c4 = function (a0, a1) {
  return {
    "col-lg-6": a0,
    "col-lg-12": a1
  };
};

const _c5 = function (a0) {
  return {
    "d-none": a0
  };
};

const _c6 = function () {
  return [10, 100, 200, 500];
};

const _c7 = function () {
  return [10, 50, 100, 200];
};

function DashboardComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, DashboardComponent_ng_container_1_app_breadcrumbs_1_Template, 1, 1, "app-breadcrumbs", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, DashboardComponent_ng_container_1_h3_5_Template, 3, 3, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, " Exam Delivery:\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "ON_PREMISE_WITH SECURE_BROWSER");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17, "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](18, DashboardComponent_ng_container_1_span_18_Template, 3, 4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](21, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](23, "End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](24, DashboardComponent_ng_container_1_span_24_Template, 3, 4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "div", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](28, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](30, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](31, " Filter Assessment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](32, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](33, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](34, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](35, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](36, "Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](37, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](38, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](39, "--Select center --");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](40, DashboardComponent_ng_container_1_option_40_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](41, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](42, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](43, "Batch");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](44, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](45, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](46, "-- Select batch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](47, DashboardComponent_ng_container_1_option_47_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](48, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](49, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](50, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DashboardComponent_ng_container_1_Template_button_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r181);

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](26);

      const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      ctx_r180.applyAssementFilter();
      return _r6.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](51, " Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](52, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DashboardComponent_ng_container_1_Template_button_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r181);

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](26);

      const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      ctx_r182.clearFilter("assessment");
      return _r6.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](53, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](54, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](55, DashboardComponent_ng_container_1_div_55_Template, 6, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](56, DashboardComponent_ng_container_1_div_56_Template, 100, 9, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](57, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](58, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](59, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](60, "Overall Performance");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](61, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](62, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](63, DashboardComponent_ng_container_1_div_63_Template, 6, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](64, DashboardComponent_ng_container_1_div_64_Template, 124, 15, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](65, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](66, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](67, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](69, "div", 21, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](71, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](72, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](73, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](74, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](75, " Filter Score distribution ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](76, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](77, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](78, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](79, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](80, "Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](81, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](82, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](83, "--Select center --");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](84, DashboardComponent_ng_container_1_option_84_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](85, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](86, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](87, "Section*");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](88, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](89, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](90, "--Select section --");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](91, DashboardComponent_ng_container_1_option_91_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](92, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](93, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](94, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DashboardComponent_ng_container_1_Template_button_click_94_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r181);

      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](70);

      const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      ctx_r183.applyDistributionFilter();
      return _r13.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](95, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](96, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DashboardComponent_ng_container_1_Template_button_click_96_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r181);

      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](70);

      const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      ctx_r184.clearFilter("distribution");
      return _r13.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](97, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](98, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](99, DashboardComponent_ng_container_1_apx_chart_99_Template, 1, 9, "apx-chart", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](100, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](101, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](102, "h4", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](103, "Transcript");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](104, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](105, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](106, DashboardComponent_ng_container_1_button_106_Template, 3, 0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](107, DashboardComponent_ng_container_1_button_107_Template, 3, 0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](108, "div", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](110, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](111, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](112, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](113, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](114, "Filter Transcript");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](115, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](116, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](117, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](118, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](119, "Section*");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](120, "select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](121, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](122, "--Select section --");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](123, DashboardComponent_ng_container_1_option_123_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](124, DashboardComponent_ng_container_1_span_124_Template, 2, 0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](125, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](126, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](127, "Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](128, "select", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](129, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](130, "--Select center --");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](131, DashboardComponent_ng_container_1_option_131_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](132, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](133, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](134, "Login Field");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](135, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](136, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](137, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](138, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DashboardComponent_ng_container_1_Template_button_click_138_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r181);

      const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](109);

      const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      ctx_r185.applyTranscriptFilter();
      return _r19.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](139, " Apply Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](140, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](141, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](142, DashboardComponent_ng_container_1_div_142_Template, 3, 2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](143, DashboardComponent_ng_container_1_div_143_Template, 7, 3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](144, "p-paginator", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("onPageChange", function DashboardComponent_ng_container_1_Template_p_paginator_onPageChange_144_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r181);
      const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r186.onTranscriptPageChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](145, DashboardComponent_ng_container_1_div_145_Template, 4, 3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](146, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](147, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](148, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](149);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](150, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](151, DashboardComponent_ng_container_1_button_151_Template, 3, 0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](152, DashboardComponent_ng_container_1_button_152_Template, 3, 0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](153, "div", 58, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](155, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](156, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](157, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](158, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](159, "Filter Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](160, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](161, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](162, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](163, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](164, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](165, "Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](166, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](167, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](168, "--Select center --");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](169, DashboardComponent_ng_container_1_option_169_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](170, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](171, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](172, "Batch");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](173, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](174, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](175, "-- Select batch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](176, DashboardComponent_ng_container_1_option_176_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](177, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](178, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](179, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](180, "select", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](181, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](182, "-- Select status --");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](183, DashboardComponent_ng_container_1_option_183_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](184, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](185, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](186, "Login field");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](187, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](188, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](189, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](190, "Score(%) greater than");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](191, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](192, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](193, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](194, "Score(%) lesser than");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](195, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](196, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](197, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](198, "Questions attempted greater than");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](199, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](200, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](201, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](202, "Questions attempted lesser than");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](203, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](204, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](205, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](206, "Assessment Duration greater than");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](207, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](208, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](209, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](210, "Assessment Duration lesser than");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](211, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](212, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](213, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](214, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](215, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](216, "Present ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](217, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](218, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](219, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](220, "Relogin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](221, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](222, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](223, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](224, "Timed Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](225, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](226, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](227, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](228, "Suspended ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](229, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](230, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](231, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](232, "Compasatory Time Added ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](233, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](234, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](235, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DashboardComponent_ng_container_1_Template_button_click_235_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r181);

      const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](154);

      const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      ctx_r187.applyParticipantListFilter();
      return _r28.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](236, " Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](237, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DashboardComponent_ng_container_1_Template_button_click_237_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r181);

      const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](154);

      const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      ctx_r188.clearFilter("participant");
      return _r28.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](238, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](239, DashboardComponent_ng_container_1_div_239_Template, 6, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](240, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](241, DashboardComponent_ng_container_1_div_241_Template, 5, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](242, "p-paginator", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("onPageChange", function DashboardComponent_ng_container_1_Template_p_paginator_onPageChange_242_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r181);
      const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r189.onParticipantPageChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r1.assessmentFilterForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.assessmentSummary == null ? null : ctx_r1.assessmentSummary.centers);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.assessmentSummary == null ? null : ctx_r1.assessmentSummary.batches);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isLoadingAssessment);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.isLoadingAssessment);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isLoadingAnalysis);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.isLoadingAnalysis);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("Score Distribution (", ctx_r1.scoreDistributionFilterSubjectName, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r1.scoreDistributionFilterForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.assessmentSummary == null ? null : ctx_r1.assessmentSummary.centers);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.assessmentSummary == null ? null : ctx_r1.assessmentSummary.sections);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.scoreDistribution);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.downloadingTranscript);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.transcriptData && !ctx_r1.downloadingTranscript);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r1.transcriptFilterForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.assessmentSummary == null ? null : ctx_r1.assessmentSummary.sections);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.transcriptFilterForm.get("section").invalid && ctx_r1.transcriptFilterForm.get("section").touched && ctx_r1.transcriptFilterForm.get("section").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.assessmentSummary == null ? null : ctx_r1.assessmentSummary.centers);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](49, _c3, ctx_r1.showTranscriptQuestion));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction2"](51, _c4, ctx_r1.showTranscriptQuestion, !ctx_r1.showTranscriptQuestion));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.transcriptData);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.transcriptData);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](54, _c5, !ctx_r1.transcriptData))("first", 0)("totalRecords", ctx_r1.transcriptData && ctx_r1.transcriptData.total)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](56, _c6))("rows", 10)("pageLinkSize", 10)("showCurrentPageReport", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.showTranscriptQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("Participants List (", ctx_r1.participantList.total, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.downloadingResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.participantList && !ctx_r1.downloadingResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r1.participantsListFilterForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.assessmentSummary == null ? null : ctx_r1.assessmentSummary.centers);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.assessmentSummary == null ? null : ctx_r1.assessmentSummary.batches);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.participantStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isLoadingParticipants);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.participantList && !ctx_r1.isLoadingParticipants);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](57, _c5, !ctx_r1.participantList))("first", 0)("totalRecords", ctx_r1.participantList ? ctx_r1.participantList.total : 0)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](59, _c7))("rows", 10)("showCurrentPageReport", true);
  }
}

class DashboardComponent {
  constructor(ar, dataService, sanitizer, notifier) {
    this.ar = ar;
    this.dataService = dataService;
    this.sanitizer = sanitizer;
    this.notifier = notifier;
    this.questions = [];
    this.failed = [];
    this.passed = [];
    this.grade = [];
    this.scoreAnalysis = null;
    this.transcriptData = null;
    this.isLoadingAnalysis = false;
    this.isLoadingDistribution = false;
    this.isLoadingAssessment = false;
    this.scoreDistribution = null;
    this.loadingDashboardResources = false;
    this.assessmentSummary = null;
    this.isLoadingTranscript = false;
    this.isLoadingParticipantTranscript = false;
    this.showTranscriptQuestion = false;
    this.transcriptQuestions = null;
    this.transcriptQuestionTypes = _items_models_result__WEBPACK_IMPORTED_MODULE_1__.QUESTION_TYPES;
    this.participantStatus = Object.values(_items_models_result__WEBPACK_IMPORTED_MODULE_1__.PARTICIPANT_STATUS);
    this.currentQuestionIndex = 0;
    this.currentQuestion = null;
    this.selectedTranscriptSection = '';
    this.selectedTranscriptParticipantName = '';
    this.transcriptFilterParams = {
      section_id: '',
      page: 0,
      size: 10
    };
    this.isLoadingParticipants = false;
    this.participantList = null;
    this.participants = [];
    this.participantFilterParams = {
      page: 0,
      size: 10
    };
    this.scoreAnalysisFilterSubjectName = 'ALL';
    this.scoreDistributionFilterSubjectName = 'ALL';
    this.downloadingResult = false;
    this.transcriptMode = 'ONE';
    this.currentTranscriptParams = {};
    this.downloadingTranscript = false;
  }

  ngOnInit() {
    this.getAssessmentId();
    this.fetchDashboardData();
  }

  getAssessmentId() {
    this.ar.paramMap.subscribe(route => {
      // console.log(route)
      this.assessmentId = route.get('exam_id');
    });
  }

  initializeBreadCrumbs() {
    this.breadCrumbItems = [{
      label: 'Reports',
      active: false
    }, {
      label: this.assessmentSummary.exam_name,
      active: false
    }, {
      label: 'Result',
      active: true
    }];
  }

  fetchDashboardData() {
    var _this = this;

    this.loadingDashboardResources = true;
    const requests = {
      assessmentSummary: this.dataService.getAssessmentSummary(this.assessmentId),
      scoreAnalysis: this.dataService.getScoreAnalysis(this.assessmentId),
      scoreDistribution: this.dataService.getScoreDistribution(this.assessmentId),
      participants: this.dataService.getParticipants(this.assessmentId, this.participantFilterParams)
    };
    (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.forkJoin)(requests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.catchError)(err => {
      console.log('Error! Unable to fetch dashboard assessment report.', err);
      this.loadingDashboardResources = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)({
        assessmentSummary: [],
        scoreAnalysis: [],
        scoreDistribution: [],
        participants: []
      });
    })).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
        assessmentSummary,
        scoreAnalysis,
        scoreDistribution,
        participants
      }) {
        _this.assessmentSummary = assessmentSummary;
        _this.scoreDistribution = scoreDistribution;
        _this.scoreAnalysis = scoreAnalysis;

        _this.updateParticipantsData(participants);

        _this.initializeBreadCrumbs();

        _this.initalizeScoreDistributionChart();

        _this.loadingDashboardResources = false;

        _this.initFilterForms();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  initFilterForms() {
    this.assessmentFilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroup({
      center_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      batch_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('')
    });
    this.scoreDistributionFilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroup({
      center_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      section_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('')
    });
    this.scoreAnalysisFilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroup({
      center_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      section_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('')
    });
    this.transcriptFilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroup({
      section: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
      center: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      loginField: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('')
    });
    this.participantsListFilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroup({
      center_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      section_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      present: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      batch_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      score_scaled_greater_than: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      score_scaled_less_than: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      attempts_greater_than: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      attempts_less_than: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      duration_greater_than: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      duration_less_than: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      re_login: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      status: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      time_out: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      suspended_: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      login_field_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      comp_time_added: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('')
    });
  }

  applyTranscriptFilter() {
    if (this.transcriptFilterForm.invalid) return this.transcriptFilterForm.markAllAsTouched();
    this.isLoadingTranscript = true;
    this.showTranscriptQuestion = true;
    this.transcriptData = null;
    const {
      section,
      center,
      loginField
    } = this.transcriptFilterForm.value;
    const params = Object.assign(Object.assign({}, this.transcriptFilterParams), {
      section_id: section
    });

    if (center) {
      params.center_id = center;
    }

    if (loginField) {
      params.login_field_value = loginField;
    }

    this.dataService.getTranscriptParticipants(this.assessmentId, params).subscribe(res => this.initializeTranscriptTable(res), () => this.isLoadingTranscript = false);
  }

  initializeTranscriptTable(res) {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.transcriptMode = 'ONE';
      const data = res.content.map(item => {
        var _a, _b, _c, _d;

        const participantName = `${(_a = item.reg_fields['FIRST NAME']) !== null && _a !== void 0 ? _a : 'N/A'} ${(_b = item.reg_fields['LAST NAME']) !== null && _b !== void 0 ? _b : 'N/A'}`;
        const participantSection = (_d = (_c = item.score) === null || _c === void 0 ? void 0 : _c.section_scores) === null || _d === void 0 ? void 0 : _d.find(scoreItem => {
          return scoreItem.section_id == _this2.transcriptFilterForm.get('section').value;
        });
        const tableData = {
          participantName,
          section: participantSection === null || participantSection === void 0 ? void 0 : participantSection.section_name,
          score: participantSection === null || participantSection === void 0 ? void 0 : participantSection.score,
          status: item.status,
          participantId: item.participants_id,
          sectionId: participantSection === null || participantSection === void 0 ? void 0 : participantSection.section_id,
          loginField: item === null || item === void 0 ? void 0 : item.login_field,
          loginFieldValue: item === null || item === void 0 ? void 0 : item.reg_fields[item === null || item === void 0 ? void 0 : item.login_field]
        };
        return tableData;
      });
      _this2.formatedTranscriptData = data;
      _this2.transcriptData = res;
      _this2.isLoadingTranscript = false;
    })();
  }

  onTranscriptPageChange(event) {
    this.transcriptFilterParams = Object.assign(Object.assign({}, this.transcriptFilterParams), {
      size: event.rows,
      page: event.page * event.rows
    });
    this.applyTranscriptFilter();
  }

  showTranscriptQuestionDetails(participantId, section, name, loginField, loginFieldValue) {
    const participant = this.formatedTranscriptData.find(item => item.participantId == participantId);
    if (!participant || participant.status !== 'ENDED') return;
    this.showTranscriptQuestion = true;
    this.isLoadingParticipantTranscript = true;
    this.currentTranscriptParams = {
      assessmentId: this.assessmentId,
      sectionId: participant.sectionId,
      participantId: participant.participantId
    };
    this.dataService.getParticipantTranscript(this.assessmentId, participant.sectionId, participant.participantId).subscribe(res => {
      // res = JSONP as any
      this.transcriptQuestions = res;
      this.currentQuestion = res[0];
      this.currentQuestionIndex = 0;
      this.selectedTranscriptSection = section;
      this.selectedTranscriptParticipantName = name;
      this.selectedTranscriptUserInformation = {
        name,
        loginField,
        loginFieldValue
      }; // console.log(this.selectedTranscriptUserInformation)

      this.isLoadingParticipantTranscript = false;
    }, () => {
      this.isLoadingParticipantTranscript = false;
    });
  }

  updateCurrentQuestionItem() {
    this.currentQuestion = this.transcriptQuestions[this.currentQuestionIndex];
  }

  nextQuestionItem() {
    if (this.currentQuestionIndex < this.transcriptQuestions.length - 1) {
      this.currentQuestionIndex++;
      this.updateCurrentQuestionItem();
    }
  }

  previousQuestionItem() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.updateCurrentQuestionItem();
    }
  }

  isPreviousDisabled() {
    return this.currentQuestionIndex === 0;
  }

  isNextDisabled() {
    return this.currentQuestionIndex === this.transcriptQuestions.length - 1;
  }

  applyParticipantListFilter() {
    if (this.participantsListFilterForm.invalid) {
      this.participantsListFilterForm.markAllAsTouched();
      return;
    }

    const params = Object.assign({}, this.participantFilterParams);
    const formValues = this.participantsListFilterForm.value;
    Object.keys(formValues).forEach(key => {
      const value = formValues[key];

      if (value !== null && value !== undefined && value !== '') {
        params[key] = value;
      }
    });
    this.isLoadingParticipants = true;
    this.dataService.getParticipants(this.assessmentId, params).subscribe(res => this.updateParticipantsData(res), () => this.isLoadingParticipants = false);
  }

  updateParticipantsData(data) {
    var _this3 = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const formatParticipantList = yield _this3.formatParticipantData(data.content);
      _this3.participants = formatParticipantList;
      _this3.participantList = data;
      _this3.isLoadingParticipants = false;
    })();
  }

  onParticipantPageChange(event) {
    this.participantFilterParams = Object.assign(Object.assign({}, this.participantFilterParams), {
      size: event.rows,
      page: event.page * event.rows
    });
    this.applyParticipantListFilter();
  }

  applyAssementFilter() {
    if (this.assessmentFilterForm.invalid) return this.assessmentFilterForm.markAllAsTouched();
    const {
      center_id,
      batch_id
    } = this.assessmentFilterForm.value;
    const params = {};

    if (center_id) {
      params.center_id = center_id;
    }

    if (batch_id) {
      params.batch_id = batch_id;
    }

    this.isLoadingAssessment = true;
    this.dataService.getAssessmentSummary(this.assessmentId, params).subscribe({
      next: res => {
        this.assessmentSummary = res;
        this.isLoadingAssessment = false;
      },
      error: err => {
        this.isLoadingAssessment = false;
      }
    });
  }

  applyScoreAnalysisFilter() {
    var _a;

    if (this.scoreAnalysisFilterForm.invalid) return this.scoreAnalysisFilterForm.markAllAsTouched();
    const {
      center_id,
      section_id
    } = this.scoreAnalysisFilterForm.value;
    this.scoreAnalysisFilterSubjectName = section_id ? ((_a = this.assessmentSummary) === null || _a === void 0 ? void 0 : _a.sections.find(item => item.id == section_id)).name : 'ALL';
    const params = {};

    if (center_id) {
      params.center_id = center_id;
    }

    if (section_id) {
      params.section_id = section_id;
    }

    this.isLoadingAnalysis = true;
    this.dataService.getScoreAnalysis(this.assessmentId, params).subscribe({
      next: res => {
        this.isLoadingAnalysis = false;
        this.scoreAnalysis = res;
      },
      error: err => {
        this.isLoadingAnalysis = false;
      }
    });
  }

  applyDistributionFilter() {
    var _a;

    if (this.scoreDistributionFilterForm.invalid) return this.scoreDistributionFilterForm.markAllAsTouched();
    const {
      center_id,
      section_id
    } = this.scoreDistributionFilterForm.value;
    this.scoreDistributionFilterSubjectName = section_id ? ((_a = this.assessmentSummary) === null || _a === void 0 ? void 0 : _a.sections.find(item => item.id == section_id)).name : 'ALL';
    const params = {};

    if (center_id) {
      params.center_id = center_id;
    }

    if (section_id) {
      params.section_id = section_id;
    }

    this.dataService.getScoreDistribution(this.assessmentId, params).subscribe(res => {
      this.scoreDistribution = res;
      this.initalizeScoreDistributionChart();
    });
  }

  numberToPrecision(num) {
    return num === null || num === void 0 ? void 0 : num.toFixed(1);
  }

  formatParticipantData(participants) {
    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const participantList = participants === null || participants === void 0 ? void 0 : participants.map(item => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;

        const formatDateTime = isoString => {
          if (!isoString) return '';
          const date = new Date(isoString);
          return date.toLocaleString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          });
        };

        const durationMinutes = item.logins_ips ? ((_a = item.logins_ips) === null || _a === void 0 ? void 0 : _a.duration) !== null ? `${(_b = item.logins_ips) === null || _b === void 0 ? void 0 : _b.duration} mins` : 'N/A' : 'N/A';
        const participantName = `${(_c = item.reg_fields['FIRST NAME']) !== null && _c !== void 0 ? _c : ''} ${(_d = item.reg_fields['LAST NAME']) !== null && _d !== void 0 ? _d : ''}`;
        const sectionItems = (_f = (_e = item === null || item === void 0 ? void 0 : item.score) === null || _e === void 0 ? void 0 : _e.section_scores) !== null && _f !== void 0 ? _f : [];
        const sectionItemsMap = sectionItems.map(sectionItem => {
          var _a, _b, _c;

          const attempt = (_b = (_a = item === null || item === void 0 ? void 0 : item.section_attempts) === null || _a === void 0 ? void 0 : _a.sections) === null || _b === void 0 ? void 0 : _b.find(attempt => attempt.id === sectionItem.section_id);
          return Object.assign(Object.assign({}, sectionItem), {
            total_attempted: (_c = attempt === null || attempt === void 0 ? void 0 : attempt.total_attempted) !== null && _c !== void 0 ? _c : 0
          });
        });
        const distinctLoginIps = new Set((_h = (_g = item.logins_ips) === null || _g === void 0 ? void 0 : _g.ip_addresses) === null || _h === void 0 ? void 0 : _h.map(ip => ip === null || ip === void 0 ? void 0 : ip.ip_address));
        return {
          name: participantName,
          score: (_j = item.score) === null || _j === void 0 ? void 0 : _j.score,
          scaledScore: (_k = item.score) === null || _k === void 0 ? void 0 : _k.scaled_score,
          sectionItems: sectionItemsMap,
          avg: (_l = item.score) === null || _l === void 0 ? void 0 : _l.scaled_score,
          timeout: item.timed_out ? 'YES' : 'NO',
          compTimedOut: item.comp_time_added ? 'YES' : 'NO',
          computerSwaped: item.computer_swapped ? 'YES' : 'NO',
          batchName: item.batch_name,
          duration: durationMinutes,
          startTime: item.logins_ips ? formatDateTime(item.logins_ips.initial_login) : 'N/A',
          endTime: item.logins_ips ? formatDateTime(item.logins_ips.end_time) : 'N/A',
          center: item.center_id,
          sectionGroup: item.group_name,
          attempted: ((_m = item.section_attempts) === null || _m === void 0 ? void 0 : _m.total_attempted) !== null ? (_o = item.section_attempts) === null || _o === void 0 ? void 0 : _o.total_attempted : false,
          systemSwaps: distinctLoginIps.size,
          status: item.status.toLowerCase(),
          loginField: item === null || item === void 0 ? void 0 : item.login_field,
          loginFieldValue: item === null || item === void 0 ? void 0 : item.reg_fields[item === null || item === void 0 ? void 0 : item.login_field],
          loginIps: (_p = item === null || item === void 0 ? void 0 : item.logins_ips) === null || _p === void 0 ? void 0 : _p.ip_addresses,
          participantId: item.participants_id,
          totalRelogins: (_r = (_q = item === null || item === void 0 ? void 0 : item.logins_ips) === null || _q === void 0 ? void 0 : _q.ip_addresses) === null || _r === void 0 ? void 0 : _r.length,
          relogin: item.re_login
        };
      });
      return participantList;
    })();
  }

  clearFilter(target) {
    if (target == 'participant') {
      this.participantsListFilterForm.reset();
      this.applyParticipantListFilter();
    }

    if (target == 'assessment') {
      this.assessmentFilterForm.reset();
      this.applyAssementFilter();
    }

    if (target == 'distribution') {
      this.scoreDistributionFilterForm.reset();
      this.applyDistributionFilter();
    }

    if (target == 'scoreanalysis') {
      this.scoreAnalysisFilterForm.reset();
      this.applyScoreAnalysisFilter();
    }
  }

  downloadResult() {
    var _this4 = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b;

      try {
        _this4.downloadingResult = true;
        const params = Object.assign({}, _this4.participantFilterParams);
        const formValues = _this4.participantsListFilterForm.value;
        Object.keys(formValues).forEach(key => {
          const value = formValues[key];

          if (value !== null && value !== undefined && value !== '') {
            params[key] = value;
          }
        });
        const response = yield _this4.dataService.downloadResult(_this4.assessmentId, params);

        if (!response.ok) {
          _this4.downloadingResult = false;
          throw new Error();
        }

        const data = yield response.text();
        const blob = new Blob([data], {
          type: 'text/csv'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${(_b = (_a = _this4.assessmentSummary) === null || _a === void 0 ? void 0 : _a.exam_name) !== null && _b !== void 0 ? _b : 'assessment'}-result-${Date.now()}.csv`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        _this4.downloadingResult = false;
      } catch (error) {
        _this4.downloadingResult = false;

        _this4.notifier.notify('error', `${error.error.message}`);
      }
    })();
  }

  downloadTranscript() {
    var _this5 = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b, _c, _d;

      try {
        _this5.downloadingTranscript = true;
        const {
          section,
          center,
          loginField
        } = _this5.transcriptFilterForm.value;
        const params = Object.assign(Object.assign({}, _this5.transcriptFilterParams), {
          section_id: section
        });

        if (center) {
          params.center_id = center;
        }

        if (loginField) {
          params.login_field_value = loginField;
        }

        const selectedSection = (_a = _this5.assessmentSummary) === null || _a === void 0 ? void 0 : _a.sections.find(item => item.id === section);
        const response = yield _this5.dataService.downloadTranscript(_this5.assessmentId, (_b = selectedSection === null || selectedSection === void 0 ? void 0 : selectedSection.name) !== null && _b !== void 0 ? _b : 'section', params);

        if (!response.ok) {
          _this5.downloadingTranscript = false;
          throw new Error('Transcript download failed');
        }

        const blob = yield response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${(_d = (_c = _this5.assessmentSummary) === null || _c === void 0 ? void 0 : _c.exam_name) !== null && _d !== void 0 ? _d : 'assessment'}-transcript-${Date.now()}.zip`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        _this5.downloadingTranscript = false;
      } catch (error) {
        _this5.downloadingTranscript = false;

        _this5.notifier.notify('error', 'Transcript download failed');
      }
    })();
  }

  initalizeScoreDistributionChart() {
    this._scoreDistributionChart('["--vz-success"]');
  }

  getChartColorsArray(colors) {
    colors = JSON.parse(colors);
    return colors.map(function (value) {
      var newValue = value.replace(' ', '');

      if (newValue.indexOf(',') === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);

        if (color) {
          color = color.replace(' ', '');
          return color;
        } else return newValue;
      } else {
        var val = value.split(',');

        if (val.length == 2) {
          var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
          rgbaColor = 'rgba(' + rgbaColor + ',' + val[1] + ')';
          return rgbaColor;
        } else {
          return newValue;
        }
      }
    });
  }

  _scoreDistributionChart(colors) {
    colors = this.getChartColorsArray(colors);
    this.scoreDistributionChart = {
      series: [{
        name: 'Frequency',
        data: this.scoreDistribution ? Object.values(this.scoreDistribution) : [5, 2, 2, 10, 19, 15, 8, 1, 4, 2]
      }],
      chart: {
        height: 300,
        type: 'area',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      markers: {
        size: 5
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      colors: colors,
      title: {
        align: 'left',
        style: {
          fontWeight: 500
        }
      },
      xaxis: {
        name: 'Percentage',
        categories: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        title: {
          text: 'Percentage Score'
        }
      },
      yaxis: {
        title: {
          text: 'Participants/Frequency'
        }
      }
    };
  }

  scrollTransscriptQuestionsContainerToTop() {
    const container = document.getElementById('transcript-subjects');

    if (container) {
      container.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  } // for testing


  useMockData() {
    this.assessmentSummary = {
      total_participants: 1501,
      total_started: 0,
      total_completed: 0,
      total_suspended: 0,
      total_absent: 1501,
      exam_name: 'JUNE TEST  EXAM',
      start_date: '2025-06-13T18:00:00',
      end_date: '2025-06-20T15:00:00',
      duration: 40,
      delivery_method: 'ON_PREMISE_NO_SECURE_BROWSER',
      exam_id: '0197695a-247b-7b2d-87d4-8a8615a708a6',
      total_timed_out: 0,
      total_computer_swapped: 0,
      total_comp_time_added: 0,
      total_relogin: 0,
      sections: [],
      batches: [],
      centers: []
    };
    this.participants = [{
      name: 'Okoisor Ochael',
      avg: 89.5,
      score: 100,
      duration: '180 mins',
      startTime: '25 Oct 2022: 11:00AM',
      endTime: '25 Oct 2022: 01:00PM',
      center: '800',
      sectionGroup: 'ENG & MATH',
      attempted: '182',
      infractions: 1,
      systemSwaps: 2,
      sections: [{
        name: 'section 1',
        analysis: {
          overallPercentage: 100,
          percentageFail: 42,
          percentagePass: 58,
          rawScore: 58
        }
      }, {
        name: 'section 2',
        analysis: {
          overallPercentage: 100,
          percentageFail: 42,
          percentagePass: 58,
          rawScore: 58
        }
      }, {
        name: 'section 3',
        analysis: {
          overallPercentage: 100,
          percentageFail: 42,
          percentagePass: 58,
          rawScore: 58
        }
      }, {
        name: 'section 4',
        analysis: {
          overallPercentage: 100,
          percentageFail: 42,
          percentagePass: 58,
          rawScore: 58
        }
      }, {
        name: 'section 5',
        analysis: {
          overallPercentage: 100,
          percentageFail: 42,
          percentagePass: 58,
          rawScore: 58
        }
      }, {
        name: 'section 6',
        analysis: {
          overallPercentage: 100,
          percentageFail: 42,
          percentagePass: 58,
          rawScore: 58
        }
      }, {
        name: 'section 7',
        analysis: {
          overallPercentage: 100,
          percentageFail: 42,
          percentagePass: 58,
          rawScore: 58
        }
      }, {
        name: 'section 8',
        analysis: {
          overallPercentage: 100,
          percentageFail: 42,
          percentagePass: 58,
          rawScore: 58
        }
      }],
      status: 'completed'
    }, {
      name: 'Mercy Eke',
      avg: '29.5',
      score: '29',
      duration: '60 mins',
      startTime: '25 Oct 2022: 11:00AM',
      endTime: '25 Oct 2022: 12:00PM',
      center: '700',
      sectionGroup: 'CHEM & MATH',
      attempted: '50',
      infractions: '5',
      sections: [{
        name: 'section 1',
        analysis: {
          overallPercentage: 100,
          percentageFail: 32,
          percentagePass: 68,
          rawScore: 68
        }
      }, {
        name: 'section 2',
        analysis: {
          overallPercentage: 100,
          percentageFail: 62,
          percentagePass: 38,
          rawScore: 38
        }
      }, {
        name: 'section 3',
        analysis: {
          overallPercentage: 100,
          percentageFail: 50,
          percentagePass: 50,
          rawScore: 50
        }
      }, {
        name: 'section 4',
        analysis: {
          overallPercentage: 100,
          percentageFail: 49,
          percentagePass: 51,
          rawScore: 51
        }
      }],
      status: 'completed'
    }];

    this._scoreDistributionChart('["--vz-success"]');

    this.initializeBreadCrumbs();
  }

}

DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_26__.NotifierService));
};

DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 2,
  vars: 2,
  consts: [["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "visually-hidden"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"], [3, "breadcrumbItems", 4, "ngIf"], [1, "card", "p-3"], [1, "row", "align-items-end"], [1, "col-lg-6"], ["class", "modal-title", 4, "ngIf"], [1, "d-flex", "text-secondary", "fs-12", 2, "cursor", "pointer"], [1, "fs-12"], [1, "col-lg-6", "px-3"], [1, "d-flex", "align-items-center", "justify-content-end"], [1, "d-flex", "gap-5", "fs-12", "text-secondary", "justify-content-end", 2, "cursor", "pointer"], [1, "d-inline-block", "rounded-circle", "bg-success", 2, "width", "10px", "height", "10px"], [1, "fw-bold", "text-black", "small"], ["class", "text-secondary", 4, "ngIf"], [1, "d-inline-block", "rounded-circle", "bg-danger", 2, "width", "10px", "height", "10px"], ["ngbDropdown", "", 1, "dropdown"], ["assessmentDropdown", "ngbDropdown"], ["id", "dropdownMenuLink1", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "text-muted", "arrow-none"], [1, "ri-more-2-fill", "align-middle", "me-2", "fs-18", "fw-bold", "text-dark", 2, "cursor", "pointer"], ["ngbDropdownMenu", "", 1, "border", "shadow-sm", 2, "min-width", "300px"], [1, "px-3", "py-2", "small", "text-black"], [1, "dropdown-divider"], [1, "px-3", "py-1", 3, "formGroup"], [1, "mb-2"], ["for", "center", 1, "small"], ["formControlName", "center_id", 1, "form-control", "control-input"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "batch", 1, "small"], ["formControlName", "batch_id", 1, "form-control", "control-input"], [1, "px-3", "d-flex", "gap-1"], ["type", "button", 1, "btn", "btn-primary", "w-100", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "mt-4"], ["class", "d-flex flex-column align-items-center justify-content-center gap-2 p-5", 4, "ngIf"], ["class", "row ", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-2", "mt-3"], [1, "modal-title"], [1, "d-flex", "flex-column", "flex-lg-row", "gap-3", "py-4"], [1, "col-lg-6", "p-3", "rounded", "border"], [1, "col-lg-6", "border", "rounded", "p-3"], [1, "d-flex", "justify-content-between"], [1, "fw-bold", "text-black"], ["scoreDistributionDrop", "ngbDropdown"], ["formControlName", "section_id", 1, "form-control", "control-input"], [1, "px-3", "px-3", "d-flex", "gap-1"], [3, "series", "chart", "markers", "dataLabels", "stroke", "colors", "title", "xaxis", "yaxis", 4, "ngIf"], [1, "my-5"], [1, "d-flex", "justify-content-between", "gap-2", "py-3"], [1, "d-flex", "justify-content-between", "align-items-center"], ["class", "btn btn-sm btn-soft-primary", 4, "ngIf"], ["type", "button", "rel", "noopener", "title", "Download Transcript", "type", "button", "class", "btn border rounded-circle p-1 d-flex align-items-center justify-content-center", "style", "width: 30px; height: 30px;", 3, "click", 4, "ngIf"], ["ngbDropdown", "", "placement", "left", 1, "dropdown"], ["transcriptDrop", "ngbDropdown"], ["ngbDropdownMenu", "", "ngbDropdownMenu", "", 1, "border", "shadow-sm", 2, "min-width", "300px", "overflow", "hidden", "z-index", "99999"], ["formControlName", "section", 1, "form-control", "control-input"], ["class", "input-error", 4, "ngIf"], ["formControlName", "center", 1, "form-control", "control-input"], ["formControlName", "loginField", "type", "text", 1, "form-control", "control-input"], [1, "px-3"], [3, "ngClass"], ["class", "p-5 rounded border", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], ["currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "ngClass", "first", "totalRecords", "rowsPerPageOptions", "rows", "pageLinkSize", "showCurrentPageReport", "onPageChange"], ["class", "col-6 border rounded", 4, "ngIf"], ["title", "Download Result", "type", "button", "class", "btn border rounded-circle p-1 d-flex align-items-center justify-content-center", "style", "width: 30px; height: 30px;", 3, "click", 4, "ngIf"], ["participantDrop", "ngbDropdown"], ["ngbDropdownMenu", "", 1, "border", "shadow-sm", 2, "min-width", "400px", "overflow", "hidden", "z-index", "99999"], [1, "row", "mb-2"], [1, "col-lg-6", "mb-2"], ["for", "status", 1, "small"], ["formControlName", "status", 1, "form-control", "control-input"], ["for", "login_field_value", 1, "small"], ["formControlName", "login_field_value", 1, "form-control", "control-input"], ["for", "score_scaled_greater_than", 1, "small"], ["formControlName", "score_scaled_greater_than", "type", "number", 1, "form-control", "control-input"], ["for", "score_scaled_less_than", 1, "small"], ["formControlName", "score_scaled_less_than", "type", "number", 1, "form-control", "control-input"], ["for", "attempts_greater_than", 1, "small"], ["formControlName", "attempts_greater_than", "type", "number", 1, "form-control", "control-input"], ["for", "attempts_less_than", 1, "small"], ["formControlName", "attempts_less_than", "type", "number", 1, "form-control", "control-input"], ["for", "duration_greater_than", 1, "small"], ["formControlName", "duration_greater_than", "type", "number", 1, "form-control", "control-input"], ["for", "duration_less_than", 1, "small"], ["formControlName", "duration_less_than", "type", "number", 1, "form-control", "control-input"], [1, "mb-2", "d-flex", "flex-column", "gap-y-2"], [1, "form-check"], [1, "form-check-label"], ["formControlName", "present", "type", "checkbox", "value", "", 1, "form-check-input"], ["formControlName", "re_login", "type", "checkbox", "value", "", 1, "form-check-input"], ["formControlName", "time_out", "type", "checkbox", "value", "", 1, "form-check-input"], ["formControlName", "suspended_", "type", "checkbox", "value", "", 1, "form-check-input"], ["formControlName", "comp_time_added", "type", "checkbox", "value", "", 1, "form-check-input"], ["currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "ngClass", "first", "totalRecords", "rowsPerPageOptions", "rows", "showCurrentPageReport", "onPageChange"], [3, "breadcrumbItems"], [1, "text-secondary"], [3, "value"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "gap-2", "p-5"], [1, "row"], [1, "col-lg-3", "col-md-3", "col-sm-12"], [1, "card"], [1, "d-flex", "p-2", "align-items-center"], [1, "me-3", "flex-shrink-0"], [1, "px-2", "py-1", "avatar-title", "bg-soft-secondary", "rounded-2", "fs-4"], [1, "ri-group-fill", "text-secondary"], [1, "flex-grow-1", "overflow-hidden"], [1, "fs-14"], ["class", "fs-14 fw-bold", 4, "ngIf"], [1, "px-2", "py-1", "avatar-title", "bg-soft-primary", "rounded-2", "fs-4"], [1, "ri-timer-fill", "text-primary"], [1, "d-flex", "align-items-center", "flex-grow-1", "overflow-hidden"], [1, "p-2", "avatar-title", "bg-soft-success", "rounded-2", "fs-4"], [1, "bx", "bxs-send", "text-success"], [1, "px-2", "py-1", "avatar-title", "bg-soft-danger", "rounded-2", "fs-4"], [1, "ri-pause-circle-fill", "text-danger"], [1, "p-2", "avatar-title", "bg-soft-warning", "rounded-2", "fs-4"], [1, "bx", "bxs-user-x", "text-warning"], [1, "ri-timer-fill", "text-success"], [1, "p-2", "avatar-title", "bg-soft-danger", "rounded-2", "fs-4"], [1, "ri-stop-circle-fill", "text-danger"], [1, "p-2", "avatar-title", "bg-soft-secondary", "rounded-2", "fs-4"], [1, "ri-exchange-fill", "text-warning"], [1, "p-2", "avatar-title", "bg-soft-primary", "rounded-2", "fs-4"], [1, "bx", "bx-revision", "text-primary"], [1, "fs-14", "fw-bold"], [1, "d-flex", "justify-content-between", "mb-2"], ["scoreAnalysisDrop", "ngbDropdown"], ["scoreSectionInput", ""], [1, "p-2", "d-flex", "align-items-center"], [1, "avatar-sm", "me-3"], [1, "avatar-title", "small", "bg-soft-success", "border-success", "border", "border-2", "rounded-circle", "fw-bold", "text-success"], [1, "m-0"], [1, "avatar-title", "small", "bg-soft-primary", "border-primary", "border", "border-2", "rounded-circle", "fw-bold", "text-primary"], [3, "series", "chart", "markers", "dataLabels", "stroke", "colors", "title", "xaxis", "yaxis"], [1, "btn", "btn-sm", "btn-soft-primary"], [1, "spinner-border", "spinner-border-sm"], ["type", "button", "rel", "noopener", "title", "Download Transcript", "type", "button", 1, "btn", "border", "rounded-circle", "p-1", "d-flex", "align-items-center", "justify-content-center", 2, "width", "30px", "height", "30px", 3, "click"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "none", "viewBox", "0 0 24 24"], ["stroke", "currentColor", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z"], [1, "input-error"], [1, "p-5", "rounded", "border"], ["class", "text-center text-secondary", 4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "gap-2"], [1, "text-center", "text-secondary"], [1, "col-12"], ["responsiveLayout", "scroll", "dataKey", "id", 3, "value", "rowHover", "scrollable"], ["dt", "", "dt1", ""], ["pTemplate", "header"], ["pTemplate", "body"], [1, "small"], ["pFrozenColumn", "", "pSortableColumn", "name", 2, "min-width", "200px"], ["field", "name"], ["type", "text", "field", "name", "display", "menu"], ["pFrozenColumn", "", 2, "min-width", "120px"], ["pFrozenColumn", "", "pSortableColumn", "markScored", 2, "max-width", "120px"], ["field", "markScored"], [1, "small", 3, "ngClass"], ["pFrozenColumn", "", 2, "min-width", "200px"], [2, "font-size", "13px"], ["pFrozenColumn", "", 2, "max-width", "120px"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "col-6", "border", "rounded"], ["class", "d-flex justify-content-between align-items-center py-3", 4, "ngIf"], ["id", "transcript-subjects", "style", "max-height: 750px; overflow-y: auto", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "py-3"], [1, "fs-16"], [1, "text-black"], [1, "d-flex", "gap-2", "align-items-center"], ["ngbDropdownMenu", "", 1, "border", "shadow-sm"], ["ngbDropdownItem", "", "type", "button", 3, "click", 4, "ngIf"], [1, "btn", "p-2", "bg-transparent", "border", "small", "d-flex", "align-items-center", "gap-2", 2, "background-color", "#cccccc", 3, "disabled", "click"], [1, "ri-arrow-left-s-line"], [1, "ri-arrow-right-s-line"], ["ngbDropdownItem", "", "type", "button", 3, "click"], ["id", "transcript-subjects", 2, "max-height", "750px", "overflow-y", "auto"], [4, "ngIf", "ngIfElse"], ["allMode", ""], [3, "currentQuestion", "currentQuestionIndex"], [4, "ngFor", "ngForOf"], [3, "currentQuestion", "currentQuestionIndex", 4, "ngIf"], ["title", "Download Result", "type", "button", 1, "btn", "border", "rounded-circle", "p-1", "d-flex", "align-items-center", "justify-content-center", 2, "width", "30px", "height", "30px", 3, "click"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"], ["dataKpy", "id", "responsiveLayout", "scroll", 3, "value"], ["dt", ""], ["pFrozenColumn", "", "pSortableColumn", "name", 1, "small", 2, "min-width", "300px"], ["pFrozenColumn", ""], [2, "min-width", "100px"], [1, "smaller"], ["pFrozenColumn", "", 2, "min-width", "300px"], [1, "d-flex", "flex-column"], [2, "font-size", "11px"], [1, "d-flex", "align-items-center", "justify-content-start", "flex-wrap", "gap-1", "py-2"], ["class", "rounded border smaller tag", "style", "padding: 1px 4px", 4, "ngIf"], ["triggers", "mouseenter:mouseleave", "class", "rounded border smaller tag", "style", "padding: 1px 4px", 3, "ngbPopover", "popoverTitle", 4, "ngFor", "ngForOf"], ["triggers", "mouseenter:mouseleave", "popoverTitle", "Start to Finish", 1, "badge", "badge-soft-primary", "fs-12", 2, "cursor", "pointer", 3, "ngbPopover"], ["timerPopOver", ""], ["class", "badge bg-secondary", 4, "ngIf"], ["triggers", "mouseenter:mouseleave", "popoverTitle", "Login IP Addresses", 3, "ngbPopover", 4, "ngIf"], ["class", "smaller bg-soft-danger badge text-danger", "style", "font-size: 10px;", 4, "ngIf"], ["loginIPPopOver", ""], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-soft-primary", "btn-sm", "dropdown", "arrow-none"], [1, "ri-more-fill"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item", 3, "routerLink"], [1, "ri-eye-fill", "align-bottom", "me-2", "text-muted"], [1, "dropdown-item"], [1, "ri-download-cloud-fill", "align-bottom", "me-2", "text-muted"], [1, "rounded", "border", "smaller", "tag", 2, "padding", "1px 4px"], [1, "text-uppercase", "text-black", 2, "font-size", "10px"], [1, "mt-1", "d-flex", "align-items-center", "justify-content-center"], [1, "badge", "rounded-pill", 2, "text-transform", "capitalize", 3, "ngClass"], [1, "text-center"], ["triggers", "mouseenter:mouseleave", 1, "rounded", "border", "smaller", "tag", 2, "padding", "1px 4px", 3, "ngbPopover", "popoverTitle"], [1, "text-black", 2, "font-size", "10px"], [1, "text-center", 2, "font-size", "10px"], ["SectionPopOver", ""], [1, "p-1", "smaller"], [1, "d-flex", "justify-between", "gap-2"], [1, "d-flex", "justify-between", "gap-2", "mt-1"], [1, "badge", "badge-soft-success", "fs-10"], [1, "badge", "badge-soft-danger", "fs-10"], [1, "badge", "bg-secondary"], ["triggers", "mouseenter:mouseleave", "popoverTitle", "Login IP Addresses", 3, "ngbPopover"], [1, "smaller", "bg-soft-danger", "badge", "text-danger", 2, "font-size", "10px"], ["class", "p-1 smaller", 4, "ngIf"], [1, "border-b", "py-1"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 7, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, DashboardComponent_ng_container_1_Template, 243, 60, "ng-container", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.loadingDashboardResources);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.loadingDashboardResources);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbDropdownMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgForOf, ng_apexcharts__WEBPACK_IMPORTED_MODULE_29__.ChartComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgClass, primeng_table__WEBPACK_IMPORTED_MODULE_30__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_31__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_30__.FrozenColumn, primeng_table__WEBPACK_IMPORTED_MODULE_30__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_30__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_30__.ColumnFilter, primeng_paginator__WEBPACK_IMPORTED_MODULE_32__.Paginator, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbDropdownItem, _transcript_question_types_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_4__.McqComponent, _transcript_question_types_mrq_mrq_component__WEBPACK_IMPORTED_MODULE_5__.MrqComponent, _transcript_question_types_close_dropdown_close_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.CloseDropdownComponent, _transcript_question_types_cloze_text_cloze_text_component__WEBPACK_IMPORTED_MODULE_7__.ClozeTextComponent, _transcript_question_types_short_text_short_text_component__WEBPACK_IMPORTED_MODULE_8__.ShortTextComponent, _transcript_question_types_essay_essay_component__WEBPACK_IMPORTED_MODULE_9__.EssayComponent, _transcript_question_types_choice_matrix_choice_matrix_component__WEBPACK_IMPORTED_MODULE_10__.ChoiceMatrixComponent, _transcript_question_types_cloze_radio_cloze_radio_component__WEBPACK_IMPORTED_MODULE_11__.ClozeRadioComponent, _transcript_question_types_yes_or_no_yes_or_no_component__WEBPACK_IMPORTED_MODULE_12__.YesOrNoComponent, _transcript_question_types_true_or_false_true_or_false_component__WEBPACK_IMPORTED_MODULE_13__.TrueOrFalseComponent, _transcript_question_types_ordering_ordering_component__WEBPACK_IMPORTED_MODULE_14__.OrderingComponent, _transcript_question_types_matching_matching_component__WEBPACK_IMPORTED_MODULE_15__.MatchingComponent, _transcript_question_types_label_image_with_text_label_image_with_text_component__WEBPACK_IMPORTED_MODULE_16__.LabelImageWithTextComponent, _transcript_question_types_label_image_with_dropdown_label_image_with_dropdown_component__WEBPACK_IMPORTED_MODULE_17__.LabelImageWithDropdownComponent, _transcript_question_types_label_image_drag_and_drop_label_image_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_18__.LabelImageDragAndDropComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.CheckboxControlValueAccessor, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbPopover, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterLinkWithHref],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_27__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_27__.TitleCasePipe],
  styles: [".pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.pass[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #FFF;\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  border-radius: 3px;\n  background-color: green;\n}\n\n.pass[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.fail[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #FFF;\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  border-radius: 3px;\n  background-color: red;\n}\n\n.fail[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.section-bar[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 170px;\n  color: #fff;\n}\n\n.success-bar[_ngcontent-%COMP%] {\n  background-color: green;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  font-size: small;\n}\n\n.success-bar[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.failed-bar[_ngcontent-%COMP%] {\n  background-color: red;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: small;\n}\n\n.failed-bar[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.vr[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 35px;\n}\n\n.card-image[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.input-error[_ngcontent-%COMP%] {\n  font-size: smaller;\n  text-transform: capitalize;\n  font-style: italic;\n  color: tomato;\n}\n\n.disable-click[_ngcontent-%COMP%] {\n  background-color: #f0efef;\n  cursor: not-allowed;\n}\n\n.question-panel[_ngcontent-%COMP%] {\n  height: 500px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 5px;\n}\n\n.border-gray[_ngcontent-%COMP%] {\n  border: 1px solid #d1d5dc;\n}\n\n.item-label[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.smaller[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.tag[_ngcontent-%COMP%] {\n  transition: all 0.5s;\n}\n\n.tag[_ngcontent-%COMP%]:hover {\n  border-color: #5c76a7 !important;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBRUEsV0FBQTtBQUFGOztBQUdBO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUVFLHlCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0cseUJBQUE7QUFESDs7QUFJQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0FBREY7O0FBSUE7RUFDSSxvQkFBQTtBQURKOztBQUlBO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0FBREYiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBhc3Mge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI0ZGRjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnBhc3M6aG92ZXIge1xyXG4gIG9wYWNpdHk6IC41O1xyXG59XHJcblxyXG4uZmFpbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmZhaWw6aG92ZXIge1xyXG4gIG9wYWNpdHk6IC41O1xyXG59XHJcblxyXG4uc2VjdGlvbi1iYXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgLy8gaGVpZ2h0OiAzMHB4OyBcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnN1Y2Nlc3MtYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5zdWNjZXNzLWJhcjpob3ZlciB7XHJcbiAgb3BhY2l0eTogLjU7XHJcbn1cclxuXHJcbi5mYWlsZWQtYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5mYWlsZWQtYmFyOmhvdmVyIHtcclxuICBvcGFjaXR5OiAuNTtcclxufVxyXG5cclxuLnZyIHtcclxuICB3aWR0aDogMXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmNhcmQtaW1hZ2Uge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmlucHV0LWVycm9yIHtcclxuICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOiB0b21hdG87XHJcbn1cclxuXHJcbi5kaXNhYmxlLWNsaWNrIHtcclxuICAvLyBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlZmVmO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5xdWVzdGlvbi1wYW5lbCB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5ib3JkZXItZ3JheSB7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkICNkMWQ1ZGNcclxufVxyXG5cclxuLml0ZW0tbGFiZWwgKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDBcclxufVxyXG5cclxuLnNtYWxsZXIge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnRhZyB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG59XHJcblxyXG4udGFnOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICM1Yzc2YTcgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 49314:
/*!********************************************************************************!*\
  !*** ./src/app/pages/results/reports-dashboard/reports-dashboard.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsDashboardComponent": () => (/* binding */ ReportsDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _assessment_service_assessments_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assessment/service/assessments.service */ 9472);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/paginator */ 21066);







function ReportsDashboardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Loading Exams...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ReportsDashboardComponent_div_2_div_4_ng_container_1_i_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 52);
} }
function ReportsDashboardComponent_div_2_div_4_ng_container_1_i_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 53);
} }
function ReportsDashboardComponent_div_2_div_4_ng_container_1_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const assessment_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Admins: ", assessment_r5.totalCenterAdmins, "");
} }
function ReportsDashboardComponent_div_2_div_4_ng_container_1_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const assessment_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Sections: ", assessment_r5.totalSectionsGroup, "");
} }
const _c0 = function (a0, a1) { return { " p-1 py-0 px-1  ": a0, " p-1 py-0 ": a1 }; };
const _c1 = function (a0, a1) { return { "text-success": a0, "text-warning": a1 }; };
function ReportsDashboardComponent_div_2_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReportsDashboardComponent_div_2_div_4_ng_container_1_Template_a_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const assessment_r5 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r12.setCurrentAssessment(assessment_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ReportsDashboardComponent_div_2_div_4_ng_container_1_i_19_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ReportsDashboardComponent_div_2_div_4_ng_container_1_i_20_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReportsDashboardComponent_div_2_div_4_ng_container_1_Template_a_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const assessment_r5 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r14.setCurrentAssessment(assessment_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Manage Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Total subjects ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Delivery method ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, ReportsDashboardComponent_div_2_div_4_ng_container_1_div_66_Template, 6, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, ReportsDashboardComponent_div_2_div_4_ng_container_1_div_67_Template, 6, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, " Start Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](81, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, " End Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](92, "date");
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
    const assessment_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 17, assessment_r5.name.charAt(0)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "examalpha/reports/", assessment_r5.id, "/results");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](assessment_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](15, 19, assessment_r5.createdDate, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](28, _c0, assessment_r5.status === "PUBLISHED", assessment_r5.status === "DRAFT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", assessment_r5.status === "DRAFT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", assessment_r5.status === "PUBLISHED");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](31, _c1, assessment_r5.status === "PUBLISHED", assessment_r5.status === "DRAFT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", assessment_r5.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/examalpha/schedule/", assessment_r5.id, "/exam-schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", assessment_r5.totalSections, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", assessment_r5.duration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", assessment_r5.deliveryMethod, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", assessment_r5.totalCenterAdmins);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", assessment_r5.totalSectionsGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](81, 22, assessment_r5.startDateTime, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](92, 25, assessment_r5.endDateTime, "medium"), " ");
} }
function ReportsDashboardComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ReportsDashboardComponent_div_2_div_4_ng_container_1_Template, 93, 34, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.assessments.content);
} }
function ReportsDashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ReportsDashboardComponent_div_2_div_4_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" List of all Exams(", ctx_r1.assessments.content.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.assessments);
} }
const _c2 = function () { return [20, 30, 50]; };
function ReportsDashboardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-paginator", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onPageChange", function ReportsDashboardComponent_div_3_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("totalRecords", ctx_r2.assessments.totalElements)("first", 1)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c2))("rows", 5)("showCurrentPageReport", true);
} }
class ReportsDashboardComponent {
    constructor(assessmentService) {
        this.assessmentService = assessmentService;
        this.pageNo = 0;
        this.pageSize = 20;
        this.loading = true;
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Reports', active: true }];
        this.assessmentService
            .fetchAllAssessment(this.pageNo, this.pageSize)
            .subscribe((value) => {
            this.loading = false;
            this.assessments = value;
        }, (error) => {
            this.loading = false;
            // console.log(error);
        });
    }
    setCurrentAssessment(assessment) {
        this.assessmentService.activeAssessment = assessment.name;
        this.assessmentService.activeAssessmentId = assessment.id;
        this.assessmentService.schedulerAssessmentId = assessment.schId;
        this.assessmentService.activeAssessmentDeliveryMethod = assessment.deliveryMethod;
        localStorage.setItem('deliveryMethod', assessment.deliveryMethod);
        localStorage.setItem('assessmentId', assessment.id);
        localStorage.setItem('assessmentName', assessment.name);
    }
    onPageChange(event) {
        this.pageSize = event.rows;
        this.pageNo = event.page;
        //this.fetchAssessmentCenters(this.centerPage, this.centerSize);
        this.ngOnInit();
    }
}
ReportsDashboardComponent.ɵfac = function ReportsDashboardComponent_Factory(t) { return new (t || ReportsDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_assessment_service_assessments_service__WEBPACK_IMPORTED_MODULE_0__.AssessmentsService)); };
ReportsDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReportsDashboardComponent, selectors: [["app-reports-dashboard"]], decls: 4, vars: 4, consts: [["title", "EXAM REPORT ", 3, "breadcrumbItems"], ["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], ["class", "card card-body", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "visually-hidden"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"], [1, "card", "card-body"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "card-title", "mb-2", "flex-grow-1"], ["class", "row", 4, "ngIf"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-lg-6"], [1, "d-flex", "mb-0", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "avatar-xs", "flex-shrink-0", "me-3"], [1, "avatar-title", "bg-primary", "text-light", "rounded-3"], [1, "flex-grow-1"], [1, "fs-13", "mb-0", "text-truncate", "flex-grow-1"], ["href", "javascript:void(0);", 1, "text-body", "d-block", 3, "routerLink", "click"], [1, "text-secondary", "p-0", "m-0", 2, "font-size", "12px", "font-weight", "lighter"], [1, "d-flex", "gap-4", "justify-content-end"], [1, "text-capitalize", "rounded-2", "fs-12", 3, "ngClass"], ["class", "ri-draft-line align-bottom", 4, "ngIf"], ["class", "ri-checkbox-circle-line align-bottom text-white", 4, "ngIf"], [1, "fs-12"], [1, "text-capitalize", "fs-12", 3, "ngClass"], ["ngbDropdown", "", 1, "dropdown"], ["id", "dropdownMenuLink1", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "text-muted", "arrow-none"], [1, "ri-more-2-fill", "align-middle", "me-2", "fs-18", "fw-bold", "text-dark", 2, "cursor", "pointer"], ["aria-labelledby", "dropdownMenuLink1", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item", 3, "routerLink", "click"], [1, "bx", "bxs-edit", "align-bottom", "me-2", "text-muted"], [1, "border-top", "mb-3", "mt-3"], [1, "col-lg-12", "col-sm-12", "mb-2"], [1, "avatar-xs", "flex-shrink-0", "me-2"], [1, "avatar-title", "border", "text-light", "bg-white", "rounded-3"], [1, "align-center", "ri-book-3-line", "text-secondary"], [1, "text-secondary", "p-0", "m-0", 2, "font-size", "12px", "font-weight", "normal"], [1, "align-center", "las", "la-hourglass", "align-center", "text-secondary"], [1, "col-lg-3", "col-sm-12", "mb-2"], [1, "align-center", "ri-send-plane-2-line", "text-secondary"], [1, "row", "gap-2", "my-2"], ["class", "col-lg-3 col-sm-4 p-0", "style", "width: 20%", 4, "ngIf"], [1, "border-top", "mb-3"], [1, "d-flex", "justify-content-between"], [1, ""], [1, "align-center", "ri-play-circle-line", "text-success"], [1, "align-center", "ri-stop-circle-line", "text-danger"], [1, "ri-draft-line", "align-bottom"], [1, "ri-checkbox-circle-line", "align-bottom", "text-white"], [1, "col-lg-3", "col-sm-4", "p-0", 2, "width", "20%"], [1, "fs-12", "px-1"], [1, "border", "rounded-2", "px-1"], [1, "ri-check-double-line", "text-success", "p-2", "align-middle"], [3, "totalRecords", "first", "rowsPerPageOptions", "rows", "showCurrentPageReport", "onPageChange"]], template: function ReportsDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ReportsDashboardComponent_div_1_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ReportsDashboardComponent_div_2_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ReportsDashboardComponent_div_3_Template, 2, 6, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.assessments);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.assessments);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.assessments);
    } }, directives: [_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, primeng_paginator__WEBPACK_IMPORTED_MODULE_6__.Paginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 10069:
/*!*********************************************************!*\
  !*** ./src/app/pages/results/results-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsRoutingModule": () => (/* binding */ ResultsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 61505);
/* harmony import */ var _grading_grading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grading/grading.component */ 40589);
/* harmony import */ var _reports_dashboard_reports_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports-dashboard/reports-dashboard.component */ 49314);
/* harmony import */ var _transcript_view_transcript_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transcript-view/transcript-view.component */ 51455);
/* harmony import */ var _candidate_result_candidate_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./candidate-result/candidate-result.component */ 65808);
/* harmony import */ var _grade_grade_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grade/grade.component */ 34438);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









const routes = [
    { path: "", component: _reports_dashboard_reports_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.ReportsDashboardComponent },
    { path: ":exam_id/results", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent },
    { path: ":exam_id/results/transcript", component: _transcript_view_transcript_view_component__WEBPACK_IMPORTED_MODULE_3__.TranscriptViewComponent },
    {
        path: ":exam_id/results/:participant_id/result",
        component: _candidate_result_candidate_result_component__WEBPACK_IMPORTED_MODULE_4__.CandidateResultComponent,
    },
    { path: "/grading", component: _grading_grading_component__WEBPACK_IMPORTED_MODULE_1__.GradingComponent },
    { path: ":examId/grading/grader", component: _grade_grade_component__WEBPACK_IMPORTED_MODULE_5__.GradeComponent },
];
class ResultsRoutingModule {
}
ResultsRoutingModule.ɵfac = function ResultsRoutingModule_Factory(t) { return new (t || ResultsRoutingModule)(); };
ResultsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ResultsRoutingModule });
ResultsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ResultsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 31869:
/*!*************************************************!*\
  !*** ./src/app/pages/results/results.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsModule": () => (/* binding */ ResultsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/table */ 68581);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng2-charts */ 44195);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-echarts */ 45877);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-apexcharts */ 33142);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 28155);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _results_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results-routing.module */ 10069);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 61505);
/* harmony import */ var _grading_grading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grading/grading.component */ 40589);
/* harmony import */ var _grade_grade_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grade/grade.component */ 34438);
/* harmony import */ var _candidate_result_candidate_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./candidate-result/candidate-result.component */ 65808);
/* harmony import */ var _transcript_view_transcript_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transcript-view/transcript-view.component */ 51455);
/* harmony import */ var _reports_dashboard_reports_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports-dashboard/reports-dashboard.component */ 49314);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/paginator */ 21066);
/* harmony import */ var _transcript_question_types_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transcript/question-types/mcq/mcq.component */ 81368);
/* harmony import */ var _grading_item_types_drawing_and_writing_drawing_and_writing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./grading-item-types/drawing-and-writing/drawing-and-writing.component */ 47849);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/accordion */ 75456);
/* harmony import */ var _grading_item_types_drawing_and_writing_custom_context_menu_custom_context_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./grading-item-types/drawing-and-writing/custom-context-menu/custom-context-menu.component */ 26641);
/* harmony import */ var _grading_item_types_drawing_and_writing_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./grading-item-types/drawing-and-writing/directives/draggable.directive */ 2869);
/* harmony import */ var _transcript_question_types_close_dropdown_close_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transcript/question-types/close-dropdown/close-dropdown.component */ 26045);
/* harmony import */ var _transcript_question_types_cloze_text_cloze_text_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./transcript/question-types/cloze-text/cloze-text.component */ 94870);
/* harmony import */ var _transcript_question_types_cloze_radio_cloze_radio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./transcript/question-types/cloze-radio/cloze-radio.component */ 93017);
/* harmony import */ var _transcript_question_types_yes_or_no_yes_or_no_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./transcript/question-types/yes-or-no/yes-or-no.component */ 38556);
/* harmony import */ var _transcript_question_types_true_or_false_true_or_false_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transcript/question-types/true-or-false/true-or-false.component */ 95686);
/* harmony import */ var _transcript_question_types_ordering_ordering_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./transcript/question-types/ordering/ordering.component */ 27333);
/* harmony import */ var _transcript_question_types_matching_matching_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./transcript/question-types/matching/matching.component */ 36810);
/* harmony import */ var _transcript_question_types_mrq_mrq_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./transcript/question-types/mrq/mrq.component */ 12802);
/* harmony import */ var _transcript_question_types_short_text_short_text_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./transcript/question-types/short-text/short-text.component */ 99627);
/* harmony import */ var _transcript_question_types_essay_essay_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./transcript/question-types/essay/essay.component */ 76083);
/* harmony import */ var _transcript_question_types_choice_matrix_choice_matrix_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./transcript/question-types/choice-matrix/choice-matrix.component */ 73273);
/* harmony import */ var _transcript_question_types_label_image_drag_and_drop_label_image_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./transcript/question-types/label-image-drag-and-drop/label-image-drag-and-drop.component */ 8095);
/* harmony import */ var _transcript_question_types_label_image_with_text_label_image_with_text_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./transcript/question-types/label-image-with-text/label-image-with-text.component */ 47715);
/* harmony import */ var _transcript_question_types_label_image_with_dropdown_label_image_with_dropdown_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./transcript/question-types/label-image-with-dropdown/label-image-with-dropdown.component */ 9784);
/* harmony import */ var _items_items_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../items/items.module */ 97272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 3184);








































class ResultsModule {
}
ResultsModule.ɵfac = function ResultsModule_Factory(t) { return new (t || ResultsModule)(); };
ResultsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: ResultsModule });
ResultsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ providers: [
        { provide: _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_28__.TINYMCE_SCRIPT_SRC, useValue: "tinymce/tinymce.min.js" },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_29__.CommonModule,
            _results_routing_module__WEBPACK_IMPORTED_MODULE_1__.ResultsRoutingModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_30__.TableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbAccordionModule,
            primeng_accordion__WEBPACK_IMPORTED_MODULE_32__.AccordionModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbPopoverModule,
            simplebar_angular__WEBPACK_IMPORTED_MODULE_33__.SimplebarAngularModule,
            ngx_echarts__WEBPACK_IMPORTED_MODULE_34__.NgxEchartsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_35__.NgChartsModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_36__.NgApexchartsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_28__.EditorModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbProgressbarModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_38__.PaginatorModule,
            _items_items_module__WEBPACK_IMPORTED_MODULE_26__.ItemsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](ResultsModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
        _grading_grading_component__WEBPACK_IMPORTED_MODULE_3__.GradingComponent,
        _grade_grade_component__WEBPACK_IMPORTED_MODULE_4__.GradeComponent,
        _candidate_result_candidate_result_component__WEBPACK_IMPORTED_MODULE_5__.CandidateResultComponent,
        _transcript_view_transcript_view_component__WEBPACK_IMPORTED_MODULE_6__.TranscriptViewComponent,
        _reports_dashboard_reports_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.ReportsDashboardComponent,
        _transcript_question_types_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_8__.McqComponent,
        _grading_item_types_drawing_and_writing_drawing_and_writing_component__WEBPACK_IMPORTED_MODULE_9__.DrawingAndWritingComponent,
        _grading_item_types_drawing_and_writing_custom_context_menu_custom_context_menu_component__WEBPACK_IMPORTED_MODULE_10__.CustomContextMenuComponent,
        _grading_item_types_drawing_and_writing_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_11__.DraggableDirective,
        _transcript_question_types_close_dropdown_close_dropdown_component__WEBPACK_IMPORTED_MODULE_12__.CloseDropdownComponent,
        _transcript_question_types_cloze_text_cloze_text_component__WEBPACK_IMPORTED_MODULE_13__.ClozeTextComponent,
        _transcript_question_types_cloze_radio_cloze_radio_component__WEBPACK_IMPORTED_MODULE_14__.ClozeRadioComponent,
        _transcript_question_types_yes_or_no_yes_or_no_component__WEBPACK_IMPORTED_MODULE_15__.YesOrNoComponent,
        _transcript_question_types_true_or_false_true_or_false_component__WEBPACK_IMPORTED_MODULE_16__.TrueOrFalseComponent,
        _transcript_question_types_ordering_ordering_component__WEBPACK_IMPORTED_MODULE_17__.OrderingComponent,
        _transcript_question_types_matching_matching_component__WEBPACK_IMPORTED_MODULE_18__.MatchingComponent,
        _transcript_question_types_mrq_mrq_component__WEBPACK_IMPORTED_MODULE_19__.MrqComponent,
        _transcript_question_types_short_text_short_text_component__WEBPACK_IMPORTED_MODULE_20__.ShortTextComponent,
        _transcript_question_types_essay_essay_component__WEBPACK_IMPORTED_MODULE_21__.EssayComponent,
        _transcript_question_types_choice_matrix_choice_matrix_component__WEBPACK_IMPORTED_MODULE_22__.ChoiceMatrixComponent,
        _transcript_question_types_label_image_drag_and_drop_label_image_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_23__.LabelImageDragAndDropComponent,
        _transcript_question_types_label_image_with_text_label_image_with_text_component__WEBPACK_IMPORTED_MODULE_24__.LabelImageWithTextComponent,
        _transcript_question_types_label_image_with_dropdown_label_image_with_dropdown_component__WEBPACK_IMPORTED_MODULE_25__.LabelImageWithDropdownComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_29__.CommonModule,
        _results_routing_module__WEBPACK_IMPORTED_MODULE_1__.ResultsRoutingModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_30__.TableModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbAccordionModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_32__.AccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbPopoverModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_33__.SimplebarAngularModule,
        ngx_echarts__WEBPACK_IMPORTED_MODULE_34__.NgxEchartsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_35__.NgChartsModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_36__.NgApexchartsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_28__.EditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbProgressbarModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_38__.PaginatorModule,
        _items_items_module__WEBPACK_IMPORTED_MODULE_26__.ItemsModule] }); })();


/***/ }),

/***/ 73273:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/results/transcript/question-types/choice-matrix/choice-matrix.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 26045:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/results/transcript/question-types/close-dropdown/close-dropdown.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
            const selectHtml = this.createSelectElement(i);
            parts[i] = parts[i] + selectHtml;
        }
        content = parts.join('');
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(content);
    }
    createSelectElement(index) {
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
              <span readonly class="border border-${isCorrect ? 'success' : 'danger'} " style="width:max-content; display:inline-block; padding: 6px;min-width: 100px">
                ${selectedAnswer}
              </span>
            </span>
          </span> 
        </span>
      `;
        return selectHtml;
    }
    viewAnswer() {
        this.showAnswer = !this.showAnswer;
        this.renderContent();
    }
}
CloseDropdownComponent.ɵfac = function CloseDropdownComponent_Factory(t) { return new (t || CloseDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer)); };
CloseDropdownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CloseDropdownComponent, selectors: [["app-close-dropdown"]], inputs: { currentQuestion: "currentQuestion", currentQuestionIndex: "currentQuestionIndex" }, decls: 24, vars: 12, consts: [[1, "card", "border", "border-light", "rounded-3", "p-3"], [1, "fs-6", "fw-bold"], ["class", "mt-2 text-black border-bottom pb-2", "style", "font-size: 1.1rem", 3, "innerHTML", 4, "ngIf"], [1, "mt-2", "text-black", 2, "font-size", "0.9rem", 3, "innerHTML"], [1, "d-flex", "flex-row", "align-items-center", "flex-wrap", "gap-2", "my-2", 2, "font-size", "0.895em"], [3, "ngClass"], [1, "mt-2", "text-black", "border-bottom", "pb-2", 2, "font-size", "1.1rem", 3, "innerHTML"]], template: function CloseDropdownComponent_Template(rf, ctx) { if (rf & 1) {
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

/***/ 93017:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/results/transcript/question-types/cloze-radio/cloze-radio.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 94870:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/results/transcript/question-types/cloze-text/cloze-text.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 76083:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/results/transcript/question-types/essay/essay.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 8095:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/results/transcript/question-types/label-image-drag-and-drop/label-image-drag-and-drop.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 9784:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/results/transcript/question-types/label-image-with-dropdown/label-image-with-dropdown.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelImageWithDropdownComponent": () => (/* binding */ LabelImageWithDropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"]], styles: [".preview-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.preview-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.preview-label[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-transform: translate(-10px, -50%);\n          transform: translate(-10px, -50%);\n}\n\n.pointer[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 20px;\n  background-image: url(/assets/images/svg/left-arrow.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.form-control-sm[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhYmVsLWltYWdlLXdpdGgtZHJvcGRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdEQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJsYWJlbC1pbWFnZS13aXRoLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXctY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJldmlldy1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5wcmV2aWV3LWxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIC01MCUpO1xyXG59XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgd2lkdGg6IDMxcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9zdmcvbGVmdC1hcnJvdy5zdmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXNtIHtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 47715:
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/results/transcript/question-types/label-image-with-text/label-image-with-text.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 36810:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/results/transcript/question-types/matching/matching.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 81368:
/*!******************************************************************************!*\
  !*** ./src/app/pages/results/transcript/question-types/mcq/mcq.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 12802:
/*!******************************************************************************!*\
  !*** ./src/app/pages/results/transcript/question-types/mrq/mrq.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 27333:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/results/transcript/question-types/ordering/ordering.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 99627:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/results/transcript/question-types/short-text/short-text.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 95686:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/results/transcript/question-types/true-or-false/true-or-false.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 38556:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/results/transcript/question-types/yes-or-no/yes-or-no.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_results_results_module_ts.js.map