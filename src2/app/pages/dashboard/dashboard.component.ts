import { Component, OnInit } from '@angular/core';
import { CrudService } from '../src2/app/services/crud/crud.service';
import { HttpClient } from '@angular/common/http';



@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  constructor(private crudService: CrudService,private http:HttpClient){}


  Jobs:any = [];
 

    ngOnInit(){
      console.log("HI")
      // this.http.get<any>('https://shrouded-reef-89389.herokuapp.com/api/jobs/').subscribe(data => {
      //   console.log(data)
    // })             
  }
}

 

