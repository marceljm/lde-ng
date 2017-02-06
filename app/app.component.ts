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

}
