import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { AccessData } from './interfaces/access-data';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginData } from './interfaces/login-data';
import { RegisterData } from './interfaces/register-data';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper:JwtHelperService = new JwtHelperService();
  apiUrl = environment.apiUrl;


  private authSubject = new BehaviorSubject<null | AccessData>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(dato => Boolean(dato)));

  authLogoutTimer:any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(data:LoginData){
    return this.http.post<AccessData>(this.apiUrl + '/login', data)
    .pipe(tap(data =>{
      this.authSubject.next(data);
      localStorage.setItem('user', JSON.stringify(data))

      const expDate = this.jwtHelper
      .getTokenExpirationDate(data.accessToken) as Date;
    }),
      
    )
  }

  signUp(data:RegisterData){
    return this.http.post<AccessData>(this.apiUrl + '/register', data);
  }

}
