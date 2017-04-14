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
    'gantt',
    'gantt.tree',
    'gantt.progress'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .when('/planner', {
        templateUrl: 'views/planner.html',
        controller: 'PlannerCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
