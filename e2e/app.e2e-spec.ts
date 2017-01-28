import { Material2DemoPage } from './app.po';

describe('material2-demo App', function() {
  let page: Material2DemoPage;

  beforeEach(() => {
    page = new Material2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
