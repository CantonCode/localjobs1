import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';


@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html',
    styleUrls: ['./typography.component.scss']
})

export class TypographyComponent implements OnInit{
    stepper1:Stepper;
    ngOnInit(){
      

        var stepper1Node = document.getElementById('stepper1')
        this.stepper1 = new Stepper(document.querySelector('#stepper1'))

          stepper1Node.addEventListener('show.bs-stepper', function (event) {
            console.warn('show.bs-stepper', event)
          })
          stepper1Node.addEventListener('shown.bs-stepper', function (event) {
            console.warn('shown.bs-stepper', event)
          })
      

    }

    next(){
       this.stepper1.next();
    }

    

}
