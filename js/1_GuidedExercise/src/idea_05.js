// Task: Shift lines is sort of a matter of preference unless you're trying to do something specific.
// Use shift lines (with Alt + Shift + up and Alt + Shift + down) so that email is completely normalised
// first, then the phone number is normalised.
const shiftLines = (emailAddress, phoneNumber) => {
    emailAddress = emailAddress.toLowerCase()
    const emailAddressParts = emailAddress.split('+')
    if (emailAddressParts.length > 1) {
        emailAddress = emailAddressParts[0] + '@' + emailAddressParts[1].split('@')[1]
    }
    const phoneNumberParts = phoneNumber.split(' ')
    phoneNumber = phoneNumberParts.join('')
    phoneNumber = '+44' + phoneNumber.substring(1)
    return [emailAddress, phoneNumber]
}

module.exports = {shiftLines}
