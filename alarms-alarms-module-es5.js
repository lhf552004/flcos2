function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alarms-alarms-module"], {
  /***/
  "./src/app/alarms/alarm-home/alarm-home.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/alarms/alarm-home/alarm-home.component.ts ***!
    \***********************************************************/

  /*! exports provided: AlarmHomeComponent */

  /***/
  function srcAppAlarmsAlarmHomeAlarmHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlarmHomeComponent", function () {
      return AlarmHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/side-bar/side-bar.component */
    "./src/app/shared/side-bar/side-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AlarmHomeComponent = /*#__PURE__*/function () {
      function AlarmHomeComponent() {
        _classCallCheck(this, AlarmHomeComponent);
      }

      _createClass(AlarmHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menuItems = [{
            id: '1',
            label: 'Current Alarms',
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTasks"],
            route: ['current-alarms'],
            children: []
          }, {
            id: '2',
            label: 'Summary Alarms',
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTasks"],
            route: ['summary-alarms'],
            children: []
          }, {
            id: '3',
            label: 'Alarms Configuration',
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTasks"],
            route: ['alarms-configuration'],
            children: []
          }];
        }
      }]);

      return AlarmHomeComponent;
    }();

    AlarmHomeComponent.??fac = function AlarmHomeComponent_Factory(t) {
      return new (t || AlarmHomeComponent)();
    };

    AlarmHomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AlarmHomeComponent,
      selectors: [["emes-alarm-home"]],
      decls: 5,
      vars: 2,
      consts: [[1, "container-fluid", "h-100", "px-0"], [1, "row", "h-100", "no-gutters"], [1, "col-md-3", "col-lg-2", "d-none", "d-md-block", "bg-light", 3, "header", "menuItems"], [1, "col", "d-flex", "flex-column"]],
      template: function AlarmHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "emes-side-bar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "main", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("header", "Alarms")("menuItems", ctx.menuItems);
        }
      },
      directives: [_shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_2__["SideBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYXJtcy9hbGFybS1ob21lL2FsYXJtLWhvbWUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AlarmHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-alarm-home',
          templateUrl: './alarm-home.component.html',
          styleUrls: ['./alarm-home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/alarms/alarms-configuration/alarms-configuration.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/alarms/alarms-configuration/alarms-configuration.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AlarmsConfigurationComponent */

  /***/
  function srcAppAlarmsAlarmsConfigurationAlarmsConfigurationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlarmsConfigurationComponent", function () {
      return AlarmsConfigurationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlarmsConfigurationComponent = /*#__PURE__*/function () {
      function AlarmsConfigurationComponent() {
        _classCallCheck(this, AlarmsConfigurationComponent);
      }

      _createClass(AlarmsConfigurationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlarmsConfigurationComponent;
    }();

    AlarmsConfigurationComponent.??fac = function AlarmsConfigurationComponent_Factory(t) {
      return new (t || AlarmsConfigurationComponent)();
    };

    AlarmsConfigurationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AlarmsConfigurationComponent,
      selectors: [["emes-alarms-configuration"]],
      decls: 2,
      vars: 0,
      template: function AlarmsConfigurationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "alarms-configuration works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYXJtcy9hbGFybXMtY29uZmlndXJhdGlvbi9hbGFybXMtY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AlarmsConfigurationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-alarms-configuration',
          templateUrl: './alarms-configuration.component.html',
          styleUrls: ['./alarms-configuration.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/alarms/alarms-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/alarms/alarms-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: AlarmsRoutingModule */

  /***/
  function srcAppAlarmsAlarmsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlarmsRoutingModule", function () {
      return AlarmsRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _alarm_home_alarm_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./alarm-home/alarm-home.component */
    "./src/app/alarms/alarm-home/alarm-home.component.ts");
    /* harmony import */


    var _current_alarms_current_alarms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./current-alarms/current-alarms.component */
    "./src/app/alarms/current-alarms/current-alarms.component.ts");
    /* harmony import */


    var _summary_alarms_summary_alarms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./summary-alarms/summary-alarms.component */
    "./src/app/alarms/summary-alarms/summary-alarms.component.ts");
    /* harmony import */


    var _alarms_configuration_alarms_configuration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./alarms-configuration/alarms-configuration.component */
    "./src/app/alarms/alarms-configuration/alarms-configuration.component.ts");

    var routes = [{
      path: '',
      component: _alarm_home_alarm_home_component__WEBPACK_IMPORTED_MODULE_2__["AlarmHomeComponent"],
      children: [{
        path: 'current-alarms',
        component: _current_alarms_current_alarms_component__WEBPACK_IMPORTED_MODULE_3__["CurrentAlarmsComponent"]
      }, {
        path: 'summary-alarms',
        component: _summary_alarms_summary_alarms_component__WEBPACK_IMPORTED_MODULE_4__["SummaryAlarmsComponent"]
      }, {
        path: 'alarms-configuration',
        component: _alarms_configuration_alarms_configuration_component__WEBPACK_IMPORTED_MODULE_5__["AlarmsConfigurationComponent"]
      }]
    }];

    var AlarmsRoutingModule = function AlarmsRoutingModule() {
      _classCallCheck(this, AlarmsRoutingModule);
    };

    AlarmsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AlarmsRoutingModule
    });
    AlarmsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AlarmsRoutingModule_Factory(t) {
        return new (t || AlarmsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AlarmsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AlarmsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/alarms/alarms.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/alarms/alarms.module.ts ***!
    \*****************************************/

  /*! exports provided: AlarmsModule */

  /***/
  function srcAppAlarmsAlarmsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlarmsModule", function () {
      return AlarmsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _alarm_home_alarm_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./alarm-home/alarm-home.component */
    "./src/app/alarms/alarm-home/alarm-home.component.ts");
    /* harmony import */


    var _summary_alarms_summary_alarms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./summary-alarms/summary-alarms.component */
    "./src/app/alarms/summary-alarms/summary-alarms.component.ts");
    /* harmony import */


    var _alarms_configuration_alarms_configuration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alarms-configuration/alarms-configuration.component */
    "./src/app/alarms/alarms-configuration/alarms-configuration.component.ts");
    /* harmony import */


    var _current_alarms_current_alarms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./current-alarms/current-alarms.component */
    "./src/app/alarms/current-alarms/current-alarms.component.ts");
    /* harmony import */


    var _alarms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./alarms-routing.module */
    "./src/app/alarms/alarms-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AlarmsModule = function AlarmsModule() {
      _classCallCheck(this, AlarmsModule);
    };

    AlarmsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AlarmsModule
    });
    AlarmsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AlarmsModule_Factory(t) {
        return new (t || AlarmsModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _alarms_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlarmsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AlarmsModule, {
        declarations: [_alarm_home_alarm_home_component__WEBPACK_IMPORTED_MODULE_1__["AlarmHomeComponent"], _summary_alarms_summary_alarms_component__WEBPACK_IMPORTED_MODULE_2__["SummaryAlarmsComponent"], _alarms_configuration_alarms_configuration_component__WEBPACK_IMPORTED_MODULE_3__["AlarmsConfigurationComponent"], _current_alarms_current_alarms_component__WEBPACK_IMPORTED_MODULE_4__["CurrentAlarmsComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _alarms_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlarmsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AlarmsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_alarm_home_alarm_home_component__WEBPACK_IMPORTED_MODULE_1__["AlarmHomeComponent"], _summary_alarms_summary_alarms_component__WEBPACK_IMPORTED_MODULE_2__["SummaryAlarmsComponent"], _alarms_configuration_alarms_configuration_component__WEBPACK_IMPORTED_MODULE_3__["AlarmsConfigurationComponent"], _current_alarms_current_alarms_component__WEBPACK_IMPORTED_MODULE_4__["CurrentAlarmsComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _alarms_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlarmsRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/alarms/current-alarms/current-alarms.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/alarms/current-alarms/current-alarms.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CurrentAlarmsComponent */

  /***/
  function srcAppAlarmsCurrentAlarmsCurrentAlarmsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentAlarmsComponent", function () {
      return CurrentAlarmsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _shared_alarm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/alarm.service */
    "./src/app/alarms/shared/alarm.service.ts");
    /* harmony import */


    var data_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! data-table */
    "./dist/data-table/fesm2015/data-table.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var CurrentAlarmsComponent = /*#__PURE__*/function () {
      function CurrentAlarmsComponent(alarmService) {
        _classCallCheck(this, CurrentAlarmsComponent);

        this.alarmService = alarmService; // Used for cleaning subscription

        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(CurrentAlarmsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var columnDefinition = [{
            id: '1',
            name: 'id',
            label: 'Id',
            type: 'text',
            visible: true,
            searchable: false,
            filterMode: 'none'
          }, {
            id: '2',
            name: 'name',
            label: 'Active',
            type: 'text',
            visible: true,
            searchable: false,
            filterMode: 'text'
          }, {
            id: '3',
            name: 'start',
            label: 'Start',
            type: 'text',
            visible: true,
            searchable: false,
            filterMode: 'text'
          }, {
            id: '4',
            name: 'end',
            label: 'End',
            type: 'text',
            visible: true,
            searchable: false,
            filterMode: 'text'
          }, {
            id: '4',
            name: 'messageType',
            label: 'Message Type',
            type: 'text',
            visible: true,
            searchable: false,
            filterMode: 'text'
          }, {
            id: '4',
            name: 'message',
            label: 'Message',
            type: 'text',
            visible: true,
            searchable: false,
            filterMode: 'text'
          }, {
            id: '4',
            name: 'view',
            label: 'View',
            type: 'icon',
            visible: true,
            searchable: false,
            filterMode: 'none',
            click: this.viewAlarm.bind(this)
          }];
          this.alarmService.currentAlarms$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(function (users) {
            _this.settings = {
              selectableRows: false,
              columnDefinitions: columnDefinition,
              data: users.map(function (t) {
                return Object.assign(Object.assign({}, t), {
                  view: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faExternalLinkAlt"],
                  "delete": _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrash"]
                });
              }),
              toolBar: {
                right: []
              },
              groupBy: []
            };
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe.next();
          this.unsubscribe.complete();
        }
      }, {
        key: "viewAlarm",
        value: function viewAlarm() {}
      }]);

      return CurrentAlarmsComponent;
    }();

    CurrentAlarmsComponent.??fac = function CurrentAlarmsComponent_Factory(t) {
      return new (t || CurrentAlarmsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_alarm_service__WEBPACK_IMPORTED_MODULE_4__["AlarmService"]));
    };

    CurrentAlarmsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CurrentAlarmsComponent,
      selectors: [["emes-current-alarms"]],
      decls: 5,
      vars: 4,
      consts: [[1, "d-flex", "justify-content-between", "flex-wrap", "flex-md-nowrap", "align-items-center", "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "d-flex", "flex-fill", 3, "settings"]],
      template: function CurrentAlarmsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "csps-data-table", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 2, "ALARM.CURRENT ALARMS"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("settings", ctx.settings);
        }
      },
      directives: [data_table__WEBPACK_IMPORTED_MODULE_5__["DataTableComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYXJtcy9jdXJyZW50LWFsYXJtcy9jdXJyZW50LWFsYXJtcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CurrentAlarmsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-current-alarms',
          templateUrl: './current-alarms.component.html',
          styleUrls: ['./current-alarms.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_alarm_service__WEBPACK_IMPORTED_MODULE_4__["AlarmService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/alarms/shared/alarm.service.ts":
  /*!************************************************!*\
    !*** ./src/app/alarms/shared/alarm.service.ts ***!
    \************************************************/

  /*! exports provided: AlarmService */

  /***/
  function srcAppAlarmsSharedAlarmServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlarmService", function () {
      return AlarmService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AlarmService = /*#__PURE__*/function () {
      function AlarmService() {
        _classCallCheck(this, AlarmService);

        this.currentAlarms$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.allAlarms$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
      }

      _createClass(AlarmService, [{
        key: "getCurrentAlarms",
        value: function getCurrentAlarms(startPage, quantity) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        }
      }, {
        key: "getSummaryAlarms",
        value: function getSummaryAlarms(startPage, quantity) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        }
      }]);

      return AlarmService;
    }();

    AlarmService.??fac = function AlarmService_Factory(t) {
      return new (t || AlarmService)();
    };

    AlarmService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AlarmService,
      factory: AlarmService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AlarmService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/alarms/summary-alarms/summary-alarms.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/alarms/summary-alarms/summary-alarms.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SummaryAlarmsComponent */

  /***/
  function srcAppAlarmsSummaryAlarmsSummaryAlarmsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryAlarmsComponent", function () {
      return SummaryAlarmsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SummaryAlarmsComponent = /*#__PURE__*/function () {
      function SummaryAlarmsComponent() {
        _classCallCheck(this, SummaryAlarmsComponent);
      }

      _createClass(SummaryAlarmsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SummaryAlarmsComponent;
    }();

    SummaryAlarmsComponent.??fac = function SummaryAlarmsComponent_Factory(t) {
      return new (t || SummaryAlarmsComponent)();
    };

    SummaryAlarmsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SummaryAlarmsComponent,
      selectors: [["emes-summary-alarms"]],
      decls: 2,
      vars: 0,
      template: function SummaryAlarmsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "summary-alarms works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYXJtcy9zdW1tYXJ5LWFsYXJtcy9zdW1tYXJ5LWFsYXJtcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SummaryAlarmsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-summary-alarms',
          templateUrl: './summary-alarms.component.html',
          styleUrls: ['./summary-alarms.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=alarms-alarms-module-es5.js.map