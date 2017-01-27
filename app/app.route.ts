import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppHome } from './app.home';
import { AppTree } from './app.tree';
import { AppEmployee } from './app.employee';
import { AppConfig } from './app.config';
import { AppCar } from './app.car';
import { ValidationDemo } from './validationdemo';

const routes: Routes = [
    {
        path: 'home',
        component: AppHome
    },
    {
        path: 'hierarquia',
        component: AppTree
    },
    {
        path: 'novo',
        component: AppEmployee
    },
    {
        path: 'config',
        component: AppConfig
    },
    {
        path: 'car',
        component: AppCar
    },
    {
        path: 'validation',
        component: ValidationDemo
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [AppHome, AppTree, AppEmployee, AppConfig, AppCar, ValidationDemo];