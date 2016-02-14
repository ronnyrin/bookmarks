/// <reference path="../../../reference.ts" />
'use strict';

class ProjectsApp {
  clicks: number;
  name: string;

  /* @ngInject */
  constructor(private $scope: ng.IScope) {

    this.clicks = 0;
  }

  onClick() {
    this.clicks++;
  }
}

angular
  .module('projectsAppInternal')
  .component('projectsApp', {

    templateUrl: 'views/projects-app.html',
    controller: ProjectsApp,
    bindings: {
      name: '='
    }
  });
