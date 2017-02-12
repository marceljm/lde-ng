/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require("../../../src/app/app.category");
var import1 = require("@angular/core/src/linker/view");
var import3 = require("@angular/core/src/linker/view_utils");
var import4 = require("@angular/core/src/metadata/view");
var import5 = require("@angular/core/src/linker/view_type");
var import6 = require("@angular/core/src/change_detection/constants");
var import7 = require("@angular/core/src/linker/component_factory");
var import8 = require("../../../src/app/category/categoryService");
var import9 = require("@angular/router/src/router");
var import10 = require("@angular/core/src/linker/view_container");
var import11 = require("../../node_modules/@angular/common/src/directives/ng_if.ngfactory");
var import12 = require("@angular/core/src/linker/template_ref");
var import13 = require("@angular/common/src/directives/ng_if");
var import14 = require("primeng/components/datagrid/datagrid");
var import15 = require("../../node_modules/primeng/components/datagrid/datagrid.ngfactory");
var import16 = require("@angular/core/src/linker/query_list");
var import17 = require("primeng/components/common/shared");
var import18 = require("../../node_modules/primeng/components/common/shared.ngfactory");
var import19 = require("@angular/core/src/change_detection/change_detection_util");
var import20 = require("@angular/core/src/linker/element_ref");
var import21 = require("@angular/core/src/change_detection/differs/iterable_differs");
var import22 = require("primeng/components/panel/panel");
var import23 = require("../../node_modules/primeng/components/panel/panel.ngfactory");
var import24 = require("@angular/core/src/security");
var Wrapper_AppCategory = (function () {
    function Wrapper_AppCategory(p0, p1) {
        this._changed = false;
        this.context = new import0.AppCategory(p0, p1);
    }
    Wrapper_AppCategory.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppCategory.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppCategory.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_AppCategory.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppCategory.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AppCategory.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppCategory;
}());
exports.Wrapper_AppCategory = Wrapper_AppCategory;
var renderType_AppCategory_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AppCategory_Host0 = (function (_super) {
    __extends(View_AppCategory_Host0, _super);
    function View_AppCategory_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AppCategory_Host0, renderType_AppCategory_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AppCategory_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'category-app', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AppCategory0(this.viewUtils, this, 0, this._el_0);
        this._AppCategory_0_3 = new Wrapper_AppCategory(this.injectorGet(import8.CategoryService, this.parentIndex), this.injectorGet(import9.Router, this.parentIndex));
        this.compView_0.create(this._AppCategory_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AppCategory_0_3.context);
    };
    View_AppCategory_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppCategory) && (0 === requestNodeIndex))) {
            return this._AppCategory_0_3.context;
        }
        return notFoundResult;
    };
    View_AppCategory_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppCategory_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppCategory_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppCategory_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppCategory_Host0;
}(import1.AppView));
exports.AppCategoryNgFactory = new import7.ComponentFactory('category-app', View_AppCategory_Host0, import0.AppCategory);
var styles_AppCategory = [];
var renderType_AppCategory = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AppCategory, {});
var View_AppCategory0 = (function (_super) {
    __extends(View_AppCategory0, _super);
    function View_AppCategory0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AppCategory0, renderType_AppCategory, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AppCategory0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new import10.ViewContainer(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import12.TemplateRef_(this, 0, this._anchor_0);
        this._NgIf_0_6 = new import11.Wrapper_NgIf(this._vc_0.vcRef, this._TemplateRef_0_5);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_2 = new import10.ViewContainer(2, null, this, this._anchor_2);
        this._TemplateRef_2_5 = new import12.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import11.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._anchor_0,
            this._text_1,
            this._anchor_2
        ]), null);
        return null;
    };
    View_AppCategory0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import13.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        if (((token === import12.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import13.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_AppCategory0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = (this.context.getLevel() > 0);
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        var currVal_2_0_0 = (this.context.getLevel() == 0);
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppCategory0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this._vc_2.destroyNestedViews();
    };
    View_AppCategory0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_AppCategory1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        if ((nodeIndex == 2)) {
            return new View_AppCategory3(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppCategory0;
}(import1.AppView));
exports.View_AppCategory0 = View_AppCategory0;
var View_AppCategory1 = (function (_super) {
    __extends(View_AppCategory1, _super);
    function View_AppCategory1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_AppCategory1, renderType_AppCategory, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_17 = import19.UNINITIALIZED;
        return _this;
    }
    View_AppCategory1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'p-dataGrid', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_0 = new import15.View_DataGrid0(this.viewUtils, this, 0, this._el_0);
        this._DataGrid_0_3 = new import15.Wrapper_DataGrid(new import20.ElementRef(this._el_0), this.parentView.injectorGet(import21.IterableDiffers, this.parentIndex));
        this._query_Header_0_0 = new import16.QueryList();
        this._query_Footer_0_1 = new import16.QueryList();
        this._query_PrimeTemplate_0_2 = new import16.QueryList();
        this._text_1 = this.renderer.createText(null, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, null, 'p-header', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import18.View_Header0(this.viewUtils, this, 2, this._el_2);
        this._Header_2_3 = new import18.Wrapper_Header();
        this._text_3 = this.renderer.createText(null, '', null);
        this.compView_2.create(this._Header_2_3.context);
        this._text_4 = this.renderer.createText(null, '\n    ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(null, null);
        this._vc_5 = new import10.ViewContainer(5, 0, this, this._anchor_5);
        this._TemplateRef_5_4 = new import12.TemplateRef_(this, 5, this._anchor_5);
        this._PrimeTemplate_5_5 = new import18.Wrapper_PrimeTemplate(this._TemplateRef_5_4);
        this._text_6 = this.renderer.createText(null, '\n', null);
        this._query_Header_0_0.reset([this._Header_2_3.context]);
        this._DataGrid_0_3.context.header = this._query_Header_0_0.first;
        this._query_Footer_0_1.reset([]);
        this._DataGrid_0_3.context.footer = this._query_Footer_0_1.first;
        this.compView_0.create(this._DataGrid_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._anchor_5,
            this._text_6
        ]), null);
        return null;
    };
    View_AppCategory1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.Header) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._Header_2_3.context;
        }
        if (((token === import12.TemplateRef) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_4;
        }
        if (((token === import17.PrimeTemplate) && (5 === requestNodeIndex))) {
            return this._PrimeTemplate_5_5.context;
        }
        if (((token === import14.DataGrid) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._DataGrid_0_3.context;
        }
        return notFoundResult;
    };
    View_AppCategory1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.parentView.context.getSubcategories();
        this._DataGrid_0_3.check_value(currVal_0_0_0, throwOnChange, false);
        this._DataGrid_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._Header_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_5_0_0 = 'item';
        this._PrimeTemplate_5_5.check_name(currVal_5_0_0, throwOnChange, false);
        this._PrimeTemplate_5_5.ngDoCheck(this, this._anchor_5, throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
        if (!throwOnChange) {
            if (this._query_PrimeTemplate_0_2.dirty) {
                this._query_PrimeTemplate_0_2.reset([this._PrimeTemplate_5_5.context]);
                this._DataGrid_0_3.context.templates = this._query_PrimeTemplate_0_2;
                this._query_PrimeTemplate_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._DataGrid_0_3.context.ngAfterContentInit();
            }
        }
        var currVal_17 = import3.inlineInterpolate(1, '', this.parentView.context.getName(), '');
        if (import3.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setText(this._text_3, currVal_17);
            this._expr_17 = currVal_17;
        }
        this.compView_0.internalDetectChanges(throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._DataGrid_0_3.context.ngAfterViewInit();
            }
        }
    };
    View_AppCategory1.prototype.destroyInternal = function () {
        this._vc_5.destroyNestedViews();
        this.compView_0.destroy();
        this.compView_2.destroy();
        this._DataGrid_0_3.ngOnDestroy();
    };
    View_AppCategory1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppCategory1.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) {
            cb(this._el_2, ctx);
        }
        if (((nodeIndex == 0) && (ngContentIndex == 1))) { }
        if (((nodeIndex == 2) && (ngContentIndex == 0))) {
            cb(this._text_3, ctx);
        }
    };
    View_AppCategory1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 5)) {
            return new View_AppCategory2(this.viewUtils, this, 5, this._anchor_5, this._vc_5);
        }
        return null;
    };
    return View_AppCategory1;
}(import1.AppView));
var View_AppCategory2 = (function (_super) {
    __extends(View_AppCategory2, _super);
    function View_AppCategory2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_AppCategory2, renderType_AppCategory, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_12 = import19.UNINITIALIZED;
        return _this;
    }
    View_AppCategory2.prototype.createInternal = function (rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n        ', null);
        this._el_1 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'ui-g-12 ui-md-4'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n            ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'p-panel', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_3 = new import23.View_Panel0(this.viewUtils, this, 3, this._el_3);
        this._Panel_3_3 = new import23.Wrapper_Panel(new import20.ElementRef(this._el_3));
        this._text_4 = this.renderer.createText(null, '\n                ', null);
        this._el_5 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'style', 'text-align: center; cursor:pointer'), null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(null, '\n            ', null);
        this.compView_3.create(this._Panel_3_3.context);
        this._text_8 = this.renderer.createText(this._el_1, '\n        ', null);
        this._text_9 = this.renderer.createText(null, '\n    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_5));
        this.init(this._text_9, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._text_9
        ]), [disposable_0]);
        return null;
    };
    View_AppCategory2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import22.Panel) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Panel_3_3.context;
        }
        return notFoundResult;
    };
    View_AppCategory2.prototype.detectChangesInternal = function (throwOnChange) {
        this._Panel_3_3.ngDoCheck(this, this._el_3, throwOnChange);
        var currVal_12 = import3.inlineInterpolate(1, '\n                    ', this.context.$implicit.name, '\n                ');
        if (import3.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setText(this._text_6, currVal_12);
            this._expr_12 = currVal_12;
        }
        this.compView_3.internalDetectChanges(throwOnChange);
    };
    View_AppCategory2.prototype.destroyInternal = function () {
        this.compView_3.destroy();
        this._Panel_3_3.ngOnDestroy();
    };
    View_AppCategory2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._text_0, ctx);
        cb(this._el_1, ctx);
        cb(this._text_9, ctx);
    };
    View_AppCategory2.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 3) && (ngContentIndex == 0))) { }
        if (((nodeIndex == 3) && (ngContentIndex == 1))) {
            cb(this._text_4, ctx);
            cb(this._el_5, ctx);
            cb(this._text_7, ctx);
        }
    };
    View_AppCategory2.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.navigate(((this.parentView.parentView.context.getLink() + '/') + this.parentView.parentView.context.toLink(this.context.$implicit.name))) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AppCategory2;
}(import1.AppView));
var View_AppCategory3 = (function (_super) {
    __extends(View_AppCategory3, _super);
    function View_AppCategory3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_AppCategory3, renderType_AppCategory, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_AppCategory3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'p-dataGrid', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_0 = new import15.View_DataGrid0(this.viewUtils, this, 0, this._el_0);
        this._DataGrid_0_3 = new import15.Wrapper_DataGrid(new import20.ElementRef(this._el_0), this.parentView.injectorGet(import21.IterableDiffers, this.parentIndex));
        this._query_Header_0_0 = new import16.QueryList();
        this._query_Footer_0_1 = new import16.QueryList();
        this._query_PrimeTemplate_0_2 = new import16.QueryList();
        this._text_1 = this.renderer.createText(null, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, null, 'p-header', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import18.View_Header0(this.viewUtils, this, 2, this._el_2);
        this._Header_2_3 = new import18.Wrapper_Header();
        this.compView_2.create(this._Header_2_3.context);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(null, null);
        this._vc_4 = new import10.ViewContainer(4, 0, this, this._anchor_4);
        this._TemplateRef_4_4 = new import12.TemplateRef_(this, 4, this._anchor_4);
        this._PrimeTemplate_4_5 = new import18.Wrapper_PrimeTemplate(this._TemplateRef_4_4);
        this._text_5 = this.renderer.createText(null, '\n    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, null, 'p-footer', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_6 = new import18.View_Footer0(this.viewUtils, this, 6, this._el_6);
        this._Footer_6_3 = new import18.Wrapper_Footer();
        this.compView_6.create(this._Footer_6_3.context);
        this._text_7 = this.renderer.createText(null, '\n', null);
        this._query_Header_0_0.reset([this._Header_2_3.context]);
        this._DataGrid_0_3.context.header = this._query_Header_0_0.first;
        this._query_Footer_0_1.reset([this._Footer_6_3.context]);
        this._DataGrid_0_3.context.footer = this._query_Footer_0_1.first;
        this.compView_0.create(this._DataGrid_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._el_6,
            this._text_7
        ]), null);
        return null;
    };
    View_AppCategory3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.Header) && (2 === requestNodeIndex))) {
            return this._Header_2_3.context;
        }
        if (((token === import12.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_4;
        }
        if (((token === import17.PrimeTemplate) && (4 === requestNodeIndex))) {
            return this._PrimeTemplate_4_5.context;
        }
        if (((token === import17.Footer) && (6 === requestNodeIndex))) {
            return this._Footer_6_3.context;
        }
        if (((token === import14.DataGrid) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._DataGrid_0_3.context;
        }
        return notFoundResult;
    };
    View_AppCategory3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.parentView.context.categories;
        this._DataGrid_0_3.check_value(currVal_0_0_0, throwOnChange, false);
        this._DataGrid_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._Header_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_4_0_0 = 'item';
        this._PrimeTemplate_4_5.check_name(currVal_4_0_0, throwOnChange, false);
        this._PrimeTemplate_4_5.ngDoCheck(this, this._anchor_4, throwOnChange);
        this._Footer_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
        if (!throwOnChange) {
            if (this._query_PrimeTemplate_0_2.dirty) {
                this._query_PrimeTemplate_0_2.reset([this._PrimeTemplate_4_5.context]);
                this._DataGrid_0_3.context.templates = this._query_PrimeTemplate_0_2;
                this._query_PrimeTemplate_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._DataGrid_0_3.context.ngAfterContentInit();
            }
        }
        this.compView_0.internalDetectChanges(throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
        this.compView_6.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._DataGrid_0_3.context.ngAfterViewInit();
            }
        }
    };
    View_AppCategory3.prototype.destroyInternal = function () {
        this._vc_4.destroyNestedViews();
        this.compView_0.destroy();
        this.compView_2.destroy();
        this.compView_6.destroy();
        this._DataGrid_0_3.ngOnDestroy();
    };
    View_AppCategory3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppCategory3.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) {
            cb(this._el_2, ctx);
        }
        if (((nodeIndex == 0) && (ngContentIndex == 1))) {
            cb(this._el_6, ctx);
        }
        if (((nodeIndex == 2) && (ngContentIndex == 0))) { }
        if (((nodeIndex == 6) && (ngContentIndex == 0))) { }
    };
    View_AppCategory3.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_AppCategory4(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        return null;
    };
    return View_AppCategory3;
}(import1.AppView));
var View_AppCategory4 = (function (_super) {
    __extends(View_AppCategory4, _super);
    function View_AppCategory4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_AppCategory4, renderType_AppCategory, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_14 = import19.UNINITIALIZED;
        return _this;
    }
    View_AppCategory4.prototype.createInternal = function (rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n        ', null);
        this._el_1 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'ui-g-12 ui-md-2'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n            ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'p-panel', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_3 = new import23.View_Panel0(this.viewUtils, this, 3, this._el_3);
        this._Panel_3_3 = new import23.Wrapper_Panel(new import20.ElementRef(this._el_3));
        this._text_4 = this.renderer.createText(null, '\n                ', null);
        this._el_5 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'style', 'text-align: center'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n                    ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'img', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_5, '\n                ', null);
        this._text_9 = this.renderer.createText(null, '\n            ', null);
        this.compView_3.create(this._Panel_3_3.context);
        this._text_10 = this.renderer.createText(this._el_1, '\n        ', null);
        this._text_11 = this.renderer.createText(null, '\n    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_7, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_7));
        this.init(this._text_11, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._text_11
        ]), [disposable_0]);
        return null;
    };
    View_AppCategory4.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import22.Panel) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._Panel_3_3.context;
        }
        return notFoundResult;
    };
    View_AppCategory4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3_0_0 = this.context.$implicit.name;
        this._Panel_3_3.check_header(currVal_3_0_0, throwOnChange, false);
        this._Panel_3_3.ngDoCheck(this, this._el_3, throwOnChange);
        var currVal_14 = this.context.$implicit.icon;
        if (import3.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementProperty(this._el_7, 'src', this.viewUtils.sanitizer.sanitize(import24.SecurityContext.URL, currVal_14));
            this._expr_14 = currVal_14;
        }
        this.compView_3.internalDetectChanges(throwOnChange);
    };
    View_AppCategory4.prototype.destroyInternal = function () {
        this.compView_3.destroy();
        this._Panel_3_3.ngOnDestroy();
    };
    View_AppCategory4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._text_0, ctx);
        cb(this._el_1, ctx);
        cb(this._text_11, ctx);
    };
    View_AppCategory4.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 3) && (ngContentIndex == 0))) { }
        if (((nodeIndex == 3) && (ngContentIndex == 1))) {
            cb(this._text_4, ctx);
            cb(this._el_5, ctx);
            cb(this._text_9, ctx);
        }
    };
    View_AppCategory4.prototype.handleEvent_7 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.navigate(this.parentView.parentView.context.toLink(this.context.$implicit.name)) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AppCategory4;
}(import1.AppView));
//# sourceMappingURL=app.category.ngfactory.js.map