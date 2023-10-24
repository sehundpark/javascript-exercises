const fibonacci = function(x) {
    if (x < 0) return "OOPS";
    if (x === 0) return 0;

    a = 1;
    b = 0;

    for (i = 2; i <= x; i++) {
        let c = a + b;
        b = a;
        a = c;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
