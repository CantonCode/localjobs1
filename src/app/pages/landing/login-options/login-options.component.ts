import { Component, OnInit } from '@angular/core';
import { MoneyButtonClient} from '@moneybutton/api-client';






@Component({
    selector: 'login-options-cmp',
    moduleId: module.id,
    templateUrl: 'login-options.component.html'
})

export class LoginOptionsComponent {
  readonly client = new MoneyButtonClient("0d81d3526f0516696e4da19bc46df97e");
 
    ngOnInit(){
        
      
      

      // client.requestAuthorization(
      //   'auth.user_identity:read',
      //   "http://google.com/"
      // );
      //  client.handleAuthorizationResponse();

      //  console.log(client);



    }

    authMoneyButton(){
      const client = this.client;
      console.log("AUTH MONEYBUTTON");
      console.log(client);

      const url = client.requestAuthorization(
        'auth.user_identity:read users.profiles:read users.balance:read',
        "http://localhost:4200/redirect"
      )
      

      XMLHttpRequest.prototype.send = function(value) {
          this.addEventListener("progress", function(){
              console.log("Loading. Here you can intercept...");
          }, false);
         
      };
     
    }
    
}
