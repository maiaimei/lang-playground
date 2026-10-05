// 字面量创建对象
var eason = {
  name: "陈奕迅",
  sing: function (song) {
    console.log(song);
  },
};

// new Object()创建对象
var jay = new Object();
jay.name = "周杰伦";
jay.sing = function (song) {
  console.log(song);
};

// 构造函数创建对象
function Star(name) {
  this.name = name;
  this.sing = function (song) {
    console.log(song);
  };
}
var rene = new Star("刘若英");
var emil = new Star("周华健");

// 使用对象
console.log(typeof eason, eason);
console.log(eason.name);
eason.sing("十年");
jay.sing("红尘客栈");
rene.sing("后来");
emil.sing("朋友");
