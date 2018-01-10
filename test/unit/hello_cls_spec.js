define(['hello_cls'], function(he) {
  describe('hello cls test - 1', function() {

    it('hello should be true', function() {
      var myhe = new he();
      //console.log(myhe.sum(1, 2));
      expect(myhe.sum(1, 2)).toEqual(3);
    });

  });
});