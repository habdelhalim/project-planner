'use strict';

/**
 * @ngdoc service
 * @name projectPlannerApp.milestones
 * @description
 * # milestones
 * Service in the projectPlannerApp.
 */
angular.module('projectPlannerApp')
  .service('milestones', function ($window, $rootScope) {
    var service = {
      list: [],

      SaveList: function () {
        if ($window.localStorage) {
          $window.localStorage.setItem('milestones', angular.toJson(service.list));
        }
      },

      LoadList: function () {
        if ($window.localStorage) {
          service.list = angular.fromJson($window.localStorage.getItem('milestones'));
        }
        return service.list;
      },
      AddItem: function (milestone) {
        service.list.push(milestone);
        $rootScope.$broadcast('save-milestones');
      }
    };

    $rootScope.$on("save-milestones", service.SaveList);
    $rootScope.$on("load-milestones", service.LoadList);

    return service;
  });
