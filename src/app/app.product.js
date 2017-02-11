var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ProductService } from './product/productService';
var AppProduct = (function () {
    function AppProduct(productService) {
        this.productService = productService;
    }
    AppProduct.prototype.ngOnInit = function () {
        this.getPage();
    };
    AppProduct.prototype.getPage = function () {
        var _this = this;
        this.productService.getPage().subscribe(function (page) { return _this.page = page; }, function (error) { return _this.errorMessage = error; }, function () {
            console.log(_this.page);
        });
    };
    return AppProduct;
}());
AppProduct = __decorate([
    Component({
        templateUrl: 'app.product.html',
        selector: 'product-app',
        providers: [ProductService]
    }),
    __metadata("design:paramtypes", [ProductService])
], AppProduct);
export { AppProduct };
//# sourceMappingURL=app.product.js.map