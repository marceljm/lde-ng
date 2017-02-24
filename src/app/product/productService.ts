import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Page } from './page';
import { ProductItems } from './productItems';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Jsonp } from '@angular/http';

@Injectable()
export class ProductService {

    private urlPage = 'http://api.zanox.com/json/2011-03-01/products?connectid=D288A5846EE8D7A640D4&merchantcategory=%s&region=BR&hasimages=true&partnership=confirmed&items=%s&page=%s&callback=JSONP_CALLBACK';
    private urlProduct = 'http://api.zanox.com/json/2011-03-01/products/product/%s?connectid=D288A5846EE8D7A640D4&callback=JSONP_CALLBACK';

    constructor(private _jsonp: Jsonp) { }

    getPage(category: string, page: number, items: number): Observable<Page> {
        let url = this.urlPage.replace('%s', category).replace('%s', items.toString()).replace('%s', page.toString());
        return this._jsonp.get(url).map(this.extractData).catch(this.handleError);
    }

    getProduct(id: string): Observable<ProductItems> {
        let url = this.urlProduct.replace('%s', id);
        return this._jsonp.get(url).map(this.extractData).catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}