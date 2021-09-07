function divisibleByLeft(n) {
    return n.toString().split``.map((v, i, arr) => v % arr[i - 1] === 0)
}

// let n = 73312; 

// let numToStr = n.toString();

// console.log(typeof numToStr, numToStr);

// let splitNum = numToStr.split("");
// console.log(splitNum);



module.exports = divisibleByLeft;