import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'app/_services/account.service';
import { first } from 'rxjs/operators';
import { Worker} from '../../../../models/worker.model'

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  id:any;
  user:any;
  loading:boolean;
  constructor(private route: ActivatedRoute,private accountService: AccountService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loading = true;
    this.getUserDetails(this.id);
    this.user;
    
  }
  getUserDetails(id) {
    this.accountService.getWorkerById(id)
    .pipe(first())
    .subscribe({
        next: data => {
;
           console.log("THIS IS THE USER PROFILE DATA",data)
           this.loading = false;
           this.user = data;
           this.convertCreatedDate();
        },
        error: error => {
          console.log(error)
        }
    })
  }

  convertCreatedDate() {
    var month = new Date(this.user.created).toLocaleString('default', { month: 'long' });
    var year =  new Date(this.user.created).getFullYear();

    console.log(month)




  }

}


