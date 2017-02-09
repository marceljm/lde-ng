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
                    this.nameLinkMap.set(entry.link, entry.name);

                    if (entry.subcategory) {
                        this.categoryMap.set(entry.link, entry.subcategory);
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
}