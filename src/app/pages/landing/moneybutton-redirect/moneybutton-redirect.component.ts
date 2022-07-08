import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpInterceptor, 
    HttpEvent, 
    HttpHandler, 
    HttpRequest, 
    HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoneyButtonClient} from '@moneybutton/api-client';
import { User } from 'app/models/User.model';
import { SessionStorageService } from 'app/services/session-storage-service.service';





@Component({
    selector: 'moneybutton-redirect-cmp',
    moduleId: module.id,
    templateUrl: 'moneybutton-redirect.component.html'
})

export class MoneyButtonRedirectComponent implements OnInit{
    client1 = new MoneyButtonClient("0d81d3526f0516696e4da19bc46df97e");
    user: User;
    constructor(private sessionStorage:SessionStorageService,private router: Router){}

		
    
  

    async ngOnInit(){

        const client = this.client1;
        console.log("AUTH MONEYBUTTON REdirected");
        console.log(client);

        client.handleAuthorizationResponse();

        this.router.navigate(['/joblistings']);
        
        // if (this.user!= null ){
        //     console.log("User Exists");
        //     this.router.navigate(['/joblistings']);
        // }


        // this.router.navigate(
        //     [], 
        //     {
        //       queryParamsHandling: 'merge', // remove to replace all query params by provided
        //     });

        // this.urlSubscription = this.activatedRoute.url.subscribe(
		// 	( urlSegments ) => {

        //         console.log(urlSegments);
        //     }
        // );

        // if ((new URLSearchParams(window.location.search)).has('code')) {

        //     console.log("IT IS HERE");
        // }
        // else{
        //     console.log("NOT HERE")
        // }

        // console.log(window.document.location.search)


        // console.log("HIHIHIIHIH",param.queryParams);

        // const token = this.router.events.subscribe(params =>{
        //     console.log(params);
        // })
        // console.log(token);

        // const test = window.localStorage;
        // console.log("LCOAL STORAGE:", test)

        // const test1 = window;
        // console.log("string:", test1)

        // const urlParams = new URLSearchParams(window.location.origin);
        // console.log(urlParams);
 

  
        // this.getAllItems();
    
    }

    async getuser(){
        var client = new MoneyButtonClient("0d81d3526f0516696e4da19bc46df97e");
        const { id: userId } = await client.getIdentity()
        const profile = await client.getUserProfile(userId)
        console.log(JSON.stringify(profile))

        this.user = new User(profile.name,profile.primaryPaymail);
        this.sessionStorage.setUser("User",this.user);

        console.log("This is the new USER: " + this.user.email + this.user.name);
        

        console.log(this.sessionStorage.get("User"));
       
    }

}

