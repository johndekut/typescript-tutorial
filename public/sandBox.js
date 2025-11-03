//let greet = Function;
let greet;
//a and b are just placeholders, i give them the value name and greeting in the function
greet = (name, greeting) => {
    // name= "John"
    // greeting = "how are you guys doing?"
    console.log(`${name} says ${greeting}`);
};
//below is called a fucntion signatuure
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetails;
logDetails = (student) => {
    console.log(`${student.name} is ${student.age} years old`);
};
logDetails({ name: "John", age: 34 });
export {};
//# sourceMappingURL=sandBox.js.map