var key = "3695"

exports.codeBreaker = (code) => {
    return code === key ? "XXXX" : compare(code)
}

compare = (code) => {
    var responseT = ""
    var responseP = ""
    for (var i = 0; i < code.length; i++) {
        if (code.charAt(i) == key.charAt(i)) {
            responseT += "X"
        }
        else if (key.includes(code.charAt(i))) {
            responseP += "_"
        }
    }
    return responseT+responseP
}

