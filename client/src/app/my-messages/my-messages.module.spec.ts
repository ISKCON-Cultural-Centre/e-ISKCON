import { MyMessagesModule } from './my-messages.module';

describe('MyMessagesModule', () => {
  let myMessagesModule: MyMessagesModule;

  beforeEach(() => {
    myMessagesModule = new MyMessagesModule();
  });

  it('should create an instance', () => {
    expect(myMessagesModule).toBeTruthy();
  });
});
