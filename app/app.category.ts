import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category/categoryService';
import { Category } from './category/category';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/app.category.html',
    selector: 'category-app'
})
export class AppCategory implements OnInit {

    categories: Category[];
    categoryMap: Map<string, Category[]> = new Map<string, Category[]>();
    nameLinkMap: Map<string, string> = new Map<string, string>();

    constructor(private categoryService: CategoryService, private router: Router) { }

    ngOnInit() {
        this.categoryService.getCategory().then(
            categories => this.categories = categories,
        ).then(
            () => {
                for (let entry of this.categories) {
                    this.nameLinkMap.set(this.toLink(entry.name), entry.name);

                    if (entry.subcategory) {
                        this.categoryMap.set(this.toLink(entry.name), entry.subcategory);

                        for (let entry2 of entry.subcategory) {
                            this.categoryMap.set(this.toLink(entry.name + '/' + entry2.name), entry2.subcategory)
                        }
                    }
                }
            });
    }

    navigate(link) {
        this.router.navigate([link]);
    }

    getLink() {
        return this.router.url.replace('/', '');
    }

    getSubcategories() {
        return this.categoryMap.get(this.getLink());
    }

    getName() {
        return this.nameLinkMap.get(this.getLink());
    }

    toLink(name: string) {
        return name.toLowerCase().replace(/[áãâà]/g, 'a').replace(/[éê&]/g, 'e').replace(/[í]/g, 'i').replace(/[óõô]/g, 'o').replace(/[úü]/g, 'u').replace(/ç/g, 'c').replace(/[ ]/g, '-');
    }

    getLevel() {
        if (this.getLink().match('^$'))
            return 0;
        if (this.getLink().match('^[^/]+$'))
            return 1;
        if (this.getLink().match('^[^/]+/[^/]+$'))
            return 2;
    }
}