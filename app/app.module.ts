import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';

import { AppHeader } from './app.header';
import { AppComponent } from './app.component';
import { AppProduct } from './app.product';

//import { CarService } from './cars/carservice';

import { AppRoutingModule, routedComponents } from './app.route';

import { DataGridModule } from 'primeng/primeng';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, JsonpModule, AppRoutingModule, DataGridModule],
    declarations: [AppHeader, AppComponent, AppProduct, routedComponents],
    bootstrap: [AppHeader, AppComponent],
    //providers: [CarService]
})
export class AppModule { }
