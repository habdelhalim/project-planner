'use strict';

/**
 * @ngdoc service
 * @name projectPlannerApp.googlesheet
 * @description
 * # googlesheet
 * Service in the projectPlannerApp.
 */
angular.module('projectPlannerApp')
  .service('googlesheet', function ($window, $http, $q, $rootScope, cfpLoadingBar) {

    var service = {
      list: [],
      saveList: function () {
        console.log('not implemented yet');
      },
      loadList: function () {
        var deferred = $q.defer();

        if (service.getUrl() && $rootScope.gapiInitiated) {
          cfpLoadingBar.start();

          gapi.client.sheets.spreadsheets.get({
            spreadsheetId: $window.localStorage.getItem('googleSheetId')
          }).then(function (response) {
            var sheets = response.result.sheets.map(function (item) {
              return item.properties.title;
            });

            gapi.client.sheets.spreadsheets.values.batchGet({
              spreadsheetId: $window.localStorage.getItem('googleSheetId'),
              ranges: sheets
            }).then(function (response) {
              deferred.resolve(service.parseGoogleSheetV4(JSON.parse(response.body)));
              cfpLoadingBar.complete()
            });
          });
        }

        return deferred.promise;
      },
      parseGoogleSheetV4: function (values) {
        var milestones = [];
        values.valueRanges.forEach(function (valueRange) {
          //remove first item as it contains headers
          var values = valueRange.values.splice(1);
          values.forEach(function (entry) {
            var milestone = {
              name: entry[0] && entry[0],
              parent: entry[6] && entry[6],
              tasks: []
            };

            milestone.tasks.push({
              name: entry[0] && entry[0],
              color: entry[1] && entry[1],
              from: new Date(entry[2] && entry[2]),
              to: new Date(entry[3] && entry[3]),
              progress: entry[5] && entry[5]
            });

            milestones.push(milestone);
          });
        });

        return milestones;
      },
      addItem: function (item) {
        console.log('not implemented yet');
      },
      getUrl: function () {
        if ($window.localStorage) {
          return $window.localStorage.getItem('googleSheetId');
        }
      },
      getClientId: function () {
        if ($window.localStorage) {
          return $window.localStorage.getItem('googleClientId');
        }
      },
      saveSetting: function (clientId, sheetId) {
        if ($window.localStorage) {
          $window.localStorage.setItem('googleClientId', clientId);
          $window.localStorage.setItem('googleSheetId', sheetId);
        }
      }
    };

    $window.initGapi = function () {
      var CLIENT_ID = $window.localStorage.getItem('googleClientId');

      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

      gapi.load('client:auth2', function () {

        gapi.client.init({
          discoveryDocs: DISCOVERY_DOCS,
          clientId: CLIENT_ID,
          scope: SCOPES
        }).then(function (data) {
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        });

        function updateSigninStatus(isSignedIn) {
          if (isSignedIn) {
            $rootScope.gapiInitiated = true;
            console.log('signed in');
          } else {
            gapi.auth2.getAuthInstance().signIn();
          }
        }
      });
    };

    return service;
  });
