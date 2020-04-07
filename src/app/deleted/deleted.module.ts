import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedComponent } from './deleted/deleted.component';
import { UserPipePipe } from "../user-pipe.pipe";


@NgModule({
  declarations: [DeletedComponent],
  imports: [
    CommonModule,
    UserPipePipe
  ]
})
export class DeletedModule { }
