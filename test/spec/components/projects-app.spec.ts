/// <reference path="../../../reference.ts" />
'use strict';

class ProjectsAppDriver extends WixBaseViewUnitDriver {

  render(name = '') {
    this.renderFromTemplate(`<projects-app name="name"></projects-app>`, {name});
  }

  getContainerElement() {
    return this.findByDataHook('container');
  }

  getCounterElement() {
    return this.findByDataHook('counter');
  }
}

describe('Component: projectsApp', () => {
  let driver: ProjectsAppDriver;

  beforeEach(() => {
    module('projectsAppInternal');
    driver = new ProjectsAppDriver();
  });

  afterEach(() => {
    driver.disconnectFromBody();
  });

  it('should make hidden element visible', () => {
    driver.render('kukuchumuku');
    expect(driver.element.text()).toContain('This is kukuchumuku (0)');
  });

  it('should increase counter on click', () => {
    driver.render();
    expect(driver.getCounterElement().text()).toBe('0');

    driver.getContainerElement().click();
    expect(driver.getCounterElement().text()).toBe('1');
  });
});
