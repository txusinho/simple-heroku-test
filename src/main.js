const validate = require("./validate");
const compute = require("./compute");

module.exports = function main(input) { 
    try {
        validate(input);
    } catch(e) {
        return { result: {error: e.msg } };
    }

    return { result: compute(input.address.values) };
 };
