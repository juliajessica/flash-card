import { Flash } from './../src/scripts.js';

describe('Flash', function() {
  let flash; //defining flash asa variable

  beforeEach(function(){
    flash = new Flash(0); //0 is the total score
    jasmine.clock().install();
    flash.correct();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  }); //turn off clock

  it('should test whether a card is answered correct and adds one every 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(flash.score).toEqual(1);
  });

});//closes import
