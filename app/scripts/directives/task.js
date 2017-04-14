'use strict';

/**
 * @ngdoc directive
 * @name projectPlannerApp.directive:task
 * @description
 * # task
 */
angular.module('projectPlannerApp')
  .directive('task', function () {
    return {
      templateUrl: 'views/task.directive.html',
      restrict: 'E',
      scope: {
        'tasks': '='
      },
      controller: function ($scope) {
        $scope.task = {};
        $scope.addTask = addTask;

        function addTask() {
          if ($scope.tasks === undefined)
            $scope.tasks = [];

          $scope.tasks.push(
            {
              name: $scope.task.name,
              color: $scope.task.color,
              from: $scope.task.from,
              to: $scope.task.to
            }
          );
          $scope.task = {};
        }
      }
    };
  });
