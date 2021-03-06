'use strict';

/**
 * @ngdoc service
 * @name projectPlannerApp.milestones
 * @description
 * # milestones
 * Service in the projectPlannerApp.
 */
angular.module('projectPlannerApp')
  .service('milestones', function ($window, $rootScope, $http, BACKEND_SERVICE, googlesheet, localstore) {
    var impl = localstore;

    if (BACKEND_SERVICE === 'GOOGLE_SHEET'
      && googlesheet.getUrl()) {
      impl = googlesheet;
    }

    var service = {
      list: [],
      SaveList: function () {
        impl.saveList();
      },
      LoadList: function () {
        return impl.loadList();
      },
      AddItem: function (milestone) {
        impl.addItem(milestone);
      }
    };

    return service;
  });
