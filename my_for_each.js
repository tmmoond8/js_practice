var foo = ['a', 'b', 'c'];
foo[100] = 'f';
foo.myForEach = function(fn) {
    var keys = Object.keys(this);                   // 배열에 모든 키를 가져옴 배열의 키 : [ '0', '1', '2', '100', 'myForEach' ]
    var size = keys.length;
    for (var i = 0; i < size; i++ ) {
        let key = keys[i];                          // 인덱스로 키를 꺼냄
        if (typeof(this[key]) !== 'function') {     // 키를 이용하여 꺼낸 객체가 함수면 호출을 하지 않음.
            fn(this[key]);
        }
    }
}

foo.myForEach(function(element){
    console.log(element);
})