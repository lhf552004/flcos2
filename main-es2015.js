(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./dist/data-table/fesm2015/data-table.js":
/*!************************************************!*\
  !*** ./dist/data-table/fesm2015/data-table.js ***!
  \************************************************/
/*! exports provided: DataGroupBy, DataTableColumn, DataTableColumnDefinition, DataTableComponent, DataTableModule, DataTableRow, DataTableService, DataTableSettings, DataTableToolbar, DataTableToolbarControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGroupBy", function() { return DataGroupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumn", function() { return DataTableColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnDefinition", function() { return DataTableColumnDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableModule", function() { return DataTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableRow", function() { return DataTableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableService", function() { return DataTableService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSettings", function() { return DataTableSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableToolbar", function() { return DataTableToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableToolbarControl", function() { return DataTableToolbarControl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-virtual-scroller */ "./node_modules/ngx-virtual-scroller/__ivy_ngcc__/fesm2015/ngx-virtual-scroller.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");












class DataTableService {
    constructor() { }
}
DataTableService.ɵfac = function DataTableService_Factory(t) { return new (t || DataTableService)(); };
DataTableService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: DataTableService, factory: DataTableService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DataTableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

function DataTableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "div", 14);
} }
function DataTableComponent_div_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 16);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DataTableComponent_div_2_button_1_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r14); const control_r12 = ctx.$implicit; const ctx_r13 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r13.batchMethod(control_r12); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const control_r12 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(control_r12.name);
} }
function DataTableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, DataTableComponent_div_2_button_1_Template, 2, 1, "button", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r1.toolbar.left);
} }
const _c0 = function (a0, a1) { return { "btn-link white-text border": a0, "btn-primary": a1 }; };
function DataTableComponent_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DataTableComponent_div_3_button_1_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r24); const control_r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit; return control_r15.callback(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "fa-icon", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const control_r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit;
    const ctx_r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(4, _c0, ctx_r16.anySelected, !ctx_r16.anySelected));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", control_r15.icon)("fixedWidth", true);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", control_r15.name, "");
} }
function DataTableComponent_div_3_div_2_button_7_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 28);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DataTableComponent_div_3_div_2_button_7_Template_button_click_0_listener() { const item_r27 = ctx.$implicit; return item_r27.callback(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(item_r27.name);
} }
function DataTableComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 23);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "button", 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DataTableComponent_div_3_div_2_Template_button_click_1_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r31); const control_r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit; return control_r15.callback(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "fa-icon", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "div", 24);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(5, "button", 25);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "div", 26);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, DataTableComponent_div_3_div_2_button_7_Template, 2, 1, "button", 27);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const control_r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit;
    const ctx_r17 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(6, _c0, ctx_r17.anySelected, !ctx_r17.anySelected));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", control_r15.icon)("fixedWidth", true);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", control_r15.name, "");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(9, _c0, ctx_r17.anySelected, !ctx_r17.anySelected));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", control_r15.controls);
} }
function DataTableComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 29);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "input", 30);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function DataTableComponent_div_3_div_3_Template_input_ngModelChange_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r34); const ctx_r33 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r33.searchText = $event; })("input", function DataTableComponent_div_3_div_3_Template_input_input_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r34); const ctx_r35 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r35.searchSubject$.next($event.target.value); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 31);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "button", 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DataTableComponent_div_3_div_3_Template_button_click_3_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r34); const ctx_r36 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r36.findPrevious(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(4, "fa-icon", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "button", 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DataTableComponent_div_3_div_3_Template_button_click_5_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r34); const ctx_r37 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r37.findNext(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(6, "fa-icon", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r18 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngModel", ctx_r18.searchText);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(7, _c0, ctx_r18.anySelected, !ctx_r18.anySelected));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx_r18.faCaretUp)("fixedWidth", true);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(10, _c0, ctx_r18.anySelected, !ctx_r18.anySelected));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx_r18.faCaretDown)("fixedWidth", true);
} }
function DataTableComponent_div_3_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r39 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DataTableComponent_div_3_button_4_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r39); const ctx_r38 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r38.toggleFilterRow(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "fa-icon", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2, " Filter");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r19 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(3, _c0, ctx_r19.anySelected, !ctx_r19.anySelected));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx_r19.faFilter)("fixedWidth", true);
} }
function DataTableComponent_div_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r41 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DataTableComponent_div_3_button_5_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r41); const ctx_r40 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r40.exportToExcel(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "fa-icon", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2, " Export to Excel");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r20 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(3, _c0, ctx_r20.anySelected, !ctx_r20.anySelected));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx_r20.faFileExcel)("fixedWidth", true);
} }
function DataTableComponent_div_3_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r43 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DataTableComponent_div_3_button_6_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r43); const ctx_r42 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r42.exportToPdf(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "fa-icon", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2, " Export to Pdf");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r21 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(3, _c0, ctx_r21.anySelected, !ctx_r21.anySelected));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx_r21.faFilePdf)("fixedWidth", true);
} }
function DataTableComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, DataTableComponent_div_3_button_1_Template, 3, 7, "button", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, DataTableComponent_div_3_div_2_Template, 8, 12, "div", 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, DataTableComponent_div_3_div_3_Template, 7, 13, "div", 20);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, DataTableComponent_div_3_button_4_Template, 3, 6, "button", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, DataTableComponent_div_3_button_5_Template, 3, 6, "button", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, DataTableComponent_div_3_button_6_Template, 3, 6, "button", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const control_r15 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", control_r15.type === "button");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", control_r15.type === "splitButton");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", control_r15.type === "search");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", control_r15.type === "filter");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", control_r15.type === "excel");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", control_r15.type === "pdf");
} }
function DataTableComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "th", 32);
} }
const _c1 = function (a0) { return { invisible: a0 }; };
function DataTableComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    const _r45 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "th", 32);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "fa-icon", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DataTableComponent_th_11_Template_fa_icon_click_1_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r45); const ctx_r44 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r44.toggleExpansionAll(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "fa-icon", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DataTableComponent_th_11_Template_fa_icon_click_2_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r45); const ctx_r46 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r46.toggleSelectionAll(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "fa-icon", 34);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(9, _c1, !ctx_r6.expandableRows))("icon", ctx_r6.allExpandedIcon)("fixedWidth", true);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(11, _c1, !ctx_r6.selectableRows))("icon", ctx_r6.allSelectedIcon)("fixedWidth", true);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx_r6.faExclamationCircle)("fixedWidth", true)("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(13, _c1, !ctx_r6.errors));
} }
function DataTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "th", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const col_r47 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(col_r47.label);
} }
function DataTableComponent_tr_13_th_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "th", 32);
} }
function DataTableComponent_tr_13_th_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "th", 32);
} }
function DataTableComponent_tr_13_th_3_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r57 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "input", 38);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("input", function DataTableComponent_tr_13_th_3_input_1_Template_input_input_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r57); const col_r51 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit; const ctx_r55 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r55.processFilterValue(col_r51, $event.target.value); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const col_r51 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngModel", col_r51.filterText);
} }
function DataTableComponent_tr_13_th_3_div_2_fa_icon_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "fa-icon", 48);
} if (rf & 2) {
    const ctx_r60 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx_r60.faCheckSquare)("fixedWidth", true);
} }
function DataTableComponent_tr_13_th_3_div_2_fa_icon_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "fa-icon", 48);
} if (rf & 2) {
    const ctx_r61 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx_r61.faSquare)("fixedWidth", true);
} }
function DataTableComponent_tr_13_th_3_div_2_fa_icon_7_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "fa-icon", 48);
} if (rf & 2) {
    const ctx_r62 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx_r62.faMinusSquare)("fixedWidth", true);
} }
function DataTableComponent_tr_13_th_3_div_2_button_11_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "fa-icon", 48);
} if (rf & 2) {
    const ctx_r65 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx_r65.faCheckSquare)("fixedWidth", true);
} }
function DataTableComponent_tr_13_th_3_div_2_button_11_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "fa-icon", 48);
} if (rf & 2) {
    const ctx_r66 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx_r66.faSquare)("fixedWidth", true);
} }
function DataTableComponent_tr_13_th_3_div_2_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r69 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 43);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DataTableComponent_tr_13_th_3_div_2_button_11_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r69); const v_r64 = ctx.$implicit; const col_r51 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2).$implicit; const ctx_r67 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r67.toggleFilterValue(col_r51, v_r64); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, DataTableComponent_tr_13_th_3_div_2_button_11_fa_icon_1_Template, 1, 2, "fa-icon", 44);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, DataTableComponent_tr_13_th_3_div_2_button_11_fa_icon_2_Template, 1, 2, "fa-icon", 44);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const v_r64 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", v_r64.selected);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !v_r64.selected);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", v_r64.value, " ");
} }
function DataTableComponent_tr_13_th_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r71 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 39, 40);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "input", 41);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("focus", function DataTableComponent_tr_13_th_3_div_2_Template_input_focus_2_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r71); const _r59 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(1); return _r59.open(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 42);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "button", 43);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DataTableComponent_tr_13_th_3_div_2_Template_button_click_4_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r71); const col_r51 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit; const ctx_r72 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r72.toggleSelectAllFilterValues(col_r51); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, DataTableComponent_tr_13_th_3_div_2_fa_icon_5_Template, 1, 2, "fa-icon", 44);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, DataTableComponent_tr_13_th_3_div_2_fa_icon_6_Template, 1, 2, "fa-icon", 44);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, DataTableComponent_tr_13_th_3_div_2_fa_icon_7_Template, 1, 2, "fa-icon", 44);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(8, " Select All ");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(9, "div", 45);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(10, "div", 46);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(11, DataTableComponent_tr_13_th_3_div_2_button_11_Template, 4, 3, "button", 47);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const col_r51 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngModel", col_r51.filterText);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", col_r51.filterStatus === "all");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", col_r51.filterStatus === "none");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", col_r51.filterStatus === "indeterminate");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", col_r51.filterValues);
} }
function DataTableComponent_tr_13_th_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "th", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, DataTableComponent_tr_13_th_3_input_1_Template, 1, 1, "input", 36);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, DataTableComponent_tr_13_th_3_div_2_Template, 12, 5, "div", 37);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const col_r51 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", col_r51.filterMode === "text");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", col_r51.filterMode === "select" || col_r51.filterMode === "numeric");
} }
function DataTableComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "tr");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, DataTableComponent_tr_13_th_1_Template, 1, 0, "th", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, DataTableComponent_tr_13_th_2_Template, 1, 0, "th", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, DataTableComponent_tr_13_th_3_Template, 3, 2, "th", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r8.draggableRows);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r8.expandableRows || ctx_r8.selectableRows || ctx_r8.errors);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r8.columns);
} }
function DataTableComponent_tr_16_td_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "td", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "fa-icon", 51);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r76 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx_r76.faGripVertical)("fixedWidth", true);
} }
function DataTableComponent_tr_16_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r81 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "td", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "fa-icon", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DataTableComponent_tr_16_td_2_Template_fa_icon_click_1_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r81); const row_r75 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit; const ctx_r79 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r79.toggleExpansion(row_r75); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "fa-icon", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DataTableComponent_tr_16_td_2_Template_fa_icon_click_2_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r81); const row_r75 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit; const ctx_r82 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r82.toggleSelection(row_r75); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "fa-icon", 34);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const row_r75 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit;
    const ctx_r77 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(9, _c1, !row_r75.expandable))("icon", row_r75.expandedIcon)("fixedWidth", true);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(11, _c1, !row_r75.selectable))("icon", row_r75.selectedIcon)("fixedWidth", true);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx_r77.faExclamationCircle)("fixedWidth", true)("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(13, _c1, !row_r75.error));
} }
const _c2 = function (a0) { return { pointer: a0 }; };
function DataTableComponent_tr_16_td_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r91 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "fa-icon", 52);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DataTableComponent_tr_16_td_3_ng_container_1_Template_fa_icon_click_1_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r91); const cell_r85 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit; return cell_r85.click(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    const cell_r85 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", cell_r85.value)("fixedWidth", true)("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(3, _c2, cell_r85.canClick));
} }
function DataTableComponent_tr_16_td_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r95 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "span", 53);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DataTableComponent_tr_16_td_3_ng_container_2_Template_span_click_1_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r95); const cell_r85 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit; return cell_r85.click(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    const cell_r85 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(2, _c2, cell_r85.canClick));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(cell_r85.value);
} }
function DataTableComponent_tr_16_td_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "td", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, DataTableComponent_tr_16_td_3_ng_container_1_Template, 2, 5, "ng-container", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, DataTableComponent_tr_16_td_3_ng_container_2_Template, 3, 4, "ng-container", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const cell_r85 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("colspan", cell_r85.colspan);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", cell_r85.type === "icon");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", cell_r85.type === "text");
} }
function DataTableComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "tr", 49);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, DataTableComponent_tr_16_td_1_Template, 2, 2, "td", 50);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, DataTableComponent_tr_16_td_2_Template, 4, 15, "td", 50);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, DataTableComponent_tr_16_td_3_Template, 3, 3, "td", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const row_r75 = ctx.$implicit;
    const ctx_r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("cdkDragData", row_r75);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r10.draggableRows);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r10.expandableRows || ctx_r10.selectableRows || ctx_r10.errors);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", row_r75.cells);
} }
const _c3 = function (a0) { return { arrowed: a0 }; };
class DataTableComponent {
    constructor() {
        // Order changed
        this.orderChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Icons
        this.faSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSquare"];
        this.faSquare2 = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSquare"];
        this.faCheckSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckSquare"];
        this.faMinusSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMinusSquare"];
        this.faCaretUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretUp"];
        this.faCaretDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretDown"];
        this.faExclamationCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExclamationCircle"];
        this.faFilter = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFilter"];
        this.faFileExcel = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileExcel"];
        this.faFilePdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFilePdf"];
        this.faGripVertical = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGripVertical"];
        // Indicates if any row is selectable, expandable, draggable or any row has an error
        this.selectableRows = false;
        this.expandableRows = false;
        this.draggableRows = false;
        this.errors = false;
        // Indicates if all rows are expanded
        this.allExpanded = true;
        this.allExpandedIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretDown"];
        // Indicates if all rows are selected
        this.allSelected = false;
        this.allSelectedIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSquare"];
        // Indicates if at least one row is selected
        this.anySelected = false;
        // Total number of notifications
        this.totalNotifications = 0;
        // Holds search text entered by user
        this.searchSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchText = '';
        this.searchFoundIndex = 0;
        // Indicates whether to show filter row
        this.showFilterRow = false;
        // Used for cleaning up subscription
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.searchSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe)).subscribe(x => this.scrollTo(x, 0, 1));
    }
    ngOnChanges() {
        this.buildRows();
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    buildRows() {
        // Create columns and initialize filters
        this.columns = this.settings.columnDefinitions.filter(x => x.visible).map(x => (Object.assign(Object.assign({}, x), { filterSubject$: new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]() })));
        // Create the toolbar
        this.toolbar = this.settings.toolBar;
        // Create temporary object to store unique column values
        this.uniqueColValues = this.columns.filter(c => c.filterMode === 'select' || c.filterMode === 'numeric').reduce((acc, c) => {
            c.filterValues = [];
            acc[c.name] = {};
            return acc;
        }, {});
        // Perform grouping if required and create rows
        if (this.settings.groupBy && this.settings.groupBy.length)
            this.rows = this.groupRows(this.settings.data, this.settings.groupBy);
        else {
            this.rows = this.settings.data.map((d, i) => this.createRow(Object.assign(Object.assign({}, d), { level: 1 }), i));
        }
        // Order filter values
        this.columns.filter(c => c.filterValues).forEach(c => {
            var _a;
            (_a = c.filterValues) === null || _a === void 0 ? void 0 : _a.sort((a, b) => a.value > b.value ? 1 : (a.value < b.value ? -1 : 0));
        });
        // Subscribe to filter event emitters, setting their default values to an empty array
        const observables = this.columns.map(x => x.filterSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])([])));
        // TODO Cedric Do we need to kill the subscription on ngOnChanges?
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(...observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe)).subscribe(x => this.filterRows(x));
        // Reset the filter
        this.resetFilter();
        // Build visual rows
        this.buildVisualRows();
        // Make the rows draggable as specified
        this.draggableRows = !!this.settings.draggableRows;
    }
    buildVisualRows() {
        // Visual rows are only those rows that are not collapsed
        let collapsedLevel = 99;
        this.visualRows = this.rows.reduce((acc, x) => {
            if (x.level <= collapsedLevel) {
                acc.push(x);
                collapsedLevel = !x.expanded ? x.level : 99;
            }
            return acc;
        }, []);
        // Force rows to filter
        if (this.showFilterRow)
            this.refreshFilter();
        else
            this.filteredRows = this.visualRows;
        // Compute table level info
        this.errors = this.visualRows.some(x => x.error);
        this.selectableRows = this.visualRows.some(x => x.selectable);
        this.expandableRows = this.visualRows.some(x => x.expandable);
    }
    // Retrieve a the value of a nested property
    getPropertyByStringPath(obj, path) {
        path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        path = path.replace(/^\./, ''); // strip a leading dot
        var a = path.split('.');
        for (var i = 0, n = a.length; i < n; ++i) {
            var k = a[i];
            if (obj && k in obj) {
                obj = obj[k];
            }
            else {
                return;
            }
        }
        return obj;
    }
    // Group rows based on the provided list of properties
    groupRows(data, properties) {
        // Helper method: multiPropertySorter
        // A multi-property sorted allowing for an array to be sorted based on multiple properties
        const multiPropertySorter = (props) => {
            return (a, b) => {
                for (let i = 0; i < props.length; i++) {
                    const aVal = this.getPropertyByStringPath(a, props[i]);
                    const bVal = this.getPropertyByStringPath(b, props[i]);
                    if (aVal !== bVal)
                        return aVal > bVal ? 1 : -1;
                }
                return 0;
            };
        };
        // Helper function: groupBy
        // Group an array by a specified property
        const groupBy = (arr, prop) => {
            return arr.reduce((acc, x) => {
                const keyVal = this.getPropertyByStringPath(x, prop.key);
                if (!acc[keyVal]) {
                    acc[keyVal] = {
                        info: prop.groupProperties.reduce((acc2, y) => {
                            // Get the value
                            const v = this.getPropertyByStringPath(x, y);
                            // Deal with nested properties
                            const nestedProps = y.split('.');
                            nestedProps.reduce((o, p, i) => { o[p] = o[p] || (i === nestedProps.length - 1 ? v : {}); return o[p]; }, acc2);
                            // Return
                            return acc2;
                        }, {}),
                        values: []
                    };
                }
                acc[keyVal].values.push(x);
                return acc;
            }, {});
        };
        // Helper function: nest
        // Perform multi-level group by on a source array and return the grouped sorted array
        // arr: The array to perform group by upon
        // props: The list of prop to use for group by
        // level: The depth in the grouped array
        // parent: The parent group. Null if it does not exist
        const nest = (arr, props, level, parent) => {
            if (!props || !props.length)
                return arr.map(x => (Object.assign(Object.assign({}, x), { level: level, parent: parent })));
            const [prop, ...others] = props;
            const group = groupBy(arr, prop);
            return Object.keys(group)
                .reduce((acc, k) => { acc.push(Object.assign(Object.assign({}, group[k].info), { level: level, parent: parent, values: nest(group[k].values, others, level + 1, group[k].info) })); return acc; }, [])
                .sort(multiPropertySorter(prop.orderBy));
        };
        // Helper method: traverseDepthFirst
        // Traverse the nested arrays depth first
        const traverseDepthFirst = (arr, childrenProperty, cb) => {
            // Make a copy of the array
            const stack = arr.slice(0);
            // Traverse the nested arrays
            while (stack.length) {
                // Shift element from stack
                var element = stack.shift();
                // Invoke callback
                cb(element);
                // Add child element to stack if they exist
                element && element[childrenProperty] && stack.unshift(...element[childrenProperty]);
            }
        };
        // Nest the rows
        const nestedRows = nest(data, properties.map(x => ({ key: x.property, orderBy: x.orderBy, groupProperties: x.columns.map(y => y.name) })), 1, null);
        // Reset the rows array
        const rows = [];
        // Traverse the nested rows and build the data table rows
        traverseDepthFirst(nestedRows, 'values', (r) => { rows.push(this.createRow(r, rows.length)); });
        // Return
        return rows;
    }
    // Create row
    createRow(data, index) {
        return {
            physicalIndex: index,
            selected: false,
            expanded: true,
            level: data === null || data === void 0 ? void 0 : data.level,
            selectedIcon: this.faSquare2,
            expandedIcon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretDown"],
            selectable: !!this.settings.selectableRows,
            expandable: (data === null || data === void 0 ? void 0 : data.level) <= this.settings.groupBy.length,
            error: false,
            errorMessage: '',
            data: data,
            // TODO: Clean up functions below
            cells: data.level > this.settings.groupBy.length ? this.columns.map(c => {
                // Compute cell value
                const val = this.getPropertyByStringPath(data, c.name);
                // Add value to column filter value and mark them as selected by default
                if ((c.filterMode === 'select' || c.filterMode === 'numeric') && c.filterValues && !this.uniqueColValues[c.name][val]) {
                    this.uniqueColValues[c.name][val] = true;
                    c.filterValues.push({ value: val, selected: true });
                }
                // Return
                return { value: val, type: c.type, prop: c.name, colspan: 1, canClick: c.click, click: () => { if (c.click)
                        c.click(data); } };
            }) :
                this.settings.groupBy[data.level - 1].columns.map(c => {
                    // Compute cell value
                    const val = this.getPropertyByStringPath(data, c.name);
                    // Return
                    return { value: val, type: c.type, prop: c.name, colspan: c.colspan, canClick: c.click, click: () => { if (c.click)
                            c.click(data); } };
                })
        };
    }
    // Filter the rows based on the provided filter
    filterRows(filter) {
        const filterPredicate = x => x.level <= this.settings.groupBy.length ||
            this.columns
                .every((c, i) => !filter[i] ||
                !filter[i].length ||
                filter[i].some(y => c.filterMode === 'numeric' || c.filterMode === 'select' ?
                    x.cells[i].value === y :
                    (x.cells[i].value || '').toLowerCase().includes(y.toLowerCase())));
        this.filteredRows = this.visualRows.filter(filterPredicate);
        // TODO: Remove group rows if content is empty
    }
    // Process filter value for fileds with a free text filter
    processFilterValue(col, value) {
        // Update the filter text
        col.filterText = value;
        // Emit
        col.filterSubject$.next([value]);
    }
    // Toggle filter value for fields with dropdown filter
    toggleFilterValue(col, filterValue) {
        // Update the selected value status
        filterValue.selected = !filterValue.selected;
        // Update the filter
        this.updateSelectFilter(col);
    }
    toggleSelectAllFilterValues(col) {
        var _a, _b;
        // Update the selected status
        if (col.filterStatus !== 'all')
            (_a = col.filterValues) === null || _a === void 0 ? void 0 : _a.forEach(x => { x.selected = true; });
        else
            (_b = col.filterValues) === null || _b === void 0 ? void 0 : _b.forEach(x => { x.selected = false; });
        // Update the filter
        this.updateSelectFilter(col);
    }
    updateSelectFilter(col) {
        var _a, _b, _c;
        // Retrieve all selected values
        const selectedValues = ((_a = col.filterValues) === null || _a === void 0 ? void 0 : _a.filter(x => x.selected).map(x => x.value)) || [];
        // Update the filter status
        col.filterStatus = selectedValues.length === ((_b = col.filterValues) === null || _b === void 0 ? void 0 : _b.length) ?
            'all' :
            selectedValues.length === 0 ? 'none' : 'indeterminate';
        // Update the filter text
        col.filterText = selectedValues.length === ((_c = col.filterValues) === null || _c === void 0 ? void 0 : _c.length) ?
            'All selected' :
            selectedValues.length === 0 ? 'None selected' : `${selectedValues.length} selected`;
        // Emit 
        col.filterSubject$.next(selectedValues);
    }
    // Toggle select status for all rows
    toggleSelectionAll() {
        this.allSelected = !this.allSelected;
        this.allSelectedIcon = this.allSelected === true ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckSquare"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSquare"];
        this.rows.forEach(x => {
            x.selected = this.allSelected;
            x.selectedIcon = x.selected === true ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckSquare"] : this.faSquare2;
        });
        this.anySelected = this.allSelected;
    }
    // Toggle select status for a single row
    toggleSelection(row) {
        row.selected = !row.selected;
        row.selectedIcon = row.selected === true ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckSquare"] : this.faSquare2;
        // Cascade to children
        if (this.settings.cascadeParentSelectionToChildren)
            this.cascadeSelectionToChildren(row);
        if (!row.selected) {
            this.anySelected = this.rows.some(x => x.selected);
            this.allSelected = false;
            this.allSelectedIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSquare"];
        }
        else {
            this.anySelected = true;
            this.allSelected = this.rows.every(x => x.selected);
            this.allSelectedIcon = this.allSelected === true ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckSquare"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSquare"];
        }
    }
    // Toggle children selection
    cascadeSelectionToChildren(row) {
        let i = row.physicalIndex + 1;
        const level = row.level;
        while (i < this.rows.length && this.rows[i].level > level) {
            this.rows[i].selected = row.selected;
            this.rows[i].selectedIcon = this.rows[i].selected === true ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckSquare"] : this.faSquare2;
            i++;
        }
    }
    // Toggle expansion status for all rows
    toggleExpansionAll() {
        this.allExpanded = !this.allExpanded;
        this.allExpandedIcon = this.allExpanded === true ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretDown"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretRight"];
        this.rows.forEach(x => {
            x.expanded = this.allExpanded;
            x.expandedIcon = x.expanded === true ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretDown"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretRight"];
        });
        this.buildVisualRows();
    }
    // Toggle expansion status for a single row
    toggleExpansion(row) {
        row.expanded = !row.expanded;
        row.expandedIcon = row.expanded === true ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretDown"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretRight"];
        if (!row.expanded)
            this.allExpanded = false;
        else
            this.allExpanded = this.rows.every(x => x.expanded);
        this.allExpandedIcon = this.allExpanded === true ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretDown"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretRight"];
        this.buildVisualRows();
    }
    // Locate the first occurence of the search text and scroll to that corresponding item
    scrollTo(searchText, startIndex, direction) {
        // Exit if searchText is null
        if (!searchText)
            return;
        // Default direction is forward
        direction = direction || 1;
        // Ensure startIndex is valid
        startIndex = startIndex || 0;
        // Prepare searchText
        searchText = searchText.toLowerCase();
        // Build search predicate
        const cols = this.settings.columnDefinitions.filter(x => x.searchable && x.visible);
        const predicate = (x) => cols.some(c => { var _a; return (((_a = x.cells.find(y => y.prop === c.name)) === null || _a === void 0 ? void 0 : _a.value) || '').toLowerCase().includes(searchText); });
        // Locate the index of the first element that matches the search text
        const idx = direction === 1 ?
            this.visualRows.slice(startIndex).findIndex(predicate) + startIndex :
            this.visualRows.slice(0, startIndex).map(predicate).lastIndexOf(true);
        if (idx > -1) {
            this.searchFoundIndex = idx;
            const item = this.visualRows[this.searchFoundIndex];
            this.virtualScroller.scrollInto(item, true, -34);
        }
    }
    // Find the next occurence of the search text and scroll to that corresponding item
    findNext() {
        this.scrollTo(this.searchText, this.searchFoundIndex + 1, 1);
    }
    // Find the previous occurence of the search text and scroll to that corresponding item
    findPrevious() {
        this.scrollTo(this.searchText, this.searchFoundIndex, -1);
    }
    // Toggle the filter row
    toggleFilterRow() {
        this.showFilterRow = !this.showFilterRow;
        if (!this.showFilterRow) {
            // Reset the filter
            this.resetFilter();
            // Allow drag and drop
            this.draggableRows = !!this.settings.draggableRows;
        }
        else {
            // Disabled drag and drop when filtering the table
            this.draggableRows = false;
        }
    }
    // Reset the filter
    resetFilter() {
        // Emit filter default values
        this.columns.forEach((x, i) => {
            var _a;
            if (x.filterMode === 'select' || x.filterMode === 'numeric') {
                // Reset the selected values
                (_a = x.filterValues) === null || _a === void 0 ? void 0 : _a.forEach(y => y.selected = true);
                // Update the filter
                this.updateSelectFilter(x);
            }
            else if (x.filterMode === 'text') {
                // Update the filter
                this.processFilterValue(x, '');
            }
            else if (x.filterMode === 'none')
                x.filterSubject$.next([]);
        });
    }
    // Refresh the filter
    refreshFilter() {
        // Emit filter default values
        this.columns.forEach((x, i) => {
            if (x.filterMode === 'select' || x.filterMode === 'numeric') {
                // Update the filter
                this.updateSelectFilter(x);
            }
            else if (x.filterMode === 'text') {
                // Update the filter
                this.processFilterValue(x, x.filterText || '');
            }
        });
    }
    // Export to Excel
    // TODO Cedric
    exportToExcel() {
        alert('Excel Export...TODO');
    }
    // Export to Pdf
    // TODO Cedric
    exportToPdf() {
        alert('Pdf Export...TODO');
    }
    // Execute batch method
    batchMethod(control) {
        // Retrieve selected rows
        const selectedRows = this.rows.filter(x => x.selected);
        // Execute batch method
        control.callback(selectedRows);
    }
    // Dropped event handler
    drop(event) {
        if (event.previousContainer === event.container) {
            // Retrieve the physical indexes
            const fromPhysical = this.filteredRows[event.previousIndex].physicalIndex;
            let toPhysical = this.filteredRows[event.currentIndex].physicalIndex;
            // Retrieve direction
            const forward = toPhysical > fromPhysical;
            // Adjust the index if the "to" row is collpased
            if (forward && !this.filteredRows[event.currentIndex].expanded && event.currentIndex < this.filteredRows.length - 1)
                toPhysical = this.filteredRows[event.currentIndex + 1].physicalIndex - 1;
            this.moveItemsInArray(this.rows, fromPhysical, toPhysical);
        }
        else {
            // TODO: do we need to drag in datatable from outside container
            console.log('dragged in from other container');
        }
    }
    // Ensure that the move is valid
    sortPredicate(index, item, drop) {
        const itemLevel = item.data.level;
        // Can drop anything at the end of the list
        if (index === drop.data.length - 1)
            return true;
        // Can drop only level 1 at the start of the list
        if (index === 0)
            return itemLevel === 1;
        // Adjust index based on drag direction
        const delta = item.data.physicalIndex > drop.data[index].physicalIndex ? 0 : 1;
        const dropAfterLevel = drop.data[index - 1 + delta].level;
        const dropBeforeLevel = drop.data[index + delta].level;
        // Otherwise, ensure that we are dropping in a parent of appropriate level
        return itemLevel === dropBeforeLevel || // Drop just before a sibling
            (itemLevel <= dropAfterLevel && itemLevel >= dropBeforeLevel) || // Drop just after a child level AND just before a sibling/parent level
            (itemLevel === dropAfterLevel + 1); // Drop in first place in a parent
    }
    // Move row with children and grandchildren together to the new position
    moveItemsInArray(array, fromIndex, toIndex) {
        // Make sure from and to are within boundary of the array
        const from = Math.max(0, Math.min(array.length - 1, fromIndex));
        const to = Math.max(0, Math.min(array.length - 1, toIndex));
        // Exit if no change
        if (from === to)
            return;
        // Extract the rows to move
        const rowsToMove = [array[from]];
        let i = fromIndex + 1;
        const level = array[fromIndex].level;
        while (i < array.length && array[i].level > level) {
            rowsToMove.push(array[i]);
            i++;
        }
        // Compute direction
        const forward = to > from;
        if (forward) {
            // Shift move
            let current = from;
            let stop = to - rowsToMove.length + 1;
            while (current < stop) {
                array[current] = array[current + rowsToMove.length];
                array[current].physicalIndex = current;
                current++;
            }
            // Paste
            let j = 0;
            while (current < to + 1) {
                array[current] = rowsToMove[j++];
                array[current].physicalIndex = current;
                current++;
            }
        }
        else {
            // Shift move
            let current = from;
            let stop = to;
            while (current > stop) {
                current--;
                array[current + rowsToMove.length] = array[current];
                array[current + rowsToMove.length].physicalIndex = current + rowsToMove.length;
            }
            // Paste
            let j = 0;
            while (current < to + rowsToMove.length) {
                array[current] = rowsToMove[j++];
                array[current].physicalIndex = current;
                current++;
            }
        }
        this.orderChanged.emit({ data: this.rows[from].data, from: from, to: to });
        this.buildVisualRows();
    }
}
DataTableComponent.ɵfac = function DataTableComponent_Factory(t) { return new (t || DataTableComponent)(); };
DataTableComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: DataTableComponent, selectors: [["csps-data-table"]], viewQuery: function DataTableComponent_Query(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_3__["VirtualScrollerComponent"], true);
    } if (rf & 2) {
        var _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.virtualScroller = _t.first);
    } }, inputs: { settings: "settings" }, outputs: { orderChanged: "orderChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 15, consts: [[1, "row", "no-gutters", "toolbar", 3, "ngClass"], ["class", "col py-2 px-3", 4, "ngIf"], ["class", "col-auto py-2 mx-1", 4, "ngFor", "ngForOf"], [3, "items"], ["scroll", ""], [1, "table", "table-sm", "table-hover"], [1, "header", "bg-primary"], ["header", ""], ["class", "small text-center fit px-4", 4, "ngIf"], ["class", "small text-center", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDisabled", "cdkDropListSortPredicate", "cdkDropListDropped"], ["container", ""], ["cdkDrag", "", 3, "cdkDragData", 4, "ngFor", "ngForOf"], [1, "col", "py-2", "px-3"], ["type", "button", "class", "btn btn-sm btn-link white-text", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-sm", "btn-link", "white-text", 3, "click"], [1, "col-auto", "py-2", "mx-1"], ["type", "button", "class", "btn btn-sm", 3, "ngClass", "click", 4, "ngIf"], ["class", "btn-group", 4, "ngIf"], ["class", "input-group", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", 3, "ngClass", "click"], [3, "icon", "fixedWidth"], [1, "btn-group"], ["ngbDropdown", "", "placement", "bottom-right", 1, "btn-group"], ["ngbDropdownToggle", "", 1, "btn", "btn-sm", "dropdown-toggle-split", 3, "ngClass"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 3, "click"], [1, "input-group"], ["type", "search", "placeholder", "Search...", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "input"], [1, "input-group-append"], [1, "small", "text-center", "fit", "px-4"], [1, "pointer", 3, "ngClass", "icon", "fixedWidth", "click"], [3, "icon", "fixedWidth", "ngClass"], [1, "small", "text-center"], ["class", "w-100 text-center", "type", "search", 3, "ngModel", "input", 4, "ngIf"], ["class", "d-inline-block", "ngbDropdown", "", "autoClose", "outside", 4, "ngIf"], ["type", "search", 1, "w-100", "text-center", 3, "ngModel", "input"], ["ngbDropdown", "", "autoClose", "outside", 1, "d-inline-block"], ["myDrop", "ngbDropdown"], ["type", "search", "readonly", "", "ngbDropdownAnchor", "", 1, "w-100", "text-center", 3, "ngModel", "focus"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownManual"], ["ngbDropdownItem", "", 1, "small", 3, "click"], ["class", "pointer", 3, "icon", "fixedWidth", 4, "ngIf"], [1, "dropdown-divider"], [1, "overflow-auto", 2, "max-height", "250px"], ["class", "small", "ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "pointer", 3, "icon", "fixedWidth"], ["cdkDrag", "", 3, "cdkDragData"], ["class", "small text-center", 4, "ngIf"], ["cdkDragHandle", "", 3, "icon", "fixedWidth"], [3, "icon", "fixedWidth", "ngClass", "click"], [3, "ngClass", "click"]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, DataTableComponent_div_1_Template, 1, 0, "div", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, DataTableComponent_div_2_Template, 2, 1, "div", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, DataTableComponent_div_3_Template, 7, 6, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "virtual-scroller", 3, 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "table", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "thead", 6, 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(9, "tr");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(10, DataTableComponent_th_10_Template, 1, 0, "th", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(11, DataTableComponent_th_11_Template, 4, 15, "th", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(12, DataTableComponent_th_12_Template, 2, 1, "th", 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(13, DataTableComponent_tr_13_Template, 4, 3, "tr", 10);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(14, "tbody", 11, 12);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("cdkDropListDropped", function DataTableComponent_Template_tbody_cdkDropListDropped_14_listener($event) { return ctx.drop($event); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(16, DataTableComponent_tr_16_Template, 4, 4, "tr", 13);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        const _r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(13, _c3, ctx.anySelected));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx.anySelected);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.anySelected);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.toolbar.right);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("items", ctx.filteredRows);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.draggableRows);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.expandableRows || ctx.selectableRows || ctx.errors);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.columns);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.showFilterRow);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("cdkDropListData", ctx.filteredRows)("cdkDropListDisabled", !ctx.draggableRows)("cdkDropListSortPredicate", ctx.sortPredicate);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", _r3.viewPortItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_3__["VirtualScrollerComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["CdkDropList"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownAnchor"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["CdkDragHandle"]], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}virtual-scroller[_ngcontent-%COMP%]{width:100%;height:100%}.header[_ngcontent-%COMP%]{color:#fff;background-color:#0080b6;border-color:#0080b6}.table[_ngcontent-%COMP%]   td.fit[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.fit[_ngcontent-%COMP%]{white-space:nowrap;width:1%}.arrowed[_ngcontent-%COMP%]{background-color:#00b7a8}.arrowed[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:first-child:before{top:100%;left:56px;border:6px solid rgba(255,0,0,0);content:\" \";height:0;width:0;position:absolute;pointer-events:none;border-top-color:#00b7a8;margin-left:-14px;z-index:2}[cdkDragHandle][_ngcontent-%COMP%]{cursor:move}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform 250ms cubic-bezier(0,0,.2,1)}"] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DataTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'csps-data-table',
                templateUrl: './data-table.component.html',
                styleUrls: ['./data-table.component.css']
            }]
    }], function () { return []; }, { virtualScroller: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_3__["VirtualScrollerComponent"]]
        }], settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orderChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();

