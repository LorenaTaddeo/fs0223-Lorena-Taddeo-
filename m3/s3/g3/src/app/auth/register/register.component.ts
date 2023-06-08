import { Component } from '@angular/core';
import { AuthService, SignupData } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  data:SignupData = {
    email: '',
    password: '',
    name: '',
    surname: ''
  }

  constructor(
    private authSvc: AuthService
  ){}


  register(){
    this.authSvc.signUp(this.data)
    .subscribe(res => console.log(res.user.name)
    )
  }
}
