/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/app/app.header';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
export class Wrapper_AppHeader {
  /*private*/ _eventHandler:Function;
  context:import0.AppHeader;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.AppHeader();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_AppHeader_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_AppHeader_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AppHeader>;
  _AppHeader_0_3:Wrapper_AppHeader;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppHeader_Host0,renderType_AppHeader_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'header-app',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AppHeader0(this.viewUtils,this,0,this._el_0);
    this._AppHeader_0_3 = new Wrapper_AppHeader();
    this.compView_0.create(this._AppHeader_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._AppHeader_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppHeader) && (0 === requestNodeIndex))) { return this._AppHeader_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AppHeader_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AppHeaderNgFactory:import7.ComponentFactory<import0.AppHeader> = new import7.ComponentFactory<import0.AppHeader>('header-app',View_AppHeader_Host0,import0.AppHeader);
const styles_AppHeader:any[] = ([] as any[]);
var renderType_AppHeader:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_AppHeader,{});
export class View_AppHeader0 extends import1.AppView<import0.AppHeader> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppHeader0,renderType_AppHeader,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'style','      background: -webkit-linear-gradient(-45deg, white, black);\n      background: -o-linear-gradient(-45deg, white, black);\n      background: -moz-linear-gradient(-45deg, white,black);\n      background: linear-gradient(-45deg, white,black);\n      height: 80px; background-repeat: no-repeat; background-size: 100% 100%;'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray4(4,'class','ui-g','style','vertical-align: middle;padding-top: 7px;'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'style','width: 100px'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'img',new import3.InlineArray4(4,'src','../resources/images/logo.png','style','padding-top: 3px; padding-left: 10px; padding-bottom: 0px; width: 64px;'),(null as any));
    this._text_7 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_8 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_2,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'\n            ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_9,'div',new import3.InlineArray2(2,'style','font-family: TelefonicaHeadLine-Light; color: white; font-size: 20px; text-shadow: 1px 1px 20px #FFFFFF; padding-top: 20px;'),(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'loja de eletrônicos',(null as any));
    this._text_13 = this.renderer.createText(this._el_9,'\n        ',(null as any));
    this._text_14 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_15 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_16 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16
    ]
    ),(null as any));
    return (null as any);
  }
}