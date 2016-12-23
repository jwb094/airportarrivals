const chai = require('chai');
const should = chai.should();
const expect = require('chai').expect;
const assert = require("chai").assert;

const FetchData = require("../lib/fetchLocationLatandLong");// get the file functions.js
const func = new FetchData();// calling class

// function alternative syntax =>
//describe - mocha function - describe what we are trying to achieve- what your test does
// group test to make  sense
//done function callback to say unit test has finished


var airportDetails = {
        city:"london",
        iata:"LHR",
        name:"London Heathrow Airport",
        classification: 2
}

describe("Demo",(done) =>{
    it("return relevant airport details", (done) => {/* SHOULD */
       func.doFetchData("London")
        .then(result => {
         /*check if the reslt is a number */  
         /* an = type compare */ 
         result.should.be.an("number");
       done();
})
    })
});
