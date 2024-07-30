import assert from "assert";
import {countAllPaarl} from "../countAllPaarl.js"; 

describe('countAllPaarl function', function() {
    it("it should return the correct count of Paarl registration numbers (CJ) from a string", function() {
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), 3);
        assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123'), 2);
    });

    it("it should return 0 when the input string is empty or does not contain any registration numbers", function() {
        assert.equal(countAllPaarl(''), 0);
        assert.equal(countAllPaarl('AB 123 456, XY 987 654'), 0);
    });
});