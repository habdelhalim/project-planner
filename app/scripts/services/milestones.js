'use strict';

/**
 * @ngdoc service
 * @name projectPlannerApp.milestones
 * @description
 * # milestones
 * Service in the projectPlannerApp.
 */
angular.module('projectPlannerApp')
  .service('milestones', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      get: function () {
        return [{}];
      }
    }
  });
