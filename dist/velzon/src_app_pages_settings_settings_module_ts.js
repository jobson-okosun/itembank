"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([["src_app_pages_settings_settings_module_ts"],{

/***/ 34351:
/*!*************************************************!*\
  !*** ./src/app/core/constants/file.constant.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VALID_IMAGE_TYPES": () => (/* binding */ VALID_IMAGE_TYPES),
/* harmony export */   "IMAGE_MAX_SIZE_KB": () => (/* binding */ IMAGE_MAX_SIZE_KB),
/* harmony export */   "LOGO_DIMENSION": () => (/* binding */ LOGO_DIMENSION),
/* harmony export */   "ICON_DIMENSION": () => (/* binding */ ICON_DIMENSION),
/* harmony export */   "FAVICON_DIMENSION": () => (/* binding */ FAVICON_DIMENSION)
/* harmony export */ });
const VALID_IMAGE_TYPES = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/svg+xml',
];
const IMAGE_MAX_SIZE_KB = 100 * 1024; // 100kb
const LOGO_DIMENSION = {
    innerWidth: 250,
    innerHeight: 100,
};
const ICON_DIMENSION = {
    innerWidth: 64,
    innerHeight: 64,
};
const FAVICON_DIMENSION = {
    innerWidth: 32,
    innerHeight: 32,
};


/***/ }),

/***/ 52141:
/*!********************************************!*\
  !*** ./src/app/core/helpers/validation.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateDimensionAndPreview": () => (/* binding */ validateDimensionAndPreview),
/* harmony export */   "matchPasswordValidator": () => (/* binding */ matchPasswordValidator)
/* harmony export */ });
/* harmony import */ var src_app_pages_settings_branding_branding_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/settings/branding/branding.component */ 16730);
/* harmony import */ var _constants_file_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/file.constant */ 34351);


const validateDimensionAndPreview = (file) => {
    const brand = new src_app_pages_settings_branding_branding_component__WEBPACK_IMPORTED_MODULE_0__.BrandingComponent();
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
            const width = img.naturalWidth;
            const height = img.naturalHeight;
            if (width > _constants_file_constant__WEBPACK_IMPORTED_MODULE_1__.LOGO_DIMENSION.innerWidth ||
                height > _constants_file_constant__WEBPACK_IMPORTED_MODULE_1__.LOGO_DIMENSION.innerHeight) {
                brand.selectedLogoFileErrorMessage = `Image dimension exceed ${_constants_file_constant__WEBPACK_IMPORTED_MODULE_1__.LOGO_DIMENSION.innerWidth} X ${_constants_file_constant__WEBPACK_IMPORTED_MODULE_1__.LOGO_DIMENSION.innerHeight}. Current dimension is ${width} X ${height}.`;
                brand.logoFileInput.nativeElement.value = '';
                brand.selectedLogoFile = null;
                brand.selectedLogoFilePreview = null;
                return;
            }
            else {
                brand.selectedLogoFilePreview = reader.result;
            }
            img.onerror = () => {
                brand.selectedLogoFileErrorMessage = 'Could not read image dimensions.';
                brand.logoFileInput.nativeElement.value = '';
                brand.selectedLogoFile = null;
                brand.selectedLogoFilePreview = null;
                return;
            };
        };
        reader.onerror = () => {
            brand.selectedLogoFileErrorMessage = 'Could not read the file.';
            brand.logoFileInput.nativeElement.value = '';
            brand.selectedLogoFile = null;
            brand.selectedLogoFilePreview = null;
            return;
        };
    };
};
const matchPasswordValidator = (controls) => {
    var _a, _b;
    const password = (_a = controls.get('newPassword')) === null || _a === void 0 ? void 0 : _a.value;
    const confirmPassword = (_b = controls.get('confirmPassword')) === null || _b === void 0 ? void 0 : _b.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
};


/***/ }),

/***/ 16730:
/*!***************************************************************!*\
  !*** ./src/app/pages/settings/branding/branding.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandingComponent": () => (/* binding */ BrandingComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/file.constant */ 34351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




