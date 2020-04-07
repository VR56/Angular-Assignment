import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponentComponent } from './user-details-component/user-details-component.component';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';
import { RouterModule, Routes } from '@angular/router';
import { JsonPipe } from "@angular/common";
import { CreateFormComponent } from './create-form/create-form.component';
import { FormsModule } from "@angular/forms";
import { EditFormComponent } from './edit-form/edit-form.component';
const manageRoutes: Routes = [
  {
      path: '', component: UserListComponentComponent, 
      children: [
        { path: 'create', component: CreateFormComponent },
          { path: ':id', component: UserDetailsComponentComponent },
          {path:'edit/:id', component:EditFormComponent}
      ]
  },
];

@NgModule({
  declarations: [UserDetailsComponentComponent, UserListComponentComponent, CreateFormComponent, EditFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(manageRoutes)
  ],
  providers:[JsonPipe],
  exports:[
    UserDetailsComponentComponent,
    UserListComponentComponent
  ]
})
export class ManageModuleModule { } 
