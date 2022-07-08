import { Component, OnInit } from '@angular/core';
import { MoneyButtonClient} from '@moneybutton/api-client';
import { User } from 'app/models/User.model';
import { SessionStorageService } from 'app/services/session-storage-service.service';
import { MoneybuttonService } from 'app/services/moneybutton.service';
import { TouchSequence } from 'selenium-webdriver';
import { Router } from '@angular/router';



@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  constructor(private mbService:MoneybuttonService,private sessionStorage:SessionStorageService,private router: Router){}

  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  readonly client = new MoneyButtonClient("0d81d3526f0516696e4da19bc46df97e");
  user: User;

  jobs = [
    { title: 'Garden', cost: '100', description: 'Garden Maintence', photoURL: 'https://thumbs.dreamstime.com/b/unkempt-garden-overgrown-messy-backyard-103098951.jpg', location:'Castletroy, Co,Limerick', lables:['Garden','Tools']},
    { title: 'House', cost: '200', description: 'Painting my house', photoURL: 'https://www.creditunion.ie/ILCU/media/Images/Public%20site/News/Blog/house-renovation-cost.jpg?ext=.jpg',location:'Tralee, Co.Kerry', lables:['Painting','Plastering'] },
    { title: 'Lawn', cost: '50', description: 'mow my grass', photoURL: 'http://www.gmorrisonmowing.com/sites/default/files/services/lawnmower-3.jpg',location:'Dublin 4, Co.Dublin', lables:['Mowing']},
    { title: 'Bar', cost: '25', description: 'one night bar work', photoURL: 'https://aceworkers.b-cdn.net/wp-content/uploads/2021/11/bar-jobs-abroad.png',location:'Dungarvan, Co.Waterford', lables:['Pints'] },
    { title: 'Electrical', cost: '111', description: 'wire outside lighting', photoURL: 'https://www.amvsystems.ie/wp-content/uploads/2015/05/monart-electrical-work.png',location:'Ballybunion, Co,Kerry', lables:['Wiring']}  ];
 

    async ngOnInit(){
      
      this.chartColor = "#FFFFFF";

      this.canvas = document.getElementById("chartHours");
      this.ctx = this.canvas.getContext("2d");

      // this.user = await this.mbService.getuser();

      try {
        this.user = await this.mbService.getuser();
      } catch (error) {
        console.log(error);

        if(error.title =='Unauthorized'){
          console.log("User needs to re login");
          this.router.navigate(['/login']);
        }
      }

      console.log(this.user)
    


  }
}

 