const _c0 = ["logoFile"];
const _c1 = ["iconFile"];
const _c2 = ["faviconFile"];
function BrandingComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " 250 x 100");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BrandingComponent_img_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 35);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.selectedLogoFilePreview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function BrandingComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " 64 x 64");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BrandingComponent_img_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 39);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r5.selectedIconFilePreview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function BrandingComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BrandingComponent_img_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 42);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r8.selectedFaviconFilePreview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class BrandingComponent {
    constructor() {
        this.selectedLogoFile = null;
        this.selectedIconFile = null;
        this.selectedFaviconFile = null;
        this.selectedLogoFilePreview = null;
        this.selectedIconFilePreview = null;
        this.selectedFaviconFilePreview = null;
        this.selectedLogoFileErrorMessage = null;
        this.selectedIconFileErrorMessage = null;
        this.selectedFaviconFileErrorMessage = null;
    }
    ngOnInit() { }
    onLogoSelected(event) {
        const input = event.target;
        this.selectedLogoFileErrorMessage = null;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            this.selectedLogoFile = file;
            // Validate file type
            if (!src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.VALID_IMAGE_TYPES.includes(file.type)) {
                this.selectedLogoFileErrorMessage = `Please choose a JPEG, PNG, GIF, or SVG file.`;
                this.logoFileInput.nativeElement.value = '';
                this.selectedLogoFilePreview = null;
                this.selectedLogoFile = null;
                console.log('Selected logo file:', file);
                return;
            }
            // Validate file size (max 100kb)
            if (file.size > src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.IMAGE_MAX_SIZE_KB) {
                this.selectedLogoFileErrorMessage = `File size exceeds 100KB limit.`;
                this.logoFileInput.nativeElement.value = '';
                this.selectedLogoFilePreview = null;
                this.selectedLogoFile = null;
                console.log('Selected logo file:', file);
                return;
            }
            // Validate image dimension and preview
            this.validateLogoDimensionAndPreview(file);
        }
    }
    validateLogoDimensionAndPreview(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
                const width = img.naturalWidth;
                const height = img.naturalHeight;
                if (width > src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.LOGO_DIMENSION.innerWidth ||
                    height > src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.LOGO_DIMENSION.innerHeight) {
                    this.selectedLogoFileErrorMessage = `Image dimension exceed ${src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.LOGO_DIMENSION.innerWidth} X ${src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.LOGO_DIMENSION.innerHeight}. Current dimension is ${width} X ${height}.`;
                    this.logoFileInput.nativeElement.value = '';
                    this.selectedLogoFile = null;
                    this.selectedLogoFilePreview = null;
                    return;
                }
                else {
                    this.selectedLogoFilePreview = reader.result;
                }
                img.onerror = () => {
                    this.selectedLogoFileErrorMessage =
                        'Could not read image dimensions.';
                    this.logoFileInput.nativeElement.value = '';
                    this.selectedLogoFile = null;
                    this.selectedLogoFilePreview = null;
                    return;
                };
            };
            reader.onerror = () => {
                this.selectedLogoFileErrorMessage = 'Could not read the file.';
                this.logoFileInput.nativeElement.value = '';
                this.selectedLogoFile = null;
                this.selectedLogoFilePreview = null;
                return;
            };
        };
    }
    onIconSelected(event) {
        const input = event.target;
        this.selectedIconFileErrorMessage = null;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            this.selectedIconFile = file;
            // Validate file type
            if (!src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.VALID_IMAGE_TYPES.includes(file.type)) {
                this.selectedIconFileErrorMessage = `Please choose a JPEG, PNG, GIF, or SVG file.`;
                this.iconFileInput.nativeElement.value = '';
                this.selectedIconFilePreview = null;
                this.selectedIconFile = null;
                console.log('Selected icon file:', file);
                return;
            }
            // Validate file size (max 100kb)
            if (file.size > src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.IMAGE_MAX_SIZE_KB) {
                this.selectedIconFileErrorMessage = `File size exceeds 100KB limit.`;
                this.iconFileInput.nativeElement.value = '';
                this.selectedIconFilePreview = null;
                this.selectedIconFile = null;
                console.log('Selected icon file:', file);
                return;
            }
            // Validate image dimension and preview
            this.validateIconDimensionAndPreview(file);
        }
    }
    validateIconDimensionAndPreview(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
                const width = img.naturalWidth;
                const height = img.naturalHeight;
                if (width > src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.ICON_DIMENSION.innerWidth ||
                    height > src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.ICON_DIMENSION.innerHeight) {
                    this.selectedIconFileErrorMessage = `Image dimension exceed ${src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.ICON_DIMENSION.innerWidth} X ${src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.ICON_DIMENSION.innerHeight}. Current dimension is ${width} X ${height}.`;
                    this.iconFileInput.nativeElement.value = '';
                    this.selectedIconFile = null;
                    this.selectedIconFilePreview = null;
                    return;
                }
                else {
                    this.selectedIconFilePreview = reader.result;
                }
                img.onerror = () => {
                    this.selectedIconFileErrorMessage =
                        'Could not read image dimensions.';
                    this.iconFileInput.nativeElement.value = '';
                    this.selectedIconFile = null;
                    this.selectedIconFilePreview = null;
                    return;
                };
            };
            reader.onerror = () => {
                this.selectedIconFileErrorMessage = 'Could not read the file.';
                this.iconFileInput.nativeElement.value = '';
                this.selectedIconFile = null;
                this.selectedIconFilePreview = null;
                return;
            };
        };
    }
    onFavIconSelected(event) {
        const input = event.target;
        this.selectedFaviconFileErrorMessage = null;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            this.selectedFaviconFile = file;
            // Validate file type
            if (!src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.VALID_IMAGE_TYPES.includes(file.type)) {
                this.selectedFaviconFileErrorMessage = `Please choose a JPEG, PNG, GIF, or SVG file.`;
                this.faviconFileInput.nativeElement.value = '';
                this.selectedFaviconFilePreview = null;
                this.selectedFaviconFile = null;
                console.log('Selected favicon file:', file);
                return;
            }
            // Validate file size (max 100kb)
            if (file.size > src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.IMAGE_MAX_SIZE_KB) {
                this.selectedFaviconFileErrorMessage = `File size exceeds 100KB limit.`;
                this.faviconFileInput.nativeElement.value = '';
                this.selectedFaviconFilePreview = null;
                this.selectedFaviconFile = null;
                console.log('Selected favicon file:', file);
                return;
            }
            // Validate image dimension and preview
            this.validateFaviconDimensionAndPreview(file);
        }
    }
    validateFaviconDimensionAndPreview(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
                const width = img.naturalWidth;
                const height = img.naturalHeight;
                if (width > src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.FAVICON_DIMENSION.innerWidth ||
                    height > src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.FAVICON_DIMENSION.innerHeight) {
                    this.selectedFaviconFileErrorMessage = `Image dimension exceed ${src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.FAVICON_DIMENSION.innerWidth} X ${src_app_core_constants_file_constant__WEBPACK_IMPORTED_MODULE_0__.FAVICON_DIMENSION.innerHeight}. Current dimension is ${width} X ${height}.`;
                    this.faviconFileInput.nativeElement.value = '';
                    this.selectedFaviconFile = null;
                    this.selectedFaviconFilePreview = null;
                    return;
                }
                else {
                    this.selectedFaviconFilePreview = reader.result;
                }
                img.onerror = () => {
                    this.selectedFaviconFileErrorMessage =
                        'Could not read image dimensions.';
                    this.faviconFileInput.nativeElement.value = '';
                    this.selectedFaviconFile = null;
                    this.selectedFaviconFilePreview = null;
                    return;
                };
            };
            reader.onerror = () => {
                this.selectedFaviconFileErrorMessage = 'Could not read the file.';
                this.faviconFileInput.nativeElement.value = '';
                this.selectedFaviconFile = null;
                this.selectedFaviconFilePreview = null;
                return;
            };
        };
    }
    sendLogoFile() {
        console.log(this.selectedLogoFile);
    }
    sendIconFile() {
        console.log(this.selectedIconFile);
    }
    sendFavIconFile() {
        console.log(this.selectedFaviconFile);
    }
}
BrandingComponent.ɵfac = function BrandingComponent_Factory(t) { return new (t || BrandingComponent)(); };
BrandingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BrandingComponent, selectors: [["app-branding"]], viewQuery: function BrandingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.logoFileInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.iconFileInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.faviconFileInput = _t.first);
    } }, decls: 74, vars: 12, consts: [[1, "mb-3"], [1, "form-label"], ["ngbPopover", "upload the company logo. Images will be resized to 250 x 100, if the provided logo is above.", "placement", "right", "triggers", "mouseenter:mouseleave", 1, ""], [1, "ri-question-fill", "align-middle", "me-2", "mx-2"], [2, "font-size", "x-small", "color", "rgb(225, 111, 111)"], [1, "d-flex", "align-items-center-end", "gap-2"], ["type", "file", "name", "file", "accept", "image/*", "hidden", "", 3, "change"], ["logoFile", ""], ["class", "bg-soft-secondary d-flex flex-column justify-content-center align-items-center", "style", "width: 250px; height: 100px", 4, "ngIf"], ["alt", "logo preview", "style", "max-width: 250px; max-height: 100px;", 3, "src", 4, "ngIf"], [1, "d-flex", "align-items-end", "gap-2"], [1, "btn", "btn-icon", "btn-sm", "btn-primary", 3, "click"], [1, "ri-camera-line"], [1, "btn", "btn-icon", "btn-sm", "btn-primary", 3, "disabled", "click"], [1, "pi", "pi-upload"], [2, "font-size", "small", "color", "rgb(225, 111, 111)"], ["ngbPopover", "upload the company icon. The recommended size for the icon is 64 x 64.", "placement", "right", "triggers", "mouseenter:mouseleave", 1, ""], ["iconFile", ""], ["class", "bg-soft-secondary d-flex flex-column justify-content-center align-items-center", "style", "width: 64px; height: 64px", 4, "ngIf"], ["alt", "icon preview", "style", "max-width: 64px; max-height: 64px;", 3, "src", 4, "ngIf"], [1, "btn", "btn-sm", "btn-icon", "btn-primary", 3, "click"], ["ngbPopover", "upload the company favicon. The recommended size for the favicon is 32 x 32.", "placement", "right", "triggers", "mouseenter:mouseleave", 1, ""], ["faviconFile", ""], ["class", "bg-soft-secondary d-flex flex-column justify-content-center align-items-center", "style", "width: 32px; height: 32px", 4, "ngIf"], ["alt", "favicon preview", "style", "max-width: 32px; max-height: 32px;", 3, "src", 4, "ngIf"], [1, "row", "mb-3"], ["ngbPopover", "Pick the primary color of the company. This will be used in the customization of the application's look and feel.", "placement", "right", "triggers", "mouseenter:mouseleave", 1, ""], ["type", "color", "id", "colorPicker", "value", "#6404DD", 1, "form-control", "form-control-color", "w-100"], [1, "btn", "btn-primary"], [1, "row", "mb-3", "mt-3"], ["ngbPopover", "Pick the secondary color of the company. This will be used in the customization of the application's look and feel.", "placement", "right", "triggers", "mouseenter:mouseleave", 1, ""], ["type", "color", "id", "colorPicker", "value", "#008000", 1, "form-control", "form-control-color", "w-100"], [1, "bg-soft-secondary", "d-flex", "flex-column", "justify-content-center", "align-items-center", 2, "width", "250px", "height", "100px"], [1, "text-muted", "fs-18", "fw-bold"], [1, "ri-image-fill", "text-muted", "me-2", "align-middle", "fs-1"], ["alt", "logo preview", 2, "max-width", "250px", "max-height", "100px", 3, "src"], [1, "bg-soft-secondary", "d-flex", "flex-column", "justify-content-center", "align-items-center", 2, "width", "64px", "height", "64px"], [1, "text-muted", "fs-12", "fw-bold"], [1, "ri-landscape-fill", "text-muted", "me-2", "align-middle", "fs-4"], ["alt", "icon preview", 2, "max-width", "64px", "max-height", "64px", 3, "src"], [1, "bg-soft-secondary", "d-flex", "flex-column", "justify-content-center", "align-items-center", 2, "width", "32px", "height", "32px"], [1, "ri-landscape-fill", "text-muted", "me-2", "align-middle", "fs-6"], ["alt", "favicon preview", 2, "max-width", "32px", "max-height", "32px", 3, "src"]], template: function BrandingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Maximum size 100kb");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BrandingComponent_Template_input_change_9_listener($event) { return ctx.onLogoSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BrandingComponent_div_11_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BrandingComponent_img_12_Template, 1, 1, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BrandingComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BrandingComponent_Template_button_click_16_listener() { return ctx.sendLogoFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Square Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Maximum size 100kb");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 6, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BrandingComponent_Template_input_change_28_listener($event) { return ctx.onIconSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, BrandingComponent_div_30_Template, 4, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, BrandingComponent_img_31_Template, 1, 1, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BrandingComponent_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29); return _r3.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BrandingComponent_Template_button_click_35_listener() { return ctx.sendIconFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Favicon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Maximum size 100kb (32 X 32)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 6, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BrandingComponent_Template_input_change_47_listener($event) { return ctx.onFavIconSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, BrandingComponent_div_49_Template, 2, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, BrandingComponent_img_50_Template, 1, 1, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BrandingComponent_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](48); return _r6.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BrandingComponent_Template_button_click_54_listener() { return ctx.sendFavIconFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " EXAMALPHA Primary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Update Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " EXAMALPHA Secondary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Update Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.selectedLogoFilePreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedLogoFilePreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.selectedLogoFilePreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedLogoFileErrorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.selectedIconFilePreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedIconFilePreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.selectedIconFilePreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedIconFileErrorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.selectedFaviconFilePreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedFaviconFilePreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.selectedFaviconFilePreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedFaviconFileErrorMessage);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbPopover, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 20373:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/settings/settings-dashboard/settings-dashboard.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsDashboardComponent": () => (/* binding */ SettingsDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_authentication_countries_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/authentication/countries/data */ 95025);
/* harmony import */ var src_app_core_helpers_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helpers/validation */ 52141);
/* harmony import */ var src_app_shared_enum_role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/role */ 96790);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _users_model_change_user_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../users/model/change-user-details.model */ 47244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var _users_user_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../users/user/users.service */ 29073);
/* harmony import */ var src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/settings/settings.service */ 11145);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _branding_branding_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../branding/branding.component */ 16730);
















