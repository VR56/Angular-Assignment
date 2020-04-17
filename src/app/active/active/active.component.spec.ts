import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { ActiveComponent } from './active.component';
describe('ActiveComponent', () => {
  let component: ActiveComponent;
  let fixture: ComponentFixture<ActiveComponent>;
  beforeEach(() => {
    const userServiceServiceStub = () => ({
      getUsers: () => ({ subscribe: f => f({}) }),
      activateDeactivateUser: (bool, id) => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ActiveComponent],
      providers: [
        { provide: UserServiceService, useFactory: userServiceServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ActiveComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('bool defaults to: true', () => {
    expect(component.bool).toEqual(true);
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
});
