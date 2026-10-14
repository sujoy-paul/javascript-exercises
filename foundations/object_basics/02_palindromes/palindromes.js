function isUCLetter(letter) {
    return 65 <= letter.charCodeAt(0) && letter.charCodeAt(0) <= 90;
}
function isNumber(letter) {
    return 48 <= letter.charCodeAt(0) && letter.charCodeAt(0) <= 57;
}
const palindromes = function (string) {
    for (let left = 0, right = string.length - 1; left < right;) {
        const a = string[left].toUpperCase(), b = string[right].toUpperCase();
        if (!(isUCLetter(a) || isNumber(a)) && !(isUCLetter(b) || isNumber(b))) {
            left++;
            right--;
        }
        else if (!(isUCLetter(a) || isNumber(a))) left++;
        else if (!(isUCLetter(b) || isNumber(b))) right--;
        else {
            if (a !== b) return false;
            left++;
            right--;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
