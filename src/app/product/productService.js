var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Jsonp } from '@angular/http';
var ProductService = (function () {
    //private urlProgram = 'http://api.zanox.com/json/2011-03-01/programs?startdate=2012-06-01&partnership=DIRECT&region=BR&connectid=580599047DF8F5311043';
    function ProductService(_jsonp) {
        this._jsonp = _jsonp;
        this.urlPage = 'http://api.zanox.com/json/2011-03-01/products?q=iphone&connectid=D288A5846EE8D7A640D4&programs=12011&callback=JSONP_CALLBACK';
    }
    ProductService.prototype.getPage = function () {
        return this._jsonp.get(this.urlPage).map(this.extractData).catch(this.handleError);
    };
    ProductService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProductService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    return ProductService;
}());
ProductService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Jsonp])
], ProductService);
export { ProductService };
//# sourceMappingURL=productService.js.map