'use strict';

/**
 * @ngdoc function
 * @name projectPlannerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectPlannerApp
 */
angular.module('projectPlannerApp')
  .controller('MainCtrl', function (milestones) {
    var vm = this;
    vm.addMilestone = addMilestone;
    vm.data = milestones.LoadList();

    vm.milestone = {
      tasks: []
    };

    function addMilestone() {
      milestones.AddItem(vm.milestone);

      vm.milestone = {
        tasks: []
      }
    }
  });
