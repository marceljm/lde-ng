import { Component, OnInit } from '@angular/core';
import { ProductService } from './product/productService';
import { Page } from './product/page';

@Component({
    templateUrl: 'app/app.product.html',
    selector: 'product-app',
    providers: [ProductService]
})
export class AppProduct implements OnInit {

    private errorMessage: string;

    page: Page;

    constructor(
        private productService: ProductService) {
    }

    ngOnInit() {
        this.getPage();
    }

    getPage() {
        this.productService.getPage().subscribe(
            page => this.page = page,
            error => this.errorMessage = <any>error,
            () => {
                console.log(this.page);
            }
        )
    }
}