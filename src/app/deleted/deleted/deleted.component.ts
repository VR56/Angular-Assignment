import { Component, OnInit } from '@angular/core';
import { UserServiceService,User } from "../../user-service.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {
  // usersList: Observable<any>;
  usersList:User[];
  isDeleted:false;

  constructor(private users:UserServiceService) { }
  ngOnInit(): void {
    // this.usersList = this.users.getUsers();
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
  bool=false;
  activate(id){
    console.log(this.bool);
    console.log(id);
    this.users.activateDeactivateUser(this.bool,id).subscribe(
          (result) => {
            console.log('Result: Create User API - ', result);
          },
          (error) => {
            console.log('Error: Create User API - ', error);
          },
          () => {
            console.log('Complete: Create User API');
          }
        );
  }

}
