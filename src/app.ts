const anchor = document.querySelector('a');
if (anchor){
console.log(anchor.href)
} else{
  console.log("error: could not find href")
}




// const form = document.querySelector('.new-item-form');
// console.log(form);
// export {};

//grabbing all elemsnts that need interactivity using their ids

document.addEventListener("DOMContentLoaded", () =>{
  const form = document.querySelector('.new-item-form') as HTMLFormElement ;

const type = document.querySelector('#type')as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom')as HTMLInputElement;
const details = document.querySelector('#details')as HTMLInputElement;
const amount = document.querySelector('#amount')as HTMLInputElement;

form.addEventListener('submit', (e:Event) =>{
  e.preventDefault();

console.log(
  type.value,
  tofrom.value,
  details.value,
  amount.valueAsNumber
)
})
})

