import { Component, OnInit } from '@angular/core';
import { UserServiceService,User } from "../../user-service.service";

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  usersList:User[];
  constructor(private users:UserServiceService) { }

  ngOnInit(): void {
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

  bool=true;
  deactivate(id){
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
