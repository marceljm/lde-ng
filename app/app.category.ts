import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category/categoryService';
import { Category } from './category/category';
import { Router } from '@angular/router';

class MyCategory implements Category {
    constructor(public name, public icon) { }
}

@Component({
    templateUrl: 'app/app.category.html',
    selector: 'category-app'
})
export class AppCategory implements OnInit {

    categories: MyCategory[];

    constructor(private categoryService: CategoryService, private router: Router) { }

    ngOnInit() {
        this.categoryService.getCategory().then(categories => this.categories = categories);
    }

    navigate(link) {
        this.router.navigate(['/' + link]);
    }
}