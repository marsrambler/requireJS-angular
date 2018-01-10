define(['hello_func'], function(he) {

  describe('hello func test - 1', function() {

    it('hello should be true', function() {
      expect(he()).toBe("hello, world");
      //console.log(he);
    });

  });


  describe('hello func test - 2', function() {
    
        it('hello should be true', function() {
          //console.log(he);
          he.prototype.myFunc = function() { return "my func"; };
          var myHe = new he();
          //console.log(myHe.myFunc());
          expect(myHe.myFunc()).toBe("my func");
        });
    
  });

});
