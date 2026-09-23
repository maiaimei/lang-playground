// -------------------- 作用域差异 --------------------
// var：函数作用域，穿透 if / for / while
// let / const：块级作用域， {} 内有效

function example() {
    if (true) {
        var a = 1;
        let b = 2;
        const c = 3;

        console.log(a); // 1
        console.log(b); // 2
        console.log(c); // 3
    }
    console.log(a); // 1
    console.log(b); // ReferenceError: b is not defined
    console.log(c); // ReferenceError: c is not defined
}

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0); // 输出：3 3 3
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0); // 输出：0 1 2
}

// -------------------- 变量提升与暂时性死区（TDZ） --------------------

// var：声明提升，初始化为 undefined
// let / const：声明提升，但未初始化前不可访问（TDZ）

console.log(x); // undefined
var x = 10;

// 上述代码相当于：
// var x;
// console.log(x); // undefined
// x = 10;

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

// -------------------- 重复声明 --------------------

var a = 1;
var a = 2;      // ✅

let b = 1;
let b = 2;      // ❌ SyntaxError: Identifier 'b' has already been declared

const c = 1;
const c = 2;    // ❌ SyntaxError: Identifier 'c' has already been declared


// -------------------- 重新赋值 --------------------

var a = 1;
a = 2; // ✅

let b = 1;
b = 2; // ✅

const c = 1;
c = 2; // ❌ TypeError: Assignment to constant variable.

// const 的“不可变”是引用不可变，只保证绑定的地址不变，不保证内容不变。
const obj = { name: 'Tom' };
obj.name = 'Jerry'; // ✅
obj = {};           // ❌ TypeError: Assignment to constant variable.

// -------------------- 全局对象行为 --------------------

var a = 1;
console.log(window.a); // 1

let b = 2;
console.log(window.b); // undefined
