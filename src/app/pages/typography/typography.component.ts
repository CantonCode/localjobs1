import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import Stepper from 'bs-stepper';


@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html',
    styleUrls: ['./typography.component.scss']
})

export class TypographyComponent implements OnInit{
    stepper1:Stepper;
    calendarDay: NgbDateStruct;
  date: {year: number, month: number};
  slides = ['title','desc','category','address','date'];
  currentSlide = 'title';

  constructor(private calendar: NgbCalendar) {
  }

    ngOnInit(){
        

        var stepper1Node = document.getElementById('stepper1')
        this.stepper1 = new Stepper(document.querySelector('#stepper1'))

          stepper1Node.addEventListener('show.bs-stepper', function (event) {
            console.warn('show.bs-stepper', event)
          })
          
    }

    next(currCard){
       console.log(currCard)
       var currIndex = this.slides.indexOf(currCard);
       
       if(currIndex == this.slides.length-1){
        console.log("Last Card")
       }else{
        var nextIndex = currIndex + 1;
        currCard = this.slides[nextIndex];
        console.log(currCard);

        this.currentSlide = currCard;
       }
    }

    back(currCard){
      console.log(currCard)
       var currIndex = this.slides.indexOf(currCard);
       
       if(currIndex == 0){
        console.log("Last Card")
       }else{
        var nextIndex = currIndex - 1;
        currCard = this.slides[nextIndex];
        console.log(currCard);

        this.currentSlide = currCard;
       }
   }

   selectToday() {
    this.calendarDay = this.calendar.getToday();
  }

    

}
