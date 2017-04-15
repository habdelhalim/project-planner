'use strict';

describe('Service: localstore', function () {

  // load the service's module
  beforeEach(module('projectPlannerApp'));

  // instantiate service
  var localstore;
  beforeEach(inject(function (_localstore_) {
    localstore = _localstore_;
  }));

  it('should do something', function () {
    expect(!!localstore).toBe(true);
  });

});
