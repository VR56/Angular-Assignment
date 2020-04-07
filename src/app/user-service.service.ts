import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService{
  // userData=[
  //   {
  //    "id":"RS",
  //    "firstName": "Rakesh",
  //    "lastName": "Sharma",
  //    "age": 31,
  //    "login": "RakeshSharma@xyz.com",
  //    "password":"RS123",
  //    "isDeleted": false 
  //   },
  //   {
  //    "id":"RG",
  //    "firstName": "Rahul",
  //    "lastName": "Gupta",
  //    "age": 35,
  //    "login": "RahulGupta@xyz.com",
  //    "password":"RG123",
  //    "isDeleted": true 
  //   },
  //   {
  //    "id":"RR",
  //    "firstName": "Richik",
  //    "lastName": "Roy",
  //    "age": 41,
  //    "login": "RichikRoy@xyz.com",
  //    "password":"RR123",
  //    "isDeleted": false 
  //   },
  //   {
  //    "id":"AN",
  //    "firstName": "Avishek",
  //    "lastName": "Nair",
  //    "age": 22,
  //    "login": "AvishekNair@xyz.com",
  //    "password":"AN123",
  //    "isDeleted": false 
  //   },
  //   {
  //    "id":"SC",
  //    "firstName": "Sushant",
  //    "lastName": "Choudhary",
  //    "age": 29,
  //    "login": "SushantChoudhary@xyz.com",
  //    "password":"SC123",
  //    "isDeleted": true 
  //   },
  //   {
  //    "id":"RS",
  //    "firstName": "Rohan",
  //    "lastName": "Singh",
  //    "age": 26,
  //    "login": "RohanSingh@xyz.com",
  //    "password":"RS1234",
  //    "isDeleted": false 
  //   }
  //  ];

  constructor(private http: HttpClient) { }
  // getUserData(){
  //   return this.userData;
  // }

  getUsers() {
    return this.http.get<any[]>('http://localhost:8080/users');
  }

  getUser(id: string) {
    return this.http.get('http://localhost:8080/users/'+ id);
  }

  createUser(user: User) {
    return this.http.post('http://localhost:8080/users', user);
  }

  updateUser(user: Partial<User>) {
    return this.http.put('http://localhost:8080/users/' + user.id, {
      password: user.password,
      age: user.age,
      isDeleted: user.isDeleted
    });
 }
 activateDeactivateUser(value,id){
   return this.http.put('http://localhost:8080/users/'+id,{
     isDeleted:value
   })
 }

}
export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted?: boolean;
  updatedAt?: Date;
}
