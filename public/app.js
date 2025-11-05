import { Invoice } from "./classes/invoice";
import { ListTemplate } from "./classes/ListTemplate";
import { Payment } from "./classes/Payment";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.new-item-form');
    const type = document.querySelector('#type');
    const tofrom = document.querySelector('#tofrom');
    const details = document.querySelector('#details');
    const amount = document.querySelector('#amount');
    //list template instance
    const ul = document.querySelector('ul');
    const list = new ListTemplate(ul);
    form.addEventListener('submit', (e) => {
        e.preventDefault(); //reloads by default
        let values;
        values = [tofrom.value, details.value, amount.valueAsNumber];
        let doc;
        if (type.value === 'invoice') {
            doc = new Invoice(...values);
        }
        else {
            doc = new Payment(...values);
        }
        list.render(doc, type.value, 'end');
    });
});
//GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'John', age: 40 });
// let docTwo = addUID()
console.log(docOne.age);
//ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType["Book"] = "BOOK";
    ResourceType["Author"] = "AUTHOR";
    ResourceType["Film"] = "FILM";
    ResourceType["Director"] = "DIRECTOR";
    ResourceType["Starring"] = "STARRING";
})(ResourceType || (ResourceType = {}));
;
const docFour = {
    uid: 1,
    resourceType: ResourceType.Film,
    data: "kawangware"
};
const docThree = {
    uid: 6463,
    resourceType: ResourceType.Director,
    data: ["james", "alekoo", "Maeriko"]
};
console.log(docThree);
console.log(docFour);
//ENUMS in login
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["ServerError"] = 500] = "ServerError";
})(Status || (Status = {}));
function getMessage(status) {
    if (status === Status.Success)
        return "Request successful!";
    if (status === Status.NotFound)
        return "Page not found.";
    return "Server error!";
}
console.log(getMessage(Status.NotFound));
//tuples --immutable arrays
let arr = ["jonte", 45, false];
arr[0] = 34;
console.log(arr);
let tup = ["kim", 45, false];
tup[0] = "james";
let student;
student = ["chun-lee", 6765];
