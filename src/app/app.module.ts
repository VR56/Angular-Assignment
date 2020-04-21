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