class DataTableModule {
}
DataTableModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: DataTableModule });
DataTableModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function DataTableModule_Factory(t) { return new (t || DataTableModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
            ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_3__["VirtualScrollerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"],
            // cdk
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(DataTableModule, { declarations: [DataTableComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
        ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_3__["VirtualScrollerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"],
        // cdk
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"]], exports: [DataTableComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DataTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DataTableComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                    ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_3__["VirtualScrollerModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"],
                    // cdk
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"]
                ],
                exports: [DataTableComponent]
            }]
    }], null, null); })();

class DataTableSettings {
    constructor() {
        this.groupBy = [];
    }
}

class DataTableColumnDefinition {
    constructor() {
        this.visible = true;
        this.searchable = true;
        this.filterMode = 'none';
    }
}

class DataTableColumn {
    constructor() {
        // Indicates whether the column is visible or not
        this.visible = true;
        // Indicates whether the column data can be searchable
        this.searchable = true;
        // The type of filter for the column
        // select: show a dropdown with a list of all values in the column
        // numeric: show an option form to filter based on typical numeric comparison: greater than, less than,...
        // text: free field text
        // none: the column cannot be filtered
        this.filterMode = 'none';
        // The filter status
        this.filterStatus = 'all';
    }
}

class DataTableRow {
}

