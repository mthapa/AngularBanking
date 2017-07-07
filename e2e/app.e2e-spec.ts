import { AngularBankPage } from './app.po';

describe('angular-bank App', () => {
  let page: AngularBankPage;

  beforeEach(() => {
    page = new AngularBankPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
