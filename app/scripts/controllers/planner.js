'use strict';

/**
 * @ngdoc function
 * @name projectPlannerApp.controller:PlannerCtrl
 * @description
 * # PlannerCtrl
 * Controller of the projectPlannerApp
 */
angular.module('projectPlannerApp')
  .controller('PlannerCtrl', function ($rootScope, milestones) {
    var vm = this;
    $rootScope.$broadcast('load-milestones');

    vm.milestone = {
      tasks: []
    };
    vm.data = milestones.list;
    vm.addMilestone = addMilestone;

    function addMilestone() {
      vm.data.push(vm.milestone);
      $rootScope.$broadcast('save-milestones');

      vm.milestone = {
        tasks: []
      }
    }
  });
