import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { VwColabSituacaoQtde } from '../../app/charts/vwColabSituacaoQtde';
import { VwColabCargoQtde } from '../../app/charts/vwColabCargoQtde';
import { VwColabCidadeQtde } from '../../app/charts/vwColabCidadeQtde';
import { VwColabGerenteQtde } from '../../app/charts/vwColabGerenteQtde';
import { VwColabCoordenadorQtde } from '../../app/charts/vwColabCoordenadorQtde';
import { VwColabDtAdmissaoAreaQtde } from '../../app/charts/vwColabDtAdmissaoAreaQtde';
import { VwColabDtAdmissaoQtde } from '../../app/charts/vwColabDtAdmissaoQtde';
import { VwColabDtDesligAreaQtde } from '../../app/charts/vwColabDtDesligAreaQtde';
import { VwColabGrupoQtde } from '../../app/charts/vwColabGrupoQtde';
import { VwColabEntreGrupoQtde } from '../../app/charts/vwColabEntreGrupoQtde';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VwColabQtdeService {

    private urlOper = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabSituacaoQtdeOper';
    private urlStaff = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabSituacaoQtdeStaff';
    private urlTotal = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabSituacaoQtdeTotal';
    private urlCargo = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabCargoQtde';
    private urlCidade = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabCidadeQtde';
    private urlGerente = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabGerenteQtde';
    private urlCoordenador = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabCoordenadorQtde';
    private urlDtAdmissaoArea = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabDtAdmissaoAreaQtde';
    private urlDtAdmissao = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabDtAdmissaoQtde';
    private urlDtDesligArea = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabDtDesligAreaQtde';
    private urlGrupo = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabGrupoQtde';
    private urlEntreGrupo = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabEntreGrupoQtde';

    constructor(private http: Http) { }

    getVwColabSituacaoQtdeOper(): Observable<VwColabSituacaoQtde[]> {
        return this.http.get(this.urlOper).map(this.extractData).catch(this.handleError);
    }

    getVwColabSituacaoQtdeStaff(): Observable<VwColabSituacaoQtde[]> {
        return this.http.get(this.urlStaff).map(this.extractData).catch(this.handleError);
    }

    getVwColabSituacaoQtdeTotal(): Observable<VwColabSituacaoQtde[]> {
        return this.http.get(this.urlTotal).map(this.extractData).catch(this.handleError);
    }

    getVwColabCargoQtde(): Observable<VwColabCargoQtde[]> {
        return this.http.get(this.urlCargo).map(this.extractData).catch(this.handleError);
    }

    getVwColabCidadeQtde(): Observable<VwColabCidadeQtde[]> {
        return this.http.get(this.urlCidade).map(this.extractData).catch(this.handleError);
    }

    getVwColabGerenteQtde(): Observable<VwColabGerenteQtde[]> {
        return this.http.get(this.urlGerente).map(this.extractData).catch(this.handleError);
    }

    getVwColabCoordenadorQtde(): Observable<VwColabCoordenadorQtde[]> {
        return this.http.get(this.urlCoordenador).map(this.extractData).catch(this.handleError);
    }

    getVwColabDtAdmissaoAreaQtde(): Observable<VwColabDtAdmissaoAreaQtde[]> {
        return this.http.get(this.urlDtAdmissaoArea).map(this.extractData).catch(this.handleError);
    }

    getVwColabDtAdmissaoQtde(): Observable<VwColabDtAdmissaoQtde[]> {
        return this.http.get(this.urlDtAdmissao).map(this.extractData).catch(this.handleError);
    }

    getVwColabDtDesligAreaQtde(): Observable<VwColabDtDesligAreaQtde[]> {
        return this.http.get(this.urlDtDesligArea).map(this.extractData).catch(this.handleError);
    }

    getVwColabGrupoQtde(): Observable<VwColabGrupoQtde[]> {
        return this.http.get(this.urlGrupo).map(this.extractData).catch(this.handleError);
    }

    getVwColabEntreGrupoQtde(): Observable<VwColabEntreGrupoQtde[]> {
        return this.http.get(this.urlEntreGrupo).map(this.extractData).catch(this.handleError);
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