class DataTableToolbar {
}

class DataTableToolbarControl {
}

class DataGroupBy {
}

/*
 * Public API Surface of data-table
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=data-table.js.map


/***/ }),

/***/ "./dist/dynamic-form/fesm2015/dynamic-form.js":
/*!****************************************************!*\
  !*** ./dist/dynamic-form/fesm2015/dynamic-form.js ***!
  \****************************************************/
/*! exports provided: CustomValidators, DynamicFieldDirective, DynamicFormModalLinkDirective, DynamicFormModule, DynamicFormNotificationModalLinkDirective, DynamicFormService, DynamicFormTableModalLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFieldDirective", function() { return DynamicFieldDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormModalLinkDirective", function() { return DynamicFormModalLinkDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormModule", function() { return DynamicFormModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormNotificationModalLinkDirective", function() { return DynamicFormNotificationModalLinkDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormService", function() { return DynamicFormService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormTableModalLinkDirective", function() { return DynamicFormTableModalLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");








function FormInputComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "label", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + ctx_r0.config.labelSize);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r0.config.label);
} }
function FormInputComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("innerHTML", ctx_r1.config.prepend, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FormInputComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("innerHTML", ctx_r2.config.append, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class FormInputComponent {
}
FormInputComponent.ɵfac = function FormInputComponent_Factory(t) { return new (t || FormInputComponent)(); };
FormInputComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: FormInputComponent, selectors: [["form-input"]], decls: 9, vars: 10, consts: [[1, "dynamic-field", "row", 3, "formGroup"], ["class", "col-form-label", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "input-group", "input-group-sm"], ["class", "input-group-prepend", 4, "ngIf"], ["type", "text", 1, "form-control", 3, "formControlName", "ngbTypeahead", "inputFormatter", "resultFormatter"], ["class", "input-group-append", 4, "ngIf"], [1, "invalid-feedback"], [1, "col-form-label", 3, "ngClass"], [1, "input-group-prepend"], [1, "input-group-text", 3, "innerHTML"], [1, "input-group-append"]], template: function FormInputComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FormInputComponent_label_1_Template, 2, 2, "label", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FormInputComponent_div_4_Template, 2, 1, "div", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(5, "input", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FormInputComponent_div_6_Template, 2, 1, "div", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "div", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(8, "Invalid message!");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.group);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.labelSize !== 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + (12 - (ctx.config.labelSize || 0)));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.prepend);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formControlName", ctx.config.name)("ngbTypeahead", ctx.config.typeAhead)("inputFormatter", ctx.config.formatter)("resultFormatter", ctx.config.formatter);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("placeholder", ctx.config.placeholder);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.append);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [""] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(FormInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'form-input',
                templateUrl: 'form-input.component.html',
                styleUrls: ['form-input.component.css']
            }]
    }], null, null); })();

function FormNumberComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "label", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + ctx_r0.config.labelSize);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r0.config.label);
} }
function FormNumberComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("innerHTML", ctx_r1.config.prepend, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FormNumberComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("innerHTML", ctx_r2.config.append, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class FormNumberComponent {
}
FormNumberComponent.ɵfac = function FormNumberComponent_Factory(t) { return new (t || FormNumberComponent)(); };
FormNumberComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: FormNumberComponent, selectors: [["form-number"]], decls: 9, vars: 10, consts: [[1, "dynamic-field", "row", 3, "formGroup"], ["class", "col-form-label", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "input-group", "input-group-sm"], ["class", "input-group-prepend", 4, "ngIf"], ["type", "number", 1, "form-control", 3, "formControlName", "ngbTypeahead", "inputFormatter", "resultFormatter"], ["class", "input-group-append", 4, "ngIf"], [1, "invalid-feedback"], [1, "col-form-label", 3, "ngClass"], [1, "input-group-prepend"], [1, "input-group-text", 3, "innerHTML"], [1, "input-group-append"]], template: function FormNumberComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FormNumberComponent_label_1_Template, 2, 2, "label", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FormNumberComponent_div_4_Template, 2, 1, "div", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(5, "input", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FormNumberComponent_div_6_Template, 2, 1, "div", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "div", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(8, "Invalid message!");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.group);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.labelSize !== 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + (12 - (ctx.config.labelSize || 0)));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.prepend);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formControlName", ctx.config.name)("ngbTypeahead", ctx.config.typeAhead)("inputFormatter", ctx.config.formatter)("resultFormatter", ctx.config.formatter);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("placeholder", ctx.config.placeholder);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.append);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [""] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(FormNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'form-number',
                templateUrl: './form-number.component.html',
                styleUrls: ['./form-number.component.css']
            }]
    }], null, null); })();

function FormSelectComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "label", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + ctx_r0.config.labelSize);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r0.config.label);
} }
function FormSelectComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "span", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("innerHTML", ctx_r1.config.prepend, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FormSelectComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "option", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngValue", undefined);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r2.config.placeholder);
} }
function FormSelectComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "option", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngValue", option_r5.key);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", option_r5.value, " ");
} }
function FormSelectComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "span", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("innerHTML", ctx_r4.config.append, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class FormSelectComponent {
    ngOnInit() {
        const sorter = {
            asc: (a, b) => { return a.value === b.value ? 0 : (a.value > b.value ? 1 : -1); },
            desc: (a, b) => { return a.value === b.value ? 0 : (a.value < b.value ? 1 : -1); },
            none: undefined
        };
        this.config.sortOptions = this.config.sortOptions || 'none';
        if (this.config.options)
            this.options = this.config.options.sort(sorter[this.config.sortOptions]);
        else
            this.options = [];
    }
}
FormSelectComponent.ɵfac = function FormSelectComponent_Factory(t) { return new (t || FormSelectComponent)(); };
FormSelectComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: FormSelectComponent, selectors: [["form-select"]], decls: 9, vars: 8, consts: [[1, "dynamic-field", "row", 3, "formGroup"], ["class", "col-form-label", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "input-group", "input-group-sm"], ["class", "input-group-prepend", 4, "ngIf"], [1, "form-control", 3, "formControlName"], [3, "ngValue", 4, "ngIf"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "input-group-append", 4, "ngIf"], [1, "col-form-label", 3, "ngClass"], [1, "input-group-prepend"], [1, "input-group-text", 3, "innerHTML"], [3, "ngValue"], [1, "input-group-append"]], template: function FormSelectComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FormSelectComponent_label_1_Template, 2, 2, "label", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FormSelectComponent_div_4_Template, 2, 1, "div", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "select", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FormSelectComponent_option_6_Template, 2, 2, "option", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, FormSelectComponent_option_7_Template, 2, 2, "option", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(8, FormSelectComponent_div_8_Template, 2, 1, "div", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.group);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.labelSize !== 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + (12 - (ctx.config.labelSize || 0)));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.prepend);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formControlName", ctx.config.name);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.placeholder);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.options);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.append);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [""] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(FormSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'form-select',
                templateUrl: 'form-select.component.html',
                styleUrls: ['form-select.component.css']
            }]
    }], null, null); })();

function FormCheckboxComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "label", 6);
} if (rf & 2) {
    const ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + ctx_r0.config.labelSize);
} }
class FormCheckboxComponent {
}
FormCheckboxComponent.ɵfac = function FormCheckboxComponent_Factory(t) { return new (t || FormCheckboxComponent)(); };
FormCheckboxComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: FormCheckboxComponent, selectors: [["form-checkbox"]], decls: 7, vars: 7, consts: [[1, "dynamic-field", "row", 3, "formGroup"], ["class", "col-form-label", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "id", "formControlName"], [1, "form-check-label", 3, "for"], [1, "col-form-label", 3, "ngClass"]], template: function FormCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FormCheckboxComponent_label_1_Template, 1, 1, "label", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(4, "input", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "label", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.group);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.labelSize !== 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + (12 - (ctx.config.labelSize || 0)));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("id", ctx.config.name)("formControlName", ctx.config.name);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("for", ctx.config.name);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx.config.label, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [""] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(FormCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'form-checkbox',
                templateUrl: './form-checkbox.component.html',
                styleUrls: ['./form-checkbox.component.css']
            }]
    }], null, null); })();

function FormCheckboxListComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "label", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + ctx_r0.config.labelSize);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r0.config.label);
} }
function FormCheckboxListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "input", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "label", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const cb_r2 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("id", cb_r2.name)("formControlName", cb_r2.name);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("for", cb_r2.name);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", cb_r2.name, " ");
} }
class FormCheckboxListComponent {
    constructor() { }
}
FormCheckboxListComponent.ɵfac = function FormCheckboxListComponent_Factory(t) { return new (t || FormCheckboxListComponent)(); };
FormCheckboxListComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: FormCheckboxListComponent, selectors: [["csps-form-checkbox-list"]], decls: 4, vars: 4, consts: [[1, "dynamic-field", "row", 3, "formGroup"], ["class", "col-form-label", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "col-form-label", 3, "ngClass"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "id", "formControlName"], [1, "form-check-label", 3, "for"]], template: function FormCheckboxListComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FormCheckboxListComponent_label_1_Template, 2, 2, "label", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, FormCheckboxListComponent_div_3_Template, 4, 4, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.group);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.labelSize !== 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + (12 - (ctx.config.labelSize || 0)));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.config.checkboxes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [""] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(FormCheckboxListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'csps-form-checkbox-list',
                templateUrl: './form-checkbox-list.component.html',
                styleUrls: ['./form-checkbox-list.component.css']
            }]
    }], function () { return []; }, null); })();

class FileValueAccessor {
    constructor() {
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    writeValue(value) { }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
}
FileValueAccessor.ɵfac = function FileValueAccessor_Factory(t) { return new (t || FileValueAccessor)(); };
FileValueAccessor.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: FileValueAccessor, selectors: [["input", "type", "file"]], hostBindings: function FileValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("change", function FileValueAccessor_change_HostBindingHandler($event) { return ctx.onChange($event.target.files[0]); })("blur", function FileValueAccessor_blur_HostBindingHandler() { return ctx.onTouched(); });
    } }, features: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"])([
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: FileValueAccessor, multi: true }
        ])] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(FileValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "input[type=file]",
                host: {
                    "(change)": "onChange($event.target.files[0])",
                    "(blur)": "onTouched()"
                },
                providers: [
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: FileValueAccessor, multi: true }
                ]
            }]
    }], null, null); })();

function FormFileComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "label", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + ctx_r0.config.labelSize);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r0.config.label);
} }
class FormFileComponent {
    constructor() {
        this.label = "Choose file";
    }
    onFileChange($event) {
        if ($event.target && $event.target.files) {
            let file = $event.target.files[0];
            this.label = file ? file.name : 'Choose file';
        }
        else {
            this.label = 'Choose file';
        }
    }
}
FormFileComponent.ɵfac = function FormFileComponent_Factory(t) { return new (t || FormFileComponent)(); };
FormFileComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: FormFileComponent, selectors: [["form-file"]], decls: 9, vars: 5, consts: [[1, "dynamic-field", "row", 3, "formGroup"], ["class", "col-form-label", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "custom-file", "input-group-sm"], ["type", "file", "id", "customFile", 1, "custom-file-input", "cursor-pointer", 3, "formControlName", "change"], ["for", "customFile", 1, "custom-file-label"], [1, "invalid-feedback"], [1, "col-form-label", 3, "ngClass"]], template: function FormFileComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FormFileComponent_label_1_Template, 2, 2, "label", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "input", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("change", function FormFileComponent_Template_input_change_4_listener($event) { return ctx.onFileChange($event); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "label", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "div", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(8, "Invalid message!");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.group);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.labelSize !== 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + (12 - (ctx.config.labelSize || 0)));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formControlName", ctx.config.name);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx.label);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], FileValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [""] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(FormFileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'form-file',
                templateUrl: './form-file.component.html',
                styleUrls: ['./form-file.component.css']
            }]
    }], null, null); })();

function FormStaticComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "label", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + ctx_r0.config.labelSize);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r0.config.label);
} }
class FormStaticComponent {
}
FormStaticComponent.ɵfac = function FormStaticComponent_Factory(t) { return new (t || FormStaticComponent)(); };
FormStaticComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: FormStaticComponent, selectors: [["form-static"]], decls: 4, vars: 4, consts: [[1, "dynamic-field", "row", 3, "formGroup"], ["class", "col-form-label", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["type", "text", "readonly", "", 1, "form-control-plaintext", "form-control-sm", 3, "formControlName"], [1, "col-form-label", 3, "ngClass"]], template: function FormStaticComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FormStaticComponent_label_1_Template, 2, 2, "label", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "input", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.group);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.labelSize !== 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + (12 - (ctx.config.labelSize || 0)));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formControlName", ctx.config.name);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [""] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(FormStaticComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'form-static',
                templateUrl: 'form-static.component.html',
                styleUrls: ['form-static.component.css']
            }]
    }], null, null); })();

function FormStaticAreaComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "label", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + ctx_r0.config.labelSize);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r0.config.label);
} }
class FormStaticAreaComponent {
}
FormStaticAreaComponent.ɵfac = function FormStaticAreaComponent_Factory(t) { return new (t || FormStaticAreaComponent)(); };
FormStaticAreaComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: FormStaticAreaComponent, selectors: [["csps-form-static-area"]], decls: 4, vars: 4, consts: [[1, "dynamic-field", "row", 3, "formGroup"], ["class", "col-form-label", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["readonly", "", 1, "form-control-plaintext", "form-control-sm", 3, "formControlName"], [1, "col-form-label", 3, "ngClass"]], template: function FormStaticAreaComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FormStaticAreaComponent_label_1_Template, 2, 2, "label", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "textarea", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.group);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.labelSize !== 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + (12 - (ctx.config.labelSize || 0)));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formControlName", ctx.config.name);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [""] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(FormStaticAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'csps-form-static-area',
                templateUrl: './form-static-area.component.html',
                styleUrls: ['./form-static-area.component.css']
            }]
    }], null, null); })();

function FormDateComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "label", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + ctx_r0.config.labelSize);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r0.config.label);
} }
function FormDateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("innerHTML", ctx_r1.config.prepend, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FormDateComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("innerHTML", ctx_r2.config.append, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class FormDateComponent {
}
FormDateComponent.ɵfac = function FormDateComponent_Factory(t) { return new (t || FormDateComponent)(); };
FormDateComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: FormDateComponent, selectors: [["csps-form-date"]], decls: 9, vars: 6, consts: [[1, "dynamic-field", "row", 3, "formGroup"], ["class", "col-form-label", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "input-group", "input-group-sm"], ["class", "input-group-prepend", 4, "ngIf"], ["type", "datetime-local", 1, "form-control", 3, "formControlName"], ["class", "input-group-append", 4, "ngIf"], [1, "invalid-feedback"], [1, "col-form-label", 3, "ngClass"], [1, "input-group-prepend"], [1, "input-group-text", 3, "innerHTML"], [1, "input-group-append"]], template: function FormDateComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FormDateComponent_label_1_Template, 2, 2, "label", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FormDateComponent_div_4_Template, 2, 1, "div", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(5, "input", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FormDateComponent_div_6_Template, 2, 1, "div", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "div", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(8, "Invalid message!");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.group);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.labelSize !== 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + (12 - (ctx.config.labelSize || 0)));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.prepend);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formControlName", ctx.config.name);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.append);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [""] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(FormDateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'csps-form-date',
                templateUrl: './form-date.component.html',
                styleUrls: ['./form-date.component.css']
            }]
    }], null, null); })();

function FormAreaComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "label", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + ctx_r0.config.labelSize);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r0.config.label);
} }
function FormAreaComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "span", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("innerHTML", ctx_r1.config.prepend, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FormAreaComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "span", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("innerHTML", ctx_r2.config.append, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class FormAreaComponent {
}
FormAreaComponent.ɵfac = function FormAreaComponent_Factory(t) { return new (t || FormAreaComponent)(); };
FormAreaComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: FormAreaComponent, selectors: [["form-area"]], decls: 7, vars: 7, consts: [[1, "dynamic-field", "row", 3, "formGroup"], ["class", "col-form-label", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "input-group", "input-group-sm"], ["class", "input-group-prepend", 4, "ngIf"], [1, "form-control", 3, "formControlName"], ["class", "input-group-append", 4, "ngIf"], [1, "col-form-label", 3, "ngClass"], [1, "input-group-prepend"], [1, "input-group-text", 3, "innerHTML"], [1, "input-group-append"]], template: function FormAreaComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FormAreaComponent_label_1_Template, 2, 2, "label", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FormAreaComponent_div_4_Template, 2, 1, "div", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(5, "textarea", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FormAreaComponent_div_6_Template, 2, 1, "div", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.group);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.labelSize !== 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", "col-" + (12 - (ctx.config.labelSize || 0)));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.prepend);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formControlName", ctx.config.name);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("placeholder", ctx.config.placeholder);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.append);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [""] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(FormAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'form-area',
                templateUrl: './form-area.component.html',
                styleUrls: ['./form-area.component.css']
            }]
    }], null, null); })();

class FormButtonComponent {
}
FormButtonComponent.ɵfac = function FormButtonComponent_Factory(t) { return new (t || FormButtonComponent)(); };
FormButtonComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: FormButtonComponent, selectors: [["form-button"]], decls: 3, vars: 3, consts: [[1, "dynamic-field", "form-button", 3, "formGroup"], ["type", "submit", 3, "disabled"]], template: function FormButtonComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "button", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.group);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("disabled", ctx.config.disabled);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx.config.label, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]], styles: [""] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(FormButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'form-button',
                templateUrl: 'form-button.component.html',
                styleUrls: ['form-button.component.css'],
            }]
    }], null, null); })();

const components = {
    input: FormInputComponent,
    number: FormNumberComponent,
    select: FormSelectComponent,
    checkbox: FormCheckboxComponent,
    checkboxList: FormCheckboxListComponent,
    file: FormFileComponent,
    static: FormStaticComponent,
    staticArea: FormStaticAreaComponent,
    date: FormDateComponent,
    area: FormAreaComponent,
    button: FormButtonComponent
};
class DynamicFieldDirective {
    constructor(resolver, container) {
        this.resolver = resolver;
        this.container = container;
        this.defaultTypeAhead = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(term => []));
        this.defaultFormatter = (x) => x;
    }
    ngOnInit() {
        if (!components[this.config.type]) {
            const supportedTypes = Object.keys(components).join(', ');
            throw new Error(`Trying to use an unsupported type (${this.config.type}). Supported types: ${supportedTypes}`);
        }
        const component = this.resolver.resolveComponentFactory(components[this.config.type]);
        this.component = this.container.createComponent(component);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    }
    ngOnChanges() {
        this.config.typeAhead = this.config.typeAhead || this.defaultTypeAhead;
        this.config.formatter = this.config.formatter || this.defaultFormatter;
        this.config.labelSize = this.config.labelSize != undefined ? this.config.labelSize : 2;
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
        }
    }
}
DynamicFieldDirective.ɵfac = function DynamicFieldDirective_Factory(t) { return new (t || DynamicFieldDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
DynamicFieldDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: DynamicFieldDirective, selectors: [["", "dynamicField", ""]], inputs: { config: "config", group: "group" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DynamicFieldDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[dynamicField]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

function DynamicFormComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0, 2);
} if (rf & 2) {
    const field_r1 = ctx.$implicit;
    const ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("config", field_r1)("group", ctx_r0.form);
} }
class DynamicFormComponent {
    constructor(fb, cdr) {
        this.fb = fb;
        this.cdr = cdr;
        this.config = [];
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get controls() { return this.config.filter(({ type }) => type !== 'button'); }
    get changes() { return this.form.valueChanges; }
    get valid() { return this.form.valid; }
    get value() { return this.form.value; }
    ngOnInit() {
        this.form = this.createGroup();
    }
    ngOnChanges() {
        if (this.form) {
            const controls = Object.keys(this.form.controls);
            const configControls = this.controls.map((item) => item.name);
            controls
                .filter((control) => !configControls.includes(control))
                .forEach((control) => this.form.removeControl(control));
            configControls
                .filter((control) => !controls.includes(control))
                .forEach((name) => {
                const config = this.config.find((control) => control.name === name);
                if (config)
                    this.form.addControl(name, this.createControl(config));
            });
        }
    }
    createGroup() {
        const group = this.fb.group({});
        this.controls.forEach(control => {
            if (control.type === 'checkboxList' && control.checkboxes)
                control.checkboxes.forEach(x => { group.addControl(x.name, this.createControl(x)); });
            else
                group.addControl(control.name, this.createControl(control));
        });
        return group;
    }
    createControl(config) {
        const { disabled, validation, value } = config;
        return this.fb.control({ disabled, value }, validation);
    }
    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.value);
    }
    setDisabled(name, disable) {
        if (this.form.controls[name]) {
            const method = disable ? 'disable' : 'enable';
            this.form.controls[name][method]();
            this.cdr.detectChanges();
            return;
        }
        this.config = this.config.map((item) => {
            if (item.name === name) {
                item.disabled = disable;
            }
            this.cdr.detectChanges();
            return item;
        });
    }
    setValue(name, value) {
        this.form.controls[name].setValue(value, { emitEvent: true });
        this.cdr.detectChanges();
    }
}
DynamicFormComponent.ɵfac = function DynamicFormComponent_Factory(t) { return new (t || DynamicFormComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DynamicFormComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: DynamicFormComponent, selectors: [["dynamic-form"]], inputs: { config: "config" }, outputs: { submit: "submit" }, exportAs: ["dynamicForm"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [["novalidate", "", 1, "dynamic-form", "needs-validation", 3, "formGroup", "submit"], ["dynamicField", "", 3, "config", "group", 4, "ngFor", "ngForOf"], ["dynamicField", "", 3, "config", "group"]], template: function DynamicFormComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "form", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("submit", function DynamicFormComponent_Template_form_submit_0_listener($event) { return ctx.handleSubmit($event); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, DynamicFormComponent_ng_container_1_Template, 1, 2, "ng-container", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.form);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.config);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], DynamicFieldDirective], styles: [""] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DynamicFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                exportAs: 'dynamicForm',
                selector: 'dynamic-form',
                templateUrl: 'dynamic-form.component.html',
                styleUrls: ['dynamic-form.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();

function DynamicFormModalComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DynamicFormModalComponent_button_11_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r5); const b_r3 = ctx.$implicit; const ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r4.dismissForm(b_r3.reason); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const b_r3 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("disabled", b_r3.disabled);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(b_r3.label);
} }
function DynamicFormModalComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DynamicFormModalComponent_button_12_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r7); const ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r6.dismissForm("Close button"); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r2.config.closeText);
} }
class DynamicFormModalComponent {
    constructor() {
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dismissed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.config.labelSize != null) // Need to catch null or undefined, hence using != and not !==
            this.config.fields.forEach(x => x.labelSize = this.config.labelSize);
    }
    ngOnChanges() {
        if (this.config.labelSize != null) // Need to catch null or undefined, hence using != and not !==
            this.config.fields.forEach(x => x.labelSize = this.config.labelSize);
    }
    ngAfterViewInit() {
        let previousValid = this.form.valid;
        this.form.changes.subscribe(() => {
            if (this.form.valid !== previousValid) {
                previousValid = this.form.valid;
                this.form.setDisabled('submit', !previousValid);
            }
        });
    }
    submitForm(method) {
        this.submitted.emit(this.form.value);
    }
    dismissForm(method) {
        this.dismissed.emit(method);
    }
}
DynamicFormModalComponent.ɵfac = function DynamicFormModalComponent_Factory(t) { return new (t || DynamicFormModalComponent)(); };
DynamicFormModalComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: DynamicFormModalComponent, selectors: [["csps-dynamic-form-modal"]], viewQuery: function DynamicFormModalComponent_Query(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(DynamicFormComponent, true);
    } if (rf & 2) {
        var _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.form = _t.first);
    } }, inputs: { config: "config" }, outputs: { submitted: "submitted", dismissed: "dismissed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 6, consts: [[1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "config", "submit"], ["form", "dynamicForm"], [1, "modal-footer"], ["type", "button", "class", "btn btn-secondary", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function DynamicFormModalComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "h5", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "button", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DynamicFormModalComponent_Template_button_click_4_listener() { return ctx.dismissForm("Cross click"); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "span", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(6, "\u00D7");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "div", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(8, "dynamic-form", 6, 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("submit", function DynamicFormModalComponent_Template_dynamic_form_submit_8_listener($event) { return ctx.submitForm($event); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(10, "div", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(11, DynamicFormModalComponent_button_11_Template, 2, 2, "button", 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(12, DynamicFormModalComponent_button_12_Template, 2, 1, "button", 10);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(13, "button", 11);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DynamicFormModalComponent_Template_button_click_13_listener() { return ctx.submitForm("OK"); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(14);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        const _r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx.config.headerText);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("config", ctx.config.fields);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.config.extraButtons);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx.config.hideCloseButton);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("disabled", !_r0.valid);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx.config.submitText);
    } }, directives: [DynamicFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [""] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DynamicFormModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'csps-dynamic-form-modal',
                templateUrl: './dynamic-form-modal.component.html',
                styleUrls: ['./dynamic-form-modal.component.css']
            }]
    }], null, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [DynamicFormComponent]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dismissed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();

function DynamicFormTableComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "th", 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const field_r5 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(field_r5.label);
} }
function DynamicFormTableComponent_tr_11_td_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "td", 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(1, 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const field_r10 = ctx.$implicit;
    const rowIndex_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().index;
    const ctx_r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("config", field_r10)("group", ctx_r8.rows.controls[rowIndex_r7]);
} }
function DynamicFormTableComponent_tr_11_fa_icon_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "fa-icon", 18, 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("mouseover", function DynamicFormTableComponent_tr_11_fa_icon_5_Template_fa_icon_mouseover_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r14); const _r12 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(1); const row_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit; const ctx_r13 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r13.toggleErrorTooltip(_r12, row_r6); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    const _r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(26);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx_r9.faExclamationTriangle)("ngbTooltip", _r3);
} }
function DynamicFormTableComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "tr", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "td", 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, DynamicFormTableComponent_tr_11_td_3_Template, 2, 2, "td", 2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "td", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, DynamicFormTableComponent_tr_11_fa_icon_5_Template, 2, 2, "fa-icon", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "td", 16);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "fa-icon", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DynamicFormTableComponent_tr_11_Template_fa_icon_click_7_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r17); const rowIndex_r7 = ctx.index; const ctx_r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r16.deleteRow(rowIndex_r7); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const rowIndex_r7 = ctx.index;
    const ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroupName", rowIndex_r7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(rowIndex_r7 + 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r1.config);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !row_r6.valid);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx_r1.faTimes);
} }
function DynamicFormTableComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "td", 1);
} }
function DynamicFormTableComponent_ng_template_25_div_0_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const e_r21 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(e_r21);
} }
function DynamicFormTableComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, DynamicFormTableComponent_ng_template_25_div_0_Template, 2, 1, "div", 20);
} if (rf & 2) {
    const errors_r19 = ctx.errors;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", errors_r19);
} }
class DynamicFormTableComponent {
    constructor(fb, cdr) {
        this.fb = fb;
        this.cdr = cdr;
        this.config = [];
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Icons
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrash"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlus"];
        this.faExclamationTriangle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faExclamationTriangle"];
        this.pastedText = '';
    }
    get controls() { return this.config.filter(({ type }) => type !== 'button'); }
    get changes() { return this.form.valueChanges; }
    get valid() { return this.form.valid; }
    get value() { return this.form.value; }
    get rows() {
        return this.form.get('rows');
    }
    ngOnInit() {
        this.form = this.createGroup();
    }
    createGroup() {
        // Extract default values
        const defaultValues = this.config.reduce((acc, x) => { acc[x.name] = x.value; return acc; }, {});
        const group = this.fb.group({
            rows: this.fb.array([this.createRowControls(defaultValues)])
        });
        return group;
    }
    createRowControls(rowValues) {
        const row = this.fb.group({});
        this.controls.forEach((control, i) => row.addControl(control.name, this.createControl(control, rowValues[control.name])));
        return row;
    }
    createControl(config, rowValue) {
        config.value = rowValue;
        const { disabled, validation, value } = config;
        return this.fb.control({ disabled, value }, validation);
    }
    addRow() {
        this.rows.push(this.createRowControls({}));
    }
    deleteRow(index) {
        this.rows.removeAt(index);
    }
    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.value);
    }
    setDisabled(name, disable) {
        if (this.form.controls[name]) {
            const method = disable ? 'disable' : 'enable';
            this.form.controls[name][method]();
            this.cdr.detectChanges();
            return;
        }
        this.config = this.config.map((item) => {
            if (item.name === name) {
                item.disabled = disable;
            }
            this.cdr.detectChanges();
            return item;
        });
    }
    setValue(name, value) {
        this.form.controls[name].setValue(value, { emitEvent: true });
        this.cdr.detectChanges();
    }
    getErrors(row) {
        let errors = [];
        Object.keys(row.controls).forEach(x => {
            const abstractControl = row.get(x);
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                const ctrl = abstractControl;
                if (!ctrl.valid && ctrl.errors) {
                    errors.push(...Object.keys(ctrl.errors).map(y => (ctrl.errors || {})[y]));
                }
            }
        });
        return errors;
    }
    toggleErrorTooltip(tooltip, row) {
        if (tooltip.isOpen())
            tooltip.close();
        else
            tooltip.open({ errors: this.getErrors(row) });
    }
    processPaste(e) {
        // Retrieve the pasted data
        const pasted = e["clipboardData"] == null ? '' : e["clipboardData"].getData('text'); // TODO Cedric test for cross browser compatibility
        // Retrieve rows by splitting on line feeds
        let pastedRows = pasted.split('\r\n');
        // Remove last entry if empty
        if (pastedRows[pastedRows.length - 1] === '')
            pastedRows.splice(pastedRows.length - 1, 1);
        // Clear empty rows from form
        this.clearEmptyRows();
        // Loop through each rows and create objects
        pastedRows.forEach(r => {
            let row = {};
            // Retrieve values by splitting on columns
            const vals = r.split('\t');
            // Loop through fields
            this.config.forEach((f, i) => {
                // if lookup field
                if (f.type === 'select' && f.options) {
                    const opt = f.options.find(x => x.value === vals[i]);
                    row[f.name] = (opt || { key: null }).key;
                }
                // if date
                else if (f.type === 'date') {
                    row[f.name] = this.checkDateFormat(vals[i]) ? new Date(vals[i]) : null;
                }
                // if checkbox
                else if (f.type === 'checkbox') {
                    switch (vals[i].toString().toLowerCase()) {
                        case "true":
                        case "1":
                        case "on":
                        case "yes":
                            row[f.name] = true;
                            break;
                        default:
                            row[f.name] = false;
                            break;
                    }
                }
                else {
                    row[f.name] = vals[i];
                }
            });
            this.rows.push(this.createRowControls(row));
        });
        setTimeout(() => this.pastedText = "", 0);
    }
    clearEmptyRows() {
        const rawValues = this.rows.getRawValue();
        for (var i = rawValues.length - 1; i >= 0; i--) {
            if (Object.values(rawValues[i]).every(x => (x == null || x === '')))
                this.deleteRow(i);
            else
                return;
        }
    }
    checkDateFormat(dateString) {
        const dateRegEx = new RegExp("^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$");
        return dateRegEx.exec(dateString) !== null;
    }
}
DynamicFormTableComponent.ɵfac = function DynamicFormTableComponent_Factory(t) { return new (t || DynamicFormTableComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DynamicFormTableComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: DynamicFormTableComponent, selectors: [["dynamic-form-table"]], inputs: { config: "config" }, outputs: { submit: "submit" }, exportAs: ["dynamicFormTable"], decls: 27, vars: 7, consts: [[1, "table", "table-sm", "table-striped", 3, "formGroup"], [1, "text-center"], ["class", "text-center", 4, "ngFor", "ngForOf"], [3, "icon"], ["formArrayName", "rows"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "text-center", "pointer"], [3, "icon", "click"], [1, "row", "mt-5"], [1, "col"], [1, "row"], ["type", "text", "placeholder", "Right click here to paste", 1, "form-control", 3, "ngModel", "ngModelChange", "paste"], ["errorTipContent", ""], [3, "formGroupName"], [1, "text-center", "pt-2"], ["class", "red-text pointer", "placement", "top", "container", "body", 3, "icon", "ngbTooltip", "mouseover", 4, "ngIf"], [1, "text-center", "pt-2", "pointer"], ["dynamicField", "", 1, "form-control-sm", 3, "config", "group"], ["placement", "top", "container", "body", 1, "red-text", "pointer", 3, "icon", "ngbTooltip", "mouseover"], ["t", "ngbTooltip"], [4, "ngFor", "ngForOf"]], template: function DynamicFormTableComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "table", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "thead");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "tr");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "th", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(4, "#");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, DynamicFormTableComponent_th_5_Template, 2, 1, "th", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "th", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(7, "Error");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(8, "th", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(9, "fa-icon", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(10, "tbody", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(11, DynamicFormTableComponent_tr_11_Template, 8, 5, "tr", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(12, "tr");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(13, "td", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(14, "fa-icon", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DynamicFormTableComponent_Template_fa_icon_click_14_listener() { return ctx.addRow(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(15, DynamicFormTableComponent_td_15_Template, 1, 0, "td", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(16, "td", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(17, "td", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(18, "div", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(19, "div", 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(20, "strong");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(21, "To paste data from Excel, please use the space below. (Dates must be in the following format: YYYY-MM-DD) ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(22, "div", 10);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(23, "div", 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(24, "input", 11);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function DynamicFormTableComponent_Template_input_ngModelChange_24_listener($event) { return ctx.pastedText = $event; })("paste", function DynamicFormTableComponent_Template_input_paste_24_listener($event) { return ctx.processPaste($event); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(25, DynamicFormTableComponent_ng_template_25_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.form);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.config);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx.faTrash);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.rows.controls);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx.faPlus);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.config);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngModel", ctx.pastedText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], DynamicFieldDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltip"]], styles: [""] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DynamicFormTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                exportAs: 'dynamicFormTable',
                selector: 'dynamic-form-table',
                templateUrl: './dynamic-form-table.component.html',
                styleUrls: ['./dynamic-form-table.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();

function DynamicFormTableModalComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DynamicFormTableModalComponent_button_11_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r5); const b_r3 = ctx.$implicit; const ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r4.dismissForm(b_r3.reason); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const b_r3 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("disabled", b_r3.disabled);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(b_r3.label);
} }
function DynamicFormTableModalComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DynamicFormTableModalComponent_button_12_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r7); const ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r6.dismissForm("Close button"); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r2.config.closeText);
} }
class DynamicFormTableModalComponent {
    constructor() {
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dismissed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.config.fields.forEach(x => x.labelSize = 0);
    }
    ngOnChanges() {
        this.config.fields.forEach(x => x.labelSize = 0);
    }
    ngAfterViewInit() {
        let previousValid = this.form.valid;
        this.form.changes.subscribe(() => {
            if (this.form.valid !== previousValid) {
                previousValid = this.form.valid;
                this.form.setDisabled('submit', !previousValid);
            }
        });
    }
    submitForm(event) {
        this.submitted.emit(this.form.value);
    }
    dismissForm(method) {
        this.dismissed.emit(method);
    }
}
DynamicFormTableModalComponent.ɵfac = function DynamicFormTableModalComponent_Factory(t) { return new (t || DynamicFormTableModalComponent)(); };
DynamicFormTableModalComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: DynamicFormTableModalComponent, selectors: [["csps-dynamic-form-table-modal"]], viewQuery: function DynamicFormTableModalComponent_Query(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(DynamicFormTableComponent, true);
    } if (rf & 2) {
        var _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.form = _t.first);
    } }, inputs: { config: "config" }, outputs: { submitted: "submitted", dismissed: "dismissed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 6, consts: [[1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "config", "submit"], ["form", "dynamicFormTable"], [1, "modal-footer"], ["type", "button", "class", "btn btn-secondary", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function DynamicFormTableModalComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "h5", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "button", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DynamicFormTableModalComponent_Template_button_click_4_listener() { return ctx.dismissForm("Cross click"); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "span", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(6, "\u00D7");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "div", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(8, "dynamic-form-table", 6, 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("submit", function DynamicFormTableModalComponent_Template_dynamic_form_table_submit_8_listener($event) { return ctx.submitForm($event); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(10, "div", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(11, DynamicFormTableModalComponent_button_11_Template, 2, 2, "button", 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(12, DynamicFormTableModalComponent_button_12_Template, 2, 1, "button", 10);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(13, "button", 11);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DynamicFormTableModalComponent_Template_button_click_13_listener() { return ctx.submitForm("OK"); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(14);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        const _r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx.config.headerText);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("config", ctx.config.fields);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.config.extraButtons);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx.config.hideCloseButton);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("disabled", !_r0.valid);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx.config.submitText);
    } }, directives: [DynamicFormTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [""] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DynamicFormTableModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'csps-dynamic-form-table-modal',
                templateUrl: './dynamic-form-table-modal.component.html',
                styleUrls: ['./dynamic-form-table-modal.component.css']
            }]
    }], function () { return []; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [DynamicFormTableComponent]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dismissed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();

function DynamicFormNotificationModalComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "p", 11);
} if (rf & 2) {
    const notification_r3 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("innerHTML", notification_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DynamicFormNotificationModalComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DynamicFormNotificationModalComponent_button_10_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r6); const b_r4 = ctx.$implicit; const ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r5.dismissForm(b_r4.reason); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const b_r4 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("disabled", b_r4.disabled);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(b_r4.label);
} }
function DynamicFormNotificationModalComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DynamicFormNotificationModalComponent_button_11_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r8); const ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r7.dismissForm("Close button"); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r2.config.closeText);
} }
class DynamicFormNotificationModalComponent {
    constructor() {
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dismissed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    submitForm(method) {
        this.submitted.emit(method);
    }
    dismissForm(method) {
        this.dismissed.emit(method);
    }
}
DynamicFormNotificationModalComponent.ɵfac = function DynamicFormNotificationModalComponent_Factory(t) { return new (t || DynamicFormNotificationModalComponent)(); };
DynamicFormNotificationModalComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: DynamicFormNotificationModalComponent, selectors: [["csps-dynamic-form-notification-modal"]], inputs: { config: "config" }, outputs: { submitted: "submitted", dismissed: "dismissed" }, decls: 14, vars: 5, consts: [[1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "class", "btn btn-secondary", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "innerHTML"], ["type", "button", 1, "btn", "btn-secondary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function DynamicFormNotificationModalComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "h5", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "button", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DynamicFormNotificationModalComponent_Template_button_click_4_listener() { return ctx.dismissForm("Cross click"); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "span", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(6, "\u00D7");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "div", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(8, DynamicFormNotificationModalComponent_p_8_Template, 1, 1, "p", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(9, "div", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(10, DynamicFormNotificationModalComponent_button_10_Template, 2, 2, "button", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(11, DynamicFormNotificationModalComponent_button_11_Template, 2, 1, "button", 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(12, "button", 10);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DynamicFormNotificationModalComponent_Template_button_click_12_listener() { return ctx.submitForm("OK"); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(13);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx.config.headerText);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.config.notifications);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.config.extraButtons);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx.config.hideCloseButton);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx.config.submitText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["p[_ngcontent-%COMP%]{word-wrap:break-word}"] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DynamicFormNotificationModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'csps-dynamic-form-notification-modal',
                templateUrl: './dynamic-form-notification-modal.component.html',
                styleUrls: ['./dynamic-form-notification-modal.component.css']
            }]
    }], function () { return []; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dismissed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();

class DynamicFormService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    popDynamicFormModal(config) {
        config.size = config.size || 'lg'; // Default to large modal
        config.backdrop = config.backdrop || 'static'; // Default to static background
        config.windowClass = config.windowClass || '';
        const modalRef = this.modalService.open(DynamicFormModalComponent, { size: config.size, backdrop: config.backdrop, windowClass: config.windowClass });
        modalRef.componentInstance.config = config;
        modalRef.componentInstance.submitted.subscribe(($e) => {
            modalRef.close();
            if (config.onSubmit)
                config.onSubmit($e);
        });
        modalRef.componentInstance.dismissed.subscribe(($e) => {
            modalRef.close();
            if (config.onDismiss)
                config.onDismiss($e);
        });
    }
    popDynamicFormTableModal(config) {
        config.size = config.size || 'lg'; // Default to large modal
        config.backdrop = config.backdrop || 'static'; // Default to static background
        config.windowClass = config.windowClass || '';
        const modalRef = this.modalService.open(DynamicFormTableModalComponent, { size: config.size, backdrop: config.backdrop, windowClass: config.windowClass });
        modalRef.componentInstance.config = config;
        modalRef.componentInstance.submitted.subscribe(($e) => {
            modalRef.close();
            if (config.onSubmit)
                config.onSubmit($e);
        });
        modalRef.componentInstance.dismissed.subscribe(($e) => {
            modalRef.close();
            if (config.onDismiss)
                config.onDismiss($e);
        });
    }
    popNotification(config) {
        config.size = config.size || 'lg'; // Default to large modal
        config.backdrop = config.backdrop || 'static'; // Default to static background
        config.windowClass = config.windowClass || '';
        const modalRef = this.modalService.open(DynamicFormNotificationModalComponent, { size: config.size, backdrop: config.backdrop, windowClass: config.windowClass });
        modalRef.componentInstance.config = config;
        modalRef.componentInstance.submitted.subscribe(($e) => {
            modalRef.close();
            if (config.onSubmit)
                config.onSubmit($e);
        });
        modalRef.componentInstance.dismissed.subscribe(($e) => {
            modalRef.close();
            if (config.onDismiss)
                config.onDismiss($e);
        });
    }
    popModal(component, config) {
        config.size = config.size || 'lg'; // Default to large modal
        config.backdrop = config.backdrop || 'static'; // Default to static background
        config.windowClass = config.windowClass || '';
        const modalRef = this.modalService.open(component, { size: config.size, backdrop: config.backdrop, windowClass: config.windowClass });
        modalRef.componentInstance.config = config;
        modalRef.componentInstance.submitted.subscribe(($e) => {
            modalRef.close();
            if (config.onSubmit)
                config.onSubmit($e);
        });
        modalRef.componentInstance.dismissed.subscribe(($e) => {
            modalRef.close();
            if (config.onDismiss)
                config.onDismiss($e);
        });
    }
}
DynamicFormService.ɵfac = function DynamicFormService_Factory(t) { return new (t || DynamicFormService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"])); };
DynamicFormService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: DynamicFormService, factory: DynamicFormService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DynamicFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }]; }, null); })();

class DynamicFormModalLinkDirective {
    constructor(modalService) {
        this.modalService = modalService;
    }
    onClick() {
        this.instantiateModal();
    }
    instantiateModal() {
        this.config.size = this.config.size || 'lg'; // Default to large modal
        this.config.backdrop = this.config.backdrop || 'static'; // Default to static background
        this.config.windowClass = this.config.windowClass || '';
        this.modalRef = this.modalService.open(DynamicFormModalComponent, { size: this.config.size, backdrop: this.config.backdrop, windowClass: this.config.windowClass });
        this.modalRef.componentInstance.config = this.config;
        this.modalRef.componentInstance.submitted.subscribe(($e) => {
            this.submitModal($e);
        });
        this.modalRef.componentInstance.dismissed.subscribe(($e) => {
            this.dismissModal($e);
        });
    }
    submitModal(event) {
        this.modalRef.close();
        if (this.config.onSubmit)
            this.config.onSubmit(event);
    }
    dismissModal(event) {
        this.modalRef.close();
        if (this.config.onDismiss)
            this.config.onDismiss(event);
    }
}
DynamicFormModalLinkDirective.ɵfac = function DynamicFormModalLinkDirective_Factory(t) { return new (t || DynamicFormModalLinkDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"])); };
DynamicFormModalLinkDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: DynamicFormModalLinkDirective, selectors: [["", "cspsDynamicFormModalLink", ""]], hostBindings: function DynamicFormModalLinkDirective_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DynamicFormModalLinkDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { config: "config" } });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DynamicFormModalLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cspsDynamicFormModalLink]'
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();

class DynamicFormTableModalLinkDirective {
    constructor(modalService) {
        this.modalService = modalService;
    }
    onClick() {
        this.instantiateModal();
    }
    instantiateModal() {
        this.config.size = this.config.size || 'lg'; // Default to large modal
        this.config.backdrop = this.config.backdrop || 'static'; // Default to static background
        this.config.windowClass = this.config.windowClass || '';
        this.modalRef = this.modalService.open(DynamicFormTableModalComponent, { size: this.config.size, backdrop: this.config.backdrop, windowClass: this.config.windowClass });
        this.modalRef.componentInstance.config = this.config;
        this.modalRef.componentInstance.submitted.subscribe(($e) => {
            this.submitModal($e);
        });
        this.modalRef.componentInstance.dismissed.subscribe(($e) => {
            this.dismissModal($e);
        });
    }
    submitModal(event) {
        this.modalRef.close();
        if (this.config.onSubmit)
            this.config.onSubmit(event);
    }
    dismissModal(event) {
        this.modalRef.close();
        if (this.config.onDismiss)
            this.config.onDismiss(event);
    }
}
DynamicFormTableModalLinkDirective.ɵfac = function DynamicFormTableModalLinkDirective_Factory(t) { return new (t || DynamicFormTableModalLinkDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"])); };
DynamicFormTableModalLinkDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: DynamicFormTableModalLinkDirective, selectors: [["", "cspsDynamicFormTableModalLink", ""]], hostBindings: function DynamicFormTableModalLinkDirective_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DynamicFormTableModalLinkDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { config: "config" } });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DynamicFormTableModalLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cspsDynamicFormTableModalLink]'
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();

class DynamicFormNotificationModalLinkDirective {
    constructor(modalService) {
        this.modalService = modalService;
    }
    onClick() {
        this.instantiateModal();
    }
    instantiateModal() {
        this.config.size = this.config.size || 'lg'; // Default to large modal
        this.config.backdrop = this.config.backdrop || 'static'; // Default to static background
        this.config.windowClass = this.config.windowClass || '';
        this.modalRef = this.modalService.open(DynamicFormNotificationModalComponent, { size: this.config.size, backdrop: this.config.backdrop, windowClass: this.config.windowClass });
        this.modalRef.componentInstance.config = this.config;
        this.modalRef.componentInstance.submitted.subscribe(($e) => {
            this.submitModal($e);
        });
        this.modalRef.componentInstance.dismissed.subscribe(($e) => {
            this.dismissModal($e);
        });
    }
    submitModal(event) {
        this.modalRef.close();
        if (this.config.onSubmit)
            this.config.onSubmit(event);
    }
    dismissModal(event) {
        this.modalRef.close();
        if (this.config.onDismiss)
            this.config.onDismiss(event);
    }
}
DynamicFormNotificationModalLinkDirective.ɵfac = function DynamicFormNotificationModalLinkDirective_Factory(t) { return new (t || DynamicFormNotificationModalLinkDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"])); };
DynamicFormNotificationModalLinkDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: DynamicFormNotificationModalLinkDirective, selectors: [["", "cspsDynamicFormNotificationModalLink", ""]], hostBindings: function DynamicFormNotificationModalLinkDirective_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DynamicFormNotificationModalLinkDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { config: "config" } });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DynamicFormNotificationModalLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cspsDynamicFormNotificationModalLink]'
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();

function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}
class CustomValidators {
    static required(errorMessage) {
        return (control) => {
            return isEmptyInputValue(control.value) ? { 'required': errorMessage || true } : null;
        };
    }
    static maxLength(maxLength, errorMessage) {
        return (control) => {
            const length = control.value ? control.value.length : 0;
            return length > maxLength ?
                { 'maxlength': errorMessage || `requiredLength : ${maxLength}, actualLength: ${length}` } :
                null;
        };
    }
    static minLength(minLength, errorMessage) {
        return (control) => {
            const length = control.value ? control.value.length : 0;
            return length < minLength ?
                { 'minLength': errorMessage || `requiredLength : ${minLength}, actualLength: ${length}` } :
                null;
        };
    }
    static in(list, errorMessage) {
        return (control) => {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            const inList = list.indexOf(control.value) > -1;
            return inList ?
                null :
                { 'in': errorMessage || `Acceptable Values : ${list.join(', ')}` };
        };
    }
    ;
    static notIn(list, errorMessage) {
        return (control) => {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            const inList = list.indexOf(control.value) > -1;
            return !inList ?
                null :
                { 'notIn': errorMessage || `Unacceptable Values : ${list.join(', ')}` };
        };
    }
    ;
    static hasInvalidCharacters(prohibitedCharacterList, errorMessage) {
        return (control) => {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            const inList = prohibitedCharacterList.some(x => control.value.indexOf(x) > -1);
            return !inList ?
                null :
                { 'invalidCharacter': errorMessage || `Prohibited Characters : ${prohibitedCharacterList.join(', ')}` };
        };
    }
    ;
    static hasNotAcceptableCharacters(acceptableCharacterList, caseSensitive, errorMessage) {
        return (control) => {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            const convertedAcceptableCharacterList = caseSensitive ? acceptableCharacterList : acceptableCharacterList.map(x => x.toLowerCase());
            const convertedControlValue = caseSensitive ? control.value : control.value.toLowerCase();
            const invalidList = convertedControlValue.split('').some((x) => convertedAcceptableCharacterList.indexOf(x) === -1);
            return !invalidList ?
                null :
                { 'notAcceptableCharacter': errorMessage || `Acceptable Characters : ${acceptableCharacterList.join(', ')}` };
        };
    }
    ;
}

class DynamicFormModule {
}
DynamicFormModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: DynamicFormModule });
DynamicFormModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function DynamicFormModule_Factory(t) { return new (t || DynamicFormModule)(); }, providers: [CustomValidators], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(DynamicFormModule, { declarations: [DynamicFieldDirective,
        DynamicFormComponent,
        DynamicFormTableComponent,
        DynamicFormModalComponent,
        DynamicFormTableModalComponent,
        DynamicFormNotificationModalComponent,
        DynamicFormModalLinkDirective,
        DynamicFormTableModalLinkDirective,
        DynamicFormNotificationModalLinkDirective,
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
        FormCheckboxComponent,
        FormCheckboxListComponent,
        FormFileComponent,
        FormStaticComponent,
        FormNumberComponent,
        FormDateComponent,
        FormStaticAreaComponent,
        FormAreaComponent,
        FileValueAccessor], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]], exports: [DynamicFormModalLinkDirective,
        DynamicFormTableModalLinkDirective,
        DynamicFormNotificationModalLinkDirective,
        DynamicFieldDirective] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DynamicFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]
                ],
                declarations: [
                    DynamicFieldDirective,
                    DynamicFormComponent,
                    DynamicFormTableComponent,
                    DynamicFormModalComponent,
                    DynamicFormTableModalComponent,
                    DynamicFormNotificationModalComponent,
                    DynamicFormModalLinkDirective,
                    DynamicFormTableModalLinkDirective,
                    DynamicFormNotificationModalLinkDirective,
                    FormButtonComponent,
                    FormInputComponent,
                    FormSelectComponent,
                    FormCheckboxComponent,
                    FormCheckboxListComponent,
                    FormFileComponent,
                    FormStaticComponent,
                    FormNumberComponent,
                    FormDateComponent,
                    FormStaticAreaComponent,
                    FormAreaComponent,
                    FileValueAccessor,
                ],
                exports: [
                    DynamicFormModalLinkDirective,
                    DynamicFormTableModalLinkDirective,
                    DynamicFormNotificationModalLinkDirective,
                    DynamicFieldDirective
                ],
                entryComponents: [
                    FormButtonComponent,
                    FormInputComponent,
                    FormSelectComponent,
                    FormCheckboxComponent,
                    FormCheckboxListComponent,
                    FormFileComponent,
                    FormStaticComponent,
                    FormNumberComponent,
                    FormDateComponent,
                    FormStaticAreaComponent,
                    FormAreaComponent,
                    DynamicFormComponent,
                    DynamicFormTableComponent,
                    DynamicFormModalComponent,
                    DynamicFormTableModalComponent,
                    DynamicFormNotificationModalComponent
                ],
                providers: [CustomValidators]
            }]
    }], null, null); })();

/*
 * Public API Surface of dynamic-form
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=dynamic-form.js.map


/***/ }),

