import { Injectable } from '@angular/core';
import { Account } from '../authentication/model/account.model';
import { Role } from './enum/role';
import { ItemAnalysis } from '../pages/users/model/item-analysis.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SecureStorageService } from '../services/secure-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currentUser?: Account;

  constructor(
    private http: HttpClient,
    private secureStorage: SecureStorageService
  ) {}

  setCurrentUser(account: Account) {
    this.currentUser = account;
    // console.log(this.currentUser);
  }

  getCurrentUser(): Account {
    return this.currentUser ? this.currentUser : this.getCurrentUserAfterReload();
  }

  getCurrentUserAfterReload(): Account {
    const user = this.secureStorage.getItem(environment.secureStorageId);
    return user as any;
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
