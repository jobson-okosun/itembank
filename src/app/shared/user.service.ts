import { Injectable } from '@angular/core';
import { Account } from '../authentication/model/account.model';
import { Role } from './enum/role';
import { ItemAnalysis } from '../pages/users/model/item-analysis.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currentUser?: Account;

  constructor(private http: HttpClient) {}

  setCurrentUser(account: Account) {
    this.currentUser = account;
    // console.log(this.currentUser);
  }

  getCurrentUser(): Account {
    return this.currentUser;
  }

  getUserRole(): Role {
    if (this.currentUser != null) return this.currentUser.authority;
    else return null;
  }

  hasRole(role: Role): boolean {
    if (this.currentUser != null) {
      if (this.currentUser.authority == role) {
        return true;
      }
    }

    return false;
  }
}
