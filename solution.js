function solution(str, ending){
    let strFlip = str.split('').reverse()
    let endingFlip = ending.split('').reverse()
    let result = false
    console.log(strFlip, endingFlip)
    if (endingFlip.length === 0) {
        return true
    } else {
        for (let i = 0; i < endingFlip.length; i++) {
            if (endingFlip[i] !== strFlip[i]) {
                return false
            } else if (endingFlip[i] === strFlip[i]) {
                result = true
            } else {
                result = false
            }
        }
    }
    return result
}

console.log(solution('abc', 'bc')) // true
console.log(solution('abc', 'd')) // false
console.log(solution('sumo', 'omo')) // false
console.log(solution(':-)', ':-(')) // false


// Alternate Solution


const solutions = (str, ending) => {
    return str.endsWith(ending)
}

console.log(solutions('abc', 'bc')) // true
console.log(solutions('abc', 'd')) // false
console.log(solutions('sumo', 'omo')) // false
console.log(solutions(':-)', ':-(')) // false
