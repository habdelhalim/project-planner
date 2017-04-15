'use strict';

/**
 * @ngdoc service
 * @name projectPlannerApp.googlesheet
 * @description
 * # googlesheet
 * Service in the projectPlannerApp.
 */
angular.module('projectPlannerApp')
  .service('googlesheet', function ($window, $http) {

    var service = {
      list: [],
      saveList: function () {
        console.log('not implemented yet');
      },
      loadList: function () {
        if (service.getUrl()) {
          console.log('loading document ', service.getUrl());
          $http
            .get(service.getUrl())
            .then(function (success) {
              service.list = service.parseGoogleSheet(success.data.feed.entry);
            }, function (error) {
              console.log('error', error);
            })
        }

        return service.list;
      },
      parseGoogleSheet: function (entries) {
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

          milestones.push(milestone);
        });

        return milestones;
      },
      addItem: function (item) {
        console.log('not implemented yet');
      },
      saveUrl: function () {
        if ($window.localStorage) {
          $window.localStorage.setItem('googleSheetUrl', service.url);
        }
      },
      loadUrl: function () {
        if ($window.localStorage) {
          service.url = $window.localStorage.getItem('googleSheetUrl');
        }
      },
      getUrl: function () {
        service.loadUrl();

        return service.url;
      }
    };

    return service;
  });
