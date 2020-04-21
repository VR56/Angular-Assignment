import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../../user-service.service";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-details-component',
  templateUrl: './user-details-component.component.html',
  styleUrls: ['./user-details-component.component.css']
})
export class UserDetailsComponentComponent implements OnInit {
  user:any;
  constructor(private route:ActivatedRoute,private userService:UserServiceService) { }
  ngOnInit(){
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

}

// export interface User {
//   id?: string;
//   firstName: string;
//   lastName: string;
//   age: number;
//   login: string;
//   password: string;
//   isDeleted?: boolean;
// }
