import assert from "assert";
import {findItemsOver} from "../findItemsOver.js";


var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];

var results2 = [];

var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];




describe('findItemsOver function', function() {
    it("it should return items with quantity over 20", function() {
        assert.deepEqual(findItemsOver(itemList, 20), results);
    });

    it("it should return an empty array when no items have quantity over 20", function() {
        assert.deepEqual(findItemsOver(itemList2, 20), results2);
    });

    it("it should return items with quantity over 20 including duplicates", function() {
        assert.deepEqual(findItemsOver(itemList3, 20), results3);
    });
});

