import { TestBed } from '@angular/core/testing';
import { ManageModuleModule } from './manage-module.module';
describe('ManageModuleModule', () => {
  let pipe: ManageModuleModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ManageModuleModule] });
    pipe = TestBed.get(ManageModuleModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
