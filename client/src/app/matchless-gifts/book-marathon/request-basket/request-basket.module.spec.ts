import { RequestBasketModule } from './request-basket.module';

describe('RequestBasketModule', () => {
  let requestBasketModule: RequestBasketModule;

  beforeEach(() => {
    requestBasketModule = new RequestBasketModule();
  });

  it('should create an instance', () => {
    expect(requestBasketModule).toBeTruthy();
  });
});
