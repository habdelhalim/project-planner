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
          console.log('saving document url', vm.sheetUrl);
          googlesheet.url = vm.sheetUrl;
          googlesheet.SaveUrl();
        }
      },
      controllerAs: 'vm'
    };
  });
