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
    'angular-loading-bar',
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'gantt',
    'gantt.tree',
    'gantt.table',
    'gantt.progress',
    'gantt.tooltips'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('BACKEND_SERVICE', 'GOOGLE_SHEET');

var init = function () {
  window.initGapi();
};
