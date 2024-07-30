import assert from "assert";
import {transportFee} from "../transportFee.js"; 


describe('transportFee function', function() {
    it("it should return 'R20' for morning shift", function() {
        assert.strictEqual(transportFee('morning'), 'R20');
    });

    it("it should return 'R10' for afternoon shift", function() {
        assert.strictEqual(transportFee('afternoon'), 'R10');
    });

    it("it should return 'free' for nightshift", function() {
        assert.strictEqual(transportFee('nightshift'), 'free');
    });

    it("it should return 'Invalid shift' for unknown shift", function() {
        assert.strictEqual(transportFee('evening'), 'Invalid shift');
    });

});


