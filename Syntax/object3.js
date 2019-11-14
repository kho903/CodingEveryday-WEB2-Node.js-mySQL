// var v1 = "v1";
// // 10000 code
// v1 = "KIM";
// //이렇게 하면 'v1'을 원하는 사람들이
// //헷갈려 오류 발생확률 up
// var v2 = "v2";

// 위를 방지하기 위해
var q = {
  v1: "v1",
  v2: "v2",
  f1: function() {
    console.log(this.v1);
    //객체의 이름이 바뀌었을때 오류방지 this
  },
  f2: function() {
    console.log(this.v2);
  }
};

q.f1();
q.f2();
