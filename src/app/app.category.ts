import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category/categoryService';
import { Category } from './category/category';
import { ProductService } from './product/productService';
import { Page } from './product/page';
import { Product } from './product/product';

import { Router } from '@angular/router';

@Component({
    templateUrl: 'app.category.html',
    selector: 'category-app',
    providers: [ProductService]
})
export class AppCategory implements OnInit {

    categories: Category[];
    private categoryMap: Map<string, Category[]> = new Map<string, Category[]>();
    private linkName: Map<string, string> = new Map<string, string>();

    private errorMessage: string;

    page: Page;
    arrayPage: Page[] = [];
    arrayProduct: Product[] = [];

    constructor(private categoryService: CategoryService, private productService: ProductService, private router: Router) { }

    ngOnInit() {
        this.categoryService.getCategory().then(
            categories => this.categories = categories,
        ).then(
            () => {
                for (let entry of this.categories) {
                    let link = this.toLink(entry.name);
                    this.linkName.set(this.toLink(entry.name), entry.name);

                    if (entry.subcategory) {
                        this.categoryMap.set(link, entry.subcategory);

                        for (let entry2 of entry.subcategory) {
                            let link2 = this.toLink(entry2.name);
                            this.linkName.set(link + '/' + link2, entry.name + ' / ' + entry2.name);

                            if (entry2.subcategory) {
                                this.categoryMap.set(link + '/' + link2, entry2.subcategory);

                                for (let entry3 of entry2.subcategory) {
                                    let link3 = this.toLink(entry3.name);
                                    this.linkName.set(link + '/' + link2 + '/' + link3, entry.name + ' / ' + entry2.name + ' / ' + entry3.name);

                                    if (entry3.subcategory) {
                                        this.categoryMap.set(link + '/' + link2 + '/' + link3, entry3.subcategory);
                                    }
                                }
                            }
                        }
                    }
                }
                this.getArrayPage(1);
            });
    }

    getArrayPage(i: number) {
        this.productService.getPage(this.getName(), i).subscribe(
            page => this.page = page,
            error => this.errorMessage = <any>error,
            () => {
                console.log(i);
                for (let entry of this.page.productItems.productItem) {
                    console.log(entry);
                    this.arrayProduct.push(entry);
                }
                this.arrayPage[i - 1] = this.page;
                if (this.page.items == 50) {
                    this.getArrayPage(++i);
                }
            }
        )
    }

    navigate(link: string) {
        this.router.navigate([link]);
    }

    getLink() {
        return this.router.url.replace('/', '');
    }

    getSubcategories() {
        return this.categoryMap.get(this.getLink());
    }

    getName() {
        return this.linkName.get(this.getLink());
    }

    toLink(name: string) {
        return name.toLowerCase().replace(/[áãâà]/g, 'a').replace(/[éê&]/g, 'e').replace(/[í]/g, 'i').replace(/[óõô]/g, 'o').replace(/[úü]/g, 'u').replace(/ç/g, 'c').replace(/[ ]/g, '-').replace(/\//g, '-');
    }

    getLevel() {
        if (this.getLink().match('^$'))
            return 0;
        if (this.getLink().match('^[^/]+$'))
            return 1;
        if (this.getLink().match('^[^/]+/[^/]+$'))
            return 2;
        if (this.getLink().match('^[^/]+/[^/]+/[^/]+$'))
            return 3;
    }

    hasItems() {
        return this.page.items > 0;
    }

    getFormattedPrice(price: number) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
    }
}
