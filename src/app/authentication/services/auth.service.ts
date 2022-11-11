import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Name of localstorage property to store logged user
 */
const LOGGED_USER = 'user';

/**
 * Service contains methods to perform user authentication, logout
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   * URL should be used for redirection after login
   */
  public redirectUrl: string | undefined;

  constructor(private http: HttpClient) {}

  /**
   * Check if user is logged in
   *
   * @returns true if user is logged in
   */
  get isLoggedIn(): boolean {
    return !!localStorage.getItem(LOGGED_USER);
  }

  /**
   * Perform login
   *
   * @param username User email
   * @param password User password
   * @returns login result
   */
  public login(username: string, password: string): Observable<any> {
    return this.http.post('api/login', { username, password }).pipe(
      tap((res) => {
        this.setSession(res);
        return res;
      })
    );
  }

  /**
   * Set new session
   *
   * @param authResult Response form Authentication service
   */
  protected setSession(authResult: any): void {
    localStorage.setItem(LOGGED_USER, authResult.user);
  }
}
