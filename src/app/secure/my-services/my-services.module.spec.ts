import { MyServicesModule } from './my-services.module';

describe('MyServicesModule', () => {
  let myServicesModule: MyServicesModule;

  beforeEach(() => {
    myServicesModule = new MyServicesModule();
  });

  it('should create an instance', () => {
    expect(myServicesModule).toBeTruthy();
  });
});
