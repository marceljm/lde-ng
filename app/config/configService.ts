import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TreeNode } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { TblColabAdmin } from './tblColabAdmin';
import { TblColabCargo } from './tblColabCargo';
import { TblColabCidade } from './tblColabCidade';
import { TblColabEstado } from './tblColabEstado';
import { TblColabGrupo } from './tblColabGrupo';
import { TblColabSituacao } from './tblColabSituacao';
import { TblColabEntreGrupo } from './tblColabEntreGrupo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConfigService {

    private urlTblColabAdmin = 'http://sv2kprel2:7001/ColaboradoresWS/rest/tblColabAdmin';
    private urlTblColabCargo = 'http://sv2kprel2:7001/ColaboradoresWS/rest/tblColabCargo';
    private urlTblColabCidade = 'http://sv2kprel2:7001/ColaboradoresWS/rest/tblColabCidade';
    private urlTblColabEstado = 'http://sv2kprel2:7001/ColaboradoresWS/rest/tblColabEstado';
    private urlTblColabGrupo = 'http://sv2kprel2:7001/ColaboradoresWS/rest/tblColabGrupo';
    private urlTblColabSituacao = 'http://sv2kprel2:7001/ColaboradoresWS/rest/tblColabSituacao';
    private urlTblColabEntreGrupo = 'http://sv2kprel2:7001/ColaboradoresWS/rest/tblColabEntreGrupo';

    constructor(private http: Http) { }

    getTblColabAdmin(): Observable<TblColabAdmin[]> {
        return this.http.get(this.urlTblColabAdmin).map(this.extractData).catch(this.handleError);
    }

    getTblColabCargo(): Observable<TblColabCargo[]> {
        return this.http.get(this.urlTblColabCargo).map(this.extractData).catch(this.handleError);
    }

    getTblColabCidade(): Observable<TblColabCidade[]> {
        return this.http.get(this.urlTblColabCidade).map(this.extractData).catch(this.handleError);
    }

    getTblColabEstado(): Observable<TblColabEstado[]> {
        return this.http.get(this.urlTblColabEstado).map(this.extractData).catch(this.handleError);
    }

    getTblColabGrupo(): Observable<TblColabGrupo[]> {
        return this.http.get(this.urlTblColabGrupo).map(this.extractData).catch(this.handleError);
    }

    getTblColabSituacao(): Observable<TblColabSituacao[]> {
        return this.http.get(this.urlTblColabSituacao).map(this.extractData).catch(this.handleError);
    }

    getTblColabEntreGrupo(): Observable<TblColabEntreGrupo[]> {
        return this.http.get(this.urlTblColabEntreGrupo).map(this.extractData).catch(this.handleError);
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

    putAdmin(tblColabAdmin: TblColabAdmin): Observable<TblColabAdmin> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabAdmin}`;

        tblColabAdmin.nflativo = tblColabAdmin.ativo ? 1 : 0;

        return this.http
            .put(url, {
                snomatrcompl: tblColabAdmin.snomatrcompl,
                nflativo: tblColabAdmin.nflativo
            }, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    putCargo(tblColabCargo: TblColabCargo): Observable<TblColabCargo> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabCargo}`;

        tblColabCargo.nflativo = tblColabCargo.ativo ? 1 : 0;

        return this.http
            .put(url, {
                idcargo: tblColabCargo.idcargo,
                sdccargo: tblColabCargo.sdccargo,
                nflativo: tblColabCargo.nflativo
            }, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    putCidade(tblColabCidade: TblColabCidade): Observable<TblColabCidade> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabCidade}`;

        tblColabCidade.nflativo = tblColabCidade.ativo ? 1 : 0;

        return this.http
            .put(url, {
                idcidade: tblColabCidade.idcidade,
                nflativo: tblColabCidade.nflativo,
                sdccidade: tblColabCidade.sdccidade,
                tblColabEstado: {
                    idestado: tblColabCidade.tblColabEstado.idestado,
                    nflativo: tblColabCidade.tblColabEstado.nflativo,
                    sdcestado: tblColabCidade.tblColabEstado.sdcestado
                }
            }, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    putEstado(tblColabEstado: TblColabEstado): Observable<TblColabEstado> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabEstado}`;

        tblColabEstado.nflativo = tblColabEstado.ativo ? 1 : 0;

        return this.http
            .put(url, {
                idestado: tblColabEstado.idestado,
                nflativo: tblColabEstado.nflativo,
                sdcestado: tblColabEstado.sdcestado
            }, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    putGrupo(tblColabGrupo: TblColabGrupo): Observable<TblColabGrupo> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabGrupo}`;

        tblColabGrupo.nflativo = tblColabGrupo.ativo ? 1 : 0;

        return this.http
            .put(url, {
                idgrupo: tblColabGrupo.idgrupo,
                nflativo: tblColabGrupo.nflativo,
                sdcgrupo: tblColabGrupo.sdcgrupo
            }, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    putSituacao(tblColabSituacao: TblColabSituacao): Observable<TblColabSituacao> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabSituacao}`;

        tblColabSituacao.nflativo = tblColabSituacao.ativo ? 1 : 0;

        return this.http
            .put(url, {
                idsituacao: tblColabSituacao.idsituacao,
                idiniciofim: tblColabSituacao.idiniciofim,
                idtela: tblColabSituacao.idtela,
                nflaso: tblColabSituacao.nflaso,
                nflativo: tblColabSituacao.nflativo,
                nfldesligamentoarea: tblColabSituacao.nfldesligamentoarea,
                nfldesligamentoempresa: tblColabSituacao.nfldesligamentoempresa,
                sdcsituacao: tblColabSituacao.sdcsituacao
            }, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    putEntreGrupo(tblColabEntreGrupo: TblColabEntreGrupo): Observable<TblColabEntreGrupo> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabEntreGrupo}`;

        tblColabEntreGrupo.nflativo = tblColabEntreGrupo.ativo ? 1 : 0;

        return this.http
            .put(url, {
                identregrupo: tblColabEntreGrupo.identregrupo,
                nflativo: tblColabEntreGrupo.nflativo,
                sdcentregrupo: tblColabEntreGrupo.sdcentregrupo,
                tblColabGrupo: {
                    idgrupo: tblColabEntreGrupo.tblColabGrupo.idgrupo,
                    nflativo: tblColabEntreGrupo.tblColabGrupo.nflativo,
                    sdcgrupo: tblColabEntreGrupo.tblColabGrupo.sdcgrupo
                }
            }, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    postAdmin(tblColabAdmin: TblColabAdmin): Observable<TblColabAdmin> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabAdmin}`;

        return this.http
            .post(url, {
                snomatrcompl: tblColabAdmin.snomatrcompl,
                nflativo: tblColabAdmin.nflativo
            }, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    postCargo(tblColabCargo: TblColabCargo): Observable<TblColabCargo> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabCargo}`;

        return this.http
            .post(url, {
                idcargo: tblColabCargo.idcargo,
                sdccargo: tblColabCargo.sdccargo,
                nflativo: tblColabCargo.nflativo
            }, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    postCidade(tblColabCidade: TblColabCidade): Observable<TblColabCidade> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabCidade}`;

        return this.http
            .post(url, {
                idcidade: tblColabCidade.idcidade,
                nflativo: tblColabCidade.nflativo,
                sdccidade: tblColabCidade.sdccidade,
                tblColabEstado: {
                    idestado: tblColabCidade.tblColabEstado.idestado,
                    nflativo: tblColabCidade.tblColabEstado.nflativo,
                    sdcestado: tblColabCidade.tblColabEstado.sdcestado
                }
            }, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    postEntreGrupo(tblColabEntreGrupo: TblColabEntreGrupo): Observable<TblColabEntreGrupo> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabEntreGrupo}`;

        return this.http
            .post(url, {
                identregrupo: tblColabEntreGrupo.identregrupo,
                nflativo: tblColabEntreGrupo.nflativo,
                sdcentregrupo: tblColabEntreGrupo.sdcentregrupo,
                tblColabGrupo: {
                    idgrupo: tblColabEntreGrupo.tblColabGrupo.idgrupo,
                    nflativo: tblColabEntreGrupo.tblColabGrupo.nflativo,
                    sdcgrupo: tblColabEntreGrupo.tblColabGrupo.sdcgrupo
                }
            }, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    postEstado(tblColabEstado: TblColabEstado): Observable<TblColabEstado> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabEstado}`;

        return this.http
            .post(url, {
                idestado: tblColabEstado.idestado,
                nflativo: tblColabEstado.nflativo,
                sdcestado: tblColabEstado.sdcestado
            }, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    postGrupo(tblColabGrupo: TblColabGrupo): Observable<TblColabGrupo> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabGrupo}`;

        return this.http
            .post(url, {
                idgrupo: tblColabGrupo.idgrupo,
                nflativo: tblColabGrupo.nflativo,
                sdcgrupo: tblColabGrupo.sdcgrupo
            }, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    postSituacao(tblColabSituacao: TblColabSituacao): Observable<TblColabSituacao> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabSituacao}`;

        return this.http
            .post(url, {
                idsituacao: tblColabSituacao.idsituacao,
                idiniciofim: tblColabSituacao.idiniciofim,
                idtela: tblColabSituacao.idtela,
                nflaso: tblColabSituacao.nflaso,
                nflativo: tblColabSituacao.nflativo,
                nfldesligamentoarea: tblColabSituacao.nfldesligamentoarea,
                nfldesligamentoempresa: tblColabSituacao.nfldesligamentoempresa,
                sdcsituacao: tblColabSituacao.sdcsituacao
            }, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }
}