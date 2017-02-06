import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppProduct } from './app.product';

const routes: Routes = [
    {
        path: 'product',
        component: AppProduct
    },
    {
        path: '',
        redirectTo: '/product',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [AppProduct];
