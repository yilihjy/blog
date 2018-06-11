import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display comming soon', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(`YILIHJY's BLOG :│▌\n锐意制作中！`);
  });
});
