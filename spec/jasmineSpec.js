//
let year = 2020;//string

describe('Get year dates', function(){

  it ('it should be a number', function(){
    year = parseInt(year);//js convert string to integer
    expect(year).toBe (2020);
  });

});