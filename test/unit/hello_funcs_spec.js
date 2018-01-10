define(['hello_funcs'], function(he) {

  describe('hello func test - 1', function() {

    it('hello should be true', function() {
      expect(he.hello1()).toBe("hello, world - 1");
      expect(he.hello2()).toBe("hello, world - 2");
      //console.log(he);
    });

  });

  describe('hello func test - 2', function() {

        beforeEach(function() {
          spyOn(he, 'hello1').and.returnValue("Mock hello world - 1");
        });

        it('hello should be true', function() {
          expect(he.hello1()).toBe("Mock hello, world - 1");
          expect(he.hello2()).toBe("hello, world - 2");
          //console.log(he);
        });
    
    });  
});