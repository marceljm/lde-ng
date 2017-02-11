var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';
import { AppHeader } from './app.header';
import { AppComponent } from './app.component';
import { AppProduct } from './app.product';
import { AppCategory } from './app.category';
import { AppRoutingModule, routedComponents } from './app.route';
import { DataGridModule, PanelModule, ButtonModule } from 'primeng/primeng';
import { CategoryService } from './category/categoryService';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, JsonpModule, AppRoutingModule, DataGridModule, PanelModule, ButtonModule],
        declarations: [AppHeader, AppComponent, AppProduct, AppCategory, routedComponents],
        bootstrap: [AppHeader, AppComponent],
        providers: [CategoryService]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map