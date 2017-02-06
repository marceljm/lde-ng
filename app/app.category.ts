import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category/categoryService';
import { Category } from './category/category';

class MyCategory implements Category {
    constructor(public name) { }
}

@Component({
    templateUrl: 'app/app.category.html',
    selector: 'category-app'
})
export class AppCategory implements OnInit {

    categories: MyCategory[];

    constructor(private categoryService: CategoryService) { }

    ngOnInit() {
        this.categoryService.getCategory().then(categories => this.categories = categories);
    }
}