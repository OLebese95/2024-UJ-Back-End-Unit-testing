import assert from "assert";
import {yearsAgo} from "../yearsAgo.js"; 


describe('yearsAgo function', function() {
    it("it should return the correct number of years ago for a given year", function() {
        const currentYear = new Date().getFullYear();
        assert.equal(yearsAgo(1976), currentYear - 1976);
        assert.equal(yearsAgo(2000), currentYear - 2000);
    });

    it("it should handle the current year correctly", function() {
        const currentYear = new Date().getFullYear();
        assert.equal(yearsAgo(currentYear), 0);
    });

    it("it should handle future years", function() {
        const currentYear = new Date().getFullYear();
        assert.equal(yearsAgo(currentYear + 10), -10);
    });

    it("it should handle negative years", function() {
        const currentYear = new Date().getFullYear();
        assert.equal(yearsAgo(currentYear - 10), 10);
    });
})

