import { TestBed } from '@angular/core/testing';
import { UserActivatePipePipe } from './user-activate-pipe.pipe';
import { User } from "./user-service.service";

describe('UserActivatePipePipe', () => {
  let pipe: UserActivatePipePipe;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UserActivatePipePipe] });
    pipe = TestBed.get(UserActivatePipePipe);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transforms X to Y', () => {
    const args : User[] = [{  firstName: "y1", lastName: "y",age: 1,login: "yy",password: "yyy",isDeleted : false},
    {firstName: "z1",lastName: "z",age: 2,login: "zz",password: "zzz",isDeleted: true}];

    const trueValues : User[] = [{  firstName: "y1", lastName: "y", age: 1, login: "yy",password: "yyy",isDeleted: false}]
    const transformedValue = expect(pipe.transform(args));
    transformedValue.toEqual(trueValues);
  });
});
