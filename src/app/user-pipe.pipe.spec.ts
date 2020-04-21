import { TestBed } from '@angular/core/testing';
import { UserPipePipe } from './user-pipe.pipe';
import { User } from "./user-service.service";
describe('UserPipePipe', () => {
  let pipe: UserPipePipe;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UserPipePipe] });
    pipe = TestBed.get(UserPipePipe);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transforms X to Y', () => {
    const args : User[] = [{  firstName: "y1", lastName: "y",age: 1,login: "yy",password: "yyy",isDeleted : true},
    {firstName: "z1",lastName: "z",age: 2,login: "zz",password: "zzz",isDeleted: false}];

    const trueValues : User[] = [{  firstName: "y1", lastName: "y", age: 1, login: "yy",password: "yyy",isDeleted: true}]
    const transformedValue = expect(pipe.transform(args));
    transformedValue.toEqual(trueValues);
  });
});
