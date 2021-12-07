function capitalize(str) {
    if (!str) return str
    str = str[0].toUpperCase() + str.substring(1)
    return str
}

module.exports = capitalize;