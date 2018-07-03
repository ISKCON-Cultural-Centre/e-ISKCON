import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
  Router
} from '@angular/router';
import { AuthService } from './auth.service';
import { DevoteeApi } from '../sdk';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,  private devoteeApi: DevoteeApi) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (!this.devoteeApi.isAuthenticated()) {
      this.router.navigate(['login']);
    } /* else {
      if (route.pathFromRoot[1].url[0].path === 'login') {
        return false;
      }
    } */
    // console.log(route.pathFromRoot[1].url[0].path);
    return true;
  }

/* export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private devoteeApi: DevoteeApi
  ) {}

   canActivate(): boolean {
    if (!this.devoteeApi.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    } else {
      console.log(this.router.url);
      return true;
    }
  } */
}
