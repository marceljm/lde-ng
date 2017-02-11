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
import { CategoryService } from './category/categoryService';
import { Router } from '@angular/router';
var AppCategory = (function () {
    function AppCategory(categoryService, router) {
        this.categoryService = categoryService;
        this.router = router;
        this.categoryMap = new Map();
        this.linkName = new Map();
    }
    AppCategory.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategory().then(function (categories) { return _this.categories = categories; }).then(function () {
            for (var _i = 0, _a = _this.categories; _i < _a.length; _i++) {
                var entry = _a[_i];
                var link = _this.toLink(entry.name);
                _this.linkName.set(_this.toLink(entry.name), entry.name);
                if (entry.subcategory) {
                    _this.categoryMap.set(link, entry.subcategory);
                    for (var _b = 0, _c = entry.subcategory; _b < _c.length; _b++) {
                        var entry2 = _c[_b];
                        var link2 = _this.toLink(entry2.name);
                        _this.linkName.set(link + '/' + link2, entry2.name);
                        if (entry2.subcategory) {
                            _this.categoryMap.set(link + '/' + link2, entry2.subcategory);
                            for (var _d = 0, _e = entry2.subcategory; _d < _e.length; _d++) {
                                var entry3 = _e[_d];
                                var link3 = _this.toLink(entry3.name);
                                _this.linkName.set(link + '/' + link2 + '/' + link3, entry3.name);
                                if (entry3.subcategory) {
                                    _this.categoryMap.set(link + '/' + link2 + '/' + link3, entry3.subcategory);
                                }
                            }
                        }
                    }
                }
            }
        });
    };
    AppCategory.prototype.navigate = function (link) {
        this.router.navigate([link]);
    };
    AppCategory.prototype.getLink = function () {
        return this.router.url.replace('/', '');
    };
    AppCategory.prototype.getSubcategories = function () {
        return this.categoryMap.get(this.getLink());
    };
    AppCategory.prototype.getName = function () {
        return this.linkName.get(this.getLink());
    };
    AppCategory.prototype.toLink = function (name) {
        return name.toLowerCase().replace(/[áãâà]/g, 'a').replace(/[éê&]/g, 'e').replace(/[í]/g, 'i').replace(/[óõô]/g, 'o').replace(/[úü]/g, 'u').replace(/ç/g, 'c').replace(/[ ]/g, '-').replace(/\//g, '-');
    };
    AppCategory.prototype.getLevel = function () {
        if (this.getLink().match('^$'))
            return 0;
        if (this.getLink().match('^[^/]+$'))
            return 1;
        if (this.getLink().match('^[^/]+/[^/]+$'))
            return 2;
        if (this.getLink().match('^[^/]+/[^/]+/[^/]+$'))
            return 3;
    };
    return AppCategory;
}());
AppCategory = __decorate([
    Component({
        templateUrl: 'app.category.html',
        selector: 'category-app'
    }),
    __metadata("design:paramtypes", [CategoryService, Router])
], AppCategory);
export { AppCategory };
//# sourceMappingURL=app.category.js.map