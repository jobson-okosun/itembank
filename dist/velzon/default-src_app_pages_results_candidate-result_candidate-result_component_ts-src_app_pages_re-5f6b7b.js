"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([["default-src_app_pages_results_candidate-result_candidate-result_component_ts-src_app_pages_re-5f6b7b"],{

/***/ 47753:
/*!***************************************************************!*\
  !*** ./src/app/pages/assessment/model/marking-guide-types.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchemeMarkCategory": () => (/* binding */ SchemeMarkCategory),
/* harmony export */   "SchemeScoreBoundary": () => (/* binding */ SchemeScoreBoundary)
/* harmony export */ });
var SchemeMarkCategory;
(function (SchemeMarkCategory) {
    SchemeMarkCategory["SCORE"] = "SCORE";
    SchemeMarkCategory["PENALTY"] = "PENALTY";
    SchemeMarkCategory["VIOLATION"] = "VIOLATION";
})(SchemeMarkCategory || (SchemeMarkCategory = {}));
var SchemeScoreBoundary;
(function (SchemeScoreBoundary) {
    SchemeScoreBoundary["GENERAL"] = "GENERAL";
    SchemeScoreBoundary["SECTION"] = "SECTION";
})(SchemeScoreBoundary || (SchemeScoreBoundary = {}));


/***/ }),

/***/ 58314:
/*!*******************************************************************!*\
  !*** ./src/app/pages/assessment/service/marking-guide.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkingGuideService": () => (/* binding */ MarkingGuideService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class MarkingGuideService {
    constructor(http) {
        this.http = http;
    }
    fetchMarkingGuideAssessmentSections(assessmentId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/list_subjects_in_exam`, { withCredentials: true });
    }
    addMarkingSchemeToAssementSection(assessmentId, sectionId) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/add_scheme`, { section_id: sectionId }, { withCredentials: true });
    }
    fetchMarkingGuideAssessmentSectionScheme(assessmentId, sectionId, schemeId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme_id/${schemeId}/fetch_scheme_page`, { withCredentials: true });
    }
    createMarkTypes(assessmentId, sectionId, payload) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/add_mark_type`, payload, { withCredentials: true });
    }
    editMarkTypes(assessmentId, sectionId, payload) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/edit_mark_type`, payload, { withCredentials: true });
    }
    deleteMarkType(assessmentId, sectionId, schemeId, markTypeId, markTypeCategory) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme/${schemeId}/mark_type/${markTypeId}/category/${markTypeCategory}/delete_mark_type`, { withCredentials: true });
    }
    updateGeneralMarkingGuide(assessmentId, sectionId, payload) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/add_general_guide`, payload, { withCredentials: true });
    }
    addScoreToGeneralMarkingGuide(assessmentId, sectionId, payload) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/add_general_score`, payload, { withCredentials: true });
    }
    editGeneralScore(assessmentId, sectionId, payload) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/edit_general_score`, payload, { withCredentials: true });
    }
    deleteGeneralScore(assessmentId, sectionId, schemeId, markTypeId, markTypeCategory, generalScoreId) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme/${schemeId}/mark_type/${markTypeId}/general_score/${generalScoreId}/category/${markTypeCategory}/delete_general_score`, { withCredentials: true });
    }
    fetchQuestionsForSelection(assessmentId, sectionId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/list_questions_to_add_to_scheme`, { withCredentials: true });
    }
    addQuestionToScheme(assessmentId, sectionId, schemeId, payload) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme_id/${schemeId}/add_question`, payload, { withCredentials: true });
    }
    addOrEditQuestionMarkingGuide(assessmentId, sectionId, schemeId, payload) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme_id/${schemeId}/add_edit_question_marking_guide`, payload, { withCredentials: true });
    }
    addSectionToSchemeQuestion(assessmentId, sectionId, schemeId, payload) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme_id/${schemeId}/scheme_add_section_to_question`, payload, { withCredentials: true });
    }
    editSchemeQuestionSection(assessmentId, sectionId, schemeId, schemeQuestionId, payload) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme_id/${schemeId}/scheme_question/${schemeQuestionId}/scheme_edit_question_section`, payload, { withCredentials: true });
    }
    addScoreToSchemeQuestionSection(assessmentId, sectionId, schemeId, payload) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme_id/${schemeId}/scheme_add_score_to_question_section`, payload, { withCredentials: true });
    }
    editScoreInSchemeQuestionSection(assessmentId, sectionId, schemeId, payload) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme_id/${schemeId}/scheme_edit_score_in_question_section`, payload, { withCredentials: true });
    }
    deleteSchemeQuestionSectionScore(assessmentId, sectionId, schemeId, markTypeId, scoreId, schemeQuestionId, markCategory) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme/${schemeId}/mark_type/${markTypeId}/score/${scoreId}/scheme_question/${schemeQuestionId}/category/${markCategory}/delete_section_score`, { withCredentials: true });
    }
}
MarkingGuideService.ɵfac = function MarkingGuideService_Factory(t) { return new (t || MarkingGuideService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
MarkingGuideService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MarkingGuideService, factory: MarkingGuideService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 65808:
/*!******************************************************************************!*\
  !*** ./src/app/pages/results/candidate-result/candidate-result.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateResultComponent": () => (/* binding */ CandidateResultComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _assessment_service_assessments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assessment/service/assessments.service */ 9472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-apexcharts */ 33142);










function CandidateResultComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function CandidateResultComponent_ng_container_1_app_breadcrumbs_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-breadcrumbs", 20);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbItems", ctx_r2.breadCrumbItems);
  }
}

function CandidateResultComponent_ng_container_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Exam Delivery: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Scaled Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Time Spent");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Cohort Average");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.assessment.delivery_method, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 8, ctx_r3.assessment.start_date, "MMMM d, y 'at' h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 11, ctx_r3.assessment.end_date, "MMMM d, y 'at' h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.assessment.score.scaled_score, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.calculateTimeSpent());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.assessment.average_scaled_score, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r3.toOrdinal(ctx_r3.assessment.percentile * 100), " Percentile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" You finished on the ", ctx_r3.assessment.percentile * 100, " Percentile range ");
  }
}

function CandidateResultComponent_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "h5", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Exam Activities");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Detailed overview of candidate activities during the examination process. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ngx-simplebar", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " Compensatory time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, " Timed-out");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, " System swap");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, " Re-logins ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r4.getParticipantName()) == null ? null : tmp_0_0.slice(0, 2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 8, ctx_r4.getParticipantName()));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r4.assessment == null ? null : ctx_r4.assessment.login_field, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.assessment.reg_fields == null ? null : ctx_r4.assessment.reg_fields[ctx_r4.assessment == null ? null : ctx_r4.assessment.login_field], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.assessment.comp_time_added ? "YES" : "NO", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.assessment.timed_out ? "YES" : "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.assessment.computer_swapped ? "YES" : "NO", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.assessment.re_login ? "YES" : "NO", " ");
  }
}

function CandidateResultComponent_ng_container_1_div_17_div_7_apx_chart_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "apx-chart", 87);
  }

  if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("series", ctx_r9.gradientCircleChart[i_r8] == null ? null : ctx_r9.gradientCircleChart[i_r8].series)("chart", ctx_r9.gradientCircleChart[i_r8] == null ? null : ctx_r9.gradientCircleChart[i_r8].chart)("plotOptions", ctx_r9.gradientCircleChart[i_r8] == null ? null : ctx_r9.gradientCircleChart[i_r8].plotOptions)("labels", ctx_r9.gradientCircleChart[i_r8] == null ? null : ctx_r9.gradientCircleChart[i_r8].labels)("stroke", ctx_r9.gradientCircleChart[i_r8] == null ? null : ctx_r9.gradientCircleChart[i_r8].stroke)("fill", ctx_r9.gradientCircleChart[i_r8] == null ? null : ctx_r9.gradientCircleChart[i_r8].fill);
  }
}

function CandidateResultComponent_ng_container_1_div_17_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CandidateResultComponent_ng_container_1_div_17_div_7_apx_chart_3_Template, 1, 6, "apx-chart", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "This shows the correctness of questions attempted by the candidate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ul", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Section Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Correct: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "li", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Incorrect: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "li", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Partially Correct: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "li", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Not Attempted: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "li", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Manually Graded: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80);
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
  }

  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.assessment);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r7.section_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Total Questions: ", item_r7.total_section_items, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r7.total_correct_items, " Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r7.total_correct_items_mark, " Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r7.total_incorrect_items, " Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r7.total_incorrect_items_mark, " Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r7.total_not_attempted_items_mark, " Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r7.total_partial_correct_items_mark, " Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r7.total_not_attempted_items, " Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r7.total_not_attempted_items_mark, " Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r7.total_manual_graded_items, " Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r7.total_manual_graded_items_mark, " Marks");
  }
}

function CandidateResultComponent_ng_container_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h5", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Attempt Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Distribution of questions attempted in each section. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CandidateResultComponent_ng_container_1_div_17_div_7_Template, 81, 13, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.assessment.attempt_summary);
  }
}

function CandidateResultComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Back All Candidates");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CandidateResultComponent_ng_container_1_app_breadcrumbs_5_Template, 1, 1, "app-breadcrumbs", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CandidateResultComponent_ng_container_1_div_7_Template, 43, 14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Exam Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CandidateResultComponent_ng_container_1_div_12_Template, 82, 10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Result Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, CandidateResultComponent_ng_container_1_div_17_Template, 8, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/examalpha/reports/", ctx_r1.assessmentId, "/results");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.assessment);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.assessment);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.assessment);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.assessment);
  }
}

class CandidateResultComponent {
  constructor(assessmentService, activatedRoute, dataService) {
    this.assessmentService = assessmentService;
    this.activatedRoute = activatedRoute;
    this.dataService = dataService;
    this.assessment = null;
    this.barChartSeries = null;
    this.pieChartSeries = null;
    this.gradientCircleChart = [];
    this.isLoadingResult = false;
  }

  ngOnInit() {
    this.getResultParams();
    this.fetchResult();
  }

  fetchResult() {
    var _this = this;

    this.isLoadingResult = true;
    this.dataService.getCandidateResult(this.assessmentId, this.participantId).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        yield _this.initializeDashboardInformation(res);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), () => this.isLoadingResult = false);
  }

  initializeDashboardInformation(res) {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2._gradientCircleChart('["--vz-success"]', res);
      _this2.assessment = res;

      _this2.initBreadcrumb();

      _this2.isLoadingResult = false;
    })();
  }

  getResultParams() {
    this.activatedRoute.paramMap.subscribe(route => {
      this.participantId = route.get('participantId');
      this.assessmentId = route.get('assessmentId');
    });
  }

  initBreadcrumb() {
    var _a, _b;

    const candidateName = `${(_a = this.assessment.reg_fields['FIRST NAME']) !== null && _a !== void 0 ? _a : ''} ${(_b = this.assessment.reg_fields['LAST NAME']) !== null && _b !== void 0 ? _b : ''}`;
    this.breadCrumbItems = [{
      label: 'Results',
      active: false
    }, {
      label: candidateName,
      active: true
    }];
  }

  calculateTimeSpent() {
    var _a, _b;

    const durationMinutes = this.assessment.logins_ips ? ((_a = this.assessment.logins_ips) === null || _a === void 0 ? void 0 : _a.duration) !== null ? `${(_b = this.assessment.logins_ips) === null || _b === void 0 ? void 0 : _b.duration} min(s)` : 'N/A' : 'N/A';
    return durationMinutes;
  }

  getParticipantName() {
    const participantName = `${this.assessment.reg_fields['FIRST NAME']} ${this.assessment.reg_fields['LAST NAME']}`;
    return participantName;
  }

  toOrdinal(n) {
    const s = ["th", "st", "nd", "rd"],
          v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
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

  _gradientCircleChart(colors, res) {
    var _this3 = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      colors = _this3.getChartColorsArray(colors);

      for (const item of res === null || res === void 0 ? void 0 : res.attempt_summary) {
        const config = {
          series: [item.section_scaled_score],
          chart: {
            height: 330,
            type: 'radialBar',
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
              hollow: {
                margin: 0,
                size: '70%',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front'
              },
              track: {
                strokeWidth: '67%',
                margin: 0
              },
              dataLabels: {
                show: true,
                name: {
                  offsetY: -10,
                  show: true,
                  color: '#888',
                  fontSize: '17px'
                },
                value: {
                  color: '#111',
                  fontSize: '36px',
                  show: true
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: colors,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          stroke: {
            lineCap: 'round'
          },
          labels: ['Percent']
        };

        _this3.gradientCircleChart.push(config);
      }
    })();
  }

}

CandidateResultComponent.ɵfac = function CandidateResultComponent_Factory(t) {
  return new (t || CandidateResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_assessment_service_assessments_service__WEBPACK_IMPORTED_MODULE_1__.AssessmentsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService));
};

CandidateResultComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CandidateResultComponent,
  selectors: [["app-candidate-result"]],
  decls: 2,
  vars: 2,
  consts: [["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "visually-hidden"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"], [1, "d-flex", "justify-content-between"], [3, "routerLink"], [3, "breadcrumbItems", 4, "ngIf"], [1, "card", "rounded", "shadow-none", 2, "cursor", "pointer"], ["class", "px-4 card-body", 4, "ngIf"], [1, "rounded", "ribbon-box", "border", "my-3", 2, "cursor", "pointer"], [1, "ribbon", "ribbon-info", "round-shape"], [1, "card-body"], ["class", "row my-5", 4, "ngIf"], [1, "card", "rounded", "ribbon-box", "border", "mb-lg-0", 2, "cursor", "pointer"], [1, "ribbon", "ribbon-primary", "round-shape"], [1, "card-body", "text-muted"], ["class", "my-5", 4, "ngIf"], [3, "breadcrumbItems"], [1, "px-4", "card-body"], [1, "row", "d-flex", "justify-content-between", "mb-2"], [1, "col-sm-12", "col-lg-6", "d-flex", "flex-wrap", "align-items-center", "text-primary", "fs-12", 2, "cursor", "pointer"], [1, "ri-checkbox-blank-fill", "mx-1", "fs-5"], [1, "fs-12"], [1, "col-sm-12", "col-lg-6", "d-flex", "gap-5", "fs-12", "text-secondary", "justify-content-end", 2, "cursor", "pointer"], [1, "ri-play-fill", "text-white", "fs-5", "align-middle", "mx-1", "border", "rounded", "py-1", "px-1", "bg-success"], [1, "text-secondary", "fs-12"], [1, "ri-stop-fill", "fs-5", "text-white", "align-middle", "mx-1", "border", "rounded", "py-1", "px-1", "bg-danger"], [1, "row", "mt-5"], [1, "col-xxl-3", "col-lg-3", "col-md-12"], [1, "card", "border-left", "border-left-success", "p-2"], [1, "fs-6"], [1, "fw-semibold", "fs-20", "mt-2"], [1, "w-semibold", "fs-20"], [1, "mt-2", "text-muted", "fs-12"], [1, "row", "my-5"], [1, "col-lg-4"], [1, "d-flex", "flex-column", "justify-content-between", "mb-2"], [1, "d-flex", "justify-content-start", "mb-2"], [1, "image-placeholder", "bg-soft-primary", "rounded"], [1, "text-uppercase"], [1, "fw-semibold", "fs-20", "mt-3"], [1, "d-flex", "gap-1", "align-items-center", "small"], [1, "text-mute"], [1, "col-lg-8"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "modal-title", "fw-bold"], [1, "text-secondary", "lead", "fs-14"], [1, "message-list-content", "mx-n4", "px-4", "message-list-scroll", 2, "max-height", "220px"], [1, "row"], [1, "col-xxl-6", "col-lg-6", "pointer"], [1, "card", "shadow-none"], [1, "p-2", "d-flex", "align-items-center"], [1, "d-flex", "align-items-center"], [1, "avatar-sm", "me-3", "flex-shrink-0"], [1, "avatar-title", "bg-success", "rounded-2"], [1, "ri-timer-fill", "fs-22"], [1, "fs-20", "fw-bold"], [1, "vr"], [1, "d-flex", "align-items-center", "flex-grow-1", "overflow-hidden", "mx-3"], [1, "fs-14"], [1, "avatar-title", "bg-danger", "rounded-2"], [1, "ri-stop-circle-fill", "fs-22"], [1, "avatar-title", "bg-warning", "rounded-2"], [1, "ri-exchange-fill", "fs-22"], [1, "avatar-title", "bg-primary", "rounded-2"], [1, "bx", "bx-revision", "fs-22"], [1, "my-5"], [1, "text-secondary", "lead"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], [1, "row", "p-3", "rounded", "border", "my-2"], [1, "col-lg-6"], [3, "series", "chart", "plotOptions", "labels", "stroke", "fill", 4, "ngIf"], [1, "text-secondary", "text-center"], [1, "mx-n3"], [1, "list", "list-group", "list-group-flush", "mb-0"], [1, "list-group-item"], [1, "d-flex", "align-items-center", "pagi-list"], [1, "flex-shrink-0", "me-3"], [1, "fw-bold"], [1, "flex-grow-1", "overflow-hidden"], [1, "text-dark"], [1, "flex-shrink-0", "ms-2"], [1, "text-dark", "mb-1"], [3, "series", "chart", "plotOptions", "labels", "stroke", "fill"]],
  template: function CandidateResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CandidateResultComponent_div_0_Template, 7, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CandidateResultComponent_ng_container_1_Template, 18, 5, "ng-container", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoadingResult);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.assessment && !ctx.isLoadingResult);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent, simplebar_angular__WEBPACK_IMPORTED_MODULE_7__.SimplebarAngularComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__.ChartComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtcmVzdWx0LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 34438:
/*!********************************************************!*\
  !*** ./src/app/pages/results/grade/grade.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GradeComponent": () => (/* binding */ GradeComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/enum/itemTypes */ 86159);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 45398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assessment_model_marking_guide_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assessment/model/marking-guide-types */ 47753);
/* harmony import */ var _grading_item_types_drawing_and_writing_model_question_annotation_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../grading-item-types/drawing-and-writing/model/question-annotation.mode */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _grading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grading.service */ 26428);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _grading_item_types_drawing_and_writing_services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../grading-item-types/drawing-and-writing/services/event.service */ 27234);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _assessment_service_marking_guide_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assessment/service/marking-guide.service */ 58314);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _grading_item_types_drawing_and_writing_services_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../grading-item-types/drawing-and-writing/services/store.service */ 69587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _grading_item_types_drawing_and_writing_drawing_and_writing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../grading-item-types/drawing-and-writing/drawing-and-writing.component */ 47849);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/accordion */ 75456);





















function GradeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function GradeComponent_ng_container_1_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u00B7 ", ctx_r10.currentQuestion == null ? null : ctx_r10.currentQuestion.item == null ? null : ctx_r10.currentQuestion.item.topicName, " ");
  }
}

function GradeComponent_ng_container_1_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u00B7", ctx_r11.currentQuestion == null ? null : ctx_r11.currentQuestion.item == null ? null : ctx_r11.currentQuestion.item.subtopicName, "");
  }
}

const _c0 = function (a0) {
  return {
    "bg-soft-secondary": a0
  };
};

function GradeComponent_ng_container_1_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_ng_container_1_div_60_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const i_r16 = restoredCtx.index;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r17.selectPage(i_r16);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("ngbTooltip", "Page ", item_r15 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c0, ctx_r12.currentPage === i_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Page ", item_r15 + 1, " ");
  }
}

function GradeComponent_ng_container_1_div_71_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_ng_container_1_div_71_button_4_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r22);
      const item_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return ctx_r21.removeTool(item_r20);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r20, " ");
  }
}

function GradeComponent_ng_container_1_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, GradeComponent_ng_container_1_div_71_button_4_Template, 2, 1, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_ng_container_1_div_71_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r23.removeTool("all");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, " Clear all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r13.getSelectedTools());
  }
}

function GradeComponent_ng_container_1_app_drawing_and_writing_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-drawing-and-writing", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("questionAnnotationChanges", function GradeComponent_ng_container_1_app_drawing_and_writing_95_Template_app_drawing_and_writing_questionAnnotationChanges_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r25.questionAnnotationChanges($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("currentQuestion", ctx_r14.currentQuestion)("currentQuestionIndex", ctx_r14.currentQuestionIndex)("showQuestionPanel", ctx_r14.showQuestionPanel)("currentQuestionMarkingGuide", ctx_r14.currentQuestionMarkingGuide)("gradingSummary", ctx_r14.gradingSummary)("pageSchemeData", ctx_r14.pageSchemeData)("currentQuestionMarkingSectionChanges", ctx_r14.currentQuestionMarkingSectionChanges);
  }
}

function GradeComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_ng_container_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r27.goBack();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Total questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, " Total correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "Total Penalty");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "Total violations");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](46, GradeComponent_ng_container_1_div_46_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](47, GradeComponent_ng_container_1_div_47_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_ng_container_1_Template_button_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r29.previousQuestionItem();
      return ctx_r29.hideSideBar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](52, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53, "Prev ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_ng_container_1_Template_button_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r30.nextQuestionItem();
      return ctx_r30.hideSideBar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57, " Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](58, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](60, GradeComponent_ng_container_1_div_60_Template, 2, 5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65, "Tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_ng_container_1_Template_button_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r31.selectMeasurementTool("ruler");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](68, "Ruler");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_ng_container_1_Template_button_click_69_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r32.selectMeasurementTool("protractor");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](70, "Protractor");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](71, GradeComponent_ng_container_1_div_71_Template, 7, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](75, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_ng_container_1_Template_button_click_76_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r33.selectBackgroundType("LINE");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](77, "LINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_ng_container_1_Template_button_click_78_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r34.selectBackgroundType("GRID");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](79, "GRID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_ng_container_1_Template_button_click_80_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r35.ToggleQuestionPane();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "svg", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](82, "path", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_ng_container_1_Template_button_click_83_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r36.showMarkingGuideSideBar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "svg", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](85, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_ng_container_1_Template_button_click_86_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](24);

      return ctx_r37.openModal_(_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "svg", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](88, "circle", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](89, "path", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_ng_container_1_Template_button_click_91_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](22);

      return ctx_r38.openSaveGradesConfirmation(_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](92, " Save all grading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](93, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](94, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](95, GradeComponent_ng_container_1_app_drawing_and_writing_95_Template, 1, 7, "app-drawing-and-writing", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_16_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r1.getParticipantOverviewData()) == null ? null : tmp_0_0.initials, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((tmp_1_0 = ctx_r1.getParticipantOverviewData()) == null ? null : tmp_1_0.participantName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((tmp_2_0 = ctx_r1.getParticipantOverviewData()) == null ? null : tmp_2_0.loginField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((tmp_3_0 = ctx_r1.getParticipantOverviewData()) == null ? null : tmp_3_0.totalQuestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((tmp_4_0 = ctx_r1.gradingSummary == null ? null : ctx_r1.gradingSummary.overall == null ? null : ctx_r1.gradingSummary.overall.score) !== null && tmp_4_0 !== undefined ? tmp_4_0 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((tmp_5_0 = ctx_r1.gradingSummary == null ? null : ctx_r1.gradingSummary.overall == null ? null : ctx_r1.gradingSummary.overall.penalty) !== null && tmp_5_0 !== undefined ? tmp_5_0 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((tmp_6_0 = ctx_r1.gradingSummary == null ? null : ctx_r1.gradingSummary.overall == null ? null : ctx_r1.gradingSummary.overall.violations) !== null && tmp_6_0 !== undefined ? tmp_6_0 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](((tmp_7_0 = ctx_r1.gradingSummary == null ? null : ctx_r1.gradingSummary.overall == null ? null : ctx_r1.gradingSummary.overall.score) !== null && tmp_7_0 !== undefined ? tmp_7_0 : 0) - ((tmp_7_0 = ctx_r1.gradingSummary == null ? null : ctx_r1.gradingSummary.overall == null ? null : ctx_r1.gradingSummary.overall.penalty) !== null && tmp_7_0 !== undefined ? tmp_7_0 : 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((tmp_8_0 = ctx_r1.getParticipantOverviewData()) == null ? null : tmp_8_0.section.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.currentQuestion == null ? null : ctx_r1.currentQuestion.item == null ? null : ctx_r1.currentQuestion.item.topicName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.currentQuestion == null ? null : ctx_r1.currentQuestion.item == null ? null : ctx_r1.currentQuestion.item.subtopicName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r1.isPreviousDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r1.currentQuestionIndex + 1, " of ", ctx_r1.sections.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r1.isNextDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.getSelectedTools().length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (tmp_16_0 = ctx_r1.backgroundType) !== null && tmp_16_0 !== undefined ? tmp_16_0 : "LINE", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngbTooltip", ctx_r1.showQuestionPanel ? "Hide question" : "Show Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngbTooltip", "Show Marking Guide");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Show Question ", ctx_r1.currentQuestionIndex + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r1.allQuestionsFullyGraded());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r1.currentQuestion && ctx_r1.currentQuestion.item.itemType) === ctx_r1.itemType.DRAWING_AND_WRITING);
  }
}

function GradeComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "div", 71);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", ctx_r2.pageSchemeData.general_marking_guide, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);
  }
}

function GradeComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "div", 71);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", ctx_r3.currentQuestionMarkingGuide == null ? null : ctx_r3.currentQuestionMarkingGuide.marking_guide, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);
  }
}

function GradeComponent_div_19_p_accordionTab_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "div", 71);
  }

  if (rf & 2) {
    const section_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", section_r40.marking_guide, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);
  }
}

function GradeComponent_div_19_p_accordionTab_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p-accordionTab", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, GradeComponent_div_19_p_accordionTab_2_div_1_Template, 1, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const section_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("header", section_r40.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", section_r40 == null ? null : section_r40.marking_guide);
  }
}

function GradeComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "p-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, GradeComponent_div_19_p_accordionTab_2_Template, 2, 2, "p-accordionTab", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.currentQuestionMarkingGuide.sections);
  }
}

function GradeComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Grading");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_div_20_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r43.hideSideBar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function GradeComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "h4", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Confirm Action Dialog");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " Are you sure you want to save all grading? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_ng_template_21_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r48);
      const modal_r45 = restoredCtx.$implicit;
      return modal_r45.close("Close click");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " No, Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "button", 83, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_ng_template_21_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r48);

      const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](10);

      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r49.saveGrade(_r46);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, " Yes, Save grades ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function GradeComponent_ng_template_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "div", 89);
  }

  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", ctx_r51.getCurrentQuestion().item.passageStimulus, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);
  }
}

function GradeComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, GradeComponent_ng_template_23_div_3_Template, 1, 1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_ng_template_23_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53);
      const modal_r50 = restoredCtx.$implicit;
      return modal_r50.close("Close click");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "svg", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "path", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r9.getCurrentQuestion()) == null ? null : tmp_0_0.item.passageStimulus);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", ctx_r9.getCurrentQuestion().item.stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);
  }
}

class GradeComponent {
  constructor(gradingService, dataService, activatedRoute, konvaEventTools, modalService, markingGuideService, notifier, drawingStore) {
    this.gradingService = gradingService;
    this.dataService = dataService;
    this.activatedRoute = activatedRoute;
    this.konvaEventTools = konvaEventTools;
    this.modalService = modalService;
    this.markingGuideService = markingGuideService;
    this.notifier = notifier;
    this.drawingStore = drawingStore;
    this.loadingPageData = false;
    this.currentQuestionIndex = 0;
    this.itemType = src_app_shared_enum_itemTypes__WEBPACK_IMPORTED_MODULE_1__.ItemType;
    this.showQuestionPanel = false;
    this.gradingInputTouched = false;
    this.isSavingGrades = false;
    this.cummulativeGradingScore = 0;
    this.showMarkingGuide = false;
    this.pages = [];
    this.selectedMeasuringToolsSet = new Set();
    this.selectedTools = [];
    this.params = {
      section_id: '',
      participant_id: '',
      assesement_id: ''
    };
  }

  ngOnInit() {
    this.getURLParams();
    this.fetchPageMarkingGuide();
    this.storeSubscription = this.drawingStore.store$.subscribe(storeState => this.onDrawingStoreChanges(storeState));
    this.backgroundSub$ = this.konvaEventTools.backgroundChange$.subscribe(type => this.backgroundType = type);
  }

  onDrawingStoreChanges(storeState) {
    this.currentPage = storeState.currentPage;
    this.pages = Array.from({
      length: storeState.pages.length
    }, (_, i) => i);
  }

  selectPage(pageIndex) {
    this.drawingStore.selectPage(pageIndex);

    this.konvaEventTools._pageSelectEvent.next();
  }

  getURLParams() {
    this.activatedRoute.queryParamMap.subscribe(route => {
      const participant_id = route.get('participant');
      const section_id = route.get('section_id');
      this.schemeId = route.get('schemeId');
      this.params = Object.assign(Object.assign({}, this.params), {
        participant_id,
        section_id
      });
    });
    this.activatedRoute.paramMap.subscribe(route => {
      const assesement_id = route.get('examId');
      this.params = Object.assign(Object.assign({}, this.params), {
        assesement_id
      });
    });
  }

  fetchPageData() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const requests = {
        sections: _this.gradingService.getGradingSections(_this.params.assesement_id, _this.params.section_id, _this.params.participant_id),
        participant: _this.dataService.getCandidateResult(_this.params.assesement_id, _this.params.participant_id)
      };
      (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)(requests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => {
        _this.loadingPageData = false;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)({
          sections: null,
          participant: null
        });
      })).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
          sections,
          participant
        }) {
          _this.sections = sections === null || sections === void 0 ? void 0 : sections.map(item => {
            var _a, _b;

            const graded = ((_b = (_a = item.item_score) === null || _a === void 0 ? void 0 : _a.annotations) === null || _b === void 0 ? void 0 : _b.length) ? true : false;
            item.item_score.annotations = item.item_score.annotations.map(ann => Object.assign(Object.assign({}, ann), {
              graded
            }));
            return item;
          });
          _this.participantData = participant;

          _this.setDefaultQuestion();

          _this.setQuestionsGrading();

          _this.loadingPageData = false;

          _this.updateCurrentQuestionGuide();

          _this.calculateGradingSummary();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  fetchPageMarkingGuide() {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loadingPageData = true;

      _this2.markingGuideService.fetchMarkingGuideAssessmentSectionScheme(_this2.params.assesement_id, _this2.params.section_id, _this2.schemeId).subscribe({
        next: function () {
          var _ref2 = (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            _this2.pageSchemeData = res;
            yield _this2.fetchPageData();
          });

          return function next(_x2) {
            return _ref2.apply(this, arguments);
          };
        }(),
        error: err => {
          var _a, _b;

          _this2.notifier.notify('error', (_b = (_a = err.error) === null || _a === void 0 ? void 0 : _a.error) !== null && _b !== void 0 ? _b : 'Sorry! Unable to fetch marking guide'); // this.loadingPageData = false
          // this.fetchPageData()

        }
      });
    })();
  }

  getQuestionGrading() {
    var _a;

    return (_a = this.grade) === null || _a === void 0 ? void 0 : _a[this.currentQuestionIndex];
  }

  setDefaultQuestion() {
    var _a;

    this.currentQuestion = (_a = this.sections) === null || _a === void 0 ? void 0 : _a[0];
  }

  updateCurrentQuestionItem() {
    this.currentQuestion = this.sections[this.currentQuestionIndex];
    this.updateCurrentQuestionGuide();
  }

  updateCurrentQuestionGuide() {
    var _a, _b;

    this.currentQuestionMarkingGuide = (_b = (_a = this.pageSchemeData) === null || _a === void 0 ? void 0 : _a.questions) === null || _b === void 0 ? void 0 : _b.find(item => item.item_id == this.currentQuestion.item.id);
  }

  getCurrentQuestion() {
    return this.currentQuestion;
  }

  ToggleQuestionPane() {
    this.showQuestionPanel = !this.showQuestionPanel;

    this.konvaEventTools._resizeCanvas$.next();
  }

  showGrading() {
    const rightBar = document.getElementById("gradingSideBar");

    if (rightBar != null) {
      rightBar.classList.toggle("show");
      rightBar.setAttribute("style", "visibility: visible;");
    }

    this.validateGradingFormForAllSections();
  }

  showMarkingGuideSideBar() {
    const leftBar = document.getElementById("markingGuideSideBar");

    if (leftBar != null) {
      leftBar.classList.toggle("show");
      leftBar.setAttribute("style", "visibility: visible;");
    }

    this.validateGradingFormForAllSections();
  }

  hideSideBar() {
    const rightBar = document.getElementById("gradingSideBar");

    if (rightBar != null) {
      rightBar.classList.remove("show");
      rightBar.removeAttribute("style");
    }
  }

  hideMarkingGuideSideBar() {
    const rightBar = document.getElementById("markingGuideSideBar");

    if (rightBar != null) {
      rightBar.classList.remove("show");
      rightBar.removeAttribute("style");
    }
  }

  nextQuestionItem() {
    if (this.currentQuestionIndex < this.sections.length - 1) {
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
    return this.currentQuestionIndex === this.sections.length - 1;
  }

  getParticipantOverviewData() {
    if (!this.participantData) {
      return null;
    }

    const section = this.participantData.section_attempts.sections.find(item => item.id == this.params.section_id);
    const participantName = `${this.participantData.reg_fields['FIRST NAME']} ${this.participantData.reg_fields['LAST NAME']}`;
    const loginField = this.participantData.reg_fields[this.participantData.login_field];
    const totalQuestions = this.participantData.score.total_items;
    const score = this.sections.reduce((last, curr) => curr.item_score.score + last, 0);
    const initials = participantName.split(' ').map(item => item[0].toUpperCase()).join('');
    return {
      section,
      participantName,
      loginField,
      totalQuestions,
      score,
      initials
    };
  }

  openAssignGradeToQuestionModal(assignGradeToQuestionConfirmationModal) {
    this.modalRef = this.modalService.open(assignGradeToQuestionConfirmationModal, {
      centered: true,
      size: 'md'
    });
  }

  openSaveGradesConfirmation(saveGradesConfirmationModal) {
    this.modalRef = this.modalService.open(saveGradesConfirmationModal, {
      centered: true,
      size: 'md'
    });
  }

  saveGrade(btn) {
    btn.disabled = true;
    const gradingPayload = this.sections.map(section => {
      var _a, _b;

      const grading = new _grading_item_types_drawing_and_writing_model_question_annotation_mode__WEBPACK_IMPORTED_MODULE_4__.Grading();
      const sectionGradingSummary = (_a = this.gradingSummary) === null || _a === void 0 ? void 0 : _a.perQuestion[section.item.id];

      if (!sectionGradingSummary) {
        return null;
      }

      const sectionScore = sectionGradingSummary.score - sectionGradingSummary.penalty;
      const annotations = (_b = section === null || section === void 0 ? void 0 : section.item_score) === null || _b === void 0 ? void 0 : _b.annotations.map(item => {
        item.position = item.position.map(pos => pos.toString());

        const {
          contextMenuSectionId,
          contextMenuUniqueId,
          contextMenuQuestionId,
          contextMenuPage,
          action
        } = item,
              restItems = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__rest)(item, ["contextMenuSectionId", "contextMenuUniqueId", "contextMenuQuestionId", "contextMenuPage", "action"]);

        return restItems;
      });
      grading.item_id = section.item.id;
      grading.remark = '';
      grading.score = sectionScore;
      grading.include_penalty = section.item_score.has_penalty;
      grading.annotations = annotations;
      return grading;
    }).filter(Boolean);
    this.isSavingGrades = true;
    this.gradingService.createManualGrade(gradingPayload, this.params.assesement_id, this.params.section_id, this.params.participant_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.finalize)(() => btn.disabled = false)).subscribe({
      next: () => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
          title: 'Congratulations!',
          text: 'You have successfully graded ' + this.getParticipantOverviewData().loginField,
          icon: 'success'
        });
        this.isSavingGrades = false;
        this.modalService.dismissAll();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.timer)(1000).subscribe(() => {
          history.back();
          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().close();
        });
      },
      error: error => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
          icon: 'error',
          title: 'Failed!',
          text: `${error.error.message}`
        });
        this.isSavingGrades = false;
        this.modalService.dismissAll();
      }
    });
  }

  goBack() {
    history.back();
  } // QuestionAnnotation | ContextMenuGradingForm 


  questionAnnotationChanges(event) {
    const section = this.sections[this.currentQuestionIndex];
    const annotations = section.item_score.annotations;

    if (event.action === 'score') {
      if (!this.validateScore(event.annotation)) {
        return;
      }

      annotations.push(event.annotation);
      this.calculateGradingSummary();
      return;
    }

    const annIndex = annotations.findIndex(item => item.contextMenuUniqueId === event.annotation.uniqueId && item.contextMenuQuestionId === event.annotation.questionId && item.contextMenuSectionId === event.annotation.sectionId && item.contextMenuPage === event.annotation.page);
    const targetAnnotation = annotations[annIndex];
    if (!targetAnnotation) return;

    if (event.action === 'position') {
      targetAnnotation.position = event.annotation.position;
    }

    if (event.action === 'delete') {
      const scoreUsages = annotations.filter(item => item.score_id == event.annotation.scoreId).filter(item => !item.versioned); // console.log(scoreUsages)

      this.currentQuestionMarkingSectionChanges = {
        score: targetAnnotation,
        applied: scoreUsages.length - 1
      };
      targetAnnotation.versioned = true;
      this.calculateGradingSummary();
      this.notifier.notify('success', 'Score removed and versioned');
    }
  }

  validateScore(annotation) {
    const question = this.pageSchemeData.questions.find(item => item.item_id == annotation.contextMenuQuestionId);
    const section = question.sections.find(item => item.id == annotation.contextMenuSectionId);
    const generalScores = this.pageSchemeData.general_scores_correct.concat(this.pageSchemeData.general_scores_penalty, this.pageSchemeData.general_scores_violation);
    const scores = section.scores_correct.concat(section.scores_penalty, section.scores_violation, generalScores);
    const targetScore = scores.find(item => item.id == annotation.contextMenuScoreId);
    const sectionQuestion = this.sections[this.currentQuestionIndex];
    const sectionQuestionAnnotations = sectionQuestion.item_score.annotations;
    const scoreUsages = sectionQuestionAnnotations.filter(item => item.contextMenuScoreId == annotation.contextMenuScoreId).filter(item => !item.versioned);

    if (scoreUsages.length == targetScore.max_occurrence) {
      this.notifier.notify('error', 'Max usage for this score has been reached');
      this.drawingStore.deleteGradingFormContextMenuItem(annotation.contextMenuFormIndex);
      return false;
    }

    this.currentQuestionMarkingSectionChanges = {
      score: targetScore,
      applied: scoreUsages.length + 1
    };
    return true;
  }

  calculateGradingSummary() {
    const result = {
      overall: {
        violations: 0,
        score: 0,
        penalty: 0
      },
      perQuestion: {}
    };
    this.sections.forEach(section => {
      var _a;

      (_a = section.item_score.annotations) === null || _a === void 0 ? void 0 : _a.filter(item => !item.versioned).forEach(annotation => {
        const category = annotation.mark_category;
        const questionId = annotation.item_id;

        if (!result.perQuestion[questionId]) {
          result.perQuestion[questionId] = {
            violations: 0,
            score: 0,
            penalty: 0
          };
        }

        const value = annotation.score || 0;

        switch (category) {
          case _assessment_model_marking_guide_types__WEBPACK_IMPORTED_MODULE_3__.SchemeMarkCategory.VIOLATION:
            result.overall.violations += value;
            result.perQuestion[questionId].violations += value;
            break;

          case _assessment_model_marking_guide_types__WEBPACK_IMPORTED_MODULE_3__.SchemeMarkCategory.SCORE:
            result.overall.score += value;
            result.perQuestion[questionId].score += value;
            break;

          case _assessment_model_marking_guide_types__WEBPACK_IMPORTED_MODULE_3__.SchemeMarkCategory.PENALTY:
            result.overall.penalty += value;
            result.perQuestion[questionId].penalty += value;
            break;
        }
      });
    });
    this.gradingSummary = result;
  }

  openModal_(content, size = 'xl') {
    this.modalService.open(content, {
      size: 'xl'
    });
  }

  selectMeasurementTool(tool) {
    this.konvaEventTools._selectMeasurementTool$.next(tool);

    this.selectedMeasuringToolsSet.add(tool);
  }

  selectBackgroundType(type) {
    this.konvaEventTools.backgroundChange$.next(type);
  }

  getSelectedTools() {
    return Array.from(this.selectedMeasuringToolsSet.values());
  }

  removeTool(tool) {
    if (tool == 'all') {
      this.selectedMeasuringToolsSet.clear();
    } else {
      this.selectedMeasuringToolsSet.delete(tool);
    }

    this.konvaEventTools._removeMeasurementTool$.next(tool);
  }

  calcGradingCummulativeScore() {// const score = this.grade.reduce((lastItem, currItem) => {
    //   const score = currItem.score ?? 0
    //   return lastItem + (+score)
    // }, 0)
    // this.cummulativeGradingScore = score
  }

  allQuestionsFullyGraded() {// const grading = this.grade.map(item => item.graded)
    // const invalids = grading.filter(item => item == false)
    // return invalids.length
  }

  assignGradeToQuestion() {// this.grade[this.currentQuestionIndex].graded = true
    // this.nextQuestionItem()
    // this.modalService.dismissAll();
    // this.gradingInputTouched = false
    // this.hideSideBar()
    // this.calcGradingCummulativeScore()
  }

  validateGradingFormForAllSections() {// for (const item of this.grade) {
    //   item.valid = item.isValid()
    // }
  }

  setQuestionsGrading() {// this.grade = this.sections.map(item => {
    //   const grade = new Grading()
    //   if (item.item_score.graded) {
    //     grade.grade = item.item.scoringOption.score
    //     grade.valid = true;
    //     grade.item_id = item.item_score.item_id
    //     grade.include_penalty = item.item_score.has_penalty
    //     grade.remark = item.item_score.manual_grade_remark
    //     grade.score = item.item_score.score
    //     grade.graded = item.item_score.graded
    //     if (item.item_score.un_graded_response.length < 1) {
    //       grade.noResponse = true
    //     }
    //   } else {
    //     grade.grade = item.item.scoringOption.score
    //     grade.valid = false;
    //     grade.item_id = item.item_score.item_id
    //     grade.include_penalty = item.item_score.has_penalty
    //     grade.remark = ' '
    //     grade.score = null
    //     grade.graded = false
    //     if (item.item_score.un_graded_response.length < 1) {
    //       grade.score = 0
    //       grade.noResponse = true
    //     }
    //   }
    //   return grade
    // })
  }

}

GradeComponent.ɵfac = function GradeComponent_Factory(t) {
  return new (t || GradeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_grading_service__WEBPACK_IMPORTED_MODULE_5__.GradingService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_grading_item_types_drawing_and_writing_services_event_service__WEBPACK_IMPORTED_MODULE_7__.KonvaToolsEvent), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_assessment_service_marking_guide_service__WEBPACK_IMPORTED_MODULE_8__.MarkingGuideService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_20__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_grading_item_types_drawing_and_writing_services_store_service__WEBPACK_IMPORTED_MODULE_9__.DrawingAndWritingStore));
};

GradeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: GradeComponent,
  selectors: [["app-grade"]],
  decls: 25,
  vars: 6,
  consts: [["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], [4, "ngIf"], ["id", "markingGuideSideBar", "tabindex", "-1", 1, "offcanvas", "offcanvas-start", "border-right", 2, "width", "600px !important"], [1, "p-3"], [1, "row"], [1, "col"], [1, "d-flex", "justify-content-between", "align-center", "align-items-center"], [1, "d-flex", "g-1"], [1, "text-primary"], ["type", "button", 1, "btn", "btn-soft-primary", "btn-icon", "btn-sm", "fs-16", 3, "click"], [1, "ri-close-fill", "align-bottom"], [1, "p-4", "d-flex", "flex-column", "h-100"], ["header", "General Marking Instruction"], ["style", "max-height: 70vh;overflow: auto;", 3, "innerHTML", 4, "ngIf"], ["header", "Question Marking instruction"], ["header", "Question Marking scheme"], ["style", "max-height: 70vh;overflow: auto;", 4, "ngIf"], ["class", "offcanvas offcanvas-end border-l", "id", "gradingSideBar", "tabindex", "-1", 4, "ngIf"], ["saveGradesConfirmationModal", ""], ["viewFullQuestion", ""], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "visually-hidden"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"], [1, "btn", "btn-md", "btn-outline-primary", 3, "click"], [1, "col-lg-12", "mt-3", "border-top", "border-top-dashded", "pt-2"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "gap-5", "justify-content-between", "align-items-center"], [1, "d-flex", "gap-2", "align-items-center"], [1, "rounded-circle", "d-flex", "flex-colum", "align-items-center", "justify-content-center", "bg-soft-secondary", 2, "width", "50px", "height", "50px"], [1, "fs-12", "fw-bold", "text-uppercase"], [1, "fs-14", "fw-bold"], [1, "small"], [1, "d-flex", "justify-content-between", "gap-3"], [1, "small", "fw-bold", "fs-12", "text-center"], [1, "text-success"], [1, "text-danger"], [1, "d-flex", "align-items-center", "gap-1"], ["class", "small", 4, "ngIf"], [1, "d-flex", "justify-content-between", "border-top", "py-3", "mt-2"], [1, "btn", "p-2", "bg-transparent", "border", "small", "d-flex", "align-items-center", "gap-2", 2, "background-color", "#cccccc", 3, "disabled", "click"], [1, "ri-arrow-left-s-line"], [1, "ri-arrow-right-s-line"], [1, "py-2", "d-flex", "gap-1", 2, "width", "fit-content"], ["class", "btn btn-md border", 3, "ngbTooltip", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "btn-group"], ["ngbDropdown", "", "role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group"], ["ngbDropdownToggle", "", 1, "btn", "btn-md", "border"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], ["class", "btn-group", "ngbDropdown", "", "role", "group", "aria-label", "Button group with nested dropdown", 4, "ngIf"], ["ngbDropdown", ""], ["ngbDropdownMenu", ""], [1, "btn", "btn-md", "border", 3, "ngbTooltip", "click"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-secondary"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8.99994 10 7 11.9999l1.99994 2M12 5v14M5 4h14c.5523 0 1 .44772 1 1v14c0 .5523-.4477 1-1 1H5c-.55228 0-1-.4477-1-1V5c0-.55228.44772-1 1-1Z"], ["triggers", "mouseenter:mouseleave", "aria-controls", "markingGuideSideBar", "data-bs-target", "#markingGuideSideBar", "data-bs-toggle", "offcanvas", "type", "button", 1, "btn", "btn-md", "border", "text-black", "align-items-center", "d-none", "d-md-block", 3, "ngbTooltip", "click"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "none", "viewBox", "0 0 24 24", 1, "text-secondary"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"], [1, "btn", "btn-md", "border", "btn-primary", 2, "background-color", "#25a0e2", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "20", "height", "20", "color", "#fff", "fill", "none"], ["cx", "12", "cy", "12", "r", "10", "stroke", "#fff", "stroke-width", "2"], ["d", "M17 12L7 12M17 12C17 11.4398 15.604 10.3932 15.25 10M17 12C17 12.5602 15.604 13.6068 15.25 14M7 12C7 11.4398 8.39601 10.3932 8.75 10M7 12C7 12.5602 8.39601 13.6068 8.75 14", "stroke", "#fff", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], [3, "currentQuestion", "currentQuestionIndex", "showQuestionPanel", "currentQuestionMarkingGuide", "gradingSummary", "pageSchemeData", "currentQuestionMarkingSectionChanges", "questionAnnotationChanges", 4, "ngIf"], [1, "btn", "btn-md", "border", 3, "ngbTooltip", "ngClass", "click"], [1, "pi", "pi-trash", "text-danger"], ["ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 3, "click"], [3, "currentQuestion", "currentQuestionIndex", "showQuestionPanel", "currentQuestionMarkingGuide", "gradingSummary", "pageSchemeData", "currentQuestionMarkingSectionChanges", "questionAnnotationChanges"], [2, "max-height", "70vh", "overflow", "auto", 3, "innerHTML"], [2, "max-height", "70vh", "overflow", "auto"], [3, "header", 4, "ngFor", "ngForOf"], [3, "header"], ["id", "gradingSideBar", "tabindex", "-1", 1, "offcanvas", "offcanvas-end", "border-l"], [1, "pb-1"], [1, "ri-information-line", "text-primary"], [1, "modal-body", "p-5"], [1, "mb-4", "text-center"], [1, "text-center", "text-muted"], [1, "d-flex", "justify-content-center", "gap-2", "mt-2"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["btn", ""], [1, "modal-body", "text-center", "p-3"], [1, "position-relative"], [1, "pt-5", "pb-2", 2, "overflow", "scroll"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [1, "position-absolute", "top-0", "w-100", "d-flex", "justify-content-end"], ["data-bs-dismiss", "modal", "type", "button", 1, "btn", "btn-md", "btn-danger", 3, "click"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-gray-800"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18 17.94 6M18 18 6.06 6"]],
  template: function GradeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, GradeComponent_div_0_Template, 7, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, GradeComponent_ng_container_1_Template, 96, 23, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "h5", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Marking Guide");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GradeComponent_Template_button_click_10_listener() {
        return ctx.hideMarkingGuideSideBar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "p-accordion");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "p-accordionTab", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, GradeComponent_div_15_Template, 1, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "p-accordionTab", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, GradeComponent_div_17_Template, 1, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "p-accordionTab", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, GradeComponent_div_19_Template, 3, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, GradeComponent_div_20_Template, 12, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, GradeComponent_ng_template_21_Template, 12, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, GradeComponent_ng_template_23_Template, 10, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loadingPageData);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.loadingPageData);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.pageSchemeData == null ? null : ctx.pageSchemeData.general_marking_guide);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.currentQuestionMarkingGuide == null ? null : ctx.currentQuestionMarkingGuide.marking_guide);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.currentQuestionMarkingGuide == null ? null : ctx.currentQuestionMarkingGuide.sections.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.currentQuestion);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbDropdownItem, _grading_item_types_drawing_and_writing_drawing_and_writing_component__WEBPACK_IMPORTED_MODULE_10__.DrawingAndWritingComponent, primeng_accordion__WEBPACK_IMPORTED_MODULE_22__.Accordion, primeng_accordion__WEBPACK_IMPORTED_MODULE_22__.AccordionTab],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFkZS5jb21wb25lbnQuc2NzcyJ9 */"]
});
;

/***/ }),

