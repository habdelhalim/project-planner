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
      tasks: [
        {name: 'On-side education', color: '#F1C232', from: new Date(2013, 10, 24, 9, 0, 0), to: new Date(2013, 10, 25, 15, 0, 0)}
      ]
    };
    vm.data = milestones.get();
    vm.addMilestone = addMilestone;

    function addMilestone() {
      vm.data.push(vm.milestone);
      vm.milestone = {}
    }
  });
