import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsComponentComponent } from './user-details-component.component';
describe('UserDetailsComponentComponent', () => {
  let component: UserDetailsComponentComponent;
  let fixture: ComponentFixture<UserDetailsComponentComponent>;
  beforeEach(() => {
    const userServiceServiceStub = () => ({
      getUser: arg => ({ subscribe: f => f({}) })
    });
    const activatedRouteStub = () => ({ params: { subscribe: f => f({}) } });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [UserDetailsComponentComponent],
      providers: [
        { provide: UserServiceService, useFactory: userServiceServiceStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(UserDetailsComponentComponent);
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
      spyOn(userServiceServiceStub, 'getUser').and.callThrough();
      component.ngOnInit();
      expect(userServiceServiceStub.getUser).toHaveBeenCalled();
    });
  });
});
