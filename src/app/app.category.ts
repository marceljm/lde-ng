import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category/categoryService';
import { Category } from './category/category';
import { ProductService } from './product/productService';
import { Page } from './product/page';
import { Product } from './product/product';
import { ProductItems } from './product/productItems';

import { Message } from 'primeng/primeng';

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

    msgs: Message[] = [];

    private productSet: Set<string> = new Set<string>();

    lastLevel: boolean = false;
    isProduct: boolean = false;

    emptyMessage: string = "aguarde...";

    productItems: ProductItems = new ProductItems;

    trackingLink: string = this.getLink();

    title: string = "Loja de Eletrônicos";
    content: string = "Loja com milhares de produtos eletrônicos: eletrodomésticos, eletroportáteis, games, informática, tablets, telefonia, acessórios, câmeras, filmadoras e mais.";

    constructor(private categoryService: CategoryService, private productService: ProductService, private router: Router) { }

    ngOnInit() {
        this.updateIsProduct();
        if (this.isProduct) {
            this.productService.getProduct(this.getId()).subscribe(
                productItems => this.productItems = productItems,
                error => this.errorMessage = <any>error,
                () => {
                    this.title = this.content = this.productItems.productItem[0].name;

                    this.productService.getPage(this.productItems.productItem[0].merchantCategory, 1, 48).subscribe(
                        page => this.page = page,
                        error => this.errorMessage = <any>error,
                        () => {
                            if (!this.page.productItems) return;
                            for (let entry of this.page.productItems.productItem) {
                                if (!this.productSet.has(entry.name)) {
                                    this.arrayProduct.push(entry);
                                    this.productSet.add(entry.name);
                                }
                            }
                            this.arrayPage[0] = this.page;
                        }
                    );
                }
            )
            return;
        }

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
                if (this.getLevel() > 0) {
                    this.title += " / " + this.getName();
                    this.content = this.title;
                }

                this.updateLastLevel();
                if (this.lastLevel) this.getArrayPage(1);
            });
    }

    getArrayPage(i: number) {
        this.productService.getPage(this.getName(), i, 50).subscribe(
            page => this.page = page,
            error => this.errorMessage = <any>error,
            () => {
                this.emptyMessage = "nenhum produto encontrado";
                if (!this.page.productItems || !this.lastLevel) return;
                for (let entry of this.page.productItems.productItem) {
                    if (!this.productSet.has(entry.name)) {
                        this.arrayProduct.push(entry);
                        this.productSet.add(entry.name);
                    }
                }
                this.arrayPage[i - 1] = this.page;
                if (this.lastLevel)
                    this.showInfo();
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

    getLastName() {
        return this.getName().split(/ \/ /).pop();
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

    showInfo() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Localizando...', detail: this.productSet.size + ' produtos encontrados' });
    }

    private updateLastLevel() {
        this.lastLevel = this.getLevel() > 1 && !this.getSubcategories() && !this.isProduct;
    }

    private updateIsProduct() {
        if (this.getLevel() < 2) this.isProduct = false;
        else this.isProduct = (this.getId() != null);
    }

    getId() {
        let match: RegExpMatchArray = this.getLink().split('/')[1].match(/[a-z0-9]{32}/);
        if (match) return match[0];
    }

    getProductLink(name: string, id: string) {
        let aux: string = this.toLink(name).replace(/[\~\<\=\>\|\_\-\,\;\:\!\?\/\.\\'\"\(\)\[\]\@\$\*\&\#\%\+]/g, '-');
        while (aux.match('--'))
            aux = aux.replace(/--/g, '-');
        aux = aux.replace(/-$/, '').replace(/^-/, '');
        return aux + '/' + id;
    }

    changeLink() {
        this.trackingLink = this.productItems.productItem[0].trackingLinks.trackingLink[0].ppc;
    }
}
