import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Message, SelectItem } from 'primeng/primeng';

@Component({
    templateUrl: 'app/validationdemo.html',
    selector: 'validationdemo-app',
    //providers: [VwColabQtdeService]
})
export class ValidationDemo implements OnInit {

    msgs: Message[] = [];

    userform: FormGroup;

    submitted: boolean;

    description: string;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.userform = this.fb.group({
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
            'description': new FormControl(''),
        });
    }

    onSubmit(value: string) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
    }

    get diagnostic() { return JSON.stringify(this.userform.value); }

}