import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from "@angular/forms";
import { UserServiceService } from 'src/app/user-service.service';
import { User } from "../../user-service.service";

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  fname: string;
  lname: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
  id: string;
  usersList: User[];
  successMessage=false;
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }
  errorlogger:any;

  createUser() {
    this.userService.createUser(
      {
        firstName: this.fname,
        lastName: this.lname,
        login: this.login,
        age: this.age,
        password: this.password
      }
    ).subscribe(
      (result) => {
        console.log('Result: Create User API - ', result);
        
      },
      (error) => {
        console.log('Error: Create User API - ', error);
      },
      () => {
        console.log('Complete: Create User API');
        this.clearForm();
        this.successMessage=true;
      }
    );
  }

  clearForm(){
    (<HTMLFormElement>document.getElementById("Login")).reset();
   }


}
