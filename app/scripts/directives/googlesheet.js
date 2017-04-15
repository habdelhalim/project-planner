'use strict';

/**
 * @ngdoc directive
 * @name projectPlannerApp.directive:googlesheet
 * @description
 * # googlesheet
 */
angular.module('projectPlannerApp')
  .directive('googlesheet', function () {
    return {
      templateUrl: 'views/googlesheet.directive.html',
      restrict: 'E',
      controller: function (googlesheet) {
        var vm = this;
        vm.sheetUrl = googlesheet.GetUrl();
        vm.saveUrl = saveUrl;

        function saveUrl() {
          googlesheet.SaveUrl();
        }
      },
      controllerAs: 'vm'
    };
  });
