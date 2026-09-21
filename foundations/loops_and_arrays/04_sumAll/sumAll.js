const sumAll = function(a, b) {
    if(!(n => typeof a === "number" && isFinite(a) && n % 1 === 0)(a) || !(n => typeof b === "number" && isFinite(b) && n % 1 === 0)(b) || a < 0 || b < 0) return "ERROR";
    if(a > b) return sumAll(b, a);
    let sum = 0;
    for(let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
