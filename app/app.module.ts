import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';

import { AppConfig } from './app.config';
import { AppHeader } from './app.header';
import { AppHome } from './app.home';
import { AppTree } from './app.tree';
import { AppEmployee } from './app.employee';
import { AppComponent } from './app.component';
import { AppCar } from './app.car';
import { ValidationDemo } from './ValidationDemo';

import { CarService } from './cars/carservice';

import { AppRoutingModule, routedComponents } from './app.route';

import { InputTextModule, DataTableModule, ButtonModule, DialogModule, TabViewModule, ChartModule, TreeModule, GrowlModule, InputSwitchModule, BlockUIModule, InputMaskModule, DropdownModule, CalendarModule } from 'primeng/primeng';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, AppRoutingModule, InputTextModule, DataTableModule, ButtonModule, DialogModule, TabViewModule, ChartModule, TreeModule, GrowlModule, InputSwitchModule, BlockUIModule, InputMaskModule, DropdownModule, CalendarModule],
    declarations: [AppHeader, AppComponent, AppHome, AppTree, AppEmployee, AppConfig, AppCar, ValidationDemo, routedComponents],
    bootstrap: [AppHeader, AppComponent],
    providers: [CarService]
})
export class AppModule { }
