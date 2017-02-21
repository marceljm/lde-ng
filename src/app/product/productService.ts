import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Page } from './page';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Jsonp } from '@angular/http';

@Injectable()
export class ProductService {

    private urlPage = 'http://api.zanox.com/json/2011-03-01/products?connectid=D288A5846EE8D7A640D4&merchantcategory=%s&region=BR&hasimages=true&partnership=confirmed&items=50&page=%s&callback=JSONP_CALLBACK';
    private urlProgram = 'http://api.zanox.com/json/2011-03-01/programs?connectid=D288A5846EE8D7A640D4&startdate=2012-06-01&partnership=DIRECT&region=BR';

    constructor(private _jsonp: Jsonp) { }

    getPage(category: string, page: number): Observable<Page> {
        let url = this.urlPage.replace('%s', category).replace('%s', page.toString());
        console.log(url);
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