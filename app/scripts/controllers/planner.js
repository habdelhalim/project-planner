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

    vm.data = milestones.LoadList();
    vm.addMilestone = addMilestone;
    vm.reload = reload;

    function addMilestone() {
      milestones.AddItem(vm.milestone);

      vm.milestone = {
        tasks: []
      }
    }

    function reload() {
      vm.data = milestones.LoadList();
    }
  });
