import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveComponent } from "./active/active/active.component";
import { StartPageComponent } from './start-page/start-page.component';
import { DeletedComponent } from './deleted/deleted/deleted.component';


const routes: Routes = [
  {path:"",component:StartPageComponent},
  {path:"home",component:StartPageComponent},
  {path:"active",component:ActiveComponent},
  {path:"deleted",component:DeletedComponent},
  {path: "manage", 
    loadChildren: ()=> import("./manage-module/manage-module.module").then(
        (file) => file.ManageModuleModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
