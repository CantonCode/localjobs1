import { Injectable } from '@angular/core';
import { MoneyButtonClient} from '@moneybutton/api-client';
import { User } from '../src2/app/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class MoneybuttonService {

  constructor() { }
  client = new MoneyButtonClient("0d81d3526f0516696e4da19bc46df97e");
  

  async getuser(){
    const { id: userId } = await this.client.getIdentity()
    const profile = await this.client.getUserProfile(userId)


      new User(profile.name,profile.primaryPaymail);


    return new User(profile.name,profile.primaryPaymail);
  
  }

  isUserAuthenticated(){
    
  }
}
  

