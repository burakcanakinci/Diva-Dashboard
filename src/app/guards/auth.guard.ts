import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, CanMatch, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<unknown>, CanLoad, CanMatch {
  authService: any;
  router: any;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const username = route.queryParams['username'];
    const password = route.queryParams['password'];
    if (username == 'admin' && password == 'admin') {
      // this.router.navigate(['dashboard-page'], { queryParams: { username: username, password: password } });
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
  // canActivateChild(
  //   childRoute: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     const loggedIn = this.authService.checkCredentials(this.router.login, this.router.password);
  //     if (!loggedIn) {
  //       this.router.navigate(['/login']);
  //     }
  //     return loggedIn;
  // }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
