import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/app.component.html',
    selector: 'my-app'
})
export class AppComponent {

    constructor(
        private router: Router) {
    }

    handleChange(e) {
        let index = e.index;
        let link;
        switch (index) {
            case 0:
                link = ['/car'];
                break;
            case 1:
                link = ['/validation'];
                break;
            case 2:
                link = ['/novo'];
                break;
            case 3:
                link = ['/config'];
                break;
            case 4:
                link = ['/home'];
                break;
            case 5:
                link = ['/hierarquia'];
        }
        this.router.navigate(link);
    }

}
