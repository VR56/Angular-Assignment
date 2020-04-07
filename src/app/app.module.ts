import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserServiceService } from "./user-service.service";
import { UserComponent } from './user/user.component';
import { ActiveComponent } from "./active/active/active.component";
import { StartPageComponent } from './start-page/start-page.component';
import { DeletedComponent } from './deleted/deleted/deleted.component';
import { UserPipePipe } from './user-pipe.pipe';
import { UserActivatePipePipe } from './user-activate-pipe.pipe';
// import { UserDetailsComponent } from './user-details/user-details.component';
// import { ManageModule } from "./manage/manage.module";
// import { UserListComponent } from './user-list/user-list.component';
// import { UserListComponent } from "./manage/user-list/user-list.component";
// import {UserDetailsComponentComponent} from "./manage-module/user-details-component/user-details-component.component";
// import { UserListComponentComponent } from "./manage-module/user-list-component/user-list-component.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ActiveComponent,
    StartPageComponent,
    DeletedComponent,
    UserPipePipe,
    UserActivatePipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
