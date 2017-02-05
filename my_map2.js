Numbers = function() {
    
}


var data = new Numbers();
data[0] = 1;
data[1] = 5;
data[2] = 10;
data[3] = 15;

Numbers.prototype.myMap = function(fn) {
    var newNumbers = [];
    for (var element in this) {
        // console.log(element);
        if (typeof(this[element]) !== 'function') {
            newNumbers.push(fn(this[element]));
        }
    }
    return newNumbers;
}
var roots = data.myMap(function(x) {
   return x * 2;
});


console.log(roots);
console.log(roots);