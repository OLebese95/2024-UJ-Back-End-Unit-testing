import assert from "assert";
import {fromWhere} from "../fromWhere.js"; 

describe('fromWhere function', function() {
    it("it should return 'Bellville' for registration number starting with 'CY'", function() {
        assert.strictEqual(fromWhere('CY 567489'), 'Bellville');
    });

    it("it should return 'Paarl' for registration number starting with 'CJ'", function() {
        assert.strictEqual(fromWhere('CJ 343502'), 'Paarl');
    });

    it("it should return 'Cape Town' for registration number starting with 'CA'", function() {
        assert.strictEqual(fromWhere('CA 987504'), 'Cape Town');
    });

    it("it should return 'Some other place!' for registration number starting with any other prefix", function() {
        assert.strictEqual(fromWhere('ZN 568593'), 'Some other place!');
    });
});

