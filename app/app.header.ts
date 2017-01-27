import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/app.header.html',
    selector: 'header-app'
})
export class AppHeader {

    ngOnInit() {
        setTimeout(() => {
            document.getElementById("loader").setAttribute("style", "display:none");
            document.getElementById("app").setAttribute("style", "display:true");
        }, 1000);
    }

}
