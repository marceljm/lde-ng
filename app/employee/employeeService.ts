import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { VwColabEstado } from './vwColabEstado';
import { VwColabCidade } from './vwColabCidade';
import { VwColabCargo } from './vwColabCargo';
import { VwColabCargaHoraria } from './vwColabCargaHoraria';
import { VwColabSituacaoNovo } from './vwColabSituacaoNovo';
import { VwColabDiretor } from './vwColabDiretor';
import { VwColabGerenteSr } from './vwColabGerenteSr';
import { VwColabGerente } from './vwColabGerente';
import { VwColabCoordenador } from './vwColabCoordenador';
import { VwColabSupervisor } from './vwColabSupervisor';
import { VwColabGrupo } from './vwColabGrupo';
import { VwColabEntreGrupo } from './vwColabEntreGrupo';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {

    private urlTblColabAtual = 'http://sv2kprel2:7001/ColaboradoresWS/rest/tblColabAtual';
    private urlVwColabEstado = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabEstado';
    private urlVwColabCidade = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabCidade';
    private urlVwColabCargo = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabCargo';
    private urlVwColabCargaHoraria = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabCargaHoraria';
    private urlVwColabSituacaoNovo = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabSituacaoNovo';
    private urlVwColabDiretor = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabDiretor';
    private urlVwColabGerenteSr = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabGerenteSr';
    private urlVwColabGerente = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabGerente';
    private urlVwColabCoordenador = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabCoordenador';
    private urlVwColabSupervisor = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabSupervisor';
    private urlVwColabGrupo = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabGrupo';
    private urlVwColabEntreGrupo = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabEntreGrupo';

    constructor(private http: Http) { }

    getVwColabEstado(): Observable<VwColabEstado[]> {
        return this.http.get(this.urlVwColabEstado).map(this.extractData).catch(this.handleError);
    }

    getVwColabCidade(): Observable<VwColabCidade[]> {
        return this.http.get(this.urlVwColabCidade).map(this.extractData).catch(this.handleError);
    }

    getVwColabCargo(): Observable<VwColabCargo[]> {
        return this.http.get(this.urlVwColabCargo).map(this.extractData).catch(this.handleError);
    }

    getVwColabCargaHoraria(): Observable<VwColabCargaHoraria[]> {
        return this.http.get(this.urlVwColabCargaHoraria).map(this.extractData).catch(this.handleError);
    }

    getVwColabSituacaoNovo(): Observable<VwColabSituacaoNovo[]> {
        return this.http.get(this.urlVwColabSituacaoNovo).map(this.extractData).catch(this.handleError);
    }

    getVwColabDiretor(): Observable<VwColabDiretor[]> {
        return this.http.get(this.urlVwColabDiretor).map(this.extractData).catch(this.handleError);
    }

    getVwColabGerenteSr(): Observable<VwColabGerenteSr[]> {
        return this.http.get(this.urlVwColabGerenteSr).map(this.extractData).catch(this.handleError);
    }

    getVwColabGerente(): Observable<VwColabGerente[]> {
        return this.http.get(this.urlVwColabGerente).map(this.extractData).catch(this.handleError);
    }

    getVwColabCoordenador(): Observable<VwColabCoordenador[]> {
        return this.http.get(this.urlVwColabCoordenador).map(this.extractData).catch(this.handleError);
    }

    getVwColabSupervisor(): Observable<VwColabSupervisor[]> {
        return this.http.get(this.urlVwColabSupervisor).map(this.extractData).catch(this.handleError);
    }

    getVwColabGrupo(): Observable<VwColabGrupo[]> {
        return this.http.get(this.urlVwColabGrupo).map(this.extractData).catch(this.handleError);
    }

    getVwColabEntreGrupo(): Observable<VwColabEntreGrupo[]> {
        return this.http.get(this.urlVwColabEntreGrupo).map(this.extractData).catch(this.handleError);
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