/***/ "./node_modules/@angular/compiler/src sync recursive":
/*!*************************************************!*\
  !*** ./node_modules/@angular/compiler/src sync ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@angular/compiler/src sync recursive";

/***/ }),

/***/ "./src/app/angular-material-module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material-module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/accordion.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */











































/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
class AngularMaterialModule {
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__["MatBottomSheetModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__["MatBadgeModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__["CdkTableModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_36__["A11yModule"],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__["BidiModule"],
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__["CdkAccordionModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_40__["ObserversModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["OverlayModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__["PlatformModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__["PortalModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__["MatBottomSheetModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__["MatBadgeModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__["CdkTableModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_36__["A11yModule"],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__["BidiModule"],
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__["CdkAccordionModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_40__["ObserversModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["OverlayModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__["PlatformModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__["PortalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__["MatBottomSheetModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__["MatBadgeModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__["CdkTableModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_36__["A11yModule"],
                    _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__["BidiModule"],
                    _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__["CdkAccordionModule"],
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_40__["ObserversModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["OverlayModule"],
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__["PlatformModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__["PortalModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_user_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/user/auth-guard.service */ "./src/app/core/user/auth-guard.service.ts");





const routes = [
    // Redirect to home URL if route is not specified.
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "./src/app/login/login.module.ts")).then(m => m.LoginModule) },
    { path: 'profile', canActivate: [_core_user_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]], loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~admin-admin-module~alarms-alarms-module~bins-bins-module~equipments-equipments-module~home-h~391984bf"), __webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/profile/profile.module.ts")).then(m => m.ProfileModule) },
    { path: 'home', loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~admin-admin-module~alarms-alarms-module~bins-bins-module~equipments-equipments-module~home-h~391984bf"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule) },
    { path: 'products', canActivate: [_core_user_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]], loadChildren: () => Promise.all(/*! import() | products-products-module */[__webpack_require__.e("default~admin-admin-module~alarms-alarms-module~bins-bins-module~equipments-equipments-module~home-h~391984bf"), __webpack_require__.e("default~products-products-module~workflow-workflow-module"), __webpack_require__.e("products-products-module")]).then(__webpack_require__.bind(null, /*! ./products/products.module */ "./src/app/products/products.module.ts")).then(m => m.ProductsModule) },
    { path: 'lines', canActivate: [_core_user_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]], loadChildren: () => Promise.all(/*! import() | lines-lines-module */[__webpack_require__.e("default~admin-admin-module~alarms-alarms-module~bins-bins-module~equipments-equipments-module~home-h~391984bf"), __webpack_require__.e("common"), __webpack_require__.e("lines-lines-module")]).then(__webpack_require__.bind(null, /*! ./lines/lines.module */ "./src/app/lines/lines.module.ts")).then(m => m.LinesModule) },
    { path: 'orders', canActivate: [_core_user_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]], loadChildren: () => Promise.all(/*! import() | orders-orders-module */[__webpack_require__.e("default~admin-admin-module~alarms-alarms-module~bins-bins-module~equipments-equipments-module~home-h~391984bf"), __webpack_require__.e("common"), __webpack_require__.e("orders-orders-module")]).then(__webpack_require__.bind(null, /*! ./orders/orders.module */ "./src/app/orders/orders.module.ts")).then(m => m.OrdersModule) },
    {
        path: 'warehouses',
        canActivate: [_core_user_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
        loadChildren: () => Promise.all(/*! import() | warehouses-warehouses-module */[__webpack_require__.e("default~admin-admin-module~alarms-alarms-module~bins-bins-module~equipments-equipments-module~home-h~391984bf"), __webpack_require__.e("warehouses-warehouses-module")]).then(__webpack_require__.bind(null, /*! ./warehouses/warehouses.module */ "./src/app/warehouses/warehouses.module.ts")).then(m => m.WarehousesModule)
    },
    {
        path: 'equipments',
        canActivate: [_core_user_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
        loadChildren: () => Promise.all(/*! import() | equipments-equipments-module */[__webpack_require__.e("default~admin-admin-module~alarms-alarms-module~bins-bins-module~equipments-equipments-module~home-h~391984bf"), __webpack_require__.e("common"), __webpack_require__.e("equipments-equipments-module")]).then(__webpack_require__.bind(null, /*! ./equipments/equipments.module */ "./src/app/equipments/equipments.module.ts")).then(m => m.EquipmentsModule)
    },
    { path: 'bins', canActivate: [_core_user_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]], loadChildren: () => Promise.all(/*! import() | bins-bins-module */[__webpack_require__.e("default~admin-admin-module~alarms-alarms-module~bins-bins-module~equipments-equipments-module~home-h~391984bf"), __webpack_require__.e("common"), __webpack_require__.e("bins-bins-module")]).then(__webpack_require__.bind(null, /*! ./bins/bins.module */ "./src/app/bins/bins.module.ts")).then(m => m.BinsModule) },
    { path: 'admin', canActivate: [_core_user_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]], loadChildren: () => Promise.all(/*! import() | admin-admin-module */[__webpack_require__.e("default~admin-admin-module~alarms-alarms-module~bins-bins-module~equipments-equipments-module~home-h~391984bf"), __webpack_require__.e("common"), __webpack_require__.e("admin-admin-module")]).then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "./src/app/admin/admin.module.ts")).then(m => m.AdminModule) },
    { path: 'workflow', canActivate: [_core_user_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]], loadChildren: () => Promise.all(/*! import() | workflow-workflow-module */[__webpack_require__.e("default~admin-admin-module~alarms-alarms-module~bins-bins-module~equipments-equipments-module~home-h~391984bf"), __webpack_require__.e("default~products-products-module~workflow-workflow-module"), __webpack_require__.e("common"), __webpack_require__.e("workflow-workflow-module")]).then(__webpack_require__.bind(null, /*! ./workflow/workflow.module */ "./src/app/workflow/workflow.module.ts")).then(m => m.WorkflowModule) },
    { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(m => m.DashboardModule) },
    { path: 'alarms', loadChildren: () => Promise.all(/*! import() | alarms-alarms-module */[__webpack_require__.e("default~admin-admin-module~alarms-alarms-module~bins-bins-module~equipments-equipments-module~home-h~391984bf"), __webpack_require__.e("alarms-alarms-module")]).then(__webpack_require__.bind(null, /*! ./alarms/alarms.module */ "./src/app/alarms/alarms.module.ts")).then(m => m.AlarmsModule) },
    { path: 'schemes', loadChildren: () => Promise.all(/*! import() | schemes-schemes-module */[__webpack_require__.e("default~admin-admin-module~alarms-alarms-module~bins-bins-module~equipments-equipments-module~home-h~391984bf"), __webpack_require__.e("common"), __webpack_require__.e("schemes-schemes-module")]).then(__webpack_require__.bind(null, /*! ./schemes/schemes.module */ "./src/app/schemes/schemes.module.ts")).then(m => m.SchemesModule) },
    { path: 'opc-servers', loadChildren: () => Promise.all(/*! import() | opc-servers-opc-servers-module */[__webpack_require__.e("default~admin-admin-module~alarms-alarms-module~bins-bins-module~equipments-equipments-module~home-h~391984bf"), __webpack_require__.e("opc-servers-opc-servers-module")]).then(__webpack_require__.bind(null, /*! ./opc-servers/opc-servers.module */ "./src/app/opc-servers/opc-servers.module.ts")).then(m => m.OpcServersModule) },
    { path: '**', redirectTo: 'home' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                // Turn enableTracing to true in the line below for debugging purposes. It will provide router tracing in the console
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/layout/main-layout/main-layout.component */ "./src/app/core/layout/main-layout/main-layout.component.ts");




class AppComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.title = 'ClientApp';
        // The local storage key For preferences
        this.LOCAL_STORAGE_PREFERENCES = 'PREFERENCES';
        this.InitLanguage();
    }
    // Initialize the app language based on browser language
    InitLanguage() {
        // Initialize list of languages
        this.translateService.addLangs(['en', 'fr', 'de', 'cn']);
        this.translateService.setDefaultLang('en');
        // Retrieve preferences langauge
        const preferences = this.getPreferences();
        const preferenceLang = preferences != null ? preferences.language || '' : '';
        // Retrieve browser language
        const browserLang = this.translateService.getBrowserLang();
        // Set language to use
        // Priority to preferences, then browser, then default language
        const languageToUse = preferenceLang.match(/gb|us|fr|es|cn/) ? preferenceLang : (browserLang.match(/gb|us|fr|es|cn/) ? browserLang : 'en');
        this.translateService.use(languageToUse);
    }
    // TODO: Should move to a service
    // See use in the preference component too
    getPreferences() {
        const pref = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_PREFERENCES));
        return pref;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "emes-main-layout");
    } }, directives: [_core_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_user_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/user/jwt.interceptor */ "./src/app/core/user/jwt.interceptor.ts");
