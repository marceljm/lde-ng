import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Page } from './page';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Jsonp } from '@angular/http';

@Injectable()
export class ProductService {

    private urlPage = 'http://api.zanox.com/json/2011-03-01/products?q=iphone&connectid=D288A5846EE8D7A640D4&programs=12011&callback=JSONP_CALLBACK';
    //private urlProgram = 'http://api.zanox.com/json/2011-03-01/programs?startdate=2012-06-01&partnership=DIRECT&region=BR&connectid=580599047DF8F5311043';

    constructor(private _jsonp: Jsonp) { }

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