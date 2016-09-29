import { ProjectTimeCalculatorPage } from './app.po';

describe('project-time-calculator App', function() {
  let page: ProjectTimeCalculatorPage;

  beforeEach(() => {
    page = new ProjectTimeCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
