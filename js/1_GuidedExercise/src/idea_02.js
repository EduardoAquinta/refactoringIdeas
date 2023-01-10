// Task: Rename numberListDouble to something more specific.
const renameAPoorMethodName = (numberList) => {
    return numberList.map(numberListDouble)
}

const numberListDouble = (number) => number * 2

module.exports = {renameAPoorMethodName}
