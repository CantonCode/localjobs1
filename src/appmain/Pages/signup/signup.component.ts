import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class Signup1Component implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    constructor() { }

    ngOnInit() {}
}
