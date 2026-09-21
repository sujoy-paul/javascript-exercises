const repeatString = function(string, freq) {
    if(freq < 0) return "ERROR";
    let ans = "";
    for(let i = 1; i <= freq; i++) ans += string;
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
