import assert from "assert";
import {isWeekday} from "../isWeekday.js"; 


describe('isWeekday function', function() {
    it("it should return false for weekend days", function() {
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Sunday'), false);
    });

    it("it should return true for weekdays", function() {
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
    });

    it("it should handle invalid day names", function() {
        assert.equal(isWeekday('Funday'), false);
        assert.equal(isWeekday(''), false);
    });
});