function SettingsDashboardComponent_li_5_ng_template_4_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", country_r12.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", country_r12.country, " ");
} }
function SettingsDashboardComponent_li_5_ng_template_4_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 2, state_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", state_r13, " ");
} }
function SettingsDashboardComponent_li_5_ng_template_4_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const industry_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", industry_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", industry_r14, " ");
} }
function SettingsDashboardComponent_li_5_ng_template_4_button_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r10.accountSettingsForm.invalid || ctx_r10.isSubmittingAccountSetting);
} }
function SettingsDashboardComponent_li_5_ng_template_4_button_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Updating... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r11.accountSettingsForm.invalid || ctx_r11.isSubmittingAccountSetting);
} }
const _c0 = function (a0) { return { "border border-danger": a0 }; };
const _c1 = function (a0) { return { "is-invalid": a0 }; };
const _c2 = function () { return ["/examalpha/dashboard"]; };
function SettingsDashboardComponent_li_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function SettingsDashboardComponent_li_5_ng_template_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r15.submitAccountSetting(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Organization Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function SettingsDashboardComponent_li_5_ng_template_4_Template_select_change_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r17.setStates(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Select Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, SettingsDashboardComponent_li_5_ng_template_4_option_17_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Country is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "State ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Select State");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, SettingsDashboardComponent_li_5_ng_template_4_option_29_Template, 3, 4, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "State is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "Industry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Select Industry");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, SettingsDashboardComponent_li_5_ng_template_4_option_41_Template, 2, 2, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "Address Line 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](46, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "Address Line 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](51, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, SettingsDashboardComponent_li_5_ng_template_4_button_54_Template, 2, 1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, SettingsDashboardComponent_li_5_ng_template_4_button_55_Template, 2, 1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsDashboardComponent_li_5_ng_template_4_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r18.resetAccountSettingForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r6.accountSettingsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](15, _c0, ctx_r6.accountSettingsForm.get("organizationName").invalid && ctx_r6.accountSettingsForm.get("organizationName").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](17, _c1, ctx_r6.submitted && ctx_r6.f["country"].errors))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](19, _c0, ctx_r6.accountSettingsForm.get("country").invalid && ctx_r6.accountSettingsForm.get("country").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r6.countries);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](21, _c1, ctx_r6.submitted && ctx_r6.f["state"].errors))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](23, _c0, ctx_r6.accountSettingsForm.get("state").invalid && ctx_r6.accountSettingsForm.get("state").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r6.states);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](25, _c1, ctx_r6.submitted && ctx_r6.f["industry"].errors))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](27, _c0, ctx_r6.accountSettingsForm.get("industry").invalid && ctx_r6.accountSettingsForm.get("industry").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r6.industries);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r6.isSubmittingAccountSetting);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.isSubmittingAccountSetting);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](29, _c2))("disabled", ctx_r6.isSubmittingAccountSetting);
} }
function SettingsDashboardComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Account Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SettingsDashboardComponent_li_5_ng_template_4_Template, 58, 30, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavItem", ctx_r1.currentUser.authorities.includes(ctx_r1.Role.ADMIN) && 1);
} }
function SettingsDashboardComponent_li_6_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-branding");
} }
function SettingsDashboardComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Branding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SettingsDashboardComponent_li_6_ng_template_4_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavItem", ctx_r2.currentUser.authorities.includes(ctx_r2.Role.ADMIN) && 2);
} }
function SettingsDashboardComponent_li_7_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Security: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "h6", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Two-factor Authentication");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Two-factor authentication is an enhanced security meansur. Once enabled, you'll be required to give two types of identification when you log into Google Authentication and SMS are Supported. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Enable Two-facor Authentication");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, " Delete This Account: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, " Enter the name of your organization into the box below then click the button. A mail will be sent to you verify your action. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, " Close & Delete This Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](1, _c2));
} }
function SettingsDashboardComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Security ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SettingsDashboardComponent_li_7_ng_template_4_Template, 24, 2, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavItem", ctx_r3.currentUser.authorities.includes(ctx_r3.Role.ADMIN) && 3);
} }
function SettingsDashboardComponent_li_8_ng_template_4_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Password does not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SettingsDashboardComponent_li_8_ng_template_4_button_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r23.changePasswordForm.invalid);
} }
function SettingsDashboardComponent_li_8_ng_template_4_button_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Updating Password... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r24.isChangingPassword);
} }
function SettingsDashboardComponent_li_8_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function SettingsDashboardComponent_li_8_ng_template_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r25.submitChangePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Old Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, SettingsDashboardComponent_li_8_ng_template_4_span_23_Template, 2, 0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, SettingsDashboardComponent_li_8_ng_template_4_button_26_Template, 2, 1, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, SettingsDashboardComponent_li_8_ng_template_4_button_27_Template, 2, 1, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r21.changePasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](7, _c0, ctx_r21.changePasswordForm.get("oldPassword").touched && ctx_r21.changePasswordForm.get("oldPassword").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](9, _c0, ctx_r21.changePasswordForm.get("newPassword").touched && ctx_r21.changePasswordForm.get("newPassword").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](11, _c0, ctx_r21.changePasswordForm.get("confirmPassword").touched && ctx_r21.changePasswordForm.get("confirmPassword").invalid || (ctx_r21.changePasswordForm.errors == null ? null : ctx_r21.changePasswordForm.errors["passwordMismatch"]) && ctx_r21.changePasswordForm.get("confirmPassword").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r21.changePasswordForm.errors == null ? null : ctx_r21.changePasswordForm.errors["passwordMismatch"]) && ctx_r21.changePasswordForm.get("confirmPassword").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r21.isChangingPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r21.isChangingPassword);
} }
function SettingsDashboardComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Change Password Application Notifications: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SettingsDashboardComponent_li_8_ng_template_4_Template, 28, 13, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavItem", ctx_r4.currentUser.authorities.includes(ctx_r4.Role.ADMIN) ? 4 : 1);
} }
function SettingsDashboardComponent_ng_template_13_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsDashboardComponent_ng_template_13_div_3_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r31.userDetail.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", ctx_r28.userDetail.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r28.userDetail.username)("disabled", !ctx_r28.currentUser.authorities.includes("ADMIN"));
} }
function SettingsDashboardComponent_ng_template_13_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsDashboardComponent_ng_template_13_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r33.updateUserDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SettingsDashboardComponent_ng_template_13_button_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Saving...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " Saving... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r30.updatingPersonalInfo);
} }
function SettingsDashboardComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 71, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, SettingsDashboardComponent_ng_template_13_div_3_Template, 5, 3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsDashboardComponent_ng_template_13_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r35.userDetail.firstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsDashboardComponent_ng_template_13_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r37.userDetail.lastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsDashboardComponent_ng_template_13_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r38.userDetail.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsDashboardComponent_ng_template_13_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r39.userDetail.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, SettingsDashboardComponent_ng_template_13_button_26_Template, 2, 0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, SettingsDashboardComponent_ng_template_13_button_27_Template, 7, 1, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsDashboardComponent_ng_template_13_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r40.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.userDetail.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", ctx_r5.userDetail.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r5.userDetail.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", ctx_r5.userDetail.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r5.userDetail.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", ctx_r5.userDetail.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r5.userDetail.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", ctx_r5.userDetail.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r5.userDetail.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r5.updatingPersonalInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.updatingPersonalInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r5.updatingPersonalInfo);
} }
class SettingsDashboardComponent {
    constructor(formBuilder, userService, usersService, settingsService, notifierService, location) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.usersService = usersService;
        this.settingsService = settingsService;
        this.notifierService = notifierService;
        this.location = location;
        this.countries = [];
        this.states = [];
        this.submitted = false;
        this.isSubmittingAccountSetting = false;
        this.isChangingPassword = false;
        this.Role = src_app_shared_enum_role__WEBPACK_IMPORTED_MODULE_2__.Role;
        this.updatingPersonalInfo = false;
        this.newUserDetails = new _users_model_change_user_details_model__WEBPACK_IMPORTED_MODULE_4__.ChangeUserDetails();
        this.userDefaultSubjects = [];
        this.roles = [];
        this.changePasswordForm = this.formBuilder.group({
            oldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
        }, {
            validators: [src_app_core_helpers_validation__WEBPACK_IMPORTED_MODULE_1__.matchPasswordValidator],
        });
        this.accountSettingsForm = this.formBuilder.group({
            organizationName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            industry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            addressLine1: [''],
            addressLine2: [''],
        });
        this.industries = [
            'HEALTH CARE',
            'COSMETICS',
            'ENTERTAINMENT',
            'MANAGEMENT',
            'FINANCIAL',
            'ENGINEERING',
            'ARTS & DESIGN',
            'INFORMATION TECHNOLOGY',
            'EDUCATION',
        ];
        this.countries = src_app_authentication_countries_data__WEBPACK_IMPORTED_MODULE_0__.Countries;
    }
    ngOnDestroy() {
        if (this.editOrganizationSettingsSubscription) {
            this.editOrganizationSettingsSubscription.unsubscribe;
        }
        if (this.getOrganizationProfileSubscription) {
            this.getOrganizationProfileSubscription.unsubscribe;
        }
        if (this.changePasswordSubscription) {
            this.changePasswordSubscription.unsubscribe;
        }
    }
    ngOnInit() {
        this.currentUser = this.userService.getCurrentUser();
        if (this.currentUser.authorities.includes(this.Role.ADMIN)) {
            this.fillOrganizationForm();
            this.fetchAdminUserDetail(this.currentUser.id);
        }
        else {
            this.fetchUserDetail(this.currentUser.id);
        }
        this.initPersonalInfoForm();
    }
    fetchAdminUserDetail(userId) {
        this.usersService.getUserDetail(userId).subscribe((value) => {
            // console.log(value);
            this.userDetail = value;
            this.userDetail.userSubjectsDTOS.forEach((subject) => {
                this.userDefaultSubjects.push(subject);
            });
            value.userRolesDTOList.forEach((role) => {
                this.roles.push(role.role);
                this.userDetail.role = role.role;
            });
            // console.log(this.roles);
        }, (error) => {
            // console.log(error);
        });
    }
    fetchUserDetail(userId) {
        this.usersService.getSingleUserDetails(userId).subscribe((value) => {
            // console.log(value);
            this.userDetail = value;
            /* this.userDetail.userSubjectsDTOS.forEach((subject) => {
              this.userDefaultSubjects.push(subject);
            }); */
            value.userRolesDTOList.forEach((role) => {
                this.roles.push(role.role);
                this.userDetail.role = role.role;
            });
            // console.log(this.roles);
        }, (error) => {
            // console.log(error);
        });
    }
    setStates() {
        this.countries.forEach((country) => {
            if (country.country == this.accountSettingsForm.controls['country'].value) {
                this.states = country.states;
            }
        });
        // console.log(this.states);
    }
    get f() {
        return this.accountSettingsForm.controls;
    }
    submitAccountSetting() {
        if (this.accountSettingsForm.invalid) {
            this.accountSettingsForm.markAllAsTouched();
            return;
        }
        this.isSubmittingAccountSetting = true;
        const organization = this.accountSettingsForm.value;
        const payload = {
            organizationName: organization.organizationName
                ? organization.organizationName
                : null,
            country: organization.country ? organization.country : null,
            state: organization.state ? organization.state : null,
            industry: organization.industry ? organization.industry : null,
            addressLine1: organization.addressLine1
                ? organization.addressLine1
                : null,
            addressLine2: organization.addressLine2
                ? organization.addressLine2
                : null,
        };
        this.editOrganizationSettingsSubscription = this.settingsService
            .editOrganizationSettings(payload)
            .subscribe({
            next: (res) => {
                this.isSubmittingAccountSetting = false;
                this.notifierService.notify('success', 'Successfull');
            },
            error: (err) => {
                var _a;
                this.isSubmittingAccountSetting = false;
                console.log(err);
                this.notifierService.notify('error', (_a = err.error.message) !== null && _a !== void 0 ? _a : 'Sorry! Unable to perform update');
            },
        });
    }
    submitChangePassword() {
        if (this.changePasswordForm.invalid) {
            this.changePasswordForm.markAllAsTouched();
            return;
        }
        this.isChangingPassword = true;
        const changePasswordDetail = this.changePasswordForm.value;
        const payload = {
            oldPassword: changePasswordDetail.oldPassword,
            newPassword: changePasswordDetail.newPassword,
        };
        this.changePasswordSubscription = this.settingsService
            .changePassword(payload)
            .subscribe({
            next: (res) => {
                this.changePasswordForm.setValue({
                    oldPassword: '',
                    newPassword: '',
                    confirmPassword: '',
                });
                this.changePasswordForm.markAsUntouched();
                this.isChangingPassword = false;
                this.notifierService.notify('success', 'Successful');
            },
            error: (error) => {
                var _a;
                this.isChangingPassword = false;
                this.notifierService.notify('error', (_a = error.error.message) !== null && _a !== void 0 ? _a : 'Sorry! Unable to perform change');
            },
        });
    }
    updateUserDetails() {
        this.updatingPersonalInfo = true;
        this.newUserDetails.firstName = this.userDetail.firstName.trim();
        this.newUserDetails.lastName = this.userDetail.lastName.trim();
        this.newUserDetails.phone = this.userDetail.phone.trim();
        this.newUserDetails.email = this.userDetail.email.trim();
        this.newUserDetails.role = this.userDetail.userRolesDTOList[0].roleId;
        this.newUserDetails.id = this.userDetail.id;
        //console.log(this.newUserDetails);
        this.usersService.updateUserDetails(this.newUserDetails).subscribe((value) => {
            //console.log(value);
            this.updatingPersonalInfo = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                icon: 'success',
                html: 'User information has been updated successfully.',
            });
        }, (error) => {
            //console.log(error);
            this.updatingPersonalInfo = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                icon: 'error',
                html: `${error.error}`,
            });
        });
    }
    cancel() {
        this.location.back();
    }
    resetAccountSettingForm() {
        this.accountSettingsForm.setValue({
            organizationName: '',
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            industry: '',
            state: '',
            country: '',
            addressLine1: '',
            addressLine2: '',
        });
    }
    fillOrganizationForm() {
        this.getOrganizationProfileSubscription = this.settingsService
            .getOrganizationProfile()
            .subscribe({
            next: (org) => {
                var _a, _b, _c, _d, _e, _f;
                this.accountSettingsForm.setValue({
                    organizationName: (_a = org.organizationName) !== null && _a !== void 0 ? _a : '',
                    industry: (_b = org.industry) !== null && _b !== void 0 ? _b : '',
                    state: (_c = org.state) !== null && _c !== void 0 ? _c : '',
                    country: (_d = org.country) !== null && _d !== void 0 ? _d : '',
                    addressLine1: (_e = org.addressLine1) !== null && _e !== void 0 ? _e : '',
                    addressLine2: (_f = org.addressLine2) !== null && _f !== void 0 ? _f : '',
                });
                const country = this.accountSettingsForm.get('country').value;
                if (country) {
                    this.setStates();
                }
            },
            error: (err) => {
                var _a;
                this.notifierService.notify('error', (_a = err.error.message) !== null && _a !== void 0 ? _a : 'Sorry! Unable to fetch record');
            },
        });
    }
    initPersonalInfoForm() {
        this.personalInfoForm = this.formBuilder.group({
            username: [
                {
                    value: '',
                    disabled: !this.currentUser.authorities.includes('ADMIN'),
                },
            ],
            firstName: [''],
            lastName: [''],
            phone: [''],
            email: [''],
        });
    }
}
SettingsDashboardComponent.ɵfac = function SettingsDashboardComponent_Factory(t) { return new (t || SettingsDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_users_user_users_service__WEBPACK_IMPORTED_MODULE_6__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_11__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.Location)); };
SettingsDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: SettingsDashboardComponent, selectors: [["app-settings-dashboard"]], decls: 17, vars: 7, consts: [[1, "row"], [1, "card"], [1, "card-header"], ["ngbNav", "", "role", "tablist", 1, "nav", "nav-tabs-custom", "rounded", "card-header-tabs", "border-bottom-0", 3, "activeId"], ["customNav", "ngbNav"], ["class", "nav-item", 3, "ngbNavItem", 4, "ngIf"], [1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", "data-bs-toggle", "tab", "role", "tab", 1, "nav-link"], [1, "ri-user-line", "align-middle", "me-2", "fs-4"], ["ngbNavContent", ""], [1, "card-body", "p-4"], [1, "tab-content"], [3, "ngbNavOutlet"], [1, "ri-user-settings-fill", "align-middle", "me-2", "fs-4"], ["action", "javascript:void(0);", 3, "formGroup", "ngSubmit"], [1, "col-lg-6"], [1, "mb-3"], ["for", "organizationName", 1, "form-label", "d-flex", "flex-row", "gap-1"], [1, "text-danger", "fs-6"], ["type", "text", "id", "organizationName", "formControlName", "organizationName", "placeholder", "Enter your organization name", "value", "", 1, "form-control", 3, "ngClass"], [1, "mb-4", "col-6"], ["for", "country", 1, "form-label", "d-flex", "flex-row", "gap-1"], ["id", "country", "formControlName", "country", "required", "", 1, "form-select", "form-select-md", 3, "ngClass", "change"], ["disabled", "", "value", ""], ["class", "text-uppercase", 3, "value", 4, "ngFor", "ngForOf"], ["align", "left", 1, "invalid-feedback"], ["for", "state", 1, "form-label", "d-flex", "flex-row", "gap-1"], ["id", "state", "formControlName", "state", "required", "", 1, "form-select", "form-select-md", 3, "ngClass"], ["for", "industry", 1, "form-label", "d-flex", "flex-row", "gap-1"], ["formControlName", "industry", "id", "industry", "required", "", 1, "form-select", "form-select-md", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "addressLine1", 1, "form-label"], ["type", "text", "id", "addressLine1", "placeholder", "Address Line1", "formControlName", "addressLine1", 1, "form-control"], ["for", "addressLine2", 1, "form-label"], ["type", "text", "id", "addressLine2", "placeholder", "addressLine2", "formControlName", "addressLine1", 1, "form-control"], [1, "col-lg-12"], [1, "hstack", "gap-2", "justify-content-end"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", 4, "ngIf"], ["type", "button", 1, "btn", "btn-soft-danger", 3, "routerLink", "disabled", "click"], [1, "text-uppercase", 3, "value"], [3, "value"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "ri-palette-fill", "me-2", "align-middle", "fs-4"], [1, "ri-shield-fill", "me-2", "align-middle", "fs-4"], [1, "mb-4", "pb-2"], [1, "card-title", "text-decoration-underline", "mb-3"], [1, "d-flex", "flex-column", "flex-sm-row", "mb-4", "mb-sm-0"], [1, "flex-grow-1"], [1, "fs-14", "mb-1"], [1, "text-muted"], [1, "flex-shrink-0", "ms-sm-3"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-primary"], ["type", "text", "id", "passwordInput", "placeholder", "Enter your password", "value", "make@321654987", 1, "form-control", 2, "max-width", "265px"], [1, "hstack", "gap-2", "mt-3"], ["type", "button", 1, "btn", "btn-soft-danger"], ["href", "javascript:void(0);", 1, "btn", "btn-light", 3, "routerLink"], [1, "ri-key-fill", "align-middle", "me-2", "fs-4"], [1, "row", "g-2"], [1, "col-lg-4"], ["for", "oldpasswordInput", 1, "form-label", "d-flex", "flex-row", "gap-1"], [1, "text-danger"], ["type", "password", "id", "oldpasswordInput", "formControlName", "oldPassword", "placeholder", "Enter current password", 1, "form-control", 3, "ngClass"], ["for", "newpasswordInput", 1, "form-label", "d-flex", "flex-row", "gap-1"], ["type", "password", "id", "newpasswordInput", "formControlName", "newPassword", "placeholder", "Enter new password", 1, "form-control", 3, "ngClass"], ["for", "confirmpasswordInput", 1, "form-label", "d-flex", "flex-row", "gap-1"], ["type", "password", "formControlName", "confirmPassword", "id", "confirmpasswordInput", "placeholder", "Confirm password", 1, "form-control", 3, "ngClass"], ["class", "fs-6 text-danger", 4, "ngIf"], [1, "text-end"], ["type", "submit", "class", "btn btn-success", 3, "disabled", 4, "ngIf"], [1, "fs-6", "text-danger"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["novalidate", ""], ["updateUserDetailForm", "ngForm"], ["class", "col-12", 4, "ngIf"], ["for", "firstName", 1, "form-label"], ["type", "text", "id", "firstnameInput", "name", "firstName", "placeholder", "Enter your firstname", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["for", "lastName", 1, "form-label"], ["type", "text", "id", "lastnameInput", "name", "lastName", "placeholder", "Enter your lastname", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["for", "phone", 1, "form-label"], ["type", "text", "name", "phone", "id", "phone", "placeholder", "Enter your phone number", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["for", "email", 1, "form-label"], ["type", "email", "name", "email", "id", "email", "placeholder", "Enter your email", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-load", 3, "disabled", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], [1, "col-12"], ["type", "text", "name", "username", "id", "username", "placeholder", "Enter username", 1, "form-control", 3, "value", "ngModel", "disabled", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-outline-primary", "btn-load", 3, "disabled"], [1, "d-flex", "align-items-center"], ["role", "status", 1, "spinner-border", "flex-shrink-0"], [1, "visually-hidden"], [1, "flex-grow-1", "ms-2"]], template: function SettingsDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ul", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, SettingsDashboardComponent_li_5_Template, 5, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, SettingsDashboardComponent_li_6_Template, 5, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, SettingsDashboardComponent_li_7_Template, 5, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, SettingsDashboardComponent_li_8_Template, 5, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, " Personal Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, SettingsDashboardComponent_ng_template_13_Template, 30, 12, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("activeId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currentUser.authorities.includes("ADMIN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currentUser.authorities.includes("ADMIN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currentUser.authorities.includes("ADMIN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.currentUser.authorities.includes(ctx.Role.CENTER_ADMIN));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavItem", ctx.currentUser.authorities.includes(ctx.Role.ADMIN) ? 5 : 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbNav, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbNavContent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _branding_branding_component__WEBPACK_IMPORTED_MODULE_8__.BrandingComponent, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbNavOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.UpperCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 82760:
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsRoutingModule": () => (/* binding */ SettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _settings_dashboard_settings_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-dashboard/settings-dashboard.component */ 20373);
/* harmony import */ var _branding_branding_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branding/branding.component */ 16730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: '', component: _settings_dashboard_settings_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.SettingsDashboardComponent },
    { path: 'branding', component: _branding_branding_component__WEBPACK_IMPORTED_MODULE_1__.BrandingComponent },
];
class SettingsRoutingModule {
}
SettingsRoutingModule.ɵfac = function SettingsRoutingModule_Factory(t) { return new (t || SettingsRoutingModule)(); };
SettingsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SettingsRoutingModule });
SettingsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SettingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 7850:
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 82760);
/* harmony import */ var _settings_dashboard_settings_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-dashboard/settings-dashboard.component */ 20373);
/* harmony import */ var _branding_branding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branding/branding.component */ 16730);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class SettingsModule {
}
SettingsModule.ɵfac = function SettingsModule_Factory(t) { return new (t || SettingsModule)(); };
SettingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPopoverModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SettingsModule, { declarations: [_settings_dashboard_settings_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.SettingsDashboardComponent, _branding_branding_component__WEBPACK_IMPORTED_MODULE_2__.BrandingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPopoverModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule] }); })();


/***/ }),

/***/ 11145:
/*!*******************************************************!*\
  !*** ./src/app/services/settings/settings.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsService": () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class SettingsService {
    constructor(_http) {
        this._http = _http;
    }
    editOrganizationSettings(updateOrganizationPayload) {
        const url = '/examalpha/api/v1/organization/edit_organization_settings';
        return this._http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP + url, updateOrganizationPayload, { withCredentials: true });
    }
    getOrganizationProfile() {
        const url = '/examalpha/api/v1/organization/organization_profile';
        return this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP + url, {
            withCredentials: true,
        });
    }
    changePassword(updatePassword) {
        const url = '/examalpha/api/v1/itembank/o_users/user-password';
        return this._http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schedulerIP + url, updatePassword, { withCredentials: true });
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
SettingsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings_settings_module_ts.js.map