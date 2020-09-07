

// function in js 

var add = function(a, d) {
    return a + d; 
}
 console.log(add(1 ,2));
 console.log(add(10, 10));

 var add_another = add ;

 console.log(add_another(10,  20));

 // a function returns another function 
 var add_nth = function(a) {
    return function(b) { return a + b;};
 } 

 var add1 = add_nth(1);

 console.log(add1(10));

 var add2 = add_nth(2);

 console.log(add2(100));


 // object with function 
 myObject =  {value: 0, 
              inc: function(a) { this.value += a; }}

myObject.inc(10);
console.log(myObject.value);
myObject.inc(100);
console.log(myObject.value);

myObject.double = function() {
    var that = this;

    var helper = function() {that.value = add(that.value, that.value)};

    helper();
};

myObject.double(); 
console.log(myObject.value);

