// Task: Use introduce parameter to replace the double and triple with a single function that takes an argument.
const similarFunctions = (n, x = getX(n)) => {
    return x
}
function getX(n) {
    return [n * 2, n * 3];
}


module.exports = {similarFunctions}
