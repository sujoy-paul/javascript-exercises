const reverseString = function(string) {
    let ans = "";
    for(let i = 0; i < string.length; i++) ans = string[i] + ans;
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
