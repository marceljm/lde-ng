import { Component, OnInit } from '@angular/core';
import { VwColabSituacaoQtde } from './charts/vwColabSituacaoQtde';
import { VwColabCargoQtde } from './charts/vwColabCargoQtde';
import { VwColabCidadeQtde } from './charts/vwColabCidadeQtde';
import { VwColabQtdeService } from './charts/vwColabQtdeService';
import { VwColabGerenteQtde } from './charts/vwColabGerenteQtde';
import { VwColabCoordenadorQtde } from './charts/vwColabCoordenadorQtde';
import { VwColabDtAdmissaoAreaQtde } from './charts/vwColabDtAdmissaoAreaQtde';
import { VwColabDtAdmissaoQtde } from './charts/vwColabDtAdmissaoQtde';
import { VwColabDtDesligAreaQtde } from './charts/vwColabDtDesligAreaQtde';
import { VwColabGrupoQtde } from './charts/vwColabGrupoQtde';
import { VwColabEntreGrupoQtde } from './charts/vwColabEntreGrupoQtde';
import { UIChart } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: 'app/app.home.html',
    selector: 'home-app',
    providers: [VwColabQtdeService]
})
export class AppHome implements OnInit {

    private errorMessage: string;
    private colorList: string[] = [
        "#4BB2C5",
        "#EAA228",
        "#C5B47F",
        "#579575",
        "#839557",
        "#958C12",
        "#953579",
        "#4B5DE4",
        "#D8B83F",
        "#FF5800",
    ]

    displayEntreGrupo: boolean = false;
    private selectedGrupo: string;

    vwColabSituacaoQtdeOperChart: any;
    private vwColabSituacaoQtdeOperList: VwColabSituacaoQtde[];
    private vwColabSituacaoQtdeOperLabel: Array<string> = new Array<string>();
    private vwColabSituacaoQtdeOperAmount: Array<number> = new Array<number>();

    vwColabSituacaoQtdeStaffChart: any;
    private vwColabSituacaoQtdeStaffList: VwColabSituacaoQtde[];
    private vwColabSituacaoQtdeStaffLabel: Array<string> = new Array<string>();
    private vwColabSituacaoQtdeStaffAmount: Array<number> = new Array<number>();

    vwColabSituacaoQtdeTotalChart: any;
    private vwColabSituacaoQtdeTotalList: VwColabSituacaoQtde[];
    private vwColabSituacaoQtdeTotalLabel: Array<string> = new Array<string>();
    private vwColabSituacaoQtdeTotalAmount: Array<number> = new Array<number>();

    vwColabCargoQtdeChart: any;
    private vwColabCargoQtdeList: VwColabCargoQtde[];
    private vwColabCargoQtdeLabel: Array<string> = new Array<string>();
    private vwColabCargoQtdeAmount: Array<number> = new Array<number>();

    vwColabCidadeQtdeChart: any;
    private vwColabCidadeQtdeList: VwColabCidadeQtde[];
    private vwColabCidadeQtdeLabel: Array<string> = new Array<string>();
    private vwColabCidadeQtdeAmount: Array<number> = new Array<number>();

    vwColabGerenteQtdeChart: any;
    private vwColabGerenteQtdeList: VwColabGerenteQtde[];
    private vwColabGerenteQtdeLabel: Array<string> = new Array<string>();
    private vwColabGerenteQtdeAmount: Array<number> = new Array<number>();

    vwColabCoordenadorQtdeChart: any;
    private vwColabCoordenadorQtdeList: VwColabCoordenadorQtde[];
    private vwColabCoordenadorQtdeLabel: Array<string> = new Array<string>();
    private vwColabCoordenadorQtdeAmount: Array<number> = new Array<number>();

    private vwColabDtAdmissaoAreaQtdeList: VwColabDtAdmissaoAreaQtde[];
    private vwColabDtAdmissaoAreaQtdeLabel: Array<string> = new Array<string>();
    private vwColabDtAdmissaoAreaQtdeAmount: Array<number> = new Array<number>();

    vwColabDtAdmissaoQtdeChart: any;
    private vwColabDtAdmissaoQtdeList: VwColabDtAdmissaoQtde[];
    private vwColabDtAdmissaoQtdeLabel: Array<string> = new Array<string>();
    private vwColabDtAdmissaoQtdeAmount: Array<number> = new Array<number>();

    vwColabDtDesligAreaQtdeChart: any;
    private vwColabDtDesligAreaQtdeList: VwColabDtDesligAreaQtde[];
    private vwColabDtDesligAreaQtdeLabel: Array<string> = new Array<string>();
    private vwColabDtDesligAreaQtdeAmount: Array<number> = new Array<number>();

