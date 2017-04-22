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
    vm.fromDate = new Date();
    vm.toDate = new Date();
    vm.toDate.setDate(vm.fromDate.getDate() + 60);

    vm.milestone = {
      tasks: []
    };

    vm.addMilestone = addMilestone;
    vm.reload = reload;

    reload();

    function addMilestone() {
      milestones.AddItem(vm.milestone);

      vm.milestone = {
        tasks: []
      }
    }

    function reload() {
      vm.data = milestones.LoadList();
      vm.data = vm.data.filter(function (elem) {
        var show = false;

        var tasks = elem.tasks;
        tasks.forEach(function (task) {
          show = (task.from >= vm.fromDate && task.from <= vm.toDate)
            || (task.to >= vm.fromDate && task.to <= vm.toDate);
        });

        return show;
      });
    }
  });
