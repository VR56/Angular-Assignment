import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { Router } from '@angular/router';
import { UserListComponentComponent } from './user-list-component.component';
describe('UserListComponentComponent', () => {
  let component: UserListComponentComponent;
  let fixture: ComponentFixture<UserListComponentComponent>;
  beforeEach(() => {
    const userServiceServiceStub = () => ({
      getUsers: () => ({ subscribe: f => f({}) })
    });
    const routerStub = () => ({ navigate: array => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [UserListComponentComponent],
      providers: [
        { provide: UserServiceService, useFactory: userServiceServiceStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(UserListComponentComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const userServiceServiceStub: UserServiceService = fixture.debugElement.injector.get(
        UserServiceService
      );
      spyOn(userServiceServiceStub, 'getUsers').and.callThrough();
      component.ngOnInit();
      expect(userServiceServiceStub.getUsers).toHaveBeenCalled();
    });
  });
  describe('createUser', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.createUser();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
