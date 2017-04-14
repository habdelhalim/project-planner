'use strict';

/**
 * @ngdoc directive
 * @name projectPlannerApp.directive:milestone
 * @description
 * # milestone
 */
angular.module('projectPlannerApp')
  .directive('milestone', function () {
    return {
      templateUrl: 'views/milestone.directive.html',
      scope: {
        'milestone': '=',
        'save': '&'
      },
      restrict: 'E',
      controller: function ($scope) {
        console.log($scope.milestone);
      }
    };
  });
