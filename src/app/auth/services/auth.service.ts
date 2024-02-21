import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class AuthService {

  private baseUrl = environment.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) { }

  createCredentials(): HttpHeaders {

    const username:string = 'usertest';
    const password:string = '123456';

    const base64Credentials = btoa(`${username}:${password}`);
    // Crear el encabezado de autorización
    const headers = new HttpHeaders({
      'Authorization': `Basic ${base64Credentials}`
    });
    return headers;
  }

  get currentUser(): User | undefined {
    if(!this.user) return undefined;
    return structuredClone(this.user);
  }

  login(userName: string, password: string): Observable<User> {
    const headers = this.createCredentials();
    let params = new HttpParams();

    params = params.append('usr', userName);
    params = params.append('pwd', password);

    return this.http.get<User>(`${ this.baseUrl }/login`, {headers: headers, params: params})
      .pipe(
        tap(user => {
          this.user = user;
          localStorage.setItem('token', user.token);
        }),
        catchError(err => of(err))
      );
  }

  checkAuthentication(): Observable<boolean> {
    if(!localStorage.getItem('token')) return of(false);

    const headers = this.createCredentials();
    const token = localStorage.getItem('token');
    let params = new HttpParams();

    params = params.append('tkn', token!);

    return this.http.get<User>(`${ this.baseUrl }/users`, {headers: headers, params: params})
      .pipe(
        tap(user => this.user = user),
        map(user => !!user),
        catchError(err => of(false))
      );
  }

  logout(): void {
    this.user = undefined;
    localStorage.clear();
  }


}
