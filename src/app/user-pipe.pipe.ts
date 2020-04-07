import { Pipe, PipeTransform } from '@angular/core';
import{User} from './user-service.service';
@Pipe({
  name: 'userFilterPipe'
})
export class UserPipePipe implements PipeTransform {

  transform(usersList:User[]){
    return usersList.filter(user=>user.isDeleted);
  }

}
