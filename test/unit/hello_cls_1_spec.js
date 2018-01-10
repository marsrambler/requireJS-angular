define(function(require) {

  describe('hello cls test - 1', function() {  
  
    "use strict";
    var MathUt = require('hello_cls');
    var myMath = new MathUt();
    it('hello should be true', function() {
      expect(myMath.sum(1, 2)).toEqual(3);
    });

    it('hello should be true', function() {
      spyOn(myMath, "sum").and.returnValue("Mock value");
      expect(myMath.sum(1, 2)).toEqual("Mock value");
    });

  });

});