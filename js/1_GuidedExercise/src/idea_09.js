// Task: Use inline variable, inline method and ide hints make this code simpler.
const overlyObfuscated = (n) => {
    return isFirstNumber(n) || n === 2 ? 1 : getGeneralFibonacciNumber(n);
}

function getGeneralFibonacciNumber(n) {
    return getPreviousFibonacciNumber(n) + getPreviousPreviousFibonacciNumber(n);
}

function getPreviousPreviousFibonacciNumber(n) {
    return getMthPreviousFibonacciNumber(n, 2);
}

function getPreviousFibonacciNumber(n) {
    return getMthPreviousFibonacciNumber(n, 1);
}

function getMthPreviousFibonacciNumber(n, m) {
    return overlyObfuscated(n - m)
}

function isFirstNumber(n) {
    return n === 1
}

module.exports = {overlyObfuscated}
