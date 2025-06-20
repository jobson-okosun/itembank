import { Injectable } from '@angular/core';
import { IUser } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class SchedulerAccountService {
  currentUser!: IUser
  constructor() { }

  
  setCurrentUser(user:IUser){
    this.currentUser = user
 }

 getUser(): IUser{
   return this.currentUser
 }
}