    vwColabGrupoQtdeChart: any;
    private vwColabGrupoQtdeList: VwColabGrupoQtde[];
    private vwColabGrupoQtdeLabel: Array<string> = new Array<string>();
    private vwColabGrupoQtdeAmount: Array<number> = new Array<number>();

    vwColabEntreGrupoQtdeChart: any;
    private vwColabEntreGrupoQtdeList: VwColabEntreGrupoQtde[];
    private vwColabEntreGrupoQtdeLabel: Array<string> = new Array<string>();
    private vwColabEntreGrupoQtdeAmount: Array<number> = new Array<number>();
    private vwColabEntreGrupoQtdeGrupo: Array<string> = new Array<string>();
    private selectedVwColabEntreGrupoLabel: Array<string> = new Array<string>();
    private selectedVwColabEntreGrupoAmount: Array<number> = new Array<number>();

    constructor(
        private vwColabQtdeService: VwColabQtdeService) {
        this.createVwColabSituacaoQtdeOperChart();
        this.createVwColabSituacaoQtdeStaffChart();
        this.createVwColabSituacaoQtdeTotalChart();
        this.createVwColabCargoQtdeChart();
        this.createVwColabCidadeQtdeChart();
        this.createVwColabGerenteQtdeChart();
        this.createVwColabCoordenadorQtdeChart();
        this.createVwColabDtAdmissaoQtdeChart();
        this.createVwColabDtDesligAreaQtdeChart();
        this.createVwColabGrupoQtdeChart();
        this.createVwColabEntreGrupoQtdeChart();
    }

    ngOnInit() {
        this.getVwColabSituacaoQtdeList();
    }

