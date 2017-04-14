'use strict';

/**
 * @ngdoc directive
 * @name projectPlannerApp.directive:planner
 * @description
 * # planner
 */
angular.module('projectPlannerApp')
  .directive('planner', function () {
    return {
      templateUrl: 'views/planner.directive.html',
      scope: {
        'data': '='
      },
      restrict: 'E'
    };
  });
