'use strict';

/**
 * @ngdoc service
 * @name projectPlannerApp.milestones
 * @description
 * # milestones
 * Service in the projectPlannerApp.
 */
angular.module('projectPlannerApp')
  .service('milestones', function ($window, $rootScope, $http, googlesheet) {
    var service = {
      list: [],

      ParseGoogleSheet: function (entries) {
        var milestones = [];
        entries.forEach(function (entry) {
          var milestone = {
            name: entry['gsx$name'] && entry['gsx$name']['$t'],
            tasks: []
          };

          milestone.tasks.push({
            name: entry['gsx$name'] && entry['gsx$name']['$t'],
            color: entry['gsx$color'] && entry['gsx$color']['$t'],
            from: new Date(entry['gsx$from'] && entry['gsx$from']['$t']),
            to: new Date(entry['gsx$to'] && entry['gsx$to']['$t'])
          });

          service.list.push(milestone);
          milestones.push(milestone);
        });

        return milestones;
      },

      GoogleDoc: function () {
        if (googlesheet.GetUrl()) {
          console.log('loading document ', googlesheet.GetUrl());
          $http
            .get(googlesheet.GetUrl())
            .then(function (data) {
              service.ParseGoogleSheet(data.data.feed.entry);
            }, function (error) {
              console.log('error', error);
            })
        }

      },
      SaveList: function () {
        if ($window.localStorage) {
          $window.localStorage.setItem('milestones', angular.toJson(service.list));
        }
      },

      LoadList: function () {
        if ($window.localStorage) {
          service.list = angular.fromJson($window.localStorage.getItem('milestones'));
        }

        if (service.list == null) {
          service.list = [];
        }

        service.GoogleDoc();
        return service.list;
      },
      AddItem: function (milestone) {
        service.list.push(milestone);
        $rootScope.$broadcast('save-milestones');
      }
    };

    $rootScope.$on("save-milestones", service.SaveList);
    $rootScope.$on("load-milestones", service.LoadList);

    return service;
  });
