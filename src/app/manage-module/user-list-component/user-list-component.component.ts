import { Component, OnInit } from '@angular/core';
import { UserServiceService, User } from "../../user-service.service";
import { Router } from '@angular/router';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent implements OnInit {

  // usersList=[];
  // usersList : [];
  usersList:User[];
  constructor(private users:UserServiceService,private router : Router) { }

  ngOnInit():void{
    // this.usersList=this.users.getUsers();
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
  onSelect(user){
    this.router.navigate(['/manage',user.id]);
  }
  onSelectEdit(user){
    this.router.navigate(['manage/edit',user.id]);
  }
  createUser(){
    this.router.navigate(['manage/create']);
  }
}
