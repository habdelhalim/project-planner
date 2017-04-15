'use strict';

describe('Service: googlesheet', function () {

  // load the service's module
  beforeEach(module('projectPlannerApp'));

  // instantiate service
  var googlesheet;
  beforeEach(inject(function (_googlesheet_) {
    googlesheet = _googlesheet_;
  }));

  it('should do something', function () {
    expect(!!googlesheet).toBe(true);
  });

});
