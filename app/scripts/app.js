'use strict';

/**
 * @ngdoc overview
 * @name projectPlannerApp
 * @description
 * # projectPlannerApp
 *
 * Main module of the application.
 */
angular
  .module('projectPlannerApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'gantt',
    'gantt.tree',
    'gantt.progress'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
