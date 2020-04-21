import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../user-service.service";
import { Router } from "@angular/router";
import { AppComponent } from "../app.component";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usersList=[];
  constructor(private users:UserServiceService,private ac: AppComponent) { }
  
  ngOnInit():void{
    // this.usersList=this.users.getUsers();
    this.ac.title
    this.users.getUsers()  
    .subscribe(
      (result) => {
        this.usersList = result as any;
        console.log('Result: Get Users API - ', result);
      },
      (error) => {
        console.log('Error: Get Users API - ', error);
      },
      () => {
        console.log('Complete: Get Users API');
      }
    );
  }
  
}
