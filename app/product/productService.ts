import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Page } from './page';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Jsonp} from '@angular/http';

@Injectable()
export class ProductService {

    private urlPage = 'http://api.zanox.com/json/2011-03-01/products?q=iphone&connectid=D288A5846EE8D7A640D4&callback=JSONP_CALLBACK';

    //constructor(private http: Http) { }
    constructor(private _jsonp: Jsonp) {}


    getPage(): Observable<Page> {
        return this._jsonp.get(this.urlPage).map(this.extractData).catch(this.handleError);
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