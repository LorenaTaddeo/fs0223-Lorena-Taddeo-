import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { User } from '../auth/interfaces/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  usersArray: User[] = [];

  constructor(
    private dashboardSvc: DashboardService
  ){}

  ngOnInit(){
    this.dashboardSvc.get().subscribe(res => this.usersArray = res )
  }

  delete(user: User): void {
    this.dashboardSvc.delete(user.id).subscribe(
      () => {
        alert('Elemento eliminato con successo.');
      },
      error => {
        console.error('errore', error);
      }
    );
  }

  changeMail(email: string): void {
    const newEmail = prompt('Enter the new email:');
    if (newEmail) {
      const userToUpdate = this.usersArray.find(u => u.email === email);
      if (userToUpdate) {
        userToUpdate.email = newEmail;
        this.dashboardSvc.put(userToUpdate).subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }

  changeName(name: string): void {
    const newName = prompt('Enter the new name:');
    if (newName) {
      const userToUpdate = this.usersArray.find(u => u.name === name);
      if (userToUpdate) {
        userToUpdate.name = newName;
        this.dashboardSvc.put(userToUpdate).subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
          );
        }
      }
    }
}
