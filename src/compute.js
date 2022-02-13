function sumArrayNumbers(elements) {
    return elements.reduce((acc, item) => {
        return acc + item;
    }, 0);
}

function reduceDigits(number) {
    if(number < 10) {
        return number;
    }
    const digits = number.toString().split("").map(i => parseInt(i));
    const digitsSum = sumArrayNumbers(digits);
    return reduceDigits(digitsSum);
}

module.exports = function compute(elements) {
    const sum = sumArrayNumbers(elements);
    return reduceDigits(sum);
};
