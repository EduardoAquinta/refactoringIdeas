// Task: Use extract method, introduce variable and introduce parameter to make this code clearer.
const underAbstracted = (operation, firstArgument, secondArgument = null) => {
    let numberList
    numberList = secondArgument !== null ? [firstArgument, secondArgument] : firstArgument;

    if (numberList.length === 0) {
        return 0
    }

    let result

    function getCalc() {
        return (a, b) => a + b;
    }

    if (operation === '+') {
        result = numberList.shift()
        result = numberList.reduce(getCalc(operation), result)
        console.log(operation)
    } else if (operation === 'x') {
        const calc = (a, b) => a * b
        result = numberList.shift()
        result = numberList.reduce(calc, result)
    } else if (operation === '-') {
        const calc = (a, b) => a - b
        result = numberList.shift()
        result = numberList.reduce(calc, result)
    } else if (operation === '÷') {
        const calc = (a, b) => a / b
        result = numberList.shift()
        result = numberList.reduce(calc, result)
    }

    return result
}

module.exports = {underAbstracted}