import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { User } from "../../user-service.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  password: string;
  age: number;
  id: string;
  errorMessage=false;
  successMessage=false;
  user:any;
  constructor(private userService:UserServiceService,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (param) => {
        this.userService.getUser(param['id']).subscribe(
          (result) => {
            this.user = result;
            console.log('Result: Get User API - ', result);
          },
          (error) => {
            console.log('Error: Get User API - ', error);
          },
          () => {
            console.log('Complete: Get User API');
          }
        );
      }
    );
  }

  updateUser(){
    this.userService.updateUser(
      {
        password:this.password,
        age:this.age,
        id: this.id
      }
    ).subscribe(
      (result) => {
        console.log('Result: Create User API - ', result);
        // console.log(this.userData.firstName);
      },
      (error) => {
        console.log('Error: Create User API - ', error);
        this.errorMessage=true;
      },
      () => {
        console.log('Complete: Create User API');
        this.clearForm();
        this.errorMessage=false;
        this.successMessage=true;
      }
    );
  }

  clearForm(){
    (<HTMLFormElement>document.getElementById("Edit")).reset();
   }

}
