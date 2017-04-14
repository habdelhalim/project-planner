'use strict';

/**
 * @ngdoc function
 * @name projectPlannerApp.controller:PlannerCtrl
 * @description
 * # PlannerCtrl
 * Controller of the projectPlannerApp
 */
angular.module('projectPlannerApp')
  .controller('PlannerCtrl', function (milestones) {
    var vm = this;
    vm.milestone = {
      tasks: []
    };
    vm.data = milestones.get();
    vm.addMilestone = addMilestone;

    function addMilestone() {
      vm.data.push(vm.milestone);
      vm.milestone = {
        tasks: []
      }
    }
  });
