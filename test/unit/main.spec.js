const compute = require("../../src/main");

describe("computeDigits", function () {
    context("any negative number on the list", () => {
        it("keeps working", () => {
            const data = [ -23, 65 ];
            const result = compute(data);
            expect(result).to.equal(6);
        });
    });
    context("all number are integer positive", () => {
        it("returns the sum", () => {
            const data = [ 23, 65, 123, 343, 123, 346, 12 ];
            const result = compute(data);
            expect(result).to.equal(9);
        });
    });  

    context("the sum of all digits is a number with more than one digit", () => {
        context("the sum is 2 digits length", () => {
            it("returns the sum correctly", () => {
                const data = [ 33, 123, 343, 123, 346, 12 ];
                const result = compute(data);
                expect(result).to.equal(8);
            });
        });

        context("works for any length", () => {
            it("returns the sum correctly", () => {
                const data = [111111111111, 111111111111, 111111111111, 111111111111, 1111111111111, 111111111111, 111111111111, 111111111111, 111111111111];
                const result = compute(data);
                expect(result).to.equal(1);
            });
        });
    });
});
