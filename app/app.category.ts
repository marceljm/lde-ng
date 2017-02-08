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
    categoryMap: Map<string, string[]> = new Map<string, string[]>();

    constructor(private categoryService: CategoryService, private router: Router) { }

    ngOnInit() {
        this.categoryService.getCategory().then(
            categories => this.categories = categories,
        ).then(
            () => {
                for (let entry of this.categories) {
                    let subcategoryList: Array<string> = new Array<string>();
                    if (entry.subcategory) {
                        for (let entry2 of entry.subcategory) {
                            subcategoryList.push(entry2.name);
                        }
                        this.categoryMap.set(entry.link, subcategoryList);
                    }
                }
            });
    }

    //console.log(this.categoryMap.get("acessorios-de-tecnologia"));

    navigate(link) {
        this.router.navigate(['/' + link]);
    }
}