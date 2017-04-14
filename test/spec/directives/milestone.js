'use strict';

describe('Directive: milestone', function () {

  // load the directive's module
  beforeEach(module('projectPlannerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<milestone></milestone>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the milestone directive');
  }));
});