/***/ 26428:
/*!********************************************************!*\
  !*** ./src/app/pages/results/grade/grading.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GradingService": () => (/* binding */ GradingService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class GradingService {
    constructor(_http) {
        this._http = _http;
    }
    fetchMarkingGuide(assessmentId, sectionId, schemeId) {
        return this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme_id/${schemeId}/fetch_scheme_page`, { withCredentials: true });
    }
    getGradingSections(assessmentId, sectionId, participantId) {
        const url = `/examalpha/api/v1/sch_mon_grd/reports/grading/items_to_grade/assessment/${assessmentId}/section/${sectionId}/participant/${participantId}`;
        return this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP + url, { withCredentials: true });
    }
    getParticipantGradingData(assessmentId, sectionId, participantId) {
        const url = `/examalpha/api/v1/sch_mon_grd/reports/result/participant_data/assessment/${assessmentId}/section/${sectionId}/participant/${participantId}`;
        return this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP + url, { withCredentials: true });
    }
    createManualGrade(payload, assessmentId, sectionId, participantId) {
        const url = `/examalpha/api/v1/sch_mon_grd/reports/grading/grade_manual_items/assessment/${assessmentId}/section/${sectionId}/participant/${participantId}`;
        return this._http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP + url, payload, { withCredentials: true });
    }
}
GradingService.ɵfac = function GradingService_Factory(t) { return new (t || GradingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
GradingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GradingService, factory: GradingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 26641:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/results/grading-item-types/drawing-and-writing/custom-context-menu/custom-context-menu.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomContextMenuComponent": () => (/* binding */ CustomContextMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 45398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);




function CustomContextMenuComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomContextMenuComponent_div_4_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r2.menuItemClicked(item_r1.id); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "");
} }
class CustomContextMenuComponent {
    constructor() {
        this.isVisible = false;
        this.menuClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngAfterViewInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(0).subscribe(() => this.isVisible = true);
    }
    menuItemClicked(sectionId) {
        this.menuClicked.emit({ sectionId, x: this.x, y: this.y });
    }
}
CustomContextMenuComponent.ɵfac = function CustomContextMenuComponent_Factory(t) { return new (t || CustomContextMenuComponent)(); };
CustomContextMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomContextMenuComponent, selectors: [["app-custom-context-menu"]], inputs: { x: "x", y: "y", sections: "sections" }, outputs: { menuClicked: "menuClicked" }, decls: 5, vars: 7, consts: [[1, "custom-context-menu", "card", "border"], [1, "px-3", "py-2", "text-black"], [1, "flex", "flex-col"], ["class", "content-option", 3, "click", 4, "ngFor", "ngForOf"], [1, "content-option", 3, "click"]], template: function CustomContextMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomContextMenuComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.x, "px")("top", ctx.y, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sections);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".custom-context-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: white;\n  z-index: 1000;\n  opacity: 0;\n  transition: opacity 300ms ease-in;\n  border-color: #cdc9c9 !important;\n  width: 250px;\n  max-width: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.custom-context-menu.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.content-option[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e3e0e0;\n  border-style: dashed;\n  cursor: pointer;\n  transition: all 200ms ease-in;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.content-option[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1jb250ZXh0LW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7QUFDSjs7QUFFRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSiIsImZpbGUiOiJjdXN0b20tY29udGV4dC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuY3VzdG9tLWNvbnRleHQtbWVudSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBvcGFjaXR5OiAwOyBcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIwNSwgMjAxLCAyMDEpICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tY29udGV4dC1tZW51LnNob3cge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50LW9wdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjcsIDIyNCwgMjI0KTtcclxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtb3B0aW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 2869:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/results/grading-item-types/drawing-and-writing/directives/draggable.directive.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DraggableDirective": () => (/* binding */ DraggableDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class DraggableDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.dragging = false;
        this.offsetX = 0;
        this.offsetY = 0;
        this.lastX = 0;
        this.lastY = 0;
        this.startX = 0;
        this.startY = 0;
        this.moved = false;
        this.onMouseMove = (event) => {
            if (this.annotation.graded)
                return;
            if (!this.dragging)
                return;
            // If mouse moved more than 3px, count as drag
            if (Math.abs(event.clientX - this.startX) > 3 || Math.abs(event.clientY - this.startY) > 3) {
                this.moved = true;
            }
            let x = event.clientX - this.parentRect.left - this.offsetX;
            let y = event.clientY - this.parentRect.top - this.offsetY;
            const maxX = this.parentRect.width - this.el.nativeElement.offsetWidth;
            const maxY = this.parentRect.height - this.el.nativeElement.offsetHeight;
            x = Math.max(0, Math.min(x, maxX));
            y = Math.max(0, Math.min(y, maxY));
            this.lastX = x;
            this.lastY = y;
            this.renderer.setStyle(this.el.nativeElement, 'left', `${x}px`);
            this.renderer.setStyle(this.el.nativeElement, 'top', `${y}px`);
        };
        this.onMouseUp = () => {
            this.dragging = false;
            this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grab');
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('mouseup', this.onMouseUp);
            if (this.moved) {
                // Drag ended
                this.dragEnd.emit({ x: this.lastX, y: this.lastY });
            }
            else {
                // Treat as click
                this.clicked.emit();
            }
        };
        this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
        this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grab');
    }
    onMouseDown(event) {
        const target = event.target;
        if (['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'I'].includes(target.tagName)) {
            return;
        }
        event.preventDefault();
        this.dragging = true;
        this.moved = false;
        this.startX = event.clientX;
        this.startY = event.clientY;
        this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grabbing');
        const rect = this.el.nativeElement.getBoundingClientRect();
        this.parentRect = this.el.nativeElement.parentElement.parentElement.getBoundingClientRect();
        this.offsetX = event.clientX - rect.left;
        this.offsetY = event.clientY - rect.top;
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }
    roles() {
        const roles = ['a', 'b', 'c', 'd'];
        const selected = ['a', 'd'];
        const assigned = [];
        const deassign = [];
        selected.forEach(role => {
            if (roles.includes(role)) {
                assigned.push(role);
            }
            else {
                deassign.push(role);
            }
        });
    }
}
DraggableDirective.ɵfac = function DraggableDirective_Factory(t) { return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
DraggableDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DraggableDirective, selectors: [["", "appDraggable", ""]], hostBindings: function DraggableDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function DraggableDirective_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); });
    } }, inputs: { annotation: "annotation" }, outputs: { dragEnd: "dragEnd", clicked: "clicked" } });


/***/ }),

/***/ 47849:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/results/grading-item-types/drawing-and-writing/drawing-and-writing.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawingAndWritingComponent": () => (/* binding */ DrawingAndWritingComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! konva */ 19253);
/* harmony import */ var konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 45398);
/* harmony import */ var _model_store_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/store.model */ 80243);
/* harmony import */ var _custom_context_menu_custom_context_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-context-menu/custom-context-menu.component */ 26641);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _model_question_annotation_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/question-annotation.mode */ 6443);
/* harmony import */ var src_app_pages_assessment_model_marking_guide_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/assessment/model/marking-guide-types */ 47753);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/store.service */ 69587);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/event.service */ 27234);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/draggable.directive */ 2869);

















function DrawingAndWritingComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Correct: ", (tmp_0_0 = ctx_r0.currentQuestionGradingSummary == null ? null : ctx_r0.currentQuestionGradingSummary.score) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Penalty: ", (tmp_1_0 = ctx_r0.currentQuestionGradingSummary == null ? null : ctx_r0.currentQuestionGradingSummary.penalty) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Violations: ", (tmp_2_0 = ctx_r0.currentQuestionGradingSummary == null ? null : ctx_r0.currentQuestionGradingSummary.violations) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Question ", ctx_r0.currentQuestionIndex + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r0.currentQuestion.item.stimulus, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "line", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "line", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "svg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", item_r6.sectionName, "\u00A0|\u00A0", item_r6.placeholderCode, "");
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Delete this item?");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_div_1_Template_button_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      ctx_r16.collapseGradingFormContextMenuItem(i_r7);
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_div_1_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).index;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r19.createScoreVersion(i_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_button_11_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28);
      const i_r26 = restoredCtx.index;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](6);
      return ctx_r27.activeScoringTab = i_r26;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const tab_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r21.activeScoringTab === i_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (item_r6 == null ? null : item_r6.placeholderType) && (item_r6 == null ? null : item_r6.placeholderType) !== tab_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", tab_r25, " ");
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_3_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const score_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", score_r32.max_score, " ");
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_3_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_3_ng_container_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const score_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r38.selectGradingScore(item_r6, score_r32, ctx_r38.markTypeCategories.SCORE);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_3_ng_container_16_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const score_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r42.selectGradingScore(item_r6, score_r32, ctx_r42.markTypeCategories.SCORE, true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "0 Mrk");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const score_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("+", score_r32.max_score, " Mrk");
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_3_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "input", 60, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_3_ng_container_17_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r49);

      const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);

      const score_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r47.selectGradingScore(item_r6, score_r32, ctx_r47.markTypeCategories.SCORE, false, +_r46.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "General Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Usage: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_3_span_14_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_3_ng_container_16_Template, 5, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_3_ng_container_17_Template, 6, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const score_r32 = ctx.$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", (tmp_0_0 = score_r32.appliedNo) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0, " of ", score_r32.max_occurrence, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", score_r32.name.length > 14 ? score_r32.name.slice(0, 15).concat("...") : score_r32.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", score_r32.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !score_r32.marker_discretion);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !score_r32.marker_discretion);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", score_r32.marker_discretion);
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_4_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const score_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", score_r51.max_score, " ");
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_4_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_4_ng_container_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r59);
      const score_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r57.selectGradingScore(item_r6, score_r51, ctx_r57.markTypeCategories.SCORE);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_4_ng_container_16_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r59);
      const score_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r61.selectGradingScore(item_r6, score_r51, ctx_r61.markTypeCategories.SCORE, true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "0 Mrk");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const score_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("+", score_r51.max_score, " Mrk");
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_4_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "input", 60, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_4_ng_container_17_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r68);

      const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);

      const score_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r66.selectGradingScore(item_r6, score_r51, ctx_r66.markTypeCategories.SCORE, false, +_r65.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Section Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Usage: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_4_span_14_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_4_ng_container_16_Template, 5, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_4_ng_container_17_Template, 6, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const score_r51 = ctx.$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", (tmp_0_0 = score_r51.appliedNo) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0, " of ", score_r51.max_occurrence, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", score_r51.name.length > 14 ? score_r51.name.slice(0, 15).concat("...") : score_r51.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", score_r51.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !score_r51.marker_discretion);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !score_r51.marker_discretion);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", score_r51.marker_discretion);
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_3_Template, 18, 7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_div_4_Template, 18, 7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r22.pageSchemeData == null ? null : ctx_r22.pageSchemeData.general_scores_correct);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r22.currentQuestionMarkingSection == null ? null : ctx_r22.currentQuestionMarkingSection.scores_correct);
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_3_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const score_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", score_r72.max_score, " ");
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_3_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_3_ng_container_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r80);
      const score_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r78.selectGradingScore(item_r6, score_r72, ctx_r78.markTypeCategories.PENALTY);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_3_ng_container_16_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r80);
      const score_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r82.selectGradingScore(item_r6, score_r72, ctx_r82.markTypeCategories.PENALTY, true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "0 Mrk");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const score_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("-", score_r72.max_score, " Mrk");
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_3_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "input", 60, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_3_ng_container_17_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r89);

      const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);

      const score_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r87.selectGradingScore(item_r6, score_r72, ctx_r87.markTypeCategories.PENALTY, false, +_r86.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "General Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Usage: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_3_span_14_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_3_ng_container_16_Template, 5, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_3_ng_container_17_Template, 6, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const score_r72 = ctx.$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", (tmp_0_0 = score_r72.appliedNo) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0, " of ", score_r72.max_occurrence, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", score_r72.name.length > 14 ? score_r72.name.slice(0, 15).concat("...") : score_r72.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", score_r72.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !score_r72.marker_discretion);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !score_r72.marker_discretion);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", score_r72.marker_discretion);
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_4_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const score_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", score_r91.max_score, " ");
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_4_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_4_ng_container_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r99);
      const score_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r97.selectGradingScore(item_r6, score_r91, ctx_r97.markTypeCategories.PENALTY);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_4_ng_container_16_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r99);
      const score_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r101.selectGradingScore(item_r6, score_r91, ctx_r101.markTypeCategories.PENALTY, true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "0 Mrk");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const score_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("-", score_r91.max_score, " Mrk");
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_4_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "input", 60, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_4_ng_container_17_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r108);

      const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);

      const score_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r106.selectGradingScore(item_r6, score_r91, ctx_r106.markTypeCategories.PENALTY, false, +_r105.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Section Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Usage: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_4_span_14_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_4_ng_container_16_Template, 5, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_4_ng_container_17_Template, 6, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const score_r91 = ctx.$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", (tmp_0_0 = score_r91.appliedNo) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0, " of ", score_r91.max_occurrence, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", score_r91.name.length > 14 ? score_r91.name.slice(0, 15).concat("...") : score_r91.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", score_r91.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !score_r91.marker_discretion);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !score_r91.marker_discretion);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", score_r91.marker_discretion);
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_3_Template, 18, 7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_div_4_Template, 18, 7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r23.pageSchemeData == null ? null : ctx_r23.pageSchemeData.general_scores_penalty);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r23.currentQuestionMarkingSection == null ? null : ctx_r23.currentQuestionMarkingSection.scores_penalty);
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_3_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const score_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", score_r112.max_score, " ");
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_3_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_3_ng_container_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r120);
      const score_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r118.selectGradingScore(item_r6, score_r112, ctx_r118.markTypeCategories.VIOLATION);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_3_ng_container_16_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r120);
      const score_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r122.selectGradingScore(item_r6, score_r112, ctx_r122.markTypeCategories.VIOLATION, true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "0 Mrk");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const score_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("-", score_r112.max_score, " Mrk");
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_3_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "input", 60, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_3_ng_container_17_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r129);

      const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);

      const score_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r127.selectGradingScore(item_r6, score_r112, ctx_r127.markTypeCategories.VIOLATION, false, +_r126.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "General Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Usage: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_3_span_14_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_3_ng_container_16_Template, 5, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_3_ng_container_17_Template, 6, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const score_r112 = ctx.$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", (tmp_0_0 = score_r112.appliedNo) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0, " of ", score_r112.max_occurrence, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", score_r112.name.length > 14 ? score_r112.name.slice(0, 15).concat("...") : score_r112.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", score_r112.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !score_r112.marker_discretion);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !score_r112.marker_discretion);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", score_r112.marker_discretion);
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_4_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const score_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", score_r131.max_score, " ");
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_4_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_4_ng_container_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r139);
      const score_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r137.selectGradingScore(item_r6, score_r131, ctx_r137.markTypeCategories.VIOLATION);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_4_ng_container_16_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r139);
      const score_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r141.selectGradingScore(item_r6, score_r131, ctx_r141.markTypeCategories.VIOLATION, true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "0 Mrk");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const score_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("-", score_r131.max_score, " Mrk");
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_4_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "input", 60, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_4_ng_container_17_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r148);

      const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);

      const score_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
      const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r146.selectGradingScore(item_r6, score_r131, ctx_r146.markTypeCategories.VIOLATION, false, +_r145.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Section Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Usage: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_4_span_14_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_4_ng_container_16_Template, 5, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_4_ng_container_17_Template, 6, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const score_r131 = ctx.$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", (tmp_0_0 = score_r131.appliedNo) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0, " of ", score_r131.max_occurrence, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", score_r131.name.length > 14 ? score_r131.name.slice(0, 15).concat("...") : score_r131.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", score_r131.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !score_r131.marker_discretion);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !score_r131.marker_discretion);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", score_r131.marker_discretion);
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_3_Template, 18, 7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_div_4_Template, 18, 7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r24.pageSchemeData == null ? null : ctx_r24.pageSchemeData.general_scores_violation);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r24.currentQuestionMarkingSection == null ? null : ctx_r24.currentQuestionMarkingSection.scores_violation);
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_Template_button_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r152);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).index;
      const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      ctx_r150.collapseGradingFormContextMenuItem(i_r7);
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_button_11_Template, 2, 4, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_13_Template, 5, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_14_Template, 5, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_ng_container_15_Template, 5, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Scoring ", ctx_r15.scoringTabs[ctx_r15.activeScoringTab], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r15.currentQuestionMarkingSection.name == null ? null : ctx_r15.currentQuestionMarkingSection.name[0].toUpperCase().concat(ctx_r15.currentQuestionMarkingSection.name.slice(1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r15.scoringTabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r15.scoringTabs[ctx_r15.activeScoringTab] == ctx_r15.markTypeCategories.SCORE);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r15.scoringTabs[ctx_r15.activeScoringTab] == ctx_r15.markTypeCategories.PENALTY);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r15.scoringTabs[ctx_r15.activeScoringTab] == ctx_r15.markTypeCategories.VIOLATION);
  }
}

const _c0 = function (a0) {
  return {
    "bg-white": a0
  };
};

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_div_1_Template, 10, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_ng_container_2_Template, 16, 6, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](3, _c0, item_r6.isOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r6 == null ? null : item_r6.placeholderType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(item_r6 == null ? null : item_r6.placeholderType));
  }
}

const _c1 = function (a0) {
  return {
    zIndex: a0
  };
};

const _c2 = function (a0, a1, a2, a3) {
  return {
    "bg-soft-success border-success": a0,
    "bg-soft-warning border-warning": a1,
    "bg-soft-danger border-danger": a2,
    "bg-soft-secondary border-secondary": a3
  };
};

function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("dragEnd", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_Template_div_dragEnd_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const i_r7 = restoredCtx.index;
      const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r154.onDragEnd($event, i_r7);
    })("clicked", function DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_Template_div_clicked_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const i_r7 = restoredCtx.index;
      const item_r6 = restoredCtx.$implicit;
      const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r156.expandGradingFormContextMenuItem(i_r7, item_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1__svg_svg_7_Template, 2, 0, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1__svg_svg_8_Template, 3, 0, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1__svg_svg_9_Template, 2, 0, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_span_11_Template, 2, 2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_div_12_Template, 3, 5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("opacity", item_r6.versioned ? 0.5 : 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", item_r6.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("left", item_r6.position[0], "px")("top", item_r6.position[1], "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](15, _c1, item_r6.isOpen ? "99999" : "0"))("annotation", item_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (item_r6 == null ? null : item_r6.placeholderType) === ctx_r5.markTypeCategories.SCORE);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (item_r6 == null ? null : item_r6.placeholderType) === ctx_r5.markTypeCategories.PENALTY);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (item_r6 == null ? null : item_r6.placeholderType) === ctx_r5.markTypeCategories.VIOLATION);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction4"](17, _c2, (item_r6 == null ? null : item_r6.placeholderType) === ctx_r5.markTypeCategories.SCORE, (item_r6 == null ? null : item_r6.placeholderType) === ctx_r5.markTypeCategories.PENALTY, (item_r6 == null ? null : item_r6.placeholderType) === ctx_r5.markTypeCategories.VIOLATION, (item_r6 == null ? null : item_r6.placeholderType) !== ctx_r5.markTypeCategories.SCORE && (item_r6 == null ? null : item_r6.placeholderType) !== ctx_r5.markTypeCategories.PENALTY && (item_r6 == null ? null : item_r6.placeholderType) !== ctx_r5.markTypeCategories.VIOLATION));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r6 == null ? null : item_r6.placeholderCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r6.isOpen);
  }
}

function DrawingAndWritingComponent_ng_container_3_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DrawingAndWritingComponent_ng_container_3_ng_container_7_ng_container_1_Template, 13, 22, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r4.currentPageGradingData);
  }
}

function DrawingAndWritingComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DrawingAndWritingComponent_ng_container_3_Template_div_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r158);
      const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r157.onCanvasClick($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, DrawingAndWritingComponent_ng_container_3_ng_container_7_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("height", 1000, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.currentPageGradingData == null ? null : ctx_r1.currentPageGradingData.length);
  }
}

function DrawingAndWritingComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " No Response for this question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

const _c3 = function (a0, a1) {
  return {
    "col-lg-8": a0,
    "col-lg-12": a1
  };
};

class DrawingAndWritingComponent {
  constructor(drawingAndWritingStore, drawingStore, konvaEventTools, viewContainerRef, notifier) {
    this.drawingAndWritingStore = drawingAndWritingStore;
    this.drawingStore = drawingStore;
    this.konvaEventTools = konvaEventTools;
    this.viewContainerRef = viewContainerRef;
    this.notifier = notifier;
    this.showQuestionPanel = true; // emitted to setting grading for question item itself. 
    // it will be temporary place to store the formated annotation to be sent to backend for each question

    this.questionAnnotationChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.currentPage = 0;
    this.backgroundType = 'lINE';
    this.pages = [];
    this.contextMenuRef = null;
    this.currentPageGradingData = []; // grading form data for the current page. Only used for the context menu

    this.markTypeCategories = src_app_pages_assessment_model_marking_guide_types__WEBPACK_IMPORTED_MODULE_5__.SchemeMarkCategory;
    this.scoringTabs = Object.values(src_app_pages_assessment_model_marking_guide_types__WEBPACK_IMPORTED_MODULE_5__.SchemeMarkCategory);
    this.activeScoringTab = 0;
    this.markersScore = '';
    this.pageLoaded = false;

    this.closeContextMenuHandler = event => {
      const target = event.target;
      if (!target) return;
      const clickedInsideCanvas = !!target.closest('#canvas') || !!target.closest('.child');
      const clickedInsideMenu = !!target.closest('.custom-context-menu') || !!target.closest('[data-inside-canvas]');
      const clickedInsideForm = !!target.closest('form');

      if (!clickedInsideCanvas && !clickedInsideMenu && !clickedInsideForm) {
        this.closeContextMenu();
      }
    };
  }

  ngOnInit() {
    this.pageLoaded = true;
  }

  ngOnChanges(changes) {
    if (changes['currentQuestion']) {
      this.questionChanges();
    }

    if (changes['gradingSummary']) {
      this.setCurrentQuestionGradingSummary();
    }

    if (changes['currentQuestionMarkingSectionChanges']) {
      this.updateCurrentQuestionMarkingSection();
    }
  }

  questionChanges() {
    this.konvaEventTools._questionChanged$.next(true);

    this.prepareCanvasAndStoreDataOnLoad();
  }

  getCurrentQuestion() {
    return this.currentQuestion;
  }

  prepareCanvasAndStoreDataOnLoad() {
    const getCurrentQuestion = this.getCurrentQuestion();

    if (!getCurrentQuestion) {
      return;
    }

    this.backgroundType = getCurrentQuestion.item.backgroundType;

    if (getCurrentQuestion.item_score.un_graded_response.length) {
      let jsonResponse = JSON.parse(getCurrentQuestion.item_score.un_graded_response[0]);
      jsonResponse.pages = jsonResponse.pages.map(page => {
        const baseAnnotations = this.currentQuestion.item_score.annotations.filter(ann => ann.page + 1 == page.page).map(ann => {
          var _a, _b;

          const annotation = new _model_store_model__WEBPACK_IMPORTED_MODULE_2__.ContextMenuGradingForm();
          const question = this.pageSchemeData.questions.find(q => q.item_id === ann.item_id);
          const section = question === null || question === void 0 ? void 0 : question.sections.find(s => s.id === ann.question_section_id);
          Object.assign(annotation, {
            position: ann.position.map(Number),
            form: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({}),
            isOpen: false,
            versioned: ann.versioned,
            placeholderCode: ann.code + ann.score,
            placeholderType: ann.mark_category,
            sectionId: ann.question_section_id,
            sectionName: (_a = section === null || section === void 0 ? void 0 : section.name) !== null && _a !== void 0 ? _a : '',
            uniqueId: (_b = ann.contextMenuUniqueId) !== null && _b !== void 0 ? _b : Date.now().toString(),
            questionId: ann.item_id,
            page: ann.page,
            action: '',
            graded: ann.graded,
            scoreId: ann.score_id
          });
          return annotation;
        });
        return Object.assign(Object.assign({}, page), {
          grading: [...baseAnnotations]
        });
      });
      const storeData = Object.assign(Object.assign({}, jsonResponse), {
        shouldReset: false,
        currentPage: 0
      });
      this.drawingStore.updateStore(storeData);
    }

    this.konvaEventTools.openQuestionPane$.subscribe(() => this.ToggleQuestionPane());
    this.storeSubscription = this.drawingAndWritingStore.store$.subscribe(storeState => this.onDrawingStoreChanges(storeState));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.timer)(500).subscribe(() => {
      this.initializeCanvas(this.backgroundType);
    });
  }

  selectPage(pageIndex) {
    this.drawingAndWritingStore.selectPage(pageIndex);

    this.konvaEventTools._pageSelectEvent.next();
  }

  initializeCanvas(backgroundType) {
    var _a, _b;

    const stageContainer = document.getElementById('stage');

    if (!stageContainer) {
      return;
    }

    const width = stageContainer.parentElement.parentElement.offsetWidth;
    const height = 1000;
    let stage = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Stage)({
      container: 'stage',
      width,
      height,
      draggable: false
    });
    let gridLayer = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Layer)();
    let plottedLayer = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Layer)();
    let drawingLayer = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Layer)();
    let uiLayer = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Layer)();
    let oldLayer = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Layer)();
    let toolLayer = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Layer)();
    stage.add(gridLayer, plottedLayer, drawingLayer, uiLayer, oldLayer, toolLayer);
    let ruler = null;
    let protractor = null;
    let rulerTransformer;
    let protractorTransformer;

    const destroyCanvas = () => {
      if (stage) {
        stage.destroy();
        stage = null;
      }
    }; // helpers to draw grid


    function drawGrid(gridSize = 50) {
      gridLayer.destroyChildren();
      const w = stage === null || stage === void 0 ? void 0 : stage.width();
      const h = stage === null || stage === void 0 ? void 0 : stage.height();

      for (let x = 0; x <= w; x += gridSize) {
        gridLayer.add(new (konva__WEBPACK_IMPORTED_MODULE_1___default().Line)({
          points: [x, 0, x, h],
          stroke: '#e6e7e9',
          strokeWidth: 1,
          listening: false
        }));
      }

      for (let y = 0; y <= h; y += gridSize) {
        gridLayer.add(new (konva__WEBPACK_IMPORTED_MODULE_1___default().Line)({
          points: [0, y, w, y],
          stroke: '#e6e7e9',
          strokeWidth: 1,
          listening: false
        }));
      }

      gridLayer.cache();
      gridLayer.batchDraw();
    }

    function drawLineBackground(lineSpacing = 50) {
      gridLayer.destroyChildren();
      const w = stage === null || stage === void 0 ? void 0 : stage.width();
      const h = stage === null || stage === void 0 ? void 0 : stage.height();

      for (let y = 0; y <= h; y += lineSpacing) {
        gridLayer.add(new (konva__WEBPACK_IMPORTED_MODULE_1___default().Line)({
          points: [0, y, w, y],
          stroke: '#e6e7e9',
          strokeWidth: 1,
          listening: false
        }));
      }

      gridLayer.cache();
      gridLayer.batchDraw();
    }

    function drawPlottedGrid(gridSize = 50) {
      plottedLayer.destroyChildren();
      const w = stage === null || stage === void 0 ? void 0 : stage.width();
      const h = stage === null || stage === void 0 ? void 0 : stage.height();

      for (let x = 0; x <= w; x += gridSize) {
        for (let y = 0; y <= h; y += gridSize) {
          plottedLayer.add(new (konva__WEBPACK_IMPORTED_MODULE_1___default().Circle)({
            x,
            y,
            radius: 2,
            fill: '#9ca3af',
            listening: false
          }));
        }
      }

      plottedLayer.cache();
      plottedLayer.batchDraw();
    }

    const setBackgroundType = () => {
      clearBackground();

      if (this.backgroundType == 'LINE') {
        drawLineBackground();
        return;
      }

      if (this.backgroundType == 'GRID') {
        drawGrid();
        drawPlottedGrid();
        return;
      }
    };

    function clearBackground() {
      plottedLayer.visible(false);
      gridLayer.destroyChildren();
      gridLayer.batchDraw();
    }

    function deltaDecode(deltas) {
      if (!deltas || deltas.length < 2) return [];
      const points = [deltas[0], deltas[1]];

      for (let i = 2; i < deltas.length; i += 2) {
        const x = points[points.length - 2] + deltas[i];
        const y = points[points.length - 1] + deltas[i + 1];
        points.push(x, y);
      }

      return points;
    }

    setBackgroundType();
    const parent = document.getElementById('stage-parent');
    parent.style.width = width + 'px';

    const resizeStage = () => {
      parent.style.width = stageContainer.parentElement.parentElement.offsetWidth + 'px';
      const newWidth = stageContainer.offsetWidth;
      const newHeight = 1000;
      stage === null || stage === void 0 ? void 0 : stage.width(newWidth);
      stage === null || stage === void 0 ? void 0 : stage.height(newHeight);
      setBackgroundType();
      loadCurrentPageStrokes();
    };

    window.addEventListener('resize', resizeStage);

    const redrawStrokes = () => {
      drawingLayer.destroyChildren();
      const currentPageData = this.drawingStore.getCurrentPageData();
      if (!currentPageData || !currentPageData.strokes) return;
      const strokeGroup = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Group)({
        listening: false,
        perfectDrawEnabled: false
      }); // Decode all strokes before drawing

      const decodedStrokes = currentPageData.strokes.map(stroke => Object.assign(Object.assign({}, stroke), {
        points: deltaDecode(stroke.points)
      }));
      decodedStrokes.forEach(stroke => {
        const line = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Line)({
          points: stroke.points,
          stroke: stroke.mode === 'eraser' ? '#000' : stroke.color || '#111827',
          strokeWidth: stroke.size,
          globalCompositeOperation: stroke.mode === 'eraser' ? 'destination-out' : 'source-over',
          lineCap: 'round',
          lineJoin: 'round',
          listening: false,
          perfectDrawEnabled: false
        });
        strokeGroup.add(line);
      });
      drawingLayer.add(strokeGroup);
      drawingLayer.batchDraw();
      requestAnimationFrame(() => {
        var _a;

        if (!((_a = currentPageData === null || currentPageData === void 0 ? void 0 : currentPageData.strokes) === null || _a === void 0 ? void 0 : _a.length)) {
          return;
        }

        strokeGroup === null || strokeGroup === void 0 ? void 0 : strokeGroup.cache({
          pixelRatio: 1
        });
        drawingLayer === null || drawingLayer === void 0 ? void 0 : drawingLayer.batchDraw();
      });
    };

    const loadCurrentPageStrokes = () => {
      redrawStrokes();
    };

    loadCurrentPageStrokes();

    const scrollContainers = () => {
      var _a, _b;

      try {
        (_a = document.getElementById('question-container')) === null || _a === void 0 ? void 0 : _a.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        (_b = document.getElementById('stage-parent')) === null || _b === void 0 ? void 0 : _b.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } catch (e) {}
    };

    function createRuler(x, y) {
      const DPI = getDPI();
      const PIXELS_PER_CM = DPI / 2.54;
      const RULER_CM = 20;
      const RULER_HEIGHT = 50;
      const RULER_LENGTH_PX = RULER_CM * PIXELS_PER_CM;
      const group = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Group)({
        x,
        y,
        draggable: true
      });
      const body = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Rect)({
        width: RULER_LENGTH_PX,
        height: RULER_HEIGHT,
        fillLinearGradientStartPoint: {
          x: 0,
          y: 0
        },
        fillLinearGradientEndPoint: {
          x: 0,
          y: RULER_HEIGHT
        },
        fillLinearGradientColorStops: [0, "#fdfdfd", 1, "#e6e6e6"],
        stroke: "#888",
        cornerRadius: 3,
        shadowColor: "black",
        shadowBlur: 2,
        shadowOpacity: 0.2
      });
      group.add(body);
      const mmTotal = RULER_CM * 10;

      for (let mm = 0; mm <= mmTotal; mm++) {
        const xPos = mm / 10 * PIXELS_PER_CM;
        let tickHeight,
            color = "#333",
            width = 1;

        if (mm % 10 === 0) {
          tickHeight = 20;
          width = 1.2;
        } else if (mm % 5 === 0) {
          tickHeight = 14;
        } else {
          tickHeight = 8;
          color = "#666";
        }

        const tick = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Line)({
          points: [xPos, RULER_HEIGHT, xPos, RULER_HEIGHT - tickHeight],
          stroke: color,
          strokeWidth: width
        });
        group.add(tick);

        if (mm % 10 === 0) {
          const label = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Text)({
            x: xPos - 4,
            y: RULER_HEIGHT - 28,
            text: mm === 0 ? "" : (mm / 10).toString(),
            fontSize: 12,
            fill: "#111",
            fontFamily: "monospace"
          });
          group.add(label);
        }
      }

      rulerTransformer = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Transformer)({
        nodes: [group],
        rotateEnabled: true,
        rotationHandleOffset: 60,
        rotationHandleSize: 30,
        rotationHandleStroke: "#1976d2",
        rotationHandleFill: "#1976d2",
        enabledAnchors: ["middle-left", "middle-right"],
        borderStroke: "#1976d2",
        borderStrokeWidth: 2,
        anchorCornerRadius: 6
      });
      toolLayer.add(rulerTransformer);
      toolLayer.add(group); // Selection logic

      stage.on("click tap", e => {
        if (e.target === stage) rulerTransformer.nodes([]);else if (e.target.getParent() === group) rulerTransformer.nodes([group]);
        toolLayer.batchDraw();
      });
      group.on("dragmove transform", () => {
        rulerTransformer.moveToTop();
        toolLayer.batchDraw();
      });
      toolLayer.batchDraw();
      return group;
    }

    function getDPI() {
      const div = document.createElement("div");
      div.style.width = "1in";
      div.style.height = "1in";
      div.style.position = "absolute";
      div.style.top = "-100%";
      document.body.appendChild(div);
      const dpi = div.offsetWidth;
      document.body.removeChild(div);
      return dpi;
    }

    function createProtractor(x, y) {
      const DPI = getDPI();
      const PIXELS_PER_CM = DPI / 2.54;
      const radius = 8 * PIXELS_PER_CM; // 8cm radius for larger size

      const group = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Group)({
        x,
        y,
        draggable: true
      }); // Base semicircle with gradient

      const arc = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Arc)({
        x: 0,
        y: 0,
        innerRadius: 0,
        outerRadius: radius,
        angle: 180,
        fillLinearGradientStartPoint: {
          x: -radius,
          y: 0
        },
        fillLinearGradientEndPoint: {
          x: radius,
          y: 0
        },
        fillLinearGradientColorStops: [0, "#fdfdfd", 0.5, "#f0f0f0", 1, "#e6e6e6"],
        stroke: "#888",
        strokeWidth: 2,
        shadowColor: "black",
        shadowBlur: 3,
        shadowOpacity: 0.2
      });
      group.add(arc); // Add degree marks every 1 degree

      for (let angle = 0; angle <= 180; angle += 1) {
        const radians = angle * Math.PI / 180;
        let startRadius,
            tickWidth = 0.5,
            color = "#999";

        if (angle % 30 === 0) {
          // Major marks every 30 degrees
          startRadius = radius - 40;
          tickWidth = 2;
          color = "#333";
        } else if (angle % 10 === 0) {
          // Medium marks every 10 degrees
          startRadius = radius - 30;
          tickWidth = 1.5;
          color = "#444";
        } else if (angle % 5 === 0) {
          // Small marks every 5 degrees
          startRadius = radius - 20;
          tickWidth = 1;
          color = "#666";
        } else {
          // Tiny marks for every degree
          startRadius = radius - 12;
          tickWidth = 0.5;
          color = "#999";
        }

        const endRadius = radius - 3;
        const x1 = startRadius * Math.cos(radians);
        const y1 = -startRadius * Math.sin(radians);
        const x2 = endRadius * Math.cos(radians);
        const y2 = -endRadius * Math.sin(radians);
        const tick = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Line)({
          points: [x1, y1, x2, y2],
          stroke: color,
          strokeWidth: tickWidth
        });
        group.add(tick); // Add numbers for major angles (every 30 degrees)

        if (angle % 30 === 0) {
          const textRadius = radius - 55;
          const textX = textRadius * Math.cos(radians);
          const textY = -textRadius * Math.sin(radians);
          const text = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Text)({
            x: textX - 8,
            y: textY - 8,
            text: angle.toString(),
            fontSize: 16,
            fontFamily: "monospace",
            fill: "#111",
            fontStyle: "bold"
          });
          group.add(text);
        } // Add smaller numbers for 10-degree marks (excluding 30-degree marks)
        else if (angle % 10 === 0 && angle % 30 !== 0) {
          const textRadius = radius - 45;
          const textX = textRadius * Math.cos(radians);
          const textY = -textRadius * Math.sin(radians);
          const text = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Text)({
            x: textX - 6,
            y: textY - 6,
            text: angle.toString(),
            fontSize: 12,
            fontFamily: "monospace",
            fill: "#333"
          });
          group.add(text);
        }
      } // Add center point


      const centerDot = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Circle)({
        x: 0,
        y: 0,
        radius: 6,
        fill: "#333",
        stroke: "#fff",
        strokeWidth: 2
      });
      group.add(centerDot); // Add baseline

      const baseline = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Line)({
        points: [-radius, 0, radius, 0],
        stroke: "#333",
        strokeWidth: 3
      });
      group.add(baseline); // Add small notch at 0 and 180 degrees

      const leftNotch = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Rect)({
        x: -radius - 3,
        y: -4,
        width: 6,
        height: 8,
        fill: "#333"
      });
      const rightNotch = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Rect)({
        x: radius - 3,
        y: -4,
        width: 6,
        height: 8,
        fill: "#333"
      });
      group.add(leftNotch, rightNotch);
      group.cache();
      protractorTransformer = new (konva__WEBPACK_IMPORTED_MODULE_1___default().Transformer)({
        nodes: [group],
        rotateEnabled: true,
        rotationHandleOffset: 60,
        rotationHandleSize: 30,
        rotationHandleStroke: "#1976d2",
        rotationHandleFill: "#1976d2",
        enabledAnchors: ["middle-left", "middle-right"],
        borderStroke: "#1976d2",
        borderStrokeWidth: 2,
        anchorCornerRadius: 6
      });
      toolLayer.add(protractorTransformer);
      toolLayer.add(group);
      stage.on("click tap", e => {
        if (e.target === stage) protractorTransformer.nodes([]);else if (e.target.getParent() === group) protractorTransformer.nodes([group]);
        toolLayer.batchDraw();
      });
      group.on("dragmove transform", () => {
        protractorTransformer.moveToTop();
        toolLayer.batchDraw();
      });
      return group;
    }

    (_a = this.selectMeasurementTool$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    this.selectMeasurementTool$ = this.konvaEventTools._selectMeasurementTool$.subscribe({
      next: tool => {
        if (tool === 'ruler' && !ruler) {
          ruler = createRuler(100, 100);
          toolLayer.add(ruler);
        }

        if (tool === 'protractor' && !protractor) {
          protractor = createProtractor(400, 350);
          toolLayer.add(protractor);
        }

        toolLayer.batchDraw();
      }
    });
    (_b = this.removeMeasurementTool$) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    this.removeMeasurementTool$ = this.konvaEventTools._removeMeasurementTool$.subscribe({
      next: tool => {
        var _a, _b, _c, _d, _e, _f, _g, _h;

        if (tool == 'all') {
          ruler === null || ruler === void 0 ? void 0 : ruler.destroy();
          ruler = null;
          protractor === null || protractor === void 0 ? void 0 : protractor.destroy();
          protractor = null;
          toolLayer.destroyChildren();
        }

        if (tool === 'ruler') {
          ruler.destroy();
          ruler = null;
          (_b = (_a = toolLayer.getChildren(item => item == ruler)) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.destroy();
          (_d = (_c = toolLayer.getChildren(item => item == rulerTransformer)) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.destroy();
        }

        if (tool === 'protractor') {
          protractor.destroy();
          protractor = null;
          (_f = (_e = toolLayer.getChildren(item => item == protractor)) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.destroy();
          (_h = (_g = toolLayer.getChildren(item => item == protractorTransformer)) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.destroy();
        }

        toolLayer.batchDraw();
      }
    });

    this.konvaEventTools._pageSelectEvent.subscribe({
      next: () => {
        loadCurrentPageStrokes();
        scrollContainers();
      }
    });

    this.konvaEventTools._questionChanged$.subscribe({
      next: () => {
        this.drawingStore.clearStoreData();
        destroyCanvas();
        scrollContainers();
      }
    });

    this.konvaEventTools._resizeCanvas$.subscribe({
      next: () => {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.timer)(1000).subscribe({
          next: () => {
            resizeStage();
          }
        });
      }
    });

    this.konvaEventTools.backgroundChange$.subscribe({
      next: type => {
        if (!this.pageLoaded) {
          return;
        }

        if (!type) {
          return;
        }

        this.backgroundType = type;
        setBackgroundType();
      }
    });
  }

  onDrawingStoreChanges(storeState) {
    var _a;

    this.currentPage = storeState.currentPage;
    this.currentPageGradingData = (_a = storeState.pages[storeState.currentPage]) === null || _a === void 0 ? void 0 : _a.grading;
    this.pages = Array.from({
      length: storeState.pages.length
    }, (_, i) => i);
  }

  setCurrentQuestionGradingSummary() {
    var _a;

    this.currentQuestionGradingSummary = null;
    const currentQuestionGrading = (_a = this.gradingSummary) === null || _a === void 0 ? void 0 : _a.perQuestion[this.currentQuestion.item.id];
    this.currentQuestionGradingSummary = currentQuestionGrading;
  }

  createScoreVersion(formItemIndex) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const annotation = _this.currentPageGradingData[formItemIndex];

      if (annotation.graded) {
        return;
      }

      _this.questionAnnotationChanges.emit({
        annotation,
        action: 'delete'
      });

      yield _this.drawingStore.updateGradingFormContextMenuItemVersion(formItemIndex);
    })();
  } // score recieves either section score - SchemeQuestionSectionScoreScoreDB | general score - GeneralScoreDTO


  selectGradingScore(item, score, markTypeCatory, zeroScore = false, markersScore = 0) {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      if (!markTypeCatory || !_this2.scoringTabs.includes(markTypeCatory)) {
        _this2.notifier.notify('error', 'Invalid Scoring type selected');

        return;
      } // Use zero score if true: otherwise check for markers discretion


      const scoreValue = zeroScore ? 0 : score.marker_discretion ? markersScore : score.max_score;

      const formItemIndex = _this2.currentPageGradingData.indexOf(item);

      const annotation = new _model_question_annotation_mode__WEBPACK_IMPORTED_MODULE_4__.QuestionAnnotation();
      annotation.page = _this2.currentPage;
      annotation.code = score.code;
      annotation.score = scoreValue;
      annotation.mark_type_id = score.mark_type_id;
      annotation.mark_category = markTypeCatory;
      annotation.name = score.name;
      annotation.position = [item.position[0].toString(), item.position[1].toString()];
      annotation.boundary = score.boundary;
      annotation.question_section_id = (_a = score === null || score === void 0 ? void 0 : score.question_section_id) !== null && _a !== void 0 ? _a : _this2.currentSectionId;
      annotation.item_id = _this2.currentQuestion.item.id;
      annotation.score_id = score.id; // Add identifies to map to the context menu

      annotation.contextMenuScoreId = score.id;
      annotation.contextMenuSectionId = item.sectionId;
      annotation.contextMenuUniqueId = item.uniqueId;
      annotation.contextMenuQuestionId = item.questionId;
      annotation.contextMenuPage = item.page;
      annotation.versioned = item.versioned;
      annotation.contextMenuFormIndex = formItemIndex;
      yield _this2.drawingStore.updateGradingFormContextMenuItemPlaceholder(formItemIndex, {
        placeholderCode: (score === null || score === void 0 ? void 0 : score.code) ? score.code.toString() + scoreValue.toString() : ' ',
        placeholderType: markTypeCatory,
        scoreId: score.id
      });

      _this2.questionAnnotationChanges.emit({
        annotation,
        action: 'score'
      });

      _this2.markersScore = '';

      _this2.collapseGradingFormContextMenuItem(formItemIndex);
    })();
  }

  updateCurrentQuestionMarkingSection() {
    var _a, _b;

    const changes = this.currentQuestionMarkingSectionChanges;
    if (!changes || !changes.score) return;
    const {
      score,
      applied
    } = changes;
    let {
      boundary,
      mark_category,
      id
    } = score;
    id = id !== null && id !== void 0 ? id : changes.score.score_id;
    const categoryMap = {
      [src_app_pages_assessment_model_marking_guide_types__WEBPACK_IMPORTED_MODULE_5__.SchemeMarkCategory.SCORE]: {
        GENERAL: this.pageSchemeData.general_scores_correct,
        SECTION: this.currentQuestionMarkingSection.scores_correct
      },
      [src_app_pages_assessment_model_marking_guide_types__WEBPACK_IMPORTED_MODULE_5__.SchemeMarkCategory.PENALTY]: {
        GENERAL: this.pageSchemeData.general_scores_penalty,
        SECTION: this.currentQuestionMarkingSection.scores_penalty
      },
      [src_app_pages_assessment_model_marking_guide_types__WEBPACK_IMPORTED_MODULE_5__.SchemeMarkCategory.VIOLATION]: {
        GENERAL: this.pageSchemeData.general_scores_violation,
        SECTION: this.currentQuestionMarkingSection.scores_violation
      }
    };
    const sourceList = boundary === src_app_pages_assessment_model_marking_guide_types__WEBPACK_IMPORTED_MODULE_5__.SchemeScoreBoundary.GENERAL ? (_a = categoryMap[mark_category]) === null || _a === void 0 ? void 0 : _a.GENERAL : (_b = categoryMap[mark_category]) === null || _b === void 0 ? void 0 : _b.SECTION;
    if (!sourceList) return;
    const scoreIndex = sourceList.findIndex(item => item.id === id);
    if (scoreIndex === -1) return;
    sourceList[scoreIndex].appliedNo = applied;
  }

  onCanvasClick(event) {
    var _a; // Atleast one score menu is open


    if (document.querySelector('.rounded.card.score-cards')) {
      event.preventDefault();
      event.stopPropagation();
      return;
    } // Context menu form elements interacted with


    if (['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'I'].includes(event.target.tagName)) {
      return;
    } // if score context menu placeholder was clicked


    const target = event.target;

    if (target.classList.contains('score-placeholder') || target.parentElement.classList.contains('score-placeholder')) {
      return;
    }

    const sections = (_a = this.currentQuestionMarkingGuide) === null || _a === void 0 ? void 0 : _a.sections;

    if (!(sections === null || sections === void 0 ? void 0 : sections.length)) {
      return;
    }

    event.preventDefault();
    this.collapseGradingFormContextMenuItems();
    this.viewContainerRef.clear();
    this.x = event.clientX;
    this.y = event.clientY;
    this.offsetX = event.offsetX; // X coordinate relative to the child element

    this.offsetY = event.offsetY; // Y coordinate relative to the child element
    // Create component instance

    this.contextMenuRef = this.viewContainerRef.createComponent(_custom_context_menu_custom_context_menu_component__WEBPACK_IMPORTED_MODULE_3__.CustomContextMenuComponent);
    this.contextMenuRef.instance.x = this.x;
    this.contextMenuRef.instance.y = this.y;
    this.contextMenuRef.instance.sections = sections; // Subscribe to the menuItemClicked event

    this.contextMenuRef.instance.menuClicked.subscribe(data => {
      const selectedSection = this.currentQuestionMarkingGuide.sections.find(item => item.id == data.sectionId);
      this.currentQuestionMarkingSection = selectedSection;
      this.currentSectionId = data.sectionId;

      if (selectedSection) {
        const position = [this.offsetX, this.offsetY];
        const form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
          comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
          grade: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('')
        });
        const entry = {
          position,
          form,
          isOpen: true,
          versioned: false,
          sectionId: selectedSection.id,
          sectionName: selectedSection.name,
          uniqueId: Date.now().toString(),
          questionId: this.currentQuestion.item.id,
          page: this.currentPage,
          graded: false,
          scoreId: ''
        };
        this.drawingStore.addradingFormToCurrentPageContextMenu(entry);
      }

      this.closeContextMenu();
    });
    setTimeout(() => window.addEventListener('click', this.closeContextMenuHandler), 0);
  }

  closeContextMenu() {
    if (this.contextMenuRef) {
      this.viewContainerRef.clear();
      this.contextMenuRef = null;
      window.removeEventListener('click', this.closeContextMenuHandler);
    }
  }

  expandGradingFormContextMenuItem(formItemIndex, contextMenuFormItem) {
    var _this3 = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      if (contextMenuFormItem.versioned) {
        return;
      }

      if (contextMenuFormItem.graded) {
        return;
      }

      const selectedSection = _this3.currentQuestionMarkingGuide.sections.find(item => item.id == contextMenuFormItem.sectionId);

      _this3.currentQuestionMarkingSection = selectedSection;

      _this3.collapseGradingFormContextMenuItems();

      yield _this3.drawingStore.expandGradingFormContextMenuItem(formItemIndex); // open cateory tab on the context menu

      const category = (_a = _this3.currentPageGradingData[formItemIndex]) === null || _a === void 0 ? void 0 : _a.placeholderType;

      if (!category) {
        return;
      }

      const tabIndex = _this3.scoringTabs.indexOf(category);

      _this3.activeScoringTab = tabIndex;
    })();
  }

  collapseGradingFormContextMenuItems() {
    this.drawingStore.collapseGradingFormContextMenuItems();
    this.activeScoringTab = 0;
  }

  collapseGradingFormContextMenuItem(formItemIndex) {
    var _this4 = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.drawingStore.collapseGradingFormContextMenuItem(formItemIndex);
      _this4.activeScoringTab = 0;
    })();
  }

  onDragEnd(position, formItemIndex) {
    var _this5 = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.drawingStore.updateGradingFormContextMenuItemPosition([position.x, position.y], formItemIndex);
      const annotation = _this5.currentPageGradingData[formItemIndex];

      _this5.questionAnnotationChanges.emit({
        annotation,
        action: 'position'
      });
    })();
  }

  ToggleQuestionPane() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.timer)(1000).subscribe(() => {
      this.konvaEventTools._resizeCanvas$.next(true);
    });
  }

}

DrawingAndWritingComponent.ɵfac = function DrawingAndWritingComponent_Factory(t) {
  return new (t || DrawingAndWritingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_store_service__WEBPACK_IMPORTED_MODULE_6__.DrawingAndWritingStore), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_store_service__WEBPACK_IMPORTED_MODULE_6__.DrawingAndWritingStore), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_7__.KonvaToolsEvent), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_12__.NotifierService));
};

DrawingAndWritingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: DrawingAndWritingComponent,
  selectors: [["app-drawing-and-writing"]],
  inputs: {
    currentQuestion: "currentQuestion",
    currentQuestionIndex: "currentQuestionIndex",
    showQuestionPanel: "showQuestionPanel",
    currentQuestionMarkingGuide: "currentQuestionMarkingGuide",
    gradingSummary: "gradingSummary",
    pageSchemeData: "pageSchemeData",
    currentQuestionAnnotations: "currentQuestionAnnotations",
    currentQuestionMarkingSectionChanges: "currentQuestionMarkingSectionChanges"
  },
  outputs: {
    questionAnnotationChanges: "questionAnnotationChanges"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
  decls: 6,
  vars: 7,
  consts: [[1, "row"], ["class", "col-lg-4", 4, "ngIf"], [1, "col-lg-8", "border", "rounded", "p-0", 3, "ngClass"], [4, "ngIf", "ngIfElse"], ["noResponse", ""], [1, "col-lg-4"], [1, "rounded-md", "border", "p-3", 2, "overflow-y", "auto", "height", "500px", "overflow-y", "auto"], [1, "d-flex", "justify-content-between", "gap-3", "border-bottom", "border-bottom-dashed", "pb-2"], [1, "small", "fw-bold", "fs-12", "text-center", "text-success"], [1, "small", "fw-bold", "fs-12", "text-center", "text-danger"], [1, "fw-bold", "py-2", "text-primary"], [1, "pe-2", 2, "text-align", "justify", 3, "innerHTML"], [1, "w-100", 2, "overflow-y", "hidden", "display", "relative", "overflow-x", "hidden"], ["id", "container"], ["id", "stage-parent"], ["id", "stage"], [1, "child", 2, "height", "100%", "position", "absolute", "top", "0", "left", "0", "width", "100%", "z-index", "1", 3, "click"], [2, "display", "flex", "flex-direction", "column", "justify-content", "space-between", "align-items", "center", "height", "100%", "width", "100%"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "formGroup"], ["appDraggable", "", 2, "position", "absolute", 3, "ngStyle", "annotation", "dragEnd", "clicked"], [1, "mb-1"], [2, "max-width", "max-content"], [1, "d-flex", "justify-content-end"], ["class", "w-10 h-10 text-success", "aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-10 h-10 text-warning", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "w-10 h-10 text-danger", "aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "score-placeholder", "w-100", "px-2", "border", "text-uppercase", "d-flex", "justify-content-center", "align-items-center", "fw-bold", 2, "height", "30px", 3, "ngClass"], ["class", "rounded card score-cards", "style", "position: relative;width: 350px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);", 3, "ngClass", 4, "ngIf"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "viewBox", "0 0 24 24", 1, "w-10", "h-10", "text-success"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "3", "d", "M5 11.917 9.724 16.5 19 7.5"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "w-10", "h-10", "text-warning"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18", "stroke", "currentColor", "stroke-width", "3"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18", "stroke", "currentColor", "stroke-width", "3"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "viewBox", "0 0 24 24", 1, "w-10", "h-10", "text-danger"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-width", "2", "d", "m6 6 12 12m3-6a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "rounded", "card", "score-cards", 2, "position", "relative", "width", "350px", "box-shadow", "0 4px 8px 0 rgba(0,0,0,0.2)", 3, "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "px-3", "py-2"], [1, "fw-bold", 2, "font-size", "14px"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "pi", "pi-times", 2, "font-size", "12px"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "text-primary", "px-3", "py-2", "border-top", "border-bottom", "border-bottom-dashed", "border-top-dashed", "mt-2", "fw-bold", 2, "font-size", "13px"], [1, "tab-menu", "py-2"], ["type", "button", 3, "disabled", "active", "click", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["type", "button", 3, "disabled", "click"], [1, "flex", "flex-column", "p-3", 2, "max-height", "250px", "overflow-y", "auto", "overflow-x", "hidden"], ["class", "w-100 bg-white rounded border p-2 mb-2", 4, "ngFor", "ngForOf"], [1, "w-100", "bg-white", "rounded", "border", "p-2", "mb-2"], [1, "d-flex", "justify-content-between", "align-items-center", "pb-1", "border-bottom", "border-bottom-dashed"], [1, "fw-bold", "small", "text-primary"], [1, "d-flex", "gap-3", "align-items-center", "justify-content-between", "pt-1"], [1, "fw-bold", "mb-1", "truncate", 2, "font-size", "13px"], [1, "text-start"], [1, "btn", "btn-sm", "btn-outline-success", "fw-bold", 3, "click"], [1, "btn", "btn-sm", "btn-outline-secondary", "fw-bold", 3, "click"], [1, "d-flex", "gap-1", 2, "max-width", "120px"], ["type", "number", 1, "form-control"], ["btn", ""], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "w-100", 3, "click"], [1, "d-flex", "justify-content-between", "pb-1", "border-bottom", "border-bottom-dashed"], [1, "fw-bold", "small", "text-success"], [1, "btn", "btn-sm", "btn-outline-danger", "fw-bold", 3, "click"], [1, "fw-bold", "mb-1", 2, "font-size", "13px"], [1, "p-5", "text-center", "text-secondary"]],
  template: function DrawingAndWritingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DrawingAndWritingComponent_div_1_Template, 12, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, DrawingAndWritingComponent_ng_container_3_Template, 8, 3, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, DrawingAndWritingComponent_ng_template_4_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showQuestionPanel);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](4, _c3, ctx.showQuestionPanel, !ctx.showQuestionPanel));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.currentQuestion == null ? null : ctx.currentQuestion.item_score == null ? null : ctx.currentQuestion.item_score.un_graded_response == null ? null : ctx.currentQuestion.item_score.un_graded_response.length) > 0)("ngIfElse", _r2);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_8__.DraggableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle],
  styles: [".tab-menu[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n  margin-bottom: 10px;\n}\n.tab-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: none;\n  background-color: #eee;\n  cursor: pointer;\n  font-size: small;\n  font-weight: 500;\n  border-radius: 5%;\n  border-bottom-left-radius: 0%;\n  border-bottom-right-radius: 0%;\n  flex-grow: 1;\n}\n.tab-menu[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background-color: #5f9bdb;\n  color: white;\n}\n.truncate[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n#container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  width: 100%;\n}\n#stage-parent[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 100%;\n  overflow-y: auto;\n  height: 1000px;\n  overflow-x: hidden;\n  border: 1px solid lightgray;\n}\n#stage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1000px;\n  background: #fff;\n}\n.hint[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 13px;\n  margin-left: 8px;\n}\n#stage-parent[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 20px;\n}\n#stage-parent[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 10px;\n}\n#stage-parent[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n  border: 2px solid #f1f1f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYXdpbmctYW5kLXdyaXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFDRjtBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGO0FBRUk7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDUjtBQUVJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ1I7QUFFSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNSO0FBRUk7RUFDSSxXQUFBO0FBQ1I7QUFFSTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUVJO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ1IiLCJmaWxlIjoiZHJhd2luZy1hbmQtd3JpdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGR5bmFtaWMtdGFicy5jb21wb25lbnQuY3NzICovXHJcbi50YWItbWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDNweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udGFiLW1lbnUgYnV0dG9uIHtcclxuICBwYWRkaW5nOiA3cHggMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAlO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwJTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi50YWItbWVudSBidXR0b24uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY5YmRiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRydW5jYXRlIHsgICAgXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4gICAgI2NvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFnZS1wYXJlbnQge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogMTAwMHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YWdlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5oaW50IHtcclxuICAgICAgICBjb2xvcjogIzljYTNhZjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweFxyXG4gICAgfVxyXG5cclxuICAgICNzdGFnZS1wYXJlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhZ2UtcGFyZW50Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFnZS1wYXJlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2YxZjFmMTtcclxuICAgIH0iXX0= */"]
});

/***/ }),

/***/ 6443:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/results/grading-item-types/drawing-and-writing/model/question-annotation.mode.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionAnnotation": () => (/* binding */ QuestionAnnotation),
/* harmony export */   "Grading": () => (/* binding */ Grading)
/* harmony export */ });
class QuestionAnnotation {
    constructor() {
        this.position = [];
        this.page = 0;
        this.code = '';
        this.score = 0;
        this.markers_discretion = false;
        this.comment = '';
        this.score_id = '';
        this.mark_category = '';
        this.mark_type_id = '';
        this.name = '';
        this.boundary = '';
        this.question_section_id = '';
        this.item_id = '';
    }
    ;
}
class Grading {
}
;
;


/***/ }),

/***/ 80243:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/results/grading-item-types/drawing-and-writing/model/store.model.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* binding */ Page),
/* harmony export */   "ContextMenuGradingForm": () => (/* binding */ ContextMenuGradingForm),
/* harmony export */   "Store": () => (/* binding */ Store)
/* harmony export */ });
class Page {
    constructor(pageNumber) {
        this.page = pageNumber;
        this.strokes = [];
        this.grading = [];
    }
}
class ContextMenuGradingForm {
}
class Store {
    constructor() {
        this.currentPage = 0;
        this.pages = [];
        this.shouldReset = false;
    }
}


/***/ }),

/***/ 27234:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/results/grading-item-types/drawing-and-writing/services/event.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KonvaToolsEvent": () => (/* binding */ KonvaToolsEvent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);


class KonvaToolsEvent {
    constructor() {
        this._pageSelectEvent = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this._questionChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this._resizeCanvas$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.openQuestionPane$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this._selectMeasurementTool$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this._removeMeasurementTool$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.backgroundChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    }
}
KonvaToolsEvent.ɵfac = function KonvaToolsEvent_Factory(t) { return new (t || KonvaToolsEvent)(); };
KonvaToolsEvent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: KonvaToolsEvent, factory: KonvaToolsEvent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 69587:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/results/grading-item-types/drawing-and-writing/services/store.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawingAndWritingStore": () => (/* binding */ DrawingAndWritingStore)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _model_store_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/store.model */ 80243);
/* harmony import */ var src_app_pages_assessment_model_marking_guide_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/assessment/model/marking-guide-types */ 47753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





class DrawingAndWritingStore {
  constructor() {
    this._store = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({
      currentPage: 0,
      pages: [],
      shouldReset: false
    });
    this.store$ = this._store.asObservable();
    this.createNewPage();
  }

  getStoreData() {
    const store = this._store.getValue();

    return store;
  }

  updateStore(update) {
    const store = this.getStoreData();

    this._store.next(Object.assign(Object.assign({}, store), update));
  }

  updateStoreCurrentPage(currentPage) {
    const store = this.getStoreData();

    if (currentPage >= 0 && currentPage < store.pages.length) {
      this._store.next(Object.assign(Object.assign({}, store), {
        currentPage
      }));
    }
  }

  getCurrentPageData() {
    const store = this.getStoreData();
    return store.pages[store.currentPage];
  }

  createNewPage() {
    const store = this.getStoreData();
    const newPageNumber = store.pages.length + 1; // Logical page number

    const newPage = new _model_store_model__WEBPACK_IMPORTED_MODULE_1__.Page(newPageNumber);
    const updatedPages = [...store.pages, newPage]; // Set the new current page to the index of the newly created page

    const newCurrentPage = updatedPages.length - 1;
    this.updateStore({
      currentPage: newCurrentPage,
      pages: updatedPages
    });
  }

  deleteCurrentPage() {
    const store = this.getStoreData();
    let {
      currentPage,
      pages
    } = store;

    if (pages.length === 1) {
      return;
    }

    const updatedPages = pages.filter((_, index) => index !== currentPage); // Determine the new current page index

    let newCurrentPageIndex;

    if (updatedPages.length === 0) {
      newCurrentPageIndex = 0;
    } else if (currentPage > 0 && currentPage === pages.length - 1) {
      newCurrentPageIndex = updatedPages.length - 1;
    } else {
      newCurrentPageIndex = currentPage;
    } // Re-index the page numbers


    const reIndexedPages = updatedPages.map((page, index) => {
      page.page = index + 1;
      return page;
    });
    this.updateStore({
      currentPage: newCurrentPageIndex,
      pages: reIndexedPages
    });
  }

  selectPage(pageIndex) {
    this.updateStoreCurrentPage(pageIndex);
    const pageData = this.getCurrentPageData();
    return pageData;
  }

  updateCurrentPageStrokes(stroke, shouldReset) {
    var _a;

    const store = this.getStoreData();
    const currentPageIndex = store.currentPage;
    const updatedPages = (_a = store.pages) === null || _a === void 0 ? void 0 : _a.map((page, index) => {
      if (index === currentPageIndex) {
        return Object.assign(Object.assign({}, page), {
          strokes: [...stroke]
        });
      }

      return page;
    });
    this.updateStore({
      pages: updatedPages,
      shouldReset
    });
  }

  addradingFormToCurrentPageContextMenu(grading) {
    var _a;

    const store = this.getStoreData();
    const currentPageIndex = store.currentPage;
    const updatedPages = (_a = store.pages) === null || _a === void 0 ? void 0 : _a.map((page, index) => {
      if (index === currentPageIndex) {
        return Object.assign(Object.assign({}, page), {
          grading: [...(page === null || page === void 0 ? void 0 : page.grading), grading]
        });
      }

      return page;
    });
    this.updateStore({
      pages: updatedPages
    });
  }

  expandGradingFormContextMenuItem(formItemIndex) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const store = _this.getStoreData();

      const currentPageIndex = store.currentPage;
      const updatedPages = (_a = store.pages) === null || _a === void 0 ? void 0 : _a.map((page, index) => {
        if (index === currentPageIndex) {
          try {
            page.grading[formItemIndex].isOpen = true;
          } catch (e) {}

          return page;
        }

        return page;
      });

      _this.updateStore({
        pages: updatedPages
      });
    })();
  }

  collapseGradingFormContextMenuItems() {
    var _a;

    const store = this.getStoreData();
    const validTypes = Object.values(src_app_pages_assessment_model_marking_guide_types__WEBPACK_IMPORTED_MODULE_2__.SchemeMarkCategory);
    const updatedPages = (_a = store.pages) === null || _a === void 0 ? void 0 : _a.map(page => {
      // Filter out invalid placeholderTypes
      const filteredGrading = page.grading.map(item => {
        if (validTypes.includes(item.placeholderType)) {
          return Object.assign(Object.assign({}, item), {
            isOpen: false
          }); // collapse valid ones
        }

        return null; // mark invalid
      }).filter(item => item !== null); // remove invalids

      return Object.assign(Object.assign({}, page), {
        grading: filteredGrading
      });
    });
    this.updateStore({
      pages: updatedPages
    });
  }

  updateGradingFormContextMenuItemPosition(position, formItemIndex) {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const store = _this2.getStoreData();

      const currentPageIndex = store.currentPage;
      const updatedPages = (_a = store.pages) === null || _a === void 0 ? void 0 : _a.map((page, index) => {
        if (index === currentPageIndex) {
          page.grading[formItemIndex].position = position;
          return page;
        }

        return page;
      });

      _this2.updateStore({
        pages: updatedPages
      });
    })();
  }

  collapseGradingFormContextMenuItem(formItemIndex) {
    var _this3 = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const store = _this3.getStoreData();

      const currentPageIndex = store.currentPage;
      const updatedPages = (_a = store.pages) === null || _a === void 0 ? void 0 : _a.map((page, index) => {
        if (index === currentPageIndex) {
          const targetItem = page.grading[formItemIndex]; // Check if placeholderType is valid

          const validTypes = Object.values(src_app_pages_assessment_model_marking_guide_types__WEBPACK_IMPORTED_MODULE_2__.SchemeMarkCategory);
          const isValid = targetItem && validTypes.includes(targetItem.placeholderType);
          let updatedGrading;

          if (isValid) {
            // Just collapse (keep item)
            updatedGrading = page.grading.map((item, i) => i === formItemIndex ? Object.assign(Object.assign({}, item), {
              isOpen: false
            }) : item);
          } else {
            // Remove item completely
            updatedGrading = page.grading.filter((_, i) => i !== formItemIndex);
          }

          return Object.assign(Object.assign({}, page), {
            grading: updatedGrading
          });
        }

        return page;
      });

      _this3.updateStore({
        pages: updatedPages
      });
    })();
  }

  deleteGradingFormContextMenuItem(formItemIndex) {
    var _this4 = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const store = _this4.getStoreData();

      const currentPageIndex = store.currentPage;
      const updatedPages = (_a = store.pages) === null || _a === void 0 ? void 0 : _a.map((page, index) => {
        if (index === currentPageIndex) {
          const updatedGrading = page.grading.filter((_, i) => i !== formItemIndex);
          return Object.assign(Object.assign({}, page), {
            grading: updatedGrading
          });
        }

        return page;
      });

      _this4.updateStore({
        pages: updatedPages
      });
    })();
  }

  updateGradingFormContextMenuItemVersion(formItemIndex) {
    var _this5 = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const store = _this5.getStoreData();

      const currentPageIndex = store.currentPage;
      const updatedPages = (_a = store.pages) === null || _a === void 0 ? void 0 : _a.map((page, index) => {
        if (index === currentPageIndex) {
          page.grading[formItemIndex].versioned = true;
          page.grading[formItemIndex].isOpen = false;
          return page;
        }

        return page;
      });

      _this5.updateStore({
        pages: updatedPages
      });
    })();
  }

  updateGradingFormContextMenuItemPlaceholder(formItemIndex, update) {
    var _this6 = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const store = _this6.getStoreData();

      const currentPageIndex = store.currentPage;
      const updatedPages = (_a = store.pages) === null || _a === void 0 ? void 0 : _a.map((page, index) => {
        if (index === currentPageIndex) {
          page.grading[formItemIndex].placeholderCode = update.placeholderCode;
          page.grading[formItemIndex].placeholderType = update.placeholderType;
          page.grading[formItemIndex].scoreId = update.scoreId;
          return page;
        }

        return page;
      });

      _this6.updateStore({
        pages: updatedPages
      });
    })();
  }

  clearStoreData() {
    const newStore = new _model_store_model__WEBPACK_IMPORTED_MODULE_1__.Store();
    newStore.shouldReset = true;

    this._store.next(newStore);
  }

}

DrawingAndWritingStore.ɵfac = function DrawingAndWritingStore_Factory(t) {
  return new (t || DrawingAndWritingStore)();
};

DrawingAndWritingStore.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: DrawingAndWritingStore,
  factory: DrawingAndWritingStore.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 40589:
/*!************************************************************!*\
  !*** ./src/app/pages/results/grading/grading.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GradingComponent": () => (/* binding */ GradingComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var _assessment_service_marking_guide_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assessment/service/marking-guide.service */ 58314);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-apexcharts */ 33142);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 68581);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/paginator */ 21066);


















function GradingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function GradingComponent_ng_container_1_app_breadcrumbs_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-breadcrumbs", 86);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbItems", ctx_r2.breadCrumbItems);
  }
}

function GradingComponent_ng_container_1_h3_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r3.assessmentSummary.exam_name));
  }
}

function GradingComponent_ng_container_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r4.assessmentSummary.start_date, "MMMM d, y 'at' h:mm a"));
  }
}

function GradingComponent_ng_container_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r5.assessmentSummary.end_date, "MMMM d, y 'at' h:mm a"), "");
  }
}

function GradingComponent_ng_container_1_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r25.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r25.center_id, " ");
  }
}

function GradingComponent_ng_container_1_option_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r26.name, " ");
  }
}

function GradingComponent_ng_container_1_span_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.assessmentSummary.total_participants, " ");
  }
}

function GradingComponent_ng_container_1_span_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r9.assessmentSummary.total_started, "");
  }
}

function GradingComponent_ng_container_1_span_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.assessmentSummary.total_completed, "");
  }
}

function GradingComponent_ng_container_1_span_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r11.assessmentSummary.total_suspended, "");
  }
}

function GradingComponent_ng_container_1_span_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r12.assessmentSummary.total_absent, "");
  }
}

function GradingComponent_ng_container_1_span_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r13.assessmentSummary.total_comp_time_added, "");
  }
}

function GradingComponent_ng_container_1_span_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r14.assessmentSummary.total_timed_out, "");
  }
}

function GradingComponent_ng_container_1_span_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r15.assessmentSummary.total_computer_swapped, "");
  }
}

function GradingComponent_ng_container_1_span_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r16.assessmentSummary.total_relogin, "");
  }
}

function GradingComponent_ng_container_1_option_176_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r27.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r27.center_id, " ");
  }
}

function GradingComponent_ng_container_1_option_183_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r28.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r28.name, " ");
  }
}

function GradingComponent_ng_container_1_option_298_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r29.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r29.center_id, " ");
  }
}

function GradingComponent_ng_container_1_option_305_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r30.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r30.name, " ");
  }
}

function GradingComponent_ng_container_1_apx_chart_313_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "apx-chart", 90);
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("series", ctx_r21.scoreDistributionChart.series)("chart", ctx_r21.scoreDistributionChart.chart)("markers", ctx_r21.scoreDistributionChart.markers)("dataLabels", ctx_r21.scoreDistributionChart.dataLabels)("stroke", ctx_r21.scoreDistributionChart.stroke)("colors", ctx_r21.scoreDistributionChart.colors)("title", ctx_r21.scoreDistributionChart.title)("xaxis", ctx_r21.scoreDistributionChart.xaxis)("yaxis", ctx_r21.scoreDistributionChart.yaxis);
  }
}

function GradingComponent_ng_container_1_option_332_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r31.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r31.name, " ");
  }
}

function GradingComponent_ng_container_1_div_339_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function GradingComponent_ng_container_1_div_341_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "p-sortIcon", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "p-columnFilter", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Sections");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Duration\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0, a1, a2) {
  return {
    "badge-soft-danger": a0,
    "badge-soft-warning": a1,
    "badge-soft-success": a2
  };
};

function GradingComponent_ng_container_1_div_341_ng_template_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](2, _c0, participant_r35.status.toUpperCase() === "NOT_STARTED", participant_r35.status.toUpperCase() === "STARTED", participant_r35.status.toUpperCase() === "ENDED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](participant_r35.status.split("_").join(" "));
  }
}

function GradingComponent_ng_container_1_div_341_ng_template_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](participant_r35.center);
  }
}

function GradingComponent_ng_container_1_div_341_ng_template_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "batch");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](participant_r35.batchName);
  }
}

function GradingComponent_ng_container_1_div_341_ng_template_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "T. Attempts");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](participant_r35.attempted);
  }
}

function GradingComponent_ng_container_1_div_341_ng_template_4_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "raw score");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](participant_r35.score);
  }
}

function GradingComponent_ng_container_1_div_341_ng_template_4_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "scaled score");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](participant_r35.scaledScore);
  }
}

function GradingComponent_ng_container_1_div_341_ng_template_4_div_21_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Section\u00A0Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Total\u00A0Questions: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Attempted: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Section\u00A0Score: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Section\u00A0Scaled\u00A0Score: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const section_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](section_r51.section_name.trim().replaceAll(" ", "\u00A0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](section_r51.total_items);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](section_r51.total_attempted);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](section_r51.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", section_r51.scaled_score, "%");
  }
}

function GradingComponent_ng_container_1_div_341_ng_template_4_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, GradingComponent_ng_container_1_div_341_ng_template_4_div_21_ng_template_5_Template, 31, 5, "ng-template", null, 124, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const section_r51 = ctx.$implicit;

    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("popoverTitle", "Section: ", section_r51.section_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbPopover", _r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", section_r51.section_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Attempted: ", section_r51.total_attempted, "");
  }
}

function GradingComponent_ng_container_1_div_341_ng_template_4_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](participant_r35.startTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](participant_r35.endTime);
  }
}

function GradingComponent_ng_container_1_div_341_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, GradingComponent_ng_container_1_div_341_ng_template_4_div_9_Template, 6, 6, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, GradingComponent_ng_container_1_div_341_ng_template_4_div_10_Template, 5, 1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, GradingComponent_ng_container_1_div_341_ng_template_4_div_11_Template, 5, 1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, GradingComponent_ng_container_1_div_341_ng_template_4_div_12_Template, 5, 1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, GradingComponent_ng_container_1_div_341_ng_template_4_div_16_Template, 5, 1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, GradingComponent_ng_container_1_div_341_ng_template_4_div_17_Template, 5, 1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, GradingComponent_ng_container_1_div_341_ng_template_4_div_21_Template, 7, 4, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, GradingComponent_ng_container_1_div_341_ng_template_4_ng_template_25_Template, 5, 2, "ng-template", null, 111, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ul", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "a", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GradingComponent_ng_container_1_div_341_ng_template_4_Template_a_click_33_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r57);
      const participant_r35 = restoredCtx.$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r56.goToGrading(participant_r35);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Grade ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const participant_r35 = ctx.$implicit;

    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 12, participant_r35.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", participant_r35.loginField, ": ", participant_r35.loginFieldVaue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", participant_r35.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", participant_r35.center);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", participant_r35.batchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", participant_r35.attempted !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", participant_r35.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", participant_r35.scaledScore);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", participant_r35.sectionItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbPopover", _r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", participant_r35.duration, " ");
  }
}

function GradingComponent_ng_container_1_div_341_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p-table", 92, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GradingComponent_ng_container_1_div_341_ng_template_3_Template, 13, 0, "ng-template", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, GradingComponent_ng_container_1_div_341_ng_template_4_Template, 35, 14, "ng-template", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r24.participants);
  }
}

const _c1 = function (a0) {
  return {
    "d-none": a0
  };
};

const _c2 = function () {
  return [10, 50, 100, 200];
};

function GradingComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GradingComponent_ng_container_1_app_breadcrumbs_1_Template, 1, 1, "app-breadcrumbs", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, GradingComponent_ng_container_1_h3_5_Template, 3, 3, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Exam Delivery:\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "ON_PREMISE_WITH SECURE_BROWSER");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, GradingComponent_ng_container_1_span_18_Template, 3, 4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, GradingComponent_ng_container_1_span_24_Template, 3, 4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " Filter Assessment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "--Select center --");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, GradingComponent_ng_container_1_option_39_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Batch");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "-- Select batch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, GradingComponent_ng_container_1_option_46_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GradingComponent_ng_container_1_Template_button_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r58.applyAssementFilter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, " Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GradingComponent_ng_container_1_Template_button_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r59);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r60.clearFilter("assessment");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, " Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, GradingComponent_ng_container_1_span_64_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, " Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](75, GradingComponent_ng_container_1_span_75_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, " Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](86, GradingComponent_ng_container_1_span_86_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](92, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, " Suspended");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](96, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](97, GradingComponent_ng_container_1_span_97_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, " Absentees");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](107, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](108, GradingComponent_ng_container_1_span_108_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](114, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, " compensatory time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](118, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](119, GradingComponent_ng_container_1_span_119_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](125, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, " Timed out");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](129, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](130, GradingComponent_ng_container_1_span_130_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](136, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, " System swaps");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](140, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](141, GradingComponent_ng_container_1_span_141_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](147, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](150, " Re logins");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](151, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](152, GradingComponent_ng_container_1_span_152_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "h4", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](156, "Overall Performance (All Subjects)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](161, "Score Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](164, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](167, " Filter Score Analysis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](168, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, "Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](175, "--Select center --");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](176, GradingComponent_ng_container_1_option_176_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](179, "Section*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](182, "--Select section --");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](183, GradingComponent_ng_container_1_option_183_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](184, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](186, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GradingComponent_ng_container_1_Template_button_click_186_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r59);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r61.applyScoreAnalysisFilter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GradingComponent_ng_container_1_Template_button_click_188_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r59);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r62.clearFilter("scoreanalysis");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](189, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](192, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](194, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](196);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](197, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](198, "h6", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](199, "AVG. Raw Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](201, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](202, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](204);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](205, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "h6", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](207, "AVG. Scaled Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](208, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](209, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](210, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](212);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](213, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](214, "h6", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](215, "Max Raw Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](216, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](217, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](219, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](220);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](221, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](222, "h6", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](223, "Min Raw Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](224, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](225, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](226, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](227, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](229, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](230, "h6", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](231, "Max Scaled Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](232, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](233, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](234, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](237, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](238, "h6", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](239, "Min Scaled Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](240, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](241, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](242, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](243, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](244);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](245, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](246, "h6", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](247, "Midian Raw Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](248, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](249, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](250, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](251, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](252);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](253, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](254, "h6", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](255, "Midian Scaled Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](256, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](257, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](258, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](259, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](260);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](261, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](262, "h6", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](263, "Upper Quartile Scaled Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](264, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](265, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](266, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](267, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](268);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](269, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](270, "h6", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](271, "Lower Quartile Scaled Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](272, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](273, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](274, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](275, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](276);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](277, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](278, "h6", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](279, "Standard Deviation Scaled Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](280, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](281, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](282, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](283, "Score Distribution");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](284, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](285, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](286, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](287, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](288, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](289, " Filter Score distribution ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](290, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](291, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](292, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](293, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](294, "Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](295, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](296, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](297, "--Select center --");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](298, GradingComponent_ng_container_1_option_298_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](299, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](300, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](301, "Section*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](302, "select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](303, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](304, "--Select section --");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](305, GradingComponent_ng_container_1_option_305_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](306, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](307, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](308, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GradingComponent_ng_container_1_Template_button_click_308_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r59);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r63.applyDistributionFilter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](309, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](310, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GradingComponent_ng_container_1_Template_button_click_310_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r59);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r64.clearFilter("distribution");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](311, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](312, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](313, GradingComponent_ng_container_1_apx_chart_313_Template, 1, 9, "apx-chart", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](314, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](315, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](316, "h4", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](317, "Participants List");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](318, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](319, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](320, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](321, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](322, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](323, "Filter Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](324, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](325, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](326, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](327, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](328, "Section*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](329, "select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](330, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](331, "--Select section --");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](332, GradingComponent_ng_container_1_option_332_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](333, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](334, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](335, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GradingComponent_ng_container_1_Template_button_click_335_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r59);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r65.applyParticipantListFilter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](336, " Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](337, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GradingComponent_ng_container_1_Template_button_click_337_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r59);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r66.clearFilter("participant");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](338, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](339, GradingComponent_ng_container_1_div_339_Template, 6, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](340, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](341, GradingComponent_ng_container_1_div_341_Template, 5, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](342, "p-paginator", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onPageChange", function GradingComponent_ng_container_1_Template_p_paginator_onPageChange_342_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r59);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r67.onParticipantPageChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.assessmentFilterForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.assessmentSummary == null ? null : ctx_r1.assessmentSummary.centers);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.assessmentSummary == null ? null : ctx_r1.assessmentSummary.batches);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.assessmentSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.scoreAnalysisFilterForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.assessmentSummary == null ? null : ctx_r1.assessmentSummary.centers);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.assessmentSummary == null ? null : ctx_r1.assessmentSummary.sections);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.numberToPrecision(ctx_r1.scoreAnalysis.avg_raw_score), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.numberToPrecision(ctx_r1.scoreAnalysis.avg_scaled_score), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.scoreAnalysis.max_raw_score, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.scoreAnalysis.min_raw_score, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.scoreAnalysis.max_scaled_score, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.scoreAnalysis.min_scaled_score, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.scoreAnalysis.median_raw_score, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.numberToPrecision(ctx_r1.scoreAnalysis.median_scaled_score), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.numberToPrecision(ctx_r1.scoreAnalysis.upper_quartile_scaled_score), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.numberToPrecision(ctx_r1.scoreAnalysis.lower_quartile_scaled_score), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.numberToPrecision(ctx_r1.scoreAnalysis.std_dev_scaled_score), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.scoreDistributionFilterForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.assessmentSummary == null ? null : ctx_r1.assessmentSummary.centers);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.assessmentSummary == null ? null : ctx_r1.assessmentSummary.sections);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.scoreDistribution);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.participantsListFilterForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.assessmentSummary == null ? null : ctx_r1.assessmentSummary.sections);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isLoadingParticipants);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.participantList && !ctx_r1.isLoadingParticipants);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](45, _c1, !ctx_r1.participantList))("first", 0)("totalRecords", ctx_r1.participantList && ctx_r1.participantList.total)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](47, _c2))("rows", 10)("pageLinkSize", 10)("showCurrentPageReport", true);
  }
}

class GradingComponent {
  constructor(ar, router, dataService, markingGuideService, notifier) {
    this.ar = ar;
    this.router = router;
    this.dataService = dataService;
    this.markingGuideService = markingGuideService;
    this.notifier = notifier;
    this.scoreDistribution = null;
    this.loadingDashboardResources = true;
    this.isLoadingParticipants = false;
    this.participantList = null;
    this.participants = [];
    this.participantFilterParams = {
      page: 0,
      size: 10,
      status: 'ENDED',
      section_id: ''
    };
    this.assessmentSummary = null;
    this.scoreAnalysis = null;
  }

  getAssessmentId() {
    this.ar.paramMap.subscribe(route => {
      this.assessmentId = route.get('assessmentId');
    });
  }

  ngOnInit() {
    this.getAssessmentId();
    this.getAssessmentSummary();
  }

  getAssessmentSummary() {
    this.loadingDashboardResources = true;
    this.dataService.getAssessmentSummary(this.assessmentId).subscribe({
      next: res => {
        this.assessmentSummary = res;
        this.participantFilterParams.section_id = res.sections[0].id;
        this.fetchDashboardData();
        this.fetchMakingGuideSections();
      }
    });
  }

  fetchDashboardData() {
    var _this = this;

    const requests = {
      scoreAnalysis: this.dataService.getScoreAnalysis(this.assessmentId),
      participants: this.dataService.getParticipants(this.assessmentId, this.participantFilterParams),
      scoreDistribution: this.dataService.getScoreDistribution(this.assessmentId)
    };
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)(requests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => {
      this.loadingDashboardResources = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
        scoreAnalysis: [],
        participants: [],
        scoreDistribution: []
      });
    })).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
        scoreAnalysis,
        participants,
        scoreDistribution
      }) {
        _this.scoreAnalysis = scoreAnalysis;
        _this.scoreDistribution = scoreDistribution;

        _this.updateParticipantsData(participants);

        _this.initalizeScoreDistributionChart();

        _this.initFilterForms();

        _this.initializeBreadCrumbs();

        _this.patchForms();

        _this.loadingDashboardResources = false;
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  fetchMakingGuideSections() {
    this.markingGuideService.fetchMarkingGuideAssessmentSections(this.assessmentId).subscribe({
      next: res => {
        this.markingGuideSections = res;
      }
    });
  }

  goToGrading(participant) {
    var _a;

    const filteredSection = this.participantsListFilterForm.get('section_id');
    const section = (_a = this.assessmentSummary) === null || _a === void 0 ? void 0 : _a.sections.find(item => item.id == filteredSection.value);
    const markingGuideSection = this.markingGuideSections.find(item => item.name == section.name);

    if (!markingGuideSection) {
      this.notifier.notify('warning', 'This subject does not have a marking guide');
      return;
    }

    this.router.navigate(['/examalpha/reports', this.assessmentId, 'grading', 'grader'], {
      queryParams: {
        participant: participant.participantId,
        section_id: filteredSection.value,
        schemeId: markingGuideSection.scheme_id
      }
    });
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
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const formatParticipantList = yield _this2.formatParticipantData(data.content);
      _this2.participants = formatParticipantList;
      _this2.participantList = data;
      _this2.isLoadingParticipants = false;
    })();
  }

  onParticipantPageChange(event) {
    this.participantFilterParams = Object.assign(Object.assign({}, this.participantFilterParams), {
      size: event.rows,
      page: event.page * event.rows
    });
    this.applyParticipantListFilter();
  }

  formatParticipantData(participants) {
    return (0,C_Users_DELL_Desktop_MULTILENT_JOB_OKOSUN_MULTILENT_APPS_authoring_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const participantList = participants === null || participants === void 0 ? void 0 : participants.map(item => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

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
        const participantName = `${item.reg_fields['FIRST NAME']} ${item.reg_fields['LAST NAME']}`;
        const sectionItems = (_d = (_c = item === null || item === void 0 ? void 0 : item.score) === null || _c === void 0 ? void 0 : _c.section_scores) !== null && _d !== void 0 ? _d : [];
        const sectionItemsMap = sectionItems.map(sectionItem => {
          var _a, _b, _c;

          const attempt = (_b = (_a = item === null || item === void 0 ? void 0 : item.section_attempts) === null || _a === void 0 ? void 0 : _a.sections) === null || _b === void 0 ? void 0 : _b.find(attempt => attempt.id === sectionItem.section_id);
          return Object.assign(Object.assign({}, sectionItem), {
            total_attempted: (_c = attempt === null || attempt === void 0 ? void 0 : attempt.total_attempted) !== null && _c !== void 0 ? _c : 0
          });
        });
        return {
          name: participantName,
          score: (_e = item.score) === null || _e === void 0 ? void 0 : _e.score,
          scaledScore: (_f = item.score) === null || _f === void 0 ? void 0 : _f.scaled_score,
          sectionItems: sectionItemsMap,
          avg: (_g = item.score) === null || _g === void 0 ? void 0 : _g.scaled_score,
          timeout: item.timed_out ? 'YES' : 'NO',
          compTimedOut: item.comp_time_added ? 'YES' : 'NO',
          computerSwaped: item.computer_swapped ? 'YES' : 'NO',
          batchName: item.batch_name,
          duration: durationMinutes,
          startTime: item.logins_ips ? formatDateTime(item.logins_ips.initial_login) : 'N/A',
          endTime: item.logins_ips ? formatDateTime(item.logins_ips.end_time) : 'N/A',
          center: item.center_id,
          sectionGroup: item.group_name,
          attempted: ((_h = item.section_attempts) === null || _h === void 0 ? void 0 : _h.total_attempted) !== null ? (_j = item.section_attempts) === null || _j === void 0 ? void 0 : _j.total_attempted : false,
          systemSwaps: (_k = item === null || item === void 0 ? void 0 : item.logins_ips) === null || _k === void 0 ? void 0 : _k.ip_addresses.length,
          status: item.status.toLowerCase(),
          loginField: item === null || item === void 0 ? void 0 : item.login_field,
          loginFieldVaue: item === null || item === void 0 ? void 0 : item.reg_fields[item === null || item === void 0 ? void 0 : item.login_field],
          loginIps: (_l = item === null || item === void 0 ? void 0 : item.logins_ips) === null || _l === void 0 ? void 0 : _l.ip_addresses,
          participantId: item.participants_id
        };
      });
      return participantList;
    })();
  }

  patchForms() {
    this.participantsListFilterForm.patchValue({
      section_id: this.assessmentSummary.sections[0].id
    });
  }

  initFilterForms() {
    this.assessmentFilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      center_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      batch_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('')
    });
    this.scoreAnalysisFilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      center_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      section_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('')
    });
    this.scoreDistributionFilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      center_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      section_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('')
    });
    this.participantsListFilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      center_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      section_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      present: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      batch_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      score_scaled_greater_than: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      score_scaled_less_than: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      attempts_greater_than: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      attempts_less_than: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      duration_greater_than: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      duration_less_than: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      re_login: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      time_out: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      suspended_: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      login_field_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      comp_time_added: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('')
    });
  }

  initializeBreadCrumbs() {
    this.breadCrumbItems = [{
      label: 'Grading',
      active: false
    }, {
      label: this.assessmentSummary.exam_name,
      active: false
    }];
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

    this.dataService.getAssessmentSummary(this.assessmentId, params).subscribe(res => this.assessmentSummary = res);
  }

  applyScoreAnalysisFilter() {
    if (this.scoreAnalysisFilterForm.invalid) return this.scoreAnalysisFilterForm.markAllAsTouched();
    const {
      center_id,
      section_id
    } = this.scoreAnalysisFilterForm.value;
    const params = {};

    if (center_id) {
      params.center_id = center_id;
    }

    if (section_id) {
      params.section_id = section_id;
    }

    this.dataService.getScoreAnalysis(this.assessmentId, params).subscribe(res => this.scoreAnalysis = res);
  }

  applyDistributionFilter() {
    if (this.scoreDistributionFilterForm.invalid) return this.scoreDistributionFilterForm.markAllAsTouched();
    const {
      center_id,
      section_id
    } = this.scoreDistributionFilterForm.value;
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

  initalizeScoreDistributionChart() {
    this._scoreDistributionChart('["--vz-success"]');
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

    if (target == 'scoreanalysis') {
      this.scoreAnalysisFilterForm.reset();
      this.applyScoreAnalysisFilter();
    }

    if (target == 'distribution') {
      this.scoreDistributionFilterForm.reset();
      this.applyDistributionFilter();
    }
  }

  numberToPrecision(num) {
    return num === null || num === void 0 ? void 0 : num.toFixed(1);
  }

  gotoGrader() {
    this.router.navigate(['/grading/grader']);
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

}

GradingComponent.ɵfac = function GradingComponent_Factory(t) {
  return new (t || GradingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_assessment_service_marking_guide_service__WEBPACK_IMPORTED_MODULE_2__.MarkingGuideService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_10__.NotifierService));
};

GradingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: GradingComponent,
  selectors: [["app-grading"]],
  decls: 2,
  vars: 2,
  consts: [["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "visually-hidden"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"], ["title", "", 3, "breadcrumbItems", 4, "ngIf"], [1, "card", "p-3"], [1, "row", "align-items-end"], [1, "col-lg-6"], ["class", "modal-title", 4, "ngIf"], [1, "d-flex", "text-secondary", "fs-12", 2, "cursor", "pointer"], [1, "fs-12"], [1, "col-lg-6", "px-3"], [1, "d-flex", "align-items-center", "justify-content-end"], [1, "d-flex", "gap-5", "fs-12", "text-secondary", "justify-content-end", 2, "cursor", "pointer"], [1, "d-inline-block", "rounded-circle", "bg-success", 2, "width", "10px", "height", "10px"], [1, "fw-bold", "text-black", "small"], ["class", "text-secondary", 4, "ngIf"], [1, "d-inline-block", "rounded-circle", "bg-danger", 2, "width", "10px", "height", "10px"], ["ngbDropdown", "", 1, "dropdown"], ["id", "dropdownMenuLink1", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "text-muted", "arrow-none"], [1, "ri-more-2-fill", "align-middle", "me-2", "fs-18", "fw-bold", "text-dark", 2, "cursor", "pointer"], ["ngbDropdownMenu", "", 1, "border", "shadow-sm", 2, "min-width", "300px"], [1, "px-3", "py-2", "small", "text-black"], [1, "dropdown-divider"], [1, "px-3", "py-1", 3, "formGroup"], [1, "mb-2"], ["for", "center", 1, "small"], ["formControlName", "center_id", 1, "form-control", "control-input"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "batch", 1, "small"], ["formControlName", "batch_id", 1, "form-control", "control-input"], [1, "px-3", "d-flex", "gap-1"], ["type", "button", 1, "btn", "btn-primary", "w-100", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "row", "mt-4"], [1, "col-lg-3", "col-md-3", "col-sm-12"], [1, "card"], [1, "d-flex", "p-2", "align-items-center"], [1, "me-3", "flex-shrink-0"], [1, "px-2", "py-1", "avatar-title", "bg-soft-secondary", "rounded-2", "fs-4"], [1, "ri-group-fill", "text-secondary"], [1, "flex-grow-1", "overflow-hidden"], [1, "fs-14"], ["class", "fs-14 fw-bold", 4, "ngIf"], [1, "px-2", "py-1", "avatar-title", "bg-soft-primary", "rounded-2", "fs-4"], [1, "ri-timer-fill", "text-primary"], [1, "d-flex", "align-items-center", "flex-grow-1", "overflow-hidden"], [1, "p-2", "avatar-title", "bg-soft-success", "rounded-2", "fs-4"], [1, "bx", "bxs-send", "text-success"], [1, "px-2", "py-1", "avatar-title", "bg-soft-danger", "rounded-2", "fs-4"], [1, "ri-pause-circle-fill", "text-danger"], [1, "p-2", "avatar-title", "bg-soft-warning", "rounded-2", "fs-4"], [1, "bx", "bxs-user-x", "text-warning"], [1, "ri-timer-fill", "text-success"], [1, "p-2", "avatar-title", "bg-soft-danger", "rounded-2", "fs-4"], [1, "ri-stop-circle-fill", "text-danger"], [1, "p-2", "avatar-title", "bg-soft-secondary", "rounded-2", "fs-4"], [1, "ri-exchange-fill", "text-warning"], [1, "p-2", "avatar-title", "bg-soft-primary", "rounded-2", "fs-4"], [1, "bx", "bx-revision", "text-primary"], [1, "d-flex", "align-items-center", "gap-2", "mt-3"], [1, "modal-title"], [1, "d-flex", "flex-column", "flex-lg-row", "gap-3", "py-4"], [1, "col-lg-6", "p-3", "rounded", "border"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "fw-bold", "text-black"], ["formControlName", "section_id", 1, "form-control", "control-input"], [1, "px-3", "px-3", "d-flex", "gap-1"], [1, "row", "col-lg-10", "mx-auto"], [1, "p-2", "d-flex", "align-items-center"], [1, "avatar-sm", "me-3"], [1, "avatar-title", "small", "bg-soft-success", "border-success", "border", "border-2", "rounded-circle", "fw-bold", "text-success"], [1, "m-0"], [1, "avatar-title", "small", "bg-soft-primary", "border-primary", "border", "border-2", "rounded-circle", "fw-bold", "text-primary"], [1, "col-lg-6", "border", "rounded", "p-3"], [1, "d-flex", "justify-content-between"], [3, "series", "chart", "markers", "dataLabels", "stroke", "colors", "title", "xaxis", "yaxis", 4, "ngIf"], [1, "d-flex", "justify-content-between", "gap-2", "py-3"], ["ngbDropdown", "", "placement", "left", 1, "dropdown"], ["ngbDropdownMenu", "", 1, "border", "shadow-sm", 2, "min-width", "400px", "overflow", "hidden", "z-index", "99999"], ["class", "d-flex flex-column align-items-center justify-content-center gap-2 p-5", 4, "ngIf"], ["currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "ngClass", "first", "totalRecords", "rowsPerPageOptions", "rows", "pageLinkSize", "showCurrentPageReport", "onPageChange"], ["title", "", 3, "breadcrumbItems"], [1, "text-secondary"], [3, "value"], [1, "fs-14", "fw-bold"], [3, "series", "chart", "markers", "dataLabels", "stroke", "colors", "title", "xaxis", "yaxis"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "gap-2", "p-5"], ["dataKpy", "id", "responsiveLayout", "scroll", 3, "value"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], [1, "small"], ["pFrozenColumn", "", "pSortableColumn", "name", 1, "small", 2, "min-width", "300px"], ["field", "name"], ["type", "text", "field", "name", "display", "menu"], ["pFrozenColumn", "", 2, "min-width", "200px"], [2, "min-width", "100px"], [1, "smaller"], ["pFrozenColumn", "", 2, "min-width", "300px"], [1, "d-flex", "flex-column"], [1, "text-black"], [2, "font-size", "11px"], [1, "d-flex", "align-items-center", "justify-content-start", "flex-wrap", "gap-1", "py-2"], ["class", "rounded border smaller tag", "style", "padding: 1px 4px", 4, "ngIf"], ["triggers", "mouseenter:mouseleave", "class", "rounded border smaller tag", "style", "padding: 1px 4px", 3, "ngbPopover", "popoverTitle", 4, "ngFor", "ngForOf"], ["triggers", "mouseenter:mouseleave", "popoverTitle", "Start to Finish", 1, "badge", "badge-soft-primary", "fs-12", 2, "cursor", "pointer", 3, "ngbPopover"], ["timerPopOver", ""], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-soft-primary", "btn-sm", "dropdown", "arrow-none"], [1, "ri-more-fill"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item", 3, "click"], [1, "rounded", "border", "smaller", "tag", 2, "padding", "1px 4px"], [1, "text-uppercase", "text-black", 2, "font-size", "10px"], [1, "mt-1", "d-flex", "align-items-center", "justify-content-center"], [1, "badge", "rounded-pill", 2, "text-transform", "capitalize", 3, "ngClass"], [1, "text-center"], ["triggers", "mouseenter:mouseleave", 1, "rounded", "border", "smaller", "tag", 2, "padding", "1px 4px", 3, "ngbPopover", "popoverTitle"], [1, "text-black", 2, "font-size", "10px"], [1, "text-center", 2, "font-size", "10px"], ["SectionPopOver", ""], [1, "p-1", "smaller"], [1, "d-flex", "justify-between", "gap-2"], [1, "d-flex", "justify-between", "gap-2", "mt-1"], [1, "badge", "badge-soft-success", "fs-10"], [1, "badge", "badge-soft-danger", "fs-10"]],
  template: function GradingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, GradingComponent_div_0_Template, 7, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GradingComponent_ng_container_1_Template, 343, 48, "ng-container", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loadingDashboardResources);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loadingDashboardResources);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__.ChartComponent, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_15__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_14__.FrozenColumn, primeng_table__WEBPACK_IMPORTED_MODULE_14__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_14__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_14__.ColumnFilter, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPopover, primeng_paginator__WEBPACK_IMPORTED_MODULE_16__.Paginator],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe],
  styles: [".smaller[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoiZ3JhZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbWFsbGVyIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 51455:
/*!****************************************************************************!*\
  !*** ./src/app/pages/results/transcript-view/transcript-view.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranscriptViewComponent": () => (/* binding */ TranscriptViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _assessment_service_assessments_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assessment/service/assessments.service */ 9472);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ 68581);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 81122);







function TranscriptViewComponent_ng_template_19_ng_template_10_ng_container_0_div_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TranscriptViewComponent_ng_template_19_ng_template_10_ng_container_0_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TranscriptViewComponent_ng_template_19_ng_template_10_ng_container_0_div_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TranscriptViewComponent_ng_template_19_ng_template_10_ng_container_0_div_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TranscriptViewComponent_ng_template_19_ng_template_10_ng_container_0_div_7_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "background-color": a0, height: a1 }; };
function TranscriptViewComponent_ng_template_19_ng_template_10_ng_container_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TranscriptViewComponent_ng_template_19_ng_template_10_ng_container_0_div_7_span_1_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TranscriptViewComponent_ng_template_19_ng_template_10_ng_container_0_div_7_span_2_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TranscriptViewComponent_ng_template_19_ng_template_10_ng_container_0_div_7_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TranscriptViewComponent_ng_template_19_ng_template_10_ng_container_0_div_7_span_4_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TranscriptViewComponent_ng_template_19_ng_template_10_ng_container_0_div_7_span_5_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r10 = ctx.index;
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](6, _c0, ctx_r8.subjectData.questionsAnalysis[i_r7].correctAnswerIndex === j_r10 ? "green" : "red", j_r10 * 12 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", j_r10 === 0 && ctx_r8.subjectData.questionsAnalysis[i_r7].correctAnswerIndex === j_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", j_r10 === 1 && ctx_r8.subjectData.questionsAnalysis[i_r7].correctAnswerIndex === j_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", j_r10 === 2 && ctx_r8.subjectData.questionsAnalysis[i_r7].correctAnswerIndex === j_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", j_r10 === 3 && ctx_r8.subjectData.questionsAnalysis[i_r7].correctAnswerIndex === j_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", j_r10 === 4 && ctx_r8.subjectData.questionsAnalysis[i_r7].correctAnswerIndex === j_r10);
} }
const _c1 = function () { return []; };
function TranscriptViewComponent_ng_template_19_ng_template_10_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TranscriptViewComponent_ng_template_19_ng_template_10_ng_container_0_Template_th_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r17.showDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TranscriptViewComponent_ng_template_19_ng_template_10_ng_container_0_div_7_Template, 6, 9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const question_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Q", question_r6.questionNo, " - ", question_r6.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1).constructor(question_r6.optionsCount));
} }
function TranscriptViewComponent_ng_template_19_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TranscriptViewComponent_ng_template_19_ng_template_10_ng_container_0_Template, 8, 4, "ng-container", 22);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.subjectData.questionsAnalysis);
} }
function TranscriptViewComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Fullname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "p-sortIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "p-columnFilter", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Mark(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "p-sortIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TranscriptViewComponent_ng_template_19_ng_template_10_Template, 1, 1, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.questionView);
} }
function TranscriptViewComponent_ng_template_20_ng_template_9_ng_container_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TranscriptViewComponent_ng_template_20_ng_template_9_ng_container_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TranscriptViewComponent_ng_template_20_ng_template_9_ng_container_0_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TranscriptViewComponent_ng_template_20_ng_template_9_ng_container_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TranscriptViewComponent_ng_template_20_ng_template_9_ng_container_0_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TranscriptViewComponent_ng_template_20_ng_template_9_ng_container_0_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 32);
} }
const _c2 = function (a0, a1, a2) { return { "bg-success": a0, "bg-danger": a1, "bg-primary": a2 }; };
function TranscriptViewComponent_ng_template_20_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TranscriptViewComponent_ng_template_20_ng_template_9_ng_container_0_span_4_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TranscriptViewComponent_ng_template_20_ng_template_9_ng_container_0_span_5_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TranscriptViewComponent_ng_template_20_ng_template_9_ng_container_0_span_6_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TranscriptViewComponent_ng_template_20_ng_template_9_ng_container_0_span_7_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TranscriptViewComponent_ng_template_20_ng_template_9_ng_container_0_span_8_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TranscriptViewComponent_ng_template_20_ng_template_9_ng_container_0_i_10_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const question_r22 = ctx.$implicit;
    const j_r23 = ctx.index;
    const participant_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](7, _c2, question_r22.scoringOptions.answers[0] === participant_r19.responses[j_r23], question_r22.scoringOptions.answers[0] !== participant_r19.responses[j_r23], participant_r19.responses[j_r23].length === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", participant_r19.responses[j_r23] === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", participant_r19.responses[j_r23] === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", participant_r19.responses[j_r23] === "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", participant_r19.responses[j_r23] === "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", participant_r19.responses[j_r23] === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", question_r22.scoringOptions.answers[0] === participant_r19.responses[j_r23]);
} }
function TranscriptViewComponent_ng_template_20_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TranscriptViewComponent_ng_template_20_ng_template_9_ng_container_0_Template, 11, 11, "ng-container", 22);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r20.questions);
} }
function TranscriptViewComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TranscriptViewComponent_ng_template_20_ng_template_9_Template, 1, 1, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const participant_r19 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, participant_r19.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, participant_r19.subject), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", participant_r19.markScored, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.questionView);
} }
function TranscriptViewComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TranscriptViewComponent_ng_template_21_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r31.hideDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " All questions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Question (MCQ):");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Score 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TranscriptViewComponent_ng_template_21_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r33.hideDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Prev ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TranscriptViewComponent_ng_template_21_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r34.hideDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c3 = function (a0) { return { row: a0 }; };
const _c4 = function (a0, a1) { return { "col-lg-6": a0, "col-lg-12": a1 }; };
const _c5 = function () { return [20, 30, 50]; };
class TranscriptViewComponent {
    constructor(assessmentService) {
        this.assessmentService = assessmentService;
        this.questions = [];
        this.totalQuestions = 5;
        this.questionView = false;
    }
    ngOnInit() {
        this.assessmentName = this.assessmentService.activeAssessment;
        this.breadCrumbItems = [
            { label: 'results', active: false },
            { label: 'transcript', active: true },
        ];
        this.subjectData = {
            subjectName: 'Use of English',
            subjectCode: 'UOE',
            totalQuestions: 5,
            questionsAnalysis: [
                {
                    questionNo: 1,
                    totalCorrect: 3,
                    totalWrong: 2,
                    optionsCount: 2,
                    type: 'MCQ',
                    correctAnswerIndex: 0,
                },
                {
                    questionNo: 2,
                    totalCorrect: 1,
                    totalWrong: 4,
                    optionsCount: 2,
                    type: 'MCQ',
                    correctAnswerIndex: 1,
                },
                {
                    questionNo: 3,
                    totalCorrect: 5,
                    totalWrong: 0,
                    optionsCount: 2,
                    type: 'MCQ',
                    correctAnswerIndex: 1,
                },
                {
                    questionNo: 4,
                    totalCorrect: 4,
                    totalWrong: 1,
                    optionsCount: 2,
                    type: 'MCQ',
                    correctAnswerIndex: 0,
                },
                {
                    questionNo: 5,
                    totalCorrect: 3,
                    totalWrong: 2,
                    optionsCount: 2,
                    type: 'MCQ',
                    correctAnswerIndex: 1,
                },
            ],
            participants: [
                {
                    name: 'Okoisor Ochael',
                    markScored: 3,
                    responses: ['0', '1', '1', '1', '0'],
                    subject: 'English',
                    questions: [
                        {
                            id: 1,
                            itemType: 'MCQ',
                            stimulus: 'Who is the president of Nigeria?',
                            score: 1,
                            options: [
                                { label: '<p>Atiku Abubakar</p>', value: '0' },
                                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                            ],
                            scoringOptions: {
                                answers: ['1'],
                            },
                        },
                        {
                            id: 2,
                            itemType: 'MCQ',
                            stimulus: 'Who is the president of Nigeria?',
                            score: 1,
                            options: [
                                { label: '<p>Atiku Abubakar</p>', value: '0' },
                                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                            ],
                            scoringOptions: {
                                answers: ['1'],
                            },
                        },
                        {
                            id: 3,
                            itemType: 'MCQ',
                            stimulus: 'Who is the president of Nigeria?',
                            score: 1,
                            options: [
                                { label: '<p>Atiku Abubakar</p>', value: '0' },
                                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                            ],
                            scoringOptions: {
                                answers: ['1'],
                            },
                        },
                        {
                            id: 4,
                            itemType: 'MCQ',
                            stimulus: 'Who is the president of Nigeria?',
                            score: 1,
                            options: [
                                { label: '<p>Atiku Abubakar</p>', value: '0' },
                                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                            ],
                            scoringOptions: {
                                answers: ['1'],
                            },
                        },
                        {
                            id: 5,
                            itemType: 'MCQ',
                            stimulus: 'Who is the president of Nigeria?',
                            score: 1,
                            options: [
                                { label: '<p>Atiku Abubakar</p>', value: '0' },
                                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                            ],
                            scoringOptions: {
                                answers: ['1'],
                            },
                        },
                    ],
                },
                {
                    name: 'Edet Noah',
                    markScored: 3,
                    responses: ['1', '0', '0', '1', '1'],
                    subject: 'English',
                    questions: [
                        {
                            id: 1,
                            itemType: 'MCQ',
                            stimulus: 'Who is the president of Nigeria?',
                            score: 1,
                            options: [
                                { label: '<p>Atiku Abubakar</p>', value: '0' },
                                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                            ],
                            scoringOptions: {
                                answers: ['1'],
                            },
                        },
                        {
                            id: 2,
                            itemType: 'MCQ',
                            stimulus: 'Who is the president of Nigeria?',
                            score: 1,
                            options: [
                                { label: '<p>Atiku Abubakar</p>', value: '0' },
                                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                            ],
                            scoringOptions: {
                                answers: ['1'],
                            },
                        },
                        {
                            id: 3,
                            itemType: 'MCQ',
                            stimulus: 'Who is the president of Nigeria?',
                            score: 1,
                            options: [
                                { label: '<p>Atiku Abubakar</p>', value: '0' },
                                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                            ],
                            scoringOptions: {
                                answers: ['1'],
                            },
                        },
                        {
                            id: 4,
                            itemType: 'MCQ',
                            stimulus: 'Who is the president of Nigeria?',
                            score: 1,
                            options: [
                                { label: '<p>Atiku Abubakar</p>', value: '0' },
                                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                            ],
                            scoringOptions: {
                                answers: ['1'],
                            },
                        },
                        {
                            id: 5,
                            itemType: 'MCQ',
                            stimulus: 'Who is the president of Nigeria?',
                            score: 1,
                            options: [
                                { label: '<p>Atiku Abubakar</p>', value: '0' },
                                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                            ],
                            scoringOptions: {
                                answers: ['1'],
                            },
                        },
                    ],
                },
                {
                    name: 'Oluwole Ayobami',
                    markScored: 2,
                    responses: ['0', '0', '1', '1', ''],
                    subject: 'English',
                    questions: [
                        {
                            id: 1,
                            itemType: 'MCQ',
                            stimulus: 'Who is the president of Nigeria?',
                            score: 1,
                            options: [
                                { label: '<p>Atiku Abubakar</p>', value: '0' },
                                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                            ],
                            scoringOptions: {
                                answers: ['1'],
                            },
                        },
                        {
                            id: 2,
                            itemType: 'MCQ',
                            stimulus: 'Who is the president of Nigeria?',
                            score: 1,
                            options: [
                                { label: '<p>Atiku Abubakar</p>', value: '0' },
                                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                            ],
                            scoringOptions: {
                                answers: ['1'],
                            },
                        },
                        {
                            id: 3,
                            itemType: 'MCQ',
                            stimulus: 'Who is the president of Nigeria?',
                            score: 1,
                            options: [
                                { label: '<p>Atiku Abubakar</p>', value: '0' },
                                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                            ],
                            scoringOptions: {
                                answers: ['1'],
                            },
                        },
                        {
                            id: 4,
                            itemType: 'MCQ',
                            stimulus: 'Who is the president of Nigeria?',
                            score: 1,
                            options: [
                                { label: '<p>Atiku Abubakar</p>', value: '0' },
                                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                            ],
                            scoringOptions: {
                                answers: ['1'],
                            },
                        },
                        {
                            id: 5,
                            itemType: 'MCQ',
                            stimulus: 'Who is the president of Nigeria?',
                            score: 1,
                            options: [
                                { label: '<p>Atiku Abubakar</p>', value: '0' },
                                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                            ],
                            scoringOptions: {
                                answers: ['1'],
                            },
                        },
                    ],
                },
            ],
        };
        this.participants = [
            {
                name: 'Okoisor Ochael',
                markScored: 3,
                responses: ['0', '1', '1', '1', '0'],
                subject: 'English',
                questions: [
                    {
                        id: 1,
                        itemType: 'MCQ',
                        stimulus: 'Who is the president of Nigeria?',
                        score: 1,
                        options: [
                            { label: '<p>Atiku Abubakar</p>', value: '0' },
                            { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                        ],
                        scoringOptions: {
                            answers: ['1'],
                        },
                    },
                    {
                        id: 2,
                        itemType: 'MCQ',
                        stimulus: 'Who is the president of Nigeria?',
                        score: 1,
                        options: [
                            { label: '<p>Atiku Abubakar</p>', value: '0' },
                            { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                        ],
                        scoringOptions: {
                            answers: ['1'],
                        },
                    },
                    {
                        id: 3,
                        itemType: 'MCQ',
                        stimulus: 'Who is the president of Nigeria?',
                        score: 1,
                        options: [
                            { label: '<p>Atiku Abubakar</p>', value: '0' },
                            { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                        ],
                        scoringOptions: {
                            answers: ['1'],
                        },
                    },
                    {
                        id: 4,
                        itemType: 'MCQ',
                        stimulus: 'Who is the president of Nigeria?',
                        score: 1,
                        options: [
                            { label: '<p>Atiku Abubakar</p>', value: '0' },
                            { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                        ],
                        scoringOptions: {
                            answers: ['1'],
                        },
                    },
                    {
                        id: 5,
                        itemType: 'MCQ',
                        stimulus: 'Who is the president of Nigeria?',
                        score: 1,
                        options: [
                            { label: '<p>Atiku Abubakar</p>', value: '0' },
                            { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                        ],
                        scoringOptions: {
                            answers: ['1'],
                        },
                    },
                ],
            },
            {
                name: 'Edet Noah',
                markScored: 3,
                responses: ['1', '0', '0', '1', '1'],
                subject: 'English',
                questions: [
                    {
                        id: 1,
                        itemType: 'MCQ',
                        stimulus: 'Who is the president of Nigeria?',
                        score: 1,
                        options: [
                            { label: '<p>Atiku Abubakar</p>', value: '0' },
                            { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                        ],
                        scoringOptions: {
                            answers: ['1'],
                        },
                    },
                    {
                        id: 2,
                        itemType: 'MCQ',
                        stimulus: 'Who is the president of Nigeria?',
                        score: 1,
                        options: [
                            { label: '<p>Atiku Abubakar</p>', value: '0' },
                            { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                        ],
                        scoringOptions: {
                            answers: ['1'],
                        },
                    },
                    {
                        id: 3,
                        itemType: 'MCQ',
                        stimulus: 'Who is the president of Nigeria?',
                        score: 1,
                        options: [
                            { label: '<p>Atiku Abubakar</p>', value: '0' },
                            { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                        ],
                        scoringOptions: {
                            answers: ['1'],
                        },
                    },
                    {
                        id: 4,
                        itemType: 'MCQ',
                        stimulus: 'Who is the president of Nigeria?',
                        score: 1,
                        options: [
                            { label: '<p>Atiku Abubakar</p>', value: '0' },
                            { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                        ],
                        scoringOptions: {
                            answers: ['1'],
                        },
                    },
                    {
                        id: 5,
                        itemType: 'MCQ',
                        stimulus: 'Who is the president of Nigeria?',
                        score: 1,
                        options: [
                            { label: '<p>Atiku Abubakar</p>', value: '0' },
                            { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                        ],
                        scoringOptions: {
                            answers: ['1'],
                        },
                    },
                ],
            },
            {
                name: 'Oluwole Ayobami',
                markScored: 2,
                responses: ['0', '0', '1', '1', ''],
                subject: 'English',
                questions: [
                    {
                        id: 1,
                        itemType: 'MCQ',
                        stimulus: 'Who is the president of Nigeria?',
                        score: 1,
                        options: [
                            { label: '<p>Atiku Abubakar</p>', value: '0' },
                            { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                        ],
                        scoringOptions: {
                            answers: ['1'],
                        },
                    },
                    {
                        id: 2,
                        itemType: 'MCQ',
                        stimulus: 'Who is the president of Nigeria?',
                        score: 1,
                        options: [
                            { label: '<p>Atiku Abubakar</p>', value: '0' },
                            { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                        ],
                        scoringOptions: {
                            answers: ['1'],
                        },
                    },
                    {
                        id: 3,
                        itemType: 'MCQ',
                        stimulus: 'Who is the president of Nigeria?',
                        score: 1,
                        options: [
                            { label: '<p>Atiku Abubakar</p>', value: '0' },
                            { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                        ],
                        scoringOptions: {
                            answers: ['1'],
                        },
                    },
                    {
                        id: 4,
                        itemType: 'MCQ',
                        stimulus: 'Who is the president of Nigeria?',
                        score: 1,
                        options: [
                            { label: '<p>Atiku Abubakar</p>', value: '0' },
                            { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                        ],
                        scoringOptions: {
                            answers: ['1'],
                        },
                    },
                    {
                        id: 5,
                        itemType: 'MCQ',
                        stimulus: 'Who is the president of Nigeria?',
                        score: 1,
                        options: [
                            { label: '<p>Atiku Abubakar</p>', value: '0' },
                            { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                        ],
                        scoringOptions: {
                            answers: ['1'],
                        },
                    },
                ],
            },
        ];
        this.questions = [
            {
                id: 1,
                itemType: 'MCQ',
                stimulus: 'Who is the president of Nigeria?',
                score: 1,
                options: [
                    { label: '<p>Atiku Abubakar</p>', value: '0' },
                    { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                ],
                scoringOptions: {
                    answers: ['1'],
                },
            },
            {
                id: 2,
                itemType: 'MCQ',
                stimulus: 'Who is the president of Nigeria?',
                score: 1,
                options: [
                    { label: '<p>Atiku Abubakar</p>', value: '0' },
                    { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                ],
                scoringOptions: {
                    answers: ['1'],
                },
            },
            {
                id: 3,
                itemType: 'MCQ',
                stimulus: 'Who is the president of Nigeria?',
                score: 1,
                options: [
                    { label: '<p>Atiku Abubakar</p>', value: '0' },
                    { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                ],
                scoringOptions: {
                    answers: ['1'],
                },
            },
            {
                id: 4,
                itemType: 'MCQ',
                stimulus: 'Who is the president of Nigeria?',
                score: 1,
                options: [
                    { label: '<p>Atiku Abubakar</p>', value: '0' },
                    { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                ],
                scoringOptions: {
                    answers: ['1'],
                },
            },
            {
                id: 5,
                itemType: 'MCQ',
                stimulus: 'Who is the president of Nigeria?',
                score: 1,
                options: [
                    { label: '<p>Atiku Abubakar</p>', value: '0' },
                    { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
                ],
                scoringOptions: {
                    answers: ['1'],
                },
            },
        ];
    }
    showDetails() {
        this.questionView = true;
    }
    hideDetails() {
        this.questionView = false;
    }
}
TranscriptViewComponent.ɵfac = function TranscriptViewComponent_Factory(t) { return new (t || TranscriptViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_assessment_service_assessments_service__WEBPACK_IMPORTED_MODULE_0__.AssessmentsService)); };
TranscriptViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TranscriptViewComponent, selectors: [["app-transcript-view"]], decls: 22, vars: 18, consts: [[3, "title", "breadcrumbItems"], [1, "card", "card-animate"], [1, "card-header"], [1, "d-flex", "justify-content-between"], [1, "modal-title"], [1, "form-select"], ["value", "", "selected", "", "disabled", ""], ["value", "English"], ["value", "Biology"], [1, "card-body", 3, "ngClass"], [3, "ngClass"], ["dataKey", "id", "responsiveLayout", "scroll", "styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rowHover", "rows", "scrollable", "showCurrentPageReport", "rowsPerPageOptions", "paginator"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], [3, "ngIf"], ["pFrozenColumn", "", "pSortableColumn", "name", 2, "min-width", "180px"], ["field", "name"], ["type", "text", "field", "name", "display", "menu"], ["pFrozenColumn", "", 2, "min-width", "120px"], ["pFrozenColumn", "", "pSortableColumn", "markScored", 2, "max-width", "120px"], ["field", "markScored"], [4, "ngFor", "ngForOf"], [2, "min-width", "100px", "cursor", "pointer", 3, "click"], [1, "d-flex", "gap-2", "align-items-end", "justify-content-center", "mt-5", "mb-2"], ["class", "bar", "class", "mb-2", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "mb-2", 3, "ngStyle"], [4, "ngIf"], ["pFrozenColumn", "", 2, "min-width", "180px"], ["pFrozenColumn", "", 2, "max-width", "120px"], [2, "min-width", "100px", "color", "#FFF", 3, "ngClass"], ["class", "ri-checkbox-cirle-fill text-success", 4, "ngIf"], [1, "ri-checkbox-cirle-fill", "text-success"], [1, "col-6", "border", "p-2"], [1, "d-flex"], [1, "btn", 2, "background-color", "#cccccc", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-4"], [1, "fs-18"], [1, "d-flex", "gap-2"], [1, "btn", "d-flex", "align-items-center", "gap-2", 2, "background-color", "#cccccc", 3, "click"], [1, "ri-arrow-left-s-line"], [1, "ri-arrow-right-s-line"]], template: function TranscriptViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Transcript");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Filter By Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Biology");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p-table", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, TranscriptViewComponent_ng_template_19_Template, 11, 1, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, TranscriptViewComponent_ng_template_20_Template, 10, 8, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, TranscriptViewComponent_ng_template_21_Template, 17, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("title", "", ctx.assessmentName, " | RESULT | TRANSCRIPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c3, ctx.questionView));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](14, _c4, ctx.questionView, !ctx.questionView));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.subjectData.participants)("rowHover", true)("rows", 20)("scrollable", true)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c5))("paginator", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.questionView);
    } }, directives: [_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, primeng_table__WEBPACK_IMPORTED_MODULE_5__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_5__.FrozenColumn, primeng_table__WEBPACK_IMPORTED_MODULE_5__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_5__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_5__.ColumnFilter, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe], styles: [".bar[_ngcontent-%COMP%] {\n  max-height: 30px;\n  width: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zY3JpcHQtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6InRyYW5zY3JpcHQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXIge1xyXG4gIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_results_candidate-result_candidate-result_component_ts-src_app_pages_re-5f6b7b.js.map