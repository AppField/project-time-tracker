import { ProjectTimeTrackerPage } from './app.po';

describe('project-time-tracker App', function() {
  let page: ProjectTimeTrackerPage;

  beforeEach(() => {
    page = new ProjectTimeTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
