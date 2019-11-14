// array, object

var f = function f1() {
  console.log(1 + 1);
  console.log(1 + 2);
};
var a = [f];
a[0]();

var O = {
  func: f
};
O.func();
