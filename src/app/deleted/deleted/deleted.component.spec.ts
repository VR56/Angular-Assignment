import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { DeletedComponent } from './deleted.component';
describe('DeletedComponent', () => {
  let component: DeletedComponent;
  let fixture: ComponentFixture<DeletedComponent>;
  beforeEach(() => {
    const userServiceServiceStub = () => ({
      getUsers: () => ({ subscribe: f => f({}) }),
      activateDeactivateUser: (bool, id) => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DeletedComponent],
      providers: [
        { provide: UserServiceService, useFactory: userServiceServiceStub }
      ]
    });
    fixture = TestBed.createComponent(DeletedComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('bool defaults to: false', () => {
    expect(component.bool).toEqual(false);
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
