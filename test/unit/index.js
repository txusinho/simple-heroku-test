const index = require("../../src/index.js");

describe("main function", () => {
    it("works", ()=> {
        const result = index();
        expect(result).to.exist;
    });
});
