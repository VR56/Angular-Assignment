import { TestBed } from '@angular/core/testing';

import { UserServiceService, User } from './user-service.service';

import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClientModule } from '@angular/common/http';

describe('UserServiceService', () => {
  let service: UserServiceService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserServiceService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(UserServiceService);
    httpMock = TestBed.get(HttpTestingController);
  });


  it('be able to retrieve posts from the API via GET', () => {
    const dummyPosts: User[] = [{
      id: '1',
      firstName: 'test1',
      lastName: 'test11',
      age: 1,
      login: 'test',
      password: 'test',
      isDeleted : true},
      {
        id: '2',
        firstName: 'test2',
        lastName: 'test22',
        age: 2,
        login: 'test',
        password: 'test',
        isDeleted : false
    }];
    service.getUsers().subscribe(users => {
        expect(users.length).toBe(2);
        expect(users).toEqual(dummyPosts);
    });
  const request = httpMock.expectOne( `http://localhost:8080/users`);
  expect(request.request.method).toBe('GET');
  request.flush(dummyPosts);
  })
  afterEach(() => {
    httpMock.verify();
  });
  
  it('be able to retrieve posts from the API bia GET with given id', () => {
    const dummyPosts: User[] = [{
      id: '1',
      firstName: 'test1',
      lastName: 'test11',
      age: 1,
      login: 'test',
      password: 'test',
      isDeleted : true}];
    service.getUser('1').subscribe(users => {
        expect(users).toEqual(dummyPosts);
    });
  const request = httpMock.expectOne( `http://localhost:8080/users/1`);
  expect(request.request.method).toBe('GET');
  request.flush(dummyPosts);
  })
  afterEach(() => {
    httpMock.verify();
  });
})