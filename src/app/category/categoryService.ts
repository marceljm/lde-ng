import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Category } from '../../app/category/category';

@Injectable()
export class CategoryService {

    constructor(private http: Http) { }

    getCategory() {
        return this.http.get('src/app/resources/data/category.json')
            .toPromise()
            .then(res => <Category[]>res.json().data)
            .then(data => { return data; });
    }
}
