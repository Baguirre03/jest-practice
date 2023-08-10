export function caeserCypher(cypher, shift) {
    let splitCypher = cypher.split('')
    let final = ''
    splitCypher.forEach((letter) => {
        let newIndex = alphaLower.indexOf(letter)
        let newShift = ''

        if (newIndex == 26) {
            newIndex = 0
        }
        if (newIndex + shift > 26) {
            newShift = (newIndex + shift) - 26
            final += higherThanTwentySix(newIndex, newShift, letter)
        }

        if (newIndex == -1) {
            final += upperCaseAndPunc(letter, shift)
        } else if (newShift == '') {
            final += alphaLower[newIndex + shift]
        }
    })
    return final
}

function upperCaseAndPunc(letter, shift) {
    let upperCase = alphaLower.map((letter) => letter.toUpperCase())
    let newIndex = upperCase.indexOf(letter)
    let newShift = ''

    if (newIndex + shift > 26) {
        newShift = (newIndex + shift) - 26
        return higherThanTwentySix(newIndex, newShift, letter)
    }

    if (newIndex == -1) {
        return letter
    } else {
        return upperCase[newIndex + shift]
    }
}

function higherThanTwentySix(newIndex, shift, letter) {
    if (letter != alphaLower[newIndex]) {
        return upperCasePastZero(shift)
    } else {
        return alphaLower[shift]
    }
}

function upperCasePastZero(shift) {
    let upperCase = alphaLower.map((letter) => letter.toUpperCase())
    return upperCase[shift]
}

let alphaLower = ['zerooo', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
