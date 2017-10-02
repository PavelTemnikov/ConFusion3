import { ConFusion3Page } from './app.po';

describe('con-fusion3 App', () => {
  let page: ConFusion3Page;

  beforeEach(() => {
    page = new ConFusion3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
