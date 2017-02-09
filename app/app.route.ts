import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppCategory } from './app.category';
import { AppProduct } from './app.product';
import { AppHeader } from './app.header';

const routes: Routes = [
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

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [AppProduct, AppCategory, AppHeader];
