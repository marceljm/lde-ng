import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';

import { AppHeader } from './app.header';
import { AppComponent } from './app.component';
import { AppCategory } from './app.category';

import { AppRoutingModule, routedComponents } from './app.route';

import { DataGridModule, PanelModule, ButtonModule } from 'primeng/primeng';

import { CategoryService } from './category/categoryService';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, JsonpModule, AppRoutingModule, DataGridModule, PanelModule, ButtonModule],
    declarations: [AppHeader, AppComponent, AppCategory, routedComponents],
    bootstrap: [AppHeader, AppComponent],
    providers: [CategoryService]
})
export class AppModule { }
