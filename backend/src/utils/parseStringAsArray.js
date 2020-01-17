module.exports = function parseArrayAsString(arrayAsString) {
    return arrayAsString.split(',').map(text => text.trim());
}