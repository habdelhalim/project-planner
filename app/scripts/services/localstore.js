'use strict';

/**
 * @ngdoc service
 * @name projectPlannerApp.localstore
 * @description
 * # localstore
 * Service in the projectPlannerApp.
 */
angular.module('projectPlannerApp')
  .service('localstore', function ($window) {
    var service = {
      list: [],
      saveList: function () {
        if ($window.localStorage) {
          $window.localStorage.setItem('milestones', angular.toJson(service.list));
        }
      },
      loadList: function () {
        if ($window.localStorage) {
          service.list = angular.fromJson($window.localStorage.getItem('milestones'));
        }

        if (service.list == null) {
          service.list = [];
        }
        return service.list;
      },
      addItem: function (item) {
        service.list.push(item);
        service.saveList();
      }
    };

    return service;
  });
