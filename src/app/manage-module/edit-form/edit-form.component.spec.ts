import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditFormComponent } from './edit-form.component';
describe('EditFormComponent', () => {
  let component: EditFormComponent;
  let fixture: ComponentFixture<EditFormComponent>;
  beforeEach(() => {
    const userServiceServiceStub = () => ({
      getUser: arg => ({ subscribe: f => f({}) }),
      updateUser: object => ({ subscribe: f => f({}) })
    });
    const activatedRouteStub = () => ({
      snapshot: { params: {} },
      params: { subscribe: f => f({}) }
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [EditFormComponent],
      providers: [
        { provide: UserServiceService, useFactory: userServiceServiceStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(EditFormComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('errorMessage defaults to: false', () => {
    expect(component.errorMessage).toEqual(false);
  });
  it('successMessage defaults to: false', () => {
    expect(component.successMessage).toEqual(false);
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
  describe('updateUser', () => {
    it('makes expected calls', () => {
      const userServiceServiceStub: UserServiceService = fixture.debugElement.injector.get(
        UserServiceService
      );
      spyOn(component, 'clearForm').and.callThrough();
      spyOn(userServiceServiceStub, 'updateUser').and.callThrough();
      component.updateUser();
      // expect(component.clearForm).toHaveBeenCalled();
      expect(userServiceServiceStub.updateUser).toHaveBeenCalled();
    });
  });
});
