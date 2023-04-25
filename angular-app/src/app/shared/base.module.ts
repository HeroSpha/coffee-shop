import { Injector } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../customer/models/user';
import { Router } from '@angular/router';

export abstract class BaseComponent {
  private jwtHelper: JwtHelperService;
  private router!: Router;
  constructor(injector: Injector) {
    this.jwtHelper = injector.get(JwtHelperService);
    this.router = injector.get(Router);
  }

  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    return false;
  };

  logOut = () => {
    localStorage.removeItem('jwt');
    window.location.reload();
  };

  getCurrentUser(): User {
    const user = <User>{};
    if (this.isUserAuthenticated()) {
      const token = localStorage.getItem('jwt')!;
      const decodedToken = this.jwtHelper.decodeToken(token);

      user.userId = decodedToken.sub;
      user.name = decodedToken.given_name;
      user.surname = decodedToken.family_name;
      user.email = decodedToken.email;
      user.role =
        decodedToken[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ];

      return user;
    } else {
      return user;
    }
  }
}
