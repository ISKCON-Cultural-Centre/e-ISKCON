import { BookMarathonModule } from './book-marathon.module';

describe('BookMarathonModule', () => {
  let bookMarathonModule: BookMarathonModule;

  beforeEach(() => {
    bookMarathonModule = new BookMarathonModule();
  });

  it('should create an instance', () => {
    expect(bookMarathonModule).toBeTruthy();
  });
});
