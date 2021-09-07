function arrayOfMultiples (num, length) {
//Implementación  
let arr = [];

    while (length > 0) {

        let result = ((length--) * (num));
        
        arr.push(result);
    }

    return arr.reverse();
};

arrayOfMultiples(5,7);

module.exports = arrayOfMultiples;

