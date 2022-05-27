import { ComerPage } from './app.po';

describe('comer App', function() {
  let page: ComerPage;

  beforeEach(() => {
    page = new ComerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
