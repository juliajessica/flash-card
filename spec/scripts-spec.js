import { Flash } from './../src/scripts.js';

describe('Flash', function() {

  beforeEach(function(){
    flash = new Flash(0); //0 is the total score
    jasmine.clock().install();
    flash.correct();
  });

  it('should test whether a card is answered correctly', function() {
    expect(flash.right).toEqual(1);
  });
});
