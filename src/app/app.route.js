var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCategory } from './app.category';
import { AppProduct } from './app.product';
import { AppHeader } from './app.header';
var routes = [
    {
        path: 'product',
        component: AppProduct
    },
    {
        path: '',
        component: AppCategory
    },
    {
        path: '',
        children: [
            {
                path: ':name',
                component: AppCategory
            }
        ],
    },
    {
        path: '',
        children: [
            {
                path: ':name',
                children: [
                    {
                        path: ':name',
                        component: AppCategory
                    }
                ],
            }
        ],
    },
    {
        path: '',
        children: [
            {
                path: ':name',
                children: [
                    {
                        path: ':name',
                        children: [
                            {
                                path: ':name',
                                component: AppCategory
                            }
                        ],
                    }
                ],
            }
        ],
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
export var routedComponents = [AppProduct, AppCategory, AppHeader];
//# sourceMappingURL=app.route.js.map