// Task: Here the if condition is a negative statement (_not_ equal to 0). Follow the hint from Ruby Mine to make the if condition a positive statement.
const takeTheHint = (number) => {
    if (0 !== number % 2) {
        return number * 3 + 1
    } else {
        return number / 2
    }
}

module.exports = {takeTheHint}
