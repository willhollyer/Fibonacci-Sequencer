
const fibonacci = function(member) {
    if (member < 0) return "OOPS";
    if (member ==0) return 0;
    let a = 0;
    let b = 1;
    for (let i =1; i< member; i++) {
        const temp = b;
        b = a +b;
        a = temp;
    }
    return b;
};
