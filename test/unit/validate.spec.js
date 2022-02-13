const validate = require("../../src/validate");

describe("#validate", () => {
    let input;
    context("JSON has no address field", () => {
        beforeEach(() => {
            input = {};
        });

        it("throws an error", () => {
            try{
                validate(input);
            } catch (e) {
                expect(e.msg).to.equal("Invalid fields: address && address.values are not present");
            }
        });
    });

    context("JSON has address field", () => {
        context("has no values field", () => {
            beforeEach(() => {
                input = { address: {} };
            });

            it("throws an error", () => {
                try{
                    validate(input);
                } catch (e) {
                    expect(e.msg).to.equal("Invalid fields: address && address.values are not present");
                }
            });
        });
        context("has values field", () => {
            context("value is not an array", () => {
                beforeEach(() => {
                    input = { address : { values: "foobar" } };
                });


                it("throws an error", () => {
                    try{
                        validate(input);
                    } catch (e) {
                        expect(e.msg).to.equal("address.values must be an array of integer values");
                    }
                });
            }); 

            context("value is an array", () => {
                context("values are not integers", () => {
                    it("throws an error with NaN", () => {
                        input = { address : { values: [NaN, 1, 2, 3, 4] } };
                        try{
                            validate(input);
                        } catch (e) {
                            expect(e.msg).to.equal("address.values must be an array of integer values");
                        }
                    });
                    it("throws an error with undefined", () => {
                        input = { address : { values: [1, 2, 3, 4, undefined] } };
                        try{
                            validate(input);
                        } catch (e) {
                            expect(e.msg).to.equal("address.values must be an array of integer values");
                        }
                    });
                    it("throws an error with string", () => {
                        input = { address : { values: ["12", 1, 2, 3, 4] } };
                        try{
                            validate(input);
                        } catch (e) {
                            expect(e.msg).to.equal("address.values must be an array of integer values");
                        }
                    });
                    it("throws an error with objects", () => {
                        input = { address : { values: [1, 2, {} , 3, 4] } };
                        try{
                            validate(input);
                        } catch (e) {
                            expect(e.msg).to.equal("address.values must be an array of integer values");
                        }
                    });
                    it("throws an error with nested arrays", () => {
                        input = { address : { values: [[], 2, 3, 4] } };
                        try{
                            validate(input);
                        } catch (e) {
                            expect(e.msg).to.equal("address.values must be an array of integer values");
                        }
                    });
                });

                context("values are integers", () => {
                    it("returns true", () => {
                        input = { address : { values: [1, 2, 3, 4] } };
                        expect(validate(input)).to.be.true;

                    });
                });
            }); 
        });
    });
});
