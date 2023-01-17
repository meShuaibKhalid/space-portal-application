import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/interfaces';

@Injectable()
export class AuthService {
  constructor() {}

  public login(value: User) {
    localStorage.setItem('user', JSON.stringify(value));
  }

  public logout() {
    localStorage.removeItem('user');
  }

  /**
   * 
   * @returns boolean
   */
  public isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
