const greet = (user) => {
    console.log(`${user.name} says hello`);
};
const user = {
    name: "john",
    uid: 89
};
greet(user);
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(2, 4, "hm");
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7); //result will infer the datatype from the return
console.log(result);
export {};
//# sourceMappingURL=sandBox.js.map