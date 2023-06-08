import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface SignupData{
  email: string;
  password: string;
  name: string;
  surname:string;
}

export interface UserData{
  id: string;
  email: string;
  name: string;
  surname:string;
}

export interface AuthData{
    accessToken: string;
    user: UserData;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  apiUrl:string = 'http://localhost:4200'
  registerUrl: string = this.apiUrl + '/register';
  loginUrl:string = this.apiUrl + '/login';
  userUrl:string = this.apiUrl + '/users';

  private authSubject = new BehaviorSubject<null | AuthData>(null)
  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(user => Boolean(user)));

  autoLogTimer: any;


  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.restoreUser();
   }


   login(data:{email:string, password:string}){
    return this.http.post<AuthData>(this.loginUrl,data).pipe(tap(data => {
      this.authSubject.next(data);
      localStorage.setItem('user', JSON.stringify(data));

      const expDate = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date
      this.autoLogout (expDate);
    }))
   }


   logout(){
    this.authSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
   }

   autoLogout(expDate: Date){
    const expMs = expDate.getTime() - new Date().getTime()
    this.autoLogTimer = setTimeout(() =>{
      this.logout()
    }, expMs)
   }

   signUp(data:SignupData){
    return this.http.post<AuthData>(this.registerUrl, data)
   }

   restoreUser(){
    const userJson = localStorage.getItem('user')
    if(!userJson){
      return
   }

   const user: AuthData = JSON.parse(userJson);
   if(this.jwtHelper.isTokenExpired(user.accessToken)){
    return;
    }

    this.authSubject.next(user)

  }

}
