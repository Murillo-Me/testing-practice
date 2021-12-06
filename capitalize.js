function capitalize(str) {
    str = str[0].toUpperCase() + str.substring(1)

    console.log(str);
    return str
}

module.exports = capitalize;