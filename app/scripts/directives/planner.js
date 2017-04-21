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
        'data': '=',
        'reload': '&'
      },
      restrict: 'E',
      controller: function () {
        var vm = this;

        vm.timeFrames = {
          day: {
            start: moment('9:00', 'HH:mm'),
            end: moment('18:00', 'HH:mm'),
            working: true, // This is a working period
            default: true // It will be used for each day
          },
          noon: {
            start: moment('12:00', 'HH:mm'),
            end: moment('13:00', 'HH:mm'),
            magnet: false, // This will disable magnet snapping
            working: false, // This is a resting period
            default: true // It will be used for each day
          },
          closed: {
            magnet: false, // This will disable magnet snapping
            working: false // We don't work when it's closed
          }
        };

        vm.dateFrames = {
          weekend: {
            evaluator: function (date) { // A custom function evaluated for each day in the gantt
              return date.isoWeekday() === 5 || date.isoWeekday() === 6;
            },
            targets: ['closed'] // Use timeFrame named closed for saturday and sunday.
          }
        };
      },
      controllerAs: 'vm'
    };
  });