/* harmony import */ var _core_user_error_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/user/error.interceptor */ "./src/app/core/user/error.interceptor.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var dynamic_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dynamic-form */ "./dist/dynamic-form/fesm2015/dynamic-form.js");
/* harmony import */ var data_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! data-table */ "./dist/data-table/fesm2015/data-table.js");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _core_user_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _core_user_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"], multi: true },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            dynamic_form__WEBPACK_IMPORTED_MODULE_9__["DynamicFormModule"],
            data_table__WEBPACK_IMPORTED_MODULE_10__["DataTableModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        dynamic_form__WEBPACK_IMPORTED_MODULE_9__["DynamicFormModule"],
        data_table__WEBPACK_IMPORTED_MODULE_10__["DataTableModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                    dynamic_form__WEBPACK_IMPORTED_MODULE_9__["DynamicFormModule"],
                    data_table__WEBPACK_IMPORTED_MODULE_10__["DataTableModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _core_user_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _core_user_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"], multi: true },
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: HttpLoaderFactory, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/main-layout/main-layout.component */ "./src/app/core/layout/main-layout/main-layout.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/menu/menu.component */ "./src/app/core/layout/menu/menu.component.ts");
/* harmony import */ var _layout_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/breadcrumbs/breadcrumbs.component */ "./src/app/core/layout/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _layout_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/loader/loader.component */ "./src/app/core/layout/loader/loader.component.ts");
/* harmony import */ var _layout_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/search/search.component */ "./src/app/core/layout/search/search.component.ts");
/* harmony import */ var _notificator_notificator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notificator/notificator.component */ "./src/app/core/notificator/notificator.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _translate_custom_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./translate/custom-loader */ "./src/app/core/translate/custom-loader.ts");
/* harmony import */ var _translate_shared_custom_translation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./translate/shared/custom-translation.service */ "./src/app/core/translate/shared/custom-translation.service.ts");
/* harmony import */ var _layout_menu_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/menu/menu-item/menu-item.component */ "./src/app/core/layout/menu/menu-item/menu-item.component.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../angular-material-module */ "./src/app/angular-material-module.ts");




















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http);
}
class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            // vendor
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            // bootstrap
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCollapseModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbProgressbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_17__["AngularMaterialModule"],
            // font awesome
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                    useClass: _translate_custom_loader__WEBPACK_IMPORTED_MODULE_14__["CustomLoader"],
                    deps: [_translate_shared_custom_translation_service__WEBPACK_IMPORTED_MODULE_15__["CustomTranslationService"]]
                }
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
        ],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__["MainLayoutComponent"], _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _layout_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsComponent"], _layout_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"], _layout_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"], _notificator_notificator_component__WEBPACK_IMPORTED_MODULE_11__["NotificatorComponent"], _layout_menu_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_16__["MenuItemComponent"]], imports: [
        // vendor
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        // bootstrap
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCollapseModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbProgressbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_17__["AngularMaterialModule"],
        // font awesome
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]], exports: [_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__["MainLayoutComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__["MainLayoutComponent"], _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _layout_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsComponent"], _layout_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"], _layout_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"], _notificator_notificator_component__WEBPACK_IMPORTED_MODULE_11__["NotificatorComponent"], _layout_menu_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_16__["MenuItemComponent"]],
                imports: [
                    // vendor
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    // bootstrap
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCollapseModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbProgressbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_17__["AngularMaterialModule"],
                    // font awesome
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                            useClass: _translate_custom_loader__WEBPACK_IMPORTED_MODULE_14__["CustomLoader"],
                            deps: [_translate_shared_custom_translation_service__WEBPACK_IMPORTED_MODULE_15__["CustomTranslationService"]]
                        }
                    }),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
                ],
                exports: [_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__["MainLayoutComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/layout/breadcrumbs/breadcrumbs.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/layout/breadcrumbs/breadcrumbs.component.ts ***!
  \******************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BreadcrumbsComponent {
    constructor() { }
    ngOnInit() {
    }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(); };
BreadcrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbsComponent, selectors: [["emes-breadcrumbs"]], decls: 2, vars: 0, template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "breadcrumbs works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-breadcrumbs',
                templateUrl: './breadcrumbs.component.html',
                styleUrls: ['./breadcrumbs.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/layout/loader/loader.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/layout/loader/loader.component.ts ***!
  \********************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");








function LoaderComponent_ngb_progressbar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngb-progressbar", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.progress);
} }
class LoaderComponent {
    constructor(router) {
        this.router = router;
        // The progress status for the progress bar
        this.progress = 0;
        // Used for cleaning subscription
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // Used to stop timer observable
        this.stopTimer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        // Subscribe to navigation events
        this.loading$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(evt => evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"] || evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(evt => this.toggleTimer(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(evt => evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]));
    }
    // Start/stop a timer to simulate progress
    toggleTimer(start) {
        if (start) {
            this.stopTimer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 250).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.stopTimer)).subscribe(x => this.updateProgress());
        }
        else {
            this.progress = 0;
            this.stopTimer.next();
            this.stopTimer.complete();
        }
    }
    // Update the progress bar value
    updateProgress() {
        if (this.progress >= 0 && this.progress < 25) {
            // Start out between 3 - 6% increments
            this.progress += (Math.random() * (5 - 3 + 1) + 3);
        }
        else if (this.progress >= 25 && this.progress < 65) {
            // increment between 0 - 3%
            this.progress += (Math.random() * 3);
        }
        else if (this.progress >= 65 && this.progress < 90) {
            // increment between 0 - 2%
            this.progress += (Math.random() * 2);
        }
        else if (this.progress >= 90 && this.progress < 99) {
            // finally, increment it .5 %
            this.progress += 0.5;
        }
        else {
            // after 99%, don't increment
        }
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["emes-loader"]], decls: 2, vars: 3, consts: [["type", "info", "height", ".3rem", 3, "value", 4, "ngIf"], ["type", "info", "height", ".3rem", 3, "value"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderComponent_ngb_progressbar_0_Template, 1, 1, "ngb-progressbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.loading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbProgressbar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["ngb-progressbar[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sYXlvdXQvbG9hZGVyL0M6XFxEZXZcXEludGVybmFsXFxDbGllbnRBcHAtMi9zcmNcXGFwcFxcY29yZVxcbGF5b3V0XFxsb2FkZXJcXGxvYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9sYXlvdXQvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZ2ItcHJvZ3Jlc3NiYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuIiwibmdiLXByb2dyZXNzYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/layout/main-layout/main-layout.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/layout/main-layout/main-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/core/layout/menu/menu.component.ts");
/* harmony import */ var _notificator_notificator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../notificator/notificator.component */ "./src/app/core/notificator/notificator.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/loader.component */ "./src/app/core/layout/loader/loader.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class MainLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["emes-main-layout"]], decls: 5, vars: 0, consts: [[1, "h-100"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "emes-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "emes-notificator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "emes-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-main-layout',
                templateUrl: './main-layout.component.html',
                styleUrls: ['./main-layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/layout/menu/menu-item/menu-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/layout/menu/menu-item/menu-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






const _c0 = ["childMenu"];
function MenuItemComponent_span_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "emes-menu-item", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5.childMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r2.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", child_r2.children);
} }
function MenuItemComponent_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", child_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r2.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r2.name);
} }
function MenuItemComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuItemComponent_span_2_span_1_Template, 8, 4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuItemComponent_span_2_span_2_Template, 6, 3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r2.children && child_r2.children.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !child_r2.children || child_r2.children.length === 0);
} }
class MenuItemComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
MenuItemComponent.ɵfac = function MenuItemComponent_Factory(t) { return new (t || MenuItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MenuItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuItemComponent, selectors: [["emes-menu-item"]], viewQuery: function MenuItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.childMenu = _t.first);
    } }, inputs: { items: "items" }, decls: 3, vars: 2, consts: [[3, "overlapTrigger"], ["childMenu", "matMenu"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-menu-item", "", "color", "primary", 3, "matMenuTriggerFor"], [3, "items"], ["menu", ""], ["mat-menu-item", "", 3, "routerLink"]], template: function MenuItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-menu", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuItemComponent_span_2_Template, 3, 2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], MenuItemComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L21lbnUvbWVudS1pdGVtL21lbnUtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-menu-item',
                templateUrl: './menu-item.component.html',
                styleUrls: ['./menu-item.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], childMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['childMenu']
        }] }); })();


