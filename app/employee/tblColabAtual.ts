import { TblColabCargo } from '../config/TblColabCargo';
import { TblColabCidade } from '../config/TblColabCidade';
import { TblColabEntreGrupo } from '../config/TblColabEntreGrupo';
import { TblColabGrupo } from '../config/TblColabGrupo';
import { TblColabSituacao } from '../config/TblColabSituacao';

export class tblColabAtual {
    nnomatricula: number;
    ddtadmissaoarea: Date;
    ddtadmissaoempresa: Date;
    ddtdesligamentoarea: Date;
    ddtdesligamentoempresa: Date;
    ddtfim: Date;
    ddtfimaso: Date;
    ddtinicio: Date;
    ddtinicioaso: Date;
    ddtnascimento: Date;
    nnologintel: number;
    nnomatriculacoord: number;
    nnomatriculadir: number;
    nnomatriculager: number;
    nnomatriculagersr: number;
    nnomatriculasuper: number;
    sdccolaborador: string;
    sdcdocumento: string;
    shrcargahoraria: string;
    shrentrada: string;
    shrsaida: string;
    snomatrcompl: string;
    tblColabCargo: TblColabCargo;
    tblColabCidade: TblColabCidade;
    tblColabEntreGrupo: TblColabEntreGrupo;
    tblColabGrupo: TblColabGrupo;
    tblColabSituacao: TblColabSituacao;
}