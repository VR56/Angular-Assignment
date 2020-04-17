import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { FormsModule } from '@angular/forms';
import { CreateFormComponent } from './create-form.component';
describe('CreateFormComponent', () => {
  let component: CreateFormComponent;
  let fixture: ComponentFixture<CreateFormComponent>;
  beforeEach(() => {
    const userServiceServiceStub = () => ({
      createUser: object => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CreateFormComponent],
      providers: [
        { provide: UserServiceService, useFactory: userServiceServiceStub }
      ]
    });
    fixture = TestBed.createComponent(CreateFormComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('successMessage defaults to: false', () => {
    expect(component.successMessage).toEqual(false);
  });
  describe('createUser', () => {
    it('makes expected calls', () => {
      const userServiceServiceStub: UserServiceService = fixture.debugElement.injector.get(
        UserServiceService
      );
      spyOn(component, 'clearForm').and.callThrough();
      spyOn(userServiceServiceStub, 'createUser').and.callThrough();
      component.createUser();
      expect(userServiceServiceStub.createUser).toHaveBeenCalled();
    });
  });
});
