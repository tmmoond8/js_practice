var numbers = [1, 5, 10, 15];

numbers.myMap = function(fn) {
    var newNumbers = [];
    for (var key in this) {
        if (typeof(this[key]) !== 'function') {
            newNumbers.push(fn(this[key]));
        }
    }
    return newNumbers;
}
var roots = numbers.myMap(function(x) {
   return x * 2;
});


console.log(numbers);
console.log(roots);