    getVwColabSituacaoQtdeList() {
        this.vwColabQtdeService.getVwColabSituacaoQtdeOper().subscribe(
            vwColabSituacaoQtdeOperList => this.vwColabSituacaoQtdeOperList = vwColabSituacaoQtdeOperList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.vwColabSituacaoQtdeOperList) {
                    this.vwColabSituacaoQtdeOperAmount.push(entry.quantidade);
                    this.vwColabSituacaoQtdeOperLabel.push(entry.situacao);
                }
                this.createVwColabSituacaoQtdeOperChart();
                setTimeout(() => {
                    document.getElementById("oper").setAttribute("style", "display:true");
                }, 500);
            }
        );
        this.vwColabQtdeService.getVwColabSituacaoQtdeStaff().subscribe(
            vwColabSituacaoQtdeStaffList => this.vwColabSituacaoQtdeStaffList = vwColabSituacaoQtdeStaffList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.vwColabSituacaoQtdeStaffList) {
                    this.vwColabSituacaoQtdeStaffAmount.push(entry.quantidade);
                    this.vwColabSituacaoQtdeStaffLabel.push(entry.situacao);
                }
                this.createVwColabSituacaoQtdeStaffChart();
            }
        );
        this.vwColabQtdeService.getVwColabSituacaoQtdeTotal().subscribe(
            vwColabSituacaoQtdeTotalList => this.vwColabSituacaoQtdeTotalList = vwColabSituacaoQtdeTotalList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.vwColabSituacaoQtdeTotalList) {
                    this.vwColabSituacaoQtdeTotalAmount.push(entry.quantidade);
                    this.vwColabSituacaoQtdeTotalLabel.push(entry.situacao);
                }
                this.createVwColabSituacaoQtdeTotalChart();
            }
        );
        this.vwColabQtdeService.getVwColabCargoQtde().subscribe(
            vwColabCargoQtdeList => this.vwColabCargoQtdeList = vwColabCargoQtdeList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.vwColabCargoQtdeList) {
                    this.vwColabCargoQtdeAmount.push(entry.quantidade);
                    this.vwColabCargoQtdeLabel.push(entry.cargo);
                }
                this.createVwColabCargoQtdeChart();
            }
        );
        this.vwColabQtdeService.getVwColabCidadeQtde().subscribe(
            vwColabCidadeQtdeList => this.vwColabCidadeQtdeList = vwColabCidadeQtdeList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.vwColabCidadeQtdeList) {
                    this.vwColabCidadeQtdeAmount.push(entry.quantidade);
                    this.vwColabCidadeQtdeLabel.push(entry.cidade);
                }
                this.createVwColabCidadeQtdeChart();
            }
        );
        this.vwColabQtdeService.getVwColabGerenteQtde().subscribe(
            vwColabGerenteQtdeList => this.vwColabGerenteQtdeList = vwColabGerenteQtdeList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.vwColabGerenteQtdeList) {
                    this.vwColabGerenteQtdeAmount.push(entry.quantidade);
                    this.vwColabGerenteQtdeLabel.push(entry.gerente);
                }
                this.createVwColabGerenteQtdeChart();
            }
        );
        this.vwColabQtdeService.getVwColabCoordenadorQtde().subscribe(
            vwColabCoordenadorQtdeList => this.vwColabCoordenadorQtdeList = vwColabCoordenadorQtdeList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.vwColabCoordenadorQtdeList) {
                    this.vwColabCoordenadorQtdeAmount.push(entry.quantidade);
                    this.vwColabCoordenadorQtdeLabel.push(entry.coordenador);
                }
                this.createVwColabCoordenadorQtdeChart();
            }
        );
        this.vwColabQtdeService.getVwColabDtAdmissaoAreaQtde().subscribe(
            vwColabDtAdmissaoAreaQtdeList => this.vwColabDtAdmissaoAreaQtdeList = vwColabDtAdmissaoAreaQtdeList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.vwColabDtAdmissaoAreaQtdeList) {
                    this.vwColabDtAdmissaoAreaQtdeAmount.push(entry.quantidade);
                    this.vwColabDtAdmissaoAreaQtdeLabel.push(entry.dtAdmissaoArea);
                }
            }
        );
        this.vwColabQtdeService.getVwColabDtAdmissaoQtde().subscribe(
            vwColabDtAdmissaoQtdeList => this.vwColabDtAdmissaoQtdeList = vwColabDtAdmissaoQtdeList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.vwColabDtAdmissaoQtdeList) {
                    this.vwColabDtAdmissaoQtdeAmount.push(entry.quantidade);
                    this.vwColabDtAdmissaoQtdeLabel.push(entry.dtAdmissao);
                }
                this.createVwColabDtAdmissaoQtdeChart();
            }
        );
        this.vwColabQtdeService.getVwColabDtDesligAreaQtde().subscribe(
            vwColabDtDesligAreaQtdeList => this.vwColabDtDesligAreaQtdeList = vwColabDtDesligAreaQtdeList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.vwColabDtDesligAreaQtdeList) {
                    this.vwColabDtDesligAreaQtdeAmount.push(entry.quantidade);
                    this.vwColabDtDesligAreaQtdeLabel.push(entry.ddtdesligamentoarea);
                }
                this.createVwColabDtDesligAreaQtdeChart();
            }
        );
        this.vwColabQtdeService.getVwColabGrupoQtde().subscribe(
            vwColabGrupoQtdeList => this.vwColabGrupoQtdeList = vwColabGrupoQtdeList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.vwColabGrupoQtdeList) {
                    this.vwColabGrupoQtdeAmount.push(entry.quantidade);
                    this.vwColabGrupoQtdeLabel.push(entry.grupo);
                }
                this.createVwColabGrupoQtdeChart();
            }
        );
        this.vwColabQtdeService.getVwColabEntreGrupoQtde().subscribe(
            vwColabEntreGrupoQtdeList => this.vwColabEntreGrupoQtdeList = vwColabEntreGrupoQtdeList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.vwColabEntreGrupoQtdeList) {
                    this.vwColabEntreGrupoQtdeAmount.push(entry.quantidade);
                    this.vwColabEntreGrupoQtdeLabel.push(entry.id.entreGrupo);
                    this.vwColabEntreGrupoQtdeGrupo.push(entry.id.grupo);
                }
                this.createVwColabEntreGrupoQtdeChart();
            }
        );
    }

    createVwColabSituacaoQtdeOperChart() {
        this.vwColabSituacaoQtdeOperChart = {
            labels: this.vwColabSituacaoQtdeOperLabel,
            datasets: [
                {
                    data: this.vwColabSituacaoQtdeOperAmount,
                    backgroundColor: this.colorList,
                    hoverBackgroundColor: this.colorList
                }
            ]
        }
    }

    createVwColabSituacaoQtdeStaffChart() {
        this.vwColabSituacaoQtdeStaffChart = {
            labels: this.vwColabSituacaoQtdeStaffLabel,
            datasets: [
                {
                    data: this.vwColabSituacaoQtdeStaffAmount,
                    backgroundColor: this.colorList,
                    hoverBackgroundColor: this.colorList
                }
            ]
        }
    }

    createVwColabSituacaoQtdeTotalChart() {
        this.vwColabSituacaoQtdeTotalChart = {
            labels: this.vwColabSituacaoQtdeTotalLabel,
            datasets: [
                {
                    data: this.vwColabSituacaoQtdeTotalAmount,
                    backgroundColor: this.colorList,
                    hoverBackgroundColor: this.colorList
                }
            ]
        }
    }

    createVwColabCargoQtdeChart() {
        this.vwColabCargoQtdeChart = {
            labels: this.vwColabCargoQtdeLabel,
            datasets: [
                {
                    data: this.vwColabCargoQtdeAmount,
                    backgroundColor: this.colorList,
                    hoverBackgroundColor: this.colorList
                }
            ]
        }
    }

    createVwColabCidadeQtdeChart() {
        this.vwColabCidadeQtdeChart = {
            labels: this.vwColabCidadeQtdeLabel,
            datasets: [
                {
                    data: this.vwColabCidadeQtdeAmount,
                    backgroundColor: this.colorList,
                    hoverBackgroundColor: this.colorList
                }
            ]
        }
    }

    createVwColabGerenteQtdeChart() {
        this.vwColabGerenteQtdeChart = {
            labels: this.vwColabGerenteQtdeLabel,
            datasets: [
                {
                    data: this.vwColabGerenteQtdeAmount,
                    backgroundColor: this.colorList,
                    hoverBackgroundColor: this.colorList
                }
            ]
        }
    }

    createVwColabCoordenadorQtdeChart() {
        this.vwColabCoordenadorQtdeChart = {
            labels: this.vwColabCoordenadorQtdeLabel,
            datasets: [
                {
                    data: this.vwColabCoordenadorQtdeAmount,
                    backgroundColor: this.colorList,
                    hoverBackgroundColor: this.colorList
                }
            ]
        }
    }

    createVwColabDtAdmissaoQtdeChart() {
        this.vwColabDtAdmissaoQtdeChart = {
            labels: this.vwColabDtAdmissaoQtdeLabel,
            datasets: [
                {
                    label: 'Área',
                    data: this.vwColabDtAdmissaoAreaQtdeAmount,
                    backgroundColor: "#4BB2C5",
                    hoverBackgroundColor: "#4BB2C5"
                },
                {
                    label: 'Empresa',
                    data: this.vwColabDtAdmissaoQtdeAmount,
                    backgroundColor: "#EAA228",
                    hoverBackgroundColor: "#EAA228"
                }
            ]
        }
    }

    createVwColabDtDesligAreaQtdeChart() {
        this.vwColabDtDesligAreaQtdeChart = {
            labels: this.vwColabDtDesligAreaQtdeLabel,
            datasets: [
                {
                    label: 'Área',
                    data: this.vwColabDtDesligAreaQtdeAmount,
                    backgroundColor: "#4BB2C5",
                    hoverBackgroundColor: "#4BB2C5"
                }
            ]
        }
    }

    createVwColabGrupoQtdeChart() {
        this.vwColabGrupoQtdeChart = {
            labels: this.vwColabGrupoQtdeLabel,
            datasets: [
                {
                    data: this.vwColabGrupoQtdeAmount,
                    backgroundColor: this.colorList,
                    hoverBackgroundColor: this.colorList
                }
            ]
        }
    }

    createVwColabEntreGrupoQtdeChart() {
        this.vwColabEntreGrupoQtdeChart = {
            labels: this.selectedVwColabEntreGrupoLabel,
            datasets: [
                {
                    data: this.selectedVwColabEntreGrupoAmount,
                    backgroundColor: this.colorList,
                    hoverBackgroundColor: this.colorList
                }
            ]
        }
    }

    selectData(event) {
        this.selectedGrupo = event.element._model.label;

        while (this.selectedVwColabEntreGrupoAmount.length > 0)
            this.selectedVwColabEntreGrupoAmount.pop();
        while (this.selectedVwColabEntreGrupoLabel.length > 0)
            this.selectedVwColabEntreGrupoLabel.pop();

        for (let entry of this.vwColabEntreGrupoQtdeList) {
            if (entry.id.grupo == this.selectedGrupo) {
                this.selectedVwColabEntreGrupoAmount.push(entry.quantidade);
                this.selectedVwColabEntreGrupoLabel.push(entry.id.entreGrupo);
                this.vwColabEntreGrupoQtdeGrupo.push(entry.id.grupo);
            }
        }
        this.createVwColabEntreGrupoQtdeChart();
        this.showEntreGrupoDialog();
    }

    showEntreGrupoDialog() {
        this.displayEntreGrupo = true;
    }

    update(chart: UIChart) {
        chart.refresh();
    }
}