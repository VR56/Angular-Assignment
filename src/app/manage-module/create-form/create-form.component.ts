import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from "@angular/forms";
import { UserServiceService } from 'src/app/user-service.service';
import { User } from "../../user-service.service";


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})


export class CreateFormComponent implements OnInit {
  
  successMessage=false;
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {}

  createForm: FormGroup = new FormGroup(
    {
      firstname : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      lastname: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      login: new FormControl('',[
        Validators.required,
        Validators.minLength(4)
      ]),
      age : new FormControl('',[
        Validators.required,
        Validators.min(1),
        Validators.max(140)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      passwordConfirm: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
    },
    {
      validators: this.passwordMatch.bind(this)
    }

  );

  errorlogger:any;

  createUser() {
    // const { firstname, lastName, login, password, age } = this.createForm.value;
    console.log(this.createForm.value.firstname);
    this.userService.createUser(
      {
        firstName: this.createForm.value.firstname,
        lastName: this.createForm.value.lastname,
        login: this.createForm.value.login,
        age: this.createForm.value.age,
        password: this.createForm.value.password
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

   passwordMatch(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('passwordConfirm');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

}
