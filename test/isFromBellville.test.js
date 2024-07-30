import assert from "assert";
import {isFromBellville} from "../isFromBellville.js"; 

describe('isFromBellville function', function() {
    it("it should return true if the vehicle registration is from Bellville (CY) and false if it is not", function() {
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });

    it("it should return false if the vehicle registration is from Bellville (cy) in different case", function() {
        assert.equal(isFromBellville('cy 123'), false);
        assert.equal(isFromBellville('Cy 123'), false);
    });

});
