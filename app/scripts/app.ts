var app = angular
    .module('projectsApp', ['ui.router', 'ngMessages', 'firebase', 'ui.bootstrap']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            template: '<login></login>'
        })
        .state('signup', {
            url: '/signup',
            template: '<signup></signup>'
        })
        .state('list', {
            url: '/list',
            template: '<bookmarks-list></bookmarks-list>'
        });

    $locationProvider.html5Mode(false);
});
