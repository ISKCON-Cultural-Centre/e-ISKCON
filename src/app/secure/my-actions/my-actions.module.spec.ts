import { MyActionsModule } from './my-actions.module';

describe('MyActionsModule', () => {
  let myActionsModule: MyActionsModule;

  beforeEach(() => {
    myActionsModule = new MyActionsModule();
  });

  it('should create an instance', () => {
    expect(myActionsModule).toBeTruthy();
  });
});
