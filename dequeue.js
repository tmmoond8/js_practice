var dequeue = function() {
    var deq = {};
    var start = 0;
    var end = 0;
    var size = 0;
    return {
        size : function() {
            return this.size;
        },
        isEmpty : function() {
            return (size <= 0)? true: false;
        },
        showDeq : function() {
            for (var idx in deq) {
                console.log(idx + " : " + deq[idx]);;
            }
        },
        // 스택의 push
        push : function(data) {
            if(this.isEmpty()) {
                deq[end] = data;
            } else {
                deq[++end] = data;
            }
            size++;
        },
        // 스택의 pop
        pop : function() {
            if (this.isEmpty()) {
                return "dequeue is empty"
            } else {
                size--;    
                return deq[end--];
            }
        },
        // 큐의 insert
        unshift : function(data) {
            if (this.isEmpty()) {
                deq[start] = data;
            } else {
                deq[--start] = data;
            }
            size++;
        },
        // 큐의 poll
        shift : function() {
            if (this.isEmpty()) {
                return "dequeue is empty"
            } else {
                size--;
                return deq[start++];
            }
        }
    }

}

var foo = dequeue();
foo.push("kaka")
foo.unshift(199)
foo.push("soso")
foo.unshift(78)
console.log(foo.shift());
console.log(foo.shift());
foo.unshift(323)
foo.push("hello")
foo.unshift(1111111)
console.log(foo.shift());
console.log(foo.shift());
foo.push("aii")
console.log(foo.pop());
foo.unshift(877)
console.log(foo.pop());
foo.push("god")
foo.unshift(2000000)
foo.showDeq();
console.log(foo.shift());
console.log(foo.shift());
console.log(foo.shift());
console.log(foo.shift());
console.log(foo.shift());
console.log(foo.pop());
console.log(foo.shift());