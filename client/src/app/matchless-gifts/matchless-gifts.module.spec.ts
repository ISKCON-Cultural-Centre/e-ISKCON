import { MatchlessGiftsModule } from './matchless-gifts.module';

describe('MatchlessGiftsModule', () => {
  let matchlessGiftsModule: MatchlessGiftsModule;

  beforeEach(() => {
    matchlessGiftsModule = new MatchlessGiftsModule();
  });

  it('should create an instance', () => {
    expect(matchlessGiftsModule).toBeTruthy();
  });
});
