function isArrayOfIntegers(values) {
    if(!Array.isArray(values)){
        return false;
    }

    return values.reduce((acc, current) => {
        return (current === parseInt(current, 10) && acc);
    }, true);
}


module.exports = function validate(inputJson) {
    if(!(inputJson.address && inputJson.address.values)){
        const error = new Error();
        error.msg = "Invalid fields: address && address.values are not present";
        throw error;
    }

    if(!isArrayOfIntegers(inputJson.address.values)) {
        const error = new Error();
        error.msg = "address.values must be an array of integer values";
        throw error;
    }

    return true;
};
