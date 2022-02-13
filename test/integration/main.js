const validData = require("./data.json");
const main = require("../../src/main");

describe("main computing function (no server)", () => {
    context("with a valid input", () => {
        it("returns a valid value", () => {
            const expected = { result : 8 };
            const result = main(validData);
            expect(result).to.deep.equal(expected);
        });
    });
});
