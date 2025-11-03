const anchor = document.querySelector('a');
if (anchor) {
    console.log(anchor.href);
}
else {
    console.log("error: could not find href");
}
// const form = document.querySelector('.new-item-form');
// console.log(form);
// export {};
//grabbing all elemsnts that need interactivity using their ids
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.new-item-form');
    const type = document.querySelector('#type');
    const tofrom = document.querySelector('#tofrom');
    const details = document.querySelector('#details');
    const amount = document.querySelector('#amount');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
    });
});
export {};
