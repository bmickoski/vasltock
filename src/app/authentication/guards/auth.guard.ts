import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from '../services/auth.service';

/**
 * This guard checks if user logged in to allow activate URL
 */
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Check if URL can be activated
   *
   * @param next Contains the information about a route associated with a component loaded in an outlet at a particular moment in time
   * @param state Represents the state of the router at a moment in time.
   * @returns true if URL can be activated
   */
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url = state.url;
    return this.checkLogin(url);
  }

  /**
   * Check if user logged in. If not logged in, then redirect to login page
   *
   * @param url Checked URL
   * @returns true if user logged in
   */
  protected checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }

    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
