import { Injectable } from '@angular/core';
import { User } from 'app/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {


  sessionStorageUserModel:User=new User();
  constructor() { }


  public setUser(key:string,value:User){
    
    this.sessionStorageUserModel[key]=value;
    }

    get(key:string):string{
      return this.sessionStorageUserModel[key]
      }

  removeUser(key:string){
    this.sessionStorageUserModel[key]=null;
    }

  clearUser(){
  this.sessionStorageUserModel=new User();
  }
}
