import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import Stepper from 'bs-stepper';
import { Job } from '../src2/app/models/job.model';


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
    jobTitle:string;
    jobDescription:string;
    jobCat1:string;
    jobCat2:string;
    jobCat2List = [];
    jobDocument: Job;
    jobDate:Date;



  constructor(private calendar: NgbCalendar) {
  }

    ngOnInit(){

      

    }

    next(currCard){
      var valid = this.validate(currCard);

      if(valid){
        console.log(currCard)
        var currIndex = this.slides.indexOf(currCard);
        if(currIndex == this.slides.length-1){
         console.log("Last Card");
         this.createJobObject();
         this.currentSlide = "confirmDetails";
        }else{
         var nextIndex = currIndex + 1;
         currCard = this.slides[nextIndex];
         console.log(currCard);
 
         this.currentSlide = currCard;
        }
      }else{
        
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

 

  logDetails(){
    console.log(this.jobTitle);
    console.log(this.jobDescription);
    console.log(this.jobCat1);
    console.log(this.jobCat2);
  }

  jobCat1Change(category){
    console.log(category);
    this.jobCat2List = []

    switch (category) {
      case "Construction":
          this.jobCat2List = ["Painting","Carpentry","Roofing","Plumbing"];
        break;
      
      case "Land":
          this.jobCat2List = ["Mowing","Digging","Weeding"];
        break;

      case "Cleaning":
          this.jobCat2List = ["House","Factory"];
        break
    
    }
  }

  validate(card){
    switch (card) {
      case 'title':
          console.log(this.jobTitle);
          if(this.jobTitle == undefined ||  this.onlySpaces(this.jobTitle)){
            console.log("INVALID");
            return false;
          }
        break;

        case 'desc':
          console.log(this.jobDescription);
          if(this.jobDescription == undefined ||  this.onlySpaces(this.jobDescription)){
            console.log("INVALID");
            return false;
          }
        break;

        case 'category':
          console.log(this.jobCat2);
          if(this.jobCat2 == undefined){
            console.log("INVALID");
            return false;
          }
        break;
        
        case 'date':
          
          if(this.calendarDay == null){
            console.log("NOOOP DATTEEEE");
            return false;
          }else{
            this.jobDate = new Date(this.calendarDay.year,this.calendarDay.month, this.calendarDay.day);
            console.log(this.jobDate);
          }

        break;

      
    }

    return true;
  }

  createJobObject(){
    this.jobDocument = new Job()
    console.log(this.jobDocument);
  }

  confirm(){
    
  }

  edit(){
    this.currentSlide = 'date';
  }

  onlySpaces(str) {
    return /^\s*$/.test(str);
  }
}


    


