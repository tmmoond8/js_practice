var numberAndString = function() {
    var b = 2 + '3';
    console.log(b);

    if (b == 23) {
        console.log('b == 23');
    }
    if (b === 23) {
        console.log('b === 23');
    }
    if (b === '23') {
        console.log('b === \'23\'');
    }
    console.log(typeof(2+'3'));
}

var numberAndBoolean = function() {
    var a = 32;
    var b = false;
    console.log(a+b);

    if (a + b) {
        console.log(32 + true);
    }
    console.log(typeof('' + false));
}
var naN = function() {
    console.log(3 + undefined);         // NaN
    console.log(3 + NaN)                        // NaN
    console.log(undefined + true);              // NaN
}

var onlyString = function() {
    console.log(typeof(3 + new Object()))
    console.log(typeof(true + new Object()))
    console.log(typeof('aaa' + new Object()));
    console.log(typeof('aaa' + undefined))
    console.log(typeof(undefined + new Object()))
    console.log(typeof('abc' + NaN))
}

var nullf = function() {
    console.log(typeof(null + {a:'aaa'}));
    console.log(null + {a:'aaa'});
}

var forin = function() {

    var person = {
        0 : 'aaa',
        1 : 'ccc',
        'ab' : 3
    };
    
    for(var key in person) {
        console.log('key: ' + key + ', value: ' + person[key]);
    }
}

var wtf  = function() {

    var numbers = [10, 20, 30, 40, 50];
    
    // 접근
    console.log(numbers[2]); //30
    
    // 추가
    numbers[10] = 70;
    console.log(numbers);           // [10, 20, 30, 40, 50, undefined, 70]
    console.log(numbers.length);    // 7
    
    numbers.push(80)
    console.log(numbers);
}

var objectOrder = function() {
    var object1 = [3, 4, 5, 6, 1];
    object1['10'] = 32;
    object1['8'] = 10;
    object1['ccc'] = 'ccc';
    object1['aaa'] = 'aaa';
    object1['bbb'] = 'bbb';
    object1[0] = 11111;
    object1[6] = 1292;
    console.log(object1);
    for (var key in object1) {
        console.log(key + " : " + object1[key]);
    }
}
var unicode = function() {
    console.log('e' +'\u0301');
    console.log('\u00E9');
    console.log( ('e' + '\u0301') == '\00E9');
    console.log('\u0301'.length);
    console.log(('e' + '\u0301').length);
}
// console.log(typeof(/javascript/gi));

var varience = function() {
    var my_chair;
    var _age;
    var $id;
    var synap소프트 = '사이냅소프트';
    console.log(synap소프트);
}

var semicolone = function() {
    var a = 3;
    var b = 4
    var c = 5; var d = 6
    var f
    =
    5
    console.log(f);
}

var semicolone2 = function() {
    var y = x + f
    (a+b).toString();
    // var y = x + f(a+b).toString();

    return
    true;       // return true; 가 아닌 return; true; 로 해석한다.

}
semicolone2();
// semicolone();
// objectOrder();
// wtf();
// forin();
// nullf();
// naN();

// numberAndUndefined();
// onlyString();
// numberAndBoolean();
// numberAndString();

