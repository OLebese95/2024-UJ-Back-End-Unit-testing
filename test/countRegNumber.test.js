import assert from "assert";
import {countRegNumber} from "../countRegNumber.js"; 


describe('countRegNumber function' , function(){
    it("it should return the number of registration numbers in the string", function() {
        assert.equal(countRegNumber('CA 182736, CY 523519, CJ 812328'), 3);
        assert.equal(countRegNumber('CA 182736'), 1);
    });

    it("it should return the correct number of registration numbers when there are multiple commas", function() {
        assert.equal(countRegNumber('CA 182736,, CY 523519, , CJ 812328'), 5);
    });
});