/***/ }),

/***/ "./src/app/core/layout/menu/menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/core/layout/menu/menu.component.ts ***!
  \****************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.service */ "./src/app/core/layout/menu/menu.service.ts");
/* harmony import */ var _user_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user/authentication.service */ "./src/app/core/user/authentication.service.ts");
/* harmony import */ var _search_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search/search.service */ "./src/app/core/layout/search/search.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu-item/menu-item.component */ "./src/app/core/layout/menu/menu-item/menu-item.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

















function MenuComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ul", 15);
} }
function MenuComponent_ul_9_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "emes-menu-item", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r9.childMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menuItem_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", menuItem_r6.children);
} }
function MenuComponent_ul_9_li_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", menuItem_r6.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "MENU." + menuItem_r6.name), " ");
} }
function MenuComponent_ul_9_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_ul_9_li_1_a_1_Template, 7, 3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_ul_9_li_1_span_2_Template, 4, 4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.children && menuItem_r6.children.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !menuItem_r6.children || menuItem_r6.children.length === 0);
} }
function MenuComponent_ul_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_ul_9_li_1_Template, 3, 2, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.menu);
} }
function MenuComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_li_12_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.openPreferences(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Preferences ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_li_12_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.authenticatedUser == null ? null : ctx_r2.authenticatedUser.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faUser)("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faPowerOff)("fixedWidth", true);
} }
function MenuComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_li_13_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.faSignInAlt)("fixedWidth", true);
} }
function MenuComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_a_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const lang_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.setLanguage(lang_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("flag flag-" + lang_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r17, " ");
} }
const _c0 = function () { return ["home"]; };
class MenuComponent {
    constructor(router, menuService, userService, searchService, translateService) {
        this.router = router;
        this.menuService = menuService;
        this.userService = userService;
        this.searchService = searchService;
        this.translateService = translateService;
        // The list of menu items
        this.menu = [];
        // Indicates if the nav bar is collapsed
        this.isCollapsed = true;
        // Indicates whether the user is authenticated
        this.isAuthenticated = true;
        // The authenticated user
        this.authenticatedUser = null;
        // Preferences
        this.LOCAL_STORAGE_PREFERENCES = 'PREFERENCES';
        // The list of available languages
        this.languages = [];
        // Font Awesone icons
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUser"];
        this.faPowerOff = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPowerOff"];
        this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSignInAlt"];
        // Used for cleaning subscription
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.selectedLanguage = this.translateService.currentLang;
        // Retrieve languages from the translateService
        this.languages = this.translateService.getLangs();
        this.searchService.init();
        this.menuService.grantedMenus$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(menu => {
            this.menu = menu;
            console.log(this.menu);
        });
        this.userService.currentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(authenticatedUser => {
            if (authenticatedUser !== null) 
            // Subscribe to the menu service to retrieve the list of menus
            {
                this.menuService.getMenusByRoles().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe();
            }
            else {
                this.menu = [];
                this.router.navigate(['/login']);
            }
        }))
            .subscribe(authenticatedUser => {
            this.authenticatedUser = {
                name: (authenticatedUser === null || authenticatedUser === void 0 ? void 0 : authenticatedUser.firstName) + ' ' + (authenticatedUser === null || authenticatedUser === void 0 ? void 0 : authenticatedUser.lastName)
            };
            this.isAuthenticated = authenticatedUser !== null;
        });
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    triggerSearch(searchText) {
        this.searchService.search(searchText);
    }
    openPreferences() {
        this.router.navigate(['/profile']);
    }
    logout() {
        this.userService.logout();
    }
    login() {
        this.router.navigate(['/login']);
    }
    setLanguage(language) {
        this.translateService.use(language).subscribe(x => {
            this.selectedLanguage = this.translateService.currentLang;
            const preferences = {
                language: this.selectedLanguage
            };
            localStorage.setItem(this.LOCAL_STORAGE_PREFERENCES, JSON.stringify(preferences));
        });
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_search_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["emes-menu"]], decls: 19, vars: 12, consts: [[1, "navbar", "navbar-xs", "fixed-top", "navbar-expand-lg", "navbar-dark", "bg-primary"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "navbar-brand", "d-none", "d-sm-block", 3, "routerLink"], [1, "navbar-brand", "d-sm-none", 3, "routerLink"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], ["class", "navbar-nav mr-auto", 4, "ngIf"], ["type", "search", "placeholder", "Search", 1, "form-control", "form-control-sm", "border-0", "w-auto", 3, "search"], [1, "navbar-nav"], ["ngbDropdown", "", "placement", "bottom-right", "class", "nav-item", 4, "ngIf"], ["ngbDropdown", "", "placement", "bottom-right", "class", "nav-item", 3, "click", 4, "ngIf"], ["ngbDropdown", "", "placement", "bottom-right", 1, "nav-item"], ["ngbDropdownToggle", "", 1, "nav-link", "dropdown-toggle", "cursor-pointer"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["class", "dropdown-item cursor-pointer pl-2", 3, "click", 4, "ngFor", "ngForOf"], [1, "navbar-nav", "mr-auto"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "matMenuTriggerFor"], [3, "items"], ["menu", ""], ["mat-button", "", 1, "nav-link", 3, "routerLink"], ["ngbDropdownToggle", "", 1, "nav-link", "dropdown-toggle", "pointer"], [1, "dropdown-item", "pointer", 3, "click"], [3, "icon", "fixedWidth"], [1, "dropdown-divider"], ["ngbDropdown", "", "placement", "bottom-right", 1, "nav-item", 3, "click"], [1, "nav-link", "pointer"], [1, "dropdown-item", "cursor-pointer", "pl-2", 3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_1_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FLCos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "FLCos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MenuComponent_ul_8_Template, 1, 0, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MenuComponent_ul_9_Template, 2, 1, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function MenuComponent_Template_input_search_10_listener($event) { return ctx.triggerSearch($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MenuComponent_li_12_Template, 11, 5, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MenuComponent_li_13_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MenuComponent_a_18_Template, 3, 3, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mb-1 flag flag-" + ctx.selectedLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_14__["MenuItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FaIconComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] }, { type: _user_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }, { type: _search_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/layout/menu/menu.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/layout/menu/menu.service.ts ***!
  \**************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class MenuService {
    constructor(http) {
        this.http = http;
        this.menuUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'api/v1/menus'; // URL to web api
        this.grantedMenus$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.allMenus$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.mockedMenus = [
            { id: '1', name: 'Dashboard', url: 'dashboard', iconName: '', children: [] },
            { id: '1', name: 'Warehouses', url: 'warehouses', iconName: '', children: [] },
            { id: '2', name: 'Products', url: 'products', iconName: '', children: [] },
            { id: '3', name: 'Lines', url: 'lines', iconName: '', children: [] },
            {
                children: [
                    { id: '4-1', iconName: 'person', name: 'Orders', url: 'orders', children: [] },
                    { id: '4-2', iconName: 'person', name: 'Job', url: 'jobs', children: [] },
                    { id: '4-3', iconName: 'person', name: 'Template', url: 'templates', children: [] }
                ],
                iconName: '',
                id: '4',
                name: 'JMM',
                url: ''
            },
            { id: '4', name: 'Bins', url: 'bins', iconName: '', children: [] },
            { id: '5', name: 'Workflows', url: 'workflow', iconName: '', children: [] },
            { id: '6', name: 'Process', url: 'equipments', iconName: '', children: [] },
            { id: '6', name: 'OPC Server', url: 'opc-servers', iconName: '', children: [] },
            { id: '7', name: 'Admin', url: 'admin', iconName: '', children: [] }
        ];
    }
    // Get the list of menu items
    getMenus() {
        // const url = `${this.menuUrl}`;
        // return this.http.get<any>(url).pipe(tap(m => {
        //   this.allMenus$.next(m);
        // }));
        // var mockedMenus: MenuItem[] = [
        //   {id: 1, name: 'Dashboard', url: 'dashboard'},
        //   {id: 1, name: 'Warehouses', url: 'warehouses'},
        //   {id: 2, name: 'Products', url: 'products'},
        //   {id: 3, name: 'Lines', url: 'lines'},
        //   {id: 4, name: 'Orders', url: 'orders'},
        //   {id: 4, name: 'Bins', url: 'bins'},
        //   // {id: 5, name: 'Workflows', url: 'workflow' },
        //   {id: 6, name: 'Process', url: 'equipments'},
        //   {id: 7, name: 'Admin', url: 'admin'}
        // ];
        //
        this.allMenus$.next(this.mockedMenus);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.mockedMenus);
        // return this.http.get<MenuItem[]>(this.menuUrl);
    }
    // Get the list of menu items by roles
    getMenusByRoles() {
        this.grantedMenus$.next(this.mockedMenus);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.mockedMenus);
        // const url = `${this.menuUrl}/by-role`;
        // return this.http.get<any>(url).pipe(tap((menuItems: MenuItem[]) => {
        //   let index = menuItems.findIndex(m => m.name === 'Admin');
        //   let adminMenu = null;
        //   let dashboardMenu = null;
        //   if (index > -1) {
        //     adminMenu = menuItems.splice(index, 1);
        //   }
        //   index = menuItems.findIndex(m => m.name === 'Dashboard');
        //   if (index > -1) {
        //     dashboardMenu = menuItems.splice(index, 1);
        //   }
        //   menuItems.sort((a, b) => {
        //     if (a.name < b.name) {
        //       return -1;
        //     }
        //     if (a.name > b.name) {
        //       return 1;
        //     }
        //     return 0;
        //   });
        //   // Mock
        //   menuItems.push({
        //     children: [
        //       {id: '4-1', iconName: 'person', name: 'Orders', url: 'orders', children: []},
        //       {id: '4-2', iconName: 'person', name: 'Job', url: 'jobs', children: []},
        //       {id: '4-3', iconName: 'person', name: 'Template', url: 'templates', children: []}
        //       ],
        //     iconName: '',
        //     id: '4',
        //     name: 'JMM',
        //     url: ''
        //   });
        //   if (adminMenu && adminMenu.length > 0) {
        //     menuItems.push(...adminMenu);
        //   }
        //   if (dashboardMenu && dashboardMenu.length > 0) {
        //     menuItems = dashboardMenu.concat(menuItems);
        //   }
        //
        //   this.grantedMenus$.next(menuItems);
        // }));
    }
    createMenu(newMenu) {
        const url = `${this.menuUrl}`;
        return this.http.post(url, newMenu).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(x => {
            const menus = this.grantedMenus$.getValue();
            menus.push(Object.assign(Object.assign({ children: [], iconName: '' }, newMenu), { id: x }));
            this.grantedMenus$.next(menus);
        }));
    }
    update(id, updatedMenu) {
        const url = `${this.menuUrl}/${id}`;
        return this.http.put(url, updatedMenu).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(x => {
            const menus = this.grantedMenus$.getValue();
            const menu = menus.find(m => m.id === id);
            if (menu) {
                menu.role = updatedMenu.role;
                menu.name = updatedMenu.name;
                menu.url = updatedMenu.url;
            }
            this.grantedMenus$.next(menus);
        }));
    }
    assignRole(id, role) {
        const url = `${this.menuUrl}/${id}/assign-role`;
        return this.http.post(url, role).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(x => {
            const menus = this.grantedMenus$.getValue();
            const menu = menus.find(m => m.id === id);
            if (menu) {
                menu.role = role;
            }
            this.grantedMenus$.next(menus);
        }));
    }
    delete(id) {
        const url = `${this.menuUrl}/${id}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(x => {
            const menus = this.grantedMenus$.getValue();
            const index = menus.findIndex(m => m.id === id);
            if (index > 0) {
                menus.splice(index, 1);
            }
            this.grantedMenus$.next(menus);
        }));
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/layout/search/search.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/layout/search/search.component.ts ***!
  \********************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.service */ "./src/app/core/layout/search/search.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







function SearchComponent_div_0_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", result_r2.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r2.text, " ");
} }
function SearchComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Search Panel (Layout is preliminary) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.closeSearchPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComponent_div_0_li_5_Template, 3, 2, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.results);
} }
class SearchComponent {
    constructor(searchService) {
        this.searchService = searchService;
        // Indicates whether the search panel should be shown
        this.showPanel = false;
        // Used for cleaning subscription 
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.searchService.searchResult$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(x => {
            this.showPanel = x.length > 0;
            this.results = x;
        });
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    closeSearchPanel() {
        this.showPanel = false;
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["emes-search"]], decls: 1, vars: 1, consts: [["class", "search-container", 4, "ngIf"], [1, "search-container"], [1, "btn", "pointer", 3, "click"], [4, "ngFor", "ngForOf"], [1, "nav-link", 3, "routerLink"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchComponent_div_0_Template, 6, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPanel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".search-container[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  position: fixed;\n  background-color: red;\n  padding-top: 56px;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sYXlvdXQvc2VhcmNoL0M6XFxEZXZcXEludGVybmFsXFxDbGllbnRBcHAtMi9zcmNcXGFwcFxcY29yZVxcbGF5b3V0XFxzZWFyY2hcXHNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9sYXlvdXQvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9sYXlvdXQvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtY29udGFpbmVyIHtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgcGFkZGluZy10b3A6IDU2cHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4iLCIuc2VhcmNoLWNvbnRhaW5lciB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHBhZGRpbmctdG9wOiA1NnB4O1xuICB6LWluZGV4OiAxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return [{ type: _search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/layout/search/search.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/layout/search/search.service.ts ***!
  \******************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class SearchService {
    constructor(http) {
        this.http = http;
        // The search results
        this.searchResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        // The url to the lunr index file
        this.lunrUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'lunr';
        // The url to the documentation
        this.documentClientBaseUrl = 'documentation';
        // The local storage key of lunr index
        this.LOCAL_STORAGE_LUNRINDEX = 'LUNRINDEX';
    }
    init() {
        const localLunrIndex = this.getLocalLunrIndex();
    }
    search(searchText, searchField = '', searchTarget = '') {
        if (!searchText || !this.lunrIdx)
            this.searchResult$.next([]);
        else {
            // TODO: Implement here the search logic
            // We **might** need different type of search target (Product Vs Document Vs Change Management? Full text Vs Title Vs ?? Vs ?? )
            // Let's first implement ignoring this argument
            let results;
            searchTarget = searchTarget || 'full';
            if (!searchField) {
                results = this.lunrIdx.search(searchText);
            }
            else {
                results = this.lunrIdx.search(searchField + ':' + searchText);
            }
            this.searchResult$.next(results.map((r, index) => {
                return { link: `${this.documentClientBaseUrl}/${r.ref}`, text: 'Link ' + index + ' to ' + searchText };
            }));
        }
    }
    getLocalLunrIndex() {
        const localStorageItem = localStorage.getItem(this.LOCAL_STORAGE_LUNRINDEX);
        if (localStorageItem) {
            return JSON.parse(localStorageItem);
        }
        return null;
    }
    setLocalLunrIndex(lunrIndex, lastModified) {
        const localLunrIndex = {
            lunrIndex: lunrIndex,
            lastModified: lastModified
        };
        localStorage.setItem(this.LOCAL_STORAGE_LUNRINDEX, JSON.stringify(localLunrIndex));
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/notificator/notification.model.ts":
/*!********************************************************!*\
  !*** ./src/app/core/notificator/notification.model.ts ***!
  \********************************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
class Notification {
    constructor(
    // The content of the notification
    message, 
    // The type of notification. Using bootstrap styles
    type) {
        this.message = message;
        this.type = type;
    }
    // The notification call out
    get callOut() {
        switch (this.type) {
            case 'success':
                return 'Success !';
            case 'info':
                return 'Info';
            case 'warning':
                return 'Warning !';
            case 'danger':
                return 'Error !';
            default:
                return 'Info';
        }
    }
}


/***/ }),

/***/ "./src/app/core/notificator/notificator.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/notificator/notificator.component.ts ***!
  \***********************************************************/
/*! exports provided: NotificatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificatorComponent", function() { return NotificatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _notificator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notificator.service */ "./src/app/core/notificator/notificator.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





function NotificatorComponent_ngb_alert_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function NotificatorComponent_ngb_alert_0_Template_ngb_alert_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const notif_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.closeNotification(notif_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notif_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", notif_r1.type)("dismissible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notif_r1.callOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", notif_r1.message, "\n");
} }
class NotificatorComponent {
    constructor(notificatorService) {
        this.notificatorService = notificatorService;
        this.notifications = [];
    }
    ngOnInit() {
        // Subscribe to the notification service to receive notifications
        this.notificatorService.getNotifications().subscribe(notifs => this.notifications = notifs);
    }
    // Close the specified notification
    closeNotification(id) {
        this.notificatorService.dismissNotification(id);
    }
}
NotificatorComponent.ɵfac = function NotificatorComponent_Factory(t) { return new (t || NotificatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notificator_service__WEBPACK_IMPORTED_MODULE_1__["NotificatorService"])); };
NotificatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificatorComponent, selectors: [["emes-notificator"]], hostAttrs: [1, "notification-wrapper"], decls: 1, vars: 1, consts: [[3, "type", "dismissible", "close", 4, "ngFor", "ngForOf"], [3, "type", "dismissible", "close"]], template: function NotificatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NotificatorComponent_ngb_alert_0_Template, 4, 4, "ngb-alert", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlert"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbm90aWZpY2F0b3Ivbm90aWZpY2F0b3IuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-notificator',
                templateUrl: './notificator.component.html',
                styleUrls: ['./notificator.component.css'],
                host: {
                    class: 'notification-wrapper'
                }
            }]
    }], function () { return [{ type: _notificator_service__WEBPACK_IMPORTED_MODULE_1__["NotificatorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/notificator/notificator.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/notificator/notificator.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificatorService", function() { return NotificatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class NotificatorService {
    constructor() {
        // The list of notifications
        this.notifications = [];
        // Instantiate the notification subject with an empty array
        this.notificationsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    // Returns an observable of notifications
    getNotifications() {
        return this.notificationsSubject.asObservable();
    }
    // Creates a new notification
    sendNotification(notif, observable) {
        // TODO: Using the length as the id will cause issues if notifications are dismissed and added simultaneously
        // Investigate another method to assign an id with random numbers
        notif.id = this.notifications.length;
        this.notifications.push(notif);
        this.notificationsSubject.next([...this.notifications]);
        if (observable) {
            // Notification close according to observable
            observable.subscribe(() => this.dismissNotification(notif.id));
        }
        else {
            // Notification auto-close after 10 sec
            setTimeout(() => this.dismissNotification(notif.id), 10000);
        }
    }
    // Dismisses the specified notification
    dismissNotification(id) {
        this.notifications = this.notifications.filter(x => x.id !== id);
        this.notificationsSubject.next([...this.notifications]);
    }
}
NotificatorService.ɵfac = function NotificatorService_Factory(t) { return new (t || NotificatorService)(); };
NotificatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificatorService, factory: NotificatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/translate/custom-loader.ts":
/*!*************************************************!*\
  !*** ./src/app/core/translate/custom-loader.ts ***!
  \*************************************************/
/*! exports provided: CustomLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomLoader", function() { return CustomLoader; });
class CustomLoader {
    constructor(customTranslationService) {
        this.customTranslationService = customTranslationService;
    }
    getTranslation(lang) {
        // tslint:disable-next-line:max-line-length
        // return combineLatest<object, object>(this.customTranslationService.getDynamicTranslations(lang), this.customTranslationService.getStaticTranslations(lang)).pipe(map(v => {
        //   // Return the merged translation object
        //   Object.assign(v[1], v[0]);
        //   return v[1];
        // }));
        return this.customTranslationService.getStaticTranslations(lang);
    }
}


/***/ }),

/***/ "./src/app/core/translate/shared/custom-translation.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/translate/shared/custom-translation.service.ts ***!
  \*********************************************************************/
/*! exports provided: CustomTranslationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTranslationService", function() { return CustomTranslationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CustomTranslationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.endpointUrl = 'api/language-files';
    }
    getDynamicTranslations(lang) {
        const url = `${this.endpointUrl}?language=${lang}`;
        return this.httpClient.get(url);
    }
    getStaticTranslations(lang) {
        const path = 'assets/i18n/' + lang + '.json';
        return this.httpClient.get(path);
    }
}
CustomTranslationService.ɵfac = function CustomTranslationService_Factory(t) { return new (t || CustomTranslationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CustomTranslationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomTranslationService, factory: CustomTranslationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomTranslationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/user/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/user/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/core/user/authentication.service.ts");




class AuthGuardService {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivateChild(childRoute, state) {
        return this.canActivate(childRoute, state);
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/user/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/user/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/compiler/src/util */ "./node_modules/@angular/compiler/src/util.js");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.authenticateUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'authenticate';
        const currentUser = {
            id: '1',
            userName: 'lia',
            lastName: 'Li',
            firstName: 'Allen',
            token: '123'
        };
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](currentUser);
        // this.currentUserSubject = new BehaviorSubject<AuthenticationUser>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        // return this.http.post<any>(this.authenticateUrl, {username, password})
        //   .pipe(map(user => {
        //     // store user details and jwt token in local storage to keep user logged in between page refreshes
        //     localStorage.setItem('currentUser', JSON.stringify(user));
        //     this.currentUserSubject.next(user);
        //     return user;
        //   }));
        if (username === 'admin' && password === '123') {
            this.currentUserSubject.next({ id: '1', userName: username, token: '123', firstName: 'Allen', lastName: 'Li' });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
        }
        else {
            return Object(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_3__["error"])('');
        }
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    updateUser(updatedUser) {
        this.currentUserSubject.next(updatedUser);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/user/error.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/core/user/error.interceptor.ts ***!
  \************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _notificator_notification_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notificator/notification.model */ "./src/app/core/notificator/notification.model.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/core/user/authentication.service.ts");
/* harmony import */ var _notificator_notificator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notificator/notificator.service */ "./src/app/core/notificator/notificator.service.ts");







class ErrorInterceptor {
    constructor(authenticationService, notificatorService) {
        this.authenticationService = authenticationService;
        this.notificatorService = notificatorService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            this.notificatorService.sendNotification(new _notificator_notification_model__WEBPACK_IMPORTED_MODULE_3__["Notification"](error, 'danger'));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_notificator_notificator_service__WEBPACK_IMPORTED_MODULE_5__["NotificatorService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _notificator_notificator_service__WEBPACK_IMPORTED_MODULE_5__["NotificatorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/user/jwt.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/core/user/jwt.interceptor.ts ***!
  \**********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/core/user/authentication.service.ts");



class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        const currentUser = this.authenticationService.currentUserValue;
        console.log('Start to intercept');
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
            console.log('JwtInterceptor, request ' + request);
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'http://localhost:4203/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\Internal\ClientApp-2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map