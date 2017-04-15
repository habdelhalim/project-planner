'use strict';

/**
 * @ngdoc service
 * @name projectPlannerApp.googlesheet
 * @description
 * # googlesheet
 * Service in the projectPlannerApp.
 */
angular.module('projectPlannerApp')
  .service('googlesheet', function ($window) {

    var service = {
      url: '',
      SaveUrl: function () {
        if ($window.localStorage) {
          $window.localStorage.setItem('googleSheetUrl', service.url);
        }
      },
      LoadUrl: function () {
        if ($window.localStorage) {
          service.url = $window.localStorage.getItem('googleSheetUrl');
        }
      },
      GetUrl: function () {
        service.LoadUrl();

        return service.url;
      }
    };

    return service;
  });
