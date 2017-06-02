import { TravellerPage } from './app.po';

describe('traveller App', () => {
  let page: TravellerPage;

  beforeEach(() => {
    page = new TravellerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
