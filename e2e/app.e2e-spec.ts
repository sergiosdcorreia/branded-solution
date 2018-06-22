import { TaylorsFuneralsPage } from './app.po';

describe('taylors-funerals App', function() {
  let page: TaylorsFuneralsPage;

  beforeEach(() => {
    page = new TaylorsFuneralsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
