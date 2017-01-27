import { Component, OnInit } from '@angular/core';
import { TreeService } from './tree/treeService';
import { TreeNode } from 'primeng/primeng';

@Component({
    templateUrl: 'app/app.tree.html',
    selector: 'tree-app',
    providers: [TreeService]
})
export class AppTree implements OnInit {
    private errorMessage: string;

    tree: TreeNode[];

    selectedNode: TreeNode;

    display: boolean = false;

    id: string;
    name: string;
    image: string;

    constructor(
        private treeService: TreeService) {
    }

    ngOnInit() {
        this.getTree();
    }

    getTree() {
        this.treeService.getTree().subscribe(
            tree => this.tree = tree,
            error => this.errorMessage = <any>error
        );
    }

    nodeSelect(event) {
        this.id = this.selectedNode.data;
        this.name = this.selectedNode.label;
        this.image = "http://portalcolaboradores/idc/portalcolaboradores/userimages/" + this.id + ".jpg";
        this.display = true;
    }

    updateUrl(event) {
        this.image = "app/resources/images/profile.png";
    }

    showEntreGrupoDialog() {
        this.display = true;
    }
}