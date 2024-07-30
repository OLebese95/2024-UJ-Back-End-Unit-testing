import assert from "assert";
import {greet} from "../greet.js"; 

describe('Greet function' , function(){
    it("it should return 'Hello, + name'" , function(){
        assert.equal(greet("Ofentse"), "Hello, Ofentse");
        assert.equal(greet("Thato"), "Hello, Thato");
    });

    it("it should handle an empty string", function() {
        assert.equal(greet(""), "Please enter a name");
    });
    
    it("it should handle names with spaces" , function(){
        assert.equal(greet("John Wick"), "Hello, John Wick");
    });

});

