import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import { UserService } from '../core/user.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public userService: UserService,
    private router: Router
  ) {}

  canActivate(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(user => {
        this.router.navigate(['/user']);
        return resolve(false);
      }, err => {
        return resolve(true);
      })
    })
  }
}
