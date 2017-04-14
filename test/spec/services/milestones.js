'use strict';

describe('Service: milestones', function () {

  // load the service's module
  beforeEach(module('projectPlannerApp'));

  // instantiate service
  var milestones;
  beforeEach(inject(function (_milestones_) {
    milestones = _milestones_;
  }));

  it('should do something', function () {
    expect(!!milestones).toBe(true);
  });

});
